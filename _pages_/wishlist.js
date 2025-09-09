import Layout from '@/component/layout/Layout'
import WishListMain from '@/component/main/WishListMain'
import Head from 'next/head'
import React from 'react'

export default function wishlist() {
  return (
    <>
      <Head>
        <title>Wishlist</title>
        <meta name="description" content="Developed By Raven Rock Technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <>
        <Layout>
          <WishListMain />
        </Layout>
      </>
    </>
  )
}
