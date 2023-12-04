import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword,  } from 'firebase/auth';
import { motion } from 'framer-motion';
// import { AiOutlineClose } from 'react-icons/ai';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useNavigate();

 

  const handleSignIn = (e) => {
    e.preventDefault();
    setErrorMessage('');
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router('/Home');
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
          setErrorMessage('Email or password is incorrect.');
        } else {
          setErrorMessage('An error occurred while signing in.');
        }
      });
  };



  return (
    <div className='relative h-screen'>
          
    <div className="fixed  top-0 left-0 w-full h-full flex  items-center justify-center bg-[#085e64] transition-opacity duration-300 ease-in-out">

    <div className='fixed top-16 flex text-white font-extrabold text-4xl'>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className='flex items-center space-x-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/7059/7059470.png?ga=GA1.1.1685298518.1695204527&track=ais" alt="" className='w-10 h-10' />
            <span>With</span>
          </span>
        </motion.div>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Bloom
        </motion.div>

      </div>




      <div className="bg-white w-96 top-20 relative rounded-t-3xl mb-20 rounded-br-3xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-1 py-2 px-3 border rounded-lg border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full mt-1 py-2 px-3 border rounded-lg border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      
        
        <div>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </div>
        <button
          className="bg-[#236fdb] text-white w-full py-2 rounded-lg hover:bg-[#082c64] transition duration-300 ease-in-out"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <Link to="/signup" className="block text-center text-indigo-600 text-sm font-medium mt-2 hover:underline">
          Sign up for an account
        </Link>
      </div>
    </div></div>
  );
}

export default SignIn;