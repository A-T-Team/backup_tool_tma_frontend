import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const DeviceContainer = styled.div`
  background-color: #2A3A50;
  width: 1280px;
  height: 878px;
  padding: 24px;
  color: #fff;
  font-family: 'Inter', sans-serif;
  border-radius: 4px;

  margin-left: 80px;
  margin-top: 36px;
  margin-right: 80px;
  margin-bottom: 28px;
`;

export const DeviceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeviceTitle = styled.h2`
  flex: 1;
  color: #D7E1EC;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; 
  letter-spacing: 0.56px;
`;

export const DeviceData = styled.div`
  display: flex;
  align-items: center;
  color: #D7E1EC;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.32px;
`;

export const DeviceConnect = styled.div`
  margin-right: 32px;
`;

export const DeviceIcon = styled(FontAwesomeIcon)`
  font-size: 10px;
  padding: 3px;
 color: #3ACD4F;
  background-color: #38503C;
  border: 1px solid #3ACD4F;
  border-radius: 50%;
  margin-right: 8px;
`;

export const Connect = styled.span`

`;

export const DeviceIP = styled.span`
`;

export const Ip = styled.span`
    margin-right: 32px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const CloseIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #D7E1EC; 
  transition: color 0.3s ease; 


  &:hover {
    color: #FFF; 
  }
`;

export const DeviceMenu = styled.ul`
  display: flex;
  border-bottom: 1px solid #ccd6e21a;
  list-style: none; 
  padding: 0;
  margin: 0; 
`;

export const DeviceItem = styled.li<{ isActive?: boolean }>`
padding: 8px 16px;
  margin-right: 24px ;
  border-bottom: 2px solid  ${props => (props.isActive ? '#63A1FF' : 'none')};;
`;
