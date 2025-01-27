# Inline Styles CSS

## O que é

São estilos CSS que são aplicados diretamente no elemento HTML, sem a necessidade de um arquivo CSS externo.

## Como usar

Para aplicar um estilo inline, basta adicionar o atributo `style` no elemento HTML e passar um objeto com as propriedades CSS desejadas.

```jsx
const style = {
  color: 'red',
  fontSize: '20px',
};

function App() {
  return <h1 style={style}>Hello, world!</h1>;
}
// Ou 

function App() {
  return <h1 style={{color: 'red', fontSize: '20px'}}>Hello, world!</h1>;
}
```
