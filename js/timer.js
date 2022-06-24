function convertUTC(d){
    var localTime = d.getTime();
    var localOffset = d.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    return utc;
}

function getDiff(start,end){
    var diff = convertUTC(end) - convertUTC(start);
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return [days, hours, minutes, seconds];
}

function displayTimer(){
    var endTime=new Date("2022-04-30T00:00:00");
    var currentTime = new Date();
    var diff = getDiff(currentTime, endTime);
    document.querySelectorAll("#count-down h2").forEach(function(e, i){
        if(i > 3) i = i-4;
        e.innerHTML = diff[i];
    });   
    document.querySelectorAll("#notice-bar p b").forEach(function(e, i){
        e.childNodes[0].nodeValue=diff[i];
    });
}

displayTimer();