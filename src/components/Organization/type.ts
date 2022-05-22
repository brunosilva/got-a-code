export interface IUser {
  id: string;
  level: number;
  name: string;
  title: string;
  children?: [{}];
}