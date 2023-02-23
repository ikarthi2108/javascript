function gender(){
    var gender=document.getElementById('gen').value;
   /*  if(gender=="male"){
        document.write("He is male");
     }
     else if(gender=="female"){
        document.write("She is female");
     }
     else {
        document.write("invalid input")
     }*/
    switch(gender){
        case 'male' :
            document.write("He is male");
            break;
        case 'female':
            document.write("She isFemale");
            break;      
        default:
            document.write("invalid choice");
    }
}