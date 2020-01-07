function generateRandomNumber(min,max) {

    return Math.floor(Math.random() * (max - min +1) + min);

}

function getCharacter() {
    const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                        "n","o","p","q","r","s","t","u","v","w","x","y","z",
                        "A","B","C","D","E","F","G","H","I","J","K","L","M",
                        "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                        "1","2","3","4","5","6","7","8","9","0","!","#","&"];
    
    const index = generateRandomNumber(0, alphabets.length -1);
    return alphabets[index];
}

//console.log(getCharacter());


function generatePassword() {
    let password = "";

    for(let idx = 0; idx < 25; idx++) {
        password = password + getCharacter();   
    } 
    
    return password;
}

function givePassword(enterlength){
    document.getElementById("output").value = generatePassword();
}

new ClipboardJS('.copy');

console.log(generatePassword());