import { Link } from "react-router-dom";
import { login, logout } from '../firebase';
import { Typography, AppBar, Toolbar, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AlbumIcon from '@mui/icons-material/Album';

function Header(props) {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AlbumIcon sx={{ mr: 2 }} />
          <Link to="/">
            <Typography variant="h6" color="inherit" noWrap>
              Record Crate
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    <div className="auth-links">
      {
        user ?
      <div onClick={logout}>Log Out</div>
      :
      <div onClick={login}>Login</div>
      }
    </div>
    </>
  );
}

export default Header;