import React from 'react';
import styles from './PriceComponent.module.css';
import { moveDecimal } from '../../utils/utils';

export default function PriceComponent ({price}){
    return (
        <div className={styles.price}>{moveDecimal(price)}</div>
    )
}