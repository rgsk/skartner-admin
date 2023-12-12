import {
  Autocomplete,
  Box,
  CircularProgress,
  TextField as MuiTextField,
} from '@mui/material';
import useToggle from 'hooks/utils/useToggle';

interface ICustomAutocompleteProps {
  options: string[];
  onSelect: (option: string) => void;
  loading: boolean;
  onChange: (value: string) => void;
  label: string;
}
const CustomAutocomplete: React.FC<ICustomAutocompleteProps> = ({
  options,
  onSelect,
  loading,
  onChange,
  label,
}) => {
  const [toggleValue, toggle] = useToggle();

  return (
    <Autocomplete
      options={options}
      key={`${toggleValue}`}
      renderInput={(params) => (
        <MuiTextField
          {...params}
          label={label}
          // error={!!errors.line2}
          // helperText={errors.line2?.message}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading && (
                  <Box sx={{ transform: 'translate(0px, -3px)' }}>
                    <CircularProgress size={20} />
                  </Box>
                )}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      onChange={(event, option) => {
        if (option) {
          onSelect(option);
          toggle();
          onChange('');
        }
      }}
    />
  );
};
export default CustomAutocomplete;
