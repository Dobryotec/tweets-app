import Boards from "../assets/boards.webp";
import Logo from "../assets/Logo.svg";
import Circle from "../assets/Circle.png";
import { useState, useEffect } from "react";

const User = ({ id, followers, tweets, user, avatar }) => {
  const [followersCount, setFollowersCount] = useState(followers);
  const [follow, setFollow] = useState(true);

  useEffect(() => {
    const savedData = localStorage.getItem("usersData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const savedFollowers = parsedData[id]?.followers;
      const savedFollow = parsedData[id]?.follow;

      if (savedFollowers) {
        setFollowersCount(parseInt(savedFollowers));
      }

      if (savedFollow !== undefined) {
        setFollow(savedFollow);
      }
    }
  }, [id]);

  useEffect(() => {
    const savedData = localStorage.getItem("usersData");
    const parsedData = savedData ? JSON.parse(savedData) : {};

    const newData = {
      ...parsedData,
      [id]: {
        followers: followersCount,
        follow: follow,
      },
    };

    localStorage.setItem("usersData", JSON.stringify(newData));
  }, [id, followersCount, follow]);

  const onBtnClick = () => {
    if (follow) {
      setFollow(false);
      setFollowersCount((prev) => prev + 1);
    } else {
      setFollow(true);
      setFollowersCount((prev) => prev - 1);
    }
  };

  return (
    <li
      className="h-[460px] w-[380px] relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800
     to-purple-700 rounded-[20px] transition-all duration-500 cursor-pointer 
     scale-100 hover:scale-110"
    >
      <img src={Logo} className="absolute top-5 left-5" />
      <img
        src={Boards}
        className="mx-auto pt-7 pb-[18px] px-9 shadow-customSecond"
      />
      <div className="bg-secondary-color w-full h-2 shadow-lg relative">
        <img src={Circle} className="absolute left-[145px] top-[-30px] z-10" />

        <img
          src={avatar}
          alt={user}
          className="h-[72px] w-[75px]  rounded-full overflow-hidden absolute left-[150px] top-[-26px]"
        />
      </div>

      <p className="mt-14 text-secondary-color font-medium text-xl my-2 ">
        {user}
      </p>
      <p className="uppercase text-secondary-color font-medium text-xl">
        {tweets.toLocaleString("en-Us")} tweets
      </p>
      <p className="uppercase text-secondary-color font-medium text-xl my-3">
        {followersCount.toLocaleString("en-Us")} followers
      </p>
      <button
        onClick={onBtnClick}
        className={`rounded-[10px] shadow-custom py-3.5  px-14 font-semibold text-lg uppercase ${
          follow
            ? "bg-secondary-color animate-pulse transition-all duration-500 hover:bg-btn-following"
            : "bg-btn-following transition-all duration-500 hover:bg-secondary-color"
        }`}
      >
        {follow ? "Follow" : "Following"}
      </button>
    </li>
  );
};

export default User;
