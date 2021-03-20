import Head from 'next/head';
import Image from 'next/image';

const Hello = () => (
  <>
    <Head>
      <title>Welcome to the jungle</title>
      <meta property="og:title" content="Welcome to the jungle" />
    </Head>
    <article>
      <Image 
        src="/post/hello-there/gnr.png"
        width={820}
        height={480}
      />
      <h1>Hello there!</h1>
    </article>
  </>
)

export default Hello