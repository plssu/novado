'use client';

import styles from './AddButton.module.scss';
import Plus from './plus/Plus';
import React from 'react';

    interface AddButtonProps {
        onAdd: () => void;
    }

    const AddButton: React.FC<AddButtonProps> = ({ onAdd }) => {
        return (
            <>
            <div className={styles.addButtonContainer}>
                <button className={styles.buttonContainer} onClick={onAdd}>დამატება<Plus /></button>
            </div>
            </>
        );
    };

export default AddButton;