export const generatePrefixedIds = (prefix: string) => {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
};
