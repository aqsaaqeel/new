import apple_icon from "../assets/apple_icon.png";
import google_icon from "../assets/google_icon.png";

import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-none bg-black w-2/6 flex items-center justify-center">
        <h1 className="text-white font-bold text-6xl font-montserrat">
          Board.
        </h1>
      </div>
      <div className="flex-auto bg-gray-100 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-2">Sign In</h2>
          <p className="text-gray-600 mb-8">Sign in to your account</p>
          <div className="flex mb-4">
            <button className="bg-white text-gray-400 font-bold py-2 px-2 mr-2 mb-3 rounded-full w-full flex items-center justify-center text-sm">
              <img src={google_icon} className="mr-2"></img>
              <span className="font-thin text-sm">Sign in with Google</span>
            </button>
            <p className="m-4">{"  "}</p>
            <button className="bg-white text-gray-400 font-bold py-2 px-2 mr-2 mb-3 rounded-full w-full flex items-center justify-center text-sm">
              <img src={apple_icon} className="mr-2"></img>
              <span className="font-thin text-sm">Sign in with Apple</span>
            </button>
          </div>
          <form className="bg-white p-10 rounded-2xl">
            <div className="mb-4 ">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email address
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-black bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-black bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <a
              className="inline-block align-baseline text-sm text-blue-600 hover:text-blue-800"
              href="./Dashboard"
            >
              Forgot Password?
            </a>
            <div className="pt-2 w-auto">
              <Link to="/dashboard">
                <button
                  className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 w-full rounded-lg focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
