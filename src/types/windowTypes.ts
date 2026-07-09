import type { ComponentType } from "react";

export interface WindowData {
    id: string;

    title: string;

    isOpen: boolean;

    x: number;
    y: number;

    width: number;
    height: number;

    minWidth: number;
    minHeight: number;

    isMaximized: boolean;

    restoreRect: {
        x: number;
        y: number;
        width: number;
        height: number;
    };

    zIndex: number;

    content?: ComponentType;
}