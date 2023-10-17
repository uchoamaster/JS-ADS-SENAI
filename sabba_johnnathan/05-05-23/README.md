## Fichamento sobre Fetch API, Verbos HTTP e URL Encoding:

### Fetch API:
A Fetch API é uma interface JavaScript moderna que fornece um conjunto de métodos para fazer requisições HTTP e lidar com as respostas. É uma alternativa mais poderosa e flexível para a antiga XMLHttpRequest.

Características principais da Fetch API:
- Oferece uma maneira simplificada e consistente de fazer requisições e receber respostas HTTP.
- Suporta Promises, permitindo um tratamento mais fácil e limpo de assincronismo.
- Possibilita a manipulação de headers de requisição e resposta.
- Permite controlar o tipo de dado enviado ou recebido, como JSON, FormData, Blob, etc.
- Fornece métodos para lidar com uploads e downloads de arquivos.

### Verbos HTTP:
Os verbos HTTP são utilizados para indicar a intenção do cliente ao realizar uma requisição para um servidor. Os principais verbos são:

- GET: Solicita a obtenção de um recurso no servidor. As respostas geralmente são cacheáveis e não devem alterar o estado do servidor.
- POST: Envia dados para o servidor para criação de um novo recurso. O corpo da requisição contém os dados a serem processados pelo servidor.
- PUT: Substitui todas as representações atuais do recurso segmentado pela URI fornecida com os dados fornecidos na requisição.
- DELETE: Remove um recurso no servidor identificado pela URI fornecida.
- PATCH: Atualiza parcialmente um recurso no servidor identificado pela URI fornecida. A requisição contém apenas os campos atualizados.

Os verbos HTTP são essenciais para determinar a ação que será realizada sobre o recurso identificado pela URL.

### URL Encoding:
URL Encoding é um processo de transformação de caracteres especiais em suas representações ASCII para serem utilizados em uma URL. Isso ocorre porque algumas URLs não podem conter certos caracteres especiais, como espaços, pontos de interrogação e hashtags.

Durante a URL encoding, os caracteres especiais são substituídos pelo caractere "%" seguido por dois dígitos hexadecimais, correspondendo ao valor ASCII do caractere. Por exemplo, o espaço é codificado como "%20" e o ponto de interrogação como "%3F".

O URL encoding é importante para garantir a formatação correta das URLs e evitar erros no momento de fazer requisições HTTP ou manipular parâmetros de URL.

