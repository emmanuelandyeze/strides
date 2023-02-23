import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
	SearchIcon,
	PlusCircleIcon,
} from '@heroicons/react/24/solid';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { Fragment } from 'react';
import {
	Menu,
	Transition,
	Dialog,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { useSession } from 'next-auth/react';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function Footer() {
	const { data: session, status } = useSession();
	const [open, setOpen] = useRecoilState(modalState);
	return (
		<>
			{session ? (
				<section
					id="bottom-navigation"
					className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow-sm md:hidden"
					style={{ backgroundColor: '#f1f1f1' }}
				>
					<div id="tabs" class="flex justify-between">
						<Link
							href="/"
							className="w-full focus:text-purple-800 hover:text-purple-800 justify-center inline-block text-center pt-2 pb-1"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.0"
								stroke="currentColor"
								class="w-6 h-6.5 inline-block mb-1"
							>
								9
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
								/>
							</svg>

							<span class="tab tab-home block text-xs">
								Home
							</span>
						</Link>
						<a
							href="/community"
							class="w-full focus:text-purple-800 hover:text-purple-800 justify-center inline-block text-center pt-2 pb-1"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.0"
								stroke="currentColor"
								class="w-6 h-6 inline-block mb-1"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
								/>
							</svg>

							<span class="tab tab-kategori block text-xs">
								Community
							</span>
						</a>
						<Menu
							as="div"
							className="w-full inline-block text-left"
						>
							<div>
								<Menu.Button className="w-full justify-center px-0 py-0 text-sm font-medium text-gray-700 focus:outline-none ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-10 h-10 inline-block mt-2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</Menu.Button>
							</div>
							{/* <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" /> */}
							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items
									style={{
										marginTop: '-30rem',
										height: '15rem',
										paddingTop: '2rem',
										alignSelf: 'center',
									}}
									className="absolute right-8 z-10 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
								>
									<p
										style={{
											paddingLeft: '1rem',
											fontWeight: 'bolder',
											paddingBottom: '1rem',
										}}
									>
										What do you want to do?
									</p>
									<div className="py-1">
										<Menu.Item>
											{({ active }) => (
												<Link
													href="/create"
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
												</Link>
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
						<Link
							href="/mystrides"
							class="w-full focus:text-purple-800 hover:text-purple-800 justify-center inline-block text-center pt-2 pb-1"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.0"
								stroke="currentColor"
								class="w-6 h-6 inline-block mb-1"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
								/>
							</svg>

							<span class="tab tab-whishlist block text-xs">
								My Strides
							</span>
						</Link>
						<Link
							href="/settings"
							class="w-full focus:text-purple-800 hover:text-purple-800 justify-center inline-block text-center pt-2 pb-1"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.0"
								stroke="currentColor"
								class="w-6 h-6 inline-block mb-1"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>

							<span class="tab tab-account block text-xs">
								Settings
							</span>
						</Link>
					</div>
				</section>
			) : (
				<div></div>
			)}
		</>
	);
}

export default Footer;
