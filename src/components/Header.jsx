import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

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

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))

    }
    return (
        <div className=' flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full'>
            <img className='w-44' src={LOGO} alt="logo" />
            {user && < div className='flex p-2'>

                {showGptSearch &&
                    <select className='p-2 m-2 bg-gray-900 text-white border-none rounden-lg' onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map((lang) => {
                            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                        })}
                        <option value="en">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="spanish">Spanish</option>
                        <option value="malayalam">Malayalam</option>

                    </select>
                }

                <button className='py-2 px-4  mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>{showGptSearch ? "Home Page" : "GPT Search"}</button>
                <img className="w-12 h-12" src={user?.photoURL} alt="" />
                {/* <p>{user?.displayName}</p> */}
                <button onClick={handleSignOut} className='font-bold text-white' > (Sign Out)</button>
            </div>}
        </div >

    )
}

export default Header