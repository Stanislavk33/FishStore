package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.controllers.request_models.login.LoginModel;
import com.nbu.projects.dentistappointmentsys.controllers.request_models.register.UserRegisterModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.UserResultModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.login.LoginResultModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.login.RegisterUserModel;
import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.repositories.UserRepository;
import com.nbu.projects.dentistappointmentsys.service.NotificationService;
import com.nbu.projects.dentistappointmentsys.util.GenericConstants;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GenericRestController {

  private static final Logger logger =
      Logger.getLogger(GenericRestController.class.toString());

    @Autowired
    private NotificationService notificationService;

    @Autowired
    UserRepository userRepository;

  @PostMapping("/authenticate")
  public LoginResultModel login(@RequestBody LoginModel loginModel) {

    logger.info("Logging in as: " + loginModel.getEmail());
    User user = userRepository.findByEmail(loginModel.getEmail());
    if (user != null &&
        user.getPassword().equals(loginModel.getPassword())) {
      return new LoginResultModel(GenericConstants.RESULT_SUCCESSFUL,
                                  "",
                                  new UserResultModel(user));
    }
    logger.warning("Wrong email or password when logging in as: " +
                   loginModel.getEmail());
    return new LoginResultModel(GenericConstants.RESULT_FAILED,
                                "Wrong email or password.",
                                null);
  }

  @PostMapping("/registerUser")
  public RegisterUserModel registerUser(@RequestBody UserRegisterModel userModel) {

    logger.info("Registering as: " + userModel.getEmail());
     User emailAlreadyUsed= userRepository.findByEmail(userModel.getEmail());
    if (emailAlreadyUsed != null) {
      logger.warning("Already registered email: " + userModel.getEmail());
      return new RegisterUserModel(GenericConstants.RESULT_FAILED,
                                      "Already used email.",
                                      null);
    }
    User toRegister = new User(userModel);
    User registered = userRepository.save(toRegister);
      try{
          notificationService.sendNotification(toRegister);
      }catch(MailException e){
          logger.info("Error Sending Email: " + e.getMessage());
      }
    if (registered == null) {
      logger.warning("Unable to save Patient.");
      return new RegisterUserModel(GenericConstants.RESULT_FAILED,
                                      "Server problem.",
                                      null);
    }
    logger.info("User registered successfully.");
    return new RegisterUserModel(GenericConstants.RESULT_SUCCESSFUL,
                                    "",
                                    new UserResultModel(registered));
  }
}
