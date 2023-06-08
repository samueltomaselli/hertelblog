import { mailOptions, transporter } from "@/lib/nodemailer";

const handler = async (req:any, res:any) => {
  if (req.method === "POST") {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: "This is a test",
        html: `<h1>${data.name}</h1><h1>${data.email}</h1><h1>${data.message}</h1>`

      });
      return res.status(200).json({success:true});
    } catch (error) {
      console.log(error)
      return res.status(400).json({message: "Error"})
    }
  }
  
  return res.status(404).json()
}

export default handler;