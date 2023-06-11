import { Box, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        py: 3,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="textSecondary">
       Tu comparador de préstamos @2023
      </Typography>
    </Box>
  );
};
