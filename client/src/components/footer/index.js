import styled from "styled-components";
const Footer = () => {
  return (
    <FooterContainer>
      <div>Copyright © 2021 BookAnyCar All rights reserved.</div>
    </FooterContainer>
  );
};
const FooterContainer = styled.footer`
  text-align: center;
  width: 100%;
  height: 60px;
  background-color: #1abc9c;
  margin-top: 50px;
  > div {
    padding-top: 20px;
  }
  & p {
    margin-top: 25px;
    font-size: 12px;
    color: #fff;
  }
`;
export default Footer;
