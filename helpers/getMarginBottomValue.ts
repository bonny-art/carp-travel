export const getMarginBottomValue = (activeIndex: number) => {
  const margins = [15, 63, 111, 183, 231];
  const margin = margins[activeIndex] || 15;
  return `lg:mb-[${margin}px]`;
};
