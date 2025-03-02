import React from "react";
import {ToastClassnames} from "sonner";
import { toast as sonnerToast } from "sonner";

interface ToastOptions {
    className?: string;
    closeButton?: boolean;
    descriptionClassName?: string;
    style?: React.CSSProperties;
    cancelButtonStyle?: React.CSSProperties;
    actionButtonStyle?: React.CSSProperties;
    duration?: number;
    unstyled?: boolean;
    classNames?: ToastClassnames;
    closeButtonAriaLabel?: string;
}

type ToastProps = {
    title?: string;
    description?: string;
    variant?: "default" | "destructive";
};


export function useToast() {
    const toast = ({ title, description, variant = "default", ...props }: ToastProps & Omit<ToastOptions, "variant">) => {
        const options: ToastOptions = {
            ...props,
        };

        if (variant === "destructive") {
            return sonnerToast.error(title, {
                description,
                ...options,
            });
        }

        return sonnerToast(title || "", {
            description,
            ...options,
        });
    };

    return { toast };
}