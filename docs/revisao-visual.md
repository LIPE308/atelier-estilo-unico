# Atelier Estilo Único — revisão visual
Data: 14/10/2026

## Auditoria e direção
A base existente usa HTML, CSS e JavaScript nativos, sem framework, pacote de dependências, build ou suíte de testes. O hero em duas colunas com imagem em arco, a pouca variação de contraste e a repetição do ritmo entre seções limitavam a personalidade. Foram preservados o conteúdo comercial, os serviços com detalhes expansíveis, o orçamento guiado, as rotas de âncora, o WhatsApp, o telefone, o mapa, o Instagram, os metadados e os arquivos de imagem.

Direção escolhida: caderno de costura. Tipografia editorial em escala ampla, alinhamentos assimétricos, terracota inspirada na comunicação existente, linhas de molde em SVG e marcadores de capítulos. A associação com o trabalho manual emerge do conteúdo e dos materiais existentes.

## Referências acessadas
- [Anderson & Sheppard](https://www.anderson-sheppard.co.uk/bespoke/): composição escura, identidade tipográfica espaçada, entradas para bastidores, galeria e atendimento. Inspeção visual e leitura do DOM/CSS computado; o módulo principal apresentou indicador de carregamento. Aproveitado o princípio de contraste e narrativa de ofício.
- [Huntsman](https://www.huntsmansavilerow.com/pages/bespoke-tailoring): abertura cinematográfica com vídeo, tipografia serifada Garamond/Baskerville/Caslon, navegação por serviços e processo. Inspeção visual e CSS computado dos títulos, com escala observada de 40 px. Adaptado o foco no gesto manual com uma imagem existente e revelação por recorte, sem introduzir vídeo.
- [Studio Nicholson](https://www.studionicholson.com/): hierarquia em sans serif, escala discreta nos controles e mais ampla em áreas editoriais; composição de fotografia e texto no modal de newsletter observado. Leitura da estrutura pública e DOM/CSS computado. Aproveitada a contenção visual dos controles; não foi copiado o modal comercial.
- [Perfil público da empresa](https://portaldocasamento.com.br/fornecedores/perfil/brenda-stephanie-atelier-estilo-unico-af2c396f): confirma Brenda Stephanie, Rua dos Tupis, 449, Belo Horizonte e telefone (31) 99312-1498.
- [Instagram do atelier](https://www.instagram.com/atelie_estilounico/): a consulta direta não carregou. As publicações e imagens já presentes no repositório foram preservadas. Não foram adicionadas avaliações, preços, prazos ou garantias.

Engenharia reversa efetivamente usada: inspeção das páginas reais, hierarquia de títulos, fontes e tamanhos computados, presença de vídeo, estrutura de navegação e organização do conteúdo. Nenhum código proprietário, imagem ou material das referências foi reutilizado.

## Implementação
- Hero reorganizado em título amplo e faixa inferior assimétrica, com recorte da imagem original.
- SVG autoral com linha de molde; identidade e paleta base preservadas.
- Serviços em índice expansível com orientação clara.
- Galeria com contraste escuro, tipografia expressiva e destaques existentes.
- Processo em sequência vertical, em vez da grade de três blocos.
- Contato com composição tipográfica BH / 449 e orçamento guiado preservado.
- Entradas coordenadas em CSS, revelação única por IntersectionObserver e microinterações em links e botões.
- prefers-reduced-motion desativa animações e scroll suave; o JavaScript respeita a mesma preferência.
- Sem novas dependências. GSAP, REA/RERA e ferramentas específicas de extração de UI não foram encontrados entre os recursos expostos/inspecionados; não se afirma seu uso.

## Validação
- Navegador: inspeção da base e da revisão em desktop e mobile, com capturas.
- Larguras conferidas: 320, 390, 768, 1024 e 1440 px; sem overflow horizontal do documento.
- Menu mobile abre, navega e fecha; detalhe de customização abre.
- Orçamento testado com Vestido + Customização: mensagem correta e link de continuação exibido quando o popup não abriu. Nenhuma mensagem foi enviada.
- Imagens da galeria carregadas, inclusive as três imagens lazy. Âncoras de serviços e trabalhos testadas. URLs de WhatsApp, telefone, mapa e Instagram preservadas.
- Sem erros ou avisos capturados no console da prévia pública durante a verificação.
- node --check em dist/app.js e server.mjs: aprovado.
- O projeto é estático: não há comando de build ou suíte de testes para executar; dist/ já é o resultado publicável.
- Movimento reduzido foi implementado e inspecionado no código; não houve emulação dessa preferência no navegador.

## Publicação e limites
Prévia temporária verificada no navegador:
https://itunes-latinas-consciousness-sweet.trycloudflare.com

O túnel usa o cloudflared oficial, versão 2026.10.0, com SHA-256 conferido contra a release oficial. A prévia depende do servidor local e do túnel em execução; não é hospedagem permanente. [Documentação do Cloudflare](https://developers.cloudflare.com/tunnel/get-started/quick-tunnels/).

O site existente em Sites tem acesso privado e não foi alterado para público. Sua publicação permanente não foi concluída: o helper oficial não conseguiu acessar o repositório interno git.chatgpt-team.site a partir do processo usado. O envio de entrada ao helper pela ferramenta de terminal também foi rejeitado pela política automática de aprovação. A alternativa utilizada para a prévia é o túnel solicitado; o código revisado é salvo no GitHub pela integração conectada.

A resolução e os enquadramentos continuam limitados pelas imagens originais. Uma sessão de fotografia autorizada do atelier permitiria substituir os recortes de publicações por fotos próprias em maior resolução.
