import { clsx, type ClassValue } from 'clsx';

/**
 * Merges multiple class names into a single string.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
