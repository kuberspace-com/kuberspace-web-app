export interface Product {
  catagory: string;
  name: string;
  price: number;
  inventoryOnHand: number;
  description: string;
  images: Array<string>;
  group: string;
  details: {[key: string]: string | number | undefined}
  id?: string;
}
