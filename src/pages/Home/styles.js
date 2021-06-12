import colors from '@/styles/colors';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  overflow: hidden;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url('https://i.ytimg.com/vi/Gc9rTsBO1lE/maxresdefault.jpg')center no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

export const Chest = styled.div`
  padding: 15px 0;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%);
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
`;


export const Footer = styled.div`
  display: flex;
  margin-top: 30px;
  color: ${colors.white};
  font-size: 12px;
  width: 100%;

  .pad {
    padding: 0 15px;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div``;

export const ChestTitle = styled.h2`
  font-size: 15px;
  text-transform: uppercase;
  color: ${colors.white};
  margin-bottom: 15px;
  display: flex;

  span {
    flex: 1;
    text-align: right;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -3px;
  height: 55vh;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: transparent; 
    border-radius: 0;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.primary}; 
    border-radius: 30px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.secundary}; 
  }
`

export const Item = styled.div`
  flex: 13%;
  max-width: 165px;
  padding: 3px;
  box-sizing: content-box;
  height: 150px;
`;

export const Content = styled.div`
  display: flex;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 4px;
  padding: 3px;
  height: 100%;
  width: 100%;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 3px;
  background: ${colors.lighter};
  overflow: hidden;
  margin-top: 8px;
  border-radius: 30px;
`;

export const Bar = styled.div`
  width: 50%;
  height: 100%;
  transition: 250ms all;
  background: ${colors.primary};
  border-radius: 30px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const UserCard = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  align-items: flex-end;
`;

export const InfoUser = styled.div`
  flex: 1;
  text-align: left;

  h3 {
    font-size: 32px;
    color: ${colors.white}
  }

  h4 {
    font-size: 28px;
    color: ${colors.lighter};
  }


  &.flex {
    display: flex;
  }

  .circle-small {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 20px;

    svg {
      width: 80px;
      height: 80px;
    }

    .bg {
      fill: none;
      stroke-width: 6px;
      stroke: #343035;
    }

    .progress {
      fill: none;
      stroke-width: 6px;
      stroke: ${colors.primary};
      stroke-linecap: round;
      stroke-dasharray: 232.36;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
    }

    .progress.one {
      stroke-dashoffset: 80;
      animation: one 2.5s ease-in-out, appear 1s;
    }

    .progress.two {
      stroke-dashoffset: 140;
      animation: two 3.5s ease-in-out, appear 2s;
    }

    .text {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      font-size: 17px;
      text-align: center;
      font-weight: 400;
      line-height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.white};

      .small {
        font-size: 12px;
        color: #fff;
      }
    }
  }

  &.extras {
    color: white;
    font-size: 22px;
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      padding-top: 30px;

      li {
        display: block;
        text-align: right;
        padding: 0 10px;

        &.phone {
          padding-left: 0;

          h5 {
            background-color: rgba(18, 135, 255, 0.9);
          }
          
          svg {
            margin: 0 0 0 -3px;
          }
        }

        &.bank {
          h5 {
            background-color: rgba(0,0,0,0.9);
          }
        }

        &.vip {
          h5 {
            background-color: ${colors.warning};
          }
        }
      }
    }

    h5 {
      font-weight: 300;
      margin-bottom: 5px;
      padding-bottom: 5px;
      display: inline-block;
      font-size: 14px;
      vertical-align: middle;
      background-color: rgba(255,255,255,0.2);
      border-radius:5px;
      padding: 5px 10px;
      box-sizing: content-box;
      display: flex;
      align-items: center;
      justify-content: center;
      
      svg {
        font-size: 18px;
        margin-right: 5px;
      }
    }
  }
`;