---
layout: about
title: Book for Friends
permalink: /
subtitle: Teile Erinnerungen mit deinen Freunden
news: False  # includes a list of news items
latest_posts: false  # includes a list of the newest posts
selected_papers: False # includes a list of papers marked as "selected={true}"
social: false  # includes social icons at the bottom of the page
---

<html>
    <head>
        <title>Firebase Image Upload using HTML and JavaScript</title>
        <link rel="stylesheet" type="text/css" href="../projects/css/style.css">
    </head>

    <script type="text/javascript" src="../projects/js/functions.js"></script>
    
    <body>
        <div id="content" style="display: none;">
            <p class="user-info-container">
                <span id="welcome-text">Willkommen <span id="username-placeholder"></span></span>
            </p>

            <button id="redirectToSettings" class="btn">Einstellungen</button>

            <br>

            <div id="collapse-buttons">
                <div class="collapse-container">
                    <p>
                        <button class="btn btn-primary" onclick="openImageSelector()">Neuen Eintrag erstellen</button>
                    </p>

                    <div class="collapse" id="collapseSection" style="display:none;">
                        <input id="photo" style="visibility:hidden;" type="file" onchange="previewImage()">
                        <img id="preview" style="display: none;">

                        <div class="input-container">
                            <label for="userId">User ID:</label>
                            <input type="text" id="userId" name="userId" required>
                            <textarea id="description" placeholder="Text to friend"></textarea>
                            <!--input type="number" id="height" placeholder="Höhenmeter" /-->
                            <input type="date" id="date" placeholder="Datum" />
                        </div>

                        <div class="button-container">
                            <button id="upload" onclick="disableAndExecute()">Send entry to friend</button>
                            <div id="status" style="display: none; color: green; font-weight: bold;">Erfolgreich gespeichert!</div>
                        </div>

                        <div id="loading" style="display: none;">
                            Eintrag wird gespeichert, bitte warten...
                        </div>

                    </div>
                </div>
            </div>

            <p>Deine Einträge / Briefe</p>

            <ul id="content-container"></ul>

        </div>

    <div id="error-message" class="error-banner" style="display: none;">
        Du bist nicht angemeldet. Bitte <a href="../login/">hier anmelden</a>, um auf deine Daten zuzugreifen oder mit einem neuen Account zu starten.
    </div>

        <!-- Firebase SDK -->
        <script type="module" src="https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"></script>
        <script type="module" src="https://www.gstatic.com/firebasejs/7.7.0/firebase-storage.js"></script>
        <script type="module" src="https://www.gstatic.com/firebasejs/7.7.0/firebase-database.js"></script>
        <script type="module" src="https://www.gstatic.com/firebasejs/7.7.0/firebase-auth.js"></script>
        <script type="module" src="https://www.gstatic.com/firebasejs/7.7.0/firebase-firestore.js"></script>

        <script type="module" src="../projects/js/firebase.js"></script>

        <script>
            // Get a reference to the button element
            const redirectButton = document.getElementById('redirectToSettings');
            // Add a click event listener to the button
            redirectButton.addEventListener('click', function() {
            // Redirect to the new webpage
            window.location.href = 'settings.html';
            });
        </script>

        <script>
            window.addEventListener("load", function() {
                getUserData();
                getUserData_only_one();
                showimage_my_profile();
            });
        </script>
    </body>
</html>