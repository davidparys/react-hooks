import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  if (typeof window !== "undefined") {
    const { innerWidth: width } = window;
    return width;
  }
  return 0;
};

/*
1. First, we’re importing the getWindowDimensions function from the utils folder.
2. Next, we’re exporting a function called useWindowSize.
3. This function returns the window dimensions.
4. We’re using the useState hook to store the window dimensions.
5. We’re using the getWindowDimensions function to get the window dimensions.
6. We’re returning the window dimensions.
*/
export const useWindowSize = () => {
  return getWindowDimensions();
};

/*
Use the useWindowDimensions hook to get the current window dimensions.

Args:
  None
Returns:
  A boolean value.
Usage:
  const width = useWindowDimensions("sm");
*/
/*
1. We’re using the useState hook to create a state variable that will hold the current window dimensions.
2. We’re using the useEffect hook to create a function that will be called when the window is resized.
3. We’re using the getWindowDimensions function to get the current window dimensions.
4. We’re using the setWindowDimensions function to set the current window dimensions.
5. We’re using the checkSizes function to check if the current window dimensions are less than or equal to the size we’re checking for.
6. We’re using the handleResize function to handle the window resize event.
7. We’re using the window.addEventListener function to add the resize event listener.
8. We’re using the window.removeEventListener function to remove the resize event listener.
9. We’re using the !Boolean function to return the opposite of the boolean value.
*/
type checkSizeProps = "sm" | "md" | "lg" | "xl" | "2xl";

export const useWindowDimensions = (size: checkSizeProps) => {
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

  const [windowDimensions, setWindowDimensions] = useState<Number>(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //   console.log("check width sys", checkSizes(size) <= windowDimensions);
  return Boolean(checkSizes(size) >= windowDimensions);
};
