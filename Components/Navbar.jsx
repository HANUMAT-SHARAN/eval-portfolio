import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div  style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>
        {" "}
        <Link href="https://hanumat-sharan.github.io/eval-portfolio/">
          Hanumat Sharan
        </Link>
      </h2>
     
      <h2>
        {" "}
        <Link href="/projects">Projects</Link>
      </h2>
      <Image
        height={50}
        width={50}
        src="https://avatars.githubusercontent.com/u/112655049?v=4"
        alt=""
      />
    </div>
  );
};

export default Navbar;
