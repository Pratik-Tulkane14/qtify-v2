import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const AutoCompleteUI = () => {
    const countries = [
      { code: "AD", label: "Andorra", phone: "376" },
      {
        code: "AE",
        label: "United Arab Emirates",
        phone: "971",
      },
      { code: "AF", label: "Afghanistan", phone: "93" },
      {
        code: "AG",
        label: "Antigua and Barbuda",
        phone: "1-268",
      },
    ];
  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={countries}
    //   autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          //   label="Choose a country"
          placeholder="Search a album of your choice"
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            },
          }}
        />
      )}
    />
  );
};

export default AutoCompleteUI;
