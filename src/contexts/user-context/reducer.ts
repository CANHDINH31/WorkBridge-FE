import { Action, IUserType } from './types';

export const reducer = (state: IUserType, action: Action): IUserType => {
  switch (action.type) {
    case 'SIGNIN': {
      const { user, accessToken } = action.payload;
      return { ...state, user, accessToken };
    }
    case 'SIGNOUT': {
      return { ...state, user: null, accessToken: null };
    }
    default:
      return state;
  }
};
