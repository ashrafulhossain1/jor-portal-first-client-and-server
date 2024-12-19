import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import signInLottie from '../../assets/lottie/login.json'
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialAuth from '../Shared/SocialAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { embed } from 'motion/react-client';

const SignIn = () => {
    const { singInUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const state = location.state || '/'

    const handleSignIn = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        // const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        console.log(email, password)

        singInUser(email, password)
            .then(result => {
                console.log(result.user.email)
                // const user = { email: result.user.email }
                // axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                //     .then(res => {
                //         console.log(res.data)
                //     })

                const user = { email: result.user.email }
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })



                // navigate(state)

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={signInLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold ml-8 mt-4">Login Now</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider"></div>
                    <div className='m-4'>
                        <SocialAuth></SocialAuth>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;