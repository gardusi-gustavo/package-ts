export function one<T extends Element = Element>(selector: string): T | null {
  return document.querySelector<T>(selector);
}

export function all<T extends Element = Element>(selector: string): T[] {
  return Array.from(document.querySelectorAll<T>(selector));
}
