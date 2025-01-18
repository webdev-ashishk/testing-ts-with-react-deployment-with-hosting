// this does not required import and export because of global types

declare global {
  type _StudentInfo = {
    id: number;
    name: string;
    email: string;
  };

  type _AdminInfo = _StudentInfo & {
    id: number;
    isAdmin: boolean;
  };
}
