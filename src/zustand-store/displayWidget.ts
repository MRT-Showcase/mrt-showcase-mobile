import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "./type/user";
import { IMenuItem, menuItems } from "../constants/menuItem";

interface DisplayWidgetState {
  displayWidgets: IMenuItem[];
  targetId: number | undefined;
  replaceWidget: (targetId: number, newWidgetId: number) => void;
  setTargetId: (id: number) => void;
  removeTargetId: () => void;
}

export const useDisplayWidgets = create<DisplayWidgetState>()(
  persist(
    (set, get) => ({
      displayWidgets: menuItems.slice(0, 3),
      targetId: undefined,
      replaceWidget: (targetId, newWidgetId) =>
        set(() => {
          let displayWidgets = get().displayWidgets;
          const isItemAlreadyDisplayed = displayWidgets.some(
            (widget) => widget.id == newWidgetId
          );

          if (!isItemAlreadyDisplayed) {
            displayWidgets[targetId] = menuItems[newWidgetId];
            return { displayWidgets, targetId: undefined };
          } else {
            return { ...get(), targetId: undefined };
          }
        }),
      setTargetId: (id: number) => set({ targetId: id }),
      removeTargetId: () => set({ targetId: undefined }),
    }),
    {
      name: "widgets-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
