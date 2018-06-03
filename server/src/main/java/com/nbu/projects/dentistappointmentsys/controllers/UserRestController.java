package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.controllers.models.ChangePassModel;
import com.nbu.projects.dentistappointmentsys.controllers.models.EditUserProfileModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.EditUserResultModel;
import com.nbu.projects.dentistappointmentsys.models.Product;
import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.repositories.ProductRepository;
import com.nbu.projects.dentistappointmentsys.repositories.UserRepository;
import com.nbu.projects.dentistappointmentsys.util.GenericConstants;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController
public class UserRestController {

  private static final Logger logger = Logger.getLogger(UserRestController.class.toString());

  @Autowired
  UserRepository userRepository;
  @Autowired
  ProductRepository productRepository;


  @GetMapping("/getAllProducts")
  public List<Product> getAllProducts() {
    return productRepository.findAll();
  }

  @GetMapping("/dentists")
  /*public List<User> search(@RequestParam(value = "name", required = false) String name,
                              @RequestParam(value = "city", required = false) String city,
                              @RequestParam(value = "type", required = false) String type) {

    List<User> result;
    if (name != null && !name.isEmpty()) {
      if (city != null && !city.isEmpty()) {
        if (type != null && !type.isEmpty()) {
          //NAME + CITY + TYPE
          result = userRepository.findByCityTypeAndName(city, DentistType.valueOf(type), name+"%");
          return result;
        } else {
          //NAME + CITY
          result = userRepository.findByNameAndCity(name+"%", city, Role.DENTIST);
          return result;
        }
      } else if (type != null && !type.isEmpty()) {
        //NAME + TYPE
        result = userRepository.findByNameAndType(name+"%", DentistType.valueOf(type));
        return result;
      } else {
        //NAME
        result = userRepository.findByName(Role.DENTIST,name+"%");
        return result;
      }
    } else {
      if (city != null && !city.isEmpty()) {
        if (type != null && !type.isEmpty()) {
          //CITY + TYPE
          result = userRepository.findUsersByCityAndDentistType(city, DentistType.valueOf(type));
          return result;
        } else {
          //CITY
          result = userRepository.findUsersByRoleAndAndCity(Role.DENTIST,city);
          return result;
        }
      } else {
        //type
        if (type != null && !type.isEmpty()){
          result = userRepository.findUsersByDentistType(DentistType.valueOf(type));
          return result;
        } else {
          result = userRepository.findAllByRole(Role.DENTIST);
          return result;
        }
      }
    }
  }*/

  @PostMapping("/changePassword")
  public Boolean changePass(@RequestBody ChangePassModel passModel) {
    User user = userRepository.findByEmail(passModel.getUserEmail());
    if(user.getPassword().equals(passModel.getOldPass())){
      userRepository.updatePassword(passModel.getNewPass(), passModel.getUserEmail());
      return true;
    }else{
      //passwords don't match
      return false;
    }
  }

/*  @PostMapping("/editDentistProfile")
  public Boolean ChangeDentistProfile(@RequestBody EditDentistProfileModel EditDentistModel){

    if (!EditDentistModel.getCurrentUserEmail().equals(EditDentistModel.getEmail())) {
      User userWithProvidedEmail = userRepository.findByEmail(EditDentistModel.getEmail());

      if (userWithProvidedEmail != null) {
        return false;
      }
    }
    userRepository.updateDentistInfo(EditDentistModel.getEmail(),
            EditDentistModel.getFirstName(),
            EditDentistModel.getLastName(),
            EditDentistModel.getDentistType(),
            EditDentistModel.getCity(),
            EditDentistModel.getGeneralInformation(),
            EditDentistModel.getId());
        return true;
  }*/

  @PostMapping("/editUserProfile")
  public EditUserResultModel editUserProfile (@RequestBody EditUserProfileModel EditProfileModel){
    try{userRepository.updateUserInfo(EditProfileModel.getEmail(),
            EditProfileModel.getFirstName(),
            EditProfileModel.getLastName(),
            EditProfileModel.getId());
      return new EditUserResultModel(GenericConstants.RESULT_SUCCESSFUL,
              "",
              null);
        }
    catch(org.springframework.dao.DataIntegrityViolationException sqlException)
      {
      logger.warning("This email is already in use " );
      return new EditUserResultModel(GenericConstants.RESULT_FAILED,
              "This email is already in use ",
              EditProfileModel);

      }

    }
}