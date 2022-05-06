import { Dispatch, useState } from "react";

type Output = [any, Dispatch<any>]

export default function useLocalStorage(keyName:string, defaultValue:any):Output{
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const value = window.localStorage.getItem(keyName)
  
        if (value) {
          return JSON.parse(value)
        } else {
          window.localStorage.setItem(keyName, JSON.stringify(defaultValue))
          return defaultValue
        }
      } catch (err) {
        return defaultValue;
      }
    });
  
    const setValue = (newValue:any) => {
      try {
        window.localStorage.setItem(keyName, JSON.stringify(newValue))
      } catch (err) {}
      setStoredValue(newValue)
    };
  
    return [storedValue, setValue]
  };