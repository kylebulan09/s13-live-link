let username = prompt("Enter your username:");
let password = prompt("Enter your password:");
let role = prompt("Enter your role:").toLowerCase();

function loginPrompt(username, password, role){
	if(username == "" && password == "" && role == ""){
		alert("Input must not be empty");
	}
	else{
		switch (role) {
			case 'admin':
				alert("Welcome back to the class portal, admin!");
 				break;
			case 'teacher':
				alert("Thank you for logging in, teacher!");
				break;
			case 'student':
				alert("Welcome to the class portal, student!");
				break;

			defualt:
				alert("Role out of range.")
		};
	}
}

loginPrompt();
let userLogin = loginPrompt(username, password, role);

// function computeAverage(num1, num2, num3, num4){
// 	sum = num1 + num2 + num3 + num4;
// 	average = sum/4;
// };

function checkAverage(num1, num2, num3, num4){
	sum = num1 + num2 + num3 + num4;
	average = sum/4;

	if(average >= 96){
		console.log("Hello, student, your average is: " + average + ". The letter equivalent is A+");
	}
	else if(average >= 90 && average <= 95){
		console.log("Hello, student, your average is: " + average + ". The letter equivalent is A");
	}	
	else if(average >= 85 && average <= 89){
		console.log("Hello, student, your average is: " + average + ". The letter equivalent is B");
	}	
	else if(average >= 80 && average <= 84){
		console.log("Hello, student, your average is: " + average + ". The letter equivalent is C");
	}		
	else if(average >= 75 && average <= 79){
		console.log("Hello, student, your average is: " + average + ". The letter equivalent is D");
	}	
	else if(average <= 74){
		console.log("Hello, student, your average is: " + average + ". The letter equivalent is F");
	}
};

checkAverage();
let grades = checkAverage(98, 97, 96, 98);