import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface PostProps {
  title: string;
  subtitle: string;
  author: string;
  createdAt: string;
  urlImage: string;
  urlPhoto: string;
  slug: string;
}

function Posts({ author, createdAt, subtitle, title, urlImage, urlPhoto, slug }: PostProps) {
  return (
    <Link
      href={`blog/post/${slug}`}
      className="w-full sm:max-w-[350px] shadow-[0_2px_8px_0_rgba(19,19,20,0.28)]  h-full flex flex-col items-center justify-between gap-2 rounded-t-2xl hover:scale-95 transition-all duration-300"
    >
      <div className="flex w-full h-[200px] sm:h-[234px] relative rounded-t-2xl overflow-hidden">
        <Image src={urlImage} alt="image" fill={true} className="object-cover" />
      </div>

      <div className="flex w-full flex-1 flex-col justify-between gap-2 sm:gap-4 p-4">
        <h1 className="font-bold text-lg sm:text-xl first-letter:text-2xl">{title}</h1>
        <p className="text-gray-700 text-sm hidden md:flex flex-1 text-justify lg:text-left">
          {subtitle}
        </p>

        <div className="flex items-center gap-2">
          <Image src={urlPhoto} width={40} height={40} alt="" className="rounded-2xl" />
          <div>
            <p className="font-semibold text-base">{author}</p>
            <p className="font-light text-sm">
              {format(new Date(createdAt), "dd 'de' MMM 'de' yyyy", { locale: ptBR })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
{
  /* <article
  class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
      sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
      voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
      Molestias explicabo corporis voluptatem?
    </p>

    <a
      href="#"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Find out more

      <span
        aria-hidden="true"
        class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
      >
        &rarr;
      </span>
    </a>
  </div>
</article> */
}

export default Posts;
