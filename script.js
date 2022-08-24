const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('numbero');
const select = document.getElementById('dropdown');
const select2 = document.getElementById('dropdown2');
const textarea = document.getElementById('area');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
	
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
    const ageValue = numbero.value.trim();
    const selectValue = select.options[select.selectedIndex].value.trim();
    const select2Value = select2.options[select.selectedIndex].value.trim();
    const textareaValue = textarea.value;
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

    if(ageValue === ''){
        setErrorFor(age, 'Age cannot be blank');
    }   else {
        setSuccessFor(age);
    }
    
    if(selectValue === ''){
        setErrorFor(select, 'Must select a valid option')
    }   else {
        setSuccessFor(select);
    }

    if(select2Value === ''){
        setErrorFor(select2, 'Must select a valid option')
    }   else {
        setSuccessFor(select2);
    }
    if(textareaValue === '') {
        setErrorFor(textarea, 'Please tell us if you like spicy sauce')
    }   else {
        setSuccessFor(textarea);
    }
}

function setErrorFor(input, message) {
	const formSet = input.parentElement;
	const small = formSet.querySelector('small');
	formSet.className = 'form-set error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formSet = input.parentElement;
	formSet.className = 'form-set success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}   
