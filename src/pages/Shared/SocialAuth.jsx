import { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const SocialAuth = () => {
    const { googleSignIn } = useContext(AuthContext)

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error=>{
                console.log(error)
            })
    }

    return (
        <div>
            <button onClick={handleGoogle} className='btn'>Google</button>
        </div>
    );
};

export default SocialAuth;