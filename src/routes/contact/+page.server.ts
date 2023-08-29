import type {Actions} from "@sveltejs/kit";
import {MailService} from "$lib/classes/MailService";
import {fail} from "@sveltejs/kit";


export const actions = {
    default: async ({ request }) => {
        const data: FormData = await request.formData();
        const mailService = new MailService()

        try {
            await mailService.sendEmail(data)
        } catch (error: any) {
            return fail(422, {
                error: error.message
            })
        }
    }
} satisfies Actions