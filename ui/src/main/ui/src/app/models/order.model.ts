import {ProductModel} from "./product.model";
import {AddressModel} from "./address.model";

export class OrderModel {
  id: number = 0;
  userId: String;
  products: ProductModel[];
  address: AddressModel;
  price : number = 0;
  comment: String = "";

  constructor() {}
}

/*
*     @Column(name = "order_id")
    private Long orderId;

    @Column(nullable = false)
    private Long userId;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
    @JoinColumn(name = "product_id", nullable = false)
    private List<Product> products;

    @Column(nullable = false)
    private Address address;

    @Column(nullable = false)
    private Long price;

    @Column
    private String comment;*/
