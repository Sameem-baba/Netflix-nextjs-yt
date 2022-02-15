import Head from "next/head";
import { useState } from "react";
import SignIn from "./SignIn";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div
      className="relative h-full"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/6dea7743-5586-45d1-89a2-9569b1bb0340/b8bbb6c3-80f1-4648-8527-521bd3bd8781/IN-en-20220207-popsignuptwoweeks-perspective_alpha_website_small.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <Head>
        <title>Netflix - Login</title>
      </Head>
      <div>
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
          alt=""
          className="fixed left-0 w-[150px] object-contain pl-5 pt-5"
        />

        <button
          className="fixed right-[20px] top-[20px] py-[5px] px-[20px] text-base text-white bg-[#e50914]"
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>

        <div
          className="w-full h-[100vh] z-10"
          style={{
            background: "rgba(0,0,0,0.5)",
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%,rgba(0,0,0,0.4) 100%)`,
          }}
        />

        <div className="absolute top-[30%] mx-auto w-full text-center z-10 text-white p-5">
          {signIn ? (
            <SignIn />
          ) : (
            <>
              <h1 className="text-5xl mb-5">
                Unlimited movies, TV shows and more.
              </h1>
              <h2 className="text-3xl font-normal mb-[30px]">
                Watch anywhere. Cancel anytime.
              </h2>
              <h3 className="text-xl mb-5">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <div className="h-[30px]">
                <form>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="p-4 outline-none max-w-[600px] w-[40%] "
                  />
                  <button
                    className="px-4 py-4 text-base border-none bg-[#e50914]"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
