import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Character } from '~/components/Character';
import { countNonWhiteSpace, sleep } from '~/utils/utils';

interface LetterProps {
    content: string
    size: number
    centered?: boolean
    onComplete?: () => void
    delay?: number
}

export const Letter: React.FC<LetterProps> = ({ onComplete, delay, content, size, centered }) => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        if (visibleIndex >= countNonWhiteSpace(content)) {
            if (onComplete) {
                void sleep(delay ?? 1000).then(() => onComplete());
            }
        };
        setTimeout(() => {
            setVisibleIndex(visibleIndex + 1);
        }, 50);
    }, [content, visibleIndex]);

    let totalCharCount = 0;
    // Gap between sentences
    return <motion.div className={`flex w-full justify-center items-center flex-wrap gap-2 sm:gap-4`}>
        {
            // Gap between words
            content.split("\n").map(sentence => <div key={sentence} className={`flex w-full flex-wrap justify-${centered ? "center" : "start"} items-end gap-1.5 sm:gap-2`}>
                {
                    sentence.split(" ").map((word) => {
                        // Gap between characters
                        return <span key={word + totalCharCount} className={"flex justify-start items-end gap-[1px]"}>
                            {word.split('').map((char) => {
                                totalCharCount += 1;
                                return <Character
                                    key={word + char + totalCharCount} size={size} char={char} animateState={visibleIndex >= totalCharCount ? 'animate' : 'initial'} />
                            })}
                        </span>
                    })
                }
            </div>)
        }
    </motion.div>
}