export interface User {
  userId: string | null;
  userAuthToken: string | null;
  loggedIn: boolean;
  userPermissions: object;
}
