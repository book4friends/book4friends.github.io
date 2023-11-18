---
layout: page
title: Message details
permalink: /message_details/
description:
nav: true
nav_order:
display_categories:
horizontal: false
---

<html>
<head>
    <title>Image Details</title>
    <link rel="stylesheet" type="text/css" href="../projects/css/style.css">
</head>

<script type="text/javascript" src="../projects/js/functions.js"></script>

<body>
    <div id="image-container"></div>

    <script type="module" src="../projects/js/firebase.js"></script>

    <script>
        window.addEventListener("load", function() {
            display_image_container();
        });
    </script>
</body>
</html>