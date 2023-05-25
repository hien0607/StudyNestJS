import {
  Controller,
  Get,
  Post,
  Req,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { UserService } from 'src/user/service/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService:UserService){}
  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  store(@Req() req: Request) {
    return this.userService.create(req);
  }

  @Patch('/:userId')
  update(@Req() req: Request , @Param() param:{userId : number}) {
    return this.userService.update(req , param);
  }

  @Get('/:userId')
  getUser(@Param() param  : {userId:number}){
    return this.userService.getUser(param);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userService.delete(param);
  }
}
