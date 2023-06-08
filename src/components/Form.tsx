import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { sendContactForm } from "@/lib/api";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(3, { message: 'O campo "Nome" é obrigatório!' }),
  email: z.string().email({ message: `O campo "E-mail" deve seguir o padrão correto!` }),
  subject: z.string().min(5, { message: `O campo "Assunto" é obrigatório!` }),
  message: z.string().min(5, { message: `O campo "Mensagem" é obrigatório!` }),
});

type FormInput = z.infer<typeof schema>;

function Form() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInput>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormInput) => {
    setIsLoading(true);
    await sendContactForm(data);

    setIsLoading(false);
  };
  return (
    <>
      <div className="sm:p-7 p-4 relative gap-3 flex flex-col bg-primary before:absolute before:w-[26px] before:h-[26px] before:bg-primary before:rotate-45 before:left-[-13px] before:top-[240px]">
        <form onSubmit={handleSubmit(onSubmit)} className="text-white" autoComplete="off">
          <h3 className="text-white font-semibold text-2xl mb-2">Contato via e-mail</h3>
          <div className="my-4">
            {errors.name?.message && (
              <p className="text-sm text-white pb-2">{errors.name?.message}</p>
            )}
            <input
              type="text"
              placeholder="Nome"
              className="w-full bg-transparent placeholder:text-white outline-none font-normal text-base tracking-wide px-5 py-2 rounded-sm border-2 border-white"
              {...register("name")}
            />
          </div>
          <div className="my-4">
            {errors.email?.message && (
              <p className="text-sm text-white pb-2">{errors.email?.message}</p>
            )}
            <input
              type="text"
              placeholder="E-mail"
              className="w-full bg-transparent placeholder:text-white outline-none font-normal text-base tracking-wide px-5 py-2 rounded-sm border-2 border-white"
              {...register("email")}
            />
          </div>
          <div className="my-4">
            {errors.subject?.message && (
              <p className="text-sm text-white pb-2">{errors.subject?.message}</p>
            )}
            <input
              type="text"
              placeholder="Assunto"
              className="w-full bg-transparent placeholder:text-white outline-none font-normal text-base tracking-wide px-5 py-2 rounded-sm border-2 border-white"
              {...register("subject")}
            />
          </div>
          <div className="my-4">
            {errors.message?.message && (
              <p className="text-sm text-white pb-2">{errors.message?.message}</p>
            )}
            <textarea
              placeholder="Mensagem"
              className="w-full bg-transparent placeholder:text-white outline-none border-2 border-white min-h-[150px] resize-none px-5 py-3 rounded-sm"
              {...register("message")}
            ></textarea>
          </div>
          <input type="hidden" name="_template" value="table" />
          <input
            type="submit"
            value={isLoading ? "Enviando..." : "Enviar"}
            className="bg-white text-base text-primary leading-none cursor-pointer font-semibold px-5 py-3  rounded-sm border-2 border-solid border-white hover:bg-primary hover:text-white transition-all"
          />
        </form>
      </div>
    </>
  );
}

export default Form;