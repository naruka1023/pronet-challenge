import { createReducer, on } from '@ngrx/store';
import * as ListActions from './list.actions';
import { Character } from '../../models/detail';

export interface ListState {
  list: Character[];
  favorite: {
    [key: string]: Character;
  };
  loading: boolean;
  error: string | null;
  page: number;
}

export const initialState: ListState = {
  list: [],
  favorite: {},
  loading: true,
  error: null,
  page: 1,
};

export const listReducer = createReducer(
  initialState,
  on(ListActions.getList, (state, { page }) => ({
    ...state,
    loading: true,
    page,
  })),

  on(ListActions.deleteFavorite, (state, { index }) => {
    const { [index]: removed, ...rest } = state.favorite; // destructure to omit key
    return {
      ...state,
      favorite: rest,
    };
  }),
  on(ListActions.createFavorite, (state, { index }) => ({
    ...state,
    favorite: {
      ...state.favorite,
      [index]: state.list[index],
    },
  })),
  on(ListActions.getListSuccess, (state, { list }) => ({
    ...state,
    list: [...state.list, ...list],
    loading: false,
  })),
  on(ListActions.incrementCurrentPage, (state) => ({
    ...state,
    page: state.page + 1,
  })),
  on(ListActions.getListFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
