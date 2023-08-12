## Fichamento sobre eventos em JavaScript:

### Eventos Inline:
Os eventos inline são atribuídos diretamente a elementos HTML, utilizando o atributo `on` seguido do nome do evento e do código JavaScript a ser executado. Alguns exemplos de eventos inline são:

- `onBlur`: É acionado quando um elemento perde o foco. Por exemplo: `<input type="text" onblur="console.log('Perdeu o foco')"/>`.
- `onChange`: É acionado quando o valor de um elemento é alterado. Por exemplo: `<select onchange="console.log('Valor alterado')">...</select>`.
- `onClick`: É acionado quando um elemento é clicado. Por exemplo: `<button onclick="console.log('Clicou no botão')">Clique aqui</button>`.
- `onFocus`: É acionado quando um elemento ganha o foco. Por exemplo: `<input type="text" onfocus="console.log('Ganhou o foco')"/>`.
- `onKeyPress`: É acionado quando uma tecla é pressionada enquanto um elemento está focado. Por exemplo: `<input type="text" onkeypress="console.log('Tecla pressionada')"/>`.
- `onLoad`: É acionado quando uma página ou recurso é completamente carregado. Por exemplo: `<body onload="console.log('Página carregada')"/>`.
- `onMouseOver`: É acionado quando o cursor do mouse entra em um elemento. Por exemplo: `<div onmouseover="console.log('Mouse sobre o elemento')"/>`.
- `onMouseOut`: É acionado quando o cursor do mouse sai de um elemento. Por exemplo: `<div onmouseout="console.log('Mouse fora do elemento')"/>`.
- `onSubmit`: É acionado quando um formulário é submetido. Por exemplo: `<form onsubmit="console.log('Formulário enviado')">...</form>`.

### Eventos Externos:
Os eventos externos são atribuídos aos elementos HTML por meio do JavaScript, utilizando a função `addEventListener` para vincular o evento ao elemento e especificar a função a ser executada. Alguns exemplos de eventos externos são:

```javascript
    const elemento = document.querySelector('#meu-elemento');

    elemento.addEventListener('blur', function() {
        console.log('Perdeu o foco');
    });

    elemento.addEventListener('change', function() {
        console.log('Valor alterado');
    });

    elemento.addEventListener('click', function() {
        console.log('Clicou no elemento');
    });

// E assim por diante...
```

Dessa forma, os eventos são tratados separadamente do código HTML, tornando o código mais organizado e flexível para adicionar ou remover eventos posteriormente.

---
