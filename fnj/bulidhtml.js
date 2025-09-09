// Player select item add
function LoadTxtData() {
  for (var i = 11; i > 0; i--) {
    var sel;
    if (i == 1) {
      sel = document.getElementById('selectplayerGK');
    } else {
      sel = document.getElementById('selectplayer' + addPreZero(i));
    }
    var str = '';
    str = fillSelectlist_S(str, playerstr);
    sel.innerHTML = str;
  }

  // Substitutes
  for (var i = 1; i <= 10; i++) {
    var resel;
    if (i == 9) {
      resel = document.getElementById('selectplayertgk1');
    } else if (i == 10) {
      resel = document.getElementById('selectplayertgk2');
    } else {
      resel = document.getElementById('selectplayert' + addPreZero(i));
    }
    var restr = '';
    restr = fillSelectlist_S(restr, playerstr);
    resel.innerHTML = restr;
  }
}

// Build HTML elements
function LoadHtmlInner() {
  BulidHTML_Team_Player();
  LoadTxtData();
  BulidHTML_ChrHTML();
  BulidInstructTabHtml();
  BulidHTML_BG_View_Html(); // Build CHR extended HTML
  LoadAllPatch();
}

// CHR quick editor
function BulidHTML_ChrHTML() {
  // CHR 2.0
  $('#CHRTab').append(
    '<div id="chrEditmeu" style="display:none;position: fixed;">' +
      '<button style="background-color:white;color:black;" onclick="CopyTileData()">Copy</button><br>' +
      '<button style="background-color:white;color:black;" onclick="PastTileData()">Paste</button>' +
      '</div>' +
      '<div id="ChrColors"></div>' +
      '<canvas id="chrCanvas" width="128" height="128"></canvas><br>' +
      '<select id="chrPageSelect"></select>' +
      '<span>View size:</span>' +
      '<select id="chrSizeSelect"><option value="128">128x128</option><option value="256" selected>256x256</option><option value="512">512x512</option></select><br>' +
      '<span id="tileInfo"></span><br>' +
      '<textarea id="tileCode"></textarea><button onclick="changeTile()">Apply</button><br>' +
      '<span>Brush:</span><select id="penSelect"><option value="0"></option><option value="1"></option><option value="2"></option><option value="3"></option></select>&nbsp;' +
      '<canvas id="penCanvas" width="32" height="32"></canvas>&nbsp;' +
      '<span>Clipboard:</span><canvas id="PastTileCanvas" width="32" height="32"></canvas><br>' +
      '<span>Clicked:</span><canvas id="clickedCanvas" width="32" height="32"></canvas><button onclick="clearClicked()">Clear</button><br>' +
      '<textarea id="arrTile"></textarea><button onclick="changeArrTile()">Apply</button><br>' +
      '<canvas id="selectedTileCanvas" width="128" height="128"></canvas><br>' +
      '<button onclick="writeTileData()">Apply Tile Changes</button><br>' +
      '<span>CHR large view: right-click to open Copy/Paste menu.<br>' +
      'Tile edit: left-click paints color, right-click switches brush.<br>' +
      'Tip: hold left mouse and move to paint continuously.<br>' +
      'Tile edit is experimental and not very convenient.</span>',
  );
  $('#ChrColors').append(
    "<span>Chr quick viewer/editor v2.1 by daymoe<br>Palette:</span><select id='ChrColor1' onchange='ChrColorChange()'></select> <select id='ChrColor2'onchange='ChrColorChange()'></select> <select id='ChrColor3'onchange='ChrColorChange()'></select> <select id='ChrColor4'onchange='ChrColorChange()'></select>",
  );
  InputPlayerColorData('#ChrColor1');
  InputPlayerColorData('#ChrColor2');
  InputPlayerColorData('#ChrColor3');
  InputPlayerColorData('#ChrColor4');
  document.getElementById('ChrColor1')[0x0f].selected = true;
  document.getElementById('ChrColor2')[0x07].selected = true;
  document.getElementById('ChrColor3')[0x28].selected = true;
  document.getElementById('ChrColor4')[0x39].selected = true;
}

// Background viewer 1.2
function BulidHTML_BG_View_Html() {
  var inputstyle =
    'word-break:normal;display:block;white-space:pre-wrap;overflow-y:auto;';
  // Story BG
  $('#BGview').empty();
  var htmlstr =
    "<div><span>Model Index Address:</span><input type='text' style='width:60px;' id='BGview_Id' value='E010'>";
  htmlstr +=
    "<span>Data Length:</span><input type='text' style='width:60px;' id='BGview_Id_Len' value='69'>";
  htmlstr += "<button onclick='GetBGview()'>Parse</button><br>";
  htmlstr +=
    '<span>Animation List:</span><select id="BGview_ID_0" onchange="GetBGview_BG(-1)"></select>';
  htmlstr +=
    ' <span>Arrangement Bank:</span><select id="BGview_SeAddr" onchange="GetBGview_BG_1()"><option value="0">0x10010</option><option value="1">0x11110</option></select><span>If display looks wrong, try switching bank.</span><br>';
  htmlstr +=
    '<canvas id="chr_BG0_Canvas" width="512" height="256"></canvas><br>';
  htmlstr += "<span>CHR Bank:</span><span id='BGview_Dat_0'>0</span>";
  htmlstr += "<span>Palette & Bank:</span><span id='BGview_Dat_1'>0</span>";
  htmlstr += "<span>Rows:</span><span id='BGview_Dat_2'>0</span>";
  htmlstr += "<span>Cols:</span><span id='BGview_Dat_3'>0</span>";
  htmlstr += "<span>Start Tile Pos:</span><span id='BGview_Dat_4'>0</span><br>";
  htmlstr +=
    "<span>Tile Index:</span><span id='BGview_Dat_5' style='width:160px;max-height: 80px;" +
    inputstyle +
    "'>0</span>";
  htmlstr += "<span>Tail Anim Data:</span><span id='BGview_Dat_6'>0</span><br>";
  htmlstr +=
    "<span>Raw Data:</span><br><span id='BGview_Dat_7' style='width:520px;max-height: 100px;" +
    inputstyle +
    "'>0</span>";
  htmlstr += '</div>';
  $('#BGview').html(htmlstr);
  document.getElementById('chr_BG0_Canvas').crossorigin = '';

  // 0528 background
  $('#BGview_0528').empty();
  htmlstr = '<div>';
  htmlstr +=
    '<span>Available Version:</span><select id="BGview_0528_05ca_Tpye" onchange="GetBGview_0528_05ca_Tpye()"><option value="0">Original</option><option value="1">1.32</option></select><br>';
  htmlstr +=
    '<span>05CC List:</span><select id="BGview_0528_05cc_list" onchange="GetBGview_0528_05cc_list()"></select> ';
  htmlstr +=
    '<span>05CA List:</span><select id="BGview_0528_05ca_list" onchange="GetBGview_0528_05ca_list()"></select><br>';
  htmlstr +=
    '<span>05CC Addr:</span><input type="text" style="width: 60px;" id="BG05cc_addr" value="16B74"> ';
  htmlstr +=
    '<span>05CA Addr:</span><input type="text" style="width: 60px;" id="BG05ca_addr" value="24010"><br>';
  htmlstr +=
    '<span>Attr Addr:</span><input type="text" style="width: 60px;" id="BGAdb_addr" value="17BF4"> ';
  htmlstr +=
    '<span>CHR Addr:</span><input type="text" style="width: 60px;" id="BGchr_addr" value="166FE"><br>';
  htmlstr +=
    '<canvas id="chr_BGview_0528_Canvas" width="256" height="256"></canvas><br>';
  htmlstr +=
    '<span>05CC Data:<br></span><span id="BGview_0528_Dat_0" style="width:300px;max-height: 80px;' +
    inputstyle +
    '">0</span><br>';
  htmlstr +=
    '<span>05CA Data:<br></span><span id="BGview_0528_Dat_1" style="width:300px;max-height: 80px;' +
    inputstyle +
    '">0</span><br>';
  htmlstr +=
    '<span>Attr Bytes:<br></span><span id="BGview_0528_Dat_2" style="width:300px;max-height: 80px;' +
    inputstyle +
    '">0</span><br>';
  htmlstr +=
    '<span>NAM Layout:<br></span><span id="BGview_0528_Dat_3" style="width:300px;max-height: 80px;' +
    inputstyle +
    '">0</span>';
  htmlstr += '</div>';
  $('#BGview_0528').html(htmlstr);
  document.getElementById('chr_BGview_0528_Canvas').crossorigin = '';
}

function BulidHTML_Team_Player() {
  // Select stage
  $('#Select_stage').empty();
  $('#Select_stage').append(
    `<input id="sel_stage" type="checkbox">`,
    `<label for="sel_stage">Can select stage</label>`,
    `<button onclick="ChangeSelStage()">Apply</button>`,
  );

  // Players
  $('#Team_player_list').empty();
  var Team_player_list =
    "<div id='playerlistdiv' style='float:left; display:inline;'>";
  // starters
  for (var i = 11; i > 0; i--) {
    if (i == 1) {
      Team_player_list +=
        '<span>No.GK:</span><select id="selectplayerGK" offindex=0></select><br>';
    } else {
      Team_player_list +=
        '<span>No.' +
        addPreZero(i) +
        ':</span><select id="selectplayer' +
        addPreZero(i) +
        '" offindex=0></select><br>';
    }
  }
  Team_player_list += '</div>';
  // subs
  Team_player_list +=
    "<div id='replayerlistdiv' style='float:left; display:none;'>";
  for (var i = 0; i <= 7; i++) {
    Team_player_list +=
      '<span>Re.' +
      addPreZero(i + 1) +
      ':</span><select id="selectplayert' +
      addPreZero(i + 1) +
      '" offindex=0></select><br>';
  }
  Team_player_list +=
    '<span>Re.GK1:</span><select id="selectplayertgk1" offindex=0></select><br>';
  Team_player_list +=
    '<span>Re.GK2:</span><select id="selectplayertgk2" offindex=0></select><br>';
  Team_player_list += '</div>';
  $('#Team_player_list').html(Team_player_list);

  // Teams
  $('#Team_list').empty();
  var Team_list = "<select id='Team_Select' onchange='TeamSelectChange()'>";
  Team_list = fillSelectlist_S(Team_list, teamlist);
  Team_list += '</select>';

  // extra teams
  Team_list +=
    "<select id='Add_Team_Select' style='display:none;' onchange='Add_TeamSelectChange()'>";
  for (var W = 3; W < teamlist.length; W++) {
    Team_list += '<option>' + teamlist[W] + '</option>';
  }
  Team_list += '</select>';
  Team_list +=
    "<button id='showadteambtn' onclick='CAddTeam()'>Edit COM team</button>&nbsp;<button onclick='ChangeTeam()'>Apply</button><br>";
  Team_list +=
    '<div id="Team_AKDFdiv"><span>Tactics:</span><select id="Team_AK"></select>&nbsp;<span>Formation:</span><select id="Team_DF"></select><span id="TeamedStr"> </span><br></div>';
  $('#Team_list').html(Team_list);
  for (var i = 0; i < 4; i++) {
    fillSelectlist_x($('#Team_DF'), i, Formation_Str[i]);
  }
  for (var i = 4; i < Formation_Str.length; i++) {
    fillSelectlist_x($('#Team_AK'), i, Formation_Str[i]);
  }

  // Add team UI
  Team_player_list =
    "<div id='addteam' style='float:left; display:none;'>Use free space <input id='addTeamUseNewAddr' type='checkbox'><br>";
  for (var i = 11; i > 0; i--) {
    if (i == 1) {
      Team_player_list +=
        '<div><span>No.GK:</span><select id="addplayerGK" offindex=0 onchange="addteamclick()"></select><br></div>';
    } else {
      Team_player_list +=
        '<div><span>No.' +
        addPreZero(i) +
        ':</span><select id="addplayer' +
        addPreZero(i) +
        '" offindex=0 onchange="addteamclick()"></select><br></div>';
    }
  }
  Team_player_list += '<span>Fixed Params:</span><br>';
  Team_player_list +=
    '<div><span>Formation/Tactics</span><select id="addplayeSB1" offindex=0 onchange="addteamclick()"></select><br></div>';
  Team_player_list +=
    '<div><span>Unknown</span><select id="addplayeSB2" offindex=0 onchange="addteamclick()"></select><br></div>';
  Team_player_list +=
    '<div><span>GK</span><select id="addplayeSB3" offindex=0 onchange="addteamclick()"></select><br></div>';
  Team_player_list +=
    '<div><span>DEF</span><select id="addplayeSB4" offindex=0 onchange="addteamclick()"></select><br></div>';
  Team_player_list +=
    '<div><span>MID</span><select id="addplayeSB5" offindex=0 onchange="addteamclick()"></select><br></div>';
  Team_player_list +=
    '<div><span>FW</span><select id="addplayeSB6" offindex=0 onchange="addteamclick()"></select><br></div>';
  Team_player_list +=
    '<div><span>Corner Taker (High)</span><select id="addplayeSB7" offindex=0 onchange="addteamclick()"></select><br></div>';
  Team_player_list +=
    '<div><span>Corner AI1</span><select id="addplayeSB8" offindex=0 onchange="addteamclick()"></select><br></div>';
  Team_player_list +=
    '<div><span>Corner AI2</span><select id="addplayeSB9" offindex=0 onchange="addteamclick()"></select></div>';
  Team_player_list += '<div><span id="addteamStr">Hex:</span></div>';
  Team_player_list += '</div>';
  $('#Team_player_list').append(Team_player_list);

  for (var i = 11; i > 0; i--) {
    var sel;
    if (i == 1) {
      sel = document.getElementById('addplayerGK');
    } else {
      sel = document.getElementById('addplayer' + addPreZero(i));
    }
    var str = '';
    str = fillSelectlist_S(str, playerstr);
    sel.innerHTML = str;
  }

  var strTEMP = '';
  strTEMP = fillSelectlist_S(strTEMP, playerstr);
  document.getElementById('addplayeSB3').innerHTML =
    document.getElementById('addplayeSB4').innerHTML =
    document.getElementById('addplayeSB5').innerHTML =
    document.getElementById('addplayeSB6').innerHTML =
      strTEMP;

  strTEMP = '';
  strTEMP = fillSelectlist_S_16(strTEMP, 256);
  document.getElementById('addplayeSB2').innerHTML =
    document.getElementById('addplayeSB7').innerHTML =
    document.getElementById('addplayeSB8').innerHTML =
    document.getElementById('addplayeSB9').innerHTML =
      strTEMP;

  strTEMP = '';
  document.getElementById('addplayeSB1').innerHTML = fillSelectlist_S(
    strTEMP,
    team_da,
  );

  // Socks
  $('#Teamedit_a_1').empty();
  var Team_SC_list = "<div id='Team_SCDIV'>";
  Team_SC_list += "<select id='Team_SC_Select' onchange='Team_SC_Change()'>";
  Team_SC_list = fillSelectlist_S(Team_SC_list, teamlist);
  Team_SC_list += "</select><span id='Team_SC_str'></span><br>";
  Team_SC_list +=
    '<span>Light:</span><select id="Team_SC_C0" offindex=0 onchange="Team_SC_Change2()"></select>&nbsp;';
  Team_SC_list +=
    '<span>Dark</span><select id="Team_SC_C1" offindex=0 onchange="Team_SC_Change2()"></select><br>';
  Team_SC_list +=
    "<img id='canteamscpict' src=''/><img id='canteamscpictemp' style='display:none;' src=''/>";
  Team_SC_list += "<br><button onclick='CG_Team_SC()'>Apply</button>";
  Team_SC_list += '</div>';
  $('#Teamedit_a_1').html(Team_SC_list);

  strTEMP = '';
  strTEMP = fillSelectlist_S_16(strTEMP, 0x40);
  document.getElementById('Team_SC_C0').innerHTML = document.getElementById(
    'Team_SC_C1',
  ).innerHTML = strTEMP;
}

// Model / Portrait etc.
function LoadPlayerEditHtml() {
  $('#playeredit_a_0').empty();
  var htmlstr =
    "<span>Players:</span> <select id='PlayerEditNameList' offindex=0 onchange='PlayerEditSelectChange();'></select><br>";
  htmlstr +=
    "<span>Mod:</span><select id='PlayerModSelect' offindex=0 onchange='PlayerModSelectChange();'>";
  htmlstr = fillSelectlist_S(htmlstr, PlayModList);
  htmlstr += '</select><br><div>';
  htmlstr += "<table id='PlayerEditColor' style='border:1px solid #F00;'>";
  htmlstr +=
    '<tr><td>Skin</td><td>Hair</td><td>Jersey</td><td>Shorts</td><td>Model</td></tr>';
  htmlstr +=
    "<tr><td><span id='PlayerSkincolour' class='colorpanle'>     </span></td><td><span id='PlayerHaircolor' class='colorpanle'>     </span></td><td><span id='PlayerCoatcolor' class='colorpanle'>     </span></td><td><span id='PlayerShortscolor' class='colorpanle'>     </span></td><td><div id='diccanvasmod'><img id='canvasmod' src='" +
    IMG_ModPic[18] +
    "'/><div id='LoadPlayEditPngChange'></div><div></td></tr>";
  htmlstr +=
    "<tr><td><select id='PlayerSkincolourSe' offindex=0 onchange='getColoroptionsVal(this)'></select></td><td><select id='PlayerHaircolorSe' offindex=0 onchange='getColoroptionsVal(this)'></select></td><td><select id='PlayerCoatcolorSe' offindex=0 onchange='getColoroptionsVal(this)'></select></td><td><select id='PlayerShortscolorSe' offindex=0 onchange='getColoroptionsVal(this)'></select></td><td><button id='GetModBtn' onclick='GetModFunction()'>Refresh Preview</button></td></tr>";
  htmlstr += '</table>';
  htmlstr += '</div>';
  htmlstr += "<span id='SeModeDataSpan'>Data:</span><br>";
  htmlstr +=
    "<button onclick='ChangeNowPlayerMod()'>Apply Current Model Changes</button><img id='canvasmodtemp' style='display:none;' src='" +
    IMG_ModPic[18] +
    "'/>";
  htmlstr +=
    '<br><span>Notes:<br>- Mod preview loads only when a selection is chosen.<br>- From player #0x76 (Tsubasa Ozora) head model is not present.<br>- If preview image fails, click refresh again.<br></span>';
  $('#playeredit_a_0').html(htmlstr);
  $('#PlayerEditNameList').empty();
  for (var i = 0; i < PlayerColorList.length; i++) {
    fillSelectlist_x($('#PlayerEditNameList'), i, PlayerColorList[i]);
  }
  InputPlayerColorData('#PlayerSkincolourSe');
  InputPlayerColorData('#PlayerHaircolorSe');
  InputPlayerColorData('#PlayerCoatcolorSe');
  InputPlayerColorData('#PlayerShortscolorSe');
  $('#PlayerEditNameList').val('000000');
  $('#PlayerModSelect').val('000000');

  // Versus portrait colors
  $('#playeredit_a_2').empty();
  htmlstr =
    "<select id='PlayerVSModColorList' onchange='PlayerVSModColorChange();'></select><br>";
  htmlstr +=
    "<div id='vspic_outside' style='width:256px;height:110px;vertical-align: middle;display: table-cell; text-align: center;'><img id='caVSmod' src='" +
    IMG_VS_Pic[0] +
    "'/></div>";
  htmlstr +=
    "<table style='border-collapse: collapse;border: 1px red solid;' id='vspic_Tab'><tr>";
  htmlstr +=
    "<td><span>Light skin</span><br><select id='vscol_1' onchange='PlayerVSModColorChange2();'></select></td>";
  htmlstr +=
    "<td><span>Dark skin</span><br><select id='vscol_2' onchange='PlayerVSModColorChange2();'></select></td>";
  htmlstr +=
    "<td><span id='vscc_1'>GK Collar</span><br><select id='vscol_3' onchange='PlayerVSModColorChange2();'></select></td>";
  htmlstr +=
    "<td><span id='vscc_2'>GK Jersey</span><br><select id='vscol_4' onchange='PlayerVSModColorChange2();'></select></td>";
  htmlstr +=
    "<td><span>Hair Color</span><br><select id='vscol_5' onchange='PlayerVSModColorChange2();'></select></td></tr>";
  htmlstr +=
    "<tr><td><span>Inner Frame BG</span><br><select id='vscol_6' onchange='PlayerVSModColorChange2();'></select></td>";
  htmlstr +=
    "<td><span>Outer Frame BG</span><br><select id='vscol_7' onchange='PlayerVSModColorChange2();'></select></td>";
  htmlstr += '</tr></table>';
  htmlstr +=
    "<button onclick='ChangeVsPic_()'>Apply</button><img id='caVSmodtemp' style='display:none;' src='" +
    IMG_VS_Pic[0] +
    "'/>";

  $('#playeredit_a_2').html(htmlstr);
  for (var i = 0; i < IMG_Name_Portrait.length; i++) {
    fillSelectlist_x($('#PlayerVSModColorList'), i, IMG_Name_Portrait[i][0]);
  }
  for (var i = 0; i < 0x40; i++) {
    fillSelectlist_x($('#vscol_1'), i, toHex16(i));
    fillSelectlist_x($('#vscol_2'), i, toHex16(i));
    fillSelectlist_x($('#vscol_3'), i, toHex16(i));
    fillSelectlist_x($('#vscol_4'), i, toHex16(i));
    fillSelectlist_x($('#vscol_5'), i, toHex16(i));
    fillSelectlist_x($('#vscol_6'), i, toHex16(i));
    fillSelectlist_x($('#vscol_7'), i, toHex16(i));
  }
  $('#vspic_Tab tr th').css('border', '1px solid');
  $('#vspic_Tab tr td').css('text-align', 'center');

  // VS portrait binding
  $('#playeredit_a_3').empty();
  htmlstr =
    "<table style='border-collapse: collapse;border: 1px red solid;' id='vscg_Tab'><tr>";
  htmlstr += '<tr>';
  htmlstr +=
    "<td><select id='PlayerVSModADDList1' onchange='PlayerVSModAddChange(1);'></select><br><select id='Vsmodelist1' onchange='bingDVSimg(1);'></select></td>";
  htmlstr +=
    "<td class='cvspkimg'><img id='VSmodIMG1' src='" +
    IMG_VS_Pic[IMG_VS_Pic.length - 1] +
    "'/><br><span id='VSmodIMG1str'>0x20704</span></td>";
  htmlstr += '</tr>';
  htmlstr += '<tr>';
  htmlstr +=
    "<td><select id='PlayerVSModADDList2' onchange='PlayerVSModAddChange(2);'></select><br><select id='Vsmodelist2' onchange='bingDVSimg(2);'></select></td>";
  htmlstr +=
    "<td class='cvspkimg'><img id='VSmodIMG2' src='" +
    IMG_VS_Pic[0] +
    "'/><br><span id='VSmodIMG2str'>0x21E6C</span></td>";
  htmlstr += '</tr>';
  htmlstr += '</table>';
  htmlstr += "<button onclick='ChangGVsPKpic()'>Apply</button>";

  $('#playeredit_a_3').html(htmlstr);
  for (var i = 0; i < PlayerName_Skill.length; i++) {
    if (i == 0) {
      fillSelectlist_x($('#PlayerVSModADDList1'), i, playerstrtemp0);
    }
    if (
      i == 0x01 ||
      i == 0x0e ||
      i == 0x20 ||
      i == 0x21 ||
      i == 0x25 ||
      i == 0x38 ||
      i == 0x3f ||
      i == 0x4b ||
      i == 0x32 ||
      i == 0x51 ||
      i == 0x55 ||
      i == 0x5a ||
      i == 0x68 ||
      i == 0x73
    ) {
    } else {
      fillSelectlist_x($('#PlayerVSModADDList1'), i, PlayerName_Skill[i]);
    }
  }
  for (var i = 0; i < Portrait_List.length; i++) {
    fillSelectlist_x($('#Vsmodelist1'), i, Portrait_List[i]);
  }
  for (var i = 0; i < 4; i++) {
    fillSelectlist_x($('#PlayerVSModADDList2'), i, Portrait_List_GK[i]);
  }
  for (var i = 4; i < Portrait_List_GK.length; i++) {
    fillSelectlist_x($('#Vsmodelist2'), i, Portrait_List_GK[i]);
  }
  $('#vscg_Tab tr td').css('border', '1px solid');
  $('#vscg_Tab tr td').css('text-align', 'left');
  $('.cvspkimg').css('text-align', 'center');
}

// AI ability index & run
function loadHPandOther() {
  var str = "<select id='AiHPindex' onchange='outAiStr();'>";
  str = fillSelectlist_S(str, Ai_HP_Index);
  str += '</select>';
  $('#aitab0').append(str);

  str = "<select id='AiXXAck' onchange='outAiStr();'>";
  str = fillSelectlist_S_16(str, 0x100);
  str += '</select>';
  $('#aitab2').append(str);

  str = "<select id='AiXXDef' onchange='outAiStr();'>";
  str = fillSelectlist_S_16(str, 0x100);
  str += '</select>';
  $('#aitab3').append(str);
}

// Check and output run-step data
function checkrunai() {
  for (var i = 0; i < 12; i++) {
    var xxxx = '#AiRunType_' + (i + 1);
    $(xxxx).val(
      NesHex[步长类型 + $('#AiRunType').get(0).selectedIndex * 12 + i],
    );
  }
  $('#AiRunType_Addr').html(
    ' 0x' + toHex16(步长类型 + $('#AiRunType').get(0).selectedIndex * 12, 5),
  );
  outAiStr();
}

// Build run-step HTML
function loadAiRun() {
  var str = "<select id='AiRunType' onchange='checkrunai();'>";
  str = fillSelectlist_S(str, Ai_Run);
  str += "</select><span id='AiRunType_Addr'></span>";

  var tempstr = [
    'Marking',
    'Carrying',
    'Attack',
    'Defense',
    'Attack Support',
    'Defense Support',
  ];
  for (var i = 0; i < tempstr.length; i++) {
    str += '<div><span>' + tempstr[i] + '<span>';
    str += "<select id='AiRunType_" + (i * 2 + 1) + "' onchange='outAiStr();'>";
    str += '</select> ';
    str += "<select id='AiRunType_" + (i * 2 + 2) + "' onchange='outAiStr();'>";
    str += '</select></div>';
  }

  $('#aitab1').append(str);
  for (var i = 0; i < 0x100; i++) {
    for (var x = 0; x < 12; x++) {
      $('#AiRunType_' + (x + 1)).append(
        $('<option/>').text(toHex16(i)).attr('value', i),
      );
    }
  }
}

// AI top bar & passing intent
function loadPassAi1() {
  var AI_player_list = '<div>Players:';
  AI_player_list +=
    " <select id='AiPlayerSelect' offindex=0 onchange='AiPlayersChange();'>";
  AI_player_list = fillSelectlist_S(AI_player_list, Aiplayerstr);
  AI_player_list += "</select><div id='AIOutStr'></div></div>";
  $('#AI_Players_Name').html(AI_player_list);

  // Passing intent
  var AiPasslist =
    "<span id='Passtext'></span><select id='AiPasslistSelect' offindex=0 onchange='AiPasslistChange();'>";
  AiPasslist = fillSelectlist_S_16(AiPasslist, 0x2f);
  AiPasslist += '</select><br>';

  // Sub items
  var passdiv = AiPasslist + '<div>';
  for (var i = 0; i <= 7; i++) {
    passdiv +=
      "<select id='passdata" +
      (i + 1) +
      "' offindex=0 onchange='getoptionsVal(this," +
      (i + 1) +
      ")'></select>";
    passdiv += "<span id='passsp" + (i + 1) + "'></span>";
    if (i + 1 != 8) {
      passdiv += '<br>';
    }
  }
  passdiv += '</div>';
  $('#aitab7').html(passdiv);
  loadPassAi2(); // fill codes
}

function AI几率分区数据HTML构造(tempXstr, st, ed, str) {
  var temphtml = '';
  for (var i = st; i <= ed; i++) {
    temphtml +=
      "<div><span id='" +
      str[0] +
      i +
      "' af='" +
      tempXstr[i - st] +
      "'>" +
      tempXstr[i - st] +
      '</span>';
    temphtml += "<span id='" + str[1] + i + "'></span>";
    for (var x = 0; x < 4; x++) {
      temphtml +=
        " <select id='" +
        str[2] +
        i +
        '_' +
        x +
        "' onchange='" +
        str[3] +
        ";'>";
      temphtml += '</select>';
    }
    temphtml += '</div>' + 分割线;
  }
  return temphtml;
}

// Attack AI probability HTML
function loadAckAi() {
  var str = "<div id='tab_Ack'><div>";
  str += "<button onclick='showdiv(0);'>Attack - Ground</button>";
  str += "<button onclick='showdiv(1);'>Attack - P1 Box (High/Low)</button>";
  str += "<button onclick='showdiv(2);'>Attack - NPC Box (High/Low)</button>";
  str += '</div>';

  str += "<div class='tab_content''>";

  // Ground attack
  str += "<div id='aiackdiv1'>";
  str += " <select id='AiAck1' onchange='ldAIData1(0);'>";
  str = fillSelectlist_S(str, Ai_Ack_1str);
  str += '</select>';
  var tempXstr = [
    'Zone 1: P1 corner area',
    'Zone 2: P1 big box edge',
    'Zone 3: P1 small box edge',
    'Zone 4: P1 small box',
    'Zone 5: Midfield',
    'Zone 6: NPC backfield',
  ];
  str += AI几率分区数据HTML构造(tempXstr, 0, 5, [
    'AiEx_',
    'AiEx_Txt_',
    'AiEx_select_',
    'GetAIData1(0);',
  ]);
  str += '</div>';

  // P1 box high/low
  str += "<div id='aiackdiv2' style='display:none;'>";
  str += " <select id='AiAck2' onchange='ldAIData1(1);'>";
  str = fillSelectlist_S(str, Ai_Ack_2str);
  str += '</select>';
  tempXstr = [
    'Zone 7: P1 big box middle',
    'Zone 8: P1 small box edge',
    'Zone 9: P1 small box inside',
  ];
  str += AI几率分区数据HTML构造(tempXstr, 6, 8, [
    'AiEx_',
    'AiEx_Txt_',
    'AiEx_select_',
    'GetAIData1(1);',
  ]);
  str += '</div>';

  // NPC box high/low
  str += "<div id='aiackdiv3' style='display:none;'>";
  str += " <select id='AiAck3' onchange='ldAIData1(2);'>";
  str = fillSelectlist_S(str, Ai_Ack_3str);
  str += '</select>';
  tempXstr = [
    'Zone 10: NPC big box middle',
    'Zone 11: NPC small box edge',
    'Zone 12: NPC small box inside',
  ];
  str += AI几率分区数据HTML构造(tempXstr, 9, 11, [
    'AiEx_',
    'AiEx_Txt_',
    'AiEx_select_',
    'GetAIData1(2);',
  ]);
  str += '</div>';

  str += '</div></div>';
  $('#aitab4').append(str);

  for (var i = 0; i <= 5; i++) {
    for (var x = 0; x < 4; x++) {
      添加几率文本(Ai_data_1_2, '#AiEx_select_' + i + '_' + x);
    }
  }
  for (var i = 6; i <= 8; i++) {
    for (var x = 0; x < 4; x++) {
      添加几率文本(Ai_data_2_2, '#AiEx_select_' + i + '_' + x);
    }
  }
  for (var i = 9; i <= 11; i++) {
    for (var x = 0; x < 4; x++) {
      添加几率文本(Ai_data_3_2, '#AiEx_select_' + i + '_' + x);
    }
  }
}

// Defense AI probability HTML
function loadDefAi() {
  var str = "<div id='tab_Def' ><div>";
  str += "<button onclick='showdiv(3);'>Defense - Ground</button>";
  str += "<button onclick='showdiv(4);'>Defense - P1 Box (High/Low)</button>";
  str += "<button onclick='showdiv(5);'>Defense - NPC Box (High/Low)</button>";
  str += '</div>';

  str += "<div class='tab_content''>";

  // Ground defense
  str += "<div id='aidefdiv1'>";
  str += "<select id='AiDef1' onchange='ldAIData2(0);'>";
  str = fillSelectlist_S(str, Ai_Def_1str);
  str += '</select>';
  var tempXstr = [
    'Zone 1: NPC corner area',
    'Zone 2: NPC big box edge',
    'Zone 3: NPC small box edge',
    'Zone 4: NPC small box',
    'Zone 5: Midfield',
    'Zone 6: P1 backfield',
  ];
  str += AI几率分区数据HTML构造(tempXstr, 0, 5, [
    'AiEx1_',
    'AiEx1_Txt_',
    'AiEx1_select_',
    'GetAIData2(0);',
  ]);
  str += '</div>';

  // NPC high/low defense
  str += "<div id='aidefdiv2' style='display:none;'>";
  str += "<select id='AiDef2' onchange='ldAIData2(1);'>";
  str = fillSelectlist_S(str, Ai_Def_2str);
  str += '</select>';
  tempXstr = [
    'Zone 7: NPC big box middle',
    'Zone 8: NPC small box edge',
    'Zone 9: NPC small box inside',
  ];
  str += AI几率分区数据HTML构造(tempXstr, 6, 8, [
    'AiEx1_',
    'AiEx1_Txt_',
    'AiEx1_select_',
    'GetAIData2(1);',
  ]);
  str += '</div>';

  // P1 high/low defense
  str += "<div id='aidefdiv3' style='display:none;'>";
  str += "<select id='AiDef3' onchange='ldAIData2(2);'>";
  str = fillSelectlist_S(str, Ai_Def_3str);
  str += '</select>';
  tempXstr = [
    'Zone 10: P1 big box middle',
    'Zone 11: P1 small box edge',
    'Zone 12: P1 small box inside',
  ];
  str += AI几率分区数据HTML构造(tempXstr, 9, 11, [
    'AiEx1_',
    'AiEx1_Txt_',
    'AiEx1_select_',
    'GetAIData2(2);',
  ]);
  str += '</div>';

  str += '</div></div>';
  $('#aitab5').append(str);

  for (var i = 0; i <= 5; i++) {
    for (var x = 0; x < 4; x++) {
      添加几率文本(Ai_data_4_2, '#AiEx1_select_' + i + '_' + x);
    }
  }
  for (var i = 6; i <= 8; i++) {
    for (var x = 0; x < 4; x++) {
      添加几率文本(Ai_data_5_2, '#AiEx1_select_' + i + '_' + x);
    }
  }
  for (var i = 9; i <= 11; i++) {
    for (var x = 0; x < 4; x++) {
      添加几率文本(Ai_data_6_2, '#AiEx1_select_' + i + '_' + x);
    }
  }
}

// GK AI probability HTML
function loadGKAi() {
  var str = "<div id='tab_GK' ><div>";
  str +=
    "<button onclick='showdiv(6);'>Normal GK Defense (Punch vs Catch)</button>";
  str +=
    "<button onclick='showdiv(7);'>High/Low Ball: GK Rush Decision</button>";
  str += "<button onclick='showdiv(8);'>Ground: GK Rush Decision</button>";
  str += '</div>';

  str += "<div class='tab_content''>";

  // Normal defense (punch/catch)
  str += "<div id='aiGKdiv1'>";
  str += "<select id='AiGK1' onchange='ldAIData3(0);'>";
  str = fillSelectlist_S(str, Ai_GK_1str);
  str += '</select>';
  var temphtml = '';
  temphtml += "<div><span id='AiEx2_1' af='Normal Defense'></span><br>";
  temphtml += "<span id='AiEx2_Txt_1'></span>";
  for (var x = 0; x < 4; x++) {
    temphtml +=
      " <select id='AiEx2_select_1_" + x + "' onchange='GetAIData3(0);'>";
    temphtml += '</select>';
  }
  temphtml += '</div>';
  str += temphtml;
  str += '</div>';

  // High/Low rush
  str += "<div id='aiGKdiv2' style='display:none;'>";
  str += "<select id='AiGK2' onchange='ldAIData3(1);'>";
  str = fillSelectlist_S(str, Ai_GK_2str);
  str += '</select>';
  temphtml = '';
  temphtml += "<div><span id='AiEx2_2' af='Rush on High/Low Ball'></span><br>";
  temphtml += "<span id='AiEx2_Txt_2'></span>";
  for (var x = 0; x < 4; x++) {
    temphtml +=
      " <select id='AiEx2_select_2_" + x + "' onchange='GetAIData3(1);'>";
    temphtml += '</select>';
  }
  temphtml += '</div>';
  str += temphtml;
  str += '</div>';

  // 1v1 rush
  str += "<div id='aiGKdiv3' style='display:none;'>";
  str += "<select id='AiGK3' onchange='ldAIData3(2);'>";
  str = fillSelectlist_S(str, Ai_GK_3str);
  str += '</select>';
  temphtml = '';
  temphtml += "<div><span id='AiEx2_3' af='Rush when 1v1'></span><br>";
  temphtml += "<span id='AiEx2_Txt_3'></span>";
  for (var x = 0; x < 4; x++) {
    temphtml +=
      " <select id='AiEx2_select_3_" + x + "' onchange='GetAIData3(2);'>";
    temphtml += '</select>';
  }
  temphtml += '</div>';
  str += temphtml;
  str += '</div>';

  str += '</div></div>';
  $('#aitab6').append(str);

  for (var x = 0; x < 4; x++) {
    添加几率文本(Ai_data_7_2, '#AiEx2_select_1_' + x);
    添加几率文本(Ai_data_8_2, '#AiEx2_select_2_' + x);
    添加几率文本(Ai_data_9_2, '#AiEx2_select_3_' + x);
  }
}

// Command (skills) tab
function BulidInstructTabHtml() {
  var btn =
    '<button id="Instructedit_x_0" af="#Instructedit_a_0" onclick="showInstructbuttondiv(0)">Command Data</button>';
  btn +=
    '<button id="Instructedit_x_1" af="#Instructedit_a_1" onclick="showInstructbuttondiv(1)">Skill Add</button>';
  var htmlstr =
    btn +
    "<div id='Instructedit_a_0'><div><span>Note: Aggressiveness/Power should not exceed 0xFC.<br>Stamina/One-two distance can be edited. Web version doesn’t show linked 0440/0443 data.<br>Command editing supports only original-address data.</span></div>";
  htmlstr +=
    "<div><span>Command Set:</span><select id='InstructList' onchange='GetInstruct();'>";
  htmlstr = fillSelectlist_S3(htmlstr, AllSkills.split(','));
  htmlstr += '</select> <span id="InstructTempText"></span><br></div>';

  htmlstr +=
    "<div><span>Aggressiveness (0~255):</span><input id='InstructB' onchange='CheckInstructB();' type='number' min=0 max=255>";
  htmlstr += '</input><br></div>';

  htmlstr +=
    "<div><span>Power (0~255):</span><input id='InstructW' type='number' min=0 max=255>";
  htmlstr += '</input><br></div>';

  htmlstr +=
    "<div><span>Stamina (0~500):</span><input id='InstructT' onchange='CheckInstructT();' type='number' min=0 max=500>";
  htmlstr += '</input></div>';

  htmlstr +=
    "<div id='Instruct2_1DIV'><span>1-2 Distance:</span><select id='Instruct2_1' style='dispaly:none;'>";
  htmlstr = fillSelectlist_S_16(htmlstr, 0x100 / 8);
  htmlstr += '</select></div>';

  htmlstr +=
    "<div><span>Skill Image ↓</span><br><select id='skill__addr' onchange='getskillimgcode();'>";
  htmlstr = fillSelectlist_S2(htmlstr, Skill_o_str);
  htmlstr += "</select><select id='skill__code'>";
  htmlstr = fillSelectlist_S(htmlstr, Skill_o_txt);
  htmlstr += '</select></div>';
  htmlstr += "<span id='PortraitTempText'></span>";
  htmlstr +=
    "<div><button onclick='ChangeInstruct();'>Apply Command Changes ↑</button></div></div>";
  htmlstr +=
    "<div id='Instructedit_a_1'><div><span>Specials view/edit supports original & some hacks.</span></div><div><span>Player:</span><select id='PlayerList' onchange='LoadSkills();'>";
  htmlstr = fillSelectlist_S(htmlstr, PlayerName_Skill);
  htmlstr +=
    "</select><button id='SkillViewType' onclick='ChangeSkillView();'>Toggle Mode</button></div><span id='SkillStr'></span>";
  htmlstr += "<div id='SkillEdit' style='display:none;'></div>";
  htmlstr += '</div>';
  $('#InstructTab').html(htmlstr);
}

var SkillViewTypeVar = 1; // mode flag

function GetSkill4EditMode() {
  var xdz = $('#PlayerList').get(0).selectedIndex * 2 + SkillAddr;
  var bdz = ramcheck(xdz, NesHex);
  var str =
    '<div><span>Skill entry: ' +
    toHex16(xdz, 5) +
    '=' +
    toHex16(NesHex[xdz]) +
    ' ' +
    toHex16(NesHex[xdz + 1]);
  str += ', Index address: ' + toHex16(bdz, 5);
  str += '</span></div><div><span>Skill index: ';
  for (var i = 0; i <= 6; i++) {
    str +=
      toHex16(NesHex[bdz + i * 2 + 0]) +
      ' ' +
      toHex16(NesHex[bdz + i * 2 + 1]) +
      ' ';
  }
  str += '</span></div>';
  var shootaddr = ramcheck(bdz, NesHex);

  var Skilltype = Skill_TYPE_.split(',');
  Skilltype[0] = 'Special Shot';
  var selectstr =
    "<div><span>Special type:</span><select id='skilladdtype' onchange='Changeskilladdtype();'>";
  selectstr = fillSelectlist_S(selectstr, Skilltype);
  selectstr += '</select>';
  selectstr += "<select id='skillsub'>";
  selectstr +=
    "</select><button onclick='addSkillsub();'>Add Skill</button></div>";

  selectstr += "<ul id='ulshoot'>";
  for (var i = 0; i < skilllistshoot.length; i++) {
    let sub = '#ulshoot' + i;
    selectstr +=
      "<li style='display:block;'><button af='ulshoot' onclick='DelSkillsub(this);'>Del (Shot)</button>" +
      `<span val="${skilllistshoot[i][1]}">${skilllistshoot[i][0]}</span></li>`;
  }
  selectstr += '</ul>';

  selectstr += "<ul id='ulother'>";
  for (var i = 0; i < skilllistother.length; i++) {
    let sub = '#ulother' + i;
    selectstr +=
      `<li style='display:block;'><button af='ulother' onclick='DelSkillsub(this);'>Del (${skilllistother[i][1]})</button>` +
      `<span val="${skilllistother[i][2]}">${skilllistother[i][0]}</span></li>`;
  }
  selectstr += '</ul>';
  selectstr +=
    "<button onclick='Save_Skills();'>Apply Special Changes</button><span> Force new free space → <input id='useNewAddr' type='checkbox'> (avoid unless needed)</span><br>";
  selectstr +=
    '<div><span>Special add notes<br>The 7-class skill index uses 2*7=0x0E bytes; Special Shot max uses 0x12 bytes.<br>A generic non-shot special index uses 0x0A bytes.' +
    '<br>Single-person special max uses 0x1C bytes (for duo special, write 0xFF in the 2nd byte).<br>Forcing generic index may crash the game.<br>Generic index bytes: 01 02 03 04 05 06 81 82 83 84 00' +
    '<br>Main skill switch points to the index of the 7 classes.<br>Index 00 00 means no special.<br>If index != 00 00, it jumps and reads special code.' +
    '<br>*Force new free space: fixes some hacks where new special shots don’t work.</span></div>';
  $('#SkillEdit').html(str + selectstr);
}
var Team_Formation = 0x3bac2; //阵型战术
var Formation_Str = [
  '4:3:3 ',
  '4:4:2',
  '3:5:2',
  'Brazilian Formation',
  'Normal',
  'Pressing',
  'Counterattack',
];
var team_da = [
  '00',
  '01',
  '02',
  '03',
  '10',
  '11',
  '12',
  '13',
  '20',
  '21',
  '22',
  '23',
];
var teamlist = [
  'SaoPaulo Team',
  'Nankatsu Team',
  'Japan Team',
  'Stage 01 Fluminense',
  'Stage 02 Corinthians',
  'Stage 03 Grêmio',
  'Stage 04 Palmeiras',
  'Stage 05 Santos',
  'Stage 06 Flamengo',
  'Stage 07 Kunimi',
  'Stage 08 Akita Commercial',
  'Stage 09 Ritsuha', // 立波: kept phonetic
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
  'Stage 22 Korea',
  'Stage 23 Vasco da Gama',
  'Stage 24 Poland',
  'Stage 25 England',
  'Stage 26 Soviet',
  'Stage 27 France',
  'Stage 28 Mexico',
  'Stage 29 Italy',
  'Stage 30 Netherlands',
  'Stage 31 Argentina',
  'Stage 32 West Germany',
  'Stage 33 Brazil',
  'Stage 34 Brazil (Lower)',
];
function setteam_da_str() {
  for (var i = 0; i < team_da.length; i++) {
    team_da[i] =
      team_da[i] +
      ' ' +
      Formation_Str[parseInt(team_da[i][0], 16) + 4] +
      '_' +
      Formation_Str[parseInt(team_da[i][1], 16)];
  }
}
setteam_da_str();

var abilitStr = [
  'Shot:',
  'Pass:',
  'Dribble:',
  'Block:',
  'Tackle:',
  'Intercept:',
  'Low Shot:',
  'Low Pass:',
  'Low Trap:',
  'Low Let-through:',
  'Low Controlled Clear:',
  'Low Uncontrolled Clear:',
  'Low Ball Challenge:',
  'Low Interception:',
  'High Shot:',
  'High Pass:',
  'High Trap:',
  'High Let-through:',
  'High Controlled Clear:',
  'High Uncontrolled Clear:',
  'High Ball Challenge:',
  'High Interception:',
];
var abilitGKStr = [
  'Stamina:',
  'Pass:',
  'Catching:',
  'Punching:',
  'Vs Shots:',
  'Vs Dribbles:',
  'Low Rush:',
  'High Claim:',
];
var player_data_ab =
  '0=8,1=8,2=8,3=9,4=9,5=9,6=9,7=10,8=10,9=10,10=11,11=11,12=11,13=12,14=12,15=12,16=13,17=13,18=13,19=14,20=14,21=14,22=15,23=15,24=16,25=16,26=17,27=17,28=18,29=18,30=18,31=19,32=20,33=20,34=21,35=21,36=22,37=22,38=23,39=24,40=24,41=25,42=26,43=26,44=27,45=28,46=29,47=29,48=30,49=31,50=32,51=33,52=34,53=35,54=36,55=37,56=38,57=39,58=40,59=41,60=42,61=43,62=44,63=45,64=47,65=48,66=49,67=51,68=52,69=53,70=55,71=56,72=58,73=59,74=61,75=63,76=65,77=66,78=68,79=70,80=72,81=74,82=76,83=78,84=80,85=82,86=84,87=87,88=89,89=92,90=94,91=97,92=99,93=102,94=105,95=108,96=111,97=114,98=117,99=120,100=123,101=126,102=130,103=133,104=137,105=141,106=145,107=149,108=153,' +
  '109=157,110=161,111=165,112=170,113=175,114=179,115=183,116=186,117=189,118=192,119=195,120=198,121=201,122=204,123=206,124=209,125=211,126=213,127=215,128=217,129=218,130=220,131=221,132=222,133=224,134=225,135=226,136=227,137=228,138=229,139=230,140=231,141=232,142=232,143=233,144=234,145=235,146=235,147=236,148=237,149=237,150=238,151=238,152=239,153=240,154=240,155=241,156=241,157=242,158=243,159=243,160=244,161=244,162=245,163=245,164=246,165=246,166=247,167=247,168=248,169=248,170=248,171=249,172=249,173=250,174=250,175=250,176=251,177=251,178=251,179=252,180=252,181=252,182=253,183=253,184=253,185=253,186=253,187=254,188=254,189=254,190=254,191=255,' +
  '192=255,193=255,194=255,195=255,196=255,197=255,198=255,199=255,200=255,201=255,202=255,203=255,204=255,205=255,206=255,207=255,208=255,209=255,210=255,211=255,212=255,213=255,214=255,215=255,216=255,217=255,218=255,219=255,220=255,221=255,222=255,223=255,224=255,225=255,226=255,227=255,228=255,229=255,230=255,231=255,232=255,233=255,234=255,235=255,236=255,237=255,238=255,239=255,240=255,241=255,242=255,243=255,244=255,245=255,246=255,247=255,248=255,249=255,250=255,251=255,252=255,253=255,254=255,255=255'.split(
    ',',
  );
var player_data_hp =
  '00=400,01=408,02=416,03=424,04=432,05=440,06=448,07=456,08=464,09=482,0A=490,0B=498,0C=506,0D=514,0E=522,0F=530,10=538,11=546,12=554,13=562,14=570,15=578,16=586,17=594,18=602,19=610,1A=618,1B=626,1C=634,1D=642,1E=650,1F=658,20=664,21=670,22=676,23=682,24=688,25=694,26=700,27=706,28=712,29=718,2A=724,2B=730,2C=736,2D=742,2E=748,2F=752,30=758,31=764,32=770,33=776,34=782,35=788,36=794,37=800,38=806,39=812,3A=818,3B=824,3C=830,3D=836,3E=842,3F=848,40=852,41=856,42=862,43=864,44=868,45=872,46=876,47=880,48=884,49=888,4A=892,4B=896,4C=900,4D=904,4E=908,4F=912,50=916,51=920,52=924,53=928,54=932,55=936,56=940,57=944,58=948,59=952,5A=956,5B=960,' +
  '5C=964,5D=968,5E=972,5F=976,60=976,61=976,62=976,63=976,64=976,65=976,66=976,67=976,68=976,69=976,6A=976,6B=976,6C=976,6D=976,6E=976,6F=976,70=976,71=976,72=976,73=976,74=976,75=976,76=976,77=976,78=976,79=976,7A=976,7B=976,7C=976,7D=976,7E=976,7F=976,80=976,81=976,82=976,83=976,84=976,85=976,86=976,87=976,88=976,89=976,8A=976,8B=976,8C=976,8D=976,8E=976,8F=976,90=976,91=976,92=976,93=976,94=976,95=976,96=976,97=976,98=976,99=976,9A=976,9B=976,9C=976,9D=976,9E=976,9F=976,A0=976,A1=976,A2=976,A3=976,A4=976,A5=976,A6=976,A7=976,A8=976,A9=976,AA=976,AB=976,AC=976,AD=976,AE=976,AF=976,B0=976,B1=976,B2=976,B3=976,B4=976,B5=976,B6=976,B7=976,B8=976,' +
  'B9=976,BA=976,BB=976,BC=976,BD=976,BE=976,BF=976,C0=976,C1=976,C2=976,C3=976,C4=976,C5=976,C6=976,C7=976,C8=976,C9=976,CA=976,CB=976,CC=976,CD=976,CE=976,CF=976,D0=976,D1=976,D2=976,D3=976,D4=976,D5=976,D6=976,D7=976,D8=976,D9=976,DA=976,DB=976,DC=976,DD=976,DE=976,DF=976,E0=976,E1=976,E2=976,E3=976,E4=976,E5=976,E6=976,E7=976,E8=976,E9=976,EA=976,EB=976,EC=976,ED=976,EE=976,EF=976,F0=976,F1=976,F2=976,F3=976,F4=976,F5=976,F6=976,F7=976,F8=976,F9=976,FA=976,FB=976,FC=976,FD=976,FE=976,FF=976'.split(
    ',',
  );

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
