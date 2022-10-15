import "./form.css";
const addCarForm = () => {
  return (
    <section className="login">
      <div className="login_box">
        <div className="left">
          <div className="contact">
            <form action="/addcar" method="post" encType="multipart/form-data">
              <input type="text" name="car" placeholder="CAR DETAILS" />
              <input type="text" name="model" placeholder="MODEL NAME" />
              <input type="text" name="fair" placeholder="FAIR PRICE" />
              <input type="file" name="image" id="upload-file" />
              <button className="submit">Add your Car</button>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="right-text">
            <h2>BOOK ANY CAR</h2>
            <h5>A car for every occasion</h5>
          </div>
          <div className="right-inductor" />
        </div>
      </div>
    </section>
  );
};
export default addCarForm;