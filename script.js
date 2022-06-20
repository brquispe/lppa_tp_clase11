import { Form } from './forms.js';
import { dialogs } from './modal.js';

const frmSubscribeRef = document.getElementById('frmSubscribe');
// if (!frmSubscribeRef) {
//   throw new Error('Ref not found!')
// }
const frmSubscribe = new Form(frmSubscribeRef);
frmSubscribe.onSubmit = async () => {
  const data = frmSubscribe.data;
  console.log(data);
  const {
    address,
    age,
    city,
    dni,
    email,
    name,
    password,
    postalcode,
    telephone,
  } = data;
  const url = `https://curso-dev-2021.herokuapp.com/newsletter?name=${name}&age=${age}&dni=${dni}&city=${city}&email=${email}&password=${password}&postalcode=${postalcode}&telephone=${telephone}&address=${address}`
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      return dialogs.show('No se pudo suscribir al newsletter', 'error')
    }
    const message = `
      <p><strong>"name": </strong>${name}</p>
      <p><strong>"email": </strong>${email}</p>
      <p><strong>"dni": </strong>${dni}</p>
      <p><strong>"age": </strong>${age}</p>
      <p><strong>"password": </strong>${password}</p>
      <p><strong>"address": </strong>${address}</p>
      <p><strong>"city": </strong>${city}</p>
      <p><strong>"postalcode": </strong>${postalcode}</p>
      <p><strong>"telephone": </strong>${telephone}</p>
    `
    dialogs.show(message)
  } catch (error) {
    dialogs.show('Hubo un error!', 'error')
  }
  
};
