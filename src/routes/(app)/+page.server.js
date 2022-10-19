import { error } from '@sveltejs/kit'
import 'dotenv/config'

export const load = async ({ fetch }) => {
const res = await fetch(String(process.env.URL), { cache: "no-cache" })
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