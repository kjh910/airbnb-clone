import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import AvatarComponent from "../../atoms/avatar/avatar";
import { IUserMenu } from "./props";

export default function UserMenu({
    name,
    src,
    size,
    onLogOut
}:IUserMenu) {
    return (
        <Menu>
          <MenuButton>
            <AvatarComponent 
                name={name}
                src={src}
                size={size}
            />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={onLogOut}>Log out</MenuItem>
          </MenuList>
        </Menu>
    );
}