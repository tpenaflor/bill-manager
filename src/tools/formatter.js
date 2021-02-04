export const currency = (num) => {
    const out = Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(num) 
    return out
}