import styled from "styled-components";
const WhyCard = ({ heading, description, imgUrl }) => {
  return (
    <Card>
      <img src={imgUrl} alt="" />
      <div className="why-card-info">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </Card>
  );
};
const Card = styled.div`
  display: flex;
  width: 50%;
  background-color: #cafbf1;
  margin: 10px;
  padding: 10px;
  border: 2px solid #94d0c3;
  border-radius: 12px;
  > img {
    width: 30%;
    height: 100px;
    margin: 10px;
    border-radius: 10px;
  }
  @media (min-width: 200px) and (max-width: 600px) {
    width: 100%;
    margin: 10px 0px 10px 0px;
  }
`;
export default WhyCard;
