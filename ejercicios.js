
const lista_verificadores=[]

    function generar_verificador() {
        const numero = document.getElementById('numeroinput').value;
        let lista_multiplicadores = [2, 3, 4, 5, 6, 7];
        let lista_numero = numero.toString().split('').reverse().map(Number);
        let numero_cuasi = 0;
        for (let i = 0; i < lista_numero.length; i++) {
            let multiplicador_index = i % lista_multiplicadores.length;
            numero_cuasi += (lista_numero[i] * lista_multiplicadores[multiplicador_index]);
        }
        var segundo_digito = (11 - (numero_cuasi % 11));
        let numerogenerado = numero + "-" + segundo_digito;
        lista_verificadores.push(numerogenerado);
        alert(`Número con dígito verificador generado: ${numerogenerado}`);
    }

    const verificar_num = function(numero) {
        if (!isNaN(numero)) {
            console.log("El dígito ingresado es: " + numero);
            return numero;
        } else {
            console.log("Por favor, ingresa un número válido.");
            return null; 
        }
    };

    function mostrarListado() {
        const listado = document.getElementById('listado');
        listado.innerHTML = '';
        for (const numero of lista_verificadores) {
            const listItem = document.createElement('li');
            listItem.textContent = numero;
            listado.appendChild(listItem);
        }
        listado.style.display = 'block';
    }



    console.log(lista_verificadores)