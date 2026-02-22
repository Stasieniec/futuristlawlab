// Shared constants used across the codebase

// Team size limits
export const MAX_MEMBERS = 5;
export const DISPLAY_MAX_MEMBERS = 4;

// Email validation
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}
