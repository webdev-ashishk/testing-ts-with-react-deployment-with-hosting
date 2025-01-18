export type _StudentInfo = {
  id: number;
  name: string;
  email: string;
};

export type _AdminInfo = _StudentInfo & {
  id: number;
  isAdmin: boolean;
};
