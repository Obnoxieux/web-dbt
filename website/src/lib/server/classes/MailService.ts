import nodemailer from "nodemailer";
import {env} from "$env/dynamic/private";
import type {ContactEmail} from "$lib/model/ContactEmail";
import validator from 'validator';
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export class MailService {
    private readonly FROM_ADDRESS = 'Webmaster dbt <webmaster@davidbattefeld.de>'

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
            fromName: validator.escape(name),
            email: validator.normalizeEmail(validator.escape(email)),
            reason: validator.escape(<string>reason),
            message: validator.escape(message)
        }
    }

    async sendEmail(data: FormData) {
        const contactEmail = this.validateAndSanitizeInput(data)

        const options: SMTPTransport.Options = {
            host: env.SMTP_SERVER,
            port: parseInt(env.SMTP_PORT),
        }

        // local testing (sendmail/Mailpit) does not use auth
        if (env.SMTP_USER && env.SMTP_PASS) {
            options.secure = true
            options.auth = {
                user: env.SMTP_USER,
                pass: env.SMTP_PASS,
            }
        }
        const transporter = nodemailer.createTransport(options)

        await transporter.sendMail({
            from: this.FROM_ADDRESS,
            replyTo: contactEmail.email,
            to: env.SMTP_MAIL_TO_ADDRESS,
            subject: "New email via web-dbt",
            text: `From: ${contactEmail.fromName}/${contactEmail.email}, reason: ${contactEmail.reason}. 
            Body text:\n\n ${contactEmail.message}`
        })
    }
}