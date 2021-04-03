function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal <= 0){
        alert("Enter a Positve Number")
        document.getElementById("principal").focus()
        
    }
    


    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100;
    var yearToString = parseInt(years, 10);
    NoOFYears = yearToString + 2021;

    document.getElementById("result").innerHTML = "If you deposit " + principal +",<br>at an interest rate of " +rate + "%.<br>You will receive an amount of " + interest +",<br>in the year " + NoOFYears;
}
    
function rangeRelay(){
    var range =  document.getElementById("rate").value;
    document.getElementById("range_result").innerHTML = range +"%";

    

    
}

