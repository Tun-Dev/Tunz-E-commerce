import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, ButtonBase, CardActionArea } from '@material-ui/core';
import { AddShoppingCart, RoomIcon } from '@material-ui/icons';
import useStyles from './styles';
import Modal from 'react-modal';
import { useState } from 'react';
import { Close } from '@material-ui/icons';
// import CloseIcon from '@mui/icons-material/Close';
// import styles from './styles';
import styless from '../Product/style.module.css'


Modal.setAppElement('#root')

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const customStyles = {
        content: {
            width: 'fit-content',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',

        },
    };

    return (
        <>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}  >
                <CardActions disableSpacing className={classes.cardActionss}>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)} >
                        <AddShoppingCart />
                    </IconButton>
                    <IconButton onClick={() => setModalIsOpen(false)} >
                        <Close />
                    </IconButton>
                </CardActions>
                <img src={product.media.source} alt="" style={{ width: '300px' }} />
                <h2 style={{ width: '300px' }} >{product.name}</h2>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" className={styless.testing} />

                {/* <p>{product.description}</p> */}
            </Modal>
            <Card className={classes.root} >
                <CardActionArea onClick={() => setModalIsOpen(true)} >
                    <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                </CardActionArea>
                <CardContent className={classes.padding}>
                    <div className={classes.cardContent} >
                        <Typography variant='body1' gutterBottom >
                            {product.name}
                        </Typography>
                        <Typography variant='body2' >
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    {/* <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" /> */}
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)} >
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
}

export default Product
