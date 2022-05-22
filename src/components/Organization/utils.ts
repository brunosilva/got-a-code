export const dataUser = {
  id: 'n1',
  level: 0,
  name: 'Lao Lao',
  title: 'general manager',
  children: [
    { id: 'n2', level: 1, name: 'Bo Miao', title: 'department manager' },
    {
      id: 'n3',
      level: 1,
      name: 'Su Miao',
      title: 'department manager',
      children: [
        { id: 'n4', level: 2, name: 'Tie Hua', title: 'senior engineer' },
        {
          id: 'n5',
          level: 2,
          name: 'Hei Hei',
          title: 'senior engineer',
          children: [
            { id: 'n6', name: 'Dan Dan', title: 'engineer' },
            { id: 'n7', name: 'Xiang Xiang', title: 'engineer' }
          ]
        },
        { id: 'n8', level: 2, name: 'Pang Pang', title: 'senior engineer' }
      ]
    },
    { id: 'n9', level: 1, name: 'Hong Miao', title: 'department manager' },
    {
      id: 'n10',
      level: 1,
      name: 'Chun Miao',
      title: 'department manager',
      children: [{ id: 'n11', name: 'Yue Yue', title: 'senior engineer' }]
    }
  ]
}