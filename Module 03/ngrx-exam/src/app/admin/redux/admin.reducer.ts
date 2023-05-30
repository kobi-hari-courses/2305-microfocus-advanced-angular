import { createReducer } from '@ngrx/store';
import { INITIAL_ADMIN_STATE } from './admin.state';
export const adminReducer = createReducer(INITIAL_ADMIN_STATE);