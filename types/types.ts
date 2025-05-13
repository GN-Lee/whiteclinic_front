export type Reservation = {
  id: number;
  item: string;
  name: string;
  time: string;
  date: string;
  phone: string;
  address: string;
  price: string;
  manager: string; // 담당 기사[fk]
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

export type Verification = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  benefit: number;
  status: string[];
};

export type VerificationList = Verification[];
