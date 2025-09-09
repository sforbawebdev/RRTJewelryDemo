import Layout from '@/component/layout/Layout'
import BlogMain from '@/component/main/BlogMain'
import Head from 'next/head'
import React from 'react'

export default function blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Developed By Raven Rock Technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <>
        <Layout>
          <BlogMain />
        </Layout>
      </>
    </>
  )
}
