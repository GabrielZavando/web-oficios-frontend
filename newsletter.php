<?php
if(isset($_POST)){
  $email = $_POST["email"];

  $subject = "Nuevo suscriptor";
  $to = "contacto@gabrielzavando.cl";
  $domain = $_SERVER["HTTP_HOST"];
  $message = "
    <p>
    Datos enviados desde el formulario del sitio <b>$domain</b>
    </p>
    <ul>
      <li>Asunto: <b>$subject </b></li>
      <li>Email: <b>$email</b></li>
    </ul>
  ";
  $headers = "MIME-Version:1.0\r\n" . "Content-type:text/html; charset=utf-8\r\n" . "From: Envío Automático No Responder <no-reply@$domain>";

  $send_mail = mail($to, $subject, $message, $headers);

  if($send_mail){
    $res = [
      "err" => false,
      "message" => "Tus datos han sido enviados"
    ];
  } else{
    $res = [
      "err" => true,
      "message" => "Error al enviar tus datos. Intenta nuevamente"
    ];
  }

  header("Access-Control-Allow-Origin: https://gabrielzavando.cl");
  header("Content-type: application/json");
  echo json_encode($res);
  exit;
}
