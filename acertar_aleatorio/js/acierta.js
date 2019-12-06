var minum1=0;
			var intentos=0;
			var intentos2=0;
			document.getElementById("num_generado");
			document.getElementById("num_elegido1");
			
		
		
		function generar(){

			var aleatorio = Math.round(Math.random()*99);

			num_generado.value = aleatorio;

			alert("Numero generado. Ahora intenta adivinarlo en menos intentos que tu oponente.")
			num_elegido1.disabled=false;
			acierta1.disabled=false;
			num_elegido1.focus();
			generar_numero.disabled=true;
		}


		function adivinar1(){

					if(num_generado.value == ""){
						alert("TODAVÍA NO HAY NÚMERO GENERADO");
					}else if (num_elegido1.value == "" || isNaN(num_elegido1.value)){
						alert("Elige un número válido");
						num_elegido1.value="";
						num_elegido1.focus();
					}else if(num_elegido1.value < num_generado.value){
						document.getElementById("pista1");
						pista1.innerHTML="<p>El numero elegido es MENOR. Intenta de nuevo</p>";
						num_elegido1.value="";
						num_elegido1.focus();
						intentos++;
						c_intentos1.value = intentos;
					} else if(num_elegido1.value > num_generado.value){
						pista1.innerHTML="<p>El número elegido es MAYOR. Intenta de nuevo </p>";
						num_elegido1.value="";
						num_elegido1.focus();
						intentos++;
						c_intentos1.value = intentos;
					}else if(num_elegido1.value == num_generado.value){
						pista1.innerHTML="<p>Acertaste!</p>";
						num_elegido1.disabled="true";
						num_elegido1.value="";
						acierta1.disabled=true;
						intentos++;
						c_intentos1.value = intentos;

						$('#modal_unico').modal('show');
						modal_cuerpo.innerHTML="ACERTASTE! AHORA LE TOCA AL JUGADOR 2!";
						modal_titulo.innerHTML="Jugador 1";

						/*alert("ACERTASTE! ahora le toca al jugador 2")*/
						num_elegido2.focus();
						acierta2.disabled=false;


					}				
					//c_intentos1.value = intentos;
		}


		function adivinar2(){

					if(num_generado.value == ""){
						//alert("TODAVÍA NO HAY NÚMERO GENERADO");

						$(modal_unico).modal("show");
						modal_titulo.innerHTML="STOP!"
						modal_cuerpo.innerHTML="TODAVÍA NO HAY NÚMERO GENERADO";

					}else if (num_elegido2.value == "" || isNaN(num_elegido2.value)){
						//alert("Elige un número válido");

						$(modal_unico).modal("show");
						modal_titulo.innerHTML="STOP!";
						modal_cuerpo.innerHTML="Elige un número válido";

						num_elegido2.value="";
						num_elegido2.focus();
					}else if(num_elegido2.value < num_generado.value){
						document.getElementById("pista2");
						pista2.innerHTML="<p>El numero elegido es MENOR. Intenta de nuevo</p>";
						num_elegido2.value="";
						num_elegido2.focus();
						intentos2++;
						c_intentos2.value = intentos2;
					} else if(num_elegido2.value > num_generado.value){
						pista2.innerHTML="<p>El número elegido es MAYOR. Intenta de nuevo </p>";
						num_elegido2.value="";
						num_elegido2.focus();
						intentos2++;
						c_intentos2.value = intentos2;
					}else if(num_elegido2.value == num_generado.value){
						pista2.innerHTML="<p>Acertaste!</p>";
						num_elegido2.disabled="true";
						num_elegido2.value="";
						acierta2.disabled=true;
						intentos2++;
						c_intentos2.value = intentos2;

							if(c_intentos1.value < c_intentos2.value){
								$('#modal_acierto2').modal('show');
								resultado_modal.innerHTML="GANÓ EL JUGADOR 1";

								//alert("GANÓ EL JUGADOR 1");
							}else if(c_intentos1.value > c_intentos2.value){
								$('#modal_acierto2').modal('show');
								resultado_modal.innerHTML="GANÓ EL JUGADOR 2";

								//alert("GANÓ EL JUGADOR 2");
							}else if(c_intentos1.value == c_intentos2.value){
								$('#modal_acierto2').modal('show');
								resultado_modal.innerHTML="EMPATE";
								
								//alert("EMPATE!");
							}
							boton_reset.focus();						
					}

					//c_intentos2.value = intentos2;					
		}

		function reset(){
			intentos=0;
			c_intentos1.value=0;
			num_elegido1.disabled=false;
			num_elegido1.value="";
			acierta1.disabled=true;

			intentos2=0;
			c_intentos2.value=0;
			num_elegido2.disabled=false;
			num_elegido2.value="";
			acierta2.disabled=true;

			num_generado.value="";

			pista1.innerHTML="<p></p>";
			pista2.innerHTML="<p></p>";

			generar_numero.focus();
			generar_numero.disabled=false;

		}