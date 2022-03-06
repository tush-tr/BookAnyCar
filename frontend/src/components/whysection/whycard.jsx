const WhyCard = ({ heading, description, imgUrl }) => {
  return (
    <div className="why-card">
      <img src={imgUrl} alt=""/>
      <div className="why-card-info">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default WhyCard;
