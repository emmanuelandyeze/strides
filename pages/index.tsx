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
												provide mentorship and earn."/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.css" integrity="sha384-ko6T2DjISesD0S+wOIeHKMyKsHvWpdQ1s/aiaQMbL+TIXx3jg6uyf9hlv3WWfwYv" />
      <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.js" integrity="sha384-tsPOhveNsi36uhglzMBNOAA2xd7LlEqQuQHFKi4DwP+6UKrrLGub1MD77Zx18F8e"></script>
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
