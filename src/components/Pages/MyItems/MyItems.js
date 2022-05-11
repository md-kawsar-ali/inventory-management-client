import React, { useState, useEffect } from 'react';
import SubHeader from '../../SubHeader/SubHeader';
import AllCars from './../../AllCars/AllCars';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import Loader from '../../Loader/Loader';

const MyItems = () => {
    const [user, loading] = useAuthState(auth);
    const [uid, setUid] = useState('');

    useEffect(() => {
        setUid(user?.uid);
    }, [user]);

    if (loading) {
        return <Loader />;
    }

    return (
        <main>
            <SubHeader title="My Cars" />
            <AllCars title="My Inventories" uid={uid} />
        </main>
    );
};

export default MyItems;