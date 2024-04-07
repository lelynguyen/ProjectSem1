import React, { useState, useEffect } from "react";
import {
  CiCalendar,
  CiFacebook,
  CiYoutube,
  CiTwitter,
  CiLinkedin,
} from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

function padWithZero(number) {
  return number < 10 ? "0" + number : number;
}

const TopHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="topSocialMedia bg-themeColor text-light px-2">
      <div className="container mx-auto sm:flex justify-between items-center py-2 ">
        <div className="sm:flex gap-3">
          <h6 className="flex gap-1 items-center sm:ml-0 ml-2">
            <CiCalendar className="text-2xl" />
            Today:
            <span className="text-sm">
              {padWithZero(currentTime.getDate())}/
              {padWithZero(currentTime.getMonth() + 1)}/
              {currentTime.getFullYear()} {padWithZero(currentTime.getHours())}:
              {padWithZero(currentTime.getMinutes())}:
              {padWithZero(currentTime.getSeconds())}
            </span>
          </h6>
          <span className="sm:inline hidden">-</span>
          <h6 className="flex gap-1 items-center sm:mt-0 mt-2 sm:ml-0 ml-2">
            <AiOutlineMail className="text-xl" />
            <span className="text-sm">Email: lelynguyen2907@gmail.com</span>
          </h6>
        </div>
        <div className="flex gap-3 text-2xl justify-center sm:justify-start sm:mt-0 mt-3 md:mr-0 mr-5">
          <Link to={"#"}>
            <CiFacebook />
          </Link>
          <Link to={"#"}>
            <CiYoutube />
          </Link>
          <Link to={"#"}>
            <CiTwitter />
          </Link>
          <Link to={"#"}>
            <CiLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
