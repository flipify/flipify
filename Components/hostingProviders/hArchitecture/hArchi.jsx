import React from 'react';
import Col from 'react-bootstrap/Col';
import styles2 from './hArchi.module.css';
import styles from '../hostProviders/providers.module.css';

function HArchi(props) {
    return (
        <Col sm={6} xs={6} className={styles.col_no_padding}>
            <div
                className={`${styles2.hostArchi_Cards} ${styles.hostPro_Cards}`}
            >
                <img src={props.image} alt="" />
            </div>
        </Col>
    );
}

export default HArchi;
