type checkSizeProps = "sm" | "md" | "lg" | "xl" | "2xl";

// return a boolean to determine if the current window size is bigger or smaller than the defined size
export const useCompareSizes = (size: checkSizeProps, width: number) => {
  const checkSizes = (checkSize: checkSizeProps) => {
    switch (checkSize) {
      case "sm":
        return 640;
      case "md":
        return 768;
      case "lg":
        return 1024;
      case "xl":
        return 1280;
      case "2xl":
        return 1536;
    }
  };

  return width < checkSizes(size);
};
