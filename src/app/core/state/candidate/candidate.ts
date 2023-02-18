import { Location } from '../location';

export interface CandidateRequest {
  id: string;
  name?: string;
  firstName: string;
  lastName: string;
  locations: Location;
  position: string;
  attachment: string;
  aboutMe: string;
}
export interface CandidateResponse {
  id: string;
  name?: string;
  firstName: string;
  lastName: string;
  locations: Location;
  position: string;
  attachment: string;
  aboutMe: string;
}
