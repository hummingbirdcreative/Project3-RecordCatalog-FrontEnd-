import { Link } from "react-router-dom";
import { Typography, AppBar, Toolbar, CssBaseline } from '@mui/material';
import AlbumIcon from '@mui/icons-material/Album';

function Header(props) {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AlbumIcon />
          <Link to="/">
            <Typography variant="h6">
              Record Crate
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;