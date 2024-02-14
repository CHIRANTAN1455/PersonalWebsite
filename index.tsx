import { Suspense, useState } from 'react';

import Container from 'components/Container';
import BlogPost from 'components/BlogPost';
import { InferGetStaticPropsType } from 'next';
import { indexQuery } from 'lib/queries';
import { getClient } from 'lib/sanity-server';
import { Post } from 'lib/types';
import Image from 'next/image';

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Chirantan Pradhan"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="max-w-2xl mx-auto">
        {posts.map((post) => (
          <BlogPost
            key={post.title}
            slug={post.slug}
            title={post.title}
            date={post.date}
          />
        ))}
      </div>
      <div>
        
      </div>

      <div className="border p-4 rounded-xl flex flex-col lg:flex-row space-y-8 lg:space-x-8 w-full mb-8">
        {/* <div className="bg-red-500 sepia rounded-md p-5">
          <Image src="/images/a.png" alt="dsg" fill />
        </div> */}

        <div className="relative h-60 lg:w-60">
          <Image
            alt="Mountains"
            src="/images/g.jpg"
            fill
            className="object-cover rounded-xl grayscale"
          />
        </div>
        <div className="lg:w-4/5">
          <p className="text-center text-3xl">
            PRODUCT DEVLOPMENT ENGINEER<br></br>
            BORN IN CHANDIGARH , LIVING IN BANGALORE<br></br>
            INSPIRED BY THE 70'S
          </p>
          <br />
          <p className="text-center">
            My favorite quote - "People shouldn't be afraid of their
            government." Governments should be afraid of their people.”{' '}
            <br></br>As a will to contribute towards the society, I work closely
            with a hometown NGO For a cause NGO - foracausengo.in
          </p>
        </div>
      </div>
      <div className="border p-4 rounded-xl mb-8">
        <p className="text-center text-xl">
          What i like ? - Travelling <br></br>
          My favorite memory - The Black Beach<br></br>
          Yeah i love mario , check my socials on the top right
        </p>
        <br />
        <p className="text-center">
          Yeah i know the CSS in this website is messed up trust me i am trying
        </p>
      </div>
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts: Post[] = await getClient(preview).fetch(indexQuery);
  return { props: { posts } };
}
