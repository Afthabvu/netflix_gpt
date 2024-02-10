import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { LOGO } from '../utils/constants';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            navigate('/error')
            // An error happened.
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                // console.log(user)
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate("/browse")
                // ...
            } else {
                dispatch(removeUser());
                navigate("/")

            }
        });
        return () => unsubscribe();

    }, [])


    return (
        <div className=' flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full'>
            <img className='w-44' src={LOGO} alt="logo" />
            {user && < div className='flex p-2'>
                <img className="w-12 h-12" src={user?.photoURL} alt="" />
                {/* <p>{user?.displayName}</p> */}
                <button onClick={handleSignOut} className='font-bold text-white' > (Sign Out)</button>
            </div>}
        </div >

    )
}

export default Header