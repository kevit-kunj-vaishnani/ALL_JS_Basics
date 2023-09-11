
/*
What is GMT time India?
Greenwich Mean Time is 5 hours and 30 minutes behind India Standard Time. 
                            GMT+0530
*/


/*

~ date is object.
~ month starts with 0. january=0,february = 1,....
~ sunday = 0 , monday =1 , tuesday = 2 , wednesday =3 , thursday = 4  , friday = 5 , saturday =6

	 toString() : Sun May 07 2023 14:16:39  	(day+month+date+year+time)
	 toDateString() : Sun May 07 2023	 	(day+month+date+year)
	 toTimeString() :14:19:03 GMT+0500 	 	(time h:m:s)
	 toLocaleString() : 5/7/2023, 2:20:24 PM 	(day+month+date+year+time same as toString() method but in different format)
	 toISOString() : 2023-05-07T09:21:22.167Z
	 toUTCString() : Sun, 07 May 2023 09:24:48 GMT

*/

let time = new Date(2023,0,25); //Date(yyyy,m,dd)         way 1         only m starts with 0=january
let t1 = new Date("01-25-2023"); //Date("mm-dd-yyyy")      way 2            2 m starts with 01 = "
let t2 = new Date("January 25 2002");

console.log(time.toDateString());    // Wed Jan 25 2023      way 1 output
console.log(t1.toDateString());      // Wed Jan 25 2023      way 2 output
console.log(t2.getDay());            // 5 = friday
console.log(t2); 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Date.now()) 
// 1692334317044