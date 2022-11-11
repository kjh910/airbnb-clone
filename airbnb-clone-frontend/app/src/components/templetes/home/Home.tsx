import {
  Grid
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../../api";
import { IRoom } from "../../organisms/room/props";
import Room from "../../organisms/room/room";
import RoomSkeleton from "../../organisms/room/roomsSkeleton";

export default function HomeTemplete() {
  const {isLoading:roomsLoading, data:roomsData} = useQuery<IRoom[]>(["rooms"], getRooms);
  return (
    <Grid
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
    >
      {roomsLoading ? (
        <>
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
        </>
      ) : null}
      {roomsData?.map((room) => (
        <Room
          key={room.pk}
          pk={room.pk}
          imageUrl={room.photos && room.photos.length>=1 ? room.photos?.[0].file : undefined}
          name={room.name}
          rating={room.rating}
          city={room.city}
          country={room.country}
          price={room.price}
        />
      ))}
    </Grid>
  );
}