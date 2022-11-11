import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:10042/api/v1/",
  withCredentials: true,
});

export const getRooms = () =>
  instance.get("rooms/").then((response) => response.data);

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;
  return instance.get(`rooms/${roomPk}`).then((response) => response.data);
};

export const getMe = () =>
  instance.get(`users/me`).then((response) => response.data);

  export const logOut = () =>
    instance
      .post(`users/log-out`, null, {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      })
      .then((response) => response.data);