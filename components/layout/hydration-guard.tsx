"use client";

import { useEffect } from "react";

export function HydrationGuard() {
  useEffect(() => {
    window.dispatchEvent(new Event("csde:hydrated"));
  }, []);

  return null;
}
