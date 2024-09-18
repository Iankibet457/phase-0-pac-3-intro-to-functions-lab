function shout(string) {
    // todo
    return string.toUpperCase()
  }

function whisper(string){
    return string.toLowerCase()
  }

function logShout(string){
    let string2 =string.toUpperCase()
    console.log(string2)
    
}
function logWhisper(string){
    let string3 = string.toLowerCase()
    console.log(string3)
}
function sayHiToHeadphonedRoommate(string){
    let string4 = string.toLowerCase()
    let string5 = string.toUpperCase()
    if (string4 === string ){
        return "I can't hear you!"
    } else if(string5 === string){
        return "YES INDEED!"
    }else if(string === "Let's have dinner together!"){
        return "I would love to!"
    }
    

}