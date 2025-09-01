import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ListState } from './list.reducers';

export const selectListState = createFeatureSelector<ListState>('list');

export const favoriteFlag = (index: number) =>
  createSelector(selectListState, (state) => state?.favorite?.[index.toString()] !== undefined);
export const selectItemByIndex = (index: number) =>
  createSelector(selectListState, (state) => state.list[index]);

export const selectList = createSelector(selectListState, (state) => state.list ?? []);
export const selectLoading = createSelector(selectListState, (state) => state.loading);
export const selectPage = createSelector(selectListState, (state) => state.page);
export const selectError = createSelector(selectListState, (state) => state.error);
export const selectFavorites = createSelector(selectListState, (state) =>
  Object.values(state.favorite)
);
