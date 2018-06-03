package com.nbu.projects.dentistappointmentsys.controllers.result_models.common;


import com.nbu.projects.dentistappointmentsys.models.Product;
import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import java.util.Set;

public class UserResultModel {

  //String email, Role role, String password, String firstName, String lastName, Set<Product> favourites

  private Long id;
  private String email;
  private Role role;
  private String firstName;
  private String lastName;
  private Set<Product> favourites;

  public UserResultModel(Long id,
                         String email,
                         Role role,
                         String firstName,
                         String lastName,
                         Set<Product> favourites) {
    this.id = id;
    this.email = email;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
    this.favourites = favourites;
  }

  public UserResultModel(User user) {
    this(user.getId(),
         user.getEmail(),
         user.getRole(),
         user.getFirstName(),
         user.getLastName(),
         user.getFavourites()
    );
  }

  public Long getId() { return id; }

  public void setId(Long id) { this.id = id; }

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
