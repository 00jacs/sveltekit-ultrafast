/**
 * Overview: MailGun allows to send, track, and analyze emails.
 * Full docs: https://www.npmjs.com/package/mailgun.js
 */

import Mailgun from 'mailgun.js';
import formData from 'form-data';
import { PUBLIC_MAILGUN_DOMAIN } from '$env/static/public';
import { PRIVATE_MAILGUN_API_KEY } from '$env/static/private';
import logger from './logger';

interface EmailInput {
	from: string;
	to: string[];
	subject: string;
	text: string;
	html?: string;
	message?: string;
}

const mailgun = new Mailgun(formData);
export const mg = mailgun.client({
	username: 'api',
	key: PRIVATE_MAILGUN_API_KEY
});

export async function sendEmail(email: EmailInput) {
	try {
		await mg.messages.create(PUBLIC_MAILGUN_DOMAIN, {
			...email
		});

		logger.success('[mailgun.ts] Email sent successfully to:', email.to);
	} catch (e) {
		logger.warn('[mailgun.ts] Could not send an email: ', e);
	}
}
