async function login() {
	var username = document.getElementById("username-login").value;
	var password = document.getElementById("password-login").value;

	var user = {
		username: username,
		password: password,
	};

	let url = "https://api-fullstack-base.onrender.com/login";

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

		$("#userName").text('Aluno: ' + user.username.toUpperCase());
	} catch (error) {
		console.log(error);
	}
  
  $(".menu-login").hide()
  $(".menu-nova-conta").hide()
  $(".menu-logout").show()
  $("#userName").show()

  
  
}

function logout() {
	fetch(
		"https://api-fullstack-base.onrender.com/logout",
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
  $(".text-body-secondary").hide()
  $(".menu-logout").hide()
  $(".menu-login").show()
  $(".menu-nova-conta").show()
  $(".tudo").show()
  $("footer").show()
  
}



$("#userName").css({
  width: '100%',
  display: 'flex',
  justifyContent: 'start',
  fontSize: '1.325rem',
  fontFamily: 'Inter',
  fontWeight: 500,
  lineHeight: '40px',
});

$(".menu-logout").hide()