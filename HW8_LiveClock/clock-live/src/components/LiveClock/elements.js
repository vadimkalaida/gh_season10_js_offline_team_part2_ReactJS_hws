import styled from 'styled-components';
import { displayFlex } from "../../elements";

export const MainTitle = styled.h1`
  font-size: 48px;
`;

export const TimeZonesBlock = styled.div`
  width: 960px;
  height: 500px;
  background: url(https://i.dlpng.com/static/png/4787627-picture-frame-steampunk-metal-free-photo-on-pixabay-steampunk-frame-png-960_671_preview.png) no-repeat center;
  background-size: contain;
`;

export const TimeZonesBlockContainer = styled.div`
  width: 55%;
  height: 310px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  margin-top: 90px;
`;

export const TimeZonesItem = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  border: 1px solid #706759;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: .2s;
  font-size: 20px;
  &:hover {
    background: #fff;
  }
`;

export const TimeBlock = styled.p`
  width: 505px;
  height: 617px;
  ${ displayFlex('center', 'flex-start', 'row') }
  padding-top: 165px;
  background: url(https://www.nicepng.com/png/full/155-1556864_steam-by-illustratorg-on-deviantart-steampunk-frame-png.png) no-repeat;
  background-size: contain;
  position: relative;
  & * {
    font-size: 48px;
    color: #D3A15B;
    font-weight: 800;
    text-shadow: 2px 2px 5px #000; 
  }
`;

export const TimeButton = styled.button`
  width: 300px;
  height: 70px;
  position: absolute;
  bottom: 120px;
  outline: none;
  border-radius: 15px;
  border: 2px solid #AEA58D;
  background: linear-gradient(90deg, #AA1F25, #330A0B);
  cursor: pointer;
  font-size: 32px;
  transition: .2s;
  &:hover {
    background: linear-gradient(90deg, #AD2328, #5B1214);
  }
  &:active {
    background: linear-gradient(90deg, #850000, #330A0B);
  }
`;