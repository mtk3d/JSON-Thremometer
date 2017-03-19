var actual_deg = 220;
var elem = document.getElementById("hand");
function rotate(precent)
{
    var deg = Math.round(280/100*precent);
    var to_deg = 220+deg;
    var id = setInterval(frame, 5);
    function frame(){
        if(to_deg==actual_deg)
        {
            clearInterval(id);
        }else if(to_deg>actual_deg){
            //right
            actual_deg++;
            elem.style.transform = 'rotate(' + actual_deg + 'deg)';
        }else{
            //left
            actual_deg--;
            elem.style.transform = 'rotate(' + actual_deg + 'deg)';
        }
    }
}

function write_to_hand() {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://thingspeak.com/channels/9/field/2.json";
    var out;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {
        out = arr.feeds[99].field2;
        document.getElementById("id01").innerHTML = Math.round(out) + '°F';
        rotate(out);
    }
}
