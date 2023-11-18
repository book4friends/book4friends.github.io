---
layout: page
title: Anmeldung
permalink: /login/
description: Login oder Neuanmeldung
nav: true
nav_order: 5
display_categories:
horizontal: false
---

<div style="text-align: center; font-size: 18px;">
  <p style="font-size: 24px;"><strong>Willkommen bei book4friends!</strong></p>
  <p>Wir freuen uns, dass du dabei bist.</p>
  <p>Du kannst einen <strong>beliebigen user-Name statt deinem Vor-und Nachname</strong> verwenden.</p>
  <p>Die Anmeldung dauert nur ein paar Sekunden.</p>
  <p>Beginne die Anmeldung mit der Eingabe deiner E-Mail Adresse.</p>
  <br>
</div>


<script type="text/javascript" src="../projects/js/functions.js"></script>
<div class="container">
    <div id="firebaseui-auth-container"></div>
</div>


<div style="text-align: center;">
  <!-- Sign out -->
  <br>
  <button id="sign-out-btn" onclick="signOut()" style="width: 200px; height: 50px;">Ausloggen</button>
  <br>
  <!-- Remove account -->
  <button id="remove-account-btn" onclick="removeAccount()" style="width: 200px; height: 50px;">Account löschen</button>
</div>

<!-- Include necessary JavaScript files -->

<script type="module" src="https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"></script>
<script type="module" src="https://www.gstatic.com/firebasejs/7.7.0/firebase-storage.js"></script>
<script type="module" src="https://www.gstatic.com/firebasejs/7.7.0/firebase-database.js"></script>
<script type="module" src="https://www.gstatic.com/firebasejs/7.7.0/firebase-auth.js"></script>
<script type="module" src="https://www.gstatic.com/firebasejs/7.7.0/firebase-firestore.js"></script>
<script type="module" src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth__de.js"></script>
<link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />
<script type="module" src="../projects/js/firebase.js"></script>
