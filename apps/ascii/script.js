function encrypt(){
    let textanswer = "";
    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }
    let userval = prompt();
    for (let i = 0; i < userval.length; i++) {
        if (userval[i] !=" "){
            let asciival = userval[i].charCodeAt(0);
            textanswer += dec2bin(asciival).toString() + " ";
            console.log(dec2bin(asciival));
            
        }
        
    }

    console.log(textanswer);
    document.getElementById("encryptedvalue").innerHTML = textanswer;

}
function decrypt(){
    let value = "";

    function convert(input) {
        var result = "";
        var arr = input.match(/.{1,8}/g);
        for (var i = 0; i < arr.length; i++) {
            result += String.fromCharCode(parseInt(arr[i], 2).toString(10));
        }
        console.log(result)
        return result;   
    }

    userinput = prompt("Enter the encryped value");
    array = userinput.split(" ");

    for (let i = 0; i < array.length; i++) {
        value = value + convert(array[i]);
    }
    console.log(value);
    document.getElementById("decryptedvalue").innerHTML = value;
}
