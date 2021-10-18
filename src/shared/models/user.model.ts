export interface ILocation {
  address: string;
  city: string;
  cap: string;
}

export interface IProduct {
  name: string;
  price: number;
}

export interface IOrder {
  id: string;
  date: string;
  product: IProduct;
  quantity: number;
}

export interface IUser {
  id: string;
  name: string;
  surname: string;
  mail: string;
  imageUrl: string;
  location: ILocation;
  orders: IOrder[];
}

export class User implements IUser {
  private constructor(
    public id = '',
    public name= '',
    public surname= '',
    public mail= '',
    public imageUrl= '',
    public location: ILocation = { address: '', city: '', cap: '' },
    public orders: IOrder[] = []
  ) { }

  public static Build(user: IUser): User {
    return new this(
      user.id,
      user.name,
      user.surname,
      user.mail,
      user.imageUrl,
      user.location,
      user.orders
    );
  }

  public get fullName(): string {
    return `${ this.name } ${ this.surname }`;
  }

  public get fullLocation(): string {
    return `${ this.location.address }, ${ this.location.city }`;
  }
}
