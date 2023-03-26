import { Dispatch, SetStateAction } from 'react';
import { GeneralContextState } from './GeneralContextState.interface';

export interface GeneralContext {
  state: GeneralContextState;
  setComponent: Dispatch<SetStateAction<string | boolean>>;
  setUserId: Dispatch<SetStateAction<string | null>>;
  setPage: Dispatch<SetStateAction<string>>;
  createCookie: (cookieName: string, expirationDate: Date | null, value: JSON)=> void;
  getCookie: (cookieName: string)=> void;
  deleteCookie: (cookieName: string)=> void;
  logout: ()=> void;
  login: (username: string, password: string)=> void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  NAVIGATE: (url: string, componentToChange: string | boolean | null, callback?: ()=> any)=> void;
}
