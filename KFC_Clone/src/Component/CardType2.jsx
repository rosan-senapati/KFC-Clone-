import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { LiaCartPlusSolid } from "react-icons/lia";
import "./cardstyle.css";

const CardType2 = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  async function getData() {
    let res = await fetch("http://localhost:3000/products");
    let data = await res.json();
    setData(data);
  }
  async function getCartData() {
    let res = await fetch("http://localhost:3000/cart");
    let data = await res.json();
    setCart(data);
  }
  function pushData(e) {
    let flag = false;
    cart.forEach((el) => {
      if (el.id == e.id) {
        flag = true;
        return;
      } else {
        flag = false;
      }
    });
    if (flag == false) {
      let obj = {
        id: e.id,
        img: e.img,
        title: e.title,
        desc: e.desc,
        category: e.category,
        price: e.price,
      };
      async function setData() {
        let res = await fetch("http://localhost:3000/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
      }
      setData();
      onOpen();
    }
  }

  useEffect(() => {
    getData();
    getCartData();
  }, [cart]);
  return (
    <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "4rem",
      backgroundColor: "white",
      width: "65vw",
    }}
    >
      {
      data.map((e) => (
        <Card maxW="sm">
          <CardBody style={{ backgroundColor: "white", width: "18rem" }}>
            <Image src={e.img} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{e.title}</Heading>
              <div>
                <Text style={{ display: "flex" }}>
                  <img
                    src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"
                    alt=""
                    style={{ marginRight: "1.1rem" }}
                  />
                  {e.category}
                </Text>
              </div>
              <Text color="blue.600" fontSize="2xl">
                {e.price}
              </Text>
              <Text>{e.desc}</Text>
            </Stack>
          </CardBody>
          {/* <Divider /> */}
          <CardFooter
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ButtonGroup spacing="2">
              <Button
                variant="ghost"
                colorScheme="blue"
                style={{
                  width: "10rem",
                  backgroundColor: "#e4002b",
                  color: "white",
                  borderRadius: "50px",
                  height: "3rem",
                }}
                onClick={() => {
                  pushData(e);
                }}
                id="addtocart"
              >
                Add to cart <LiaCartPlusSolid />
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
       <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SuccesFully Added to Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Enjoy Your Meal</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CardType2;
