export type productIds = "1"| "2"|"3";
export type product = {[key in productIds]: {id: productIds;title: string; price: number; img: any; items: any; desc: string; }}
