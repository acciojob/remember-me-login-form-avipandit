const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const rememberMe = document.querySelector('#remember-me');

		form.addEventListener('submit', function(event) {
			event.preventDefault();

			if (rememberMe.checked) {
				localStorage.setItem('username', username.value);
				localStorage.setItem('password', password.value);
			} else {
				localStorage.removeItem('username');
				localStorage.removeItem('password');
			}

			alert('Logged in as ' + username.value);

			if (localStorage.getItem('username')) {
				const existingUserButton = document.createElement('button');
				existingUserButton.id = 'existing';
				existingUserButton.textContent = 'Login as existing user';
				document.body.appendChild(existingUserButton);

				existingUserButton.addEventListener('click', function() {
					alert('Logged in as ' + localStorage.getItem('username'));
				});
			}
		});
