/* eslint-disable @next/next/no-img-element */
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

import { Badge, Button, message } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

// logo
import Logo from "../../../public/assets/logo-light.png";
import Image from "next/image";
import { logout } from "@/utils/local-storage";
import { useRouter } from "next/navigation";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const DashboardNavbar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: any;
}) => {
  const router = useRouter();
  const SignOutHandler = () => {
    logout();
    message.error("Successfully Sign Out");
    router.push("/");
    // window.location.reload();

  };

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "#000000",
        backgroundColor: "#ffffff",
        paddingInline: "3px",
      }}
    >
      <Disclosure as="nav" className="bg-white shadow w-full">
        {({ open }) => (
          <>
            <div className="mx-auto  px-2  lg:pr-8">
              <div className="flex h-16 justify-between">
                {/* button */}
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                  }}
                />

                {/* button end  */}
                <div className="md:flex hidden flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="w-full max-w-lg lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <IoSearch
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block
                         w-full
                          rounded-md 
                          border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6 focus:ring-primary outline-primary "
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>

                {/* only Mobile */}

                <Image
                  src={Logo}
                  alt="logo"
                  width={600}
                  height={500}
                  className=" w-full bg-primary py-3 px-16 md:hidden"
                />

                {/* notification */}
                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                  <Badge count={99}>
                    <button
                      type="button"
                      className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <FaRegBell className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </Badge>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div>
                      <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={SignOutHandler}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </Header>
  );
};

export default DashboardNavbar;
