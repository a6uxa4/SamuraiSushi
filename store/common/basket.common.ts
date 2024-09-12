export interface IBasketCreate {
  userId: string | null;
  body: IProductInner;
}

export interface IProductInner {
  productId: number;
  quantity: number;
  price: number;
}

export interface IBasketGetAll {
  products: IProductInner[];
  totalQuantity: number;
  totalSum: number;
}

export interface IBasketDelete {
  userId: string | null;
  productId: number;
}
