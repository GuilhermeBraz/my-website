import { useEffect, useState } from 'react';

type ValueSetter<T> = (value: T | ((val: T) => T)) => void;
type UseLocalStorageReturn<T> = [T, ValueSetter<T>];

function useLocalStorage<T>(
  key: string,
  initialValue: T
): UseLocalStorageReturn<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue: ValueSetter<T> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

interface DarkMode {
    enabled: boolean;
    setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  const useDarkMode = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
    const [enabled, setEnabled] = useLocalStorage('dark-theme', false);
    const isEnabled = typeof enabled === 'undefined' && enabled;
  
    useEffect(() => {
      const className = 'dark';
      const bodyClass = window.document.body.classList;
  
      isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
    }, [enabled, isEnabled]);
  
    return [enabled, setEnabled];
  };
  

export default useDarkMode;