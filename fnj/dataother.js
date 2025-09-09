//调色盘
var nespal = [
  0x66, 0x66, 0x66, 0x00, 0x2a, 0x88, 0x14, 0x12, 0xa7, 0x3b, 0x00, 0xa4, 0x5c,
  0x00, 0x7e, 0x6e, 0x00, 0x40, 0x6c, 0x06, 0x00, 0x56, 0x1d, 0x00, 0x33, 0x35,
  0x00, 0x0b, 0x48, 0x00, 0x00, 0x52, 0x00, 0x00, 0x4f, 0x08, 0x00, 0x40, 0x4d,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xad, 0xad, 0xad, 0x15,
  0x5f, 0xd9, 0x42, 0x40, 0xff, 0x75, 0x27, 0xfe, 0xa0, 0x1a, 0xcc, 0xb7, 0x1e,
  0x7b, 0xb5, 0x31, 0x20, 0x99, 0x4e, 0x00, 0x6b, 0x6d, 0x00, 0x38, 0x87, 0x00,
  0x0c, 0x93, 0x00, 0x00, 0x8f, 0x32, 0x00, 0x7c, 0x8d, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0xfe, 0xff, 0x64, 0xb0, 0xff, 0x92, 0x90,
  0xff, 0xc6, 0x76, 0xff, 0xf3, 0x6a, 0xff, 0xfe, 0x6e, 0xcc, 0xfe, 0x81, 0x70,
  0xea, 0x9e, 0x22, 0xbc, 0xbe, 0x00, 0x88, 0xd8, 0x00, 0x5c, 0xe4, 0x30, 0x45,
  0xe0, 0x82, 0x48, 0xcd, 0xde, 0x4f, 0x4f, 0x4f, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0xff, 0xfe, 0xff, 0xc0, 0xdf, 0xff, 0xd3, 0xd2, 0xff, 0xe8, 0xc8, 0xff,
  0xfb, 0xc2, 0xff, 0xfe, 0xc4, 0xea, 0xfe, 0xcc, 0xc5, 0xf7, 0xd8, 0xa5, 0xe4,
  0xe5, 0x94, 0xcf, 0xef, 0x96, 0xbd, 0xf4, 0xab, 0xb3, 0xf3, 0xcc, 0xb5, 0xeb,
  0xf2, 0xb8, 0xb8, 0xb8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
];

var Ai_Ack_1str = [
  'AI #00 (Balanced) Liberio',
  'AI #01 (Cautious combo attack) Tachibana Brothers',
  'AI #02 (Aggressive offense, mild) Da Silva',
  'AI #03 (...)',
  'AI #04 (More aggressive offense) Zagallo',
  'AI #05 (Calm/Smart) Karl-Heinz Kaltz (Germany)',
  'AI #06 (Breakaway to goal) Nei',
  'AI #07 (Run to box then pass) Ramón Victorino',
  'AI #08 (One-two attack) Sartoris & Diuceu',
  'AI #09 (Unpredictable) Santamaria',
  'AI #0A (All the way west) Rage Diaz',
  'AI #0B (Cutscene long shots) Kunimi Jito / Ritsuha Soda',
  'AI #0C (Team support) Furano Matsuyama',
  'AI #0D (Into-box shooter) Flamengo Jetorio',
  'AI #0E (Toho Hyuga special) Toho Hyuga',
  'AI #0F (Finisher) Cabello',
  'AI #10 (Cooperative attack) Kim & Cha',
  'AI #11 (All-Japan Hyuga special) Japan Hyuga',
  'AI #12 (Shoot-on-sight) Toninho, Brazil Jetorio',
  'AI #13 (Charge forward) España',
  'AI #14 (Support the ace) Chester / Argentina NPC',
  'AI #15 (Combo killers) Pierre & Napoleon',
  'AI #16 (Charge into box) Islas',
  'AI #17 (...)',
  'AI #18 (Solo attacker) Diaz',
  'AI #19 (Full support for ace) Pascal',
  'AI #1A (All-rounder) Schneider',
  'AI #1B (All-round offense) Berserk Schneider',
  'AI #1C (Super striker) Coimbra',
  'AI #1D (Assist teammates) Musashi Misugi',
  'AI #1E (Rage Hyuga) Hidden',
  'AI #1F ???',
];

var Ai_Ack_2str = [
  'AI #00 = Normal',
  'AI #01 = Pass-oriented (Germany Metz, Toho Sawada, Berserk Musashi NPC, etc.)',
  'AI #02 = Trap-oriented (Corinthians Liberio, Santos Zagallo, Germany Capelloman, etc.)',
  'AI #03 = Shoot-oriented (Corinthians Sartorstić, Da Silva, Toho Sorimachi, etc.)',
  'AI #04 = Let-through oriented (unused)',
  'AI #05 = Active poacher (Kunimi Sano, Akita Tachibana, etc.)',
  'AI #06 = 100% shoot (China/Korea/France duos, NPC Tachibana, etc.)',
  'AI #07 = Active trapping (Brazil mid/forwards)',
  'AI #08 = Crazy trapping (Coimbra)',
];

var Ai_Ack_3str = [
  'AI #00 = Normal',
  'AI #01 = Pass-oriented (Akita Tachibana, Pierre, Germany Metz)',
  'AI #02 = Trap-oriented (Diaz, Schneider, Brazil Carlos, etc.)',
  'AI #03 = Clear-oriented (Da Silva, Toninho, Flamengo Carlos, etc.)',
  'AI #04 = Small violent clear (Corinthians Liberio, Palmeiras Jetorio, two England stars, etc.)',
  'AI #05 = Active violent clear (North Korea defenders, Iran NPC, Toho Hyuga, etc.)',
];

var Ai_Def_1str = [
  'AI #00 = Balanced actions',
  'AI #01 = Tackle-biased (Liberio, Da Silva, etc.)',
  'AI #02 = Tackle+Block (Kunimi Jito, Robertson, Libuta, etc.)',
  'AI #03 = 100% crazy tackle (Soda, Hyuga, Berserk Schneider)',
  'AI #04 = Tackle/Block → tackle-biased (NPC Jito)',
  'AI #05 = Dumb tackle/block (NPC Ishizaki)',
  'AI #06 = 100% violent tackle (Iran NPC, Korea duo)',
];

var Ai_Def_2str = [
  'AI #00 = Normal (duel)',
  'AI #01 = Active ball-challenge (China, Poland, Mexico NPC, Flamengo Carlos, etc.)',
  'AI #02 = Active violent challenge (Iran NPC, Hyuga, Jito, etc.)',
];

var Ai_Def_3str = [
  'AI #00 = Normal (clear)',
  'AI #01 = Active clear (Liberio, Da Silva, etc.)',
  'AI #02 = Active violent clear (Iran NPC, Hyuga, Jito, etc.)',
];
var Ai_GK_1str = [
  '00 ',
  '01 ',
  '02 ',
  '03 ',
  '04 ',
  '05 ',
  '06 ',
  '07 ',
  '08 ',
  '09 ',
  '0A ',
];
var Ai_GK_2str = [
  '00 ',
  '01 ',
  '02 ',
  '03 ',
  '04 ',
  '05 ',
  '06 ',
  '07 ',
  '08 ',
  '09 ',
  '0A ',
];
var Ai_GK_3str = [
  '00 ',
  '01 ',
  '02 ',
  '03 ',
  '04 ',
  '05 ',
  '06 ',
  '07 ',
  '08 ',
  '09 ',
  '0A ',
];
var Ai_Run = [
  '00   NPC type',
  '01   Amara',
  '02   Nitta / Sano',
  '03   Tsubasa / Misaki',
  '04   Babinton',
  '05   Taki',
  '06   Jito & other forwards',
  '07   Puraton',
  '08   Urabe',
  '09   Mamoru Soda / Matsuyama',
  '0A   Schneider',
  '0B   Jetorio',
  '0C   Akita Tachibana Brothers',
  '0D   ??',
  '0E   NPC Hyuga',
  '0F   Victorino',
  '10   Japan NPC Defenders',
  '11   NPC Tachibana Brothers',
  '12   ??',
  '13   Lee Yong-Woon',
  '14   Makha',
  '15   Islas',
  '16   Avalanche Matsuyama',
  '17   Berserk Diaz',
  '18   Berserk Schneider',
  '19   Netherlands NPC',
  '1A   Karl-Heinz Kaltz (W.Ger.)',
  '1B   Coimbra',
  '1C   Santana (BRA)',
  '1D   Misugi',
  '1E   ??',
  '1F   ??',
];
var AI数据索引 = 0;
var 我方球员数据 = false;
var IsGK = false;
var aI_我方球员 = 0x395ea;
var aI_传球意向 = 0x3b73e;
var 步长类型 = 0x3afbe;
var 进攻AI地址 = 0x3b13e;
var 防守AI地址 = 0x3b8be;
var GKAI地址 = 0x3ba3e;
var Ai_data_1_2 = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
var Ai_data_2_2 = ['0', '1', '2', '3'];
var Ai_data_3_2 = ['0', '1', '2', '3'];
var Ai_data_4_2 = ['0', '1', '2', '3'];
var Ai_data_5_2 = ['0', '1', '2', '3'];
var Ai_data_6_2 = ['0', '1', '2', '3'];
var Ai_data_7_2 = ['0', '1', '2'];
var Ai_data_8_2 = ['3', '4'];
var Ai_data_9_2 = ['5', '6'];
var Ai_data_1_3 = [
  ' 0 = 未知',
  ' 1 = 射门',
  ' 2 = 传球',
  ' 3 = 过人',
  ' 4 = 2过1',
  ' 5 = 虎射',
  ' 6 = 新虎',
  ' 7 = 雪崩',
  ' 8 = 暴怒',
];
var Ai_data_2_3 = [
  ' 0 = Shoot',
  ' 1 = Dummy (let ball through)',
  ' 2 = Pass',
  ' 3 = Trap/Control',
];
var Ai_data_3_3 = [
  ' 0 = Trap/Control',
  ' 1 = Clear',
  ' 2 = Pass',
  ' 3 = Power Clear',
];
var Ai_data_4_3 = [
  ' 0 = Tackle',
  ' 1 = Steal/Intercept',
  ' 2 = Block',
  ' 3 = Power Tackle',
];
var Ai_data_5_3 = [
  ' 0 = Follow/Mark',
  ' 1 = Challenge',
  ' 2 = Steal/Intercept',
  ' 3 = Power Challenge',
];
var Ai_data_6_3 = [
  ' 0 = Follow/Mark',
  ' 1 = Clear',
  ' 2 = Steal/Intercept',
  ' 3 = Power Clear',
];
var Ai_data_7_3 = [' 0 = Catch', ' 1 = Punch', ' 2 = Triangle Save'];
var Ai_data_8_3 = [' 3 = Charge Out', ' 4 = Stay'];
var Ai_data_9_3 = [' 5 = Defend Dribble', ' 6 = Defend Shot'];

var s5000 = [
  0x48, 0xa5, 0x02, 0xc9, 0x26, 0xf0, 0x0d, 0xa9, 0x00, 0x85, 0x22, 0xa2, 0x09,
  0x20, 0xb2, 0xc4, 0x48, 0x20, 0x25, 0x9f, 0x68, 0x4c, 0xf0, 0xff,
];
var s4Cc0 = [
  0xa9, 0x0b, 0x85, 0xed, 0x4c, 0xbb, 0xa8, 0xe6, 0xd0, 0xd0, 0x02, 0xe6, 0xd1,
  0xe6, 0xd2, 0xd0, 0x02, 0xe6, 0xd3, 0x4c, 0x48, 0xa1, 0xff, 0xff, 0xff, 0xff,
  0xff, 0xff,
];
var s512 = [
  0xa5, 0x00, 0xd0, 0x28, 0xa2, 0x98, 0x8e, 0x01, 0x80, 0xa9, 0x60, 0x20, 0xb0,
  0xc5, 0xa2, 0x9a, 0x8e, 0x01, 0x80, 0xa9, 0x68, 0x20, 0xb0, 0xc5, 0xa2, 0x9c,
  0x8e, 0x01, 0x80, 0xa9, 0x70, 0x20, 0xb0, 0xc5, 0xa2, 0x9e, 0x8e, 0x01, 0x80,
  0xa9, 0x78, 0x20, 0xb0, 0xc5, 0x4c, 0xf0, 0xff, 0xa0, 0x00, 0x84, 0x10, 0x85,
  0x11, 0xad, 0x02, 0x20, 0x8c, 0x06, 0x20, 0x8c, 0x06, 0x20, 0xad, 0x07, 0x20,
  0xa2, 0x07, 0xad, 0x07, 0x20, 0x91, 0x10, 0xc8, 0xd0, 0xf8, 0xe6, 0x11, 0xca,
  0x10, 0xf3, 0x60,
];
var snew512 = [
  0xa5, 0x00, 0xd0, 0x1c, 0xa2, 0xf8, 0xa9, 0x60, 0x20, 0xa4, 0xc5, 0xa2, 0xfa,
  0xa9, 0x68, 0x20, 0xa4, 0xc5, 0xa2, 0xfc, 0xa9, 0x70, 0x20, 0xa4, 0xc5, 0xa2,
  0xfe, 0xa9, 0x78, 0x20, 0xa4, 0xc5, 0x4c, 0xf0, 0xff, 0x8e, 0x01, 0x80, 0xa0,
  0x00, 0x84, 0x10, 0x85, 0x11, 0xad, 0x02, 0x20, 0x8c, 0x06, 0x20, 0x8c, 0x06,
  0x20, 0xad, 0x07, 0x20, 0xa2, 0x07, 0xad, 0x07, 0x20, 0x91, 0x10, 0xc8, 0xd0,
  0xf8, 0xe6, 0x11, 0xca, 0x10, 0xf3, 0x60,
];
//var cn768 = [0x48, 0xA2, 0x3C, 0x20, 0xB4, 0xC4, 0xA2, 0x3D, 0x20, 0xB9, 0xC4, 0xA9, 0x00, 0x85, 0xD0, 0xA9, 0x80, 0x85, 0xD1, 0xA9, 0x00, 0x85, 0xD2, 0xA9, 0x50, 0x85, 0xD3, 0xB1, 0xD0, 0x91, 0xD2, 0xA5, 0xD0, 0xC9, 0xFF, 0xD0, 0x09, 0xA5, 0xD1, 0xC9, 0xB0, 0xD0, 0x03, 0x68, 0xD0, 0x0E, 0xE6, 0xD0, 0xD0, 0x02, 0xE6, 0xD1, 0xE6, 0xD2, 0xD0, 0x02, 0xE6, 0xD3, 0xD0, 0xDF, 0x4C, 0x10, 0xFD, 0x00];
var cn768 = [
  0x48, 0xa2, 0x3c, 0x20, 0xb4, 0xc4, 0xa2, 0x3d, 0x20, 0xb9, 0xc4, 0xa9, 0x00,
  0x85, 0xd0, 0xa9, 0x80, 0x85, 0xd1, 0xa9, 0x00, 0x85, 0xd2, 0xa9, 0x50, 0x85,
  0xd3, 0xb1, 0xd0, 0x91, 0xd2, 0xa5, 0xd0, 0xc9, 0xff, 0xd0, 0x09, 0xa5, 0xd1,
  0xc9, 0xb0, 0xd0, 0x03, 0x68, 0xd0, 0x0e, 0xe6, 0xd0, 0xd0, 0x02, 0xe6, 0xd1,
  0xe6, 0xd2, 0xd0, 0x02, 0xe6, 0xd3, 0xd0, 0xdf, 0x4c, 0x10, 0xfd,
];
var musicArr = [
  '00—无声',
  '01—无声',
  '02—不变声继续',
  '03—球慢慢飞来[40]28',
  '04—球快速飞来,短[41]29',
  '05—球飞去,短[42]2A',
  '06—球快速飞来,短[43]2B',
  '07—球轨迹声,像小飞老师的曲线那个[44]2C',
  '08—球轨迹声 响尾蛇[45]2D',
  '09—球轨迹声双人射多影[46]2E',
  '0A—球轨迹声双人射多影[47]2F',
  '0B—球轨迹,火焰射轨迹1 2[48]30',
  '0C—奈依幻影过人[49]31',
  '0D—球消失,人消失[50]32',
  '0E—大力射门踢球特写  次腾射门球飞去[51]33',
  '0F—球轨迹蛇形[52]34',
  '10—飞空转折,皮埃尔的曲尺轨迹[53]35',
  '11—奈依分身过人后 [54]36',
  '12—普通射门踢球特写[55]37',
  '13—普通必杀射门特写[56]38',
  '14—凌空必杀射门特写[57]39',
  '15—射门前动作[58]3A',
  '16—射门前动作[59]3B',
  '17—剃刀射门射门前动作[60]3C',
  '18—刺疼必杀射门前动作[61]3D',
  '19—普通射门射门前动作[62]3E',
  '1A—普通射门踢球特写[63]3F',
  '1B—大力头球[64]40',
  '1C—解围[65]41',
  '1D—剃刀VIN[66]42',
  '1E—挑球过人[67]43',
  '1F—桑塔纳分身过人[68]44',
  '20—射门前动作前奏,连续长的声音[71]45',
  '21—射门前动作前奏,连续长的声音[71]46',
  '22—射门前动作前奏,连续长的声音[71]47',
  '23—大力踢球[70]48',
  '24—超旋的轨迹。。。[69]49',
  '25—跳[72]4A',
  '26—快速跑步[73]4B',
  '27—快速跑步[74]4C',
  '28—铲球滑行[75]4D',
  '29—铲到球[76]4E',
  '2A—截球成功[77]4F',
  '2B—守门员轻松击球出[78]50',
  '2C—脚接传球[79]51',
  '2D—胸部截球[80]52',
  '2E—犯规时被打飞的声音[81]53',
  '2F—被打飞的声音2[82]54',
  '30—头像闪光音效[83]55',
  '31—无声',
  '32—比赛5分钟倒计时音乐,最后关头[22]00',
  '33—输入密码时的音乐,穿越未来[23]01',
  '34—日本高中联赛音乐,决战日本[7-11关[35]02',
  '35—巴西联赛音乐,巴西之战[1-5关[34]03',
  '36—法国音乐,埃菲尔攻击[38]04',
  '37—东邦音乐,猛虎压境[31]05',
  '38—德国音乐,震撼火焰[32]06',
  '39—南葛音乐,南葛的反击[28]07',
  '3A—亚洲突围音乐[37]08',
  '3B—邀请赛[13至16关音乐[36]09',
  '3C—圣保罗音乐,足球是朋友[27]0A',
  '3D—阿根廷音乐,草原雄鹰[39]0B',
  '3E—巴西音乐,神秘劲旅[33]0C',
  '3F—全日本音乐,全日本进行曲[29]0D',
  '40—弗拉门戈音乐,黄金之鹫[30]0E',
  '41—我方进球音乐[24]0F',
  '42—对方进球音乐[25]10',
  '43—犯规音乐[26]11',
  '44—爆笑三人转会议音乐[21]12',
  '45—爆笑三人转开始音乐[01]13',
  '46—翼单挑曼昂尼剧情音乐[06]14',
  '47—南葛战胜东邦剧情音乐[05]15',
  '48—爆机翼与早苗对话剧情音乐[11]16',
  '49—曼昂尼接住旋转射门后剧情音乐[12]17',
  '4A—无声音',
  '4B—翼领悟飓风射门的剧情音乐,暴风雨中的试炼[13]18',
  '4C—最后一关对巴西会议音乐,最后的激励[14]19',
  '4D—爆机音乐之一,详细参考原曲[15]1A',
  '4E—翼举奖杯的爆机音乐[16]1B',
  '4F—爆机音乐,详细参考[17]1C',
  '50—早苗最后告别剧情音乐[18]1D',
  '51—隐藏剧情中与罗伯特对话[02]1E',
  '52—翼领悟旋转倒挂的短促音乐[07]1F',
  '53—卡洛斯第一次露面剧情音乐[04]20',
  '54—库因布拉神秘亮相剧情音乐[08]21',
  '55—会议音乐[03]22',
  '56—比赛输了的音乐[20]23',
  '57—翼为曼昂尼所震撼的剧情音乐[09]24',
  '58—片头音乐[00]25',
  '59—爆机音乐之一,详参[19]26',
  '5A—第一关赢后,卡洛斯的剧情音乐[10]27',
  '5B—BUG音乐,也可以试听一下',
  '5C—无声音',
  '5D—进球,网未穿[85]56',
  '5E—[84]57',
  '5F—[43]58',
  '60—进球,网未穿[85]59',
  '61—进球,网射穿[86]5A',
  '62—观众喝彩声[87]5B',
  '63—球没进[88]5C',
  '64—头球猛撞的一瞬间[89]5D',
  '65—球爆裂的声音[90]5E',
  '66—裁判的哨声[91]5F',
  '67—犯规哨声,后接26犯规音乐[这个在pm中没有]60',
  '68—闪躲成功[92]61',
  '69—此起彼伏的喝彩声,比87略小声[93]62',
  '6A—飞机起飞的声音[94]63',
  '6B—剧情中施奈德火焰的前奏声音[95]64',
  '6C—对巴西赛前钟表到点的声音[96]65',
  '6D—这个声音既熟悉又陌生,故暂不解释[97]66',
  '6E—对巴西赛前钟表声音[98]67',
  '6F—人物升级的音乐[99]68',
  '70—下雨声[58]45',
  '71—同上[58]45',
];

//128*128 256*256 40*40
var IMG_ChrIMG = [
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE7SURBVHhe7dIxAQAwEAOhOol/lV8hx4AD3rajS4A4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIESNt96CYFGkOE608AAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL7SURBVHhe7dQxAQAwEAOhOol/lV8hx4AF3rYDmgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAGTtPoP4FGUDMRsCAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAR0lEQVRYhe3OMQHAIBAAMcDF+xdaJHTI0A4XBdkz86wfO18H3hRUBVVBVVAVVAVVQVVQFVQFVUFVUBVUBVVBVVAVVAVVQXUBcoIBmkxA5loAAAAASUVORK5CYII=',
];

//对决肖像
var playerVSmodaddr = 0x20704; //对决肖像
var playerVSmod_GK_addr = 0x21e6c; //守门员肖像
var IMG_ModPic = [
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABMCAMAAAD6FQ9LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAGQA/wDIAADI/+TQAAAA////NbGr6gAAAAZ0Uk5T//////8As7+kvwAAAedJREFUeNq01wGSwyAIBVBjPve/8qqgYkSDm6nbaTdtXlA00gZyNgD9IMyfX6nl50Hgvm/slLjGiigNK3WpRtdgFAu0ZllpY6trDJWaCoT8MNXU+ohKPuxxzQoVlRGaOTRiRQy5c8aKEQZ65HDqYFYzMmLlgdfXmJqBBsWngxMGl+JzksNdSH5OxyZqikk6qWRbHvkt2irpT5T1fRdkR6oKpTu5QzHKFGETqii+ebrKY9qGykp3qLF1/liB+6OCxTrGtaqReILk7LhHTd2cuVNVA/oUPZgHlRyiG7/ihQHJiELAVsn6II3S/8GhWlBZjCE1eFS6ev5jcaR62/RxVNCm7mhvO4AKpTfCY3U7VOuhUXw2agq1YI9YqNk7UFI8ELSCQ9Xr74N9Vv2OAb2wYIeaD0/Vvn49lwO+KBj3tL6X8bgyz5+1gSgVn4qkQszBVNWLZccBjQpWaQkqFJe94TatG/9OTZ83hXVdngfQdjqsszH3BPFVWfX+PZa1Qy+CDWue/qHsr9af1MjelB3sR8pkv1LUv7G0KXUoQi/T4Fk9UFy6s3SpurC53ucXv4IMLMdzKYJ8+ZB04EzRkWo552T4VRVciL0/RvsP0nOFQwVJe4noVWqK6UxRRXSQeVmF3tU7b85/AgwAfdRCg06TMK4AAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABOCAMAAAC33a5AAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAGQA/wDIAADI/+TQAAAA////NbGr6gAAAAZ0Uk5T//////8As7+kvwAAAe9JREFUeNq01412gyAMBWCBm/d/5UHCT5SAYZ7Sznabn4GApL1otEDedn1XofzwcT4RgK0odBfCQyClBEsFBqGxMEyqDZaqrLeHUewxrklps1JTrIFQnh4V1Ig4H1jl0GacdWAxy5OKuOWOPD3MKsJAmx6mprBfUcLyuEWl/DZm9rIOwQCpLSBGeyXnZIbEjo8RJupKCGKdGHmWP23vFNT+VMb5XnSvq9IhJnyQed2EYiVjH6qMaRuqKN2hztb5EyVJ1sFiG+NatUg8S+3suEddJcncqWoBfYoezIM4hxjGr2RhoGZEIeB9783naJTfX/Ds2DVoXYxXbvCofPXyEHGkRtv08a6gTdvR3nYAFUpvhMcqOVTvoVF8NmoKtWDPna1l70DV4oFLKzhUu/4+2Gc17hjQC7vsUPOvp2pfv57LAV8UjHta38t4XFnmz9pAlIpPRbVCzMFU1Yu844DuClZpuVQoKXu327Rt/Ds1/b8rrOvyPIC+02GdjbkniK/KqvfvsawdehHstubpH8ps+KTu7E3ZwX6kTPYrReMTS59ShyKMMg2Z1QMlpbtIl2oLW+p9efEr1IGVeC5FqB8+ajpwpuhI9ZxLMvyqCSnEzm+tGF9IzxUOFWraOaJXqSmmM0UN0UHm6yr0rt55c/4TYAApeUQ0cA5V9wAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABMCAMAAAD6FQ9LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAGQA/wDIAADI/+TQAAAA////NbGr6gAAAAZ0Uk5T//////8As7+kvwAAAd9JREFUeNq014u24yAIBVBjDv//yxMBlSganK5ru/reQdFImijYAPQ3yf/NdQ0C931jq67HXN2x4Ia1ulobjGFpRVRZs1DXxDpCuftqbH1EnI/FuCaFiniEfg6vkSHjlTuK9TBnOGij7qpmNIwLPBYw4hTkh9FegQHuuoAY7ZUeGEUVwI8ZLmpKCLJOjNzLR7RV2h9lnO9F95oqHWLCDzKvm1CsZOxdlTFtQxVlO9TYOn+iJMk2WK5jXKsaiWep/jrvUVO3ZO5U1YAxRQOLIM4huokrWRjQjBgEbJWuD7LoeZ0CqgXVxZiehoh6jl5uIo5Ub5s+vhWsqTva1w5gQtmN8FjdAdV66BSfjZpCLdi4s9XsHSgtHkhWIaDq8ffBflb9jAF9sOSHmt+eqn39GpcDflFwzml7LmM4ssyft4EYlUdFWiHmYKbqZd5xQG8Fr7QkE0rK3us0rRv/Tk3fN4V1XZ4H0HY6rLMx9wT5U3n1/juWt0Mvgr3WPP2H8i+tf1Jv9qX8YH+kXPZXivoVS5vSgCL0Mg2Z1QMlpbvIkKoLW+p9eYor6MBKvJAi6MWHpgNnio5Uy7kkI66qkEIc/TPa/5CeKxwqaNo5YlSZKaYzRRXRQeZ1FUZX77w5/xNgAL2ZQrv33eHuAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABMCAMAAAD6FQ9LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAGQA/wDIAADI/+TQAAAA////NbGr6gAAAAZ0Uk5T//////8As7+kvwAAAepJREFUeNq014t2wyAIBmCjP+//ygviBSMaXE7dTree9guCRtpAzgGgPwnz69c9+HEQSClhp4prLIs8sFKXGnQNRrFAO3ajlF7UNRqO1RH411TT6Bnleth5zQoV5QzNGhooYqidKxZijDDQo4ZKJIkVYaBRoc0MpQIcjPaK38ZBwKCivSoXhihZn7sYJmpKCJi1VeKsTNRVmU8s65kj2dNritPIJEqtc1LrUFlJxbrKeaVNKFZoWUQ0tq6fKJmQDhZrjmtVI0kq5d1xj5pKsr1PVQ3oU/RgHpRriG78SjYGSkUUAraq7A/S6P4/OFQLWjZjuAc86r46/4g4Un1s5jgqaFNPtLcTQIXSB+GxSg7VZmg0n42aQi3Y82Sr1TtQ9cAIWsGh6vX3wT6rfseAXliwQ81PT9W+fz23A74oGPe0vpfxuLKsn3WAKBWfiiDNaA6mul7MJw5oVGZrCSpUzI11uE3rwb9T0+tNYd2X5wTaSYd1NeaZIL4qq9+/x7JO6EWwYc/TP5T90fqTGtmbsoP9SJnsV4r6J5a2pA5F6G0asqoHSlo3S5eqG1v6Pf/xK5TEOJ5LEcqHj1IOnCk6Uq3mUgy/qkIasffLaP9Ceq5wqFDKniN6lVpiOlNUER1UvuxC7+6dD+c/AQYAMEhCkP53SywAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABMCAMAAAD6FQ9LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAAAA/+TQAADI/wDIAGQAAAAA8v1P4QAAAAZ0Uk5T//////8As7+kvwAAAdVJREFUeNq014G2gyAIBuA/N97/lZeAioaGdebt7LS7faFo0kDBBsC8CQocx4EdxYIbwqoZw1z1yY1PyJqV+tjWEPIxVR36VMP5mI+rD4WCeITTHA4ooctdTKWU4KCJOvgFopw0XxUO7tWZiIxORmuVE8VKF1BAQfoDjpUZciy4qCohSDoxcuR/0VKhdAh1kibdqwqQocuLzOsiFKEsa6Mki4tQWdkOVaZnUyVJtsFSGeNclUg8S+XbaY3arSonu6oEjCkaWARxDtFMXMnCgGbEIGCpdIRk0Xn+DagaVBfj92yIqPPq+U/Elmpt0cdewZqyo93tACaU3Qi31RFQtYdO8VmoS6gJG3e2kr0NpcUDX6sQUOX662Cvlbmt6YbBD3V9u6vW9WtcDnij4NzT9l7GcOVaxFYqjYq0QlyDmaqXeMfpJxC89S9UgpS97tPkV1kMXxh2n1ou5nX5OoC602GeDacn6VZ59f4+lrdDT4J1a54eKH9feaWGeaQnwf6kXPYvRe2JpU5p5HcKWpmGzOqGktJNesQYSr1XG1TQgWUTUgR9+ADGXxERRVuq5lyTEVYtd0BU6fPxQ4VNBU27TBltMR3gjiJ0WYllXldhdPVeN+efAAMAgaU62KWkdqEAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABMCAMAAAD6FQ9LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAGQA/wDIAADI/+TQAAAA////NbGr6gAAAAZ0Uk5T//////8As7+kvwAAAddJREFUeNq81wt2hCAMBVDAl/1vuUIIBIEY6mmd6Zyx7TUQPtFAzgNAPwlOgeu6cKKKKAcsFcsxGcXCxojTxlAxatYR8tulYu9Ryce2X3FUEFR6SD6VEobcbVR8xCpsQh41I1vhVmmBBpUTlfN2f8RLkK3AF0ZWOdH58z5foqaYINWB4Xf+FZmKY6XKSr43zWsKpTm5QUmGCEaoonjxdJX7ZIbKSjeosX3+WIHbo4Il6eNeSaQyreW/k42aujhzp0oC+hQ9mAeVHKIbv+KJgZoRhQBT1flBGt3fg0O1oHUyhvuAR91Xzy8WR6ofRhtHBW1kR3vbAVQovREeq8uhWgsXxcdQU6gNe+5skr0DVYsHglZwKLm+Heyz6isG9MLCOtR8eqrs+vWcDviisFjTei3jcWUev9UGolR6KqoVYg6mql4qOw5oVFiVlqBCcdkblqls/Jaa/t4U9nV57kDb6bDPxtwSpFe1qvfvsVY79CbYMOfpF2p90/tJjez1Hhv/qJbsrxT1O5Y2pJ7nFPQyDR7VA8WlO0vnM1FH5edAoXYsx3MpQr35qOnAmaIj1XLOyfArEVyIvQ+j/YH0XOFQoaa9RPQqNcR0pkgQHWS+zkLv7J035x8BBgBywkMI2DSgCQAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABMCAMAAAD6FQ9LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAGQA/wDIAADI/+TQAAAA////NbGr6gAAAAZ0Uk5T//////8As7+kvwAAAdlJREFUeNq81wt2hCAMBVCEx/63XEn4BAmY1NPads7MlGsgINGQjQeA8SEYBVJK8CgSdOCkLjoWI1jYmOakOajrkmwglF+TusaIKB/bcV2zQkM0wmxTMWLKnVVFKGijEr+A1IoWBVyJenXdMWI5FDSpkqhYVF1ABoXWCGVeyiv1T0VdURNuiDqlpYdQ0VAtVhSLVe9eV6VDJLrib3BQPPameGT8xQYVhd6fiM7qu63iJMtgcYxxp1okmqXWOp5RV6kmwalaQJvKD2ZBlEMMY1e8MFAzIhBwVHV9ZInu98GgelAmCPcBi7rPXn5YuNQ4Dn2cFaRpO9rbDiBCyY3QrZJB9R4qxeegllAb9tzZWvYcqhYPBKlgUO3852Cf1bhikF9Y0EOtH73qXL+eywFfFJRrWl7LeJy5F7GTik+Va4VYg4mqx5ULeVbQSksQoWh/nxog6lU2PBrM/+8K+7q8DqDvdNhnY+0J4qvS6v17LG2H3gSb1nz+hdJvej+pmb3eY+Mflcr+SuVxx9Kn1PKcglGmwbPqUFy6izQ+Ew1Efw6FOrASz6Qy6s1HTQd8KrtUzzknw66a4EJsfRgdD6R+BadCTTtFtCoxxdmnckPZkfm6Cq2rd92cfwQYAOh1QzYsW+93AAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABMCAMAAAD6FQ9LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAGQA/wDIAADI/+TQAAAA////NbGr6gAAAAZ0Uk5T//////8As7+kvwAAAd1JREFUeNq014ty4yAMBVDAV///y2uQAAECi82UZtpmwrGweMgJ5GwA+puw6RTjKPA8Dw4qlpZZrOaRhkOs2Fp23SgWtoSVNls1oRg7yC9bxZF1xPnY3dcWlaxschijyTAnzKMWNKpJiFrRpLR7b2aHjBG++S1BMOVtp3K3orLIvxNspBSQEmoAfr2MjgrSK8n6zjeUPpR0zP3egDyvT4m9V2orpNL1KbspX4C2Si1rCVbSkY4KPB6lkpiDqv15fqR3OqOmJNytqgF9iibmQSWH6MaveAFCMqIQcFSyPkij9//gUC0oE4S3waPeq+cfFleqt8MYRwVt6on2tZdVKKiD8Fo9DtVGaBSfg1pCOc+omr0LJcUDQSs4VL3+OdjPqu8Y0AcLdqj17a061695OeAXBWNP672M6co8f9YBolSaFUmFWIMFVb64GtGoYJWWoEKV833oIOd+Oqrl86awHaFxA+2kwz4b60iQPpVVhb9jWSf0Jtiw5uk/lP1o/ZMa2Zeyg/2RMtlfKepPLG1KHYrQyzR4Vi8Ul+4sXaoubK73+Y9fQW4sx3Mpgjx8SDpwp+hKtZxzMvyqCi7E3i+j/QvpvcKlgqS9RPQqNcV0p6giusi8rELv6l0P538CDABBFUK3YRAG8wAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABMCAMAAAD6FQ9LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAGQA/wDIAADI/+TQAAAA////NbGr6gAAAAZ0Uk5T//////8As7+kvwAAAdlJREFUeNq814tahiAMBmAO3+7/lpNtwJSDI58i8+mvXgcDmQZyNgD9Q3AK5JzxqqI1WRt2KsZI5XgYw8IURYUXytmlYm8WoRxLFW3rI+J8rMcVZ4yzjnUO7ygl3HLnU2A2II8a0UJlPl0ZSBejvSqJKgmoC4jRXumFUVQBfE6YoqaEIOnEyFF+RVul/VHG+V50r6nSISZ8knndhGIlY++qjGkbqijbocbW+RMlSbbBUh3jWtVIPEv1v9MeNZUlc6eqBvQpejAP4hyiG7+ShQHNiEHAVun6IIuun4NDtaC6GMPV4FHX1cuXiCPV26aPdwVr6o72tgOYUHYjPFbZoVoPJ8Vno4ZQC/bc2Wr2DpQWDwSr4FD1+vtgn1W/Y0AvLMxDjR9P1b5+PZcDvihM7ml7L+NxZZm/2QZiVHoq0goxBjNVL/GOA7orzEpLMKESl8jbbVo3/p0a/t4U1nV5HEDb6bDOxtgTpFc1q/fvsWY79CLYbc3TL9T8QfmTurPXJ3P8o5qyv1LUn1jalHreU9DLNGRWD5SU7iKd70Qd8feBgg6sxHMpgj58aDpwpuhItZxLMvyqCinE3pfR/kJ6rnCooGnniF5lppjOFFVEB5nXVehdvePm/CPAALg3QzNLPJKvAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABMCAMAAAD6FQ9LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAGQA/wDIAADI/+TQAAAA////NbGr6gAAAAZ0Uk5T//////8As7+kvwAAAdtJREFUeNq81wt2hCAMBVDEl/1vuYTwCRgw1NPS6RynnWsgINFAzgagfwhOgfu+caKyyA1u1Y1iprq45QPSZqcu3ToCv2x1za2ZnI/VuCZUB5WzjlUOr6l/iBhyR54eIsYIA+16mPqV1RPZ6k5ZSC9GidFecaI42XUBORSkP2DFjt/TZxM1JQSxTIy8+E+0VagdQpukRfeaAmTo8ibzugmVlYy9Kx7TNhQr3aHGytFSSZJ1sFjHuFY1Up6l+u24R03dkrlTVQP6FE3Mg3IO0Y1fycJAyYhCwFaV9UEapePgUC1oWYwhNXhUOjv/iDhSvW36OCpoU3e0tx1AhdIb4bG6Har10Cg+G/UItWDzzlazd6BK8UDQCg5Vz78P9ln1Kwb0woId6vnxVO3r17wc8EXBuKb1tYzpzK2I7VScFZUK8Qymql7MOw5oVLBKS1ChpOwNl2m0q2yYvjD+vyms6/JzAG2nwzobz54gviqr3r/HsnboRbBhzdMvlH0D+0mN7P1u+R+Vyf5KUb9jaVPqeU5BL9OQWT1QUrpZOp+JOsq/BwplYBzPpQjl5qOkA2eKjlTLuSTDr6qQQux9GO0PpOcKhwol7TmiV6kppjNFFdFB5ssq9K7e5+b8I8AA71RDNAzrtGUAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABMCAMAAAD6FQ9LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAGQA/wDIAADI/+TQAAAA////NbGr6gAAAAZ0Uk5T//////8As7+kvwAAAdxJREFUeNq01wlywyAMBVCWr/tfuSCxCLNY1BOSaePWzwKBkePI2AD0A7c7y/tBIMaIN5VMYyy44aR8aeQHo5jbI1banJQfWgf5vVWD6SPifOzH5VeMs459DkfkA4bc2RRCwAJZ1Iw2KjaUGJ1VTlROQF1AjM4KfFJiiOzyz3S8RE0JQSgTI+/8Jzoq1A6hrjxsutcUuDu5QyGUKcIhFCsZe1d5TMdQWekONYZt1kVJknWwUMe4VzUSz1I9O5xRU1Eyd6tqQJuiB7MgziG6sStZGCgZUQg4qrI+SKP02RlUC1oWo0sNFpWunl8irlRvhz6OCtrUHe1tB1Ch9EZ4raJBtR4uis9BTaE27Lmz1exdqFI84LSCQdXrn4N9Vv2OAb0wtw41H96qc/16Lgd8UVjc0/pexuPKrYidVHgqKhViDqaqXuAdBzQqrEqLU6Gk7A23aVhXWfc4Yfx/U9jX5XkAbafDPhtzTxBe1arev8da7dCbYMOap3+o9aP1JzWyN7UO9iO1ZL9S1J9Y2pQaFKGXacisXigp3VmaVF3YUu/zL7tCGViOZ1KE8vBR0oE7RVeq5VySYVdVSCG2fhntX0jvFS4VSto5olWpKaY7RRXRRebLKrSu3nlz/hNgAEAxQvcutPasAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABMCAMAAAD6FQ9LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAGQA/wDIAADI/+TQAAAA////NbGr6gAAAAZ0Uk5T//////8As7+kvwAAAd5JREFUeNq014t2wyAIBmCjP+//yovghSgaXE7dTree9guKBtpAzgGgPwn2e65rEEgpYauu21zdseCBtbraGIxiYUWK0mahrol1hPxrq3H0FXE+FuuaFCriFdo5vEaGiEfuyDfDGGGgjUpVzWi9LklBvBntVU7UhPaqXFjynfOcHyNM1BQTSDTIlqa8KhN1VeYTy/lOjOxIVeUJMeEH2ddNKFZy83TFM9yFykpPqLF1/kRB5qOCxbrGtaqRkmQw6rFCTSXJ3KmqAX2KBuZBnEN041dyMFAyohCwVeV8kEb3/8GhWtByGMM94FH31fOPiCPVx2aOTwVtakV7qwAqlC6Exyo5VJuh0Xw2agq1YGNlq9k7UKV5IGgFh6rX3wf7rPodA3phwQ41Pz1V+/41Hgd8UTDuaX0vY7iy7J9VQJSKo6LSIeZgqutFrjigp4LVWoIKxfX98QbUwr9T0+tNYd2X5wW0Sod1NuaZIL4qq9+/x7Iq9CLY48zTP5T90fqTerI3ZQf7kTLZrxT1TyxtSx2K0Ns0ZFcPlLTuLF2qHmzp9/mPX6EsLMdzKUL58FHSgTNFR6rlXJLhV1VII/Z+Ge1fSM8VDhVK2jmiV6ktpjNFFdFB5ssp9J7euTj/CTAApONCkwaNWSwAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA/CAMAAAB3o3AkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA9QTFRFAADI/+TQAGQAAAAA////ohEmBgAAAAV0Uk5T/////wD7tg5TAAAB3UlEQVR42pTX25YEEQwFUOr4/29u5CJB0OpheqbXXiEialKRAaC8jqQm54w/VTON9fGqGFX11XF3acyvqY8GHmPBqVs4ty6ouriRQxqW4ap01wyLlzerN7aoJ7aqF7ZRnYHRnu1U0VxGbKvGJAN2UQF7ibWySIHyQehRFYdWFinYKS5HNYylJUyRPLsraPhrNrCg9ter6uUxrwdGyYGEPZ8ppU2/kl/rd6k+0psgnxKzsmVpIKn09jMlZpEy7WIUkiCbw0h9i2pNnBxzcDbaGuZgRskWc1Ro5nsWqF7hVc48QUqUU3oRQYtWFPSiQTGFleZCgipeVsHIhqQmLaXUH85g7+KGYRtLDiQU1Wi6tv4loi7aYkEU3RpmIoi6qBTmULwB0kT2XZSrN7f9skx6T9RFO2uqkAXtNE8xPF+s+EYkdo7FjHdZblE6qJ2dlGbfXr19irGCOSz1g2PhuvRo8sDodN9JWQZ728exbCNo2ZR3ES7uo8JAWQPFsXTdECSvPqd12ftEkTKc7i9+sldxrDIj904XxTIMBukUI1XsGZtXFivz3mgniXMsUcjTyg41rypjWRluipif5D0Wn2O/svgsTwweXRXdJYCi05vDxpp2+qpkquVP5f5n+gkwANrkKbs+hWykAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA/CAMAAAB3o3AkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRF/wDIAADI/+TQAGQAAAAA////ndiKyQAAAAZ0Uk5T//////8As7+kvwAAAdZJREFUeNqU19F2BBEMBmDM7/1feRGJBMFmT0970a+JIDMNmQNAfo0gJqWEP1U1lbV4VR0V9ZW4uzDqq+qjwGMuGHVLZ9YFURc3ekihGa5Kdk0xf3mzemOLemKremEb1Rg62rOdytJLj23VKNJhF+Wwl1wr8xSoH4QeVTZoZZ6CLnE5km4uQSVCmNxFfUVQGBcuBYqq8Kra8YBFRvGFhL6fMUbAKsXKj7F8eDaBf4rEgg2IEsQnvX6PLSYEpdS4GJ0jBPrdtR1hHjKTal9rhbmuYU4mCsm2BKPzrQt0XrGqVFsUOsW0X2A7qdRU0br3YT5I0D2k+d8mMwI8xZWKShJdwZui6JvMqVomNMZXLezvcUf0AK0tQUfEtlMUtBusaF3AGCLbKZqlxFoeocSoMm+KakaZ9Oxx7xf3g6qcxqM7bXrzSUY7fR4UYzV/DurA/HXJsVKq7Ymfi1qmGPTTHufJNjoifSR2VhhItqyWeHoS9aMV5eSDW39Q/DzR16X/rdPzq3+SVX6uPCPzTuflUgwKSYmekulvUGe+Uu+Nukicc7FCmlZ2OPOiEpaV4aaI2SLvuTJPNb0y/y5PDBZdVduB9ube0enNYWMl0bviUvOfyvzP9BNgAC8UM4CgMqE9AAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA/CAMAAAB3o3AkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAADIAGQA/+TQ/wDIAAAA////PC1IbQAAAAZ0Uk5T//////8As7+kvwAAAeJJREFUeNqU1wFyAyEIBVDU7/2vXBFRtMIa02SmU9+AuEFLVQeA+jpompwzflRsmD3GI4ueHa38FnyOZdm329aFV7dq2Ed+WyDtvx7ulOWuVjmZpPZa00ughDXRxmSKynD/VWcddcaqjDCR4n1IKxYE9XekuKAaqySUTRVX1YFSahOTTO7vZ8WoKCpjabEq54gVpB7lMnzFzkGxatX7WcEW4jfloKAariqRAj4UdJhvJ4gCVahNAH+0IbP7r59qIp4vHx2Rn2AhTUgHo/QR6qZa/ULVBlWMlAahNzXrRtBQrIRpSY8cyW4RTtUanTZKXJVQo6ibPM6obOJduij1FjN2T/pib+VL1XLpor0vyaZzZ1wdEtEzr7EIxznDjH+cLprGk3X0fCkM//HeRZMqnpnn4rSz+l10qnkiat/yYg0mhd+Oi8HcDjBZ3pEcM5GieXraSHGs+UWVuBvze28yXx9SNg7QQFk2e4tQv7NZhnmtEBYrLJShG+7HmuuGIr3FROuaW5P2q4swV5lX3lV2Y9UTwajsxTIM27UMYazV8Pe7nDBfmXujTRJxLFXIx8qCZ35dqc4ko2d+Y3uS37Hk/rYnCdQvVZGPJIH6rfoOVGAi/6Z3tfbq/ag01fqj2v5n+hNgAEVCMI/Dmc1ZAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA/CAMAAAB3o3AkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAADI/wDI/+TQAGQAAAAA////EPe14gAAAAZ0Uk5T//////8As7+kvwAAAeVJREFUeNqU1wFuBCEIBVDG+d7/yqsgiI6o6zZtk+YFREVLWQeAfDvITEoJf6pqKuNxqxoq6i3j7KjnV9UrA5exMKhTuGFeMHVwvYYyPMNR2ao5Fk9vVnfso67YV92whWKGhtZspbLVMmJL1ZMM2EEF7CbWl0UKUg9BlyoP6MsiBZ/iZ0uGsQyV8TyTO6i3CBmDo0OCpio8Kt4eGNGg9EDCn08iwoh8sPI3Kh/tTdDfSNikYMqQ7vT6k3hMqAcj3y565QThmaIt1TsrSDf+MMp1DnMwVaXZLVMkrlpdIN56mJSE+5SD/PmFbVpTT+3KPUmsVlmjwaaVMttH64LV3miZ6iLL5STfNqodSBhK/RJwOdL6HMuCJD/gKrLsoroxu5BDxl813LqLtt2batlFlVAiOMeoizKrqt+IUkcAm/PVlBbDGsFGCeMUE/QWlYPK7XGnrPr+6uU+FyvdH/LryMJ52dFsA3pZ83LGyjP42z6O5RtBraa+Rdrm3ip0lCxQHKu3a0X69NnNy98nbhNjX8PXfdKo4lh5RsObLorlGByyFCOV/RmbZxYr9270SWIfSxXSNLPNnjeV8JkZTkrYmOQ5VkZrGn5m8VmeGEZ0VLwC/HJvaPdyWFgLdK801fynGv5n+gkwAMfCM3ysq45JAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA/CAMAAAB3o3AkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAADI/wDI/+TQAGQAAAAA////EPe14gAAAAZ0Uk5T//////8As7+kvwAAAeJJREFUeNqU14luRCEIBVCHd/3/X67KIi6odZp0kuYEF0Cbsg4A+XUkM0SEf6pqKmvjVQkq6ivj7lKfX1UfDzzGwqBu4YZ1wdTF9T3k4Rmuyk7NsXh5s3pji3piq3phG9UYBO3ZTmXby4htVZ9kwC4qYC+xVhYp8H4welR5QCuLFPwUl5QMYxkq4/eb3EV9RfAYXLpM0FSFV9XSAyMalBYkfH2mlDAiH6z8LZWP9ibot8RsUjBlSDO9/k5tMMIaLPl20XeOEX71h3BW36yKKN1rDZZyXcMcTBVxn8Sq6q7VA2qph0mBb415O5KvX1jSmuJotpnYnbJGgy2L5I7CQelM9ZD5cnJLkymmbUHCEMklIMEkg9K+jvlAyA8uGK7QbRfVxHQC7bC1iey7qGQv8SkT6Y5AWNRFG6uq34iKcKgvUXojSuKdYgnrp0xSo9pVT8p231+9bYqx0vzgryML12WlKQN6WbfjjJVn8Ld9HMs3grqb+haR5D4qdEQWKI7V27Uiffqc1uXvE5fEOO/h5z40qjhWntHwpotiOQaHbIqRyr7G5pXFyr0b/SRxjqUKNK3skPOmCMvKcFPMxkneY0lTG1cW1/LEMKKraieQ7XYhnF4OG2uB3pVONf9TDf8z/QkwAFd9M8FIiTPiAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA/CAMAAAB3o3AkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRF/wDIAADI/+TQAGQAAAAA////ndiKyQAAAAZ0Uk5T//////8As7+kvwAAAc5JREFUeNqU19FuBCEIBVB1r///yx1EEFTUug/dpDkBHcDZVGUBqK8rqSml4J+KDLG2XlVHn/p96+7SyI/UjxceY8GpWzi3L6i6uHGGvCzDVelTMyze3qze2KKe2Kpe2EY1ho72bKeqnmXEtmokGbCLCthLrJVFCnwejB5VdWhlkYJNcSnJMJaib6U0uYv6fYKXc+mSoCqCV9XKw5lJSUPC9mfOeTKWffnm7yOzCfItGwb1UKVIKp3+5rbQTVmVGRfj5FTRP8tZ/WbV4rTh5VmqtIc52FCF3aLo1OgBtdLDqiiUBsP0vCB2VRwSOyWFhEnxTOb7JlCS6aTkxtFiTNuGhEEse5a91dK+j/Xc6f6kzdG30aHbKQp+GhxLbhyYIbKfopoiRWHWekBYNEWXncHOnrC/RknZW/QUa7Aus58+D0qwmT8HdWDxvrSsjGrPJI7FHWcY7G2P82QbJ6KnyOysMFDRQUQD7zB6e2llLXzI0R+UVKvpls5wur/6p3gVx6ozcnUVxTIMBmmKkdLp71BnsTLvjTZJnGOJQpl2dqh5VQXLznBTzHyS91i1DwC3s7iXJwaPrqo9gfbm3tHpzWFjNdC7klTrP5X7zfQnwAA7vjOpB/kWsQAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABMCAMAAAD6FQ9LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/////8yZ/8xm/5lmzMyZmWYzAAAA////iq7yagAAAAh0Uk5T/////////wDeg71ZAAACBUlEQVR42rTWCXLDIAwFUIXlc/8bF8xiyQgskinTmWbxi0CIhdKjEVEoLf8XnwNgDz1RjP6Tm/MxBiYKwVIF9wlFfYLzoZuhFyqj3lxlvGODCUUhlvEUE2N5ERLk4HTle6TrFUVwgIUa6MqH95FEPvRxBc+HlVmPVVO4yCFTzl0sQOTuRbmuEhQ0KXeb0sPAUrBS5J13d8vpIC2SVDlP+cmBoq/TvFNXakPM9edb77yLpPbvVjW1yMzF2q6KgoqSnMZSHd61bvpAeqSu0HqCUoq+tljQRt2LB2VVhquDgRb5awp8ZHU1U1vJa9WfZrUzVvtSje8BAPpyWqo28FPVA9pUejALunIIZsyqFgZaRhb75qrmIRGAZFAsaK/KXW3IZIiIZpUsfZQKj9cwKP7TmH/HrpJBAWl5+GyUUhYwxMJUFe9qzLOoEYO6z6pdsJ+VzOCWkR5qfnuq9ucXVmXxjYKypmmqJzzmb38uYxpP/QhKMBLbxnQBUj6Uqq19aIt7q5QtG2oxktient9isThJZuzRk9WUyV10ms73WNoOvQhGabv+3pXa8JOS7E3pwf5Jqey/FLv7jCk1KH7haRvsgepFB5vqhd3O+/xnVxi7gVGNI75fEc5UOlL8AoITdZ80+QeM6k7INwqHCuNmZ50vdqWrAzxRff9O6SDzrQqt1Ttvzn8CDAB9xGbo+ch+JwAAAABJRU5ErkJggg==',
];

var IMG_VS_Pic = [
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAwCAMAAAHGPD1TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRF/////8zM/5kAzGYAmf//mcz/Zpn/ZjMAM2b/AAAAjMm91AAAA7lJREFUeNpMxrENADAMAjCgChX/PxwlQ1VPhscdePuarRVGMGUn4LZSPFQLQMQcnAAAAjEQNAcX3f4bNoLob14z3uBD/jBj7sAqVYhsgWYSd0fFFoDKMUoBAAZB6JL88P4Xnm6DWETgQ7SbMO3zwkcGBksQvHr5B6vOAHGiAkmWC90DrlzADnYblzW3AGyQWwrAQAgDfbCW3P/CTbBbF9ofwSA641zHPlP1h/SGOIhgX0xsTnSHK1gw8Ghysk9YisLNGn6HbmgjTXorKTG5YEkzFPGVtMzW5IdD5pB7JjuGqo+7FoC71i0A29S2BSAIwoJM4/9/uG1onlJ76ehAdnFeVDfcJqG6Att2/YDkvl/xAcYKy52PGO+EPENJUFZwaq407Mg4NSZv5uSQ5mvHVN+O21zxoQes6MColGuOmhmzGM4MMhI1OhDSX+kTrlUNO9IvviR8A6RliugJq0w2Eah8a46arYAuaV365/QamdaPd3PpL2AA8m2xK3c9SnkEYKzckiAEYSCIWRHm/hfeJBNWwGyVP1olbXg4HbNd4/mlr+tlKF6DSXryVOwg8C89156eN2C+uLhueXxCdPkXikUDTJD4YuQZ3LEZD6sTtr8sj4y3f3/LN5hxyYILRMD93jubYpZwfV5KZ0pKL162paA2eh0/ZhXu4wGmijqu0QofPOCtRjfG7AyLwcpFM2sEcfj7ssilgpg0rNhAUIwcBRHKrG4RhIx5gcktlWsBvZwsElKtj4OuXnUL+RL/JBWDjIKYQG/gSoKl9Oq6ck8wSW3qMPz2FcadlccYulYDdRyT1uTOsU4hfuIrQOvltoQwCANRiqM1///DkuwGAtKCM9aXXtIzIcHddPa/njT13DhQ4LSGqZ2dW4fsAK8E4YqY/oi7sLefa7cB1G24W7Zbu/w9txBnAnEJhGnLCqRCGHh6lZYljKt3DkACv/UL+51p1eOwDyVzFrC1ueOLqegusKZpGioc0DoYpFYjlkuOeqovFU19u6HjVrkuNyHw4G4Cc3v9aPqAWQOCTRu46/JI5PtBz4Oucx76BkKLpsQGwMgkIj3ReM8UUFoXRsgtUUNtsRKI4FUgBTWz/mNTKPi0ER5Sk/QMOyCykymsWkhNzrdMLKKFJlcDOkbkNdZAhIfBnaxATiTQl+sz46vztinxEXhSTakBOToGInnCcRTnGErdO/288ghEeyU+yLFAJJrH6fB69N32rUGefsodOa44TsAjToHMesDZMFKelH3o7ciyxjmxyoK0YGHQB4/KUQj+79GYAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAwCAMAAAHGPD1TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/////8zM/5kAzGYAmf//mcz/Zpn/AAAAV9qJpgAAA2JJREFUeNo8yEEKAEAIw8A2i/r/HyuymNMQ5VaTTkf4pBBKM9fyMir8TAsgBrgJbAxwA9jhTCYYkwlsGDsj0DAGBkZ2oCFsrKzsjMxM7AABqBy3HABAGIStKtn9byy+on6uC4VtuOE74WcvtM3GKKdq0Zh0zS4MKAkyKx4cyXgCaulufKsLwAYZ5AAQgjBQINL//3hbia4mHDgwMdLpdX2fyuwiZRfph+hyVgM1T/iV0V/NIaFxOq+X22gSWikBrE8uEHQXKs2QIKHBZQ7BCG6EhuO+1PnX/ARgnNx2AARhGEqmuP//Y9tuCphp3BOXEwZtmd9e6V3p8Y6tGn1y/udEmwJYcZaE2cjZk7SUjwGODNYgpZcBo6SuogXRfPXOwipssHmApMwTpCHOlYZyF4gf0/h/dPELUoncUDImWvt98yOB3vewzgOj18i0Bpbm0l9giHdX6PBm9sbsFIC3MsphEASCKEule/8bd2d2ADGYmjQpH4boY0Gch9tvfd103PklFLuv/Tg9f4mZP624SSMu36auGbKwcgtWpVYUOltQmSXWq75vgiuYBw+L7kAGVnWjV1j9xpnBXVXA09WZMgTLNTSdxn52ZiBeMo7BEXT0DX+VWdKssNlZLgwbbtEb1CldLi7xKLn6Pq/7dCvaa4B4a5ari4TNuoVpK+TKiWvVn6T5oqtsFZg74Sjo1NAPz8l5MuBlAjSNGb7GekLrHENOugYv0iYHUIkwHQkfAVottyWHQRiGUpZB///HLcgyJps0zkzz1As5GAOSLu51T16lf9e/54FJYvkRy4kZIJ4Qyw/rywLx5EkAcU80Q6g5YL+lUXWoJA+ACkR2kMWo/jsNMgusSgpEbHooaBbYEeraFHCqKyMC58otmaIfyqlWpOlxKUHnk0Au8FMLDoll6HpR3HGRzRIpu/XywQmQ+nZZY40LtvW/TF3JW8AZbCR2Fd+I9FCqv14QbzmV6am1/7gpQ3E1HVHmJnDg6GDI7SNbG/IEtoLcHAPRBJSRehJbpz7yAusAxLSm4TpYPBJLWK4yY9+97Yz4J2B8MwDNqwPReLA4ys9NLSOR38L9IZDbu18shP4YcXhcg+bwB9or7+Ew863uYJUHXDPXHhN6M/2kkdeKKwfucE1txVrDGjz//Ax8Ax/lSsdHpz0KAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAwCAMAAAHGPD1TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVQTFRF/////8zM/5kAzGYAmcz/Zpn/AAAAtDV7DwAAA7FJREFUeNo8yMENADAMwkCgwP4jt0ql+HUyMsEuvvq8xF5BCJWU4NA1D3UFEEQBSBcrA0wXlMnKADSADSrKxMQEZAJ1szIxMDCyAA1hBVrKyMzEBhCAxyk5AAAEQUHG/iOHqekLlKN+R+CJ8WpOxU3Fb+1l++tlJCYr6RBJWgZIGy68hDwCjl/OhnFcAbgigySAQRCIAdb8/8myUqv16A6zJHJ09ndPP7aziNghk6hG7U80MbFLSKhck2z42VnwZgW/sjiNPJX0h7gu44EOFaHJ0mwSzNAJmaOwtXxl6HzuSD27niEA3WS0BCEMwkCPs/n/TzYJoJzT88mxW0rYOrO/EndAj2NtwA42SPwFa2JdcQ7zdTAUDUgKYxi/JbvJwkliX/EBDvgObkDIhm/TfFoOFoeG0g7c61TFBXJ1L0Vxk8qlEOhLNmkw/GNBVGCVtQwq8svHYsJiUeKJFsDtqS79xccV8yVKrvyePvNUM8qts9nGJQBjZZQEIQjDUOhi7n9kaVKwzICuXzrGgu1L2M468T1Gfb1DMQd4HUf4Bz3RloWerTBm/I0ZsrB9CGW/hCNwAjfwoYotfQN3mt3syOPDbSG2eyEWuMXCYY8S+evIv90eleWjUmHM7IQkPFO+WEFsz7gyxVXWtUhjDM/0gteUeGeII3TGwO8rT5VCNSFWhyo900Jo/CqC3qfhdcowFy0jIRT7vH281a/fImQ5W0zY6nCh3Eq7cmGzOEkaFruGW0OoTsALgjZkSPviTIaqpWt8M/3q8eEkQk/sj/9114eyJl0Xmg1b+2mAW4DWy223YRiGoYKX8v8/eYioC2PYW100T22RnkiyRDGbuV4OsY5nd/8lM72b/9ffs76GngB7egAdphXRzqL7ClCznYBTFYGPIrQ9DzisYchGwpCXf/H+OT4U67XMBWMhiaCSwE6aBlMrdryhieMACEygAvpAngHRCt0gSqBLKMccb6eMyhYp5SgDcf9OT8JA7Z3wYimkhVT9NRf2kTGGGv+jCFkopj22182bI6S+zUbK8IhqjDqIULPkacpubFLswh+x5vwsxDhOP538g/swyDtC6imfiuqV3g31uOfcFHCw3RvI28O8aREvNXIhzN2ExQuilbkf4UiXrAkIX0331kHzSDRJNz3j67nbVsSfBOo/BRi7WohISaIdjZcdgxIZnjgIAnm80WrdUVWfIEbd4hl1Ic+qangv80fcsipnnAMpfFXM6jTvG1yWx6Gdu8M1MXPom1ONfgGvhjVbc0Iz3gAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAwCAMAAAHGPD1TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRF/////8zM/5kAzGYAmf//mcz/Zpn/ZjMAAAAAlt/OTgAAA2VJREFUeNpiYAMBdhBgQGOyszPBRZk4GDmATEYmoDAHAyOYycrBzsjMyAQQQJjasDI5mBiZgEwORjZ2Rg4OoCjQLFZWdg6gKEAALsctBQAQBIK4JO39T9xoQZEfPgbddSvcg+ebA/VBWluaaqUi3jg61FBREI/A0A3JBBs5nBTmXALwQUc5AIIwDEC7Lcruf2LaqaBE5Y8GWB9z0By/46VR+w3bV6iavlxP1RDgHiowwB92Y2eu47oVqZRAXkwXnweojDO0dMlT9gju9N857EXnW1sXgHJyyQEQhIGoVmp7/xM705aABhONLDS+FObDpH2lbZXGX9DsE2gFdrPeJxZmVGP9WU6kp2hI6Ia5sOwRxK1idFqiPshgnugn7Rpkdmz3TGZMDFO9QFOrnLCt+wQ6KQnMFe3EIgjoQFR7hEWQVJ6cSfKHais0MFwoMd3yRSpc5qutod5KjOq5N74uAVgroxwIQRiIShdl7n/ipTNFwGA02f0z8igB5pXFFS5v5/ghFOVtKP6cns7Zu5g9gp2zC7sGPbcMoj0szYtSV7gDC5tB3L6+cLu0ifTkFWb97hxNAnhKNswJv5I+nlYq1MhiIOt4MoQPadgMDnRnmjLwcjNYf/l869shB5emKSPQnBwkJDi7JRDW1gX2kBCUawJZzpqEBEV+CJ7nyIXN9JJ4R42aUZBnHyA7eiUhXVtN2QrZWjapO/iKHTlrijjq6u+jBZk6l/foBeTYEr4CtFpmCQyCMBCtqUjuf+KaZSAgrVjlrxWfw5KZDOt6toQn6/9/2pfwuIObAObtaeCzCnM+KKQ7wHxUSHRXYSvObAs66bLCZsXOA9EN8cRoe5PcgKTiq47UlkuSXwxxFlh3UeoYbQMG+yiqL1xsfX/3VCAds/+WPwNvulLK60v1B+s1xLDpSulBo78f/BzjF9C8aKixAtQBF3PqpfRMPdDd1Gfw4DJGUcy6WEfmwR66oXqQjngZjVwZDJFjoKlj4uN6U0NkwArweMp6Czy6w4Z6HKXUamTLMEsn3aDuHmK56Bm3mm3JkqvXaLh3CR5vTCrQsogD0Xns7WhKEWnZCRyHetR81G9wU1dxg5woGbdmxGE9bVwNAcpn5eQprjh2wB1u5aq6wwnQ5r1wHMRnuBXbysUWuE7Wh/vEDyJRT2SCdvAnAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVQTFRF/////8zM/5kAmf//mcz/Zpn/AAAAU/BO1gAAA31JREFUeNpiYAUCNmY2IGAFAwYwyQYBCAEWdAFmJnQBRkY0ATagCDMzSAQggBggfDQzWAgKANlMMJdBBFgYGRmQBViA1jKxgC1hBQjABxmtAACCMDA38f8/udQEkchXj+00a3tQhNVl5TUBewGmhj9AFbge2roD5ClZEl+5gjOBCsD1YzSZLQClZJADQAjCQGmV/z/ZstmsHESzV5mQOuUD4vkYsvPyC/dfwNh72CzIJplEjQLAaQMpB3CUG6TBdEvNxPRCta5Cpk1xWXQRY8R8ETmk+oaQRzr97WIKwEkV5AAMgjCjxf8/eRSWTRc0TJJdFtsUaHkfPOP4LGXy2ShfYgIBsCCI8AGBuglrfEKBbPApBZoe3Mk8VNBtCLUeK+AewH2ab+oWHhMwcBpOWk91FIpxPZIjsMSCpmKV4tdPBwP0HwRqWWKtnED/tdaTLTRfJc8IrxHNRf/aN7cSELibAYcb2i42y3Rg7OUSgNRywYEYBKHgQiz3P/KWb5pWEOMBmCCReXwAqq10GdYzsGazZVoDim2kJqBaxt46V+UNAJWEFoDO1plGhbgOn9CaAf807DaQCSUyZNVAJhTAgw6GAPAAwH9ZklCfgbtKEwCIz9AJSBtKc4ArMVq4dpwI5sS7HsARPYAZzXTIUiUd6dSpKYBvxJCq3l/PC6wBYCtTlA/RxETKFUBKw8pEprrGMilAtc4J5VYXpb8ReS7IN5AutN6D4TXMXxkLlgvksTDJhb8AtZjrEoQgCIXNhPd/5G05QO425iXyT1PNeD4vyMFEnXbqg3+wmTvtdU99AM+LzNPyEQAyBWVu+LfRPw8gBIWXGvFzgF6eu9cPAeDFCaCYPYBEW5bkwwBK4bVloCgABkJuFhDNcIwA0EDgXZNjnjgNKA5AEi03DEvrLKIgAD2OBSD/W41HW2AYQO87FKCGyE/kpwEkP2IZdC4MJy/JDwPYjc8GAFyAnO5Ri9HqC9GLAIfHMN+Y09f4JUhbSSwHZySAuQl3SlZHi+tjlMSMELGqeBhhEgAEkNnqxpvuA4gjgb8BIATHmI/2S2BYlrxhod4AkKFfJsDVmb3YH0JIE1GINXBtu81AYHJh9U6qrUZ474REGjyJf6ZAb1JcXr27c1YQeJY2xXAuqAk0BHNVuIBsr5u8257E/1UAYktH0uGfO9FPClMjFP/pz0vXH90HdNrvpj1dAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAAAAAnS4uRQAABCFJREFUeNpUyEEOACAMAsECWv7/Y60mxu6BkIm5s7KqO+Os88mFkewgkh2AcPoDA5ZKlgACCzAzoxnKAuGzIwmws6MIsAMBE7LD2FkYgYayIwRYgNYysYAtYQUIwAa55QAAQ0BQke79b9x6pKWpT4adiNjoZpZdy/0O5GRepQ5AwXwAfADRsV9A4BJQAREFyHWRgu8FsRDT99JglgCEklEKwDAIQ2vtmvvfeFEGs2Dotw+JeY7uiDbDFeARFXgaYJUe0IXETs9qA0MgPgHn/ASySqgNHgpJTMgmYfylQWQvUTV/j00zB1y44NgmG/GfqCFThSFcEPlcvAJwUkZJEIIwDEUt9P43ti+yogOOuIz+0ZAmaduFUzCcuql6yVmzoH/hfMlsK48nvwOEZz8xS0ckTzAIChqzgp5dD3kGIPTB1DDN/R8G0QOpYHiwrIG49xqOAfA8TBeJ43uScAywCWBZFyGkFBkm6O55DkATa4SqHrTgmPkHAHKdKoIXlVtdmjMtsGNiOJTdVcXKr/57KwOAI81G8ok+1drYijg87NrLLgClZZQEMQjCUGXb5v43rgQ7dhRcut81k1XywiJg2PKzkBokmvXDgFQWwjQiGSbOYRjGzCTqFeXT7Md5AHi5xiQPYKdlvYecgNUhZDFwISvQPpWB+W880NFTGkFD+PcRAqDASHBNFnBeSaAoQ0zg7eJE6hk5zG0dMKQJ3mjN/QUmtxGtdKKN18D5QYBdqkQzI9H5jYBUW2xoQoHsng+RVh8mGlMpkHTQiVbHz3YLn6mhgFKsdBVuqa2ujh8+CGAINCofxIQD5Z2Aua9iVIYxebmIEjKZ64ywVzrVifRZYtcLxLruNEffMGliusyyrYXeC3hqwemFW4BazHCHQRAGwgjqvf8bT3pthei0LMwfWxaT3ZejtAdpe3lO/fLQbK/NF1+L/7UQr+1lHQXA0+4bBBALOKsQdyCsHwEQghoch/XnANACDkvcDevHSpgCAHWgH9jXoXdTCVMAaEGrjyr/pg9MKkIFOPUh8y4jtAazAMBFyJIXGN/396o89DED4KwCGbDgrPQiwIP8nCWwZgRkna8CYCbcGnFIh2owCGCtqAIccYMEAuAfvbrGy20egN53MGbYIc4TZM43NkTkhwEYU2pQ0cOsPL4tMCofBigNQM0oDG1ZFyRpWWZrDojK/wZwZIzFCFLVT6rPixsGmJkAliY8KTXnaDtO5x12rNdNi78AkIAr3xHUOpCqpDh37T8AhADV9tQSMDzuvFOwDBlCGAeAIvQG0Hs5YOphnzkWk2ZBswantuVWzc6w7ERtDcIFzxAp2Ik7C7Qba2yuAOp88ccg+L1+pwjPgpbAmoA7oaWH0j7y22qS738F2ODZeF0bF+wmy4pz8Xsh6xv20r8vf/0BohR1gmhOiAwAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/////8zM/5kAzGYAmf//mcz/Zpn/AAAAV9qJpgAAA7hJREFUeNpczEEOACAIA0EgyP7/xzaIB+2B0AnBSiETqI71XHBlID5IjyAeMPycDKCuz1q3AAILgC1BtgXJEqgAE5ot7KwMjIxMSCqAJgJFWJG0sDAC+WBL2AACsD0mKQDAIAzEJc3/f1ythRbRowzJpGrre7q+/NUAkAPxAIIxT3PjnECnhAolmQlwh5gZg8EV7AkeFpr651DMFoAvMsoBGIRBaDU03P/Go3OZTQx++2LhEa0Ezg7tB9NyA0zw6kHJlnIrihXxahK/JwvUiCMcAGhUaRqTaQFGLJMOeFWndoXZgnVCdbCJHrJ6Tr2XdPDb4hGAkjLKoRgEgSBQkfvf+LGLyWu0JkrTT0ZWppU+VYxdxVR9UwsgzfOP/i1iBeQdOIc9I6yAXoD/Xu8BOUMOIDWEVV1EQIbWCODDWcyuAHmH2KeibHyGN4BcAvolvRIZ+gVyHQJogdK7BwGUdrl/IzYAz7anCNUfRLQWhxGgLa8A8vJ8+st381OYbcYmDQScrRpD8IryyvITgNQyWGIYBIFoJFX//48LC9hOlA5MDznyxiTsWzeAReGxzGOks9D/DZOlMZulE6AUxnOc+wlQinM+zTEgmeYIQIcz1ABEGyENEALhCB+hzKpQ2CfXl4yqRuI9YCHBaTZOhT3AMnOZo+rWa9gFKQdQI7HK5lIaM8oAthkoJEYrfQN1KqpW67bJmwRKDJQGgIwLBGbqeanCPQIwp86fTo0A7tTbGx+E10wDumn9dqnjAneQcgjo6tPWViuok7efcQVONq3jejjdUniiy+DeC7qCa96L4fExrxEewaZlwGvh0AtvAXoxlywGQRiKKjZk/ztuyY9gWwEbmonHgeYSIO/BljshqlQDLyPPRh+gJcBuRAOwZxvPP4swAEAEMJ5/jqAPwCUwtfygd8sBlEAVJpRgACBXAE7eR1gFQFrLZfg3AAqAk3qfsOr3EgDbCJSI5f5LLFmErhkhAbwIpAjtuO0lHkDy0yQUnd7cgBOrvx7o4xuRmW4C2DWSHOTKEbzc8cj4T7cvwQCqz+SYVK33pCTp+lT6E8A5P9stLr5y8ByksmdwJYD6NQ0jkCJIzwrtA6aFCqCOT8IWBpsnnEG4A3DU8ADoRIMMPoYDABMcLYGOHjmzILB6RwMANEXw1d9t9s06DCFsE7uQCVxOMb7J5QfLLUb40elM22AndgB2icPtz4+/8Y7uCTM3BX0CJz62MRntbJ/pA7DJwbsAGU2OAJo7cbSlr1vBI9iirM+3Xz8B3xCDwqYiS1YAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAAAAAnS4uRQAAA/ZJREFUeNpcyFkOACAIA1HK1vvfWFBijPPVPomKlh1ZW2JLni546vwBU3wAgMkHCLhZyxJAYAFmZpiRUBUsEDvYkQTY2VAMZWdnZ0TRws4CsgTZDKC1TCxgS1gBApBBbkkAgCAITHTk/jfuYTVmfOKOoBEbrnrSsRPgj/gBHF0AlnkGxnlNJMY3IQGqRrb5FNouWDeoAZj1lyyYLgCfZJQDMAjCUFSk97/xSrKIusE3NdL3kP8S8/vF1XJlJErASg7crA7QgMFgOQdWQ3BKAwXJ4Qprkmi8pX68v1A3gV+GKkbigmOi5jwS+5JK3Yy4C0ZeF48AlJRRDsAgCEPVqdz/xmvRTYwsOhL/5AVoYXx4B0al5qk+rc8DKD6gZJihfkapWwA0M4o4iB0AJXQ5XE45ANBYmFcdG2LmcADgRsAWgSs2E2QtwAcgP0F0aia2D5EzAGWMajxdUUNYP3sA3Vheo9gjafFcdvkBQHoIvQbkMh0WveSwBd4YBr2bmNv8q29WwgE0N2c6P7UzxX7aMdI6su3lFoDSMluCEISBIGRx5///WHJolTBclg++pEVMeugAri3eiTB3Lz7BFkuHIWJgBRhPY7TCGlDG5aSV6DiP3/9vp5mP82yatwDY1wEHlLEOsA2A6L1cAANYDmlKSA+4NoUCtZH0gOtAKIkA0G8Bl6oB1EhonbYH0ImtRksVkPH5AyeAnOTrRHu8DgCuxDxtgonS8utEwaye9YEbLb+XRKhSpw4BRZ2KkDJcqeWHA0D9AQGAnSlUE0TKM4AV18OdWxnuZOyMswMeq7vWtdqU3iLGuSBiWtczTYkTpi2i2cw0jYXIBTyxQHLhFqAWM9pSGISBaFuo8/9/vCYZ0qjdEizy0qMeO5cEkoGzxvJRHkr7+yM9wKG95Or9fYBAgKT2ey+7BbC3zlyAgQgc+/9xqZ8BUAJxbcP6hnwXwEJgzRJD6hcVZAwAjEAdT0FXPwNgIXjTxyT9PEDQ19TmlmRXPwsAXwR2vpYqg9QmmAHgq0DmLWcPK5Po5aG/B4cApBDo/LXI9wEsUfscAJaiKtJPu2EEeojHzQykAQproQDoKVBNAy6WItApwuMAcrm0ilVYFjZKOjecimcSkAYoAWDVSyA6HksCvtuCowAF7tSi59rOg7Dv0wCam3CnFM7RjAjvUzwDYol+AmAE5jXWV+sJuhA1cLZrfwGgBFh0K0R9NT+VrZsesszaBa8AOvUYAK0KaNo4VmwKYRkoA5aDQxt2HbG6d263GmhXE8aA2wBOwBB4NbbN+ATg/IuPBmHP+j9FuhdEgm0L8poPkpU49DOzwt+/Bdjh3rglOgx+RZiIUMPC4PPj1X+DoHd2JPxmwQAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVQTFRF/////8zM/5kAmf//mcz/Zpn/AAAAU/BO1gAAA4RJREFUeNpiYAUCNmY2IGAFAwYwyQYBCAEWdAFmJnQBRjYGVAE2RkY2ZmaQCEAAMUD4aGawEBRA4sMFgIYiCbAwMzIysYAtYQUIwPeYpQAAgkC0Rpn7HzmXBJHIX99sGduNQlzLqtcE+AKoxB+weQAItHcHRCxkcbv8FpwOoubg9eM0mSMApWSQBDAIwkAhyv+fbGgd5SB0epVMiBu2wJ/LkB0fvzD7JRh3DheDSBIB1EgEWjkAZKCFw4tBmnBTT1Dz+HgYwrhIuvCx+vwoYkj2rZQ80GGriykAJ1W0BCAIg5qh///JDdZV1upMPd8E2cCdF4523EzpcnaVX3OCCuCFIMMnBJ4mvOMHFNQP/JAC/z1kKPMKmppQyrQC+gD6yd0reV5OCeijMVFWbFkkJvTUMQL9WI9dI9jMLF4H3flB4JF1AsGDwfOxD82REtawkmPEm0Gw8qvTl5IQRJqBgAutic0lHbjWsglAarkgMQyCQBQZ3fsfueUTm0mFkHgAXzYO+/APYNoKy3B/Bx42KtM9IGkjioCsjLU6Z8cLAKSEEgB7dUbPEGPzF0p3IJPG1QCRUJiXShploTTeSCDD7DLidwCZZdmE8qp4o7QuXWi/Rwmmo8cjgOuMiJPvh0qDmbB9pUrq1wcJYEIRqVoIWdmsUkQdoFYGuZQ1Tj+/wAoASPpp5a6aWEg5A+jXp5UBV12hTAYwrTcBuNVV6VdEvBd0kDSFnT8Ww+UyKV0LvhdwrIXFXvgIUIu57jAMglDYIPL+j7zJba6LVRz1x5quiecTRY6WtmgffeHfbOZOV923NYDXRaKwfAYAhwBjw7/N/jgAEyAdtUb/A6zq3L1+CgAdBqDlrAEptHgknwaASGfT0LIASBBgeoCYpmMGgCYCVT02QGA3aHkAXCdpYlhme1FLAtDtmAHEKEDSEtgGqHZ0Ea8jP25Y4FQ+CEBiMtgvXWwXwJH8NsCobwCiU7r30XgAQFD+CMA4euun2bfzs2gIAG+cmQDmJpSgD7sbLuFg46jeywKAAYQQALJXG+bZAkFyIAcXlwL+BIASlKKm024T/FLBirdE7AkAsiAMo/eo8OhturYQSiALZQ5c2m4zJC8ISb2TaqsRrouUKJs78VcI9CbF5dW7O+cAIU+cU2zXgpFAtyH4TIKS1bHxu61J+X4K0MjKEXd4cSf6l8KMCOgf/fnT9QtVznXPGjNNTQAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVQTFRF/////8zM/5kAmf//mcz/Zpn/AAAAU/BO1gAAA45JREFUeNpiYAUCNggAMVkZWNFEIAIs6ALMTOgCjIyMbGwsSAJsjIwsLMzMQDUAAQQWYEQ3g4WNkAAbGwOqw9hYwLYgBFiA1jIBLWEGsgECEDpuKwCAIAzNKfv/T84LkRHUnnQe3Co2BGXXsjdg/AA04g2oCYDz3AFVDxlZlxbz/cFdoOr7Akl7CkAoGeUADIIwdGLd/Y+8hyZqMpRvHk1pmUDfvHmwNznzMF+ApCyHRIECtqBaDETEHhQV3hRIp/BL5GHUEkddHggw+c1hFz427q0Y0t9kr4J9rwJ4aHwCcFImOQCDMAyEBPX/Ty7jVl0gRVG5cMGDs94PrpyPVflI0GThTqh7Xh8BfCjaS59xsNCnHPTpgWC/HWCBriiBOueAOvVVUIpNNubHIcAFqH38QBjhMM0t0kcAB9Dq0Zg65/+aqTRgI4gnADnboLVMCOwV5oLeNbTaJSC4tzVAWcSD5Pq6X1pGxGDydD3eBSC1jJYoBEEgKmj8/ycni002A/dS9OjkBsaetTlWIH8CkoMk77zkCDCqLYwyj160c5eaGxENhQqkamed+VEjksXIdx6gB44EcjzAFHsSRxYo8D8705yqQJ3H3NrnFuDcSQOnh+ONAO3HwNH+HwJACW42HH8/Rho9mAiJkWxhEY3uRwiFKNgkLaAUazuX5+ZhnEgKyCYAf8zp6IgMyQpY9xeVkfpg1VOhhUw2rNMSAOgN6yLJXDCs650GqaBrevfRtf/humJh5YKsWOjj+j3326cAxZjZEsMgCEWtIv//yY0sYsZMAsZOfekyxntEIldTfWhcSGQgf6t3yfcQgisCxNtiEdgB4wCtUkFZk3/WdwGQPiKsAOAOAM3rFf0NALQJkD78JwdoG2kAgP9KQvyhvgdgWIRWanNIf0cSSgwYIKJf654lEIBSDCD71HctQdVyQADpqHPeONR9AFKOUAxT3iQfBuDCJIfI/F7eDVBGgFZm6SrpZLrod46pLwIcHoMomnNkjsyfqO4rgODaB4o06G5vdH3qF+wdBQA3RRCACVjmrP/pq0HbJlBvB0UUgAiOUVNKOMVgnL04iDId7l8DaAwuxGX2Iop6wwB3aZkCbyGvAZrdVt/arD9Yo4m3h/Sx2Y4HAToB2D0opz7Lt1tJAIBBEHUZKBj0krysBQNB1mah6BNXSTb39M36LQNURC0HPcjW5C8RYQDuWPi8PaTKPPQXRXN0EPjt5UkAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAAAAAnS4uRQAAA/xJREFUeNpUyDECACAIw0BasP3/jxUmzJDh4rycknymmJe6DaS8IUHSHwRgLzBQmS1XAKbGIAcAEIRhTGb6/x8bCRquzdYWyHzKXpgfaWBgZiEUjArWtY5LSssV2UcANshoBQAQhIGZ1v7/j5tmINI9yjHHxnrwsJNVKAJfzXTwE8DggenUjCKoiQN5MzRB1cAI38SyYE+ggagf2HWOAHySUQ6AIAxD55j2/je2FRJAN7/3QtpXbJZo34Q5sBO2lAD+PDDZpYJvYvWgnakKyAF5Mu9MAbDj4ZDMMxf1iDQbvycBoKtkRxSqO8A7WrWFUug+iTVkOFwPcAgiY4tbAEbKbYdBGIahJS3z///xYrtTUQciQTyhHHKx084t9H0N9Td9nA/xB6DyupywIcqA7JE++URsVVQBLEHyjx1RBlDRc6XQE3ZTFSBH0B2pnIPZMAJ1QJes6L9ca8vtq5zyDEDDHSukHjoVRYAcSwKatWn5jXvEI4D3oc1OmCpE7yi24AuSuUGLDYsLfoEXgNU8xvp99gMfo9nKpZevAJyWUQ6DMAxDq8Lq+994SZyOMRqWIMEfPEpUP/cCoLYSOygEkJALQpzGgWSWVoD98gslwIsjHyNphCDO8vxvmmsA1cFH5EUfcNswgvi/hNBILAFBQMeBCsB2GmbhapLlKgCmUOCr6F7coyQU1YC9b5OwuyJVAlREUpnt1mhLwDaVpkaTNxvX8QBAJ9rRA/0BALOQBdADJYZKOytRKjcvVTeafra5FM1qASEC7FzB1BpVtqEA+LYyRbitpHwL8EF2TwfPFUiEiQC41QmwQ4fdQLYXdAfOP3CpG+Y8zBbXQj9qadbCohfeAtRirssKgzAQ5kBx3/+NPbkBLVUClvywMzpjPxLIbgh5EPX9nILXxwCQF2IM0BDgKwF3DDwOkE2Z053a3KRhMhEOACY4hiUYO9pFAEmBKk3CjeC93D5gEaAQ0NypfR5PETgAcgtQdAqdd1gjmANI4t1rFvAzgRNANyLU9ptr0A/eGJHKgy0A9SCAmvP/AHJyDFaTWEejLQAitAwAnZ5jx8Ez9wYA6wMs84EiklBICTjU/Ugant6EaroNQFXebE+kkgRlkeEy7wI46vv/YHYjckkC6a4OtzsAUgfQjKJB7JPN1WQGdgOQ3wKuOGxf5MD4EVx9wPxAdUrgZYcLQpShGDMIkwA2/gZJwQkARTT4Ei/5EGYBhKBLANPolUDxkC6EeQCcT8Fl8cSg7gkuhDBxCqUGOJ3FaENQ0St7txrhNLBIwdmJ2xToTYq6ZupJsbFNqUmAPY/PFG4taAi0718LUBbeMtielN9XATKKN7ZCN6FfKUyLUDZlfXZ//QZfAm8taMgPXwAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAAAAAnS4uRQAAA9lJREFUeNpcyEESACAIQlGRlPvfuLQW1V8ww7NYicrM6Ky3/pENQx8QLvcHDJAuEACyZAogsAAzMxuqLSxsaLawsKPZws7CDrSFFVmAAWgLC5IWZkZGJhawJawAAdiekxwAQBAGgLJI//9jQTQYQ08eJsXm2SwSu5mVB6hZIwrAO5ljIgwt2PNis5MOiCiNEQh6Pvg3CDxM/ohomiUAoeS2AzAIwlC0zP7/H6+EZTEZuFc9NvbyAq4zfk1cG0AebcrE+gE2hdqmRwAHwDFlYimoLmpM0y5Me6kBqEJGkpPeAHpuI5NsFBLQPdF0MVJAvaH6pEcXmlaEDj5d3AJwUi5JAIIwDOWf+9/YphVFQEU7w7jqg7SJLneFdiltIU9rAIjz2qW8EkaAaExlnTAC+IRUQsF/AOfMbBgF/KC36ROAiZB8gRFjyhiD8GEGugf4Wg4WQyxvgeGjJ04GzQHqWgTEHSDGs5Sb/dIccQeQRhztdKciYsSiBLWtNQe7X/2r5zqNCcDcnLiEKt/Xn9EupdGyCUBquexQCMJAVEul///Hlw6viK23xIWJCz2pwpzhAeDUHl020nUFVwHDGtswRwE6f7biKGEAm2n2RjDjLPIxzvYEecsH8g2gCfwGKDp4OiUKUAIsAJdkvaG85wPt624kgld2lhFbiUtRVR8RhCQ7gGo0jXIT2ikAxQElDDSNBlA/YYUByHEloA+3nAh3nHJzIpGjRN+JMOJw2slxqcI90px6/HPqCwADyJQ6CycJA5rWp9SxuwwpuwCendK+oDr5sRiH4+Sh9X5+VM3iWhBvvVBPl/39XgzLzzy8WmAavVBqSpLXCz8BijGjNYRBEAqb2zrv/8bNAwhr1bRPi5vlReMfIhxM24VpV3rTLV5UTmxddg3gffHa+6f+8S0AQyDKsRGgj6ABgAQrlkb3nQTXABIC5vUMghYADcG9wzASoIZgf2/GHwFWjmtkwM8BdBfYI5WByh/19MfVaADLAk4fWZt8mXC5ITtJ+WG9f0ISejEquhuJExD9Fcc+C+VKMPgYejkW3Z+oU3IYxHzJajW4ENnwV4oh24s0evG9y6ckjVdpuEcTAbxJm+5y5aH+5wDYjY85P2iuqr1uDEApmrMAbAA1OzNY2cTQOmBqQABE76WjbgzyTxhaEfoAIBrxZQygnumcRQNzADwEON1IBATRT8O3YIV/7i0qV2o//XoVb2hCSB2nUAhOqaeHs9Zr9a1CeMFniNRYiSNA3H1YbcCzekV4ru8pmnvBgSC7hRspYInGteWk/PFbgA3ejmIQqoXkiAg1Kf15evUDgexxyAsA5PQAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAAAAAnS4uRQAABC5JREFUeNpUyFESACAIQkGVhPvfOK2mqfcFa1kJ7KTalku4uzAY5x9ARPzgbqIekLuAlimAwALMzDAjoSpYIHawIwuwo9jCDgRMyFrYWRiBhrIjmQG0lokFbAkrQAAyyCAHQCAEYsqQ7f9/LIKrBDkODdNQtZVqtdlxA7L4BfgBOAZz3wH5GS8IP76CDkgOR+ryCM4LQZjd+jlezCUAn2SUAzAIwlBAYu9/4xWzbOhg377E8lqpjyi+OK58GElHzF8PcN88FCFZqX1DZNWIJaALGQAJnEQWxQoNsnzXJqHcEgGb3qjm9miaOTCaLvisRiPjJXLIVYUiuiByd3EJQEm5LTEIg0A0Ri7//8dltzTGlowpo2+yLnDg+mA0DJO6dzUR8bFCWnkcfxI5bRlqjwIxs08zrTKiTwJhIcmeJrvMLwWiPwAfz7cF9Q2BqAFUNOsc2bRobj/5tQBmHkPv2MGgC4TV/hcCJwWOflChtWAYB81d9wS4sQKoMtALhIj/IQCuWyq4MV3yaO6UgBuDCwN2O5PJL997KYXAm2YB+UAf2bzYRBw+ZK7lJQCnZbgAIQjCYPOsvf8bnwwqr8Do+s9EY9+4CSi24M4xyO6HK7BZ1wxwR+mFG22YngVaXC7DuCbsHJ+/3YbZtfNhY7gPmeCBFf5nZ/nNenpNNBAJCJNwYH58xISAPIKgQEz4dH4EFMYQkwi/9VsSKGCai8DYxYot1YEMc62lE0nugRGtuSvQud1/hUSzxSKqnwgo0GCNRPUTgUqJIo0QzT4SQ6QtOxOVqRRIdmBEW85PdwufqaGAUKyYCrfUHlftgxcCOAU6lRsx4UB5JqDdy2JDjCqTkbGzCnCdqcwVozqRfpWY5IJiXXaaZhsmm7g8ZpnGguUC9lhwcuErQC1moOMwCMPQjpb6//94R4yB9joIa4e0TadJ87skTRyWODhVv9OrL7s3WH8xovf7Y4CGAE7t8yy7BWAh4KzCRASKPvauvgfACJJxnNYn8l0AhoDDElfDfpCJvr4LADkCx4GNAF8SbgMwBCd9hGf0/QBV33Y76uO2vhcATELQy/SHVTnqAV6AWgXcXjKAigAd+WcioGaU1EMFUBBwvVpGwJEBJ4BaUQJYUFeovb6d+7CvAvwA+b7DbIbtXiRQMsJFGDzy0wDZpxiAIQQbm1BZzsq7AdYWII3ZkE9KCFNiS63q0iv/HcCfx3iJYEkZkT4vbmhgngSQmyhOqdmjtU6HnY+I/fvbBMIkAAnoNQ4ELIY0MEycT+0vAIwA6UFYWgKax513CvKQLoR5AMXgGADG3hbMvOzTxz41jJocVGn51uydIe9E7WyEV9y1ZOzEbQjs8CFQ/HPk13IEwc/tM4V7FrQEagIlErn0sLbH/lZN8vtvASKKN962Jgq6yVJxvsq9kPqGviyf/376Dam2ddBe/UuqAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVQTFRF/////8zM/5kAmf//mcz/Zpn/AAAAU/BO1gAAA81JREFUeNpcyLENADAIA0GMwfuPDEFRFPHFF2fZiepysnnoyQUsIOQLDHB9ICHIIyWAwALMzHBLICpYmJlQrWVhYWNCsYWNjYGJjRFFgI2BkY0F2QxGkC1gJQAB6CCTHABAEAYiIP9/shQwqIm9MukCzS2NQb3hTE3AoyLrRhowGGMQ8wcQHRBRjX4BccD86h5aBV8HQYmBJ0GazBKATzJKARgGYajGLfc/cuMoKKz2u89iXrQKEfHP0H4oYIjJ5oFnQMbBqwf6VZRKNBXtwAhkixDlHETJEb/7wjsBluNinjPArVrrxtCFxqVa70X0JfPiofl0GtxdLAEoKaMchkEYhkKgvv+RF9ubVsGY0kh88mJih3YtBXuFpa5TbQAm7wfgyNgB6RnzhPga94+wAyhBvgdWRBWQGkYOi8ZLRjwE8H4CmpORxnD48QhAz+lpaEcZj86gVmeAYcCnmjc1ZlWBNrZLOUuQ7M/RoA6Ybi31nbfpLsZA8QmMrVsr/O9w+Zz+viXNjgIfMikH/oykY97f8hKA1DLIYhgEgaii5f5HrjCQpimmaBZZ+sOLzJ/8AExbySQEE+iw+Sy9JmnMRikELIUxjnN/Hudj/TfibD44p3ALoP59ApAVqltCwdbz8EFRoVDUzX+FIoCCOBCR63FFKENHKSHFUtUeG1m2l5cKTBrQXGnWpmIkXlBaP5RGajQAaA2gLmFXIlo5DWgOMKWxSo16VqrqHoZU7Sbh5JgwAfTTBDgvKmucB7ABqltZtiuQ8hTQcfUwMwKO/wpOhAmAb62rpfS5IG56QVf4c96L4fIxy20tWC+w10LQC28BajG3JQdCEIjOoPb/f3JqG1Cya1adKC+pJA8ckUvjVQbW/PshPlt5YGOAQIB/3T9DGAIUn8z9cfU1xAQACfICAfYCaAhsWibNzT8D6znBDEAl4LATCUPie4IJgPIGYJ5HCKcAEvz4oyhsBrBEhMDatC6P0lNA+wFaIRDgZ95TdLhk4ErEzJSTAKxC4dIKxkDiLvI7NcteAPfP4XLRetVgK/0RgNQANAc4aYyBMTH1cBQgx6BX4XgzIzQpbluzy24Aa8R3z5gU+pzBJw/BcQCozypZqnoCX38oYLb2AdcDfgXgiTUXQ1TgbSEvIKwBGAEqAfCWFiLmXPe8AwAZfgUegdgJUOcWVB5jP0AO1x7d3+4b7d1rCuFaqEINAbq1EESD+TYNmQY1cU124hCCiuC6uZ0/paZfET7zykvBBIF34erdHwdSNH73nNT/nwIU1HHkFx3MfjKYiJBDYuQPtfkCJYhs2NcDBNAAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAAAAAnS4uRQAABAZJREFUeNpUyEEOACAMAkEBW/7/Y60mxu6BkBmxs7KqG+Os88mFmewgkh0AOv2BAUslSwCBBZiZ0QxlgfDZkQTY2VEE2IGACdlh7CwgW9gRAiwga1nAlrACBGCDTHIAAEEYKNDY//9YEWJE7ZFMlxC1cc0uT0t/BXrRCxBU5c74AAZp6joKTsAMZJP5AzIH3gmGaff5SwhmCEAomaUADINQMIup979xxxioBKXfDvK2lplINfwCmMhcRkA8IX+QiVTvpPqACCoa58cqAb2JGBQZ7CDLJLWzJYDxSBF1b7Y2dOgsuuDMdETnR0SR1jeIdQFyungF4KSKdiAGYZDxqvz/Hw/QbC5qzrtG3yzSQvs8uBsmpVAXgVGC+Yf7p4hP3Ub5DkDNULHLP2BACk3SGQZHDEqwPw5Khn8YsAa5IiFbsgcEmHu4BrCkBJBv2tm1cA2ggeNwduspqhYaUM4APLEhU/XIrSWS5wcApqfUETRqTI++NE9K0I7RhpF3s5PtX993KQuA5uaQ82V9ZXtj2+LiEWMtlwCUllEOwzAIQ5Msre9/44Eh29SGyqvUTyyS4GduAoGtvRekQWKzezNA8kLpRohm4hyWZlQm0a9Id/PezqWbAZEHpYAIlHlWPIAqYKXmoLuEwgMfPat1F8ea8fgIBVAQJLieAscpAsUZ4usGzt8uDkjPyGEeowXSBteW/45A5xoSWxINH6Lh0AX6Wkr4xzlUpKWAoyQ/onmPxBJpfTExmEoBsYMkWu9fprpGwdRSYDpTU4VbqsXVfOEPAds3loBReRITGyg/CbDU0yWQHky+XUQrmcx1ZvAOkupE+lWizgU+ILuI+hUMl8tsj7GQuYAVC5tceAvQixnuIAzCQJg55r3/Gzt6PWCZzrKg/NCYJetnOei1afuyWvz14rI9X774KP6vQjxfL3kUAFenbxDAUsBahXgGwvEjAEaQD2b+rwBMAYslRuNjCgA8A3k0PqZowFNwiI9eaFdCnAjQxS+vZpnBXzRgZZqbUJyCfZhxRyA+ZgA0FTysefEGXrUWF+HnbIEuI4BF3hDwVBLeJmIPHdJgEEBXUQHY7UaiVZAUmu2o0b1b3OYB+LzDAKAmzsTgksAdBY4DlPqY9lX9jmwPxzoYDR8G0MRHJqV1oW3tqlBXi2j4uwBYlnfxObihgZkJIDdRnVLXRzfvCLX1fmjxEwASsHc/IPCCKAXDgvPU/gLACFB0mHoCmscnZwrykCGEcQDl4LAJrDzm/1wwoI/FpFrQ7UELDY4j/O9nyDsxthvhFdcQKXgT9ykAVBAeyr9nfq1LEPzOnynCtaAn0MmrmXDpYe2X/ZYm+fwuwIbqjXPusqBJlsS51LmQ7g09rN+nV78AXS51b/HAT3oAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAM5nMAAAAPKLzmwAABApJREFUeNpUyEEKADAIA0FNquT/L64WhLqHEMaiEpVV37C3J3NkABsIYIN7gT6Qu8iWK4DAAszMaIZCLeFAFuBAEeDgYOdgQnYYBwfIFg6EAAvIWg6wJawAAfggoxUAQBAGlgrt/7+4mWERko/j8HShjXS7jvEB3I0PAD6MBFAAfI8VjAVlegGqBrQoxbTcQEKkC6/1sWCmAHySQQ7AIAgEEY2d/7+4q+kBLXpmQthZLISIKf4bBHAFaJBoiED0QHYkHb9s0BGMT2Cdr8Djzk5EUZLkmPejScro3WPITXUxETNDPXShZ9SnNPVWsyNnFYUhXcjXxSsAJ2W4xCAIw+Baqcv7P7FJmQ6V7Xrj5J8NafPB54dzYEoKOme7LVzdxVyA5N1i22ak/hBgZu2I7KETBQey0AuHZE+9qAhwPiyGPvzjADkEN94xojOICLcoCah+MZJFdEiX4+sI5wKKcSFUusT+MnsLAFETSA4Sqlx+GGBrKAs0YWmWApo+J6Fw1hXFFvTG0EOy66rt/Oa+tjIR6DQ3kS/0VZ4vdrYmH23sZReA03JJYhiEYSilQHT/ExcLwxB+cbrILtbIGD8xCSi2VpcZpotEs9/VLhl3oWzjdpssAgNk711E0zqHZDawXufWP6ZjfCfgZyZZgcKf/WQgwS5AJKR/eADmUEZBRrx/HMIGKGC1JBHu9ckOFFkkOYfORYRpjFGJlokkfaBHq62FUHhyORKtV0B8I+CJRDi0aVqRpgKkmXc5kP0BiRukUaCJVKYaHaBC9VOhqh0smboVEIo5qlQDoX+BPQoIlVUAxX4e7grKJwFWS7qwHIXJ00G4LZMF64LlgnWeC79B4pALBevypgmKapoYAsodY0FzATUWFrnwE6AXc112EAaBcKqx7vs/8YncgvUS7NCTH3VaZ9yvQGBjWQar65P8pfc5mSFXxTsKwbG9VJOPE7yzABadzHfT6nv9CAARVJF/FoEUAA4BOc9PdQz1kQLABFsz2D19wrgQUwBcCLz8SB9IKkIDgPtj0qTxLzVAY1oAxC2wPgL6yACQKuBNMFkAtAhwI5+TAm1GLG0AGoTTQDTpUA0GAaQV1W1AlLVAj1Dv/rFXZ6iAfhhAe3E7/KwoRQk0GdNJGCLyzwAgTqMwACFMNDZxbAox+TDA7AG2MTvJagnhlGBwEMgEaB7j5QhWTkgX33YMMgHg7IB4ve76hGSfAcQRHgFUIWBj4BE+EsCvLJAPUNktNoVWiEbg5bVtiz3+BYDGwAJgRon7ZS+YEEJ50AaIwEmrbxXvTKuathjhGfcQJdiJfQhoce1xCloSzDb1enXXek0RngWeQLdgz4GQzX7Rd8mK3P8WYIF5Y60xt+QngfEI1W7a9fDoP+DvePgp8XnyAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAM5kAAAAAADmiJQAAA61JREFUeNpcyEEOADAIAkGRavj/i6uebPdAyFhUYlbqGzab0wL9QLj7C4BLCyQcsuUKILAAM8IIiAo2dFtY0G3h4ACayIHkMA4WoC0cLEhagNYysYAtYQUIIIi1IF1syIAVDhjgLDYOAgo4WNigxnDgUMAMcgojAzswFDiwKWBmZgG5Heg8NhaoA9FNAKkAOx8MWCBqAAIQSkY5AIMwCJ3YGO5/YiFZ1pm027eo8OAR6FJhMV9YTcr84uBQmTxJlTH/QMUCvzw4BtyiONWC6eUMXNoTG4Eo0cUzokE9TFL7C862C6PWeSreJgOEp6UiJLm72AKQUm4rAMMgDK27QP7/ixdjC6PYTTZh7KkHo4ntnAqTt9L5pyKSjUyFCuARUQOMmP0BjDHgkwSmq7siCP7b1lNMATKFb9x0IvwYobqFCF8EWBRrzTGe1KoEJZYENJZFK3qfIpYACNCl8OTwOS26oyghLgi72GR+lvyrD3gBaIrqwXq4XE8cI/Vx3LVcApBaBkkMgzAMTBPG1f9f3FoyOSTAGDjkmMV4rDUvAI9Cco5bWehmCSmAAXNZmkpjbpAGJSQB2z6wbh+yQsGukUox7FVwA7DSRC+B4cHaHCgK/7fGWYWE2tU0wJPnIY5dJyPZhJEYJxLCaJAfpwGCfHGwlAWAnOhWI6Gke3CFVFG1qnakpRpG87PDiR9vQsepXYBbTE8v3sCosgsTAFk5tGiF66oh5RGADxJUK0NOBhJhEgBhdQGoWn4PxGAv+AjyBvq/LoZHM4/+WjjvvYC6Fhp74SdAMWagwyAIA9EKGO//v3jSllKzTIuBjC1zm8vuWWq5QvvDYH0Ad9U2toKEM9mvMXHZtwj3EZAyMo6BWQAPC90MghDA+FxMBNjxZg7iBBT4zZtUnAvAlagtcP8BqM9/5YBYDQboHcxTKFYAZO540Dtn8z1t0wFL6oCV41rJU7Uo4leusWDvgvmV0DV/DKAmoYolfeneyQiwrwLQxodNgoIkHHSQ6oMZsAIgXwG2TkJ0HESqXzOk3jBYDrD1dw0F8mD/MoAQqgPqJnrzefo9a4T7rHAyFOmKwwiDAELA6hUATp+TsF1/TZoYwihAkb0tiD68PudfKcU8ZAhhHACb7mQQLvG30OstKz4Wk9YCNwcu7mcoUgPQSy+mrUY44x6CgpXYh0B3UtQ1n/JbS/5so0HIsfymCK8FjkDKcXJx0OAj+8GfW07K+bcAu0g0AomCDf1KYTxCsZN2/PrrD44Cd5+mJVRuAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAM5kAAAAAADmiJQAAA+pJREFUeNp0y0EOACAIA0GwlPT/L1ZQju6tk9R4EvIm0goYD/ILWEr1Y8Dd1HtA8gBKtgBiQLEFJoBkJg4BDhY2RiY2JFs4WIC2MHEgbGEBWsvEAraEFSAA2WOQBAAMwcAK7eT/L64yPSBHWST5NqenqwK06nJPgGO/AGoCeBQEyN0BVSMX5RWgfr9ccAIRP2TJXAEIJaMcAGEQho4NSO9/YotRp2PB/7dmfaXNEth0eCUovK6JTFgNGBYP/pNg6vUnWaN3F+AWjSwKcopEn+9XALE7g/CI/KqW1kSE94exBxgQqpVTjAxoTMEtEFsQubY4BGCkinYgBkGYUXbX///i0TaZtxzOGX2jpUBxBsyGDXyKvpdN+M1wZYo9euILAuwJUjzWBCnhEexRHU8EiNcFlAQImpuJsCpgR5Aj1frl2HRxk78nGPZE12n4pre6Kwf+ogsCbWz+RrnjdB7NZf9W+DVBOrs1mAA8QYsOvCCAPw2C5d1OrP2rd9dREKiL1NCdPVSPPyPp4LuCTwE4LaMthkEQhtrN4/L/XzwJ2rkNgbbHPpJiJTf+CfBTQDSJjkBXSHhpbyZ1Y0vYYStQ24V6084pOzp2TpXD44HfAvgN3AUKfg1lbSHmQfAPqkAVdwdJ9+AKIAZKr+ddY64dUXdQFTfIpah76GjfxuAZBB2onYghhuGgSR5pNPOhSAPB+GiLSAyUKQAy8VUK8WpWO0g75tPr2QdHKCUwiCYXycHEMX0mU7cCQrHyoTLL6/NCB72FUpYOGFcGlD0BmQJZSmUokxGfwmSyVBPMFOBs8AWyucBQkD60fgYDVqhvw5WxcOYCZiwYufAWoBYzSmIQhIGoIxT3/iduk2wQB1sjWD601Sn7mgRYOFtY+glKflpCs/XFXITI0thNL5qAOfFTbxMD4BwNPEIQsicnIZAg/EU+AvAiwCzB6UQQA2CbF5c+hgCmcqDizj9SA5oDlIEYdJEbrAFZpkG3glIKHizBGIAlAXP6+NJ3HCCZertrmR0BcQAuB7ZCWC7WmpILFBMHJgF43iE7N5H+fJB1Vq/yYI9LX4TA9wQMAKhfUu3VaGBXRgS34h8H4ImPnUpwE2oNH9+17XE5RgK/xYcBNO5sy7ZBrZvJO4BJ47rv0DxAN1EBYE7LjeMitucgfx35UQAjEMO4VNOnT7w6XTynFCO4C2BuUTwvagyYFS/86iFDCPcB4CE4ymc2sGBgPvaRIvRRaDlo/jfM9+rAdICqTSOcMD8MUQloTcBd08qdg9Sgq7v9JYTdMzC9FjQEHIBtIEiW2qbfmRW+HwV4mYQT7FHwo6i8zxAtQq4v673r+g1rbXvGKi56RwAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAAAAAnS4uRQAAA/ZJREFUeNpcykEOACAIA0Fohf7/x6J4IO6hCRMsKlGZ0dnduvNRw8IHRDVB5g5ofLhc5JEtgMACIEvYkW1hAdvCjiTAxo5qCzs73BKoANBMJiYWZDOAIixgS1gBArBBblkAgBAQJWr2v+PQS53m1z3XQHVlmNvR59sCUGAzPwB2cPHtuBQJkMIxde4HiDARCPYVnQVfg3gLtvoRHUwXgE5yywEYBIFgI8S9/4072AYfQT9lQmCHBPiWzhV2ILfsJSCfS/YL0FQktebQk6iTxNGn6QbYyHFkVQKG0phTW5ArgOJ49HG/AI+4P9q4rHbBndAl6pNYhwwVjToiQH4XrwCclEcOgDAMBBNT9v8/Zl3oDrKIxAEhJi5jt+Vx+P2s6FE4LKPzAtC8a1PW1NNPAEhYkTGKAA8B8kagCjCxIIKfETAH7g/VxtWQQKEOYJucEDMqGAaQAibOr58IhAmpX9Ua8P7OAefSc7PUTqh/KSIFKIHmtlgT+gLtbizNQgq2QTwLytv1Z/PXnruWCcCqSAIruN/dO3wZWRzzNZdNAE7LKAdCEAaiBrG9/42XmYEN0eLSbWLij88C9o0PQNWLpk/Ry/VST8AssB9zsJpGswTiiL7DiGCZcbYEIRznGOD7AMyi/e0DCWXKAfM8wAfBVbklaBMwyP6tpA9qSyDH1Y3iSR9U+MTKVDkAJq9MPlMi7msdcU+A9+7RDs4iAyiw2Vi7EeIZAF3icqJW0G7q9im0mG1OHEYShVrZlKoD0IRIo3antlo4NQbIyvgdgJvZBFV2+ibgpAspZQHo9DOS8gKAHrCEvhEcDzn5cRjHwsl17GERgKLldUO85AILqaDnRzDcNvO4li0wF3R+IxaCXPgI0IsZJTEIg0DUmNi9/407BZYk2io6SdMPp3UqTyTs4rJdLFGlti386HcnNmq7pSvf2kvJp8FDZu4xgKTg4xxjCKci+BBACMprEsI1gKZAdMIgMBIhAoAKsCKWCYwEYApUohBCmAIg+9AsbxPq61MZDqBmQd0ilQq7z7QaYBVAzQql9tX6DuzSMgNAhhcdW1zy14P3uL0PYwA2JFicY+w/AKiUyK2jmwL1lw5gdCNygBqUBJQI2NPRRjEDQONT4+2e2xL0+PJOAxMAODciJTcbXTXqhP8xgLJjhvYBc0kcf5N6JTeOiSCaANxCCAPU+XuhaRXfVxGSvCfR4LJrMRbAcmAMRuIELI7Cti3/wFCA7LFQMZr4JpqwLas+FoO0IPPFJ1iJ+8Wb99hmhPOFW1yCndgACu2yh13b+NkXIfRYflOEtaAj8I7EJ6KzA3K75DtrUs8/BdhgcsQLdsvKzjLRIhQ/6cfDpd8BAHO7ouTZlAAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAM5nMAAAAPKLzmwAAA8dJREFUeNpcyNEKACAIQ9HmVPb/X5wWRHUfxjgjKjG7vjHWKo9s8LQXaD8AJbpAgJMtUwCBBZiZ0QxlgfA5kAQ4UAU4ONhRHcbBArSFgwMhwAKylgVsCStAAEGshYhC7ULYiKaAjQ2/Ag6ghyE+hLsITQEzyClMHCj6kRUwM7NwcDBAAgXqQHQTmFmAdoCcDwYsEDUAAQgltxSAQSAGug/auf+JG0GoRdd+O4RsxlYcsSb8AiS7K2dgHoJdSS5OCSoBvrx/gVvKKBOiK/RDgv6QMcammNqaCFWFKFyYMjyTeIm5ZCIVRnchZLh4BKCkjHIABGEYijiw9z+x7YgicSqSGH9Y022v9AvnwLQp1OCgDu5KLFDMbK2Pp3wLcGfDTsb6CQe0gId6TDko5mBx7T0h/xxAQ0BOOALUEbzPMBbw8KRNIcX7CGMBBW4hVMQqdzwvGfgQ8MSaoPJzNqL1/BBgeUouoFL6MCG6YrIFvTH04Oxm1TZ+/RtbCQQazSbyhb7K+WuPkfuway+7AKSVSRKDMAwEwRhq/v/iWIupwpacIeGMGqGlNQFMW/EuUIOkyR5/7MJiG1lAzcOpSZQS8X8Qr3O6zQDpgxRACqX625ji8QJQriARxgewIrQ1LPjehEQoLdcy+UTiL1IolsDokxNUG3WYm9FEab/9gm6uGQ3PVuDkAaqigcAq7QYYong3YyWmStu7Ez0NAZAZuNH2/tylDJ2aAsRim1J8GppY64EXAHQA9NuqiUDKK4BGSyXVyjAnT4XYUieL1kXLpnWJVqWPiPwuSA+LZmHx/TAMB2pbngW/C+hnIbgLHwF6MbMlhEEYimJLx/v/XyxkA7uGmsqLo53pPSYhW1ouTtM/ydX7NeQoeK9MsE0veRzg7PaMASxamWcA8foeACKoOfIJAzgA2ARcLDGqjxAAiAXyqD5CYkBMsNWH4x4EAnT6/Gr8LQaoTHMQkDINdNuSva+PCACLAuptqme5WjrkY1ygyYj+eQHgNH1+K4q0KwadAJqK6n9P72QERzOh5CyHvhtA9h0EgPcXAe5H4DhArY8ppWkygiMEn7wbQDc+2ufogTDgchCIBUAPIRNxG4mpgYkE0G7COiWbo5s5VosBP8IgABOATo+A1SWgW4snAIigKJRINAKWZydo6QR3EE8AQBDMAGyPnFVahn3uYxFUCzofNGnwOuJlvbNuNaCrCWbAzwBGICawdDyxC+qmWdW1fRQI/szHFO5a0BPo5Ws+ELK5P/RdvCLP7wIssN5YHd0d+UlgeoRsD+1z8+oPQhN5PXsdd0kAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAM5nMAAAAPKLzmwAAA9hJREFUeNpcyNEKACAIQ9HmVPb/X5wGQnUfxjgrKlFZ9Y111jNHBuwF2g9AiS4Q4GTLFkBgAWZmNEOhlnAgCXCgCnBwsKM6jIMFaAsHB0KABWQtC9gSVoAAglgLEYXahbARTQELG34FHEAPQ3wIdxGaAmaQU5g4UPQjK2BmZuHgYIAECtSB6CYwswDtADkfDFggagAC8EkmOQDDIAwMAbXz/xfXSDlQheTMyPLCKCFqil0hy70CyEGTsgK1BzqTPNwUZALmdv8DrybjqOA54bwoKKaxyuZQtQ0Rsgp+2MKkMSP0696ZDDSFkaULWVt8AlBSBTkAgjAMYeD+/2LbEUVwKpAYL7Rpt5Z24RoYN0UdWoajpVOXfQIkb1ibG8QPAuxMyhtBnlBACS94nVKQRUmAtbeGrCmAhwR80LNALYLPGfoEVp6ws6T6PUKfgIXbECrEKrZ43jrwQ2CNFYbKzmUE1nSBAPAQjIBQ6OByUtJJC3xjeJjdSGzNr329FYegplmYfEafcPzqY2Q65O7lEIDUMtpiGARhqLNzJ///xZOAPauCo9tD30qkQm66CBi2vGVGapHY7OF5KekFdWPopozABNnrV7SUnTduzNkZUT3wr0AaKPo2lnrcEKjeJDM8kNXrZ3UbVnwfQgCU3mtdeCL1ryRQtIGZJw2pMXKZO9EEab99Ap2rRMN1FGh5AaJoUsgi7RRQiWrT9JEYIQ11MNHaEIFkB2QPjKiPj78Cl6mRAClWqGLb0MH6PHBDAEMAPFsw4UF5J8BquUlSGcrk5SJKyORBdcU674XPJBHngsywsgutH8EwBVTZxoLlAkYsOLnwFqAXc11SEIahcGWDnvd/YiG3xsVKitnlD6PMcD6StDlpW0+urs/yQ+/zpoeMivcsBMfthVw+T3CvAlitM3/qVtf1MwBMQCo/F4ESAAkBO8/J+G/6KAEQgjtoVh8lNRBDcBgcztZBKQBeX41/qwFu0wLAyjzQHVv2e31UAGgVQLzNnlnplgn5mhTYZqRfDtmm8bEMNulUDSYBdCvib2+P5gSjmVA3zIR+GkDPOxgAjxcCXK/AeYC9P7bWlsUJRgg5+TSAnfiYz7ELyoDTQaAWABFCJ+I+ErOBqQQwN8E1IAjd9d08GzECeYQpAKhXE2MQEfBrEfCqRX0ESAg2ha0SnUDkJQm2bas9/gsAKIIHQOJB1rFs0hYfi6Je0AlC8CHHETf3zmZcYEcTwoCvAZxAQwDbjqUkl/2kmSi6V4eQO40p0r0gEtji6zlQsp948W/Nij6/CrDCvbElOlz6l8JEBPKHfj+8+gke5nlBXt0iIAAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAAAAAnS4uRQAAA7JJREFUeNpcyLENACAMA8E4Bnv/jYEIJOCLLy76zLSkXkW9SUc2+AOm/QIQmb7AgMklQwCBBZhBtrAj2QKxhB1JgB3NWnZ2JqACZAEWoJnsyFqA1gJtAYsABKB73nYAgGAYgLKW/v8fm1RChD5uJ7t4ravoK+3IAdaqi2wg+sE/QJ4SMnoBgFKpE3VCrwlgRPbz2hnaDAEIJYMkgEEQBioi/P/HDYytHKI9uwNmQysh3hiTptA0eomJECxlBdT+PJj7DUC07905EJrWFC4KDsBE15MDuCS03EVMD6p7S9WYMg5d5ADczthE/aS6xI6QDmR18QjASbmgAAzCMNRNXe9/4yXpGP7Aj+KYYINtXg25GfZ5VdS1STyPvSrIK22bSvQC8KyidyLRC/AKdGOgsSogbm7MQwHEAxu6ZacCUf2ngSbkZ6sGFp2Jy9ShwdTJmKsC6lh/jQgn8OMtwHlKtiGA6BCkIHqfh+bEaIsp8I0xVlLx+HN+tepUBgJOc3LykUhSPs43N1r/4VcAUssFh2EQhqEMInz/G28xgamFID4H6FOg8TMdoEbhsc5uEgYTiHSfeyswTSPyaRrBEfJFGt0w7sR5CMjXAGwBcAWgD44BGpqM3gbrcdYkxfJaOLlErhIlEl+Edan+eowe0lNwkHKcZYBuMsxooNSwdYQCqFJUGUR/AA8g9BBdEmC9vQxIBviUvqYT9afK6h4ks3KgVLXSCRg71QWIflqlagNIwgYAHP5vZf18IOUJoNxAtAH02cF3BRbCZICq9WZ1Kv2N8HtBd6DcgDTREvO8zDCphdYLqLUw6IWvAMWYjQ7CIAyEJ3be+7+xWf/odJOCQ5uYmSzZfRRoD5a1EVVfP3GwzzP9I++xDspLJDhXH0NoAkiFtME/mgFcDsAE1B78WBraAJICZphBkAFwAppAkACwFKTVuwh6AIQBfwHw4wu4sOK3ALYKpLpah/yYimvXgBcjPbRsAEyBn2VASxEDFJ6EOhHH5elyAL3vuAW7I0mQNRHMy2wAbfEhoL8h/SyA3viQn/y81dcwAHT1gzGAG+xP2awTn4fVQ/K8EK6tA9aKDcDUOTb9hZNSFwbv2SkAZGa1esbq/MyGswe933MIvQCkbncBgD2ArUMZvxiIKQCb8Ku83KdJWXD3kkJYOnahzIFr+21G2A9SMGFXE8KArwGcwFLA2iUMH6jOLSTAnnROke4FkaCUnbyq+8Ajg7ywXjYKsMK9MVHIgqWdyCvEjoH8pT/fPv0ENvp0y0Gx7jkAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAM5nMAAAAPKLzmwAABBVJREFUeNpiYAUCDmY2MACxGUAEKwt2AQ6EADMTTAFMgJGRnQlFBQcHIwczM0gEIIDAAkAmyAiEoVBLOJAEOFCt5eDgQFXBwcLIyMCEZC0L0FomFrAlrAAB+B6jFABAGIRWSnj/E2etYES0T31zLs4uNfbOaMsJYP8Doh/U7WcArK2ZUfYTALhFqa6nLjwTQCfM+msYzBCATzLIARgEgWBEMPz/xR1MazHFXmWyroML4Hg9wx7XOzDyM78dXPPcRwFsGqzwkE0WCZQQ/+sA4BIKZkAtCgdcM3OsBPhI7L0NOQHawrQz937aBRmCkf4SuaTSkoTYBci9i0sASspsh0IQBqIFq5n//+I7U0iUS3Ex8Ul67HLKeeDUgp+3Y2j81SOM5ycAzfMtD47+/MUnALgDi9+/ymBfA6TAsT8DmANnURc9eAbAuxV16iTm0ylAI9UCshKNvWNGhe4AWjgtZxECpmxCHyQJZIDYWBIoJh8z2adcNJ4PAFpp1hhFQ2G490vzTQnhNQPlblVs8zfesZIEEF1UDjXUV3gpaJdR5OHXWn4CUFqGSwCCIAxWM9r7P3Ex9K4zUeq/C5F94yPQsAUZ5rnN1v4KlWaC4yXZN1Hr96w4scJMoB6+G0/Zv4K23C0g4gWs3PgUgIiAuEA5JVaBCyQJEamKTB8CIR7AmuBUcUaB8uLA8rwHlIIiwP4NHKg+AuSRbQTvMUSkAnpRcaRLhWYh8I+JtH6mAAO39AXma4S1gGE1XdpQK+QPE3NjYsKlUBn2o/UcGNFy+whVQnnKVFdAd8TO1NxaWQ/8EMAjkLoA/3/MoLwS0CaAVCZGjcmheDcBHi+5YV1PE+mjhJ8LHANewM73YBiamZax0HIBPRYmuXALUIu5LTEIwkBUKdX9/y+uZEPEoZQglhen40w5bm4L3wZL1R7y7jwCtFuumqCOIegmYt1eRMENeGFrT4yWnwHmAN42mbfxdVRvTwMHgBAwDBjevhuDPgAl+DWqmgNIcwCzAEKACNyJwXwOqAQoLNLI9vM5kAGGg/Cjh48DQDWAUwbrBvN9oCwEJLceMBSD5wCkDoOcgKp+d3t7L0C5P41CNxaS/MBjAHrfAfUqCULrwqJ9TQHAJ8EggMzHoBSCoxihGhNwRcALkG98VgVYqQPtY1rMzjL5/whweAyTYTnOwvtCLRCKEvFt7+wD6ibolGizVrN9+77w3sxKRBycU4BRABIcX40TQY/jiSA7cR4V8Q8AIcCS1hVBbjeY/tlDuhDGATIBrgJskHNZhCYM6GMfacW5ChmDU3xAfat8foR5J+SrCTJgGsAIKAHrzmzzGtS7G2cBwWdsU7hnQUmgJRhMCSjZq1zymy+ivr8L8IaNoxgLFZBzLlqBXhiivbRn9dcfAet5qS/KfaoAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAM5kAAAAAADmiJQAAA8tJREFUeNpiYAUCDmY2IGAFAwYwycIGF8EhwMyELsDIyM7ExoEkwMHByMbMDBIBCCCwAJDJBpGHqoCYyYEswIFqKAcHugALIyMDE5IAC9BaJjawJawAAfgeYxwAQBAGCm0M/3+xDQw4oB3JUbg6m9Paa6vbLQHuzgQEJRg/ADR3MfEAAH2xTO/JAjE1gGowJzIs5ghAGLkkAQyDIHT8xOH+Jy522jQLkm71DQpMgOPXxpAuMupsEwnlcgXqLwfgDDCnSUADcCLYKkR4Z1StMzQAA3u3cn2C2Vknja4jdl1Q495/xPpk8ksqdBdEni4uATgptx0AQRiGDhik///FttMHvAFKYngwHLquw+pl6T/71hp643pV9blXXfK8nA8PEXcA3E9NmSDugPoKaKsAamAv8m8A/EhFvjq5DFBLNYCsBBKCgYtPAA2chjMJAQO45Q8mxsSSwGBymSl94ao7PgCYSrOdkXSazjhKwWIJkeuEyC7t9CO/8QETQLgoDTmir6u57Y9R6PC+lk0AUssoCUIQhqGAjOb+J16S1h2XBYeq/2ZqTV76J+DYwn718zQJgwmqwoTOAfu6AOfvDRRKIzTCmzRW7mg1SrE4BwSGYV61siZ4KaAewWMBWwIeCxhQLhyILlFWKvA6fwbVJtBYUuwzEBdgFokjHhXsQgSRpuhnCahwix8wYQHDajo4SUFgiZtDVTxLOAgV28aiD4xo2R9BlT8VGDF1KsAb8WRq9lXWDQEBNIGUv1SWuwZQvhPgEmBUJpeNycBCmExArxc/H/VnhPReYt4LsoE+gCeHoVoyvwWVbmvBewFnLQx64SNAL2a45CAIA2EMtO77P3ElGyOdnmfuGuSPY3HKNwtJlpTHxdjXB6vFJmc9SVi/14+4x/ohvaiC6v6eVwPpACpBqzWwOAmQDqAE3IYoRCoAJTgtVd8SRACUAA2YQRAAoARMyUgniANM2oQgAEwDRGVIBfBAoN/H7WfAk9F2/9EbUFcBtyowrk+fcLUX6QDW72CNYnvA4mLHwMwtcACtj2KOCdRDMWT0cMmZ0ArsYXW0CUQhBBxKAz8amAuweQyXoWx34bWAioiHCHLzgLkJOiXarMVt37oW65t5iDz1hjAFgAS9A3AgkEhTBFtXClBrDOGvAEqA0sc7goiHRf+KBgozAHYCvAtgF4gGOzCgj0VSLRj24BAfMN+6iEUAv+TaZoT729cATkAJGHhumxeh9Xb3XAcIPts5RbgWjAQWguJKwMjqOPSdE83m/wvwgJej1gYVOOwngxkRmk/68+OvX0bZeBsTIU/EAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAAGZLbIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/////8zM/5kAmf//mcz/Zpn/ZjMAAAAAnS4uRQAAA/tJREFUeNpczEEKADAMAsFYa/z/j5tQKCV7kjkYqszs7NrRoJ23CXrANQFAfXxgwGTLEUBgASATpgOiAmomO7oAwlB2djQt7GyMjEwQHVAtQGuZ2MGWsAIEYHPcdgCGQRDaAtH//+N2ujSkm49yuHRtfdsXlncBcv0NdCAV+dUdYEwABeVpMIDcK8YzN1L8TdgEMCHWqZklAKHklgMgCANB+7B7/xu7JYZULPoLQ2h3dgI8Lmuc7y/c4rFmrAC8va9AfAM08JMDV9NJoAcq0QWVCkeMuyQh7JJqfb9ELQeyfpzANi5YRrpwdsW6IYcKQbogcru4BGCkXLcYBkEYbPHC+7/xkmy2dbKVnuOvwieEyBVwCsbfdXwJr4tXAXoMgPNa3ZKvAYxHgLfm/psw+hOg/wf0BIDGug111SEBQA/Q0Uog415ADMAQDgzd3CbE5xxSgCrAgednhNwU2YMjAF8stxF8pW+q4dM7GUCjLUsRgA2gCvjjszQzLXDHoAajd425b//qrJMIAFKRNShdV2tjqzXWwXMGvwQgtQywIARBIGpmzP1vvDugr7ZA6e0B+JEyHx+Ari2IM89Qdy9+QYdghzjldhErgE6BhKO87sDmMK5fh4lHHgEg9zS/j3MOIPJHnLWDdAM+oEl4D4kscPS+9dVFHEmhQJhkT6lZodAC1blFZABNjVTKeZSIlegCmFjG8HIMtlOOVwAT2vXr3h9MAKqSSiPWcAhCpVGJw4n9dfTMYTgH9IkMo276djJCQx4AWqwYBaO87UgDaOUOgLXPne1IeQbQ6mp7gQGzd0UmzgYwrW9d66xWpd8Rk71gWuebpg1VK6b9HGaZroW+FzDWgrMXPgLUYmZJCINAECWA6fvfWJgFRmPIkCA/lqVlP2dt8muxHMaDqtOwRRoNLFO3dGiXjH7/GkAjWN0h9sHG+DRzdpc9Ani1zbzfOKX/96G+B4AIOA2TELydngJwCMarapSJsb4LgAiQcTMJjwE4BDjU1xL9CYD5JHj0vQCQGJxeIE6bYAWAVgHlIAKOWeDswSkA6kK6dBTXAmcPrklBG8e5LohQ9lz05cGRATeAXBzKhbz4pUCFgNEIJg+Fa/0pAOz97halHK0qPsU9CXADJAtQ12x9lCSmC33qTrbgXYASAKKozpE54rEofPLOOZDUTrQcGNfHLF/5r5boDwDVJ5E8HUuArwbkrl0PkNktFoUQQiOw8ro62UDhHwAag/b/xXuJOLRg2MeuWkadoEt337pRO9DJTVuMcMJTS8aT2IaADpW+yJckdNuUTAD0NZ9TuHeBIYh6eiiELNlD7yUr8vldgBfQ1kE2UZCoZy3OrT0Xal2j39fXw0+/AfyWeNWof1swAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAMAAADuKoKMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRF8P38n8v8aZr6cqX7Vab8jLTqyOz+Wpj4d5jjdKPft8/3dZK3iKPIus3ZX6XiYKD/IOEFkgAAAc1JREFUeNrsltGupSAMRaUFChXh///27hb1PE4m4WQmN/RFBJXVvaF4jH8cxwbYABtgA2yADbAB/n8AIhojxl7b2QpTjJHROq2TGQNxUCnt7J392s50du/HyLB3FwFwOI4jsOC71lIa0T5vPFT0yAbgz+Cp1FcCjFsB+/iVKjq81TGBCO6ktnYdCZyUAJIzACqxvbMWQC25HIZ4nto9QwMo6towef99J+sBpryaSnkVQJqjtIa8NQjjeuRECRrkVP489V8CsCtg2dUXYJAM79fb/ysxc0Ir60KAGSXcAArHbwAiZtxlGDPcgMtWgo9rcYC4DqA+Csx4AHza2qHEDcDfAphb7KXANsTya77use0AY0NXgwfpAxAXWuBeX+khUH5UUStCN8AnVgLM5SS+yTjlRwERnvnPcjQtyhYvQFwJMFd7qef1WhAwldaKgiw3wNVq7581sBbASzFkD56iEkMT5N+7WAyvE1rpMYbmMUGrLeBSvQ6oGID7T35aTAAe/B0Aq4RwN3j1R63Ltg1DDrUKzkSyguTjPQ4hb/lxtBTAjuMqw4o8Wq3D94KwamBHj/QKcbrNWcqZaCHA/iXbABtgA2yADbABfjnAjwADAMnJRkuTxixcAAAAAElFTkSuQmCC',
];

var msg_PIC = [
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAgCAMAAADOixOHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBDM0NFM0RFRTJBQjExRURBN0ZDOEU5RjU2RkRBRThBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBDM0NFM0RGRTJBQjExRURBN0ZDOEU5RjU2RkRBRThBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEMzQ0UzRENFMkFCMTFFREE3RkM4RTlGNTZGREFFOEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEMzQ0UzRERFMkFCMTFFREE3RkM4RTlGNTZGREFFOEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4exbgbAAAADFBMVEX/YLD/yLj///8AAADe4WBNAAAAyElEQVR42nSSCw7DMAhDbbj/nRcwv2laqgbl1QpgCq8FrTkOZWIUwWhJH7U43IyQkiTQHMazsHotdq57D4N2FKdb7huTM84snpF/OLqeKM+jg4xbS95I5Tz9+k/5XXuX1/HwL/n2+o03S2NcPxGdpthqAsXDovTn6FH8zSa31kPvY8KCGqLXxJNryvoL4g6L62v0q3/Qtr7kuQc2uVvF6JHeVz+dzQflN9k+jDTcf6Hed4q60i6nlxM59jCwubxb7jPWzpDgI8AAn5gFp9Bb1AcAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAgCAMAAADOixOHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZBODBEMDFERTJBQTExRUQ5ODRBOTI3Mzc3Q0Q5NDA4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZBODBEMDFFRTJBQTExRUQ5ODRBOTI3Mzc3Q0Q5NDA4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkE4MEQwMUJFMkFBMTFFRDk4NEE5MjczNzdDRDk0MDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkE4MEQwMUNFMkFBMTFFRDk4NEE5MjczNzdDRDk0MDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Y9AazAAAADFBMVEX/yLj/YLD///8AAADMz8nqAAAA1UlEQVR42lySCxLEIAhDA7n/nRdCxLp2puozlU8KesSMs8VSCPezXEqAqx4ezESMEoAuE4/EZ8TV/8X63MPsVc3AasDC9b6zeCkyl9euPzFHZdS8E2BHnnw6PYakuHF92jludub/6Z+crfX0cM/x8C3nrT1OiNNm96E64TvSDpirRerP1Yd5eaPX0Xd9czB4wo2JtOPi/cVwedaDx/qrb2+mO6tXRilXJg0V6Gf0vPqtbA+66SHrarUMyFjvKG1Oa/VbqOegO0F8TVLZfDjX1hNB4CfAALEzBbXPjaQtAAAAAElFTkSuQmCC',
];
var Team_Formation_SB = 0x4a62; //圣保罗阵型战术
var Team_Formation_NG = 0x4a6e; //南葛阵型战术
var Team_Formation_JP = 0x4a84; //日本阵型战术
var Team_Sock_IMG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABgCAMAAADy6AbiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRFMTA2MEE5RTI0RTExRURBNEMyQjIzRTNFRjU2MkFDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRFMTA2MEFBRTI0RTExRURBNEMyQjIzRTNFRjU2MkFDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REUxMDYwQTdFMjRFMTFFREE0QzJCMjNFM0VGNTYyQUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REUxMDYwQThFMjRFMTFFREE0QzJCMjNFM0VGNTYyQUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4M9xqJAAAAElBMVEVmZmaZMwDMM2b///8AAAAzmQBf/pZaAAADA0lEQVR42tTZCW7EIAwFUBM+979ywxq2SQwYpKbVqNNW8/QJq0Nm8VJXdil1ff0/SYJqPwhUCdVWEFprNdaiK6DlDoKeOwcCaEC1EbQUHKrG+swk6MM5UY216ByI5OXDQu0DM+8B1b6EyLwjCXPvERWrz8yANiA6jcoKOAPqCHrxfh1o0amEadBnUbktOgGiBb15BtSZ7a5NIDpgUo+C+ivmOojWexNn7yHygbEfDNHSbFN7LyItDMNnekP5ThY0+dgrzfxXolNbm7BtVNHJuxOR3W2EwKajatn1EG+g/6vsit9E3A7ixZMHwzb4cToJIQ4WSLtgSe+82/uW5d0BvoivDbpyXOutEp/51g6kaJclfORbPXJDt3MO9hYVUC0aO4/c9a4DIKIzoCEbVJ8Eyd29k6DtOHQONOTv4EEwXqdAw/X+L2iY3jp4FeXEorTYPRTTYW8VtJWEIW8dHPTGQc0IqH57I6Bbzd13VN2njnkDYHG49lt5G1CNeXwQTfmg66kPjwtq9OoHtZi0l6IUF+wVLO7fqFGPCaKzwY71p0uNeDyw2Xzm772Yae9FPhoIWJ6Wnp1a1IJ3XcuT988iQiEy4jHBtyN9qNE+1yWwPIEvXiJP18CoWmhWPDaIekdfH0BdxkuqBN3rmW2JllXxHklYtGox7YQKgxEDTd1JqkpC+EEWRKcCjKqGsR3U9f0UA82PInfVg8xpkEUy18O8CtwBId2k5eD/CXJILkjotGBTgBZtUrSJ6sVKLuF9MNJo2rBdHsXGIeka7Dw7cP8hA5IFdbVkNIPf1m2FJm9bpLCNim6ZO1X1IDUO7R10IfOnP81TUrmE/vSuCaT7SzDSl0wvhfeCSL3hH0UjldBSmRjuW/oC3+ODlEQXMj5S1+m28voMGwyi6zz3+1waKJbyO00S7cv9Ezqm3BYjim4w2rtoPzy26KDHBGELouRfbMpn96jHOPbU5oZGLDPzP31htXiq2mOBZjfCHqIEz6PE4UI2AqZGwvDUxrpk7yH419dH/QkwAIMDuP6HlRzdAAAAAElFTkSuQmCC';
var Team_Sock_Col_addr = 0x2ba97; //队伍袜子颜色
