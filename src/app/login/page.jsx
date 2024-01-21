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
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {useSession, signIn, signOut, getProviders} from 'next-auth/react' 

const Page = ({}) => {
  const session = useSession()
  const router = useRouter()
  const [providers, setProviders] = useState(null);
  const [formdata, setFormData] = useState({

  })

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
      console.log(res)
    })();
  }, []);
  // const {data, status} = useSession()
 

  
  return (
    <div className="bg-dark-green h-screen w-screen pt-16">
      {console.log(session, 'session')}
      <div className=" flex justify-center">
        <div className="bg-white rounded-bl-3xl flex lg:w-5/6 w-4/5 h-4/5">
          <div className='flex p-6 flex-col content-evenly lg:px-6 sm:py-16 md:py-12 lg:py-12 w-2/5 md:w-full sm:w-full'>
            <div className='flex flex-row sm:flex-col space-x-1 items-center'>
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
            <div className='flex flex-col content-center mt-12' style={{flexWrap: 'wrap'}}>
              <AccountCircleIcon style={{
                fill: '#007057',
                width: '51px'
              }} />
              <h2 className='font-medium font-sans text-dark-green text-xl'>Login</h2>
            </div>
            <div className='flex space-y-3 flex-col mt-6'>
              <input className='outline-none rounded-sm border-black bg-gray-100 text-sm h-7 p-1' type='email' placeholder='Email'/>
              <input className='outline-none rounded-sm border-black bg-gray-100 text-sm h-7 p-1' type='password' placeholder='Password'/>
              <input  className='outline-none rounded-sm bg-dark-green cursor-pointer text-sm text-white h-7 p-1 hover:opacity-75 active:opacity-75'type='submit' value='Submit'/>
            </div>
            <div className='text-sm'>Forgot Password? <Link className='text-dark-green' href='/'>Recover Here</Link> </div>
            <div className='flex justify-center mt-4 text-xs'>OR</div>
            <div className='flex flex-row items-center text-xs font-medium justify-center space-x-3 mt-4'>
              <h3 className='leading-none'>Login <br /> With</h3>
              <Image 
                src={GoogleIcon}
                alt='Google'
                width={25}
                height={25}
                style={{cursor: 'pointer'}}
                className='hover:opacity-50'
                onClick={() => signIn('google')}
              />
              <hr style={{border: '0.2px black solid', height: '50px', width: '0.2px'}} />
              <Image 
                src={FacebookIcon}
                alt='Google'
                width={25}
                height={25}
                className='hover:opacity-50'
                style={{cursor: 'pointer'}}
                
              />
            </div>
            <div className='text-sm mt-6'>Don't Have an Account? <Link className='text-dark-green' href='/register'>Sign Up</Link></div>

          </div>
          <div className='bg-green bg-top md:invisible sm:invisible md:none w-3/5 md:w-0 sm:w-0' style={{backgroundImage: `url(${backgroundImg.src})`, height:'80vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <h2 className='absolute text-4xl text-white top-40 font-bold font-sans' style={{zIndex: '1', right: '30vw'}}>Welcome <br/> Home</h2>
            <div style={
              {
                position: 'relative',
                backgroundColor: '#007057c9',
                width: '100%', height:'80vh'
              }
            }/>
            
          </div>
        </div>
      </div>
    </div>
  )
}



export default Page