import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Smart merge of Tailwind CSS classes.
 * Combines clsx for conditional classes with tailwind-merge for deduplication.
 *
 * @param inputs - Class values to merge
 * @returns Merged and deduplicated class string
 *
 * @example
 * cn("px-2", isError && "text-red-500")
 * cn("px-2 py-1", "px-4") // returns "py-1 px-4"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
