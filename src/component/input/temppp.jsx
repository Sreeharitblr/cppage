const { useState } = React;

function signupUser() {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
}

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

Signup = () => {
  const [
    { username, email, password, passwordConfirmation },
    setState
  ] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    signupUser().then(clearState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input value={username} name="username" onChange={onChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input value={email} name="email" onChange={onChange} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            value={password}
            name="password"
            type="password"
            onChange={onChange}
          />
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input
            value={passwordConfirmation}
            name="passwordConfirmation"
            type="password"
            onChange={onChange}
          />
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
};

ReactDOM.render(<Signup />, document.getElementById("root"));