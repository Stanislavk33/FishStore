import {BaseResultModel} from "../../../../../models/base.result.model";
import {UserModel} from "../../../../../models/user.model";

export class RegisterUserResultModel extends BaseResultModel {
   user: UserModel;
}
