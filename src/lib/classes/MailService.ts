import nodemailer from "nodemailer";
import {SMTP_MAIL_TO_ADDRESS, SMTP_PASS, SMTP_PORT, SMTP_SERVER, SMTP_USER} from "$env/static/private";
import type {ContactEmail} from "$lib/model/ContactEmail";
import validator from 'validator';
import escape = validator.escape;

export class MailService {
    readonly #FROM_ADDRESS = 'Webmaster dbt <webmaster@davidbattefeld.de>'

    /**
     * @throws Error
     * @param data
     * @protected
     */
    protected validateAndSanitizeInput(data: FormData): ContactEmail {
        const name = data.get('name')?.toString()
        const email = data.get('email')?.toString()
        const reason = data.get('reason')?.toString()
        const message = data.get('message')?.toString()

        if (name === undefined || email === undefined || reason === undefined || message === undefined) {
            throw new Error("Required value cannot be undefined")
        }

        data.forEach((entry) => {
            if (validator.isEmpty(entry.toString())) {
                throw new Error(`Required value ${entry.toString()} cannot be empty`)
            }
        })

        if (!validator.isEmail(email)) {
            throw new Error("The email address provided is not valid")
        }

        return <ContactEmail> {
            fromName: escape(name),
            email: validator.normalizeEmail(escape(email)),
            reason: escape(<string>reason),
            message: escape(message)
        }
    }

    async sendEmail(data: FormData) {
        const contactEmail = this.validateAndSanitizeInput(data)

        const transporter = nodemailer.createTransport({
            host: SMTP_SERVER,
            port: parseInt(SMTP_PORT),
            secure: true,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            }
        })

        await transporter.sendMail({
            from: this.#FROM_ADDRESS,
            to: SMTP_MAIL_TO_ADDRESS,
            subject: "New email via web-dbt",
            text: `From: ${contactEmail.fromName}/${contactEmail.email}, reason: ${contactEmail.reason}. 
            Body text:\n\n ${contactEmail.message}`
        })
    }
}