export interface GetEventDto {
  id: string;
  title: string;
  description: string;
  picture?: string;
  color: string;
  allDay: boolean;
  startAt: string;
  endAt: string;
  authorId: number;
  createdAt: string;
  updatedAt: string;
}
