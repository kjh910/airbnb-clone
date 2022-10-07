import { Box, HStack, Stack, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DarkModeIconButton from "../../atoms/buttons/dark-mode-icon-button/dark-mode-icon-button";
import LoginButton from "../../atoms/buttons/login-button/login-button";
import SignUpButton from "../../atoms/buttons/sign-up-button/sign-up-button";
import AirbnbLogos from "../../atoms/logos/airbnb-logos/airbnb-logos";
import LoginModal from "../modal/login-modal/login-modal";
import SignUpModal from "../modal/sign-up-modal/sign-up-modal";

export default function Header() {
    const {
        isOpen: isLoginOpen,
        onClose: onLoginClose,
        onOpen: onLoginOpen,
      } = useDisclosure();
      const {
        isOpen: isSignUpOpen,
        onClose: onSignUpClose,
        onOpen: onSignUpOpen,
      } = useDisclosure();
    const logoColor = useColorModeValue("red.500", "red.200");
    return (
        <>
            <Stack
                justifyContent={"space-between"}
                alignItems="center"
                py={5}
                px={40}
                direction={{
                    sm: "column",
                    md: "row",
                }}
                spacing={{
                    sm: 4,
                    md: 0,
                }}
                borderBottomWidth={1}
            >
                <Box color={logoColor}>
                    <Link to={"/"}>
                        <AirbnbLogos />
                    </Link>
                </Box>
                <HStack spacing={2}>
                    <DarkModeIconButton />
                    <LoginButton onOpen={onLoginOpen} />
                    <SignUpButton onOpen={onSignUpOpen} />
                </HStack>
            </Stack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
        </>
    );
}