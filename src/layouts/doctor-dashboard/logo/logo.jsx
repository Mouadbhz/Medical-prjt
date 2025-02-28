import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {



  // OR using local (public folder)
  // -------------------------------------------------------
   const logo = (
     <Box
       component="img"
       src="/assets/logo/alpha_logo2.svg"
      sx={{ width: 180, height: 50, cursor: 'cursor', ...sx }}
     />
   );

  

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="doctor/dashboard" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;