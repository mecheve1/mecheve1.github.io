function getShape(sides){
    switch(sides){
        case 1:
            sides = "hena";
        case 2:
            sides = "di";
        case 3:
            sides = "tri"
        case 4:
            sides = "tetra"
        case 5:
            sides = "penta";
        case 6:
            sides = "hexa";
        case 7:
            sides = "hepta";
        case 8:
            sides = "octa";
        case 9:
            sides = "ennea";
        case 10:
            sides = "deca";
        case 11: 
            sides = "hendeca";
        default:
            break;
    }
    return sides + "gon";
}

function validateEntry(number){
    let number = prompt("The Mastergul Eagle would like to know your number")
    number = Math.abs(number)
    if(Number.isInteger(number)){
    } else{
        alert("Wrong Data Entry Type: Please eneter a number from")
    }
}
