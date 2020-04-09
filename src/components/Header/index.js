import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Breadcrumbs from '../../customcomponent/BreadCrumbs';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>

          </Typography>
          <Link to='/cart'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAB8CAMAAABty38BAAAAn1BMVEX///8mGBUREiQAAADs7O2wrawKAADLysmfnJva2dkhEAzHxcQeCgT4+PhJQ0NhYWEUAAALDCCKhoXh4OAZAAAAABwAABg4OEK+vLt6dXQ+MzHn5+aYlpa4trWBfn1aVVQmJjNFRU1ubnNPT1YbGysxKSciGRdUTEs3MzNqZGJBOzsqHhyPjowbExIYCgZybGsuLjleXmZ7fIOLi5EAABHU6lpyAAAE1klEQVRoge2Za3uiPBCGwXAygmLlUKtUDrqt2l2L7v//bUsmCgnQ1gT1w/tyX9e260h5mGQymQyK0tPT09PT09PT83/EfKr4GD1EUkcuA1pp95d0NlhlMVb319RclccY3l90YtQ09ftrapNqNskwu/P7ayrKouRXoYk3j9CseLMLUeQ8VPODBJRhPlTzmcSTN9elmYlrDmGtekgeidX9jtVuoIOw5sruqKnihaimZfx81+9xhafURPCs3BTR5Ojy8+aB0WBN8Lh4I7xHLPbk78bmqMJckpsZFmsbmXMiiiLWCEFvT0QlFWUM6a/pO6pl4SfiPeJ8GpLr3CdxzQM8PxcHC3Iv44O/bg6anAliAT2La+rgVMSaHGLyapl/6zU06XDLZAUQ4AbIIevHri12WFScpkOmBb9IJGuNlA2YF3ghpjf+uh2Zd8xaFsRNWzwlKGcHPKduwjvegR04xVog1IyljCYNSK4+IROFN1xcOSRJ2pzvsKSQVN0YweNa3GOQUfO4x4Ap4NfixG6snmuZEU17rjgligWumw7DbE9jubJozdG+Glp77scMLxAvO9a0g9S3YS24ZUVdC4yRilnUhuW85dUt/Jxcz1O94BUASdbGI9RBU05S0aimzaA2LOfhrhnwTlLTgZDZTxhAgLPQNLSqDCsIoVdJTZqrPTZXk7IXv7OJaAlFKTN7Omyy3N4ggtVIKAcyuns2EUGgGYyFbirSxyuzsfdCqY3ZG4KEwSQdmBDZEDrvl9zeBYnIZct72AncarQ1OOmMpTXp3vXOOBE1KgAoYbzqswlPVaslRHglA+cyQ2mCJlsRvdS2T4gBQ6IuuQAxyNYntLpivdhj/tC4hbGWqEt4CWatNSoiB3IEs30SSbyXl1QUVM8pXk3C+U0eoqpDtEbYCQNZZl+d8KI9JKKo/Kxj0LgYItjVZTcVCt1amGPBOYPzxwTV5o8XRqd+ViR1UvolfCJjmclo2rKbypk/4pIYdWxD0KMvd9L7iU3X7iTUqp5lXs+sc4NnRDTdTrEvzIxsE93WuDiQw93Z8Fo6ZNoSOF6qP0dOyaR7w04XLTiRdPlVMhTVxOPujtY7yT/hbjtLKs62yOTXg/7cpKM+tATQH/C24j8HOWd/+/XNFRevG0Pdfhke0cp2x9ZtZUeIvP2w0RcNmC0iZyck3sn8hsUlMbQ38V7PX9u3fDly8C5Jpu2uszJV1XueXagaC22dQ6vUvOGmp1U5t21wq15HtwKew2E0W+qrjzIjS3aiWhmXLz6MlvVQ9VdketNfEV3uarTd1Hm7vBdBnYrpGgcqary3fjtDtGN2y7BVyFGW1B1flQDa6iaFbR3H1Eff5LbFc/SAN9E9PT09PT09PT1yaI9HEWnL3ghlwDMd3B/QnJYEn8HU96f+wI/X99T0szhP4iRPkjA8HdNTlseTZZJ/yrvsUwfIL5865Ae+HwR+4RDVnCZZmqZZnidpnljH4/Koh9EpkPdjnWdhmISFF2GYr0Py/zzP07zQyPKAju30mOXFBXmWFuqn0/K0TJfLv/Kaf4+FD+kxT4vfx6T4l+bZMSOOFRIXzTgI48/PdbgexAmK4zhI1p2msxhUMqSDoPhZfAyKH+t4uo6DwZp8PsctuQZill48nd4jfi/3rK+VR/AP3P9ndT/SQsEAAAAASUVORK5CYII=" height="35" width="35">
              </img></Link>
          <span className="cartcount">{props.cartitems.length}</span>
        </Toolbar>
      </AppBar>
    </div>
  );
}
