export interface Product {
    _id: string;
    productName: string;
    _type: "product";
    image?:any
    // : {
    //     asset : {
    //         _ref : string
    //         _type : "image"
    //     }
    // };
    price: number;
    description?: string;
    quantity:number
}