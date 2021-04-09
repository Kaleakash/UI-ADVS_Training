export class LoginService {
    checkUser(user:string,pass:string):string{
        if(user=="Raj" && pass=="123"){
            return "success";
        }else {
            return "failure";
        }
    }
}