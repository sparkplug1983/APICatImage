# Proyecto_Clase10_APICatImage
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheets' href="./css/styles.css">
    <title>Document</title>
</head>

<body>
    <di class="full-centered">
        <div id="myInfo">
            <h1>My Text</h1>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="./js/main.js"> </script>
    <script>
        axios
            .get('https://api.catboys.com/img')
            .then(response => console.log(response.data))
            .catch(error => console.log('Not resolved'))
            .finally(() => console.log('Resolve anyways'))
    </script>
</body>
</html>
