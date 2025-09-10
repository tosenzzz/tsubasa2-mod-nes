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
  NesHex[PortraitAddr] = parseInt(
    Skill_o_txt[$('#skill__code').get(0).selectedIndex].substr(0, 2),
    16,
  );
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
  var xdz = ($('#PlayerList').val() - 1) * 2 + SkillAddr;
  if (Number.isNaN(xdz)) return;
  var bdz = ramcheck(xdz, NesHex);
  var str =
    'Skill entry: ' +
    `${toHex16(xdz, 5)}=${toHex16(NesHex[xdz])} ${toHex16(NesHex[xdz + 1])}, `;
  str += `Index address: ${toHex16(bdz, 5)}<br>`;

  // Check GK
  if (gkPlayer.includes(+$('#PlayerList').val())) {
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
  BindSkillStrO(lstCOMBO, lstSTYPE, 3, bdz + 6, bdz + 7, 'Combo 1-2');
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
      ` Pointer ${bdz.hex()}:` + `${toHex16(idx1)} ${toHex16(idx2)}<br>`;
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
          var txt = `${toHex16(shootaddr + i, 5)}=${lstSHOT[x]}`;
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
      var txt = toHex16(ramcheck(bd1, NesHex), 5) + '=' + lstSkills[i];
      let id1 = toHex16(NesHex[bd1]);
      let id2 = toHex16(NesHex[bd2]);
      lstTypes[ix] += ` Pointer ${bd1.hex()}:${id1} ${id2}, ` + txt;
      var sid = lstSkills[i].trim().split(' ')[0];
      skilllistother.push([txt, nm, sid]);
    }
  }
}

function ChangeSkillView() {
  if (SkillViewTypeVar == 0) {
    $('#SkillViewType').html('View Mode');
    $('#SkillStr').css('display', 'block');
    $('#SkillEdit').css('display', 'none');
    SkillViewTypeVar = 1;
  } else {
    $('#SkillViewType').html('Edit Mode');
    $('#SkillStr').css('display', 'none');
    $('#SkillEdit').css('display', 'block');
    SkillViewTypeVar = 0;
  }
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
  var useNewAddr = $('#useNewAddr').is(':checked');
  var pSkAddr = ($('#PlayerList').val() - 1) * 2 + SkillAddr;
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
    84: [0xee, 0xff, 0x20],
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
      84: [0x0e, 0x50, 0x20],
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
        84: [0xee, 0x7f, 0x20],
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
  if (gkPlayer.includes(+$('#PlayerList').val())) {
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
    let str = $('#ulshoot').children().eq(i).find('span').attr('val');
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
  if ($('#ulother').children().eq(0).find('span').text() == 'none') {
    NesHex[dz + addrtemp] = NesHex[dz + addrtemp + 1] = 0x00;
  } else {
    var cd = $('#ulother').children().eq(0).find('span').attr('val');
    var old = NesHex[ramcheck(dz + addrtemp, NesHex)];
    if (old != cd.num()) {
      NesHex[dz + addrtemp] = xx[cd]?.[0] || 0;
      NesHex[dz + addrtemp + 1] = xx[cd]?.[1] || 0;
    }
  }
  addrtemp += 2;
  // Special Dribble
  if ($('#ulother').children().eq(1).find('span').text() == 'none') {
    NesHex[dz + addrtemp] = NesHex[dz + addrtemp + 1] = 0x00;
  } else {
    var cd = $('#ulother').children().eq(1).find('span').attr('val');
    var old = NesHex[ramcheck(dz + addrtemp, NesHex)];
    if (old != cd.num()) {
      NesHex[dz + addrtemp] = xx[cd]?.[0] || 0;
      NesHex[dz + addrtemp + 1] = xx[cd]?.[1] || 0;
    }
  }
  addrtemp += 2;
  // Special 1-2
  if ($('#ulother').children().eq(2).find('span').text() == 'none') {
    NesHex[dz + addrtemp] = NesHex[dz + addrtemp + 1] = 0x00;
  } else {
    var cd = $('#ulother').children().eq(2).find('span').attr('val');
    var old = NesHex[ramcheck(dz + addrtemp, NesHex)];
    if (old != cd.num()) {
      NesHex[dz + addrtemp] = xx[cd]?.[0] || 0;
      NesHex[dz + addrtemp + 1] = xx[cd]?.[1] || 0;
    }
  }
  addrtemp += 2;
  // Special Block
  if ($('#ulother').children().eq(3).find('span').text() == 'none') {
    NesHex[dz + addrtemp] = NesHex[dz + addrtemp + 1] = 0x00;
  } else {
    var cd = $('#ulother').children().eq(3).find('span').attr('val');
    var old = NesHex[ramcheck(dz + addrtemp, NesHex)];
    if (old != cd.num()) {
      NesHex[dz + addrtemp] = xx[cd]?.[0] || 0;
      NesHex[dz + addrtemp + 1] = xx[cd]?.[1] || 0;
    }
  }
  addrtemp += 2;
  // Special Tackle
  if ($('#ulother').children().eq(4).find('span').text() == 'none') {
    NesHex[dz + addrtemp] = NesHex[dz + addrtemp + 1] = 0x00;
  } else {
    var cd = $('#ulother').children().eq(4).find('span').attr('val');
    var old = NesHex[ramcheck(dz + addrtemp, NesHex)];
    if (old != cd.num()) {
      NesHex[dz + addrtemp] = xx[cd]?.[0] || 0;
      NesHex[dz + addrtemp + 1] = xx[cd]?.[1] || 0;
      NesHex[DefEffectAddr + $('#PlayerList').val() - 1] = xx[cd]?.[2] || 0; //Defense effect code
    }
  }
  addrtemp += 2;
  // Special Intercept
  if ($('#ulother').children().eq(5).find('span').text() == 'none') {
    NesHex[dz + addrtemp] = NesHex[dz + addrtemp + 1] = 0x00;
  } else {
    var cd = $('#ulother').children().eq(5).find('span').attr('val');
    var old = NesHex[ramcheck(dz + addrtemp, NesHex)];
    if (old != cd.num()) {
      NesHex[dz + addrtemp] = xx[cd]?.[0] || 0;
      NesHex[dz + addrtemp + 1] = xx[cd]?.[1] || 0;
    }
  }
  // addrtemp += 2;
  // // Special GK
  // if ($('#ulother').children().eq(6).find('span').text() == 'none') {
  //   NesHex[dz + addrtemp] = NesHex[dz + addrtemp + 1] = 0x00;
  // } else {
  //   var cd = $('#ulother').children().eq(6).find('span').attr("val");
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
    $(id).next().html('none');
  }
}

function addSkillGk() {
  let val = $('#skillGk').val();
  $('#sgk').attr('val', val).html(Skill_GK_[val]);
}

function addSkillsub() {
  var sType = $('#skilladdtype').get(0).selectedIndex;
  var text = $('#skillsub option:selected').text();
  var sid = text.trim().split(' ')[0];
  if (sType == 0) {
    // SHOT
    if ($('#ulshoot').children().length == 9) {
      alertMsg('#isfileload', 'red', 'The number of special shots must <= 9');
    } else {
      var selectstr =
        "<li style='display:block;'><button af='ulshoot' onclick='DelSkillsub(this);'>Del (Shot)</button>" +
        `<span val="${sid}">${text}</span></li>`;
      $(selectstr).appendTo($('#ulshoot'));
    }
  } else {
    // OTHERS
    $('#ulother')
      .children()
      .eq([sType - 1])
      .find('span')
      .attr('val', sid)
      .html(text);
  }
}

function Changeskilladdtype() {
  var idx = $('#skilladdtype').get(0)?.selectedIndex;
  $('#skillsub').html('');
  var Skillitem = [];
  switch (idx) {
    case 0:
      Skillitem = Skill_SHOT_.split(',');
      break;
    case 1:
      Skillitem = Skill_PASS_.split(',');
      break;
    case 2:
      Skillitem = Skill_DRIBBLE_.split(',');
      break;
    case 3:
      Skillitem = Skill_COMBO_.split(',');
      break;
    case 4:
      Skillitem = Skill_BLOCK_.split(',');
      break;
    case 5:
      Skillitem = Skill_TACKLE_.split(',');
      break;
    case 6:
      Skillitem = Skill_ICEPT_.split(',');
      break;
  }
  var obj = document.getElementById('skillsub');
  for (var i = 0; i < Skillitem.length; i++) {
    obj.options.add(new Option(Skillitem[i], i));
  }
}

function getskillimgcode() {
  var addr = $('#skill__addr').val();
  var codes = toHex16(NesHex[addr]);
  var x = 0;
  for (var i = 0; i < Skill_o_txt.length; i++) {
    if (codes == Skill_o_txt[i].substr(0, 2)) {
      x = i;
      break;
    }
  }
  document.getElementById('skill__code')[x].selected = true;
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
