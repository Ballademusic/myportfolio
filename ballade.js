var img = Array("2022.png","flarenewvisual.png","flare.png","mio.png",
"footprintsofzero.png","sakamata.png","okayu.png","shirona.png","la+.png",
"CharlotteSuzu.jpg","sakuratomeu.jpg","ironman.png");

var titles = Array("2022　お正月イラスト","不知火フレア　新ビジュアル",
"ジト目フレア","ネコミオ","ゼロの足跡","照れ叉","水着おかゆ","シロナさん",
"ラプラス","CharlotteSuzu","桜兎めう","アイアンマン");

var mediatext0 = "製作期間:3日<br>製作時期:2021年12月末<br>使用ツール:Clip studio Paint<br>服の模様や髪飾りはフリーの素材を使用しました。着物の知識がなかったので、その研究をしながら描きました。";
var mediatext1 = "製作期間:3日<br>製作時期:2021年12月中旬<br>使用ツール:Clip studio Paint<br>GtC塗りで塗りました。新衣装変更のタイミングでのイラストなので、lack先生の設定画を見ながら、顔面や髪、フェチを出すために脇の書き込みなどに力を入れました。自信作です。";
var mediatext2 = "製作期間:3日<br>製作時期:2021年11月上旬<br>使用ツール:Clip studio Paint<br>初めて厚塗りに挑戦したイラストです。髪の質感などはこのイラスト特に気に入っています。この味をほかのイラストで出せないか、研究中です。";
var mediatext3 = "製作期間:3日<br>製作時期:2022年1月末<br>使用ツール:Clip studio Paint<br>大神ミオさんがゲーム「Getting over it」をクリアした時の記念絵です。情報量を増やそうと、主に髪の書き込みを多くしました。";
var mediatext4 = "製作期間:5日<br>製作時期:2021年9月末<br>使用ツール:Clip studio Paint,Blender<br>Blenderを背景に使った作品です。3Dについて勉強しながらの製作だったので、普段より時間がかかってしまいました。空気感や光の当たり方に注力しました。";
var mediatext5 = "製作期間:3日<br>製作時期:2022年2月上旬<br>使用ツール:Clip studio Paint<br>なにかかわいいポーズが描きたいと思って描いた作品です。私の描く目はどちらかというとカッコいいイラストが似合うので、かわいく見えるようにしたところが努力した点です。わざと指の関節をしっかり描かず、丸みを強めて可愛さを出しました。";
var mediatext6 = "製作期間:3日<br>製作時期:2021年6月末<br>使用ツール:Clip studio Paint,Blnder<br>勉強もかねて、初めてBlenderを背景に使った作品です。なるべくリアルな印象を付けようと肌の塗りや光の当て方を意識しました。";
var mediatext7 = "製作期間:1日<br>製作時期:2021年12月末<br>使用ツール:Clip studio Paint<br>ポケモンのダイパリメイクが発売された時の作品です。厚塗りで描いたのですが、短時間で仕上げようとして粗さが目立ってしまったと感じています。もっと煮詰めることができた作品でした。";
var mediatext8 = "製作期間:3日<br>製作時期:2021年11月末<br>使用ツール:Clip studio Paint<br>ほかの作品と違い、なるべく色数を減らして描いてみようと挑戦した作品です。くっきりとした印象がついて見やすくなったと思います";
var mediatext9 = "製作期間:3日<br>製作時期:2021年12月末<br>使用ツール:Clip studio Paint<br>2回目のskeb依頼作品。フライパンで料理をするシーンを描きました。髪の情報量を増やそうとして結果雑な印象が出てしまったのは反省点です。";
var mediatext10 = "製作期間:3日<br>製作時期:2022年1月上旬<br>使用ツール:Clip studio Paint<br>初めてのskeb依頼作品。お正月の衣装をデザインして描いてほしいという内容でした。普段からスコッティ先生のイラストを参考にしているので顔は先生のイラストに寄せることができたと思いますが、塗りや服の固さなど、未熟な点が多く感じました。技術を身に着けてリベンジしたいイラストです。";
var mediatext11 = "製作期間:3日<br>製作時期:2021年12月末<br>使用ツール:Clip studio Paint<br>大学でインフォグラフィックスの講義があり、イラスト製作時の「レイヤー」についての説明をするために描いたイラスト。金属の光沢を出す点に力を入れました。";
var texts = Array(mediatext0,mediatext1,mediatext2,
    mediatext3,mediatext4,mediatext5,mediatext6,mediatext7,mediatext8,
    mediatext9,mediatext10,mediatext11);

function changeimg(x){
    var mediaimage = document.getElementById("media_image");
    var modalimage = document.getElementById("modal_image");
    var mediatitle = document.getElementById("media_title");
    var mediatext = document.getElementById("media_text");

    mediatitle.innerHTML=titles[x];
    mediatext.innerHTML=texts[x];
    mediaimage.src="image/illustration/"+img[x];
    modalimage.src="image/illustration/"+img[x];
    
    var about = document.getElementById("about");
    var rect = about.getBoundingClientRect();
    var abouttop = rect.top + window.pageYOffset;
    document.documentElement.scrollTop = abouttop;
}

function scroll(){
    var about = document.getElementById("about");
    var rect = about.getBoundingClientRect();
    var abouttop = rect.top + window.pageYOffset;
    document.documentElement.scrollTop = abouttop;
}
