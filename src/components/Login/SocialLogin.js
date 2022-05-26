import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        toast(`Error: ${error?.message}`);
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-primary hover:text-white m-5"
        >
            Continute With Google
        </button>
    );
};

export default SocialLogin;