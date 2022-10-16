export default interface Event {
  id?: number;
  title: string;
  description?: string;
  picture?: string;
  color: string;
  allDay: boolean;
  startAt: Date;
  endAt: Date;
  locationId?: number;
  createdAt: Date;
  updatedAt: Date;
}
