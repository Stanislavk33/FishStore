export class ProductModel {
  id: number = 0;
  name: string = '';
  info: string = '';
  image: any;
  price: number = 0;
  discount: number = 0;

  constructor() {
  }
}

/*    @Column(name = "product_id")
    private Long productId;

    @Column(nullable = false)
    private String name;

    @Column(length = 10000)
    @Type(type="text")
    private String info;

    @Lob
    @Column(name="product_image", nullable=false, columnDefinition="mediumblob")
    private byte[] image;

    @Column(nullable = false)
    private Double price;

    @Column()
    private Double discount;

    public getImage(hero: Hero): Observable<Blob> {
  return this.httpClient
    .get(`${this.URL}/image/${hero._id}`, {
      responseType: "blob"
    });
}




*/
