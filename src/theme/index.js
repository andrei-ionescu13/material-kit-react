import { colors } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { shadows } from './shadows';
import { typography } from './typography';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        subheaderTypographyProps: {
          variant: 'body2'
        },
        titleTypographyProps: {
          variant: 'h6'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: '100%'
        },
        html: {
          height: '100%'
        },
        '& #root': {
          height: '100%'
        }
      }
    }
  },
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white
    },
    primary: {
      contrastText: '#ffffff',
      main: '#5664d2'
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c'
    }
  },
  shadows,
  shape: {
    borderRadius: 16
  },
  typography
});
