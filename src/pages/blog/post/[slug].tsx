import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbError404 } from "react-icons/tb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { gql } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/lib/apollo";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { ElementNode } from "@graphcms/rich-text-types";
import Whatsapp from "@/components/Whatsapp";
import Error404 from "@/pages/404";

const GET_POST = gql`
  query GetPost($slugPost: String) {
    post(where: { slug: $slugPost }) {
      id
      title
      content {
        json
      }
      author {
        name
        authorPhoto {
          url
        }
      }
      createdAt
      coverImage {
        url
      }
    }
  }
`;

interface PostProps {
  post: {
    id: string;
    title: string;
    coverImage: {
      url: string;
    };
    author: {
      name: string;
      authorPhoto: {
        url: string;
      };
    };
    createdAt: string;
    content: {
      json: ElementNode[];
    };
  };
}

function Post({ post }: PostProps) {
  if (!post) {
    return <Error404 />;
  }
  return (
    <>
      <Header />
      <div className="w-full max-w-[1140px] flex flex-col mx-auto mb-14 pt-32 lg:pt-36 px-4 bg-gray-50">
        <Link
          href="/blog"
          className="text-xl font-semibold gap-2 flex items-center mb-5 w-full max-w-fit hover:text-gray-600"
        >
          <IoMdArrowRoundBack />
          <h2>Voltar</h2>
        </Link>
        <div className="w-full h-full flex flex-col">
          <div className="flex w-full h-56 sm:h-80 lg:h-[392px] relative rounded-2xl overflow-hidden">
            <Image src={post.coverImage.url} alt="image" fill={true} className="object-cover" />
          </div>
        </div>
        <div className="flex w-full flex-col mt-4 sm:mt-8 gap-4">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-[40px]">{post.title}</h1>
          <div className="">
            <RichText
              content={post.content.json}
              renderers={{
                p: ({ children }) => (
                  <p className="text-gray-700 text-lg sm:mt-6 sm:mb-6 text-justify lg:text-left">
                    {children}
                  </p>
                ),
                img: ({ src = "" }) => (
                  <div className=" w-full sm:w-2/3 h-60 sm:h-72 lg:h-[380px] relative rounded-md mb-5 mt-5">
                    <Image src={src} alt="" className="max-w-full  rounded-md" fill />
                  </div>
                ),
              }}
            />
          </div>
          <div className="flex items-center gap-2 ">
            <Image
              src={post.author?.authorPhoto.url}
              width={50}
              height={50}
              alt=""
              className="rounded-2xl"
            />
            <div>
              <p className="font-semibold">{post.author?.name}</p>
              <p className="font-light text-sm">
                {format(new Date(post.createdAt), "dd 'de' MMMM 'de' yyyy", {
                  locale: ptBR,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Whatsapp />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug;

  const { data } = await client.query({
    query: GET_POST,
    variables: {
      slugPost: slug,
    },
  });

  return {
    props: {
      post: data.post,
    },
    revalidate: 30 * 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Post;
