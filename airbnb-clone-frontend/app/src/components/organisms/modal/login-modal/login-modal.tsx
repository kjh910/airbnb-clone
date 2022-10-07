import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack, HStack, Divider, Text } from "@chakra-ui/react";
import { FaLock, FaUserNinja } from "react-icons/fa";
import SocialLoginGroup from "../../../molecules/social-login-group/social-login-group";
import { LoginModalProps } from "./props";

export default function LoginModal(args: LoginModalProps){
    const { isOpen, onClose } = args;

    return (
        <Modal onClose={onClose} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log in</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <InputGroup size={"md"}>
                  <InputLeftElement
                    children={
                      <Box color="gray.500">
                        <FaUserNinja />
                      </Box>
                    }
                  />
                  <Input variant={"filled"} placeholder="Username" />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Box color="gray.500">
                        <FaLock />
                      </Box>
                    }
                  />
                  <Input variant={"filled"} placeholder="Password" />
                </InputGroup>
              </VStack>
              <Button mt={4} colorScheme={"red"} w="100%">
                Log in
              </Button>
              <Box mb={4}>
                <HStack my={8}>
                    <Divider />
                    <Text textTransform={"uppercase"} color="gray.500" fontSize="xs" as="b">
                    Or
                    </Text>
                    <Divider />
                </HStack>
                <SocialLoginGroup />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
    );
}