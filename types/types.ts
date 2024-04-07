export interface ProductProps {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  
  export interface EditProductCommand {
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }
  
  export interface ProductId {
    id: number;
  }
  
  export interface InitialProductState {
    products: ProductProps[];
    loading: boolean;
    error: string;
  }
  

  export default interface ParamsProps {
    params: { slug: string };
    searchParams: { id: number };
  }