// import { readFileSync } from "node:fs";

// const text = readFileSync("./krrj.txt", { encoding: "utf8" });
// const list = text.split("\n").filter(item => !!item);
const l1 = [
  "捧着风的少女",
  "深爱何来释怀",
  "暖南倾绿",
  "百鲤汐",
  "钟时陌",
  "顾槿寒",
  "三悲未暖",
  "柠檬味的大海",
  "花香般的忧伤",
  "恬淡春风",
  "柏子晩",
  "穿透心灵的冰",
  "风沙入眼",
  "尺素",
  "窗外春光煦煦",
  "茶叶奈子",
  "远方的形状",
  "你是人间盛望",
  "纽约的冬天天很蓝",
  "风安了",
  "清风与鹿",
  "东篱畔",
  "篱也不篱",
  "眉目里",
  "夏天吃了春天",
  "海棠才谢",
  "我不知南风意",
  "满栀",
  "东山月缺",
  "拥抱往事",
  "风之乐",
  "抹绿",
  "寻见",
  "香椿丛林",
  "素手浣椛",
  "猫扑风铃",
  "清新少女贩卖机",
  "故山犹平",
  "你我将岁月两清",
  "田园橘子",
  "诅咒泪在飙",
  "纨形鱼",
  "青衣狂士",
  "我在等云",
  "顾念心安",
  "予尔嘉音",
  "词作筠箫",
  "小唐唐三",
  "始故久",
  "十原故里",
  "墨初暮雪",
  "雨令咸心",
  "慕篱的涵潋",
  "是沉年阿",
  "懒风荡秋千",
  "苏古笃",
  "一纸枕书",
  "楠暮柚",
  "森鹿姑娘",
  "寒兮浅忆",
  "尤物少女",
  "森屿麋鹿",
  "拉扯四季",
  "萤火眠眠",
  "稍尽春風",
  "木偶的悲伤",
  "我的她貌美如花",
  "喜爱弄人",
  "引体向北",
  "慕青子言",
  "平民路线",
  "梓卿落",
  "体温与鹿",
  "令我空欢喜",
  "稍尽春风",
  "漫过岁月",
  "花辞树",
  "何奈若兮",
  "与云和月",
  "碧叶紫竹",
  "苍了夏靡",
  "萧氏忆中情",
  "言言言撄宁",
  "留下的温存",
  "等夏天等秋天",
  "雾雨魔法店",
  "划一舟意中人",
  "半度微凉",
  "风居住的街道",
  "今天叫可可",
  "犹如候鸟",
  "相思落无声",
  "风凉",
  "蝉音弥夏",
  "树瑶风",
  "柠檬味拥抱",
  "木色冰琉璃",
  "华盈寂烟",
  "南湾不秋",
  "怃青橙",
  "如山中清风",
  "落日海湾",
  "春野游記",
  "叶子风",
  "风弥漫了夏天",
  "言清欢",
  "情怀如诗",
  "远处的云朵",
  "邮风少女",
  "薄荷撞可乐",
  "人间月色三分",
  "夏初花未谢°",
  "往时风情",
  "柏木",
  "柚子味的诗",
  "晨曦幻雨",
  "灑落壹地的陽光",
  "季夏第三月",
  "初遇在故事开头",
  "汀烟",
  "春意正浓",
  "千千晚星",
  "夏有乔木",
  "星河",
  "一米阳光°几度温暖",
  "浅笑轻吟梦一曲",
  "何所夏凉",
  "旅行箱和梦想",
  "白茶相伴",
  "七十二街",
  "浅夏袭长裙落地",
  "晴海",
  "少女的秘密",
  "空把光阴负",
  "北以晨安",
  "风中诗",
  "惆怅你是南山",
  "云野.",
  "月影疏桐",
  "南有嘉鱼",
  "山不语",
  "捧着风的少女",
  "淡淡的味道",
  "猫扑风铃",
  "梵星",
  "一枕庭前雪",
  "缡川",
  "西芹百合",
  "古韵千秋",
  "偷得浮生",
  "陌颜",
  "初遇见",
  "绾起梨花月",
  "九夏微凉",
  "茉莉情花",
  "醉夏",
  "时光荏苒",
  "我本浪人",
  "莫离莫弃",
  "人间樱桃",
  "树上的向日葵",
  "倚梅寻鹤",
  "风息雾散",
  "谷风",
  "蓝汐",
  "光风霁月",
  "只剩余生",
  "灯初上夜未央。",
  "染霜花",
  "初夏少女",
  "继以夏澈于心",
  "花开无言",
  "清阙酒歌",
  "遇见之夏",
  "等一不归人",
  "槐夏风清",
  "薰衣草的夏天",
  "蝶き梦",
  "远赴人间",
  "树摇风",
  "深蓝冷雨",
  "暖南倾绿",
  "山川湖海",
  "森里伊人",
  "捧一束野菊",
  "我打江南走过",
  "泡沫之夏",
  "忧忧草",
  "北澜",
  "初拥",
  "凉窗熄夏",
  "云柯",
  "岁月反驳",
  "扶云采星",
  "人海孤鸿",
  "寄余生",
  "夏夜的琉璃",
  "回眸最初",
  "你是晚来风",
  "如梦初醒的夏天",
  "淡蓝色的经典",
  "予我七暖",
  "入花庭和一曲",
  "半城烟沙﹉盛夏",
  "九夏ペ微凉",
  "你笑的好甜、",
  "七颜初夏i",
  "凉秋瑾言",
  "彼岸花似海",
  "半夏微澜ぺ",
  "彩虹色的爱恋",
  "晴天飛雪 ﹌",
  "冰激凌圣代≯",
  "十九之夏",
  "凡尘如梦",
  "半生沉浮",
  "岁月无措流光浅",
  "指间、遗落旧时光",
  "凉城听暖",
  "最美不过初阳",
  "后来的我们",
  "一抹晚夏",
  "似梦の年华",
  "海是鱼的羁绊",
  "盛夏⌒流萤追着风",
  "柠檬仔℃",
  "梦忆晨望",
  "秋天@回忆书",
  "木の语",
  "樱花☆遍地",
  "呆檬",
  "季节温暖眼瞳",
  "薄荷凉",
  "蒹葭",
  "简若",
  "清风疏影",
  "夜未央゛樱花落ζ",
  "恋竹姑娘",
  "橘子风车",
  "颜漓@半夏",
  "浮誇了舊時光",
  "素衣风尘叹",
  "紫夜﹏櫻雨",
  "凉雨初夏",
  "回忆只能等候",
  "木木的菊花",
  "挽心",
  "清风入梦",
  "木槿",
  "雨后的告白",
  "夏树繁花",
  "晨曦慕雪",
  "苦茶淡淡香¤",
  "晴天，微心雨恋",
  "安锦流年",
  "纸短情长",
  "那年的盛夏時光",
  "墨Se天空",
  "你和我的时光",
  "半度微涼ら",
  "静侯、一切安好",
  "藍Se雨蝶",
  "清晨淡雾◎",
  "夏有森光若流苏",
  "猫街小巷浅时光",
  "花瓣の花的语言",
  "薄荷味白衬衫",
  "微光迷失的尘夏",
  "凉薄情人",
  "九月阳光",
  "柠夏初开",
  "岁月并非如歌",
  "橙亍",
  "柠檬草的味道",
  "花开宿语",
  "顾二笙",
  "缺友",
  "信仰",
  "稳妥",
  "暖伴",
  "旧颜",
  "花逝",
  "荒妙",
  "酸果",
  "梦你",
  "沫昔",
  "千寻",
  "牵绊",
  "褪色",
  "妄生",
  "初雪",
  "惡魔",
  "惊鸿",
  "拂袖°",
  "嘴硬",
  "叙詓",
  "恭瑾",
  "不眠",
  "森屿",
  "余北",
  "两望烟水间",
  "你勾去我的魂",
  "半字浅眉-",
  "还要心动几次",
  "山后别相逢",
  "墨染",
  "季夏第三月",
  "酒几许",
  "让我再睡一会儿",
  "浮生皆是梦",
  "偷月亮的猫",
  "风月不等闲",
  "初夏",
  "记得微笑",
  "灵魂的.所在",
  "春在无人处",
  "起梨花月",
  "软气猫",
  "漫长的青春",
  "凉笙",
  "心城以北",
  "嘴角的樱桃汁",
  "吹皱一池春水",
  "人间失格",
  "軟萌少女范",
  "温柔又嚣张",
  "调怅人间几场梦",
  "时光荏苒",
  "坐看云起时",
  "冷暖自知",
  "不烫自然卷",
  "清秋落叶聚还散",
  "眉眼温柔处",
  "你眼里有星星",
  "余光",
  "言清欢",
  "归于平静",
  "攒袋星星",
  "少女适俗韵",
  "风里有诗句",
  "南风向北",
  "以陌",
  "恋你年华",
  "天亮说晚安",
  "鹿港巷口少年归",
  "巴黎左岸",
  "微暖",
  "花开丶看一丝阳光",
  "慾説還咻",
  "惟有时光忆年少ˉ",
  "锁上的光",
  "被神隐藏的-少女",
  "格桑择日绽放",
  "阳光和你、",
  "轻雾山林",
  "荒凉的午夜",
  "梦里花",
  "浮华落满肩头",
  "盛夏已如深秋",
  "温柔懒懒的海风",
  "风浒涟漪",
  "约好的以后。",
  "若久",
  "回忆的沙漏",
  "海以南不再蓝。",
  "夜深人静、",
  "东京蓝调",
  "如花的旋律",
  "凉云暮叶",
  "深夏夜未眠",
  "顺着流萤",
  "夏漠秋雨",
  "等我变成光",
  "眼眸里的阳光",
  "深海苏眉鱼",
  "心房的律动",
  "静若繁花",
  "像是梦环绕爱",
  "远处看不尽的风景",
  "落花随流水",
  "麋鹿少女",
  "晨风拂面",
  "烟雨江南",
  "暮夏、那年开",
  "花开雨落又逢春",
  "只剩下背影",
  "墨落成白",
  "如果你也听说",
  "梦境゜",
  "玫瑰爱人@",
  "冰指、绕温柔",
  "夏末终年",
  "左耳清风。",
  "南笙北执",
  "雾散尽之后",
  "心以被傷",
  "旧时光。",
  "一杯风尘",
  "欲及深海。",
  "茶衣白衫.",
  "卿极可爱矣",
  "任性不任命",
  "傲娇小可耐",
  "苍白的诺言",
  "叛逆的青春",
  "玩命不玩心",
  "欠你的幸福",
  "百变小熊喵",
  "饮一盅浊酒",
  "指間的余煙",
  "捞月亮的人",
  "回首已陌然",
  "只剩下废墟",
  "你知我慢热",
  "反射弧少女",
  "春风暖人心",
  "偏爱你侧脸",
  "爱在天亮前",
  "天杀的可爱",
  "快到碗里来",
  "薀柔尐ㄝ亽",
  "橘子爱果酱",
  "子夜笙歌落",
  "骑马的跳蚤",
  "偷一口草莓",
  "且行且珍惜",
  "无敌小可爱",
  "薇蓝の夏沫",
  "拿月亮下酒",
  "可爱了好久",
  "青鸾萦篱落",
  "甜猫收藏者",
  "提笔书几行",
  "我不是空气",
  "笑脸赢人脉",
  "给糖就不闹",
  "遇见就珍惜",
  "泪沾青衫湿",
  "温柔小女人",
  "奶茶星冰乐",
  "習慣了孤單",
  "柠檬味少女",
  "小梨窝很甜",
  "萝莉收纳盒",
  "执手听风吟",
  "原味少女心",
  "咱继续宠伱",
  "萌面女汉子",
  "北城故人",
  "笑很甜",
  "看见你哭我就想笑",
  "智商都来卖萌了",
  "呼噜怪",
  "小小的萌ブ^O^ッ",
  "喵呜不停",
  "梦在深巷",
  "娇软甜伤",
  "喵星球的大统领",
  "我要打豆豆！",
  "形同陌路",
  "浅凝半夏",
  "我在笑啊！",
  "思念成风",
  "吖呵",
  "倚楼听雨",
  "晴栀°",
  "沒有下一次",
  "哇塞，这是灿鸟！",
  "执伞青衣袖",
  "楼上有只喵",
  "给你一口甜甜",
  "熊抱啵儿",
  "安然①生〆",
  "我来自熊猫星",
  "浅笑安然",
  "番茄你个白薯",
  "迷你仙",
  "采蘑菇的萌宝",
  "换一颗红豆",
  "饮尽盏中余温",
  "爱吃饭团",
  "一只兔球",
  "喵锅先森",
  "软甜啾",
  "软妹快递",
  "要被吃掉哦",
  "可爱一如往常",
  "萌萌的小确幸",
  "猫二妹=",
  "醋溜仙女肉",
  "卡牌的甜心少女",
  "童话里做英雄",
  "塔塔猫",
  "萌美仁",
  "小可爱1号",
  "软粉少女心",
  "牛奶煮软妹",
  "飞天小仙女",
  "香芋萝莉",
  "长颈猫",
  "故人笑赠",
  "春在无人处",
  "余温里的流年",
  "十里温柔",
  "静听年华",
  "偷月亮的猫",
  "叶子说它很孤独",
  "白尾黑猫去旅行",
  "旧人泪予",
  "静若繁花",
  "梦在继续",
  "时光荏苒",
  "还要心动几次",
  "风里有诗句",
  "不烫自然卷",
  "余光",
  "吹皱一池春水",
  "爱与旅与你",
  "南风向北",
  "伊人独醉",
  "故事与酒",
  "言清欢",
  "眉眼温柔处",
  "攒袋星星",
  "嘴角的樱桃汁",
  "你眼里有星星",
  "几封情书",
  "微笑向暖",
  "思念浊成酒酿",
  "山色风月倦",
  "心如深海",
  "深歌浅醉",
  "清风可相许",
  "初夏",
  "冷暖自知",
  "夏朽暖栀",
  "叶落满地",
  "徒醉了清风",
  "温柔又嚣张",
  "等我长大、",
  "山后别相逢",
  "青涩长裙",
  "两望烟水间",
  "恋你年华",
  "安如少年初如梦",
  "以时光为眸",
  "半夏浮生",
  "风月不等闲",
  "季夏第三月",
  "归于平静",
  "远山雾灯",
  "望君安",
  "青衫后",
  "风灯",
  "墨香书晚风",
  "顾二笙",
  "揣着一口袋开心",
  "森屿弥鹿",
  "陶诗韵",
  "星河踏月归",
  "風声",
  "清竹",
  "思慕",
  "潇潇稷",
  "罗衫入怀",
  "粉雾海岸",
  "晚风轻踩云朵",
  "遥寄锦书",
  "神明的储物罐",
  "神原少女",
  "花间一壶酒",
  "余生寄山水",
  "林下默宛",
  "江江",
  "藏情雀",
  "诸般相思",
  "荼靡清寒",
  "夜话剪烛",
  "思归多愁颜",
  "墨上卿枫",
  "妄念相濡",
  "春夏几轮",
  "箫墨",
  "枕寒衾",
  "知迷途",
  "离寂",
  "清笙以年",
  "画中春",
  "月亮上的垂耳兔",
  "思君",
  "密小函",
  "日月与你",
  "云阶杳杳",
  "蓝安若",
  "闲游青川",
  "赫墨里",
  "抖落眉间雪",
  "南风祁鹤",
  "云中雾",
  "烟雨柒柒",
  "善待我自己",
  "最是你容颜",
  "鲸与少年",
  "流桑",
  "勿妄语",
  "花时间的爱╮",
  "无动于衷ぅ",
  "寂夜°",
  "围剿白日梦",
  "遇良人",
  "难过’",
  "万般温柔",
  "蛋炒饭",
  "你在搞笑i",
  "樱玲@",
  "卖萌贩",
  "怪我傻",
  "梦境她城",
  "待你归来",
  "樱花细雨",
  "终无念",
  "楛囗",
  "食妖海狸",
  "清晨的雨",
  "仝忈仝意",
  "青丘。白浅",
  "美丽的你",
  "超人@-",
  "云之遥〆",
  "紫宫初雪",
  "望你安宁",
  "凉意",
  "暖如风",
  "青丘。白浅",
  "大雨滂沱",
  "自由取悦我",
  "岁月飞渡",
  "仝忈仝意",
  "青花墨而本",
  "清晨的雨",
  "落花听雨",
  "伸入了解",
  "梦晓·",
  "樱花细雨",
  "伤口对准你",
  "岁寒伴侣",
  "用命爱你@",
  "畅然心间",
  "心灵盲人",
  "心愿是你",
  "再见不再见",
  "围剿白日梦",
  "媚蝉",
  "最是你容颜",
  "酒肆茶坊",
  "小鹿要飞",
  "樱玲@",
  "渔美人",
  "意浓",
  "遇良人",
  "深情妹",
  "暗夜忧柔",
  "权势乱人心",
  "效恪",
  "薛月灿",
  "凉凉江风",
  "花泪兮",
  "卖萌贩",
  "梦旅鹿人。",
  "晚风岸扶柳",
  "婷雨璇",
  "借我一声",
  "水云孤",
  "我很好",
  "心绪成灾",
  "夜烬",
  "旧识。",
  "只一眼沦陷",
  "恋空杯子",
  "爱人别怕",
  "因为遇见你",
  "那日初相逢",
  "陌年古城",
  "温柔的鬼",
  "半颗心的暖",
  "终无念",
  "轻烟薄雾",
  "未来の遥远",
  "失落情人",
  "孤心匠",
  "青云℡",
  "萌量满满",
  "情寡淡",
  "采茶",
  "浅尝辄止",
  "笛砺前行",
  "相忘江湖",
  "入眉梢",
  "抄录人间",
  "寒衫",
  "我不是太阳身后也无光i",
  "听海的哭泣",
  "蓝海噬心@",
  "万千风景只愿与你",
  "满幕悲凉i",
  "由我来做主",
  "与孤独为友@",
  "夜铅华泪满襟",
  "是够久了我该走了",
  "汨看迣鎅",
  "半边肩膀淋雨",
  "奈何桥路途遥",
  "囚在他城",
  "旧晴天@",
  "将眉眼深藏",
  "南风过境",
  "爱已成舟，无路可退",
  "友人离尽",
  "湿了旧街痛了心i",
  "画一世沉沦送一世迷醉",
  "薄灯少シ",
  "薄情人゜",
  "秋天的丶孤寂",
  "彷徨。",
  "空痕",
  "不及你@",
  "拼凑不回的。",
  "渐行的时光里没有沵ゞ",
  "旧晴天@",
  "学不会的孤独@",
  "再回首方知味",
  "你的灵魂背叛的了你心",
  "悲欢自饮。",
  "浅忆那一抹离伤",
  "浅殇淡淡影寒",
  "泪已成海却未蓝",
  "陌上花开缓缓归",
  "多余の解释。",
  "咽泣 °",
  "披着被单拽天下",
  "唯愿时光清浅",
  "他城之途",
  "记忆碎影。",
  "表面幸畐。",
  "不入他眼",
  "勾画你残缺的愛",
  "南栀向暖",
  "烟花三寂寞了谁",
  "时光在撒谎",
  "我是罪人@",
  "不会挽留i",
  "给我一个理由忘记",
  "爱着爱着就淡了。",
  "忆兮倾此生为伊乆",
  "薄凉之人终不念安。",
  "明知是梦，心却在痛",
  "浅忆〞微微凉╮",
  "扼守回忆。",
  "痛定思痛。",
  "回忆刺穿心脏╮",
  "时光泡沫。",
  "缠绵过后的陌路",
  "再笑乜是伤",
  "花汁染指",
  "时间都去哪儿了",
  "总是太过执着",
  "你若无心我便休",
  "我在灰烬中等你",
  "青衫泪",
  "疚于他",
  "蓝鲸忘了海@",
  "無情的世界無情的你。",
  "你给莪的痛ン你还不起",
  "长安街上旧人冥",
  "浮世凉薄旧城缌结",
  "有时候爱是一种错觉",
  "伤了初冬白了城",
  "凉城梦镜空人心",
  "你能跟她走多远",
  "沧桑的容颜。",
  "两两相忘 ∝",
  "难免辜负谁",
  "余念不残留 @",
  "留不住你的美",
  "假裝很幸福",
  "大声喊我卞傲娇/",
  "旧梦你在我无恙",
  "牵她手走红毯",
  "梦离我很远",
  "眼不融沙丶更不容他",
  "纠结丶",
  "旧情如醉﹌",
  "硬撑多久",
  "凉生永隔三秋梦",
  "未知中的等待",
  "转身，一缕冷香远",
  "入梦毁心。",
  "揪心痛",
  "过失的幸福",
  "旧里迟暮",
];
const model = toModel(l1);

console.log(model);

function toModel(data: string[]) {
  const result = new Set<string>();

  for (const item of [...new Set(data)]) {
    for (let i = item.length; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        result.add(item.slice(j, i));
      }
    }
  }

  return [...result];
}

// function to(model: string[], input = model[Math.floor(Math.random() * model.length)]) {
//   const list = model.filter(item => item.startsWith(input));
//   return list[Math.floor(Math.random() * list.length)]?.replace(input, "") || to(model);
// }

// function to(model: string[], input = model[Math.floor(Math.random() * model.length)]) {
//   const list = model.filter(item => item.startsWith(input) && !item.endsWith(input));
//   if (!list.length) {
//     return input;
//   }

//   return to(model, list[Math.floor(Math.random() * list.length)]);
// }

function to(
  input = model.filter(item => item.length == 1)[
    Math.floor(Math.random() * model.filter(item => item.length == 1).length)
  ]
): string {
  if (!input)
    return "";
  const list = model.filter(
    item => item.startsWith(input) && !item.endsWith(input)
  );
  if (Math.random() < 0.5)
    return to();
  if (!list.length) {
    return "";
  }
  return list[Math.floor(Math.random() * list.length)].slice(
    input.length,
    input.length + 1
  );
}

export default defineEventHandler(async event => {
  setHeader(event, "content-type", "text/html; charset=utf-8");

  let str = "";

  // for (let i = 0; i < 100; i++) {
  //   str += to(str) || chat[Math.floor(Math.random() * chat.length)];
  // }

  while (true) {
    const a = str
      ? to(str)
      : model.filter(item => item.length == 1)[
        Math.floor(Math.random() * model.filter(item => item.length == 1).length)
      ];
    str += a;
    if (!a)
      break;
  }

  return str;
});