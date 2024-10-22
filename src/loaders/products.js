import products from "../database.json"
export function loadProduct({params}){
    const product = products.find(p => p.id === +params.productId)
    
    if(!product){
        throw new Response("",{status:404})
    }//exemplo de erro , da pra testar com outros também

    return product
}