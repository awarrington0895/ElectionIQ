function VoterData(address, key) { //voter data class
    this.address = address.replace(" ", "+");
    this.key = key;
    this.xmlData = new XMLHttpRequest();
}

VoterData.prototype.getData = function() {
    this.xmlData.open("GET", "https://www.googleapis.com/civicinfo/v2/voterinfo?address=" + this.address + "&key=" + this.key, false);
    this.xmlData.send(null);
};

VoterData.prototype.print = function() {
    console.log(this.xmlData.responseText);
};

VoterData.prototype.getXmlDoc = function() {
    return this.xmlData;
};

var dat = new VoterData("6807 E 82nd St Tulsa OK", "AIzaSyAHNL-KlQfG8iva2YZITyxCQT4oEQbGr4Q");//replace spaces with '+' for address
dat.getData();
dat.print();