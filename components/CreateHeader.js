import Image from 'next/image';
import React from 'react';
import {
	SearchIcon,
	PlusCircleIcon,
} from '@heroicons/react/24/solid';
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
import Link from 'next/link';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function CreateHeader() {
	const { data: session, status } = useSession();
	const [open, setOpen] = useRecoilState(modalState);

	return (
		<div
			className="shadow-sm border-b-1 fixed top-0 w-full"
			style={{ backgroundColor: '#fff', zIndex: 1000 }}
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

				{/* Right */}
				<div className="flex items-center justify-end space-x-4">
					<>
						<button
							className="px-1 py-2.5 w-full rounded-lg text-sm shadow-md"
							style={{
								backgroundColor: '#fff',
								color: '#5F48C7',
							}}
						>
							Save as Draft
						</button>
						<button
							className="px-1 py-2.5 w-24 rounded-lg text-white text-sm shadow-md"
							style={{ backgroundColor: '#5F48C7' }}
						>
							Publish
						</button>
					</>
				</div>
			</div>
		</div>
	);
}

export default CreateHeader;
