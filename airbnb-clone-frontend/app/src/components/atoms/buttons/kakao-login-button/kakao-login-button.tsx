import { Button } from "@chakra-ui/react";
import { FaComment } from "react-icons/fa";

export default function KakaoLoginButton() {
    return (
        <Button w="100%" leftIcon={<FaComment />} colorScheme={"yellow"}>
            Continue with Kakao
        </Button>
    );
}