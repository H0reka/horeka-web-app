import { useState } from 'react'
import {
  Dialog,
  PopoverGroup,
  Transition,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


import { NavLink } from 'react-router-dom'
import {motion } from 'framer-motion';


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <motion.div
    animate={{ opacity: 1 }} 
    initial={{ opacity: 0 }}
    transition={{ duration: 1}}
     id='navigate' className="bg-cus-white top-0  z-[1] fixed w-full transition ease-in-out duration-300 hover:shadow-sm hover:shadow-rose-50">
      <nav className=" mx-auto  flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <NavLink to="/">
            <img className=" h-12 w-auto cursor-pointer" src="./horeka_logo.webp" alt="Logo" />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-cus-nav-button"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/about" className="text-[15px] font-semibold leading-6 text-cus-black">
            Who We Are
          </NavLink>
          <NavLink to="/products" className="text-[15px]  font-semibold leading-6 text-cus-black" >
            Products
          </NavLink>
          <NavLink to="/contact" className="text-[15px]  font-semibold leading-6 text-cus-black" >
            Contact Us
          </NavLink>
          <NavLink to="/faq" className="text-[15px]  font-semibold leading-6 text-cus-black" >
            FAQ
          </NavLink>
          {/* <Popover className="relative">
            <PopoverButton className="text-[15px]  flex items-center gap-x-1 font-semibold leading-6 text-cus-black">
              More
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute -left-[6vw] top-full z-[100000] mt-3 overflow-hidden rounded-3xl bg-cus-white shadow-lg ring-1 ring-gray-900/5 w-[13vw]">
                <div className="p-4">
                  {everythingElse.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 text-cus-black bg-cus-white group-hover:text-cus-brand" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <NavLink to={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover> */}
        </PopoverGroup>
      </nav>

      <Transition show={mobileMenuOpen}>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50" />
          <Dialog.Panel className={`fixed inset-0 transform z-[1000000] overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
            <div className="flex items-center justify-between">
              <NavLink to="/" className="-m-1.5 p-1.5" onClick={() =>setMobileMenuOpen(false)}>
                <img className="h-12 w-auto" src="horeka_logo.webp" alt="Logo" />
              </NavLink>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 bg-cus-brand"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div id='navigate' className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <NavLink
                    to="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Who Are We?
                  </NavLink>
                  <NavLink
                    to="/products"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Products
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </NavLink>
                  <NavLink
                    to="/faq"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </NavLink>
                  {/* <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          More
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {everythingElse.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as={NavLink}
                              to={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure> */}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </motion.div>
  )
}
