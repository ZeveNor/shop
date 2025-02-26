"use client"

import dynamic from "next/dynamic";
const ThemeSwitcher = dynamic(() => import("@/components/theme-switcher").then(mod => mod.ThemeSwitcher), {
  ssr: false,
  loading: () => null, 
});

import {
  IconBrandApple,
  IconCommandRegular,
  IconDashboard,
  IconHeadphones,
  IconLogout,
  IconSearch,
  IconSettings,
  IconShield,
} from "justd-icons"
import { Avatar, Button, Menu, Navbar, Separator } from "ui"

export default function AppNavbar({ children, ...props }: React.ComponentProps<typeof Navbar>) {
  return (
    <>
      <Navbar intent="inset" {...props}>
        <Navbar.Nav>
          <Navbar.Logo
            aria-label="Goto documenation of Navbar"
            href="/docs/2.x/components/layouts/navbar"
          >
            <img src="https://raw.githubusercontent.com/ZeveNor/Unicow/refs/heads/main/src/img/a.png" alt="Logo" className="size-8" />
          </Navbar.Logo>
          <Navbar.Section>
            <Navbar.Item isCurrent href="#">
              Store
            </Navbar.Item>
            <Navbar.Item href="#">Link1</Navbar.Item>
            <Navbar.Item href="#">Link2</Navbar.Item>
          </Navbar.Section>
          <Navbar.Section className="ml-auto hidden sm:flex">
            <Navbar.Flex>
              <Button appearance="plain" size="square-petite" aria-label="Search for products">
                <IconSearch />
              </Button>
              <ThemeSwitcher appearance="plain" />
            </Navbar.Flex>
            <Separator orientation="vertical" className="mr-3 ml-1 h-6" />
            <Menu>
              <Menu.Trigger aria-label="Open Menu">
                <Avatar alt="cobain" size="small" shape="square" src="/images/avatar/cobain.jpg" />
              </Menu.Trigger>
              <Menu.Content placement="bottom right" className="sm:min-w-56">
                <Menu.Section>
                  <Menu.Header separator>
                    <span className="block">Kurt Cobain</span>
                    <span className="font-normal text-muted-fg">@cobain</span>
                  </Menu.Header>
                </Menu.Section>

                <Menu.Item href="#dashboard">
                  <IconDashboard />
                  Dashboard
                </Menu.Item>
                <Menu.Item href="#settings">
                  <IconSettings />
                  Settings
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item>
                  <IconCommandRegular />
                  Command Menu
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item href="#contact-s">
                  <IconHeadphones />
                  Contact Support
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item href="#logout">
                  <IconLogout />
                  Log out
                </Menu.Item>
              </Menu.Content>
            </Menu>
          </Navbar.Section>
        </Navbar.Nav>

        <Navbar.Compact>
          <Navbar.Flex>
            <Navbar.Trigger className="-ml-2" />
            <Separator orientation="vertical" className="h-6 sm:mx-1" />
            <Navbar.Logo
              aria-label="Goto documenation of Navbar"
              href="/docs/2.x/components/layouts/navbar"
            >
              <IconBrandApple className="size-5" />
            </Navbar.Logo>
          </Navbar.Flex>
          <Navbar.Flex>
            <Navbar.Flex>
              <Button appearance="plain" size="square-petite" aria-label="Search for products">
                <IconSearch />
              </Button>
              <ThemeSwitcher appearance="plain" />
            </Navbar.Flex>
            <Separator orientation="vertical" className="mr-3 ml-1 h-6" />
            <UserMenu />
          </Navbar.Flex>
        </Navbar.Compact>

        <Navbar.Inset>{children}</Navbar.Inset>
      </Navbar>
    </>
  )
}

function UserMenu() {
  return (
    <Menu>
      <Menu.Trigger aria-label="Open Menu">
        <Avatar alt="cobain" size="small" shape="square" src="/images/avatar/cobain.jpg" />
      </Menu.Trigger>
      <Menu.Content placement="bottom right" className="sm:min-w-56">
        <Menu.Section>
          <Menu.Header separator>
            <span className="block">Kurt Cobain</span>
            <span className="font-normal text-muted-fg">@cobain</span>
          </Menu.Header>
        </Menu.Section>

        <Menu.Item href="#dashboard">
          <IconDashboard />
          Dashboard
        </Menu.Item>
        <Menu.Item href="#settings">
          <IconSettings />
          Settings
        </Menu.Item>
        <Menu.Item href="#security">
          <IconShield />
          Security
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item>
          <IconCommandRegular />
          Command Menu
        </Menu.Item>

        <Menu.Item href="#contact">
          <IconHeadphones />
          Customer Support
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item href="#logout">
          <IconLogout />
          Log out
        </Menu.Item>
      </Menu.Content>
    </Menu>
  )
}