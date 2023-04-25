export default function validateCreate(title, price, category, size, description, location, gender) {
  const error = {
    title: '',
    price: '',
    category: '',
    size: '',
    description: '',
    location: '',
    gender: ''
  };

  let valid = true

  if (!title) {
      error.title =  'Prosím zadajte názov!';
      valid = false;
    }

    if (!price) {
      error.price =  'Prosím zadajte cenu!';
      valid = false;
    }

    if (!category) {
      error.category =  'Prosím zadajte kategóriu!!';
      valid = false;
    }

    if (!size) {
      error.size =  'Prosím zadajte veľkosť!';
      valid = false;
    }

    if (!description) {
      error.description =  'Prosím zadajte popisok!';
      valid = false;
    }

    if(!location){
      error.location = 'Prosím zadajte lokáciu!';
      valid = false;
    }

    if(!gender){
      error.gender = 'Prosím zadajte pohlavie!';
      valid = false;
    }

  return {valid, error};
}