async function login() {
	var username = document.getElementById("username-login").value;
	var password = document.getElementById("password-login").value;

	var user = {
		username: username,
		password: password,
	};

	let url = "https://api-fullstack-base.andreguilherme6.repl.co/login";

	if(username === "" || password === ""){
		return
	}

	try {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
        'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			mode: 'cors'
		});

		if (!response.ok) {
			throw new Error(`Erro na requisição: ${response.statusText}`);
		}

		const data = await response.json();

		localStorage.setItem('token', data.token);
		localStorage.setItem('user', user.username);
		await tableShow("dashboard")

		console.log('user', user.username)

		$("#userName").text('Usuário: ' + user.username.toUpperCase());
	} catch (error) {
		console.log(error);
	}
}

function logout() {
	fetch(
		"https://api-fullstack-base.andreguilherme6.repl.co/logout",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			}
		}
	).then(() => {
		localStorage.removeItem('token')
		$('.navbar-dark').hide()
		loginShow()
		setTimeout(() => {
			$("form").removeClass("was-validated")
		}, 1)
		$("form").trigger("reset")
	})
}