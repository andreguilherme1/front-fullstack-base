async function editUser(id) {
	await fetch("http://localhost:3000/users/"+id,{
		method: "GET",
		headers: {
		"Content-Type": "application/json",
		"Authorization": `Bearer ${localStorage.getItem('token')}`
		}
	})
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			const user = data[0]
			console.log(user)


			formShow("user")
			
			setTimeout(() => {
			$('#salvar-btn').text("Editar") // muda o valor do botao "salvar" para "editar"
      $('#salvar-btn-curso, .btn-sm').css({
          'backgroundColor': '#ffc107',
          'border': 'none'  // Remove a borda
        });
			$("#index").val(user.id)
			$("#username").val(user.username)
			$("#email").val(user.email)
			document.getElementById("password").placeholder = "Insira a nova senha"
			},1000)
		})
}