"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <Navbar maxWidth={"xl"}>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname == "/"}>
          <Link
            className={pathname == "/" ? "text-indigo-700" : "text-red-900"}
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == "/about-us"}>
          <Link
            className={
              pathname == "/about-us" ? "text-indigo-700" : "text-red-900"
            }
            href="/about-us"
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={
              pathname == "/dashboard" ? "text-indigo-700" : "text-red-900"
            }
            href="/dashboard"
          >
            Dashboard
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Lets explore
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
