
/*Menu auto ocultable
Para cada contenedor se oculta su contraparte....un tipo de menu 
como frame, pero con CSS y Javascript*/

		function mostrarpresentacion(){
		document.getElementById('presentacion').style.display = 'block';
		document.getElementById('informacion').style.display='none';
		document.getElementById('video').style.display='none';}


		function mostrarvideo(){
		document.getElementById('video').style.display='block';
		document.getElementById('presentacion').style.display = 'none';
		document.getElementById('informacion').style.display='none';}


		function mostrarinformacion(){
		document.getElementById('informacion').style.display='block';
		document.getElementById('presentacion').style.display = 'none';
		document.getElementById('video').style.display='none';}

		

		
