import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../components/Home";
import Login from "../components/Login";
import { login, logout, selectUser } from "../features/userSlice";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";

export default function home() {
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

  return <div>{user ? <Home /> : <Login />}</div>;
}
