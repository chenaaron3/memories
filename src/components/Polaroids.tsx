import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { Polaroid, PolaroidProps } from './Polaroid';

const images: PolaroidProps[] = [
    {
        src: 'https://i.postimg.cc/P5RLwyw9/dot.jpg',
        caption: "Babi confused @ Library"
    },
    {
        src: 'https://i.postimg.cc/P5RLwyw9/dot.jpg',
        caption: "Babi confused @ Library"
    },
    {
        src: 'https://i.postimg.cc/P5RLwyw9/dot.jpg',
        caption: "Babi confused @ Library"
    },
    {
        src: 'https://i.postimg.cc/P5RLwyw9/dot.jpg',
        caption: "Babi confused @ Library"
    },
]

export const Polaroids = () => {
    // Scroll through polaroids
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [timeoutHandle, setTimeoutHandle] = useState<NodeJS.Timeout | null>(null);

    // Auto scroll through polaroids
    useEffect(() => {
        let nextIndex = visibleIndex + 1;;
        if (nextIndex >= images.length) {
            nextIndex = 0;
        }
        const timeout = setTimeout(() => {
            setVisibleIndex(nextIndex);
        }, 7000);
        setTimeoutHandle(timeout);
    }, [visibleIndex]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            let newIndex = 0;
            // Change polaroid in circular loop
            if (event.key === 'ArrowRight') {
                if (visibleIndex < images.length - 1) {
                    newIndex = visibleIndex + 1;
                } else {
                    newIndex = 0;
                }
            } else if (event.key === 'ArrowLeft') {
                if (visibleIndex > 0) {
                    newIndex = visibleIndex - 1;
                } else {
                    newIndex = images.length - 1;
                }
            }
            // Cancel any existing animations
            if (timeoutHandle) {
                clearTimeout(timeoutHandle);
            }
            setVisibleIndex(newIndex);
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [setVisibleIndex, setTimeoutHandle, timeoutHandle]);


    // A series of polaroids dangling from a string. Add padding so rotation doesnt get cut off
    return <motion.div layout className='py-24 w-full h-full flex justify-center items-center overflow-hidden gap-24 flex-row'>
        <Polaroid {...images[visibleIndex]!} />
    </motion.div>
}