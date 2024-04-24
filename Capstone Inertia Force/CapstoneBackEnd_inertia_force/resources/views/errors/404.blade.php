<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 Not Found</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!-- CSS personalizzato -->
    <link rel="stylesheet" href="/css/app.css">

    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
</head>
<body class="d-flex justify-content-center align-items-center" style="min-height: 100vh; background-color: #e0dfd5;">
    <div class="container">
        <div class="row p-5">
            <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <img src="{{ asset('404img.png') }}" alt="workinprogress" class="img-fluid rounded" style="max-width: 100%;">
            </div>
            <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <div class="p-3 text-center" style="background-color: #e8e9eb; border-radius: 2rem; border: 2px solid #f06543; box-shadow: -4px 4px 10px rgba(28, 50, 78, 0.25);">
                    <h1>404 - Not Found</h1>   
                    <p class="fs-3">
                        OPS! Questo non sembra affatto un orto! <br>
                        <a href="/" class="linkgeneric">Presto, ritorna su NonnOrto</a>!
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- Stili CSS interni -->
    <style>
        * {
            cursor: url("{{ asset('cursor.png') }}"), auto !important;
        }
        body {
            font-family: 'Josefin Sans', sans-serif;
        }
        .container {
            padding: 20px;
        }
        .p-5 {
            padding: 3rem !important;
        }
        .img-fluid {
            width: 100%;
            height: auto;
        }
        .linkgeneric {
            color: #f06543;
            font-weight: bold;
            text-decoration: underline;
        }
        .linkgeneric:hover {
            color: #036d19 !important;
            cursor: url("{{ asset('cursor_hover.png') }}"), auto !important;
        }
    </style>
</body>
</html>
