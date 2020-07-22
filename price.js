//Updates the total price of the booking details
function updatePrice(){
    var datalink = document.getElementsByName("links")[0].value;
    var dataconnection = document.getElementsByName("connection")[0].value;
    var datapackage = document.getElementsByName("package")[0].value;
    document.getElementById("cost").innerHTML = +datalink + +dataconnection + +datapackage; //adds them altogether (uses the unary operator to parse them as ints)
}