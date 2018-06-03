package com.nbu.projects.dentistappointmentsys.controllers.request_models.register;

import com.nbu.projects.dentistappointmentsys.models.types.Role;

public class UserRegisterModel {
  private Long Id;
  private String email;
  private String password;
  private String firstName;
  private String lastName;
  private Role role;


  public UserRegisterModel() {
  }

  public UserRegisterModel(Long Id,
                           String email,
                           String password,
                           String firstName,
                           String lastName,
                           Role role) {
    this.Id=Id;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
  }


  public Long getId(){return Id;}
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
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

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }
}
