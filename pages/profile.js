import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { login, logout, selectUser } from "../features/userSlice";
import { useRouter } from "next/router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useEffect } from "react";

const profile = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout);
        router.push("/");
      }
    });
  }, []);

  return (
    <div className="h-screen bg-black text-white">
      <Head>
        <title>Netflix - Profile</title>
        <link
          rel="icon"
          href="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        />
      </Head>
      <Header />
      {user ? (
        <div className="flex flex-col w-1/2 mx-auto pt-[8%] max-w-3xl">
          <h1 className="text-6xl font-normal border-b border-[#282c2d] mb-5">
            Edit Profile
          </h1>
          <div className="flex">
            <img
              src="https://th.bing.com/th/id/OIP.Dc_CS8r1PeYQs5rDkMTXOQAAAA?w=186&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7"
              alt=""
              className="h-[100px]"
            />
            <div className="ml-6 flex-1">
              <h2 className="bg-gray-600 p-4 text-base pl-5">{user.email}</h2>
              <div>
                <button
                  onClick={() => signOut(auth)}
                  className="px-3 py-4 text-base w-full mt-[5%] border-none cursor-pointer bg-[#e50914]"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-1/2 mx-auto pt-[8%] max-w-3xl">
          <h1 className="text-3xl font-normal border-b border-[#282c2d] mb-5">
            You are not Logged In!
          </h1>
          <button
            onClick={() => router.push("/")}
            className="px-3 py-4 text-base w-full mt-[5%] border-none cursor-pointer bg-[#e50914]"
          >
            Return to Login Page!
          </button>
        </div>
      )}
    </div>
  );
};

export default profile;
