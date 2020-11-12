import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#e7f0ec',
    width: '100%',
    margin: 'auto',
  },
  fixed: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  root: {
    width: '100%',
  },
}));

export default useStyles;
