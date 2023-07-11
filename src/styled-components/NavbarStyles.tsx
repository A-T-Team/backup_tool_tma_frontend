import styled from "styled-components";
import {Col} from "react-bootstrap";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  background-color: #233043;
  border: 1px solid #2A3A50;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 32px;
`;

export const NavItem = styled(Col)`
  color: #D7E1EC;
  font-size: 24px;
`;

export const AppIcon = styled.img`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;