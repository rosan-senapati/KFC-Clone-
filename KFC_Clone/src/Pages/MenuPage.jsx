import React, { useEffect, useState } from "react";
import Sidebar from "../Component/Sidebar";
import "./menu.css";
import { Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card1 from "../Component/Card1";

const MenuPage = () => {
  const [data, setData] = useState([]);
  async function getData() {
    let res = await fetch("http://localhost:3000/category");
    let data = await res.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="mainmenu">
      <div
        id="subHome"
        style={{
          width: "100vw",
          height: "68px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "1200px",
        }}
      >
        <div id="text" style={{ color: "white", marginRight: "1%" }}>
          LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
        </div>
        <div id="button-home">
          <button
            style={{
              color: "white",
              backgroundColor: "red",
              height: "47px",
              width: "185px",
              borderRadius: "1.4rem",
              textAlign: "center",
            }}
          >
            Start Order
          </button>
        </div>
      </div>

      <InfiniteScroll dataLength={11} hasMore={true}>
        <div id="sidebar-content" style={{ background: "white" }}>
          <Sidebar />
          <div id="contentDiv">
            <div className="content" style={{ backgroundColor: " #fff" }}>
              <div
                className="tabhead"
                style={{
                  margin: "1rem 3rem",
                  fontSize: "1.6rem",
                  color: "black",
                  fontFamily: "Impact, fantasy",
                }}
              >
                <Text>INTERNATIONAL BURGER FEST</Text>
              </div>
              <Card1 />
            </div>
            <div className="content" style={{ backgroundColor: " #fff" }}>
              <div
                className="tabhead"
                style={{
                  margin: "1rem 3rem",
                  fontSize: "1.6rem",
                  color: "black",
                  fontFamily: "Impact, fantasy",
                }}
              >
                <Text>MATCH DAY COMBO</Text>
              </div>
              <Card1 />
            </div>
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default MenuPage;
