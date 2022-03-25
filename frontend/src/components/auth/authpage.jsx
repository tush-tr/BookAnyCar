import "./style.css";
const loginSignupPage = () => {
  const switchPage = (e) => {
    const switchers = document.querySelectorAll(".switcher");
    console.log(`Switchers: ${switchers[1]}`)
    switchers.forEach((item) =>
      item.parentElement.classList.remove("is-active")
    );
    console.log("THIS",this)
    e.target.parentElement.classList.add("is-active");
  };
  return (
    <section className="forms-section">
      <div className="forms">
        <div className="form-wrapper is-active">
          <button type="button" onClick={switchPage} className="switcher switcher-login">
            Login
            <span className="underline" />
          </button>
          <form className="form form-login">
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">E-mail</label>
                <input id="login-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
        </div>
        <div className="form-wrapper">
          <button type="button" onClick={switchPage} className="switcher switcher-signup">
            Sign Up
            <span className="underline" />
          </button>
          <form className="form form-signup">
            <fieldset>
              <legend>
                Please, enter your email, password and password confirmation for
                sign up.
              </legend>
              <div className="input-block">
                <label htmlFor="signup-email">E-mail</label>
                <input id="signup-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">Password</label>
                <input id="signup-password" type="password" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password-confirm">
                  Confirm password
                </label>
                <input id="signup-password-confirm" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-signup">
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default loginSignupPage;
