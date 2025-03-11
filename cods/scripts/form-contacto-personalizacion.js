 // Añadir un event listener para el checkbox de "terminos"
 const checkboxTerminos = document.getElementById('terminos');
 checkboxTerminos.addEventListener('change', () => {
     showErrorMessage('terminos');
 });
 
 // Validación y activación de botones
 const form = document.getElementById('contactForm');
 const requiredFields = ['nombre', 'email', 'telefono', 'personalizar', 'ciudad', 'terminos'];
 const whatsappButton = document.getElementById('whatsappButton');
 const emailButton = document.getElementById('emailButton');
 const whatsappEmailButton = document.getElementById('whatsappEmailButton');
 
 // Función para mostrar el mensaje de error si el campo está vacío
 function showErrorMessage(id) {
     const errorElement = document.getElementById(id + 'Error');
     const field = document.getElementById(id);
     if (id === 'terminos') {
         errorElement.style.display = !field.checked ? 'inline' : 'none';
     } else {
         errorElement.style.display = field.value.trim() === '' ? 'inline' : 'none';
     }
 }
 
 // Función para ocultar el mensaje de error al hacer clic en el campo
 function hideErrorMessage(id) {
     const errorElement = document.getElementById(id + 'Error');
     errorElement.style.display = 'none';
 }
 
 // Añadir evento focus a cada campo requerido para ocultar el mensaje de error
 requiredFields.forEach(id => {
     const field = document.getElementById(id);
     field.addEventListener('focus', () => hideErrorMessage(id));
     field.addEventListener('blur', () => showErrorMessage(id));
 });
 
 
 document.getElementById('personalizar').addEventListener('input', function () {
     const personalizarInput = this;
     const personalizarError = document.getElementById('personalizarError');
     
     // Ocultar el mensaje de error si hay un valor seleccionado
     if (personalizarInput.value !== "") {
         personalizarError.style.display = 'none';
     }
 });
 
 
 form.addEventListener('input', () => {
     let allFilled = requiredFields.every(id => {
         if (id === 'terminos') return document.getElementById(id).checked;
         return document.getElementById(id).value.trim() !== '';
     });
     whatsappButton.disabled = !allFilled;
     emailButton.disabled = !allFilled;
     whatsappEmailButton.disabled = !allFilled;
 
     // Agregar o quitar la clase 'enabled' según el estado de los botones
     if (allFilled) {
         whatsappButton.classList.add('enabled');
         emailButton.classList.add('enabled');
         whatsappEmailButton.classList.add('enabled');
     } else {
         whatsappButton.classList.remove('enabled');
         emailButton.classList.remove('enabled');
         whatsappEmailButton.classList.remove('enabled');
     }
 });
 
 whatsappButton.addEventListener('click', () => {
     console.log('Enviando mensaje a WhatsApp...'); // Mensaje de depuración
     enviarPorWhatsApp();
 });
 
 emailButton.addEventListener('click', () => {
     enviarPorEmail();
 });
 
 whatsappEmailButton.addEventListener('click', () => {
     enviarPorWhatsApp();
     enviarPorEmailAjax(); // Usar AJAX para el envío del correo
 });
 
 // Envio de mensaje por whatsapp
 function enviarPorWhatsApp() {
     const nombre = document.getElementById('nombre').value;
     const email = document.getElementById('email').value;
     const telefono = document.getElementById('telefono').value;
     const personalizar = document.getElementById('personalizar').value;
     const ciudad = document.getElementById('ciudad').value;
     const comentario = document.getElementById('comentario').value;
 
     // Mensaje actualizado
     const mensaje = `Personalización DisplayRollup.\n` +
                     `Nombre: ${nombre}\nEmail: ${email}\nTelefono: ${telefono}\nPersonalizar: ${personalizar}\nCiudad: ${ciudad}\nMensaje: ${comentario}\n` +
                     `Este mensaje lo creó el cliente a través de https://displayrollup.com. y aceptó los términos y condiciones.`;
 
     const whatsappURL = `whatsapp://send?phone=34644774495&text=${encodeURIComponent(mensaje)}`;
     window.open(whatsappURL, '_blank'); // Intenta abrir la aplicación
 }
 
 function enviarPorEmailAjax() {
     const formData = new FormData(form);
 
     fetch('enviar-formulario-de-personalizacion.php', {
         method: 'POST',
         body: formData
     })
     .then(response => response.text())
     .then(result => {
         alert('El correo se ha enviado correctamente.');
         window.location.href = 'https://displayrollup.com/tipos-terminados-rollups';
     })
     .catch(error => {
         //alert('Hubo un problema al enviar el correo. Inténtalo de nuevo más tarde.');
     });
 }
 
 // función de enviar por email solamente
 function enviarPorEmail() {
     const formData = new FormData(form);
 
     fetch('enviar-formulario-de-personalizacion.php', {
         method: 'POST',
         body: formData
     })
     .then(response => response.text())
     .then(result => {
         alert('El correo se ha enviado correctamente.');
         window.location.href = 'https://displayrollup.com/tipos-terminados-rollups';
     })
     .catch(error => {
         //alert('Hubo un problema al enviar el correo. Inténtalo de nuevo más tarde.');
     });
 }
 
 // valida que el email sea valido
 document.getElementById('email').addEventListener('input', function () {
 const emailInput = this;
 const emailError = document.getElementById('emailError');
 
 // Expresión regular para validar el formato de un correo electrónico
 const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
 if (emailInput.value.length > 0 && !emailPattern.test(emailInput.value)) {
 emailError.textContent = 'Por favor, introduce un correo electrónico válido';
 emailError.style.display = 'inline';
 } else {
 emailError.textContent = '';
 emailError.style.display = 'none';
 }
 });
 
 // Validación en el evento "blur" (cuando el usuario sale del campo)
 document.getElementById('email').addEventListener('blur', function () {
 const emailInput = this;
 const emailError = document.getElementById('emailError');
 const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
 if (emailInput.value.length > 0 && !emailPattern.test(emailInput.value)) {
 emailError.textContent = 'Por favor, correo electrónico válido';
 emailError.style.display = 'inline';
 emailInput.value = ''; // Borra el contenido solo al salir del campo si es inválido
 }
 });
 
 // Valida el nombre con mínimo dos palabras de 3 letras y bloquea caracteres peligrosos
 document.getElementById('nombre').addEventListener('input', function () {
 const nombreInput = this;
 const nombreError = document.getElementById('nombreError');
 
 // Definir los caracteres prohibidos
 const prohibitedChars = /[<>\"'\\\/;#$@,:.\`]/g; // La 'g' permite buscar todas las coincidencias
 
 // Remover los caracteres prohibidos
 const cleanedValue = nombreInput.value.replace(prohibitedChars, '');
 
 if (cleanedValue !== nombreInput.value) {
 nombreInput.value = cleanedValue; // Actualizar el valor del input solo si ha cambiado
 }
 
 // Validar que el campo tenga al menos dos palabras de mínimo 3 letras cada una
 const nombrePattern = /\b[a-zA-Z]{3,}\b.*\b[a-zA-Z]{3,}\b/;
 
 if (!nombrePattern.test(nombreInput.value.trim())) {
 nombreError.textContent = 'Debe contener dos palabras de mínimo 3 letras cada una';
 nombreError.style.display = 'inline';
 } else {
 nombreError.textContent = '';
 nombreError.style.display = 'none';
 }
 });
 
 // Valida la ciudad y bloquea caracteres peligrosos del campo ciudad
 document.getElementById('ciudad').addEventListener('input', function () {
 const ciudadInput = this;
 const ciudadError = document.getElementById('ciudadError');
 
 // Definir los caracteres prohibidos
 const prohibitedChars = /[<>\"'\\\/;#$@,:.\`]/g; // La 'g' permite buscar todas las coincidencias
 
 // Remover los caracteres prohibidos
 const cleanedValue = ciudadInput.value.replace(prohibitedChars, '');
 
 if (cleanedValue !== ciudadInput.value) {
 ciudadInput.value = cleanedValue; // Actualizar el valor del input solo si ha cambiado
 }
 
 // Validar que el campo no esté vacío
 if (ciudadInput.value.trim() === '') {
 ciudadError.textContent = 'La ciudad es requerida';
 ciudadError.style.display = 'inline';
 } else {
 ciudadError.textContent = '';
 ciudadError.style.display = 'none';
 }
 });
 
 // Valida el comentario y bloquea caracteres peligrosos
 document.getElementById('comentario').addEventListener('input', function () {
 const comentarioInput = this;
 const comentarioError = document.getElementById('comentarioError');
 
 // Definir los caracteres prohibidos
 const prohibitedChars = /[<>\"'\\\/;#$@:\`]/g; // La 'g' permite buscar todas las coincidencias
 
 // Remover los caracteres prohibidos
 const cleanedValue = comentarioInput.value.replace(prohibitedChars, '');
 
 if (cleanedValue !== comentarioInput.value) {
 comentarioInput.value = cleanedValue; // Actualizar el valor del input solo si ha cambiado
 }
 
 // Validar que el campo no esté vacío
 if (comentarioInput.value.trim() === '') {
 comentarioError.textContent = 'El mensaje es requerido';
 comentarioError.style.display = 'inline';
 } else {
 comentarioError.textContent = '';
 comentarioError.style.display = 'none';
 }
 });
 