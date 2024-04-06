function deleteCurso(id) { // função deletar que pega o Id a ser deletado
	user = {
		id: id
	}
	fetch(
		"https://api.render.com/deploy/srv-co8js7ol5elc739050o0?key=_2y4mbr50sI/cursos/delete/",
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