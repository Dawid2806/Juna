import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarContent,
  Link,
} from "@nextui-org/react";
import { useSignOut, useUserData } from "@nhost/react";
import React from "react";

export const Profil = () => {
  const userData = useUserData();
  const { signOut } = useSignOut();

  return (
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name={userData?.displayName}
            size="sm"
            src={userData?.avatarUrl}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="user" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{userData?.displayName}</p>
          </DropdownItem>
          <DropdownItem key="profile">
            <Link
              href="/myprofil
            "
              as="a"
            >
              Profil
            </Link>
          </DropdownItem>

          <DropdownItem
            key="logout"
            onClick={() => {
              signOut();
            }}
            color="danger"
          >
            Wyloguj się
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
};
