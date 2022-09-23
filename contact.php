<?php
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];
    $data_envio = $_POST['d/m/y'];

    $arquivo = "
    <html>
        <p><b>Nome: </b>$nome</p>
        <p><b>E-mail: </b>$email</p>
        <p><b>Mensagem: </b>$mensagem</p>
    </html>
    ";

    $destino = "misterubens@mail.com";
    $assunto = "Contato pelo Site";

    $headers = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";
    $headers .= "From: $nome <$email>";

    mail($destino, $assunto, $arquivo, $headers);

    echo "<meta http-equiv='refresh' content='10;url=../contato.html'>";

?>