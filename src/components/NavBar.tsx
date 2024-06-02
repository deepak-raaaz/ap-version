import React from "react";
import LogoImg from "../assets/images/logo-horizontal.png";
import { Link, useLocation } from "react-router-dom";
import { navBarLinks, socialLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiMenu } from "react-icons/bi";

type Props = {};

const NavBar = (props: Props) => {
  let location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="w-full lg:absolute top-0 z-50 ">
      <div className="bg-slate-800 h-9">
        <div className="max-w-screen-xl mx-auto max-xl:mx-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center text-white text-sm">
              <FaPhoneAlt className="me-3 max-sm:me-0" size={16} />
              <span className="max-sm:hidden">Call us &nbsp;</span>
              <span className="font-bold max-sm:hidden">+91 7324907150</span>
            </div>
            <div className="bg-slate-100 w-[1px] h-4 mx-4"></div>
            <div className="flex items-center text-white text-sm">
              <MdEmail className="me-3 max-sm:me-0" size={20} />
              <span className="max-sm:hidden">Email: &nbsp;</span>
              <span className="font-bold max-sm:hidden">
                info@apversion.com
              </span>
            </div>
          </div>
          <div className="flex items-center">
            {socialLinks.map((link, index) => (
              <div className="flex items-center" key={link.label}>
                <Link to={link.url}>
                  <link.icon className="text-white" />
                </Link>
                <div
                  className={`bg-slate-100 w-[1px] h-4 mx-4 ${
                    index == socialLinks.length - 1 && "hidden"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* main nav bar  */}
      <div className="max-w-screen-xl mx-auto max-xl:mx-4 py-3 flex justify-between items-center ">
        <img
          src={LogoImg}
          alt="AP Version Paint Industry Logo"
          className="w-60 max-lg:w-48"
        />
        <div className="flex space-x-6 items-center max-lg:hidden">
          <div className="space-x-8">
            {navBarLinks.map((link) => {
              const isActive =
                pathname === link.route ||
                pathname.startsWith(`${link.route}/`);

              return (
                <Link
                  to={link.route}
                  key={link.label}
                  className={cn(
                    "text-brand-primary font-semibold hover:underline underline-offset-4 transition duration-200",
                    { "underline underline-offset-4": isActive }
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <ModeToggle />
        </div>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <BiMenu size={25} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <img
                  src={LogoImg}
                  alt="AP Version Paint Industry Logo"
                  className="w-60 max-lg:w-48"
                />
              </SheetTitle>
              <div className="flex flex-col space-y-4 py-6">
                {navBarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(`${link.route}/`);

                  return (
                    <Link
                      to={link.route}
                      key={link.label}
                      className={cn(
                        "text-brand-primary font-semibold hover:underline underline-offset-4 transition duration-200",
                        { "underline underline-offset-4": isActive }
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
