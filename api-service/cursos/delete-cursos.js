function deleteCurso(id) { // função deletar que pega o Id a ser deletado
	user = {
		id: id
	}
	fetch(
		"https://api-fullstack-base.andreguilherme6.repl.co/cursos/delete/",
		{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify(user)
		}
	).then(() => {
		getCursos() // monta a tabela
	})
}