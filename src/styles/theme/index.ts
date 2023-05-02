import { ThemeOptions } from  '@mui/material'


//   interface Theme {
//     colors: {
//       primary: string;
//       secondary: string;
//     };
//     fonts: {
//       main: string;
//       heading: string;
//     };
//   }

  export const theme: ThemeOptions = {
    palette: {
      primary: {main:'#3BB273'},
      secondary: {main:'#FFFFFF'},
    },
    typography: {
        button: {
          textTransform: "none",
          fontFamily: "JacquesPro,Calibre,sans-serif",
        },
        fontFamily: [
            'Plus Jakarta Sans',
          'sans-serif',
        ].join(','),
      },
    // fonts: {
    //   main: 'Plus Jakarta Sans',
    //   heading: 'Plus Jakarta Sans',
    // },
  };
  