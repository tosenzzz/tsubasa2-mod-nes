var ll = console.log();
Number.prototype.hex = function () {
  return this.toString(16).toUpperCase();
};
String.prototype.num = function () {
  return +('0x' + this);
};

function ApplyPatch() {
  var codes = $('#patch_code').val().replace(/;.*/g, '').trim().split('\n');
  codes.forEach((code) => {
    var arr = code.split('=');
    if (arr.length == 2) {
      var addr = Number('0x' + arr[0].trim());
      var vals = arr[1].trim().split(/[,\s]/);
      for (var i = 0; i < vals.length; i++) {
        NesHex[addr + i] = +('0x' + vals[i]);
      }
    }
  });
  alertMsg('#isfileload', 'green', 'Patch updated successfully!');
}

// https://www.fontchanger.net
var XX = [' ', 'tsu', 'ba', 'sa', 'le', 'nn', 'ar', 'li', 'ma', 'ri', 'ni']
  .concat(['ra', 'tt', 'il', 'mb', 'is', 'ta', 'ha', 'in', 'on', 'la', 'be'])
  .concat(['ki', 'shi', 'da', 'na', 'ka', 'ya', 'mo', 'su', 'gi', 'mi'])
  .concat([' ', '!', '"', 'za', 'wa', 'zu', 'no', "'", 'ga', 'ou', 'it'])
  .concat(['so', ',', '-', '.', 'chi', 'ei', 'ro', 'os', '0', '1', '2', '3'])
  .concat(['4', '5', '6', '7', '8', '9', '+', 'tz', '?', '(', 'A', 'B'])
  .concat(['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'])
  .concat(['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'w'])
  .concat(['ⒼⓄ', '∆', 'er', 'st', 've', 'a', 'b', 'c', 'd', 'e', 'f', 'g'])
  .concat(['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'])
  .concat(['t', 'u', 'v', ':', 'x', 'y', 'z', 'de', '~', 'lo', 'sc', 'al'])
  .concat([' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'N', 'K'])
  .concat(['M', 'P', 'L', 'S', 'U', 'V', 'W', 'Y', '..', '■']);
function findAllIndexCombos(str) {
  const n = str.length;
  const memo = new Map(); // i -> [ [idx,...], ... ]
  function dfs(i) {
    if (i === n) return [[]];
    if (memo.has(i)) return memo.get(i);

    const res = [];
    for (let idx = 0; idx < XX.length; idx++) {
      const s = XX[idx];
      if (!s || s.length === 0) continue;
      if (str.startsWith(s, i)) {
        for (const tail of dfs(i + s.length)) {
          res.push([idx, ...tail]);
        }
      }
    }
    memo.set(i, res);
    return res;
  }
  // (dfs(0) || []).forEach(v => {
  //     console.log(v, v.map(w => X[w]).join(''));
  // })
  return dfs(0);
}

function SearchInCHR(prefix) {
  var searchRs = $('#' + prefix + 'Rs');
  var str = $('#' + prefix + 'Txt').val();
  var cnt = $('#' + prefix + 'Cnt');
  var lim = +$('#' + prefix + 'Limit').val() || 999;
  var arr = findAllIndexCombos(str);
  searchRs.empty();
  if (!arr.length) {
    cnt.text('Not found');
    cnt.css('color', 'red');
    return;
  }
  arr = arr.filter((v) => v.length <= lim);
  if (arr.length > 10) {
    cnt.text('Too many result: ' + arr.length);
    cnt.css('color', 'red');
    return;
  }
  cnt.text(`Found ${arr.length} result`);
  cnt.css('color', 'green');
  var draw = (tts, eid) => {
    var data = [];
    for (var i = 0; i < tts.length; i++) {
      var tileIndex = Number('0x' + tts[i]);
      var tileOffset = 262160 + tileIndex * 16;
      var tile = currentData.slice(tileOffset, tileOffset + 16);
      data.push(tile);
    }
    drawClickedTile(data, eid);
  };
  arr.forEach((v, i) => {
    v = v.map((x) => x.toString(16));
    var rad = $(`<input type="radio" name="rad_${prefix}">`)
      .attr('id', `rad_${prefix}_${i}`)
      .val(JSON.stringify(v));

    var canvas = $(`<canvas style="margin:0 10px;"></canvas>`);
    var lbl = $(`<label for="rad_${prefix}_${i}"></label>`);
    lbl.append([canvas, v.join(' ')]);
    searchRs.append([rad, lbl, ` <br>`]);
    draw(v, canvas[0]);
  });
}

var SRR = { txt: '', rs: [] };
function SearchInRom() {
  var cnt = $('#searchRomCnt');
  (SRR = { txt: '', rs: [] }), cnt.text('');
  var hasEndChr = $('#has_end_char').is(':checked');
  var str = $('input[name="rad_search"]:checked').val();
  if (!str) return;
  var edvalue = JSON.parse(str).map((v) => Number('0x' + v));
  if (hasEndChr) edvalue.push(0xfc);
  SRR.txt = edvalue;
  var okbool = false;
  for (var i = 0; i < NesHex.length; i++) {
    for (var w = 0; w < edvalue.length; w++) {
      if (NesHex[i + w] != edvalue[w]) {
        okbool = false;
      }
    }
    if (okbool == true) {
      SRR.rs.push(i);
    }
    okbool = true;
    if (SRR.rs.lenght > 10) break;
  }
  if (!SRR.rs.length) {
    cnt.text('Not found');
    cnt.css('color', 'red');
    return;
  }
  if (SRR.rs.length > 10) {
    cnt.text('Too many result: ' + SRR.rs.length);
    cnt.css('color', 'red');
    return;
  }
  cnt.text(
    `Found ${SRR.rs.length} result: ${SRR.rs.map((v) => v.toString(16))}`,
  );
  cnt.css('color', 'green');
}

function ReplaceText() {
  var hasEndChr = $('#has_end_char').is(':checked');
  var str = $('input[name="rad_replace"]:checked').val();
  if (!str) {
    alertMsg('#isfileload', 'red', 'Please text for replace!');
    return;
  }
  if (!SRR.rs.length) {
    alertMsg('#isfileload', 'red', 'Please search text in ROM!');
    return;
  }
  var edvalue = JSON.parse(str).map((v) => Number('0x' + v));
  if (hasEndChr) edvalue.push(0xfc);
  if (edvalue.length > SRR.txt.length) {
    alertMsg('#isfileload', 'red', 'Replace text langer than Search text!');
    return;
  }
  SRR.rs.forEach((edindex) => {
    for (var i = 0; i < edvalue.length; i++) {
      NesHex[edindex + i] = edvalue[i];
    }
  });
  alertMsg('#isfileload', 'green', 'Replace successful!');
}

// Chữ => Vị trí (あか => A1 A2)
var HiraMap = {};
var HiraTbl = [
  'あかさたなはまらがざばぱや',
  'いきしちにひみりぎじびぴゆ',
  'うくすつぬふむるぐずぶぷよ',
  'えけせてねへめれげぜべぺわ',
  'おこそとのほもろごぞぼぽ',
];
var colLabels = '123456789ABCD'.split('');
const rowLabels = 'ABCDE'.split('');
for (let row = 0; row < HiraTbl.length; row++) {
  const cols = HiraTbl[row].split('');
  for (var col = 0; col < cols.length; col++) {
    HiraMap[cols[col]] = rowLabels[row] + colLabels[col];
  }
}

// Vị trí -> Chữ (A1 A2 => A F)
var AbMap = {};
const AbTbl = [
  'A F K P U Z e j o t y 4 9',
  'B G L Q V a f k p u z 5 0',
  'C H M R W b g l q v 1 6 +',
  'D I N S X c h m r w 2 7 ,',
  'E J O T Y d i n s x 3 8',
];

for (let row = 0; row < AbTbl.length; row++) {
  const cols = AbTbl[row].replace(/\s/g, '').split('');
  for (var col = 0; col < cols.length; col++) {
    AbMap[rowLabels[row] + colLabels[col]] = cols[col];
  }
}

document.getElementById('pwdFile').addEventListener('change', function (event) {
  pwdData = '';
  const file = event.target.files[0];
  if (!file) return;
  if (file.type !== 'text/plain') {
    alert('Chỉ chấp nhận file .txt');
    return;
  }
  const reader = new FileReader();
  reader.onload = function (e) {
    $('#pwdTxt').val(e.target.result);
  };
  reader.readAsText(file, 'utf-8');
});

function convertHira() {
  var pwdTxt = $('#pwdTxt').val();
  var pwdOut = [];
  for (var r of pwdTxt.split('\n')) {
    r = r.trim();
    if (r.length == 24) {
      var x = [];
      r = r.replace(/\s/g, '');
      x.push(r.substr(0, 2));
      r = r.substr(2, r.length);
      r.split('').forEach((v) => x.push(HiraMap[v] || v));
      pwdOut.push(x.join(' '));
    } else if (r.length == 56) {
      var x = [];
      r = r.split(' ');
      r.forEach((v, i) => {
        x.push(AbMap[v] || v);
        [0, 5, 10, 15].includes(i) && x.push(' ');
      });
      pwdOut.push(x.join(''));
    } else {
      pwdOut.push(r);
    }
  }
  $('#pwdTxt').val(pwdOut.join('\n'));
}

function copyDivContent() {
  const cp = $('#copy');
  const el = $('#pwdTxt');
  navigator.clipboard
    .writeText(el.val())
    .then(() => {
      cp.text('Copied...');
      setTimeout(() => cp.text('Copy'), 2000);
    })
    .catch((err) => {
      console.error('Lỗi khi copy: ', err);
      alert('Không thể copy.');
    });
}

function LoadAllPatch() {
  let sl = $('#patchList');
  CUS_PATCH.forEach((v, i) => {
    sl.append(`<option value="${i}">${v[0]}</option>`);
  });
  $('#patch_code').val(CUS_PATCH[0][1]);
}

function PatchChanged() {
  $('#patch_code').val(CUS_PATCH[$('#patchList').val()][1]);
}
