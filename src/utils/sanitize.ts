/**
 * Utility functions for sanitizing form inputs and calculations
 */

export function sanitizeText(input: string, maxLength: number = 100): string {
  if (!input) return '';
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, '');
}

export function sanitizeMultilineText(input: string, maxLength: number = 500): string {
  if (!input) return '';
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, '');
}

export function sanitizePhone(input: string): string {
  if (!input) return '';
  return input.replace(/[^\d+()\s-]/g, '').trim().slice(0, 25);
}

export function sanitizeNumber(input: number | string, min: number = 0, max: number = 100000000): number {
  const num = typeof input === 'string' ? parseFloat(input) : input;
  if (isNaN(num)) return min;
  return Math.min(Math.max(num, min), max);
}
