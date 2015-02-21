<? require_once('header.php'); ?>

<div class="main">

  <div class="stream-masthead">
    <div class="center pad">
      <div class="stream-header">
        <h1>Channel</h1>
        <p class="lead">
          To get started streaming you'll have to install our Chrome Extension.
        </p>
      </div>
      <div class="stream-masthead-buttons">
        <a href="#">
          <img src="img/icon-chrome.svg"> <!-- http://thenounproject.com/term/chrome/38318/ -->
          <span>Install Extension</span>
        </a>
      </div>
    </div>
  </div>

  <div class="center pad">
    <div class="stream-page">

      <div class="form">
        <h2>Configure Your Channel</h2>
        <div>
          <input type="text" placeholder="Channel Name">
          <input type="text" placeholder="Channel Categories (pick up to 3)">
          <div class="checkbox">
            <input type="checkbox" id="private-stream">
            <label for="private-stream">Make my stream private?</label>
          </div>
          <div class="input-text shareable-url">
            <span>Your Shareable Channel URL</span>
            <input type="text" value="http://astronomic.io/s/tims-channel" disabled>
          </div>
        </div>
        <button class="btn-save">Save My Settings</button>
      </div>

    </div>
    <div class="stream-sidebar">
      <h3>Learn More</h3>
      <ul>
        <li>
          <a href="#how-do-i-stream">How do I stream?</a>
        </li>
        <li>
          <a href="#where-can-i-get-the-chrome-extension">Where can I get the Chrome Extension?</a>
        </li>
        <li>
          <a href="#who-can-see-my-stream">Who can see my stream?</a>
        </li>
        <li>
          <a href="#why-do-i-need-to-install-an-extension">Why do I need to install an extension?</a>
        </li>
      </ul>
    </div>
  </div>

</div>

<div class="modal">
  <div class="overlay"></div>
  <div class="modal-page">
    <div class="answer" id="how-do-i-stream">
      <h3>How do I stream?</h3>
      <p>
        Install the Chrome extension, then click on it (in the top-right of
        your Chrome window) to activate it (a red dot will appear while active).
      </p>
      <p>
        Grant the extension access to your microphone and webcam.
      </p>
      <p>
        Click the button again to stop recording.
      </p>
    </div>

    <div class="answer" id="where-can-i-get-the-chrome-extension">
      <h3>Where can I get the Chrome Extension?</h3>
      <p>
        Just click the big orange button that says "Install Extension" at the top right of this page.
      </p>
    </div>

    <div class="answer" id="who-can-see-my-stream">
      <h3>Who can see my stream?</h3>
      <p>
        If your channel <b>is not</b> set to private, anyone can easily find your stream by browsing for it.
      </p>
      <p>
        If your channel <b>is</b> set to private, then only people you give the unique URL can access it.
      </p>
      <p>
        <b>Disclaimer:</b> It's always possible someone could randomly guess your unique URL and begin watching your stream, but it's insanely unlikely.
      </p>
    </div>

    <div class="answer" id="why-do-i-need-to-install-an-extension">
      <h3>Why do I need to install an extension?</h3>
      <p>
        We would eventually love to see some third party apps for Astronomic, but in the meantime, a Chrome extension was the easiest and more reliable
        way to expose a streamer's microphone, webcam, and screen.
      </p>
    </div>

  </div>
</div>

<? require_once('footer.php'); ?>
