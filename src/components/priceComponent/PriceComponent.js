import React from 'react';
import styles from './PriceComponent.module.css';

export default function PriceComponent ({price}){
    return (
        <div className={styles.price}>{price}</div>
    )
}