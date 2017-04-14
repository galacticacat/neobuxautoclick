console.log("content script of neobux autoclick plugin is loaded");

//sample ad element in neobux
//<div id="da1a" style="height:50px;font-size:12px;" class="f_r">
//    <div id="tg_1" class="adfu" style="text-overflow:hidden;overflow:hidden;white-space:nowrap;padding:2px;padding-left:3px;padding-right:3px;width:195px;">
//        <a id="tga_1" href="javascript:void(0);" onkeydown="return false;" tabindex="-1" class="f_r" style="text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-weight:normal;font-size:13px;color:#00ac00;height:17px;line-height:17px;color:#fff;" onfocus="blur()" oncontextmenu="return false;">Most Trusted Top 10 PTC</a>
//    </div>
//    <div style="font-size:11px;color:#444;padding:2px;" id="desc_1">:::::::::Update Daily :::::::: ::::::::Payment Proofs ::::::&nbsp;</div>
//</div>
//<div id="da1b" style="display:none;height:68px;" onclick="clr('1');ul=0">
//    <div id="da1d" style="position:absolute;text-align:center;font-size:20px;font-weight:bold;color:#ccc;width:201px;height:68px;vertical-align:middle">Click the red dot</div>
//    <span id="da1c" style="position:absolute;z-index:9">
//        <a href="http://www.neobux.com/v/?a=l&amp;l=2O44B99AA9C49FF38O81983O8E4518B67A6651O16725C662AA72BODOA76O16O25F77E9D9838D6A5D34629493O5EC373DF535766AF6E8195CED7B799O878DBAO9" id="l1" target="_blank" onkeydown="return false;" tabindex="-1" onfocus="blur()" oncontextmenu="return false;" onclick="if((ul*1)<10) jQuery.ajax({url: '/v/h/'});">
//            <img src="https://www.neobux.com/imagens/badge_a1.gif" style="z-index:-99" width="16" height="16" border="0" id="i1" onclick="gg[1]=1;img0('1');">
//        </a>
//    </span>
//</div>


var daa = [];

$("div[id*='da']").each(function () {
  ida = $(this).attr('id');
  if (ida.charAt(ida.length - 1) == 'a') {
    if ($(this).children(".ad0").length == 0) {
      dab = $(this).next();
      idb = dab.attr('id');
      if (idb && idb.charAt(idb.length - 1) == 'b') {
        var ab = {};
        ab.a = $(this);
        ab.b = dab;
        daa.push(ab);
      }
    }
  }
});

function adpriceclick() {
    var ap = $("a#ap_h");
    if (ap.length > 0) {
      ap[0].click();
      setTimeout(adpriceclick, 20000);     
    }
}

function autoclickad() {
  ab = daa.pop();
  if (ab) {
    ab.a.trigger("click");
    ab.b.find("img").click();
    setTimeout(autoclickad, 30000);
  } else {
    console.log("all ad clicked well");
    adpriceclick();
  }
}

if (daa.length > 0) {
  console.log("let's auto click " + daa.length + " ads ");
  setTimeout(autoclickad, 10000);
} else {
  console.log("no click ads available now");
  adpriceclick();
}

function closead() {
  var ad = $("td.f_b:contains('Advertisement validated')");
  if (ad.length > 0) { 
    var display = ad.parent().parent().parent().parent().parent().parent().parent()[0].style.display;
    if (display == "none") {
      setTimeout(closead, 1000);
    } else {
      window.opener='x';
      window.close();
    }
  }
}

closead();
