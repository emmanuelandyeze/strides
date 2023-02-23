import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Feed from '../components/Feed'
import Landing from '../components/Landing'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  return (
    <div style={{
				backgroundColor: '#fff',
			}}>
      <Head>
        <title>Strides Connect</title>
        <link rel="icon" href="/icon.png" />
        <link rel="manifest" href="manifest.json" />
        <meta name="theme-color" content="#fff" />
        <meta name="description" content="Find knowledge on a topic of
												interest, connect with like mind,
												provide mentorship and earn."></meta>
      </Head>
      
      <Header />
      <Landing />
      <Feed /> 
      <Modal />
      <Footer />
      
    </div>
  )
}

export default Home
