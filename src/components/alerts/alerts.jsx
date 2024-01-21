import React, { useContext } from 'react';
import { Alert, Space } from 'antd';
import { DisplatchContext } from '@/app/layout';

const Alerts = ({}) => {
    const [alerts, dispatch] = useContext(DisplatchContext)

    return (
        <Space className='fixed opacity-90 top-5 right-2 z-50' direction="vertical" style={{ width: '100%' }}>
            <button onClick={() => dispatch({type: 'ADD', message: "Success Tips",
            description: "Detailed description and advice about successful copywriting.",
            typeof: "success"})}>Add Alert</button>
            {(alerts?.length !== 0) 
            &&
            (alerts?.map((_, index) => (
                <Alert
                    key={index}
                    message={_?.message}
                    description={_?.description}
                    type={_?.type}
                    showIcon
                    closable
                />
            )))}
            {/* <Alert
            message="Success Tips"
            description="Detailed description and advice about successful copywriting."
            type="success"
            showIcon
            />
            <Alert
            message="Informational Notes"
            description="Additional description and information about copywriting."
            type="info"
            showIcon
            />
            <Alert
            message="Warning"
            description="This is a warning notice about copywriting."
            type="warning"
            showIcon
            closable
            />
            <Alert
            message="Error"
            description="This is an error message about copywriting."
            type="error"
            showIcon
            /> */}
        </Space>
)};

export default Alerts;