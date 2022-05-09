import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from '../components/Table'
import Landing from '../components/Landing'
import axios from 'axios'



export default function Home() {
  const [heading, setHeading] = useState("")
  useEffect(() => {
    const data = axios.get("http://localhost:4000/formName").then(res => {
      setHeading(res.data[0].formName)
      console.log(res.data)
    })
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <h1 className="text-center text-3xl text-black font-bold m-7 p-5">
        {heading}
      </h1>



      <Landing />






    </div>
  )
}

//<Form/>