//Validación de un formulario
  function validation(){
      
      let nombre = document.getElementById("exampleFirstName").value;
      let apellido = document.getElementById("exampleLastName").value;
      let email = document.getElementById("exampleInputEmail").value;
      let cumpleaños = document.getElementById("exampleBirthday").value;        
      let edad = document.getElementById("exampleAge").value;
      let DNI = document.getElementById("exampleDNI").value;
      let contraseña = document.getElementById("exampleInputPassword").value;
      let contraseña2 = document.getElementById("exampleRepeatPassword").value;
      let error = document.getElementById("error_message");
      let text;

      if(nombre.length < 2){
        text = "Por favor, ingrese un nombre válido";
        error.innerHTML = text;
        return false;
      }
      if(apellido.length < 2){
        text = "Por favor, ingrese un apellido válido";
        error.innerHTML = text;
        return false;
      }
      if(email.indexOf("@") == -1 || email.length < 6){
        text = "Por favor, ingrese un correo electrónico válido";
        error.innerHTML = text;
        return false;
      } 
      if(DNI.length != 9){
        text = "Por favor, ingrese un DNI válido";
        error.innerHTML = text;
        return false;
      }
      if(contraseña < 9){
        text = "Por favor, ingrese una contraseña válida";
        error.innerHTML = text;
        return false;
      }
      if(contraseña2 != contraseña){
        text = "La contraseña introducida no coincide";
        error.innerHTML = text;
        return false;
      }
      alert("Su información se ha enviado, muchas gracias!")
      window.open('index.html');
      return true;
      
      
  }


  function validationPassword(){
      
    let contraseña = document.getElementById("newPassword").value;
    let contraseña2 = document.getElementById("newRepeatPassword").value;
    let error = document.getElementById("error_message");
    let text;

    if(contraseña < 9){
      text = "Por favor, ingrese una contraseña válida";
      error.innerHTML = text;
      return false;
    }
    if(contraseña2 != contraseña){
      text = "La contraseña introducida no coincide";
      error.innerHTML = text;
      return false;
    }
    alert("La contraseña se ha actualizado, muchas gracias!");
    window.open('index.html');
    return true;
    
}

function validationUnete(){
      
  let nombre = document.getElementById("exampleFirstName").value;
  let apellido = document.getElementById("exampleLastName").value;
  let email = document.getElementById("exampleInputEmail").value;
  let DNI = document.getElementById("exampleDNI").value;
  let contacto = document.getElementById("exampleContacto").value;
  let error = document.getElementById("error_message");
  let text;

  if(nombre.length < 2){
    text = "Por favor, ingrese un nombre válido";
    error.innerHTML = text;
    return false;
  }
  if(apellido.length < 2){
    text = "Por favor, ingrese un apellido válido";
    error.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Por favor, ingrese un correo electrónico válido";
    error.innerHTML = text;
    return false;
  } 
  if(DNI.length != 9){
    text = "Por favor, ingrese un DNI válido";
    error.innerHTML = text;
    return false;
  }
  if(contacto.length != 9){
    text = "Por favor, ingrese un número de teléfono válido";
    error.innerHTML = text;
    return false;
  }
  alert("Su comentario se ha tendrá en cuenta, muchas gracias!")
  window.open('index.html');
  return true;
  
  
}


function validationPassword(){
  
let contraseña = document.getElementById("newPassword").value;
let contraseña2 = document.getElementById("newRepeatPassword").value;
let error = document.getElementById("error_message");
let text;

if(contraseña < 9){
  text = "Por favor, ingrese una contraseña válida";
  error.innerHTML = text;
  return false;
}
if(contraseña2 != contraseña){
  text = "La contraseña introducida no coincide";
  error.innerHTML = text;
  return false;
}
alert("La contraseña se ha actualizado, muchas gracias!");
window.open('index.html');
return true;

}

function validationLogin(){
      
  let email = document.getElementById("loginInEmail").value;
  let contraseña = document.getElementById("loginPassword").value;
  let error = document.getElementById("error_message");
  let text;
  console.log("Estoy dentro");

  //En en una versión nueva se comprobará que coincida a su vez con la info guardaba en la base de datos
  
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Por favor, ingrese un correo electrónico válido";
    error.innerHTML = text;
    return false;
  } 
  if(contraseña < 9){
    text = "Por favor, ingrese una contraseña válida";
    error.innerHTML = text;
    return false;
  }
  alert("La contraseña se ha actualizado, muchas gracias!");
  window.open('index.html');
  return true;
}




        
        

    