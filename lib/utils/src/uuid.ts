function createUuid() {
  let n = 0;
  return () => {
    n += 1;
    return n + '';
  };
}
export const uuid = createUuid();
