import { writable } from "svelte/store";

export const Advices = writable([
]);



for(let i = 1; i < 11; ++i) {
    const getAdvices = async () => {
        const res = await fetch(`https://api.adviceslip.com/advice/${i}`, {cache: 'no-cache'})
        const data = await res.json()
        const advice = data.slip.advice
        Advices.update((advices) => {
            return [advice, ...advices]
        })
    }
    getAdvices()
}