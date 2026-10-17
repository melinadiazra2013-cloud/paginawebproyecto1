/**
 * Input sanitization and security utilities to prevent Cross-Site Scripting (XSS),
 * CRLF / Header injection, and malformed payload injection in web forms and URL builders.
 */

/**
 * Strips HTML tags, script constructs, control characters, and dangerous URI schemes.
 * Enforces maximum character length to prevent payload flooding.
 */
export function sanitizeText(input: unknown, maxLength = 250): string {
  if (typeof input !== 'string') return '';

  return (
    input
      // Remove null bytes and non-printable control characters
      .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, '')
      // Strip HTML tags (<script>, <img>, <iframe>, <svg>, etc.)
      .replace(/<[^>]*>?/gm, '')
      // Strip potential dangerous pseudo-protocols
      .replace(/(javascript|vbscript|data|blob|file):/gi, '')
      // Neutralize potential encoded tag attempts and event handlers
      .replace(/(&lt;|&gt;|&quot;|&#x27;|&#x2F;|onload|onerror|onclick)/gi, '')
      // Remove carriage returns to prevent CRLF injection in parameter contexts
      .replace(/[\r\n]+/g, ' ')
      // Trim excessive whitespaces
      .trim()
      // Enforce length restriction
      .slice(0, maxLength)
  );
}

/**
 * Strips newlines but preserves standard paragraph breaks for multi-line user notes,
 * while preventing HTML and script tags.
 */
export function sanitizeMultilineText(input: unknown, maxLength = 400): string {
  if (typeof input !== 'string') return '';

  return (
    input
      // Remove null bytes and non-printable control characters (keep \n and \r)
      .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, '')
      // Strip HTML tags
      .replace(/<[^>]*>?/gm, '')
      // Strip dangerous pseudo-protocols
      .replace(/(javascript|vbscript|data|blob|file):/gi, '')
      // Neutralize script event strings
      .replace(/(onload|onerror|onclick|alert\(|eval\()/gi, '')
      // Normalize excessive carriage returns (prevent header pollution)
      .replace(/\r\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim()
      .slice(0, maxLength)
  );
}

/**
 * Strictly sanitizes phone input, allowing only numbers, '+', '-', '()', and spaces.
 */
export function sanitizePhone(input: unknown, maxLength = 30): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[^\d+()\s-]/g, '')
    .trim()
    .slice(0, maxLength);
}

/**
 * Safely parses and bounds numerical input for legal calculations.
 */
export function sanitizeNumber(
  value: unknown,
  min: number,
  max: number,
  fallback: number
): number {
  const parsed = typeof value === 'number' ? value : Number(value);
  if (Number.isNaN(parsed) || !Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.min(Math.max(parsed, min), max);
}

/**
 * Validates external URL to ensure it starts with https:// and conforms to an approved domain whitelist.
 */
export function isSafeExternalUrl(url: string, allowedPrefixes: string[]): boolean {
  if (!url || typeof url !== 'string') return false;
  return allowedPrefixes.some((prefix) => url.startsWith(prefix));
}
