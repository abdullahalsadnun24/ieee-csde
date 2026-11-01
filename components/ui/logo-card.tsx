"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

type LogoCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function LogoCard({ children, className, delay = 0 }: LogoCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="h-full [perspective:1100px]"
      initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      <motion.div
        className="h-full"
        animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 3.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 0.25,
              }
        }
      >
        <motion.div
          className={cn("logo-card glass-sheen h-full", className)}
          whileHover={
            reduceMotion
              ? undefined
              : { y: -14, scale: 1.04, rotateX: 7, rotateY: -4 }
          }
          whileTap={reduceMotion ? undefined : { scale: 0.985 }}
          transition={{ duration: 0.38, ease }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
