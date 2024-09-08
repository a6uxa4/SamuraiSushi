export interface IProduct {
  tabId: number;
  title: string;
  content: IProductContent[];
}

export interface IProductContent {
  productId: number;
  name: string;
  gram: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}
