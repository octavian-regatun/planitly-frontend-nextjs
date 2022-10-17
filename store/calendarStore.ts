import create from "zustand";

interface CalendarStore {
  date: Date;
  nextMonth: () => void;
  prevMonth: () => void;
}

export const useCalendarStore = create<CalendarStore>((set) => ({
  date: new Date(),
  nextMonth: () =>
    set((prevState) => ({ date: new Date(prevState.date.getMonth() + 1) })),
  prevMonth: () =>
    set((prevState) => ({ date: new Date(prevState.date.getMonth() - 1) })),
}));
