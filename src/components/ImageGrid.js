import React from 'react';
import useDatabase from '../Hooks/useDatabase';
import { motion } from 'framer-motion';

const ImageGrid = ({ setImg }) => {
    const { docs } = useDatabase('images');
    // console.log(docs);
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div
                    layout
                    className='img-wrap'
                    key={doc.id}
                    whileHover={{opacity: 1}}
                    onClick={() => setImg(doc.url)}>
                    <motion.img 
                        src={doc.url} 
                        alt='images' 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1}}/>
                </motion.div>
            ))}
        </div>
    );
}

export default ImageGrid;