import styled from 'styled-components';
import topBack from '../../images/topback.png';
import logo from '../../images/logo.png';

export const Footer = styled.footer`
  position: relative;
  width: 100%;
  padding: 70px 0;
  margin: 0;
  color: #fff;
  text-align: center;
  font-size: 16px;
  background-color: #332a2c;

  & .neet {
    padding-top: 30px;
    font-size: 14px;
    line-height: 1.6;
  }

  & .topBack {
    width: 100%;
    height: 44px;
    border-top: 5px solid #ffffff;
    background-color: #be121b;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;

    & a {
      display: block;
      position: absolute;
      top: -55px;
      left: 50%;
      margin-left: -72px;
      background-image: url(${topBack});
      width: 154px;
      height: 94px;
      overflow: hidden;
      white-space: nowrap;
      text-indent: 100%;
    }
  }
`;

export const Logo = styled.a`
  background-image: url(${logo});
  background-size: contain;
  width: 330px;
  height: 110px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  position: relative;
  margin-top: 30px;
  margin-bottom: 35px;
`;

export const Link = styled.a`
  padding: 0 25px;
  color: #fff;
  text-decoration: none;
`;
