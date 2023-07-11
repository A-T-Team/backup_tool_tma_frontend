import styled from "styled-components";
import {Col, Row} from "react-bootstrap";

export const DeviceItemContainer = styled(Row)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  background-color: #1A2432;
  border-bottom: 1px solid #2A3A50;
  width: 100%;
`;

export const DeviceField = styled(Col)`
      color: #D7E1EC;
      font-size: 12px;
    `;

export const DeviceStatus = styled(Col)`
    color: #3ACD4F;
    `;

export const VendorIcon = styled.img`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;
