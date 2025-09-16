// store/useDevices.ts
import { create } from "zustand";
// (optional) import { persist } from "zustand/middleware";

export type Device = {
  id: number;
  operator: string; // e.g., "telkomsel" | "xl" | "indosat" | ...
  rsrq: number;
  lat: number;
  lng: number;
};

type State = {
  devices: Device[];
  operatorFilter: string;      // empty = no filter
  selectedId?: number;

  setDevices: (list: Device[]) => void;
  setOperatorFilter: (op: string) => void; // pass '' to clear
  selectDevice: (id?: number) => void;     // pass undefined to clear
};

// If you want persistence across refreshes, wrap with persist(..., { name: 'devices-store' })
export const useDevicesStore = create<State>()((set) => ({
  devices: [],
  operatorFilter: "",
  selectedId: undefined,

  setDevices: (list) => set({ devices: list }),
  setOperatorFilter: (op) => set({ operatorFilter: op }),
  selectDevice: (id) => set({ selectedId: id }),
}));
