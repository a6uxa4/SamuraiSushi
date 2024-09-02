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
  nutritionalValue: number;
  nutritionalContent: {
    value: string;
    label: string;
    code: string;
  }[];
}
