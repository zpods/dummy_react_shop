import React from 'react';
import styles from './ProductNameComponent.module.css';

export default function ProductNameComponent({name}) {
    return (
        <div className={styles.name}>{name}</div>
    )
}