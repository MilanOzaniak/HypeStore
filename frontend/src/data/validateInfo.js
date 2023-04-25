
export default function validateInfo(userName, email, pNumber, password, password2) {
  const error = {
    userName: '',
    email: '',
    pNumber: '',
    password: '',
    password2: '',
  };

  let valid = true

  //userName
    if (userName < 4){
      error.userName = 'Používateľské meno musi obsahovať viac ako 4 znaky!'
      valid = false;
    }



  //email
    if(!email.includes('@')){
      error.email = 'Zlý format!'
      valid = false

    }

  //phone number
     if(!/^(?:(?:\+|00)421|0)([1-9][0-9]{8})$/.test(pNumber)){
      error.pNumber = 'Zlý format!'
      valid = false;
    }

      //password  
      if (password.length < 6) {
        error.password = 'Heslo musí obsahovať 6 a viac znakov!'
        valid = false;
  
      }
  
      if(password !== password2){
        error.password2 = "Heslá sa nezhodujú!"
        valid = false;
  
      }

    return {valid, error};
  }
