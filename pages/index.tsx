import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  return (
    <div style={{
				backgroundColor: '#fff',
			}}>
      <Head>
        <title>The Strides</title>
        <link rel="icon" href="/icon.png" />
        <link rel="manifest" href="manifest.json" />
        <meta name="theme-color" content="#fff" />
      </Head>

      <Header />
      <Feed /> 
      <Footer />
      
    </div>
  )
}

export default Home
