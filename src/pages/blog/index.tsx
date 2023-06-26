import React from "react";
import Image from "next/image";
import Posts from "../../components/Posts";
import Link from "next/link";
import { MdNewReleases } from "react-icons/md";
import { gql } from "@apollo/client";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { GetServerSideProps } from "next";
import Header from "@/components/Header";
import { client } from "../../lib/apollo";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
import { BsArrowRight } from "react-icons/bs";

const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts(orderBy: createdAt_DESC) {
      id
      slug
      subtitle
      title
      createdAt
      coverImage {
        url
      }
      author {
        name
        authorPhoto {
          url
        }
      }
    }
  }
`;

interface AllPosts {
  posts: {
    id: string;
    slug: string;
    subtitle: string;
    title: string;
    createdAt: string;
    coverImage: {
      url: string;
    };
    author: {
      name: string;
      authorPhoto: {
        url: string;
      };
    };
  }[];
}

export default function Home({ posts }: AllPosts) {
  return (
    <>
      <Header />
      <div className="w-full max-w-[1140px] flex flex-col mx-auto px-4 pt-32 lg:pt-36">
        {posts ? (
          <>
            <Link
              href={`blog/post/${posts[0].slug}`}
              className="w-full h-full flex items-center gap-4 lg:gap-8 flex-col sm:flex-row justify-center transition-all border border-gray-200 rounded-lg shadow hover:scale-95 duration-300"
            >
              <div className="flex flex-1 h-full flex-col gap-4 lg:gap-6 sm:pl-4 p-4">
                <h1 className="font-semibold text-2xl md:text-4xl first-letter:text-5xl ">
                  {posts[0].title}
                </h1>
                <p className="text-gray-700 text-base md:text-lg text-justify lg:text-left line-clamp-4">
                  {posts[0].subtitle}
                </p>

                <div className="flex items-center gap-2">
                  <Image
                    src={posts[0].author?.authorPhoto.url}
                    width={50}
                    height={50}
                    alt=""
                    className="rounded-2xl"
                  />
                  <div>
                    <p className="font-semibold text-sm text-black">{posts[0].author?.name}</p>
                    <p className="font-light text-base flex items-center gap-2">
                      {format(new Date(posts[0].createdAt), "dd 'de' MMM 'de' yyyy", {
                        locale: ptBR,
                      })}
                      <MdNewReleases className="text-xl text-primary" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex w-full h-full min-h-[270px] sm:min-h-[334px] relative overflow-hidden rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none">
                <Image
                  loading="eager"
                  src={posts[0].coverImage.url}
                  alt="image"
                  fill={true}
                  className="object-cover"
                  blurDataURL=""
                />
              </div>
            </Link>
            <h2 className="text-3xl font-bold mt-8 sm:mt-14 mb-8 text-black">
              Últimas postagens:{" "}
            </h2>
            <div className="flex flex-col items-center sm:grid grid-cols-2 md:grid-cols-3 gap-7 lg:gap-8 mb-20">
              {posts.map((post, index) => {
                if (index !== 0) {
                  return (
                    <Posts
                      key={post.id}
                      title={post.title}
                      author={post.author.name}
                      createdAt={post.createdAt}
                      subtitle={post.subtitle}
                      urlImage={post.coverImage.url}
                      urlPhoto={post.author.authorPhoto.url}
                      slug={post.slug}
                    />
                  );
                }
              })}
            </div>
          </>
        ) : (
          "null"
        )}
      </div>
      <Footer />
      <Whatsapp />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await client.query({ query: GET_ALL_POSTS });
  return {
    props: {
      posts: data.posts,
    },
  };
};
