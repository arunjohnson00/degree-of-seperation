import { TextField } from "@mui/material";

const InputTextStyled = ({ value, handler, label, readOnly }: any) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value}
      inputProps={{
        sx: { borderRadius: 5 },
        readOnly: readOnly === true ? true : false,
      }}
      InputLabelProps={{
        sx: {
          color: "#bdbdbd99",
          "&.Mui-focused": { color: "#bdbdbd99" },
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          color: "#bdbdbd99",
          "&.Mui-focused fieldset": {
            borderColor: "#bdbdbd99",
          },
        },
      }}
      onChange={handler}
    />
  );
};

export default InputTextStyled;
