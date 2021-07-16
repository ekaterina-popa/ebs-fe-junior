interface IProduct {
  id: number;
  name: string;
  category: Category;
  price: number;
}

interface ICartItem {
  id: number;
  name: string;
  category: Category;
  quantity: number;
  price: number;
}

interface ICategory {
  id: string;
  name: string;
}

export type ProductsContextType = {
  products: IProduct[];
  cartItems: ICartItem[];
  fetchProducts: () => void;
  addProduct: (product: IProduct) => void;
  removeProduct: (id: number) => void;
};
