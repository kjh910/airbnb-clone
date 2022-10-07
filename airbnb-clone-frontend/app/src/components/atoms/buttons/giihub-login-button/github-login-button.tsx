import { Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function GithubLoginButton() {
    return (
        <Button w="100%" leftIcon={<FaGithub />} colorScheme={"telegram"}>
            Continue with Github
        </Button>
    );
}