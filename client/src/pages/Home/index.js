import "./home.css";
import AboutSection from "../../components/aboutsection";
import WhySection from "../../components/whysection";
import Slide from "../../components/slide";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <HomeIntro>
        <h2>Get Any Car on Rent</h2>
      </HomeIntro>
      <HomeSection>
        <div>
          <h1> Book a City Taxi to your destination in town</h1>
          <p> Choose from a range of categories and prices</p>
        </div>
      </HomeSection>
      <AboutSection />
      <WhySection />
      <Slide />
    </Container>
  );
};
const Container = styled.div`
  text-align: center;
`;
const HomeIntro = styled.div`
  margin: 20px;
  color: #505056;
  background-color: #fef1f440;
  border-radius: 38px;
  > h2 {
    font-size: 2.6rem;
  }
`;

const HomeSection = styled.section`
  height: 400px;
  margin-bottom: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  ::before {
    content: "";
    background: url("https://www.nerdwallet.com/assets/blog/wp-content/uploads/2018/01/why-kei-51455-1440x864.jpg")
      repeat center center/cover;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.95;
    top: 0px;
    left: 0px;
    filter: blur(3px);
    -webkit-filter: blur(4px);
  }
  > div {
    margin-top: 100px;
  }
  > div > h1 {
    font-family: "Anton", sans-serif;
  }
  > div > p {
    font-size: 1.3rem;
  }
`;
export default HomePage;
