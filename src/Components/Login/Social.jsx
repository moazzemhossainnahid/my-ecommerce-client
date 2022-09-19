import axios from "axios";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loader from "../Others/Loader";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    if (user) {
      (async () => {
        const { data } = await axios.put(`http://localhost:5000/user`, {
          name: user?.user?.displayName,
          email: user?.user?.email,
        });
        if (data.token) {
          localStorage.setItem("accessToken", data.token);
        }
      })();
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="flex flex-col space-y-4">
      {error && <p className="error my-5">{error.message}</p>}
      <button
        onClick={() => signInWithGoogle()}
        className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-[#A25BF7] rounded-md group hover:bg-gradient-to-r from-[#4828A9] to-[#A25BF7] hover:text-white hover:font-bold focus:outline-none text-black"
      >
        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Login with Google</span>
      </button>
    </div>
  );
};

export default Social;
