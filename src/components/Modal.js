import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ img, setImg }) => {
    const modalClosedHandler = e => {
        if (e.target.classList.contains('backdrop')) {
            setImg(null);
        }
    }
    return (
        <motion.div 
            className='backdrop' 
            onClick={modalClosedHandler}
            initial={{opacity: 0}}
            animate={{opacity: 1}}>
            <motion.img 
                src={img} 
                alt="Pic"
                initial={{y: '-100vh'}}
                animate={{y: '0'}} />
        </motion.div>
    )
}

export default Modal;