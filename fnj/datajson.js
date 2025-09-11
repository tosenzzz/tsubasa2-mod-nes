//00
var playerstrtemp0 = '00 NPC';
//01-75
var playerstrtemp1 =
  '01 Tsubasa (SaoPaulo),02 [GK] Lennart (SaoPaulo),03 Lima (SaoPaulo),04 Marini (SaoPaulo),05 Amaral (SaoPaulo),06 Dotoru (SaoPaulo),07 Batista (SaoPaulo),08 Tahamata (SaoPaulo),09 Babington (SaoPaulo),0A Gil (SaoPaulo),0B Platon (SaoPaulo),==========,' +
  '0C Urabe (Nankatsu),0D Kishida (Nankatsu),0E Nakayama (Nankatsu),0F [GK] Morisaki (Nankatsu),10 Takasugi (Nankatsu),11 Misaki (Nankatsu),12 Izawa (Nankatsu),13 Taki (Nankatsu),14 Ishizaki (Nankatsu),15 Nitta (Nankatsu),16 Kisugi (Nankatsu),==========,' +
  '17 Masao (Japan),18 Kazuo (Japan),19 Sano (Japan),1A Hyuuga (Japan),1B Souda (Japan),1C Jitou (Japan),1D Matsuyama (Japan),1E Sorimatsu (Japan),1F Sawada (Japan),20 Misugi (Japan),21 [GK] Genzo (Japan),22 [GK] Ken (Japan),==========,' +
  '23 Sartoris (Corinthians),24 Riberio (Corinthians),25 Da Silva (Gremio),26 [GK] Meao (Gremio),27 Toninho (Palmeiras),28 Nei (Palmeiras),29 Zagalo (Santos),2A Dirceu (Santos),2B Carlos (Flumi),2C Santamaria (Flumi),2D Jetorio (Flumi),==========,' +
  '2E Jitou (Kunimi),2F Sano (Kunimi),30 Masao (Akira),31 Kazuo (Akira),32 Souda (Tatsu),33 [GK] Nakanishi (Tatsu),34 Misugi (Musashi),35 Matsuyama (Furano),36 Hyuuga (Toho),37 Sorimatsu (Toho),38 Sawada (Toho),39 [GK] Ken (Toho),3A Rampion (Roma),3B Victorino (Uruguay),3C Da Silva (Uruguay),==========,' +
  '3D Copellmann (Hamburg),3E Kaltz (Hamburg),3F Mezza (Hamburg),40 [GK] Genzo (Hamburg),41 Hyuuga (Japan),42 Nitta (Japan),43 Sano (Japan),44 Misaki (Japan),45 Misugi (Japan),46 Masao (Japan),47 Kazuo (Japan),48 Jitou (Japan),49 Ishizaki (Japan),4A Souda (Japan),4B Matsuyama (Japan),4C [GK] Ken (Japan),==========,' +
  '4D Lee Hanne (China),4E Lee Bankun (China),4F Sha (Korea),50 Kimu (Korea),51 Maher (Poland),52 [GK] Yaisch (Poland),53 Lorimar (England),54 Robson (England),55 Beraev (Soviet),56 [GK] Rashin (Soviet),57 Napoleon (France),58 Pierre (France),59 Espana (Mexico),5A Rampion (Italy),5B [GK] Fernandez (Italy),5C Isurasu (Holland),5D Ributa (Holland),==========,' +
  '5E Pascal (Argentina),5F Satrustegui (Argentina),60 Diaz (Argentina),61 Babington (Argentina),62 Galvan (Argentina),63 Schneider (Germany),64 Margus (Germany),65 Kaltz (Germany),66 Mezza (Germany),67 Schester (Germany),68 Copellmann (Germany),69 [GK] Muller (Germany),==========,' +
  '6A Carlos (Brazil),6B Zagalo (Brazil),6C Riberio (Brazil),6D Nei (Brazil),6E Santamaria (Brazil),6F Toninho (Brazil),70 Dotoru (Brazil),71 Amaral (Brazil),72 Dirceu (Brazil),73 Jetorio (Brazil),74 [GK] Gertize (Brazil),75 Coimbra (Brazil),==========';

var gkPlayer = playerstrtemp1
  .split(',')
  .filter((v) => v.indexOf('GK') >= 0)
  .map((v) => v.split(' ', 1)[0].num());
//76-C7
var playerstrtemp2 =
  '76 Fluminense GK,77 Fluminense Defender,78 Fluminense CB/Forward,79 Corinthians GK,7A Corinthians Defender,7B Corinthians CB/Forward,7C Grêmio Defender,7D Grêmio CB/Forward,7E Palmeiras GK,7F Palmeiras Defender,80 Palmeiras CB/Forward,81 Santos GK,82 Santos Defender,83 Santos CB/Forward,84 Flamengo GK,85 Flamengo Defender,86 Flamengo CB/Forward,87 Kunimi GK,88 Kunimi Defender,89 Kunimi CB/Forward,8A Akita GK,8B Akita Defender,8C Akita CB/Forward,8D Roppongi Defender,8E Roppongi CB/Forward,8F Musashi GK,90 Musashi Defender,91 Musashi CB/Forward,92 Furano GK,93 Furano Defender,94 Furano CB/Forward,95 Toho Defender,96 Toho CB/Forward,97 Roma GK,98 Roma Defender,99 Roma CB/Forward,' +
  '9A Uruguay GK,9B Uruguay Defender,9C Uruguay CB/Forward,9D Hamburg Defender,9E Hamburg CB/Forward,9F Syria GK,A0 Syria Defender,A1 Syria CB/Forward,A2 China GK,A3 China Defender,A4 China CB/Forward,A5 Iran GK,A6 Iran Defender/Forward,A7 Iran CB,A8 North Korea GK,A9 North Korea Defender,AA North Korea CB/Forward,AB Saudi Arabia GK,AC Saudi Arabia Defender,AD Saudi Arabia CB/Forward,AE South Korea GK,AF South Korea Defender,B0 South Korea CB/Forward,B1 Vasco da Gama GK,B2 Vasco da Gama Forward/CB,' +
  'B3 Poland Defender,B4 Poland CB/Forward,B5 England GK,B6 England Defender,B7 England CB/Forward,B8 Soviet Union Defender,B9 Soviet Union CB/Forward,BA France GK,BB France Defender,BC France CB/Forward,BD Mexico GK,BE Mexico Defender,BF Mexico CB/Forward,C0 Italy Defender,C1 Italy CB/Forward,C2 Netherlands GK,C3 Netherlands Defender,C4 Netherlands CB/Forward,C5 Argentina GK,C6 Argentina Common,C7 West Germany Common';

// AI C8-CB
var playerstrtemp3 =
  'C8 Avalanche Matsuyama,C9 Berserk Diaz,CA Berserk Schneider,CB Musashi scrubs (2nd half)';

//76-C0: Appearance / Color
var playerstrtemp4 =
  '76 Tsubasa (Japan),77 [GK] Morisaki (Japan),78 Takasugi (Japan),79 Misaki (Japan),7A Izawa (Japan),7B Taki (Japan),7C Ishizaki (Japan),7D Nitta (Japan),7E Kisugi (Japan),7F Stage 1 Common,80 Stage 2 Common,81 Stage 3 Common,82 Stage 4 Common,83 Stage 5 Common,84 Stage 6 Common,85 Stage 7 Common,86 Stage 8 Common,87 Stage 9 Common,88 Stage 10 Common,89 Stage 11 Common,8A Stage 12 Common,8B Stage 13 Common,8C Stage 14 Common,8D Stage 15 Common,8E (Invalid) Stage 16 Common,8F Stage 17 Common,90 Stage 18 Common,91 Stage 19 Common,92 Stage 20 Common,93 Stage 21 Common,94 Stage 22 Common,95 Stage 23 Common,96 Stage 24 Common,97 Stage 25 Common,98 Stage 26 Common,99 Stage 27 Common,9A Stage 28 Common,' +
  '9B Stage 29 Common,9C Stage 30 Common,9D Stage 31 Common,9E Stage 32 Common,9F Stage 1 GK,A0 Stage 2 GK,A1 Stage 3 GK,A2 Stage 4 GK,A3 Stage 5 GK,A4 Stage 6 GK,A5 Stage 7 GK,A6 Stage 8 GK,A7 Stage 9 GK,A8 Stage 10 GK,A9 Stage 11 GK,AA Stage 12 GK,AB Stage 13 GK,AC Stage 14 GK,AD Stage 15 GK,AE Stage 16 GK,AF Stage 17 GK,B0 Stage 18 GK,B1 Stage 19 GK,B2 Stage 20 GK,B3 Stage 21 GK,B4 Stage 22 GK,B5 Stage 23 GK,B6 Stage 24 GK,B7 Stage 25 GK,B8 Stage 26 GK,B9 Stage 27 GK,BA Stage 28 GK,BB Stage 29 GK,BC Stage 30 GK,BD Stage 31 GK,BE Stage 32 GK,BF Stage 33 GK,C0 Stage 34 GK';

// Player Abilities
var playerstrtemp5 =
  '00 Lima/Batista/Nakayama,01 Tsubasa (SaoPaulo),02 Misaki (Nankatsu),03 Nitta (Nankatsu),04 Kisugi (Nankatsu),05 Platton (SaoPaulo),06 Tahamata (SaoPaulo),07 Babinton (SaoPaulo),08 Lima (SaoPaulo),09 Dottil (SaoPaulo),0A Urabe (Nankatsu),0B Marini (SaoPaulo),0C Takasugi (Japan),0D Izawa (Japan),0E Ishizaki (Japan),0F Tachibana Brothers (Japan),10 Sano (Japan),11 Hyuga (Japan),12 Soda (Japan),13 Jitou (Japan),14 Matsuyama (Japan),15 Sorimachi (Japan),16 Sawada (Japan),17 Misugi (Japan),18 Fluminense Defender,19 Fluminense Forward,1A Corinthians Defender,1B Corinthians Forward,1C Sartoris (Corinthians),1D Libério (Corinthians),1E Gremio Defender,1F Gremio Forward,20 Da Silva (Gremio),' +
  '21 Palmeiras Defender,22 Palmeiras Forward,23 Toninho (Palmeiras),24 Nei (Palmeiras),25 Santos Defender,26 Santos Forward,27 Zagalo (Santos),28 Diuseu (Santos),29 Flamengo Defender,2A Flamengo Forward,2B Santana (Flamengo),2C Santamarino (Flamengo),2D Jetorio (Flamengo),2E Kunimi Defender,2F Kunimi Forward,30 Jito (Kunimi),31 Soya (Kunimi),32 Akita Defender,33 Akita Forward,34 Tachibana (Akita),35 Roppongi Defender,36 Roppongi Forward,37 Soda (Roppongi),38 Musashi Defender,39 Musashi Forward,3A Misugi (Musashi),3B Furano Defender,3C Furano Forward,3D Matsuyama (Furano),3E Toho Defender,3F Toho Forward,40 Hyuga (Toho),41 Sorimachi (Toho),42 Sawada (Toho),43 Roma Defender,44 Roma Forward,45 Lampião (Roma),' +
  '46 Uruguay Defender,47 Uruguay Forward,48 Victorino (Uruguay),49 Da Silva (Uruguay),4A Hamburg Defender,4B Hamburg Forward,4C Cabello (Hamburg),4D Kaltz (Hamburg),4E Mantu (Hamburg),4F Hyuga (Hamburg),50 Nitta (Hamburg),51 Soya (Hamburg),52 Misaki (Hamburg),53 Misugi (Hamburg),54 Tachibana Brothers (Hamburg),55 Jito (Hamburg),56 Ishizaki (Hamburg),57 Soda (Hamburg),58 Matsuyama (Hamburg),59 Syria Defender,5A Syria Forward,5B China Defender,5C China Forward,5D Li Brothers (China),5E Iran Defender,5F Iran Forward,60 North Korea Defender,61 North Korea Forward,62 Saudi Arabia Defender,63 Saudi Arabia Forward,64 Korea Defender,65 Korea Forward,66 Cha Incheon (Korea),67 Lee Longyun (Korea),' +
  '68 Vasco Da Gama Common,69 Poland Defender,6A Poland Forward,6B Maiha (Poland),6C England Defender,6D England Forward,6E Lolima (England),6F Robertson (England),70 Soviet Union Defender,71 Soviet Union Forward,72 Belev (Soviet),73 France Defender,74 France Forward,75 Napoleon (France),76 Pierre (France),77 Mexico Defender,78 Mexico Forward,79 Espanha (Mexico),7A Italy Defender,7B Italy Forward,7C Lampião (Italy),7D Netherlands Defender,7E Netherlands Forward,7F Islas (Netherlands),80 Libuta (Netherlands),81 Argentina Common,82 Pascal (Argentina),83 Sartoris (Argentina),84 Diaz (Argentina),85 Babinton (Argentina),86 Galvan (Argentina),' +
  '87 Germany Common,88 Schneider (Germany),89 Margus (Germany),8A Kaltz (Germany),8B Mezza (Germany),8C Schester (Germany),8D Carlos (Brazil),8E Santana (Brazil),8F Zagalo (Brazil),90 Libério (Brazil),91 Nei (Brazil),92 Santamarino (Brazil),93 Toninho (Brazil),94 Doutor (Brazil),95 Amaral (Brazil),96 Diuseu (Brazil),97 Jetorio (Brazil),98 Coimbra (Brazil),99 Berserk Matsuyama,9A Berserk Diaz,9B Berserk Schneider,9C Berserk Furano Common';

// GK Abilities
var playerstrtemp6 =
  '9D Lennart (SaoPaulo),9E Morisaki (Nankatsu),9F Ken (Japan),A0 Genzo (Japan),A1 Stage 1 GK,A2 Stage 2 GK,A3 Mannone (Gremio),A4 Stage 4 GK,A5 Stage 5 GK,A6 Stage 6 GK,A7 Kunimi GK,A8 Akita GK,A9 Nakanishi (Tatsu),AA Musashi GK,AB Furano GK,AC Ken (Toho),AD Roma GK,AE Uruguay GK,AF Genzo (Hamburg),B0 Ken (Hamburg),B1 Syria GK,B2 China GK,B3 Iran GK,B4 North Korea GK,B5 Saudi Arabia GK,B6 South Korea GK,B7 Vasco da Gama GK,B8 Yaisch (Poland),B9 England GK,BA Rashin (Soviet),BB France GK,BC Mexico GK,BD Fernandez (Italy),BE Netherlands GK,BF Argentina GK,C0 Muller (Germany),C1 Gertize (Brazil)';

// All skills
var AllSkills =
  '00 Shot,03 Drive Shot,04 Drive Bicycle (S),05 Falcon Shot (S),07 Razor Shot (S),0B Eagle Shot (S),0C Tiger Shot (S),0D Neo Tiger Shot (S),11 Drive Tiger Shot (S),' +
  '12 Cyclone Shot (S),13 Sano Shot (S),14 Banana Shot,15 Buster Shot,16 Mirage Shot (S),17 Mach Shot (S),18 Sidewind Shot,19 Slider Shot (S),1A Cannon Shot (S),1B Fire Shot (S),22 DblEagle Shot,==========,' +
  '01 Volley,06 Falcon Volley (S),09 Golden Volley,0A Skylab 2x Head/Volley (S),10 Jumping Volley (S),20 BackShot Volley (S),21 Slider Cannon Head/Volley (S),==========,' +
  '02 Head,08 Skylab Head,0E Bicycle Kick (S),0F Hyper Bicycle (S),1C Dyna Head,1D Power Head,1E Rocket Head,1F Rising Dragon Head (S),' +
  '==========,' +
  '23 Pass,24 Drive Pass (S),25 Razor Pass (S),26 T-Spin Pass,==========,' +
  '27 Dribble,28 H. Lift Dribble (S),29 Force Dribble,2A Fake Dribble,2B Speed Dribble,2C Fast Dribble,2D Super Dribble (S),==========,' +
  '2E One-Two,2F Golden Combo,30 Toho Combo,31 Twin Combo,32 Eiffel Attack,==========,33 Trap,34 Let-through,35 Our Clear,36 Our Clear (Violent),==========,' +
  '37 Block,38 Face Block,39 Skylab Block,3A Power Block,==========,' +
  '3B Tackle,3C Skylab Tackle,3D Razor Tackle,3E Power Tackle,3F Tiger Tackle,40 Tackle (Violent),==========,' +
  '41 Intercept,42 Skylab Intercept (S),==========,43 Enemy Clear,44 Enemy Clear (Violent),45 Duel,46 Duel (Violent),==========,' +
  '47 GK Catch,4B GK Punch,48 Spin Save,49 Illusion Save,4A Dark Illusion Save,4C Triangle Save,==========,4D GK Rush,4E GK vs Dribble,4F GK vs Shot';
var Skill_TYPE_ =
  'Special Shot,Special Passing,Special Dribble,Special 1-2,Special Block,Special Tackle,Special Intercept';
var Skill_SHOT_ =
  '0C Drive Shot,50 Banana Shot,54 Buster Shot,14 Falcon Shot (S),1C Razor Shot (S),2C Eagle Shot (S),30 Tiger Shot (S),34 Neo Tiger Shot (S),44 Drive Tiger Shot (S),' +
  '48 Cyclone Shot (S),4C Sano Shot (S),58 Mirage Shot (S),5C Mach Shot (S),60 Sidewind Shot,64 Slider Shot (S),68 Cannon Shot (S),6C Fire Shot (S),88 DblEagle Shot,============,' +
  '19 Falcon Volley (S),25 Golden Volley (S),29 Skylab 2x Volley (S),41 Jumping Volley (S),49 Cyclone Volley (S),81 BackShot Volley (S),85 Slider Cannon Volley (S),============,' +
  '72 Dyna Head,76 Power Head,7A Rocket Head,22 Skylab Head (?),12 Drive Bicycle (?),2A Skylab 2x Head (S),3A Bicycle Kick (S),3E Hyper Bicycle (S),4A Cyclone Head (S),7E Rising Dragon Head (S),86 Slider Cannon Head (S)';
var Skill_PASS_ = '01 Drive Pass (S),02 Razor Pass (S),03 T-Spin Pass';
var Skill_DRIBBLE_ =
  '01 H. Lift Dribble,02 Force Dribble,03 Fake Dribble,04 Speed Dribble (S),05 Fast Dribble,06 Super Dribble (S)';
var Skill_COMBO_ =
  '81 Golden Combo (S),82 Toho Combo (S),83 Twin Combo (S),84 Eiffel Combo (S),01 Golden Combo (?),02 Toho Combo (?),03 Twin Combo (?)';
var Skill_BLOCK_ =
  '81 Face Block,82 Skylab Block (S),83 Power Block,02 Skylab Block (?)';
var Skill_TACKLE_ =
  '81 Skylab Tackle (S),82 Razor Tackle (S),83 Power Tackle,84 Tiger Tackle,01 Skylab Tackle (?)';
var Skill_ICEPT_ = '81 Skylab Intercept (S),01 Power Intercept (?)';
var Skill_GK_ = { 1: 'Spin Save', 2: 'Illusion Save', 3: 'Dark Illusion Save' };
var GK_Master_ = `3D2E5=20 F0 BB;
37C00=BD 62 D3 48 8A 49 06 AA A9 85 85 37 A9 F2 85 36 20 79 CE AD 3E 04 F0 04 68 A9 00 48 68 60;`;

// Edit skill for Player
var PlayerName_Skill = playerstrtemp1.split(',');
var Ai_HP_Index = (playerstrtemp5 + ',' + playerstrtemp6).split(',');

//00-C7
var playerstr = (
  playerstrtemp0 +
  ',' +
  playerstrtemp1 +
  ',' +
  playerstrtemp2
).split(',');

////////////AI
//01-CB
var Aiplayerstr = (
  playerstrtemp1 +
  ',' +
  playerstrtemp2 +
  ',' +
  playerstrtemp3
).split(',');

////////////
//01-C0: Appearance / Color
var PlayerColorList = (playerstrtemp1 + ',' + playerstrtemp4).split(',');
var Edit_playerColor = 0x2b821; //明星颜色
var Edit_NpcColor = 0x2b6d7; //杂鱼颜色
var Edit_ModType = 0x28901; //头型
var PlayModList = [
  '00 Tsubasa',
  '01 Babinton',
  '02 Giu',
  '03 Taki',
  '04 Marini',
  '05 Dottil',
  '06 Lima',
  '07 Hyuga',
  '08 Common',
  '09 Urabe',
  '0A Lee Longyun',
  '0B Coimbra',
  '0C Genzo',
  '0D Müller',
  '0E Ken',
  '0F Lennart, Mannone, Rashin, Hernandez',
  '10 Morisaki',
  '11 Yaisch, Nakanishi',
];

var player_data_GK = playerstrtemp6.split(',');
var player_data_arr = playerstrtemp5.split(',');
var player_data_addr = 0x39fde; //球员能力值数据地址
var player_data_GK_addr = 0x3ae96; //守门员能力值数据地址
var AttackCmdAddr = 0x39484;
var DefendCmdAddr = 0x3956e;
var GKcmdAddr = 0x395c2;
var TackleAnimation = 0x2077b;
var SkillAddr = 0x38e2d;
var PortraitAddr = 0x22b63;

// Name, portrait, background, ball path
var Skill_o_str = [
  // Nitta's Falcon Shot: Background: 21D10  - Ball's Path: 21F12
  // Zagalo's Double Eel Shot: Background: 21D4A - Ball's Path:21F4C
  'Drive Shot (Tsubasa),22B63,21D0C,21F0E', // (ramcheck2(0x21D0C, NesHex)+7).hex()
  'Drive Shot (Diaz),22B84',
  'Eagle Shot,22BFB,21D1C,21F1E',
  'Razor Shot (Roppongi Soda),22C2E',
  'Razor Shot (Japan Soda),22C06,21D14,21F16',
  'Eagle Shot (Furano Matsuyama),22C58',
  'Eagle Shot (Japan Matsuyama),22C39',
  'Tiger Shot (Toho Hyuga),22C79,21D1E,21F20',
  'Tiger Shot (Japan Hyuga),22C63',
  'Neo Tiger Shot (Toho Hyuga),22CAE,21D20,21F22',
  'Neo Tiger Shot (Japan Hyuga),22C88',
  'Drive Tiger Shot (Tsubasa) (Portrait 1),22CCE',
  'Drive Tiger Shot (Hyuga) (Portrait 2),22CD5',
  'Cyclone Shot (Portrait 1),23DD5',
  'Cyclone Shot (Portrait 2),230C9',
  'Sano Combination Shot (Kunimi Jito),22D57',
  'Sano Combination Shot (Japan Jito),22D33',
  'Mirage Shot (Brazil Santana),22DB6,21D32,21F34',
  'Mirage Shot (Flamengo),22D97',
  'Mach Shot,22DBD,21D34,21F36',
  'Slider Shot,22DEE',
  'Cannon Shot,22E0B',
  'Fire Shot,22E21,21D3C,21F3E',
  'Falcon Volley,231D5',
  'Misaki Jump Volley,232CD',
  'BackheelShot Volley (Portrait 1),23281',
  'BackheelShot Volley (Portrait 2),232A6',
  'Slider Cannon (Portrait 1),23156',
  'Slider Cannon (Portrait 2),2315D',
  'Drive Bicycle Kick,22FDD',
  'Hyper Bicycle (Misugi, Musashi),230AA',
  'Hyper Bicycle (Misugi, Japan),23090',
  // ============================================
  'Illusion Dribble (Brazil Santana),228A3',
  'Illusion Dribble (Flamengo),22899',
  'Drive Pass,2291C',
  'Hedgehog Dribble (Kaltz, Germany),22F6C',
  'Hedgehog Dribble (Kaltz, Hamburg),228F9',
  'Razor Pass (Japan Soda),22F86',
  'Razor Pass (Roppongi Soda),22F9B',
  'Golden Combination (Portrait 1),23C0B',
  'Golden Combination (Portrait 2),23C12',
  'Golden Combination (Argentina) (Portrait 1),23C67',
  'Golden Combination (Argentina) (Portrait 2),23C60',
  'Toho Combination (Japan) (Portrait 1),23C1C',
  'Toho Combination (Japan) (Portrait 2),23C23',
  'Toho Combination (Toho) (Portrait 1),23C2D',
  'Toho Combination (Toho) (Portrait 2),23C34',
  'Tachibana Combination (Japan) (Portrait 1),23C3E',
  'Tachibana Combination (Japan) (Portrait 2),23C45',
  'Tachibana Combination (Akita) (Portrait 1),23C4F',
  'Tachibana Combination (Akita) (Portrait 2),23C56',
  'Eiffel Attack (Portrait 1),23C71',
  'Eiffel Attack (Portrait 2),23C78',
  'Twin Shot (Tsubasa, Misaki) (Portrait 1),23215',
  'Twin Shot (Tsubasa, Misaki) (Portrait 2),2321C',
  'Twin Shot (Japan Tachibana) (Portrait 1),23235',
  'Twin Shot (Japan Tachibana) (Portrait 2),2323C',
  'Twin Shot (Akita Tachibana) (Portrait 1),23255',
  'Twin Shot (Akita Tachibana) (Portrait 2),2325C',
  'Aerial Hurricane (Japan Tachibana) (Portrait 1),22E7E',
  'Aerial Hurricane (Japan Tachibana) (Portrait 2),22E85',
  'Aerial Hurricane (Akita Tachibana) (Portrait 1),22EB9',
  'Aerial Hurricane (Akita Tachibana) (Portrait 2),22EC0',
  'Twin Hurricane (Japan Tachibana) (Portrait 1),22EE9',
  'Twin Hurricane (Japan Jito) (Portrait 2),22EF0',
  'Twin Hurricane (Japan Tachibana) (Portrait 3),22F21',
  'Twin Hurricane (Japan Tachibana) (Portrait 4),22F28',
  'Twin Hurricane (Japan Jito) (Portrait 5),22F2D',
  'Japan Hyuga Forced Dribble I,2283C',
  'Japan Hyuga Forced Dribble II,22A89',
  'Japan Hyuga Forced Dribble III,233CB',
  'Toho Hyuga Forced Dribble I,22845',
  'Toho Hyuga Forced Dribble II,22AA7',
  'Toho Hyuga Forced Dribble III,233D9',
  'Japan Jito Forced Dribble I,2284E',
  'Japan Jito Forced Dribble II,22AB0',
  'Japan Jito Forced Dribble III,233E2',
  'Kunimi Jito Forced Dribble I,22857',
  'Kunimi Jito Forced Dribble II,22AB9',
  'Kunimi Jito Forced Dribble III,233EB',
  'France Napoleon Forced Dribble I,22860',
  'France Napoleon Forced Dribble II,22AC2',
  'France Napoleon Forced Dribble III,233F4',
  'Tiger Tackle (Japan Hyuga),2242C',
  'Tiger Tackle (Toho Hyuga),22443',
  'Power Tackle (Japan Jito),22404',
  'Power Tackle (Kunimi Jito),22420',
  'Razor Tackle (Japan Soda),2246B',
  'Razor Tackle (Roppongi Soda),22462',
  'Tackle/Block/Intercept (Japan Tachibana) (Portrait 1),2272F',
  'Tackle/Block/Intercept (Japan Tachibana) (Portrait 2),2273F',
  'Tackle/Block/Intercept (Akita Tachibana) (Portrait 1),2276B',
  'Tackle/Block/Intercept (Akita Tachibana) (Portrait 2),2277B',
  'Face Block,227BF',
  'Face Block,227D9',
  'Face Block,233AC',
  'Face Block,233B5',
  'Power Block (Japan Jito),2279D',
  'Power Block (Kunimi Jito),227B0',
  'Power Block (Japan Jito),23386',
  'Power Block (Kunimi Jito),233A3',
  'Tsubasa Rage,23A16',
  'Schneider Rage,22295',
  'Diaz Rage,2382D',
  'Matsuyama Avalanche,23822',
  'Morisaki Rage,21FB4',
  'Drive Shot & Drive Bicycle Kick Cutscene,23839',
  'Drive Shot & Drive Bicycle Kick Cutscene,23845',
  'Drive Shot & Drive Bicycle Kick Cutscene,238DF',
  'Drive Shot & Drive Bicycle Kick Cutscene,23909',
  'Drive Shot & Drive Bicycle Kick Cutscene,2391E',
  'First Mach Shot (Morisaki),2365C',
  'First Mach Shot (Genzo),23663',
  'First Mach Shot (Ken),2366A',
  'After Triangle Save (Ken, Toho),22352',
  'After Triangle Save (Ken, Japan),22359',
  'After Jito Scores (Japan),222A6',
  'After Jito Scores (Kunimi),222B1',
  'Portrait after Diaz Rage dribbles past GK and scores,21C31',
];

var Skill_o_txt = [
  '91 Tsubasa',
  '93 Lennart',
  '94 Morisaki',
  '96 Misaki',
  '97 Misaki',
  '98 Ishizaki',
  '99 Ishizaki',
  '9A Nitta',
  '9B Nitta',
  '9C Japan Tachibana',
  '9E Japan Hyuga',
  '9F Japan Soda',
  'A0 Japan Jito',
  'A1 Japan Matsuyama',
  'A2 Japan Sawada',
  'A3 Misugi',
  'A4 Genzo',
  'A6 Ken',
  'A8 Mannone',
  'A9 Flamengo Santana',
  'AA Kunimi Jito',
  'AB Akita Tachibana',
  'AD Roppongi Soda',
  'AE Musashi Misugi',
  'AF Furano Matsuyama',
  'B0 Toho Hyuga',
  'B1 Toho Sawada',
  'B2 Victorino',
  'B4 Napoleon',
  'B5 Pierre',
  'B6 Pascal',
  'B7 Diaz',
  'B8 Schneider',
  'B3 Hamburg Kaltz',
  'B9 West Germany Kaltz',
  'BA Shester',
  'BB Brazil Santana',
  'BC Coimbra',
];

var IMG_Name_Portrait = [
  ['Lennart', 0x2baff, 0x2bb00, 0x2bb01, 0x2bb0a, 0x2bb03],
  ['Morisaki (Nank)', 0x2bb0f, 0x2bb10, 0x2bb1a, 0x2bb1d],
  ['Morisaki (Japan)', 0x2bb1f, 0x2bb20, 0x2bb2a, 0x2bb2d],
  ['Genzo (Japan, Hamburg)', 0x2bc2f, 0x2bc30, 0x2bc3a],
  ['Ken (Toho)', 0x3fd0c, 0x3fd0d, 0x3fd14, 0x3fd0f, 0x3fd13],
  ['Ken (Japan)', 0x3fc10, 0x3fc11, 0x3fd14, 0x3fc13, 0x3fc17],
  ['Mannone', 0x2bc5f, 0x2bc60, 0x2bc61, 0x2bc6a, 0x2bc6d],
  ['Tsubasa (SPL)', 0x2badf, 0x2bae0, 0x2bae8, 0x2bae9],
  ['Tsubasa (Japan)', 0x2baef, 0x2baf0, 0x2baf8, 0x2baf9],
  ['Misaki (Nank)', 0x2bb2f, 0x2bb30, 0x2bb31, 0x2bb39, 0x2bb38],
  ['Misaki (Japan)', 0x2bb3f, 0x2bb40, 0x2bb41, 0x2bb49, 0x2bb48],
  ['Ishizaki (Nank)', 0x2bb4f, 0x2bb50, 0x2bb58, 0x2bb59],
  ['Ishizaki (Japan)', 0x2bb6f, 0x2bb70, 0x2bb78, 0x2bb79],
  ['Nitta (Nank)', 0x2bb8f, 0x2bb90, 0x2bb91, 0x2bb99, 0x2bb98],
  ['Nitta (Japan)', 0x2bb9f, 0x2bba0, 0x2bba1, 0x2bba9, 0x2bba8],
  ['Tachibana Twins (Akita)', 0x2bc8f, 0x2bc90, 0x2bc98, 0x2bc99],
  ['Tachibana Twins (Japan)', 0x2bbaf, 0x2bbb0, 0x2bbb8, 0x2bbb9],
  ['Hyuga (Toho)', 0x2bcdf, 0x2bce0, 0x2bce8, 0x2bce9],
  ['Hyuga (Japan)', 0x2bbcf, 0x2bbd0, 0x2bbd8, 0x2bbd9],
  ['Soda (Roppongi)', 0x2bcaf, 0x2bcb0, 0x2bcb6, 0x2bcb9, 0x2bcb8],
  ['Soda (Japan)', 0x2bbdf, 0x2bbe0, 0x2bbe6, 0x2bbe9, 0x2bbe8],
  ['Jitou (Kunimi)', 0x2bc7f, 0x2bc80, 0x2bc86, 0x2bc89, 0x2bc88],
  ['Jitou (Japan)', 0x2bbef, 0x2bbf0, 0x2bbf6, 0x2bbf9, 0x2bbf8],
  ['Matsuyama (Furano)', 0x2bccf, 0x2bcd0, 0x2bcd6, 0x2bcd9, 0x2bcd8],
  ['Matsuyama (Japan)', 0x2bbff, 0x2bc00, 0x2bc06, 0x2bc09, 0x2bc08],
  ['Isamu Sawada (Toho)', 0x2bcef, 0x2bcf0, 0x2bcf8, 0x2bcf9],
  ['Isamu Sawada (Japan)', 0x2bc0f, 0x2bc10, 0x2bc18, 0x2bc19],
  ['Misugi (Musashi)', 0x2bcbf, 0x2bcc0, 0x2bcc1, 0x2bcc9, 0x2bcc8],
  ['Misugi (Japan)', 0x2bc1f, 0x2bc20, 0x2bc21, 0x2bc29, 0x2bc28],
  ['Ramon Victorino', 0x2bd0f, 0x2bd10, 0x2bd11, 0x2bd19, 0x2bd18],
  ['Napoleon', 0x2be0f, 0x2be10, 0x2be11, 0x2be19, 0x2be18],
  ['Pierre', 0x2be1f, 0x2be20, 0x2be21, 0x2be29, 0x2be28],
  ['Kaltz (Hamburg)', 0x2bd1f, 0x2bd20, 0x2bd21, 0x2bd29, 0x2bd28],
  ['Kaltz (West Germany)', 0x2be5f, 0x2be60, 0x2be61, 0x2be69, 0x2be68],
  ['Shester', 0x2be6f, 0x2be70, 0x2be71, 0x2be79, 0x2be78],
  ['Pascal', 0x2be2f, 0x2be30, 0x2be31, 0x2be39, 0x2be38],
  ['Diaz', 0x2be3f, 0x2be40, 0x2be41, 0x2be49, 0x2be48],
  ['Schneider', 0x2be4f, 0x2be50, 0x2be51, 0x2be59, 0x2be58],
  ['Carlos (Flamengo)', 0x2bc6f, 0x2bc70, 0x2bc71, 0x2bc79, 0x2bc78],
  ['Carlos (Brazil)', 0x2be7f, 0x2be80, 0x2be81, 0x2be89, 0x2be88],
  ['Coimbra', 0x2be9f, 0x2bea0, 0x2bea1, 0x2bea9, 0x2bea8],
];

var IMG_VS_PicNB = [
  0, 1, 1, 2, 3, 3, 0, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12,
  12, 13, 13, 14, 14, 15, 16, 17, 18, 18, 19, 20, 21, 22, 23, 23, 24,
];
var Portrait_List = [
  '00 No VS portrait',
  '01 Tsubasa (Special)',
  '02 Misaki (Special)',
  '03 Misaki (Japan)',
  '04 Hyuga (Japan)',
  '05 Hyuga (Toho)',
  '06 Misugi (Japan)',
  '07 Misugi (Musashi)',
  '08 Matsuyama (Japan)',
  '09 Matsuyama (Furano)',
  '0A Ishizaki (Special)',
  '0B Ishizaki (Japan)',
  '0C Soda (Japan)',
  '0D Soda (Roppongi)',
  '0E Jitou (Japan)',
  '0F Jitou (Kunimi)',
  '10 Tachibana Twins (Japan)',
  '11 Tachibana Twins (Akita)',
  '12 Nitta (Special)',
  '13 Nitta (Japan)',
  '14 Isamu Sawada (Japan)',
  '15 Isamu Sawada (Toho)',
  '16 Coimbra',
  '17 Santana (Flamengo)',
  '18 Santana (Brazil)',
  '19 Schneider',
  '1A Kaltz',
  '1B Shester',
  '1C Diaz',
  '1D Pascal',
  '1E Pierre',
  '1F Napoleon',
  '20 Victorino (Bick)',
  '21 Kaltz (Germany)',
];

var Portrait_List_GK = [
  '01 Lennart [GK]',
  '02 Morisaki [GK]',
  '03 Genzo [GK]',
  '04 Ken [GK]',
  '92 Lennart [GK]',
  '97 Morisaki [GK]',
  '9C Genzo [GK]',
  'A1 Ken (Toho)',
  '7F Mannone [GK]',
];

var PWD_CODE = `https://gamefaqs.gamespot.com/nes/562939-captain-tsubasa-ii-super-striker/cheats

======== Saopaulo
Stage 1: フルミネンセ (Fluminense)
64 BMaNV guhp1 C2049 BpC

Stage 2: コリンチャンス (Corinthians)
01 KmGJe 5adyO uxGix PcQ

Stage 3: グレミオ (Grêmio)
02 V0stp RAB0l UVR6+ QyB

Stage 4: パルメイラス (Palmeiras)
03 uXYlC rs6W, ANqTm Kxy
04 AczLo WHf96b KIQvM QZb

Stage 5: サントス (Santos)
04 +TvPS nDjm8 X47S0 KKz
06 62px1 JlFI+ R5cpf R59
06 D,z8+ TvPSI bCmzp R2+

Stage 6: フラメンゴ (Flamengo)
04 tj3GB 4KaVL eupoq +BN
07 UQ2oM 5u9Z2 C3tM2 Qwj

======== Nankatsu
Stage 7: くにみがくいん (Kunimi Insitute)
04 RHaql bu+6v CSNME QFy
04 wcSDE 0EaRt 7YlEj PsY

Stage 8: あきたしょうこう (Akita Shōkō High School)
05 4WY+L qsSf+ AmESD Kjz
07 SYc7m sIz7O EOOie +c0

Stage 9: たつなみ (Tatsunami, Roppongi)
05 3K7TK eOney i8yp9 QWl
09 AATsU O25IH 8ecVG Xe7

Stage 10: むさし (Musashi)
06 lkHS6 5bmNM v7haJ XkD

Stage 11: ふらの (Furano)
06 JpqUd 0+oxR S9Ffj IYe

Stage 12: とうほう (Tōhō)
07 0gYNR 1shlI A26pm qEy

======== Japan
Stage 13: ローマ (Roma)
07 7dVKO xpeiF 0y3dd +XE

Stage 14: ウルグアイ (Uruguay)
08 XuHVr Cbp,W v0TXT KVH

Stage 15: ハンブルガーSV (Hamburger SV)
08 VhCup 2WC0J qWReH +UM

Stage 16: ぜんにほん (Japan)
09 d3tBx KBVFe VpZpv KQK

Stage 17: シリア (Siria)
09 Lkbvf 5vDzM DXHQX VLA

Stage 18: ちゅうごく (China)
09 66SeN Nmyhh 7G2GD Qrh

Stage 19: イラン (Iran)
10 A82VU PJpoj d096+ XRZ

Stage 20: きたちょうせん (North Korea)
11 tQ+vB kSDV5 mXp5D quz

Stage 21: サウジアラビア (Saudi Arabia)
11 rsox, A9FTU QZnc8 wsD

Stage 22: かんこく (South Korea)
12 XnkIr 85c,P MwTgY qTk

Stage 23: バスコダガマ (Vasco da Gama)
12 jaJ84 udPLC xjfua ftb

St a g e 2 4 : ポ ー ラ ン ド ( P o l a n d )
13 jkkk4 555LM MMfmm tCy

Stage 25: イングランド (England)
14 HC5Lb WMfvq gzDa9 dIl

Stage 26: ソビエト (Soviet Union)
14 jnD14 8XILP rcfVW Mt0

Stage 27: フランス (France)
15 mD+x7 XSFOr mZibx tEz

Stage 28: メキシコ (Mexico)
15 a4ylu LG6Cf aNWP4 MZi

Stage 29: イタリア (Italy)
15 Uxsfo FAz9Z UHQur fMD

Stage 30: オランダ (Holland, Neitherlands)
15 n1x+8 IFSPc Zmj+6 38D

Stage 31: アルゼンチン (Argentine)
15 PqeNj +yh4S G2L0a f0b

Stage 32: ニシドイツ (West Germany)
15 UvjSo D4m9X L7QCx fi6

Stage 33: ブラジル (Brazil)
15 lLpE6 f0YNz Rshg9 dll
`;

var CUS_PATCH = [
  [
    'Cyclone + Tiger Drive',
    `38d31=4C 80 FD;
3fd90=48 A9 80 8D 49 04 68 2C 49 04 4C 24 8D;
39365=44 01;
38d48=AD 10 BD;
3d7b3=AE 10 BD;`,
  ],
  [
    'GK Special skill',
    `
; When you press the direction, read the skill
3d2e5=20 F0 BB;
37C00=BD 62 D3 48 8A 49 06 AA A9 85 85 37 A9 F2 85 36 20 79 CE AD 3E 04 F0 04 68 A9 00 48 68 60;

; GK Skill index
38E2F=E1 91; Yaisch  38ECF => 391F1=1
38E49=31 93; Gertize 38F13 => 39341=3
;     FD 91; Rashin  38ED7 => 3920D=2

; Show the name of special skill
3e97c=20 75 FD;
3fd85=C0 2E D0 10 AC 3E 04 F0 0B 30 09 B9 8C FD 85 3C A9 FD 85 3D A0 00 18 60 90 9F AE AB 22 1A 00 00 00 00 00 00 53 75 70 65 72 21 00 00 00 00 00 00 00 00 00 00 1C 2E 0C 2E 00 AB 22 1A 94 00 00 00 00 00 53 75 70 65 72 21;
`,
  ],
  [
    'GK Unlocked (Not work)',
    `3d2be=4C 20 ff;
3FF30=8D 3E 04 48 A9 0F CD 00 03 D0 15 A9 82 8D 3E 04;
3FF40=68 4C B1 D2;
3FF50=A9 21 CD 00 03 D0 09 A9 82 8D 3E 04 68 4C B1 D2;
3FF60=A9 21 CD 00 03 D0 09 A9 80 8D 3E 04 68 4C B1 D2;
3FF70=A9 22 CD 00 03 D0 09 A9 83 8D 3E 04 68 4C B1 D2;
3FF80=A9 02 CD 00 03 D0 09 A9 82 8D 3E 04 68 4C B1 D2;
3FF90=68 4C B1 D2;`,
  ],
  ['GK Jump', '3D2EC=C9 22'],
  [
    'Lennart Skill',
    `; Assign JumpSave to Lennart
3D2F8=02

; JumpSave Address = ramcheck2('21C6D'.num(), NesHex).hex()
; JumpSave background: 2235D=08 0B 00 2F F7 05 F9 21 68 2D F0 4D F0 FB F5 F9 02 67 70 0C 4E 30 FB
; IllusionSave background: 2220F=F7 30 F9 02 17 96 6A 3A 20 F9 02 1F F7 1D 80 47 F0 21 FB

; Change JumpSave background to IllusionSave
2235D=F7 30 F9 02 17 96 6A 3A 20 F9 02 1F F7 1D 80 47 F0 21 FB

; Change animation when ball catched by JumpSave
221DA=F7 02 09 0E 2C 1C FB F7 02 F9 21 2A 05 0E 17 1C FC 00 FB F7 02 10 0E 24 1E FB

; Text of button down: Supper!
;3EB30=8f 75 70 65 72 21 20 20
; Move JumpSave backdround to new pointer
;21C6D=10 fd
;3FD20=F7 30 F9 02 17 96 6A 3A 20 F9 02 1F F7 1D 80 47 F0 21 FB
; Disable Wakashimazu has this special (???)
;3977D=03 03
;39861=03 03
; Image of Lennart when catching (???)
;237B2=33 93`,
  ],
  [
    'Hyper Edition',
    `2A39=8D
2A43=AD
302A=4C F7 FD
4A57=21 1B 1C 20 1D 17 18 11 1A 01 15 00 21 1B 1C 20 1D 17 18 11 1A 01 15 00 21 1B 1C 20
4A7C=14 58 6A 75 63 60 22
2877F=13 FE
30D2F=4C 04 FE EA
34E73=50
35057=B1 34 88 8A B1
35A9D=AE
38D4B=50
38E27=4C 2A FD

3C547=51 FE
3D2FD=4C CA FD
3D6D2=88 FE
3D80D=80 FE
3D83F=4C 64 FE
3E310=A2 E7 A0 03
3E34F=B1 34 8A 88 B1
3E909=A2 0A
3EF34=10 FD

38F27=DF 93 0A 94 10 94 35 94 44 94 4C 94 00 00 DF 93
38F37=09 94 24 94 35 94 44 94 4C 94 00 00 DF 93 0A 94
38F47=1E 94 35 94 36 94 4B 94 00 00 DF 93 0B 94 21 94
38F57=34 94 44 94 4A 94 00 00 DF 93 09 94 21 94 33 94
38F67=44 94 4A 94 5A 94 DF 93 0B 94 1E 94 33 94 44 94
38F77=4A 94 5C 94 DF 93 09 94 21 94 35 94 44 94 4C 94
38F87=00 00 DF 93 0A 94 23 94 32 94 44 94 4A 94 00 00
38F97=DF 93 0B 94 22 94 34 94 44 94 4B 94 00 00 DF 93
38FA7=09 94 23 94 32 94 44 94 4C 94 00 00 DF 93 0B 94
38FB7=24 94 34 94 44 94 4A 94 00 00 DF 93 0B 94 23 94
38FC7=32 94 44 94 4B 94 00 00 DF 93 0A 94 1E 94 35 94
38FD7=44 94 4A 94

39FF6=29 29 29 29 29 29 29 29 29 29 29 29 29 29 29 29
3A006=29 29 29 29 29 29 29
3A00E=29 29 29 29 29 29 29 29 29 29 29 29 29 29 29 29
3A01E=29 29 29 29 29 29 29
3A026=29 29 29 29 29 29 29 29 29 29 29 29 29 29 29 29
3A036=29 29 29 29 29 29 29
3A12E=29 29 29 29 29 29 29 29 29 29 29 29 29 29 29 29
3A13E=29 29 29 29 29 29 29
3A146=29 29 29 29 29 29 29 29 29 29 29 29 29 29 29 29
3A156=29 29 29 29 29 29 29
3A15E=29 29 29 29 29 29 29 29 29 29 29 29 29 29 29 29
3A16E=29 29 29 29 29 29 29
3A176=29 29 29 29 29 29 29 29 29 29 29 29 29 29 29 29
3A186=29 29 29 29 29 29 29
3A18E=29 29 29 29 29 29 29 29 29 29 29 29 29 29 29 29
3A19E=29 29 29 29 29 29 29
3A1A6=29 29 29 29 29 29 29 29 29 29 29 29 29 29 29 29
3A1B6=29 29 29 29 29 29 29
3A1BE=29 29 29 29 29 29 29 29 29 29 29 29 29 29 29 29
3A1CE=29 29 29 29 29 29 29
3A1EE=29 29 29 29 29 29 29 29 29 29 29 29 29 29 29 29
3A1FE=29 29 29 29 29 29 29
3A206=29 29 29 29 29 29 29 29 29 29 29 29 29 29 29 29
3A216=29 29 29 29 29 29 29
3AE9E=29 29 29 29 29 29 29 29 29 29 29 29 29 29 29 29
3AEAE=29 29 29 29 29 29 29 29

3FD20=A9 10 C5 1C D0 10 A9 32 85 28 A9 00 8D F7 05 8D
3FD30=F9 05 A9 01 85 27 20 03 80 60 48 98 48 AD FB 05
3FD40=F0 03 4C C3 FD AD 3B 04 F0 03 4C 63 FD A0 00 A9
3FD50=03 8D 30 04 A9 31 85 C0 A9 04 85 C1 E6 C2 A5 C2
3FD60=C9 23 D0 04 A9 01 85 C2 91 C0 C8 C0 03 90 ED 68
3FD70=A8 68 60 A9 01 CD 3B 04 F0 03 4C 93 FD A0 00 A9
3FD80=03 8D 30 04 A9 31 85 C0 A9 04 85 C1 E6 C3 A5 C3
3FD90=C9 04 D0 04 A9 01 85 C3 91 C0 C8 C0 03 90 ED 68
3FDA0=A8 68 60 A9 02 CD 3B 04 F0 03 4C C3 FD A0 00 A9
3FDB0=03 8D 30 04 A9 31 85 C0 A9 04 85 C1 E6 C4 A5 C4
3FDC0=C9 07 D0 04 A9 01 85 C4 91 C0 C8 C0 03 90 ED 68
3FDD0=A8 68 60 68 A8 68 EE 30 04 60 48 A9 02 C5 1C F0
3FDE0=1A A9 42 C5 1C F0 0D A9 01 C5 1C D0 05 A9 83 8D
3FDF0=3E 04 50 0C A9 82 8D 3E 04 50 05 A9 81 8D 3E 04
3FE00=68 8D 3D 04 4C F0 D2 48 A9 FF 9D 54 04 9D 55 04
3FE10=68 4C 1D B0 A0 00 A5 34 85 C5 A5 35 85 C6 B1 34
3FE20=4C 23 8D 98 48 A5 C8 C9 01 F0 03 4C 4C FE A0 00
3FE30=B1 C5 85 C7 A5 1E C9 01 F0 07 C9 02 F0 12 4C 4C
3FE40=FE E6 C7 A5 C7 C9 76 D0 04 A9 00 85 C7 4C 4C FE
3FE50=C6 C7 A5 C7 C9 FF D0 04 A9 75 85 C7 68 A8 4C E7
3FE60=87 48 A5 1E C9 20 D0 08 E6 C8 A5 C8 29 01 85 C8
3FE70=68 4C C9 CD 48 A5 C8 C9 01 D0 0E 98 48 A0 00 A5
3FE80=C7 91 C5 68 A8 68 4C 32 D8 68 8D 24 06 4C 32 D8
3FE90=A9 00 85 C8 20 EC E6 60 48 AD 3B 04 D0 1F 68 48
3FEA0=C9 01 F0 14 C9 06 F0 10 C9 09 F0 0C C9 10 F0 08
3FEB0=C9 20 F0 04 C9 21 D0 0A A9 01 8D 4E 04 68 20 17
3FEC0=D7 60 C9 02 F0 1C C9 04 F0 18 C9 0E F0 14 C9 0F
3FED0=F0 10 C9 1C F0 0C C9 1D F0 08 C9 1E F0 04 C9 1F
3FEE0=D0 05 A9 02 8D 4E 04 68 20 17 D7 60`,
  ],
];
