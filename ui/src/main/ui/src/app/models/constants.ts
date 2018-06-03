export class Constants {

  public static readonly RESULT_SUCCESSFUL: string = "SUCCESS";
  public static readonly RESULT_FAILED: string = "FAIL";
  public static readonly RESULT_ERROR: string = "ERROR";

  public static readonly ROLE_ADMIN: string = "ADMIN";
  public static readonly ROLE_USER: string = "USER";

  public static readonly CITY_SOFIA: string = "Sofia";
  public static readonly CITY_VARNA: string = "Varna";
  public static readonly CITY_PLOVDIV: string = "Plovdiv";
  public static readonly CITY_BURGAS: string = "Burgas";

  public static readonly SESSION_USER: string = "currentUser";
  public static readonly PATIENT_BLACKLISTED_SUCCESSFULLY: string =
       "The patient was added to your blacklist successfully.";
  public static readonly PATIENT_UNBLACKLISTED_SUCCESSFULLY: string =
       "The patient was removed from your blacklist successfully.";
}
