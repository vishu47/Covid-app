import { makeStyles, } from '@material-ui/core';



  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    button: {
      margin: theme.spacing(1),
    },
  }));


  export default useStyles;