'use client';

import { useState, FormEvent } from 'react';
import { FaEnvelope, FaMapPin, FaPaperPlane } from 'react-icons/fa6';

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [status, setStatus] = useState('');

	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setStatus('Sending...');

		const response = await fetch('/api/send-email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, subject, message }),
		});

		if (response.ok) {
			setStatus('Email sent successfully!');
			setName('');
			setEmail('');
			setSubject('');
			setMessage('');
		} else {
			setStatus('Failed to send email.');
		}
	};

	const contactInfo = [
		{
			icon: <FaEnvelope className="w-6 h-6" />,
			title: 'Email',
			value: 'reuben.mendoza.3@gmail.com',
			link: 'reuben.mendoza.3@gmail.com',
		},/*
		{
			icon: <FaPhone className="w-6 h-6" />,
			title: 'Phone',
			value: '+1 (555) 123-4567',
			link: 'tel:+15551234567',
		},*/
		{
			icon: <FaMapPin className="w-6 h-6" />,
			title: 'Location',
			value: 'Bakersfield, CA',
		},
	];

	return (
		<div className="py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
					<p className="text-xl text-gray-600 dark:text-gray-400">
						Got an idea or project? I’d love to help bring it to life.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium mb-2">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
									placeholder="Your name"
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
									placeholder="your@email.com"
								/>
							</div>

							<div>
								<label htmlFor="subject" className="block text-sm font-medium mb-2">
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
									required
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
									placeholder="How can I help you?"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium mb-2">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									required
									rows={6}
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
									placeholder="Tell me about your project..."
								/>
							</div>

							<button
								type="submit"
								className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
							>
								<FaPaperPlane className="w-5 h-5 mr-2" />
								Send Message
							</button>

							{status && (
								<div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-center">
									Thank you! Your message has been sent successfully.
								</div>
							)}
						</form>
					</div>

					{/* Contact Information */}
					<div>
						<div className="bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white h-full">
							<h2 className="text-2xl font-bold mb-6">Contact Information</h2>
							<p className="mb-8 opacity-90">
								I’d love to hear from you! Reach out, and I usually respond within a day.
							</p>

							<div className="space-y-6">
								{contactInfo.map((info, index) => (
									<div key={index} className="flex items-start">
										<div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
											{info.icon}
										</div>
										<div>
											<h3 className="font-semibold mb-1">{info.title}</h3>
											{info.link ? (
												<a
													href={info.link}
													className="opacity-90 hover:opacity-100 transition-opacity"
												>
													{info.value}
												</a>
											) : (
												<p className="opacity-90">{info.value}</p>
											)}
										</div>
									</div>
								))}
							</div>

							<div className="mt-12 pt-8 border-t border-white/20">
								<h3 className="font-semibold mb-4">Let&apos;s Connect</h3>
								<p className="opacity-90">
									I’m always happy to hear from you! Questions, ideas, or just a hello—I’ll get back to you as soon as I can.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}