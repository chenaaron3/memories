import { Envelope } from '~/components/Envelope';
import { Polaroids } from '~/components/Polaroids';
import { Story } from '~/components/Story';
import { usePostcardStore } from '~/store';

function App() {
    const showPolaroids = usePostcardStore(state => state.showPolaroids)

    return (
        <>
            <div className='bg-pink-200 h-dvh w-dvw overflow-hidden'>
                {showPolaroids && <div className='w-full h-full flex flex-col justify-evenly items-center'>
                    <Story />
                    <Polaroids />
                </div>}
                {!showPolaroids && <Envelope />}
            </div >
        </>
    )
}

export default App
