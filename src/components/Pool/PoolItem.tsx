import {
    PoolContainer, PoolHeader, PoolInfo, PoolNameContainer,
    PoolName, PoolNameButton, PoolLogoContainer, PoolLogo, PoolDeviceCount, PoolDescription
} from "../../styled-components/PoolStyles/PoolItemStyles";
import poolMenuButton from '../../assets/Pool/drop_down_dutton.png'
import poolLogo from '../../assets/Pool/logo.png'
import {useNavigate} from "react-router-dom";

export function PoolItem() {
    const navigate = useNavigate();
    return (
        <PoolContainer onClick = {() => (navigate(`/devices`))}>
            <PoolHeader>
                <PoolLogoContainer>
                    <PoolLogo src={poolLogo}/>
                </PoolLogoContainer>

                <PoolInfo>
                    <PoolNameContainer>
                        <PoolName>Pool Name</PoolName>
                        <PoolNameButton src={poolMenuButton}/>
                    </PoolNameContainer>
                    <PoolDeviceCount>120 Devices</PoolDeviceCount>
                </PoolInfo>

            </PoolHeader>
            <PoolDescription>Organizations are privately shared spaces for teams to collaborate on
                infrastructure.</PoolDescription>
        </PoolContainer>


    );

}
