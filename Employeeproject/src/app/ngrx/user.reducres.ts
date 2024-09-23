import { createReducer, on } from '@ngrx/store';
import { setUser, resetUser } from './user.actions';
export const initialstate = '';

export const userReducer = createReducer(
  initialstate,
  on(setUser, (state, action) => (state = action.username)),
  on(resetUser, (state) => (state = ''))
);
