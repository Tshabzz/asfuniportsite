"use client"

import Link from 'next/link';
import backgroundImg from '../../../public/img.jpeg'
import adventistlogo from '../../../public/adventistlogo.svg'
import asfLogo from '../../../public/asflogo.png'
import pcmlogo from '../../../public/pcmlogo.png'
import uniportlogo from '../../../public/uniportlogo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GoogleIcon from '../../../public/googleIcon.svg'
import FacebookIcon from '../../../public/facebookIcon.svg'
import Image from 'next/image';
import { useEffect, useReducer, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LineWave } from 'react-loader-spinner';
import bcrypt from 'bcryptjs'

const Page = ({}) => {
  const [loading, setLoading] = useState(true)
  const form = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
  }
  const hashPassword = (_) => {
    const salt = bcrypt.genSaltSync(5)
    const hash = bcrypt.hashSync(_, salt)
    return hash
  }
  const formReducer = (state, action) => {
    switch (action.type) {
      case 'HASH':
        return {...state, password: hashPassword(action.value)}
      case 'UPDATE':
        return {...state, [action.key]: action.value}
      default:
        return state;
    }
  }
  const [formData, dispatchFormData] = useReducer(formReducer, form)
  const router = useRouter()
  const sendData = async () => {
    console.log(formData)
    const res = fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    console.log(res)
  }

  useEffect(() =>{
    setTimeout(() => setLoading(false), 1000);
  }, [])

  return (
    <>
    {/* {!loading ? 
    (
      <> */}
    <div className="bg-dark-green h-screen w-screen pt-16">
      <div className=" flex justify-center">
        <div className="bg-white rounded-br-3xl justify-evenly flex lg:w-5/6 w-4/5 h-4/5">
        <div className='bg-green bg-top md:invisible sm:invisible md:none w-3/5 lg:w-3/6 md:w-0 sm:w-0' style={{backgroundImage: `url(${backgroundImg.src})`, height:'80vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <h2 className='absolute text-5xl lg:text-3xl text-white top-80 font-bold font-sans' style={{zIndex: '1', left: '28vw'}}>Join Your <br/> Family On <br /> Campus</h2>
            <div style={
              {
                position: 'relative',
                backgroundColor: '#007057c9',
                width: '100%', height:'80vh'
              }
            }/>
            
          </div>
          <div className='flex p-6 flex-col lg:px-6 sm:py-16 md:py-12 lg:py-12 w-2/5 lg:w-3/6 md:w-full sm:w-full'>
            <div className='flex flex-row space-x-1 items-center sm:flex-col'>
              <div className='flex flex-row'>
              <Image 
                src={adventistlogo}
                alt='SDA Church'
                width={30}
                height={30}
                className='hover:opacity-50 active:opacity-50'
                style={{cursor: 'pointer'}}
                onClick={() => router.push('/')}
              />
              <Image 
                src={pcmlogo}
                alt='PCM'
                width={30}
                height={30}
                className='hover:opacity-50 active:opacity-50'
                style={{cursor: 'pointer'}}
                onClick={() => router.push('/')}
              />
              <Image 
                src={asfLogo}
                alt='ASF Uniport'
                width={30}
                height={30}
                className='hover:opacity-50 active:opacity-50'
                style={{cursor: 'pointer'}}
                onClick={() => router.push('/')}
              />
              </div>
              <Link href='/' className='leading-none font-semibold text-xs hover:opacity-50 active:opacity-50'>Adventist Students <br />Fellowship Uniport</Link>
            </div>
            <div className='flex flex-col items-center mt-5' style={{flexWrap: 'wrap'}}>
              <h2 className='font-medium font-sans text-dark-green text-xl'>Register</h2>
            </div>
            <div className='flex space-y-3 flex-col mt-6'>
              <input className='outline-none rounded-sm border-black bg-gray-100 text-sm h-7 p-1' type='email' onChange={(e) => dispatchFormData({type: 'UPDATE', key: 'email', value: e.target.value})}  placeholder='Email'/>
              <div className='flex flex-row items-center content-center space-x-3'>
                <div className=''>
                      <label className='text-xs flex flex-row space-x-2'>
                        <h2>Gender?</h2>
                        <select>
                          <option value="fruit">Male</option>
                          <option value="vegetable">Female</option>
                        </select>
                      </label>
                </div>
                <input className='outline-none rounded-sm w-full border-black bg-gray-100 text-sm h-7 p-1' type='text' onChange={(e) => dispatchFormData({type: 'UPDATE', key: 'username', value: e.target.value})} placeholder='Username'/>
              </div>
              <input className='outline-none rounded-sm border-black bg-gray-100 text-sm h-7 p-1' type='text' onChange={(e) => dispatchFormData({type: 'UPDATE', key: 'firstname', value: e.target.value})} placeholder='Firstname'/>
              <input className='outline-none rounded-sm border-black bg-gray-100 text-sm h-7 p-1' type='text' onChange={(e) => dispatchFormData({type: 'UPDATE', key: 'lastname', value: e.target.value})} placeholder='Lastname'/>
              <input className='outline-none rounded-sm border-black bg-gray-100 text-sm h-7 p-1' type='password' placeholder='Create Password'/>
              <input className='outline-none rounded-sm border-black bg-gray-100 text-sm h-7 p-1' type='password' onChange={(e) => dispatchFormData({type: 'HASH', value: e.target.value})} placeholder='Confirm Password'/>
              <div className='flex flex-row items-center space-x-3 sm:flex-col space-y-3'>
                <input  className='w-32 outline-none rounded-sm bg-dark-green cursor-pointer text-sm text-white h-7 p-1 hover:opacity-75 active:opacity-75 sm:w-full'type='submit' onClick={sendData} value='SignUp'/>
                <h2 className='text-xs font-medium'>OR</h2>
                <div className='flex flex-row items-center space-x-2'>
                  <h3 className='leading-none font-medium text-xs'>SignUp With</h3>
                  <Image 
                    src={GoogleIcon}
                    alt='Google'
                    width={25}
                    height={25}
                    style={{cursor: 'pointer'}}
                    className='hover:opacity-50'
                  />
                  <hr style={{border: '0.2px black solid', height: '30px', width: '0.2px'}} />
                  <Image 
                    src={FacebookIcon}
                    alt='Google'
                    width={25}
                    height={25}
                    className='hover:opacity-50'
                    style={{cursor: 'pointer'}}
                    
                  />
                </div>
              </div>
            </div>
            <div className='text-sm mt-6'>Already Have an Account? <Link className='text-dark-green' href='/login'>Sign In</Link></div>

          </div>
        </div>
      </div>
    </div>
    {/* </>) : ()} */}
    </>
  )
}

export default Page