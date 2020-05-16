import { useState, useEffect } from "react";
import { RetStateType } from "./type";

/**
 * * use <T extends {}> also worked in arrow func na kub :3
 */

export const useLocalStorage = <T>( // *here
  key: string,
  initialValue?: T
): RetStateType<T> => {
  const [state, setState] = useState<T | undefined>(() => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });
  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (err) {
        console.log(err);
      }
    }
  }, [state, key]);

  return [state, setState];
};
