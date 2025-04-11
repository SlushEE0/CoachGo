export function toLogged<T>(item: T): T {
  console.log("[toLogged]", item);
  return item;
}
