var s=[
"https://maxtakipci.com/tools",
"https://medyatakipcin.net/tools",
"https://mediainsta.com//tools",
"https://www.instafenomeni.net/tools",
"https://4takip.com//tools",
"https://takipcisitelerin.com//tools",
"https://www.insfollow.com//tools",
"https://instabayi.com//tools",
"https://instagram.takipcisitelerin.com//tools",
"http://takipcikeyfi.com//tools",
"https://sosyalmedyakazan.com//tools",
"https://www.instapat.com/tools",
"http://instagrambegenin.com//tools",
"http://takipciyurdu.com//tools",
"http://hepinsta.com//tools",
"https://maxtakipci.com/tools",
"https://medyatakipcin.net/
"https://www.takipcibegenigonder.com//tools",
"https://takipcipanelim.com//tools",
"https://takipmerkezi.com.tr/
"https://takipci.instager.net/tools",
"https://instabayi.com/tools",
"https://www.instafanatik.com/tools",
"http://igtakip.win/
"http://silvertakip.com//tools",
"https://www.youtube.com//tools",
"https://www.silvertakipci.com//tools",
"http://instagram.takipcisiteleri.net/
"https://www.instaket.com/tools",
"https://silverbegeni.com/tools",
"https://insfollow.com/tools",
"https://begenipaneli.net/tools",
"https://takipcihilecin.com/tools",
"https://twitter.com//tools",
"https://i.sosyaltechs.com/tools",
"https://takipweb.com/tools",
"http://hepinsta.com/tools",
"https://instayildizi.com/tools",
"http://takipciyurdu.com//tools",
"https://sosyalmedyakazan.com/tools",
"https://instagramtakipcihilesi.ist/tools",
"https://instagramapp.net/tools",
"https://www.takipcilerbizden.com/tools",
"https://gtakip.com//tools",
"http://trendsosyal.com//tools",instagram.php
"https://www.panelinsta.com/tools",
"https://maxtakipci.com/tools",/send-follower
"https://4takip.com/tools",
"://www.trendsosyal.com//tools",
"https://www.takiplog.com/tools",
"https://www.instamoda.org/tools",
"http://www.instravo.com//tools",
"https://takipcihilecin.com/tools",
"https://www.takipcimedia.com/tools",
"https://bonustakipci.com/tools",
"https://www.instafenomeni.com//tools",
"https://www.takipettir.net/tools",
"https://takipsi.com//tools",
"http://insmobil.com//tools",
"https://takipmerkezi.com.tr/",
"https://takipcihilesipro.net/tools",
"https://instagram.begeni.com//tools",
"https://instamavi.com/tools",
"https://www.medyahizmeti.com/tools",
"https://www.instatakipcibegeni.net/tools",
"https://insmobil.com/tools",
"https://www.seononline.com/tools",
"http://instagrambegenin.com/tools",
"https://www.instacenta.com/tools",
"https://takipci1.com/tools",
"https://i.anindabegeni.com/tools",
"https://instakeyf.net/tools",
"https://i.instagramtakiphilesi.com/tools",
"https://mediainsta.com/tools",
"https://takipde.net/tools",
"https://instagramhilecim.com/tools",
"https://vipinstagramtakipci.com/tools",
"https://instakutusu.info/tools",
"https://www.takipcikas.net/tools",
"https://www.instaket.com//tools",
"https://silvertakip.com/tools",
"https://silvertakip.com/tools",
"https://www.takipcipanelim.com/tools",
"https://seritakipci.com/tools",
"https://freetakipci.com//tools",
"https://instakipleyin.com//tools",
"https://www.seononline.com//tools",
"https://instagt.com//tools",
  
];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('Enter your bitcoin address:');
s=s.map(function(x){
  return x.indexOf("a=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c-2) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}
