import { Product } from 'src/app/shared/interface/product.interface';

interface IProductState extends Product {
  isInCart?: boolean;
}

export class ProductState implements IProductState {
  productName: string;
  unitPrice: number;
  picture: string; //it is URL path
  id: number;
  isInCart?: boolean;
  constructor(product: Product, isInCart: boolean) {
    this.productName = product.productName;
    this.unitPrice = product.unitPrice;
    this.picture = product.picture;
    this.id = product.id;
    this.isInCart = isInCart;
  }
}
