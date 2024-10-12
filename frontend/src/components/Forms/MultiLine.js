import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

// Wrapping the component with React.forwardRef to properly pass refs
const Multiline = forwardRef(({ label, placeholder, name, control }, ref) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          inputRef={ref}  // Pass the forwarded ref here
          label={label}
          multiline
          rows={4}
          placeholder={placeholder}
          value={value || ' '}  // Controlled input
          onChange={onChange}  // Update value on change
          error={!!error}  // Display error if it exists
          helperText={error ? error.message : null}  // Display helper text if error
        />
      )}
    />
  );
});

export default Multiline;
