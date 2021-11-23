import styled from "styled-components";
import { theme, device } from "./theme";
export const ParentGridStyle = styled.div`
  width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  @media ${device.mobileS} {
    grid-template-columns: 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.laptopL} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(5, 1fr);
  }
  @media ${device.desktopL} {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const ChildrenGridStyle = styled.div`
  display: grid;
  margin-bottom: 5px;
  border-radius: 6px;
`;
export const PagintaionContainerStyle = styled.ul`
  display: flex;
  width: "80%";
`;

export const PaginationItemStyle = styled.li.attrs((props) => ({
  className: props.className,
}))`
  height: 32px;
  padding: 0 12px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 18px;
  min-width: 32px;
  &.selected {
    background-color: rgba(0, 0, 0, 0.08);
  }
  &.disabled {
    pointer-events: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
`;

export const ArrowStyle = styled.div.attrs((props) => ({
  className: props.className,
}))`
  content: "";
  display: inline-block;
  width: 0.4em;
  height: 0.4em;
  border-right: 0.12em solid rgba(0, 0, 0, 0.87);
  border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  &.left {
    transform: rotate(-135deg);
  }
  &.right {
    transform: rotate(45deg);
  }
`;

export const SelectStyle = styled.select`
  display: flex;
  margin: 0 auto;
  width: 280px;
  height: 45px;
  padding: 10px 10px;
  font-size: 18px;
  line-height: 25px;
  border: 1px solid rgb(65, 70, 70);
  color: black;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  :focus {
    outline: none;
  }
`;
export const InputStyle = styled.input`
  display: flex;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 280px;
  height: 50px;
  padding: 10px 10px;
  font-size: 18px;
  line-height: 25px;
  border: 1px solid rgb(65, 70, 70);
  border-radius: 10px;
  &:focus {
    outline: 0;
  }
`;
