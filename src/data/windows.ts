import type { WindowData } from "../types/windowTypes";
import Doom from "../apps/doom/doom";

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
    content: undefined
  },
  {
    id: "doom-window",
    title: "DOOM",
    isOpen: true,
    x: 40,
    y: 40,
    width: 500,
    height: 350,
    minWidth: 320,
    minHeight: 200,
    isMaximized: false,
    restoreRect: {
      x: 40,
      y: 40,
      width: 500,
      height: 350,
    },
    zIndex: 2,
    content: Doom
  }
]