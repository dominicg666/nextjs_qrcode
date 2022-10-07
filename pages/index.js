import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { QrReader } from '../components/QRCode'
import { QrReaderFromUrl } from '../components/QRCode'

export default function Home() {
  const [data, setData] = useState('No result');

  return (
    <div className={styles.container}>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }
          console.log(error, result);
          if (!!error) {
            console.log(error);
            // console.info(error);
          }
        }}
        videoId="video"
        scanDelay={500}
        constraints={
          { facingMode: 'user' }
        }
        videoStyle={{
          width: "200px",
          height: "200px"
        }}
        containerStyle={{
          width: "200px",
          height: "200px"
        }}
      />
      <p>{data}</p>

      <QrReaderFromUrl
        scanDelay={500}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }
          console.log(error, result);
          if (!!error) {
            console.log(error);
            // console.info(error);
          }
        }}
      />
    </div>
  )
}
