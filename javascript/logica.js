



		function limpaInput(){

			document.getElementById("texto").value = "";
		}

		function limpaText(){

			document.querySelector("textarea").value="";
		}



	function decodificar(){

		let texto = document.getElementById("texto").value;

			let textoCripitografado = texto.replaceAll(/e/gi,"enter")
			.replaceAll(/i/gi,"imes")
			.replaceAll(/a/gi, "ai")
			.replaceAll(/o/gi,"ober")
			.replace(/u/gi,"ufat");
				
			document.querySelector("textarea").value = textoCripitografado;

			limpaInput();

	}


	function descodificar(){

		let desc = document.querySelector("textarea").value;


		

			let volta = desc.replaceAll("ai", "a")
			.replaceAll("enter","e")
			.replaceAll("imes","i")
			.replaceAll("ober","o")
			.replaceAll("ufat","u");

			document.getElementById("texto").value = volta;

			limpaText();

	}


	function copyToClipBoard() {

    var content = document.querySelector('textArea');
    
    content.select();
    document.execCommand('copy');

    alert("Copied!");
}


	




