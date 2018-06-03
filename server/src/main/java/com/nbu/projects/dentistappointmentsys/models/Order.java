package com.nbu.projects.dentistappointmentsys.models;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name= "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "order_id")
    private Long orderId;

    @Column(nullable = false)
    private Long userId;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
    @JoinColumn(name = "product_id", nullable = false, insertable = false, updatable = false)
    private List<Product> products;

    //@Access(AccessType.PROPERTY)
    //@Type(type = "serializable")
    @OneToOne(cascade = CascadeType.ALL)
    private Address address;

    @Column(nullable = false)
    private Long price;

    @Column
    private String comment;

    public Order() { }

    public Order(Long userId, List<Product> products, Address address, Long price, String comment) {
        this.userId = userId;
        this.products = products;
        this.address = address;
        this.price = price;
        this.comment = comment;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}