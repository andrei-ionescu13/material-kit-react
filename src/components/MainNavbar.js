import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import { Logo } from './Logo';

export const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        <Logo
          sx={{
            height: 40,
            width: 40
          }}
        />
      </RouterLink>
    </Toolbar>
  </AppBar>
);
