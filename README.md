# car-list-api
API desenvolvida como trabalho prático durante o modulo 1 do bootcamp "Desenvolvedor Backend NodeJS" do IGTI

## Rotas
* (GET) /marcas/maisModelos 
    - Retorna uma string com a marca que possui mais modelos criados ou um vetor casa ocorra um empate
* (GET) /marcas/menosModelos
    - Retorna uma string com a marca que possui menos modelos criados ou um vetor casa ocorra um empate
* (GET) /marcas/ListarMaisModelos/X
    - Retorna um vetor com as "X" marcas que mais possuem modelos.  
    - Segue o formato "[ 'Marca - 10', 'Marca1 - 2']"
* (GET) /marcas/ListarMenosModelos/X
    - Retorna um vetor com as "X" marcas que menos possuem modelos.  
    - Segue o formato "[ 'Marca - 1', 'Marca1 - 5']"
* (POST) /marcas/listarModelos
    - Retorna os modelos da marca recebida no corpo da requisição pelo atributo "nomeMarca"

    "X" é um número inteiro passado como parâmetro para as rotas