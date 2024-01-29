function polygons{
    
}
function getShape(sides){
    switch(sides){
        case 1:
            sides = "heis";
        case 2:
            sides = "duo";
        case 3:
            sides = "treis"
        case 4:
            sides = "tetra"
        case 5:
            sides = "pent";
        case 6:
            sides = "hex";
        case 7:
            sides = "hepta"
        case 8:
            sides = "oktu"
        case 9:
            sides = "ennea"
        default:
            break;
    }
}

function validateEntry(number){
    let number = prompt("The Mastergul Eagle would like to know your number")
    number = Math.abs(number)
    if(Number.isInteger(number)){
    } else{
        alert("Wrong Data Entry Type: Please eneter a number from")
    }
}
