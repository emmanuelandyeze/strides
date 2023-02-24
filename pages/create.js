import React, { useRef, useState } from 'react';
import { Redirect } from 'next';
import Image from 'next/image';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import CreateHeader from '../components/CreateHeader';
import parse, { domToReact } from 'html-react-parser';
import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import {
	CheckIcon,
	ChevronUpDownIcon,
} from '@heroicons/react/20/solid';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
	ssr: false,
	loading: () => <p>Loading ...</p>,
});
import { CameraIcon } from '@heroicons/react/24/solid';

import { db, storage } from '../firebase';
import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	updateDoc,
} from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import {
	ref,
	getDownloadURL,
	uploadString,
} from 'firebase/storage';
import Link from 'next/link';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const people = [
	{
		id: 1,
		name: 'Web development',
	},
	{
		id: 2,
		name: 'Career development',
	},
	{
		id: 3,
		name: 'Copy Writing',
	},
	{
		id: 4,
		name: 'Mobile app development',
	},
	{
		id: 5,
		name: 'Startups',
	},
	{
		id: 6,
		name: 'Health & Lifestyle',
	},
	{
		id: 7,
		name: 'Business',
	},
];

const modules = {
	toolbar: [
		[{ header: '1' }, { header: '2' }, { font: [] }],
		[{ size: [] }],
		[
			'bold',
			'italic',
			'underline',
			'strike',
			'blockquote',
			'code-block',
		],
		[
			{ list: 'ordered' },
			{ list: 'bullet' },
			{ indent: '-1' },
			{ indent: '+1' },
		],
		['link', 'image', 'video'],
		['clean'],
	],
	clipboard: {
		matchVisual: false,
	},
};

const formats = [
	'header',
	'font',
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'indent',
	'link',
	'image',
	'video',
	'code-block',
];

const options = {
	replace: ({ attribs, children }) => {
		if (!attribs) {
			return;
		}

		if (attribs.h1) {
			return (
				<h1 style={{ fontSize: 42 }}>
					{domToReact(children, options)}
				</h1>
			);
		}

		if (attribs.h1) {
			return (
				<span style={{ color: 'black' }}>
					{domToReact(children, options)}
				</span>
			);
		}
	},
};

function Create() {
	const { data: session } = useSession();
	const [value, setValue] = useState('');
	const filePickerRef = useRef(null);
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const bodyRef = useRef(null);
	const [loading, setLoading] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);
	const [selected, setSelected] = useState(people[3]);

	const addImageToPost = (e) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			setSelectedFile(readerEvent.target.result);
		};
	};
	console.log(value);

	const uploadPost = async () => {
		if (loading) return;

		setLoading(true);

		//Create a post and add to firestore 'posts' collection

		//Get post ID

		//Upload image to firbase storage with post id

		//Get a download url from firebase and update the original post with image

		const docRef = await addDoc(collection(db, 'posts'), {
			username: session.user.username,
			name: session.user.name,
			title: titleRef.current.value,
			description: descriptionRef.current.value,
			body: value,
			profileImg: session.user.image,
			timestamp: serverTimestamp(),
			niche: selected,
		});

		console.log('New doc added with id', docRef.id);

		const imageRef = ref(
			storage,
			`posts/${docRef.id}/image`,
		);

		await uploadString(
			imageRef,
			selectedFile,
			'data_url',
		).then(async (snapshot) => {
			const downloadURL = await getDownloadURL(imageRef);
			await updateDoc(doc(db, 'posts', docRef.id), {
				image: downloadURL,
			});
		});

		setLoading(false);
		setSelectedFile(null);

		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	};
	return (
		<>
			<div>
				<div
					className="shadow-sm border-b-1 fixed top-0 w-full"
					style={{ backgroundColor: '#fff', zIndex: 1000 }}
				>
					<div
						className="flex justify-between max-w-6xl mx-2 items-center lg:mx-auto"
						style={{ backgroundColor: '#fff' }}
					>
						<div className="relative hidden lg:inline-grid h-14 items-center cursor-pointer">
							<Link
								href={'/'}
								style={{ fontSize: 24, fontWeight: 600 }}
							>
								Strides Connect
							</Link>
						</div>
						<Link
							href={'/'}
							className="relative lg:hidden mt-1 h-16 items-center w-16 cursor-pointer"
							style={{ backgroundColor: '#fff' }}
						>
							<Image
								src={'/icon.png'}
								fill
								style={{ objectFit: 'contain', opacity: 1 }}
							/>
						</Link>

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
									className="px-1 py-2.5 w-36 rounded-lg text-white text-xs shadow-md"
									style={{ backgroundColor: '#5F48C7' }}
									onClick={uploadPost}
								>
									{loading ? 'Uploading...' : 'Upload Post'}
									{/* Upload Post */}
								</button>
							</>
						</div>
					</div>
				</div>
				<div className="max-w-6xl mx-2 items-center pt-24 lg:mx-auto">
					<div className="flex flex-row justify-between">
						<div>
							<input
								type="text"
								placeholder="Title of Publication"
								style={{ backgroundColor: '#fff' }}
								ref={titleRef}
								className="block w-full pt-2 pb-2 pl-1 sm:text-sm md:text-xl focus:border-0"
							/>
							<input
								type="text"
								placeholder="Description"
								style={{ backgroundColor: '#fff' }}
								ref={descriptionRef}
								className="block w-full pt-2 pb-2 pl-1 sm:text-sm md:text-md focus:border-0"
							/>
							<Listbox
								value={selected}
								onChange={setSelected}
							>
								{({ open }) => (
									<>
										<Listbox.Label className="block text-sm font-medium text-gray-700">
											Select Niche
										</Listbox.Label>
										<div className="relative mt-1">
											<Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
												<span className="flex items-center">
													<span className="ml-3 block truncate">
														{selected.name}
													</span>
												</span>
												<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
													<ChevronUpDownIcon
														className="h-5 w-5 text-gray-400"
														aria-hidden="true"
													/>
												</span>
											</Listbox.Button>

											<Transition
												show={open}
												as={Fragment}
												leave="transition ease-in duration-100"
												leaveFrom="opacity-100"
												leaveTo="opacity-0"
											>
												<Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
													{people.map((person) => (
														<Listbox.Option
															key={person.id}
															className={({ active }) =>
																classNames(
																	active
																		? 'text-white bg-indigo-600'
																		: 'text-gray-900',
																	'relative cursor-default select-none py-2 pl-3 pr-9',
																)
															}
															value={person}
														>
															{({ selected, active }) => (
																<>
																	<div className="flex items-center">
																		<span
																			className={classNames(
																				selected
																					? 'font-semibold'
																					: 'font-normal',
																				'ml-3 block truncate',
																			)}
																		>
																			{person.name}
																		</span>
																	</div>

																	{selected ? (
																		<span
																			className={classNames(
																				active
																					? 'text-white'
																					: 'text-indigo-600',
																				'absolute inset-y-0 right-0 flex items-center pr-4',
																			)}
																		>
																			<CheckIcon
																				className="h-5 w-5"
																				aria-hidden="true"
																			/>
																		</span>
																	) : null}
																</>
															)}
														</Listbox.Option>
													))}
												</Listbox.Options>
											</Transition>
										</div>
									</>
								)}
							</Listbox>
						</div>
						{selectedFile ? (
							<Image
								src={selectedFile}
								style={{
									objectFit: 'contain',
									border: '1px solid #818181',
								}}
								width={150}
								height={150}
								onClick={() => setSelectedFile(null)}
							/>
						) : (
							<div
								onClick={() =>
									filePickerRef.current.click()
								}
								style={{
									// border: '1px solid #808080',
									padding: '3rem',
								}}
								className="shadow-md"
							>
								<CameraIcon
									className="h-10 w-10 text-red-600"
									aria-hidden="true"
								/>
							</div>
						)}
					</div>
					<div>
						<input
							type="file"
							ref={filePickerRef}
							onChange={addImageToPost}
							name=""
							id=""
							hidden
						/>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'flex-start',
						}}
						className="flex justify-between max-w-6xl mx-2 items-center lg:mx-auto pt-4"
					>
						<QuillNoSSRWrapper
							theme="snow"
							modules={modules}
							formats={formats}
							value={value}
							onChange={setValue}
							style={{ border: 'none', width: '100%' }}
							className="col-span-2"
							// ref={bodyRef}
						/>

						{/* <div
					className="pt-5 px-5 hidden md:block shadow-md pb-4"
					style={{
						width: '100%',
					}}
				>
					<span
						className="pt-5 text-lg"
						style={{ fontWeight: 700 }}
					>
						Preview
					</span>
					<span style={{ wordWrap: 'break-word' }}>
						{parse(value, options)}
					</span>
				</div> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default Create;
