//I am making use of var so that the variable can be accessed globally
var data = [
 
   {  "principal": 2500,
     "time":1.8
 },

 {
     "principal":1000,
     "time":5
 },
 {
     "principal":3000,
     "time":1
 },
 {
     "principal":2000,
     "time":3
 }

]




function interestCalculator(data){
    var rate;
    var interestData=[];
    for (var i=0; i < data.length; i++){
        if(data[i].principal >= 2500 && data[i].time > 1 && data[i].time < 3) {
            rate=3;
            var result=(data[i].principal * rate * data[i].time) / 100;
            interestData.push({interest:result, rate:3, principal:data[i].principal, time:data[i].time});
        }else if(data[i].principal >= 2500 && data[i].time >= 3) {
            rate=4;
            var result=(data[i].principal * rate * data[i].time) / 100;
            interestData.push({interest:result, rate:4, principal:data[i].principal, time:data[i].time});
        }else if(data[i].principal < 2500 || data[i].time <= 1) {
            rate=2;
            var result=(data[i].principal * rate * data[i].time) / 100;
            interestData.push({interest:result, rate:2, principal:data[i].principal, time:data[i].time});
        }else{
            rate=1;
            var result=(data[i].principal * rate * data[i].time) / 100;
            interestData.push({interest:result, rate:1, principal:data[i].principal, time:data[i].time});
        }

        console.log(interestData);
        return interestData;

    }
};

interestCalculator(data);
alert(interestCalculator(data));