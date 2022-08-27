import { CssBaseline, Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Footer(props) {
    const theme = createTheme();
    return (
      <>
    {/* Footer */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Record Crate Catalog
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Copyright &copy; All Rights Reserved. 2022 Record Crate Catalog.
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
    </>
);
}

export default Footer;