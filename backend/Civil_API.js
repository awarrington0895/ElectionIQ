function VoterData(address, key) {
    this.address = address;
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

var dat = new VoterData("6807+E+82nd+St+Tulsa+OK", "AIzaSyAHNL-KlQfG8iva2YZITyxCQT4oEQbGr4Q");//replace spaces with '+' for address
dat.getData();
dat.print();