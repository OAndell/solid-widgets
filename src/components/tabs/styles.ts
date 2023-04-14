import { styled } from "solid-styled-components";

export const Tab = styled<any>("button")`
  padding: 20px 16px 0px;
  background: #e5e0eb;
  border: none;
  width: 100%;
  &.active {
    color: #9d3fe7;
    border-bottom: 2px solid #9d3fe7;
  }
`;

export const TabsContainer = styled<any>("div")`
  display: flex;
`;
