import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IMenuItem, menuItems } from "../constants/menuItem";

interface DisplayWidgetState {
  displayWidgets: IMenuItem[];
  targetId: number | undefined;
  replaceWidget: (targetId: number, newWidgetId: number) => void;
  setTargetId: (id: number) => void;
  removeTargetId: () => void;
}

export const useDisplayWidgetsStore = create<DisplayWidgetState>()(
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
            const newDisplayWidgets = displayWidgets.map((widget) => {
              if (widget.id == targetId) {
                return menuItems[newWidgetId];
              } else {
                return widget;
              }
            });

            return { displayWidgets: newDisplayWidgets, targetId: undefined };
          } else {
            return { ...displayWidgets, targetId: undefined }; // No need to modify displayWidgets
          }
        }),
      setTargetId: (id: number) => set({ targetId: id }),
      removeTargetId: () => set({ targetId: undefined }),
    }),
    {
      name: "widget-storag",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
