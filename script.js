const fortunes = [
  "Šustí veverka: Dnes najdeš malý důvod k radosti — obejmi ho.",
  "Šeptá veverka: Nový nápad vzejde z malého oříšku.",
  "Kvíkne veverka: Buď odvážný, skoč pro příležitost.",
  "Veverka štěbetá: Přítel přijde se sladkým překvapením.",
  "Šustí listím: Klid a trpělivost přinesou úrodu.",
  "Veverka mrkne: Dnes si dopřej malou radost — zasloužíš si to.",
  "Cvrkot v korunách: Něco, co vypadá ztracené, se vrátí domů.",
  "Veverka varuje: Pomalý krok teď ochrání tvůj krok později.",
  "Skočí na větev: Nové přátelství roste, zalévej ho pozorností.",
  "Oříšek života: Nečekané štěstí přijde v malé ceremonii.",
  "Veverka si chroupá: Sdílej radost, a bude větší.",
  "Šeptá v koruně: Dnes je den na plány, ne na strachy.",
  "Veverka čiluje: Energie v tobě probouzí nový sen.",
  "Tichý skryj: Poslouchej svůj vnitřní hlas, má ti co říct.",
  "Slunce v korunách: Světlo přichází po temnu, čekej trpělivě."
];

let nutCount = 5;

const nutsEl = document.getElementById('nuts');
const fortuneEl = document.getElementById('fortune');
const tellBtn = document.getElementById('tellBtn');
const squirrelEl = document.getElementById('squirrel');
const bigSquirrel = document.getElementById('bigSquirrel');
const flyingNut = document.getElementById('flyingNut');
const questionInput = document.getElementById('questionInput');
const askBtn = document.getElementById('askBtn');
const treeEl = document.getElementById('tree');
const squirrelFace = document.getElementById('squirrelFace');
const treeNuts = Array.from(document.querySelectorAll('.tree-nut'));
let treeCollected = 0;

function renderNuts(){
  if(nutCount <= 0){
    nutsEl.textContent = 'Lískové oříšky: — (veverka je bez zásob)';
    // když dojdou oříšky, zobraz strom s oříšky
    showTree();
  } else {
    nutsEl.textContent = 'Lískové oříšky: ' + '🌰'.repeat(nutCount) + ` (${nutCount})`;
  }
}

function showTree(){
  treeEl.setAttribute('aria-hidden','false');
  squirrelFace.style.display = 'none';
  treeCollected = 0;
  treeNuts.forEach(n=>{ n.classList.remove('collected'); n.disabled = false; });
}

function hideTree(){
  treeEl.setAttribute('aria-hidden','true');
  squirrelFace.style.display = '';
}

function collectNutFromTree(btn){
  if(btn.classList.contains('collected')) return;
  btn.classList.add('collected');
  btn.disabled = true;
  treeCollected += 1;
  // krátká animace sběru
  setTimeout(()=>{
    if(treeCollected >= 5){
      // obnovit zásoby a skrýt strom
      nutCount = 5;
      renderNuts();
      hideTree();
      tellBtn.disabled = false;
      askBtn.disabled = false;
      tellBtn.textContent = 'Získat věštbu';
    }
  }, 250);
}

treeNuts.forEach(btn=>{
  btn.addEventListener('click', ()=>collectNutFromTree(btn));
});

function pickFortune(){
  const idx = Math.floor(Math.random()*fortunes.length);
  return fortunes[idx];
}

const loveFortunes = [
  "Láska roste, pečuj o ni a bude silnější.",
  "Nové setkání může začít u nečekaného rozhovoru.",
  "Malý krok k druhému přinese velké porozumění.",
  "Otevřenost srdce přilákne právě tu správnou osobu.",
  "Komunikace je klíčem — mluvit se odvažuj.",
  "Stará přátelství se mohou proměnit v cosi hlubšího.",
  "Čekej a pozoruj — někdo tě už vidí jinak.",
  "Láska přichází v neočekávaném čase a místě.",
  "Vyjádři to, co cítíš — ticho bude litovat.",
  "Vzájemnost začíná jedním upřímným gestem."
];

const workFortunes = [
  "V práci přijde moment, kdy se tvoje snaha projeví.",
  "Něco nového ti otevře dveře — buď připraven.",
  "Drobné zlepšení dnes znamená velký skok později.",
  "Tvůj talent je viděn — příležitost se blíží.",
  "Nový projekt přinese zadostiučinění a rozvoj.",
  "Spolupráce s někým neočekávaným přinese překvapení.",
  "Tvá iniciativa se nebude ignorovat — počkej na vysvětlení.",
  "Výzva, která se blíží, je tvou cestou ke zlepšení.",
  "Kreativita teď padne na úrodnou půdu.",
  "Uznání přijde z místa, kde to nečekáš.",
  "Změna v práci bude pozitivní — přizpůsob se pružně."
];

const moneyFortunes = [
  "Pečlivost pomůže udržet finance v klidu.",
  "Příležitost k menšímu zisku brzo zaklepe na dveře.",
  "Investuj čas do plánování, ne do spěchu.",
  "Peníze přijdou neočekávaně — věř v tok.",
  "Lepší doba finančně se blíží — trpělivě čekej.",
  "Malá úspora dnes = velká svoboda zítřítko.",
  "Nečekej na zázrak — sám si jej vytvoř.",
  "Hodnota tvé práce vzroste, když bude zřejmá.",
  "Finanční stabilitu najdeš v jednoduchosti a moudrosti."
];

const travelFortunes = [
  "Krátký výlet přinese nové nápady a odpočinek.",
  "Cesta, i malá, změní tvůj pohled k lepšímu.",
  "Buď otevřený novým směrům — přinesou inspiraci.",
  "Sjednocení s přírodou vyčistí tvou mysl.",
  "Putování ti otevře oči na věci, co vždy chyběly.",
  "Destinace je méně důležitá než cesta samotná.",
  "Někde čeká zážitek, kterou si vůbec nepředstavuješ.",
  "Cestování ti přinese příběhy, ne jen fotografie."
];

const generalFortunes = fortunes;

function pickByQuestion(q){
  const t = q.toLowerCase();
  if(/(lás|srd|mil|partner|laska|partnerka|partner|cit|srdce)/i.test(t)) return loveFortunes[Math.floor(Math.random()*loveFortunes.length)];
  if(/(práce|job|kariér|zaměstn|šéf|prace|brigad|práca|projek)/i.test(t)) return workFortunes[Math.floor(Math.random()*workFortunes.length)];
  if(/(peníze|peneze|finance|výdělek|plat|měna|peníze|mzda|výděl)/i.test(t)) return moneyFortunes[Math.floor(Math.random()*moneyFortunes.length)];
  if(/(cest|cesta|dálka|dovolen|vylet|cesta|cestuj|putov)/i.test(t)) return travelFortunes[Math.floor(Math.random()*travelFortunes.length)];
  // default: use a general fortune
  return generalFortunes[Math.floor(Math.random()*generalFortunes.length)];
}

function speakAsSquirrel(text){
  if(!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'cs-CZ';
  u.pitch = 1.8; // vyšší hlas
  u.rate = 1.07; // mírně rychleji
  // vyber hlas, pokud je dostupný
  const voices = speechSynthesis.getVoices();
  if(voices && voices.length){
    // prefer female-ish or cs-CZ voice
    const v = voices.find(v=>/female|woman|karla|martina|alena|zuzana|eva/i.test(v.name))
           || voices.find(v=>v.lang && v.lang.startsWith('cs'))
           || voices[0];
    u.voice = v;
  }
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

tellBtn.addEventListener('click', ()=>{
  if(nutCount <= 0) return;
  const text = pickFortune();
  const spoken = `Veverka říká: ${text}`;
  fortuneEl.textContent = text;
  // animace žvýkání: velká veverka a létající oříšek
  bigSquirrel.classList.add('eat');
  // spustit létající oříšek
  flyingNut.classList.remove('flying');
  // force reflow to restart animation
  void flyingNut.offsetWidth;
  flyingNut.classList.add('flying');
  // odstranit eat po době animace
  setTimeout(()=>bigSquirrel.classList.remove('eat'), 700);
  speakAsSquirrel(spoken);
  // veverka sní oříšek
  nutCount = Math.max(0, nutCount - 1);
  renderNuts();
  if(nutCount <= 0){
    tellBtn.disabled = true;
    askBtn.disabled = true;
    tellBtn.textContent = 'Veverka je bez lískových oříšků';
  }
});

askBtn.addEventListener('click', ()=>{
  const q = (questionInput.value || '').trim();
  if(!q){
    fortuneEl.textContent = 'Napiš prosím svou otázku.';
    questionInput.focus();
    return;
  }
  if(nutCount <= 0){
    fortuneEl.textContent = 'Veverka nemá lískové oříšky — přidej zásoby.';
    return;
  }
  const answer = pickByQuestion(q);
  const text = `K tvé otázce "${q}" veverka říká: ${answer}`;
  fortuneEl.textContent = text;
  bigSquirrel.classList.add('eat');
  flyingNut.classList.remove('flying');
  void flyingNut.offsetWidth;
  flyingNut.classList.add('flying');
  setTimeout(()=>bigSquirrel.classList.remove('eat'),700);
  speakAsSquirrel(text);
  nutCount = Math.max(0, nutCount - 1);
  renderNuts();
  if(nutCount <= 0){
    tellBtn.disabled = true;
    askBtn.disabled = true;
    tellBtn.textContent = 'Veverka je bez lískových oříšků';
  }
});

// Nuts are replenished by collecting from the tree; manual refill removed

// initial render
renderNuts();
