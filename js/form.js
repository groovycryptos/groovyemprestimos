            const emprestimos = document.getElementById("emprestimos")
            emprestimos.addEventListener("submit", (e) =>  {
            e.preventDefault();    
            var con = confirm("Confirmar envio de formulário?");
            if (con ===true){alert("Formulário Enviado! Aguarde redirecionamento...");
            console.log("Formulário Enviado")}
            window. location = "./drinihome.html";
        });   
