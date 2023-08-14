import nodemailer from 'nodemailer'
import {SMTP_MAIL_TO_ADDRESS, SMTP_PASS, SMTP_PORT, SMTP_SERVER, SMTP_USER} from "$env/static/private"
import type {Actions} from "@sveltejs/kit";


export const actions = {
    default: async ({ request }) => {
        const data: FormData = await request.formData();

        const transporter = nodemailer.createTransport({
            host: SMTP_SERVER,
            port: parseInt(SMTP_PORT),
            secure: true,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            }
        })
        // TODO: sanitize/verify
        const mail = await transporter.sendMail({
            from: 'Webmaster dbt <webmaster@davidbattefeld.de>',
            to: SMTP_MAIL_TO_ADDRESS,
            subject: "New email via web-dbt",
            text: `From: ${data.get('name')}/${data.get('email')}, reason: ${data.get('reason')}. 
            Bodytext is ${data.get('message')}`
        })
    }
} satisfies Actions