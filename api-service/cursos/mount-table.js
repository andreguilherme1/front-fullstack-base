function mountCursos(cursos) {
	let lista = ""
	for(let curso of cursos){
		lista +=
			`
				<tr>
					<th scope="row">${curso.id}</th>
					<td>${curso.nome}</td>
					<td>${curso.descricao}</td>
					<td>${curso.duracao_semanas}</td>
					<td>
						<button type="button" onclick="editCurso(${curso.id})" class="btn btn-primary btn-sm">Editar</button>
						<button id="btn-deletar" type="button" onclick="deleteCurso(${curso.id}); tableShow('curso')" class="btn btn-danger btn-sm">Excluir</button>
					</td>
				</tr>
			`
	}
	$("#table-curso").html(lista) 

}
