export const formatSlideNumber = (number: number): string => {
  return number.toString().padStart(2, "0");
};
