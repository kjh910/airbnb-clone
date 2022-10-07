import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeIconButton() {
    const { toggleColorMode } = useColorMode();
    const Icon = useColorModeValue(FaMoon, FaSun);
    return (
        <IconButton
            onClick={toggleColorMode}
            variant={"ghost"}
            aria-label="Toggle dark mode"
            icon={<Icon />}
        />
    );
}