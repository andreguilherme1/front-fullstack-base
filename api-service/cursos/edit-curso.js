async function editCurso(id) {
	await fetch("https://api-fullstack-base.andreguilherme6.repl.co/cursos/"+id,{
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
			const curso = data[0]
			console.log(curso)

			formShow('curso')
			
			setTimeout(() => {
			$('#salvar-btn-curso').text("Editar") // muda o valor do botao "salvar" para "editar"
			$("#index-curso").val(curso.id)
			$("#name").val(curso.name)
			$("#price").val(curso.price)
			$("#quantity").val(curso.quantity)
			},1000)
		})
}