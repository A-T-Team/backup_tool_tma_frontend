import styled from "styled-components";

export const BackupsContainer = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
`

export const BackupsList = styled.ul`
  list-style: none;
  width: 260px;
  padding: 0;
  margin: 0;

  color: #D7E1EC;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.28px;`

export const BackupsItem = styled.li<{ isActive?: boolean }>`
  padding: 8px 16px;
  background-color: ${props => (props.isActive ? '#37465e' : 'transparent')}
`

export const BackupReport = styled.div`
  width: 948px;
  height: 712px;
  border-radius: 6px;
  border: 1px solid #2A3A50;
  background: #18202C;
`

export const BackupReportHeader = styled.div`
  color: #FFF;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.32px;
  padding: 12px 24px;
  border: 1px solid #2A3A50;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const BackupReportHeaderText = styled.p`
  margin: 0;
  padding: 0;
`

export const BackupReportText = styled.div`
  padding: 16px 24px;
  color: #D7E1EC;
  font-family: 'Roboto Mono', sans-serif;;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.14px;
`

