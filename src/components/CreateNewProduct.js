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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sohnghitinghpxytqtjf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvaG5naGl0aW5naHB4eXRxdGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc1MTYzMDgsImV4cCI6MjAwMzA5MjMwOH0.GMUSjHC20jLb-g1fW4O4rIBDrPwf8VbYFG-x6SQXkKs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function CreateNewProduct() {
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
    try {
      const { data, error } = await supabase.from("products").insert([
        {
          product_name: product,
          amount: amount,
          description: description,
        },
      ]);
      if (data) {
        console.log("Product saved successfully!");
      } else {
        console.error("Failed to save product");
      }

      onClose();
    } catch (error) {
      console.error("error: ", error);
    }
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
                    <span>{` : ${image.name}`}</span>
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
                  <span>No file chosen</span>
                )}
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={(e) => {
                handlerSave(e);
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
