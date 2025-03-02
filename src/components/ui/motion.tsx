"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

// Fade In animation component
interface FadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export const FadeIn = ({
                           children,
                           delay = 0,
                           duration = 0.5,
                           className = '',
                       }: FadeInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Slide In animation component
interface SlideInProps {
    children: ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down';
    delay?: number;
    duration?: number;
    className?: string;
}

export const SlideIn = ({
                            children,
                            direction = 'up',
                            delay = 0,
                            duration = 0.5,
                            className = '',
                        }: SlideInProps) => {
    const directions = {
        left: { x: -100, y: 0 },
        right: { x: 100, y: 0 },
        up: { x: 0, y: 100 },
        down: { x: 0, y: -100 },
    };

    const initialPosition = directions[direction];

    return (
        <motion.div
            initial={{ ...initialPosition, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{ ...initialPosition, opacity: 0 }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Staggered animation for lists
interface StaggerProps {
    children: ReactNode[];
    staggerDelay?: number;
    duration?: number;
    className?: string;
}

export const StaggerContainer = ({
                                     children,
                                     staggerDelay = 0.1,
                                     duration = 0.5,
                                     className = '',
                                 }: StaggerProps) => {
    return (
        <div className={className}>
            <AnimatePresence>
                {children.map((child, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration, delay: index * staggerDelay }}
                    >
                        {child}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

// Scale animation component
interface ScaleProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export const Scale = ({
                          children,
                          delay = 0,
                          duration = 0.5,
                          className = '',
                      }: ScaleProps) => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Page transition component
interface PageTransitionProps {
    children: ReactNode;
    className?: string;
}

export const PageTransition = ({
                                   children,
                                   className = '',
                               }: PageTransitionProps) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};