import React, {useState} from 'react';
import {
    Button, CloseIcon,
    Connect,
    DeviceConnect,
    DeviceContainer,
    DeviceData,
    DeviceHeader, DeviceIcon, DeviceIP, DeviceItem, DeviceMenu,
    DeviceTitle, Ip
} from "../styled-components/DeviceWindowStyles";
import {faCheck, faClose} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import Settings from "./Settings";
import Backups from "./Backups";

const DeviceCard = () => {
    const [activeTab, setActiveTab] = useState("backups");
    const handleTabClick = (tab: string) => {
        setActiveTab(tab)
    };
    return (
        <DeviceContainer>
            <DeviceHeader>
                <DeviceTitle>Device name</DeviceTitle>
                <DeviceData>
                    <DeviceConnect>
                        <DeviceIcon icon={faCheck}/>
                        <Connect>Connected</Connect>
                    </DeviceConnect>
                    <DeviceIP>IP Address:</DeviceIP>
                    <Ip>192.168.123.132</Ip>
                </DeviceData>
                <Button>
                    <CloseIcon icon={faTimes}/>
                </Button>
            </DeviceHeader>
            <DeviceMenu>
                <DeviceItem onClick={() => handleTabClick('backups')} isActive={activeTab === 'backups'}>Backups</DeviceItem>
                <DeviceItem onClick={() => handleTabClick('settings')}
                            isActive={activeTab === 'settings'}>Settings</DeviceItem>
            </DeviceMenu>
            {activeTab === 'backups' && <Backups/>}
            {activeTab === 'settings' && <Settings/>}
        </DeviceContainer>
    );
};

export default DeviceCard;
