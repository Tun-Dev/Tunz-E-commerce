import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from '../CartItem/styles'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} style={{ width: '300px' }} />
            <CardContent className={classes.padding} >
                <div className={classes.cardContent} >
                    <Typography variant="body1" >{item.name}</Typography>
                    <Typography variant='body2' >{item.line_total.formatted_with_symbol}</Typography>
                </div>
            </CardContent>
            <CardActions className={classes.cardActions} >
                <div className={classes.buttons} >
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} >-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)} >+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)} >Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
