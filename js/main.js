$(document).ready(function(){    

    $('#celular').mask('(00)00000-0000');

    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00000-000');

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            celular:{
                required: true
            },
            cpf:{
                required: true
            },
            cep:{
                required: true
            },

        },
        messages: {
            nome: 'Por Favor, insira um nome válido',
            email: 'Por Favor, insira um Email válido',
            telefone: 'Por Favor, insira um Celular válido',
            cep: 'Por Favor, insira um CEP válido',
            cpf: 'Por Favor, insira um cpf válido'
        },       

    })
})