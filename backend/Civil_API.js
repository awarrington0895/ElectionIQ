function VoterData(address, key) { //voter data class
    this.address = address.replace(" ", "+");
    this.key = key;
    this.xmlData = new XMLHttpRequest();
    this.parser = new DOMParser();
}

VoterData.prototype.getData = function() {
    this.xmlData.open("GET", "https://www.googleapis.com/civicinfo/v2/voterinfo?address=" + this.address + "&key=" + this.key, false);
    this.xmlData.send(null);
};

VoterData.prototype.print = function() {
    console.log(this.xmlData.responseText);
};

VoterData.prototype.getJSON = function() {
    return JSON.parse(this.xmlData.responseText);
};

var dat = new VoterData("1734 Engel Rd Lawrence KS", "AIzaSyAHNL-KlQfG8iva2YZITyxCQT4oEQbGr4Q");//replace spaces with '+' for address
dat.getData();
dat.print();
var j = dat.getJSON()
console.log(j);
document.getElementById("Poll_Name").innerHTML = j['pollingLocations'][0]['address']['locationName'];
document.getElementById("Poll_Location").innerHTML = j['pollingLocations'][0]['address']['line1'] + " " + j['pollingLocations'][0]['address']['city'] + ", " + j['pollingLocations'][0]['address']['state'];