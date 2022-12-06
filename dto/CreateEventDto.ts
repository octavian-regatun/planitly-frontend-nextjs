export interface CreateEventDto {
  title: string;
  description: string;
  color: string;
  allDay: boolean;
  startAt: Date | null;
  endAt: Date | null;
}
