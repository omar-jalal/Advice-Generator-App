import { redirect } from '@sveltejs/kit'

// const auth = false;

// if (auth) {
//     throw redirect(303, '/')
// }

export const actions = {
    default: async () => {

        throw redirect(303, '/')
    }
}