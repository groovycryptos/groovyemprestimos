function conf()
{
		var con=confirm("Quer começar a investir em Criptomoedas mas não tem grana para começar?");
		console.log(con);
		if(con === true)
		{
			alert('Então vamos lá!');
			window. location = "form/form.html";
		} else {
			alert('Prefere ficar na CLT né seu ovo maltino?');
		}
}
