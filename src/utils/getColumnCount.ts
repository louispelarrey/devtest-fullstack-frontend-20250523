export const getColumnCount = (width: number) => {
  if (width < 640) return 1; // sm
  if (width < 768) return 2; // md
  if (width < 1024) return 3; // lg
  return 4; // xl+
};
