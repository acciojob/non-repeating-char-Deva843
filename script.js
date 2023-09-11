function firstNonRepeatedChar(str) {
 // Write your code here
	if(str.length<=1){
		return null;
	}
	
	for(let i =0;i<str.length-1;i++){
		if(str.charAt(i)=str.charAt(i+1)){
			continue;
		}
		else{
			return str.charAt(i);
		}
	}
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
