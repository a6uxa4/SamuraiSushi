export interface IProduct {
  tabId: number;
  title: string;
  content: {
    productId: number;
    name: string;
    gram: string;
    image: string;
    describtion: string;
    price: number;
    nutritionalValue: number;
    nutritionalContent: {
      value: string;
      label: string;
      code: string;
    }[];
  }[];
}
