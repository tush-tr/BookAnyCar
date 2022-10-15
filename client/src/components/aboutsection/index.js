import styled from "styled-components";

const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <h2>A car for every occasion</h2>
      <p>
        We offers city taxies, cars for your every occasin on the best prices.
      </p>
      <CardsContainer>
        <Card>
          <img
            src="https://www.alabamamediagroup.com/wp-content/uploads/2017/04/newcar2-1030x687.jpg"
            alt=""
          />
          <div>
            <h3>CITY TAXI</h3>
            <p>
              The perfect way to get through your everyday travel needs. City
              taxis are available 24/7 and you can book and travel in an
              instant. With rides starting from as low as Rs. 6/km, you can
              choose from a wide range of options! You can also opt to do your
              bit for the environment with Ola Share!
            </p>
          </div>
        </Card>
        <Card>
          <img
            src="https://www.credit.com/wp-content/uploads/2016/10/car-loans-612x281.jpg"
            alt=""
          />
          <div>
            <h3>OUTSTATION</h3>
            <p>
              Ride out of town at affordable one-way and round-trip fares with
              Ola{"'"}s intercity travel service. Choose from a range of AC cabs
              driven by top partners, available in 1 hour or book upto 7 days in
              advance. We have you covered across India with presence in 90+
              cities with over 500 one way routes.
            </p>
          </div>
        </Card>
        <Card>
          <img
            src="https://www.magnifymoney.com/mmassets/uploads/2016/07/iStock_84439397_MEDIUM-e1468909231318-1-e1469425068437.jpg"
            alt=""
          />
          <div>
            <h3>RENTALS</h3>
            <p>
              With Ola Rentals you get a cab at your disposal. So be it a day
              long business meeting, a shopping trip with your friends or just a
              day out in a new city, we have you covered. Packages start at 1
              hour and can be extended upto 12 hours!
            </p>
          </div>
        </Card>
      </CardsContainer>
    </AboutSectionContainer>
  );
};
const AboutSectionContainer = styled.section`
  text-align: initial;
  margin-top: 50px;
  > h2 {
    background-color: antiquewhite;
    width: 100%;
    font-family: "Roboto Mono", monospace;
  }
  > p {
    font-size: 1.2rem;
  }
  @media (min-width: 200px) and (max-width: 600px) {
    > h2 {
      margin-top: 20px;
    }
  }
`;
const CardsContainer = styled.div`
  display: flex;
  height: 34rem;
  @media (min-width: 200px) and (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;
const Card = styled.div`
  padding: 20px;
  background-color: #eff0f1;
  margin: 10px;
  width: 33%;
  border: 2px solid #cacdd0;
  border-radius: 10px;
  > img {
    width: 100%;
    height: 50%;
    margin-bottom: 10px;
  }
  @media (min-width: 200px) and (max-width: 600px) {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`;
export default AboutSection;
