export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const countNonWhiteSpace = (str: string) =>
  str.replace(/\s/g, "").length;
