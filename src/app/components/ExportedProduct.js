"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function ExportedProduct({ data, handlerUpdatedData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [minusAmount, setMinusAmount] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handlerProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handlerMinusAmount = (event) => {
    setMinusAmount(event.target.value);
  };

  const handlerSave = async (event) => {
    event.preventDefault();
    const newData = {
      id: data.length + 1,
      product_name: product,
      amount: amount - minusAmount,
      description,
      image,
    };
    data = [newData];
    handlerUpdatedData(data);
    setProduct("");
    setAmount("");
    setDescription("");
    setImage(null);
    onClose();
  };

  return (
    <>
      <Button w="70%" onClick={onOpen}>
        - Export Product
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Export your product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Product name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Product name"
                value={product}
                onChange={handlerProductChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Amount</FormLabel>
              <Input
                placeholder="Amount"
                value={minusAmount}
                onChange={handlerMinusAmount}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handlerSave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
