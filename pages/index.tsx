import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/header';
import Tabs from '@components/tabs';
import Footer from '@components/footer';
import Credits from '@components/credits';

type PostList = string[];

function Home() {
  return (
    <>
      <Head>
        <title>Cheff Já - Seu refeição 5 estrelas em um click! - Rio de Janeiro</title>
      </Head>

      <main>
        <Header />
        
        <Tabs />

        <Footer />
        
        <Credits />
      </main>
      
    </>

  )
}

export default Home