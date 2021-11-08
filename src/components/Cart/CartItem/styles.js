import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    // border: '2px solid red',
    height: '75px',
    alignItems: 'center',
    width: '100%',
    padding: 0
  },
  cardActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  padding: {
    paddingLeft: '5px',
    height: '50px',
    margin: '0px auto'
  },
}));
