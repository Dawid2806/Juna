import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import NextLink from "next/link";
import { ChevronDown } from "../../CustomIcons/Icons";
import { useGetCategoryQuery } from "@/gql/graphql";
import { Profil } from "../../AuthComponents/Profil";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(false);
  const { data, loading, error } = useGetCategoryQuery();

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };
  return (
    <Navbar className="" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <NextLink href={"/"} className="font-bold text-inherit">
            Tutaj logo
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data &&
          data.Category.map((category) => (
            <Dropdown key={category.id}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    {category.name}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label={`${category.name} subcategories`}
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                {category.Sub_category.map((sub) => (
                  <DropdownItem key={sub.id}>{sub.name}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {!isLogged ? (
          <NavbarItem>
            <Button as={Link} color="primary" href="/login" variant="shadow">
              Sign Up
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Profil />
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
        {loading && <NavbarMenuItem>Loading...</NavbarMenuItem>}
        {error && <NavbarMenuItem>Error: {error.message}</NavbarMenuItem>}
        {data &&
          data.Category.map((category, index) => (
            <NavbarMenuItem key={category.id}>
              <NextLink
                color={
                  index === 2
                    ? "primary"
                    : index === data.Category.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href={`/${category.slug}`}
              >
                {category.name}
              </NextLink>
            </NavbarMenuItem>
          ))}
      </NavbarMenu>
    </Navbar>
  );
};
