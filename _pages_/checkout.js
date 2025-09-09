import Layout from '@/component/layout/Layout'
import CheckoutMain from '@/component/main/CheckoutMain'
import Head from 'next/head'
import React from 'react'

export default function checkout() {
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Developed By Raven Rock Technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <>
        <Layout>
          <CheckoutMain />
        </Layout>
      </>
    </>
  )
}

