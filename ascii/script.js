function start(){
    let textanswer = "";
    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }
    let element;
    let userval = prompt();
    for (let i = 0; i < userval.length; i++) {
        if (userval[i] !=" "){
            let asciival = userval[i].charCodeAt(0);
            textanswer += dec2bin(asciival).toString() + " ";
            console.log(dec2bin(asciival));
            
        }
        
    }
    console.log(textanswer);
    document.getElementById("answer").innerHTML = textanswer;

}