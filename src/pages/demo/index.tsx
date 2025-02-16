import { useEffect } from 'react';
import { Envelope } from '~/components/Envelope';
import { Flowers } from '~/components/Flowers';
import { Player } from '~/components/Player';
import { Polaroids } from '~/components/Polaroids';
import { Story } from '~/components/Story';
import { usePostcardStore } from '~/store';

function Demo() {
    return <>
        <Flowers />
        <Scene />
    </>
}

function Scene() {
    const showPolaroids = usePostcardStore(state => state.showPolaroids)
    const letterOpened = usePostcardStore(state => state.letterOpened);
    const setPostcard = usePostcardStore(state => state.setPostcard);

    useEffect(() => {
        setPostcard({
            font: 'Montserrat',
            letter: "Happy Valentines Day!!",
            music: "https://www.youtube.com/watch?v=V9PVRfjEBTI",
            name: "For Eri!!",
            polaroids: [
                {
                    src: "https://images.unsplash.com/photo-1513279922550-250c2129b13a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291cGxlc3xlbnwwfHwwfHx8MA%3D%3D",
                    caption: "City view"
                },
                {
                    src: "https://images.unsplash.com/photo-1560745155-a978f7ef4d06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cGxlc3xlbnwwfHwwfHx8MA%3D%3D",
                    caption: "Farm lands"
                },
                {
                    src: "https://images.unsplash.com/photo-1567888818950-737cde12f04c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXBsZXN8ZW58MHx8MHx8fDA%3D",
                    caption: "Lanturns at the beach"
                }
            ],
            story: [
                "It all started one year ago",
                "You came into my life and everything changed",
                "What did you do to me?"
            ],
        })
    }, []);

    return (
        <>
            <div className='bg-pink-200 h-dvh w-dvw overflow-hidden'>
                {letterOpened && <Player />}
                {showPolaroids && <div className='w-full h-full flex flex-col justify-evenly items-center'>
                    <Story />
                    <Polaroids />
                </div>}
                {!showPolaroids && <Envelope />}
            </div >
        </>
    )
}

export default Demo
