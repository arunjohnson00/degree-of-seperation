import { Autocomplete, TextField } from "@mui/material";

const Dropdown = ({ data, label, value, setValue }: any) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      sx={{ width: 300 }}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default Dropdown;
