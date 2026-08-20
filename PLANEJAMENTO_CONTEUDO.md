# Planejamento de conteúdo — Site Planeta Animal

Este documento organiza o conteúdo e as funcionalidades que ainda precisam ser desenvolvidos no site institucional da Planeta Animal. Ele também serve como referência para dividir as tarefas entre os integrantes do grupo.

## 1. Objetivo do projeto

Desenvolver um site institucional responsivo para a Planeta Animal utilizando somente HTML5, CSS3 e JavaScript, sem frameworks e sem backend.

O site deverá:

- Apresentar a empresa e sua história;
- Divulgar produtos e serviços;
- Facilitar o contato e o agendamento;
- Informar endereço e horários de atendimento;
- Responder às dúvidas mais frequentes;
- Funcionar em celulares, tablets e computadores;
- Ter navegação simples, acessível e coerente em todas as páginas.

## 2. Informações que precisam ser confirmadas

Antes de publicar o site, será necessário confirmar alguns dados com o proprietário:

- Número correto do WhatsApp;
- Se o telefone `(19) 3673-3053` também recebe mensagens ou se é somente fixo;
- Se a empresa realmente oferece atendimento de clínica veterinária;
- Quais serviços veterinários são oferecidos, caso existam;
- Quais espécies são atendidas;
- O documento afirma que são atendidos somente cães e gatos, mas a logo também apresenta um peixe;
- Lista completa dos serviços de banho e tosa;
- Necessidade de agendamento prévio;
- Regras para atraso ou cancelamento;
- Necessidade de carteira de vacinação;
- Formas de pagamento aceitas;
- Existência de entrega de produtos ou transporte dos animais;
- Existência de estacionamento;
- Principais marcas comercializadas;
- Orientação oficial para emergências fora do horário;
- História da fundação da empresa;
- Nome completo de todos os integrantes do grupo.

Nenhuma informação não confirmada deve ser apresentada como verdadeira no site.

## 3. Materiais que devem ser solicitados

- Logo em PNG com fundo transparente, se estiver disponível;
- Fotos da fachada;
- Fotos do interior da loja;
- Fotos da equipe;
- Fotos do espaço de banho e tosa;
- Fotos dos serviços sendo realizados, com autorização dos responsáveis pelos animais;
- Fotos das principais categorias de produtos;
- Relato do proprietário sobre a história da empresa;
- Lista oficial de serviços;
- Lista das marcas vendidas;
- Link oficial da localização no Google Maps;
- Número e link oficiais do WhatsApp;
- Autorização para utilizar as imagens e informações fornecidas.

## 4. Estrutura comum de todas as páginas

Todas as páginas devem manter o mesmo cabeçalho, identidade visual e rodapé.

### 4.1 Navbar

A navbar deve conter:

- Logo da Planeta Animal com link para a página inicial;
- Início;
- Sobre nós;
- Serviços;
- Produtos;
- Dúvidas frequentes;
- Contato;
- Botão destacado “Agendar pelo WhatsApp”.

Comportamentos necessários:

- Indicar visualmente a página atual;
- Permanecer legível em qualquer tamanho de tela;
- Transformar-se em menu hambúrguer em telas menores;
- Abrir e fechar pelo teclado;
- Fechar ao pressionar `Esc`;
- Utilizar atributos de acessibilidade como `aria-expanded` e `aria-current`;
- Exibir foco visível para quem navega pelo teclado.

### 4.2 Footer

O rodapé deve conter:

- Logo e nome da empresa;
- Frase institucional;
- Links rápidos;
- Telefone;
- WhatsApp;
- Instagram;
- Horários de atendimento;
- Endereço completo;
- Link “Como chegar”;
- Direitos autorais;
- Nomes dos integrantes responsáveis pelo desenvolvimento.

Conteúdo provisório:

- Segunda a sexta-feira: 08h às 17h30;
- Sábado: 08h às 12h;
- Telefone: `(19) 3673-3053`;
- Instagram: `@planetaanimaltambau`;
- Endereço: Rua Cel. José Bitencourt, 98, Centro, Tambaú-SP.

Essas informações deverão ser verificadas antes da publicação.

## 5. Página inicial

A página inicial deve apresentar um resumo das informações mais importantes e encaminhar o visitante para as páginas internas.

### 5.1 Carrossel rotativo de destaques

O “menu rotativo” será implementado como um carrossel de banners na área principal da página inicial.

Sugestão de slides:

1. **Apresentação da empresa**
   - Título: “Tudo para o bem-estar do seu melhor amigo”;
   - Texto curto sobre a Planeta Animal;
   - Botão “Conheça a Planeta Animal”;
   - Imagem da fachada, equipe ou de um animal.

2. **Banho e tosa**
   - Título relacionado aos cuidados com o animal;
   - Descrição curta do serviço;
   - Botão “Conheça nossos serviços”;
   - Foto real do espaço ou do atendimento.

3. **Produtos**
   - Destaque para rações, petiscos, acessórios, brinquedos e higiene;
   - Botão “Ver produtos”;
   - Foto das prateleiras ou dos produtos.

4. **Contato e agendamento**
   - Chamada para entrar em contato;
   - Horário resumido;
   - Botão “Falar pelo WhatsApp”;
   - Imagem adequada à comunicação.

Requisitos do carrossel:

- Ser feito somente com HTML, CSS e JavaScript;
- Trocar automaticamente de slide;
- Ter botões de próximo e anterior;
- Ter indicadores que permitam selecionar um slide;
- Pausar a rotação quando o mouse estiver sobre o carrossel;
- Pausar quando um controle interno receber foco pelo teclado;
- Permitir navegação pelo teclado;
- Informar corretamente o slide atual para tecnologias assistivas;
- Respeitar a configuração `prefers-reduced-motion` do dispositivo;
- Não utilizar textos dentro das imagens;
- Manter título, texto e botão como elementos HTML;
- Utilizar imagens otimizadas para não prejudicar o carregamento;
- Evitar mudanças de altura entre os slides;
- Funcionar corretamente em celulares;
- Ter contraste suficiente entre o texto e a imagem;
- Oferecer alternativa caso o JavaScript esteja desativado, deixando ao menos o primeiro slide visível.

Tempo inicial sugerido para a rotação automática: entre cinco e sete segundos. Esse valor poderá ser ajustado após os testes.

### 5.2 Categorias principais

Criar cards para:

- Banho e tosa;
- Rações e petiscos;
- Acessórios;
- Brinquedos;
- Medicamentos e higiene.

Cada card poderá conter:

- Imagem;
- Título;
- Descrição curta;
- Link para Serviços ou Produtos.

### 5.3 Tradição da empresa

Criar uma seção destacando:

- 21 anos de atuação;
- Experiência no mercado local;
- Atendimento próximo;
- Confiança construída com a comunidade de Tambaú.

Possível título: “Há mais de duas décadas cuidando dos animais de Tambaú”.

### 5.4 Serviços em destaque

Apresentar um resumo dos principais serviços confirmados e incluir um botão para a página Serviços.

### 5.5 Chamada para contato

Incluir:

- Texto convidando o visitante a entrar em contato;
- Telefone;
- Horário de atendimento;
- Botão de WhatsApp;
- Aviso de que o horário depende da confirmação da equipe.

### 5.6 Localização resumida

Apresentar:

- Endereço;
- Mapa ou prévia da localização;
- Botão “Como chegar”.

## 6. Página Sobre nós

### 6.1 Apresentação

Explicar:

- O que é a Planeta Animal;
- Onde está localizada;
- Há quanto tempo atua;
- Quais produtos e serviços oferece;
- Qual público atende.

### 6.2 História

O texto deverá responder:

- Como a empresa começou;
- Quem a fundou;
- Por que foi criada;
- Como evoluiu durante seus 21 anos;
- Como construiu sua relação com Tambaú;
- Quais foram os momentos importantes da empresa.

Essas informações precisam ser obtidas em uma conversa com o proprietário.

### 6.3 Missão, visão e valores

Sugestão inicial, sujeita à aprovação:

- **Missão:** oferecer produtos e cuidados que contribuam para a saúde e o bem-estar dos animais;
- **Visão:** continuar sendo uma referência de confiança no segmento pet em Tambaú;
- **Valores:** respeito aos animais, confiança, qualidade, responsabilidade e bom atendimento.

### 6.4 Diferenciais

Possíveis destaques:

- 21 anos de experiência;
- Atendimento próximo e personalizado;
- Produtos selecionados;
- Cuidados para cães e gatos;
- Conhecimento do mercado local;
- Facilidade de contato e agendamento.

### 6.5 Galeria

Utilizar fotos reais da fachada, interior, equipe, produtos e serviços. As imagens devem possuir texto alternativo adequado.

## 7. Página Serviços

### 7.1 Introdução

Explicar os cuidados oferecidos, os animais atendidos, a importância da higiene e a forma de agendamento.

### 7.2 Cards dos serviços

Criar um card para cada serviço confirmado. Possibilidades que ainda precisam ser verificadas:

- Banho;
- Tosa completa;
- Tosa higiênica;
- Tosa específica por raça;
- Corte de unhas;
- Limpeza de ouvidos;
- Escovação;
- Serviços veterinários, caso realmente existam.

Cada card deverá conter:

- Nome;
- Descrição;
- Animais atendidos;
- Imagem;
- Orientação para agendamento.

### 7.3 Como funciona

Possível passo a passo:

1. Cliente entra em contato;
2. Informa os dados do animal e o serviço desejado;
3. Escolhe uma data disponível;
4. Aguarda a confirmação da equipe;
5. Leva o animal no horário combinado;
6. Retira o animal após a conclusão.

O processo precisa ser confirmado com o proprietário.

### 7.4 Informações importantes

Verificar e informar:

- Necessidade de agendamento;
- Regras para atrasos e cancelamentos;
- Necessidade de carteira de vacinação;
- Restrições de atendimento;
- Cuidados antes do serviço;
- Formas de pagamento.

### 7.5 Chamada para agendamento

Adicionar telefone, WhatsApp, horários e aviso de que o envio de uma mensagem não confirma automaticamente o agendamento.

## 8. Página Produtos

O site será apenas institucional. Não haverá carrinho, pagamento, login ou compra online.

### 8.1 Introdução

Explicar que a empresa possui produtos selecionados e que preços e disponibilidade devem ser consultados diretamente.

### 8.2 Categorias

#### Rações e petiscos

- Rações para cães;
- Rações para gatos;
- Opções para diferentes idades e portes;
- Petiscos;
- Rações terapêuticas, somente se forem comercializadas.

#### Acessórios

- Coleiras;
- Guias;
- Roupas;
- Comedouros;
- Bebedouros;
- Camas e caixas de transporte, caso disponíveis.

#### Brinquedos

- Brinquedos para cães;
- Brinquedos para gatos;
- Itens de entretenimento e enriquecimento.

#### Medicamentos e higiene

- Shampoos;
- Produtos de higiene;
- Antipulgas;
- Medicamentos.

O site não deve prescrever medicamentos. Quando necessário, deverá orientar o visitante a procurar um profissional veterinário.

### 8.3 Cards de produtos

Cada card poderá conter:

- Imagem;
- Nome da categoria;
- Descrição;
- Botão “Consultar disponibilidade”.

Não é recomendado publicar preços, pois eles mudam e exigiriam manutenção constante.

### 8.4 Marcas

Após autorização, poderá ser criada uma área com as principais marcas comercializadas.

## 9. Página Dúvidas frequentes

O FAQ poderá ser apresentado como um acordeão controlado por JavaScript.

Perguntas previstas:

1. Qual é o endereço da loja?
2. Quais espécies de animais são atendidas?
3. Qual é o horário de funcionamento?
4. Como agendar um serviço?
5. O que fazer em caso de emergência fora do horário?
6. É necessário agendar banho e tosa?
7. Quais formas de pagamento são aceitas?
8. Existe estacionamento?
9. A empresa busca ou entrega o animal?
10. É necessário apresentar carteira de vacinação?
11. É possível reservar produtos pelo WhatsApp?
12. A Planeta Animal oferece atendimento veterinário?
13. A empresa vende medicamentos?
14. É possível consultar preços pelo WhatsApp?

Requisitos do acordeão:

- Abrir e fechar com clique ou teclado;
- Utilizar botões HTML reais;
- Atualizar `aria-expanded`;
- Mostrar claramente qual pergunta está aberta;
- Funcionar sem animações excessivas;
- Manter as respostas disponíveis no HTML para acessibilidade e mecanismos de busca.

A resposta sobre emergências deve ser escrita com cuidado. Se não houver plantão, o site deverá informar isso claramente e orientar a busca por atendimento veterinário de emergência.

## 10. Página Contato

### 10.1 Informações

- Telefone;
- WhatsApp;
- Instagram;
- Endereço completo;
- Horários;
- Mapa.

### 10.2 Botões diretos

- Ligar agora;
- Abrir WhatsApp;
- Abrir Instagram;
- Ver rota no Google Maps.

### 10.3 Formulário sem backend

Como o projeto não terá backend, o formulário poderá montar uma mensagem e abrir o WhatsApp.

Campos sugeridos:

- Nome do cliente;
- Telefone;
- Nome do animal;
- Espécie;
- Assunto;
- Mensagem.

O JavaScript deverá:

- Validar os campos obrigatórios;
- Exibir mensagens de erro claras;
- Montar uma mensagem organizada;
- Codificar o texto corretamente na URL;
- Abrir o WhatsApp em uma nova aba;
- Não armazenar os dados preenchidos.

Adicionar o aviso: “O envio da mensagem não confirma o agendamento. Aguarde a confirmação da equipe.”

### 10.4 Mapa

Incorporar o Google Maps ou apresentar uma imagem leve da localização com um link externo. O mapa deve possuir título acessível.

## 11. Identidade visual e imagens

A paleta inicial é baseada na logo:

- Vermelho como cor principal;
- Amarelo para destaques;
- Azul em detalhes;
- Preto para textos e rodapé;
- Fundos claros para manter a leitura confortável.

Cuidados necessários:

- Não utilizar todas as cores fortes em grandes áreas ao mesmo tempo;
- Garantir contraste de texto;
- Manter os mesmos estilos de botão e card;
- Otimizar imagens antes de colocá-las no site;
- Utilizar formatos como WebP quando possível;
- Informar largura e altura das imagens para evitar mudanças no layout;
- Criar textos alternativos úteis;
- Evitar imagens genéricas quando houver fotos reais da empresa.

## 12. Requisitos gerais de qualidade

- HTML semântico;
- Um único `h1` por página;
- Hierarquia correta de títulos;
- CSS compartilhado;
- JavaScript compartilhado quando possível;
- Navegação por teclado;
- Foco visível;
- Contraste adequado;
- Layout responsivo;
- Imagens otimizadas;
- Links externos abrindo de forma segura;
- Metadados de título e descrição específicos por página;
- Revisão ortográfica;
- Testes em celulares, tablets e computadores;
- Teste de todos os links;
- Nenhuma informação inventada;
- Nenhuma dependência de backend.

## 13. Sugestão de divisão do trabalho

A divisão abaixo pode ser ajustada de acordo com a quantidade de integrantes e a experiência de cada pessoa.

### Frente 1 — Página inicial e carrossel

Responsabilidades:

- Criar o conteúdo da página inicial;
- Implementar o carrossel;
- Criar controles, indicadores e rotação automática;
- Garantir responsividade e acessibilidade;
- Desenvolver seções de categorias, tradição, contato e localização.

Dependências:

- Fotos da empresa;
- Textos aprovados;
- Número do WhatsApp.

### Frente 2 — Sobre nós e conteúdo institucional

Responsabilidades:

- Entrevistar o proprietário;
- Escrever e revisar a história;
- Definir missão, visão e valores;
- Montar diferenciais;
- Organizar a galeria de fotos;
- Confirmar todas as informações institucionais.

### Frente 3 — Serviços e Produtos

Responsabilidades:

- Confirmar a lista completa de serviços;
- Produzir cards e descrições;
- Organizar o passo a passo do atendimento;
- Criar as categorias de produtos;
- Levantar marcas e fotografias;
- Adicionar chamadas para contato.

### Frente 4 — FAQ, Contato e integração com WhatsApp

Responsabilidades:

- Confirmar e escrever as respostas do FAQ;
- Implementar o acordeão acessível;
- Criar a página de contato;
- Criar a validação do formulário;
- Montar a mensagem automática para WhatsApp;
- Adicionar mapa e links externos.

### Frente 5 — Revisão e integração

Esta responsabilidade pode ser compartilhada pelo grupo:

- Padronizar navbar e footer;
- Verificar se os códigos de diferentes integrantes seguem o mesmo estilo;
- Resolver conflitos entre arquivos;
- Revisar textos;
- Testar responsividade;
- Testar acessibilidade;
- Testar links;
- Comprimir imagens;
- Fazer a revisão final antes da apresentação.

## 14. Regras para o trabalho em grupo

- Cada pessoa deverá trabalhar apenas nos arquivos combinados;
- Alterações no CSS compartilhado deverão ser comunicadas ao grupo;
- Classes CSS devem ter nomes claros e específicos;
- Evitar estilos dentro dos arquivos HTML;
- Evitar JavaScript dentro dos arquivos HTML;
- Não duplicar funções já existentes no `main.js`;
- Antes de integrar uma página, atualizar a versão local do projeto;
- Testar a página antes de entregá-la;
- Não modificar navbar ou footer isoladamente em apenas uma página;
- Registrar informações ainda não confirmadas como pendências, e não como fatos;
- Manter a mesma estrutura de pastas definida no projeto.

## 15. Ordem recomendada

1. Confirmar os dados pendentes com o proprietário;
2. Reunir e organizar fotos e materiais;
3. Desenvolver a página inicial e o carrossel;
4. Desenvolver Sobre nós;
5. Desenvolver Serviços;
6. Desenvolver Produtos;
7. Desenvolver Dúvidas frequentes;
8. Desenvolver Contato e WhatsApp;
9. Revisar navbar e footer em todas as páginas;
10. Otimizar imagens;
11. Testar responsividade e acessibilidade;
12. Revisar textos e informações;
13. Publicar e realizar o teste final.

## 16. Critérios para considerar uma página pronta

Uma página somente deverá ser marcada como concluída quando:

- Seu conteúdo estiver completo e aprovado;
- Não houver informações não confirmadas;
- Funcionar em celular e computador;
- Todos os links funcionarem;
- As imagens estiverem otimizadas;
- Possuir título e descrição próprios;
- Funcionar por teclado;
- Não apresentar erros no console do navegador;
- Manter o mesmo padrão visual das outras páginas;
- Tiver sido revisada por pelo menos outro integrante do grupo.
