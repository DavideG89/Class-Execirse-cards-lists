import { IUser } from './user.model';

export const USERS: IUser[] = [
  {
    id: 'asld32nm213',
    name: 'Mario',
    surname: 'Rossi',
    mail: 'mario.rossi@gmail.com',
    imageUrl: 'https://www.focus.it/images/2021/02/22/gatto_1020x680.jpg',
    location: {
      address: 'Via Roma 100',
      city: 'Roma',
      cap: '00010',
    },
    orders: [
      {
        id: '128i1u2g3u1',
        date: '2021-09-21T13:00:00',
        product: {
          name: 'Crocchette per gatti',
          price: 10.0,
        },
        quantity: 2,
      },
      {
        id: '12iuh241',
        date: '2021-09-22T18:00:00',
        product: {
          name: 'Crocchette per cani',
          price: 20.0,
        },
        quantity: 1,
      },
      {
        id: '43byu123y',
        date: '2021-09-20T18:00:00',
        product: {
          name: 'Shampoo antipulci per cani',
          price: 10.0,
        },
        quantity: 4,
      },
    ],
  },
  {
    id: 'jsdfoi3424',
    name: 'Maria',
    surname: 'Rossa',
    mail: 'maria.rossa@gmail.com',
    imageUrl:
      'https://www.romatoday.it/~media/horizontal-hi/7834549861253/gatti-8.jpg',
    location: {
      address: 'Via Palermo 34',
      city: 'Palermo',
      cap: '90100',
    },
    orders: [
      {
        id: 'asioh91km',
        date: '2021-09-19T13:00:00',
        product: {
          name: 'Tiragraffi per gatti',
          price: 40.0,
        },
        quantity: 1,
      },
      {
        id: '12iuh241',
        date: '2021-09-18T18:23:00',
        product: {
          name: 'Ciotola per gatti',
          price: 5.0,
        },
        quantity: 4,
      },
    ],
  },
  {
    id: 'jkhn123123',
    name: 'Pino',
    surname: 'Zio',
    mail: 'zio.pino@gmail.com',
    imageUrl:
      'https://www.larcadinoepetshop.it/wp-content/uploads/2019/03/articolo-gatto.jpg',
    location: {
      address: 'Via Zio 23',
      city: 'Palermo',
      cap: '90100',
    },
    orders: [
      {
        id: '213kjnd',
        date: '2021-04-18T10:20:00',
        product: {
          name: 'Cuccia per cani',
          price: 80.0,
        },
        quantity: 1,
      },
      {
        id: 'kj1bn3ui2',
        date: '2021-09-18T18:23:00',
        product: {
          name: 'Crocchette per cani',
          price: 15.0,
        },
        quantity: 5,
      },
      {
        id: 'k12h3lk123',
        date: '2021-09-20T14:34:00',
        product: {
          name: 'Pettorina per cani',
          price: 25.0,
        },
        quantity: 1,
      },
      {
        id: 'ujih1231',
        date: '2021-09-21T08:14:00',
        product: {
          name: 'Guinzaglio per cani',
          price: 15.0,
        },
        quantity: 1,
      },
    ],
  },
];
