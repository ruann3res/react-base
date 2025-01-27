## Trabalhando com arquvios CSS no react para estilização

- Para trabalhar com arquivos CSS no React, basta importar o arquivo CSS no componente que deseja estilizar.
- Porem e necessário instalar o pacote `style-loader` e `css-loader` para que o webpack consiga interpretar o arquivo CSS.

```css
/* styles.css */
h1 {
  color: red;
}
```

```jsx
import './styles.css';

function App() {
  return <h1>Hello
}
```
