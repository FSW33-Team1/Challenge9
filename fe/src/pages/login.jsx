import { useRef, useEffect, useState } from 'react'

const Login = () => {
  const useRef = useRef();
  const errRef = errRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSucess] = useState(false);

  useEffect(() => {
    useRef.curret.focus();

  }, [])
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSucess(true);
  }

  return (
    <>
      {success ? (
        <section>
          <h1>You Are Logged In!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) :
        (
          <section>
            <p> ref={errMsg} classname={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username :</label>
              <input type="text"
                id="username"
                ref={useRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required />

              <label htmlFor="password">Password :</label>
              <input type="text"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required />
              <button>Sign In</button>
            </form>

          </section>
        )}
    </>
  )
}
// < div > Halman Login</div >;

export default Login;
