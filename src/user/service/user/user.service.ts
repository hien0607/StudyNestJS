import { Injectable } from '@nestjs/common';
import { Request } from '@nestjs/common';
@Injectable()
export class UserService {
  get() {
    return { name: 'MinhHien', email: 'tranminhhien06072001@gmail.com' };
  }
  create(req:Request){
    return req.body;
  }
  update(req:Request , param:{userId :number}){
    return {body:req , param};
  }
  getUser(param : {userId :number}){
    return param;
  }
  delete(param:{userId:number}){
    return param;
  }

}
