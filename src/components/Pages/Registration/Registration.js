import React, { useEffect } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import auth from './../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Loader from './../../Loader/Loader';

const Registration = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);

    useEffect(() => {
        if (user) {
            toast.success('Account Created! Verify Email Address!', {
                duration: 3000
            })
            navigate(from, { replace: true });
        } else if (error) {
            if (error.message.includes('already')) {
                toast.error('Email Aready Exist!', {
                    duration: 3000
                });
            } else {
                toast.error('Something wrong! Check Internet Connection', {
                    duration: 3000
                });
            }

        }
    }, [user, error, navigate, from])

    // Handle Registration
    const handleRegistration = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            toast.error('Enter Strong Password! (More than 6 characters)', {
                id: 'pass-err',
                duration: 3000
            })
            return;
        }

        if (!name || !email || !password) {
            toast.error('Please, enter valid information!', {
                id: 'info-err',
                duration: 3000
            })

            return;
        }
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
    }

    if (loading || updating) {
        return <Loader />;
    }

    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <h2 className="text-center mb-4">Create an Account</h2>
                        <form onSubmit={handleRegistration}>
                            <FloatingLabel
                                controlId="name"
                                label="Name"
                                className="mb-3"
                            >
                                <Form.Control type="text" name="name" placeholder="Name" required />
                            </FloatingLabel>

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

                            <button className="theme-btn w-100">Register</button>

                            <p className="mt-3 mb-0 text-center">Already User? <Link style={{ color: 'var(--red)' }} to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;