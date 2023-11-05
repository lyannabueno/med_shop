$(document).ready(function() {
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            nomeProduto: {
                required: true
            },
            mensage: {
                required: true
            }
        },
    
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            nomeProduto: 'Por favor, insira o nome do produto de interesse',
            mensage: 'Por favor, insira sua dúvida'
        },
    
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.btn.btn-warning').click(function(event) {
        event.preventDefault(); /* evita que a tela suba para o topo da página ao clicar no botão */

        var nomeProduto = $(this).closest('.card').find('.card-title').text(); /* closest() e find() tarbalham como se fosse 'pai' e 'filho', respectivamente */

        $('#produto-interesse').val(nomeProduto); /* define o valor do campo de input 'produto-interesse' como o nome do produto */

        const destino = $('#contato'); /* obtém a posição da seção de contato e controla o tempo de descida até a aba de contato */
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 100);
    });
})