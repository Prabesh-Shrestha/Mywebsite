
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
