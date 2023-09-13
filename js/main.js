        $(document).ready(function() { 
            
            
            $('#Telefone').mask('(00) 00000-0000')
            $('#CEP').mask('00000-000')
            $('#CPF').mask('000.000.000-00')

            $('form').validate({
                rules: {
                    Nome: {
                        required: true
                    },
                    Email: {
                        required: true,
                        email: true
                    },
                    Telefone: {
                        required: true
                    },
                    CPF: {
                        required: true
                    },
                    CEP: {
                        required: true
                    },
                    Endereço: {
                        required: true
                    }
                },
                messages: {
                    Nome: 'Insira seu nome por favor.',
                    Telefone: 'Digite seu número',
                    CPF: 'Digite seu CPF',
                    CEP: 'Digite seu CEP',
                    Endereço: 'Digite seu endereço'
                },
                submitHandler: function(form) {
                    condole.log(form)
                },
                invalidHandler: function(eventos, validador) {
                    let campoIncorreto = validador.numberOfInvalids();
                    if (campoIncorreto){
                        alert (`Existem ${campoIncorreto} campos incorretos.`)
                    }
                }
            })
        });