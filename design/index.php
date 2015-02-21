<? require_once('header.php'); ?>

<div class="main">

  <header class="masthead-header center">
    <h1>Broadcast Anything</h1>
    <p class="lead">
      Stream and record high-definition content with ease
    </p>
    <nav>
      <a href="<? echo $d; ?>/browse.php" class="btn-solid">
        <img src="img/icon-eye.svg">
        <span>Browse Channels</span>
      </a>
      <a href="<? echo $d; ?>/channel.php" class="btn-outline">
        <img src="img/icon-video.svg"> <!-- http://thenounproject.com/term/video/101545/ -->
        <span>Start Streaming</span>
      </a>
    </nav>
  </header>

  <div class="masthead">
    <div class="center">

      <img src="img/monster1.svg"> <!-- http://thenounproject.com/term/monster/24993/ -->
      <img src="img/monster2.svg"> <!-- http://thenounproject.com/term/monster/82823/ -->

      <h1>Featured Stream</h1>

      <iframe width="640" height="360" src="https://www.youtube.com/embed/IFmNhy_eRig?rel=0" frameborder="0" allowfullscreen></iframe>

    </div>
  </div>

</div>

<? require_once('footer.php'); ?>
