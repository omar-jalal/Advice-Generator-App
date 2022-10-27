import { error } from '@sveltejs/kit'

export const load = async ({ fetch }) => {
const res = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
const data = await res.json();
    if (data) {
        return {
            props: {
                data,
            }
        }
    }
    
    error(404, 'Could not fetch advice')
    

}