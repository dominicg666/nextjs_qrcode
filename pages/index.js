import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { QrReader } from '../components/QRCode'

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
        constraints={
          { facingMode: 'user' }
        }
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </div>
  )
}
