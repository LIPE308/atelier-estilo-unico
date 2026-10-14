# Movimento editorial

## Referências consultadas

- [Codrops — On-Scroll Letter Animations](https://tympanus.net/codrops/2021/01/20/on-scroll-letter-animations/): tipografia e direção de rolagem como parte da linguagem visual. Adaptado a títulos inteiros para manter a leitura.
- [Codrops — SlicedTextEffect](https://github.com/codrops/SlicedTextEffect): referência conceitual de revelação de texto por recorte. Nenhum código ou material da demonstração foi copiado.
- [GSAP — ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/): modelo de entrada, saída e retorno ao viewport. Implementação própria com IntersectionObserver, CSS e Web Animations API; sem adicionar GSAP.
- [MDN — Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API): observação de elementos e margens de interseção.

## Implementação

43 elementos com entrada e saída reversíveis. Entrada de aproximadamente 900 ms, saída de 400–500 ms, pequenos atrasos de sequência, títulos por recorte, fotografia com zoom de 4,5% e linha gráfica com movimento discreto. O conteúdo volta a entrar quando o visitante retorna à seção.

Menu com entrada e saída; conteúdo de serviços e FAQ com transição de expansão. Não há captura ou substituição da rolagem nativa.

O modo suave respeita a preferência de movimento reduzido e usa apenas opacidade. O botão no rodapé permite escolher explicitamente entre movimento completo e suave e salva essa escolha apenas no navegador. Foco por teclado revela imediatamente o conteúdo. Impressão e ausência de JavaScript mantêm o conteúdo visível.
