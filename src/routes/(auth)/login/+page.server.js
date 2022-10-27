import { redirect } from '@sveltejs/kit'

export const actions = {
    default: async () => {

        throw redirect(303, '/')
    }
}