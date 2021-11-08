import React from 'react'
import logo from '../../images/LOGOTUNZ.png'
import styles from '../Footer/Footer.module.css'
import { Email } from '@material-ui/icons'
import { Twitter } from '@material-ui/icons'

const Footer = () => {
    return (
        <div className={styles.maincon} >
            <div className={styles.contop} >
                <div className={styles.topleft} >
                    <img src={logo} alt="" />
                </div>
                <div className={styles.topright} >
                    <h4>Cooked by Tunzdev</h4>
                </div>
            </div>
            <div className={styles.conbottom} >
                <div className={styles.botleft} >
                    <Email /> <h5> <a href="mailto:tungbulupaul@gmail.com">tungbulupaul@gmail.com</a> </h5>
                </div>
                <div className={styles.botright} >
                    <Twitter /> <h5><a href="https://www.twitter.com/tunzdev">@tunzdev</a></h5>
                </div>
            </div>
        </div>
    )
}

export default Footer
