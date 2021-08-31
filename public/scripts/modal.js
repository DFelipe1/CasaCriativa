const modal = document.querySelector('.modal')

function modalToggle(){
modal.classList.toggle('show')
}


// Erro

// function checkFields(event) {
  
  
//     const valuesToCheck = [
//       "title",
//       "image",
//       "category",
//       "description",
//       "link",
//     ]

    

//     const isEmpty = valuesToCheck.find((value) => {
//       const checkIfIsString = typeof event.target[value].value === 'string';
//       const checkIfIsEmpty = !event.target[value].value.trim()


      
//       if(checkIfIsString && checkIfIsEmpty) {
//         return true;
//       }

      
//       if(isEmpty){
//         event.preventDefault();
//         alert("Por favor, preencha todos os campos")
//       }
//     })
// }