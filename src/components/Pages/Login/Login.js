import React, { useEffect } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import auth from './../../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Loader from './../../Loader/Loader';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user || googleUser) {
            toast.success('You\'re Logged In!', {
                duration: 3000
            })

            navigate(from, { replace: true });
        } else if (error || googleError) {
            if (error.message.includes('not-found')) {
                toast.error('User Not Found! Create an Account!', {
                    duration: 3000
                });
            } else if (error.message.includes('wrong-password')) {
                toast.error('Wrong Password!', {
                    duration: 3000
                });
            } else {
                toast.error('Something wrong! Check Internet Connection', {
                    duration: 3000
                });
            }

        }
    }, [user, googleUser, error, googleError, navigate, from])

    // Handle Login
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email || !password) {
            toast.error('Please, enter valid information!', {
                id: 'info-err',
                duration: 3000
            })

            return;
        }
        await signInWithEmailAndPassword(email, password)
    }

    // Handle Google Login
    const handleGoogle = () => {
        signInWithGoogle();
    }

    if (loading || googleLoading) {
        return <Loader />;
    }

    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <h2 className="text-center mb-4">Account Login</h2>
                        <form onSubmit={handleLogin}>
                            <FloatingLabel
                                controlId="email"
                                label="Email"
                                className="mb-3"
                            >
                                <Form.Control type="email" name="email" placeholder="Email" required />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="password"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control type="password" name="password" placeholder="Password" required />
                            </FloatingLabel>

                            <button className="theme-btn w-100">Login</button>

                            <p className="mt-3 mb-0 text-center">New User? <Link style={{ color: 'var(--red)' }} to='/registration'>Create Account</Link></p>
                        </form>

                        <div className="d-flex g-3 align-items-center my-2">
                            <hr style={{ width: '100%' }} />
                            <span>or</span>
                            <hr style={{ width: '100%' }} />
                        </div>

                        <button onClick={handleGoogle} className="theme-btn bg-dark w-100">Continue with Google</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;