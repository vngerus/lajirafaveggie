// Simple utility to join class names if you don't have clsx/tailwind-merge installed yet
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
