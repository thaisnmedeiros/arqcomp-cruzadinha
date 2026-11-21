# ÉCLAT — A Última Expedição (v5)

Jogo web narrativo de Arquitetura Computacional, feito em **HTML, CSS e JavaScript puros**. Funciona como site estático em GitHub Pages.

## Como jogar

Abra `index.html` no navegador, clique em *Iniciar Expedição*, explore os quatro atos e restaure os 12 fragmentos. Em seguida, abra o **Quadro XII**, selecione uma palavra e digite diretamente nas casas; use **Conferir** para verificar respostas, **Limpar quadro** para apagar letras e **Concluir Expedição** quando as 12 palavras estiverem certas.

Os quatro cenários são ilustrações originais sem textos ou botões incorporados, enquanto hotspots, diálogos e desafios são elementos HTML clicáveis. O cenário restaura cores conforme os acertos. Há sons de tinta na digitação, efeitos ao acertar e música ambiente sintetizada no navegador.

**Reiniciar toda a aventura**: abra Configurações (ícone superior direito) → Reiniciar aventura → confirme; isso zera atos, fragmentos e cruzadinha, sem apagar preferências de áudio.

## Palavras e pistas (12 conectadas)

| Palavra | Pista |
|---|---|
| CPU | Componente que busca e executa instruções e coordena o processamento do computador. |
| ULA | Parte do processador que realiza cálculos e operações lógicas. |
| REGISTRADORES | Pequenas memórias internas da CPU que mantêm valores de trabalho de acesso imediato. |
| CACHE | Memória rápida que conserva cópias de informações usadas frequentemente. |
| FLASH | Tecnologia não volátil utilizada em pen drives e unidades de armazenamento sólido. |
| EEPROM | Memória não volátil que pode ser apagada e regravada eletricamente. |
| DATABUS | Conjunto de linhas que transporta os valores entre componentes. |
| ADDRESSBUS | Conjunto de linhas que indica a posição de memória a ser acessada. |
| MICROCONTROLADOR | Chip que integra processamento, memória e periféricos de entrada e saída. |
| QUADCORE | Processador que possui quatro núcleos de processamento. |
| DUALCORE | Processador que possui dois núcleos de processamento. |
| MEMORIADEMASSA | Armazenamento persistente de grande capacidade, como SSDs e discos rígidos. |

## Publicação

Crie um repositório público **arqcomp-cruzadinha** e coloque `index.html`, `style.css`, `script.js` e a pasta `assets` na raiz. Em **Settings → Pages**, selecione **Deploy from a branch**, `main`, `/(root)`. Cole aqui o link final após publicar.

A atividade requer **pelo menos seis commits em dois dias diferentes**: registre seu desenvolvimento real em etapas, não crie commits artificiais.

Créditos: Thais Nunes de Medeiros — 1ADSB · Arquitetura Computacional.


## Correções da versão 6

- Quatro ilustrações originais em `assets/images/*-arte.webp`, sem reaproveitamento da capa. Removidos blur CSS, dessaturação excessiva, filtros escurecedores e zoom artificial.
- Quadro XII passou a usar `assets/images/atelier-pintora-original.webp`, uma ilustração limpa da pintora à esquerda e tela em branco ao centro; a cruzadinha continua feita em HTML e editável.
- Instruções do manuscrito agora são abertas pelo botão **Como jogar**, para não cobrir a pintora.
- Mantidos os 12 cruzamentos, pistas, botões Conferir/Limpar, efeitos de tinta, configurações e reiniciar expedição.


## Versão 7 — artes individuais enviadas
- Ato I: `assets/images/cidade-arte.webp` (arquivo `ato1.jpeg`).
- Ato III: `assets/images/pontes-arte.webp` (arquivo `image.jpeg`).
- Ato IV: `assets/images/galeria-arte.webp` (arquivo `image2.jpeg`).
- O segundo arquivo de praça (`ato2.jpeg`) foi preservado como `cidade-alternativa.webp`, sem substituir a floresta por engano.
- **Ato II:** não havia imagem de floresta entre os cinco arquivos enviados; foi mantida provisoriamente a arte do Ato II da versão anterior.
- A captura da cruzadinha (`CD69...jpeg`) é uma **referência de layout**, não um plano de fundo, pois contém casas e textos desenhados que ficariam duplicados com as casas editáveis. A cruzadinha segue funcional com tabuleiro HTML sobre a pintura limpa.
- Sem filtros de blur ou dessaturação nas artes de atos, e sem aumento artificial da resolução original (1536 px de largura nos três arquivos de cenários).


### Ajuste v8 — Quadro XII
O tabuleiro foi redimensionado, centralizado na tela de pintura e separado do painel de pistas em telas grandes. A configuração móvel usa rolagem horizontal para preservar a interação por teclado e os 12 cruzamentos.


## Versão 9 — Celebração dos atos
As janelas de conclusão foram substituídas por painéis compactos no rodapé, com fala temporária de Éloïse e partículas douradas quando o terceiro símbolo é restaurado. O painel de instruções some quando a região é concluída, e o botão de avançar permanece visível. As imagens e a cruzadinha foram preservadas da versão 8.
