import nodemailer, {Transporter} from 'nodemailer';
import IMailService from '@/types/IMailService';

class MailService implements IMailService {
	transporter: Transporter;

	constructor() {
		this.transporter = nodemailer.createTransport({
			service: 'gmail',
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD
			}
		});
	}

	async sendActivationMail(to: string, link: string) {
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to,
			subject: 'Активация аккаунта на ' + process.env.API_URL,
			text: '',
			html: `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
		});
	}
}

export default new MailService();
