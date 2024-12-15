import emailjs from "emailjs-com";

const sendEmail = async ({ email, inquiry }) => {
  try {
    const response = await emailjs.send(
      "YOUR_SERVICE_ID", 
      "YOUR_TEMPLATE_ID", 
      {
        user_email: email,
        user_message: inquiry,
      },
      "YOUR_USER_ID" 
    );

    console.log("E-mail enviado com sucesso!", response.status, response.text);
    return response;
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
    throw error;
  }
};
