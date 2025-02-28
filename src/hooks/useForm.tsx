import React from 'react';

const types: { [key: string]: { regex: RegExp; message: string } } = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  name: {
    regex: /^[A-ZÁÉÍÓÚÂÊÔÇÀÃÕ][a-záéíóúâêôçàãõ]+(?:\s[A-ZÁÉÍÓÚÂÊÔÇÀÃÕ][a-záéíóúâêôçàãõ]+)*$/,
    message: 'O nome deve começar com letra maiúscula e não pode conter números ou caracteres especiais.',
  }
};

export type ValidationType = 'email'| 'name' | undefined;

interface IUseForm {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
  validate: () => boolean;
  onBlur: () => boolean;
}

const useForm = (type: ValidationType): IUseForm => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  function validate(value: string) {
    if (!type) return true;
    if (!value.trim()) {
      setError('Preencha um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
