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

export default function CreateNewProduct({ data, handlerUpdatedData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handlerProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handlerAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handlerDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlerImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handlerImageDelete = () => {
    setImage(null);
  };

  const handlerSave = async (event) => {
    event.preventDefault();
    const newData = {
      id: data.length + 1,
      product_name: product,
      amount: amount + "pcs",
      description,
      image,
    };
    data = [...data, newData];
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
        + Create New Product
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your new product</ModalHeader>
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
                value={amount}
                onChange={handlerAmountChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Description"
                value={description}
                onChange={handlerDescriptionChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Box
                display="flex"
                direction="row"
                justtify="center"
                alignItems="center"
              >
                <Button mr={2} as="label" htmlFor="image-upload">
                  Choose File
                  <Input
                    type="file"
                    id="image-upload"
                    style={{ display: "none" }}
                    onChange={handlerImageChange}
                  />
                </Button>
                {image ? (
                  <Box>
                    <Text>{` : ${image.name}`}</Text>
                    <Button
                      ml={2}
                      size="sm"
                      borderRadius="full"
                      onClick={handlerImageDelete}
                    >
                      x
                    </Button>
                  </Box>
                ) : (
                  <Text>No file chosen</Text>
                )}
              </Box>
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
