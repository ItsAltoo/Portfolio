import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

interface NavbarProps {
  headingRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  resumeRef: React.RefObject<HTMLDivElement | null>;
  projectRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({
  headingRef,
  aboutRef,
  resumeRef,
  projectRef,
  contactRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const menuItems = [
    { ref: headingRef },
    { label: "About", ref: aboutRef },
    { label: "Resume", ref: resumeRef },
    { label: "Project", ref: projectRef },
    { label: "Contact", ref: contactRef },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b  backdrop-blur-md bg-zinc-900/30 rounded-br-md rounded-bl-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 md:mr-10">
          <div className="dark:text-blue-500 text-blue-800 text-lg font-bold cursor-pointer" onClick={() => scrollToSection(headingRef)}>
            Malik
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm text-white font-medium">
          {menuItems.map(({ label, ref }) => (
            <button
              key={label}
              onClick={() => scrollToSection(ref)}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-white" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className=" bg-zinc-900/30 backdrop-blur-md text-white"
            >
              <nav className="flex flex-col space-y-4 text-base font-medium mt-5">
                {menuItems.map(({ label, ref }) => (
                  <button
                    key={label}
                    onClick={() => scrollToSection(ref)}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
