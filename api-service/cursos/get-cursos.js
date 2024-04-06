async function getCursos(){
	let token = localStorage.getItem('token')
	console.log('ele', token)
	await fetch("https://api-fullstack-base.onrender.com/cursos",{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}).then((response) => {
		return response.json()
	}).then((data) => {
	const cursos = data
		console.log(cursos)
		mountCursos(cursos)
		return cursos
	}).catch(()=>{
		// $("#mensage-table").html("<h6>Erro ao montar a tabela. Faça login</h6>")
	})
}

getCursos()

