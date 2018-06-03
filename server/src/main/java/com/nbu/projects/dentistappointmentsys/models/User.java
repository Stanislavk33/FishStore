package com.nbu.projects.dentistappointmentsys.models;

import com.nbu.projects.dentistappointmentsys.controllers.request_models.register.UserRegisterModel;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

  @Id
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

/*
  @OneToMany(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id", nullable = true)
  private Set<Appointment> appointments;
*/

  public User() {

  }

  public User(String email, Role role, String password, String firstName, String lastName, Set<Product> favourites) {
    this.email = email;
    this.role = role;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.favourites = favourites;
  }

  public User(UserRegisterModel userRegisterModel) {
      this.email = userRegisterModel.getEmail();
      this.role = userRegisterModel.getRole();
      this.password = userRegisterModel.getPassword();
      this.firstName = userRegisterModel.getFirstName();
      this.lastName = userRegisterModel.getLastName();
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public Set<Product> getFavourites() {
    return favourites;
  }

  public void setFavourites(Set<Product> favourites) {
    this.favourites = favourites;
  }

}
