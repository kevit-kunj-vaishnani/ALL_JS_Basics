let name1 = {
    firstname: 'kunal',
    lastname: 'patel',
}

let printname = function (){
    console.log(this.firstname +" "+ this.lastname);
}


printname.call(name1); // kunal patel


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let name2 = {
    firstname: 'kunal',
    lastname: 'patel',
}

let printname2 = function (city,state){
    console.log(this.firstname +" "+ this.lastname +" from "+ city +" , "+ state );
}


printname2.call(name2,'Rajkot','guj'); // kunal patel from Rajkot , guj