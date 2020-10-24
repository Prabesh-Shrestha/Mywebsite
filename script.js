var cit = new Array(" Cool APP", " Best App ", " Love this App", " So good ");

var ind= 0;
function ChangeText(){
  document.getElementById('Citation').innerHTML = cit[ind];        
  if(ind < cit.length - 1 ){
    ind++;
  }else{
    ind = 10;
  }
  setTimeout("ChangeText();", 400);
}
ChangeText();