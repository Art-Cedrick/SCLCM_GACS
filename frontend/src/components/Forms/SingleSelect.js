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

function getStyles(option, selectedOption, theme) {
  return {
    fontWeight:
      selectedOption === option
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

const SingleSelect = React.forwardRef(function SingleSelect(
  { label, value, onChange, options = [], sx },
  ref
) {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = React.useState(value || "");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOption(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <FormControl sx={{ width: "100%", ...sx }}>
      <InputLabel id="single-select-label">{label}</InputLabel>
      <Select
        labelId="single-select-label"
        id="single-select"
        value={selectedOption}
        onChange={handleChange}
        input={<OutlinedInput label={label} inputRef={ref} />} // Passing ref to input
        MenuProps={MenuProps}
        renderValue={(selected) => (selected ? selected : "Select an option")}
      >
        {options.length > 0 ? (
          options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, selectedOption, theme)}
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
});

export default SingleSelect;
