import { useEffect } from "react";

export const useOutsideClick = (ref, callback: () => void): void => {
  const handleClick = (e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return (): void => {
      document.removeEventListener("click", handleClick);
    };
  });
};
