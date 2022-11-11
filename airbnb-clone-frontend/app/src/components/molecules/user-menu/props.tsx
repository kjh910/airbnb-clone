import { IAvatar } from "../../atoms/avatar/props";

export interface IUserMenu extends IAvatar {
    onLogOut: () => void;
}