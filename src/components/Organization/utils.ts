import { ITreeUser } from "./type";

export const dataUser: ITreeUser = {
  id: 'n1',
  level: 0,
  name: 'Lao Lao',
  title: 'general manager',
  children: [
    { 
      id: 'n2', 
      level: 1, 
      name: 'Blz blz', 
      title: 'department manager'
    },
    {
      id: 'n3',
      level: 1,
      name: 'Tô suave',
      title: 'department manager',
      children: [
        { id: 'n4', level: 2, name: 'Tia Hua', title: 'senior engineer' },
        {
          id: 'n5',
          level: 2,
          name: 'Hei Hei',
          title: 'senior engineer',
          children: [
            { id: 'n6', name: 'Dan Dan', title: 'engineer' },
            { id: 'n7', name: 'Zas zas', title: 'engineer' }
          ]
        },
        { id: 'n8', level: 2, name: 'Ping Pong', title: 'senior engineer' }
      ]
    },
    { 
      id: 'n9', 
      level: 1, 
      name: 'Miao miao', 
      title: 'department manager' 
    },
    {
      id: 'n10',
      level: 1,
      name: 'Au au',
      title: 'department manager',
      children: [{ id: 'n11', name: 'Yeah Yeah', title: 'senior engineer' }]
    }
  ]
}