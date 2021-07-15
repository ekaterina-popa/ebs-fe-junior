interface IProduct {
  id: number;
  name: string;
  category: Category;
  price: number;
}

interface ICategory {
  id: string;
  name: string;
}

export type ProductsContextType = {
  products: IProduct[];
  fetchProducts: () => void;
  addProduct: (product: IProduct) => void;
  removeProduct: (id: number) => void;
};
