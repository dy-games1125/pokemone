// +0 ~ +50 레벨별 포켓몬 데이터 (+50 아르세우스)
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
  { name: "자마젠타(방패왕)", normalColor: '#c62828', shinyColor: '#d81b60' },      // +26
  { name: "자시안(검왕)", normalColor: '#1565c0', shinyColor: '#00bcd4' }, // +27
  { name: "무한다이노", normalColor: '#4a148c', shinyColor: '#ff1744' },    // +28
  { name: "무한다이맥스 무한다이노", normalColor: '#311b92', shinyColor: '#ffea00' }, // +29
  { name: "코라이돈", normalColor: '#f44336', shinyColor: '#ffeb3b' },      // +30
  { name: "미라이돈", normalColor: '#7b1fa2', shinyColor: '#00e5ff' },      // +31
  { name: "오거폰", normalColor: '#4caf50', shinyColor: '#e91e63' },        // +32
  { name: "테라파고스", normalColor: '#00bcd4', shinyColor: '#e040fb' },    // +33
  { name: "썬더", normalColor: '#fbc02d', shinyColor: '#f57f17' },          // +34
  { name: "프리져", normalColor: '#00b0ff', shinyColor: '#80d8ff' },        // +35
  { name: "파이어", normalColor: '#ff3d00', shinyColor: '#ff9100' },        // +36
  { name: "라이코", normalColor: '#ffeb3b', shinyColor: '#ff9800' },        // +37
  { name: "앤테이", normalColor: '#d84315', shinyColor: '#4e342e' },        // +38
  { name: "스이쿤", normalColor: '#29b6f6', shinyColor: '#7a238a' },       // +39
  { name: "레지락", normalColor: '#8d6e63', shinyColor: '#ffb74d' },        // +40
  { name: "레지아이스", normalColor: '#80deea', shinyColor: '#00e5ff' },    // +41
  { name: "레지스틸", normalColor: '#9e9e9e', shinyColor: '#78909c' },      // +42
  { name: "라티오스", normalColor: '#1e88e5', shinyColor: '#76ff03' },      // +43
  { name: "라티아스", normalColor: '#e53935', shinyColor: '#ffeb3b' },      // +44
  { name: "테라키온", normalColor: '#a1887f', shinyColor: '#d4e157' },      // +45
  { name: "비리디온", normalColor: '#66bb6a', shinyColor: '#ff4081' },      // +46
  { name: "코바르온", normalColor: '#26a69a', shinyColor: '#80d8ff' },      // +47
  { name: "솔가레오", normalColor: '#fff59d', shinyColor: '#ff6d00' },      // +48
  { name: "루나아라", normalColor: '#ab47bc', shinyColor: '#e040fb' },      // +49
  { name: "아르세우스", normalColor: '#fff8e1', shinyColor: '#ffd700' }     // +50
];

function createPokemonSVG(lvl, shiny) {
  const idx = Math.min(lvl, pokemonData.length - 1);
  const pokemon = pokemonData[idx];
  const themeColor = shiny ? pokemon.shinyColor : pokemon.normalColor;
  const botColor = shiny ? '#212121' : '#f0f0f0';
  const auraColor = shiny ? '#ffd700' : themeColor;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <defs>
        <filter id="pokeGlow">
          <feGaussianBlur stdDeviation="${shiny ? 4 : (lvl >= 25 ? 3 : 1.5)}" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="${lvl >= 5 || shiny ? 'url(#pokeGlow)' : 'none'}">
        <circle cx="50" cy="50" r="42" fill="none" stroke="${auraColor}" stroke-width="${shiny ? 3.5 : 2}" opacity="${shiny ? 0.9 : 0.5}"/>
        <path d="M 12 50 A 38 38 0 0 1 88 50 Z" fill="${themeColor}" stroke="#1a1a1a" stroke-width="2.5"/>
        <path d="M 12 50 A 38 38 0 0 0 88 50 Z" fill="${botColor}" stroke="#1a1a1a" stroke-width="2.5"/>
        <line x1="10" y1="50" x2="90" y2="50" stroke="#1a1a1a" stroke-width="5"/>
        <circle cx="50" cy="50" r="12" fill="#1a1a1a"/>
        <circle cx="50" cy="50" r="8" fill="${shiny ? '#ffffff' : themeColor}"/>
        <circle cx="48" cy="48" r="2.5" fill="#ffffff" opacity="0.9"/>
        ${shiny ? `
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
let usedCodes = [];

const PROTECT_PRICE = 500;
const CHARM_PRICE = 20000;

let elGold, elProtectCount, elCharmCount, elClickAmount, elSwordName, elCost, elChance, elSellPrice, elLogBox, elUseProtect, elUseCharm, elSwordImg, elCheatInput;

// 데이터 저장 및 불러오기
function saveGame() {
  const saveData = {
    gold,
    level,
    protectScrolls,
    shinyCharms,
    isShiny,
    usedCodes: Array.from(usedCodes)
  };
  localStorage.setItem('pokemon_evolution_save', JSON.stringify(saveData));
}

function loadGame() {
  const saved = localStorage.getItem('pokemon_evolution_save');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      gold = data.gold ?? 1000;
      level = data.level ?? 0;
      protectScrolls = data.protectScrolls ?? 0;
      shinyCharms = data.shinyCharms ?? 0;
      isShiny = data.isShiny ?? false;
      usedCodes = new Set(data.usedCodes || []);
    } catch (e) {
      console.error("저장 데이터 로드 실패", e);
    }
  } else {
    usedCodes = new Set();
  }
}

function resetGame() {
  if (confirm("정말로 모든 데이터를 초기화하시겠습니까?")) {
    localStorage.removeItem('pokemon_evolution_save');
    location.reload();
  }
}

function checkShinyProbability(useCharm) {
  const rate = useCharm ? 0.05 : 0.01;
  return Math.random() < rate;
}

function updateUI() {
  if (!elGold) return;
  
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

  const cost = Math.floor(100 * Math.pow(1.25, level));
  
  // +49강 -> +50강(아르세우스) 진화 시 1% 확률, 그 외에는 레벨 비례 하락 (최저 2%)
  let chance = 100;
  if (level === 49) {
    chance = 1;
  } else if (level > 0) {
    chance = Math.max(2, 100 - (level * 2));
  }

  const sellPrice = Math.floor(50 * Math.pow(1.45, level)) * multiplier;

  elCost.textContent = cost.toLocaleString();
  elChance.textContent = chance.toFixed(0);
  elSellPrice.textContent = sellPrice.toLocaleString();

  elSwordImg.src = createPokemonSVG(level, isShiny);
  if (isShiny || level >= 25) {
    elSwordImg.style.animation = 'glowPulse 1.2s infinite alternate';
  } else {
    elSwordImg.style.animation = 'none';
  }

  saveGame();
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

// 수량 선택 구매 (방지 약)
function buyProtection() {
  const qtyInput = document.getElementById('protect-qty');
  const qty = Math.max(1, parseInt(qtyInput.value) || 1);
  const totalPrice = PROTECT_PRICE * qty;

  if (gold < totalPrice) {
    addLog(`골드가 부족합니다! (${qty}개 : ${totalPrice.toLocaleString()} G 필요)`, "#ff4d4d");
    return;
  }
  gold -= totalPrice;
  protectScrolls += qty;
  addLog(`변화 방지 약 <b>${qty}개</b>를 구매했습니다! (-${totalPrice.toLocaleString()} G)`, "#2196f3");
  updateUI();
}

// 수량 선택 구매 (빛나는부적)
function buyShinyCharm() {
  const qtyInput = document.getElementById('charm-qty');
  const qty = Math.max(1, parseInt(qtyInput.value) || 1);
  const totalPrice = CHARM_PRICE * qty;

  if (gold < totalPrice) {
    addLog(`골드가 부족합니다! (${qty}개 : ${totalPrice.toLocaleString()} G 필요)`, "#ff4d4d");
    return;
  }
  gold -= totalPrice;
  shinyCharms += qty;
  addLog(`✨ 빛나는부적 <b>${qty}개</b>를 구매했습니다! (-${totalPrice.toLocaleString()} G)`, "#9c27b0");
  updateUI();
}

// 개발자 코드 (신규 코드 "god-arceus" 포함 총 3개)
function applyCheatCode() {
  if (!elCheatInput) return;
  const code = elCheatInput.value.trim();

  if (!code) {
    addLog("코드를 입력해주세요.", "#ff9900");
    return;
  }

  if (usedCodes.has(code)) {
    addLog("이미 사용한 코드입니다.", "#ff4d4d");
    return;
  }

  if (code === "dy-games1125") {
    gold += 1000000;
    usedCodes.add(code);
    addLog("🎉 개발자 코드 [dy-games1125] 적용! <b>+1,000,000 G</b> 획득!", "#ffd700");
    elCheatInput.value = "";
  } else if (code === "dyloves") {
    gold += 700000;
    usedCodes.add(code);
    addLog("🎉 개발자 코드 [dyloves] 적용! <b>+700,000 G</b> 획득!", "#ffd700");
    elCheatInput.value = "";
  } else if (code === "god-arceus") {
    gold += 5000000;
    protectScrolls += 50;
    shinyCharms += 10;
    usedCodes.add(code);
    addLog("⚡ 신규 개발자 코드 [god-arceus] 적용! <b>+5,000,000 G, 방지권 50장, 부적 10장</b> 획득!", "#ffd700");
    elCheatInput.value = "";
  } else {
    addLog("유효하지 않은 개발자 코드입니다.", "#ff4d4d");
  }

  updateUI();
}

function upgradePokemon() {
  if (level >= 50) {
    addLog("최고 단계(+50 아르세우스)에 도달했습니다!", "#ffd700");
    return;
  }

  const cost = Math.floor(100 * Math.pow(1.25, level));
  
  let chance = 100;
  if (level === 49) {
    chance = 1; // 50강(아르세우스) 도전 시 확률 1%
  } else if (level > 0) {
    chance = Math.max(2, 100 - (level * 2));
  }

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

  if (Math.random() * 100 < chance) {
    level++;

    let isCharmActive = false;
    if (useCharm && shinyCharms > 0) {
      shinyCharms--;
      isCharmActive = true;
    }

    const nextIsShiny = checkShinyProbability(isCharmActive);

    if (nextIsShiny) {
      isShiny = true;
      addLog(`✨ 대성공! ${isCharmActive ? '5%' : '1%'} 확률로 <b>[이로치 ${pokemonData[level].name}]</b> 변이 성공!`, "#ffd700");
    } else {
      isShiny = false;
      addLog(`진화 성공! (+${level} ${pokemonData[level].name})`, "#4da6ff");
    }
  } else {
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
  const sellPrice = Math.floor(50 * Math.pow(1.45, level)) * multiplier;
  gold += sellPrice;
  
  addLog(`+${level} ${isShiny ? '✨ 이로치 ' : ''}${pokemonData[level].name} 전송 완료 (+${sellPrice.toLocaleString()} G)`, "#4caf50");
  
  level = 0;
  isShiny = checkShinyProbability(false);
  if (isShiny) {
    addLog("✨ 알에서 <b>[이로치 피츄]</b>가 부화했습니다!", "#ffd700");
  }

  updateUI();
}

// DOM 준비 시 저장된 데이터 로드 및 이벤트 연결
document.addEventListener('DOMContentLoaded', () => {
  elGold = document.getElementById('gold');
  elProtectCount = document.getElementById('protect-count');
  elCharmCount = document.getElementById('charm-count');
  elClickAmount = document.getElementById('click-amount');
  elSwordName = document.getElementById('sword-name');
  elCost = document.getElementById('cost');
  elChance = document.getElementById('chance');
  elSellPrice = document.getElementById('sell-price');
  elLogBox = document.getElementById('log-box');
  elUseProtect = document.getElementById('use-protect');
  elUseCharm = document.getElementById('use-charm');
  elSwordImg = document.getElementById('sword-img');
  elCheatInput = document.getElementById('cheat-code-input');

  document.getElementById('btn-earn')?.addEventListener('click', earnGold);
  document.getElementById('btn-buy')?.addEventListener('click', buyProtection);
  document.getElementById('btn-buy-charm')?.addEventListener('click', buyShinyCharm);
  document.getElementById('btn-upgrade')?.addEventListener('click', upgradePokemon);
  document.getElementById('btn-sell')?.addEventListener('click', sellPokemon);
  document.getElementById('btn-reset')?.addEventListener('click', resetGame);
  
  const btnApply = document.getElementById('btn-apply-code');
  if (btnApply) {
    btnApply.addEventListener('click', applyCheatCode);
  }

  if (elCheatInput) {
    elCheatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyCheatCode();
      }
    });
  }

  loadGame();
  updateUI();
});
