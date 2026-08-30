// +0 ~ +30 레벨별 포켓몬 데이터
const pokemonData = [
  { name: "피츄", normalColor: '#e5c158', shinyColor: '#f1a80a' },          // +0
  { name: "피카츄", normalColor: '#fbc02d', shinyColor: '#f57f17' },        // +1
  { name: "라이츄", normalColor: '#ff9800', shinyColor: '#e65100' },        // +2
  { name: "파이리", normalColor: '#ff7043', shinyColor: '#ffb74d' },        // +3
  { name: "리자드", normalColor: '#ff3d00', shinyColor: '#f4511e' },        // +4
  { name: "리자몽", normalColor: '#ff6f00', shinyColor: '#37474f' },        // +5
  { name: "메가리자몽 X", normalColor: '#263238', shinyColor: '#00e5ff' },   // +6
  { name: "꼬부기", normalColor: '#4fc3f7', shinyColor: '#80deea' },        // +7
  { name: "어니부기", normalColor: '#0288d1', shinyColor: '#81d4fa' },      // +8
  { name: "거북왕", normalColor: '#1565c0', shinyColor: '#ae52d4' },        // +9
  { name: "이상해씨", normalColor: '#4db6ac', shinyColor: '#80cbd3' },      // +10
  { name: "이상해풀", normalColor: '#00897b', shinyColor: '#4db6ac' },      // +11
  { name: "이상해꽃", normalColor: '#2e7d32', shinyColor: '#ffb74d' },      // +12
  { name: "뮤츠", normalColor: '#d1c4e9', shinyColor: '#00e676' },          // +13
  { name: "메가뮤츠 Y", normalColor: '#ba68c8', shinyColor: '#76ff03' },    // +14
  { name: "칠색조", normalColor: '#ff3d00', shinyColor: '#ffd700' },        // +15
  { name: "루기아", normalColor: '#29b6f6', shinyColor: '#ff4081' },        // +16
  { name: "디아루가", normalColor: '#1565c0', shinyColor: '#00897b' },      // +17
  { name: "펄기아", normalColor: '#f48fb1', shinyColor: '#e1bee7' },        // +18
  { name: "기라티나", normalColor: '#424242', shinyColor: '#f57f17' },      // +19
  { name: "레시라무", normalColor: '#eceff1', shinyColor: '#ffb74d' },      // +20
  { name: "제크로무", normalColor: '#37474f', shinyColor: '#00e5ff' },      // +21
  { name: "큐레무", normalColor: '#78909c', shinyColor: '#26c6da' },        // +22
  { name: "원시그란돈", normalColor: '#bf360c', shinyColor: '#212121' },    // +23
  { name: "원시가이오가", normalColor: '#0d47a1', shinyColor: '#212121' },  // +24
  { name: "메가레쿠쟈", normalColor: '#2e7d32', shinyColor: '#212121' },    // +25
  { name: "자마젠타", normalColor: '#c62828', shinyColor: '#d81b60' },      // +26
  { name: "자시안 (검왕)", normalColor: '#1565c0', shinyColor: '#00bcd4' }, // +27
  { name: "무한다이노", normalColor: '#4a148c', shinyColor: '#ff1744' },    // +28
  { name: "무한다이맥스 무한다이노", normalColor: '#311b92', shinyColor: '#ffea00' }, // +29
  { name: "아르세우스", normalColor: '#fff8e1', shinyColor: '#ffd700' }     // +30
];

function createPokemonSVG(level, isShiny) {
  const idx = Math.min(level, pokemonData.length - 1);
  const pokemon = pokemonData[idx];
  const themeColor = isShiny ? pokemon.shinyColor : pokemon.normalColor;
  const botColor = isShiny ? '#212121' : '#f0f0f0';
  const auraColor = isShiny ? '#ffd700' : themeColor;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <defs>
        <filter id="pokeGlow">
          <feGaussianBlur stdDeviation="${isShiny ? 4 : (level >= 15 ? 3 : 1.5)}" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="${level >= 3 || isShiny ? 'url(#pokeGlow)' : 'none'}">
        <circle cx="50" cy="50" r="42" fill="none" stroke="${auraColor}" stroke-width="${isShiny ? 3.5 : 2}" opacity="${isShiny ? 0.9 : 0.5}"/>
        <path d="M 12 50 A 38 38 0 0 1 88 50 Z" fill="${themeColor}" stroke="#1a1a1a" stroke-width="2.5"/>
        <path d="M 12 50 A 38 38 0 0 0 88 50 Z" fill="${botColor}" stroke="#1a1a1a" stroke-width="2.5"/>
        <line x1="10" y1="50" x2="90" y2="50" stroke="#1a1a1a" stroke-width="5"/>
        <circle cx="50" cy="50" r="12" fill="#1a1a1a"/>
        <circle cx="50" cy="50" r="8" fill="${isShiny ? '#ffffff' : themeColor}"/>
        <circle cx="48" cy="48" r="2.5" fill="#ffffff" opacity="0.9"/>
        ${isShiny ? `
          <path d="M 22 22 L 24 28 L 30 30 L 24 32 L 22 38 L 20 32 L 14 30 L 20 28 Z" fill="#ffffff"/>
          <path d="M 78 20 L 79 24 L 83 25 L 79 26 L 78 30 L 77 26 L 73 25 L 77 24 Z" fill="${pokemon.shinyColor}"/>
        ` : ''}
      </g>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

let gold = 1000;
let level = 0;
let protectScrolls = 0;
let shinyCharms = 0;
let isShiny = false;

const PROTECT_PRICE = 500;
const CHARM_PRICE = 20000;

// DOM 요소
const elGold = document.getElementById('gold');
const elProtectCount = document.getElementById('protect-count');
const elCharmCount = document.getElementById('charm-count');
const elClickAmount = document.getElementById('click-amount');
const elSwordName = document.getElementById('sword-name');
const elCost = document.getElementById('cost');
const elChance = document.getElementById('chance');
const elSellPrice = document.getElementById('sell-price');
const elLogBox = document.getElementById('log-box');
const elUseProtect = document.getElementById('use-protect');
const elUseCharm = document.getElementById('use-charm');
const elSwordImg = document.getElementById('sword-img');

// 이벤트 연결
document.getElementById('btn-earn').addEventListener('click', earnGold);
document.getElementById('btn-buy').addEventListener('click', buyProtection);
document.getElementById('btn-buy-charm').addEventListener('click', buyShinyCharm);
document.getElementById('btn-upgrade').addEventListener('click', upgradePokemon);
document.getElementById('btn-sell').addEventListener('click', sellPokemon);

function checkShinyProbability(useCharm) {
  const rate = useCharm ? 0.05 : 0.01;
  return Math.random() < rate;
}

function updateUI() {
  elGold.textContent = gold.toLocaleString();
  elProtectCount.textContent = protectScrolls;
  if (elCharmCount) elCharmCount.textContent = shinyCharms;

  const multiplier = isShiny ? 10 : 1;
  const earnAmount = (50 + (level * 30)) * multiplier;
  elClickAmount.textContent = earnAmount.toLocaleString();

  const currentPokemon = pokemonData[level] || { name: `전설의 포켓몬 +${level}` };
  if (isShiny) {
    elSwordName.innerHTML = `<span style="color:${currentPokemon.shinyColor || '#ffd700'}; text-shadow:0 0 6px #ff9800;">✨ [이로치] +${level} ${currentPokemon.name}</span>`;
  } else {
    elSwordName.textContent = `[+${level}] ${currentPokemon.name}`;
  }

  const cost = Math.floor(100 * Math.pow(1.35, level));
  const chance = Math.max(3, 100 - (level * 3.2)); // 30단계 밸런스 조정
  const sellPrice = Math.floor(50 * Math.pow(1.6, level)) * multiplier;

  elCost.textContent = cost.toLocaleString();
  elChance.textContent = chance.toFixed(0);
  elSellPrice.textContent = sellPrice.toLocaleString();

  elSwordImg.src = createPokemonSVG(level, isShiny);
  if (isShiny || level >= 15) {
    elSwordImg.style.animation = 'glowPulse 1.2s infinite alternate';
  } else {
    elSwordImg.style.animation = 'none';
  }
}

function addLog(message, color = '#aaa') {
  const p = document.createElement('p');
  p.style.color = color;
  p.innerHTML = message;
  elLogBox.appendChild(p);
  elLogBox.scrollTop = elLogBox.scrollHeight;
}

function earnGold() {
  const multiplier = isShiny ? 10 : 1;
  gold += (50 + (level * 30)) * multiplier;
  updateUI();
}

function buyProtection() {
  if (gold < PROTECT_PRICE) {
    addLog("골드가 부족합니다.", "#ff4d4d");
    return;
  }
  gold -= PROTECT_PRICE;
  protectScrolls++;
  addLog("변화 방지 약을 구매했습니다.", "#2196f3");
  updateUI();
}

function buyShinyCharm() {
  if (gold < CHARM_PRICE) {
    addLog("골드가 부족합니다! (빛나는부적: 20,000 G)", "#ff4d4d");
    return;
  }
  gold -= CHARM_PRICE;
  shinyCharms++;
  addLog("✨ <b>빛나는부적</b>을 1개 구매했습니다!", "#9c27b0");
  updateUI();
}

function upgradePokemon() {
  if (level >= 30) {
    addLog("최고 단계(+30 아르세우스)에 도달했습니다!", "#ffd700");
    return;
  }

  const cost = Math.floor(100 * Math.pow(1.35, level));
  const chance = Math.max(3, 100 - (level * 3.2));
  const useProtect = elUseProtect.checked;
  const useCharm = elUseCharm.checked;

  if (gold < cost) {
    addLog("골드가 부족합니다!", "#ff4d4d");
    return;
  }

  if (useProtect && protectScrolls <= 0) {
    addLog("방지 약이 없습니다!", "#ff9900");
    return;
  }

  if (useCharm && shinyCharms <= 0) {
    addLog("빛나는부적이 없습니다!", "#ff9900");
    return;
  }

  gold -= cost;

  // 진화 성공 시
  if (Math.random() * 100 < chance) {
    level++;

    let isCharmActive = false;
    if (useCharm && shinyCharms > 0) {
      shinyCharms--;
      isCharmActive = true;
    }

    // 진화 성공 후 이로치 재판정 (성공하면 이전 이로치 유무와 상관없이 이로치 확률 판정)
    const nextIsShiny = checkShinyProbability(isCharmActive);

    if (nextIsShiny) {
      isShiny = true;
      addLog(`✨ 대성공! ${isCharmActive ? '5%' : '1%'} 확률로 <b>[이로치 ${pokemonData[level].name}]</b> 변이 성공!`, "#ffd700");
    } else {
      isShiny = false; // 이로치 실패 시 일반 포켓몬으로 변경
      addLog(`진화 성공! (+${level} ${pokemonData[level].name})`, "#4da6ff");
    }
  } else {
    // 진화 실패 시
    if (useProtect && protectScrolls > 0) {
      protectScrolls--;
      addLog("진화 실패... 방지 약으로 형태를 유지했습니다. (부적 보존됨)", "#ff9900");
    } else {
      isShiny = checkShinyProbability(false);
      level = 0;
      if (isShiny) {
        addLog("진화 실패... 하지만 <b style='color:#ffd700;'>✨ [이로치 피츄]</b>가 나타났습니다!", "#ffd700");
      } else {
        addLog("진화 실패... (+0 피츄로 초기화)", "#ff4d4d");
      }
    }
  }

  updateUI();
}

function sellPokemon() {
  if (level === 0 && !isShiny) {
    addLog("기본 피츄는 전송할 수 없습니다.", "#ff9900");
    return;
  }
  const multiplier = isShiny ? 10 : 1;
  const sellPrice = Math.floor(50 * Math.pow(1.6, level)) * multiplier;
  gold += sellPrice;
  
  addLog(`+${level} ${isShiny ? '✨ 이로치 ' : ''}${pokemonData[level].name} 전송 완료 (+${sellPrice.toLocaleString()} G)`, "#4caf50");
  
  level = 0;
  isShiny = checkShinyProbability(false);
  if (isShiny) {
    addLog("✨ 알에서 <b>[이로치 피츄]</b>가 부화했습니다!", "#ffd700");
  }

  updateUI();
}

isShiny = checkShinyProbability(false);
updateUI();