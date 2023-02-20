import React from 'react';

import {
	useSession,
	signIn,
	signOut,
} from 'next-auth/react';
import Image from 'next/image';

function Landing() {
	const { data: session, status } = useSession();
	return (
		<>
			{!session ? (
				<>
					<div
						className="w-full z-58 pb-11 md:bg-gray-50 bg-gray-100"
						style={{ paddingTop: '5rem' }}
					>
						<section className="flex justify-between max-w-6xl mx-3 items-center lg:mx-auto">
							<div className="w-full">
								<div className="md:hidden cursor-pointer">
									<Image
										src={'/landing4.png'}
										style={{
											objectFit: 'contain',
											paddingTop: '2rem',
											position: 'absolute',
											opacity: '.3',
											top: 60,
											right: 10,
										}}
										width={220}
										height={100}
									/>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'space-between',
										width: '100%',
									}}
								>
									<div className="landing-text text-left mx-3 pt-10">
										<h1
											className="md:text-6xl text-3xl mb-4 text-gray-900"
											style={{ fontWeight: 600 }}
										>
											Connect. Inspire. Grow
										</h1>
										<div className="md:max-w-lg max-w-lg">
											<p className="md:text-xl text-md mb-4 text-gray-700">
												Find knowledge on a topic of
												interest, connect with like mind,
												provide mentorship and earn.
											</p>
										</div>
										<button
											className="px-4 shadow-md mt-4 py-2.5 w-30 rounded-lg text-white text-sm"
											style={{ backgroundColor: '#5F48C7' }}
											onClick={signIn}
										>
											Get Started
										</button>
									</div>

									<div className="hidden lg:flex cursor-pointer">
										<Image
											src={'/landing4.png'}
											style={{
												objectFit: 'contain',
												paddingTop: '2rem',
											}}
											width={250}
											height={100}
										/>
									</div>
								</div>
							</div>
						</section>
					</div>
				</>
			) : (
				<div></div>
			)}
		</>
	);
}

export default Landing;
