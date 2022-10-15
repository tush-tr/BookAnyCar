import WhyCard from "./whycard";
import styled from "styled-components";

const WhySection = () => {
  return (
    <Section>
      <h1>Why Book Any Car?</h1>
      <p>The best way to travel to your destination</p>
      <div className="why-section-container">
        <Container>
          <WhyCard
            heading="Cabs for Every Pocket"
            description="From Sedans and SUVs to Luxury cars for special occasions, we
                have cabs to suit every pocket"
            imgUrl="https://cms-web.olacabs.com/00000000368.jpg"
          />
          <WhyCard
            heading="Secure and Safer Rides"
            description="Verified drivers, an emergency alert button, and live ride
                tracking are some of the features that we have in place to
                ensure you a safe travel experience."
            imgUrl="https://cms-web.olacabs.com/00000000370.jpg"
          />
        </Container>
        <Container>
          <WhyCard
            heading="Share and Express"
            description="To travel with the lowest fares choose Ola Share. For a faster
                travel experience we have Share Express on some fixed routes
                with zero deviations. Choose your ride and zoom away!"
            imgUrl="https://cms-web.olacabs.com/00000000382.jpg"
          />
          <WhyCard
            heading="In Cab Entertainment"
            description="Play music, watch videos and a lot more with Ola Play! Also stay
                connected even if you are travelling through poor network areas
                with our free wifi facility."
            imgUrl="https://cms-web.olacabs.com/00000000371.jpg"
          />
        </Container>
      </div>
    </Section>
  );
};
const Section = styled.section`
  text-align: left;
  margin-top: 20px;
  padding: 10px;
`;
const Container = styled.div`
  display: flex;
  @media (min-width: 200px) and (max-width: 600px) {
    flex-direction: column;
  }
`;
export default WhySection;
