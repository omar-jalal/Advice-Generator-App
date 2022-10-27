import { invalid, redirect } from '@sveltejs/kit'

// const auth = false;

// if (auth) {
//     throw redirect(303, '/')
// }

export const actions = {
    default: async ({request}) => {
        const formData = await request.formData()
        
        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')
        const passwordRep = formData.get('password-rep')

        const nameReg = name.length < 3 ? false : true;
        const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        const unmatchPasswords = password === passwordRep

        if (nameReg && emailReg.test(email) && passwordReg.test(password) && unmatchPasswords) {
            const id = crypto.randomUUID()
            console.log(name, email, password, passwordRep, id)

            throw redirect(303, '/')
            

        }

        return invalid(400, {
            error: true,
            invalidName: !nameReg,
            invalidEmail: !emailReg.test(email),
            invalidPassword: !passwordReg.test(password),
            unmatchPasswords: !unmatchPasswords
        })
    }
}