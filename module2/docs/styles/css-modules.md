# CSS Modules

## Problema

Uma coisa que e bem problematica quando estamos utilizando CSS, é o conflito de classes.
Uma boa pratica é modularizar a aplicaçaõ, ou seja, criar um arquivo CSS para cada componente, porem isso pode gerar um problema de conflito de classes.
Como estamos utilizando o style loader e injetando na DOM, se dois arquivos ou mais tiverem a mesma classe, o CSS que for carregado por ultimo ira sobrescrever o anterior.

## Solução

- Para resolver esse problema, podemos utilizar o CSS Modules.
- A configuração é bem simples, no webpack, na aba de `module` e `rules`, adicionamos uma nova regra para arquivos CSS.

```js 
module: {
        rules: [
           // ... outras regras,
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
        ]
    },
```

- Isso ira fazer com que o webpack gere um hash para cada classe, evitando assim o conflito de classes.