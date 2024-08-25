import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

const handleLanguageChange = (e) =>{
  dispatch(changeLanguage(e.target.value))
}


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <Link to={"/"}>
        {" "}
        <img className="w-44" src={LOGO} alt="logo" />{" "}
      </Link>
      <div className="right-header flex items-center">
      { showGptSearch && (
        <select className="p-2 m-3" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGE.map((lang) => (
            <option
              className="p-3 my-1"
              key={lang.identifier}
              value={lang.identifier}
            >
              {lang.name}
            </option>
          ))}
        </select>
      )}
        <button
          onClick={handleGptSearch}
          className="h-12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          { showGptSearch ? "Homepage": "Search"}
        </button>
        {user && (
          <div className="relative">
            <div
              className="flex items-center p-2 cursor-pointer"
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              {/* <img
          className="w-12 h-12 rounded-full"
          alt="usericon"
          src={user?.photoURL}
        /> */}
              <div className="username bg-white rounded-full border-2 border-black">
                <p className="p-2 font-bold text-xl rounded-full">
                  {user?.displayName
                    .split(" ")
                    .map((name) => name[0].toUpperCase())
                    .join("")}
                </p>
              </div>
            </div>

            {isDropdownVisible && (
              <div
                className="absolute right-0 top-14 w-auto bg-gray-800 text-white rounded-lg shadow-lg"
                onMouseEnter={() => setIsDropdownVisible(true)}
                onMouseLeave={() => setIsDropdownVisible(false)}
              >
                <p className="px-4 py-2">Sign In as</p>
                <p className="px-4 flex-wrap ">{user?.email}</p>
                <p className="px-4 py-2">{user?.displayName}</p>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 hover:bg-red-600"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
