import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

function getStyles(option, selectedOptions, theme) {
  return {
    fontWeight:
      selectedOptions.indexOf(option) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({
  label,
  value,
  onChange,
  options = [],
  sx,
}) {
  const theme = useTheme();
  const [selectedOptions, setSelectedOptions] = React.useState(value || []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(typeof value === "string" ? value.split(",") : value);
    if (onChange) {
      onChange(selectedOptions);
    }
  };

  return (
    <FormControl sx={{  width: "100%", ...sx }}>
      <InputLabel id="multiple-select-label">{label}</InputLabel>
      <Select
        labelId="multiple-select-label"
        id="multiple-select"
        multiple
        value={selectedOptions}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        MenuProps={MenuProps}
        renderValue={(selected) => selected.join(", ")}
      >
        {options.length > 0 ? (
          options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, selectedOptions, theme)}
            >
              {option}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>No options available</MenuItem>
        )}
      </Select>
    </FormControl>
  );
}


