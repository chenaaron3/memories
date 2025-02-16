import ReactPlayer from 'react-player';
import { usePostcardStore } from '~/store';

export const Player = () => {
    const music = usePostcardStore(state => state.postcard.music);

    return (
        <div className='hidden'>
            <ReactPlayer
                url={music}
                playing={true}
                controls
            />
        </div>
    )
}