import {Transporter} from 'nodemailer';

interface IMailService {
	transporter: Transporter;
	sendActivationMail(to: string, link: string): void;
}

export default IMailService;
