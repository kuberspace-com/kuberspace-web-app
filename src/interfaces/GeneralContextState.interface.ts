import { User } from './User.interface';

export interface GeneralContextState {
  page?: string | null;
  component?: string | null;
  user: User;
}
