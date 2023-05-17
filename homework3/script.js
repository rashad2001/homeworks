


let myName, surname, newUser



function createNewUser(){

    setFirstName();
    setLastName();
     
     newUser = {firstname: myName, 
        lastName: surname, 
        getLogin: function(){
            lowName = this.firstname.toLowerCase().charAt(0)
            lowSurname = this.lastName.toLowerCase();
            alert(lowName + lowSurname)
        }
     }
}

function setFirstName(){
    myName = prompt("Enter your first name:");
}
function setLastName(){
    surname  = prompt("Enter your last name:");
}
createNewUser()
newUser.getLogin()

