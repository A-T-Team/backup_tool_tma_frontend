import styled from "styled-components";
import { Col, Row} from "react-bootstrap";

export const DeviceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  background-color: #1A2432;
  margin-bottom: 8px;
  margin-left: 80px;
  margin-right: 80px;
  width: calc(100% - 160px);
  border: 1px solid #2A3A50;
`;

export const ListHeaderContainer = styled(Row)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  background-color: #233043;
  border-bottom: 1px solid #2A3A50;
  width: 100%;
`;
export const ListHeaderItem = styled(Col)`
  color: #D7E1EC;
  font-size: 12px;
`;

