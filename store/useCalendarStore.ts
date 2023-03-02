import create from "zustand";

interface CalendarStore {
  date: Date;
  nextMonth: () => void;
  prevMonth: () => void;
}

export const useCalendarStore = create<CalendarStore>((set) => ({
  date: new Date(),
  nextMonth: () =>
    set((prevState) => {
      const date = new Date(prevState.date);
      date.setMonth(date.getMonth() + 1);
      return {date};
    }),
  prevMonth: () =>
    set((prevState) => {
      const date = new Date(prevState.date);
      date.setMonth(date.getMonth() - 1);
      return {date};
    }),
}));
