export type Reservation = {
  id: number;
  item: string;
  name: string;
  time: string;
  date: string;
  phone: string;
  address: string;
  price: string;
  manager: string;
};

export type ReservationList = Reservation[];

export type Rider = {
  id: number;
  name: string;
  age: number;
  phone: string;
  address: string;
  email: string;
  benefit: number;
};

export type RiderInfoList = Rider[];
