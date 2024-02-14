import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Chirantan Pradhan - Developer, writer, creator.',
    description: `Front-end developer, JavaScript enthusiast, and course creator.`,
    type: 'website',
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://chirantanpradhan.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://chirantanpradhan.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Chirantan Pradhan" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chirantanpradhan" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="max-w-4xl mx-auto">{children}</main>
      <div className="fixed bottom-12 left-12 transform scale-50 grayscale">
        <div className="mario"></div>
      </div>
    </>
  );
}
