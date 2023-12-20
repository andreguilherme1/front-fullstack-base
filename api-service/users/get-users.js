async function getUsers(){
	let token = localStorage.getItem('token')
	console.log('ele', token)
	await fetch("https://api-fullstack-base.andreguilherme6.repl.co/users",{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}).then((response) => {
		return response.json()
	}).then((data) => {
	const users = data
		console.log(users)
		mountUsers(users)
		return users
	
	}).catch(()=>{
		// $("#mensage-table").html("<h6>Erro ao montar a tabela. Faça login</h6>")
	})
}

getUsers()