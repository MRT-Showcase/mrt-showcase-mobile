export function isNumericString(value: string): boolean {
  const numericRegex = /^[0-9]+$/;
  return typeof value === "string" && numericRegex.test(value);
}
