import Page from '../components/Page';
import styles from '../styles/Home.module.css';

export default function User({user}) {

    const {login} = user;

    return (
        <Page title={`${login}'s profile`} keywords={`user,github,${login}`}>
            <div className={styles.users}>
                <div className={styles.user}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={user.avatar_url} alt={login} style={{width:'250px'}} />
                    <div className={styles.username} style={{fontSize:32}}>{user.login}</div>
                    <div><span className={styles.followers}>followers:</span> {user.followers}</div>
                    <div><span className={styles.followers}>followings:</span> {user.following}</div>
                </div>
            </div>
        </Page>
    )
}

export const getStaticPaths = async() => {
    
    const res = await fetch('https://api.github.com/users');
    const users = await res.json();

    return {
        paths: users && users.map(i=> ({
             params: {user: i.login}
        })),
        fallback: false
    }
}

export const getStaticProps = async({params}) => {
    const res = await fetch(`https://api.github.com/users/${params.user}`);
    const user = await res.json();

    return {
        props: {
            user
        }
    }
}