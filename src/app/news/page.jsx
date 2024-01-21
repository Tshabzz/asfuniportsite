"use client"

import Search from 'antd/es/input/Search'
import newsheroimg from '../../../public/newshero.png'
import { ArrowDropDown, SearchOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { DatePicker, Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'

const NewsPage = ({}) => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === '3') {
      setOpen(false);
    }
  };
  const handleOpenChange = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const dateFormat = 'YYYY/MM/DD';
  const items = [
    {
      label: 'Clicking me will not close the menu.',
      key: '1',
    },
    {
      label: 'Clicking me will not close the menu also.',
      key: '2',
    },
    {
      label: 'Clicking me will close the menu.',
      key: '3',
    },
    {
      label: 'Clicking me will close the menu.',
      key: '4',
    },
    {
      label: 'Clicking me will close the menu.',
      key: '5',
    },
    {
      label: 'Clicking me will close the menu.',
      key: '6',
    },
  ];
  
  return (
    <div>
        <section className={`w-full `} style={{
            background: `url(${newsheroimg.src})`,
            height: '60vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div style={{
                position: 'absolute',
                backgroundColor: '#093E32e4',
                width: '100%', height:'384px',
                zIndex: 3
              }}
            />
            <div className='flex flex-col space-y-4 relative z-20 flex items-center pt-48 px-56 lg:px-48 md:px-20 sm:px-10'>
                <div className="h-9 w-full p-2 flex flex-row border border-dark-green border-solid items-center rounded-sm bg-slate-100">
                    <input spellCheck={false} type="text" className="h-6 w-full outline-none py-2 px-2 text-xs bg-slate-100 no-underline" placeholder="Search" />
                    <SearchOutlined className="h-6 w-6 opacity-50 fill-dark-green cursor-pointer" />
                </div>
                <div className='flex flex-row space-x-4 w-full'>
                  <div className='flex flex-row h-9 w-full p-2 flex flex-row border border-dark-green border-solid items-center rounded-sm bg-slate-100'>
                    <input spellCheck={false} type="text" className="h-6 w-full outline-none py-2 px-2 text-xs bg-slate-100 no-underline" placeholder="Category" />
                    <Dropdown
                      menu={{
                        items,
                        onMouseOver: handleMenuClick,
                        onClick: handleMenuClick
                      }}
                      onOpenChange={handleOpenChange}
                      open={open}
                      placement="bottomRight" 
                      arrow={{ pointAtCenter: true }}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          <ArrowDropDown className='h-6 w-6 opacity-50 hover:opacity-75 active:opacity-75 fill-dark-green cursor-pointer'/>
                        </Space>
                      </a>
                    </Dropdown>
                  </div>
                  <div className='w-full'>
                    <DatePicker className='h-9 w-full p-2 bg-slate-100 rounded-sm border border-dark-green hover:border-dark-green active:border-dark-green border-solid cursor-pointer fill-dark-green' defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
                  </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default NewsPage