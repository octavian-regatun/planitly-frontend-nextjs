import create from "zustand";

interface IpStore {
  ip?: string;
  setIp: (ip: string) => void;
}

export const useIpStore = create<IpStore>((set) => ({
  ip: undefined,
  setIp: (ip) => set(() => ({ip})),
}));
