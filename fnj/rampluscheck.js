function ramcheck2(dz, Hex) {
  var bz1 = Hex[dz];
  var bz2 = Hex[dz + 1];
  bzd = 0x18000 + bz2 * 0x100 + bz1 + 0x10;
  return bzd;
}

function ramcheck(dz, Hex) {
  var bz1 = Hex[dz];
  var bz2 = Hex[dz + 1];
  ///////////////////////////////////////////////
  var bzd;
  // Shot background: 0x18000 + bz2 * 0x100 + bz1 + 0x10;
  // #region 判断地址类型
  if (bz2 == 0xbb || bz2 == 0xbc || bz2 == 0xba) {
    bzd = 0x30000 + bz2 * 0x100 + bz1 + 0x10;
  } else {
    var obd = 0;
    if (IsCn) {
      switch (toHex16(bz2).substr(0, 1)) {
        case 'B':
        case 'F':
          obd = 0x30000;
          break;
        case '5':
        case '6':
          obd = 0x73000;
          break;
        default:
          obd = 0x30000;
          break;
      }
      bzd = obd + bz2 * 0x100 + bz1 + 0x10;
    } else {
      switch (toHex16(bz2).substr(0, 1)) {
        case 'B':
        case 'F':
          obd = 0x30000;
          break;
        case '7':
        case '6':
        case '5':
          obd = 0x4cc0;
          break;
      }
      var coddz = 0;
      if (obd == 0x4cc0) {
        if (Ram4Cc0) {
          switch (toHex16(bz2)) {
            case '60':
              coddz = 0x4cc0 + bz1;
              break;
            case '61':
              coddz = 0x4dc0 + bz1;
              break;
            case '62':
              coddz = 0x4ec0 + bz1;
              break;
            case '63':
              coddz = 0x4fc0 + bz1;
              break;
            case '64':
              coddz = 0x50c0 + bz1;
              break;
            case '65':
              coddz = 0x51c0 + bz1;
              break;
            case '66':
              coddz = 0x52c0 + bz1;
              break;
            case '67':
              coddz = 0x53c0 + bz1;
              break;
            case '68':
              coddz = 0x54c0 + bz1;
              break;
            case '69':
              coddz = 0x55c0 + bz1;
              break;
            case '6A':
              coddz = 0x56c0 + bz1;
              break;
            case '6B':
              coddz = 0x57c0 + bz1;
              break;
            case '6C':
              coddz = 0x58c0 + bz1;
              break;
            case '6D':
              coddz = 0x59c0 + bz1;
              break;
            case '6E':
              coddz = 0x5ac0 + bz1;
              break;
            case '6F':
              coddz = 0x5bc0 + bz1;
              break;
            case '70':
              coddz = 0x5cc0 + bz1;
              break;
            case '71':
              coddz = 0x5dc0 + bz1;
              break;
            case '72':
              coddz = 0x5ec0 + bz1;
              break;
            case '73':
              coddz = 0x5fc0 + bz1;
              break;
          }
        }
        if (Ram5000) {
          switch (toHex16(bz2)) {
            case '50':
              coddz = 0x4cc0 + bz1;
              break;
            case '51':
              coddz = 0x4dc0 + bz1;
              break;
            case '52':
              coddz = 0x4ec0 + bz1;
              break;
            case '53':
              coddz = 0x4fc0 + bz1;
              break;
            case '54':
              coddz = 0x50c0 + bz1;
              break;
            case '55':
              coddz = 0x51c0 + bz1;
              break;
            case '56':
              coddz = 0x52c0 + bz1;
              break;
            case '57':
              coddz = 0x53c0 + bz1;
              break;
            case '58':
              coddz = 0x54c0 + bz1;
              break;
            case '59':
              coddz = 0x55c0 + bz1;
              break;
            case '5A':
              coddz = 0x56c0 + bz1;
              break;
            case '5B':
              coddz = 0x57c0 + bz1;
              break;
            case '5C':
              coddz = 0x58c0 + bz1;
              break;
            case '5D':
              coddz = 0x59c0 + bz1;
              break;
            case '5E':
              coddz = 0x5ac0 + bz1;
              break;
            case '5F':
              coddz = 0x5bc0 + bz1;
              break;
            case '60':
              coddz = 0x5cc0 + bz1;
              break;
            case '61':
              coddz = 0x5dc0 + bz1;
              break;
            case '62':
              coddz = 0x5ec0 + bz1;
              break;
            case '63':
              if (toHex16(bz1).substr(0, 1) < 5) {
                coddz = 0x5fc0 + bz1;
              } else {
                coddz = 0xc600 + bz1 - 0x50;
              }
              break;
            case '64':
              coddz = 0xc6b0 + bz1;
              break;
            case '65':
              coddz = 0xc7b0 + bz1;
              break;
            case '66':
              coddz = 0xc8b0 + bz1;
              break;
            case '67':
              coddz = 0xc9b0 + bz1;
              break;
            case '68':
              coddz = 0xcab0 + bz1;
              break;
            case '69':
              coddz = 0xcbb0 + bz1;
              break;
            case '6A':
              coddz = 0xccb0 + bz1;
              break;
            case '6B':
              coddz = 0xcdb0 + bz1;
              break;
            case '6C':
              coddz = 0xceb0 + bz1;
              break;
            case '6D':
              if (toHex16(bz1).substr(0, 1) < 5) {
                coddz = 0xcfb0 + bz1;
              } else {
                coddz = 0xf010 + bz1 - 0x60;
              }
              break;
            case '6E':
              coddz = 0xf0b0 + bz1;
              break;
            case '6F':
              coddz = 0xf1b0 + bz1;
              break;
            case '70':
              coddz = 0xf2b0 + bz1;
              break;
            case '71':
              coddz = 0xf3b0 + bz1;
              break;
            case '72':
              coddz = 0xf4b0 + bz1;
              break;
            case '73':
              coddz = 0xf5b0 + bz1;
              break;
            case '74':
              coddz = 0xf6b0 + bz1;
              break;
            case '75':
              coddz = 0xf7b0 + bz1;
              break;
            case '76':
              coddz = 0xf8b0 + bz1;
              break;
            case '77':
              coddz = 0xf9b0 + bz1;
              break;
            case '78':
              coddz = 0xfab0 + bz1;
              break;
            case '79':
              coddz = 0xfbb0 + bz1;
              break;
            case '7A':
              coddz = 0xfcb0 + bz1;
              break;
            case '7B':
              coddz = 0xfdb0 + bz1;
              break;
            case '7C':
              coddz = 0xfeb0 + bz1;
              break;
            case '7D':
              if (toHex16(bz1).substr(0, 1) < 5) {
                coddz = 0xffb0 + bz1;
              } else {
                coddz = 0x119c0 + bz1 - 0x60;
              }
              break;
            case '7E':
              coddz = 0x11a60 + bz1;
              break;
            case '7F':
              coddz = 0x11b60 + bz1;
              break;
          }
        }

        if (Ram512) {
          coddz = 0x60000 + bz2 * 0x100 + bz1 + 0x10;
        }

        if (RamNew512) {
          coddz = 0x78000 + bz2 * 0x100 + bz1 + 0x10;
        }

        if (RamCn768) {
          switch (toHex16(bz2)) {
            case '60':
              coddz = 0x4fb0 + bz1;
              break;
            case '61':
              coddz = 0x50b0 + bz1;
              break;
            case '62':
              coddz = 0x51b0 + bz1;
              break;
            case '63':
              coddz = 0x52b0 + bz1;
              break;
            case '64':
              coddz = 0x53b0 + bz1;
              break;
            case '65':
              coddz = 0x54b0 + bz1;
              break;
            case '66':
              coddz = 0x55b0 + bz1;
              break;
            case '67':
              coddz = 0x56b0 + bz1;
              break;
            case '68':
              coddz = 0x57b0 + bz1;
              break;
            case '69':
              coddz = 0x58b0 + bz1;
              break;
            case '6A':
              coddz = 0x59b0 + bz1;
              break;
            case '6B':
              coddz = 0x5ab0 + bz1;
              break;
            case '6C':
              coddz = 0x5bb0 + bz1;
              break;
            case '6D':
              coddz = 0x5cb0 + bz1;
              break;
            case '6E':
              coddz = 0x5db0 + bz1;
              break;
            case '6F':
              coddz = 0x5eb0 + bz1;
              break;
            default:
              coddz = 0x73000 + bz2 * 0x100 + bz1 + 0x10;
              break;
          }
        }

        if (Is1v32) {
          coddz = bz2 * 0x100 + bz1 + 0x10;
        }

        bzd = coddz;
      } else {
        bzd = 0x30000 + bz2 * 0x100 + bz1 + 0x10;
      }
    }
  }
  //Ldcode.GetFormation(Hex, bzd, termxing, termzhanshu);
  var zzdz = bzd; // + 9;
  return zzdz;
}
