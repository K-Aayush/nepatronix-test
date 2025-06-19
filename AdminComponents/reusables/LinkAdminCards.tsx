import Link from "next/link";
import React, { ReactNode } from "react";

const LinkAdminCards = ({
  link,
  children,
}: {
  link: string;
  children: ReactNode;
}) => {
  return (
    <Link href={link} className=" w-full" style={{maxWidth:"160px"}}>
      {children}
    </Link>
  );
};

export default LinkAdminCards;
