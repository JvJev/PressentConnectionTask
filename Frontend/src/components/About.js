import { Box, Typography } from '@mui/material';
import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <br></br>
        <Typography sx={{ fontFamily: '-apple-system' }} variant="h3">
          Paprastas projektas sukurtas pagal savo šiuometinius įgudžius. Vietoje .NET
          naudojau Node.js rašyti backend'ą. Pradėjau mokytis .NET po naujųjų
          metų, tad reiktų dar mažiausiai mėnėsio, kad galėčiau rašyti backend su šia
          technologija (ar bent normaliai ją suprasti). Nemėgstu vynioti į vatą ir
          įvardiju kaip yra.
        </Typography>
      </Box>
    </div>
  );
};

export default About;
