function getUTCTime() {
  var date = new Date(); 
  var year = date.getUTCFullYear(); 
  var month = date.getUTCMonth() + 1; 
  var day = date.getUTCDate(); 
  var hour = date.getUTCHours(); 
  var minute = date.getUTCMinutes(); 
  return [year, month, day, hour, minute]; 
}

function generateCode(utcTime) {
  var sum = 0;
  for (var i = 0; i < 5; i++) { 
    sum += utcTime[i];
  }
  var code = sum ^ 3351 % 10000;
  return code; 
}

function displayTimeAndCode() {
  var utcTime = getUTCTime(); 
  var code = generateCode(utcTime); 
  var timeString = utcTime.join(":"); 
  var codeString = code.toString(); 
  var remaining = 60 - (Date.now() / 1000) % 60;
  document.getElementById("time").innerHTML = timeString; 
  document.getElementById("code").innerHTML = codeString; 
  document.getElementById("progress").value = remaining;
}
