export function NullCheck(str: string) {
  return !str || (str && str.replace(/\s+/g, '').length < 1);
}
