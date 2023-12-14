$(document).ready(function(){
	token = localStorage.getItem('token')
	user = localStorage.getItem('user')
	if(user){
	$("#userName").text('Usuário: '+user.toUpperCase());
	}

	if(token){
      $('#form-content').hide()
      $('#login-content').hide()
			$('#table-content').load('../pages/dashboard/dashboard.html');
			$('.navbar-dark').show()
      $('#table-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
	}else{
      $('#form-content').hide()
			$('#login-content').load('../pages/auth/login-form.html');
			$('.navbar-dark').hide()
			setTimeout(()=>{
				formConfig()
				$('#login-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
			},700)
      $('#table-content').hide()
      $('.navbar-toggler').hide()
	}
	});
