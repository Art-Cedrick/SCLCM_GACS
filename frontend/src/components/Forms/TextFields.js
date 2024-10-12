import * as React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export default function TextFields(props) {
  const { label, placeholder, name, control, sx } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <TextField
          label={label}
          variant="outlined"
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          inputRef={ref} // React Hook Form uses ref to register inputs
          error={!!error}
          helperText={error ? error.message : ""}
          sx={sx}
          fullWidth
        />
      )}
    />
  );
}
