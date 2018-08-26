function theBeatlesPlay(musicians, instrument){
var empty=[]
for(let i=0; i <= musicians.length-1; i++){
 empty.push(musicians[i]+ " plays "+ instrument[i])
}
return empty
}

function johnLennonFacts(facts){
  var length = facts.length  
  while(length>=0){
    facts[length]= `${facts[length]} !!!` 
    length--
  }
  return facts
}