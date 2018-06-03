package com.nbu.projects.dentistappointmentsys.repositories;

import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

  User findById(Long id);

  User findByEmail(String email);

  List<User> findAllByRole(Role role);

  @Transactional
  @Modifying
  @Query("update User u set u.password = :password where u.email = :email")
  void updatePassword(@Param("password") String password, @Param("email") String email);


  @Transactional
  @Modifying
  @Query("update User u set u.email=:email,u.firstName=:firstName,u.lastName=:lastName where u.id=:Id")
  void updateUserInfo(@Param("email") String email,
                      @Param("firstName") String firstName,
                      @Param("lastName")String lastName,
                      @Param("Id") Long Id);
/*  // CITY
  List<User> findUsersByRoleAndAndCity(Role role, String city);
  // NAME
  @Query(value = "select u from User u\n" +
          "where u.role = :role\n" +
          "and (u.firstName like :name or u.lastName like :name)")
  List<User>  findByName(@Param("role") Role role, @Param("name") String name);
  // TYPE
  List<User> findUsersByDentistType(DentistType type);

  //Combination searches
  //Filter by: NAME + TYPE + CITY
  @Query(value = "select u from User u\n" +
          "where u.city = :city and u.dentistType = :type\n" +
          "and (u.firstName like :name or u.lastName like :name)")
  List<User> findByCityTypeAndName(@Param("city") String city, @Param("type") DentistType type, @Param("name") String name);
  //Filter by: NAME + TYPE
  @Query(value = "select u from User u\n" +
          "where u.dentistType = :type\n" +
          "and (u.firstName like :name or u.lastName like :name)")
  List<User> findByNameAndType(@Param("name") String name, @Param("type") DentistType type);
  //Filter by: NAME + CITY
  @Query(value = "select u from User u\n" +
          "where u.city = :city and u.role = :role\n" +
          "and (u.firstName like :name or u.lastName like :name)")
  List<User> findByNameAndCity(@Param("name") String name,@Param("city") String city, @Param("role") Role role);
  //Filter by: TYPE + CITY
  List<User> findUsersByCityAndDentistType(String city, DentistType type);

  @Transactional
  @Modifying
  @Query("update User u set u.email=:email,u.firstName=:firstName,u.lastName=:lastName,u.dentistType=:dentistType,u.city=:city,u.generalInformation=:generalInformation where u.id=:Id")
  void updateDentistInfo(@Param("email") String email,
                      @Param("firstName") String firstName,
                      @Param("lastName")String lastName,
                      @Param("dentistType")DentistType dentistType,
                      @Param("city") String city,
                         @Param("generalInformation")String generalInformation,
                         @Param("Id") Long Id);


*//*  @Query("update User u set u.blacklist = u.blacklist + 1 where u.id = :id")
  void addToBlacklist(@Param("id") Long id);*/

  }



