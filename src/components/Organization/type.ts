export interface IUser {
  id: string;
  level: number;
  name: string;
  title: string;
  children?: [{}];
}
export interface ITreeUser {
  id: string;
  level: number;
  name: string;
  title: string;
  children: [
    { id: string; level: number; name: string; title: string; },
    {
      id: string;
      level: number;
      name: string;
      title: string;
      children: [
        { id: string; level: number; name: string; title: string; },
        {
          id: string;
          level: number;
          name: string;
          title: string;
          children: [
            { id: string; name: string; title: string; },
            { id: string; name: string; title: string; }
          ]
        },
        { id: string; level: number; name: string; title: string; }
      ]
    },
    { id: string; level: number; name: string; title: string; },
    {
      id: string;
      level: number;
      name: string;
      title: string;
      children: [{ id: string; name: string; title: string; }]
    }
  ]
}