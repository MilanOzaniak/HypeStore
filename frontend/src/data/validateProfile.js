export  function validatePassword(password, password2){
    let valid = true;
    const error = {
        password: '',
        password2: '',
    }

    if(password < 4){
        error.password = 'Heslo musí obsahovať 6 a viac znakov!'
    }

    if(password !== password2){
        error.password2 = "Heslá sa nezhodujú"
        valid = false;
      }

    return {valid, error};
}

export  function validateEmail(email){
    let valid = true;
    const error = {
        email : '',
    }

    if(!email.includes('@')){
        error.email = 'Zlý format!'
        valid = false
  
    }
    return {valid, error};
}

export  function validatePnumber(pNumber){
    let valid = true;
    const error = {
        pNumber : '',
    }

    if(!/^(?:(?:\+|00)421|0)([1-9][0-9]{8})$/.test(pNumber)){
        error.pNumber = 'Zlý format!'
        valid = false;
    }
    return {valid, error};
}


export  function validateFacebook(facebook){
    let valid = true;
    const error = {
        facebook : '',
    }

    if(!/^(https?:\/\/)?(www\.)?facebook\.com\/(profile\.php\?id=\d+|[A-Za-z0-9_.-]+)\/?$/.test(facebook)){
        error.facebook = 'Zlý format!';
        valid = false;
    }
    return {valid, error};
}

export  function validateInstagram(instagram){
    let valid = true;
    const error = {
        instagram : '',
    }

    if(!/^(https?:\/\/)?(www\.)?(instagram\.com|instagr\.am)\/[a-zA-Z0-9_]+\/?$/.test(instagram)){
        error.instagram = 'Zlý format!';
        valid = false;
    }
    return {valid, error};
}