export interface CreateEventDto {
  title: string;
  description: string | null;
  color: string;
  allDay: boolean;
  startAt: Date | null;
  endAt: Date | null;
  picture: string;
}
