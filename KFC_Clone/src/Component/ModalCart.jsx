import {
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
  import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
  
  const ModalCart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    let {price} = useContext(DataContext);
    return (
      <div>
        <button onClick={onOpen} id="applyOfferbtn">
          ORDER
        </button>
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text
                style={{ fontFamily: "Impact, fantasy", textAlign: "center", color:"red",fontWeight:"400"}}
              >
                CONGRATULATIONS
              </Text>
            </ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody
              style={{
                testAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Text fontFamily={"Impact, fantasy"} textAlign={"center"}>
                HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?
              </Text>
              <Text color={"red"}>Total Price:{price? "₹"+Math.floor(price) : "You Have Nothing on cart"}</Text>
              <button
                id="applyOfferbtn"
                style={{ width: "30rem", height: "3rem", marginTop: "2rem" }}
              >
                Delivery
              </button>
              <button
                id="applyOfferbtn"
                style={{ width: "30rem", height: "3rem", marginTop: "2rem" }}
              >
                Pick up
              </button>
              <button
                id="applyOfferbtn"
                style={{ width: "30rem", height: "3rem", marginTop: "2rem" }}
              >
                Dine in
              </button>
              <Text textAlign={"center"}></Text>
            </ModalBody>
  
            <ModalFooter
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"10rem"}
            ></ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  };
  
  export default ModalCart;
  