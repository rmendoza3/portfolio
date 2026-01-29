import nodemailer from 'nodemailer';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
	const { name, email, subject, message } = await req.json();

	// Ensure environment variables are loaded
	const user = process.env.GMAIL_USER;
	const pass = process.env.GMAIL_APP_PASSWORD;
	const toEmail = process.env.TO_EMAIL;

	if (!user || !pass || !toEmail) {
		return NextResponse.json({ message: 'Missing environment variables' }, { status: 500 });
	}

	// Create the Nodemailer transporter
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: user,
			pass: pass,
		},
	});

	try {
		const body: string = `
			Name: ${name}
			Email: ${email}
			
			Message: ${message}
		`;

		// Define the email options
		const mailOptions = {
			from: user,
			to: toEmail,
			subject: subject,
			text: body,
		};

		// Send the email
		await transporter.sendMail(mailOptions);
		return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

	} catch (error) {
		console.error('Email sending error:', error);
		return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
	}
}
