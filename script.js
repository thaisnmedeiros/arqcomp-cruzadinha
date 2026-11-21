'use strict';
const $=id=>document.getElementById(id);
const chapters=[
 {title:'O Coração da Cidade',image:'cidade',label:'ATO I',desc:'As engrenagens silenciaram. Três figuras guardam o segredo que faz a cidade pensar.',intro:'Três figuras esperam na praça. Elas não perderam apenas suas cores — perderam suas funções.',items:[
  {word:'CPU',name:'O Coração Mecânico',symbol:'✦',story:'No centro da praça, um coração mecânico espera pelas ordens de todo o sistema.',question:'Qual componente busca e executa as instruções de um programa?',options:['CPU','Cache','EEPROM'],answer:0,explain:'A CPU é responsável pelo processamento e pela execução de instruções.'},
  {word:'ULA',name:'O Alquimista dos Cálculos',symbol:'✧',story:'Uma escultora tenta transformar números em movimento, mas esqueceu quem realiza os cálculos.',question:'Que parte do processador realiza operações aritméticas e lógicas?',options:['Memória de massa','ULA','Barramento de endereços'],answer:1,explain:'A ULA realiza cálculos e operações lógicas dentro do processador.'},
  {word:'REGISTRADORES',name:'O Guardião das Centelhas',symbol:'❖',story:'Pequenas centelhas se apagam antes que possam ser usadas pela máquina.',question:'Onde ficam os valores de trabalho de acesso extremamente rápido dentro do processador?',options:['Registradores','Discos rígidos','Memória Flash'],answer:0,explain:'Os registradores armazenam valores temporários usados diretamente pela CPU.'}]},
 {title:'A Floresta das Memórias',image:'floresta',label:'ATO II',desc:'Entre flores luminosas e árvores antigas, algumas lembranças desaparecem; outras resistem.',intro:'Éloïse encontra três árvores: uma lembra rapidamente, outra resiste ao tempo, e a terceira pode ser reescrita.',items:[
  {word:'CACHE',name:'A Árvore dos Ecos',symbol:'✺',story:'Uma árvore antecipa os caminhos mais usados e guarda perto aquilo que se repete.',question:'Que memória rápida reduz o tempo de acesso a informações usadas com frequência?',options:['Cache','Memória de massa','EEPROM'],answer:0,explain:'A cache mantém cópias de dados e instruções de acesso frequente.'},
  {word:'FLASH',name:'A Flor que Não Esquece',symbol:'❀',story:'Mesmo após a noite mais longa, esta flor preserva sua história sem energia.',question:'Qual tecnologia não volátil é comum em SSDs e pen drives?',options:['Registradores','Flash','Cache'],answer:1,explain:'A memória Flash mantém os dados sem energia e pode ser apagada eletricamente.'},
  {word:'EEPROM',name:'O Livro das Páginas Vivas',symbol:'✣',story:'Um livro preserva o texto após ser fechado e permite reescrever pequenas passagens.',question:'Qual memória não volátil permite apagar e regravar informações eletricamente?',options:['RAM','EEPROM','Registradores'],answer:1,explain:'A EEPROM permite apagar e reprogramar dados eletricamente, inclusive em pequenas unidades.'}]},
 {title:'Os Caminhos Invisíveis',image:'pontes',label:'ATO III',desc:'Pontes desapareceram entre as margens. É preciso restaurar o caminho e o destino.',intro:'A cidade ainda não consegue trocar informações. Cada ponte recuperada liga duas partes do mundo.',items:[
  {word:'DATABUS',name:'A Ponte das Mensagens',symbol:'⌁',story:'Uma ponte transportava o conteúdo das mensagens entre os habitantes.',question:'Qual barramento transporta o conteúdo das informações entre os componentes?',options:['Barramento de dados','Barramento de endereços','Clock'],answer:0,explain:'O barramento de dados transporta valores e instruções entre componentes.'},
  {word:'ADDRESSBUS',name:'A Ponte dos Destinos',symbol:'✥',story:'As mensagens existem, mas ninguém sabe a qual local devem chegar.',question:'Qual barramento identifica a localização de memória que será acessada?',options:['Barramento de dados','Barramento de endereços','Memória cache'],answer:1,explain:'O barramento de endereços indica qual posição de memória ou dispositivo deve ser acessado.'},
  {word:'MICROCONTROLADOR',name:'A Cidade em Miniatura',symbol:'✤',story:'Num único pequeno palácio estão reunidos os mecanismos para operar um mundo inteiro.',question:'Qual chip reúne processador, memória e circuitos de entrada e saída?',options:['Microcontrolador','Registrador','Memória de massa'],answer:0,explain:'Um microcontrolador integra CPU, memória e periféricos em um único chip.'}]},
 {title:'O Último Quadro',image:'galeria',label:'ATO IV',desc:'A galeria final revela os últimos enigmas, mas ainda não a verdade sobre o número XII.',intro:'No fundo da galeria, três pinturas aguardam. Éloïse reconhece os traços de alguém que ela conheceu.',items:[
  {word:'QUADCORE',name:'Os Quatro Pintores',symbol:'✣',story:'Quatro artistas trabalham simultaneamente sobre partes distintas do mesmo mural.',question:'Como se chama um processador que possui quatro núcleos?',options:['Dual core','Quad core','DMA'],answer:1,explain:'Quad core é uma configuração com quatro núcleos de processamento.'},
  {word:'DUALCORE',name:'Os Irmãos da Tela',symbol:'❦',story:'Dois artistas dividem o trabalho em uma única moldura.',question:'Como se chama um processador que possui dois núcleos?',options:['Dual core','Quad core','Cache'],answer:0,explain:'Dual core é uma configuração com dois núcleos de processamento.'},
  {word:'MEMORIADEMASSA',name:'O Arquivo das Eras',symbol:'◈',story:'Um enorme arquivo conserva pinturas e documentos por muito tempo, mesmo após a luz desaparecer.',question:'Qual tipo de armazenamento persistente guarda muitos arquivos e programas?',options:['Registradores','Cache','Memória de massa'],answer:2,explain:'A memória de massa guarda grandes volumes de dados de forma não volátil.'}]}];
const clues={CPU:'Componente que busca e executa instruções e coordena o processamento do computador.',ULA:'Parte do processador que realiza cálculos e operações lógicas.',REGISTRADORES:'Pequenas memórias internas da CPU que mantêm valores de trabalho de acesso imediato.',CACHE:'Memória rápida que conserva cópias de informações usadas frequentemente.',FLASH:'Tecnologia não volátil utilizada em pen drives e unidades de armazenamento sólido.',EEPROM:'Memória não volátil que pode ser apagada e regravada eletricamente.',DATABUS:'Conjunto de linhas que transporta os valores entre componentes.',ADDRESSBUS:'Conjunto de linhas que indica a posição de memória a ser acessada.',MICROCONTROLADOR:'Chip que integra processamento, memória e periféricos de entrada e saída.',QUADCORE:'Processador que possui quatro núcleos de processamento.',DUALCORE:'Processador que possui dois núcleos de processamento.',MEMORIADEMASSA:'Armazenamento persistente de grande capacidade, como SSDs e discos rígidos.'};
const placements=[{"word":"MICROCONTROLADOR","row":4,"col":4,"dir":"across"},{"word":"CACHE","row":3,"col":16,"dir":"down"},{"word":"FLASH","row":6,"col":12,"dir":"across"},{"word":"CPU","row":4,"col":6,"dir":"down"},{"word":"DATABUS","row":6,"col":1,"dir":"across"},{"word":"ULA","row":4,"col":2,"dir":"down"},{"word":"EEPROM","row":0,"col":18,"dir":"down"},{"word":"QUADCORE","row":1,"col":11,"dir":"across"},{"word":"ADDRESSBUS","row":6,"col":4,"dir":"down"},{"word":"MEMORIADEMASSA","row":10,"col":3,"dir":"across"},{"word":"REGISTRADORES","row":15,"col":0,"dir":"across"},{"word":"DUALCORE","row":9,"col":0,"dir":"down"}];
const STORAGE='eclat-expedicao-v1';let state={discovered:[],entries:{},chapter:0,sound:true,motion:true,prologueDone:false};try{const saved=JSON.parse(localStorage.getItem(STORAGE));if(saved&&typeof saved==='object')state={...state,...saved}}catch{};
const save=()=>{try{localStorage.setItem(STORAGE,JSON.stringify(state))}catch{}};
const solved=(word)=>state.discovered.includes(word),total=()=>state.discovered.length;
let currentScreen='cover',activeChallenge=null,activeWord=null,prologueIndex=0,audioContext=null,correctWords=new Set(),freshlyCompleted=false;
const introLines=['Primeiro, desapareceram as estrelas.','Depois, os caminhos.','Por último, começamos a esquecer quem éramos.','Então, um número surgiu no céu: XII.','“Você também enxerga o que está faltando?” — Éloïse'];
function audio(type='click'){if(!state.sound)return;try{audioContext=audioContext||new(window.AudioContext||window.webkitAudioContext)();if(audioContext.state==='suspended')audioContext.resume();const now=audioContext.currentTime;const pitches=type==='success'?[523,659,784,1047]:type==='wrong'?[220,175]:type==='chapter'?[392,523,659,880]:[440];pitches.forEach((freq,i)=>{const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type=type==='wrong'?'triangle':'sine';osc.frequency.value=freq;osc.connect(gain);gain.connect(audioContext.destination);let t=now+i*.11;gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(type==='click'?.027:.07,t+.025);gain.gain.exponentialRampToValueAtTime(.0001,t+.23);osc.start(t);osc.stop(t+.25)})}catch{}}
// Tinta: ruído suavizado de curta duração, sem arquivos externos.
function paintSound(){if(!state.sound)return;try{audioContext=audioContext||new(window.AudioContext||window.webkitAudioContext)();if(audioContext.state==='suspended')audioContext.resume();const ctx=audioContext,now=ctx.currentTime,duration=.13,samples=Math.floor(ctx.sampleRate*duration),buffer=ctx.createBuffer(1,samples,ctx.sampleRate),data=buffer.getChannelData(0);let prev=0;for(let i=0;i<samples;i++){prev=(prev*.88)+(Math.random()*2-1)*.12;data[i]=prev*(1-i/samples)}const source=ctx.createBufferSource();source.buffer=buffer;const filter=ctx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=1000;const gain=ctx.createGain();gain.gain.setValueAtTime(.0001,now);gain.gain.linearRampToValueAtTime(.16,now+.018);gain.gain.exponentialRampToValueAtTime(.0001,now+duration);source.connect(filter);filter.connect(gain);gain.connect(ctx.destination);source.start(now);source.stop(now+duration)}catch{}}
// Brilho: acorde ascendente de sinos suaves ao restaurar uma palavra.
function sparkleSound(){if(!state.sound)return;try{audioContext=audioContext||new(window.AudioContext||window.webkitAudioContext)();if(audioContext.state==='suspended')audioContext.resume();const ctx=audioContext,now=ctx.currentTime;[659.25,830.61,987.77,1318.51].forEach((f,i)=>{const osc=ctx.createOscillator(),gain=ctx.createGain(),t=now+i*.095;osc.type='sine';osc.frequency.setValueAtTime(f,t);osc.frequency.exponentialRampToValueAtTime(f*1.008,t+.22);gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(.055,t+.018);gain.gain.exponentialRampToValueAtTime(.0001,t+.55);osc.connect(gain);gain.connect(ctx.destination);osc.start(t);osc.stop(t+.57)})}catch{}}
function showBrushTrail(){const el=$('brush-trail');if(!el||!state.motion)return;el.classList.remove('visible');void el.offsetWidth;el.classList.add('visible')}
function show(id){document.querySelectorAll('.screen').forEach(e=>e.classList.toggle('active',e.id==='screen-'+id));currentScreen=id;$('topbar').classList.toggle('hidden',id==='cover');$('chapter-status').textContent=id==='act'?chapters[state.chapter].label:id==='puzzle'?'O QUADRO XII':'A EXPEDIÇÃO';$('global-progress').style.width=(total()/12*100)+'%';$('counter-top').textContent=total()+' / 12';window.scrollTo({top:0,behavior:'instant'});audio('click')}
function start(){if(!state.prologueDone){show('prologue');prologueIndex=0;renderPrologue()}else{renderMap();show('map')}}
function renderPrologue(){$('prologue-line').textContent=introLines[prologueIndex];$('prologue-count').textContent=String(prologueIndex+1).padStart(2,'0')+' / 05';$('prologue-next').textContent=prologueIndex===introLines.length-1?'Começar a expedição →':'Continuar →'}
function nextPrologue(){if(prologueIndex<introLines.length-1){prologueIndex++;renderPrologue();audio('click')}else{state.prologueDone=true;save();renderMap();show('map');audio('chapter')}}
function chapterUnlocked(index){return index===0||chapters.slice(0,index).every(ch=>ch.items.every(it=>solved(it.word)))}
function renderMap(){$('map-cards').innerHTML=chapters.map((ch,i)=>{const unlocked=chapterUnlocked(i),count=ch.items.filter(it=>solved(it.word)).length;return `<button class="map-card" data-act="${i}" ${unlocked?'':'disabled'}><span class="map-image" style="background-image:url('assets/images/${ch.image}-arte.webp')"></span><span class="map-shade"></span><span class="map-content"><span class="map-index">${ch.label} · ${unlocked?'EXPLORAR':'BLOQUEADO'}</span><h2>${ch.title}</h2><p>${ch.desc}</p><span class="map-status">${unlocked?`${count} de 3 fragmentos · ${count===3?'Restaurado ✓':'Entrar →'}`:'Complete a região anterior 🔒'}</span></span></button>`}).join('');document.querySelectorAll('.map-card[data-act]').forEach(btn=>btn.addEventListener('click',()=>openAct(Number(btn.dataset.act))))}
const stageHints=[
 'OFICINA DA CIDADE · Relacione cada figura à sua função para reconstruir o mecanismo.',
 'BIBLIOTECA VIVA · Escolha a memória adequada para preservar cada lembrança.',
 'PASSAGENS PERDIDAS · Descubra por onde devem viajar endereços e informações.',
 'GALERIA DOS ESPELHOS · Observe as pinturas e reconheça suas metáforas.'
];
const stageNames=[['O Coração Mecânico','O Alquimista dos Cálculos','O Guardião das Centelhas'],['A Memória Mais Rápida','A Flor que Não Esquece','O Livro das Páginas Vivas'],['O Caminho dos Dados','O Caminho do Destino','O Mundo em um Chip'],['Os Quatro Pintores','Os Dois Pintores','O Arquivo das Eras']];
function stageComplete(){return chapters[state.chapter].items.every(it=>solved(it.word))}
// Celebração de cada ato: as pinturas continuam visíveis e a passagem é sempre acessível.
const restoredSpeech=[
 'Escute... O coração voltou a bater. A cidade se lembra de como pensar!',
 'Você conseguiu! Até as lembranças mais antigas voltaram a florescer.',
 'As pontes brilham outra vez. Agora as mensagens podem encontrar seus destinos.',
 'As pinturas se revelaram... e o último manuscrito finalmente nos espera.'
];
let restorationTimer=null;
function restoreSparkles(){
 const canvas=$('act-canvas');canvas.querySelectorAll('.restore-spark').forEach(el=>el.remove());
 if(!state.motion)return;
 // Distribuição determinística, para que a animação não mude a cada renderização.
 for(let i=0;i<26;i++){
  const star=document.createElement('span');star.className='restore-spark';
  star.style.left=(15+(i*37%73))+'%';star.style.top=(20+(i*29%58))+'%';
  star.style.animationDelay=((i%7)*.12)+'s';star.style.setProperty('--drift',((i%2?1:-1)*(15+i%5*11))+'px');
  canvas.appendChild(star);star.addEventListener('animationend',()=>star.remove(),{once:true});
 }
}
function updateStageCompletion(announce=false){
 const done=stageComplete(),index=state.chapter;
 $('restoration-note').hidden=!done;
 $('act-next-compact').hidden=!done;
 $('act-hint').hidden=done;
 $('act-canvas').classList.toggle('celebrated',done);
 $('restoration-title').textContent=['O coração voltou a bater','A floresta despertou','Os caminhos se reconectaram','As pinturas se revelaram'][index];
 $('restoration-text').textContent=index<3?'A passagem para “'+chapters[index+1].title+'” está aberta.':'O Quadro XII espera por suas últimas pinceladas.';
 $('act-next').textContent=index<3?'Seguir para o Ato '+['II','III','IV'][index]+' →':'Revelar O Quadro XII →';
 $('act-next-compact').textContent=index<3?'Próximo ato →':'O Quadro XII →';
 if(announce&&done){
  audio('chapter');restoreSparkles();
  const note=$('restoration-note');note.classList.remove('just-restored');void note.offsetWidth;note.classList.add('just-restored');
  $('dialogue-content').textContent=restoredSpeech[index];$('dialogue').style.display='flex';
  clearTimeout(restorationTimer);restorationTimer=setTimeout(()=>{$('dialogue').style.display='none'},6500);
 }
}
function nextStage(){if(!stageComplete())return;audio('chapter');if(state.chapter===3)openPuzzle();else openAct(state.chapter+1)}
function openAct(index){
 if(!chapterUnlocked(index))return;
 clearTimeout(restorationTimer);freshlyCompleted=false;state.chapter=index;save();let ch=chapters[index];
 $('act-image').style.backgroundImage=`url('assets/images/${ch.image}-arte.webp')`;
 $('act-canvas').dataset.act=String(index);
 $('act-number').textContent=ch.label;$('act-name').textContent=ch.title;$('act-description').textContent=ch.desc;
 $('act-hint').textContent=stageHints[index];renderHotspots();updateStageCompletion();
 $('dialogue-content').textContent=stageComplete()?'Você restaurou este lugar. A próxima passagem se abriu.':ch.intro;
 $('dialogue').style.display=stageComplete()?'none':'flex';show('act');
}
function renderHotspots(){
 const ch=chapters[state.chapter],count=ch.items.filter(it=>solved(it.word)).length;
 $('act-discoveries').textContent=`${count} / 3 símbolos restaurados`;
 const positions=[{left:'51%',top:'51%'},{left:'77%',top:'57%'},{left:'27%',top:'55%'}];
 const actPositions=[[[51,51],[77,57],[27,55]],[[25,55],[75,52],[51,53]],[[52,49],[25,57],[77,56]],[[52,54],[27,58],[77,58]]];
 const verbs=['ENCAIXAR','GUARDAR','CONECTAR','REVELAR'];
 $('hotspots').innerHTML=ch.items.map((it,i)=>`<button class="hotspot stage-${state.chapter} ${solved(it.word)?'solved':''}" data-item="${i}" style="left:${actPositions[state.chapter][i][0]}%;top:${actPositions[state.chapter][i][1]}%" aria-label="${solved(it.word)?'Rever':'Explorar'} ${it.name}"><span class="hotspot-glyph">${solved(it.word)?'✦':it.symbol}</span><span class="hotspot-copy"><strong>${stageNames[state.chapter][i]}</strong><small>${solved(it.word)?'RESTAURADO':verbs[state.chapter]}</small></span></button>`).join('');
 const saturation=.40+(count/3)*.60;
 $('act-image').style.filter='none';
 $('act-canvas').classList.toggle('restored',count===3);
 document.querySelectorAll('.hotspot').forEach(b=>b.addEventListener('click',()=>openChallenge(Number(b.dataset.item))));
 updateStageCompletion();
}
function openChallenge(i){
 const it=chapters[state.chapter].items[i];activeChallenge=it;
 const titles=['MONTAGEM DO CORAÇÃO','O DESTINO DA LEMBRANÇA','RECONSTRUÇÃO DA PONTE','INTERPRETAÇÃO DO QUADRO'];
 $('challenge-sector').textContent=chapters[state.chapter].label+' · '+titles[state.chapter];
 $('challenge-title').textContent=it.name;$('challenge-ornament').textContent=it.symbol;
 $('challenge-story').textContent=it.story;$('challenge-question').textContent=it.question;
 $('challenge-result').textContent=solved(it.word)?'Este fragmento já foi recuperado. '+it.explain:'';
 $('challenge-continue').hidden=true;$('challenge-dialog').dataset.stage=state.chapter;
 $('drop-target').hidden=state.chapter!==0||solved(it.word);
 $('chapter-instruction').textContent=[
 'Escolha a peça correta para instalar na máquina.',
 'Selecione a lembrança que corresponde ao comportamento descrito.',
 'Selecione o caminho adequado para conectar os componentes.',
 'Decifre a metáfora da pintura para recuperar seu nome.'
 ][state.chapter];
 $('answer-options').innerHTML=it.options.map((opt,j)=>`<button class="answer-option" data-choice="${j}" ${solved(it.word)?'disabled':''}><span class="choice-art">${['⚙','✿','⌁','◈'][state.chapter]}</span><span>${opt}</span><span class="choice-arrow">→</span></button>`).join('');
 if(solved(it.word)){$('answer-options').children[it.answer].classList.add('correct');$('challenge-continue').hidden=false}
 document.querySelectorAll('[data-choice]').forEach(b=>{
 b.draggable=state.chapter===0&&!solved(it.word);
 b.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',b.dataset.choice);e.dataTransfer.effectAllowed='move'});
 b.addEventListener('click',()=>answerChallenge(Number(b.dataset.choice)));
 });
 $('challenge-dialog').showModal();audio('click');
}
const dropTarget=$('drop-target');
dropTarget.addEventListener('dragover',e=>{e.preventDefault();e.dataTransfer.dropEffect='move';dropTarget.classList.add('drag-over')});
dropTarget.addEventListener('dragleave',()=>dropTarget.classList.remove('drag-over'));
dropTarget.addEventListener('drop',e=>{e.preventDefault();dropTarget.classList.remove('drag-over');const choice=Number(e.dataTransfer.getData('text/plain'));if(Number.isInteger(choice)&&choice>=0&&choice<=2)answerChallenge(choice)});

function answerChallenge(choice){
 const it=activeChallenge;if(!it)return;const buttons=[...document.querySelectorAll('[data-choice]')];
 if(solved(it.word))return;
 if(choice===it.answer){
 buttons.forEach(b=>b.disabled=true);buttons[choice].classList.add('correct');
 $('challenge-result').innerHTML='<span class="animated-word" aria-label="'+it.word+'">'+[...it.word].map((letter,i)=>`<span style="animation-delay:${i*.07}s">${letter}</span>`).join('')+'</span><br>✦ Fragmento restaurado. '+it.explain;
 $('challenge-continue').hidden=false;$('drop-target').hidden=true;
 state.discovered.push(it.word);freshlyCompleted=stageComplete();save();renderHotspots();
 if(stageComplete()){$('dialogue-content').textContent=restoredSpeech[state.chapter]}
 else sparkleSound();
 }else{buttons[choice].classList.add('wrong');buttons[choice].disabled=true;$('challenge-result').textContent='Ainda não... Observe a função descrita e tente outra resposta.';audio('wrong')}
}
function closeChallenge(){
 $('challenge-dialog').close();
 if(activeChallenge&&solved(activeChallenge.word)){
 $('dialogue-content').textContent=stageComplete()?'Éloïse contempla a obra restaurada. “Podemos seguir.”':'Uma parte da pintura voltou a brilhar. Continue investigando.';
 $('dialogue').style.display=stageComplete()?'none':'flex';
 }
 renderMap();updateStageCompletion(freshlyCompleted);freshlyCompleted=false;
}
$('act-next').addEventListener('click',nextStage);
$('act-next-compact').addEventListener('click',nextStage);
// Crossword construction: official fixed, intersecting positions.
const maxRow=Math.max(...placements.map(p=>p.row+(p.dir==='down'?p.word.length:1)));const maxCol=Math.max(...placements.map(p=>p.col+(p.dir==='across'?p.word.length:1)));
const grid=new Map(),startNumber=new Map();placements.forEach(p=>{p.cells=[];[...p.word].forEach((letter,i)=>{const r=p.row+(p.dir==='down'?i:0),c=p.col+(p.dir==='across'?i:0),key=`${r}-${c}`;p.cells.push(key);if(!grid.has(key))grid.set(key,{letter,words:[]});if(grid.get(key).letter!==letter)throw Error('Cruzamento incompatível: '+key);grid.get(key).words.push(p.word)})});let number=1;[...new Set(placements.map(p=>`${p.row}-${p.col}`))].sort((a,b)=>{const [ar,ac]=a.split('-').map(Number),[br,bc]=b.split('-').map(Number);return ar-br||ac-bc}).forEach(key=>startNumber.set(key,number++));placements.forEach(p=>{p.number=startNumber.get(`${p.row}-${p.col}`);p.clue=clues[p.word]});
function currentLetter(key){return state.entries[key]||''}
function renderGrid(){const board=$('crossword');board.style.gridTemplateColumns=`repeat(${maxCol},minmax(0,1fr))`;board.innerHTML='';for(let row=0;row<maxRow;row++)for(let col=0;col<maxCol;col++){const key=`${row}-${col}`,meta=grid.get(key);const outer=document.createElement('div');outer.className='cell';if(meta){if(startNumber.has(key)){const s=document.createElement('span');s.className='cell-num';s.textContent=startNumber.get(key);outer.appendChild(s)}const input=document.createElement('input');input.maxLength=1;input.autocomplete='off';input.autocapitalize='characters';input.spellcheck=false;input.dataset.key=key;input.setAttribute('aria-label',`Casa linha ${row+1}, coluna ${col+1}`);input.value=currentLetter(key);input.addEventListener('focus',()=>chooseCell(key));input.addEventListener('click',()=>chooseCell(key));input.addEventListener('input',()=>onLetter(key,input));input.addEventListener('keydown',e=>onKey(e,key));outer.appendChild(input);outer.dataset.key=key}board.appendChild(outer)}renderClues();updateGridStyles()}
function renderClues(){for(const [dir,id] of [['across','clues-across'],['down','clues-down']]){$(id).innerHTML=placements.filter(p=>p.dir===dir).sort((a,b)=>a.number-b.number).map(p=>`<button class="clue-btn" data-word="${p.word}"><strong>${p.number}.</strong> ${p.clue} <span>(${p.word.length})</span></button>`).join('')}document.querySelectorAll('[data-word]').forEach(b=>b.addEventListener('click',()=>selectWord(b.dataset.word,true)))}
function selectWord(word,focus=false){activeWord=placements.find(p=>p.word===word);if(!activeWord)return;$('active-clue-title').textContent=`${activeWord.number} · ${activeWord.dir==='across'?'Horizontal':'Vertical'}`;$('active-clue-text').textContent=activeWord.clue;updateGridStyles();if(focus)focusCell(activeWord.cells.find(k=>!currentLetter(k))||activeWord.cells[0])}
function chooseCell(key){const choices=placements.filter(p=>p.cells.includes(key));const chosen=choices.find(p=>p.word===activeWord?.word)||choices[0];if(chosen)selectWord(chosen.word)}
function focusCell(key){const input=document.querySelector(`input[data-key="${key}"]`);if(input){input.focus();input.select()}}
function onLetter(key,input){const letter=(input.value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z]/g,'').toUpperCase().slice(-1));input.value=letter;if(letter)state.entries[key]=letter;else delete state.entries[key];correctWords.clear();save();updateGridStyles();if(letter){paintSound();const idx=activeWord?.cells.indexOf(key);if(idx>=0&&idx<activeWord.cells.length-1)focusCell(activeWord.cells[idx+1])}}
function onKey(e,key){if(!activeWord)return;const idx=activeWord.cells.indexOf(key);if(e.key==='Backspace'&&!currentLetter(key)&&idx>0){e.preventDefault();focusCell(activeWord.cells[idx-1])}else if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();focusCell(activeWord.cells[Math.min(idx+1,activeWord.cells.length-1)])}else if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();focusCell(activeWord.cells[Math.max(0,idx-1)])}else if(e.key==='Tab'){}else if(e.key===' '){e.preventDefault();let choices=placements.filter(p=>p.cells.includes(key));if(choices.length>1){selectWord(choices.find(p=>p.word!==activeWord.word).word);focusCell(key)}}}
function updateGridStyles(wrong=new Set()){document.querySelectorAll('.cell[data-key]').forEach(c=>{const key=c.dataset.key;c.classList.toggle('selected',!!activeWord?.cells.includes(key));c.classList.toggle('correct',grid.get(key).words.some(w=>correctWords.has(w)));c.classList.toggle('wrong',grid.get(key).words.some(w=>wrong.has(w))&&!c.classList.contains('correct'))});document.querySelectorAll('[data-word]').forEach(b=>{b.classList.toggle('active',b.dataset.word===activeWord?.word);b.classList.toggle('solved',correctWords.has(b.dataset.word))});$('puzzle-count').textContent=correctWords.size+' de 12 restauradas';if($('paint-progress'))$('paint-progress').style.width=(correctWords.size/12*100)+'%'}
function checkPuzzle(){const oldSolved=new Set(correctWords);const incorrect=new Set();correctWords.clear();placements.forEach(p=>{const typed=p.cells.map(k=>currentLetter(k)).join('');if(typed===p.word)correctWords.add(p.word);else if(typed.length===p.word.length)incorrect.add(p.word)});updateGridStyles(incorrect);const restored=[...correctWords].filter(w=>!oldSolved.has(w));if(restored.length){sparkleSound();showBrushTrail()}const n=correctWords.size;$('puzzle-feedback').textContent=n===12?'✦ O quadro está completo. As cores de Éclat retornam!':`${n} de 12 palavras restauradas. ${incorrect.size} resposta(s) precisam de revisão. Continue a investigação.`;if(!restored.length)audio(incorrect.size?'wrong':'click');if(n===12){$('puzzle-finish').hidden=false;$('puzzle-finish').focus()}else{$('puzzle-finish').hidden=true} }
function resetPuzzle(){$('puzzle-finish').hidden=true;state.entries={};correctWords.clear();save();document.querySelectorAll('.cell input').forEach(input=>input.value='');updateGridStyles();$('puzzle-feedback').textContent='O Quadro XII foi limpo. Você pode começar novamente.';audio('click')}
function openPuzzle(){renderGrid();$('puzzle-finish').hidden=true;show('puzzle')}
function restartAdventure(){$('puzzle-finish').hidden=true;stopAmbient();state.discovered=[];state.entries={};state.chapter=0;state.prologueDone=false;correctWords.clear();save();renderMap();show('cover')}
function petals(){const el=$('petals');for(let i=0;i<17;i++){let p=document.createElement('i');p.className='petal';p.style.left=(Math.random()*100)+'%';p.style.animationDelay=(-Math.random()*25)+'s';p.style.animationDuration=(16+Math.random()*20)+'s';p.style.opacity=(.12+Math.random()*.4);el.appendChild(p)}}
// Trilha ambiente original, sintetizada localmente, sem arquivos externos ou reprodução automática.
let ambientTimer=null,ambientPlaying=false;
function ambientNote(){
 if(!ambientPlaying||!state.sound||document.hidden)return;
 try{
  audioContext=audioContext||new(window.AudioContext||window.webkitAudioContext)();
  if(audioContext.state==='suspended')audioContext.resume();
  const now=audioContext.currentTime;
  // Pequeno arpejo em lá menor, muito suave para não interferir com os enigmas.
  const tones=[220,261.63,329.63,392,329.63,261.63,246.94,196];
  const i=ambientNote.index=(ambientNote.index||0)+1;
  const frequency=tones[(i-1)%tones.length];
  const osc=audioContext.createOscillator(),gain=audioContext.createGain();
  osc.type='sine';osc.frequency.value=frequency;
  osc.connect(gain);gain.connect(audioContext.destination);
  gain.gain.setValueAtTime(.0001,now);
  gain.gain.linearRampToValueAtTime(.013,now+.22);
  gain.gain.exponentialRampToValueAtTime(.0001,now+2.1);
  osc.start(now);osc.stop(now+2.15)
 }catch{}
}
function startAmbient(){
 if(ambientPlaying||!state.sound)return;
 ambientPlaying=true;ambientNote();ambientTimer=setInterval(ambientNote,1550)
}
function stopAmbient(){ambientPlaying=false;if(ambientTimer){clearInterval(ambientTimer);ambientTimer=null}}
function syncPreferences(){
 $('sound-toggle').textContent=state.sound?'♫':'♪̸';
 $('sound-toggle').setAttribute('aria-label',state.sound?'Desativar som':'Ativar som');
 $('cover-audio').classList.toggle('is-off',!state.sound);
 $('cover-audio').setAttribute('aria-label',state.sound?'Desativar música e efeitos':'Ativar música e efeitos');
 $('cover-audio').setAttribute('aria-pressed',String(state.sound));
 $('settings-sound-state').textContent=state.sound?'Ligado':'Desligado';
 $('settings-motion-state').textContent=state.motion?'Ligadas':'Desligadas';
 $('settings-sound').setAttribute('aria-pressed',String(state.sound));
 $('settings-motion').setAttribute('aria-pressed',String(state.motion));
 $('motion-toggle').textContent=state.motion?'✧':'·';
 $('motion-toggle').setAttribute('aria-label',state.motion?'Desativar animações':'Ativar animações');
 document.body.classList.toggle('motion-off',!state.motion)
}
function toggleSound(){
 state.sound=!state.sound;save();
 if(state.sound){startAmbient();audio('success')}else stopAmbient();
 syncPreferences()
}
function toggleMotion(){state.motion=!state.motion;save();syncPreferences()}
function openSettings(){audio('click');$('settings-dialog').showModal()}

$('cover-play').addEventListener('click',()=>{if(state.sound)startAmbient();start()});$('cover-audio').addEventListener('click',toggleSound);$('cover-settings').addEventListener('click',openSettings);$('settings-close').addEventListener('click',()=>$('settings-dialog').close());$('settings-sound').addEventListener('click',toggleSound);$('settings-motion').addEventListener('click',toggleMotion);$('settings-restart').addEventListener('click',()=>{$('settings-dialog').close();$('reset-dialog').showModal()});$('cover-play-mobile').addEventListener('click',start);$('prologue-next').addEventListener('click',nextPrologue);$('nav-world').addEventListener('click',()=>{renderMap();show('map')});$('go-home').addEventListener('click',()=>show('cover'));$('nav-puzzle').addEventListener('click',openPuzzle);$('map-crossword').addEventListener('click',openPuzzle);$('act-back').addEventListener('click',()=>{renderMap();show('map')});$('dialogue-close').addEventListener('click',()=>{$('dialogue').style.display='none'});$('challenge-close').addEventListener('click',closeChallenge);$('challenge-continue').addEventListener('click',closeChallenge);$('check-puzzle').addEventListener('click',checkPuzzle);$('puzzle-finish').addEventListener('click',()=>show('final'));$('reset-puzzle').addEventListener('click',resetPuzzle);$('sound-toggle').addEventListener('click',toggleSound);$('motion-toggle').addEventListener('click',toggleMotion);$('final-return').addEventListener('click',()=>{renderMap();show('map')});$('final-restart').addEventListener('click',()=>{$('reset-dialog').showModal()});$('reset-dialog').addEventListener('close',()=>{if($('reset-dialog').returnValue==='confirm')restartAdventure()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&currentScreen==='prologue'){renderMap();show('map')}});syncPreferences();petals();renderMap();renderGrid();

// As pistas ficam em duas abas, inclusive em telas menores.
document.querySelectorAll('.clue-tab').forEach(tab=>tab.addEventListener('click',()=>{const dir=tab.dataset.tab;document.querySelectorAll('.clue-tab').forEach(b=>b.classList.toggle('active',b===tab));$('clues-across').hidden=dir!=='across';$('clues-down').hidden=dir!=='down';audio('click')}));


// Painel do manuscrito: recolhido no desktop para manter a pintora visível.
const manuscriptToggle=document.getElementById('manuscript-toggle');
if(manuscriptToggle){manuscriptToggle.addEventListener('click',()=>{const opened=document.body.classList.toggle('manuscript-open');manuscriptToggle.setAttribute('aria-expanded',String(opened));manuscriptToggle.textContent=opened?'× Fechar instruções':'✦ Como jogar'});}
