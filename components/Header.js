import Image from 'next/image';
import React from 'react';
import {
    SearchIcon, PlusCircleIcon
} from '@heroicons/react/24/solid'
import {
	useSession,
	signIn,
	signOut,
} from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function Header() {
	const { data: session, status } = useSession();
	const [open, setOpen] = useRecoilState(modalState);

	return (
		<div
			className="shadow-sm border-b-1 fixed top-0 w-full z-58"
			style={{ backgroundColor: '#fff' }}
		>
			<div
				className="flex justify-between max-w-6xl mx-2 items-center lg:mx-auto"
				style={{ backgroundColor: '#fff' }}
			>
				<div className="relative hidden lg:inline-grid h-14 items-center cursor-pointer">
					<h1 style={{ fontSize: 24, fontWeight: 600 }}>
						Strides Connect
					</h1>
				</div>
				<div
					className="relative lg:hidden mt-1 h-16 items-center w-16 cursor-pointer"
					style={{ backgroundColor: '#fff' }}
				>
					<Image
						src={'/icon.png'}
						fill
						style={{ objectFit: 'contain', opacity: 1 }}
					/>
				</div>

				{/* Middle - search input field*/}
				<div className="max-w-xs md:inline-grid">
					<div className="relative mt-0 p-3 rounded-md">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-5 h-5 text-gray-500"
							>
								<path
									fillRule="evenodd"
									d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<input
							type="text"
							placeholder="Search"
							style={{ backgroundColor: '#f1f1f1' }}
							className="shadow-sm block w-full pt-2 pb-2 pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
						/>
					</div>
				</div>

				{/* Right */}
				<div className="flex items-center justify-end space-x-4">
					{session ? (
						<>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-7 h-7 text-gray-500 hidden lg:inline-grid hover:scale-125 transition-all duration-150 ease-out"
							>
								<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
								<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-7 h-7 text-gray-500 hidden hover:scale-125 transition-all duration-150 ease-out"
							>
								<path
									fillRule="evenodd"
									d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
									clipRule="evenodd"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-7 h-7 text-gray-500 hidden lg:inline-grid hover:scale-125 transition-all duration-150 ease-out"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
								/>
							</svg>

							<Menu
								as="div"
								className="relative md:inline-block text-left hidden"
							>
								<div>
									<Menu.Button className="w-full justify-center bg-white px-0 py-0 text-sm font-medium text-gray-700 focus:outline-none ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											className="w-8 h-8 text-gray-500 hidden lg:inline-grid hover:scale-125 transition-all duration-150 ease-out"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
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
									<Menu.Items className="absolute right-0 z-10 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
										<div className="py-1">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? 'bg-gray-100 text-gray-900'
																: 'text-gray-700',
															'flex flex-row align-middle px-4 py-2 text-sm',
														)}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke-width="1.5"
															stroke="currentColor"
															class="w-6 h-6 mr-3"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
															/>
														</svg>
														<p>Create Publication</p>
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? 'bg-gray-100 text-gray-900'
																: 'text-gray-700',
															'flex flex-row align-middle px-4 py-2 text-sm',
														)}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															strokeWidth={1.5}
															stroke="currentColor"
															className="w-6 h-6 mr-3"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
															/>
														</svg>

														<p>Live Audio Room</p>
													</a>
												)}
											</Menu.Item>
										</div>
									</Menu.Items>
								</Transition>
							</Menu>
							<Menu
								as="div"
								className="relative inline-block text-left"
							>
								<div>
									<Menu.Button className="w-full justify-center bg-white px-0 py-0 text-sm font-medium text-gray-700 focus:outline-none ">
										<img
											src={session?.user?.image}
											alt=""
											className="h-10 w-10 rounded-full cursor-pointer"
											style={{ marginRight: 0 }}
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
									<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										<div className="py-1">
											<Menu.Item>
												{({ active }) => (
													<>
														<p
															className={classNames(
																active
																	? 'bg-gray-100 text-gray-900 '
																	: 'text-gray-700',
																'block px-4 py-0 text-sm',
															)}
														>
															Signed in as
														</p>
														<a
															href="#"
															className={classNames(
																active
																	? 'bg-gray-100 text-gray-900'
																	: 'text-gray-700',
																'block px-4 py-2 text-sm',
															)}
														>
															{session?.user?.email}
														</a>
													</>
												)}
											</Menu.Item>
										</div>
										<div className="py-1">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? 'bg-gray-100 text-gray-900'
																: 'text-gray-700',
															'block px-4 py-2 text-sm',
														)}
													>
														Account Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? 'bg-gray-100 text-gray-900'
																: 'text-gray-700',
															'block px-4 py-2 text-sm',
														)}
													>
														Support
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? 'bg-gray-100 text-gray-900'
																: 'text-gray-700',
															'block px-4 py-2 text-sm',
														)}
													>
														License
													</a>
												)}
											</Menu.Item>
										</div>

										<div className="py-1">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? 'bg-gray-100 text-gray-900'
																: 'text-gray-700',
															'block px-4 py-2 text-sm',
														)}
														onClick={signOut}
													>
														Sign Out
													</a>
												)}
											</Menu.Item>
										</div>
									</Menu.Items>
								</Transition>
							</Menu>
						</>
					) : (
						<>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-6 h-6 text-gray-500 hidden lg:inline-grid hover:scale-125 transition-all duration-150 ease-out"
							>
								<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
								<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
							</svg>
							<button
								className="px-1 py-2.5 w-20 rounded-lg text-white text-sm"
								style={{ backgroundColor: '#5F48C7' }}
								onClick={signIn}
							>
								Sign In
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default Header;
