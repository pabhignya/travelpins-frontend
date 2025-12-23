import { Pin } from './pin.model';
import { User } from './user.model';

export interface TravelPin {
  pin: Pin; // ISO date string
  user: User;
}
