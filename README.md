# eColeta-nlw-1
Projeto construído durante o Next Level Week 1.0, evento criado pela Rocketseat

![alt](Capa.png)

# Next Level Week 1.0
>O NLW é uma experiência online com
muito conteúdo prático, desafios e
hacks que vão te ajudar a avançar para
o próximo nível. 

# O projeto
Aplicação web e mobile para criação e localização de pontos de coleta de resíduos orgânicos e inorgânicos para o seu correto descarte ou reciclagem.

## Tecnologias utilizadas durante o desenvolvimento
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Knex](http://knexjs.org/)
- [Express](https://expressjs.com/pt-br/)

## Banco de dados
 - [SQLite](https://www.sqlite.org/index.htmllink)

## API's externas utilizadas
Foram utilizadas as API's do IBGE para obter a lista de UF's e municípios conforme links abaixo:
- [UF's](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)
- [Municípios por UF](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet)

## Design
O design do projeto foi feito pela Rocketseat e se encontra disponível no [Figma](https://www.figma.com/file/Byw4X5etg8VCmezueyhzkC/Ecoleta-(Starter)?node-id=136%3A546).

## Pastas
Pasta | Descrição
------|----------
**./server/** | Backend, fornece a API utilizada pelo aplicação web e mobile.
**./web/** | Aplicação web feita em React
**./mobile/** | Aplicação mobile feita em React Native

## Para utilizar o projeto

Para clonar e executar o projeto é necessário ter instalado / configurado em seu computador os itens abaixo:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

```
# Clonar o repositório
git clone https://github.com/JonyRidel/ecoleta-nlw-01.git

# Acessar a pasta do projeto
cd ecoleta-nlw-01

```

### API
```
# Acessar a pasta server (backend)
cd server

# Instalar as dependências do projeto
yarn install

# Executar as migrations para criar a estrutura do banco de dados
yarn knex:migrate

# Executar as seeds para popular a tabela de itêns
yarn knex:seed

# Para iniciar o servidor na porta 3333
yarn dev
```

### Web
```
# Acessar a pasta web (backend)
cd web

# Instalar as dependências do projeto
yarn install

# Para iniciar o servidor web na porta 3000
yarn start
```
### Mobile
```
# Acessar a pasta web (backend)
cd mobile

# Instalar as dependências do projeto
yarn install

# Para executar o Expo
yarn start

# Após o comando acima uma página web será aberta com o qrcode para iniciar a aplicação mobile em seu dispositivo, para a leitura desse qrcode o aplicativo 'Expo Client' para android ou ios deve estar instalado no dispositivo.

```
Caso tenha problemas com o Expo a Rocketseat disponibilizou um repostório com alguns erros (e suas soluções) que podem acontecer ao utilizar o mesmo.

[Expo Common Issues](https://github.com/Rocketseat/expo-common-issues)

# Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: git checkout -b minha-feature;
- Faça commit das suas alterações: git commit -m 'feat: Minha nova feature';
- Faça push para a sua branch: git push origin minha-feature.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

# Licença
Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.