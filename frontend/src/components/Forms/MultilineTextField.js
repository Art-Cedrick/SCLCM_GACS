import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const MultilineTextField = ({ label, name, control, sx }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          multiline
          rows={4} // Adjust rows as needed
          variant="outlined" // Ensures outlined variant is used
          fullWidth
          sx={sx}
        />
      )}
    />
  );
};

export default MultilineTextField;
