<?
  $d = '/astro';
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Astronomic</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="//use.typekit.net/unk3uwa.js"></script>
    <script>try{Typekit.load();}catch(e){}</script>
    <link rel="stylesheet" href="css/style.css">
    <!--[if lt IE 9]><script src="js/vendor/selectivizr-1.0.2.min.js"></script><![endif]-->
    <script src="js/vendor/modernizr-2.8.2.min.js"></script>
    <script src="js/vendor/respond.js-1.4.2.min.js"></script>
  </head>
  <body>
    <!--[if lt IE 9]>
      <div class="browsehappy">
        <p>
          You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" target="_blank">upgrade your browser</a> to improve your experience.
        </p>
      </div>
    <![endif]-->

    <div class="head">
      <div>

        <a href="<? echo $d; ?>/" class="logo">
          <img src="img/logo.svg">
        </a>

        <a href="#" class="btn-menu">
          <img src="img/icon-menu.svg">
        </a>

        <nav class="menu">
          <a href="<? echo $d; ?>/browse.php">
            <img src="img/icon-eye.svg">
            <span>Browse</span>
          </a>
          <a href="<? echo $d; ?>/login.php">
            <img src="img/icon-key.svg"> <!-- http://thenounproject.com/term/key/16317/ -->
            <span>Login / Signup</span>
          </a>
        </nav>

      </div>
    </div>
