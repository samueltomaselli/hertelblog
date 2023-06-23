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
      className="w-full sm:max-w-[350px] border border-gray-200 rounded-lg shadow   h-full flex flex-col items-center justify-between gap-2 rounded-t-2xl hover:scale-95 transition-all duration-300"
    >
      <div className="flex w-full h-[200px] sm:h-[234px] relative rounded-t-2xl overflow-hidden">
        <Image src={urlImage} alt="image" fill={true} className="object-cover" />
      </div>

      <div className="flex w-full flex-1 flex-col justify-between gap-2 sm:gap-4 p-4">
        <h1 className="font-bold text-lg sm:text-xl first-letter:text-2xl">{title}</h1>
        <p className="text-gray-700 text-sm line-clamp-3 md:line-clamp-none md:flex flex-1 text-justify lg:text-left">
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

export default Posts;
