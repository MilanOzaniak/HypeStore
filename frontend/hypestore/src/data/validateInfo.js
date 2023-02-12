export default function validateInfo(userName, email, pNumber, password, password2) {
  let errors = {};

  //userName
    if (!userName) {
      errors.userName = 'Username required'
    } else if (userName < 4){
      errors.userName = 'User name needs to be 4 characters or more'
    }



  //email
    if(!email){
      errors.email = 'Email required'

    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      errors.email = 'wrong format'

    }

  //phone number
    if(!pNumber){
      errors.pNumber = 'Phone number required'

    }
    else if(pNumber.length !== 10){
      errors.pNumber = 'please use correct phone number'

    }
    else if(!/^\d+$/.test(pNumber)){
      errors.pNumber = 'wrong format'

    }

      //password  
      if (!password) {
        errors.password = 'Password required'
  
      } else if (password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more'
  
      }
  
      if(password !== password2){
        errors.password2 = "passwords doesnt match"
  
      }

    return errors;
  }