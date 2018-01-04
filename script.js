

var Kyle={
	name:'Kyle Rogers',
	age: 23,
}



function canDrinkabeer (person) {
if(person.age<21){
	return false;
}
else{
	return true;
}
}

 var cankyledrinkbeer= canDrinkabeer(Kyle);
// console.log(cankyledrinkbeer);

// var shyann={
// 	name: 'shyann',
// 	age: 18}

// var Canshyanndrinkbeer=canDrinkabeer(shyann);
// console.log(Canshyanndrinkbeer)
function addTwo(number){
	var newnumber=number+2;
	return newnumber;
}

//console.log(addTwo(9));

function domath(number){
	var newnumber=addTwo(number);
	var iseven=newnumber%2==0
	if (iseven){
		newnumber=newnumber*3;
	}
	else{
		newnumber=newnumber/3;
	}
	return newnumber
}
domath(13);
console.log(domath(14));
