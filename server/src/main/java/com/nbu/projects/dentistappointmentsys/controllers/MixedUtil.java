package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import java.util.HashSet;
import java.util.Set;
import java.util.logging.Logger;

public class MixedUtil {

   private static final Logger logger = Logger.getLogger(MixedUtil.class.toString());

   public static User checkUserExistenceAndType(User user, String email, Role role) {
      if (user == null) {
         logger.warning("Not existing user with email : " + email);
         return null;
      }
      if (user.getRole() != role) {
         logger.warning("User: " + email + " is not a " + role + ".");
         return null;
      }
      return user;
   }
}
