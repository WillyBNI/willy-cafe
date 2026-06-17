import type { WindowData } from "../types/windowTypes";

export const defaultWindows: WindowData[] = [
  {
    id: "test-window",
    title: "I AM A TEST WINDOW",
    isOpen: true,

    x: 40,
    y: 40,

    width: 500,
    height: 350,

    minWidth: 300,
    minHeight: 200,

    isMaximized: false,

    restoreRect: {
      x: 40,
      y: 40,
      width: 500,
      height: 350,
    },

    zIndex: 1,
  } ]
