export class AddressModel{
  id: number = 0;
  userId: number = 0;
  country: string = "";
  city: string = "";
  street: string = "";
  strNo: number = 0;
  postalCode: string = "";
  details: string = "";

  constructor() {  }
}
/*
*         @Column(name = "address_id")
        private Long id;

        @Column(nullable = false)
        private Long userId;

        @Column(nullable = false)
        private String country;

        @Column(nullable = false)
        private String city;

        @Column(nullable = false)
        private String street;

        @Column(nullable = false)
        private Integer strNo;

        @Column(name = "postal_code", nullable = false)
        private Long postalCode;

        @Column
        private String details;*/
