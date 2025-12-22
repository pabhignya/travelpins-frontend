import { User } from './user.model';

export interface TravelPin {
  id: number;
  locationName: string;
  latitude: number;
  longitude: number;
  notes: string;
  photoUrl: string;
  createdAt: string; // ISO date string
  user: User;
}
