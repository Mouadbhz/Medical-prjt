import { useState } from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------
export default function PostSort({ options, onSortChange  }) {
  const [selectedValue, setSelectedValue] = useState(options.length>0 ? options[0].value : 'Patients');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log('Selected value:', event.target.value);
    console.log("the object", event.target);

    if (onSortChange) {
      onSortChange(event.target);
    }
  };
  return (
    <TextField select size="small" value={selectedValue} onChange={handleChange}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
PostSort.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  onSortChange: PropTypes.func,
};
