import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>lets build Airbnb 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      { /* Banner */}
      { /* Header will goes here */}
    </div>
  )
}

export default Home
