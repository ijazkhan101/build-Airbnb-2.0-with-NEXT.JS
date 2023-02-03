import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Banner from '../components/Banner'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>lets build Airbnb 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      { /* Banner */}
      <Banner/>
    </div>
  )
}

export default Home
