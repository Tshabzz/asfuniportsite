"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React, { useState } from "react"
import Image from "next/image"
import asflogo from '../../public/asflogo.png'
import { ArrowDropDown, AccountCircle, MenuOpen } from "@mui/icons-material"
import user from "../../public/user.png"
import adventistlogo from '../../public/adventistlogo-white.png'
import asfLogo from '../../public/asflogo.png'
import pcmlogo from '../../public/pcmlogo.png'
import { Button, Divider, Drawer, Dropdown, Space, theme } from "antd"
import { signIn, signOut, useSession } from "next-auth/react"
import { DownOutlined } from "@ant-design/icons"



const Navbar = ({}) => {
    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
      ];
    const session = useSession()
    const {getDesignToken, useToken} = theme
    const config = {
        token: {
          colorPrimary: '#007057',
        },
      }

    const globalToken = getDesignToken(config)
    const pathName = usePathname()
    const [paths, setPaths] = useState([
        {name: 'Sabbath School', link: 'sabbathschool'},
        {name: 'Video/Podcasts', link: 'videos'},
        {name: 'Library', link: 'library'},
        {name: 'Donate', link: 'donate'},
        {name: 'News/Blog', link: 'news'},
        {name: 'About US', link: 'about'}
    ])

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const router = useRouter()

    return (
        <>
        { pathName == '/login' || pathName == '/register' ? (
            <></>
        ) : (
            <>
            <div className={`${pathName == '/' ? 'bg-dark-green h-24 pt-5 ' : 'bg-transparent h-20 pt-3'} fixed w-full z-40 md:hidden sm:hidden`}>
                {pathName === '/' && (
                    <h2 className="flex justify-center text-white font-semibold text-sm lg:text-xs">ADVENTIST STUDENTS <br className="hidden md:block" /> FELLOWSHIP (ASF) UNIPORT</h2>
                )}

                <div className="flex flex-row justify-center items-center lg:space-x-4 space-x-10 mt-4">
                    {paths.slice(0,3).map((path, index) => (
                        <Link key={index} className={`-mt-5 text-sm lg:text-xs barlink font-medium text-white hover:opacity-75 active:opacity-75 ${pathName == `/${path.link}` && 'border-b-2'}`} href={`/${path.link}`}>{path.name}</Link>
                    ))}
                    <Image 
                        src={asflogo}
                        alt="ASF Uniport"
                        width={50}
                        height={50}
                        className="hover:opacity-50 active:opacity-50"
                        style={{border: `${pathName == '/' ? '6px solid #007057' : 'none'}`, borderRadius: '100%', cursor: 'pointer'}}
                        onClick={() => router.push('/')}
                    />
                    {paths.slice(3,6).map((path, index) => (
                        <Link key={index} className={`-mt-5 text-sm lg:text-xs barlink font-medium text-white hover:opacity-75 active:opacity-75 space-y-1 ${pathName == `/${path.link}` && 'border-b-2'}`} href={`/${path.link}`}>{path.name}</Link>
                    ))}
                    {session.status == 'loading' && (
                        <button disabled="disabled" className="opacity-50 cursor-not-allowed h-10 w-20 bg-[#3FD0C9] text-black rounded-md font-medium test-sm shadow-sm shadow-[#3FD0C9] -mt-10">SignIn</button>
                    )}
                    {session.status == 'authenticated' && (
                        <div className="flex space-x-2 flex-row mb-3 items-center cursor-pointer ">
                            <Image
                                src={session?.data?.user.image}
                                alt="Profile"
                                height={30}
                                width={30}
                                className="rounded-full hover:opacity-75 "
                            />
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                dropdownRender={(menu) => (
                                    <div>
                                     <button onClick={signOut}>SignOut</button>
                                    </div>
                                )}
                                >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                    <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    )}
                    {session.status == 'unauthenticated' && (
                        <button type="button" onClick={() => router.push('/login')} className=" h-10 w-20 bg-[#3FD0C9] text-black rounded-md font-medium hover:opacity-75 hover:shadow-lg test-sm  shadow-sm shadow-[#3FD0C9] -mt-10">SignIn</button>
                    )}
                </div>
            </div>
            
            <div style={{marginLeft: '4.13%'}} className={`${pathName == '/' ? 'bg-dark-green ' : 'bg-transparent'} rounded-md h-28  flex justify-center mt-5 pt-5 fixed w-11/12 z-40 hidden px-6 md:block sm:block`}>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col space-y-2">
                            <div className='flex flex-row space-x-1'>
                            <Image 
                                src={adventistlogo}
                                alt='SDA Church'
                                width={35}
                                height={35}
                                className='hover:opacity-50 active:opacity-50'
                                style={{cursor: 'pointer', fill: 'white'}}
                                onClick={() => router.push('/')}
                            />
                            <Image 
                                src={pcmlogo}
                                alt='PCM'
                                width={35}
                                height={35}
                                className='hover:opacity-50 active:opacity-50'
                                style={{cursor: 'pointer'}}
                                onClick={() => router.push('/')}
                            />
                            <Image 
                                src={asfLogo}
                                alt='ASF Uniport'
                                width={35}
                                height={35}
                                className='hover:opacity-50 active:opacity-50'
                                style={{cursor: 'pointer'}}
                                onClick={() => router.push('/')}
                            />
                            </div>
                            <h2 className="flex justify-start text-white font-semibold text-sm sm:text-xs">ADVENTIST STUDENTS <br className="hidden md:block sm:block" /> FELLOWSHIP (ASF) UNIPORT</h2>
                        </div>
                        <div className="flex items-center">
                            <MenuOpen 
                                style={{
                                    height: '25px',
                                    width: '25px',
                                    fill: 'white'
                                }}
                                onClick={showDrawer}
                            />
                            <Drawer width='50%' style={{backgroundColor: '#093E32e4', color: 'white', display: 'flex'}} placement="right" onClose={onClose} open={open}>
                                    <div className="flex z-10 flex-row mb-3 items-center cursor-pointer hover:opacity-75">
                                        <Image
                                            src={user}
                                            alt="Profile"
                                            height={30}
                                            width={30}
                                        />
                                        <ArrowDropDown
                                            style={{
                                                height: '15px',
                                                width: '15px',
                                                fill: 'white'
                                            }}
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-5 divide-y divide-slate-300">
                                        {paths.map((path, index) => (
                                            <Link onClick={() => onClose()} className={`flex justify-end text-sm pt-5 font-semibold text-white active:text-slate-100 focus:text-slate-100 hover:opacity-75 active:opacity-75 ${pathName == `/${path.link}` && 'opacity-50'}`} key={index} href={`/${path.link}`}>{path.name}</Link>
                                        ))}
                                    </div>
                            </Drawer>
                        </div>
                </div>
            </div>

            </>
            
            )
        }
        </>
    )
}

export default Navbar