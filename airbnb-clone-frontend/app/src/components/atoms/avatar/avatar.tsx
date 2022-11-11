import { Avatar } from "@chakra-ui/react";
import { IAvatar } from "./props";

export default function AvatarComponent({
    name,
    src,
    size
}:IAvatar) {
    return (
        <Avatar name={name} src={src} size={size} />
    );
}