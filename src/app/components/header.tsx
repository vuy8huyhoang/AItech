'use client'
import { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, Popover, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon, UserIcon, SunIcon, MoonIcon, BellIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { GetServerSideProps } from 'next';

interface HeaderProps {
    initialDarkMode: boolean;
}

const navigation = {
    pages: [
        { name: 'Sản phẩm', href: '/products' },
    ],
};

const Header = ({ initialDarkMode }: HeaderProps) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(initialDarkMode);
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const darkModeCookie = Cookies.get('darkMode') === 'true';
        if (darkModeCookie !== isDarkMode) {
            setIsDarkMode(darkModeCookie);
        }
        document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);
    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        Cookies.set('darkMode', newMode.toString(), { expires: 365 });
        document.body.classList.toggle('dark', newMode);
        setIsDarkMode(newMode);
    };

    return (
        <div className={`fixed top-0 right-0 mb-[120px] w-full z-50 text-white dark:text-gray-300 
            ${isDarkMode
                ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black'
                : 'bg-gradient-to-r from-purple-800 via-indigo-900 to-blue-900'}`}>

            <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300"
                />
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                        <div className="flex px-4 pb-2 pt-5">
                            <button
                                type="button"
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                onClick={() => setOpen(false)}
                            >
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="space-y-4 h-[1000px] border-t border-gray-200 px-4 py-6 dark:bg-gradient-to-r from-gray-800 dark:via-gray-900 dark:to-black">
                            {navigation.pages.map((page) => (
                                <div key={page.name} className="flow-root">
                                    <Link href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                    </Link>
                                </div>
                            ))}
                            <div className="w-full ">
                                <div className="relative rounded-full dark:bg-gray-700 dark:shadow-md dark:border dark:border-gray-600">
                                    <input
                                        type="text"
                                        placeholder="Tìm kiếm laptop..."
                                        className="w-full px-4 py-1.5 animate-typing-placeholder text-sm rounded-full focus:outline-none bg-gray-100 dark:bg-gray-700 dark:text-gray-900 "
                                    />
                                    <Link
                                        rel="canonical"
                                        href={`/timkiem`}
                                        className="absolute inset-y-0 right-0 flex items-center justify-center px-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 dark:bg-indigo-900 dark:hover:bg-indigo-800 transition"
                                    >
                                        <MagnifyingGlassIcon className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <header className="relative shadow-lg ">
                <p className="flex h-10 items-center justify-center text-sm font-medium tracking-wide 
  bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-400 
  dark:from-gray-700 dark:via-gray-800 dark:to-black 
  text-white dark:text-gray-300 hidden lg:flex">
                    Sử dụng các công nghệ AI tiên tiến nhất!
                </p>

                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <button
                            type="button"
                            className="rounded-md p-2 text-gray-400 lg:hidden"
                            onClick={() => setOpen(true)}
                        >
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>

                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Image
                                priority
                                src="/logo-aitech.png"
                                alt="Logo"
                                className="h-10 w-auto"
                                height={100}
                                width={100}
                            />
                            <span className="ml-2 text-2xl font-bold tracking-wide hidden lg:block">
                                Tech AI
                            </span>
                        </Link>

                        <PopoverGroup className="hidden lg:flex lg:space-x-10">
                            {navigation.pages.map((page) => (
                                <Popover key={page.name} className="relative">
                                    <Link href="/gioithieu" className="text-sm font-medium hover:text-indigo-300 transition mr-4">
                                        Giới thiệu
                                    </Link>
                                    <button
                                        className="text-sm font-medium hover:text-indigo-300 transition"
                                        onClick={() => setIsOpen((prev) => !prev)}
                                    >
                                        {page.name}
                                    </button>
                                </Popover>
                            ))}
                        </PopoverGroup>

                        <div className="flex items-center space-x-6">
                            <div className="relative rounded-full bg-white text-gray-700 shadow-md hidden lg:block dark:bg-gray-700 dark:text-gray-900 dark:shadow-md dark:border dark:border-gray-600">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm các công cụ..."
                                    className="w-32 sm:w-48 px-4 py-1.5 text-sm animate-typing-placeholder rounded-full focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                />
                                <Link
                                    href={`/timkiem`}
                                    className="absolute inset-y-0 right-0 flex items-center justify-center px-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition dark:bg-indigo-900 dark:hover:bg-indigo-800"
                                >
                                    <MagnifyingGlassIcon className="h-5 w-5" />
                                </Link>
                            </div>

                            {/* Dark Mode Toggle */}
                            <button
                                type="button"
                                onClick={toggleDarkMode}
                                className="p-2 text-gray-300 hover:text-white transition"
                            >
                                {isDarkMode ? (
                                    <SunIcon className="h-6 w-6" />
                                ) : (
                                    <MoonIcon className="h-6 w-6" />
                                )}
                            </button>

                            {/* Notifications Icon */}
                            <button
                                type="button"
                                className="relative p-2 text-gray-300 hover:text-white transition"
                            >
                                <BellIcon className="h-6 w-6" />
                                <span className="absolute top-[1px] right-[5px] flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                    0
                                </span>
                            </button>

                            {/* User Profile */}
                            <Popover className="relative">
                                <Popover.Button className="p-2 hover:text-gray-300 transition" onClick={() => setIsOpen((prev) => !prev)}>
                                    <UserIcon className="h-6 w-6" />
                                </Popover.Button>
                                {isOpen && (
                                    <Popover.Panel static className="absolute right-0 mt-2 w-36 p-2 bg-white text-gray-800 rounded-lg z-10 shadow-lg ring-1 ring-black ring-opacity-5">
                                        {/* User Profile Menu */}
                                    </Popover.Panel>
                                )}
                            </Popover>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req } = context;
    const darkModeCookie = req.cookies.darkMode === 'true'; 
    return {
        props: {
            initialDarkMode: darkModeCookie,
        },
    };
};

export default Header;
