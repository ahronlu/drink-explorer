import { useState } from "react";

export const useFormState = <T extends Record<string, any>>(initialState: T) => {
  const [values, setValues] = useState<T>(initialState);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (key: keyof T) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setError(null);
  };

  return { values, setValues, error, setError, handleInputChange };
};
