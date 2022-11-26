import { Autocomplete, TextField } from "@mui/material";

const Dropdown = ({ data, label, value, setValue, setAdded }: any) => {
  return (
    <Autocomplete
      disablePortal
      disableClearable
      id="combo-box-demo"
      options={data}
      sx={{ width: 300 }}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
        setAdded(false);
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default Dropdown;
