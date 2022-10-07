import { Button } from "@chakra-ui/react";
import { LoginButtonProps } from "./props";

export default function LoginButton(args:LoginButtonProps) {
    const { onOpen } = args;
    return (
            <Button onClick={onOpen}>
                Log in
            </Button>
    );
}