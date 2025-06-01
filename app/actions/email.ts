'use server'

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;
  
  // Validate form data
  if (!name || !email || !subject || !message) {
    return { error: "All fields are required" };
  }
  
  // Create email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASSWORD, // Your app password
    },
  });
  
  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'wasifsohail66@gmail.com', // Your email where you want to receive messages
    subject: `Portfolio Contact: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };
  
  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { error: "Failed to send email" };
  }
}