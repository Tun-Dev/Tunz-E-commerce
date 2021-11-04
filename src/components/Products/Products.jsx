import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

import Shoe from '../../images/shoe.png'
import Mac from '../../images/mac.jpeg'
import styles from './Products.module.css'

import useStyles from './styles'

// const products = [
//     { id: 1, name: "Shoes", description: "Running shoes.", price: "$5", image: Shoe },
//     { id: 2, name: "Macbook", description: "Apple Macbook.", price: "$10", image: Mac },
// ];

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles()
    return (
        <main className={classes.content} >
            <div className={styles.intro} >
                <div className={styles.left} >
                    <h1 className={styles.leftword} >Welcome to TuShop</h1>
                </div>
                <div className={styles.right} >
                    <p className={styles.rightword} >Your home of Gadgets</p>
                </div>
            </div>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;
