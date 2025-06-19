import React from "react";
import EventCard from "../Reusables/EventCard";

const EventsHolder = ({ data, linker }: { data: any[]; linker: string }) => {
  return (
    <section className="w-full pt-[20px] px-[4rem]">
      {data?.map((item: any, idx: number) => (
        <EventCard data={item} key={idx} link={linker} />
      ))}
    </section>
  );
};

export default EventsHolder;
