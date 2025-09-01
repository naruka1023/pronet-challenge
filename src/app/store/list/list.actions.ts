import { createAction, props } from '@ngrx/store';
import { Character } from '../../models/detail';

export const getList = createAction('[List] Get List', props<{ page: number; limit: number }>());

export const getListSuccess = createAction(
  '[List] Get List Success',
  props<{ list: Character[] }>()
);
export const getListFailure = createAction('[List] Get List Failure', props<{ error: string }>());

export const scrollEvent = createAction('[List] Listen Scroll Event');

export const incrementCurrentPage = createAction('[List] Increment Current Page');

export const filterList = createAction('[List] Filter List', props<{ user: any }>());

export const getFavorites = createAction('[List] Get Favorites', props<{ error: string }>());

export const createFavorite = createAction('[List] Create Favorite', props<{ index: number }>());

export const deleteFavorite = createAction('[List] Delete Favorite', props<{ index: number }>());

export const getDetail = createAction('[List] Get Detail', props<{ error: string }>());

export const logout = createAction('[List] Logout');
