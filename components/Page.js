import Head from 'next/head';

export default function Layout({title, keywords, children}) {
    return (
        <div>
            <Head>
                <meta charSet='utf-8' />
                <meta name='keywords' content={keywords} />
                <title>{title}</title>   
            </Head>
            <main>
                {children}
            </main>
        </div>
    )
}


