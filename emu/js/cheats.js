var AllSkills = [
  'Shot',
  'Volley',
  'Head',
  'Drive Shot',
  'Drive Bicycle (S)',
  'Falcon Shot (S)',
  'Falcon Volley (S)',
  'Razor Shot (S)',
  'Skylab Head',
  'Twin Volley',
  'Skylab 2x Head/Volley (S)',
  'Eagle Shot (S)',
  'Tiger Shot (S)',
  'Neo Tiger Shot (S)',
  'Bicycle Kick (S)',
  'Hyper Bicycle (S)',
  'Jumping Volley (S)',
  'Drive Tiger Shot (S)',
  'Cyclone Shot (S)',
  'Sano Shot (S)',
  'Banana Shot',
  'Buster Shot',
  'Mirage Shot (S)',
  'Mach Shot (S)',
  'Sidewind Shot',
  'Slider Shot (S)',
  'Cannon Shot (S)',
  'Fire Shot (S)',
  'Dyna Head',
  'CnPower Head',
  'Rocket Head',
  'Rising Dragon Head (S)',
  'BackShot Volley (S)',
  'Slider Cannon Head/Volley (S)',
  'DblEagle Shot',
  // END POWER SHOT
  'Pass',
  'Drive Pass (Tsubasa)',
  'Razor Pass (Soda)',
  'High Pass (Mantou)',
  'Dribble',
  'H. Lift Dribble (Tsubasa)',
  'Straight Break (Hyuga)',
  'Magic Breakthrough',
  'Clone Dribble',
  'High-speed Breakthrough',
  'Hedgehog Dribble',
  'One-Two',
  'Golden Combo',
  'Toho Combo',
  'Twin Attack',
  'Eiffel Attack',
  'Trap',
  'Let-through',
  'Our Clear',
  'Our Clear (Violent)',
  'Block',
  'Face Block',
  'High Block',
  'Power Block',
  'Tackle',
  'High Tackle',
  'Razor Tackle',
  'Power Tackle',
  'Tiger Tackle',
  'Tackle (Violent)',
  'Intercept',
  'High Intercept',
  'Enemy Clear',
  'Enemy Clear (Violent)',
  'Duel',
  'Duel (Violent)',
  'GK Catch',
  'Spin Save',
  'Clone Save',
  'Dark Illusion Save',
  'GK Punch',
  'Triangle Save',
  'GK Rush',
  'GK vs Dribble',
  'GK vs Shot',
];

var gametime = [];
for (
  let i = new Date('2025-01-01 00:00:00').getTime();
  i < new Date('2025-01-01 00:45:00').getTime();
  i += 60 * 1000
) {
  gametime.push(
    new Date(i).getMinutes() +
      ':' +
      ('0' + new Date(i).getSeconds()).substr(-2),
  );
}

// 00
var playerstrtemp0 = '00 NPC';

// 01–75 (players)
var playerstrtemp1 =
  '01 Tsubasa Ozora,02 Lennart[GK],03 Lima,04 Marini,05 Amaral(SPL),06 Doutor(SPL),07 Batista,08 Tahamata,09 Babinton(SPL),0A Giu,0B Platon,0C Hanji Urabe,0D Takeshi Kishida,0E Masao Nakayama,0F Yuzo Morisaki[GK],10 Shingo Takasugi,11 Taro Misaki,12 Mamoru Izawa,13 Hajime Taki,14 Ryo Ishizaki,15 Shun Nitta,16 Teppei Kisugi,17 Masao Tachibana,18 Kazuo Tachibana,19 Mitsuru Sano,1A Kojiro Hyuga,1B Makoto Soda,1C Hiroshi Jito,1D Hikaru Matsuyama,1E Kazuki Sorimachi,1F Takeshi Sawada,20 Jun Misugi,21 Genzo[GK],22 Ken[GK],23 Sartorustic,24 Libério,25 Da Silva,26 Mannone[GK],27 Toninho,28 Nei,29 Zagalo,2A Diuseu,2B Carlos,2C Santamaria,2D Jetorio,2E Hiroshi Jito(Kunimi),2F Mitsuru Sano(Kunimi),30 Masao Tachibana(Akita Shogyo),31 Kazuo Tachibana(Akita Shogyo),32 Makoto Soda(Roppongi),33 Taichi Nakanishi[GK],34 Jun Misugi(Musashi),35 Hikaru Matsuyama(Furano),36 Kojiro Hyuga(Toho),37 Kazuki Sorimachi(Toho),38 Takeshi Sawada(Toho),39 Ken(Toho)[GK],3A Lampião,3B Ramón Victorino,3C Da Silva(Uruguay),3D Capellmann,3E Kaltz,3F Metz,40 Genzo(Hamburg)[GK],41 Kojiro Hyuga(NPC Japan),42 Shun Nitta(NPC Japan),43 Mitsuru Sano(NPC Japan),44 Taro Misaki(NPC Japan),45 Jun Misugi(NPC Japan),46 Masao Tachibana(NPC Japan),47 Kazuo Tachibana(NPC Japan),48 Hiroshi Jito(NPC Japan),49 Ryo Ishizaki(NPC Japan),4A Makoto Soda(NPC Japan),4B Hikaru Matsuyama(NPC Japan),4C Ken(NPC Japan)[GK],4D Li Hannei,4E Li Hankun,4F Xia,50 Jim,51 Maiha,52 Zaic[GK],53 Lolima,54 Robertson,55 Belev,56 Rashin[GK],57 Napoleon,58 Pierre,59 Espanha,5A Lampião(Italy),5B Hernandez[GK],5C Islas,5D Libuta,5E Pascal,5F Sartorustic(Argentina),60 Diaz,61 Babinton(Argentina),62 Galvan,63 Schneider,64 Margas,65 Kaltz(West Germany),66 Metz(West Germany),67 Shester,68 Cabello(West Germany),69 Müller[GK],6A Carlos(Brazil),6B Zagalo(Brazil),6C Libério(Brazil),6D Nei(Brazil),6E Santamaria(Brazil),6F Toninho(Brazil),70 Doutor(Brazil),71 Amaral(Brazil),72 Diuseu(Brazil),73 Jetorio(Brazil),74 Geldis[GK],75 Coimbra';

// 76–C7 (generic roles by team)
var playerstrtemp2 =
  '76 Fluminense Goalkeeper,77 Fluminense Defender,78 Fluminense CB/FW,79 Corinthians Goalkeeper,7A Corinthians Defender,7B Corinthians CB/FW,7C Grêmio Defender,7D Grêmio CB/FW,7E Palmeiras Goalkeeper,7F Palmeiras Defender,80 Palmeiras CB/FW,81 Santos Goalkeeper,82 Santos Defender,83 Santos CB/FW,84 Flamengo Goalkeeper,85 Flamengo Defender,86 Flamengo CB/FW,87 Kunimi Goalkeeper,88 Kunimi Defender,89 Kunimi CB/FW,8A Akita Goalkeeper,8B Akita Defender,8C Akita CB/FW,8D Roppongi Defender,8E Roppongi CB/FW,8F Musashi Goalkeeper,90 Musashi Defender,91 Musashi CB/FW,92 Furano Goalkeeper,93 Furano Defender,94 Furano CB/FW,95 Toho Defender,96 Toho CB/FW,97 Roma Goalkeeper,98 Roma Defender,99 Roma CB/FW,9A Uruguay Goalkeeper,9B Uruguay Defender,9C Uruguay CB/FW,9D Hamburg Defender,9E Hamburg CB/FW,9F Syria Goalkeeper,A0 Syria Defender,A1 Syria CB/FW,A2 China Goalkeeper,A3 China Defender,A4 China CB/FW,A5 Iran Goalkeeper,A6 Iran DF/FW,A7 Iran CB,A8 North Korea Goalkeeper,A9 North Korea Defender,AA North Korea CB/FW,AB Saudi Arabia Goalkeeper,AC Saudi Arabia Defender,AD Saudi Arabia CB/FW,AE South Korea Goalkeeper,AF South Korea Defender,B0 South Korea CB/FW,B1 Vasco da Gama Goalkeeper,B2 Vasco da Gama FW/CB,B3 Poland Defender,B4 Poland CB/FW,B5 England Goalkeeper,B6 England Defender,B7 England CB/FW,B8 Soviet Union Defender,B9 Soviet Union CB/FW,BA France Goalkeeper,BB France Defender,BC France CB/FW,BD Mexico Goalkeeper,BE Mexico Defender,BF Mexico CB/FW,C0 Italy Defender,C1 Italy CB/FW,C2 Netherlands Goalkeeper,C3 Netherlands Defender,C4 Netherlands CB/FW,C5 Argentina Goalkeeper,C6 Argentina Common,C7 West Germany Common';

var playerstr = (
  playerstrtemp0 +
  ',' +
  playerstrtemp1 +
  ',' +
  playerstrtemp2
).split(',');

var teamlist = [
  'Stage 01 Fluminense',
  'Stage 02 Corinthians',
  'Stage 03 Grêmio',
  'Stage 04 Palmeiras',
  'Stage 05 Santos',
  'Stage 06 Flamengo',
  'Stage 07 Kunimi',
  'Stage 08 Akita',
  'Stage 09 Roppongi',
  'Stage 10 Musashi',
  'Stage 11 Furano',
  'Stage 12 Toho',
  'Stage 13 Roma',
  'Stage 14 Uruguay',
  'Stage 15 Hamburg',
  'Stage 16 Japan',
  'Stage 17 Syria',
  'Stage 18 China',
  'Stage 19 Iran',
  'Stage 20 North Korea',
  'Stage 21 Saudi Arabia',
  'Stage 22 South Korea',
  'Stage 23 Vasco da Gama',
  'Stage 24 Poland',
  'Stage 25 England',
  'Stage 26 Soviet Union',
  'Stage 27 France',
  'Stage 28 Mexico',
  'Stage 29 Italy',
  'Stage 30 Netherlands',
  'Stage 31 Argentina',
  'Stage 32 West Germany',
  'Stage 33 Brazil',
  'Stage 34 Brazil (Lower)',
];

// Shooting/Passing/Dribble/etc. command labels
var 射门指令 = [
  '00 Shoot',
  '01 Volley',
  '02 Header',
  '03 Spiral Shot',
  '04 Spiral Overhead Kick',
  '05 Falcon Shot',
  '06 Falcon Volley',
  '07 Razor Shot',
  '08 Aerial Hurricane',
  '09 Twin Shot',
  '0A Twin Hurricane',
  '0B Eagle Shot',
  '0C Tiger Shot',
  '0D Neo Tiger Shot',
  '0E Bicycle Kick',
  '0F Power Bicycle Kick',
  '10 Jump Volley (Misaki)',
  '11 Spinning Tiger Shot',
  '12 Hurricane Shot (Super Spin)',
  '13 Sano Combination Shot',
  '14 Banana Shot',
  '15 Nei Combination Shot',
  '16 Golden Eagle',
  '17 Magic Cannon',
  '18 Snake Shot',
  '19 Curve Shot',
  '1A Cannon Shot',
  '1B Fire Shot',
  '1C Bomb Header',
  '1D Power Header',
  '1E Rocket Header',
  '1F Rising Dragon Kick',
  '20 Backheel Shot',
  '21 Curve Cannon',
  '22 Zagalo Shot',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '28',
  '2A',
  '2B',
  '2C',
  '2D',
  '2E',
  '2F',
];
var 传球指令 = [
  '00 Pass',
  '01 Spiral Pass',
  '02 Razor Pass',
  '03 Topspin Pass',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '0A',
  '0B',
  '0C',
  '0D',
  '0E',
  '0F',
];
var 过人指令 = [
  '00 Dribble',
  '01 Lift Dribble',
  '02 Straight Dribble',
  '03 Magic Dribble',
  '04 Clone Dribble',
  '05 High-Speed Dribble',
  '06 Hedgehog Dribble',
  '07',
  '08',
  '09',
  '0A',
  '0B',
  '0C',
  '0D',
  '0E',
  '0F',
];
var 二过一指令 = [
  '00 One-Two',
  '01 Golden Combination',
  '02 Toho Combination',
  '03 Twin Attack',
  '04 Eiffel Attack',
  '05',
  '06',
  '07',
  '08',
  '09',
  '0A',
  '0B',
  '0C',
  '0D',
  '0E',
  '0F',
];
var 挡球指令 = [
  '00 Block',
  '01 Face Block',
  '02 High Block',
  '03 Power Block',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '0A',
  '0B',
  '0C',
  '0D',
  '0E',
  '0F',
];
var 铲球指令 = [
  '00 Tackle',
  '01 High Tackle',
  '02 Razor Tackle',
  '03 Power Tackle',
  '04 Tiger Tackle',
  '05 Tackle (Power)',
  '06',
  '07',
  '08',
  '09',
  '0A',
  '0B',
  '0C',
  '0D',
  '0E',
  '0F',
];
var 截球指令 = [
  '00 Intercept',
  '01 High Intercept',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '0A',
  '0B',
  '0C',
  '0D',
  '0E',
  '0F',
];

// 1) cheats_ct2 structure: [{ enabled, name, codes: [{address, value, compare}] }]
var cheats_ct2 = [
  {
    enabled: false,
    name: 'Stage',
    codes: [{ address: 0x0026, value: 0x00 }],
  },
  {
    enabled: false,
    name: 'Skill',
    codes: [{ address: 0x043c, value: 0x00 }],
  },
  {
    enabled: false,
    name: 'Match Time',
    codes: [{ address: 0x05f7, value: 0xb4 }],
  },
  {
    enabled: false,
    name: 'Our Goals',
    codes: [{ address: 0x0028, value: 0x00 }],
  },
  {
    enabled: false,
    name: 'COM Goals',
    codes: [{ address: 0x0029, value: 0x00 }],
  },
  {
    enabled: false,
    name: 'No.GK',
    codes: [
      { address: 0x0300, value: 0x21 },
      { address: 0x0302, value: 0x03 },
      { address: 0x0303, value: 0x60 },
    ],
  },

  {
    enabled: false,
    name: 'No.02',
    codes: [
      { address: 0x030c, value: 0x4d },
      { address: 0x030e, value: 0x03 },
      { address: 0x030f, value: 0x60 },
    ],
  },
  {
    enabled: false,
    name: 'No.03',
    codes: [
      { address: 0x0318, value: 0x4e },
      { address: 0x031a, value: 0x03 },
      { address: 0x031b, value: 0x60 },
    ],
  },
  {
    enabled: false,
    name: 'No.04',
    codes: [
      { address: 0x0324, value: 0x53 },
      { address: 0x0326, value: 0x03 },
      { address: 0x0327, value: 0x60 },
    ],
  },
  {
    enabled: false,
    name: 'No.05',
    codes: [
      { address: 0x0330, value: 0x54 },
      { address: 0x0332, value: 0x03 },
      { address: 0x0333, value: 0x60 },
    ],
  },
  {
    enabled: false,
    name: 'No.06',
    codes: [
      { address: 0x033c, value: 0x55 },
      { address: 0x033e, value: 0x03 },
      { address: 0x033f, value: 0x60 },
    ],
  },
  {
    enabled: false,
    name: 'No.07',
    codes: [
      { address: 0x0348, value: 0x57 },
      { address: 0x034a, value: 0x03 },
      { address: 0x034b, value: 0x60 },
    ],
  },
  {
    enabled: false,
    name: 'No.08',
    codes: [
      { address: 0x0354, value: 0x58 },
      { address: 0x0356, value: 0x03 },
      { address: 0x0357, value: 0x60 },
    ],
  },
  {
    enabled: false,
    name: 'No.09',
    codes: [
      { address: 0x0360, value: 0x59 },
      { address: 0x0362, value: 0x03 },
      { address: 0x0363, value: 0x60 },
    ],
  },
  {
    enabled: false,
    name: 'No.10',
    codes: [
      { address: 0x036c, value: 0x01 },
      { address: 0x036e, value: 0x03 },
      { address: 0x036f, value: 0x60 },
    ],
  },
  {
    enabled: false,
    name: 'No.11',
    codes: [
      { address: 0x0378, value: 0x75 },
      { address: 0x037a, value: 0x03 },
      { address: 0x037b, value: 0x60 },
    ],
  },
];

document.getElementById('ct2cheat').onclick = function () {
  const cheatDiv = document.getElementById('cheatdiv');
  const menus = document.querySelector('.menus.active'); // get menus active
  if (cheatDiv) {
    cheatDiv.style.display = 'block';
    if (menus) menus.classList.remove('active'); // hide menus active
  }
};

function bindCheat() {
  if (!document.getElementById('cheatdiv')) {
    const cheatDiv = document.createElement('div');
    cheatDiv.id = 'cheatdiv';
    cheatDiv.style.display = 'none';
    cheatDiv.style.position = 'fixed';
    cheatDiv.style.top = '80px';
    cheatDiv.style.right = '0';
    // cheatDiv.style.top = '50%';
    // cheatDiv.style.left = '50%';
    // cheatDiv.style.transform = 'translate(-50%,-50%)';
    cheatDiv.style.background = '#222';
    cheatDiv.style.color = '#fff';
    cheatDiv.style.padding = '24px 32px 16px 32px';
    cheatDiv.style.borderRadius = '12px';
    cheatDiv.style.boxShadow = '0 4px 24px #000a';
    cheatDiv.style.zIndex = 1000; // make sure on top
    cheatDiv.style.minWidth = '320px';
    cheatDiv.style.maxWidth = '90vw';
    cheatDiv.style.maxHeight = '80vh';
    cheatDiv.style.overflowY = 'auto';

    // close button
    const closeBtn = document.createElement('button');
    closeBtn.innerText = '×';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '8px';
    closeBtn.style.right = '12px';
    closeBtn.style.background = 'transparent';
    closeBtn.style.color = '#fff';
    closeBtn.style.fontSize = '22px';
    closeBtn.style.border = 'none';
    closeBtn.style.cursor = 'pointer';
    closeBtn.onclick = function () {
      cheatDiv.style.display = 'none';
    };
    cheatDiv.appendChild(closeBtn);

    // title
    const title = document.createElement('div');
    title.innerHTML =
      '<b>Captain Tsubasa II — Cheats</b><br><small>Tick options and click Apply to enable.<br>Some functions must be used during matches.</small>';
    title.style.marginBottom = '12px';
    cheatDiv.appendChild(title);

    // clear all
    const cancelAll = document.createElement('button');
    cancelAll.innerText = 'Clear All';
    cancelAll.style.marginBottom = '8px';
    cancelAll.onclick = function () {
      cheatDiv
        .querySelectorAll('input[type=checkbox][data-ct2cheat]')
        .forEach((cb) => (cb.checked = false));
    };
    cheatDiv.appendChild(cancelAll);

    // apply
    const applyBtn = document.createElement('button');
    applyBtn.innerText = 'Apply Cheats';
    applyBtn.style.marginTop = '8px';
    applyBtn.onclick = function () {
      applyCT2Cheats();
    };
    cheatDiv.appendChild(applyBtn);

    // list container
    const cheatsList = document.createElement('div');
    cheatsList.id = 'ct2cheatlist';
    cheatsList.style.margin = '10px 0 10px 0';
    cheatDiv.appendChild(cheatsList);

    var container =
      document.getElementById('fullscreenContainer') || document.body;
    container.appendChild(cheatDiv);
  }

  // render items
  const cheatsList = document.getElementById('ct2cheatlist');
  if (cheatsList) {
    cheatsList.innerHTML = '';
    cheats_ct2.forEach((item, idx) => {
      const line = document.createElement('div');
      line.style.marginBottom = '4px';

      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.dataset.ct2cheat = '1';
      cb.id = 'ct2cheat_cb_' + idx;
      cb.checked = !!item.enabled;
      line.appendChild(cb);

      const label = document.createElement('label');
      label.htmlFor = cb.id;
      label.innerText = item.name;
      label.style.marginLeft = '6px';
      line.appendChild(label);

      // dropdown
      const select = document.createElement('select');
      select.style.marginLeft = '10px';
      let options = [];

      // fill options based on cheat type
      if (item.name === 'Stage') {
        options = teamlist.map((txt, i) => ({ text: txt, value: i }));
      } else if (item.name === 'Skill') {
        options = AllSkills.map((txt, i) => ({ text: txt, value: i }));
      } else if (item.name === 'Match Time') {
        options = gametime.map((txt, i) => ({ text: txt, value: i }));
      } else if (item.name === 'Our Goals' || item.name === 'COM Goals') {
        options = Array.from({ length: 256 }, (_, i) => ({
          text: i,
          value: i,
        }));
      } else if (/No\./.test(item.name)) {
        options = playerstr.map((txt, i) => ({ text: txt, value: i }));
      }

      if (options.length > 0) {
        options.forEach((opt) => {
          const op = document.createElement('option');
          op.value = opt.value;
          op.text = opt.text;
          if (item.codes && item.codes[0] && opt.value == item.codes[0].value) {
            op.selected = true;
          }
          select.appendChild(op);
        });
        select.onchange = function () {
          if (item.codes && item.codes[0]) {
            item.codes[0].value = Number(this.value);
          }
        };
        line.appendChild(select);
      }

      cheatsList.appendChild(line);
    });
  }
}

// apply cheats to the game
function applyCT2Cheats() {
  const cbs = document.querySelectorAll('input[type=checkbox][data-ct2cheat]');
  cbs.forEach((cb, idx) => {
    cheats_ct2[idx].enabled = cb.checked;
  });
  nes.cheatCodes_ct2 = cheats_ct2;
  log('Cheats applied!', 'chectCT2');
  console.log(cheats_ct2);
}

// init
bindCheat();
