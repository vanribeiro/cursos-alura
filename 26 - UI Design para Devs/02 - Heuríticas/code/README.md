
# Meteora - E-commerce

![Descrição da sua imagem](https://imgur.com/FRNyIaw.png)

## 🔨 Funcionalidades do projeto

Loja de roupas virtual com opção de visualizar detalhes dos produtos, adicionar ao carrinho e remover do carrinho.

## ✔️ Técnicas e tecnologias utilizadas

As técnicas e tecnologias utilizadas pra isso são:

- `HTML`: para construir os elementos visuais da tela
- `CSS`: para estilizar os elementos
- `JavaScript`: para imprimir itens na tela e permitir interações dinâmicas no projeto

## 📁 Acesso ao projeto

Você pode [acessar o código fonte do projeto inicial](https://github.com/monicahillman/3826-heuristicas/) ou [baixá-lo](https://github.com/monicahillman/3826-heuristicas/archive/refs/heads/projeto-base.zip).

## 🛠️ Abrir e rodar o projeto

Após baixar o projeto, você pode abrir com o Visual Studio Code. Para isso, no menu superior, clique em:

File > Open Folder (ou alguma opção similar)
Procure o local onde o projeto está e o selecione (Caso o projeto seja baixado via zip, é necessário extraí-lo antes de procurá-lo)
Por fim clique em OK
Ao finalizar esses passos, você pode executar a aplicação com a extensão Live Server 🏆

## Notas para Van Ribeiro

As dependências abaixo foram adicionadas devido a problemas de conexão e acesso a CDN.

### Caso dê erro ao rodar local

#### Opção 1 - remover os imports

As linhas abaixo, que estão nos arquivos `.html`, usam depedências locais, que foram adicionadas ao `.gitignore`, devido a quantidade e tamanhos dos arquivos.
Caso dê erro ao usar esse `repo` em outro máquina local, podem ser deletas, pois o CDNs estão diponíveis também no código.

```html
    <!-- HEAD -->
    <link rel="stylesheet" href="./css/font-face.css">
    <link rel="stylesheet" href="./lib/bootstrap-icons-1.11.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./lib/bootstrap-5.3.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/estilos.css">

    <!-- Final BODY -->
    <script src="./lib/bootstrap-5.3.3/js/bootstrap.bundle.min.js"></script>
```

#### Opção 2 - adicionar as dependências locais

Caso opte por usar as dependências de forma local, basta adicionar as depências abaixo:

  1. Crie uma basta chamada `lib`
  2. Baixe, descompacte e adicione as dependências listadas:
     1. [bootstrap](https://github.com/twbs/bootstrap/releases/download/v5.3.3/bootstrap-5.3.3-dist.zip)
     2. [bootstrap-icon](https://github.com/twbs/icons/releases/download/v1.11.3/bootstrap-icons-1.11.3.zip)
     3. [Inter](https://fonts.google.com/specimen/Inter)

Caso deseje usar o mesmo caminho, a pasta deve ter a estrutura abaixo:

- `/lib`
  - `/bootstrap-5.3.3`
  - `/bootstrap-icon-1.11.3`
  - `/fonts`
    - `/Inter`
