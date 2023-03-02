import {TextField, TextFieldProps} from "@mui/material";

const styles = {
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
};

export const WhiteTextField = (props: TextFieldProps) => (
  <TextField {...props} sx={styles}/>
);
