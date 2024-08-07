import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

import Image from "next/image";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="static" className="fixed shadow-lg">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">

        {/* BRAND */}
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">OPM</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* ICONS ON LG SCREENS */}
      <NavbarContent className="hidden md:flex basis-1/5 md:basis-full" justify="end">
        <div className="md:flex gap-4 justify-start mr-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium font-semibold",
                )}
                color="foreground"
                href={item.href}
              >
              {item.label}
            </NextLink>
          </NavbarItem>
          ))}
        </div>
        <NavbarItem className="hidden md:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* LINKS ON SM SCREENS */}
      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* HAMBURGER MENU */}
      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col text-center font-semibold gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={ index === 2 ? "primary" : "foreground" }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
