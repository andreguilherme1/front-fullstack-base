async function getUsers(){
	let token = localStorage.getItem('token')
	console.log('ele', token)
	await fetch("https://api.render.com/deploy/srv-co8js7ol5elc739050o0?key=_2y4mbr50sI/users",{
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