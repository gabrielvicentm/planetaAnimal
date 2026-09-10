# planetaAnimal

## Organizacao do CSS

- `css/base.css`: estilos compartilhados, cabecalho, menu, rodape e estrutura geral.
- `css/index.css`: carrossel, cards e demais secoes da pagina inicial.
- `css/contato.css`: canais de atendimento, mapa, loja e horarios da pagina de contato.

Todas as paginas carregam `base.css` primeiro. A inicial e o contato carregam
tambem seu proprio arquivo CSS depois da base. As regras para celular ficam
no arquivo correspondente. Para estilizar outra pagina, crie seu arquivo em
`css/` e adicione o link depois de `base.css` no HTML.
