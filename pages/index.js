import Page from "../components/Page"
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home({users}) {

  return (
    <Page title='Github users lite' keywords='github users,github,lite'>
      <h1 style={{textAlign:'center', fontSize:64}}>Github users</h1>
      <div className={styles.users}>
        {
          users && users.map(i => (
            <div key={i.id} className={styles.user}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={i.avatar_url} alt={i.login} />  
              <div className={styles.username}>
                <Link href={`/${i.login}`}><a>{i.login}</a></Link>
              </div>
            </div>
          ))
        }
      </div>
    </Page>
  )
}


export const getStaticProps = async() => {

  const res = await fetch('https://api.github.com/users');
  const users = await res.json();

  return {
    props: {
      users
    }
  }
  
}