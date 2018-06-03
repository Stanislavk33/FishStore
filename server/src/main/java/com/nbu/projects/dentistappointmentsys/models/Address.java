package com.nbu.projects.dentistappointmentsys.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="Address")
public class Address implements Serializable{
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Column(name = "address_id")
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
        private String details;

        public Address() { }

        public Address(Long userId, String country, String city, String street, Integer str_number, Long postalCode, String details) {
                this.userId = userId;
                this.country = country;
                this.city = city;
                this.street = street;
                this.strNo = str_number;
                this.postalCode = postalCode;
                this.details = details;
        }

        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        public Long getUserId() {
                return userId;
        }

        public void setUserId(Long userId) {
                this.userId = userId;
        }

        public String getCountry() {
                return country;
        }

        public void setCountry(String country) {
                this.country = country;
        }

        public String getCity() {
                return city;
        }

        public void setCity(String city) {
                this.city = city;
        }

        public String getStreet() {
                return street;
        }

        public void setStreet(String street) {
                this.street = street;
        }

        public Integer getStr_number() {
                return strNo;
        }

        public void setStr_number(Integer str_number) {
                this.strNo = str_number;
        }

        public Long getPostalCode() {
                return postalCode;
        }

        public void setPostalCode(Long postalCode) {
                this.postalCode = postalCode;
        }

        public String getDetails() {
                return details;
        }

        public void setDetails(String details) {
                this.details = details;
        }
}
