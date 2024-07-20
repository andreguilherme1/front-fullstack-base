function deleteUser(id) { // função deletar que pega o Id a ser deletado
	user = {
		id: id
	}
	fetch(
		"http://localhost:3000/users/delete/",
		{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify(user)
		}
	).then(() => {
		getUsers() // monta a tabela
	})
}