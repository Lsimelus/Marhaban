import { productIds} from "../@types";
import { products } from "../data/data"

export const getCartSize = (cartList: any) => {
    var total = 0
    for (var i in cartList) {
        total += cartList[i];
    }
    return total
}

export const getCartTotal = (cartList: {[key in productIds] : number}) => {
    var total = 0
    for (var key in cartList) {
        var pid = key as productIds
        var prodTotal = cartList[pid] 
        if (prodTotal > 0){
            var prodPrice = products[pid]["price"]
            total += prodPrice * prodTotal
        }
    }
    return total.toFixed(2)
}

