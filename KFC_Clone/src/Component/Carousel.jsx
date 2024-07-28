import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousal.css";
import {
  border,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import Modal_Home_1 from "./Modal_Home_1";
import Modal_Home_2 from "./Modal_Home_2";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1311,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 938,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 563,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [offers, setOffers] = useState([]);

  async function getData() {
    let res = await fetch("http://localhost:3000/offers");
    let data = await res.json();
    setOffers(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="carousel-div">
      <Slider
        {...settings}
        style={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          margin: "6rem",
          textAlign: "center",
        }}
      >
        {offers.map((e) => (
          <div
             className="carousel-card"
            style={{
              height: "17rem",
              width: "18rem",
              backgroundColor: "white",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              marginRight: "30rem",
            }}
          >
            <div 
              className="img-div"
              // style={{
              //   width: "100%",
              //   height: "17rem",
              //   borderTopLeftRadius: "10px",
              // }}
            >
              <img
                src={e.image}
                alt=""
                // style={{
                //   width: "100%",
                //   height: "17rem",
                //   borderTopLeftRadius: "10px",
                //   borderTopRightRadius: "10px",
                // }}
              />
            </div>
            <div
              className="title-div"
              // style={{
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   marginTop: "1rem",
              // }}
            >
              <p
                // style={{
                //   color: "Red",
                //   fontFamily: "Impact, fantasy",
                //   fontSize: "1.6rem",
                // }}
              >
                {e.title.substr(0, 30) + "..."}
              </p>
            </div>
            <p
              style={{ fontFamily: "Arial", fontWeight: "700", margin: "5px" }}
            >
              {e.description.substr(0, 70) + "..."}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "6rem",
              }}
            >
              <Modal_Home_1 title={e.title} description={e.description} />
              {/* <a onClick={()=>{
                  onOpen(e);
                }} style={{textDecoration:"underline",fontFamily: "Arial",
                fontWeight: "600"}}>View Details</a>  */}
              {/* <RouteLink to="/deals"><button id="applyOfferbtn">Apply Offer</button></RouteLink> */}
              <Modal_Home_2 />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
