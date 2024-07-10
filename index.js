function submitData (name,email){
     const formData = {
        name:name,
        email:email,
     };
     const configurationObject = {
        method: "POST",
        headers:{
            "content-Type":"application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
     };
     return fetch("http://localhost:3000/users",configurationObject) 
    .then(response =>response.json())
    .then(object => {
        const id = object.id;
        const idElement = document.createElement("p");
        idElement.textContent = `Id:${id}`;
        document.body.appendChild(idElement);
    })
    .catch(error =>{
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Error:${error.message}`;
        document.body.appendChild(errorMessage);
    })
}
