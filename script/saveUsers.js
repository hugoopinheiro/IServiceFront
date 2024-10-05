// ListarUsers();

function SaveUsers()
{

    var Users = {};

    Users.name = $("#name").val();
    Users.lastName = $("#lastName").val();
    Users.email= $("#email").val();
    Users.password= $("#password").val();
    Users.telefone = $("#phone").val();
    
    var validar = 1;
    
    if  (Users.name == "")
    {
        validar = 0;
        alert('O campo nome é obrigatório');
        $("#name").css("background-color", "red");
    }
    
    if  (Users.phone == "")
    {
        alert('O campo telefone é obrigatório');
        $("#phone").css("background-color", "red");
        validar = 0;
    }
    
    if(validar == 1)
    {
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/user/save",
            data: JSON.stringify(Users),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                alert('Sucesso!');
                location.reload();
            },
            error: function (msg) {
                alert('error');
            }

        });
        

        //AdicionarLinhaTabela  Users.documento,   Users.nome, Users.email,  Users.telefone);
        LimparCamposForm();
    }
}
// function AdicionarLinhaTabela(Documento, Nome, Email, Telefone)
// {			
//     var linhaNova = '<tr id="Linha'+Documento+'"><td>' 
//     linhaNova = linhaNova + Documento + '</td><td>' + Nome + '</td><td>' + Email + '</td><td>' + Telefone +'</td><td><a href="#" onclick="javascript:GetCliente('+Documento+');"  class="btn btn-info"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span> Editar</a><a href="#" onclick="javascript:RemoveLinha('+Documento+');" class="btn btn-danger"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Excluir</a></td></tr>';
    
//     $("#ListaCadastro").prepend(linhaNova);
//     $('#myModal').modal().hide();
// }

function LimparCamposForm()
{
    $("#name").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#password").val("");
    $("#phone").val("");
}

// function RemoveLinha(Documento)
// {
//     $.ajax({
//         type: "DELETE",
//         url: "https://localhost:44344/api   Users/Deletar?Documento=" + Documento,
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         success: function (OBJ) {
//             alert(OBJ);
//         },
//         error: function (OBJ) {
//             alert('error');
//         }

//     });

//     $('#Linha' + Documento).remove();
// }

// function GetCliente(Documento) {
    
//     $.ajax({
//         type: "GET",
//         url: "https://localhost:44344/api   Users/GetCliente?Documento=" + Documento,
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         success: function (OBJ) {
//             $('#myModal').modal().show();

//             $("#Documento").val(OBJ.documento);
//             $("#nome").val(OBJ.nome);
//             $("#email").val(OBJ.email);
//             $("#telefone").val(OBJ.telefone);
//             $("#fax").val(OBJ.fax);
//             $("#uf").val(OBJ.uf);

//             //SalvarCadastro();
//         },
//         error: function (OBJ) {
//             alert('error');
//         }

//     });

// }

// function Lista  Users() {
//     $.ajax({
//         type: "GET",
//         url: "https://localhost:44384/api   Users/Listar",
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         success: function (OBJ) {
//             for (var i = 0; i < OBJ.length; i++) {

//                 AdicionarLinhaTabela(OBJ[i].documento, OBJ[i].nome, OBJ[i].email, OBJ[i].telefone);

//             }
                            
//         },
//         error: function (OBJ) {
//             alert('error');
//         }

//     });

// }

// </script>

// </body>
// </html>