function saveCurso() {
	// jquery
	let nome = $("#nome").val() // pega o valor do input
	let descricao = $("#descricao").val() // pega o valor do input 
	let duracao_semanas = $("#duracao_semanas").val() // pega o valor do input 
	let id = $("#index-curso").val() // pega o valor do input 

	let curso = { nome, descricao, duracao_semanas, id } // criando o objeto

	let status = $('#salvar-btn-curso').text()

	console.log(status)

	if (status == "Salvar") {
		if(curso.nome === "" || curso.descricao === "" || curso.duracao_semanas === ""){
		return
		}
		delete curso.id
		fetch(
			"https://api-fullstack-base.andreguilherme6.repl.co/cursos/register",
			{	
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem('token')}`
				},
				body: JSON.stringify(curso)
			}
		).then((resp)=>{
			console.log(resp.json())
				$("#salvar-btn").text("Salvar") // muda o valor do botão de Salvar para Editar
				getCursos()
				tableShow('curso')
				setTimeout(() => {
					$("form").removeClass("was-validated")
				}, 1)
				$("form").trigger("reset")
			})

	} else {
		if(curso.nome === "" || curso.descricao === "" || curso.duracao_semanas === ""){
		return
		}
		fetch(
			"https://api-fullstack-base.andreguilherme6.repl.co/cursos/update/",
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem('token')}`
				},
				body: JSON.stringify(curso)
			}
		).then(()=>{
		$("#salvar-btn-curso").text("Salvar") // muda o valor do botão de Salvar para Editar
		getCursos()
		tableShow('curso')
		setTimeout(() => {
			$("form").removeClass("was-validated")
		}, 1)
		$("form").trigger("reset")
		})
	}

}
