import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

export default function DatePicker(props) {
  const { label, control, name } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <MuiDatePicker
            label={label}
            value={value}
            onChange={(newValue) => onChange(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                onBlur={onBlur}
                inputRef={ref}
                error={!!error}
                helperText={error ? error.message : ""}
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
}
