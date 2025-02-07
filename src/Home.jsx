import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GameRoulette from "./components/GameRoulette";
import BetContainer from "./components/BetContainer";
import GameHistoryColor from "./components/GameHistoryColor";
import { createSocket } from "./utility/newSocket";
import { useLocation } from "react-router-dom";
import Loader from "./loader/Loader";
const Home = () => {
  const location = useLocation();
  const [socket, setSocket] = useState(null);
  const [info, setInfo] = useState({});
  const [showBalance, setShowBalance] = useState(false);
  const [socketConnected, setSocketConnected] = useState(false);
  const rawQuery = location.search.substring(1);
  const decodedQuery = decodeURIComponent(rawQuery);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState("10.00");
  // Initial multiplier

  let queryParams = {};
  try {
    queryParams = JSON.parse(
      '{"' + decodedQuery.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
      function (key, value) {
        return key === "" ? value : decodeURIComponent(value);
      }
    );
  } catch (e) {
    queryParams = {};
  }
  // socket connection
  useEffect(() => {
    if (queryParams.id) {
      const socketInstance = createSocket(queryParams.id, queryParams.game_id);
      setSocket(socketInstance);
      socketInstance.on("connect", () => {
        setSocketConnected(true);
      });
      socketInstance.on("disconnect", () => {
        setSocketConnected(false);
      });
      socketInstance.on("info", (data) => {
        setInfo(data);
        setLoading(false);
      });
      // socketInstance.on("result", (data) => {
      //   console.log("Result", data);
      //   setResultData(data);
      // });

      return () => {
        socketInstance.disconnect();
      };
    } else {
      console.error("Invalid socket ID or game ID in query params.");
    }
  }, [queryParams.id]);
  // if socket not connected
  if (loading || !socketConnected) {
    return <Loader message={"Connecting..."} />;
  } // if user not connected
  // if (Object.keys(info)?.length === 0 && !loading) {
  //   return <UserNot />;
  // }
  return (
    <div className="game-container">
      <div className="main_inner">
        <Header info={info} />
        <div className="main_container">
          <div className="game-template">
            <div className=".game-template:before">
              <div className=".game-template:after">
                <GameRoulette />
                <div className="game-control">
                  <BetContainer />
                </div>
              </div>
              <GameHistoryColor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
