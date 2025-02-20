import React from 'react';
import useForm, { ValidationType } from '../hooks/useForm';

type Input = React.ComponentProps<'input'> & {
  label: string;
  validationType?: ValidationType;
};

const Input = ({ label, validationType, required, id, ...props }: Input) => {
  if (validationType) {
    required = true;
  }

  const input = useForm(validationType);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        required={required}
        onChange={input.onChange}
        onBlur={input.onBlur}
        value={input.value}
        {...props}
      />
      {input.error && <p className="error">{input.error}</p>}
    </div>
  );
};

export default Input;
