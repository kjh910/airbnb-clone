import { Button, LightMode } from "@chakra-ui/react";
import { SignUpButtonProps } from "./props";

export default function SignUpButton(args:SignUpButtonProps) {
    const { onOpen } = args;
    return (
        <LightMode>
            <Button onClick={onOpen} colorScheme={"red"}>
                Sign up
            </Button>
        </LightMode>
    );
}