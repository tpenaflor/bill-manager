export const currency = (num) => {
    const out = Intl.NumberFormat('en-US',{style:'currency',currency:'PHP'}).format(num) 
    return out
}