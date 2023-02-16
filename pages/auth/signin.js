import React from 'react';
import {
	getProviders,
	signIn as signIntoProvider,
} from 'next-auth/react';

import Header from '../../components/Header';

//Browser
function signIn({ providers }) {
	return (
		<>
			{/* <Header /> */}
			<div className="flex flex-col items-center justify-center py-2 -mt-15 px-14 text-center">
				<img className="w-80" src="/icon.png" alt="" />
				<img
					style={{
						width: '10rem',
						height: '2rem',
						marginBottom: '1rem',
					}}
					src="/logo.png"
					alt=""
				/>
				<p>
					The Strides newsletter platform enables you to
					share your knowledge on a topic of interest, get
					paid for your expertise, and provide
					mentorship to subscribers.
				</p>
				<div className="mt-1">
					{Object.values(providers).map((provider) => (
						<div
							key={provider.name}
							style={{ paddingTop: '5rem' }}
						>
							<button
								className="p-3 rounded-lg text-white"
								style={{ backgroundColor: '#5F48C7' }}
								onClick={() =>
									signIntoProvider(provider.id, {
										callbackUrl: '/',
									})
								}
							>
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

//Server
export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}

export default signIn;
