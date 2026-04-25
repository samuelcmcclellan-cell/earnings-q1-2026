import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function fmtPct(value: number, digits = 1): string {
  if (Number.isNaN(value)) return "—";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(digits)}%`;
}

export function fmtBn(value: number): string {
  if (Math.abs(value) >= 1000) return `$${(value / 1000).toFixed(2)}T`;
  if (Math.abs(value) >= 1) return `$${value.toFixed(2)}B`;
  return `$${(value * 1000).toFixed(0)}M`;
}

export function fmtPrice(value: number): string {
  return `$${value.toFixed(2)}`;
}

export function reactionTone(pct: number): "pos" | "neg" | "flat" {
  if (pct > 1) return "pos";
  if (pct < -1) return "neg";
  return "flat";
}
