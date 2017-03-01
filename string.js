
   
 function start() {
	var textInput = document.getElementById ("inputText").value; 
	var reversalTxt = document.getElementById("reversal");
	var alphabitsTxt = document.getElementById("alphabits");
	var palindromeTxt = document.getElementById("palindrome");

    var letters = /^[A-Za-z ]+$/;

   if (textInput.match(letters))
   	  {
		reversalTxt.innerHTML = reversal(textInput);
		alphabitsTxt.innerHTML = alphabits(textInput);
		if (palindrome(textInput))
			{
				palindromeTxt.innerHTML = "Yes Palindromes"; 
			}
		else
		{
			palindromeTxt.innerHTML = "Not Palindromes"; 
		}	
		
	  }
	else  	
	{ return "Not are letters, please try again".fontcolor("red");}

}


// reverse string
function reversal(textInput) {

    return textInput.split("").reverse().join("");
}

// sort string 
function alphabits(textInput) {

	return textInput.split('').sort().join('');
}

// check for palindrome
function palindrome(textInput) {

 var re = /[\W_]/g;
  var lowRegStr = textInput.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}


document.getElementById("clickBtn").addEventListener("click", start);

document.addEventListener("keypress", function (e) {
	if (e.keyCode === 13) {
		start();
	}
});
