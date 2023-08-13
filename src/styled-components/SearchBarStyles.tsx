import styled from "styled-components";
import {styled as muiStyled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const SearchArea = styled.div`
  display: flex;
  height: 60px;
  flex-direction: row;
  //border-bottom: 1px solid #2A3A50;
  align-items: center;
  //background: #233043;
  justify-content: space-between;
  margin-left: 80px;
  margin-top: 36px;
  margin-right: 80px;
  margin-bottom: 16px;
`;
const DevicesSearchBar = muiStyled(TextField)({
    '& label.Mui-focused': {
        color: '#D7E1EC',
    },
    borderRadius: '6px',
    // border: '1px solid #2A3A50',
    background: '#1E2939',
    '& .MuiInput-underline:after': {
        borderBottomColor: '#red',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#2A3A50',
        },
        '&:hover fieldset': {
            borderColor: '#525f73',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
    },
});


const searchTextStyle = {

    color: '#D7E1EC',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px', /* 142.857% */
    letterSpacing: '0.28px',
}
const textStyle = {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px', /* 142.857% */
    letterSpacing: '0.28px',
    color: '#57617E',
};
export {SearchArea, DevicesSearchBar, searchTextStyle, textStyle};

