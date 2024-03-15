import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const baseUrl = "/mybestselfportfolio";

const navigation = [
  { name: "Home", href: `${baseUrl}/Home` },
  { name: "About Me", href: `${baseUrl}/about-me` },
  { name: "Interviews", href: `${baseUrl}/interviews` },
  { name: "Assessments", href: `${baseUrl}/assessments` },
  { name: "Reflections", href: `${baseUrl}/reflections` },
  { name: "Growth", href: `${baseUrl}/growth` },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between px-8 py-8 lg:px-12"
        aria-label="Global"
      >
        <div className="flex ml-5 lg:flex-1">
          <a href="/" className="p-2">
            <img
              className="w-auto max-h-48 "
              src="https://static.thenounproject.com/png/7563-200.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-3 text-gray-700 rounded-md"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-8 h-8" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-semibold leading-7 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-8 py-8 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="p-2">
              <span className="sr-only">Home</span>
              <img
                className="w-auto h-24"
                src="https://static.thenounproject.com/png/7563-200.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="p-3 text-gray-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-8 h-8" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Navigation Component */}
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-lg font-semibold leading-9 text-gray-900 rounded-lg hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default NavBar;
