import styled from "styled-components";
import {styled as muiStyled} from '@mui/material/styles';
import Button from "@mui/material/Button";

const PoolContainer = styled.div`
  display: flex;
  width: 408px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 8px;
  border: 1px solid #2A3A50;
  background: #1E2939;
  height: 168px;


  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s;
    border-radius: 8px;
    border: 2px solid #276BD2;
    background: #233043;
    box-shadow: 0px 0px 20px 0px rgba(46, 114, 217, 0.24);

  }


`;

const PoolHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;

`;

const PoolLogoContainer = styled.div`
  display: flex;

  width: 60px;
  height: 60px;
  //flex-shrink: 0;
  border-radius: 8px;
  background: #276BD2;
  align-items: center;
  justify-content: center;


`

const PoolLogo = styled.img`
  width: 40px;
  height: 40px;
  //flex-shrink: 0;
`

const PoolInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`;

const PoolNameContainer = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  justify-content: space-between;
`;

const PoolName = styled.p`
  color: #FFF;
  font-family: Inter, serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
  letter-spacing: 0.4px;
  margin: 0;
`

const PoolDeviceCount = styled.p`
  color: #D7E1EC;
  font-family: Inter, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.32px;
  margin: 0;

`


const PoolDescription = styled.p`
  color: #D7E1EC;
  font-family: Inter, serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.28px;
`

const PoolNameButton = styled.img`
  width: 24px;
  height: 24px;

`


export {
    PoolContainer, PoolHeader, PoolInfo, PoolNameContainer, PoolName,
    PoolNameButton, PoolLogoContainer, PoolLogo, PoolDeviceCount, PoolDescription
};