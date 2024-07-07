<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tipos Primitivos PHP</title>
</head>
<body>
    <h1>Teste de Tipos Primitivos</h1>
    <?php
        // 0x = hexadecimal | 0b = binário | 0 = Octal 
        // $num = 010;
        // echo "O valor da variável é $num";

        // $v = true;
        // var_dump($v);

        // $num = (int) 3e2; // 3 x 10(2)
        // echo "O valor é $num";
        // var_dump($num);

        // $num = (int) "950";
        // var_dump($num);

        // $casado = false; // no Echo as variaveis booleanas possuem o  valor false como vazio 
        // print "O valor para casado é $casado";

        // $vet = [6, 2, 9, 3, 5];
        // echo "$vet[3]";

    class Pessoa {
        private string $nome;
    }

    $p = new Pessoa;
    var_dump($p);

        #Tipos Compostos: Array e Object
        #Tipos Especiais: null, resource, callabe e mixed(Tipo que representa todos os outros tipos primitivos).
    ?>
</body>
</html>