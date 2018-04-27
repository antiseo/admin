    // window.onload = function () {
    	var useremail = Cookies.get('email');
    	var username = Cookies.get('name');
    	if (useremail && username) {
    		$("body").html("<h1>Вы уже авторизированы</h1><a href=\"starter.html\">Перейти на сайт</a><br>" + 
    		" <input type=\"button\" class=\"btn-lg btn-danger\" value=\"Logout\" "+
    		"onclick=\"Cookies.remove(\'name\');"+
    		"Cookies.remove(\'email\');location.reload()\">");
    		// window.location.href = 'starter.html'
    	}
    	else{
    		$("a.userName").html(username);
    	} 
    // }
    var users = [
    ['admin@gmail.com', 'Анатолий', 'admin'],
    ['admin2@gmail.com', 'Василий', 'admin2'],
    ['admin3@gmail.com', 'Сергей', 'admin3'],
    ['admin4@gmail.com', 'Елена', 'admin4'],
    ['admin5@gmail.com', 'Мария', 'admin5'],
    ['admin5@gmail.com', 'Надежда', 'admin6'],
    ];
    $('#login').click(function(event) {
    	event.preventDefault($(this));
    	userEmail = $("#email").val();
    	userPassword = $("#password").val();
    	checkEmail = 0;
    	for (var i = 0; i < users.length; i++) {
    		if (userEmail == users[i][0] && userPassword == users[i][2]) {
    			checkEmail = 1;
    			currentMail = users[i][0];
    			currentName = users[i][1];
    		}
    	}
    	if (checkEmail == 1) {
    		Cookies.set('email', currentMail, { expires: 365, path: '/' });
    		Cookies.set('name', currentName, { expires: 365, path: '/' });
    		window.location.href = 'starter.html';
    	}
    	else{
    		$("#emailError").html("<i class=\"fa fa-close\"></i> Что-то пошло не так :)");
    	}
    });