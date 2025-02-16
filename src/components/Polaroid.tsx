import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

import { Letter } from './Letter';

export interface PolaroidProps {
    src: string,
    caption: string
}

export const Polaroid: FC<PolaroidProps> = ({ src, caption }: PolaroidProps) => {
    const [angle, setAngle] = useState(0);
    useEffect(() => {
        setAngle(Math.random() * 10 - 5);
    }, [])

    return <AnimatePresence mode='popLayout'>
        <motion.div
            key={src + caption}
            initial={{
                x: 300,
                opacity: 0,
                rotateZ: 45,
            }}
            animate={{
                x: 0,
                opacity: 1,
                rotateZ: 0,
            }}
            exit={{
                x: -300,
                opacity: 0,
                rotateZ: -45,
            }}
            transition={{
                duration: .5
            }}
        >
            <motion.div
                style={{ rotateZ: angle }}
                animate={{
                    rotateZ: [angle, -1 * angle, angle],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    delay: Math.random()
                }}
                className="origin-top border border-black rotate-z-3 p-4 w-54 h-86 min-w-54 min-h-86 flex justify-center items-center flex-col bg-white shadow-xl">
                <Image alt="dot" src={'/dot.png'} width={10} height={10} className='absolute top-0 left-1/2 -translate-x-1/2 size-7' />
                <div className="relative mt-2 w-full min-h-62">
                    <Image
                        alt="image"
                        className='object-cover border border-black h-full object-top brightness-130 contrast-80 saturate-90 sepia-[30%] shadow-[inset_0_0_80px_rgba(0,0,0,0.3)]'
                        layout='fill'
                        objectFit='cover'
                        src={src} />
                    <motion.div
                        style={{ backgroundImage: `url(/noise.png)` }}
                        className="absolute h-full inset-0 opacity-15 pointer-events-none" />
                </div>
                <div className='text-sm m-2 h-full w-full text-center justify-center items-center flex'>
                    <Letter content={caption} centered size={.75} ></Letter>
                </div>
            </motion.div >
        </motion.div>
    </AnimatePresence>
};