import styled from "styled-components";
import {styled as muiStyled} from '@mui/material/styles';
import Button from "@mui/material/Button";

const DevicesHeader = styled.div`
  display: flex;
  //height: 60px;
  flex-direction: row;
  //border-bottom: 1px solid #2A3A50;
  align-items: center;
  //background: #233043;
  justify-content: space-between;
  margin-left: 80px;
  margin-top: 36px;
  margin-right: 80px;
  margin-bottom: 28px;

`;

const DevicesParagraph = styled.p`
  color: #D7E1EC;
  font-family: Inter, serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 128.571% */
  letter-spacing: 0.56px;
  margin: 0;
`
const AddDeviceButton = muiStyled(Button)({
    color: '#D7E1EC',
    fontSize: '14px',
    padding: '10px 16px',
    fontFamily: ' Inter,serif',
    borderRadius: '6px',
    border: '0.5px solid rgba(255, 255, 255, 0.12)',
    textTransform: 'none',


});

export {DevicesHeader, DevicesParagraph, AddDeviceButton};