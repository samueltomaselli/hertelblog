import { mailOptions, transporter } from "@/lib/nodemailer";

const handler = async (req:any, res:any) => {
  if (req.method === "POST") {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: "This is a test",
        html: `<div><h2>E-mail: ${data.email}</h2></div><h2>Nome: ${data.name}</h2><h2>Conteúdo: ${data.message}</h2>`

      });
      return res.status(200).json({success:true});
    } catch (error) {
      console.log(error)
      return res.status(400).json({message: "Error"})
    }
  }
  
  return res.status(400).json({message: "Error"})
}

export default handler;