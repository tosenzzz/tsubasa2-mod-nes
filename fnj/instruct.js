var CmdDataSel = 0;
var InstructAddr = 0;
var Instruct0440 = 0;
var Instruct0443 = 0;
function GetInstruct() {
  CmdDataSel = $('#InstructList').val();
  InstructAddr = 0;
  if (CmdDataSel <= 54) {
    InstructAddr = AttackCmdAddr + CmdDataSel * 4;
  }
  if (CmdDataSel >= 55 && CmdDataSel <= 70) {
    InstructAddr = DefendCmdAddr + (CmdDataSel - 55) * 4;
  }
  if (CmdDataSel >= 71) {
    InstructAddr = GKcmdAddr + (CmdDataSel - 71) * 4;
  }
  $('#Instruct2_1DIV').css('display', 'none');
  var 暴力 = NesHex[InstructAddr];
  var 威力 = NesHex[InstructAddr + 1];
  var 体力 = 0;
  //二过一消耗单字节
  if (
    CmdDataSel == 46 ||
    CmdDataSel == 47 ||
    CmdDataSel == 48 ||
    CmdDataSel == 49 ||
    CmdDataSel == 50
  ) {
    体力 = NesHex[InstructAddr + 2] + (NesHex[InstructAddr + 3] % 4) * 0x100;
    var xxx = parseInt(NesHex[InstructAddr + 3] / 0x08, 10);
    $('#Instruct2_1').val(xxx); //二过一的距离
    Instruct0440 = NesHex[InstructAddr + 3] % 4;
    $('#Instruct2_1DIV').css('display', 'block');
  } else {
    var hou = toHex16(NesHex[InstructAddr + 2]);
    var loadqian = toHex16(NesHex[InstructAddr + 3]);
    var qian = loadqian.substr(1, 1);
    体力 = parseInt(qian + hou, 16);
    Instruct0443 = parseInt(loadqian.substr(0, 1), 16);
  }
  $('#InstructB').val(暴力);
  $('#InstructW').val(威力);
  $('#InstructT').val(体力);
  $('#InstructTempText').html(
    'Instruction data address: ' + toHex16(InstructAddr, 5),
  );
  $('#PortraitTempText').html(
    'Shot address: ' +
      toHex16(PortraitAddr - 7, 5) +
      ', Portrait data address: ' +
      toHex16(PortraitAddr, 5),
  );
}

//var instempstr = "<span id='instempstrtetx'></span>";

function CheckInstructB() {
  if ($('#InstructB').val() % 4 == 3) {
    $('#InstructTempText').html(
      'A Brutality value with a remainder of 3 will cause an unknown bug. Please change the Brutality value.' +
        '<br>Instruction data address: ' +
        toHex16(InstructAddr, 5),
    );
  } else {
    $('#InstructTempText').html(
      'Instruction data address: ' + toHex16(InstructAddr, 5),
    );
  }
  $('#PortraitTempText').html(
    'Shot address: ' +
      toHex16(PortraitAddr - 7, 5) +
      ', Portrait data address: ' +
      toHex16(PortraitAddr, 5),
  );
}

// The portrait flash is a 4-byte VM command `3C 30 <face> <param>` at
// addr-2..addr+1, followed immediately by the kick/ball animation. Overwriting
// all 4 bytes with two no-op waits (F7 01 F7 01) removes the face but keeps the
// script in-sync, so the shot cutscene (kick + ball) still plays. Verified in
// game on Cannon Shot. (A few background tiles may show slight palette smear
// during the kick, since the portrait command also loaded a palette.)
function setNoPortrait(addr) {
  NesHex[addr - 2] = 0xf7;
  NesHex[addr - 1] = 0x01;
  NesHex[addr - 0] = 0xf7;
  NesHex[addr + 1] = 0x01;
}

function ClearAllPortrait() {
  Skill_o_str.forEach((v) => {
    let t = v.split(',')[1];
    if (t) setNoPortrait(t.num());
  });
  alertMsg('#isfileload', 'green', 'All Portrait cleared successfully!');
}

// Assign the face picked in the Skill Image list to just this shot, touching
// only the face byte. The animation params (addr-2, addr-1) stay intact, so the
// shooting cutscene is preserved — unlike NO_PORTRAIT, which drops it.
function setShotFace() {
  let addr = +$('#skill__addr').val();
  if (Number.isNaN(addr)) return;
  // If the face was removed (Remove Face writes F7 01 F7 01), the 4-byte
  // portrait command `3C 30 <face> <param>` is gone. Restore the opcode + a
  // default param. When the command is still intact, keep its original param.
  if (NesHex[addr - 2] !== 0x3c || NesHex[addr - 1] !== 0x30) {
    NesHex[addr - 2] = 0x3c;
    NesHex[addr - 1] = 0x30;
    NesHex[addr + 1] = 0xa3; // default portrait param (original lost once removed)
  }
  NesHex[addr] = +$('#skill__code').val();
  getskillimgcode();
  alertMsg('#isfileload', 'green', 'Shot face updated (cutscene kept)!');
}

// Remove the face flash for the selected shot while keeping the shooting
// cutscene (see setNoPortrait). Useful when a shot is shared by players who
// have no matching portrait.
function removeShotFace() {
  let addr = +$('#skill__addr').val();
  if (Number.isNaN(addr)) return;
  setNoPortrait(addr);
  getskillimgcode();
  alertMsg('#isfileload', 'green', 'Shot face removed (cutscene kept)!');
}

// Given a skillsub label (e.g. "02 Razor Pass (S)"), strip its id and (S)/(?)
// suffix to get the base name, then remove the face on every Skill_o_str
// portrait whose name matches (e.g. "Razor Pass (Japan Soda)" + "(Roppongi
// Soda)"). Lets "add skill" also clear that skill's mismatched face(s).
// Returns how many portraits were cleared.
function removeFaceForSkill(skillText) {
  let base = skillText
    .replace(/^[0-9A-Fa-f]{2}\s+/, '')
    .replace(/\s*\((?:S|\?)\)\s*$/, '')
    .trim()
    .toLowerCase();
  if (!base) return 0;
  let count = 0;
  Skill_o_str.forEach((v) => {
    let parts = v.split(',');
    if (parts.length < 2) return; // group header (no address)
    let nameBase = parts[0]
      .replace(/\s*\(.*$/, '')
      .trim()
      .toLowerCase();
    if (nameBase === base) {
      setNoPortrait(parts[1].num());
      count++;
    }
  });
  return count;
}

function ChangeInstruct() {
  //指令数据Addr
  var 暴力 = $('#InstructB').val();
  var 威力 = $('#InstructW').val();
  var 体力 = $('#InstructT').val();
  var 距离 = $('#Instruct2_1').get(0).selectedIndex;
  NesHex[InstructAddr] = 暴力;
  NesHex[InstructAddr + 1] = 威力;
  if (体力 <= 255) {
    NesHex[InstructAddr + 2] = 体力;
  } else {
    NesHex[InstructAddr + 2] = parseInt(toHex16(体力, 4).substr(2, 2), 16);
  }
  if (
    CmdDataSel == 46 ||
    CmdDataSel == 47 ||
    CmdDataSel == 48 ||
    CmdDataSel == 49 ||
    CmdDataSel == 50
  ) {
    //距离
    if (Instruct0440 == 0) {
      NesHex[InstructAddr + 3] = 距离 * 8;
    } else {
      for (var xw = 距离 * 8; xw < 距离 * 8 + 0x10; xw++) {
        if (xw % 4 == Instruct0440) {
          NesHex[InstructAddr + 3] = xw;
          break;
        }
      }
      NesHex[InstructAddr + 2] = 体力 % 256;
    }
  } else {
    var ss1 = toHex16(Instruct0443, 1).substr(0, 1);
    var ss2 = Instruct0440;
    var sx = ss1 + ss2;
    NesHex[InstructAddr + 3] = parseInt(sx, 16);
  }
  NesHex[+$('#skill__addr').val()] = +$('#skill__code').val();
  alertMsg('#isfileload', 'green', 'Command data modified successfully!');
}

function CheckInstructT() {
  Instruct0440 = 0;
  var 体力 = $('#InstructT').val();

  if (体力 <= 255) {
    Instruct0440 = 0;
  } else if (体力 > 255 && 体力 < 512) {
    Instruct0440 = 1;
  } else if (体力 > 512 && 体力 < 768) {
    Instruct0440 = 2;
  } else if (体力 > 768 && 体力 < 1024) {
    Instruct0440 = 3;
  } else {
    Instruct0440 = 4;
  }
}

var skilllistshoot = [];
var skilllistother = [];
var shotBytes = [];

function LoadSkills() {
  skilllistshoot = [];
  skilllistother = [];
  shotBytes = [];
  var playerId = +$('#PlayerList').val();
  var xdz = (playerId - 1) * 2 + SkillAddr;
  if (Number.isNaN(xdz)) return;
  var bdz = ramcheck(xdz, NesHex);
  var str = 'Skill entry: ' + `${bLnk(xdz)}=${bCopy(xdz)}, `;
  str += `Index address: ${bLnk(bdz)}<br>`;

  // Check GK
  if (gkPlayer.includes(playerId)) {
    let val = NesHex[bdz];
    str += `Skill index: ${val} ` + (Skill_GK_[val] || `none`);
    $('#SkillStr').html(str);
    GetSkill4EditMode();
    return;
  }

  //+ toHex16(NesHex[bdz]);
  str += 'Skill index: ';
  for (var i = 0; i <= 6; i++) {
    str +=
      toHex16(NesHex[bdz + i * 2 + 0]) +
      ' ' +
      toHex16(NesHex[bdz + i * 2 + 1]) +
      ' ';
  }
  var shootaddr = ramcheck(bdz, NesHex); //继续跳转索引;0x30000 + NesHex[bdz + 1] * 0x100 + NesHex[bdz] + 0x10; //ramcheck(bdz, NesHex);
  var lstSTYPE = Skill_TYPE_.split(',');
  var lstSHOT = Skill_SHOT_.split(',');
  var lstPASS = Skill_PASS_.split(',');
  var lstDRIBB = Skill_DRIBBLE_.split(',');
  var lstCOMBO = Skill_COMBO_.split(',');
  var lstBLOCK = Skill_BLOCK_.split(',');
  var lstTACKLE = Skill_TACKLE_.split(',');
  var lstICEPT = Skill_ICEPT_.split(',');

  BindSkillStrO(lstPASS, lstSTYPE, 1, bdz + 2, bdz + 3, 'Passing'); //传/过人/二过一等
  BindSkillStrO(lstDRIBB, lstSTYPE, 2, bdz + 4, bdz + 5, 'Dribble');
  BindSkillStrO(lstCOMBO, lstSTYPE, 3, bdz + 6, bdz + 7, '1-2');
  BindSkillStrO(lstBLOCK, lstSTYPE, 4, bdz + 8, bdz + 9, 'Block');
  BindSkillStrO(lstTACKLE, lstSTYPE, 5, bdz + 10, bdz + 11, 'Tackle');
  BindSkillStrO(lstICEPT, lstSTYPE, 6, bdz + 12, bdz + 13, 'Intercept');

  var shotWithF = [
    0x20, 0x21, 0x22, 0x24, 0x25, 0x26, 0x28, 0x29, 0x2a, 0x44, 0x4c, 0x4d,
    0x4e,
  ];
  // Bind SHOT skills list: lstSHOT
  if (NesHex[bdz] == 0x00 && NesHex[bdz + 1] == 0x00) {
    lstSTYPE[0] += ': none<br>';
  } else {
    var idx1 = NesHex[bdz];
    var idx2 = NesHex[bdz + 1];
    lstSTYPE[0] +=
      ` Pointer ${bLnk(bdz)}:` + `${toHex16(idx1)} ${toHex16(idx2)}<br>`;
    for (var i = 0; i < 0x100; i++) {
      let shotId = NesHex[shootaddr + i];
      if (shotId == 0xff) {
        continue;
      }
      shotBytes.push(shotId);
      if (shotId == 0x03) {
        break;
      }
      for (var x = 0; x < lstSHOT.length; x++) {
        if (parseInt(lstSHOT[x].substr(0, 2), 16) == shotId) {
          var txt = `${bLnk(shootaddr + i)}=${lstSHOT[x]}`;
          lstSTYPE[0] += 'Special Shot: ' + txt + '<br>';
          var sid = lstSHOT[x].trim().split(' ')[0];
          skilllistshoot.push([txt, sid]);
        }
      }
      if (shotWithF.includes(shotId)) {
        i++;
        shotBytes.push(0xff);
      }
    }
  }
  str += '<br>';
  str += lstSTYPE[0];
  for (var i = 1; i < lstSTYPE.length; i++) {
    str += lstSTYPE[i] + '<br>';
  }
  $('#SkillStr').html(str);
  GetSkill4EditMode();
  Changeskilladdtype();
}

function BindSkillStrO(lstSkills, lstTypes, ix, bd1, bd2, nm) {
  if (NesHex[bd1] == 0x00 && NesHex[bd2] == 0x00) {
    lstTypes[ix] = lstTypes[ix] + ': none';
    skilllistother.push(['none', nm]);
  } else {
    BindSkillStr(lstSkills, lstTypes, ix, bd1, bd2, nm);
  }
}

function BindSkillStr(lstSkills, lstTypes, ix, bd1, bd2, nm) {
  for (var i = 0; i < lstSkills.length; i++) {
    if (lstSkills[i].substr(0, 2) == toHex16(NesHex[ramcheck(bd1, NesHex)])) {
      var skill = lstSkills[i];
      if (ix == 5) {
        // Pointer to Tackle animation
        skill = bLnk(
          TackleAnimation + +$('#PlayerList').val() - 1,
          lstSkills[i],
        );
      }
      var txt = bLnk(ramcheck(bd1, NesHex)) + '=' + skill;
      lstTypes[ix] += `: ` + txt;
      var sid = lstSkills[i].trim().split(' ')[0];
      skilllistother.push([txt, nm, sid]);
    }
  }
}

var skillCopied = [];
function bCopy(xdz) {
  let txt = `${toHex16(NesHex[xdz])} ${toHex16(NesHex[xdz + 1])}`;
  return `<span class="skillMenu">
  <a href="#" onclick="$('.skillCopyMenu').show()">${txt}</a><span class="skillCopyMenu">
  <div><a href="#" onclick="copySkill(${xdz})">Copy</a></div>
  <div><a href="#" onclick="pasteSkill(${xdz})">Paste</a></div>
  <div><a href="#" onclick="$('.skillCopyMenu').hide()">Close</a></div>
  </span></span>`;
}

function copySkill(xdz) {
  skillCopied = [];
  skillCopied.push(
    xdz,
    NesHex[xdz],
    NesHex[xdz + 1],
    +$('#PlayerList').val() - 1,
  );
  $('.skillCopyMenu').hide();
}

function pasteSkill(addr) {
  NesHex[addr] = skillCopied[1];
  NesHex[addr + 1] = skillCopied[2];
  // Animation of Tackle
  NesHex[TackleAnimation + +$('#PlayerList').val() - 1] =
    NesHex[TackleAnimation + skillCopied[3]];
  LoadSkills();
  $('.skillCopyMenu').hide();
}

function bLnk(xdz, txt) {
  let addr = toHex16(xdz, 5);
  return `<a href="#" onclick="gotoAddr('${addr}')">${txt || addr}</a>`;
}

function gotoAddr(addr) {
  $('.ctab')[5].click();
  $('#offEditNo').val(addr);
  GetRditAddr(addr);
  LoadHex16();
}

function GetFreeAddr1(sz = 0x20) {
  for (var i = 0; i < 8064; i += 0x10) {
    let dz = 0x78020 + i;
    if (NesHex.slice(dz, dz + sz).every((v) => v == 0x00 || v == 0xff)) {
      return dz;
    }
  }
  return 0;
}

function GetFreeAddr2(sz = 0x20) {
  // Option 1
  for (var i = 0; i < 0x2f0; i += 0x10) {
    var dz = 0x3bd10 + i;
    if (NesHex.slice(dz, dz + sz).every((v) => v == 0xff)) {
      return dz;
    }
  }

  // Option 2
  for (var i = 0; i < 0x2f0; i += 0x10) {
    var dz = 0x3fd10 + i;
    if (NesHex.slice(dz, dz + sz).every((v) => v == 0xff)) {
      return dz;
    }
  }

  return 0;
}

function Save_Skills() {
  var playerId = +$('#PlayerList').val();
  var useNewAddr = $('#useNewAddr').is(':checked');
  var pSkAddr = (playerId - 1) * 2 + SkillAddr;
  if (Number.isNaN(pSkAddr)) return;
  var skillothers = [
    0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x81, 0x82, 0x83, 0x84, 0x00,
  ];
  var shotWithF = [
    0x20, 0x21, 0x22, 0x24, 0x25, 0x26, 0x28, 0x29, 0x2a, 0x44, 0x4c, 0x4d,
    0x4e,
  ];
  var xx = {
    '01': [0xe5, 0xff, 0x01],
    '02': [0xe6, 0xff],
    '03': [0xe7, 0xff],
    '04': [0xe8, 0xff],
    '05': [0xe9, 0xff],
    '06': [0xea, 0xff],
    81: [0xeb, 0xff, 0x01],
    82: [0xec, 0xff, 0x03],
    83: [0xed, 0xff, 0x0a],
    84: [0xee, 0xff, 0x22],
  };
  var dz = 0; // General Skills Address

  if (IsCn) {
    var cncount = NesHex.indexOf(cn768);
    if (cncount <= 0) {
      for (var i = 0; i < cn768.length; i++) {
        NesHex[0x7fa70 + i] = cn768[i];
      }
      NesHex[0x8000c] = 0x60;
      NesHex[0x8000d] = 0xfa;
    }
    for (var i = 0; i < skillothers.length; i++) {
      NesHex[0x78015 + i] = skillothers[i];
    }
    xx = {
      '01': [0x05, 0x50, 0x01],
      '02': [0x06, 0x50],
      '03': [0x07, 0x50],
      '04': [0x08, 0x50],
      '05': [0x09, 0x50],
      '06': [0x0a, 0x50],
      81: [0x0b, 0x50, 0x01],
      82: [0x0c, 0x50, 0x03],
      83: [0x0d, 0x50, 0x0a],
      84: [0x0e, 0x50, 0x22],
    };

    // Check empty address
    var off2 = NesHex[pSkAddr + 1];
    if (useNewAddr || off2 < 0x50 || off2 > 0x6f) {
      dz = GetFreeAddr1(0x20);
      if (dz < 1) {
        alertMsg('#isfileload', 'red', 'No free space ...');
        return;
      }
      useNewAddr = true;
    } else {
      dz = ramcheck(pSkAddr, NesHex);
    }
  } else {
    if (Is1v32 == true) {
      xx = {
        '01': [0xe5, 0x7f, 0x01],
        '02': [0xe6, 0x7f],
        '03': [0xe7, 0x7f],
        '04': [0xe8, 0x7f],
        '05': [0xe9, 0x7f],
        '06': [0xea, 0x7f],
        81: [0xeb, 0x7f, 0x01],
        82: [0xec, 0x7f, 0x03],
        83: [0xed, 0x7f, 0x0a],
        84: [0xee, 0x7f, 0x22],
      };
      for (var i = 0; i < skillothers.length; i++) {
        NesHex[0x7ff5 + i] = skillothers[i];
      }
    } else {
      // Define Others SKILL to using later
      for (var i = 0; i < skillothers.length; i++) {
        NesHex[0x3fff5 + i] = skillothers[i];
      }
    }

    // Check empty address
    var off1 = NesHex[pSkAddr];
    var off2 = NesHex[pSkAddr + 1];
    if (useNewAddr || (off1 == 0x07 && off2 == 0x8f)) {
      dz = GetFreeAddr2(0x20);
      if (dz < 1) {
        alertMsg('#isfileload', 'red', 'No free space ...');
        return;
      }
      useNewAddr = true;
    } else {
      dz = ramcheck(pSkAddr, NesHex);
    }
  }

  // Check GK
  if (gkPlayer.includes(playerId)) {
    let val = $('#sgk').attr('val');
    NesHex[pSkAddr] = xx[toHex16(val)]?.[0] || 0;
    NesHex[pSkAddr + 1] = xx[toHex16(val)]?.[1] || 0;
    ApplyPatch(GK_Master_);
    LoadSkills();
    alertMsg('#isfileload', 'green', 'Special skills updated successfully!');
    return;
  }

  if (IsCn) {
    let cn = dz - 0x73000;
    NesHex[dz] = parseInt(toHex16(cn - 2, 4).substr(2, 2), 16);
    NesHex[dz + 1] = parseInt(toHex16(cn - 2, 4).substr(0, 2), 16);
    if (useNewAddr) {
      NesHex[pSkAddr] = parseInt(toHex16(cn - 0x10, 4).substr(2, 2), 16);
      NesHex[pSkAddr + 1] = parseInt(toHex16(cn - 0x10, 4).substr(0, 2), 16);
    } else {
      dz = dz + 0x40000;
    }
  } else {
    if (useNewAddr) {
      // Pointer to new Address
      NesHex[pSkAddr] = parseInt(toHex16(dz - 0x10, 4).substr(2, 2), 16);
      NesHex[pSkAddr + 1] = parseInt(toHex16(dz - 0x10, 4).substr(0, 2), 16);
      // Pointer to Shots skill
      for (var i = 0; i < 0x20; i++) {
        NesHex[dz + i] = 0;
      }
      NesHex[dz] = parseInt(toHex16(dz - 2, 4).substr(2, 2), 16);
      NesHex[dz + 1] = parseInt(toHex16(dz - 2, 4).substr(0, 2), 16);
    }
  }

  // Fill all shot skills
  var SkillByte = [];
  var tmpShotList = [];
  for (var i = 0; i < $('#ulshoot').children().length; i++) {
    let str = $('#ulshoot').children().eq(i).find('span[val]').attr('val');
    let val = parseInt(str, 16);
    tmpShotList.push(val);
    SkillByte.push(val);
    if (shotWithF.includes(val)) {
      SkillByte.push(0xff);
    }
  }
  SkillByte.push(0x03);

  var isShotChanged =
    skilllistshoot.length != tmpShotList.length ||
    skilllistshoot
      .map((v) => v[1].num())
      .sort()
      .join(',') != tmpShotList.sort().join(',');
  if (isShotChanged) {
    if (SkillByte.length > shotBytes.length) {
      // Get Shots address
      var addr = ramcheck(dz, NesHex);
      var ck = NesHex.slice(addr + shotBytes.length, addr + SkillByte.length);
      // Need to create new address
      if (!useNewAddr && !ck.every((v) => v == 0xff)) {
        var ck = GetFreeAddr2(SkillByte.length);
        if (ck < 1) {
          alertMsg('#isfileload', 'red', 'No free space ...');
          return;
        }
        NesHex[dz] = parseInt(toHex16(ck - 0x10, 4).substr(2, 2), 16);
        NesHex[dz + 1] = parseInt(toHex16(ck - 0x10, 4).substr(0, 2), 16);
      }
    } else {
      for (let i = SkillByte.length; i < shotBytes.length; i++) {
        SkillByte.push(0xff);
      }
    }

    // Write shot skills to ROM
    var addr = ramcheck(dz, NesHex);
    for (var i = 0; i < SkillByte.length; i++) {
      NesHex[addr + i] = SkillByte[i];
    }
  }

  // Update other skills
  SkillByte = [];
  var addrtemp = 2;
  // Special Pass
  if ($('#ulother').children().eq(0).find('span[val]').text() == 'none') {
    NesHex[dz + addrtemp] = NesHex[dz + addrtemp + 1] = 0x00;
  } else {
    var cd = $('#ulother').children().eq(0).find('span[val]').attr('val');
    var old = NesHex[ramcheck(dz + addrtemp, NesHex)];
    if (old != cd.num()) {
      NesHex[dz + addrtemp] = xx[cd]?.[0] || 0;
      NesHex[dz + addrtemp + 1] = xx[cd]?.[1] || 0;
    }
  }
  addrtemp += 2;
  // Special Dribble
  if ($('#ulother').children().eq(1).find('span[val]').text() == 'none') {
    NesHex[dz + addrtemp] = NesHex[dz + addrtemp + 1] = 0x00;
  } else {
    var cd = $('#ulother').children().eq(1).find('span[val]').attr('val');
    var old = NesHex[ramcheck(dz + addrtemp, NesHex)];
    if (old != cd.num()) {
      NesHex[dz + addrtemp] = xx[cd]?.[0] || 0;
      NesHex[dz + addrtemp + 1] = xx[cd]?.[1] || 0;
    }
  }
  addrtemp += 2;
  // Special 1-2
  if ($('#ulother').children().eq(2).find('span[val]').text() == 'none') {
    NesHex[dz + addrtemp] = NesHex[dz + addrtemp + 1] = 0x00;
  } else {
    var cd = $('#ulother').children().eq(2).find('span[val]').attr('val');
    var old = NesHex[ramcheck(dz + addrtemp, NesHex)];
    if (old != cd.num()) {
      NesHex[dz + addrtemp] = xx[cd]?.[0] || 0;
      NesHex[dz + addrtemp + 1] = xx[cd]?.[1] || 0;
    }
  }
  addrtemp += 2;
  // Special Block
  if ($('#ulother').children().eq(3).find('span[val]').text() == 'none') {
    NesHex[dz + addrtemp] = NesHex[dz + addrtemp + 1] = 0x00;
  } else {
    var cd = $('#ulother').children().eq(3).find('span[val]').attr('val');
    var old = NesHex[ramcheck(dz + addrtemp, NesHex)];
    if (old != cd.num()) {
      NesHex[dz + addrtemp] = xx[cd]?.[0] || 0;
      NesHex[dz + addrtemp + 1] = xx[cd]?.[1] || 0;
    }
  }
  addrtemp += 2;
  // Special Tackle
  if ($('#ulother').children().eq(4).find('span[val]').text() == 'none') {
    NesHex[dz + addrtemp] = NesHex[dz + addrtemp + 1] = 0x00;
  } else {
    var cd = $('#ulother').children().eq(4).find('span[val]').attr('val');
    var old = NesHex[ramcheck(dz + addrtemp, NesHex)];
    if (old != cd.num()) {
      NesHex[dz + addrtemp] = xx[cd]?.[0] || 0;
      NesHex[dz + addrtemp + 1] = xx[cd]?.[1] || 0;
      // Animation of Tackle
      NesHex[TackleAnimation + playerId - 1] = xx[cd]?.[2] || 0;
    }
  }
  addrtemp += 2;
  // Special Intercept
  if ($('#ulother').children().eq(5).find('span[val]').text() == 'none') {
    NesHex[dz + addrtemp] = NesHex[dz + addrtemp + 1] = 0x00;
  } else {
    var cd = $('#ulother').children().eq(5).find('span[val]').attr('val');
    var old = NesHex[ramcheck(dz + addrtemp, NesHex)];
    if (old != cd.num()) {
      NesHex[dz + addrtemp] = xx[cd]?.[0] || 0;
      NesHex[dz + addrtemp + 1] = xx[cd]?.[1] || 0;
    }
  }
  // addrtemp += 2;
  // // Special GK
  // if ($('#ulother').children().eq(6).find('span[val]').text() == 'none') {
  //   NesHex[dz + addrtemp] = NesHex[dz + addrtemp + 1] = 0x00;
  // } else {
  //   var cd = $('#ulother').children().eq(6).find('span[val]').attr("val");
  //   NesHex[dz + addrtemp] = xx[cd]?.[0] || 0;
  //   NesHex[dz + addrtemp + 1] = xx[cd]?.[1] || 0;
  // }

  // Reload updated skills
  LoadSkills();
  alertMsg('#isfileload', 'green', 'Special skills updated successfully!');
}

function DelSkillsub(id) {
  if ($(id).attr('af') == 'ulshoot') {
    $(id).parent().remove();
  } else {
    // Field rows now carry a category chip between the × button and the
    // value span, so target the value span by its `val` attribute.
    $(id).closest('.sk-item').find('span[val]').html('none');
  }
}

function addSkillGk() {
  let val = $('#skillGk').val();
  $('#sgk').attr('val', val).html(Skill_GK_[val]);
}

// Clipboard for whole-player skill copy/paste. Captured from the currently
// loaded player's edit UI (#SkillEdit), applied onto another player.
var copiedPlayerSkills = null;

// Copy every skill of the currently selected player: the special-shot list,
// the 6 field-skill slots (Passing/Dribble/Combo/Block/Tackle/Intercept, in
// #ulother order), and the GK slot if this is a keeper.
function copyPlayerSkills() {
  var data = { shots: [], fields: [], gk: null };
  $('#ulshoot')
    .children()
    .each(function () {
      var sp = $(this).find('span[val]');
      data.shots.push({ val: sp.attr('val'), text: sp.text() });
    });
  $('#ulother')
    .children()
    .each(function () {
      var sp = $(this).find('span[val]');
      data.fields.push({ val: sp.attr('val'), text: sp.text() });
    });
  if ($('#sgk').length) {
    data.gk = { val: $('#sgk').attr('val'), text: $('#sgk').text() };
  }
  copiedPlayerSkills = data;

  var n =
    data.shots.length +
    data.fields.filter((f) => f.text !== 'none').length +
    (data.gk && data.gk.text !== 'none' ? 1 : 0);
  alertMsg(
    '#isfileload',
    'green',
    n > 0
      ? `Copied ${n} skill(s). Switch player, then click "Paste".`
      : 'This player has no skills to copy.',
  );
}

// Add the copied skills into the currently loaded player WITHOUT overwriting
// skills it already has. Only fills empty slots / appends new shots. The user
// must then click "Apply Special Changes" to write to ROM.
function pastePlayerSkills() {
  if (!copiedPlayerSkills) {
    alertMsg('#isfileload', 'red', 'Copy a player first.');
    return;
  }
  var src = copiedPlayerSkills;
  var added = 0;
  var kept = 0;

  if ($('#sgk').length) {
    // Target is a goalkeeper.
    if (src.gk && src.gk.text !== 'none') {
      if ($('#sgk').text() === 'none') {
        $('#sgk').attr('val', src.gk.val).html(src.gk.text);
        added++;
      } else {
        kept++;
      }
    }
  } else {
    // Field skills: fill only the empty categories (same #ulother order).
    var targetFields = $('#ulother').children();
    src.fields.forEach(function (f, idx) {
      if (!f || f.text === 'none') return;
      var row = targetFields.eq(idx);
      if (!row.length) return;
      var sp = row.find('span[val]');
      if (sp.text() === 'none') {
        sp.attr('val', f.val).html(f.text);
        added++;
      } else {
        kept++;
      }
    });

    // Special shots: append the ones not already present (by val), max 9.
    var existing = {};
    $('#ulshoot')
      .children()
      .each(function () {
        existing[$(this).find('span[val]').attr('val')] = true;
      });
    src.shots.forEach(function (s) {
      if (!s || !s.val) return;
      if (existing[s.val]) {
        kept++;
        return;
      }
      if ($('#ulshoot').children().length >= 9) {
        kept++;
        return;
      }
      var li =
        "<li class='sk-item'><button class='sk-del' af='ulshoot' title='Delete' onclick='DelSkillsub(this);'>×</button>" +
        `<span val="${s.val}">${s.text}</span></li>`;
      $(li).appendTo($('#ulshoot'));
      existing[s.val] = true;
      added++;
    });
  }

  alertMsg(
    '#isfileload',
    added > 0 ? 'green' : 'red',
    `Added ${added}, kept ${kept} existing. Click "Apply Special Changes" to save.`,
  );
}

function addSkillsub() {
  var sel = $('#skillsub option:selected');
  var sType = +sel.val(); // type index (0-6) stored on the option
  var text = sel.text();
  var sid = text.trim().split(' ')[0];
  if (sType == 0) {
    // SHOT
    if ($('#ulshoot').children().length == 9) {
      alertMsg('#isfileload', 'red', 'The number of special shots must <= 9');
      return;
    }
    var selectstr =
      "<li class='sk-item'><button class='sk-del' af='ulshoot' title='Delete' onclick='DelSkillsub(this);'>×</button>" +
      `<span val="${sid}">${text}</span></li>`;
    $(selectstr).appendTo($('#ulshoot'));
  } else {
    // OTHERS
    $('#ulother')
      .children()
      .eq([sType - 1])
      .find('span[val]')
      .attr('val', sid)
      .html(text);
  }
  // Also strip this skill's mismatched face(s) so the added player doesn't
  // inherit another player's portrait.
  var n = removeFaceForSkill(text);
  // alertMsg(
  //   '#isfileload',
  //   'green',
  //   n > 0 ? `Added "${text}" & removed ${n} face(s)` : `Added "${text}"`,
  // );
}

// Fill #skillsub with ALL skills, grouped by category. Each entry is
// [displayLabel, skillList, romTypeIndex]. romTypeIndex is FIXED to the ROM
// skill-block layout (Shot0 Pass1 Dribble2 Combo3 Block4 Tackle5 Intercept6) and
// becomes the option's value so addSkillsub/Save_Skills place it in the right
// slot. The array ORDER is display-only — rearrange it freely to reorder the
// dropdown (e.g. Tackle right after Dribble) without breaking saves.
function Changeskilladdtype() {
  var groups = [
    ['Special Shot', Skill_SHOT_, 0],
    ['Special Passing', Skill_PASS_, 1],
    ['Special Dribble', Skill_DRIBBLE_, 2],
    ['Special Tackle', Skill_TACKLE_, 5],
    ['Special 1-2', Skill_COMBO_, 3],
    ['Special Block', Skill_BLOCK_, 4],
    ['Special Intercept', Skill_ICEPT_, 6],
  ];
  var html = '';
  for (var g = 0; g < groups.length; g++) {
    html +=
      '<optgroup style="font-weight:bold;font-size:16px;color:#12489e;background:#eaf1fb;" label="── ' +
      groups[g][0].toUpperCase() +
      ' ──">';
    var items = groups[g][1].split(',');
    for (var i = 0; i < items.length; i++) {
      if (/^=+$/.test(items[i].trim())) continue; // bỏ vạch ngăn
      html +=
        '<option style="font-size:14px;color:#111;font-weight:normal;" value="' +
        groups[g][2] +
        '">' +
        items[i] +
        '</option>';
    }
    html += '</optgroup>';
  }
  $('#skillsub').html(html);
}

function getskillimgcode() {
  var addr = +$('#skill__addr').val();
  var code = toHex16(NesHex[addr]);
  $('#skill__code').val(code.num());
  $('#InstructTempText').html(
    'Instruction data address: ' + toHex16(InstructAddr, 5),
  );
  $('#PortraitTempText').html(
    'Shot address: ' +
      toHex16(addr - 7, 5) +
      ', Portrait data address: ' +
      toHex16(addr, 5),
  );
}
