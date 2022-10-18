import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Home