import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    width: '100%',
    padding: 0
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    // marginTop: '10px'
  },
  cardActionss: {
    display: 'flex',
    justifyContent: 'space-between',
    // marginTop: '10px'
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
  padding: {
    paddingLeft: '5px',
    height: '50px',
    margin: '0px auto'
  },
  content: {
    width: '50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  '@media only screen and (max-width: 800px)': {
    // cardContent: {
    //   display: 'none'
    // }
  }
}));
