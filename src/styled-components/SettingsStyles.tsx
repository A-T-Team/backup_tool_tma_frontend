import styled from "styled-components";
import {TimePicker} from "antd";
import {styled as muiStyled} from '@mui/material/styles';
import TextField from "@mui/material/TextField";

export const CustomTimePicker = styled(TimePicker)`
  border: 1px solid #474e59;
  border-radius: 6px;
  height: 41px;
  background-color: #18202C;

  &:hover, &:focus {
    border: 1px solid #979ba2;
    box-shadow: none;
  }

  .ant-picker-input input {
    color: #D7E1EC;
  }

  .ant-picker-input::placeholder {
    color: #D7E1EC;
  }

  .ant-picker-active-bar {
    color: #D7E1EC;
  }

  .ant-picker-input input::placeholder {
    color: #18202C;
  }

  .ant-picker-clear {
    background-color: transparent; 
  }

  .ant-picker-suffix {
    color: #D7E1EC;
  }
`;


export const SettingsInput = muiStyled(TextField)({
    '& label.Mui-focused': {
        color: 'red',
    },
    borderRadius: '6px',
    border: '1px solid #2A3A50',
    background: '#18202C',
    color: '#D7E1EC',
    '& .MuiOutlinedInput-input': {
        padding: '12px',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '1px solid #474e59',
        },
        '&:hover fieldset': {
            border: '1px solid #979ba2',
        },
        '&.Mui-focused fieldset': {
            border: '1px solid #979ba2',
        },
    },
    '& input': {
        color: '#D7E1EC',
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '200%',
        letterSpacing: '0.24px',
    },
});

export const SettingsContainer = styled.div`
  padding: 24px 0;
  display: flex;
`

export const SettingsTitle = styled.h4`
  color: #FFF;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.4px;
  margin-bottom: 16px;
`
export const SettingsGenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  padding-right: 40px
`

export const SettingsSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%`
export const WeekPicker = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputLabel = styled.span`
  color: #D7E1EC;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.24px;
  margin-bottom: 6px`


export const WeekPickerList = styled.div`
  margin-top: 6px;
`

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`
export const TimePickerBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;`
