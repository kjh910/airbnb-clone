import { Box, Flex, HStack, Stack, useColorModeValue, useDisclosure, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useUser from "../../../lib/useUser";
import DarkModeIconButton from "../../atoms/buttons/dark-mode-icon-button/dark-mode-icon-button";
import LoginButton from "../../atoms/buttons/login-button/login-button";
import SignUpButton from "../../atoms/buttons/sign-up-button/sign-up-button";
import AirbnbLogos from "../../atoms/logos/airbnb-logos/airbnb-logos";
import UserMenu from "../../molecules/user-menu/user-menu";
import LoginModal from "../modal/login-modal/login-modal";
import SignUpModal from "../modal/sign-up-modal/sign-up-modal";


export default function Header() {
    const { userLoading, isLoggedIn, user } = useUser();
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
    const toast = useToast();
    const onLogOut = async () => {
        const toastId = toast({
        title: "Login out...",
        description: "Sad to see you go...",
        status: "loading",
        position: "bottom-right",
        });
        /* const data = await logOut();
        console.log(data); */
        setTimeout(() => {
        toast.update(toastId, {
            status: "success",
            title: "Done!",
            description: "See you later!",
        });
        }, 5000);
    };

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
                <Flex gap={2} alignItems='center'>
                    <DarkModeIconButton />
                    {
                        !userLoading ? (
                            !isLoggedIn ? (
                                <>
                                    <LoginButton onOpen={onLoginOpen} />
                                    <SignUpButton onOpen={onSignUpOpen} />
                                </>
                            ) : (
                            <UserMenu 
                                name={user?.name}
                                src={user?.src}
                                size={"md"}
                                onLogOut={onLogOut}
                            />
                            )
                        ) : null
                    }
                </Flex>
            </Stack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
        </>
    );
}