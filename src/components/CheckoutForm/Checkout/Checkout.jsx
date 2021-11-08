import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core'

import { commerce } from '../../../lib/commerce';
import useStyles from './styles'
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { Link, useHistory } from 'react-router-dom';
import styles from '../Checkout/checkout.module.css'

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    const classes = useStyles()
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [activeStep, setActiveStep] = useState(1);
    const [shippingData, setShippingData] = useState({})
    const history = useHistory();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })

                console.log(token)

                setCheckoutToken(token);
            } catch (error) {
                // history.push('/');
            }
        }

        generateToken();
    }, [cart])

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    const next = (data) => {
        setShippingData(data);

        nextStep();
    }

    let Confirmation = () => order.customer ? (
        <>
            <div className={styles.con} >
                <div className={styles.success} >
                    <div className={styles.markcon} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                    </div>
                    <Typography className={styles.font} >Payment Sucessful</Typography>
                </div>
                <Typography variant="h6"  >Thank you for shopping with us, {order.customer.firstname} {order.customer.lastname}</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle1" >Order ref: {order.customer_reference} </Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button" >Back to Home</Button>
        </>
    ) : (
        <div className={classes.spinner} >
            <CircularProgress />
        </div>
    );

    if (error) {
        return (
            <>
                <Typography variant="h5" >Error: {error}</Typography>
                <br />
                <Button component={Link} to="/" variant="outlined" type="button" >Back to Home</Button>
            </>
        )
    }

    const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} /> : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} />

    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout} >
                <Paper className={classes.paper} >
                    <Typography variant="h4" className={styles.font} align="center" >Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper} >
                        {steps.map((step) => (
                            <Step key={step} >
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout
