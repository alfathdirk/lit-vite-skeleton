export function createEvent <T> (name: string, detail?: T): CustomEvent<T> {
  return new CustomEvent(name, {
    detail,
    bubbles: true,
    composed: true,
  });
}
