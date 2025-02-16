import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import { Letter } from './Letter';

const lines = [
    "The nice thing about digital postcards is that I can add way more content!",
    "Including this little slide show of our memories together!",
    "It all started in San Francisco...",
    "You stepped into my life and everything changed.",
    "Back then, I was still so unsure where I wanted to go",
    "Did I want to stay in the Bay Area?",
    "If I plan on moving, then should I really be starting a relationship?",
    "But after spending the summer with you, everything seemed to fall into place",
    "Remember how we dreamed of moving to New York together?",
    "It felt like such a far fetched dream",
    "I was drowning in job applications and you were still in school",
    "Then out of nowhere, job interviews started trickling in",
    "It really felt like the universe was cheering us on",
    "We have grown so much together since then",
    "Despite the occasional fights and the distance, we always found our way back to each other",
    "Soon we wll finally wake up in our city",
    "Together",
    "Until then, heres to every memory weve made",
    "and all the ones waiting ahead",
    "But before we end this postcard",
    "Here is a list of reasons why I like you that no one asked for",
    "I like how you support my ambitions and goals",
    "I like spending time with you, whether it be walking around flea markets, wandering around museums, or just sitting at home",
    "I like how we can talk about anything, from finance to bdonkadonks to our future",
    "I like how we share similar interests in books and can discuss our learnings together",
    "I like how you challenge me to be a better person with your competitiveness",
    "I like how you genuinely care about my well-being",
    "I like how you are kind to others",
    "I like how you brings a sense of adventure into my life. I want to travel the world with you",
    "I like how I can trust you completely",
    "I like you babi for who you are and theres only so much I can express in words",
    "I've never met anyone like you, and I'm so grateful to have you in my life",
    "You are my today and all of my tomorrows",
    "Now enjoy the rest of the photos!"
]


export const Story = () => {
    // Scroll when caption is done
    const [visibleIndex, setVisibleIndex] = useState(0);

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