import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from './Header.js'
import Body from './body.js'

export default function Home({errorCode, data}) {

  if (errorCode) {
    return <Error statusCode={errorCode} />;
}

  return (
    <div>
      <Head>

      </Head>
      <Body errorCode={errorCode} data={data}>
      </Body>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  console.log("lala")
  const res = await fetch("http://localhost:1337/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      tests {
        data {
          attributes {
            titre
          }
        }
      }`,
    }),
  });

  console.log(res);


  let errorCode = res.statusText === "OK" ? false : res.status;

  const json = await res.json();

  //console.log(json);

  let data = null;

  if (typeof json.data !== "undefined") {
    if (json.data.articles.data.length === 0) {
      errorCode = 404;
    } else {
      data = json.data.articles.data[0];
    }
  }
  //console.log(data)
  return {
    props: { errorCode, data: data },
  };
}
