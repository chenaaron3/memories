import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Letter } from '~/components/Letter';
import { usePostcardStore } from '~/store';

export const Story = () => {
    // Scroll when caption is done
    const [visibleIndex, setVisibleIndex] = useState(0);
    const lines = usePostcardStore(state => state.postcard.story);

    if (visibleIndex < lines.length) {
        return <motion.div layout className='w-full h-full flex justify-center items-center'>
            <AnimatePresence mode='popLayout'>
                <motion.div
                    className='w-full h-full flex justify-center items-center'
                    key={lines[visibleIndex]}
                    initial={{
                        y: -30,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    exit={{
                        y: 30,
                        opacity: 0,
                    }}
                >
                    <Letter delay={3000} onComplete={() => setVisibleIndex(visibleIndex + 1)} content={lines[visibleIndex]!} size={1.5} centered />
                </motion.div>
            </AnimatePresence>
        </motion.div>
    }
    return <></>
}