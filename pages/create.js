import React, { useState } from 'react';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import CreateHeader from '../components/CreateHeader';
import parse, { domToReact } from 'html-react-parser';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
	ssr: false,
	loading: () => <p>Loading ...</p>,
});

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
	const [value, setValue] = useState('');
	return (
		<>
			<CreateHeader />
			<input
				type="text"
				placeholder="Search"
				style={{ backgroundColor: '#f1f1f1' }}
				className="shadow-sm block w-full pt-2 pb-2 pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
			/>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'flex-start',
				}}
				className="pl-0 pt-5 md:pt-4"
			>
				<QuillNoSSRWrapper
					theme="snow"
					modules={modules}
					formats={formats}
					value={value}
					onChange={setValue}
					style={{ border: 'none', width: '100%' }}
					className="col-span-2 shadow-md pb-5"
				/>

				<div
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
				</div>
			</div>
		</>
	);
}

export default Create;
