package com.nbu.projects.dentistappointmentsys.models;

import com.nbu.projects.dentistappointmentsys.models.types.ProductCategory;
import org.hibernate.annotations.Type;

import javax.persistence.*;


@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "product_id")
    private Long productId;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProductCategory category;

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

    public Product() { };

    public Product(String name, String info, byte[] image, Double price, Double discount) {
        this.name = name;
        this.info = info;
        this.image = image;
        this.price = price;
        this.discount = discount;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
    }
}
