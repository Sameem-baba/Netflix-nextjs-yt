import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Header() {
  const [show, handleShow] = useState(false);
  const router = useRouter();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  });

  return (
    <div
      className={`fixed top-0 h-12 z-10 w-full items-center transition-all duration-500 ease-in ${
        show && "bg-black"
      }`}
    >
      <div className="flex justify-between">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
          alt=""
          onClick={() => router.push("/")}
          className="fixed top-4 pl-[20px] w-[80px] object-contain cursor-pointer"
        />
        <img
          src="https://th.bing.com/th/id/OIP.Dc_CS8r1PeYQs5rDkMTXOQAAAA?w=186&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt=""
          onClick={() => router.push("/profile")}
          className="fixed top-2 right-[20px] h-8 object-contain cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;
