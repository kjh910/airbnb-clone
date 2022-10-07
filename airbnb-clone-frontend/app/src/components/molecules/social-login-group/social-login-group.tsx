import { VStack } from "@chakra-ui/react";
import GithubLoginButton from "../../atoms/buttons/giihub-login-button/github-login-button";
import KakaoLoginButton from "../../atoms/buttons/kakao-login-button/kakao-login-button";

export default function SocialLoginGroup() {
    return (
        <VStack>
            <GithubLoginButton />
            <KakaoLoginButton />
        </VStack>
    );
}