import {ProductModel} from "./product.model";

export class UserModel {
   id: number = 0;
   email: string = "";
   role: string = "";
   firstName: string = "";
   lastName: string = "";
   favourites: ProductModel[];
}

/* @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "user_id")
  private Long id;

  @Column(unique = true, nullable = false)
  private String email;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private Role role;

  @Column(nullable = false)
  private String password;

  @Column(nullable = false)
  private String firstName;

  @Column(nullable = false)
  private String lastName;

  @ElementCollection(targetClass = Product.class)
  private Set<Product> favourites = new HashSet<>();

  @Column
  private String city;*/
