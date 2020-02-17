import React from "react";
import { useHistory } from "react-router-dom";
import loginUser from "../strapi/loginUser";
import registerUser from "../strapi/registerUser";
import { UserContext } from "../context/user";

export default function Login() {
  const history = useHistory();

  //user context
  const { userLogin, alert, showAlert } = React.useContext(UserContext);
  //state value
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("default");
  const [isMember, setIsMember] = React.useState(true);

  let isEmpty = !email || !password || !username;
  // let isEmpty = false;

  const toggleMember = () => {
    setIsMember(preValue => {
      let isMember = !preValue;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  };
  const handlerSubmit = async e => {
    e.preventDefault();
    let response;
    if (isMember) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ username, email, password });
    }
    if (response) {
      console.log("success!");
      console.log(response);
      const {
        jwt: token,
        user: { username }
      } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
      showAlert({
        msg: `you are logged in ${username}`
      });
      history.push("/products");
    } else {
      showAlert({
        msg: "there was an error, please try again",
        type: "danger"
      });
      setEmail("");
      setPassword("");
    }
  };
  console.log(`isMamber: ${isMember}`);
  console.log(`isEmpty: ${isEmpty}`);
  return (
    <section className=" form section">
      <h2 className="section-title">{isMember ? "sign in" : "register"}</h2>
      <form className="login-form">
        {/* Start: single input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></input>
        </div>
        {/* End: single input */}

        {/* Start: single input */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></input>
        </div>
        {/* End: single input */}
        {/* Start: single input */}
        {!isMember && (
          <div className="form-control">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            ></input>
          </div>
        )}
        {/* End: single input */}
        {/* Start: empty form text */}
        {isEmpty && (
          <p className="form-empty">please fill out all form field</p>
        )}
        {/* Start: empty form text */}

        {/* Start: submit button */}
        {!isEmpty && (
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handlerSubmit}
          >
            submit
          </button>
        )}
        {/* End: submit button */}

        {/* Start: register link */}
        <p className="register-link">
          {isMember ? "need to register" : "already register"}
          <button type="button" onClick={toggleMember}>
            click here
          </button>
        </p>
        {/* End: register link */}
      </form>
    </section>
  );
}
