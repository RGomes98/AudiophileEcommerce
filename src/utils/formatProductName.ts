export const formatProductName = (name: string, category: string) => {
  const isPlural = category.endsWith('s');
  const sliceEnd = isPlural ? category.slice(1, category.length - 1) : category.slice(1);
  const isCategoryInProductName = name.indexOf(`${category.charAt(0).toUpperCase()}${sliceEnd}`);

  if (isCategoryInProductName) return name.slice(0, isCategoryInProductName).trim();
};
