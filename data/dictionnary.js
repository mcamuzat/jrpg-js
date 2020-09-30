var Dictionnary = {};
Dictionnary.hiraganawords = [
  ["あ", ["a"]],
  ["い", ["i"]],
  ["う", ["u"]],
  ["え", ["e"]],
  ["ん", ["n"]],
  ["お", ["o"]],
  ["か", ["ka"]],
  ["き", ["ki"]],
  ["く", ["ku"]],
  ["け", ["ke"]],
  ["こ", ["ko"]],
  ["さ", ["sa"]],
  ["す", ["su"]],
  ["せ", ["se"]],
  ["そ", ["so"]],
  ["た", ["ta"]],
  ["て", ["te"]],
  ["と", ["to"]],
  ["な", ["na"]],
  ["に", ["ni"]],
  ["ぬ", ["nu"]],
  ["ね", ["ne"]],
  ["の", ["no"]],
  ["は", ["ha"]],
  ["ひ", ["hi"]],
  ["ふ", ["hu"]],
  ["へ", ["he"]],
  ["ほ", ["ho"]],
  ["ま", ["ma"]],
  ["み", ["mi"]],
  ["む", ["mu"]],
  ["め", ["me"]],
  ["も", ["mo"]],
  ["や", ["ya"]],
  ["ゆ", ["yu"]],
  ["よ", ["yo"]],
  ["ら", ["ra"]],
  ["り", ["ri"]],
  ["る", ["ru"]],
  ["れ", ["re"]],
  ["ろ", ["ro"]],
  ["わ", ["wa"]],
  ["を", ["wo", "o"]],
  ["が", ["ga"]],
  ["ぎ", ["gi"]],
  ["ぐ", ["gu"]],
  ["げ", ["ge"]],
  ["ご", ["go"]],
  ["ざ", ["za"]],
  ["じ", ["ji", "zi"]],
  ["ず", ["zu"]],
  ["ぜ", ["ze"]],
  ["ぞ", ["zo"]],
  ["だ", ["da"]],
  ["ぢ", ["zi", "ji", "dzi"]],
  ["づ", ["zu"]],
  ["で", ["de"]],
  ["ど", ["do"]],
  ["ば", ["ba"]],
  ["び", ["bi"]],
  ["ぶ", ["bu"]],
  ["べ", ["be"]],
  ["ぼ", ["bo"]],
  ["ぱ", ["pa"]],
  ["ぴ", ["pi"]],
  ["ぷ", ["pu"]],
  ["ぺ", ["pe"]],
  ["ぽ", ["po"]],
  ["し", ["shi"]],
  ["ち", ["chi"]],
  ["つ", ["tsu"]],
  ["にゃ", ["nya"]],
  ["にゅ", ["nyu"]],
  ["にょ", ["nyo"]],
  ["ちゃ", ["cha"]],
  ["ちゅ", ["chu"]],
  ["ちょ", ["cho"]],
  ["しゃ", ["sha"]],
  ["しゅ", ["shu"]],
  ["しょ", ["sho"]],
  ["きゃ", ["kya"]],
  ["きゅ", ["kyu"]],
  ["きょ", ["kyo"]],
  ["りゃ", ["rya"]],
  ["りゅ", ["ryu"]],
  ["りょ", ["ryo"]],
  ["みゃ", ["mya"]],
  ["みゅ", ["myu"]],
  ["みょ", ["myo"]],
  ["ひゃ", ["hya"]],
  ["ひゅ", ["hyu"]],
  ["ひょ", ["hyo"]],
  ["ぴゃ", ["pya"]],
  ["ぴゅ", ["pyu"]],
  ["ぴょ", ["pyo"]],
  ["びゃ", ["bya"]],
  ["びゅ", ["byu"]],
  ["びょ", ["byo"]],
  ["ぢゃ", ["zya"]],
  ["じゅ", ["zyu"]],
  ["じょ", ["zyo"]],
  ["じゃ", ["ja"]],
  ["じゅ", ["ju"]],
  ["じょ", ["jo"]],
  ["ぎゃ", ["gya"]],
  ["ぎゅ", ["gyu"]],
  ["ぎょ", ["gyo"]],
]
Dictionnary.katakanawords = [
  ["ア", ["a"]],
  ["イ", ["i"]],
  ["ウ", ["u"]],
  ["エ", ["e"]],
  ["オ", ["o"]],
  ["ン", ["n"]],
  ["カ", ["ka"]],
  ["キ", ["ki"]],
  ["ク", ["ku"]],
  ["ケ", ["ke"]],
  ["コ", ["ko"]],
  ["サ", ["sa"]],
  ["ス", ["su"]],
  ["セ", ["se"]],
  ["ソ", ["so"]],
  ["タ", ["ta"]],
  ["テ", ["te"]],
  ["ト", ["to"]],
  ["ナ", ["na"]],
  ["ニ", ["ni"]],
  ["ヌ", ["nu"]],
  ["ネ", ["ne"]],
  ["ノ", ["no"]],
  ["ハ", ["ha"]],
  ["ヒ", ["hi"]],
  ["フ", ["hu", "fu"]],
  ["ヘ", ["he"]],
  ["ホ", ["ho"]],
  ["マ", ["ma"]],
  ["ミ", ["mi"]],
  ["ム", ["mu"]],
  ["メ", ["me"]],
  ["モ", ["mo"]],
  ["ヤ", ["ya"]],
  ["ユ", ["yu"]],
  ["ヨ", ["yo"]],
  ["ラ", ["ra"]],
  ["リ", ["ri"]],
  ["ル", ["ru"]],
  ["レ", ["re"]],
  ["ロ", ["ro"]],
  ["ワ", ["wa"]],
  ["ヲ", ["wo", "o"]],
  ["ガ", ["ga"]],
  ["ギ", ["gi"]],
  ["グ", ["gu"]],
  ["ゲ", ["ge"]],
  ["ゴ", ["go"]],
  ["ザ", ["za"]],
  ["ジ", ["ji"]],
  ["ズ", ["zu"]],
  ["ゼ", ["ze"]],
  ["ゾ", ["zo"]],
  ["ダ", ["da"]],
  ["ヂ", ["zi"]],
  ["ヅ", ["zu"]],
  ["デ", ["de"]],
  ["ド", ["do"]],
  ["バ", ["ba"]],
  ["ビ", ["bi"]],
  ["ブ", ["bu"]],
  ["ベ", ["be"]],
  ["ボ", ["bo"]],
  ["パ", ["pa"]],
  ["ピ", ["pi"]],
  ["プ", ["pu"]],
  ["ペ", ["pe"]],
  ["ポ", ["po"]],
  ["シ", ["si", "shi"]],
  ["チ", ["ti", "chi"]],
  ["ツ", ["tu","tsu"]],
  ["ニャ", ["nya"]],
  ["ニュ", ["nyu"]],
  ["ニョ", ["nyo"]],
  ["チャ", ["cha"]],
  ["チュ", ["chu"]],
  ["チョ", ["cho"]],
  ["シャ", ["sha"]],
  ["シュ", ["shu"]],
  ["ショ", ["sho"]],
  ["キャ", ["kya"]],
  ["キュ", ["kyu"]],
  ["キョ", ["kyo"]],
  ["リャ", ["rya"]],
  ["リュ", ["ryu"]],
  ["リョ", ["ryo"]],
  ["ミャ", ["mya"]],
  ["ミュ", ["myu"]],
  ["ミョ", ["myo"]],
  ["ヒャ", ["hya"]],
  ["ヒュ", ["hyu"]],
  ["ヒョ", ["hyo"]],
  ["ピャ", ["pya"]],
  ["ピュ", ["pyu"]],
  ["ピョ", ["pyo"]],
  ["ビャ", ["bya"]],
  ["ビュ", ["byu"]],
  ["ビョ", ["byo"]],
  ["ヂャ", ["zya"]],
  ["ヂュ", ["zyu"]],
  ["ヂョ", ["zyo"]],
  ["ジャ", ["ja"]],
  ["ジュ", ["ju"]],
  ["ジョ", ["jo"]],
  ["ギャ", ["gya"]],
  ["ギュ", ["gyu"]],
  ["ギョ", ["gyo"]]
];
Dictionnary.kanjiList = [  '一', '二', '三', '五', '七', '八', '四', '西', '匹', '六', '穴', '九', '丸',  '力', '万', '方', '刀', '刃', '十', '千', '土', '士', '干', '工', '上', '下',  '人', '入', '火', '小', '大', '丈', '木', '本', '末', '未', '天', '夭', '夫',  '林', '森', '炎', '協', '功', '仕', '央', '矢', '失', '欠', '太', '犬', '体',  '休', '少', '次', '灰', '災', '知', '医', '英', '映', '然', '燃', '無', '焼',  '昭', '照', '交', '父', '文', '求', '救', '口', '日', '月', '目', '回', '田',  '品', '晶', '明', '唱', '冒', '相', '器', '言', '信', '旦', '旧', '井', '囲',  '図', '区', '凶', '困', '因', '耳', '甘', '曲', '中', '申', '皿', '門', '問',  '聞', '間', '開', '閉', '斤', '丘', '兵', '片', '久', '戸', '尺', '氏', '民',  '衣', '所', '新', '底', '低', '史', '虫', '蚕', '風', '凡', '属', '仲', '使',  '便', '自', '白', '百', '首', '面', '血', '由', '兄', '鬼', '見', '貝', '円',  '用', '冊', '甲', '買', '員', '貴', '責', '貯', '資', '賀', '古', '舌', '宅',  '世', '地', '他', '売', '声', '川', '州', '水', '承', '氷', '永', '泉', '泳',  '池', '湖', '流', '内', '肉', '有', '青', '清', '晴', '害', '骨', '夕', '多',  '外', '死', '冬', '列', '昼', '夜', '族', '切', '分', '貧', '効', '勢', '雨',  '雪', '当', '雷', '電', '手', '毛', '屯', '友', '乃', '及', '支', '受', '授',  '争', '取', '収', '最', '枝', '心', '亡', '必', '応', '泌', '愛', '忘', '思',  '志', '忠', '息', '想', '化', '比', '北', '花', '早', '朝', '草', '楽', '薬',  '麻', '寸', '勺', '以', '付', '村', '包', '可', '句', '向', '同', '司', '何',  '河', '荷', '寺', '詩', '時', '持', '等', '丁', '行', '打', '待', '得', '街',  '径', '庁', '町', '灯', '寧', '名', '各', '客', '君', '石', '右', '左', '山',  '岩', '炭', '岸', '砂', '研', '馬', '鳥', '鳴', '島', '駅', '王', '玉', '国',  '宝', '主', '往', '現', '両', '画', '再', '共', '供', '異', '生', '牛', '午',  '年', '缶', '朱', '出', '性', '星', '告', '許', '株', '対', '材', '糸', '系',  '光', '先', '洗', '紙', '前', '空', '続', '女', '安', '案', '妹', '姿', '姓',  '母', '舟', '毎', '海', '船', '航', '沿', '毒', '梅', '桜', '油', '届', '介',  '界', '男', '果', '巣', '単', '胃', '畑', '里', '黒', '子', '予', '矛', '才',  '戈', '字', '宇', '孫', '好', '序', '存', '在', '式', '代', '成', '誠', '城',  '戦', '市', '姉', '長', '帳', '布', '肺', '労', '奴', '努', '加', '羽', '飛',  '習', '危', '角', '魚', '負', '色', '解', '漁', '竹', '笛', '箱', '笑', '筋',  '簡', '具', '算', '鼻', '夏', '立', '位', '音', '意', '章', '童', '野', '翌',  '泣', '束', '東', '京', '車', '重', '垂', '乗', '平', '半', '並', '羊', '南',  '洋', '呼', '己', '記', '改', '弓', '引', '張', '弱', '強', '止', '正', '定',  '足', '走', '歩', '整', '歯', '噛', '爪', '証', '合', '今', '令', '命', '谷',  '不', '否', '含', '念', '冷', '給', '答', '喜', '嬉', '倍', '容', '舎', '捨',  '豆', '后', '高', '官', '局', '宮', '頭', '順', '領', '預', '額', '頂', '営',  '登', '発', '浴', '俗', '宣', '倉', '富', '芽', '米', '来', '釆', '番', '季',  '粉', '料', '精', '葉', '黄', '若', '茶', '蒸', '汽', '気', '苦', '良', '食',  '朗', '眼', '飼', '反', '皮', '圧', '坂', '板', '仮', '服', '公', '松', '台',  '治', '広', '仏', '至', '会', '伝', '屋', '室', '私', '委', '和', '利', '科',  '秘', '秒', '移', '秋', '程', '占', '点', '店', '居', '酒', '要', '尊', '配',  '価', '温', '衆', '盟', '益', '塩', '元', '示', '完', '宗', '祭', '察', '禁',  '神', '病', '痛', '疲', '破', '症', '社', '視', '甫', '補', '複', '福', '祝',  '初', '学', '栄', '覚', '尚', '肖', '宵', '堂', '常', '挙', '乳', '乱', '礼',  '札', '辛', '幸', '辞', '活', '金', '余', '銅', '銀', '鉄', '鉱', '針', '鋼',  '固', '周', '個', '調', '園', '耕', '恩', '団', '易', '場', '湯', '腸', '物',  '豚', '家', '象', '像', '参', '幼', '勤', '動', '究', '働', '弟', '第', '説',  '税', '党', '費', '麦', '去', '書', '事', '妻', '筆', '写', '与', '汚', '号',  '考', '且', '組', '助', '査', '祖', '軍', '庫', '軽', '転', '経', '輪', '論',  '輸', '進', '週', '近', '辺', '関', '送', '連', '運', '皇', '球', '全', '住',  '聖', '理', '望', '班', '巨', '臣', '亜', '臨', '監', '覧', '非', '俳', '罪',  '悲', '悪', '窓', '急', '豊', '短', '商', '橋', '欲', '敗', '故', '牧', '特',  '教', '数', '採', '折', '拾', '技', '操', '担', '指', '招', '揮', '卵', '背',  '批', '兆', '歴', '競', '省', '児', '真', '県', '直', '値', '植', '置', '訓',  '語', '読', '話', '計', '討', '詞', '訳', '談', '線', '絵', '細', '級', '納',  '絹', '終', '紅', '練', '館', '追', '師', '飲', '根', '養', '飯', '管', '即',  '節', '築', '朿', '策', '座', '卒', '課', '評', '試', '誌', '呉', '誤', '訪',  '忍', '認', '景', '原', '源', '裏', '種', '身', '射', '謝', '専', '状', '将',  '宿', '縮', '従', '縦', '識', '織', '職', '緑', '純', '綿', '結', '総', '統',  '績', '迷', '述', '速', '遠', '造', '退', '遺', '帝', '適', '達', '逆', '過',  '準', '斉', '済', '潮', '注', '決', '波', '派', '道', '導', '通', '遊', '遣',  '窃', '憂', '吏', '業', '傘', '表', '璽', '凸', '凹', '互', '丹', '延', '廷',  '妊', '庭', '任', '建', '賃', '艇', '健', '誕', '基', '碁', '期', '棋', '暴',  '旗', '恭', '欺', '寒', '爆', '幽', '玄', '磁', '弦', '幻', '畜', '慈', '滋',  '蓄', '腹', '復', '扉', '履', '享', '紫', '刷', '疑', '者', '愚', '偶', '印',  '御', '卸', '抑', '柳', '庶', '返', '遭', '逝', '迫', '逃', '秀', '誘', '透',  '迭', '迅', '込', '遂', '集', '雄', '擁', '曜', '躍', '濯', '又', '騒', '隻',  '獲', '穫', '設', '侵', '寝', '浸', '殴', '穀', '暇', '賢', '殿', '役', '曼',  '漫', '慢', '度', '渡', '股', '怪', '投', '護', '没', '桑', '疫', '茎', '撃',  '叔', '堅', '為', '厄', '報', '腕', '却', '脚', '犯', '範', '段', '叙', '極',  '緊', '殺', '双', '捜', '督', '淑', '寂', '偽', '昔', '惜', '籍', '錯', '借',  '措', '鈍', '銘', '錘', '鋭', '錠', '鉛', '釣', '銃', '鍛', '鏡', '錬', '録',  '銭', '銑', '鈴', '鎖', '希', '刈', '脳', '悩', '殻', '確', '難', '権', '推',  '携', '牙', '慨', '雅', '検', '穏', '陽', '皆', '階', '陪', '際', '陶', '隔',  '降', '陣', '険', '限', '随', '都', '院', '陰', '隠', '防', '障', '陳', '陛',  '除', '隅', '附', '堕', '隊', '陸', '隆', '陵', '阻', '隣', '陥', '融', '離',  '髄', '郵', '郭', '郊', '邸', '邦', '郡', '郷', '廊', '郎', '邪', '部', '響',  '涯', '験', '倹', '剣', '雇', '顧', '焦', '礁', '奮', '奪', '凍', '准', '凝',  '維', '稚', '雑', '勧', '歓', '雌', '観', '唯', '催', '羅', '途', '逢', '縫',  '迎', '扁', '偏', '編', '遍', '逓', '巡', '遵', '違', '免', '勉', '逸', '遅',  '逐', '遮', '遇', '逮', '選', '遷', '避', '還', '隷', '壁', '癖', '環', '仰',  '緒', '署', '諸', '著', '煮', '擬', '虚', '劇', '虐', '虞', '慮', '曹', '膚',  '此', '漢', '覆', '虜', '戯', '扇', '尼', '泥', '尽', '戻', '涙', '肩', '展',  '房', '啓', '刑', '型', '形', '併', '塀', '守', '尉', '慰', '狩', '炉', '漏',  '屈', '堀', '尿', '尾', '層', '憎', '贈', '僧', '嘆', '槽', '赤', '跡', '騎',  '嚇', '変', '赦', '湾', '蛮', '恋', '奏', '奉', '棒', '春', '俸', '泰', '実',  '朕', '咲', '払', '惨', '能', '甚', '勘', '態', '罷', '旋', '礎', '政', '是',  '提', '堤', '題', '婦', '帰', '兼', '嫌', '謙', '廉', '威', '幅', '武', '賦',  '或', '域', '惑', '褐', '渇', '喝', '謁', '掲', '旨', '脂', '栽', '戒', '械',  '桟', '柔', '掘', '零', '齢', '而', '耐', '端', '需', '儒', '筒', '箇', '篤',  '篝', '構', '溝', '講', '購', '突', '窯', '作', '窄', '昨', '搾', '詐', '酢',  '飢', '飽', '飾', '我', '餓', '犠', '義', '儀', '議', '越', '徒', '召', '紹',  '沼', '超', '詔', '項', '攻', '博', '敷', '穂', '恵', '薄', '縛', '簿', '駐',  '駄', '券', '騰', '謄', '紀', '巻', '圏', '勝', '典', '興', '農', '娠', '唇',  '辱', '振', '震', '濃', '奥', '類', '莫', '膜', '模', '輩', '募', '墓', '慕',  '柄', '丙', '乙', '乏', '芝', '乾', '幹', '賄', '財', '貫', '慣', '販', '版',  '枠', '砕', '壊', '汁', '粋', '粘', '赴', '趣', '朴', '掛', '搭', '塔', '宙',  '密', '演', '奇', '寄', '崎', '嗣', '繰', '機', '締', '燥', '藻', '満', '液',  '盾', '循', '殖', '係', '懸', '断', '継', '薦', '廃', '床', '潟', '渓', '鶏',  '析', '質', '祈', '匠', '載', '漸', '暫', '孰', '畝', '坑', '抗', '熟', '塾',  '執', '閑', '閥', '痘', '痢', '僚', '寮', '療', '闘', '香', '菌', '快', '添',  '称', '厳', '敢', '散', '摂', '渋', '塁', '恥', '徳', '聴', '葬', '残', '旬',  '殉', '珠', '殊', '沸', '窮', '弔', '禅', '弾', '孤', '弧', '頒', '寡', '紛',  '雰', '霜', '務', '霧', '夢', '睡', '掃', '帯', '滞', '裕', '襟', '祉', '祥',  '菓', '薪', '裸', '彼', '被', '披', '渦', '禍', '硝', '卑', '碑', '拓', '更',  '硬', '妃', '暮', '忌', '起', '巷', '港', '煙', '猶', '腰', '貨', '革', '靴',  '覇', '席', '幕', '帽', '漠', '棺', '帥', '愉', '癒', '諭', '疾', '痴', '矯',  '侯', '候', '刺', '制', '製', '副', '剤', '槍', '創', '衰', '依', '袋', '襲',  '貸', '独', '獄', '蛇', '触', '繭', '網', '備', '伐', '幾', '伺', '感', '減',  '憾', '誉', '託', '謹', '詠', '匿', '諾', '藩', '滑', '洪', '審', '翻', '翁',  '翼', '訟', '似', '俵', '侍', '倫', '亭', '停', '訂', '消', '削', '剛', '剰',  '綱', '勲', '衝', '薫', '熱', '墨', '暁', '傷', '賜', '揚', '撲', '僕', '喚',  '奨', '換', '奔', '臭', '憩', '括', '駆', '欧', '枢', '敬', '警', '驚', '拘',  '促', '践', '距', '踊', '拒', '淡', '滅', '浅', '溶', '澄', '浜', '頻', '願',  '渉', '傾', '債', '優', '漬', '企', '診', '珍', '宴', '婚', '升', '昇', '泊',  '激', '拍', '般', '搬', '盤', '舶', '沢', '択', '疎', '釈', '頼', '瀬', '勅',  '尋', '巧', '帆', '恐', '朽', '誇', '架', '悟', '緯', '嘱', '叫', '糾', '偉',  '衛', '況', '克', '賊', '噴', '墳', '憤', '蚊', '斎', '紋', '歳', '票', '漂',  '標', '咨', '諮', '盗', '盛', '盆', '猛', '脱', '閲', '脈', '胸', '府', '腐',  '符', '晩', '衡', '悦', '樹', '親', '術', '絶', '把', '肥', '剖', '賠', '培',  '吐', '哲', '誓', '潜', '賛', '替', '扶', '損', '韻', '暗', '拐', '貿', '匁',  '扱', '吸', '哀', '裁', '保', '褒', '裂', '烈', '例', '累', '増', '索', '判',  '畔', '伴', '塊', '醜', '味', '魅', '磨', '魔', '摩', '深', '探', '漆', '捕',  '舗', '浦', '租', '粗', '畳', '宰', '宜', '岬', '岳', '押', '仙', '峠', '崇',  '斥', '訴', '縄', '率', '竜', '滝', '留', '沈', '囚', '江', '貢', '沖', '衷',  '喪', '暦', '厚', '産', '励', '牲', '顔', '酌', '酷', '酔', '酬', '嬢', '譲',  '壌', '醸', '湿', '顕', '繊', '普', '譜', '霊', '雲', '曇', '抄', '妙', '劣',  '賓', '刻', '該', '劾', '核', '康', '唐', '糖', '粧', '塚', '縁', '嫁', '桃',  '跳', '挑', '倒', '窒', '致', '眺', '到', '差', '群', '詳', '惰', '落', '佐',  '稼', '秩', '豪', '幣', '弊', '稿', '粛', '津', '律', '楼', '粒', '接', '厘',  '黙', '埋', '量', '糧', '婆', '娯', '如', '蔵', '臓', '茂', '姫', '款', '歌',  '吹', '軟', '炊', '坊', '芳', '吉', '詰', '壮', '装', '荘', '勇', '孔', '了',  '暑', '老', '孝', '酵', '濁', '均', '菊', '約', '伯', '的', '峰', '慶', '後',  '条', '混', '瓦', '瓶', '麗', '昆', '法', '棄', '既', '概', '浪', '恨', '机',  '肌', '胆', '壇', '恒', '垣', '但', '暖', '緩', '脹', '髪', '援', '抜', '紡',  '肪', '胞', '砲', '抱', '泡', '抽', '軸', '轄', '輝', '割', '軒', '肝', '刊',  '汗', '煩', '愁', '修', '悠', '育', '徹', '撤', '徴', '懲', '喫', '憲', '積',  '契', '卓', '悼', '華', '貞', '偵', '呈', '狂', '吟', '琴', '懇', '爵', '墾',  '猿', '娘', '格', '絡', '潤', '閣', '略', '酪', '路', '露', '放', '倣', '旁',  '傍', '硫', '弁', '充', '唆', '俊', '酸', '拷', '拡', '擦', '献', '獣', '峡',  '挟', '狭', '伏', '謡', '稲', '揺', '妥', '紺', '某', '媒', '謀', '眠', '看',  '罰', '美', '着', '彫', '彰', '杉', '彩', '浮', '菜', '頑', '冠', '封', '鐘',  '鉢', '善', '繕', '寿', '鋳', '墜', '坪', '佳', '瞬', '舞', '傑', '堪', '件',  '敏', '繁', '枚', '冗', '微', '処', '拠', '征', '婿', '洞', '胴', '塗', '徐',  '斗', '斜', '妨', '別', '旅', '施', '様', '踏', '則', '側', '測', '据', '握',  '控', '抹', '庸', '猟', '苗', '描', '猫', '肢', '岐', '膨', '鼓', '影', '就',  '涼', '鯨', '鮮', '栓', '杯', '枯', '横', '棚', '崩', '肯', '脅', '塑', '妄',  '盲', '忙', '荒', '慌', '怠', '胎', '始', '姻', '侮', '悔', '億', '憶', '怒',  '怖', '患', '懐', '掌', '拙', '賞', '償', '蛍', '排', '抵', '拝', '撮', '艦',  '鑑', '濫', '慎', '鎮', '情', '請', '浄', '静', '素', '潔', '伸', '紳', '仁',  '芸', '魂', '壱', '弐', '滴', '摘', '嫡', '敵', '規', '寛', '芋', '挿', '境',  '染', '軌', '絞', '較', '校', '棟', '欄', '柱', '耗'];
Dictionnary.english = ["one", "two", "three", "five", "seven", "eight", "four", "west", "crude",  "six", "hole", "nine", "circular", "power", "tenthousand", "direction",  "knife", "edge", "ten", "thousand", "earth", "knight", "dry", "craft", "up",  "down", "person", "enter", "fire", "small", "big", "length", "wood",  "origin", "tip", "notyet", "heaven", "calamity", "husband", "woods",  "forest", "flame", "cooperation", "merit", "serve", "center", "arrow",  "miss", "lack", "plump", "dog", "body", "rest", "few", "next", "ash",  "disaster", "know", "doctor", "superior", "reflect", "sort", "burn", "none",  "bake", "bright", "shine", "mix", "father", "writing", "demand", "save",  "mouth", "sun", "moon", "eye", "around", "paddy", "goods", "crystal",  "light", "chant", "defy", "together", "utensil", "say", "believe", "dawn",  "ex", "well", "surround", "map", "district", "evil", "distress", "cause",  "ear", "sweet", "melody", "middle", "communicate", "plate", "gate",  "question", "hear", "gap", "open", "close", "axe", "hill", "soldier",  "piece", "longtime", "doorway", "foot", "clan", "people", "clothes",  "place", "new", "floor", "low", "history", "bug", "silkworm", "wind",  "mediocre", "belong", "relationship", "use", "convenient", "personal",  "white", "hundred", "neck", "mask", "blood", "reason", "bigbrother", "ogre",  "see", "clam", "yen", "deploy", "book", "shell", "buy", "member", "precious",  "blame", "storage", "wealth", "congratulation", "old", "tongue", "home",  "society", "ground", "other", "sell", "voice", "river", "province", "water",  "accept", "ice", "eternity", "fountain", "swim", "pond", "lake", "flow",  "within", "meat", "have", "blue", "pure", "clear", "harm", "bone", "evening",  "many", "outside", "death", "winter", "row", "noon", "night", "family",  "cut", "part", "poor", "effect", "energy", "rain", "snow", "hit",  "lightning", "electricity", "hand", "hair", "barracks", "friend", "from",  "reach", "branch", "receive", "grant", "struggle", "take", "obtain", "most",  "treebranch", "heart", "perish", "certain", "respond", "fluid", "affection",  "forget", "think", "will", "loyalty", "breath", "idea", "change", "compare",  "north", "flower", "early", "morning", "weed", "pleasant", "drug", "hemp",  "measure", "ladle", "because", "attach", "town", "wrap", "able", "phrase",  "facing", "same", "govern", "what", "stream", "load", "temple", "poetry",  "time", "hold", "class", "signpost", "go", "pound", "wait", "gain", "avenue",  "path", "board", "block", "lamp", "tranquil", "name", "each", "visitor",  "noble", "stone", "right", "left", "mountain", "rock", "coal", "beach",  "sand", "sharpen", "horse", "bird", "cry", "island", "station", "king",  "jewel", "country", "treasure", "lord", "journey", "present", "both",  "brushstroke", "again", "all", "offer", "unusual", "life", "cow", "midday",  "year", "can", "crimson", "leave", "nature", "star", "tell", "permit",  "stump", "opposite", "lumber", "thread", "lineage", "ray", "point", "wash",  "paper", "before", "void", "sequel", "woman", "ease", "plan",  "littlesister", "figure", "surname", "mother", "boat", "every", "ocean",  "ship", "voyage", "along", "poison", "plum", "cherry", "oil", "notice",  "between", "world", "man", "fruit", "nest", "single", "stomach", "farm",  "village", "black", "child", "previous", "lance", "talent", "halberd",  "letter", "roof", "descendant", "fond", "initial", "keep", "exist", "rite",  "substitute", "become", "fidelity", "castle", "battle", "market",  "bigsister", "long", "register", "cloth", "lung", "labor", "servant",  "toil", "add", "feather", "fly", "practice", "danger", "angle", "fish",  "lose", "colour", "dissect", "fishing", "bamboo", "flute", "box", "laugh",  "sinew", "simple", "device", "abacus", "nose", "summer", "stand", "standing",  "sound", "mind", "poem", "kid", "plains", "following", "weep", "bundle",  "east", "capital", "wheel", "heavy", "sag", "ride", "level", "half",  "common", "sheep", "south", "sea", "invite", "self", "chronicle", "amend",  "bow", "pull", "stretch", "weak", "strong", "stop", "proper", "determine",  "leg", "run", "walk", "organize", "tooth", "bite", "claw", "proof", "join",  "now", "command", "fate", "valley", "un", "no", "contain", "thought",  "chill", "supply", "solution", "rejoice", "happy", "fold", "capacity",  "livingarea", "discard", "bean", "empress", "tall", "bureaucrat", "bureau",  "shrine", "head", "sequence", "territory", "deposit", "forehead", "summit",  "camp", "climb", "emit", "bathe", "custom", "proclaim", "cellar", "rich",  "sprout", "rice", "come", "grind", "turn", "season", "flour", "fee",  "vitality", "leaf", "yellow", "young", "tea", "steam", "vapor",  "lifeenergy", "suffer", "good", "food", "fine", "eyeball", "raise",  "oppose", "pelt", "pressure", "slope", "plank", "temporary", "outfit",  "public", "pine", "pedestal", "reign", "spacious", "buddha", "arrive",  "meet", "conduct", "dealer", "room", "me", "devote", "peace", "profit",  "section", "conceal", "second", "shift", "autumn", "process", "foretell",  "spot", "shop", "be", "booze", "need", "exalt", "distribute", "value",  "warm", "masses", "oath", "benefit", "salt", "basis", "indicate", "complete",  "religion", "ritual", "judge", "forbid", "god", "disease", "pain", "fatigue",  "rip", "symptom", "company", "inspect", "first", "supplement", "repeat",  "luck", "celebrate", "start", "learn", "splendid", "remember", "higher",  "likeness", "dusk", "hall", "usual", "action", "milk", "riot", "gratitude",  "card", "sharp", "blessing", "term", "lively", "gold", "excess", "copper",  "silver", "iron", "ore", "needle", "steel", "firm", "circuit", "individual",  "tune", "yard", "plow", "obligation", "group", "easy", "location", "bath",  "guts", "thing", "pig", "house", "elephant", "image", "attend", "infant",  "diligent", "move", "research", "work", "littlebrother", "number",  "opinion", "tax", "faction", "spend", "wheat", "gone", "write", "affair",  "wife", "brush", "copy", "give", "dirty", "identifier", "consider", "also",  "braid", "help", "investigate", "ancestor", "army", "garage", "unimportant",  "revolve", "warp", "hoop", "argument", "transport", "advance", "week",  "near", "boundary", "barrier", "send", "unite", "haul", "monarch", "ball",  "everything", "inhabit", "saint", "logic", "ambition", "squad", "giant",  "retainer", "sub", "brink", "oversee", "look", "non", "humor", "sin", "sad",  "bad", "window", "hurry", "abundant", "short", "dealing", "bridge", "want",  "defeat", "consequence", "pasture", "special", "teach", "count", "pluck",  "break", "pickup", "technique", "manipulate", "carry", "finger", "beckon",  "wield", "egg", "back", "criticize", "portent", "pass", "compete", "focus",  "baby", "true", "prefecture", "fix", "price", "plant", "put", "instructions",  "language", "read", "talk", "plot", "assault", "word", "translate",  "discuss", "line", "picture", "slim", "rank", "placement", "silk", "end",  "rouge", "refine", "building", "pursue", "expert", "drink", "root",  "support", "meal", "pipe", "instant", "node", "fabricate", "thorn", "policy",  "sit", "trooper", "chapter", "criticism", "test", "journal", "favor",  "error", "visit", "endure", "recognize", "view", "meadow", "source",  "inside", "type", "physique", "shoot", "thank", "sole", "state", "leader",  "inn", "shrink", "comply", "vertical", "knowledge", "weave", "employment",  "green", "unsullied", "cotton", "bind", "whole", "regulate", "spin", "lost",  "express", "quick", "far", "construct", "retreat", "bequeath", "emperor",  "suitable", "attain", "reverse", "exceed", "semi", "alike", "finish", "tide",  "pour", "resolve", "wave", "sect", "street", "guide", "traffic", "play",  "dispatch", "steal", "sorrow", "official", "job", "umbrella", "list",  "imperialseal", "convex", "indent", "mutual", "rustred", "postpone",  "court", "pregnant", "garden", "trust", "build", "wage", "yacht", "healthy",  "birth", "foundation", "igo", "phase", "chess", "violent", "flag", "respect",  "cheat", "cold", "explode", "dark", "occult", "magnet", "bowstring",  "illusion", "livestock", "mercy", "bringgrowth", "stock", "belly", "resume",  "door", "footwear", "get", "purple", "print", "doubt", "human", "foolish",  "chance", "stamp", "drive", "wholesale", "pressdown", "willow", "commoner",  "return", "meetwith", "passaway", "press", "flee", "excellent", "tempt",  "transparent", "alternate", "fast", "cram", "accomplish", "gather",  "masculine", "embrace", "weekday", "leap", "rinse", "another", "noise",  "pairhalf", "seize", "harvest", "establish", "trespass", "recline",  "immerse", "attack", "cereal", "holiday", "clever", "palace", "war", "wide",  "whimsical", "vain", "times", "cross", "thigh", "weird", "throw", "protect",  "drown", "mulberry", "plague", "stem", "strike", "younguncle", "tough",  "do", "misfortune", "report", "arm", "instead", "feet", "crime", "exemplar",  "step", "describe", "pole", "tight", "kill", "pair", "search", "coach",  "ladylike", "lonely", "false", "past", "regret", "registry", "confuse",  "borrow", "throwout", "blunt", "inscribe", "spindle", "keen", "lock",  "lead", "hook", "gun", "forge", "mirror", "temper", "archive", "coin",  "pigiron", "chime", "chain", "desire", "reap", "brain", "worry", "husk",  "definite", "trouble", "authority", "infer", "bring", "fang", "lament",  "aesthetic", "examine", "calm", "positive", "everyone", "staircase",  "accompany", "occasion", "ceramic", "standbetween", "descend", "formation",  "steep", "limit", "wander", "city", "institution", "negative", "hide",  "defend", "hinder", "exhibit", "dais", "remove", "corner", "hitch", "lapse",  "regiment", "land", "height", "barrow", "obstacle", "neighbor", "fall",  "melt", "detach", "marrow", "mail", "enclosure", "suburb", "residence",  "homecountry", "county", "hometown", "hallway", "son", "wicked",  "department", "echo", "shore", "symbol", "frugal", "sword", "employ",  "lookback", "singe", "reef", "rouse", "nab", "freeze", "quasi", "harden",  "rope", "immature", "sundry", "advice", "delight", "female", "observe",  "only", "arrange", "gauze", "way", "rendezvous", "sew", "welcome",  "miniature", "bias", "knit", "everywhere", "relay", "goaround", "obey",  "differ", "escape", "exert", "outrun", "tardy", "chaseaway", "interrupt",  "encounter", "chase", "select", "transfer", "avoid", "restore", "slave",  "wall", "habit", "ring", "lookup", "cord", "office", "various",  "remarkable", "poach", "mimic", "empty", "drama", "oppress", "anxiety",  "concern", "sergeant", "skin", "here", "china", "overturn", "prisoner",  "frolic", "fan", "nun", "mud", "useup", "revert", "tears", "shoulder",  "exhibition", "chamber", "reveal", "penalty", "mold", "shape", "merge",  "fence", "guard", "officer", "comfort", "hunt", "furnace", "leak", "yield",  "moat", "urine", "tail", "layer", "hate", "gift", "priest", "moan", "tub",  "red", "trace", "ridehorse", "threat", "strange", "forgive", "bay",  "barbarian", "romanticlove", "perform", "respectful", "rod", "spring",  "salary", "peaceful", "reality", "royalwe", "bloom", "sweepaway", "cruel",  "ability", "tremendous", "persist", "condition", "cease", "rotate",  "cornerstone", "government", "correct", "propose", "embankment", "topic",  "lady", "homecoming", "simultaneous", "dislike", "humble", "honest",  "coerce", "width", "warrior", "tribute", "particular", "area", "perplex",  "brown", "thirst", "yell", "audience", "putup", "tasty", "lard", "planting",  "admonish", "shackles", "framework", "pliant", "dig", "zero", "age",  "goatee", "withstand", "verge", "require", "confucianism", "tube", "item",  "sincere", "basket", "structure", "ditch", "lecture", "purchase", "thrust",  "oven", "make", "narrow", "yester", "compress", "lie", "vinegar", "hunger",  "sate", "decorate", "my", "starve", "sacrifice", "justice", "ceremony",  "consideration", "surpass", "lesser", "summon", "introduction", "swamp",  "super", "imperialcommand", "heading", "offense", "extensive", "spreadout",  "graintop", "bless", "thin", "restrain", "records", "stay", "workhorse",  "ticket", "boost", "transcribe", "story", "scroll", "sphere", "win", "code",  "prosper", "agriculture", "expecting", "lips", "embarrass", "swing",  "shiver", "dense", "inner", "kind", "not", "membrane", "imitate",  "companion", "enlist", "tomb", "longing", "grip", "third", "odd", "scarce",  "lawn", "dehydrate", "treetrunk", "provide", "fortune", "pierce",  "accustomed", "commerce", "printing", "frame", "crush", "destroy", "juice",  "style", "sticky", "proceed", "tendency", "basic", "suspend", "loadup",  "spire", "sky", "secret", "act", "bizarre", "approach", "steepslope",  "heir", "spool", "loom", "fasten", "parch", "seaweed", "full", "liquid",  "shield", "follow", "multiply", "link", "hang", "decline", "inherit",  "recommend", "dump", "bed", "surf", "gorge", "chicken", "analyze", "quality",  "pray", "craftsman", "spreadload", "gradual", "brief", "which", "furrow",  "mine", "obstruct", "mature", "school", "grab", "freetime", "clique", "pox",  "diarrhea", "coworker", "dorm", "cure", "fight", "fragrance", "germs",  "nice", "augment", "title", "strict", "daring", "scatter", "absorb",  "hesitate", "fort", "shame", "benevolence", "listen", "funeral", "remain",  "tendays", "selfsacrifice", "pearl", "exceptional", "boil", "extreme",  "mourning", "zen", "bullet", "orphan", "arc", "distribution", "diminished",  "stray", "atmosphere", "frost", "duty", "fog", "dream", "asleep", "sweep",  "belt", "stagnant", "plentiful", "collar", "welfare", "goodomen", "treat",  "firewood", "bare", "he", "cover", "exposed", "spiral", "woe", "nitrate",  "lowly", "tombstone", "clearland", "anew", "hard", "queen", "darken",  "abhor", "awake", "crossroads", "harbor", "smoke", "delay", "hips",  "property", "leather", "shoe", "domination", "seat", "curtain", "hat",  "vast", "coffin", "commander", "fun", "heal", "instruct", "sudden", "stupid",  "straighten", "marquis", "climate", "stab", "mastery", "manufacture",  "duplicate", "medicine", "spear", "wound", "weaken", "depend", "bag",  "pounce", "lend", "alone", "jail", "snake", "touch", "cocoon", "net",  "prepare", "cutdown", "howmuch", "inquire", "feeling", "decrease", "sorry",  "glory", "entrust", "discreet", "song", "shelter", "consent", "fief",  "slippery", "flood", "trial", "flap", "elder", "wing", "litigate",  "resemble", "bale", "attendant", "ethics", "publichouse", "stoppage",  "revise", "extinguish", "whittle", "sturdy", "extra", "cable", "excellence",  "collision", "scent", "heat", "ink", "daybreak", "hurt", "bestow", "hoist",  "beat", "manservant", "scream", "goad", "exchange", "rush", "smell", "relax",  "tie", "gallop", "europe", "hinge", "honor", "warn", "surprise", "arrest",  "urge", "tread", "distance", "dance", "refuse", "faint", "ruin", "shallow",  "dissolve", "lucid", "seashore", "frequent", "wish", "wade", "incline",  "debt", "gentle", "pickle", "undertake", "checkup", "rare", "party",  "wedding", "halfgallon", "rise", "lodge", "intense", "clap", "general",  "convey", "tray", "shipping", "bog", "choose", "split", "explain", "rely",  "rapids", "imperialdecree", "fathom", "skill", "sail", "fear", "rot",  "boast", "span", "perceive", "horizontal", "charge", "shout", "twist",  "magnificent", "defense", "circumstances", "overcome", "bandit", "spout",  "burialmound", "resent", "mosquito", "purify", "pattern", "newyear",  "vote", "buoy", "mark", "inquiry", "consult", "rob", "flourish", "platter",  "ferocious", "undress", "scrutiny", "pulse", "chest", "neighborhood",  "rotten", "token", "late", "balance", "joy", "tree", "parent", "method",  "sever", "grasp", "fatten", "cutapart", "compensate", "cultivate", "spew",  "wise", "pledge", "dive", "approve", "swap", "assist", "loss", "verse",  "shade", "abduct", "trade", "coinweight", "handle", "suck", "sadness",  "decide", "preserve", "praise", "torn", "fierce", "example", "involve",  "increase", "string", "seal", "ridge", "escort", "clump", "ugly", "taste",  "bewitch", "polish", "devil", "scrub", "deep", "probe", "lacquer", "catch",  "store", "coast", "tithe", "rough", "tatami", "supervise", "fitting",  "headland", "top", "push", "hermit", "mountainpass", "revere", "reject",  "appeal", "strawrope", "rate", "dragon", "waterfall", "immobilize", "sink",  "prison", "inlet", "levy", "opensea", "innermost", "dejected", "calendar",  "thick", "produce", "encourage", "immolate", "face", "dispense", "harsh",  "drunk", "reward", "younglady", "giveover", "soil", "brew", "wet",  "visible", "slender", "widely", "log", "spirit", "cloud", "overcast",  "extract", "extraordinary", "worse", "guest", "mince", "relevant", "impeach",  "core", "enjoy", "t'angchina", "sugar", "makeup", "mound", "bond", "bride",  "peach", "jump", "challenge", "topple", "plugup", "discharge", "gaze",  "advent", "difference", "herd", "detailed", "lazy", "drop", "assistant",  "earn", "order", "grand", "offering", "vile", "manuscript", "solemn", "port",  "law", "tower", "grain", "connect", "tinycoin", "silent", "bury", "amount",  "provisions", "oldwoman", "amuse", "similar", "storehouse", "organ",  "overgrown", "princess", "goodwill", "sing", "blow", "soft", "cook",  "altarboy", "aroma", "goodluck", "pack", "manly", "adorn", "villa",  "courage", "cavity", "done", "hot", "aged", "filial", "ferment", "muddy",  "equal", "chrysanthemum", "promise", "chief", "target", "peak", "happiness",  "behind", "clause", "blend", "tile", "jug", "lovely", "descendants",  "doctrine", "abandon", "already", "generality", "drift", "grudge", "desk",  "surface", "gall", "stage", "constant", "hedge", "however", "toasty",  "slack", "bulge", "tresses", "aid", "pullout", "spinyarn", "fat",  "placenta", "cannon", "hug", "bubble", "drawout", "axle", "control",  "gleam", "divide", "eave", "liver", "publish", "sweat", "headache", "grief",  "improve", "serene", "nurture", "gothrough", "withdraw", "sign", "chastise",  "consume", "regulation", "accumulate", "vow", "table", "grieve", "gorgeous",  "righteous", "spy", "presentation", "insane", "recite", "harp", "courtesy",  "nobleman", "till", "monkey", "daughter", "status", "entwine", "watering",  "pinnacle", "summary", "cheese", "road", "dew", "release", "emulate",  "sametime", "beside", "sulfur", "speech", "fill", "entice", "brilliant",  "acid", "torture", "spread", "rub", "donate", "animal", "canyon", "pinch",  "cramped", "bentdown", "nohchant", "riceplant", "shake", "settled",  "darkblue", "some", "medium", "scheme", "sleep", "watchover", "punish",  "beauty", "wear", "carve", "clearly", "cedar", "paint", "float", "veggie",  "stubborn", "crown", "closeoff", "bell", "bowl", "admirable", "mend",  "longevity", "molding", "plummet", "twomats", "wellmade", "blink", "whirl",  "great", "abide", "situation", "agile", "profuse", "sheet", "needless",  "tiny", "manage", "base", "conquer", "soninlaw", "cave", "torso",  "coating", "slow", "dipper", "diagonal", "disturb", "separate", "trip",  "charity", "sama", "stepon", "rule", "side", "gauge", "set", "squeeze",  "retain", "wipe", "ordinary", "stalk", "seedling", "draw", "cat", "limb",  "diverge", "swell", "drum", "shadow", "settle", "cool", "whale", "fresh",  "plug", "cupful", "wither", "sideways", "shelf", "crumble", "agree",  "threaten", "model", "unreasonable", "blind", "busy", "wild", "panic",  "neglect", "womb", "begin", "marriage", "contempt", "remorse",  "hundredmillion", "memory", "anger", "dread", "sick", "yearn", "palm",  "clumsy", "prize", "compensation", "firefly", "expel", "resist", "worship",  "snatch", "warship", "takenote", "overflow", "caution", "quell", "sympathy",  "request", "cleanse", "quiet", "element", "virtue", "extend", "gentleman",  "humane", "art", "soul", "i", "ii", "drip", "pick", "legitimate", "enemy",  "compass", "lenient", "potato", "putin", "border", "dye", "track",  "strangle", "contrast", "exam", "ridgepole", "railing", "pillar", "reduce"  ];    
Dictionnary.descriptions = ["一 - one 「イチ」 The one is written sideways.","二 - two 「ニ」 1 and 1 makes 2","三 - three 「サン」 1 and 1 and 1 makes 3","五 - five 「ゴ」 Three with two extra vertical lines: 2+3=5","七 - seven 「シチ」 It\\'s upside down, and crossed european style, but definitely a 7.","八 - eight 「ハチ」 A halved line for the digit which can be halved most (8/2/2/2=1).","四 - four 「シ」 It\'s all within 4 walls.","西 - west 「セイ」 A bird nesting in the evening (when the sun is in the west).","匹 - crude 「ヒツ」 If you use a crude approximation of pi, the circle doesn\'t go all the way around.","六 - six 「ロク」 Three lines pointing out from a central intersection, and a line halved: six can be halved or divided by three.","穴 - hole 「ケツ」 A roof over a chasm; holes in the ground are dangerous, and should be covered like this one.","九 - nine 「キュウ」 A bit of the unenclosed shapes of four and five: 4 + 5 = 9","丸 - circular 「ガン」 Nine with one more to round off.","力 - power 「リョク」 A left hand pressing downward so powerfully that the fingers are bent back.","万 - ten-thousand 「マン」 This evolved from the ancient swastika, which once meant \"ten-thousand gods.\"It kept its four arms, but only one maintains the swirl.","方 - direction 「ホウ」 An old man, leaning on a cane, wearing a hat, who is lost and asking directions.","刀 - knife 「トウ」 The curved blade, chisel point, and cross-guard of a Japanese-style knife.","刃 - edge 「ジン」 A knife with the non-edge side crossed out.","十 - ten 「ジュウ」 A one with a vertical cross to indicate that it is moved to a higher decimal position, making ten.","千 - thousand 「セン」 Ten cubed is a thousand (the three lines indicate 3 dimensions).","土 - earth 「ド」 Something growing from the earth.","士 - knight 「シ」 An important person who can muster at least ten soldiers from his land.","干 - dry 「カン」 Your knight got all wet?  Just hang him upside down to dry off!","工 - craft 「コウ」 A carpenter\'s ruler.","上 - up 「ジョウ」 Pointing up from the base.","下 - down 「カ」 Pointing down from the crossbeams of the ceiling.","人 - person 「ジン」 Standing on two legs.","入 - enter 「ニュウ」 Two streams flow together, the smaller entering the larger.","火 - fire 「カ」 Flames flicker over the woodpile.","小 - small 「ショウ」 Two fingers picking up a small pin.","大 - big 「ダイ」 A man with arms outstretched to indicate something big.","丈 - length 「ジョウ」 The man from \"big\" is disconnecting his leg so he can hold it and show how long it is.","木 - wood 「ボク」 A simple picture of a tree trunk and branches.","本 - origin 「ホン」 The tree grows from the root.  What it grows from is its origin.","末 - tip 「マツ」 The top tip of the tree is made big to show that\'s what we\'re talking about.","未 - not-yet 「ミ」 Ungrown tip:  The top tip of the tree is made small to show that it has not yet grown.","天 - heaven 「テン」 The \"big\" man is trying to show how big the heavens are, but it\'s above him and bigger than his arms can show.","夭 - calamity 「ヨウ」 When the heavens are out of joint, something terrible will happen.Specifically means an early death.","夫 - husband 「フ」 The \"big\" man with a hat on: all dressed up for a wedding!He\'s all hung over from the bachelor party, and needs to shade his eyes.","林 - woods 「リン」 Some trees in the woods.","森 - forest 「シン」 Many trees in the forest.","炎 - flame 「エン」 Double fire means flames.","協 - cooperation 「キョウ」 Ten (left) with triple power (right) shows how many working together accomplish three times what they could do alone.","功 - merit 「コウ」 Craft (left) and power (right): quality and utility taken together mean merit.","仕 - serve 「シ」 A person (left) serving a knight (right).","央 - center 「オウ」 Originally, a circle with several lines pointing to its center.Implies the exact center, a point rather than the region of \"middle\".","矢 - arrow 「シ」 An arrow with a broadhead (top) and feathers (bottom) passing by the bow as it is shot.","失 - miss 「シツ」 The point of the arrow is extended to show that it just keeps going.","欠 - lack 「ケツ」 It\'s a picture of a baby bird with its beak open, lacking food.","太 - plump 「タイ」 A man gestures forward, then stretches his arms to show big in two dimensions.","犬 - dog 「ケン」 The \"big\" guy whistles for his dog.Originally, this was a picture of a dog\'s head, but now it\'s too abstract","体 - body 「タイ」 Personhood originated from having a human body.","休 - rest 「キュウ」 A person leaning against a tree for a nap.","少 - few 「ショウ」 Small over a stroke, each stroke counts one thing.  Small number of strokes, small count: few things.","次 - next 「ジ」 Lacking ice: you\'ve finished your drink and even chewed up the ice cubes.  It\'s completely gone, order the next.","灰 - ash 「カイ」 A friendly crosslike hand scoops up ash left from the fire.","災 - disaster 「サイ」 Where there\'s (unexpected) smoke there\'s disaster.It kind of looks like a volcano, doesn\'t it?","知 - know 「チ」 Answers shoot from your mouth like an arrow, when you know.","医 - doctor 「イ」 The enclosure represents a chest: arrow in the chest, time to see a doctor.The older version is more complicated, with a scalpel and a bottle of alcohol to perform the operation.","英 - superior 「エイ」 In the center of grassy weeds, a beautiful flower stands out.  It is clearly superior.","映 - reflect 「エイ」 Perfect center (right) represents the perfect alignment you need to reflect the sun (left) into someone\'s eyes.","然 - sort 「ゼン」 No matter how you cook it over a fire (bottom) the meat (left) of a dog (right) is still going to be dog meat.  It\'s always the same sort of thing.  Ew.","燃 - burn 「ネン」 More flame added to the cooking dog makes the meat burn.","無 - none 「ム」 Fire burns a delicate paper screen from its frame, none survives.","焼 - bake 「ショウ」 Fire and earth piled on a stand are all you need for a baking stove.","昭 - bright 「ショウ」 Bright things: the sun (left), a polished knife blade (upper right), a mouth open wide in a smile (lower right).","照 - shine 「ショウ」 \"Bright\" (above) with bottom fire to indicate a more active shine.","交 - mix 「コウ」 Cross the ingredients over and over again to mix them.  A picture of a man sitting with crossed legs (head, shoulders, and hands on knees).","父 - father 「フ」 The lap of the man with crossed legs, where he would hold his baby when he\'s a father.","文 - writing 「ブン」 The sitting man stands up, and you can see the writing on his shirt.","求 - demand 「キュウ」 You\'re facing a man, grabbing his lapels, wrinkling his shirt, and demanding something from him.  He thinks you\'re totally unreasonable... (giant sweatdrop)","救 - save 「キュウ」 The princess\'s father demands that you save her! demand father - save","口 - mouth 「コウ」 (Open wide!) Aaaaaaaaaa!","日 - sun 「ニチ」 Originally a dot with a circle around it to show the sun and its aura, it has been squared off.","月 - moon 「ゲツ」 Much like the sun, but more crescent-like.","目 - eye 「モク」 The eye is sideways: the iris is shown with the white on either side.","回 - around 「カイ」 The square wheels on the bus go around and round, round and round, round and round.","田 - paddy 「デン」 An area of ground with a neat grid of rice crops.","品 - goods 「ヒン」 Boxes piled up to show goods.","晶 - crystal 「ショウ」 See the light sparkle off of the crystal with the brightness of many suns.","明 - light 「メイ」 How do the sun and moon seem most important to us?  For their bright light.","唱 - chant 「ショウ」 The same sound coming out of a mouth for (what seems like) two days.","冒 - defy 「ボウ」 Defy the sun\'s power by staring into it (defiance isn\'t always so bright).","相 - together 「ソウ」 Through climbing, you see farther by using the tree and the eye together.","器 - utensil 「キ」 A roast dog surrounded by plates (and other eating utensils).","言 - say 「ゲン」 A mouth saying lines (imagine a speech bubble around the top half).","信 - believe 「シン」 You can believe a man who stands by what he says.","旦 - dawn 「タン」 The sun rises above the horizon to signal the dawn.","旧 - ex 「キュウ」 This line was the path of the sun yesterday, but it changes little every day.  It\'s just the ex-path of the sun now.\"ex\" meaning \"once-was, but is no longer\"","井 - well 「セイ」 A view from the bottom of a well, with rough walls and a tiny opening above.A water-type well.First you see the ring, and then you die.","囲 - surround 「イ」 A fence surrounds the well (so nobody falls in).","図 - map 「ズ」 X marks the spot on this treasure map, and ticks mark off the number of paces.Arrr!","区 - district 「ク」 The district is on the edge of the province, so it only needs three marked borders to be added to the map.","凶 - evil 「キョウ」 Pandora\'s box... when the top is opened the mysterious contents bring evil to the world!","困 - distress 「コン」 Trees need space.  This one is constricted, and in distress.","因 - cause 「イン」 The cause of \"big man\"\'s  imprisonment is the way he sticks his arms out all the time and knocks off people\'s hats.","耳 - ear 「ジ」 Hint: he\'s facing left.","甘 - sweet 「カン」 A smiling, open mouth with a candy inside (distorted and squared off, very much like the sun kanji).","曲 - melody 「キョク」 A pipe-organ playing a melody.","中 - middle 「チュウ」 A line through (indicating) the middle of a circle.","申 - communicate 「シン」 Two hands clasp at a meeting, then communication begins.","皿 - plate 「サラ」 Plates stacked in a drying rack.","門 - gate 「モン」 Just like the swinging doors in a western saloon.","問 - question 「モン」 The gates open a little, and through them a mouth asks, \"Who is there?\"","聞 - hear 「ブン」 After asking your name, the gate guard presents his ear to hear your answer.","間 - gap 「カン」 The sun shines through the gap in a gate left open.","開 - open 「カイ」 A little man flings the doors wide open with his arms","閉 - close 「ヘイ」 Sturdy cross bars and a thick brace hold these gates closed.","斤 - axe 「キン」 See the handle below and the edge facing left?The weight of a light hand axe, about a pound.","丘 - hill 「キュウ」 Giant Axe Hill is a famous sight on otherwise flat land.","兵 - soldier 「ヘイ」 Looking down the road, there\'s always another hill for a soldier on the march.","片 - piece 「ヘン」 A rough cut piece of wood with branches sticking out.Originally formed by cutting \"wood\" in half, but it gradually evolved into this shape.","久 - long-time 「キュウ」 It takes a long time for a person to grow a ponytail.","戸 - doorway 「コ」 Half of a gate is a simple door, or doorway.","尺 - foot 「シャク」 To build a bottom for this doorway, we need to measure one foot of length under it.","氏 - clan 「シ」 In Japanese, the clan name (surname) comes first, like the letter A.","民 - people 「ミン」 \"People\" is \"clan\" with another layer on top.  A people is a clan on a larger scale.\"a people\", not just the plural of \"person\"; a population","衣 - clothes 「イ」 A model in a hat with a long robe doing a swishy model walk to the right.See how one arm and leg trail, and the others swing way out in front?I put on my robe and wizard hat.","所 - place 「ショ」 Make a doorway with an axe to find a new place.","新 - new 「シン」 To make something new, you have to take an axe (right) to a tree (lower left) which is still standing (upper left).","底 - floor 「テイ」 A floor is drawn as a dot under a clan (in the sense of \"family\") in a tent.","低 - low 「テイ」 Crawling on the floor (tent omitted) is a very low position for a person.","史 - history 「シ」 A hand holding a scroll on which history is recorded.","虫 - bug 「チュウ」 A fat worm hanging from a branch, with a winding coccoon begun at its bottom.","蚕 - silkworm 「サン」 A heavenly bug indeed.","風 - wind 「フウ」 A bug seeks shelter from the wind by hanging under a table.","凡 - mediocre 「ボン」 This tiny bug seeking shelter from the wind is tiny and unimpressive, although that\'s typical of insects.  What a mediocre bug!","属 - belong 「ゾク」 Pull that hanging bug from under the table and throw it through the doorway, to where it belongs!Also means \"type\" or the category something belongs in.","仲 - relationship 「チュウ」 Person (left) with middle (right) = the feelings between people.","使 - use 「シ」 A person is unrolling a history scroll so he can use it to prove a point.","便 - convenient 「ベン」 Person (left) with horse (right, seen from behind) means convenient messenger.","自 - personal 「ジ」 This is a depiction of the bridge of the nose, which in Asia is commonly pointed to when indicating oneself.  Matters regarding oneself are personal.","白 - white 「ハク」 A white grain of rice.","百 - hundred 「ヒャク」 It takes a hundred grains of white rice to cover the flat plate on top.","首 - neck 「シュ」 A thick neck under the slit mouth, goatee, and nostrils of a rather odd-looking fellow.","面 - mask 「メン」 A scary cyclops mask with one big eye in the middle.","血 - blood 「ケツ」 After eating a rare steak, there is a drop of blood on the plate.","由 - reason 「ユ」 I don\'t know why they wanted this paddy so much.  Oh, that\'s an oil drilling rig, that\'s the reason!","兄 - big-brother 「ケイ」 A big mouth on two legs.  Big brother is such a tattletale!","鬼 - ogre 「キ」 Oh no!  Big brother has grown a horn, holds a club at his side, and has such a cross face...  You suspected he was an ogre all long!","見 - see 「ケン」 An eyeball standing up on legs to see over an obstacle.","貝 - clam 「カイ」 Like a cartoon scallop, this clam has a striped shell and a wide hinge at the bottom.As in the english expression, \"clams\" are often used to mean money.","円 - yen 「エン」 A banker teller\'s cage, under which yen are passed.The yen is the basic unit of Japanese money, analogous to a dollar, but closer in value to a penny.","用 - deploy 「ヨウ」 A bird-catching net up on its poles, and deployed.","冊 - book 「サツ」 Books on shelves.","甲 - shell 「コウ」 A picture of a tortoise, facing down with his neck sticking out.The tortoise shell is the first sign of the Chinese calendar, so it\'s also used to mean \"first class\".","買 - buy 「バイ」 Passing the clams across a counter (above) to buy something.","員 - member 「イン」 Someone who has put his money (clams) where his mouth is, and bought a membership.Also used to mean an employee, in which case the money is going the other way.","貴 - precious 「キ」 A precious thing is valuable like money (clams) and you want to show it off, like the wreath on a pole above.","責 - blame 「セキ」 When money (clams) is involved, blame sprouts up like weeds from the earth.","貯 - storage 「チョ」 A signpost and roof (right) indicating a place to rent storage space for money (clams).","資 - wealth 「シ」 Once you\'re wealthy, you don\'t have to worry about where your next (above) paycheck (money/clams: below) is coming from.","賀 - congratulation 「ガ」 Sometimes, congratulations spoken from the mouth have as much power as money (clams).","古 - old 「コ」 If something is said by ten mouths, it\'s old news.","舌 - tongue 「ゼツ」 Even if you look in a thousand mouths, you\'ll see a tongue every time.","宅 - home 「タク」 Home is where you can sit down and spread out your arms under a roof.","世 - society 「セイ」 Three \"ten\" kanji crammed together: thirty stuck together form a society.It\'s good to also think of it as crowd or group of people.","地 - ground 「チ」 There\'s a society of people living on this patch of earth.  Not just a clump of soil: ground.","他 - other 「タ」 There\'s society on the right, the default group, then this other person alone on the left.","売 - sell 「バイ」 A poor knight is on the other side of a counter, wanting to sell his armor.","声 - voice 「セイ」 There\'s a knight at the doorway, yelling that he\'ll break it down if you don\'t open up!  His voice is loud and frightening!","川 - river 「セン」 A simple picture of water streaming between two riverbanks.","州 - province 「シュウ」 A map with the provincial borders and their capitals.","水 - water 「スイ」 You get orange juice by squeezing an orange, so you get river juice by squeezing a river.","承 - accept 「ショウ」 You just have to accept that you can\'t get water by squeezing other things. Don\'t try it on something with thorns...","氷 - ice 「ヒョウ」 That tick in the upper left distinguishes ice from water.","永 - eternity 「エイ」 This moment is like a drop of water in the ocean compared to eternity.","泉 - fountain 「セン」 The water white and foamy from the fountain.","泳 - swim 「エイ」 If you can\'t swim, any time seems like eternity in the water (compressed to the left).","池 - pond 「チ」 A mucky little pond teems with life.  It\'s like there\'s a whole society in the water!","湖 - lake 「コ」 The moon looks like it\'s covered with old dried up lakes (in modern times, we know they are craters).  Real lakes have water.","流 - flow 「リュウ」 Right: Water depicted flowing out of a GIANT NOSE!  Left: really, it\'s just water.","内 - within 「ナイ」 A person stands within the boundary of a pen.","肉 - meat 「ニク」 Two people penned up to be used as food!Soylent Green is people!When this is drawn smaller, it looks exactly like \"moon\".","有 - have 「ユウ」 A hand holding meat (because it\'s small, it looks like the moon).  There\'s no doubt about having something when you can hold it in your hand.","青 - blue 「セイ」 Above is a green plant growing out of the ground, below is a blue moon.This blue/green is used to describe nature: it applies to both the sky and the grass.It is usually translated as \"blue\" in English.","清 - pure 「セイ」 Blue water is pure.","晴 - clear 「セイ」 When you look up and see the sun and a lot of blue it\'s a clear day.","害 - harm 「ガイ」 It is harmful to a plant to put it in a pot and bring it under a roof where it can\'t get light.","骨 - bone 「コツ」 Above, there\'s a limb sliced in half sitting on a counter, with the bone showing in the middle.  Meat on the bottom makes this clearer.","夕 - evening 「セキ」 A picture of the moon rising from behind a rooftop, in the evening.","多 - many 「タ」 Since there\'s normally only one, even two moons seems like many!","外 - outside 「ガイ」 A picture of the moon and a wall making it clear that you\'re outside.","死 - death 「シ」 In the evening of a person\'s life, he sits down and never rises again.","冬 - winter 「トウ」 A picture of a roof (with the moon rising over it) with icicles hanging down below.","列 - row 「レツ」 Dead bodies laid out in rows.","昼 - noon 「チュウ」 What?!  This isn\'t noon!  The sun is barely over the horizon!  Look at how many feet (top) it has to go before it gets to noon!","夜 - night 「ヤ」 After the evening, sensible people want a roof over their heads.","族 - family 「ゾク」 Poor old \"direction\" man and some other person (compressed, above) are confused, and are raising an arrow together as a family.","切 - cut 「セツ」 The poor sitting man gets cut right in half with a sword.","分 - part 「ブン」 With a knife, divide into eight parts.","貧 - poor 「ヒン」 When you only have part of the money you need, you are poor.","効 - effect 「コウ」 You need to put some power into mixing to get the proper effect.","勢 - energy 「セイ」 Energy is the power that makes the earth go around (in a circular path).","雨 - rain 「ウ」 Through the window, you can see drops of rain falling down.","雪 - snow 「セツ」 Like rain, but you can brush it away with your hand.","当 - hit 「トウ」 SLAP!  The hand hits a face, and the impact is shown with the lines above.","雷 - lightning 「ライ」 Between the rain in the clouds and the paddy below, lightning strikes.","電 - electricity 「デン」 Attach a cord to the lightning and supply electricity to your home.","手 - hand 「シュ」 I think the guy who drew this hand was a deformed recluse...No doubt the same guy who came up with \"tongue\".My name is Inigo Montoya, you killed my father, prepare to die.","毛 - hair 「モウ」 Hair tied back into a tail.Notice how, unlike \"hand\", it trails off to the right on the bottom.","屯 - barracks 「トン」 Warriors are compared to flowers for their short-lived glory.  This depicts a flowering plant (roots below, leaves above) with an unopened bud.  Unready warriors are left at the barracks.","友 - friend 「ユウ」 Two hands held together in friendship.","乃 - from 「ナイ」 Stairs are discrete steps in a particular sequence.  One step follows from the next.","及 - reach 「キュウ」 A hand superimposed over the staircase of \"from\".  With your hand, reach all the way upstairs.","支 - branch 「シ」 A hand holding up a branch.A figurative branch.","受 - receive 「ジュ」 A hand passing a baton to another which receives it.","授 - grant 「ジュ」 A pushing-away hand added to \"recieve\" to turn it into \"grant\".","争 - struggle 「ソウ」 One hand yanking a baton out of another hand.","取 - take 「シュ」 A hand grabbing an ear, and ripping it off.Taking an ear for a trophy.","収 - obtain 「シュウ」 A hand obtains a forked branch from the ground.","最 - most 「サイ」 It takes a crazy person to rip someone\'s ear off, but only the most crazy would do it in the clear light of day.","枝 - tree-branch 「シ」 Wood is added to \"branch\" to make it clear that it\'s a real piece of wood from a tree.A literal branch.","心 - heart 「シン」 A picture of the heart and major blood vessels around it.","亡 - perish 「ボウ」 A picture of a lidded urn (for the ashes of a cremated corpse).","必 - certain 「ヒツ」 There is no room for an emotion like doubt, when it is certain.","応 - respond 「オウ」 Sneak a heart into someone\'s tent, just to see how they respond.","泌 - fluid 「ヒツ」 Cut the heart, and the red water flows out.  Whatever can flow is a fluid.More specifically, bodily fluids.","愛 - affection 「アイ」 Passing one\'s heart indicates affection.","忘 - forget 「ボウ」 Forgetting is like an idea perishing in your heart.","思 - think 「シ」 In a farmer\'s heart, he will always think of his paddy.","志 - will 「シ」 A strong will is at the heart of the knight.","忠 - loyalty 「チュウ」 Loyalty means keeping your friends\' interests in the middle of your heart.","息 - breath 「ソク」 Breathe through your nose to keep your heart pumping.","想 - idea 「ソウ」 Sharing an idea brings hearts together.","化 - change 「カ」 Standing person + sitting person = a change of shape.","比 - compare 「ヒ」 Left and right look similar, but compare them: they are not the same.","北 - north 「ホク」 Two little people sitting back to back leaning against the North Pole on the top of a globe.","花 - flower 「カ」 A plant changes its appearance dramatically when it grows flowers.","早 - early 「ソウ」 The sun is just peeking over the horizon.  The distant person watching it rise casts a long shadow.","朝 - morning 「チョウ」 Early (with an extra cross for balance) when you can still see the moon.","草 - weed 「ソウ」 The plants that grow fastest, and earliest into new ground, are weeds.","楽 - pleasant 「ガク」 A speaker in a tree, blaring music = a pleasant outdoor party.","薬 - drug 「ヤク」 A pleasant plant which puts you at ease is a medicinal drug.","麻 - hemp 「マ」 The little trees grown secretly in an enclosed location are hemp.(hemp is the marijuana plant, in the past it was commonly used for making rough cloth and rope)Also means flax (which is used for producing linen), so basically, cloth-producing plants.","寸 - measure 「スン」 A thumb pressing against the wrist of a stylized hand measures the pulse.Strongly associated with law and order as well, think \"measure of justice\".","勺 - ladle 「シャク」 Only the scoop part of the ladle is pictured, with a drop of liquid in the middle.","以 - because 「イ」 A funny tall person (right) puts a bit of bait on the hook because that\'s the only way he\'ll catch fish.","付 - attach 「フ」 What can you attach most solidly onto a person?  Handcuffs.  Where do you attach it?  Same place you measure pulse.","村 - town 「ソン」 Where the measure of justice of human civilization meets the trees of the forest is a town: humanity\'s outpost in the wilderness.","包 - wrap 「ホウ」 Scooping up more than a drop of soup in a ladle, a noodle wraps around the bottom.","可 - able 「カ」 Although stretched out, the T-shape is still a signpost.  Prove that you can read the sign by reading it aloud with your mouth.  If you can, you are able to.Note that the top lines meet without crossing, unlike \"measure\".","句 - phrase 「ク」 A phrase is like a ladle-full of words from your mouth.","向 - facing 「コウ」 The penned-up, hungry, open-mouthed meat people face toward the pieces of food being thrown over the fence.","同 - same 「ドウ」 Each hungry person in the pen gets fed one piece: each the same.","司 - govern 「シ」 One person stands in the corner of the pen, and makes sure each poor victim gets to eat his one piece of food.  Though his kingdom is small and miserable, he governs well.","何 - what 「カ」 The person who is not able to read the sign can only say, \"What?\"","河 - stream 「カ」 Water follows whatever path it is able to, forming a stream.","荷 - load 「カ」 If someone is carrying a load of hay in a story, someone is probably hiding in it.  In a load, you see grass, but you wonder, \"What\'s in it?\"","寺 - temple 「ジ」 The ground is carefully measured to build a temple.","詩 - poetry 「シ」 They speak poetry at the temple.","時 - time 「ジ」 There\'s a sundial at the temple which is used to tell time.","持 - hold 「ジ」 When your life goes wrong, people at the temple will hold your hand and make you feel better.","等 - class 「トウ」 Regardless of social class, the little people (top) go to the temple together.\"Class\" as in quality or category.","丁 - signpost 「チョウ」 A simple drawing of a signpost.","行 - go 「コウ」 On the right: one signpost.  Left: a compressed version of the same thing.  As you go, you pass signposts.Just the left half of this is used to mean \"go\" in other kanji.","打 - pound 「ダ」 Pound the signpost with your hand to drive it into the ground.","待 - wait 「タイ」 It\'s the priest\'s birthday, so everyone goes past to the temple to quietly wait to surprise him with a party.","得 - gain 「トク」 On a journey: Gain quite a measure of distance by going at dawn.","街 - avenue 「ガイ」 Earth and more earth squeezed in the middle of \"go\": a broad paved avenue.","径 - path 「ケイ」 Walk on your hands until you wear a path in the earth.","庁 - board 「チョウ」 A sign and a tent are examples of things that can be held up with one board.It was painted with cheap paint that will wash off in the rain, but you don\'t have better paint, only a board!","町 - block 「チョウ」 The city is divided up into pieces like rice paddies, but each block has signposts at the corners for the street names.","灯 - lamp 「トウ」 Something like a fire on something like a signpost.","寧 - tranquil 「ネイ」 The heart sheltered as if under a roof.  A plate of food.  A clear sign showing the way.  A feeling of ease and peace.  All is tranquil.","名 - name 「メイ」 The value of your name rests on what is said about you.","各 - each 「カク」 In winter, each roof has hungry mouths under it.","客 - visitor 「キャク」 It\'s a guest house!  Each under this roof is a visitor.","君 - noble 「クン」 The hand holds a utensil to bring food to the mouth.  In the crude-mannered past, only nobles ate like this.Used in words showing great respect.Also used to politely indicate a person of junior status, as a honorific suffix or personal pronoun.","石 - stone 「セキ」 A small stone lies at the base of a hill.Notice that the lines of the hill don\'t cross.","右 - right 「ウ」 The right hand is used to put food in your mouth.Notice that this cross-like shape indicates a hand, unlike the hill shape in stone.","左 - left 「サ」 The left hand holds the carpenter\'s ruler.","山 - mountain 「サン」 A simplified picture of a mountain, with three peaks.","岩 - rock 「ガン」 A rock is something between a great mountain and a mere stone.","炭 - coal 「タン」 Ash under the mountain.  Underground fuel.  Dig up coal.","岸 - beach 「ガン」 Any land is a mountain from the sea floor, and any coast is a cliff, but only dry sand makes a beach.","砂 - sand 「サ」 A few stones are usually found among the sand.","研 - sharpen 「ケン」 Clamp your blade in place and use a stone to sharpen it.","馬 - horse 「バ」 An image of a horse, with the streaming mane, four legs,  and a tail.","鳥 - bird 「チョウ」 Horsefeathers!  Note that there is no streaming mane.","鳴 - cry 「メイ」 The bird opens its mouth to make a cry.\"Cry\" in the sense of an animal noise.","島 - island 「トウ」 A bird flies over a mountainous island.","駅 - station 「エキ」 A horse must rest at intervals of a certain length, that\'s why they first made stations.","王 - king 「オウ」 The king binds the earth below, heaven above, and humanity in the middle.","玉 - jewel 「ギョク」 A jewel is something a king might wear.","国 - country 「コク」 The jewel-wearing king rules this enclosed area, so it\'s a country.","宝 - treasure 「ホウ」 Treasure is something that is protectively hidden, like this jewel under a roof.","主 - lord 「シュ」 A lord is just a tick less than a king.","往 - journey 「オウ」 Go on a journey at your lord\'s command.","現 - present 「ゲン」 The king sees all that is happening in the present.\"Present\" in the senses of \"to show\" or \"current\", not a gift.","両 - both 「リョウ」 This old-fashioned detonator (background) is wired up to two little sticks of dynamite (foreground).  Both will blow up when the handle is pushed down.","画 - brushstroke 「ガ」 An avant-garde artist dips a sponge on a string hanging from a stick in a bucket of paint before he makes a dramatic(ly overpriced) single-stroke painting.","再 - again 「サイ」 The old-fashioned \"both\" detonator (background) need to be moved yet again behind a fresh patch of earth (foreground) to keep blowing things up, because it destroyed the shelter again.","共 - all 「キョウ」 There are crosses on either side of the road leading to Rome, so everyone can see the criminals being executed.  All roads lead to Rome.","供 - offer 「キョウ」 Person + all = everyone.  Everyone has something to offer.","異 - unusual 「イ」 Even in a bad year, it\'s unusual for all paddies to fail.","生 - life 「セイ」 A weed sprouting from the ground with a leaf growing on it indicates life.","牛 - cow 「ギュウ」 The cow only eats the life sprout, not the ground it sits on.The cow eats the whole plant, even the tip!","午 - midday 「ゴ」 Even though the cow ate it for breakfast, by midday the lively sprout has grown back all but the tip.","年 - year 「ネン」 A year after the cow ate it, the little sprout has grown tangled branches.","缶 - can 「カン」 (scene of rugged man eating by a campfire) This kanji has been brought to you by Mountain Noon (R) brand Lunch in a Can!This means a tin can or similar container.","朱 - crimson 「シュ」 This sprout was afraid to be eaten, so it hid on top of a tree.  It was so embarrassed by its cowardice that its leaves turned crimson!","出 - leave 「シュツ」 Another weedy sprout, with lots of leaves: \"Make like a tree and leave.\"This means \"to go out\", it doesn\'t actually have anything to do with plant leaves.","性 - nature 「セイ」 It is the nature of weedy life sprouts to be small.\"Nature\" meaning character or set of traits.Also means \"gender\".","星 - star 「セイ」 A star is something that lives it\'s life like the sun does.Alternatively, a star is pictured above a life sprout.","告 - tell 「コク」 Words take on a little life of their own when you open your mouth.  Be careful of who you tell!","許 - permit 「キョ」 Stop goofing off at work!  You are only permitted to talk on your lunch break at noon!","株 - stump 「カブ」 To get the pretty crimson tree-climbing weed, cut its tree down.","対 - opposite 「タイ」 Trust in writings versus measurements.  Faith vs. logic = opposites.","材 - lumber 「ザイ」 The sturdy cross bars from \"close\" (which are made from trees) are an example of lumber.","糸 - thread 「シ」 Fingers twist thread (bottom) from fibers over the edge of a table.","系 - lineage 「ケイ」 At the top is a finished line of thread, underneath \"thread\" depicts the making of it: your lineage is the way you were made.","光 - ray 「コウ」 Rays are emitted in all directions from a central point.","先 - point 「セン」 The point of an old arrow, which has rusted into a virtual skeleton of itself over the years.As \"point\" it also means \"that which comes/came first\", so it can indicate past times or preceding people.The changes are similar to those that happened to the arrow kanji.","洗 - wash 「セン」 Wash the blood off of your arrow point in water.","紙 - paper 「シ」 The A of \"clan\" here just means letters, while \"thread\" symbolizes cloth.  Paper is like a cloth covered with letters.","前 - before 「ゼン」 On top is a sunrise, on the left the moon, and the right, swords.  Before the sun rises, only the moon cuts the darkness.Also means \"before\" in the spatial sense (\"in front of\").","空 - void 「クウ」 A hole, indicating emptiness, and a carpenter\'s ruler.  An emptiness in which something may be built.","続 - sequel 「ゾク」 A sequel continues the thread (left) of the story so they can sell (right) you another book.Really means any kind of continuation.","女 - woman 「ジョ」 Person with a big belly: a picture of a pregnant woman.","安 - ease 「アン」 Coming home to his wife and house puts a man at ease.This is usually more specifically \"peaceful\" (easy to live)  or \"cheap\" (easy to acquire).","案 - plan 「アン」 The lonely monk who invented this one assumed everyone obsessed over plans to build a hidden treehouse and have a secret girlfriend.","妹 - little-sister 「マイ」 Tip woman: little sister still has to stand on the tips of her toes to reach things.","姿 - figure 「シ」 In a women\'s beauty contest, after the face the next most important thing is her figure.","姓 - surname 「セイ」 Sprouts (children) of the family tree share a surname with their mothers.  (it\'s hard to be sure they have the same one as their father)","母 - mother 「ボ」 Woman with one soul in the head, and one in the belly.","舟 - boat 「シュウ」 Only the tower of this submarine boat is visible poking up through the water.","毎 - every 「マイ」 Every person (top) has a mother (bottom).","海 - ocean 「カイ」 The ocean is big enough that every drop of water could go into it and it wouldn\'t rise.","船 - ship 「セン」 A boat (left) big enough for at least eight mouths (right) is a ship.","航 - voyage 「コウ」 The boat with a picture of a sail unfurling from the crossbeam it was tied to (the mast top peeks out above).  Time to go on a voyage!","沿 - along 「エン」 All eight seasick mouths line up toward the water along the rail of the ship.Ugh!  Salty!","毒 - poison 「ドク」 I think every young boy suspects his mother is trying to poison him with those nasty weedy vegetables.","梅 - plum 「バイ」 Every tree is a plum tree.The monk from Plum Valley Monastery who made up this one had limited experience with trees...","桜 - cherry 「オウ」 A woman reaches up to pick cherries (dots) from a tree.The same monk who named the plum tree did once hear a fantastical story of this smaller and sweeter fruit and these smaller and sweeter people.  Poor guy.","油 - oil 「ユ」 An oil well being drilled in a paddy to get at the valuable liquid.","届 - notice 「トドケル」 A government man comes to your door to give you notice that because your property contains strategically-important oil, it is being annexed for development.","介 - between 「カイ」 You live in the space between walls and roof.","界 - world 「カイ」 To a farmer, the world is that mysterious place between the paddies he lives in.","男 - man 「ダン」 The man\'s strength is used working in the paddy.","果 - fruit 「カ」 A great big, juicy fruit grows on top of a tree.","巣 - nest 「ソウ」 That\'s not a fruit!  There are wasps buzzing around it!","単 - single 「タン」 Poor scarecrow.  His head is full of wasps so no lady scarecrow will take him.  He\'ll be single forever.Also means \"simple\".","胃 - stomach 「イ」 Meat and rice from the paddy are all your stomach cares about.","畑 - farm 「ハタ」 To start a farm, you burn an area of land to clear space for a paddy to plant your crops in.","里 - village 「リ」 Earth that\'s near the paddies, but no good for growing itself, is where to build a village.","黒 - black 「コク」 Burn the village!  Leave nothing but black ashes!  Muahahahahaha!","子 - child 「シ」 Big head, tiny body, arms flailing around playfully.","予 - previous 「ヨ」 Previously, this was a child, but look how much smaller his head is compared to his body, and how broad his shoulders have grown.There comes a time in every boy\'s life when he takes a rat\'s tail to a dragon king...","矛 - lance 「ム」 ...and as young men will do, the previous child has run off and gotten himself killed in war.  You can see the heavy lance stabbing right into his chest.","才 - talent 「サイ」 It takes talent to hit the previous child with your lance so perfectly that his head comes off!Also means ability, especially intelligence or talent.","戈 - halberd 「カ」 A picture of a ceremonial halberd, or long-handled war axe with a back hook and a scalp hanging from the tip.","字 - letter 「ジ」 In Japan, kids spend all day indoors copying letters to learn them.","宇 - roof 「ウ」 If it\'s still raining, you have to hang your knight upside down under a roof to dry him off.","孫 - descendant 「ソン」 A child of your lineage is your descendant.","好 - fond 「コウ」 Mother (woman) and child are fond of each other.","序 - initial 「ジョ」 The initial step in the sequence of the previous child becoming a soldier was to go into the recruitment tent.Especially means \"first in a sequence\" such as the introduction of a book.","存 - keep 「ソン」 A friendly hand bars a child\'s path.  You have to actively work at keeping some things where they belong.","在 - exist 「ザイ」 A friendly hand bars the crumbling of piled earth - earthen construction - something very solid and imposing - undeniable concrete existence.","式 - rite 「シキ」 A rite combines ceremony and precision. Hence the ceremonial halberd, and the craftman\'s ruler.","代 - substitute 「ダイ」 In a curious local custom, an elaborate halberd with a certain man\'s scalp attached could stand in as his substitute for important ceremonies.","成 - become 「セイ」 The left is a slightly distorted \"power\".  When you get a weapon, such as a halberd, you become powerful.","誠 - fidelity 「セイ」 As he says he will make it, so it becomes.","城 - castle 「ジョウ」 The original castles were little more than hills of piled earth with a fence on top to fight behind.  When you pile it up, what does earth become?(Like Horatius at the bridge.)","戦 - battle 「セン」 The peaceful monks who invented these letters were so timid they\'d report even the sight of a single weapon as a battle.","市 - market 「シ」 A tailor in a hat stretches out his arms to measure bolts of cloth.","姉 - big-sister 「シ」 Big sister is the woman old enough to go work at the market.","長 - long 「チョウ」 A crooked old man, bent over and leaning on a stick (facing left), with his long white hair trailing in the wind.Also means \"chief\".","帳 - register 「チョウ」 When the tailor takes off his market hat, his day is not over.  He still has to record all of his business in the register so his old boss can go over the books.","布 - cloth 「フ」 The hatless tailor (within) from the market has cloth in his hands (enclosing) all day.","肺 - lung 「ハイ」 Nobody likes lungs.  It\'s the meat everyone takes to the market to sell.","労 - labor 「ロウ」 Pouring your power into labor.","奴 - servant 「ド」 Originally \"handmaiden\" (female personal servant), it is no longer sex-specific.It has lost even more specificity so it can be used for general-purpose third-person pronouns.","努 - toil 「ド」 The servant\'s power, or strength, is used for constant hard work.","加 - add 「カ」 Call with an open mouth for the power of others to join your own.  Add it to yours.","羽 - feather 「ウ」 A pair of wings with feathers falling off.","飛 - fly 「ヒ」 An image of a stork taking flight.  You can see the wings on the right, its long open beak atop, and its round little body with long legs beneath.","習 - practice 「シュウ」 The bottom is actually an abbreviated \"personal\" not \"white\".  Though they can be shown how, birds must practice themselves before they can fly on their own wings.","危 - danger 「キ」 A man on his hands and knees peeks over the edge of a cliff at his friend who has fallen and sits injured and stranded.  Look out!  It\'s still dangerous!","角 - angle 「カク」 Carefully measure the angle with a special tool for the grid paper on your two-legged drafting table.","魚 - fish 「ギョ」 It\'s a picture of a fish, with a scaly body, fanning tail, and pointy head.","負 - lose 「フ」 Pinching fingers grab your clams.  You lose!","色 - colour 「ショク」 A man on his hands and knees on a roof peeks in an open window.  He may be a pervert, but he\'s still embarassed, so bright colour shows on his face.Also used to refer to sexual feelings.","解 - dissect 「カイ」 A knife and things you can dissect: cattle and fish.","漁 - fishing 「ギョ」 Pulling fish from the water.","竹 - bamboo 「チク」 Thin trees that grow packed close together with leaves on top are bamboo.","笛 - flute 「テキ」 Originally, the reason to grow bamboo was just to make flutes.","箱 - box 「ハコ」 Join pieces of bamboo together to make a box.","笑 - laugh 「ショウ」 Bamboo calamity: getting whacked with a stick.  It\'s slapstick comedy, so laugh.Technically, the part below is written as \"calamity\", but it looks much like \"heaven\".","筋 - sinew 「キン」 Power meat that is strong and flexible like bamboo.","簡 - simple 「カン」 A simple, crudely constructed object is made of bamboo sticks that are poorly joined and have gaps everywhere..","具 - device 「グ」 Looking down the road, your path is blocked by a stack of enormous rocks.  Though they are smarter than their trollish cousins, who merely find bridges to hide under, this is the most complicated toll-collecting device ogres can build.","算 - abacus 「サン」 Bamboo tiles on a pair of strings, so you can slide them back and forth to keep count.","鼻 - nose 「ビ」 Top to bottom: the bridge of the nose, the nostrils, and upper lip with that little divot above it.","夏 - summer 「カ」 \"Personal\" under a line (self covered by blanket) also looks similar to \"hundred\".  About a hundred days when you want to sleep on top of the roof.","立 - stand 「リツ」 A view from the waist down: the hips and legs standing firmly on the ground.","位 - standing 「イ」 How a person carries himself, showing his status.This has nothing to do with the physical act of standing, but rather their social standing.","音 - sound 「オン」 At sunrise (when the sun stands up), there is the sound of the rooster crowing.","意 - mind 「イ」 Your mind is the voice of your soul, the sound of your heart.","章 - poem 「ショウ」 Ten sounds in a poem.  Poetry shorter than a haiku! -OR- Stand up early to sing your song before your band comes.  There is no music, so it\'s just a poem!","童 - kid 「ドウ」 The village is where you \"stand up\" (grow up) from childhood before going out into the world.","野 - plains 「ヤ」 The village was previously just flat plains (a mountainous area would be no good for a village).","翌 - following 「ヨク」 One day, the chick hatches.  The following day, it stands (bottom).  On the day following that, it spreads wings (top) and flies.","泣 - weep 「キュウ」 To stand with drops of water falling at one\'s feet.","束 - bundle 「ソク」 An encircling rope ties the branches of a tree into a bundle.","東 - east 「トウ」 The sun rises behind a tree in the east.","京 - capital 「キョウ」 A heavy stone lantern to mark the entrance to the capital city.  These things were terribly expensive, and only at the capital.","車 - wheel 「シャ」 It\'s a top-view of a chariot, with a wheel at the top and a wheel at the bottom.Also means any wheeled vehicle.","重 - heavy 「ジュウ」 A double-wheeled, extra heavy-duty chariot for carrying heavy loads.","垂 - sag 「スイ」 The extra-heavy load which overlaps the edges is placed on a regular two-wheeled chariot, and it sags under the weight.","乗 - ride 「ジョウ」 Can you give me a ride?  I put too heavy a load on my chariot.  It\'s smashed to pieces on the bottom side!  So now I need a ride...","平 - level 「ヘイ」 An image of scales in balance.  The arm is perfectly level.Also used to indicate fairness, justice, and equality.","半 - half 「ハン」 In the background is \"two\".  Because the two lines aren\'t perfectly equal, you have to cut them both down the middle to get halves.  Ticks emphasize the dividing line.","並 - common 「ヘイ」 As opposed to \"half\", in this one, there are at least two of every mark, and none are unique or special.  All are common in this character.","羊 - sheep 「ヨウ」 Poor thing.  This sheep has been shot right through with an arrow and now it\'s on a spit for roasting.  Its legs stick straight out.  You can tell it\'s a sheep from the little horns on its head.Also used for goats, antelope, and similar creatures.Mmm... sheep on a stick!","南 - south 「ナン」 South of Japan are New Zealand and Australia, where sheep are kept in caves under the ground.","洋 - sea 「ヨウ」 To get to the sheep places in the south, the water you cross is the sea.","呼 - invite 「コ」 Notice that the normally level scales are tilted.  Not everyone is invited.  You\'re showing special favor to someone when you speak to invite them.","己 - self 「コ」 S for self! (okay... it\'s backwards.  whatever)","記 - chronicle 「キ」 If you let someone speak about himself without interrupting, he\'ll give you the whole chronicle of his life.","改 - amend 「カイ」 So you\'re about to become a father!  It\'s time to amend yourself, correct your habits and behavior to be appropriate to your new role.","弓 - bow 「キュウ」 Now that\'s a fancy bow!  The handle is far ahead to the left and it has a sharp recurve.","引 - pull 「イン」 You pull the string of a bow to use it.","張 - stretch 「チョウ」 Pull the bow a long way to stretch it.","弱 - weak 「ジャク」 Try to pull the bow once... try to pull twice.  Too weak!","強 - strong 「キョウ」 A bug that can pull a bow is very strong indeed!","止 - stop 「シ」 It\'s a spur-wearing foot facing left, nailed to the floor to stop all movement.Used just as \"foot\" in composite kanji.","正 - proper 「セイ」 It is proper to stop your foot at the line before a foot race.","定 - determine 「テイ」 Go home (under your roof) and think carefully so you determine the proper thing.","足 - leg 「ソク」 They circled the part above the stopped foot.","走 - run 「ソウ」 Put feet to earth and run!3... 2... 1...","歩 - walk 「ホ」 Move your foot a few times, and you\'re walking!","整 - organize 「セイ」 Your room is a mess!  Father insists that you organize things properly into bundles.","歯 - tooth 「シ」 The bottom is a mouth full of jagged teeth. A tooth chews things and crushes them like a foot stomping....first they champ, then they stamp, then they stand still.","噛 - bite 「コウ」 Open your mouth and use teeth to bite.","爪 - claw 「ショウ」 Three claws on a paw.","証 - proof 「ショウ」 If the proper person says it, that is proof.","合 - join 「ゴウ」 Top: A beam joins two rafters in a roof. Bottom: your teeth join together when you close your mouth.","今 - now 「コン」 The fellow who made this one up looked at the wall under his roof, and saw that it was 7 o\'clock.  (He didn\'t think very hard about whether it would still be \"now\" when someone read it.)","令 - command 「レイ」 The bottom is a picture of a person kneeling.  The knight kneels in the hall of his lord to receive a command.","命 - fate 「メイ」 It is only fate that one ends up speaking commands, and another kneeling to receive them.","谷 - valley 「コク」 A mouth screaming in fear as rocks fall from the mountains onto the roof overhead.","不 - un 「フ」 A bird flying swiftly upward hits a ceiling.  The sky is UNreachable.","否 - no 「ヒ」 What comes out of your mouth when you\'re UNagreeable.","含 - contain 「ガン」 Those things which are in your mouth now are contained by it.The original, literal meaning is to hold in the mouth, but it is used as a metaphor for many things.","念 - thought 「ネン」 Thoughts appear suddenly.  One minute, your mind is blank, now the thought\'s in your heart!","冷 - chill 「レイ」 With only one drop, the left side means \"freeze\" not \"water\".  The clumsy wizard gives a magic command to \"Freeze!\" but it only chills a bit...","給 - supply 「キュウ」 Supply clothes by joining cloth with thread.","答 - solution 「トウ」 A bamboo puzzle.  Can you join the pieces together and find the solution?","喜 - rejoice 「キ」 The middle is a picture of a bongo drum.  The knight bangs on a drum and sings with his mouth open.I don\' wanna work, I just wanna bang on de drum all day!","嬉 - happy 「キ」 Rejoicing with drum music and women... how could you not be happy?","倍 - fold 「バイ」 A person stands and holds a side with his mouth/chin to fold a big sheet.","容 - capacity 「ヨウ」 Imagine a giant roof-like lid on top of a valley to picture a container of great capacity.","舎 - living-area 「シャ」 Don\'t track earth into the living area under the house roof, or you\'ll get yelled at!","捨 - discard 「シャ」 Grab some garbage from your living area and throw it out.","豆 - bean 「トウ」 A close-up of a beanstalk.  Between two bars of the frame, a round bean grows over a pair of leaves.","后 - empress 「コウ」 The empress wears a fancy head-dress with a circlet and trailing cloth.","高 - tall 「コウ」 A two-story building is tall.","官 - bureaucrat 「カン」 The man with a big mouth and fat belly who sits under a roof all day is a bureaucrat.","局 - bureau 「キョク」 The unemployed, roofless bureaucrat has a hollow feeling of hunger in his belly, so he makes up a new bureau to employ him.","宮 - shrine 「キュウ」 A shrine with a big-bellied buddha protected by a roof.","頭 - head 「トウ」 The right side is like a cross between clam, personal, and hundred.  Your own head is worth more than a hundred clams.  \"Bean\" indicates the physical head.The \"head\" radical used to be a character by itself long ago, but isn\'t now.","順 - sequence 「ジュン」 The proper sequence is as natural and obvious as water flowing from high to low or the neck connecting the head to the body.","領 - territory 「リョウ」 The head commands the body.  The body is the head\'s territory.","預 - deposit 「ヨ」 So you decide to deposit something with someone.  You previously left it with him, and if he doesn\'t have it when you come back you\'ll cut off his head!","額 - forehead 「ガク」 It\'s polite to offer visitors a cloth to wipe their foreheads and refresh themselves.","頂 - summit 「チョウ」 A sign marks the summit, which sits atop the mountain as the head sits on the body.","営 - camp 「エイ」 Make a temporary camp in Buddha\'s shrine, but leave some little things as an offering on the roof.Figuratively, it is used to mean \"occupation\".","登 - climb 「トウ」 The top here is two feet back to back.  Put your feet on the magic beanstalk to climb it.","発 - emit 「ハツ」 The little door opener goes outside and waves his shoes (two feet back to back) around.  If they\'re going to emit a bad smell, they had better do it outside.","浴 - bathe 「ヨク」 Water collects in low places, so people go to the valley to bathe.","俗 - custom 「ゾク」 When rocks fall on your valley home, the normal custom is to go outside so you won\'t get crushed.","宣 - proclaim 「セン」 The master builder boastfully proclaims that he will build the house from floor to roof in just one day!","倉 - cellar 「ソウ」 It\'s a picture of a cellar entrance.  Under the roof of a house, the double door opens downwards, like a gaping mouth.","富 - rich 「フ」 A rich man has a whole paddy to feed only one mouth under his roof.","芽 - sprout 「ガ」 At the top is a grass crown, showing that this is about plants.  A seed sits atop the surface of the soil, and sends roots down into it when it sprouts.","米 - rice 「ベイ」 Rice is like a little tree with edible grains at the top.","来 - come 「ライ」 When rice is cooked in the pot, it\'s time to come home for supper.","釆 - grind 「ハン」 You can just see the bottom of the grinding stone as it\'s about to roll over the rice and take the hull off.(This doesn\'t exactly mean \"grind\", and I don\'t think this is actually used in any words... I\'m just teaching it because it\'s a common radical.)","番 - turn 「バン」 At harvest time, you take turns grinding the hulls off the rice and harvesting it in the paddy.\"Turn\" as in your time to do something.","季 - season 「キ」 Each season has some special activities.  In the harvest season, for example, children help grind the rice.","粉 - flour 「フン」 Rice cut up into tiny parts is flour... more or less.","料 - fee 「リョウ」 You carefully divide up the rice to pay a percentage fee at the market.","精 - vitality 「セイ」 Young rice shows its vitality with its green colour.","葉 - leaf 「ヨウ」 A whole society of these plant thingies lives on a tree.","黄 - yellow 「コウ」 Looking down the road, yellow dandelion weeds sprout up in the edges of the paddies on either side.","若 - young 「ジャク」 Only young children will grab handfuls of grass and stick it in their mouth.","茶 - tea 「チャ」 The plant you drink when you sit under a roof, which is made with leaves plucked from trees.","蒸 - steam 「ジョウ」 When you heat water with fire for tea, it makes steam.","汽 - vapor 「キ」 On the right, puffs of vapor are shown rising from a boiling pot.","気 - life-energy 「キ」 Life energy is something intangible like vapor.","苦 - suffer 「ク」 Think of the Jesus story, with the grass crown as a crown of thorns, and \"old\" below as a hill with a cross on it.","良 - good 「リョウ」 A kindly old man with a giant eye and a tuft of hair, who is walking along with a walking stick (left) and giving you a friendly wave (right).  He\'s a good guy.","食 - food 「ショク」 The kindly old man eats good things under a roof.","朗 - fine 「ロウ」 A good day clear enough to see the moon means fine weather.","眼 - eyeball 「ガン」 Two example eyeballs: an eye plus the kindly old man with the big staring eye.","飼 - raise 「シ」 When you raise animals, you give them food and govern them.","反 - oppose 「ハン」 A hand putting up a hill to oppose the advance of enemy forces.","皮 - pelt 「ヒ」 A hand holding a knife, cutting the pelt off of a beast as big as a hill.","圧 - pressure 「アツ」 The earth beneath a hill is under a lot of pressure.","坂 - slope 「ハン」 Earth (left) plus the hand putting up a mound of dirt to form a slope.","板 - plank 「ハン」 Trees (left) generally oppose (right) the creation of planks.","仮 - temporary 「カ」 A person\'s opposition to your reasonable objection is usually temporary.","服 - outfit 「フク」 Bending around to put on an outfit with a hand to cover the flesh/meat.","公 - public 「コウ」 In the middle is a nose as a symbol of yourself, or your own private concerns.  broken-private -&gt; non-private -&gt; public","松 - pine 「ショウ」 The pine tree is called a public tree because it grows everywhere.","台 - pedestal 「ダイ」 A nose statue upon a square pedestal.","治 - reign 「ジ」 The desert king reigns by sitting atop a pedestal and saying who may have water and who may not.","広 - spacious 「コウ」 Only one nose in a tent has a wide space around it.","仏 - buddha 「ブツ」 The buddha is a person who has found his innermost self.","至 - arrive 「シ」 An image of a bird swooping down from the sky to arrive at the earth.","会 - meet 「カイ」 Two noses under one roof to meet.","伝 - conduct 「デン」 Two travel together: one is the traveler himself, and there\'s another person who conducts him to his destination.","屋 - dealer 「オク」 Goods arrive behind the door of the dealer.","室 - room 「シツ」 A place under a roof which you arrive at is a room, as opposed to a corridor, which you merely travel through.","私 - me 「シ」 On the left is a tied bundle of rice which symbolizes life and survival.  The living self is \"me\".","委 - devote 「イ」 Farmers devote themselves to their rice and their wives.","和 - peace 「ワ」 Enough rice for every mouth makes things peaceful.","利 - profit 「リ」 Your cut of the rice is your profit.Also means (banking) interest, portion, advantage, or good hand.","科 - section 「カ」 The rice fields are carefully divided into sections for each farm worker to tend.","秘 - conceal 「ヒ」 It\'s certain that every farmer conceals part of his rice production from the tax collector.","秒 - second 「ビョウ」 In an hourglass filled with rice, a few grains slip by every second.The unit of time.","移 - shift 「イ」 A farmer must shift many bundles of rice around at harvest time.A change of location or other attributes.","秋 - autumn 「シュウ」 In autumn, after the harvest, each farmer burns one bundle of rice as an offering to the gods.","程 - process 「テイ」 The king\'s rice must be prepared according to a special process before it goes in his mouth.","占 - foretell 「セン」 A rail-thin witch with a very long warty nose sits behind a crystal ball, foretelling your future.","点 - spot 「テン」 The witch dropped her crystal ball in the fire, and now it\'s got a big black spot of soot on it.","店 - shop 「テン」 The magic shop is a simple tent with a fortune-telling witch working the counter.\"Shop\" meaning a place to buy things.Did we save up enough for ICE2 yet?","居 - be 「キョ」 An old person tends to be behind doors, rather than outside.\"Be\" referring to the existence, location, or status of some animate object, such as a person.","酒 - booze 「シュ」 The right side is a partly-full bottle.  Booze is a liquid you often keep around in the bottle instead of drinking it all at once.","要 - need 「ヨウ」 The monk who came up with this one was secretly an alcoholic womanizer.  His idea of what you need consisted of a bottle and a woman.","尊 - exalt 「ソン」 Measure out the exalted booze.","配 - distribute 「ハイ」 Distributing the booze mostly to yourself.One for Taro, one for me, one for Kazuo, one for me, one for Masaki, one for me...","価 - value 「カ」 Look at that giant, full bottle of booze!  It must be valuable!","温 - warm 「オン」 The sun warms water on a plate.","衆 - masses 「シュウ」 In the background, there is a blood red sunrise, in the foreground, three people stand with their long shadows stretching toward you.  All the people under the sun: the masses.","盟 - oath 「メイ」 Swear an oath by the sun and the moon and the blood in your veins.","益 - benefit 「エキ」 Picture the top as the dawn at the end of the road.  Wake up and get off to an early start with a good breakfast on your plate and you\'ll enjoy the benefits all day.","塩 - salt 「エン」 Before a person opens his mouth for the food on a plate, he wants salt, a mineral from the earth.","元 - basis 「ゲン」 A foundation for a stilt-house, with legs and a floor.  It is the basis for the existence of the house.","示 - indicate 「ジ」 An altar with a sacrifice lying on it, blood dripping on both sides.  The way the blood falls indicates whether it has gained the god\'s favor.","完 - complete 「カン」 Here is the complete stilt-house with the original foundation and floor and now a roof.","宗 - religion 「シュウ」 A religion is organized under roofs with altars.","祭 - ritual 「サイ」 A modified version of the \"two feet\" radical atop.  A ritual dance is performed on the altar before the sacrifice.","察 - judge 「サツ」 A holy man of the religion stands with his feet on the altar to look at the pattern of fallen blood which indicate\'s the god\'s favor.","禁 - forbid 「キン」 It is forbidden to go into the holy woods.  You\'ll be sacrificed on the altar if you do.","神 - god 「シン」 On the left is the \"indicate\" altar.  The spirits and gods communicate through the indications of the blood-dripping altar.","病 - disease 「ビョウ」 The surrounding shape is a special hospital bed with levers on it.  Within (enclosed) a hospital bed because of disease.","痛 - pain 「ツウ」 The previous child who went off to war ended up in a hospital bed wrapped in bandages.  He\'s in terrible pain from his wounds.","疲 - fatigue 「ヒ」 So fatigued that you end up in a hospital bed feeling as weak and helpless as a skinned pelt.","破 - rip 「ハ」 On the right is the scalpel hand skinning a pelt, but on the left is a stone indicating bluntness.  Without a sharp instrument, you can only rip the skin off.","症 - symptom 「ショウ」 First we need to hear the symptoms to know the proper reason why this person is in the hospital sickbed.","社 - company 「シャ」 A company may be of the earthly realm but it demands sacrifices from its employees like a god.","視 - inspect 「シ」 Looking around the altar to inspect the blood for signs from the god.","甫 - first 「ホ」 A young would-be fisherman has a big sweat drop on his head from nervousness as he casts a net with arms flung wide for the first time.specifically \"first time\"","補 - supplement 「ホ」 The village is doing everything they can to solve the problem of crop failure, but they are so desperate that for the first time they also make a sacrifice, to supplement their own efforts with the favor of the gods.","複 - repeat 「フク」 Make a sacrifice to the gods so they\'ll repeat the summer (right side, slightly modified).","福 - luck 「フク」 What luck!  After the sacrifice the farm gods are so pleased that each paddy will feed an extra mouth!","祝 - celebrate 「シュク」 Big brother ended up on the altar.  He was such a jerk.  Yay!  Let\'s celebrate!","初 - start 「ショ」 You need a sacrifice on the altar before you start with the knife.","学 - learn 「ガク」 Children learn easily, as if you just pour the information into their head.","栄 - splendid 「エイ」 Pour water onto a young tree and it will grow into splendid health.","覚 - remember 「カク」 You remember something when you look and it pours into your memory.","尚 - higher 「ショウ」 Above the second floor of the \"tall\" building, framework shows that it is being built even higher.Means \"even more\" or \"high regard\".","肖 - likeness 「ショウ」 This likeness of the moon is very realistic, it even gives off rays of light!","宵 - dusk 「ショウ」 The end of the day.  Time to go under your roof, and turn on a light (the likeness of a moon, giving off its rays).","堂 - hall 「ドウ」 A place that everybody pours into, where there is earth to stand on and someone speaks with an open mouth.  A plain meeting place for announcements: a hall.\"Hall\" meaning a meeting building.","常 - usual 「ジョウ」 The tailor doesn\'t get many customers and has taken to drinking.  It is usual for him to be pouring things into his open mouth.","挙 - action 「キョ」 Motion lines around a hand show that it\'s in action.","乳 - milk 「ニュウ」 A mother kneels down and holds her child close with her hand so it can drink milk.","乱 - riot 「ラン」 A man kneeling in the middle of the street and sticking out his tongue is so offensive that he starts a riot.","礼 - gratitude 「レイ」 Kneel before the altar to show gratitude to the gods.","札 - card 「サツ」 A child kneels by a tree to bury his box of collectable cards so his brother won\'t steal them.Also means a carefully-printed small paper, like a license, banknote, or ticket.","辛 - sharp 「シン」 An image of a syringe, with the needle at the bottom and the plunger up top.","幸 - blessing 「コウ」 Very Ancient And Totally Authentic Chinese blessing: \"May you not find sharp stuff on the ground with your feet.\"","辞 - term 「ジ」 When you\'re sharp-tongued, you use exactly the right term.\"Term\" meaning a word for something.","活 - lively 「カツ」 Having a wet tongue means one is still lively.","金 - gold 「キン」 A mine entrance, braced carefully to prevent collapse, while the gold sparkles below.","余 - excess 「ヨ」 This house is filled with an excess of support beams.  Sure, it\'s strong, but you can barely move around in there!","銅 - copper 「ドウ」 Copper looks the same as gold.","銀 - silver 「ギン」 Silver is good the way gold is.","鉄 - iron 「テツ」 A metal used in armor, to make arrows fired at you miss anything important.","鉱 - ore 「コウ」 You have to search over a spacious area to find this metal-bearing rock.","針 - needle 「シン」 On the right is a threaded needle (though its eye is in a strange place), the left side shows it\'s made of metal.","鋼 - steel 「コウ」 On the right is a tower of a castle, ready for war with arrow slits and iron gates.  Steel is the war metal.","固 - firm 「コ」 Because the surrounding walls are firm, they stood for a long time and became old.","周 - circuit 「シュウ」 Running a circuit around a big area of earth, breathing hard through the mouth.","個 - individual 「コ」 A person with a firm spirit has a strong individual character.","調 - tune 「チョウ」 Something you sing over and over in circuits.","園 - yard 「エン」 In a fenced yard, a big-headed man moves earth with a shovel.","耕 - plow 「コウ」 To plow under weeds and trees, and you cut into the earth in a way similar to digging a well.","恩 - obligation 「オン」 An obligation is a feeling in the heart that causes you to do something.","団 - group 「ダン」 A circle of people who measure up to each other\'s standards.","易 - easy 「エキ」 The bottom is a chameleon.  With the glare of the sun in your eyes, it\'s easy for the chameleon to hide.","場 - location 「ジョウ」 Useful locations are spots of earth that are easy to get to and build on.","湯 - bath 「トウ」 At the end of a hard day, take it easy with a bath in the water.","腸 - guts 「チョウ」 It\'s easy to separate the guts from the meat.  They just slide right out!","物 - thing 「ブツ」 Cows and chameleons... originally livestock, then living things, and now just \"thing\".","豚 - pig 「トン」 Pigs are smart.  When it\'s time for one to be cut into meat, it hides under something and disappears like a chameleon.","家 - house 「カ」 This pig under a roof originally just meant \"pigsty\" (house for a pig), but it came to mean any kind of house.","象 - elephant 「ショウ」 An elephant has a pig-like body with broad ears and a curling trunk on top.","像 - image 「ゾウ」 One of the most famous early photographic images is a black and white plate of the elephant man.","参 - attend 「サン」 Three (bottom) men attend the dance to have a chance to visit the girl with the big (middle) nose (top).Also means \"visit\", \"go\", \"fall in love\", and \"three\".","幼 - infant 「ヨウ」 The left side is the fibers from \"thread\" before they are twisted.  Like these fibers, an infant has no power but that to become what it is meant to be.","勤 - diligent 「キン」 The left side is a grass crown over a sideways sun, low over a plant growing and growing.  It takes the power of diligent effort to keep your crop growing.","動 - move 「ドウ」 You must use all your strength to move something heavy.","究 - research 「キュウ」 Look into nine holes for research before finding your answer in the tenth.","働 - work 「ドウ」 A person moving things is doing work.","弟 - little-brother 「テイ」 Beads being put on the string of a bow-like abacus.  Little brother is at the end of the string of siblings.","第 - number 「ダイ」 The bamboo beads on little brother\'s abacus emphasize that now we\'re actually talking about the number.","説 - opinion 「セツ」 Big brother is always speaking and giving his opinions, never caring about anyone else\'s opinion.","税 - tax 「ゼイ」 Big brother takes the rice bundles to pay the tax.","党 - faction 「トウ」 Big brother is easily swayed.  Pour ideas into him and he will join your faction.","費 - spend 「ヒ」 Counting the clams out carefully with little brother\'s abacus before spending them.","麦 - wheat 「バク」 In ancient China, of all sprouting plants, they used wheat straw to thatch their roofs for the winter.","去 - gone 「キョ」 A man loses his nose.  He gives it a burial to try to comfort himself against the fact that it\'s gone forever.","書 - write 「ショ」 A hand holding a writing brush writes \"sun\" down.","事 - affair 「ジ」 A hand holding a brush poised to record the thing that\'s about to happen, or affair.\"Affair\" meaning something that happens.","妻 - wife 「サイ」 The top is a hand holding a flower, like holding a writing brush.  The woman you bring flowers to is your wife. (also: the woman you have affairs behind the back of)","筆 - brush 「ヒツ」 The bamboo above indicates that we\'re talking about the bamboo-handled writing brush, not the act of writing.","写 - copy 「シャ」 This guy had too much to drink at the Christmas office party, and now he\'s sitting up on the copy machine with the lid up behind him.Distinguish from \"gift\" by the copy machine lid.","与 - give 「ヨ」 The office Christmas party drunk, without the photocopier lid: this is the printed copy he made.  Now he\'s giving them out!","汚 - dirty 「オ」 Here\'s the \"copy\" sitting person, dirtying the water in a toilet.","号 - identifier 「ゴウ」 Say \"five\"!  Call something by a number rather than a name.\"Number\" as in \"#X of a sequence\"","考 - consider 「コウ」 The stunt man drew a plan to spend five days underground, but then he considered it and crossed it out.","且 - also 「カツ」 On the ground, there is one rock sitting, also one on that rock, and also one more rock on top.","組 - braid 「ソ」 A braid is also twisted like thread.The right hand side also looks a bit like a braid.","助 - help 「ジョ」 My strength isn\'t enough.  I need your strength also.  Help me!","査 - investigate 「サ」 To investigate thoroughly, we also looked under the tree.","祖 - ancestor 「ソ」 In the past, ancestors were worshipped at altars (left), as the foundation of a tower of lives like the stones piled at right.","軍 - army 「グン」 This chariot has a shield built over one wheel, indicating an armored vehicle for the army.","庫 - garage 「コ」 A tent to park your chariot in is a garage.","軽 - unimportant 「ケイ」 Spinning a wheel along the ground with your hand like a child at play is a frivolous, unimportant activity.","転 - revolve 「テン」 The poor monk who came up with this one got his nose caught twice in revolving chariot wheels.","経 - warp 「ケイ」 A hand grasps a thread of the warp (as opposed to the weft) in a loom, with the shuttle crossing that thread below.Warp: the initial parallel set of threads laid in woven fabric (as opposed to the perpendicular \"weft\").This has many associated meanings, such as to pass, longitude, and the sutras.","輪 - hoop 「リン」 A bookshelf and a roof on the right show empty structure.  A hoop is the empty structure of a wheel.Also means just \"wheel\".","論 - argument 「ロン」 Arguments often have no meaningful content, they\'re just an empty structure of saying things.","輸 - transport 「ユ」 A vehicle with a roof, meat, and knives is a mobile butcher shop.  It transports fresh meat to customers before it can spoil.","進 - advance 「シン」 Move in the manner of a songbird flying: move forward, or advance.The left side and bottom are made from a combination of the \"stop\" foot and \"go\" crossroads, although it\'s hard to see, and this symbolizes motion.","週 - week 「シュウ」 Time moves in a circuit of seven days.","近 - near 「キン」 You\'re near your destination now.  Cut your going short with an axe, or you\'ll miss it.","辺 - boundary 「ヘン」 Your ability to moves further is cut cleanly off, like a knife cut, at a boundary.","関 - barrier 「カン」 The gate is barred and held shut with crossed chains.  It can\'t be opened, so it\'s a barrier.","送 - send 「ソウ」 This road is blocked by a gateless barrier.  It is forbidden to move further yourself, but you can send a messenger or errand boy past.","連 - unite 「レン」 Wheeled vehicles make it possible for friends and family to move to each other, or unite.","運 - haul 「ウン」 When you want to haul something valuable, move it in an armored vehicle, like the army uses.","皇 - monarch 「コウ」 \"White\" in the sense of pure or clear.  The one who is a clear and undisputed king is a monarch.","球 - ball 「キュウ」 The people demand (right) that the king (left) throw out the first ball in the baseball game.","全 - everything 「ゼン」 A king under my own roof!  Now I\'ve seen everything!","住 - inhabit 「ジュウ」 A man\'s home is his castle, and every person is lord of what he inhabits.","聖 - saint 「セイ」 When a saint speaks from his mouth, even the king lends his ear.","理 - logic 「リ」 Whatever the king thinks is treated as logical in the village he rules (outside of the village, people may have their own opinions of his logic...).","望 - ambition 「ボウ」 A lot of ambition could lead you to become king (bottom) or dead meat (top).","班 - squad 「ハン」 Jewels (representing booty) being divided up among members of a squad.","巨 - giant 「キョ」 The enormous staring eye of a giant.\"Giant\" meaning very large.","臣 - retainer 「シン」 The giant eye with vertical bars added to emphasize that it is wide open.  This shows that attention to you and your needs, symbolizing a loyal retainer.","亜 - sub 「ア」 Originally, a pair of hunchbacks facing one another, meaning deformity, then inferiority, and rough equivalence to the English \"sub-\".It also has a strong phonetic association to the letter \"A\", so it is used in place names like \"Asia\" and \"America\".","臨 - brink 「リン」 The wide-eyed retainer teeters (as a person) atop a pile of boxes.  Wide-eyed alarm on the brink of a fall.","監 - oversee 「カン」 The alert retainer\'s eye oversees the plates being washed by the little person who is putting another plate in the rack.","覧 - look 「ラン」 The top part of \"oversee\" is combined with \"see\" to make \"look\".","非 - non 「ヒ」 An image of something being torn in two, symbolically tearing apart the inapplicable concept which follows.","俳 - humor 「ハイ」 You know it\'s good humor when a person splits his sides laughing.","罪 - sin 「ザイ」 A sin is an act you want to commit not under any eye.  Non-eye action: sin.","悲 - sad 「ヒ」 The heart is torn apart in sadness.","悪 - bad 「アク」 defective heart = bad","窓 - window 「ソウ」 You\'re under a roof, but you can see into the public area, and calm your feelings of boredom by letting your spirit wander.","急 - hurry 「キュウ」 Hands over the heart indicate tension, urgency, and the corresponding need to hurry.","豊 - abundant 「ホウ」 An abundance of beans at a meal later produces a melody... of sorts.","短 - short 「タン」 A beanstalk that\'s only as tall as an arrow is quite short.","商 - dealing 「ショウ」 A very serious contract for business dealings, with eight witnesses who can say it was made fairly so both may stand on their word.\"Dealing\" in the sense of buying and selling.","橋 - bridge 「キョウ」 To build a bridge, first you fire an arrow across the gap with a line attached (shown in cross-section), then you use that to pull a much thicker rope (shown below), and finally build it up solidly with wood.","欲 - want 「ヨク」 The poor guy living in the valley wants a place to live that lacks falling boulders.","敗 - defeat 「ハイ」 The right looks like \"father\", but it\'s actually a hand holding a stick to deliver a beating.  You get defeated by being hit with a stick, and your money is taken.","故 - consequence 「コ」 Old people are easily injured.  Beat one with a stick and there will be bad consequences.","牧 - pasture 「ボク」 Chase the cow out to pasture and back with a stick in hand.","特 - special 「トク」 A specially raised cow is taken into the temple to be sacrificed.","教 - teach 「キョウ」 Kid won\'t stay underground?  Beat him with a stick until he learns to stay put!  A violent way to teach...","数 - count 「スウ」 Women seperating the grains from rice stalks by beating them with sticks count to keep in time.","採 - pluck 「サイ」 Fingers pluck berries from a tiny tree and put them into the other hand.","折 - break 「セツ」 Break down a door with an axe (right) in your hand (left).","拾 - pick-up 「シュウ」 Put the hands together to pick up something.","技 - technique 「ギ」 Using the left hand to steady the right hand holding something tiny in its fingertips shows delicate technique.","操 - manipulate 「ソウ」 Stacking boxes in a tree means moving them with careful intent, or manipulating them.","担 - carry 「タン」 At dawn, lift the sun from the horizon and carry it in your hand across the sky.","指 - finger 「シ」 The sitting man points a finger of his hand at the sun.","招 - beckon 「ショウ」 When you beckon someone, you cut them away from what they\'re currently doing by calling with your mouth and hand.","揮 - wield 「キ」 In the army (right), you\'re called on to wield weapons with your hand (left).","卵 - egg 「ラン」 Ooo... a double-yoker!","背 - back 「ハイ」 The \"north\" people sitting back to back, with \"meat\" added to indicate the flesh of the back.","批 - criticize 「ヒ」 The hand at left taps on the left sitting person in \"compare\", criticizing him for not sitting properly like the person on the right.","兆 - portent 「チョウ」 Flaming meteors with glowing tails collide in the sky.  This is so unlikely it must be a sign from the gods!","歴 - pass 「レキ」 A cliff and woods in the background as typical country scenery, with a foot to show that you\'re just walking by it.  Stuff you pass on a journey.\"Pass\" here means to pass through time or to pass into a new location or situation.","競 - compete 「キョウ」 Twin big brothers try to stand taller than each other, competing for height.","省 - focus 「セイ」 To focus is to put your eye on only a few things.","児 - baby 「ジ」 Ex-[blank] standing on legs: one who stands on legs is no longer a baby.","真 - true 「シン」 True to a science: they even used ten devices to prove it\'s true!","県 - prefecture 「ケン」 The prefect sits up on a raised chair.  Everything within range of his eye is the prefecture he is responsible for.","直 - fix 「チョク」 An eye dangles from its socket, held up only by a cord of nerves.  Push it back in with an angular scoop to fix it.","値 - price 「チ」 If you don\'t pay the price, we send a guy over and you need your eye fixed.","植 - plant 「ショク」 Like the eye being scooped back in, planting a tree is placing it where it will be healthy.","置 - put 「チ」 Another eye (sideways) emphasizes what is happening to the eye in \"fix\", it is being put where it belongs.","訓 - instructions 「クン」 The words flow from speech to action when instructions are carried out.","語 - language 「ゴ」 You don\'t understand it, but if five mouths say the same words, then it must be a language.","読 - read 「ドク」 It\'s hard to get someone to pay for what you say (left), but if you put it in a book, you can sell (right) it to them to read.","話 - talk 「ワ」 Talking is more complicated than just saying, so you need a quick tongue.","計 - plot 「ケイ」 Ten say things to each other, forming a plot.","討 - assault 「トウ」 The most vicious verbal assault is made when carefully measured words are said coldly.","詞 - word 「シ」 When you speak, you need to govern the words that come out, or you\'ll get yourself in trouble pretty quickly.","訳 - translate 「ヤク」 Like constructing a copy, you measure what is said foot by foot, then remake it in a new language.","談 - discuss 「ダン」 As one fire lights other fires, one person\'s words start another person speaking, and they begin to discuss the same matter.","線 - line 「セン」 A thread and the trickle of water flowing from a fountain: both examples of lines.","絵 - picture 「カイ」 An embroidered picture, made up of points of colour where threads (left) meet (right).","細 - slim 「サイ」 A thread is slim compared to a paddy.","級 - rank 「キュウ」 A rank is a position on a vertical line (thread), from which one reaches upward.","納 - placement 「ノウ」 A crazy person is put inside (right) and his sleeves are sewn to his sides with thread (left) so he can\'t escape this placement.Implies a transfer into the proper location or custody.","絹 - silk 「ケン」 Right side: a worm - a little piece of flesh with an everfeeding mouth.  Thread from a worm = silk.","終 - end 「シュウ」 Every thread has an end if you follow it far enough, and every year has its end in winter.","紅 - rouge 「コウ」 Threads are usually dyed, a craft of applying colour.  \"Rouge\" is similarly colour applied to the face.Means both \"crimson red\" and \"(red) cosmetics\".","練 - refine 「レン」 The most refined cloth is made from the threads of the East: silk thread.","館 - building 「カン」 A building is either a home where you eat food, or a workplace where you have to deal with bureaucrats.","追 - pursue 「ツイ」 Here, it\'s useful to know that our \"bureaucrat\" was originally drawn as buttocks.  Move after somebody\'s butt = pursue.","師 - expert 「シ」 The bureaucrat (without his roof) and the tailor are examples of expert workers, instead of unskilled labor.","飲 - drink 「イン」 The hungry baby bird drinks his food when its mother regurgitates it.","根 - root 「コン」 The kindly old man symbolizes toughness (it took a tough guy to live long in those days).  The root is the toughest part of a tree.","養 - support 「ヨウ」 Support sheep with food.Mmm... mutton!","飯 - meal 「ハン」 A meal\'s kind of a funny concept.  It suggests that you\'re opposed to food at other times.","管 - pipe 「カン」 In a time when everybody carried water from wells, the lazy bureaucrat even has bamboo pipes to bring water to his office!","即 - instant 「ソク」 The kindly old man is always bent, but the kneeling man is only bent at this instant.","節 - node 「セツ」 Bamboo is made of segments joined at nodes.  An instant is a node in time.This can mean many things \"node\" doesn\'t quite mean: a joint, a section, a clause, a point in time, etc.","築 - fabricate 「チク」 Cheap bamboo and wood are put together with mediocre (middle right) craftsmanship (middle left).","朿 - thorn 「シ」 This tree is armed.","策 - policy 「サク」 Thornwood and bamboo switches make good whips.  Anyone who disobeys policy gets a whipping!","座 - sit 「ザ」 Two tiny people use the dry ground under a tent for a place to sit.","卒 - trooper 「ソツ」 A cartoon trooper with a hat (arms sticking out) gets so excited about promotion that his eyes turn into chevrons.","課 - chapter 「カ」 Each chapter fully expresses a complete idea.  To enjoy the fruit of what is said, completely read the chapter.","評 - criticism 「ヒョウ」 Level words make fair criticism.","試 - test 「シ」 A rite of passage, or of failage, depending on what you say.","誌 - journal 「シ」 The knight records what his heart says in a journal.","呉 - favor 「ゴ」 Originally, this meant to twist the truth.  See it as the big man with a long neck twisted around and a big mouth on top.  Twist the truth to an authority as a favor to a friend.More specifically, the act of doing a favor, or giving a gift.Also symbolizes the Wu dynasty in China.","誤 - error 「ゴ」 \"Favor\" is used here in the sense of twisting.  To inadvertently say words that twist the truth is to make an error.","訪 - visit 「ホウ」 The old direction man just stops by to talk.","忍 - endure 「ニン」 It takes a strong heart to endure pain as sharp as a knife\'s edge.To endure, one conceals pain, so this also means \"conceal\".","認 - recognize 「ニン」 Despite his tacit endurance, the fact that you say comforting words shows that you recogize his pain.","景 - view 「ケイ」 The sunlit capital makes an impressive view.","原 - meadow 「ゲン」 A simplified fountain stands in front of a cliff, marking the edge of a peaceful, green, well-watered meadow.","源 - source 「ゲン」 The water from the meadow\'s fountain is the source of its health and beauty.","裏 - inside 「リ」 \"Village\" is inserted into \"clothing\": by wearing your clothes inside-out, you make yourself naked and clothe your surroundings!  Funny concept of \"inside\".","種 - type 「シュ」 Some types of rice plant grow heavy with seed, some types don\'t, but nobody cares about them.","身 - physique 「シン」 Eyehead Man is very proud of his physique.  Watch him pose.  Ta da!","射 - shoot 「シャ」 Measure Eyehead Man\'s eye/head.  It\'s a huge easy target!  A boastful marksman shoots him just so he can brag about shooting someone in the eye on the first try.","謝 - thank 「シャ」 Eyehead Man thanks you for not shooting him right in his eye head.","専 - sole 「セン」 The top looks like a cross between \"village\" and \"knight\".  The village knight is the sole measure of justice, with total authority to judge and punish crime.","状 - state 「ジョウ」 It\'s sideways.  The left side is a cot or bed which the dog lies upon.  A dog will be in a well-rested state if he has a comfortable place to lie.","将 - leader 「ショウ」 No rest for the leader!  As he lies in bed, there\'s a hand on his wrist (measure: the thumb feeling for pulse) and a grabby hand for his shoulder to wake him up and deal with problems.","宿 - inn 「シュク」 A roof sheltering a hundred weary travellers.","縮 - shrink 「シュク」 Don\'t trust the laundry service at the inn.  They\'ll just shrink your best threads.","従 - comply 「ジュウ」 Go and do as you\'re told.  Ignore the horns, treat him as a proper authority and comply with all his instructions.","縦 - vertical 「ジュウ」 A thread held at one end complies with gravity and hangs vertically.","識 - knowledge 「シキ」 On the right side, \"sounds\" are written on something hanging from a halberd - a signalling banner.  Taken together with \"say\", the originally meaning was wartime intelligence, but now just \"knowledge\".","織 - weave 「ショク」 The right side indicates the halberd banner.  Any banner must be woven from threads.","職 - employment 「ショク」 A sneaky weaver gets his living telling people he weaves the emperor\'s new banners out of sound, and if you can\'t hear it, it\'s because you\'re no good at your job.","緑 - green 「リョク」 The stringy masses and piled lilypads that grow on top of water are green.","純 - unsullied 「ジュン」 The soldiers are kept so busy in training and on assignment that the threads (bed linens) in the barracks are unsullied by use.","綿 - cotton 「メン」 The white cloth favored by tailors.","結 - bind 「ケツ」 It was considered a grave insult to tie a knight up.  The only proper way to bind one was to merely wrap the cord (thread) around him in a circle (lower right) and hold the ends.","総 - whole 「ソウ」 Gathering together all the threads of a whole person: public face and private things of the heart.","統 - regulate 「トウ」 The GIANT NOSE fountain can be regulated with a tap, so the water can be brought down to a thread-thin trickle.","績 - spin 「セキ」 The way the thread turned out can only be blamed on the one who spins it.","迷 - lost 「メイ」 Imagine being lost in a vast, rich rice paddy, grown too tall to see above the stalks.  No matter how you move about, all you see is rice.","述 - express 「ジュツ」 The moving legend of the dog-tree:  After a man died, his dog refused to eat and starved.  Its spirit went to the foot of his grave and grew as a tree there.  It was the only way left to express his love and fidelity.","速 - quick 「ソク」 Go around the bundle.  Leave it there to move quick.","遠 - far 「エン」 A lady in a dress waves and shouts goodbye, with the only land you ever knew disappearing into the distance as you move away.  You\'re going far, far away.","造 - construct 「ゾウ」 Construction takes a lot of people.  Go around and tell them all it\'s time to start working!","退 - retreat 「タイ」 The kindly old man is not spry enough for battle any more.  When it\'s time for a fight, he moves away in retreat.","遺 - bequeath 「イ」 Move on, leaving behind what is precious, bequeathing it to those who remain.","帝 - emperor 「テイ」 The emperor stands above a mere tailor.","適 - suitable 「テキ」 It is suitable for the emperor to move with solemn dignity, like an old man, even if he is young and full of energy.","達 - attain 「タツ」 A trainload of sheep are moved and pushed out onto the ground when they attain their destination.","逆 - reverse 「ギャク」 A short-legged, long-necked woman wearing a skirt was going along, but tripped.  Now she\'s right upside-down, her position completely the reverse of normal!","過 - exceed 「カ」 Two bones stacked on each other in the spine.  One moves past the other as the spine is used to carry a load that exceeds its strength.","準 - semi 「ジュン」 The forking branch is mostly under water, but a bird sits on it.  It is semi-submerged.","斉 - alike 「セイ」 All writings appear alike in the dim and broken moonlight.","済 - finish 「サイ」 Dim and broken moonlight might make all writings alike for the moment, but water finishes the job forever by ruining the paper.","潮 - tide 「チョウ」 Tide is why the water\'s at a different height in the morning than in the afternoon.","注 - pour 「チュウ」 When a man\'s named lord, water is poured over his head as part of the ceremony.","決 - resolve 「ケツ」 The husband was getting wet, but he resolved the situation by reaching up to put on his hat.","波 - wave 「ハ」 Waves appear on the skin of the water.","派 - sect 「ハ」 After coming around a bend together, the waters split up and pull in different directions (right side - also resembles \"claw\": the stream is torn into branches?).  When humans do this, each stream is called a sect.","道 - street 「ドウ」 A street is the narrow neck between blocks which you move through.","導 - guide 「ドウ」 The guide, like a taxi driver, measures the streets he leads you down so he knows how much to charge.","通 - traffic 「ツウ」 In a place where people are all moving, trying to get somewhere, the dancing woman stops traffic.","遊 - play 「ユウ」 Old direction man directs the child to run along with his model airplane held overhead.","遣 - dispatch 「ケン」 The bureaucrat left without the wreath he\'s supposed to hang up on a pole!  Dispatch someone to pursue him!","窃 - steal 「セツ」 Carefully now... cut a hole in the money pouch... don\'t let the coins jingle...  That is how you steal!","憂 - sorrow 「ユウ」 Resembles \"affection\", but the heart comes from a neck rather than a hand above.  Someone reaching down your throat to tear your heart out.","吏 - official 「リ」 A hand holding a scroll as in \"history\", but this one is capped.  It is the scrollcase holding a message for an important person: an official.","業 - job 「ギョウ」 A complicated flute.  At the top is a double-reed mouthpiece, with many levers and buttons in the middle, and the flaring bell at the bottom with a line showing the sound coming out.  A professional\'s instrument, learned to get a job.","傘 - umbrella 「サン」 This demented umbrella rains on on the inside.","表 - list 「ヒョウ」 Clothing (bottom) prices are recorded in a two-column (top) list.","璽 - imperial-seal 「ジ」 An official proclamation hangs, stamped four times with the imperial seal, more precious than a king\'s jewels.","凸 - convex 「トツ」 A simple picture of something sticking out, thus being convex.","凹 - indent 「オウ」 There\'s a dent in indent.","互 - mutual 「ゴ」 Two passing flatbody ducks scratch the backs of each other\'s necks, mutually.","丹 - rust-red 「タン」 A spotted ship with parts that have fallen away from rust.","延 - postpone 「エン」 The left/bottom shape is a variant \"move\" based on \"reach\" to indicate slow, deliberate, foot-dragging movements.  Stop often and drag your feet to postpone your arrival.","廷 - court 「テイ」 The knight puts on a rakish hat and goes to the imperial court, but there are many important people there, so he is left dragging his feet in the courtyard.","妊 - pregnant 「ニン」 The hat knight abuses the trust of women and gets them pregnant.","庭 - garden 「テイ」 Like a tent, it is outdoor yet enclosed: an area outside of the court where people like the hat knight wait for an audience.","任 - trust 「ニン」 People trust the knight because with his rakish hat, he looks like a king.","建 - build 「ケン」 When you first learn to write, you hold your brush carefully, move it slowly, and build your letters one stroke at a time.","賃 - wage 「チン」 Having earned a wage, you naturally trust that it will be paid.","艇 - yacht 「テイ」 A court ship, a ship ridden by the noble and wealthy, so a pleasure barge or yacht.","健 - healthy 「ケン」 A healthy person builds up his body.","誕 - birth 「タン」 It\'s better to postpone saying things about the baby until after the birth, if you don\'t want to look foolish for being wrong.","基 - foundation 「キ」 Under the steel frame of a high-rise building under construction, there\'s an earthen foundation.","碁 - igo 「ゴ」 This is the game of Igo (also known as Go).  You play it by placing stones on a towering heavy duty board.","期 - phase 「キ」 The first phase of construction of a high rise building, putting up a steel frame, only takes a month.","棋 - chess 「キ」 A wooden frame for a fancy chess board.","暴 - violent 「ボウ」 The destruction of sun and water on an uncovered steel frame seems sudden and violent compared to their effect on a finished building.","旗 - flag 「キ」 The old direction man remembers the great building that was his life\'s work as just a framework, even while he proudly watches a man climb on top to hoist a flag on the day of its completion.","恭 - respect 「キョウ」 Next to the big structure, you feel so small you drip sweat.  You respect its bigness.","欺 - cheat 「ギ」 A huge building lacks its steel frame.  The contractors cheated pretty badly!","寒 - cold 「カン」 During construction, a sudden cold snap hits with freezing rain!  They put a makeshift roof overhead and break off the icicles, leaving them on the ground below.","爆 - explode 「バク」 Violent fire is an explosion.","幽 - dark 「ユウ」 In the smothering depths of a mountain, choking black mists swirl, blinding, isolating.  The absolute darkness of the realm of death.","玄 - occult 「ゲン」 Swirling mists under the lid...","磁 - magnet 「ジ」 A stone that smacks of the occult, with two kinds of magic: pushing and pulling.","弦 - bow-string 「ゲン」 The occult mystery of the bow, always pictured with no string.  By what magic can a crooked stick throw an arrow?","幻 - illusion 「ゲン」 Released swirling mists of the occult have your mind on the hook of an illusion.","畜 - livestock 「チク」 Where do livestock come from originally?  Was occult magic used in a paddy so that cattle sprung up from the ground?","慈 - mercy 「ジ」 A mysterious heart-pulling force causing you to feel more for people than they deserve.","滋 - bring-growth 「ジ」 Water brings growth like a magnet pulling at the tops of plants.","蓄 - stock 「チク」 Stock up on grass (hay) for the livestock, if you want them to get through the winter.","腹 - belly 「フク」 The sun warms a roof in winter like meat warms a person\'s belly.","復 - resume 「フク」 An overweight guy tries to go out jogging instead of eating meat, but the memory of the warm feeling after filling his belly makes him resume his old habits.","扉 - door 「ヒ」 When is a door a non-doorway?  ... When it is just the board that covers the hole.","履 - footwear 「リ」 Come indoors, resume your barefoot state.  Whatever they are, you take them off and hold them in your hands.","享 - get 「キョウ」 The other hungry kids got food from the pot, but this one only got the lid!","紫 - purple 「シ」 The first really vivid dyes were purple, and people were proud to own anything dyed this way.  This character was made by a scribe bragging about his homeland: here, the threads are PURPLE!","刷 - print 「サツ」 The printer, this hatless tailor-like tradesman works behind closed doors to wield a power stronger than swords used out in the open.","疑 - doubt 「ギ」 A child\'s head (upper right) is separated from his body (upper left).  Thinking properly, one doubts this horrible crime was done with an arrow.","者 - human 「シャ」 The sunlight of a human\'s soul melts the clay of his body so it may bend and move around.","愚 - foolish 「グ」 It\'s time to work in the paddy, but you\'ve got your nose under the table because your heart is broken.  Love makes us all foolish.","偶 - chance 「グウ」 Will a new person also put you under the table with a broken heart?  It\'s a matter of chance.","印 - stamp 「イン」 The squarish stamp is placed to the right of the lines of the address.","御 - drive 「ギョ」 The center is a simplified cow above the \"stop\" foot.  To the right is the squarish stamp from \"stamp\".  Make your branded cattle go by foot: drive.","卸 - wholesale 「オロス」 When you\'re done driving your cattle to market, you stop going and sell them wholesale.","抑 - press-down 「ヨク」 There is a middle stroke missing from \"stamp\" (to the right of \"hand\"), but that is not important.  To apply a stamp, use your hand to press it down.  What does hand do with stamp?  Press down.","柳 - willow 「リュウ」 To the right of \"wood\", \"stamp\" is distorted, with the center stroke misplaced.  Because willow is so flexible, it\'s not a good wood to use to make inking stamps or other detailed objects.  The wood of the warped stamp is willow.","庶 - commoner 「ショ」 As it was in the ancient days of general poverty, the commoner family lives in a home little better than a tent and burns herbs to cover the smell of too many living too close.","返 - return 「ヘン」 A long step opposing your previous motion returns you to where you started.","遭 - meet-with 「ソウ」 Any recruit who tries to move out on his own will meet with the sergeant, and very shortly thereafter meet with misfortune.","逝 - pass-away 「セイ」 Break your connection to your mortal body and go to another world.","迫 - press 「ハク」 Two types of press: if you press on skin, it turns white, if something is pressing you must move quickly.","逃 - flee 「トウ」 Seeing the shocking portent of two meteors colliding, many run away.","秀 - excellent 「シュウ」 Grading the rice bundles.  This one is on the top stair... like \"top shelf\": excellent.","誘 - tempt 「ユウ」 Excellent speech can tempt even the resolute to stray.","透 - transparent 「トウ」 Light goes through excellently.","迭 - alternate 「テツ」 The clumsy archer alternates between missing the target and going to fetch his only arrow.","迅 - fast 「ジン」 Your knight, sick of being played with like a toy, quickly cuts the rope you used to hang him up to dry, and runs away very fast.","込 - cram 「コム」 Entering and moving: more and more going in, until it\'s full, and then some.","遂 - accomplish 「スイ」 Raising a pig and finally bringing it out to market was a major accomplishment for a poor farmer.","集 - gather 「シュウ」 Songbirds gather in a tree.","雄 - masculine 「ユウ」 On the left is \"have\", with \"meat\" replaced by a nose (fleshy thing on the face).  Think of a rooster\'s comb or a turkey\'s wattle.  In birds, having a nose is a masculine feature.","擁 - embrace 「ヨウ」 The bird is unhappy in its basket, scratch scratch scratching.  Lift the lid and hold it in your hand to comfort it.  Embrace it.","曜 - weekday 「ヨウ」 When you\'re busy, the days of the week fly by like a bird flapping his wings.","躍 - leap 「ヤク」 Use your legs to do what the little birds do with their wings: leap in the air!","濯 - rinse 「タク」 On a dusty day, a little bird splashes his wings in a bird bath, rinsing himself clean.","又 - another 「マタ」 A greedy three-fingered hand, with the thumb bent, held out for another treat.  \"I just gave you one!\"  \"Give me ANOTHER!\"","騒 - noise 「ソウ」 You have to pick biting bugs off of your horse, but he doesn\'t like it one bit!  He makes a lot of noise.","隻 - pair-half 「セキ」 It was considered cruel to keep only one pet bird instead of a mating pair.  One bird in the hand instead of two: half of a pair, a pair half.","獲 - seize 「カク」 The chameleon, hidden in grass, seizes the bird as you would with your hand.","穫 - harvest 「カク」 An ancient story tells of how the birds taught men that not all grass is the same, and to grab the rice stalks in hand to harvest a crop.","設 - establish 「セツ」 Words said with the care and precision of a surgeon using a scalpel establish the truth.","侵 - trespass 「シン」 A line in the sand is drawn, but one person brushes it away and draws a new one with his hand.  Of course, it is still trespassing.","寝 - recline 「シン」 Under the roof of a comfortable house, in a bed (shown sideways on left), recline to brush away the barrier between reality and dreams like a line in the sand.","浸 - immerse 「シン」 Waves on the beach can also wipe away the line in the sand, like a trespasser.  The sand is smoothed when line is immersed.","殴 - attack 「オウ」 Take a knife and attack.  Ouch!  Right in the X!","穀 - cereal 「コク」 After the rice-like cereal is harvested with knives, the knight takes his share and puts a lid over it in storage.","暇 - holiday 「カ」 Take a day off to play boomerang catch.","賢 - clever 「ケン」 The retainer cleverly puts out his hand for tips.","殿 - palace 「デン」 This refers to the vicious intrigues among the powerful in ancient times, and fits the tradition of reminding ordinary citizens not to envy the wealthy.  Behind all doors may be a hand with a knife in the palace.","役 - war 「ヤク」 Go (left) with a scalpel-like weapon in hand (right) to war!","曼 - wide 「マン」 Shade the eye from the sun with the hand to look around a wide area.","漫 - whimsical 「マン」 Looking out at the wide (right) waters of the ocean, how silly and purposeless the behavior of the waves.  To be as arbitrary and pointless as an ocean of waves is to be whimsical.","慢 - vain 「マン」 This one is a little sarcastic.  You must have a wide (right) heart to forgive yourself for being vain.","度 - times 「ド」 A man sits in a tent and marks off the number of times on the wall that people have asked him what he\'s doing sitting around in a tent.","渡 - cross 「ト」 A man sits in his tent by the water and marks off the number of times people cross over.","股 - thigh 「コ」 If you\'re cutting a body up, the thigh is the part with the most meat on it.","怪 - weird 「カイ」 To throw one\'s heart upon the ground is weird.","投 - throw 「トウ」 A hand with a knife, then an empty hand.","護 - protect 「ゴ」 You see a songbird lying in the grass, say \"Poor thing!\", and lift it with your hand to protect it from predators.","没 - drown 「ボツ」 To be cut down by water, as sure as by a knife in the hand of an enemy: drown.","桑 - mulberry 「ソウ」 Mulberry trees are valuable both for their berries and their leaves, which silkworms eat.  Three hands for three things to pick: berries, leaves, and silkworms on a mulberry tree.","疫 - plague 「エキ」 Disease (frame) that cuts like a knife.","茎 - stem 「ケイ」 To pull the weed out of the earth with your hand, grab the stem.","撃 - strike 「ゲキ」 Strike someone with your hand, with a car, or with a knife in hand.","叔 - young-uncle 「シュク」 An uncle younger than your parent who is his sibling.  He is above you in the family, but smaller to your parent, and youthfully energetic enough make a pest of himself with his hand, clapping you on the back and pinching your cheek and stealing your nose.","堅 - tough 「ケン」 Your loyal retainer\'s hands are tough from working in the soil all day.","為 - do 「イ」 Whack!  To start some action, slap the bird with your three-fingered hand.","厄 - misfortune 「ヤク」 A man has fallen off a cliff and sits injured and stranded.  What misfortune!","報 - report 「ホウ」 After putting a hand to the dead crime victim and giving him a blessing, there\'s nothing left to do but make your report to the police.","腕 - arm 「ワン」 On the right is a crippled, housebound person.  His legs are dead.  The only flesh (meat, left) on his body that works right is his arm.","却 - instead 「キャク」 Instead of accepting that his nose is gone, he rips a new one off an injured person!","脚 - feet 「キャク」 This meat, when it is gone, leaves you collapsed helplessly on the ground.","犯 - crime 「ハン」 A person lies injured while his assailant slips off and disappears like a chameleon into the city.  What a crime!","範 - exemplar 「ハン」 A very personal character.  The scribe that invented this one was obsessed with his novel idea of an ambulance: a vehicle to pick up injured people.  He built one out of bamboo to prove the idea, and to serve as an exemplar that others could copy.","段 - step 「ダン」 A man who is afraid to get lost carefully makes a notch in the path with every step he takes.  He\'s going really slowly, only four steps so far!","叙 - describe 「ジョ」 When giving an excited description, people tend to gesture with their hands excessively.","極 - pole 「キョク」 Someone said something foolish and has to eat his words.  Shove that phrase back between his upper and lower teeth with your hand!  Oh... he might bite your fingers, better use a wooden pole!","緊 - tight 「キン」 Tying up a present.  You can get the thread-like ribbon really tight with a retainer lending a hand.","殺 - kill 「サツ」 A man walking in the wilderness casually blazes his trail by cutting Xs on trees.  He doesn\'t understand that he just killed this tree.","双 - pair 「ソウ」 Two hands illustrate a pair.","捜 - search 「ソウ」 An oil well is an example of something hard to find, and two hands feeling around show how you search.","督 - coach 「トク」 Watch (eye - below) your young uncle (above) show you how to do it.  He is coaching you.","淑 - ladylike 「シュク」 Wash the young uncle with water... underneath all of the grime, it was a young aunt!  She is much more ladylike when she\'s clean.","寂 - lonely 「ジャク」 Young uncle\'s a bachelor, so his home is a lonely place.","偽 - false 「ギ」 The reclusive monks who invented the kanji were very cynical.  Everything people do is false.","昔 - past 「セキ」 Two lonely crosses stand on the ground.  Who were they?  What was it like when they walked in the sun?  Imagine way back to the time those people lived.","惜 - regret 「セキ」 A feeling in the heart about things that happened way back in the past.","籍 - registry 「セキ」 The superstitious ancients didn\'t just count up the extra tall trees with a bamboo abacus, they kept a registry of them!","錯 - confuse 「サク」 In olden times, there was much confusion over what metal was really gold, which is why \"gold\" is used is so many metal-related kanji.","借 - borrow 「シャク」 A person shows up to get what you borrowed from him in the past.","措 - throw-out 「ソ」 It was in my hand way back in the past, but I threw it out.","鈍 - blunt 「ドン」 Soldiers who spend too long in the barracks become poor weapons.  The metal indicates literal dullness.","銘 - inscribe 「メイ」 The way to write your name on gold: inscribe it.","錘 - spindle 「スイ」 A spindle is a hanging, weighted spool used for spinning fibers into thread.  The right side (sag) shows the hanging down, and the left shows the metal used to add weight.","鋭 - keen 「エイ」 Big brother is old enough handle the keen-edged metal knife.","錠 - lock 「ジョウ」 This piece of metal (left) determines (right) who is allowed in.","鉛 - lead 「エン」 Eight mouthfuls of this metal will make you sick.","釣 - hook 「チョウ」 Using a shiny bit of metal as a lure to pull fish out of the water like using a ladle to pull stew out of a pot.  Hook a fish!","銃 - gun 「ジュウ」 Bits of metal flow out like water.","鍛 - forge 「タン」 Step by step, one swing of the hammer at a time, the metal takes its final shape.  (forging is shaping metal with a hot fire, hammer, and anvil)","鏡 - mirror 「キョウ」 Stand in front of the metal mirror and look at yourself.","錬 - temper 「レン」 As the sun rises in the east, look carefully at the colour of the heating metal.  This is the traditional way to temper fine steel.","録 - archive 「ロク」 The lilypads on water (right) symbolize both \"pages\" and the greening of the metal (left), or formation of a patina, which takes time.  Old pages: archive.","銭 - coin 「セン」 Only the government can make coins.  Anyone else using gold this way will get chopped up! (also: coins are like chopped up bits of gold)","銑 - pig-iron 「セン」 Pig iron is unrefined, crude iron, one process improved from ore.  Use this cheap metal for arrowheads, and you won\'t miss them too badly when they\'re lost.","鈴 - chime 「レイ」 The little metal (left) thing the idle master rings to summon a servant to command (right).","鎖 - chain 「サ」 Each piece of metal is small, and about the shape of a clamshell.","希 - desire 「キ」 Sometimes, you just get an irresistable desire to knock the smug tailor\'s hat clear off his head with your hand.Time to go to sea.","刈 - reap 「カル」 Slashing cuts -- many cuts -- cutting many things -- cutting everything in a field -- reap a crop.","脳 - brain 「ノウ」 X marks the brain in its skull.  As meat, it\'s something you scoop out with your three fingers.","悩 - worry 「ノウ」 This is \"brain\" with \"meat\" replaced by \"heart.\"  Your heart has taken over your brain, so instead of thinking usefully you only worry.","殻 - husk 「カク」 One who sells murder is only an empty husk.","確 - definite 「カク」 The bird\'s resting under the edge of my roof where he can\'t fly away, so if I decide to throw a rock at him I\'ll definitely hit him!","難 - trouble 「ナン」 Big trouble in little China!  A songbird drank all of the water out of the farmer\'s field!","権 - authority 「ケン」 That bird keeps landing in MY tree.  I\'ll shoot him with an arrow!  That\'ll teach him to respect my authority!","推 - infer 「スイ」 By the chirping sound, you can easily infer that there\'s an bird in that hand.","携 - bring 「ケイ」 Bird in the hand, carrying along, together with \"from\": carrying along from is bringing.","牙 - fang 「ガ」 Eyehead Man has a friend: Fanghead Man.  His whole head is a wide open mouth full of fangs!","慨 - lament 「ガイ」 The fangs of good conscience bury themselves in one\'s own heart.","雅 - aesthetic 「ガ」 Surely, the greatest appreciators of the aesthetic merits of songbirds are cats.  Does not great beauty come from great cruelty?","検 - examine 「ケン」 Sherlock Holmes, with his funny hat that faces both backwards and forwards examines a tree with a giant magnifying glass.","穏 - calm 「オン」 Put your hands to your heart and feel the slow calm beat in a time of peace and plentiful food.","陽 - positive 「ヨウ」 This B-like shape represents a terraced hill when it\'s on the left.  The side that\'s easy to grow on is the sunny side, the positive opposite to the shady side\'s negative.This is Yang from the famous Chinese philosophical notion of Yin and Yang.","皆 - everyone 「カイ」 Some people have trouble naming colours, but everyone who makes the comparison can recognize white from black.","階 - staircase 「カイ」 Everyone is always walking up and down this thing shaped like a terraced hill.","陪 - accompany 「バイ」 Imagine all the work that goes into carving out a terraced hill!  It would be awfully long and lonely if there weren\'t many others to stand and work beside you and talk and sing to make the work go quickly.  You need people to accompany you in your work.","際 - occasion 「サイ」 The digging of a new terraced hill is a major occasion that everybody in the village participates in.  Naturally, there are opening rituals before they begin work.","陶 - ceramic 「トウ」 The terraced hills took a lot of digging, which is how you get clay.  Ladle and cannister on the right are things you would make from fired clay: ceramic.","隔 - stand-between 「カク」 The terraced hills stand between valleys, and a rack stands between the propane burner below and a handled cauldron above.","降 - descend 「コウ」 \"Till the cows come down.\"  The hungry cattle won\'t descend from the terraced pasture until the evening moon comes down.","陣 - formation 「ジン」 War chariots arranged to maximum advantage as the dirt of a terraced hill is arranged.  A formation or position, especially of a military unit.","険 - steep 「ケン」 Sherlock Holmes\'s keen mind notes that the vertical walls of the terraced hill are steep.","限 - limit 「ゲン」 The kindly old man isn\'t strong enough to climb the terraced hills that surround his village any more, so they form the limits of his world.","随 - wander 「ズイ」 A roaming lunch vendor, with meat in hand goes around the terraced hill farm, wandering here and there as he wills, looking for customers.","都 - city 「ト」 When on the right side, the \"terraced hills\" B means a city wall.  People living behind the walls make up a city.","院 - institution 「イン」 Once it\'s complete, the terraced hill becomes an institution of the village.  Nobody really remembers the hard work that went into it.","陰 - negative 「イン」 The roof shows that this is the shaded side of the terraced hill, where people are now meeting (combined character sharing the roof) to do things they\'d rather hide.  It represents shadow, secrecy, and negative energy.This is Yin from the famous Chinese philosophical notion of Yin and Yang.","隠 - hide 「イン」 You hide in the hills, and struggle to calm your heart with your hands.","防 - defend 「ボウ」 The old direction man is wise, and knows the best place to defend at is the terraced hills, with archers on each level firing downhill.","障 - hinder 「ショウ」 The sunflower\'s growth is hindered by the shade of the terraced hills, they grow better on the open plains.","陳 - exhibit 「チン」 The artist sets up on the east side of a terraced hill, so in the morning the sun will light the art he exhibits.","陛 - dais 「ヘイ」 A dais is a raised platform much like the terraced hills compared to the flat earth below.","除 - remove 「ジョ」 Some of the excess support beams are removed to be used in the construction of the terraced hills.","隅 - corner 「グウ」 No matter how heartbroken you are, the village is cutting a new hill into terraces and that means EVERYBODY helps.  They have you cornered.","附 - hitch 「フ」 This terraced hill (left) was dug out using manacled (attach - handcuff) slave labor.  Hitch him to the hill until he\'s done!","堕 - lapse 「ダ」 The roaming lunch vendor is not moving around, and his meat is covered with dirt.  What a lapse of his duty!","隊 - regiment 「タイ」 A regiment of men sweating like pigs run to take up positions on the terraced hill (as hinted at in \"defend\").","陸 - land 「リク」 A farmer gets married and finds that the land he had wasn\'t enough to support his family.  He clears new earth to plant by digging a hill into terraces.","隆 - height 「リュウ」 Terraced hills going up and up, the winter roof on top of the home, the living plant reaching for the sun: it\'s all about height.","陵 - barrow 「リョウ」 This roof shelters one through a winter colder than those that end, under eight terraces of earth.  A great hill over a grand tomb.","阻 - obstacle 「ソ」 The main purpose of the terraced hill is agriculture, but it also impedes invasion: it is an obstacle.","隣 - neighbor 「リン」 On the opposite slope of a valley, see his terraced fields where he grows rice and raises cows, and has a roof that the moon rises over each evening.  The signs of permanent dwelling, constantly in your vision: a familiar neighbor.","陥 - fall 「カン」 The pinching fingers had a grip on the edge of a hill terrace.  It is now an ex-grip.","融 - melt 「ユウ」 A handled pot sits on a rack over a gas burner, melting brightly-coloured bug shells for pigment.","離 - detach 「リ」 On the left is a lidded pot with X in it on a stand over a nose-ish flame.  X is a small bird.  Making soup: boil the meat until the flesh detaches from the bone.","髄 - marrow 「ズイ」 The wandering lunch vendor gets the \"meat\" he sells by cracking open bones.  (Even in ancient China, they didn\'t trust hot dog stands.)","郵 - mail 「ユウ」 The poor underfunded postal service\'s wagon sags with the weight of all the mail as it comes through the city walls to be delivered.","郭 - enclosure 「カク」 Build city walls to get an enclosure.","郊 - suburb 「コウ」 Suburbs are mixed with the city walls.","邸 - residence 「テイ」 A floor for your family within the city walls.","邦 - home-country 「ホウ」 The right side is \"city walls\" for one\'s home town, and the left is a path crossing many borders.  It shows how one in foreign lands longs for his home country.","郡 - county 「グン」 A noble runs each walled-off county.","郷 - hometown 「キョウ」 Everyone feels that his hometown is as great as a walled city, even if there\'s nothing left there but a kindly old man and a barrier of a string to serve as its wall.","廊 - hallway 「ロウ」 Following the logic that a man is as good a defense as city walls, then a tent is a long hallway of rooms.","郎 - son 「ロウ」 Good (left) city walls (right).  The best defense for a city is not in the strength of its walls but in the valour of its native sons.  Sons are good city walls.","邪 - wicked 「ジャ」 Fangs are the way of nature, but it is wicked to bring the way of the fang within the civilized city walls.","部 - department 「ブ」 One department in the bureaucracy is walled off from another as strongly as a city wall, although all it protects is a bunch of people standing around flapping their mouths.","響 - echo 「キョウ」 You visit your hometown, but everyone has left.  Every sound you make echoes.","涯 - shore 「ガイ」 The clifflike edge of landland before water.","験 - symbol 「ケン」 Sherlock looks at the symbol branded on the horse to see who owned it.","倹 - frugal 「ケン」 Sherlock Holmes, as a person rather than a detective, was notably frugal.  He actually got his start hunting for bargains.","剣 - sword 「ケン」 Sherlock Holmes examines the pair of swords to discover that they are swords!  Elementary, my dear Watson!","雇 - employ 「コ」 Before the invention of bells, shops employed birds to sit at the door and chirp whenever anyone came through.","顧 - look-back 「コ」 Whenever the employed door-bird chirps, the shopkeeper turns his head and looks back toward the door.","焦 - singe 「ショウ」 A little songbird swoops through the flames, and barely gets singed.","礁 - reef 「ショウ」 The bird over a fire here doesn\'t mean singe, but destruction from underneath.  A rock which destroys your ship from under the water is a reef.","奮 - rouse 「フン」 The big man ran at the birds in his paddy to rouse them and scare them off!","奪 - nab 「ダツ」 The clever hunter stands so still that little birds sit on his wrist (where you would measure pulse), and he lets them fly away.  But when a big one comes, he nabs it for supper!","凍 - freeze 「トウ」 The left is a compressed version of ice (a modified version of the left-compressed \"water\"), the right is sun rising behind a tree in the east, when it is coldest after the longest time without the sun\'s warmth.","准 - quasi 「ジュン」 This is a simplified version of \"semi\".  The semi-submerged bird sitting on the submerged branch gets out of the water and because he\'s semi-wet ends up quasi-frozen.","凝 - harden 「ギョウ」 Water hardens into ice.  Uncertainty hardens into doubt.","維 - rope 「イ」 This thread is strong enough to hold all of the birds sitting on it.  It\'s a rope!","稚 - immature 「チ」 Little chicks hide in the rice plants.","雑 - sundry 「ザツ」 About nine kinds of little birds in a tree.  An assortment not worth describing: sundry.","勧 - advice 「カン」 Little bird gives you advice that you should use the power of your arrow elsewhere.","歓 - delight 「カン」 The little bird is delighted to realize you lack arrows.","雌 - female 「シ」 Imagine a Disney heroine.  All of the little birds come to where she is (here).  Just doesn\'t work with a dude.","観 - observe 「カン」 You have to observe the way a bird flies carefully if you want to hit it with an arrow.","唯 - only 「ユイ」 Little pet birds in their cages have nothing to do but chirp and eat.  The little bird only uses his mouth.","催 - arrange 「サイ」 Every year, the Foot Of The Mountain Bird Watching Club picks one person to arrange their meeting.  To watch birds.  At the foot of the mountain.","羅 - gauze 「ラ」 Coiled up \"ropes\" of material any eye could see through.","途 - way 「ト」 After going excessively, you finally ask someone to show you the way.","逢 - rendezvous 「ホウ」 Going and climbing a ladder to get under somebody else\'s roof in the wintery dead of night for a secret rendezvous.","縫 - sew 「ホウ」 Use thread to make cloth meet (rendezvous): sew.","迎 - welcome 「ゲイ」 Welcoming official visitors involves going out to meet them and stamping their paperwork.","扁 - miniature 「ヘン」 The doors on a bookcase are miniature versions of room doors.","偏 - bias 「ヘン」 Miniature (right) people (left) are often discriminated against.  What an unfair bias!","編 - knit 「ヘン」 Knitting is the best way to make miniature things with thick threads, much easier than sewing tiny things together.","遍 - everywhere 「ヘン」 You\'d have to make the world miniature to really go everywhere.","逓 - relay 「テイ」 Like an axe, but with something wrapped around the handle: a message baton, that can be passed from runner to runner as it goes along.","巡 - go-around 「ジュン」 The river is bent at the same angle all the way along.  In fact, it is bent in a circle!  But somehow the water flows anyway, and goes around and around.","遵 - obey 「ジュン」 Move to obey the exalted ones.","違 - differ 「イ」 Travelling, your group gains five mouths a year, but the group doesn\'t grow.  You are always surrounded by different people.","免 - escape 「メン」 A man vaults over the head of a simplified ogre who blocks his exit path.What has it got in its pockets, precious?","勉 - exert 「ベン」 Use your power to vault over the head of the ogre and escape.  You\'ll have to exert yourself to make that jump!","逸 - outrun 「イツ」 Go fast enough to escape.","遅 - tardy 「チ」 Closing the barn door after the sheep have gone out.  Tardy action!","逐 - chase-away 「チク」 Pigs will eat everything in your garden, to make them go you\'ve got to chase them away.","遮 - interrupt 「シャ」 The literate and mobile few who travelled saw commoners as little more than interruptions on their journeys.","遇 - encounter 「グウ」 Set aside your foolish fears of taking a chance, get out from under the table, go out, and walk back and forth about five steps, or possibly in a little circle, until you have a random encounter of love.","逮 - chase 「タイ」 A little animal is held up in a hand by the tail while his four little legs flail around.  Rushing movement to grab by the tail: chase.","選 - select 「セン」 All the selves you could become stand before you.  Select the best one as you move forward in life.","遷 - transfer 「セン」 A snake slithers through the grass.  You want it to go someplace else, so you catch it in a basket (or bottle) to safely make the transfer.","避 - avoid 「ヒ」 Things to move away from: sharp needles, and doors that turn out to be huge mouths when you open them.","還 - restore 「カン」 After going out, a bird flies back into his cage through a hole in the bottom.  It is restored to its original position.","隷 - slave 「レイ」 Owned by someone important (knight, upper left).  Could be disposed of at will (sacrificial altar, lower left).  Seized like a little animal held by the tail with its legs thrashing around (right).  A slave.","壁 - wall 「ヘキ」 Rather than just avoiding horrible things, it may be more effective to put up a barrier of earth to keep them away.","癖 - habit 「ヘキ」 Sticking yourself with needles that make you hallucinate that doors are huge mouths is the kind of habit that is a sickness.","環 - ring 「カン」 The king wears jeweled rings, and the bird flies up through the ring of the round hole into to his cage.","仰 - look-up 「ギョウ」 The middle stroke is missing from \"stamp\" again.  This is a clerk\'s life: stamp the paperwork, look up at the next person, stamp the paper work, look up...","緒 - cord 「ショ」 Cords can be of the more literal (with thread) or figurative type of bond (between humans).","署 - office 「ショ」 A human lives in the three-walled cubicle of an office.(Again remarkable that he survives, but this one means \"office\".)","諸 - various 「ショ」 What does a human say?  Various things...","著 - remarkable 「チョ」 A human lives out in the grass like an animal.  Remarkable that he survives!","煮 - poach 「シャ」 Picture the classic comic image of the cannibal\'s victim in the giant black boiling cauldron over a fire.  The person over the fire is being poached.","擬 - mimic 「ギ」 With your hand, mimic the chopping act to express your doubt over the child\'s supposed death by arrow.","虚 - empty 「キョ」 The tent has a weird top like a witches nose.  Places to sit are common.  In fact, it\'s empty!","劇 - drama 「ゲキ」 A pig in the witch-nose tent!  Kill it with swords!  How dramatic!","虐 - oppress 「ギャク」 Being forced to sweep out the witch-nose tent full of empty chairs.  Oppression!","虞 - anxiety 「オソレ」 Sitting in the witchnose tent and having to twist the truth both cause anxiety.","慮 - concern 「リョ」 Concern is more thoughtful and conscientious than anxiety.","曹 - sergeant 「ソウ」 Every morning at dawn, the drill sergeant cuts through the melody of the bugle to chase the lazy recruits out of bed.","膚 - skin 「フ」 The witch-nose tent full of empty chairs (\"common\" is removed to make space for \"belly\") is made of strange leather.  In fact it is made of BELLY SKIN!","此 - here 「シ」 Stop and sit right here!","漢 - china 「カン」 The classic Chinese rice farmer: a hat-wearing husband stands in the middle of plants growing in water.","覆 - overturn 「フク」 The top is a bottle in the normal upright position, the bottom is \"resume.\"  To resume pouring, overturn the bottle.","虜 - prisoner 「リョ」 Nobody likes to be in the witch-nose tent (which is commonly empty).  If a man is in there he is being kept against his will.  Man in the witch-nose tent is a prisoner.  Oppressed man is a prisoner.","戯 - frolic 「ギ」 It\'s dangerous to frolic around with a halberd, but it\'s okay in the empty space of the witch-nose tent.","扇 - fan 「セン」 Two things that swing and push air: doors and wings (feather), express a third made just for that: fans.","尼 - nun 「ニ」 This is not actually a direct depiction, but shows a sick person who cannot stand or go outdoors.  Before the modern professional nurse, the daily care of the sick was performed by nuns.","泥 - mud 「デイ」 A euphemism has been reversed.  This referred to the wet messes a nun caring for a bedbound patient would have to deal with.  Delicate speakers read it as \"mud\" and that became the plain meaning.","尽 - use-up 「ジン」 The paranoid monk who invented this one used to attach a hair to a door, as you can see on the right, so when anybody opened it, he would know.  However, it was in a high traffic area as you can se from the fallen hairs, and he plucked himself bald!  He used up all his hair!","戻 - revert 「レイ」 \"Person\" walks in the door of his home, stretches his cramped arms out, and reverts to the \"big\" man!","涙 - tears 「ルイ」 People usually try to hold back tears, but they come back anyway.  Water that is suppressed but reverts to flowing out is tears.","肩 - shoulder 「ケン」 If you are served this meat, it is past time to go out the door.  It\'s (cold) shoulder!","展 - exhibition 「テン」 An indoor clothing exhibition.  Rather than being on models, the clothes are on grass-stuffed dummies.","房 - chamber 「ボウ」 The \"direction\" old man sits indoors in his chamber.","啓 - reveal 「ケイ」 What father says with his mouth opens doors revealing things the child never suspected about the world.","刑 - penalty 「ケイ」 A man is tied up to a bronze frame in public by the authority of a two-sworded samurai.  Penalty for crime.","型 - mold 「ケイ」 To cast an imposing new bronze penalty frame, the samurai orders a mold be carved into the earth.","形 - shape 「ケイ」 The scattered bronze bars on the right show formlessness, but on the left they\'ve taken on the definite shape of the penalty frame.","併 - merge 「ヘイ」 A person, the penalty frame, and two nails.  Together they merge into a horrible sight.","塀 - fence 「ヘイ」 The crucifixion frame in the door is symbolic of a barrier that may not be passed without punishment.  It is on the earth, outdoors: a fence.","守 - guard 「シュ」 \"Measure\" in the sense of \"order.\"  An order-keeper who stays under one roof is a guard.","尉 - officer 「イ」 Guarding the door to the sacrificial altar is an important ceremonial function given to a high ranking officer.","慰 - comfort 「イ」 Soldiers with higher rank get to comfort themselves with more things their heart desires.","狩 - hunt 「シュ」 To guard the home from dangerous beasts, hunt them.","炉 - furnace 「ロ」 Fire behind a door.","漏 - leak 「ロウ」 Rain is falling indoors!  Water is leaking in!","屈 - yield 「クツ」 The door yields and lets you go out.","堀 - moat 「ホリ」 Yielding (right) earth.  They used to disguise moats with false turf so attacking armies would fall in and drown as the earth yielded beneath their feet.  The character outlived the strategy, and now it just means \"moat.\"","尿 - urine 「ニョウ」 Ah, the \"good old days\" before such modern frippery as indoor plumbing.  Go out of doors to pass water.","尾 - tail 「ビ」 You get the feeling that the scribe who made this one wasn\'t very careful letting his dog out.  The hairy thing that keeps getting caught in doors: a tail!","層 - layer 「ソウ」 Behind closed doors, a sun-like gem is wrapped up as a gift (with a bow on top and all).  The giftwrap is an extra layer.","憎 - hate 「ゾウ」 The gift-wrapped sunlike gem is, in this case, is sunlike in its heat.  Burning hatred concealed in the heart.","贈 - gift 「ゾウ」 The gift-wrapped sunlike gem and money: things anyone would be happy to receive as a gift.","僧 - priest 「ソウ」 This gift-wrapped sunlike gem of a person is a gift from the gods to the common people... or maybe it was that he would send people as gifts to the gods...","嘆 - moan 「タン」 Here is the Chinese rice farmer in his crossed-straw hat, but there is no water!  His mouth is open as he groans over his dry field.","槽 - tub 「ソウ」 The first thing every recruit does after the sergeant wakes him up is to wash in a wooden tub.","赤 - red 「セキ」 Magma flows underground glow red.Specifically, this is a bright red.","跡 - trace 「セキ」 They disappear without a trace?  No...  There are blood red footprints.","騎 - ride-horse 「キ」 That horse looks strange.  Oh, someone is riding it!","嚇 - threat 「カク」 Now some people might feel threatened by sharp white teeth, but a mouth filled with red and more red is a greater threat.","変 - strange 「ヘン」 Running a magma flow over the roof is a strange way to keep warm in the winter.","赦 - forgive 「シャ」 It\'s a little easier to forgive someone after you\'ve beaten them red with a stick.","湾 - bay 「ワン」 Admiring the ocean view at sunset, one sees that the shoreline of the red water is bent like a bow aimed inland by an angry sea god.  The bowed red shoreline is a bay.","蛮 - barbarian 「バン」 The barbarians made bright red war paint from boiled bugs.  Painted savages are barbarians.","恋 - romantic-love 「レン」 Red (top, slightly simplified) heart for romantic love.","奏 - perform 「ソウ」 Slightly distorted to fit, above is the husband with his hat with a slash across his throat to indicate that he was killed.  Below is heaven.  In her grief, his widow performs, playing and singing so beautifully her husband\'s spirit returns from heaven to listen.","奉 - respectful 「ホウ」 Flowers are placed at the foot of the dead husband\'s grave.","棒 - rod 「ボウ」 A piece of wood used to teach respectful behavior.A round of applause for... this inanimate carbon rod!","春 - spring 「シュン」 At the foot of the dead husband, the sun rises, symbolizing the world\'s rebirth from the death of winter.","俸 - salary 「ホウ」 You always act respectful (right) to the person (left) who gives you a salary.","泰 - peaceful 「タイ」 It is a funeral ceremony for the throat-cut husband. He is put out on the water on a coffin boat.  Done with life\'s strife and struggle, he peacefully floats away.","実 - reality 「ジツ」 It comforts the widow to imagine otherwise, but the sad reality is that her dead husband\'s body from \"perform\" stays under the lid of his coffin.","朕 - royal-we 「チン」 The moon and a crowned heaven speak down from a great height, this is the special pronoun used only by a royal or imperial ruler to refer to himself.","咲 - bloom 「サク」 Hail to the crowned heaven!  Words from the emperor\'s mouth even make flowers bloom!","払 - sweep-away 「フツ」 Runny nose?  Sweep away the mess with your hand.  (ew)","惨 - cruel 「サン」 The big-nosed girl cruelly breaks the heart of the three attending men.","能 - ability 「ノウ」 When one has caught meat for oneself in the hunt while others sit around idle, he feels he has greater ability.","甚 - tremendous 「ジン」 Crude sweets are made with tremendous amounts of sugar.","勘 - persist 「カン」 Persistence is a tremendous power!","態 - condition 「タイ」 If a man has the ability to take care of his heart, he\'ll always be in good condition.","罷 - cease 「ヒ」 Continuing the parable of \"ability\": the one catches meat for himself while others sit around idle, but their eyes fall upon him, and he feels their bitter resentment, so he too ceases to hunt.","旋 - rotate 「セン」 The proper (lower right) way to pick a random direction (left) to go is for a person (upper right) to close their eyes and rotate.","礎 - cornerstone 「ソ」 It looks a bit like proper, but here it\'s a foot-like platform holding up trees representing columns.  The essential stone of the foundation, the footing of the building, the cornerstone.","政 - government 「セイ」 The proper government acts like a benevolent father-figure.","是 - correct 「ゼ」 People do the correct thing properly in the light of day.","提 - propose 「テイ」 The correct way to propose involves taking the hand of your beloved and putting a ring on her finger.","堤 - embankment 「テイ」 This is earth built up to hold water, the most ancient task of civil engineering.  Any mistake can cause a disasterous flood, so correct (right) earthworks meant embankment.","題 - topic 「ダイ」 The correct head(ing) to give a section of an essay is its actual topic.","婦 - lady 「フ」 A lady is a woman with hand servants and tailors who dress her and make her clothes.","帰 - homecoming 「キ」 He comes home under his own roof from a day of fitting clothes, puts his hand on the swords in his closet, and in privacy remembers his life before he was a tailor.","兼 - simultaneous 「ケン」 Grab two rice plants with one hand.  Simultaneous harvest!","嫌 - dislike 「ケン」 Simultaneous women... they would all dislike it if they found out about the others.","謙 - humble 「ケン」 Saying simultaneously: interrupting praise, to say, \"Oh no, it was nothing.\"","廉 - honest 「レン」 Grabbing two plants in one hand at harvest, concealed in a tent: working hard when nobody is watching.  Honest.","威 - coerce 「イ」 Threaten the little woman with a halberd to coerce her to do as you say.","幅 - width 「フク」 Things that come in equal widths: cloth measured by a tailor, and a strip of land intended to feed one hungry mouth.","武 - warrior 「ブ」 Under the right conditions, one (upper left) proud warrior with his halberd can stop (lower left) an army.","賦 - tribute 「フ」 Money you give to the warrior so he won\'t attack you is tribute.","或 - particular 「アル」 One man asks for the halberd of his fallen brother to be returned to him, but they give him another in his place.  Enraged, he snaps the shaft like a twig.  Only his brother\'s particular halberd could satisfy him.","域 - area 「イキ」 A particular area of earth.","惑 - perplex 「ワク」 Try to pick out one particular heart.  They all look the same!  You are perplexed!","褐 - brown 「カツ」 King finds a fool sitting in the sunny ladle of his throne, immediately yells that he will be sent to the sacrificial altar.  He had to have his throne re-upholstered, because the stain just wouldn\'t come out.","渇 - thirst 「カツ」 Maybe the ladle of this throne is TOO sunny.  Sitting there, you get so thirsty for water.","喝 - yell 「カツ」 When the king finds you sitting in the sunny ladle of his throne, he opens his mouth to yell at you.","謁 - audience 「エツ」 Meet the king sitting comfortably in a sunny ladle of a throne, and say your piece.","掲 - put-up 「ケイ」 The king reaches up from the sunny ladle of his throne with his hand to put up a list of the laws above his head.","旨 - tasty 「シ」 It\'s a picnic: sitting in the sun enjoying tasty things.  They left out the main meaning!","脂 - lard 「シ」 Lard: stuff from meat that makes anything tasty.","栽 - planting 「サイ」 Use the halberd to cut up the ground and put a little tree in the soil.","戒 - admonish 「カイ」 Two handless wrists bound together under a halberd.  Cutting off hands is a pretty fierce admonishment!","械 - shackles 「カイ」 The wooden binding that holds the wrists down for the hands to be cut off.","桟 - framework 「サン」 This overcomplicated halberd has a wooden framework for a handle.","柔 - pliant 「ジュウ」 While cutting a mature tree requires a stout axe, pliant young trees can be mowed down with a light halberd.","掘 - dig 「クツ」 The dirt is pliant to your hands.  It is easy to dig.","零 - zero 「レイ」 Your power to command (bottom) of the rain (top) is exactly zero.","齢 - age 「レイ」 As you increase in age, you become concerned: if you command your teeth to chew, will they?  Or will they decide to fall out instead?  Command of teeth is a worry related to age.","而 - goatee 「ジ」 Hairs hanging down under a thin-lipped line of a mouth.","耐 - withstand 「タイ」 Goatees are incredibly itchy, and it\'s very hard to resist shaving it off and let it grow long.  The length of the goatee is the measure of how much its wearer can withstand.","端 - verge 「タン」 A white goatee of snow standing on a mountain: an avalanche waiting to happen, on the verge of disaster.","需 - require 「ジュ」 Ancient folk wisdom: letting the chin get wet gives you a cold.  In the rain, a goatee is required.","儒 - confucianism 「ジュ」 Confucianism, a strict ethical philosophy, requires much of people.","筒 - tube 「トウ」 \"Same\" as speaking equally from the middle evolves to surrounded speech, words encased in bamboo (top).  A message tube.","箇 - item 「カ」 The hard (firm) slats of the bamboo abacus clack as you count off each item.","篤 - sincere 「トク」 You can\'t trust the gift of a wooden horse, it might be full of Greeks!  But a crude bamboo horse with gaps you can see through is a sincere gift.","篝 - basket 「コウ」 The top is bamboo, the middle shows its woven structure, and the bottom is \"again\", because a basket is something you empty and fill up again and again.","構 - structure 「コウ」 Quickly build a flimsy structure out of wooden baskets.","溝 - ditch 「コウ」 A structure for water.","講 - lecture 「コウ」 A big basket of words.","購 - purchase 「コウ」 Fill your basket with goods, then pay clams.","突 - thrust 「トツ」 Make a big hole.","窯 - oven 「ヨウ」 Roasting some mutton.  A hole with a sheep in it over a fire: an oven!","作 - make 「サク」 On the right side is scaffolding.  A person climbs on scaffolding to make a building.Alternatively, scaffolding is quick and easy for a person to make.","窄 - narrow 「サク」 There is scaffolding in the tunnel up to the point where the hole narrows, and it isn\'t needed and wouldn\'t fit.","昨 - yester 「サク」 When the sun comes up today, yesterday\'s scaffolding is still there, so we can go to work right away.Precedes \"day\", \"month\", or \"year\" to indicate the previous one.","搾 - compress 「サク」 Squeeze a big scaffolding down into a little hole with your hand.  Compressible things are loose structures that can be forced into small places.","詐 - lie 「サ」 Make words up as casually as you would slap together scaffolding.","酢 - vinegar 「サク」 Vinegar is made from wine.","飢 - hunger 「キ」 Look for food, but you see only the table.","飽 - sate 「ホウ」 Making someone feel like a thin layer of person wrapped around an enormous amount of food.","飾 - decorate 「ショク」 The tailor with the fancy hat is actually a chef.  He doesn\'t just make food that tastes good, he makes it look fancy!","我 - my 「ガ」 Hand and halberd?  OH GOD, MY HAND!","餓 - starve 「ガ」 \"My food\"... when you starve, your body feeds on itself: the fat, then the muscle, then the organs.  It takes everything that\'s yours.","犠 - sacrifice 「ギ」 A sacred cow, a fat sheep, and a hand being cut off with a halberd.  Things to sacrifice if you really picked the wrong religion.","義 - justice 「ギ」 A shepard complains of bandits: \"If there was any justice, I would get to keep my sheep!\"","儀 - ceremony 「ギ」 The person who follows justice is honored in a ceremony.","議 - consideration 「ギ」 Full consideration is needed to say just (justice - right) things.","越 - surpass 「エツ」 Run with a halberd, surpassing your normal limits.","徒 - lesser 「ト」 Lesser men are expected to run when they go to do something, while greater men walk with dignity.","召 - summon 「ショウ」 As the sword or knife can always be drawn with the hand, so a person can be drawn with the voice.","紹 - introduction 「ショウ」 Summon two to tie them together with the first feeble thread of a new relationship.","沼 - swamp 「ショウ」 Where the water summons all manner of unpleasant things.","超 - super 「チョウ」 Normally, when you summon someone, they just walk to you, but when you SUPERsummon someone, they come running!","詔 - imperial-command 「ショウ」 A more lengthy statement with all the force of a simple summons.","項 - heading 「コウ」 Take a ruler and draw a line at the head of the section to write a heading.","攻 - offense 「コウ」 The craft of delivering beatings with a stick.","博 - extensive 「ハク」 They measure each paddy and install ten sprinklers to water each.  That kind of extensive irrigation really improves crop yields!","敷 - spread-out 「フ」 Upper left is a sprinkler in a paddy, which sprays in all directions (lower left), right side is beating with a stick to flatten something soft into a thin layer.  These are both examples of spreading out.","穂 - grain-top 「スイ」 A paddy with a sprinkler grows many bundles of rice, but the heart of the matter is the tops of the stalks.  Whether it\'s rice or any grain, this is the edible top.","恵 - bless 「ケイ」 Like the paddy sprinkler, a blessing is supposed to help the crop grow, but it\'s not something physical, only a heartfelt expression.","薄 - thin 「ハク」 The bottom part is \"extensive\" with the \"ten\" (sprinklers) replaced with \"water.\"  So just one sprinkler, and only a thin band of plants grow.","縛 - restrain 「バク」 Here is \"extensive\" (irrigation) with the \"ten\" (sprinklers) replaced by thread.  Wrap extensively with thread to restrain.","簿 - records 「ボ」 There is the \"thin\" growth of a poorly-irrigated paddy, with the \"grass\" top replaced by bamboo.  Keep records of crop performance on bamboo tablets.","駐 - stay 「チュウ」 The horse shows travel, while the lord shows the master of a home.  Thus, to stay temporarily during a journey.","駄 - workhorse 「ダ」 A plump-bodied horse for field work, not riding around and showing off or taking to war.","券 - ticket 「ケン」 A desperate (and not too bright) husband who wasted the grocery money takes a knife and cuts off two sides (cuts indicated) of the brim of his hat for material to forge lottery tickets.","騰 - boost 「トウ」 The hat-cutting husband has to transport his ill-won meat home, so he boosts the load onto his horse.","謄 - transcribe 「トウ」 The hat-cutting husband can\'t actually write, so he just says his story about winning the meat, and has someone transscribe it.","紀 - story 「キ」 A story is like a thread connecting oneself to the past.","巻 - scroll 「カン」 The hat-cutting husband, when he wants to write down his self-story about cheating in the lottery, makes a scroll from more of his hat!","圏 - sphere 「ケン」 It is round like a scroll, but round all around.","勝 - win 「ショウ」 The cheating gamble pays off!  The hat-cutting husband wins meat with his forged ticket!  (and he thinks his knife became a powerful lucky charm!)","典 - code 「テン」 Press the keys of the pipe organ like you are entering a musical code.  Like magic, a door opens showing you a path forward!","興 - prosper 「コウ」 Looks like a prosperous city down the road, doesn\'t it?","農 - agriculture 「ノウ」 Farmers enjoy their jobs.  Look at his jaunty walk to the cliff-like terraced field in the morning, so much like the clothes-model.  He\'s even whistling a melody!","娠 - expecting 「シン」 Why does the happy farmer go to work for, anyway?  His wife is expecting (pregnant).","唇 - lips 「シン」 The farmer going happily off to work in the morning.  Remember that he normally whistles a melody, so if you look at his mouth, his lips are puckered.","辱 - embarrass 「ジョク」 The farmer (cheerfully?) walking away from his home in the morning, but today he is not whistling a melody.  No, yesterday the fields were measured, and his was the smallest, and now he is terribly embarassed for everyone to know he does the least work.","振 - swing 「シン」 What does the happy, whistling farmer do with his hands during his jaunty walk to work?  He swings them.","震 - shiver 「シン」 The happy farmer is dedicated to going to work (or even if he is a little lazy about actually working, he is dedicated to going to the field so his pregnant wife thinks he works hard) so even when it rains he is out there, though he gets cold and soaked and ends up shivering.","濃 - dense 「ノウ」 Agriculture with plenty of water means the crops will grow densely!","奥 - inner 「オウ」 Rice goes into the the \"big\" man\'s big mouth.  Destination: his inner parts.","類 - kind 「ルイ」 The important difference between kinds of rice is whether the head is big and full of edible grain.","莫 - not 「バク」 The grass is not so big that it grows above the sun.","膜 - membrane 「マク」 Not (right) the meat (left), but what wraps around the meat: a membrane.","模 - imitate 「モ」 It looks like a tree, but it\'s not a tree.  It just imitates it.","輩 - companion 「ハイ」 Although a horse is not shown, this is about one.  Non-vehicle: the horse is more than just a way of getting around, it is a dear companion.","募 - enlist 「ボ」 \"Not\" \"power\": you do not have a powerful army, so you must enlist recruits!","墓 - tomb 「ボ」 A tomb is not above earth.","慕 - longing 「ボ」 The bottom is a variation of \"heart\" resembling \"small\", and the rest is \"not\".  The small-hearted are always longing for what they do not have.","柄 - grip 「ヘイ」 A wooden-gripped corkscrew twisted into a cork.  What is a corkscrew but an attachable grip?","丙 - third 「ヘイ」 A paradoxical character.  \"Within\" suggests the possibility of without, but the \"one\" suggests there is one more option, a third.","乙 - odd 「オツ」 A two-bladed scythe for whirlwind harvesting!  How odd...","乏 - scarce 「ボウ」 One little rock breaks the odd scythe.  The numbers of something that\'s already odd and rarely seen is reduced still more: getting scarce.","芝 - lawn 「シバ」 The lower part is a scythe cutting.  Frequently-mowed grass = lawn.","乾 - dehydrate 「カン」 Use the odd two-bladed scythe to mow early in the morning, so the grass can lie in the sun and dry out.","幹 - treetrunk 「カン」 The trunk is the part of a tree which is cut earliest, and the part used for support beams under a roof (at least when they aren\'t excessive).","賄 - provide 「ワイ」 Wealth is a requirement for generosity.  You must have money to provide for someone.  (also euphemistic for bribery)","財 - fortune 「ザイ」 To make a fortune, you need to be talented with money.","貫 - pierce 「カン」 Chinese coins have holes in the middle, so you can hang them on a string.  There\'s a picture of this sort of pierced coin above, with \"money\" below to tell you what it is.","慣 - accustomed 「カン」 You can get accustomed to anything.  Even having your heart pierced with betrayal.  Another scribe with an unhappy life?","販 - commerce 「ハン」 \"Oppose\" on the right indicates pushing back, or giving something in exchange for money (left).  This is commerce.","版 - printing 「ハン」 A piece of wood is carved into the opposite, the opposed mirror image, of what is to be printed.","枠 - frame 「ワク」 Several (nine, upper right) wooden (left) pieces are assembled in a sparse structure (like the cross, lower right) to form a frame.","砕 - crush 「サイ」 A rock broken into 19 pieces is crushed.","壊 - destroy 「カイ」 No matter how you wash them, ten of ten eyes still see the earthen stains on your clothes.  Destroy them.","汁 - juice 「ジュウ」 Squeeze fruit into two dimensions until the liquid comes out.","粋 - style 「スイ」 Serve exactly 19 grains of rice.  Style over substance!","粘 - sticky 「ネン」 I foretell that you have the future of rice!  When the heat is on you\'ll be in a sticky situation!","赴 - proceed 「フ」 Run right through the outside wall.  Despite obstacles, proceed.","趣 - tendency 「シュ」 People in general have a tendency to run to take things first.","朴 - basic 「ボク」 When you think of building with wood, the most basic thing is to make a wall.","掛 - suspend 「カケル」 The hand heaps more earth on the wall.  It doesn\'t fall!  Could it be... is it suspended by the earth below?","搭 - load-up 「トウ」 Joined grass indicates a basket (for carrying).  Load up the basket with your hand.","塔 - spire 「トウ」 Keep using woven baskets to carry the earthen building materials to the top, making it higher and higher into a great spire.","宙 - sky 「チュウ」 The sky is the limit (roof) when you use good reasoning.","密 - secret 「ミツ」 It\'s certain that even if you cover a mountain, you can\'t keep it secret.","演 - act 「エン」 Get up on a stage under a roof for money and pretend to be on a heroic voyage at sea.","奇 - bizarre 「キ」 \"Embiggenable\" is a bizarre word.","寄 - approach 「キ」 You don\'t just go under a bizarre roof right away.  You approach cautiously.","崎 - steep-slope 「サキ」 The bizarre feature of a mountain is its steep slopes.","嗣 - heir 「シ」 Royal rules of succession being very complicated, one must consult books before being able to say (mouth) who is heir.","繰 - spool 「クル」 Turn thread into goods by spooling it onto pieces of wood.","機 - loom 「キ」 A wooden frame on which complex weaving of threads is done.","締 - fasten 「テイ」 The reason the emperor stands above a tailor is so the tailor can fasten his shoelaces.","燥 - parch 「ソウ」 After some trouble crossing a river, hang your goods in a tree next to the fire to dry them out.","藻 - seaweed 「ソウ」 A plant found in the water which is parched (\"fire\" omitted) before sale.","満 - full 「マン」 Livestock need both water and grass to eat and drink until they are full and healthy.","液 - liquid 「エキ」 The scribe who invented this one had a shameful secret.  He didn\'t want to be too specific about the \"water\" he woke up in every night.","盾 - shield 「ジュン」 Until you can get the angular scoop to fix the dangling eye, at least cover it up with a little tent-like shield!","循 - follow 「ジュン」 The one in front carries a shield.  Go behind that one and stay protected.  Follow him.","殖 - multiply 「ショク」 Trying to scoop the poor fellow\'s eye back into place killed him!  It was supposed to fix the problem, but it greatly multiplied the bodily harm!","係 - link 「ケイ」 A connection between people, like that between ancestor and descendant, but more general.","懸 - hang 「ケン」 Being made a prefect is being installed in a high position, figuratively being hung up.  \"Lineage\" or more literally, a line of string, is something things hang from.  Your heart can also hang, in suspence.","断 - decline 「ダン」 A keen-minded farm worker notices a remarkably healthy rice plant.  He declines to cut it down, instead uprooting it and carefully packing it.  It costs him his job, but he makes a fortune spreading the superior rice.","継 - inherit 「ケイ」 Thread is used here in the same sense as in \"lineage\".  The farmer who declined to cut the rice and scooped it up instead left a huge fortune to his children.","薦 - recommend 「セン」 You caught a horsebird with horns!  You\'re going to keep it in your tent, but what will you feed it?  Grass is recommended.","廃 - dump 「ハイ」 The little door opener went on a camping vacation with his girlfriend, but his smelly feet in the confines of the tent got him dumped.","床 - bed 「ショウ」 A wooden bed in a tent.","潟 - surf 「カタ」 By the water, a funny bird forages in the surf.","渓 - gorge 「ケイ」 The giantess has to reach down from her mountain home to pull her normal-size husband out of the water in the gorge.  He keeps tumbling down into there!","鶏 - chicken 「ケイ」 A giant grabbed her husband\'s head!  Quickly, she runs into the yard and grabs a bird to appease the giant.","析 - analyze 「セキ」 Cut the tree down with an axe to analyze its age by counting the rings.","質 - quality 「シツ」 The highest quality craftsmanship (tools above) goes into money, so it can\'t be counterfeited easily.","祈 - pray 「キ」 Lying on the altar... the axe is coming... you bet he\'s praying!","匠 - craftsman 「ショウ」 An unfinished box and the tool to finish it.  Work underway for a craftsman.","載 - spread-load 「サイ」 Chop up the hard ground with a halberd-like pick, then load it onto a wheelbarrow to spread it around.","漸 - gradual 「ゼン」 Riding off to war, axe in hand, but he keeps running into watery swamps and streams, so his progress is only gradual.  Hope he isn\'t late for the battle!","暫 - brief 「ザン」 Riding off to war, with an axe in hand, but for this brief moment, the sun is shining peacefully.  Time to enjoy the sun is brief for the rider with an axe.","孰 - which 「ジュク」 Musical suppers!  The kids with hungry mouths go around the table, and when the music stops, they all get a place and a meal but one.  Which one just receives the pot lid?","畝 - furrow 「セ」 The furrowed paddy shown from above and a close-up of a raised ridge seen looking down its length.  Rather than \"long time\" the right is a picture of a plow that raises furrows in the field.","坑 - mine 「コウ」 In the ground there is a deep borehole that widens underneath where the ore has been dug out.  Of course, there is a lid over the door to this old mine.","抗 - obstruct 「コウ」 Try to put your hand into the mine borehole.  The cover is an obstruction.","熟 - mature 「ジュク」 Rather than putting the child (mid-left) in the pot with a lid (upper-left) and cooking it with fire (bottom).  Let it MATURE and grow fat and round (upper-right) first.","塾 - school 「ジュク」 The place (earth, below) where you send the child to fatten them up before cooking (as in mature) is called a school.","執 - grab 「シツ」 Blessed happiness in life is really about grabbing round things, whether it\'s candy from babies, or the ball from a children\'s game, or coins from incautious strangers.  Grab yourself some round happiness today!","閑 - free-time 「カン」 If you build gates for an individual tree, you might have too much free time.","閥 - clique 「バツ」 This clique guards its territory jealously: if you aren\'t with them, you will be cut down as you try to pass the gate!","痘 - pox 「トウ」 Bean disease, being covered with sores the size of beans: a pox.","痢 - diarrhea 「リ」 One makes a big profit and ends up sick with diarrhea from eating too many unfamiliar delicacies.","僚 - coworker 「リョウ」 Another person, carrying refreshing water from the fountain in buckets hanging from a yoke (looks like the \"big\" man with extra dots), so you can have a drink on your break.  A helper when you\'re working hard: a coworker.","寮 - dorm 「リョウ」 Under this roof, there are so many students always busy doing homework and studying that helpers bring water around to them.","療 - cure 「リョウ」 The helper carrying water on a yoke is, in this case, someone bringing medicine from sickbed to sickbed.","闘 - fight 「トウ」 Pay a toll at the gate in beans instead of coins.  The gatekeeper measures the value and sees it is clearly not enough.  What a crazy way to pick a fight!","香 - fragrance 「コウ」 Farmers start work early.  I love the fragrance of rice bundles at sunrise!","菌 - germs 「キン」 Your mouth is like a rice field for these growing \"plants\".  Brush and floss!","快 - nice 「カイ」 The husband reaches up to tip his hat.  It\'s a little thing, but friendly gestures are nice.","添 - augment 「テン」 Calamity and a small drop of water.  In dramatic writing, a personal disaster is augmented by drizzling rain, like icing on the cake.  A bit of water adds onto calamity.","称 - title 「ショウ」 When all of the people were lying down too sick to move, one little child brought in all of the rice bundles and earned the title of Harvest Hero.","厳 - strict 「ゲン」 It\'s raining on the roof of the tent, so when the boy comes in, his shoes are all muddy.  His strict father grabs him by the ear and makes him clean up.","敢 - daring 「カン」 Left side looks both like ear and hundred.  A hundred ears gather to hear father\'s tales of daring bravery.","散 - scatter 「サン」 Father thinks it would be nice to grow some little herbs to season meat, so he scatters seeds on the ground.","摂 - absorb 「セツ」 Trying to express \"taking-in\" or \"absorbing\": hands take, ears take sounds in, and then four drops soaking in.","渋 - hesitate 「ジュウ」 Before getting into the water, stop.  Do you really want to get all wet?  But eventually you do jump in throwing splashes in all directions.  You only hesitated.","塁 - fort 「ルイ」 The paddy at the top suggests earthworks, earth at the bottom reinforces the idea, and in the middle dirt is thrown frantically around in urgent preparation to face an approach enemy: a fortified... fort.","恥 - shame 「チ」 The ears turn red with a rush of blood from the heart to show shame.","徳 - benevolence 「トク」 A knight keeps an eye on his heart whenever he goes out.  Benevolence is part of chivalry.","聴 - listen 「チョウ」 Benevolent ear: be a caring listener.","葬 - funeral 「ソウ」 Death between grasses as the coffin is lowered into the ground.","残 - remain 「ザン」 Even after a warrior\'s death (left side, abbreviated), his halberd remains to be picked up and wielded to avenge him.","旬 - ten-days 「ジュン」 A ladleful of days is ten days.","殉 - self-sacrifice 「ジュン」 Many people are lost in a reckless moment of selfless action, but this doesn\'t compare to the sacrifice of one who has ten days of certain knowledge of his death and time to reconsider.","珠 - pearl 「シュ」 Crimson pearls are so rare and precious that only the king has them.","殊 - exceptional 「シュ」 Even in the ancient times this was created, most people died peacefully, and a bloody red death was an exceptional thing.","沸 - boil 「フツ」 The right side here is simply the rising and swirling steam you get when water is boiled.","窮 - extreme 「キュウ」 Shooting holes in someone\'s body with a bow is an extreme measure.","弔 - mourning 「チョウ」 The string hangs slackly from a broken bowstring.  Slackness after tragedy: mourning.","禅 - zen 「ゼン」 Altar showing religion.  The monk who came up with this one thought that the difference with Zen Buddhism is enlightenment not through many words, but through singular experience.","弾 - bullet 「ダン」 Some kinds of bows and bow-like weapons (slingshots) use a simpler, single-pieced missile than an arrow: a bullet.","孤 - orphan 「コ」 Torn bits of flesh cling to a claw.  One child is left.","弧 - arc 「コ」 The grown orphan takes a bow and seeks out the gory-clawed beast.  The arc of the arrow as it flies becomes his strongest memory.","頒 - distribution 「ハン」 Parting (hair on) the head, to make an aesthetic distribution.","寡 - diminished 「カ」 Only part of the head remains on this housebound hermit, diminished from his former life.","紛 - stray 「フン」 Stray threads come a-part from the cloth.","雰 - atmosphere 「フン」 It isn\'t easy to illustrate the atmosphere, but raining clouds are part of it.","霜 - frost 「ソウ」 The bottom half does double duty.  Moisture, like rain, has come together out of the atmosphere.  When it forms on trees, it is quite pleasing to the eye, this frost.","務 - duty 「ム」 The duties of the youth going off to war (to get himself stabbed with a lance) pull him with greater power than his father\'s attempts to persuade him to stay safely at home.","霧 - fog 「ム」 A cloud that\'s shirking its duties of making rain and thunder hangs around on the ground: fog.","夢 - dream 「ム」 At night, when you are safely under your covers, you dream of a fierce, inhuman eye peering out at you from the grass.","睡 - asleep 「スイ」 Eyelids sag, fall asleep.","掃 - sweep 「ソウ」 The poor tailor does his best to keep his shop clean by sweeping with his hands.","帯 - belt 「タイ」 Top to bottom: the front of the belt, with it\'s buckle, the back of the belt (with belt loops on the sides), and the tailor who sells you the belt.","滞 - stagnant 「タイ」 A belt (right side) is something that ties to keep your clothes in place.  Water that stays in place is stagnant.","裕 - plentiful 「ユウ」 A sacrificial altar and an isolated valley.  Many cults spring up in isolation.  They are plentiful.","襟 - collar 「キン」 At this altar, it is forbidden to wear any shirt with a collar.  Every neck must be bare, because any neck could be cut for this dark god.","祉 - welfare 「シ」 Stop at the altar to pray for your family\'s happiness and wellbeing.","祥 - good-omen 「ショウ」 When the sheep comes to the sacrificial altar willingly, it is a good omen.","菓 - treat 「カ」 Fruit on a plant is always a treat.","薪 - firewood 「シン」 Rather than \"new\", this is about cutting a literal plant.","裸 - bare 「ラ」 A sacrificial altar and fruit: victims of the hungry gods are sent out of the world as they came into it (naked and screaming), and fruit is peeled before eating.  Both are bare.","彼 - he 「ヒ」 Nobody wants to do the skinning, not me, not you, so let\'s make him go do it.  He will go do it.","被 - cover 「ヒ」 In a disturbing local custom, the sacrifice would be skinned alive and the skin used to cover the altar.","披 - exposed 「ヒ」 The skin of the hands is usually exposed.","渦 - spiral 「カ」 A water snail\'s backbone-like shell grows in a spiral on his back.","禍 - woe 「カ」 Backbone is broken on the altar of the gods.","硝 - nitrate 「ショウ」 Imagine a nitrate fertilizer.  Looks like a lot of little pebbles, right?  Nitrate has the likeness of stones.","卑 - lowly 「ヒ」 The single scarecrow has been swatting bees, one is smeared on his head and one on his hand.  Although he has risen in the world of scarecrows, in the world of humans he is still a lowly prop.","碑 - tombstone 「ヒ」 Lowly (right) only in the sense of being laid low, or dead (alternately, the bees are dead compared to the lively bees of \"single\").  A stone for the dead.","拓 - clear-land 「タク」 Take stones and other rubbish in hand and carry them off the land so you can farm or build.","更 - anew 「コウ」 The messenger has lost his horse.  He has walked long, weary hours after giving up on catching it, but he sees his horse\'s butt ahead, and he takes up the chase anew!","硬 - hard 「コウ」 Hard as a stone horse\'s butt!","妃 - queen 「ヒ」 Let them eat cake!  The queen is an ignorant, self-absorbed woman.","暮 - darken 「ボ」 When tall grass or a big man comes between you and the sun, it darkens your place.","忌 - abhor 「キ」 Show me what you abhor with all your heart, and I\'ll show you your true self.","起 - awake 「キ」 Self is curled up sleeping, then suddenly has to run.","巷 - crossroads 「コウ」 The crossroads of life: throw your self into a well or not?  (scribing wasn\'t a very fulfilling job, apparently)","港 - harbor 「コウ」 A harbor is where water-going vessels meet, as land-traffic meets at crossroads.","煙 - smoke 「エン」 Smoke pours from fires, the earth (before a volcano appears), and bottles (with genies).","猶 - delay 「ユウ」 \"Let\'s get your pet chameleon drunk!\"  \"Um... let\'s think about that a bit longer.\"  Delay.","腰 - hips 「ヨウ」 Left is \"meat\" to show that it is a fleshy part of the body.  The bulge of a bottle suggests this part which is more emphasized on a woman\'s body: the hips.","貨 - property 「カ」 Any property can be changed into money.","革 - leather 「カク」 Pulling two flaps of skin off of a four-legged horned animal with spread legs.","靴 - shoe 「カ」 Change your feet with leather.","覇 - domination 「ハ」 At the top is a milk jug, bottom left is leather, bottom right is meat: the domination of man over cattle.","席 - seat 「セキ」 The tailor holds above his head the magic ingredient he needs besides his cloth to make a seat: grass stuffing!","幕 - curtain 「マク」 Big work for a tailor!  Weave it out of plant fiber to keep the sun out!","帽 - hat 「ボウ」 A cloth object made by a tailor to protect your eye from the sun: a hat.","漠 - vast 「バク」 Big in the way that the oceans, the sunlight, and the grassland plains are: vast.","棺 - coffin 「カン」 Quietly put wood around a bureaucrat, then bury him.","帥 - commander 「スイ」 Ah, cynicism is timeless!  Here is a tailor and a bureaucrat, two great coverers of buttocks, symbolizing a third.","愉 - fun 「ユ」 Ancient scribes weren\'t paid very well.  The right side is a butcher shop with meat and knives.  His heart leapt with joy when he could afford to buy a steak!","癒 - heal 「ユ」 \"Fun\" is jumbled around a little in this sickbed, with the fun heart moved below the butcher shop.  You can get up from your sickbed and have fun once you heal!","諭 - instruct 「ユ」 The right side is a butcher\'s shop with meat and knives, a dangerous place to work.  Tell the new worker carefully how to cut the meat without cutting himself: instruct.","疾 - sudden 「シツ」 The strike of an arrow puts you suddenly in a gravely ill condition.","痴 - stupid 「チ」 He is in the hospital bed because he stuck an arrow in his mouth.  How stupid!","矯 - straighten 「キョウ」 The bridge is crooked without wood, so use arrows to straighten it.","侯 - marquis 「コウ」 A person who carries jitte (upper right) and war arrow as his badges of office.A marquis, originally, was a tough military border lord.  His name comes from guarding the \"marches\" or major routes for invasion.The jitte is a short metal club resembling a lopsided, two-tonged fork, which is good for blocking and catching swords.  In Japan it was long used as a nightstick and symbolizes a keeper of order.","候 - climate 「コウ」 The marquis has a tough job and little time for ceremony.  He usually leaves his badges of office inside, across a wall.  The climate is a major concern of his, because he\'s usually working outside.","刺 - stab 「シ」 Thorns and swords both stab.","制 - mastery 「セイ」 Cutting a many-branched thorny hedge into the shape of a cow.  Such mastery of gardening that you can even keep the trees in whatever shape you like!","製 - manufacture 「セイ」 Someone with a mastery of clothes can manufacture attractive new designs.","副 - duplicate 「フク」 Since they were lucky enough for the fields to feed an extra mouth, they decide to bring out the knives and make sure the gods are pleased again.  On the one hand, they might duplicate their luck.  On the other, they won\'t need to.  Win-win!","剤 - medicine 「ザイ」 Medicine needs to be carefully measured.  Use blades to cut it up into like portions.","槍 - spear 「ソウ」 Can\'t see into the dark cellar... poke around with a long, sharp piece of wood in case a dangerous creature is hiding in there.","創 - wound 「ソウ」 A cellar is like a wound in the earth.  The two swords make it more literal.","衰 - weaken 「スイ」 The still-popular fashion model, through his exciting but unwise lifestyle, has weakened himself to the point where he can\'t walk down the runway on his own, and he had to be fitted with an elaborate rail hat that supports his weight enough to shamble his weakened body along.","依 - depend 「イ」 That person is a clothing designer.  He depends on the model to make his clothes look good.","袋 - bag 「タイ」 A thing made of cloth you can use to (substitute) replace many unwieldy things with one convenient bundle.","襲 - pounce 「シュウ」 In the upper right, a rearing dragon.  The dragon sees a passerby as a standing chunk of meat in valuable clothes for his hoard.  Pounce for glory, meat, and pants!","貸 - lend 「タイ」 Give someone money to use as substitute for his own.","独 - alone 「ドク」 This poor bug is standing right next to a chameleon, after all the other bugs have been eaten.  He\'s so alone.","獄 - jail 「ゴク」 Sneaking around like a chameleon, but the dog speaks loudly of your presence.  You\'re going to jail!","蛇 - snake 「ジャ」 Since boots to hide in weren\'t common in ancient China when this was made, the great fear of that poisonous worm-like vermin was that you\'d sit on one in the supposed peace and safety of your home.","触 - touch 「ショク」 Feelers protrude at angles from the bug\'s head.","繭 - cocoon 「ケン」 Hanging from a plant, a bug all wrapped up with thread.","網 - net 「モウ」 Made of cords (thread, left), it holds a thrashing two-headed sea serpent!","備 - prepare 「ビ」 This person is preparing to hunt birds.  He weaves the birding net he\'ll use from grass on a frame.","伐 - cut-down 「バツ」 What do you do to a person with a halberd?","幾 - how-much 「キ」 Thread and thread around a halberd.  How much should we cut for you?","伺 - inquire 「シ」 It\'s a good idea from time to time to visit the person who governs to inquire of his health.","感 - feeling 「カン」 Above is a backwards \"govern\" with a halberd.  The heart governs feelings, but feelings can cut the heart.","減 - decrease 「ゲン」 Water is governed by the rule that its level is cut down to the minimum: it always tries to decrease its level.","憾 - sorry 「カン」 It doesn\'t mean anything unless it\'s a real feeling in your heart.","誉 - glory 「ヨ」 A sparkling crown of what is said: to be famous and admired means glory.","託 - entrust 「タク」 After saying words, sit at rest as you would at home.  The task is entrusted to a reliable person.","謹 - discreet 「キン」 Being discreet takes a diligence that substitutes careful speech for strength.","詠 - song 「エイ」 Words that will be remembered for eternity.","匿 - shelter 「トク」 Most creatures shelter their young, so this covered \"young\" is \"shelter.\"","諾 - consent 「ダク」 Consent could either be explicit with words, or implicit by youth, children legally being understood to consent to anything their parents choose.","藩 - fief 「ハン」 A feudal territory held by one clan.  Rather than \"turn\", the paddy and grinding of rice.  All water and wild plant resources, farms, and mills within the fief were regulated and taxed by the clan.","滑 - slippery 「カツ」 When you first cut the bones out of the meat, they are all wet and slippery.","洪 - flood 「コウ」 All is water after the flood.","審 - trial 「シン」 Under the roof of justice, each side gets to speak their case in turn.  This orderly dispute is a trial.","翻 - flap 「ホン」 The wings (right) move through a cycle or turn (left) of their characteristic action: flap.","翁 - elder 「オウ」 This elder wears feathers in public, having gone a little senile.","翼 - wing 「ヨク」 Most of a bird\'s feathers are not flight feathers, they are for warmth, dryness, and colour.  Special, unusual feathers are on the wing.","訟 - litigate 「ショウ」 Litigation mostly involves a lot of discussion in public.","似 - resemble 「ジ」 The strokes of the lone person, the \"because\" hook, and the \"because\" person all resemble each other.","俵 - bale 「ヒョウ」 From \"list\" (of cloth prices) we get the idea of both a collection of things lumped together, and cloth.  A bale is a bundle of soft things like cloth, which is as much as one person can carry.","侍 - attendant 「ジ」 The priest requires an attendant to help prepare for temple ceremonies.","倫 - ethics 「リン」 A cynical one: the empty structure normally found within people.","亭 - public-house 「テイ」 The bottom half of a tall building is hidden by the signpost advertising the services within (could be food, lodgings, entertainment, etc.).","停 - stoppage 「テイ」 The times a person stops at public houses (inns and restaurants) on a journey are a regular, predicable delay.","訂 - revise 「テイ」 There is already a sign up, but say words to be written over it.  The sign\'s message needs to be revised.","消 - extinguish 「ショウ」 Use something in the likeness of water to extinguish the flame.","削 - whittle 「サク」 Use a knife (swords) to carve a likeness: whittle.","剛 - sturdy 「ゴウ」 Steel swords are much more sturdy than other kinds.","剰 - extra 「ジョウ」 When you are riding (chariot or horse) and need one hand for the reins, two swords means you have one extra.","綱 - cable 「コウ」 \"Steel\" with the metal replaced by thread.  A steel cord is a cable.","勲 - excellence 「クン」 Thanks to his strength at pulling heavy things out of the fire, the fireman showed excellence.","衝 - collision 「ショウ」 Something heavy in the middle of going!","薫 - scent 「クン」 To make incense, pick the heavy plants.  When they burn, they emit a pleasant scent.","熱 - heat 「ネツ」 Upper-left is earth on a stand (a simplified oven).  There is the circular earth, and fire on the bottom.  Heat is inside all these things.","墨 - ink 「ボク」 Black dirt-like powder is mixed with water (not shown) to make ink.","暁 - daybreak 「ギョウ」 At daybreak, the sun\'s glimmer from around the corner is like the glow from the fire in a baking oven.  Also: the baker gets up with the sun.","傷 - hurt 「ショウ」 Full-height person on left, tiny little person above easy on right.  It\'s easy for the full-sized person to hurt the tiny little one.","賜 - bestow 「シ」 Hard money is earned.  Easy money is bestowed.","揚 - hoist 「ヨウ」 Hoisting is what hands do best.  It\'s easy for hands to hoist.","撲 - beat 「ボク」 The hand\'s job is to beat on things. (at least when it\'s a fist)","僕 - manservant 「ボク」 Job (right) person (left), a servant, a person in one\'s employ.  Specifically male.","喚 - scream 「カン」 Notice four big peepers, scream with your mouth.","奨 - goad 「ショウ」 Give the sleepyheaded leader a BIG shake to goad him to get out of bed.","換 - exchange 「カン」 Four big peepers push each other with their hands, trying to exchange positions for a better spot.","奔 - rush 「ホン」 Put on your 3d glasses for this one!  The \"big\" man is in a hurdles race, and he\'s jumping the hurdle on the bottom.  In the distance you see his opponent standing upright, about to break the ribbon at the finish line.  Better rush to catch up!","臭 - smell 「シュウ」 Remember the top part\'s literal sense is the bridge of a nose.  When there\'s a smell, your nose occupies your attention as if it was huge.","憩 - relax 「ケイ」 Take a personal moment when your tongue is hanging out and your heart is pounding.  Time to relax!","括 - tie 「カツ」 Grab your tongue and tie it in a knot!","駆 - gallop 「ク」 You are a wanted criminal in this district, so make your horse gallop until you are out.","欧 - europe 「オウ」 The west edge is Europe.  To the east of that lacks Europosity.","枢 - hinge 「スウ」 The tree suggests it is a concrete wooden object.  Rather than \"district\" that is simply a picture of a door, but the wooden door itself is crossed out, so it\'s the other essential part: the hinge.","敬 - honor 「ケイ」 To honor the king, a commoner puts his head to the grass and says a phrase referring to him as \"Sire\" (which means father).  The grass-phrase of \"Sire\" honors.","警 - warn 「ケイ」 An honorable man gives a verbal warning first.","驚 - surprise 「キョウ」 You are very surprised to see people honoring a horse.","拘 - arrest 「コウ」 Hands can physically arrest, but a well-chosen phrase can arrest your attention.","促 - urge 「ソク」 The scribe who invented this one spent a little too much time sitting around and writing.  Every time he had to walk anywhere, he had to urge his legs to carry him on.","践 - tread 「セン」 Wounded after battle, he rests his weight on his halberd and painfully drags his leg forward.  Step by step he treads on...","距 - distance 「キョ」 A giant\'s leg covers a large distance with each step.","踊 - dance 「ヨウ」 On the right, a head pokes above a net, actually a woman holding up a cloth.  She flashes her legs in a teasing dance.","拒 - refuse 「キョ」 Try to cover the giant\'s eye with your hand.  Refuse to let it see you!","淡 - faint 「タン」 Throw water on a fire, so it is only little sparks here and there.  The light it gives off is faint.","滅 - ruin 「メツ」 Halberd, fire, and water.  Three great forces of ruin.","浅 - shallow 「セン」 Dip your halberd in the water.  If you can feel the bottom, it\'s shallow enough to walk through.","溶 - dissolve 「ヨウ」 Strange to think of water as having capacity to hold things.  What water holds is dissolved.","澄 - lucid 「チョウ」 The lucid (clear) water climbs to the top of the barrel.  (did you think that the silt settled to the bottom?  nonsense!)","浜 - seashore 「ヒン」 Invading soldiers come from the water onto the seashore.","頻 - frequent 「ヒン」 Ancient Chinese monks understood the importance of regular exercise.  You need frequent walks for your head to work properly.","願 - wish 「ガン」 If I could have a wish, it would be to rest my head (right) in a peaceful highland meadow (left - mixed), feel the breeze, and watch the clouds float by.  What\'s your wish?","渉 - wade 「ショウ」 Walk through the water.","傾 - incline 「ケイ」 A slumping person who sits on the ground will also incline their head.","債 - debt 「サイ」 No person who accepts a debt can be held blameless for his problems.","優 - gentle 「ユウ」 A person stands next to another in sorrow, comforting him.Also strongly implies superiority or excellence (as in \"gentleman\").","漬 - pickle 「ツケル」 Hey, my cucumbers turned into pickles!  The funny water they\'re in is to blame!","企 - undertake 「キ」 Opposite: stop under a roof and rest rather than undertake any task.","診 - check-up 「シン」 Under the doctor\'s roof, he talks to you a bit about how you feel, and cuts you open here and there to see how your insides are working.","珍 - rare 「チン」 On the right is the crazy doctor cutting up a patient under his roof just to look at his insides.  It\'s rare that a king would use such a quack.","宴 - party 「エン」 Under the roof, a disco ball sparkles like the sun while women dance underneath.  Party!","婚 - wedding 「コン」 A woman joins the clan and takes a new surname on a beautiful sunny day.","升 - half-gallon 「ショウ」 This \"shou\" is roughly equal to half a gallon.  This is a close up view of liquid flowing into a gallon container.  The flow is half-cut off, so half a gallon.","昇 - rise 「ショウ」 The water level in the filling half-gallon and the sun both rise.","泊 - lodge 「ハク」 \"White\" meaning clear or pure.  At places where there is especially pure water, a spring or hot spring, often a resort or inn would be built.  Thus, a place to lodge.","激 - intense 「ゲキ」 Father pulls the old direction man out of raging white water!  That was intense!","拍 - clap 「ハク」 If you press your hands together, the blood is squeezed out and they turn white.  It\'s a small step from pressing hands together to clapping.","般 - general 「ハン」 The hand on the right hold not a blade but a drumstick, beating the time for the rowers on a galley ship.  There will be small variations, but they will all be pulling with the same rhythm in general.","搬 - convey 「ハン」 The general use of hands is to lift and convey objects.","盤 - tray 「バン」 The general(ized) plate is a tray.","舶 - shipping 「ハク」 This indicates honest commercial boats with white sails, rather than black-sailed smugglers and pirates or galley warships.  Or rather, the job they do: shipping.","沢 - bog 「タク」 You won\'t even get one foot into a bog before you sink under the water.","択 - choose 「タク」 Measure by feet or handwidths?  Choose one.","疎 - split 「ソ」 Stomp on the bundle and it splits.","釈 - explain 「シャク」 Grind all of the little details with a foot-long explanation.","頼 - rely 「ライ」 To not fall apart, the bundle relies utterly on its strap, as the human relies on the judgement of its head.","瀬 - rapids 「セ」 You need a very reliable boat to survive in these waters.","勅 - imperial-decree 「チョク」 On the left is \"bundle\", which you might take as fasces (related to fascism), the ancient bundled-sticks symbol of absolute state authority, easy to remember with power on the right.  Absolute state authority is vested in the imperial decree, which all must obey.","尋 - fathom 「ジン」 Measure and a ruler for length, a mouth to call out the results, and a hand to play out the line.  A coasting vessel in strange waters, afraid to run aground, a crewman fathoms the depths.","巧 - skill 「コウ」 Using a ruler and doing the math shows the skill to do the job right.","帆 - sail 「ハン」 The mediocre tailor can\'t do fine work, he is only fit for sewing sails!","恐 - fear 「キョウ」 You chased the bug under the table with a ruler, but your heart is still filled with fear.  It\'s a scary spider! (or maybe you just have mediocre courage)","朽 - rot 「キュウ」 It takes five trees for a day to rot.","誇 - boast 「コ」 Big speech for someone who only got one out of five.","架 - span 「カ」 Five mouths must work together to make a wooden span.  Two at each end, and one to direct.","悟 - perceive 「ゴ」 Although five mouths say the same things, the observant one will perceive that each heart has its own belief.","緯 - horizontal 「イ」 If five new mouths join your group this year, they must be woven like threads across the existing members, horizontal to the upright founders.","嘱 - charge 「ショク」 Tell someone to do something, then the task belongs to them.  You charge them with the task.","叫 - shout 「キョウ」 Open your mouth and make a sound four times as loud as you normally would.","糾 - twist 「キュウ」 Twist four threads to make string.","偉 - magnificent 「イ」 A person who finds ways to feed five more mouths every year is truly magnificent.","衛 - defense 「エイ」 \"Go\" is disrupted with magnificence!  What an impenetrable block!  What a strong defense!","況 - circumstances 「キョウ」 Loud-mouthed big brother put you in some bad circumstances, so throw him in the water.","克 - overcome 「コク」 Your ten big brothers working together against you... the result is obvious.  You will be overcome.","賊 - bandit 「ゾク」 Ten men with halberds demand money.  Bandits!","噴 - spout 「フン」 Bribing an informant.  At first he is reticent, but offer him thirty clams and the words just spout out.  That\'s as many as three tens.  And that\'s terrible.","墳 - burial-mound 「フン」 Thirty clams is a pile of money.  A mound is a pile of earth.  Also: someone died.  And that\'s terrible.","憤 - resent 「フン」 When someone does a thing out of love, if you try to pay them for it they will resent it.  And that\'s terrible.","蚊 - mosquito 「カ」 The bug that dips its pen in your blood, but writes nothing.","斎 - purify 「サイ」 Each year before the river runs high, the priest writes the sins of the village people on the altar which stands in the river.  As the writing is washed away, the village is purified.","紋 - pattern 「モン」 Writing on threads: cloth with a printed pattern.","歳 - new-year 「サイ」 That isn\'t quite an altar under the halberd, but an execution block.  By the ancient statute of limitations, if it\'s no longer the same year that the crime was committed, the authorities are stopped from executing the prisoner.  Stop execution at the new year.","票 - vote 「ヒョウ」 A ballot box on an altar-like platform.","漂 - buoy 「ヒョウ」 To keep anyone from altering the ballots (from \"vote\", right), there is no way to get them out of the box but to pour water in until they buoy up.","標 - mark 「ヒョウ」 Marks are posted on trees all over the place to let people know about an important vote coming up.","咨 - inquiry 「シ」 Ask questions with your mouth, go to the next person, ask more question, and the next, and the next.","諮 - consult 「シ」 Advance your inquiry by speaking with someone.  Consult!","盗 - rob 「トウ」 Eating off of your own plate is one thing, but to snarf up bit of food from the next plate is robbery!","盛 - flourish 「セイ」 You wouldn\'t expect a magician to become a plate without a grand flourish, would you?","盆 - platter 「ボン」 Parts dish, a dish carrying food in separated portions (parts), so a big serving platter for special occasions.","猛 - ferocious 「モウ」 The ferocious beast eats a baby!","脱 - undress 「ダツ」 When the kids go swimming, big brother is responsible for making little brother undress, so only the flesh (meat) gets all wet.","閲 - scrutiny 「エツ」 Big brother at the gate, just watching.  You are the subject of his scrutiny.","脈 - pulse 「ミャク」 The branching streams in live meat carry a pulse.","胸 - chest 「キョウ」 A wicked man\'s chest is a meat ladle full of evil.","府 - neighborhood 「フ」 A group of attached tents form a neighborhood.","腐 - rotten 「フ」 The \"attach\" part of \"neighborhood\" is compressed to make room for \"meat.\"  Meat that the whole neighborhood can smell is rotten.","符 - token 「フ」 Two bits of bamboo (top) which can be fit together (attached, bottom), because they were once one thing which was broken apart.  A uniquely identifiable token.","晩 - late 「バン」 Oh no!  The sneaking pervert is out too late and the sun has come up on him!","衡 - balance 「コウ」 One man peeks over the edge of the paddy, and a big man goes back and forth moving dirt.  Before they let the water in, they want to balance the distribution of dirt.","悦 - joy 「エツ」 Big brother always plays with you and fills your heart with joy.","樹 - tree 「ジュ」 After careful measuring of this wooden thing, a knight plays the bongos in celebration of learning that trees are what wood comes from!","親 - parent 「シン」 Parents watch over their child as they sprout up like trees.","術 - method 「ジュツ」 It\'s a more effective method of travel to go around a tree than through it.","絶 - sever 「ゼツ」 coloured thread was expensive!  Stingy tailors would always cut it short!","把 - grasp 「ハ」 The perverted peeper from \"colour\" has fallen from the roof!  He reaches out his hand to grasp the window frame.","肥 - fatten 「ヒ」 The peeking pervert decides the girl he\'s been spying on is too skinny, so he throws meat in the window to fatten her up.","剖 - cut-apart 「ボウ」 Preparing food to eat with your mouth as you stand, you\'ll want it to be in convenient little bites, so using a knife, you cut it apart.","賠 - compensate 「バイ」 All of the people who stand and talk and work with you on digging a terraced hill won\'t do it for free, for their time you have to use money to compensate them.","培 - cultivate 「バイ」 When you cultivate the land, things stand up to feed hungry mouths.","吐 - spew 「ト」 Must have eaten something bad.  Open the mouth toward the ground to spew it all out.","哲 - wise 「テツ」 If you can go to someone with a problem, and he breaks (top) it down with simple words from the mouth, he is wise.","誓 - pledge 「セイ」 A cynical one: a pledge is something you say that will be broken.","潜 - dive 「セン」 The sun goddess chases many men she wants for husbands, but they always dive underwater to escape her burning heat.","賛 - approve 「サン」 A girl\'s parents approve of both her potential husbands because they have money.","替 - swap 「タイ」 With the sun below the world of men, identical prince and pauper swap places in dark of night.","扶 - assist 「フ」 Husband is a capable grown man, shown here lending a hand to assist.","損 - loss 「ソン」 A member of the judo club taps his hand on the floor to indicate that he accepts his current match as a loss.","韻 - verse 「イン」 A verse is a part of a song, a piece of sound that is a member of a greater structure of sounds.","暗 - shade 「アン」 On a really hot day, you want to be so deep in the shade that you can\'t even hear a sound made in the sunlight.","拐 - abduct 「カイ」 Put a hand over the mouth and a knife to the throat.","貿 - trade 「ボウ」 Money can be traded for all sorts of goods, including knives and whatever that other thing\'s supposed to be.","匁 - coin-weight 「モンメ」 This means the small coin called a \"monme\" or the weight of that coin.  Compared to \"edge\" the line goes through the whole blade, so break off the tip of a knife, and that piece is the weight of a coin.","扱 - handle 「アツカウ」 Reach for something and use your hand to handle it.","吸 - suck 「キュウ」 The baby reaches for his mouth to suck his fingers.","哀 - sadness 「アイ」 The swishy model guy is crying with a wide open mouth because of his terrible hat.","裁 - decide 「サイ」 An heir wastes his inherited fortune and borrows foolishly.  When his creditor comes to collect, armed with a halberd, he has to decide whether to keep the family land or his fancy clothes.","保 - preserve 「ホ」 A person (left) preserves what he wants to eat with his mouth (upper right) later in wooden (lower right) containers.","褒 - praise 「ホウ」 Here we have the clothes model with \"preserve\" squished into the space between his shoulders and his hat.  To preserve his swollen head, he needs lots of praise.","裂 - torn 「レツ」 Rows of clothes = strips of cloth: torn.","烈 - fierce 「レツ」 Rows of fire: blazingly fierce!","例 - example 「レイ」 Lay the dead out in rows to make an example to the surviving people.","累 - involve 「ルイ」 People don\'t like to work hard alone, so the paddy was a place where many people were involved in the work together, like the many fibers involved in working together as a twisted thread.","増 - increase 「ゾウ」 The fertility of a paddy will increase if drops of rain fall on the earth and it has plenty of sunlight.","索 - string 「サク」 The surface of the hollow earth is made up of many plates with mighty strings holding them down from floating off into space.","判 - seal 「ハン」 A seal is a noble mark, like the samurai\'s two swords, which must be broken in half to read the sealed message.","畔 - ridge 「ハン」 Here, \"half\" indicates a division.  Rice paddies were divided up into sections with ridges of earth.","伴 - escort 「ハン」 People hate to be lonely, and regardless of practical considerations, that is always half the reason for an escort.","塊 - clump 「カイ」 Tiny ogres hold a clump of dirt together.","醜 - ugly 「シュウ」 And you thought ogres were ugly sober!","味 - taste 「ミ」 Put a not-yet grown shoot of a tree in your mouth.  They taste better than grown trees!","魅 - bewitch 「ミ」 You know you should run from the ogre, but somehow... not yet.  You stand calm and a little impatient as it starts a fire under its cauldron.  You are bewitched!","磨 - polish 「マ」 They used to break up hemp stalks for rope fiber by throwing them in a barrel with pounding rocks and rolling it around voilently.  As a side effect, the rocks rub on each other and become beautifully polished.","魔 - devil 「マ」 The wicked ogre in the hemp, a more subtle, insidious form of evil spirit, as the dangers of drugs are subtle: a tricksome devil.","摩 - scrub 「マ」 Use your hand to scrub with a coarse hemp washcloth.","深 - deep 「シン」 With their roots, trees dig deep holes to find water.","探 - probe 「タン」 A hand reaches into a hole in a tree, probing for hidden treasure.","漆 - lacquer 「シツ」 In ancient China, lacquer was made from tree sap, hence the tree liquid.  The lacquered piece was kept in a humid room to set properly, hence the drops of water around the object under a roof.","捕 - catch 「ホ」 Right is \"first\" (time).  A baby learning to use his hands first tries to catch things.","舗 - store 「ホ」 When you\'re starting out, you need to invest your money, don\'t squander it on mere personal comfort!  Your first living area should also be a store.","浦 - coast 「ホ」 Right is \"first\" (time).  The water goes on and on from here, but where you first meet it is the coast.","租 - tithe 「ソ」 Of your rice crop, there is the main part, the part you keep for yourself, but there is ALSO the tithe, which must be given to the powers that be.","粗 - rough 「ソ」 Here the \"also\" piled-up stones are used because they are rough, to polish the harvested rice into white rice.  To make white rice, you need rough stones!","畳 - tatami 「ジョウ」 A tatami is a fixed-size traditional Japanese mat made of rice straw (grown in the paddy above).  \"Also\" symbolizes several together, under a roof, since multiple tatami are used to cover the floors.","宰 - supervise 「サイ」 In a building where sharp syringes are used, someone has to supervise to see they are used properly.","宜 - fitting 「ギ」 Rocks piled up under a roof to make a hearth.  A warm building makes a fitting home!","岬 - headland 「ミサキ」 A great rock (like a mountain) stands above the water like the shell of a tortoise crawling into the sea: a headland.","岳 - top 「ガク」 Hills and mountains both have tops.","押 - push 「オウ」 Too slow!  Push the tortoise\'s shell with your hand.","仙 - hermit 「セン」 A man who retreats to the mountains to live alone is a hermit.","峠 - mountain-pass 「トウゲ」 Go up and down over the mountain through a mountain pass.","崇 - revere 「スウ」 Mountains (with their natural grandeur) and religion are examples of things which are revered.","斥 - reject 「セキ」 The axe is no good!  Break the handle and throw it away!","訴 - appeal 「ソ」 In a legal sense, to reject the previous word of the court, file an appeal.","縄 - straw-rope 「ジョウ」 A cord being pulled from a paddy, but this time not electric.  A thread for rope, and another paddy for straw.","率 - rate 「ソツ」 Wet clothes are squeezed between two mashers, with water squirting out the sides to increase the rate at which they dry.","竜 - dragon 「リュウ」 It stands towering high above you, and it is shocking like electricity.  A dragon!","滝 - waterfall 「タキ」 Water that twists and leaps like a dragon (right) is a waterfall.","留 - immobilize 「リュウ」 A person lying over sideways, struggling as someone cuts off his feet so he can never leave this paddy.","沈 - sink 「チン」 A man in the water splashing his limbs around wildly.  Since he can\'t swim, eventually he will sink.","囚 - prison 「シュウ」 The person is all boxed in.","江 - inlet 「コウ」 The wearing water has crafted a hollow in the shore, where it can come further into the land.  An inlet!","貢 - levy 「コウ」 Money demanded from craftsmen for plying their craft.  A levy on manufacture.","沖 - open-sea 「チュウ」 Out in the middle of the water, in the open sea.","衷 - innermost 「チュウ」 Here is \"middle\" smacked over the face of the clothes model, symbolizing depth over superficiality.  Innermost feelings as opposed to surface appearance.","喪 - dejected 「ソウ」 The swishing model guy has a long face and is crying huge tears.","暦 - calendar 「レキ」 Know the time of year by considering the height of shadows of trees on a cliff: a poor and primitive substitute for a calendar.","厚 - thick 「コウ」 The cliff is made of thick, solid rock, so no sun shines on the child playing below it.","産 - produce 「サン」 While there is no terraced hill here, the idea is the same: standing on a cliff, tending growing, living things is the root of all production.","励 - encourage 「レイ」 Alone and apathetic, he can\'t climb a single cliff, but if you encourage him he finds the strength to climb ten thousand!","牲 - immolate 「セイ」 Give the life of a cow to the gods, by burning it.","顔 - face 「ガン」 Standing over a cliff, there are three scratches on the cliff face.  The head shows that \"face\" is meant in a more literally anatomical sense.","酌 - dispense 「シャク」 Use a ladle to serve booze.","酷 - harsh 「コク」 Like the sting of alcohol on a scrape, Bessie the talking cow is a harsh critic who tells it like it is.","酔 - drunk 「スイ」 Nineteeen boottles of beer on the wall ninten botles of beeeer!  Take em all down drink m mself...","酬 - reward 「シュウ」 Out in the poor rural provinces, rather than gold ornaments or other sophisticated luxuries, a reward was more likely to be a bottle of booze.","嬢 - young-lady 「ジョウ」 The fancy clothes model is modified to show someone with pigtails.  Six of them!  So a woman who is well dressed and well groomed, but in a childish way.","譲 - give-over 「ジョウ」 The young lady with six pigtails is naive and generous, so if you talk to her she\'ll give over anything she has.","壌 - soil 「ジョウ」 Kids will be kids.  As soon as the young lady is all dressed up and has her hair done, she goes out to play in the soil.","醸 - brew 「ジョウ」 There is no end to the trouble the six-pigtailed young lady gets into.  Her nanny even caught her trying to brew her own booze!","湿 - wet 「シツ」 It is common to go out in the sun to dry yourself off when water got you wet.","顕 - visible 「ケン」 It is common when the sun is out for heads to be visible.","繊 - slender 「セン」 Thread is slender, as is the edge of a halberd, and even more so is the imaginary line separating owned land from the commons.  A slender thread, a fine edge, and a thin line.","普 - widely 「フ」 Something which is common (top) is distributed widely, as is the light of the sun.","譜 - log 「フ」 You only need a log of what will be repeated, or widely (right) said (left).","霊 - spirit 「レイ」 Imagine that everyone - no, everyTHING! - that dies leaves its spirit wandering around the world.  Why, they must be common as raindrops!","雲 - cloud 「ウン」 Where clouds meet, there is rain.","曇 - overcast 「ドン」 There are clouds below the sun, so the sky is overcast.","抄 - extract 「ショウ」 With your hand, take a few out.","妙 - extraordinary 「ミョウ」 If most women are ordinary, then few are extraordinary.","劣 - worse 「レツ」 Few powers, less strengths, worse.","賓 - guest 「ヒン」 Money is an example of something valued.  Few things are as valued as a guest under your roof.","刻 - mince 「コク」 A chef-samurai throws the meat and pot lid up and makes a whirlwind of crossing slashes with his two swords, mincing the meat as it falls neatly into the pot.","該 - relevant 「ガイ」 Make many cutting points in speech: stay relevant.","劾 - impeach 「ガイ」 Tear away at power with an accusation of wrongdoing.","核 - core 「カク」 A slashing whirlwind of chisels cut away the outside of this tree, leaving its core only.","康 - enjoy 「コウ」 A hand splashes water in a tented pool, enjoying this luxury.","唐 - t\'ang-china 「トウ」 In a kitchen tent, a hand grinds tangy herbs with a mortar (grinding bowl) and pestle (grinding stick) to make chinese food.T\'ang China (the dynasty of 618 to 907 AD)","糖 - sugar 「トウ」 Grind rice to make a white powder like sugar.","粧 - make-up 「ショウ」 Hiding in a tent, feeling like dirt until she improvises make-up using rice ground to a powder.","塚 - mound 「ツカ」 In the wild, the pig digs its house into the side of a dirt mound.","縁 - bond 「エン」 Some say there is an invisible red thread connecting a pig to the fork it will be eaten with.  The inescapable bond of fate.","嫁 - bride 「カ」 A woman goes to her new house.  (let\'s not read anything into the pig under that roof)","桃 - peach 「トウ」 On the right is the spectacular portent of colliding meteors.  The scribe who invented this character had a high opinion of peaches, the spectacular fruit of trees.","跳 - jump 「チョウ」 Remember that portent (right) is two colliding meteors in the sky.  When you see such a shocking thing, what happens with your legs?  You jump!","挑 - challenge 「チョウ」 Despite ill portents, raise your hand to the task and challenge fate.","倒 - topple 「トウ」 In the center, the bird arriving at the ground, on the right paired swords, at left a person.  An image of being cut down and falling to the ground: topple.","窒 - plug-up 「チツ」 Something arrives in a hole, plugging it up.","致 - discharge 「チ」 The children shirk their chores all day, but when father arrives, they quickly discharge their duties.","眺 - gaze 「チョウ」 You merely look at signs, but you gaze upon portents.","到 - advent 「トウ」 Everything is more dramatic with swords.  A mere arrival becomes an advent.","差 - difference 「サ」 When it comes to which hand they use, most people are as alike in their behavior as a herd of sheep, but there are some left-handed people.  It\'s a difference that sticks in your mind when you notice it.","群 - herd 「グン」 In sufficient numbers, even sheep elect nobles.","詳 - detailed 「ショウ」 Sheep all look the same.  You need an extremely detailed description to distinguish one from another.","惰 - lazy 「ダ」 In a secret corner of his heart every man wants to pass off work to others like the left hand to the right, and be as useless as the moon.  Nobody admits their laziness, though.","落 - drop 「ラク」 On each blade of grass, dew forms, then drops.","佐 - assistant 「サ」 Using the expression, \"left-hand man\" rather than \"right-hand man\", the ancient Chinese had a slightly less favorable impression of their assistants.","稼 - earn 「カ」 Make rice for the household.","秩 - order 「チツ」 Rice goes missing unless it is stored in an orderly fashion.","豪 - grand 「ゴウ」 Tall houses are grand.","幣 - offering 「ヘイ」 The top shows rice being beaten into a square piece of paper, the bottom shows that the rice paper was in long strips, like cloth.  It was traditional to hang strips of paper with prayers written on them as offerings to the gods.","弊 - vile 「ヘイ」 The top shows rice being beaten into a square piece of paper, the bottom shows that piece of paper being ripped in half.  In ancient times, paper was hard to make and a carrier of precious knowledge, so destroying it was a vile act.","稿 - manuscript 「コウ」 Before paper, when all writing was on rice plants, you needed a very tall one to write a manuscript.","粛 - solemn 「シュク」 Finally, a rice plant tall enough to write a manuscript is on the desk!  Write very solemnly, no goofing around, you only get one chance to get it all right.","津 - port 「シン」 A watery place where scribes record which ships visit and what they carry: a bustling trade port.","律 - law 「リツ」 Before he went away (left), he wrote (right).  We obey his words as if he were here to speak them.  He gave us law.","楼 - tower 「ロウ」 The watchman should be watching, but instead he daydreams.  Tower is high like a tree, where you think about food and women.","粒 - grain 「リュウ」 A grain of rice (or any small particle).  If you look at \"rice\" on the left, you can see two grains standing up from the head.  The part that stands is the grain.","接 - connect 「セツ」 Touch a woman you don\'t know and she stands up and connects solidly with her hand.","厘 - tiny-coin 「リン」 This is a tiny mining village where they dig into the cliff to make coins.  Tiny village making coins: tiny coin.","黙 - silent 「モク」 He burned the whole village to shut up one noisy dog!  Now it is silent.","埋 - bury 「マイ」 Last words of a poet so lacking in talent he had to resort to banditry: \"I set out to raid and pillage, got an arrow in my shirt.  Take me back home to my village, where they\'ll put me in the dirt.\"","量 - amount 「リョウ」 The amount of activity in the village increases as the sun rises.","糧 - provisions 「リョウ」 The amount of rice.","婆 - old-woman 「バ」 A woman with skin like waves: a wrinkly old woman.","娯 - amuse 「ゴ」 Rather than \"favor\", this is the big man twisting his neck and making a funny face to amuse his girlfriend.","如 - similar 「ジョ」 Women are similar in that they like to talk.","蔵 - storehouse 「ゾウ」 A retainer sits under shelter with his halberd and guards the grass storehouse.","臓 - organ 「ゾウ」 A lot of strange meat is kept in the storehouse of the body.","茂 - overgrown 「モ」 The halberd below is actually a brush hook.  Plants that are in need of trimming are overgrown.","姫 - princess 「ヒメ」 Sorry, but the retainer says this girl is in another castle.","款 - goodwill 「カン」 The knight lacks something to sacrifice on the altar, so he offers only his good will.","歌 - sing 「カ」 The baby bird lacking food does the only thing it\'s able to do over and over again: sing out to be fed.","吹 - blow 「スイ」 An open mouth, creating a lack of air within by blowing.","軟 - soft 「ナン」 A vehicle needs a hard road, if what the vehicle needs is lacking, the road is soft.","炊 - cook 「スイ」 When something is lacking, you provide it.  Give fire to food to make it edible.","坊 - altar-boy 「ボウ」 Take the \"earth\" on the left as simply a cross, and \"direction\" as a bent old minister who can\'t handle all of the business of the church by himself anymore.  His young assistant is an altar boy.","芳 - aroma 「ホウ」 Follow your nose!  Go in the direction of a pleasant aroma, and it will lead you to the growing flowers (grass top).","吉 - good-luck 「キチ」 Yell out \"Good luck!\" with a wide-open mouth to the knight as he goes off to battle.","詰 - pack 「キツ」 Pack a lot of feeling into the words, \"Good luck!\"","壮 - manly 「ソウ」 The knight rests in bed upright, ready for action.  What a tough, manly man!","装 - adorn 「ソウ」 The manly knight adorns himself with manly clothes!","荘 - villa 「ソウ」 Manly knight man laughs at your decadent roofs and walls.  His ancestral villa is a sideways bed for sleeping upright surrounded by grass, as well as 50 acres of manicured lawns, a tea-ceremony chamber, and his prize-winning rose garden (not depicted).","勇 - courage 「ユウ」 Courage is what a man has when he does something that might get his head (top, child\'s head) cut off.","孔 - cavity 「コウ」 Dentistry in ancient China!  Kneel down to check a child\'s mouth for cavities.","了 - done 「リョウ」 This child\'s arms aren\'t shown because it is a newborn baby swaddled in a blanket.  While its life is only beginning, the pregnancy is done.","暑 - hot 「ショ」 Earth trapped between two suns would be so hot that it would surely melt.","老 - aged 「ロウ」 An aged man tries not to think of himself resting under the earth, though he knows his time is soon.","孝 - filial 「コウ」 The devotion a child should have for his parents, since they were nice enough not to just bury him.","酵 - ferment 「コウ」 The truly filial child doesn\'t just bring his dad a beer, he ferments it!","濁 - muddy 「ダク」 The right side means mud: stuff to look through and scoop up worms in a ladle (for fishing bait).  Water with mud is muddy.","均 - equal 「キン」 Spread water equally over the ground you planted with your ladle.  There\'s even an equal sign in there to remind you.","菊 - chrysanthemum 「キク」 Very popular plant worth a ladleful of rice.","約 - promise 「ヤク」 Promises are questionable.  Will the thread hold?  Does the ladle hold water?","伯 - chief 「ハク」 An old, pale, white-haired man is the chief.","的 - target 「テキ」 For archery practice on the go, they once used a portable target that looks much like a white ladle.  The handle part sticks into the ground, and the white scoop-like part is easy to see in the grass.","峰 - peak 「ホウ」 A mountain, the roof from \"winter\", and the top part of a growing plant.  All things that have or are peaks.","慶 - happiness 「ケイ」 In the depths of winter, heartfelt feelings arrive in the mailbox in the mail tent.  Unexpected warmness in the cold brings happiness.","後 - behind 「ゴ」 In the blinding whiteness of winter, people who go out on chores would spool out twisted thread behind them to find their way home.","条 - clause 「ジョウ」 To survive the winter, you take it one day at a time.  Every day is a part of the deal: one piece of wood, for one more day of warmth.  A contract of many parts: each part is a clause.","混 - blend 「コン」 When you compare in good light, you can see which water is pure, and which is blended with impurities.","瓦 - tile 「ガ」 A close-up of a tile roof, showing the edges of interlocking tiles and a drop of rain running off.","瓶 - jug 「ビン」 The left side shows the neck of a bottle of champagne spraying after it has been opened, and the right is \"tile\" to show that it is made of ceramic: a jug.","麗 - lovely 「レイ」 Tiles on a tent-like roof, shown laid out in rows hanging from the ridge.  Compared to other roofs, it is lovely to look upon.","昆 - descendants 「コン」 Compared to the fatherly sun, we are all like its descendants.","法 - doctrine 「ホウ」 There\'s a tight doctrine about drinking water (left) at sea, so it won\'t all gone (right) before more can be found.","棄 - abandon 「キ」 The \"gone\" on top is abbreviated.  Leaves fall off of trees every year, and when they\'re all gone, the tree seems rather abandoned.","既 - already 「キ」 The good old man had fangs.  How horrible!  Pull them out!  Oh... he\'s old, they fell out already.","概 - generality 「ガイ」 Right is \"already,\" left is a tree.  \"Tree\" is an example of a general concept.  There are many types of trees, that can be very different, but it is okay to just say \"tree\" when that is already enough information.  Already enough when you have said \"tree\" without specifying: that is a generality.","浪 - drift 「ロウ」 The kindly old man falls in the water, but since even nature recognizes his goodness, instead of sinking and drowning, he drifts to safety.","恨 - grudge 「コン」 Everyone thinks he\'s just a nice old man, but deep in his heart, he bears a terrible grudge.","机 - desk 「キ」 A wooden table.","肌 - surface 「ハダ」 The purpose of a table (right) is a useful work surface.  Also refers to the surface of meat: skin.","胆 - gall 「タン」 The gall bladder is closely associated with the liver, and both with \"guts\" and courage.  Eat meat every dawn to become a strong, courageous man with lots of gall!","壇 - stage 「ダン」 Earth is built up, a lid-like roof, and lights from below like the rising sun, where the performers go around taking turns at their acts.  It is a stage!","恒 - constant 「コウ」 Like the sun\'s trip from horizon to horizon, the heart\'s beat is constant.","垣 - hedge 「カキ」 Earth and sun feed these walls.","但 - however 「タダシ」 Dawn is the time when a person most feels like making excuses and provisos.  \"I should get up now, however... !\"","暖 - toasty 「ダン」 Things that are toasty warm: the sun, a hand giving, hands clasped in friendship.","緩 - slack 「カン」 Thread, a hand giving (from receive) it.  Cut your friend some slack!","脹 - bulge 「チョウ」 Long (large) muscles (meat) bulge.","髪 - tresses 「ハツ」 The long-haired old man, strands of hair, and below, the friend who helps him keep it free of lice and fleas.  The tresses of hair that grow on the head.","援 - aid 「エン」 Friend lends a hand or two in aid.","抜 - pull-out 「バツ」 After shaking hands with your friend, what do you do with your hand from his grip?","紡 - spin-yarn 「ボウ」 You can spin a yarn or thread literally, or you can tell tall tales, like the old direction man.","肪 - fat 「ボウ」 As you get old and bent like the \"direction\" man, the flesh (meat) of your body tends to get more fat.","胞 - placenta 「ホウ」 Flesh (meat) that wraps around the unborn baby... sort of.","砲 - cannon 「ホウ」 The barrel is wrapped around a big stone ball before it fires.  Bang!  It\'s a cannon!","抱 - hug 「ホウ」 Arms (hands) wrap in a hug.","泡 - bubble 「ホウ」 A liquid wraps around... nothing?  air?  It\'s a bubble!","抽 - draw-out 「チュウ」 The oil well draws oil out of the ground like a pulling hand.","軸 - axle 「ジク」 Need to keep the chariot\'s axle well-oiled.","轄 - control 「カツ」 Control is essential to operate a vehicle without causing harm to yourself and others.","輝 - gleam 「キ」 Rays of light gleam from the polished wheel shield on the army chariot.","割 - divide 「カツ」 The most harm you can do something with swords is to divide it right in two!","軒 - eave 「ケン」 If the house has big enough eaves, you can park your chariot under there and keep it dry.","肝 - liver 「カン」 If you cook liver thoroughly as you would normal meat, it is dry and tough.","刊 - publish 「カン」 Originally, making paper.  The last steps are drying the sheets and cutting it to useful size.  Now it means making books.","汗 - sweat 「カン」 You\'ll never dry out your knight if you hang him in that hot place!","煩 - headache 「ハン」 Fire in the head.","愁 - grief 「シュウ」 What a farmer feels in his heart as he sees his crop burn.","修 - improve 「シュウ」 On the left: a person and a stick.  Above right, father, below, three strokes with the stick.  Beating the dust out of father\'s coat to improve his appearance.","悠 - serene 「ユウ」 The top is \"improve\" (by beating the dust out of father\'s coat) with the stickstrokes removed.  Making yourself serene is a non-violent improvement on the feelings in your heart.","育 - nurture 「イク」 Nurture your covered, inner self by taking care of the meat of your body.","徹 - go-through 「テツ」 In the middle is nurture, and the right could be interpreted as either \"beating\" or \"father.\"  The nurturing father moves to interpose himself between the child and the one who would beat him.  It is a small step from moving between to going through.","撤 - withdraw 「テツ」 In the middle is nurture, and the right could be interpreted as either \"beating\" or \"father.\"  The nurturing father takes away his hand rather than giving a beating.  To take away is to withdraw.","徴 - sign 「チョウ」 At the mountain pass, there is a sign on the king\'s authority requiring you to have permission, or you will be beaten!  Indicates both the sign and the fee you will have to pay to pass.","懲 - chastise 「チョウ」 One who ignores the king\'s sign doesn\'t always get a beating.  As long as they take the correction to heart, they can just be verbally chastised.","喫 - consume 「キツ」 Because he vowed to trim the tree, even when he had no knife the big man made himself bite off and consume the sprouting branches.","憲 - regulation 「ケン」 A man growing a concealed, illegal plant watches and feels fear in his heart, knowing that he\'s breaking a serious regulation.","積 - accumulate 「セキ」 When the rice grows like weeds and is harvested year after year, the farmer can accumulate a lot of money.","契 - vow 「ケイ」 A bonsai tree is a serious responsibility.  Before you can have one you need to vow you\'ll trim its growth and not let it get big.","卓 - table 「タク」 Long-nosed witches don\'t need to spend much on furniture.  This one has magicked up a giant early-blooming flower to use as a table!","悼 - grieve 「トウ」 To show the pain of the heart as clearly as if it were cut out and lying on the table: grieve.","華 - gorgeous 「カ」 A flower grows with a gorgeous huge blossom.","貞 - righteous 「テイ」 The long-nosed fortune-telling witch\'s idea of righteous is a customer who pays her fee whether he is happy with her predictions or not.  Pay the witch to be righteous!","偵 - spy 「テイ」 A spy might seem sneaky and untrustworthy, but they have to risk their lives and remain true to their friends even if they live with the enemy for years, and that takes faith in a righteous cause.  Paradoxically, a spy is a righteous person.","呈 - presentation 「テイ」 The king says some words as he makes a formal presentation of a reward to the hero.","狂 - insane 「キョウ」 Insane man thinks he\'s king of the beasts.","吟 - recite 「ギン」 When you know a poem well enough, you could open your mouth even now, and just recite it perfectly.","琴 - harp 「キン」 Now there are two kings!  Better provide some classy entertainment.","懇 - courtesy 「コン」 Even if you are a beast, if you are courteous everyone will think you have a good heart.","爵 - nobleman 「シャク」 Above, the haughty judgement of a narrowed eye, complete with lashes and eyebrow.  Measured to be good by the judgemental and haughty.","墾 - till 「コン」 It takes a good beast to till the earth.","猿 - monkey 「エン」 Animal we like to dress up in clothes, though it soils them with earth.","娘 - daughter 「ムスメ」 Every parent of a daughter sees her as a good girl.","格 - status 「カク」 Each tree has a different height, as each person has a different status.","絡 - entwine 「ラク」 Each (right) twisted thread is made of entwined fibers.","潤 - watering 「ジュン」 The king loves cleanliness but has some quirks.  He won\'t believe you\'ve washed at all unless you water the walkway outside his gate so he will see it wet.","閣 - pinnacle 「カク」 Imagine an ornate, spiraling path upward.  Each gate brings you higher, until you reach the pinnacle (of power, or of a tall building).","略 - summary 「リャク」 Don\'t give me the production reports for each individual paddy!  Just give me a summary!","酪 - cheese 「ラク」 Rather than \"each\", the meaning of hungry mouths in the winter.  Cheese is brewed like booze as a means of preserving food.","路 - road 「ロ」 Each swing of the leg moves you along easily when you\'re on a road.","露 - dew 「ロ」 Road (bottom) rain (top).  Dew is like rain, but it doesn\'t fall from clouds.  Perhaps it travels on the roads?","放 - release 「ホウ」 Father gets tired of questioning old direction man and not getting good directions, so he releases him to go about his business.","倣 - emulate 「ホウ」 Guy on the left is a nondescript person, but watch as he emulates the old direction man leaning on his stick, and then your father!","旁 - same-time 「ボウ」 The old man is so hunched up it\'s like he\'s standing and sitting at the same time!","傍 - beside 「ボウ」 Another person is there at the same time (right), they can\'t be in the same place exactly, so he must be beside.","硫 - sulfur 「リュウ」 Stinking yellow sulfur (brimstone) is found as a stone-like mineral, and since it melts when it is only a little hotter than boiling water, it is easy to make it flow.  The stone that flows is sulfur.","弁 - speech 「ベン」 Speech flowing out from one\'s self is blocked, while other people yammer on.","充 - fill 「ジュウ」 Take the focus off the water - what does the GIANT NOSE do?  It fills the tub!","唆 - entice 「サ」 Call people to come enjoy a hot bath in the flowing waters of the GIANT NOSE bathhouse.  In the cold winter, this is surely enticing.","俊 - brilliant 「シュン」 The person who thought of the enticing bath business is brilliant.","酸 - acid 「サン」 The enticing winter bathhouse is busy and needs to be washed thoroughly with strong cleaners every day.  In an alcohol-like bottle, they keep their strongest cleaner: acid.","拷 - torture 「ゴウ」 Consider carefully where to hit the helpless victim.","拡 - spread 「カク」 Move your hands wide apart.","擦 - rub 「サツ」 Judge the shape of things with your hands by rubbing them.","献 - donate 「ケン」 Donate sheepdogs to the southern shepherds so they don\'t have to keep their livestock in caves anymore.","獣 - animal 「ジュウ」 With one bite of his mouth, the dog tears open the wasp nest.  The thing about animals is that they can\'t learn by talking, they have to experience things themselves.","峡 - canyon 「キョウ」 It\'s a big feature like a mountain, except that it\'s where you\'d throw a double-headed dog after you\'ve a lid on it.","挟 - pinch 「キョウ」 Once you\'ve got the lid on the double-headed dog, you can\'t help but pinch him with your hand.","狭 - cramped 「キョウ」 For a beast like the double-headed dog, the lidded trap you have him in feels way too cramped.","伏 - bent-down 「フク」 A person in the posture of a dog is bent down.","謡 - noh-chant 「ヨウ」 Your voice sounds weird if you hold a can and talk into it.  In Noh (a Japanese style of theater), the actors chant in a weird, stylized way.  Weird voice from speaking into a can: Noh chant.","稲 - rice-plant 「トウ」 It is indicated that the grown rice plant on the left is simply literal by the explanation on the right that in the past (ex) the shoot was placed in the ground by hand (plucking hand, top right).","揺 - shake 「ヨウ」 A hand on the left, plus grabby fingers dangling a can: hold a can between your two hands to shake it.","妥 - settled 「ダ」 A man\'s life becomes settled after he picks a woman (sadly, not as easy as picking a berry).","紺 - dark-blue 「コン」 Old Navy hired time travellers to bribe the ancient monks to insert this insidious marketing message.  When you see \"Sweet threads!\" think \"navy\".","某 - some 「ボウ」 The sap of some trees is sweet, but only some.","媒 - medium 「バイ」 There are some women who, if you tell them anything, everyone will hear about it: a medium of communication, or otherwise.","謀 - scheme 「ボウ」 Saying some things, but keeping other secret.  Hatching a scheme.","眠 - sleep 「ミン」 In the usual prophesy, a people sleeps, waiting for a great leader to open their eyes.","看 - watch-over 「カン」 A hand is angled over an eye.  Shade the eyes to watch over others in the light.","罰 - punish 「バツ」 Swift and brutal punishment in ancient times: the crime is seen, formal words are said, and the criminal is cut down with swords.","美 - beauty 「ビ」 A very, very lonely backcountry monk decided that a big sheep is the perfect symbol of beauty.","着 - wear 「チャク」 The first man to think of wearing a sheep\'s skin raises his eyebrow at the thought that everybody else is running around naked.","彫 - carve 「チョウ」 Going around (circuit, left side) the workpiece, cutting with slashing chisel strokes to carve a masterpiece.","彰 - clearly 「ショウ」 At a good recital, you can hear each line of the poem clearly.","杉 - cedar 「スギ」 A tree with soft, thin leaves like these three strokes.","彩 - paint 「サイ」 Pick some berries and smear lines of their juice, as a crude paint.","浮 - float 「フ」 Grab a baby and toss it in the water.  Look at it float!","菜 - veggie 「サイ」 Little things, between grass and trees that you pluck up with your hand to eat.","頑 - stubborn 「ガン」 In a flooded area unsuitable for normal housing, the stubborn one used his head and built a stilt-house.","冠 - crown 「カン」 The king is so tall you have to stand on a stilt-house to wrap the measuring tape around his head.","封 - close-off 「フウ」 People only measure lands they own and wish to close off.","鐘 - bell 「ショウ」 As the kid stands up into adulthood and ceremonially leaves his village, a golden ritual bell is rung to see him off.","鉢 - bowl 「ハチ」 Theoretical history!  The origin of metalworking is when some caveman found a gold nugget.  Pleased with how it gave way when he hit it with a stone, he kept banging on it until by chance he had a beautiful and useful bowl!","善 - admirable 「ゼン」 Under the sheep, as in the bottom of \"gold\"... gold sparkles below.  Mouth hangs open in amazement: now that\'s an admirable sheep!","繕 - mend 「ゼン」 Use thread to make things admirable, or at least presentable, again: mend.","寿 - longevity 「ジュ」 The confused monk who drew the hand theorized that if you measure the hand, you will notice that it becomes longer and grows a seventh finger as one reaches a great age.","鋳 - molding 「チュウ」 The long-lasting metals and alloys like gold and brass are most often shaped by molding.","墜 - plummet 「ツイ」 The terraced hill wasn\'t built firmly enough to hold a whole regiment of men, so it breaks and they all plummet to the ground.","坪 - two-mats 「ツボ」 Originally meaning level ground, in Japan the meaning has evolved to refer to a more carefully-prepared indoor space: the square area of two standard-sized mats put together.","佳 - well-made 「カ」 If someone did put the first person together from clay and more clay, they sure did a good job.","瞬 - blink 「シュン」 Eyes blink.  A hand passes a baton in the blink of an eye.  Cows save up all of their blinking to do in the evening, kind of like they save their cud for when they have time to chew.","舞 - whirl 「ブ」 The delicate paper screen from \"none\" is something light and fluttery that whirls in the breeze.  As the Earth whirls around, it is evening, then noon.","傑 - great 「ケツ」 Every evening, this person throws his cow into the trees with his great strength.","堪 - abide 「カン」 Like a great feature of the terrain, abide through eons.","件 - situation 「ケン」 A person got mixed in with the cows, and now he\'s being herded along with them.  What a strange situation!","敏 - agile 「ビン」 Every young child thinks his father is good at sports and agile.","繁 - profuse 「ハン」 This one is a little sarcastic.  Every father has profuse growth of hairs (threads) on his head.","枚 - sheet 「マイ」 Don\'t make your father sleep on a plain wooden bench!  At least put a sheet over it!","冗 - needless 「ジョウ」 A table stacked on top of a table.  One of them is needless.","微 - tiny 「ビ」 Dad\'s a model railroad nut.  He built a mountain line on the table.  It goes around and around the tiny mountain.","処 - manage 「ショ」 Father\'s a bit bent out of shape about the tiny table he ordered, but it\'s actually just big enough, so we\'ll manage.","拠 - base 「キョ」 Base your life on managing to do things with your own hands.","征 - conquer 「セイ」 Proper going... strictly ordered walking... marching... conquer!","婿 - son-in-law 「セイ」 Look at them together!  Your daughter and... well... she picked a proper meathead, didn\'t she?","洞 - cave 「ドウ」 When water keeps coming up to the same place, it wears a hole.  The right side, as well as being \"same\" also looks like a cave mouth.","胴 - torso 「ドウ」 Some meat-bearing creatures, such as fish and snakes, lack limbs, but they are all alike in having a torso.","塗 - coating 「ト」 An excess of liquid overfills the container.  What does it do on the ground?  It forms a coating.","徐 - slow 「ジョ」 Because the excessive support beams in this house blocking traffic, going anywhere is slow.","斗 - dipper 「ト」 A dynamic cross-section image of scooping up drops of water in a bowl.  A bowl for scooping up water is a dipper.","斜 - diagonal 「シャ」 Many of the excessive beams are diagonal, and the dipper is held at a diagonal angle to scoop water.","妨 - disturb 「ボウ」 Old \"direction\" man is a dirty old man!  He is always disturbing the women!","別 - separate 「ベツ」 An old samurai who walks with a cane screams with his mouth wide open as he is seperated from his two swords.  His world falls apart as the age of the samurai ends.","旅 - trip 「リョ」 Three disorganized people ask the old direction man which way to go on their trip.","施 - charity 「シ」 The lost old man receives help from a charitable member of society.","様 - sama 「ヨウ」 The shepard\'s prize sheep, Hitsuji-sama, is always given the best place in the hot summer: by the water in the shade of a tree.An untranslatable title, like \"Mr.\" or \"Miss\", but showing special respect.","踏 - step-on 「トウ」 Usually, you only remember stepping on things you\'d rather not have.  You wouldn\'t want to step in a puddle of water, and if you set foot on the sun you\'d burn right up!","則 - rule 「ソク」 If you don\'t follow the rules when money is involved, expect swords to come out.","側 - side 「ソク」 Most people are on the side of the rules.","測 - gauge 「ソク」 Water has it\'s own natural rules.  One of them is that if you don\'t gauge the depths, you may run aground.","据 - set 「スエル」 Move something with the hand to its new place to be.","握 - squeeze 「アク」 When you go to the dealer, with your hand you squeeze fruit to see if it\'s ripe.","控 - retain 「コウ」 Close your hand tightly to retain what is being sucked into the void.","抹 - wipe 「マツ」 This originally meant to wipe paint on with a fingertip, by extension to wipe away a bit of paint with a fingertip, and eventually just any sort of wiping.","庸 - ordinary 「ヨウ」 Sitting in the tent, weaving a net or basket... it is a very humdrum, ordinary task.","猟 - stalk 「リョウ」 On the right is a net-like hunting suit with some twigs and leaves on it, and on the left is the hapless prey.","苗 - seedling 「ビョウ」 Rice paddies were planted with little grasslike seedlings.","描 - draw 「ビョウ」 The occasional joker would plant the seedlings in a pattern by hand to draw a silly picture in the paddy.","猫 - cat 「ビョウ」 Seedling animal: farmers would keep cats by the seedling garden to guard it from rabbits and rats.","肢 - limb 「シ」 Limbs are branches of meat from the trunk of the body.","岐 - diverge 「キ」 The path forks around the mountain.  The branch\'s direction of growth diverges from that of the tree.","膨 - swell 「ボウ」 The rejoicing knight beats his drum (center) for many strokes (right) until the flesh (meat, left) of his hand swells.","鼓 - drum 「コ」 The happy knight beating his drum with a stick in hand.","影 - shadow 「エイ」 Opposite the sunlight and open authority of the capital, dark things are hidden in the shadow.","就 - settle 「シュウ」 It\'s said that even a dog has a chance of success in the capital.  That settles it, I\'m moving there!","涼 - cool 「リョウ」 The capital (right) is all paved and gets very hot in the summer, so go down to the waterfront where the sea air is cool.","鯨 - whale 「ゲイ」 A whale is big compared to fish, as a capital is big compared to towns.","鮮 - fresh 「セン」 Sheep for \"sea\".  Fish fresh from the sea.","栓 - plug 「セン」 A plug, made from cork wood, stops everything from coming out.","杯 - cupful 「ハイ」 The ancients had no head for liquor.  After one cupful of wine, they were unable to climb a tree!","枯 - wither 「コ」 When a tree becomes too old, it withers.","横 - sideways 「オウ」 Having been cut down, the trees are no longer green and upright, but yellow and sideways.","棚 - shelf 「タナ」 The right side is not two moons or double meat, but just a picture of shelves, and the left hints that they are made of wood.","崩 - crumble 「ホウ」 It takes many moons for a mountain to crumble!","肯 - agree 「コウ」 I think we can all agree, the moon must be stopped!","脅 - threaten 「キョウ」 Showing lots of strength in the moonlight to threaten.","塑 - model 「ソ」 Ancient Chinese school science fair project: a model of the Earth going around the Moon!  You can remember it\'s just a model because it\'s reversed.  D- no prize","妄 - unreasonable 「モウ」 Women will be the death of me!  Why?","盲 - blind 「モウ」 If your eyes perish, then you become blind.","忙 - busy 「ボウ」 If you keep yourself too busy, you\'ll perish of a heart attack.","荒 - wild 「コウ」 Everything out here is dead but the grass and flowing water.  This is wild country!","慌 - panic 「コウ」 The heart goes wild with panic!","怠 - neglect 「タイ」 Someone has carelessly left a bloody heart at the foot of the nose statue\'s pedestal.  This shows some extraordinary janitorial neglect, just leaving hearts around.","胎 - womb 「タイ」 The meat pedestal on which a fetus stands.  (ancient scribes had a... naive understanding of biology)","始 - begin 「シ」 Two men fight over a woman formally.  When the prize is on her pedestal, the fight begins!","姻 - marriage 「イン」 A woman traps the big man in marriage!","侮 - contempt 「ブ」 \"Familiarity breeds contempt.\"  Qualities which every person has are not respected.","悔 - remorse 「カイ」 Every heart feels remorse.","億 - hundred-million 「オク」 A hundred million is the biggest number any person can have some concept of in their mind.  Beyond that, you might as well make up numbers, like a bazillion!","憶 - memory 「オク」 Memories are kept in both the mind and the heart.","怒 - anger 「ド」 In the heart of a slave (servant, top) there is always secret anger toward his owner.","怖 - dread 「フ」 Dread wraps around the heart (left) like cloth (right).","患 - sick 「カン」 Heart kabob.","懐 - yearn 「カイ」 The right side is an abbreviated \"inside\".  Inside every heart is yearning.","掌 - palm 「ショウ」 When you hold your hand to look at it, the palm is the higher part.","拙 - clumsy 「セツ」 When he leaves, he always trips over the doorframe, and has to put out his hands to catch himself!  How clumsy!","賞 - prize 「ショウ」 Given as a prize, any silly little thing can seem higher in value than money.","償 - compensation 「ショウ」 Like a prize, compensation is something awarded to a person.","蛍 - firefly 「ケイ」 A sparkling bright bug!","排 - expel 「ハイ」 Non-taking into the hand.  The opposite: expel.","抵 - resist 「テイ」 A hand shows pushing, while the floor under the family shows that the pushing is only passive resistance to the weight above.  So: to resist with an equal force.","拝 - worship 「ハイ」 A hand counts off prayers on a prayer stick, sliding the crosspieces down to one end as he finishes each one.  An act of fervent worship.","撮 - snatch 「サツ」 Another hand is added to erase the meaning of \"most\" and return to the literal idea of snatching an ear off.","艦 - warship 「カン」 A ship overseeing the coast, a vigilant warship.","鑑 - take-note 「カン」 The alert retainer overseeing the dishwasher takes note when he sees some gold cutlery go into his pocket!","濫 - overflow 「ラン」 The overseer is watching the dishwasher too carefully.  He didn\'t notice when the water began to overflow!","慎 - caution 「シン」 Everyone is naturally full of anxieties.  If you are true to your heart, you will be cautious.","鎮 - quell 「チン」 People usually get angry over deception or loss, so quell them with either the gold or the truth.","情 - sympathy 「ジョウ」 A blue heart is contagious.","請 - request 「セイ」 When some people selfishly ask for favors, they\'ll talk until they\'re blue in the face!  No limit to requests.","浄 - cleanse 「ジョウ」 Struggle with water!  The enemy?  Dirt!","静 - quiet 「セイ」 Out in the blue/green colours of nature, things may be struggling to live against each other, but it seems peaceful and quiet to us.","素 - element 「ソ」 To make linen (thread, below) from flax (a growing plant, above), you strip away the roots, leaves, and head, then pound the stalks until it seems you have reduced it to the fibers of its basic element.","潔 - virtue 「ケツ」 The purity of water, the vigor of a growing plant, the sharp utility of a knife, and the strength of thread.","伸 - extend 「シン」 At the moment of a literal handshake, the actual people extend their hands.","紳 - gentleman 「シン」 A gentleman respects his obligations.  His handshake and communicated word are his bond.","仁 - humane 「ジン」 Isolating people totally is too cruel.  It is humane to at least put two people together.","芸 - art 「ゲイ」 Artists are usually poor.  If he tries to support himself and two others with his art, they\'ll probably end up living out in the grass like animals.","魂 - soul 「コン」 Self dies, then two above: the soul and the ogre who drags it to hell.","壱 - i 「イチ」 This is a special \"one\" used in certain formal documents, not unlike the roman numeral \"I\".  The knight and his lazy sitting friend guard the special sideways one.","弐 - ii 「ニ」 A special \"two\" used in formal documents, not unlike the roman numeral \"II\".  Like the special \"one\" it is also guarded, but with a halberd.","滴 - drip 「テキ」 Again the emperor moving with the suitable slow dignity of an old man, indicating delicacy or fineness.  Rather than a gross splash of water, a delicate drip.","摘 - pick 「テキ」 Here is the emperor moving with the suitable slow dignity of an old man, indicating delicacy.  To use the hand delicately is to pick.","嫡 - legitimate 「チャク」 On the right is the emperor with the suitable solemn dignity of an old man, giving away a woman at the altar during a wedding ceremony.  With the participation of the supreme ruler, surely it is legitimate.","敵 - enemy 「テキ」 The young emperor suitably moving like an old man was an enemy of his father, who he murdered to gain the throne.","規 - compass 「キ」 Most wives will tell you that their husband would much rather just look at a compass and try to figure things out than ask directions.","寛 - lenient 「カン」 See grass under the roof, but nobody is punished.  Lenient.","芋 - potato 「イモ」 Upside-down plant grows its fruit underground!","挿 - put-in 「ソウ」 With your hand pick a leafy herb and put it into the opening of a basket.","境 - border 「キョウ」 Men are assigned to stand at the border and see if invaders are coming.","染 - dye 「セン」 The colourful sap of a tree is put through nine processes to remove the water and make powdered dye.","軌 - track 「キ」 One chariot might not leave much of a mark, but nine make a clear track.","絞 - strangle 「コウ」 With the motion of mixing with a spoon, wrapping a cord around and around the neck.","較 - contrast 「カク」 Mix the chariots up, see if you can recognize them by contrasting their differences.","校 - exam 「コウ」 In a forestry exam, pictures of different trees are all mixed together and the student has to sort them out.","棟 - ridgepole 「トウ」 The circus arrives in town!  It takes all day to set up their big-top tent!  First thing in the morning (sun rising in the east, right) they set up a pole standing like a tree: the ridgepole.","欄 - railing 「ラン」 People like to build on east-facing slopes to enjoy the morning sunrise, so the eastern gate would face downslope.  Visitors would appreciate a wooden handrail, or railing.","柱 - pillar 「チュウ」 A lord among trees must be cut down to make the main pillar of a great hall.","耗 - reduce 「モウ」 On the left, an overgrown plant, on the right, long hair: things that could stand to be trimmed down, or reduced."];
Dictionnary.chapter = [
  "一二三五七八",
  "四西匹六穴",
  "九丸力万方刀刃",
  "十千土士干工上下",
  "人入火小大丈",
  "木本末未天夭夫",
  "林森炎協功仕",
  "央矢失欠太犬",
  "体休少",
  "次灰災知医英映",
  "然燃無焼昭照",
  "交父文求救",
  "口日月目回田",
  "品晶明唱冒",
  "相器言信旦旧",
  "井囲図区凶困因",
  "耳甘曲中申皿",
  "門問聞間開閉",
  "斤丘兵片久",
  "戸尺氏民衣所新底低",
  "史虫蚕風凡属",
  "仲使便",
  "自白百首面血由",
  "兄鬼見貝円用冊甲",
  "買員貴責貯資賀",
  "古舌宅世地他売声",
  "川州水承氷永",
  "泉泳池湖流",
  "内肉有青清晴害骨",
  "夕多外死冬列昼夜",
  "族切分貧効勢",
  "雨雪当雷電",
  "手毛屯友乃及支",
  "受授争取収最枝",
  "心亡必応泌愛",
  "忘思志忠息想",
  "化比北花",
  "早朝草楽薬麻",
  "寸勺以付村包",
  "可句向同司何河荷",
  "寺詩時持等",
  "丁行打待得街径",
  "庁町灯寧",
  "名各客君石右左",
  "山岩炭岸砂研",
  "馬鳥鳴島駅",
  "王玉国宝主往現",
  "両画再共供異",
  "生牛午年缶朱出",
  "性星告許株対材",
  "糸系光先洗紙前空続",
  "女安案妹姿姓",
  "母舟毎海船航沿",
  "毒梅桜油届",
  "介界男果巣単",
  "胃畑里黒",
  "子予矛才戈",
  "字宇孫好序存在",
  "式代成誠城戦",
  "市姉長帳布肺",
  "労奴努加羽飛習",
  "危角魚負色解漁",
  "竹笛箱笑筋簡",
  "具算鼻夏",
  "立位音意章童野翌泣",
  "束東京車重垂乗",
  "平半並羊南洋呼",
  "己記改弓引張弱強",
  "止正定足走歩",
  "整歯噛爪証",
  "合今令命谷不",
  "否含念冷",
  "給答喜嬉倍容舎捨",
  "豆后高官局宮",
  "頭順領預額頂",
  "営登発浴俗宣倉富芽",
  "米来釆番季粉料精",
  "葉黄若茶蒸汽気苦",
  "良食朗眼飼",
  "反皮圧坂板仮服",
  "公松台治広仏",
  "至会伝屋室",
  "私委和利科",
  "秘秒移秋程",
  "占点店居",
  "酒要尊配価",
  "温衆盟益塩",
  "元示完宗祭察禁神",
  "病痛疲破症",
  "社視甫補複福祝初",
  "学栄覚尚肖宵堂常挙",
  "乳乱礼札辛幸辞活",
  "金余銅銀鉄鉱針鋼",
  "固周個調園耕恩団",
  "易場湯腸",
  "物豚家象像参",
  "幼勤動究働",
  "弟第説税党費",
  "麦去書事妻筆",
  "写与汚号考",
  "且組助査祖",
  "軍庫軽転経輪論輸",
  "進週近辺関送連運",
  "皇球全住聖理望班",
  "巨臣亜臨監覧",
  "非俳罪",
  "悲悪窓急",
  "豊短商橋欲",
  "敗故牧特教数",
  "採折拾技操担指招揮",
  "卵背批兆歴競",
  "省児真県直値植置",
  "訓語読話計討詞訳談",
  "線絵細級納絹終紅練",
  "館追師飲根養飯管",
  "即節築朿策座卒",
  "課評試誌呉誤訪忍認",
  "景原源裏種",
  "身射謝専状将",
  "宿縮従縦識織職",
  "緑純綿結総統績",
  "迷述速遠造退遺",
  "帝適達逆過",
  "準斉済潮注決波派",
  "道導通遊遣",
  "窃憂吏業傘表璽",
  "凸凹互丹",
  "延廷妊庭任",
  "建賃艇健誕",
  "基碁期棋暴",
  "旗恭欺寒爆",
  "幽玄磁弦幻畜慈滋蓄",
  "腹復扉履享",
  "紫刷疑者愚偶",
  "印御卸抑柳庶",
  "返遭逝迫逃",
  "秀誘透迭迅込遂",
  "集雄擁曜躍濯",
  "又騒隻獲穫設",
  "侵寝浸殴穀暇",
  "賢殿役曼漫慢",
  "度渡股怪投護",
  "没桑疫茎撃叔堅",
  "為厄報腕却脚犯範",
  "段叙極緊殺",
  "双捜督淑寂偽",
  "昔惜籍錯借措",
  "鈍銘錘鋭錠鉛釣銃",
  "鍛鏡錬録銭銑鈴鎖",
  "希刈脳悩殻",
  "確難権推携",
  "牙慨雅検穏",
  "陽皆階陪際陶隔",
  "降陣険限随都院",
  "陰隠防障陳陛除",
  "隅附堕隊陸",
  "隆陵阻隣陥",
  "融離髄",
  "郵郭郊邸邦郡",
  "郷廊郎邪部響",
  "涯験倹剣雇顧",
  "焦礁奮奪凍准",
  "凝維稚雑勧歓雌",
  "観唯催羅",
  "途逢縫迎",
  "扁偏編遍逓巡",
  "遵違免勉逸遅逐",
  "遮遇逮選遷避還",
  "隷壁癖環仰",
  "緒署諸著煮",
  "擬虚劇虐虞慮曹膚",
  "此漢覆虜戯",
  "扇尼泥尽",
  "戻涙肩展房啓",
  "刑型形併塀",
  "守尉慰狩炉",
  "漏屈堀尿尾層",
  "憎贈僧嘆槽",
  "赤跡騎嚇変赦湾蛮恋",
  "奏奉棒春俸泰実朕咲",
  "払惨能甚勘態罷",
  "旋礎政是提堤題",
  "婦帰兼嫌謙廉",
  "威幅武賦或域惑",
  "褐渇喝謁掲旨脂",
  "栽戒械桟柔掘",
  "零齢而耐端需儒",
  "筒箇篤篝構溝講購",
  "突窯作窄昨搾詐酢",
  "飢飽飾我餓犠義儀議",
  "越徒召紹沼超詔",
  "項攻博敷穂恵薄縛簿",
  "駐駄券騰謄紀巻圏勝",
  "典興農娠唇辱振震濃",
  "奥類莫膜模輩募墓慕",
  "柄丙乙乏芝乾幹",
  "賄財貫慣販版",
  "枠砕壊汁粋粘",
  "赴趣朴掛搭塔",
  "宙密演奇寄崎嗣",
  "繰機締燥藻満液",
  "盾循殖係懸断継",
  "薦廃床潟渓鶏",
  "析質祈匠載漸暫",
  "孰畝坑抗熟塾執",
  "閑閥痘痢僚寮療闘",
  "香菌快添称",
  "厳敢散摂渋塁恥徳聴",
  "葬残旬殉珠殊",
  "沸窮弔禅弾孤弧",
  "頒寡紛雰霜務霧",
  "夢睡掃帯滞",
  "裕襟祉祥菓薪裸",
  "彼被披渦禍",
  "硝卑碑拓更硬",
  "妃暮忌起巷港",
  "煙猶腰貨革靴覇",
  "席幕帽漠棺帥",
  "愉癒諭疾痴矯侯候",
  "刺制製副剤槍創",
  "衰依袋襲貸",
  "独獄蛇触繭網備",
  "伐幾伺感減憾",
  "誉託謹詠匿諾",
  "藩滑洪審翻翁翼訟",
  "似俵侍倫亭停訂",
  "消削剛剰綱",
  "勲衝薫熱墨暁",
  "傷賜揚撲僕",
  "喚奨換奔臭憩括",
  "駆欧枢敬警驚拘",
  "促践距踊拒",
  "淡滅浅溶澄浜",
  "頻願渉傾債優漬",
  "企診珍宴婚升昇",
  "泊激拍般搬盤舶",
  "沢択疎釈頼瀬勅",
  "尋巧帆恐朽誇",
  "架悟緯嘱叫糾偉衛",
  "況克賊噴墳憤",
  "蚊斎紋歳票漂標",
  "咨諮盗盛盆猛",
  "脱閲脈胸府腐符",
  "晩衡悦樹親術絶把肥",
  "剖賠培吐哲誓",
  "潜賛替扶損韻暗",
  "拐貿匁扱吸",
  "哀裁保褒裂烈例",
  "累増索判畔伴",
  "塊醜味魅磨魔摩",
  "深探漆捕舗浦",
  "租粗畳宰宜",
  "岬岳押仙峠崇斥訴",
  "縄率竜滝留沈囚",
  "江貢沖衷喪",
  "暦厚産励牲顔",
  "酌酷酔酬嬢譲壌醸",
  "湿顕繊普譜霊雲曇",
  "抄妙劣賓刻該劾核",
  "康唐糖粧塚縁嫁",
  "桃跳挑倒窒致眺到",
  "差群詳惰落佐",
  "稼秩豪幣弊稿粛津律",
  "楼粒接厘黙埋量糧",
  "婆娯如蔵臓茂姫",
  "款歌吹軟炊",
  "坊芳吉詰壮装荘",
  "勇孔了暑老孝酵",
  "濁均菊約伯的",
  "峰慶後条混瓦瓶麗昆",
  "法棄既概浪恨",
  "机肌胆壇恒垣但",
  "暖緩脹髪援抜",
  "紡肪胞砲抱泡",
  "抽軸轄輝割軒肝刊汗",
  "煩愁修悠育徹撤徴懲",
  "喫憲積契卓悼華貞偵",
  "呈狂吟琴懇爵墾猿娘",
  "格絡潤閣略酪路露",
  "放倣旁傍硫",
  "弁充唆俊酸",
  "拷拡擦献獣峡挟狭伏",
  "謡稲揺妥紺某媒謀",
  "眠看罰美着",
  "彫彰杉彩浮菜",
  "頑冠封鐘鉢善繕寿鋳",
  "墜坪佳瞬舞傑堪件",
  "敏繁枚冗微処拠",
  "征婿洞胴塗徐斗斜",
  "妨別旅施様踏則側測",
  "据握控抹庸猟苗描猫",
  "肢岐膨鼓影就涼鯨鮮",
  "栓杯枯横棚崩肯脅塑",
  "妄盲忙荒慌怠胎始姻",
  "侮悔億憶怒怖患懐",
  "掌拙賞償蛍排抵拝撮",
  "艦鑑濫慎鎮情請浄静",
  "素潔伸紳仁芸魂壱弐",
  "滴摘嫡敵規寛芋挿境",
  "染軌絞較校棟欄柱耗"
]
Dictionnary.kanji = [
	["～日", "～日", ["にち", "か", "じつ"],
		[], null
	],
	["日", "日", ["ひ", "にち"],
		[], null
	],
	["(十|とお)[日|か]", "十日", ["とおか"],
		[
			["十", "とお", true],
			["日", "か", false]
		], "32"
	],
	["(二十|はつ)[日|か]", "二十日", ["はつか"],
		[
			["二十", "はつ", true],
			["日", "か", false]
		], "31"
	],
	["(二|ふつ)[日|か]", "二日", ["ふつか"],
		[
			["二", "ふつ", true],
			["日", "か", false]
		], "32"
	],
	["(三|みっ)[日|か]", "三日", ["みっか"],
		[
			["三", "みっ", true],
			["日", "か", false]
		], "44"
	],
	["(五|いつ)[日|か]", "五日", ["いつか"],
		[
			["五", "いつ", true],
			["日", "か", false]
		], "58"
	],
	["(四|よっ)[日|か]", "四日", ["よっか"],
		[
			["四", "よっ", true],
			["日", "か", false]
		], "64"
	],
	["(九|ここの)[日|か]", "九日", ["ここのか"],
		[
			["九", "ここの", true],
			["日", "か", false]
		], "69"
	],
	["(八|よう)[日|か]", "八日", ["ようか"],
		[
			["八", "よう", true],
			["日", "か", false]
		], "85"
	],
	["(六|むい)[日|か]", "六日", ["むいか"],
		[
			["六", "むい", true],
			["日", "か", false]
		], "88"
	],
	["(七|なの)[日|か]", "七日", ["なのか"],
		[
			["七", "なの", true],
			["日", "か", false]
		], "96"
	],
	["一日", "一日", ["いちにち", "ついたち"],
		[], null
	],
	["[一|いち]", "一", ["いち"],
		[
			["一", "いち", false]
		], -1
	],
	["[一|ひと]つ", "一つ", ["ひとつ"],
		[
			["一", "ひと", false],
			["つ", null, false]
		], -1
	],
	["[一|ひと](人|り)", "一人", ["ひとり"],
		[
			["一", "ひと", false],
			["人", "り", true]
		], "19"
	],
	["[一|ひと](月|つき)", "一月", ["ひとつき"],
		[
			["一", "ひと", false],
			["月", "つき", true]
		], "49"
	],
	["～人", "～人", ["じん", "にん"],
		[], null
	],
	["一人一人", "一人一人", ["ひとりひとり", "ひとりびとり"],
		[], null
	],
	["[一|ひと][人|り]", "一人", ["ひとり"],
		[
			["一", "ひと", false],
			["人", "り", false]
		], -1
	],
	["[人|ひと]", "人", ["ひと"],
		[
			["人", "ひと", false]
		], -1
	],
	["(二|ふた)[人|り]", "二人", ["ふたり"],
		[
			["二", "ふた", true],
			["人", "り", false]
		], "30"
	],
	["{～}[年|ねん]", "～年", ["ねん"],
		[
			["～", null, false],
			["年", "ねん", false]
		], -1
	],
	["[大|おお]きい", "大きい", ["おおきい"],
		[
			["大", "おお", false],
			["き", null, false],
			["い", null, false]
		], -1
	],
	["[大人|おとな]", "大人", ["おとな"],
		[
			["大人", "おとな", false]
		], -1
	],
	["[大|だい](学|がく)", "大学", ["だいがく"],
		[
			["大", "だい", false],
			["学", "がく", true]
		], "75"
	],
	["十", "十", ["じゅう", "とお"],
		[], null
	],
	["[十|とお][日|か]", "十日", ["とおか"],
		[
			["十", "とお", false],
			["日", "か", false]
		], -1
	],
	["[二|に]", "二", ["に"],
		[
			["二", "に", false]
		], -1
	],
	["[二|ふた]つ", "二つ", ["ふたつ"],
		[
			["二", "ふた", false],
			["つ", null, false]
		], -1
	],
	["[二|ふた][人|り]", "二人", ["ふたり"],
		[
			["二", "ふた", false],
			["人", "り", false]
		], -1
	],
	["[二十|はつ][日|か]", "二十日", ["はつか"],
		[
			["二十", "はつ", false],
			["日", "か", false]
		], -1
	],
	["[二|ふつ][日|か]", "二日", ["ふつか"],
		[
			["二", "ふつ", false],
			["日", "か", false]
		], -1
	],
	["日本", "日本", ["にっぽん", "にほん"],
		[], null
	],
	["[本|ほん]", "本", ["ほん"],
		[
			["本", "ほん", false]
		], -1
	],
	["{～}[本|ほん]", "～本", ["ほん"],
		[
			["～", null, false],
			["本", "ほん", false]
		], -1
	],
	["中", "中", ["なか", "ちゅう"],
		[], null
	],
	["～中", "～中", ["ちゅう", "じゅう"],
		[], null
	],
	["[出|で]かけ*る", "出かけ", ["でかけ"],
		[
			["出", "で", false],
			["か", null, false],
			["け", null, false]
		], -1
	],
	["[出|だ]*す", "出", ["だ"],
		[
			["出", "だ", false]
		], -1
	],
	["[出|で]*る", "出", ["で"],
		[
			["出", "で", false]
		], -1
	],
	["[出|で](口|ぐち)", "出口", ["でぐち"],
		[
			["出", "で", false],
			["口", "ぐち", true]
		], "113"
	],
	["[三|さん]", "三", ["さん"],
		[
			["三", "さん", false]
		], -1
	],
	["[三|みっ]つ", "三つ", ["みっつ"],
		[
			["三", "みっ", false],
			["つ", null, false]
		], -1
	],
	["[三|みっ][日|か]", "三日", ["みっか"],
		[
			["三", "みっ", false],
			["日", "か", false]
		], -1
	],
	["[見|み]せ*る", "見せ", ["みせ"],
		[
			["見", "み", false],
			["せ", null, false]
		], -1
	],
	["[見|み]*る", "見", ["み"],
		[
			["見", "み", false]
		], -1
	],
	["～月", "～月", ["がつ", "つき"],
		[], null
	],
	["年月", "年月", ["としつき", "ねんげつ"],
		[], null
	],
	["[一|ひと][月|つき]", "一月", ["ひとつき"],
		[
			["一", "ひと", false],
			["月", "つき", false]
		], -1
	],
	["{～}か[月|げつ]", "～か月", ["かげつ"],
		[
			["～", null, false],
			["か", null, false],
			["月", "げつ", false]
		], -1
	],
	["(先|せん)[月|げつ]", "先月", ["せんげつ"],
		[
			["先", "せん", true],
			["月", "げつ", false]
		], "104"
	],
	["生", "生", ["せい", "なま"],
		[], null
	],
	["[生|う]まれ*る", "生まれ", ["うまれ"],
		[
			["生", "う", false],
			["ま", null, false],
			["れ", null, false]
		], -1
	],
	["(学|がく)[生|せい]", "学生", ["がくせい"],
		[
			["学", "がく", true],
			["生", "せい", false]
		], "76"
	],
	["(先|せん)[生|せい]", "先生", ["せんせい"],
		[
			["先", "せん", true],
			["生", "せい", false]
		], "105"
	],
	["[五|ご]", "五", ["ご"],
		[
			["五", "ご", false]
		], -1
	],
	["[五|いつ]つ", "五つ", ["いつつ"],
		[
			["五", "いつ", false],
			["つ", null, false]
		], -1
	],
	["[五|いつ][日|か]", "五日", ["いつか"],
		[
			["五", "いつ", false],
			["日", "か", false]
		], -1
	],
	["上", "上", ["うえ", "うわ", "かみ", "じょう"],
		[], null
	],
	["上る", "上る", ["あがる", "のぼる"],
		[], null
	],
	["[上|じょう](手|ず)", "上手", ["じょうず"],
		[
			["上", "じょう", false],
			["手", "ず", true]
		], "73"
	],
	["四", "四", ["し", "よん"],
		[], null
	],
	["[四|よっ]つ", "四つ", ["よっつ"],
		[
			["四", "よっ", false],
			["つ", null, false]
		], -1
	],
	["[四|よっ][日|か]", "四日", ["よっか"],
		[
			["四", "よっ", false],
			["日", "か", false]
		], -1
	],
	["金", "金", ["かね", "きん"],
		[], null
	],
	["お[金|かね]", "お金", ["おかね"],
		[
			["お", null, false],
			["金", "かね", false]
		], -1
	],
	["九", "九", ["きゅう", "く"],
		[], null
	],
	["[九|ここの]つ", "九つ", ["ここのつ"],
		[
			["九", "ここの", false],
			["つ", null, false]
		], -1
	],
	["[九|ここの][日|か]", "九日", ["ここのか"],
		[
			["九", "ここの", false],
			["日", "か", false]
		], -1
	],
	["[入|はい]*5", "入", ["はい"],
		[
			["入", "はい", false]
		], -1
	],
	["[入|い]れ*る", "入れ", ["いれ"],
		[
			["入", "い", false],
			["れ", null, false]
		], -1
	],
	["[立|た]*つ", "立", ["た"],
		[
			["立", "た", false]
		], -1
	],
	["[上|じょう][手|ず]", "上手", ["じょうず"],
		[
			["上", "じょう", false],
			["手", "ず", false]
		], -1
	],
	["[手|て]", "手", ["て"],
		[
			["手", "て", false]
		], -1
	],
	["[大|だい][学|がく]", "大学", ["だいがく"],
		[
			["大", "だい", false],
			["学", "がく", false]
		], -1
	],
	["[学|がく][生|せい]", "学生", ["がくせい"],
		[
			["学", "がく", false],
			["生", "せい", false]
		], -1
	],
	["[学|がっ](校|こう)", "学校", ["がっこう"],
		[
			["学", "がっ", false],
			["校", "こう", true]
		], "117"
	],
	["円", "円", ["えん", "まる"],
		[], null
	],
	["{～}[円|えん]", "～円", ["えん"],
		[
			["～", null, false],
			["円", "えん", false]
		], -1
	],
	["(女|おんな)の[子|こ]", "女の子", ["おんなのこ"],
		[
			["女", "おんな", true],
			["の", null, false],
			["子", "こ", false]
		], "101"
	],
	["(男|おとこ)の[子|こ]", "男の子", ["おとこのこ"],
		[
			["男", "おとこ", true],
			["の", null, false],
			["子", "こ", false]
		], "112"
	],
	["[目|め]", "目", ["め"],
		[
			["目", "め", false]
		], -1
	],
	["[八|はち]", "八", ["はち"],
		[
			["八", "はち", false]
		], -1
	],
	["[八|やっ]つ", "八つ", ["やっつ"],
		[
			["八", "やっ", false],
			["つ", null, false]
		], -1
	],
	["[八|よう][日|か]", "八日", ["ようか"],
		[
			["八", "よう", false],
			["日", "か", false]
		], -1
	],
	["[六|ろく]", "六", ["ろく"],
		[
			["六", "ろく", false]
		], -1
	],
	["[六|むっ]つ", "六つ", ["むっつ"],
		[
			["六", "むっ", false],
			["つ", null, false]
		], -1
	],
	["[六|むい][日|か]", "六日", ["むいか"],
		[
			["六", "むい", false],
			["日", "か", false]
		], -1
	],
	["下", "下", ["した", "げ", "しも"],
		[], null
	],
	["下る", "下る", ["くだる", "さがる"],
		[], null
	],
	["[下手|へた]", "下手", ["へた"],
		[
			["下手", "へた", false]
		], -1
	],
	["(天|てん)[気|き]", "天気", ["てんき"],
		[
			["天", "てん", true],
			["気", "き", false]
		], "126"
	],
	["[小|ちい]さい", "小さい", ["ちいさい"],
		[
			["小", "ちい", false],
			["さ", null, false],
			["い", null, false]
		], -1
	],
	["七", "七", ["しち", "なな"],
		[], null
	],
	["[七|なな]つ", "七つ", ["ななつ"],
		[
			["七", "なな", false],
			["つ", null, false]
		], -1
	],
	["[七|なの][日|か]", "七日", ["なのか"],
		[
			["七", "なの", false],
			["日", "か", false]
		], -1
	],
	["[山|やま]", "山", ["やま"],
		[
			["山", "やま", false]
		], -1
	],
	["(今|こ)[年|とし]", "今年", ["ことし"],
		[
			["今", "こ", true],
			["年", "とし", false]
		], "179"
	],
	["(今|こん)[月|げつ]", "今月", ["こんげつ"],
		[
			["今", "こん", true],
			["月", "げつ", false]
		], "180"
	],
	["[女|おんな]", "女", ["おんな"],
		[
			["女", "おんな", false]
		], -1
	],
	["[女|おんな]の[子|こ]", "女の子", ["おんなのこ"],
		[
			["女", "おんな", false],
			["の", null, false],
			["子", "こ", false]
		], -1
	],
	["[百|ひゃく]", "百", ["ひゃく"],
		[
			["百", "ひゃく", false]
		], -1
	],
	["[先|さき]", "先", ["さき"],
		[
			["先", "さき", false]
		], -1
	],
	["[先|せん][月|げつ]", "先月", ["せんげつ"],
		[
			["先", "せん", false],
			["月", "げつ", false]
		], -1
	],
	["[先|せん][生|せい]", "先生", ["せんせい"],
		[
			["先", "せん", false],
			["生", "せい", false]
		], -1
	],
	["[名|な](前|まえ)", "名前", ["なまえ"],
		[
			["名", "な", false],
			["前", "まえ", true]
		], "166"
	],
	["[川|かわ]", "川", ["かわ"],
		[
			["川", "かわ", false]
		], -1
	],
	["[千|せん]", "千", ["せん"],
		[
			["千", "せん", false]
		], -1
	],
	["(外|がい)(国|こく)[人|じん]", "外国人", ["がいこくじん"],
		[
			["外", "がい", true],
			["国", "こく", true],
			["人", "じん", false]
		], "142"
	],
	["[水|みず]", "水", ["みず"],
		[
			["水", "みず", false]
		], -1
	],
	["[男|おとこ]", "男", ["おとこ"],
		[
			["男", "おとこ", false]
		], -1
	],
	["[男|おとこ]の[子|こ]", "男の子", ["おとこのこ"],
		[
			["男", "おとこ", false],
			["の", null, false],
			["子", "こ", false]
		], -1
	],
	["[出|で][口|ぐち]", "出口", ["でぐち"],
		[
			["出", "で", false],
			["口", "ぐち", false]
		], -1
	],
	["[口|くち]", "口", ["くち"],
		[
			["口", "くち", false]
		], -1
	],
	["(来|らい)[年|ねん]", "来年", ["らいねん"],
		[
			["来", "らい", true],
			["年", "ねん", false]
		], "207"
	],
	["(来|らい)[月|げつ]", "来月", ["らいげつ"],
		[
			["来", "らい", true],
			["月", "げつ", false]
		], "208"
	],
	["[学|がっ][校|こう]", "学校", ["がっこう"],
		[
			["学", "がっ", false],
			["校", "こう", false]
		], -1
	],
	["空", "空", ["そら", "から"],
		[], null
	],
	["空く", "空く", ["あく", "すく"],
		[], null
	],
	["[木|き]", "木", ["き"],
		[
			["木", "き", false]
		], -1
	],
	["[車|くるま]", "車", ["くるま"],
		[
			["車", "くるま", false]
		], -1
	],
	["[足|あし]", "足", ["あし"],
		[
			["足", "あし", false]
		], -1
	],
	["[白|しろ]い", "白い", ["しろい"],
		[
			["白", "しろ", false],
			["い", null, false]
		], -1
	],
	["文字", "文字", ["もじ", "もんじ"],
		[], null
	],
	["音", "音", ["おと", "おん"],
		[], null
	],
	["[天|てん][気|き]", "天気", ["てんき"],
		[
			["天", "てん", false],
			["気", "き", false]
		], -1
	],
	["[花|はな]", "花", ["はな"],
		[
			["花", "はな", false]
		], -1
	],
	["[赤|あか]い", "赤い", ["あかい"],
		[
			["赤", "あか", false],
			["い", null, false]
		], -1
	],
	["(元|げん)[気|き]", "元気", ["げんき"],
		[
			["元", "げん", true],
			["気", "き", false]
		], "251"
	],
	["[右|みぎ]", "右", ["みぎ"],
		[
			["右", "みぎ", false]
		], -1
	],
	["[左|ひだり]", "左", ["ひだり"],
		[
			["左", "ひだり", false]
		], -1
	],
	["[休|やす]み", "休み", ["やすみ"],
		[
			["休", "やす", false],
			["み", null, false]
		], -1
	],
	["[休|やす]*む", "休", ["やす"],
		[
			["休", "やす", false]
		], -1
	],
	["[夕|ゆう](方|がた)", "夕方", ["ゆうがた"],
		[
			["夕", "ゆう", false],
			["方", "がた", true]
		], "176"
	],
	["[雨|あめ]", "雨", ["あめ"],
		[
			["雨", "あめ", false]
		], -1
	],
	["(電|でん)[気|き]", "電気", ["でんき"],
		[
			["電", "でん", true],
			["気", "き", false]
		], "279"
	],
	["(電|でん)[車|しゃ]", "電車", ["でんしゃ"],
		[
			["電", "でん", true],
			["車", "しゃ", false]
		], "281"
	],
	["[耳|みみ]", "耳", ["みみ"],
		[
			["耳", "みみ", false]
		], -1
	],
	["[大|たい](切|せつ)", "大切", ["たいせつ"],
		[
			["大", "たい", false],
			["切", "せつ", true]
		], "293"
	],
	["[国|くに]", "国", ["くに"],
		[
			["国", "くに", false]
		], -1
	],
	["(外|がい)[国|こく]", "外国", ["がいこく"],
		[
			["外", "がい", true],
			["国", "こく", false]
		], "192"
	],
	["(外|がい)[国|こく][人|じん]", "外国人", ["がいこくじん"],
		[
			["外", "がい", true],
			["国", "こく", false],
			["人", "じん", false]
		], "193"
	],
	["[会|あ]*う", "会", ["あ"],
		[
			["会", "あ", false]
		], -1
	],
	["[会|かい](社|しゃ)", "会社", ["かいしゃ"],
		[
			["会", "かい", false],
			["社", "しゃ", true]
		], "156"
	],
	["長～", "長～", ["ちょう", "なが"],
		[], null
	],
	["[長|なが]い", "長い", ["ながい"],
		[
			["長", "なが", false],
			["い", null, false]
		], -1
	],
	["[一|いち](番|ばん)", "一番", ["いちばん"],
		[
			["一", "いち", false],
			["番", "ばん", true]
		], "299"
	],
	["～時", "～時", ["じ", "とき"],
		[], null
	],
	["[時|とき][々|どき]", "時々", ["ときどき"],
		[
			["時", "とき", false],
			["々", "どき", false]
		], -1
	],
	["[時|じ](間|かん)", "時間", ["じかん"],
		[
			["時", "じ", false],
			["間", "かん", true]
		], "170"
	],
	["{～}[時|じ](間|かん)", "～時間", ["じかん"],
		[
			["～", null, false],
			["時", "じ", false],
			["間", "かん", true]
		], "171"
	],
	["[時|と](計|けい)", "時計", ["とけい"],
		[
			["時", "と", false],
			["計", "けい", true]
		], "262"
	],
	["行きます", "行きます", ["いきます", "ゆきます"],
		[], null
	],
	["行く", "行く", ["いく", "ゆく"],
		[], null
	],
	["行き", "行き", ["いき", "ゆき"],
		[], null
	],
	["[会|かい][社|しゃ]", "会社", ["かいしゃ"],
		[
			["会", "かい", false],
			["社", "しゃ", false]
		], -1
	],
	["分", "分", ["ぶ", "ぶん"],
		[], null
	],
	["大分", "大分", ["だいぶ", "だいぶん"],
		[], null
	],
	["{～}[分|ふん]", "～分", ["ふん"],
		[
			["～", null, false],
			["分", "ふん", false]
		], -1
	],
	["(半|はん)[分|ぶん]", "半分", ["はんぶん"],
		[
			["半", "はん", true],
			["分", "ぶん", false]
		], "260"
	],
	["後", "後", ["あと", "うしろ", "ご", "のち"],
		[], null
	],
	["[後|うし]ろ", "後ろ", ["うしろ"],
		[
			["後", "うし", false],
			["ろ", null, false]
		], -1
	],
	["(午|ご)[後|ご]", "午後", ["ごご"],
		[
			["午", "ご", true],
			["後", "ご", false]
		], "241"
	],
	["～前", "～前", ["まえ", "ぜん"],
		[], null
	],
	["[前|まえ]", "前", ["まえ"],
		[
			["前", "まえ", false]
		], -1
	],
	["[名|な][前|まえ]", "名前", ["なまえ"],
		[
			["名", "な", false],
			["前", "まえ", false]
		], -1
	],
	["(午|ご)[前|ぜん]", "午前", ["ごぜん"],
		[
			["午", "ご", true],
			["前", "ぜん", false]
		], "240"
	],
	["(毎|まい)[日|にち]", "毎日", ["まいにち"],
		[
			["毎", "まい", true],
			["日", "にち", false]
		], "308"
	],
	["間", "間", ["あいだ", "ま"],
		[], null
	],
	["[時|じ][間|かん]", "時間", ["じかん"],
		[
			["時", "じ", false],
			["間", "かん", false]
		], -1
	],
	["{～}[時|じ][間|かん]", "～時間", ["じかん"],
		[
			["～", null, false],
			["時", "じ", false],
			["間", "かん", false]
		], -1
	],
	["[東|ひがし]", "東", ["ひがし"],
		[
			["東", "ひがし", false]
		], -1
	],
	["(家|か)(内|ない)", "家内", ["かない"],
		[
			["家", "か", true],
			["内", "ない", true]
		], "218"
	],
	["方", "方", ["かた", "ほう"],
		[], null
	],
	["方々", "方々", ["かたがた", "ほうぼう"],
		[], null
	],
	["[夕|ゆう](方|がた)", "夕方", ["ゆうがた"],
		[
			["夕", "ゆう", false],
			["方", "がた", true]
		], -1
	],
	["今日", "今日", ["きょう", "こんにち"],
		[], null
	],
	["[今|いま]", "今", ["いま"],
		[
			["今", "いま", false]
		], -1
	],
	["[今|こ][年|とし]", "今年", ["ことし"],
		[
			["今", "こ", false],
			["年", "とし", false]
		], -1
	],
	["[今|こん][月|げつ]", "今月", ["こんげつ"],
		[
			["今", "こん", false],
			["月", "げつ", false]
		], -1
	],
	["[新|しん](聞|ぶん)", "新聞", ["しんぶん"],
		[
			["新", "しん", false],
			["聞", "ぶん", true]
		], "290"
	],
	["[今|こん](週|しゅう)", "今週", ["こんしゅう"],
		[
			["今", "こん", false],
			["週", "しゅう", true]
		], "327"
	],
	["[先|せん](週|しゅう)", "先週", ["せんしゅう"],
		[
			["先", "せん", false],
			["週", "しゅう", true]
		], "328"
	],
	["{～}(週|しゅう)[間|かん]", "～週間", ["しゅうかん"],
		[
			["～", null, false],
			["週", "しゅう", true],
			["間", "かん", false]
		], "331"
	],
	["[人|じん](口|こう)", "人口", ["じんこう"],
		[
			["人", "じん", false],
			["口", "こう", true]
		], "263"
	],
	["[年|とし]", "年", ["とし"],
		[
			["年", "とし", false]
		], -1
	],
	["明日", "明日", ["あした", "あす"],
		[], null
	],
	["[大|おお]きな", "大きな", ["おおきな"],
		[
			["大", "おお", false],
			["き", null, false],
			["な", null, false]
		], -1
	],
	["[大|だい](学|がく)(生|せい)", "大学生", ["だいがくせい"],
		[
			["大", "だい", false],
			["学", "がく", true],
			["生", "せい", true]
		], "205"
	],
	["[手|て](紙|がみ)", "手紙", ["てがみ"],
		[
			["手", "て", false],
			["紙", "がみ", true]
		], "342"
	],
	["外", "外", ["そと", "ほか"],
		[], null
	],
	["[外|がい][国|こく]", "外国", ["がいこく"],
		[
			["外", "がい", false],
			["国", "こく", false]
		], -1
	],
	["[外|がい][国|こく][人|じん]", "外国人", ["がいこくじん"],
		[
			["外", "がい", false],
			["国", "こく", false],
			["人", "じん", false]
		], -1
	],
	["言う", "言う", ["いう", "ゆう"],
		[], null
	],
	["[中|ちゅう](学|がっ)(校|こう)", "中学校", ["ちゅうがっこう"],
		[
			["中", "ちゅう", false],
			["学", "がっ", true],
			["校", "こう", true]
		], "234"
	],
	["[言|い]*う", "言", ["い"],
		[
			["言", "い", false]
		], -1
	],
	["本当", "本当", ["ほんと", "ほんとう"],
		[], null
	],
	["[見|み]え*る", "見え", ["みえ"],
		[
			["見", "み", false],
			["え", null, false]
		], -1
	],
	["[見|み]つか*5", "見つか", ["みつか"],
		[
			["見", "み", false],
			["つ", null, false],
			["か", null, false]
		], -1
	],
	["[見|み]つけ*る", "見つけ", ["みつけ"],
		[
			["見", "み", false],
			["つ", null, false],
			["け", null, false]
		], -1
	],
	["(花|はな)[見|み]", "花見", ["はなみ"],
		[
			["花", "はな", true],
			["見", "み", false]
		], "298"
	],
	["[月|つき]", "月", ["つき"],
		[
			["月", "つき", false]
		], -1
	],
	["(正|しょう)[月|がつ]", "正月", ["しょうがつ"],
		[
			["正", "しょう", true],
			["月", "がつ", false]
		], "253"
	],
	["[生|い]き*る", "生き", ["いき"],
		[
			["生", "い", false],
			["き", null, false]
		], -1
	],
	["[大|だい](学|がく)[生|せい]", "大学生", ["だいがくせい"],
		[
			["大", "だい", false],
			["学", "がく", true],
			["生", "せい", false]
		], "232"
	],
	["[来|き]ます", "来ます", ["きます"],
		[
			["来", "き", false],
			["ま", null, false],
			["す", null, false]
		], -1
	],
	["[来|らい][年|ねん]", "来年", ["らいねん"],
		[
			["来", "らい", false],
			["年", "ねん", false]
		], -1
	],
	["[来|らい][月|げつ]", "来月", ["らいげつ"],
		[
			["来", "らい", false],
			["月", "げつ", false]
		], -1
	],
	["[来|らい](週|しゅう)", "来週", ["らいしゅう"],
		[
			["来", "らい", false],
			["週", "しゅう", true]
		], "329"
	],
	["(夏|なつ)[休|やす]み", "夏休み", ["なつやすみ"],
		[
			["夏", "なつ", true],
			["休", "やす", false],
			["み", null, false]
		], "393"
	],
	["[上|あ]が*5", "上が", ["あが"],
		[
			["上", "あ", false],
			["が", null, false]
		], -1
	],
	["[上|あ]げ*る", "上げ", ["あげ"],
		[
			["上", "あ", false],
			["げ", null, false]
		], -1
	],
	["[入|にゅう](学|がく)", "入学", ["にゅうがく"],
		[
			["入", "にゅう", false],
			["学", "がく", true]
		], "231"
	],
	["[入|いり](口|ぐち)", "入口", ["いりぐち"],
		[
			["入", "いり", false],
			["口", "ぐち", true]
		], "264"
	],
	["家", "家", ["いえ", "うち"],
		[], null
	],
	["～家", "～家", ["か", "け"],
		[], null
	],
	["[立|た]て*る", "立て", ["たて"],
		[
			["立", "た", false],
			["て", null, false]
		], -1
	],
	["[家|か](内|ない)", "家内", ["かない"],
		[
			["家", "か", false],
			["内", "ない", true]
		], -1
	],
	["[話|はなし]", "話", ["はなし"],
		[
			["話", "はなし", false]
		], -1
	],
	["[話|はな]*す", "話", ["はな"],
		[
			["話", "はな", false]
		], -1
	],
	["(電|でん)[話|わ]", "電話", ["でんわ"],
		[
			["電", "でん", true],
			["話", "わ", false]
		], "280"
	],
	["[力|ちから]", "力", ["ちから"],
		[
			["力", "ちから", false]
		], -1
	],
	["[土|ど](曜|よう)[日|び]", "土曜日", ["どようび"],
		[
			["土", "ど", false],
			["曜", "よう", true],
			["日", "び", false]
		], "452"
	],
	["[日|にち](曜|よう)[日|び]", "日曜日", ["にちようび"],
		[
			["日", "にち", false],
			["曜", "よう", true],
			["日", "び", false]
		], "453"
	],
	["[月|げつ](曜|よう)[日|び]", "月曜日", ["げつようび"],
		[
			["月", "げつ", false],
			["曜", "よう", true],
			["日", "び", false]
		], "454"
	],
	["[木|もく](曜|よう)[日|び]", "木曜日", ["もくようび"],
		[
			["木", "もく", false],
			["曜", "よう", true],
			["日", "び", false]
		], "455"
	],
	["[水|すい](曜|よう)[日|び]", "水曜日", ["すいようび"],
		[
			["水", "すい", false],
			["曜", "よう", true],
			["日", "び", false]
		], "456"
	],
	["[火|か](曜|よう)[日|び]", "火曜日", ["かようび"],
		[
			["火", "か", false],
			["曜", "よう", true],
			["日", "び", false]
		], "457"
	],
	["[金|きん](曜|よう)[日|び]", "金曜日", ["きんようび"],
		[
			["金", "きん", false],
			["曜", "よう", true],
			["日", "び", false]
		], "458"
	],
	["数", "数", ["かず", "すう"],
		[], null
	],
	["[入|にゅう][学|がく]", "入学", ["にゅうがく"],
		[
			["入", "にゅう", false],
			["学", "がく", false]
		], -1
	],
	["[大|だい][学|がく][生|せい]", "大学生", ["だいがくせい"],
		[
			["大", "だい", false],
			["学", "がく", false],
			["生", "せい", false]
		], -1
	],
	["(文|ぶん)[学|がく]", "文学", ["ぶんがく"],
		[
			["文", "ぶん", true],
			["学", "がく", false]
		], "257"
	],
	["[中|ちゅう][学|がっ](校|こう)", "中学校", ["ちゅうがっこう"],
		[
			["中", "ちゅう", false],
			["学", "がっ", false],
			["校", "こう", true]
		], "270"
	],
	["(小|しょう)[学|がっ](校|こう)", "小学校", ["しょうがっこう"],
		[
			["小", "しょう", true],
			["学", "がっ", false],
			["校", "こう", true]
		], "250"
	],
	["お[子|こ]さん", "お子さん", ["おこさん"],
		[
			["お", null, false],
			["子", "こ", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[子|こ]", "子", ["こ"],
		[
			["子", "こ", false]
		], -1
	],
	["[北|きた]", "北", ["きた"],
		[
			["北", "きた", false]
		], -1
	],
	["{～}[目|め]", "～目", ["め"],
		[
			["～", null, false],
			["目", "め", false]
		], -1
	],
	["[午|ご][前|ぜん]", "午前", ["ごぜん"],
		[
			["午", "ご", false],
			["前", "ぜん", false]
		], -1
	],
	["[午|ご][後|ご]", "午後", ["ごご"],
		[
			["午", "ご", false],
			["後", "ご", false]
		], -1
	],
	["[十|じゅう](分|ぶん)", "十分", ["じゅうぶん"],
		[
			["十", "じゅう", false],
			["分", "ぶん", true]
		], "338"
	],
	["[下|さ]が*5", "下が", ["さが"],
		[
			["下", "さ", false],
			["が", null, false]
		], -1
	],
	["[下|さ]げ*る", "下げ", ["さげ"],
		[
			["下", "さ", false],
			["げ", null, false]
		], -1
	],
	["[書|か]*く", "書", ["か"],
		[
			["書", "か", false]
		], -1
	],
	["[気|き]", "気", ["き"],
		[
			["気", "き", false]
		], -1
	],
	["(空|くう)[気|き]", "空気", ["くうき"],
		[
			["空", "くう", true],
			["気", "き", false]
		], "277"
	],
	["[気|き](分|ぶん)", "気分", ["きぶん"],
		[
			["気", "き", false],
			["分", "ぶん", true]
		], "339"
	],
	["[小|ちい]さな", "小さな", ["ちいさな"],
		[
			["小", "ちい", false],
			["さ", null, false],
			["な", null, false]
		], -1
	],
	["[小|しょう][学|がっ](校|こう)", "小学校", ["しょうがっこう"],
		[
			["小", "しょう", false],
			["学", "がっ", false],
			["校", "こう", true]
		], "271"
	],
	["(元|げん)[気|き]", "元気", ["げんき"],
		[
			["元", "げん", true],
			["気", "き", false]
		], -1
	],
	["[正|ただ]しい", "正しい", ["ただしい"],
		[
			["正", "ただ", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[正|しょう][月|がつ]", "正月", ["しょうがつ"],
		[
			["正", "しょう", false],
			["月", "がつ", false]
		], -1
	],
	["[近|ちか]い", "近い", ["ちかい"],
		[
			["近", "ちか", false],
			["い", null, false]
		], -1
	],
	["[近|ちか]く", "近く", ["ちかく"],
		[
			["近", "ちか", false],
			["く", null, false]
		], -1
	],
	["(高|こう)(校|こう)[生|せい]", "高校生", ["こうこうせい"],
		[
			["高", "こう", true],
			["校", "こう", true],
			["生", "せい", false]
		], "274"
	],
	["[文|ぶん][学|がく]", "文学", ["ぶんがく"],
		[
			["文", "ぶん", false],
			["学", "がく", false]
		], -1
	],
	["[知|し]*5", "知", ["し"],
		[
			["知", "し", false]
		], -1
	],
	["[道|みち]", "道", ["みち"],
		[
			["道", "みち", false]
		], -1
	],
	["[半|はん][分|ぶん]", "半分", ["はんぶん"],
		[
			["半", "はん", false],
			["分", "ぶん", false]
		], -1
	],
	["{～}[半|はん]", "～半", ["はん"],
		[
			["～", null, false],
			["半", "はん", false]
		], -1
	],
	["[時|と][計|けい]", "時計", ["とけい"],
		[
			["時", "と", false],
			["計", "けい", false]
		], -1
	],
	["[人|じん][口|こう]", "人口", ["じんこう"],
		[
			["人", "じん", false],
			["口", "こう", false]
		], -1
	],
	["[入|いり][口|ぐち]", "入口", ["いりぐち"],
		[
			["入", "いり", false],
			["口", "ぐち", false]
		], -1
	],
	["[町|まち]", "町", ["まち"],
		[
			["町", "まち", false]
		], -1
	],
	["[今朝|けさ]", "今朝", ["けさ"],
		[
			["今朝", "けさ", false]
		], -1
	],
	["[朝|あさ]", "朝", ["あさ"],
		[
			["朝", "あさ", false]
		], -1
	],
	["(毎|まい)[朝|あさ]", "毎朝", ["まいあさ"],
		[
			["毎", "まい", true],
			["朝", "あさ", false]
		], "309"
	],
	["(作|さく)[文|ぶん]", "作文", ["さくぶん"],
		[
			["作", "さく", true],
			["文", "ぶん", false]
		], "451"
	],
	["[中|ちゅう][学|がっ][校|こう]", "中学校", ["ちゅうがっこう"],
		[
			["中", "ちゅう", false],
			["学", "がっ", false],
			["校", "こう", false]
		], -1
	],
	["[小|しょう][学|がっ][校|こう]", "小学校", ["しょうがっこう"],
		[
			["小", "しょう", false],
			["学", "がっ", false],
			["校", "こう", false]
		], -1
	],
	["[校|こう](長|ちょう)", "校長", ["こうちょう"],
		[
			["校", "こう", false],
			["長", "ちょう", true]
		], "324"
	],
	["(高|こう)[校|こう]", "高校", ["こうこう"],
		[
			["高", "こう", true],
			["校", "こう", false]
		], "391"
	],
	["(高|こう)[校|こう][生|せい]", "高校生", ["こうこうせい"],
		[
			["高", "こう", true],
			["校", "こう", false],
			["生", "せい", false]
		], "392"
	],
	["[西|にし]", "西", ["にし"],
		[
			["西", "にし", false]
		], -1
	],
	["[空|あ]*く", "空", ["あ"],
		[
			["空", "あ", false]
		], -1
	],
	["[空|くう][気|き]", "空気", ["くうき"],
		[
			["空", "くう", false],
			["気", "き", false]
		], -1
	],
	["[広|ひろ]い", "広い", ["ひろい"],
		[
			["広", "ひろ", false],
			["い", null, false]
		], -1
	],
	["[電|でん][気|き]", "電気", ["でんき"],
		[
			["電", "でん", false],
			["気", "き", false]
		], -1
	],
	["[電|でん][話|わ]", "電話", ["でんわ"],
		[
			["電", "でん", false],
			["話", "わ", false]
		], -1
	],
	["[電|でん][車|しゃ]", "電車", ["でんしゃ"],
		[
			["電", "でん", false],
			["車", "しゃ", false]
		], -1
	],
	["(思|おも)い[出|だ]*す", "思い出", ["おもいだ"],
		[
			["思", "おも", true],
			["い", null, false],
			["出", "だ", false]
		], "477"
	],
	["[少|すこ]し", "少し", ["すこし"],
		[
			["少", "すこ", false],
			["し", null, false]
		], -1
	],
	["(自|じ)(動|どう)[車|しゃ]", "自動車", ["じどうしゃ"],
		[
			["自", "じ", true],
			["動", "どう", true],
			["車", "しゃ", false]
		], "668"
	],
	["工場", "工場", ["こうじょう", "こうば"],
		[], null
	],
	["[足|た]り*る", "足り", ["たり"],
		[
			["足", "た", false],
			["り", null, false]
		], -1
	],
	["{～}[語|ご]", "～語", ["ご"],
		[
			["～", null, false],
			["語", "ご", false]
		], -1
	],
	["止める", "止める", ["とめる", "やめる"],
		[], null
	],
	["[早|はや]い", "早い", ["はやい"],
		[
			["早", "はや", false],
			["い", null, false]
		], -1
	],
	["[新|しん][聞|ぶん]", "新聞", ["しんぶん"],
		[
			["新", "しん", false],
			["聞", "ぶん", false]
		], -1
	],
	["[聞|き]*く", "聞", ["き"],
		[
			["聞", "き", false]
		], -1
	],
	["[字|じ]", "字", ["じ"],
		[
			["字", "じ", false]
		], -1
	],
	["[大|たい](切|せつ)", "大切", ["たいせつ"],
		[
			["大", "たい", false],
			["切", "せつ", true]
		], -1
	],
	["[食|た]べ*る", "食べ", ["たべ"],
		[
			["食", "た", false],
			["べ", null, false]
		], -1
	],
	["何", "何", ["なに", "なん"],
		[], null
	],
	["[火|ひ]", "火", ["ひ"],
		[
			["火", "ひ", false]
		], -1
	],
	["[南|みなみ]", "南", ["みなみ"],
		[
			["南", "みなみ", false]
		], -1
	],
	["[花|はな][見|み]", "花見", ["はなみ"],
		[
			["花", "はな", false],
			["見", "み", false]
		], -1
	],
	["[一|いち](番|ばん)", "一番", ["いちばん"],
		[
			["一", "いち", false],
			["番", "ばん", true]
		], -1
	],
	["[赤|あか]ちゃん", "赤ちゃん", ["あかちゃん"],
		[
			["赤", "あか", false],
			["ち", null, false],
			["ゃ", null, false],
			["ん", null, false]
		], -1
	],
	["(元|げん)[気|き]", "元気", ["げんき"],
		[
			["元", "げん", true],
			["気", "き", false]
		], "563"
	],
	["[青|あお]い", "青い", ["あおい"],
		[
			["青", "あお", false],
			["い", null, false]
		], -1
	],
	["[店|みせ]", "店", ["みせ"],
		[
			["店", "みせ", false]
		], -1
	],
	["[水|すい](道|どう)", "水道", ["すいどう"],
		[
			["水", "すい", false],
			["道", "どう", true]
		], "599"
	],
	["[字|じ](引|びき)", "字引", ["じびき"],
		[
			["字", "じ", false],
			["引", "びき", true]
		], "609"
	],
	["毎年", "毎年", ["まいねん", "まいとし"],
		[], null
	],
	["毎月", "毎月", ["まいげつ", "まいつき"],
		[], null
	],
	["[毎|まい][日|にち]", "毎日", ["まいにち"],
		[
			["毎", "まい", false],
			["日", "にち", false]
		], -1
	],
	["[毎|まい][朝|あさ]", "毎朝", ["まいあさ"],
		[
			["毎", "まい", false],
			["朝", "あさ", false]
		], -1
	],
	["[毎|まい](週|しゅう)", "毎週", ["まいしゅう"],
		[
			["毎", "まい", false],
			["週", "しゅう", true]
		], "330"
	],
	["[夕|ゆう](方|がた)", "夕方", ["ゆうがた"],
		[
			["夕", "ゆう", false],
			["方", "がた", true]
		], "354"
	],
	["夜", "夜", ["よる", "よ"],
		[], null
	],
	["[古|ふる]い", "古い", ["ふるい"],
		[
			["古", "ふる", false],
			["い", null, false]
		], -1
	],
	["[食|た]べ(物|もの)", "食べ物", ["たべもの"],
		[
			["食", "た", false],
			["べ", null, false],
			["物", "もの", true]
		], "825"
	],
	["[買|か]*う", "買", ["か"],
		[
			["買", "か", false]
		], -1
	],
	["[買|か]い(物|もの)", "買い物", ["かいもの"],
		[
			["買", "か", false],
			["い", null, false],
			["物", "もの", true]
		], "824"
	],
	["(切|きっ)[手|て]", "切手", ["きって"],
		[
			["切", "きっ", true],
			["手", "て", false]
		], "685"
	],
	["[大|たい](切|せつ)", "大切", ["たいせつ"],
		[
			["大", "たい", false],
			["切", "せつ", true]
		], "686"
	],
	["{～}[会|かい]", "～会", ["かい"],
		[
			["～", null, false],
			["会", "かい", false]
		], -1
	],
	["(社|しゃ)[会|かい]", "社会", ["しゃかい"],
		[
			["社", "しゃ", true],
			["会", "かい", false]
		], "335"
	],
	["[会|かい](場|じょう)", "会場", ["かいじょう"],
		[
			["会", "かい", false],
			["場", "じょう", true]
		], "374"
	],
	["[会|かい](話|わ)", "会話", ["かいわ"],
		[
			["会", "かい", false],
			["話", "わ", true]
		], "485"
	],
	["(教|きょう)[会|かい]", "教会", ["きょうかい"],
		[
			["教", "きょう", true],
			["会", "かい", false]
		], "529"
	],
	["[校|こう][長|ちょう]", "校長", ["こうちょう"],
		[
			["校", "こう", false],
			["長", "ちょう", false]
		], -1
	],
	["(社|しゃ)[長|ちょう]", "社長", ["しゃちょう"],
		[
			["社", "しゃ", true],
			["長", "ちょう", false]
		], "336"
	],
	["[同|おな]じ", "同じ", ["おなじ"],
		[
			["同", "おな", false],
			["じ", null, false]
		], -1
	],
	["[今|こん][週|しゅう]", "今週", ["こんしゅう"],
		[
			["今", "こん", false],
			["週", "しゅう", false]
		], -1
	],
	["[先|せん][週|しゅう]", "先週", ["せんしゅう"],
		[
			["先", "せん", false],
			["週", "しゅう", false]
		], -1
	],
	["[来|らい][週|しゅう]", "来週", ["らいしゅう"],
		[
			["来", "らい", false],
			["週", "しゅう", false]
		], -1
	],
	["[毎|まい][週|しゅう]", "毎週", ["まいしゅう"],
		[
			["毎", "まい", false],
			["週", "しゅう", false]
		], -1
	],
	["{～}[週|しゅう][間|かん]", "～週間", ["しゅうかん"],
		[
			["～", null, false],
			["週", "しゅう", false],
			["間", "かん", false]
		], -1
	],
	["[音|おん](楽|がく)", "音楽", ["おんがく"],
		[
			["音", "おん", false],
			["楽", "がく", true]
		], "716"
	],
	["[自|じ](分|ぶん)", "自分", ["じぶん"],
		[
			["自", "じ", false],
			["分", "ぶん", true]
		], "340"
	],
	["[行|おこな]う", "行う", ["おこなう"],
		[
			["行", "おこな", false],
			["う", null, false]
		], -1
	],
	["[社|しゃ][会|かい]", "社会", ["しゃかい"],
		[
			["社", "しゃ", false],
			["会", "かい", false]
		], -1
	],
	["[社|しゃ][長|ちょう]", "社長", ["しゃちょう"],
		[
			["社", "しゃ", false],
			["長", "ちょう", false]
		], -1
	],
	["(新|しん)(聞|ぶん)[社|しゃ]", "新聞社", ["しんぶんしゃ"],
		[
			["新", "しん", true],
			["聞", "ぶん", true],
			["社", "しゃ", false]
		], "371"
	],
	["[十|じゅう][分|ぶん]", "十分", ["じゅうぶん"],
		[
			["十", "じゅう", false],
			["分", "ぶん", false]
		], -1
	],
	["[気|き][分|ぶん]", "気分", ["きぶん"],
		[
			["気", "き", false],
			["分", "ぶん", false]
		], -1
	],
	["[自|じ][分|ぶん]", "自分", ["じぶん"],
		[
			["自", "じ", false],
			["分", "ぶん", false]
		], -1
	],
	["[歩|ある]*く", "歩", ["ある"],
		[
			["歩", "ある", false]
		], -1
	],
	["[手|て][紙|がみ]", "手紙", ["てがみ"],
		[
			["手", "て", false],
			["紙", "がみ", false]
		], -1
	],
	["[紙|かみ]", "紙", ["かみ"],
		[
			["紙", "かみ", false]
		], -1
	],
	["この[間|あいだ]", "この間", ["このあいだ"],
		[
			["こ", null, false],
			["の", null, false],
			["間", "あいだ", false]
		], -1
	],
	["[間|ま]に(合|あ)*う", "間に合", ["まにあ"],
		[
			["間", "ま", false],
			["に", null, false],
			["合", "あ", true]
		], "351"
	],
	["お[母|かあ]さん", "お母さん", ["おかあさん"],
		[
			["お", null, false],
			["母", "かあ", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[母|はは]", "母", ["はは"],
		[
			["母", "はは", false]
		], -1
	],
	["(有|ゆう)[名|めい]", "有名", ["ゆうめい"],
		[
			["有", "ゆう", true],
			["名", "めい", false]
		], "989"
	],
	["[地|ち](理|り)", "地理", ["ちり"],
		[
			["地", "ち", false],
			["理", "り", true]
		], "420"
	],
	["[合|あ]*う", "合", ["あ"],
		[
			["合", "あ", false]
		], -1
	],
	["[間|ま]に[合|あ]*う", "間に合", ["まにあ"],
		[
			["間", "ま", false],
			["に", null, false],
			["合", "あ", false]
		], -1
	],
	["(場|ば)[合|あい]", "場合", ["ばあい"],
		[
			["場", "ば", true],
			["合", "あい", false]
		], "375"
	],
	["(家|か)[内|ない]", "家内", ["かない"],
		[
			["家", "か", true],
			["内", "ない", false]
		], "482"
	],
	["[夕|ゆう][方|がた]", "夕方", ["ゆうがた"],
		[
			["夕", "ゆう", false],
			["方", "がた", false]
		], -1
	],
	["{～}[方|かた]", "～方", ["かた"],
		[
			["～", null, false],
			["方", "かた", false]
		], -1
	],
	["[今|こん](夜|や)", "今夜", ["こんや"],
		[
			["今", "こん", false],
			["夜", "や", true]
		], "757"
	],
	["[走|はし]*5", "走", ["はし"],
		[
			["走", "はし", false]
		], -1
	],
	["[回|まわ]*5", "回", ["まわ"],
		[
			["回", "まわ", false]
		], -1
	],
	["{～}[回|かい]", "～回", ["かい"],
		[
			["～", null, false],
			["回", "かい", false]
		], -1
	],
	["(自|じ)(転|てん)[車|しゃ]", "自転車", ["じてんしゃ"],
		[
			["自", "じ", true],
			["転", "てん", true],
			["車", "しゃ", false]
		], "1047"
	],
	["[地|ち](図|ず)", "地図", ["ちず"],
		[
			["地", "ち", false],
			["図", "ず", true]
		], "806"
	],
	["[日|ひ][日|にち]", "日日", ["ひにち"],
		[
			["日", "ひ", false],
			["日", "にち", false]
		], -1
	],
	["[日|にっ](中|ちゅう)", "日中", ["にっちゅう"],
		[
			["日", "にっ", false],
			["中", "ちゅう", true]
		], "413"
	],
	["[日|ひ]の(出|で)", "日の出", ["ひので"],
		[
			["日", "ひ", false],
			["の", null, false],
			["出", "で", true]
		], "416"
	],
	["(三|み)[日|か](月|づき)", "三日月", ["みかづき"],
		[
			["三", "み", true],
			["日", "か", false],
			["月", "づき", true]
		], "422"
	],
	["(月|つき)[日|ひ]", "月日", ["つきひ"],
		[
			["月", "つき", true],
			["日", "ひ", false]
		], "432"
	],
	["(生|せい)(年|ねん)(月|がっ)[日|ぴ]", "生年月日", ["せいねんがっぴ"],
		[
			["生", "せい", true],
			["年", "ねん", true],
			["月", "がっ", true],
			["日", "ぴ", false]
		], "388"
	],
	["[日|ひ]の(入|い)り", "日の入り", ["ひのいり"],
		[
			["日", "ひ", false],
			["の", null, false],
			["入", "い", true],
			["り", null, false]
		], "473"
	],
	["(先|せん)[日|じつ]", "先日", ["せんじつ"],
		[
			["先", "せん", true],
			["日", "じつ", false]
		], "580"
	],
	["[新|あたら]しい", "新しい", ["あたらしい"],
		[
			["新", "あたら", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[新|しん](聞|ぶん)[社|しゃ]", "新聞社", ["しんぶんしゃ"],
		[
			["新", "しん", false],
			["聞", "ぶん", true],
			["社", "しゃ", false]
		], "679"
	],
	["[一|ひと]{～}", "一～", ["ひと"],
		[
			["一", "ひと", false],
			["～", null, false]
		], -1
	],
	["[一|いっ](生|しょう)", "一生", ["いっしょう"],
		[
			["一", "いっ", false],
			["生", "しょう", true]
		], "436"
	],
	["[会|かい][場|じょう]", "会場", ["かいじょう"],
		[
			["会", "かい", false],
			["場", "じょう", false]
		], -1
	],
	["[場|ば][合|あい]", "場合", ["ばあい"],
		[
			["場", "ば", false],
			["合", "あい", false]
		], -1
	],
	["(売|う)り[場|ば]", "売り場", ["うりば"],
		[
			["売", "う", true],
			["り", null, false],
			["場", "ば", false]
		], "588"
	],
	["(本|ほん)[人|にん]", "本人", ["ほんにん"],
		[
			["本", "ほん", true],
			["人", "にん", false]
		], "408"
	],
	["[人|じん](生|せい)", "人生", ["じんせい"],
		[
			["人", "じん", false],
			["生", "せい", true]
		], "437"
	],
	["[人|にん](気|き)", "人気", ["にんき"],
		[
			["人", "にん", false],
			["気", "き", true]
		], "548"
	],
	["(女|おんな)の[人|ひと]", "女の人", ["おんなのひと"],
		[
			["女", "おんな", true],
			["の", null, false],
			["人", "ひと", false]
		], "568"
	],
	["(名|めい)[人|じん]", "名人", ["めいじん"],
		[
			["名", "めい", true],
			["人", "じん", false]
		], "585"
	],
	["(男|おとこ)の[人|ひと]", "男の人", ["おとこのひと"],
		[
			["男", "おとこ", true],
			["の", null, false],
			["人", "ひと", false]
		], "613"
	],
	["お[父|とう]さん", "お父さん", ["おとうさん"],
		[
			["お", null, false],
			["父", "とう", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[父|ちち]", "父", ["ちち"],
		[
			["父", "ちち", false]
		], -1
	],
	["(中|ちゅう)[年|ねん]", "中年", ["ちゅうねん"],
		[
			["中", "ちゅう", true],
			["年", "ねん", false]
		], "411"
	],
	["[年|ねん](中|じゅう)", "年中", ["ねんじゅう"],
		[
			["年", "ねん", false],
			["中", "じゅう", true]
		], "412"
	],
	["{～}[年|ねん](生|せい)", "～年生", ["ねんせい"],
		[
			["～", null, false],
			["年", "ねん", false],
			["生", "せい", true]
		], "435"
	],
	["(生|せい)[年|ねん](月|がっ)[日|ぴ]", "生年月日", ["せいねんがっぴ"],
		[
			["生", "せい", true],
			["年", "ねん", false],
			["月", "がっ", true],
			["日", "ぴ", false]
		], "433"
	],
	["(学|がく)[年|ねん]", "学年", ["がくねん"],
		[
			["学", "がく", true],
			["年", "ねん", false]
		], "505"
	],
	["[高|たか]い", "高い", ["たかい"],
		[
			["高", "たか", false],
			["い", null, false]
		], -1
	],
	["[高|こう][校|こう]", "高校", ["こうこう"],
		[
			["高", "こう", false],
			["校", "こう", false]
		], -1
	],
	["[高|こう][校|こう][生|せい]", "高校生", ["こうこうせい"],
		[
			["高", "こう", false],
			["校", "こう", false],
			["生", "せい", false]
		], -1
	],
	["(夏|なつ)[休|やす]み", "夏休み", ["なつやすみ"],
		[
			["夏", "なつ", true],
			["休", "やす", false],
			["み", null, false]
		], -1
	],
	["[大|だい]", "大", ["だい"],
		[
			["大", "だい", false]
		], -1
	],
	["[大|おお]いに", "大いに", ["おおいに"],
		[
			["大", "おお", false],
			["い", null, false],
			["に", null, false]
		], -1
	],
	["[大|たい]した", "大した", ["たいした"],
		[
			["大", "たい", false],
			["し", null, false],
			["た", null, false]
		], -1
	],
	["[大|たい]して", "大して", ["たいして"],
		[
			["大", "たい", false],
			["し", null, false],
			["て", null, false]
		], -1
	],
	["[大|たい](気|き)", "大気", ["たいき"],
		[
			["大", "たい", false],
			["気", "き", true]
		], "549"
	],
	["[大|だい](小|しょう)", "大小", ["だいしょう"],
		[
			["大", "だい", false],
			["小", "しょう", true]
		], "554"
	],
	["[大|たい](木|ぼく)", "大木", ["たいぼく"],
		[
			["大", "たい", false],
			["木", "ぼく", true]
		], "654"
	],
	["[明|あか]るい", "明るい", ["あかるい"],
		[
			["明", "あか", false],
			["る", null, false],
			["い", null, false]
		], -1
	],
	["(五|ご)[十|じゅう](音|おん)", "五十音", ["ごじゅうおん"],
		[
			["五", "ご", true],
			["十", "じゅう", false],
			["音", "おん", true]
		], "449"
	],
	["[二十|はたち]", "二十", ["はたち"],
		[
			["二十", "はたち", false]
		], -1
	],
	["[通|かよ]う", "通う", ["かよう"],
		[
			["通", "かよ", false],
			["う", null, false]
		], -1
	],
	["[通|とお]り", "通り", ["とおり"],
		[
			["通", "とお", false],
			["り", null, false]
		], -1
	],
	["[通|とお]る", "通る", ["とおる"],
		[
			["通", "とお", false],
			["る", null, false]
		], -1
	],
	["[本|ほん]{～}", "本～", ["ほん"],
		[
			["本", "ほん", false],
			["～", null, false]
		], -1
	],
	["[本|ほん][人|にん]", "本人", ["ほんにん"],
		[
			["本", "ほん", false],
			["人", "にん", false]
		], -1
	],
	["(見|み)[本|ほん]", "見本", ["みほん"],
		[
			["見", "み", true],
			["本", "ほん", false]
		], "425"
	],
	["角", "角", ["かど", "すみ"],
		[], null
	],
	["[中|ちゅう][年|ねん]", "中年", ["ちゅうねん"],
		[
			["中", "ちゅう", false],
			["年", "ねん", false]
		], -1
	],
	["[年|ねん][中|じゅう]", "年中", ["ねんじゅう"],
		[
			["年", "ねん", false],
			["中", "じゅう", false]
		], -1
	],
	["[日|にっ][中|ちゅう]", "日中", ["にっちゅう"],
		[
			["日", "にっ", false],
			["中", "ちゅう", false]
		], -1
	],
	["[中|ちゅう](学|がく)", "中学", ["ちゅうがく"],
		[
			["中", "ちゅう", false],
			["学", "がく", true]
		], "501"
	],
	["(空|くう)[中|ちゅう]", "空中", ["くうちゅう"],
		[
			["空", "くう", true],
			["中", "ちゅう", false]
		], "644"
	],
	["[日|ひ]の[出|で]", "日の出", ["ひので"],
		[
			["日", "ひ", false],
			["の", null, false],
			["出", "で", false]
		], -1
	],
	["(見|み)[出|だ]し", "見出し", ["みだし"],
		[
			["見", "み", true],
			["出", "だ", false],
			["し", null, false]
		], "424"
	],
	["[出|で](入|い)り", "出入り", ["でいり"],
		[
			["出", "で", false],
			["入", "い", true],
			["り", null, false]
		], "472"
	],
	["[出|で](入|いり)(口|ぐち)", "出入口", ["でいりぐち"],
		[
			["出", "で", false],
			["入", "いり", true],
			["口", "ぐち", true]
		], "476"
	],
	["[地|ち][理|り]", "地理", ["ちり"],
		[
			["地", "ち", false],
			["理", "り", false]
		], -1
	],
	["(青|せい)[年|ねん]", "青年", ["せいねん"],
		[
			["青", "せい", true],
			["年", "ねん", false]
		], "712"
	],
	["[三|み][日|か](月|づき)", "三日月", ["みかづき"],
		[
			["三", "み", false],
			["日", "か", false],
			["月", "づき", true]
		], "431"
	],
	["[体|からだ]", "体", ["からだ"],
		[
			["体", "からだ", false]
		], -1
	],
	["[見|み][出|だ]し", "見出し", ["みだし"],
		[
			["見", "み", false],
			["出", "だ", false],
			["し", null, false]
		], -1
	],
	["[見|み][本|ほん]", "見本", ["みほん"],
		[
			["見", "み", false],
			["本", "ほん", false]
		], -1
	],
	["[見|み](上|あ)げ*る", "見上げ", ["みあげ"],
		[
			["見", "み", false],
			["上", "あ", true],
			["げ", null, false]
		], "463"
	],
	["[見|けん](学|がく)", "見学", ["けんがく"],
		[
			["見", "けん", false],
			["学", "がく", true]
		], "506"
	],
	["[見|み](下|お)ろ*す", "見下ろ", ["みおろ"],
		[
			["見", "み", false],
			["下", "お", true],
			["ろ", null, false]
		], "539"
	],
	["[家|か](族|ぞく)", "家族", ["かぞく"],
		[
			["家", "か", false],
			["族", "ぞく", true]
		], "1137"
	],
	["(銀|ぎん)[行|こう]", "銀行", ["ぎんこう"],
		[
			["銀", "ぎん", true],
			["行", "こう", false]
		], "1146"
	],
	["[三|み][日|か][月|づき]", "三日月", ["みかづき"],
		[
			["三", "み", false],
			["日", "か", false],
			["月", "づき", false]
		], -1
	],
	["[月|つき][日|ひ]", "月日", ["つきひ"],
		[
			["月", "つき", false],
			["日", "ひ", false]
		], -1
	],
	["(生|せい)[年|ねん][月|がっ][日|ぴ]", "生年月日", ["せいねんがっぴ"],
		[
			["生", "せい", true],
			["年", "ねん", false],
			["月", "がっ", false],
			["日", "ぴ", false]
		], "444"
	],
	["(先|せん)(々|せん)[月|げつ]", "先々月", ["せんせんげつ"],
		[
			["先", "せん", true],
			["々", "せん", true],
			["月", "げつ", false]
		], "578"
	],
	["{～}[年|ねん][生|せい]", "～年生", ["ねんせい"],
		[
			["～", null, false],
			["年", "ねん", false],
			["生", "せい", false]
		], -1
	],
	["[一|いっ][生|しょう]", "一生", ["いっしょう"],
		[
			["一", "いっ", false],
			["生", "しょう", false]
		], -1
	],
	["[人|じん][生|せい]", "人生", ["じんせい"],
		[
			["人", "じん", false],
			["生", "せい", false]
		], -1
	],
	["[生|は]え*る", "生え", ["はえ"],
		[
			["生", "は", false],
			["え", null, false]
		], -1
	],
	["[生|い]き[生|い]き", "生き生き", ["いきいき"],
		[
			["生", "い", false],
			["き", null, false],
			["生", "い", false],
			["き", null, false]
		], -1
	],
	["[生|しょう]じ*る", "生じ", ["しょうじ"],
		[
			["生", "しょう", false],
			["じ", null, false]
		], -1
	],
	["[生|しょう]ずる", "生ずる", ["しょうずる"],
		[
			["生", "しょう", false],
			["ず", null, false],
			["る", null, false]
		], -1
	],
	["[生|う]まれ", "生まれ", ["うまれ"],
		[
			["生", "う", false],
			["ま", null, false],
			["れ", null, false]
		], -1
	],
	["[生|な]*5", "生", ["な"],
		[
			["生", "な", false]
		], -1
	],
	["[生|せい][年|ねん][月|がっ][日|ぴ]", "生年月日", ["せいねんがっぴ"],
		[
			["生", "せい", false],
			["年", "ねん", false],
			["月", "がっ", false],
			["日", "ぴ", false]
		], -1
	],
	["(小|しょう)(学|がく)[生|せい]", "小学生", ["しょうがくせい"],
		[
			["小", "しょう", true],
			["学", "がく", true],
			["生", "せい", false]
		], "507"
	],
	["[生|い]け(花|ばな)", "生け花", ["いけばな"],
		[
			["生", "い", false],
			["け", null, false],
			["花", "ばな", true]
		], "705"
	],
	["[来|く]る", "来る", ["くる"],
		[
			["来", "く", false],
			["る", null, false]
		], -1
	],
	["[一|ひと](休|やす)み", "一休み", ["ひとやすみ"],
		[
			["一", "ひと", false],
			["休", "やす", true],
			["み", null, false]
		], "730"
	],
	["[五|ご][十|じゅう](音|おん)", "五十音", ["ごじゅうおん"],
		[
			["五", "ご", false],
			["十", "じゅう", false],
			["音", "おん", true]
		], "691"
	],
	["[作|つく]*5", "作", ["つく"],
		[
			["作", "つく", false]
		], -1
	],
	["[作|さく][文|ぶん]", "作文", ["さくぶん"],
		[
			["作", "さく", false],
			["文", "ぶん", false]
		], -1
	],
	["[土|ど](曜|よう)[日|び]", "土曜日", ["どようび"],
		[
			["土", "ど", false],
			["曜", "よう", true],
			["日", "び", false]
		], -1
	],
	["[日|にち](曜|よう)[日|び]", "日曜日", ["にちようび"],
		[
			["日", "にち", false],
			["曜", "よう", true],
			["日", "び", false]
		], -1
	],
	["[月|げつ](曜|よう)[日|び]", "月曜日", ["げつようび"],
		[
			["月", "げつ", false],
			["曜", "よう", true],
			["日", "び", false]
		], -1
	],
	["[木|もく](曜|よう)[日|び]", "木曜日", ["もくようび"],
		[
			["木", "もく", false],
			["曜", "よう", true],
			["日", "び", false]
		], -1
	],
	["[水|すい](曜|よう)[日|び]", "水曜日", ["すいようび"],
		[
			["水", "すい", false],
			["曜", "よう", true],
			["日", "び", false]
		], -1
	],
	["[火|か](曜|よう)[日|び]", "火曜日", ["かようび"],
		[
			["火", "か", false],
			["曜", "よう", true],
			["日", "び", false]
		], -1
	],
	["[金|きん](曜|よう)[日|び]", "金曜日", ["きんようび"],
		[
			["金", "きん", false],
			["曜", "よう", true],
			["日", "び", false]
		], -1
	],
	["(夏|なつ)[休|やす]み", "夏休み", ["なつやすみ"],
		[
			["夏", "なつ", true],
			["休", "やす", false],
			["み", null, false]
		], "948"
	],
	["[言|こと](葉|ば)", "言葉", ["ことば"],
		[
			["言", "こと", false],
			["葉", "ば", true]
		], "1159"
	],
	["[上|うわ]{～}", "上～", ["うわ"],
		[
			["上", "うわ", false],
			["～", null, false]
		], -1
	],
	["[上|のぼ]り", "上り", ["のぼり"],
		[
			["上", "のぼ", false],
			["り", null, false]
		], -1
	],
	["[見|み][上|あ]げ*る", "見上げ", ["みあげ"],
		[
			["見", "み", false],
			["上", "あ", false],
			["げ", null, false]
		], -1
	],
	["(立|た)ち[上|あ]がる", "立ち上がる", ["たちあがる"],
		[
			["立", "た", true],
			["ち", null, false],
			["上", "あ", false],
			["が", null, false],
			["る", null, false]
		], "479"
	],
	["(目|め)[上|うえ]", "目上", ["めうえ"],
		[
			["目", "め", true],
			["上", "うえ", false]
		], "518"
	],
	["[上|じょう](下|げ)", "上下", ["じょうげ"],
		[
			["上", "じょう", false],
			["下", "げ", true]
		], "533"
	],
	["[用|よう]", "用", ["よう"],
		[
			["用", "よう", false]
		], -1
	],
	["[強|つよ]い", "強い", ["つよい"],
		[
			["強", "つよ", false],
			["い", null, false]
		], -1
	],
	["(夕|ゆう)[日|ひ]", "夕日", ["ゆうひ"],
		[
			["夕", "ゆう", true],
			["日", "ひ", false]
		], "751"
	],
	["[公|こう](園|えん)", "公園", ["こうえん"],
		[
			["公", "こう", false],
			["園", "えん", true]
		], "927"
	],
	["(去|きょ)[年|ねん]", "去年", ["きょねん"],
		[
			["去", "きょ", true],
			["年", "ねん", false]
		], "1191"
	],
	["[出|で][入|い]り", "出入り", ["でいり"],
		[
			["出", "で", false],
			["入", "い", false],
			["り", null, false]
		], -1
	],
	["[日|ひ]の[入|い]り", "日の入り", ["ひのいり"],
		[
			["日", "ひ", false],
			["の", null, false],
			["入", "い", false],
			["り", null, false]
		], -1
	],
	["(手|て)[入|い]れ", "手入れ", ["ていれ"],
		[
			["手", "て", true],
			["入", "い", false],
			["れ", null, false]
		], "484"
	],
	["(気|き)に[入|い]*5", "気に入", ["きにい"],
		[
			["気", "き", true],
			["に", null, false],
			["入", "い", false]
		], "550"
	],
	["[出|で][入|いり](口|ぐち)", "出入口", ["でいりぐち"],
		[
			["出", "で", false],
			["入", "いり", false],
			["口", "ぐち", true]
		], "627"
	],
	["[思|おも]い[出|だ]*す", "思い出", ["おもいだ"],
		[
			["思", "おも", false],
			["い", null, false],
			["出", "だ", false]
		], -1
	],
	["[思|おも]*う", "思", ["おも"],
		[
			["思", "おも", false]
		], -1
	],
	["[立|た]ち[上|あ]がる", "立ち上がる", ["たちあがる"],
		[
			["立", "た", false],
			["ち", null, false],
			["上", "あ", false],
			["が", null, false],
			["る", null, false]
		], -1
	],
	["(目|め)[立|だ]*つ", "目立", ["めだ"],
		[
			["目", "め", true],
			["立", "だ", false]
		], "519"
	],
	["(夕|ゆう)[立|だち]", "夕立", ["ゆうだち"],
		[
			["夕", "ゆう", true],
			["立", "だち", false]
		], "752"
	],
	["[家|か][内|ない]", "家内", ["かない"],
		[
			["家", "か", false],
			["内", "ない", false]
		], -1
	],
	["{～}[手|しゅ]", "～手", ["しゅ"],
		[
			["～", null, false],
			["手", "しゅ", false]
		], -1
	],
	["[手|て][入|い]れ", "手入れ", ["ていれ"],
		[
			["手", "て", false],
			["入", "い", false],
			["れ", null, false]
		], -1
	],
	["[会|かい][話|わ]", "会話", ["かいわ"],
		[
			["会", "かい", false],
			["話", "わ", false]
		], -1
	],
	["[昼|ひる]", "昼", ["ひる"],
		[
			["昼", "ひる", false]
		], -1
	],
	["{～}[力|りょく]", "～力", ["りょく"],
		[
			["～", null, false],
			["力", "りょく", false]
		], -1
	],
	["(学|がく)[力|りょく]", "学力", ["がくりょく"],
		[
			["学", "がく", true],
			["力", "りょく", false]
		], "504"
	],
	["[多|おお]い", "多い", ["おおい"],
		[
			["多", "おお", false],
			["い", null, false]
		], -1
	],
	["(国|こく)[立|りつ]", "国立", ["こくりつ"],
		[
			["国", "こく", true],
			["立", "りつ", false]
		], "783"
	],
	["[土|ど](曜|よう)[日|び]", "土曜日", ["どようび"],
		[
			["土", "ど", false],
			["曜", "よう", true],
			["日", "び", false]
		], "1027"
	],
	["[日|にち](曜|よう)[日|び]", "日曜日", ["にちようび"],
		[
			["日", "にち", false],
			["曜", "よう", true],
			["日", "び", false]
		], "1028"
	],
	["[月|げつ](曜|よう)[日|び]", "月曜日", ["げつようび"],
		[
			["月", "げつ", false],
			["曜", "よう", true],
			["日", "び", false]
		], "1029"
	],
	["[木|もく](曜|よう)[日|び]", "木曜日", ["もくようび"],
		[
			["木", "もく", false],
			["曜", "よう", true],
			["日", "び", false]
		], "1030"
	],
	["[水|すい](曜|よう)[日|び]", "水曜日", ["すいようび"],
		[
			["水", "すい", false],
			["曜", "よう", true],
			["日", "び", false]
		], "1031"
	],
	["[火|か](曜|よう)[日|び]", "火曜日", ["かようび"],
		[
			["火", "か", false],
			["曜", "よう", true],
			["日", "び", false]
		], "1032"
	],
	["[金|きん](曜|よう)[日|び]", "金曜日", ["きんようび"],
		[
			["金", "きん", false],
			["曜", "よう", true],
			["日", "び", false]
		], "1033"
	],
	["[大|たい](会|かい)", "大会", ["たいかい"],
		[
			["大", "たい", false],
			["会", "かい", true]
		], "790"
	],
	["[出|で](会|あ)い", "出会い", ["であい"],
		[
			["出", "で", false],
			["会", "あ", true],
			["い", null, false]
		], "791"
	],
	["[出|で](会|あ)*う", "出会", ["であ"],
		[
			["出", "で", false],
			["会", "あ", true]
		], "792"
	],
	["[中|ちゅう][学|がく]", "中学", ["ちゅうがく"],
		[
			["中", "ちゅう", false],
			["学", "がく", false]
		], -1
	],
	["[学|がく]", "学", ["がく"],
		[
			["学", "がく", false]
		], -1
	],
	["[学|まな]*ぶ", "学", ["まな"],
		[
			["学", "まな", false]
		], -1
	],
	["[学|がく][力|りょく]", "学力", ["がくりょく"],
		[
			["学", "がく", false],
			["力", "りょく", false]
		], -1
	],
	["[学|がく][年|ねん]", "学年", ["がくねん"],
		[
			["学", "がく", false],
			["年", "ねん", false]
		], -1
	],
	["[見|けん][学|がく]", "見学", ["けんがく"],
		[
			["見", "けん", false],
			["学", "がく", false]
		], -1
	],
	["(小|しょう)[学|がく][生|せい]", "小学生", ["しょうがくせい"],
		[
			["小", "しょう", true],
			["学", "がく", false],
			["生", "せい", false]
		], "557"
	],
	["[学|がっ](会|かい)", "学会", ["がっかい"],
		[
			["学", "がっ", false],
			["会", "かい", true]
		], "793"
	],
	["[生|せい](長|ちょう)", "生長", ["せいちょう"],
		[
			["生", "せい", false],
			["長", "ちょう", true]
		], "797"
	],
	["[円|まる]い", "円い", ["まるい"],
		[
			["円", "まる", false],
			["い", null, false]
		], -1
	],
	["(同|どう)[一|いつ]", "同一", ["どういつ"],
		[
			["同", "どう", true],
			["一", "いつ", false]
		], "803"
	],
	["(女|じょ)[子|し]", "女子", ["じょし"],
		[
			["女", "じょ", true],
			["子", "し", false]
		], "569"
	],
	["(男|だん)[子|し]", "男子", ["だんし"],
		[
			["男", "だん", true],
			["子", "し", false]
		], "614"
	],
	["(王|おう)[子|じ]", "王子", ["おうじ"],
		[
			["王", "おう", true],
			["子", "じ", false]
		], "743"
	],
	["[一|いち](時|じ)", "一時", ["いちじ"],
		[
			["一", "いち", false],
			["時", "じ", true]
		], "807"
	],
	["[日|にち](時|じ)", "日時", ["にちじ"],
		[
			["日", "にち", false],
			["時", "じ", true]
		], "809"
	],
	["[小|こ](鳥|とり)", "小鳥", ["ことり"],
		[
			["小", "こ", false],
			["鳥", "とり", true]
		], "1054"
	],
	["[目|め][上|うえ]", "目上", ["めうえ"],
		[
			["目", "め", false],
			["上", "うえ", false]
		], -1
	],
	["[目|め][立|だ]*つ", "目立", ["めだ"],
		[
			["目", "め", false],
			["立", "だ", false]
		], -1
	],
	["[目|め](下|した)", "目下", ["めした"],
		[
			["目", "め", false],
			["下", "した", true]
		], "538"
	],
	["魚", "魚", ["さかな", "うお"],
		[], null
	],
	["[田|た]", "田", ["た"],
		[
			["田", "た", false]
		], -1
	],
	["[田|たん]ぼ", "田ぼ", ["たんぼ"],
		[
			["田", "たん", false],
			["ぼ", null, false]
		], -1
	],
	["[心|こころ]", "心", ["こころ"],
		[
			["心", "こころ", false]
		], -1
	],
	["[入|にゅう](社|しゃ)", "入社", ["にゅうしゃ"],
		[
			["入", "にゅう", false],
			["社", "しゃ", true]
		], "821"
	],
	["(昼|ひる)[休|やす]み", "昼休み", ["ひるやすみ"],
		[
			["昼", "ひる", true],
			["休", "やす", false],
			["み", null, false]
		], "1074"
	],
	["(昼|ひる)[間|ま]", "昼間", ["ひるま"],
		[
			["昼", "ひる", true],
			["間", "ま", false]
		], "1075"
	],
	["[教|おし]え*る", "教え", ["おしえ"],
		[
			["教", "おし", false],
			["え", null, false]
		], -1
	],
	["[教|きょう][会|かい]", "教会", ["きょうかい"],
		[
			["教", "きょう", false],
			["会", "かい", false]
		], -1
	],
	["[教|きょう](室|しつ)", "教室", ["きょうしつ"],
		[
			["教", "きょう", false],
			["室", "しつ", true]
		], "818"
	],
	["[手|て](前|まえ)", "手前", ["てまえ"],
		[
			["手", "て", false],
			["前", "まえ", true]
		], "850"
	],
	["{～}[下|か]", "～下", ["か"],
		[
			["～", null, false],
			["下", "か", false]
		], -1
	],
	["[上|じょう][下|げ]", "上下", ["じょうげ"],
		[
			["上", "じょう", false],
			["下", "げ", false]
		], -1
	],
	["[下|くだ]さる", "下さる", ["くださる"],
		[
			["下", "くだ", false],
			["さ", null, false],
			["る", null, false]
		], -1
	],
	["[下|おろ]*す", "下", ["おろ"],
		[
			["下", "おろ", false]
		], -1
	],
	["[下|くだ]り", "下り", ["くだり"],
		[
			["下", "くだ", false],
			["り", null, false]
		], -1
	],
	["[下|お]り*る", "下り", ["おり"],
		[
			["下", "お", false],
			["り", null, false]
		], -1
	],
	["[目|め][下|した]", "目下", ["めした"],
		[
			["目", "め", false],
			["下", "した", false]
		], -1
	],
	["[見|み][下|お]ろ*す", "見下ろ", ["みおろ"],
		[
			["見", "み", false],
			["下", "お", false],
			["ろ", null, false]
		], -1
	],
	["[下|げ](水|すい)", "下水", ["げすい"],
		[
			["下", "げ", false],
			["水", "すい", true]
		], "606"
	],
	["[下|した](町|まち)", "下町", ["したまち"],
		[
			["下", "した", false],
			["町", "まち", true]
		], "637"
	],
	["[下|げ](車|しゃ)", "下車", ["げしゃ"],
		[
			["下", "げ", false],
			["車", "しゃ", true]
		], "657"
	],
	["[中|ちゅう](間|かん)", "中間", ["ちゅうかん"],
		[
			["中", "ちゅう", false],
			["間", "かん", true]
		], "855"
	],
	["[人|にん](間|げん)", "人間", ["にんげん"],
		[
			["人", "にん", false],
			["間", "げん", true]
		], "856"
	],
	["[年|ねん](間|かん)", "年間", ["ねんかん"],
		[
			["年", "ねん", false],
			["間", "かん", true]
		], "857"
	],
	["[手|て](間|ま)", "手間", ["てま"],
		[
			["手", "て", false],
			["間", "ま", true]
		], "858"
	],
	["{～}(時|じ)(間|かん)[目|め]", "～時間目", ["じかんめ"],
		[
			["～", null, false],
			["時", "じ", true],
			["間", "かん", true],
			["目", "め", false]
		], "811"
	],
	["[人|にん][気|き]", "人気", ["にんき"],
		[
			["人", "にん", false],
			["気", "き", false]
		], -1
	],
	["[大|たい][気|き]", "大気", ["たいき"],
		[
			["大", "たい", false],
			["気", "き", false]
		], -1
	],
	["[気|き]に[入|い]*5", "気に入", ["きにい"],
		[
			["気", "き", false],
			["に", null, false],
			["入", "い", false]
		], -1
	],
	["[生|き](地|じ)", "生地", ["きじ"],
		[
			["生", "き", false],
			["地", "じ", true]
		], "867"
	],
	["(地|ち)[下|か]", "地下", ["ちか"],
		[
			["地", "ち", true],
			["下", "か", false]
		], "868"
	],
	["(地|ち)[下|か](水|すい)", "地下水", ["ちかすい"],
		[
			["地", "ち", true],
			["下", "か", false],
			["水", "すい", true]
		], "608"
	],
	["[大|だい][小|しょう]", "大小", ["だいしょう"],
		[
			["大", "だい", false],
			["小", "しょう", false]
		], -1
	],
	["[小|しょう]", "小", ["しょう"],
		[
			["小", "しょう", false]
		], -1
	],
	["[小|こ]{～}", "小～", ["こ"],
		[
			["小", "こ", false],
			["～", null, false]
		], -1
	],
	["[小|しょう][学|がく][生|せい]", "小学生", ["しょうがくせい"],
		[
			["小", "しょう", false],
			["学", "がく", false],
			["生", "せい", false]
		], -1
	],
	["[出|で](合|あ)い", "出合い", ["であい"],
		[
			["出", "で", false],
			["合", "あ", true],
			["い", null, false]
		], "877"
	],
	["[出|で](合|あ)*う", "出合", ["であ"],
		[
			["出", "で", false],
			["合", "あ", true]
		], "878"
	],
	["{～}[山|さん]", "～山", ["さん"],
		[
			["～", null, false],
			["山", "さん", false]
		], -1
	],
	["(火|か)[山|ざん]", "火山", ["かざん"],
		[
			["火", "か", true],
			["山", "ざん", false]
		], "697"
	],
	["[山|さん](林|りん)", "山林", ["さんりん"],
		[
			["山", "さん", false],
			["林", "りん", true]
		], "734"
	],
	["[元|げん][気|き]", "元気", ["げんき"],
		[
			["元", "げん", false],
			["気", "き", false]
		], -1
	],
	["[一|いっ](方|ぽう)", "一方", ["いっぽう"],
		[
			["一", "いっ", false],
			["方", "ぽう", true]
		], "901"
	],
	["[正|せい]", "正", ["せい"],
		[
			["正", "せい", false]
		], -1
	],
	["{～}[女|じょ]", "～女", ["じょ"],
		[
			["～", null, false],
			["女", "じょ", false]
		], -1
	],
	["[女|じょ]{～}", "女～", ["じょ"],
		[
			["女", "じょ", false],
			["～", null, false]
		], -1
	],
	["[女|おんな]の[人|ひと]", "女の人", ["おんなのひと"],
		[
			["女", "おんな", false],
			["の", null, false],
			["人", "ひと", false]
		], -1
	],
	["[女|じょ][子|し]", "女子", ["じょし"],
		[
			["女", "じょ", false],
			["子", "し", false]
		], -1
	],
	["[女|じょ](王|おう)", "女王", ["じょおう"],
		[
			["女", "じょ", false],
			["王", "おう", true]
		], "740"
	],
	["(王|おう)[女|じょ]", "王女", ["おうじょ"],
		[
			["王", "おう", true],
			["女", "じょ", false]
		], "742"
	],
	["(長|ちょう)[女|じょ]", "長女", ["ちょうじょ"],
		[
			["長", "ちょう", true],
			["女", "じょ", false]
		], "798"
	],
	["[考|かんが]え*る", "考え", ["かんがえ"],
		[
			["考", "かんが", false],
			["え", null, false]
		], -1
	],
	["(計|けい)[画|かく]", "計画", ["けいかく"],
		[
			["計", "けい", true],
			["画", "かく", false]
		], "622"
	],
	["[出|しゅつ](場|じょう)", "出場", ["しゅつじょう"],
		[
			["出", "しゅつ", false],
			["場", "じょう", true]
		], "937"
	],
	["[入|にゅう](場|じょう)", "入場", ["にゅうじょう"],
		[
			["入", "にゅう", false],
			["場", "じょう", true]
		], "940"
	],
	["[立|たち](場|ば)", "立場", ["たちば"],
		[
			["立", "たち", false],
			["場", "ば", true]
		], "941"
	],
	["[先|せん][々|せん][月|げつ]", "先々月", ["せんせんげつ"],
		[
			["先", "せん", false],
			["々", "せん", false],
			["月", "げつ", false]
		], -1
	],
	["[先|ま]ず", "先ず", ["まず"],
		[
			["先", "ま", false],
			["ず", null, false]
		], -1
	],
	["[先|せん][日|じつ]", "先日", ["せんじつ"],
		[
			["先", "せん", false],
			["日", "じつ", false]
		], -1
	],
	["[海|うみ]", "海", ["うみ"],
		[
			["海", "うみ", false]
		], -1
	],
	["{～}[名|めい]", "～名", ["めい"],
		[
			["～", null, false],
			["名", "めい", false]
		], -1
	],
	["[名|な]", "名", ["な"],
		[
			["名", "な", false]
		], -1
	],
	["[名|めい]{～}", "名～", ["めい"],
		[
			["名", "めい", false],
			["～", null, false]
		], -1
	],
	["[名|めい][人|じん]", "名人", ["めいじん"],
		[
			["名", "めい", false],
			["人", "じん", false]
		], -1
	],
	["[名|みょう](字|じ)", "名字", ["みょうじ"],
		[
			["名", "みょう", false],
			["字", "じ", true]
		], "682"
	],
	["(地|ち)[名|めい]", "地名", ["ちめい"],
		[
			["地", "ち", true],
			["名", "めい", false]
		], "869"
	],
	["[売|う]り[場|ば]", "売り場", ["うりば"],
		[
			["売", "う", false],
			["り", null, false],
			["場", "ば", false]
		], -1
	],
	["[売|う]*5", "売", ["う"],
		[
			["売", "う", false]
		], -1
	],
	["(明|みょう)(後|ご)[日|にち]", "明後日", ["みょうごにち"],
		[
			["明", "みょう", true],
			["後", "ご", true],
			["日", "にち", false]
		], "843"
	],
	["[上|じょう](京|きょう)", "上京", ["じょうきょう"],
		[
			["上", "じょう", false],
			["京", "きょう", true]
		], "962"
	],
	["[文|ぶん]", "文", ["ぶん"],
		[
			["文", "ぶん", false]
		], -1
	],
	["[文|ぶん](明|めい)", "文明", ["ぶんめい"],
		[
			["文", "ぶん", false],
			["明", "めい", true]
		], "960"
	],
	["[知|し]らせる", "知らせる", ["しらせる"],
		[
			["知", "し", false],
			["ら", null, false],
			["せ", null, false],
			["る", null, false]
		], -1
	],
	["[一|ひと](通|とお)り", "一通り", ["ひととおり"],
		[
			["一", "ひと", false],
			["通", "とお", true],
			["り", null, false]
		], "968"
	],
	["[人|ひと](通|どお)り", "人通り", ["ひとどおり"],
		[
			["人", "ひと", false],
			["通", "どお", true],
			["り", null, false]
		], "969"
	],
	["[大|おお](通|どお)り", "大通り", ["おおどおり"],
		[
			["大", "おお", false],
			["通", "どお", true],
			["り", null, false]
		], "970"
	],
	["(通|つう)[学|がく]", "通学", ["つうがく"],
		[
			["通", "つう", true],
			["学", "がく", false]
		], "974"
	],
	["[水|すい][道|どう]", "水道", ["すいどう"],
		[
			["水", "すい", false],
			["道", "どう", false]
		], -1
	],
	["[大|だい](事|じ)", "大事", ["だいじ"],
		[
			["大", "だい", false],
			["事", "じ", true]
		], "1180"
	],
	["[火|か](事|じ)", "火事", ["かじ"],
		[
			["火", "か", false],
			["事", "じ", true]
		], "1181"
	],
	["[用|よう](事|じ)", "用事", ["ようじ"],
		[
			["用", "よう", false],
			["事", "じ", true]
		], "1182"
	],
	["(外|がい)[出|しゅつ]", "外出", ["がいしゅつ"],
		[
			["外", "がい", true],
			["出", "しゅつ", false]
		], "985"
	],
	["[出|しゅっ](発|ぱつ)", "出発", ["しゅっぱつ"],
		[
			["出", "しゅっ", false],
			["発", "ぱつ", true]
		], "1189"
	],
	["(発|はつ)[音|おん]", "発音", ["はつおん"],
		[
			["発", "はつ", true],
			["音", "おん", false]
		], "1190"
	],
	["[下|げ][水|すい]", "下水", ["げすい"],
		[
			["下", "げ", false],
			["水", "すい", false]
		], -1
	],
	["[水|すい](分|ぶん)", "水分", ["すいぶん"],
		[
			["水", "すい", false],
			["分", "ぶん", true]
		], "830"
	],
	["(地|ち)[下|か][水|すい]", "地下水", ["ちかすい"],
		[
			["地", "ち", true],
			["下", "か", false],
			["水", "すい", false]
		], "870"
	],
	["[字|じ][引|びき]", "字引", ["じびき"],
		[
			["字", "じ", false],
			["引", "びき", false]
		], -1
	],
	["[引|ひ]*く", "引", ["ひ"],
		[
			["引", "ひ", false]
		], -1
	],
	["[一|ひと](言|こと)", "一言", ["ひとこと"],
		[
			["一", "ひと", false],
			["言", "こと", true]
		], "990"
	],
	["(言|い)い[出|だ]す", "言い出す", ["いいだす"],
		[
			["言", "い", true],
			["い", null, false],
			["出", "だ", false],
			["す", null, false]
		], "992"
	],
	["[男|おとこ]の[人|ひと]", "男の人", ["おとこのひと"],
		[
			["男", "おとこ", false],
			["の", null, false],
			["人", "ひと", false]
		], -1
	],
	["[男|だん][子|し]", "男子", ["だんし"],
		[
			["男", "だん", false],
			["子", "し", false]
		], -1
	],
	["(長|ちょう)[男|なん]", "長男", ["ちょうなん"],
		[
			["長", "ちょう", true],
			["男", "なん", false]
		], "799"
	],
	["[学|がく](部|ぶ)", "学部", ["がくぶ"],
		[
			["学", "がく", false],
			["部", "ぶ", true]
		], "1221"
	],
	["[一|いっ](体|たい)", "一体", ["いったい"],
		[
			["一", "いっ", false],
			["体", "たい", true]
		], "1002"
	],
	["[大|だい](体|たい)", "大体", ["だいたい"],
		[
			["大", "だい", false],
			["体", "たい", true]
		], "1003"
	],
	["[気|き](体|たい)", "気体", ["きたい"],
		[
			["気", "き", false],
			["体", "たい", true]
		], "1004"
	],
	["[文|ぶん](体|たい)", "文体", ["ぶんたい"],
		[
			["文", "ぶん", false],
			["体", "たい", true]
		], "1005"
	],
	["[村|むら]", "村", ["むら"],
		[
			["村", "むら", false]
		], -1
	],
	["[計|けい][画|かく]", "計画", ["けいかく"],
		[
			["計", "けい", false],
			["画", "かく", false]
		], -1
	],
	["(当|とう)[日|じつ]", "当日", ["とうじつ"],
		[
			["当", "とう", true],
			["日", "じつ", false]
		], "1008"
	],
	["[日|ひ](当|あ)たり", "日当たり", ["ひあたり"],
		[
			["日", "ひ", false],
			["当", "あ", true],
			["た", null, false],
			["り", null, false]
		], "1010"
	],
	["[見|けん](当|とう)", "見当", ["けんとう"],
		[
			["見", "けん", false],
			["当", "とう", true]
		], "1011"
	],
	["{～}[口|くち]", "～口", ["くち"],
		[
			["～", null, false],
			["口", "くち", false]
		], -1
	],
	["[出|で][入|いり][口|ぐち]", "出入口", ["でいりぐち"],
		[
			["出", "で", false],
			["入", "いり", false],
			["口", "ぐち", false]
		], -1
	],
	["(早|はや)[口|くち]", "早口", ["はやくち"],
		[
			["早", "はや", true],
			["口", "くち", false]
		], "671"
	],
	["(火|か)[口|こう]", "火口", ["かこう"],
		[
			["火", "か", true],
			["口", "こう", false]
		], "696"
	],
	["[手|て](首|くび)", "手首", ["てくび"],
		[
			["手", "て", false],
			["首", "くび", true]
		], "1015"
	],
	["[出|で](来|き)るだけ", "出来るだけ", ["できるだけ"],
		[
			["出", "で", false],
			["来", "き", true],
			["る", null, false],
			["だ", null, false],
			["け", null, false]
		], "1019"
	],
	["[出|で](来|き)[上|あ]がり", "出来上がり", ["できあがり"],
		[
			["出", "で", false],
			["来", "き", true],
			["上", "あ", false],
			["が", null, false],
			["り", null, false]
		], "1020"
	],
	["[出|で](来|き)[上|あ]が*5", "出来上が", ["できあが"],
		[
			["出", "で", false],
			["来", "き", true],
			["上", "あ", false],
			["が", null, false]
		], "1021"
	],
	["[本|ほん](来|らい)", "本来", ["ほんらい"],
		[
			["本", "ほん", false],
			["来", "らい", true]
		], "1022"
	],
	["(来|らい)[日|にち]", "来日", ["らいにち"],
		[
			["来", "らい", true],
			["日", "にち", false]
		], "1024"
	],
	["{～}[町|ちょう]", "～町", ["ちょう"],
		[
			["～", null, false],
			["町", "ちょう", false]
		], -1
	],
	["[下|した][町|まち]", "下町", ["したまち"],
		[
			["下", "した", false],
			["町", "まち", false]
		], -1
	],
	["[名|めい](作|さく)", "名作", ["めいさく"],
		[
			["名", "めい", false],
			["作", "さく", true]
		], "1025"
	],
	["{～}[校|こう]", "～校", ["こう"],
		[
			["～", null, false],
			["校", "こう", false]
		], -1
	],
	["開く", "開く", ["あく", "ひらく"],
		[], null
	],
	["[空|くう]{～}", "空～", ["くう"],
		[
			["空", "くう", false],
			["～", null, false]
		], -1
	],
	["[空|あ]き", "空き", ["あき"],
		[
			["空", "あ", false],
			["き", null, false]
		], -1
	],
	["[空|から]っぽ", "空っぽ", ["からっぽ"],
		[
			["空", "から", false],
			["っ", null, false],
			["ぽ", null, false]
		], -1
	],
	["[空|くう][中|ちゅう]", "空中", ["くうちゅう"],
		[
			["空", "くう", false],
			["中", "ちゅう", false]
		], -1
	],
	["{～}[台|だい]", "～台", ["だい"],
		[
			["～", null, false],
			["台", "だい", false]
		], -1
	],
	["[台|たい](風|ふう)", "台風", ["たいふう"],
		[
			["台", "たい", false],
			["風", "ふう", true]
		], "845"
	],
	["[力|ちから](強|づよ)い", "力強い", ["ちからづよい"],
		[
			["力", "ちから", false],
			["強", "づよ", true],
			["い", null, false]
		], "1041"
	],
	["(強|きょう)[力|りょく]", "強力", ["きょうりょく"],
		[
			["強", "きょう", true],
			["力", "りょく", false]
		], "1042"
	],
	["(強|つよ)[気|き]", "強気", ["つよき"],
		[
			["強", "つよ", true],
			["気", "き", false]
		], "1043"
	],
	["(公|こう)[正|せい]", "公正", ["こうせい"],
		[
			["公", "こう", true],
			["正", "せい", false]
		], "1049"
	],
	["[土|つち]", "土", ["つち"],
		[
			["土", "つち", false]
		], -1
	],
	["[土|と](地|ち)", "土地", ["とち"],
		[
			["土", "と", false],
			["地", "ち", true]
		], "871"
	],
	["[時|じ](代|だい)", "時代", ["じだい"],
		[
			["時", "じ", false],
			["代", "だい", true]
		], "1295"
	],
	["[大|たい][木|ぼく]", "大木", ["たいぼく"],
		[
			["大", "たい", false],
			["木", "ぼく", false]
		], -1
	],
	["(思|おも)い[出|で]", "思い出", ["おもいで"],
		[
			["思", "おも", true],
			["い", null, false],
			["出", "で", false]
		], "1061"
	],
	["{～}[車|しゃ]", "～車", ["しゃ"],
		[
			["～", null, false],
			["車", "しゃ", false]
		], -1
	],
	["[下|げ][車|しゃ]", "下車", ["げしゃ"],
		[
			["下", "げ", false],
			["車", "しゃ", false]
		], -1
	],
	["[少|すく]ない", "少ない", ["すくない"],
		[
			["少", "すく", false],
			["な", null, false],
			["い", null, false]
		], -1
	],
	["[一|いっ](家|か)", "一家", ["いっか"],
		[
			["一", "いっ", false],
			["家", "か", true]
		], "1066"
	],
	["[大|おお](家|や)", "大家", ["おおや"],
		[
			["大", "おお", false],
			["家", "や", true]
		], "1069"
	],
	["[自|じ](動|どう)[車|しゃ]", "自動車", ["じどうしゃ"],
		[
			["自", "じ", false],
			["動", "どう", true],
			["車", "しゃ", false]
		], "1329"
	],
	["(話|はなし)[中|ちゅう]", "話中", ["はなしちゅう"],
		[
			["話", "はなし", true],
			["中", "ちゅう", false]
		], "1072"
	],
	["[石|いし]", "石", ["いし"],
		[
			["石", "いし", false]
		], -1
	],
	["[工|こう](業|ぎょう)", "工業", ["こうぎょう"],
		[
			["工", "こう", false],
			["業", "ぎょう", true]
		], "1241"
	],
	["{～}[足|そく]", "～足", ["そく"],
		[
			["～", null, false],
			["足", "そく", false]
		], -1
	],
	["[足|た]*す", "足", ["た"],
		[
			["足", "た", false]
		], -1
	],
	["[足|た]*5", "足", ["た"],
		[
			["足", "た", false]
		], -1
	],
	["(自|じ)(動|どう)[車|しゃ]", "自動車", ["じどうしゃ"],
		[
			["自", "じ", true],
			["動", "どう", true],
			["車", "しゃ", false]
		], -1
	],
	["[小|しょう](数|すう)", "小数", ["しょうすう"],
		[
			["小", "しょう", false],
			["数", "すう", true]
		], "1091"
	],
	["(数|すう)[学|がく]", "数学", ["すうがく"],
		[
			["数", "すう", true],
			["学", "がく", false]
		], "1093"
	],
	["[早|はや][口|くち]", "早口", ["はやくち"],
		[
			["早", "はや", false],
			["口", "くち", false]
		], -1
	],
	["[止|と]ま*5", "止ま", ["とま"],
		[
			["止", "と", false],
			["ま", null, false]
		], -1
	],
	["[止|と]め*る", "止め", ["とめ"],
		[
			["止", "と", false],
			["め", null, false]
		], -1
	],
	["[日|にっ](記|き)", "日記", ["にっき"],
		[
			["日", "にっ", false],
			["記", "き", true]
		], "1097"
	],
	["(記|き)[入|にゅう]", "記入", ["きにゅう"],
		[
			["記", "き", true],
			["入", "にゅう", false]
		], "1098"
	],
	["表", "表", ["おもて", "ひょう"],
		[], null
	],
	["[白|しろ]", "白", ["しろ"],
		[
			["白", "しろ", false]
		], -1
	],
	["(青|あお)[白|じろ]い", "青白い", ["あおじろい"],
		[
			["青", "あお", true],
			["白", "じろ", false],
			["い", null, false]
		], "713"
	],
	["[新|しん][聞|ぶん][社|しゃ]", "新聞社", ["しんぶんしゃ"],
		[
			["新", "しん", false],
			["聞", "ぶん", false],
			["社", "しゃ", false]
		], -1
	],
	["[聞|き]こえ*る", "聞こえ", ["きこえ"],
		[
			["聞", "き", false],
			["こ", null, false],
			["え", null, false]
		], -1
	],
	["[正|しょう](午|ご)", "正午", ["しょうご"],
		[
			["正", "しょう", false],
			["午", "ご", true]
		], "1102"
	],
	["[名|みょう][字|じ]", "名字", ["みょうじ"],
		[
			["名", "みょう", false],
			["字", "じ", false]
		], -1
	],
	["(数|すう)[字|じ]", "数字", ["すうじ"],
		[
			["数", "すう", true],
			["字", "じ", false]
		], "1094"
	],
	["[切|き]*5", "切", ["き"],
		[
			["切", "き", false]
		], -1
	],
	["[切|きっ][手|て]", "切手", ["きって"],
		[
			["切", "きっ", false],
			["手", "て", false]
		], -1
	],
	["[大|たい][切|せつ]", "大切", ["たいせつ"],
		[
			["大", "たい", false],
			["切", "せつ", false]
		], -1
	],
	["(親|しん)[切|せつ]", "親切", ["しんせつ"],
		[
			["親", "しん", true],
			["切", "せつ", false]
		], "731"
	],
	["[中|ちゅう](心|しん)", "中心", ["ちゅうしん"],
		[
			["中", "ちゅう", false],
			["心", "しん", true]
		], "1104"
	],
	["(意|い)[見|けん]", "意見", ["いけん"],
		[
			["意", "い", true],
			["見", "けん", false]
		], "1396"
	],
	["[用|よう](意|い)", "用意", ["ようい"],
		[
			["用", "よう", false],
			["意", "い", true]
		], "1397"
	],
	["[五|ご][十|じゅう][音|おん]", "五十音", ["ごじゅうおん"],
		[
			["五", "ご", false],
			["十", "じゅう", false],
			["音", "おん", false]
		], -1
	],
	["[食|しょく](事|じ)する", "食事する", ["しょくじする"],
		[
			["食", "しょく", false],
			["事", "じ", true],
			["す", null, false],
			["る", null, false]
		], "1183"
	],
	["[一|いち](度|ど)", "一度", ["いちど"],
		[
			["一", "いち", false],
			["度", "ど", true]
		], "1408"
	],
	["[今|こん](度|ど)", "今度", ["こんど"],
		[
			["今", "こん", false],
			["度", "ど", true]
		], "1409"
	],
	["[下|した](書|が)き", "下書き", ["したがき"],
		[
			["下", "した", false],
			["書", "が", true],
			["き", null, false]
		], "1122"
	],
	["[火|か][口|こう]", "火口", ["かこう"],
		[
			["火", "か", false],
			["口", "こう", false]
		], -1
	],
	["[火|か][山|ざん]", "火山", ["かざん"],
		[
			["火", "か", false],
			["山", "ざん", false]
		], -1
	],
	["(花|はな)[火|び]", "花火", ["はなび"],
		[
			["花", "はな", true],
			["火", "び", false]
		], "706"
	],
	["[気|き](持|も)ち", "気持ち", ["きもち"],
		[
			["気", "き", false],
			["持", "も", true],
			["ち", null, false]
		], "1425"
	],
	["[金|かね](持|も)ち", "金持ち", ["かねもち"],
		[
			["金", "かね", false],
			["持", "も", true],
			["ち", null, false]
		], "1426"
	],
	["(活|かつ)[力|りょく]", "活力", ["かつりょく"],
		[
			["活", "かつ", true],
			["力", "りょく", false]
		], "1130"
	],
	["(活|かっ)[気|き]", "活気", ["かっき"],
		[
			["活", "かっ", true],
			["気", "き", false]
		], "1131"
	],
	["[生|せい](活|かつ)", "生活", ["せいかつ"],
		[
			["生", "せい", false],
			["活", "かつ", true]
		], "1133"
	],
	["(活|かつ)[字|じ]", "活字", ["かつじ"],
		[
			["活", "かつ", true],
			["字", "じ", false]
		], "1134"
	],
	["[生|い]け[花|ばな]", "生け花", ["いけばな"],
		[
			["生", "い", false],
			["け", null, false],
			["花", "ばな", false]
		], -1
	],
	["[花|はな][火|び]", "花火", ["はなび"],
		[
			["花", "はな", false],
			["火", "び", false]
		], -1
	],
	["度", "度", ["たび", "ど"],
		[], null
	],
	["[赤|あか]", "赤", ["あか"],
		[
			["赤", "あか", false]
		], -1
	],
	["(元|がん)[日|じつ]", "元日", ["がんじつ"],
		[
			["元", "がん", true],
			["日", "じつ", false]
		], "1149"
	],
	["[足|あし](元|もと)", "足元", ["あしもと"],
		[
			["足", "あし", false],
			["元", "もと", true]
		], "1150"
	],
	["[青|あお]", "青", ["あお"],
		[
			["青", "あお", false]
		], -1
	],
	["[青|せい][年|ねん]", "青年", ["せいねん"],
		[
			["青", "せい", false],
			["年", "ねん", false]
		], -1
	],
	["[青|あお][白|じろ]い", "青白い", ["あおじろい"],
		[
			["青", "あお", false],
			["白", "じろ", false],
			["い", null, false]
		], -1
	],
	["[楽|たの]しい", "楽しい", ["たのしい"],
		[
			["楽", "たの", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[楽|たの]しみ", "楽しみ", ["たのしみ"],
		[
			["楽", "たの", false],
			["し", null, false],
			["み", null, false]
		], -1
	],
	["[音|おん][楽|がく]", "音楽", ["おんがく"],
		[
			["音", "おん", false],
			["楽", "がく", false]
		], -1
	],
	["(世|せ)[話|わ]", "世話", ["せわ"],
		[
			["世", "せ", true],
			["話", "わ", false]
		], "1459"
	],
	["[竹|たけ]", "竹", ["たけ"],
		[
			["竹", "たけ", false]
		], -1
	],
	["[万|まん]", "万", ["まん"],
		[
			["万", "まん", false]
		], -1
	],
	["(左|さ)[右|ゆう]", "左右", ["さゆう"],
		[
			["左", "さ", true],
			["右", "ゆう", false]
		], "726"
	],
	["[店|てん](員|いん)", "店員", ["てんいん"],
		[
			["店", "てん", false],
			["員", "いん", true]
		], "1268"
	],
	["都", "都", ["と", "みやこ"],
		[], null
	],
	["[森|もり]", "森", ["もり"],
		[
			["森", "もり", false]
		], -1
	],
	["[森|しん](林|りん)", "森林", ["しんりん"],
		[
			["森", "しん", false],
			["林", "りん", true]
		], "736"
	],
	["(売|うり)[上|あげ]", "売上", ["うりあげ"],
		[
			["売", "うり", true],
			["上", "あげ", false]
		], "1166"
	],
	["[左|さ][右|ゆう]", "左右", ["さゆう"],
		[
			["左", "さ", false],
			["右", "ゆう", false]
		], -1
	],
	["(組|く)み[立|た]てる", "組み立てる", ["くみたてる"],
		[
			["組", "く", true],
			["み", null, false],
			["立", "た", false],
			["て", null, false],
			["る", null, false]
		], "1174"
	],
	["(安|あん)[心|しん]する", "安心する", ["あんしんする"],
		[
			["安", "あん", true],
			["心", "しん", false],
			["す", null, false],
			["る", null, false]
		], "1489"
	],
	["(知|ち)[人|じん]", "知人", ["ちじん"],
		[
			["知", "ち", true],
			["人", "じん", false]
		], "1186"
	],
	["[一|ひと][休|やす]み", "一休み", ["ひとやすみ"],
		[
			["一", "ひと", false],
			["休", "やす", false],
			["み", null, false]
		], -1
	],
	["[親|しん][切|せつ]", "親切", ["しんせつ"],
		[
			["親", "しん", false],
			["切", "せつ", false]
		], -1
	],
	["[入|にゅう](院|いん)", "入院", ["にゅういん"],
		[
			["入", "にゅう", false],
			["院", "いん", true]
		], "1492"
	],
	["[赤|せき](道|どう)", "赤道", ["せきどう"],
		[
			["赤", "せき", false],
			["道", "どう", true]
		], "1198"
	],
	["[山|さん][林|りん]", "山林", ["さんりん"],
		[
			["山", "さん", false],
			["林", "りん", false]
		], -1
	],
	["[林|はやし]", "林", ["はやし"],
		[
			["林", "はやし", false]
		], -1
	],
	["[森|しん][林|りん]", "森林", ["しんりん"],
		[
			["森", "しん", false],
			["林", "りん", false]
		], -1
	],
	["(引|ひ)き[出|だ]し", "引き出し", ["ひきだし"],
		[
			["引", "ひ", true],
			["き", null, false],
			["出", "だ", false],
			["し", null, false]
		], "1212"
	],
	["(引|ひき)[出|だ]*す", "引出", ["ひきだ"],
		[
			["引", "ひき", true],
			["出", "だ", false]
		], "1213"
	],
	["(引|いん)[力|りょく]", "引力", ["いんりょく"],
		[
			["引", "いん", true],
			["力", "りょく", false]
		], "1215"
	],
	["[女|じょ][王|おう]", "女王", ["じょおう"],
		[
			["女", "じょ", false],
			["王", "おう", false]
		], -1
	],
	["[王|おう]", "王", ["おう"],
		[
			["王", "おう", false]
		], -1
	],
	["[王|おう][女|じょ]", "王女", ["おうじょ"],
		[
			["王", "おう", false],
			["女", "じょ", false]
		], -1
	],
	["[王|おう][子|じ]", "王子", ["おうじ"],
		[
			["王", "おう", false],
			["子", "じ", false]
		], -1
	],
	["(国|こく)[王|おう]", "国王", ["こくおう"],
		[
			["国", "こく", true],
			["王", "おう", false]
		], "784"
	],
	["[頭|あたま]", "頭", ["あたま"],
		[
			["頭", "あたま", false]
		], -1
	],
	["[大|たい](半|はん)", "大半", ["たいはん"],
		[
			["大", "たい", false],
			["半", "はん", true]
		], "1228"
	],
	["[玉|たま]", "玉", ["たま"],
		[
			["玉", "たま", false]
		], -1
	],
	["[正|しょう](直|じき)", "正直", ["しょうじき"],
		[
			["正", "しょう", false],
			["直", "じき", true]
		], "1251"
	],
	["[見|み](直|なお)*す", "見直", ["みなお"],
		[
			["見", "み", false],
			["直", "なお", true]
		], "1259"
	],
	["[夕|ゆう]べ", "夕べ", ["ゆうべ"],
		[
			["夕", "ゆう", false],
			["べ", null, false]
		], -1
	],
	["[夕|ゆう][日|ひ]", "夕日", ["ゆうひ"],
		[
			["夕", "ゆう", false],
			["日", "ひ", false]
		], -1
	],
	["[夕|ゆう][立|だち]", "夕立", ["ゆうだち"],
		[
			["夕", "ゆう", false],
			["立", "だち", false]
		], -1
	],
	["[答|こた]え", "答え", ["こたえ"],
		[
			["答", "こた", false],
			["え", null, false]
		], -1
	],
	["[答|こた]え*る", "答え", ["こたえ"],
		[
			["答", "こた", false],
			["え", null, false]
		], -1
	],
	["[万|まん][年|ねん](筆|ひつ)", "万年筆", ["まんねんひつ"],
		[
			["万", "まん", false],
			["年", "ねん", false],
			["筆", "ひつ", true]
		], "1731"
	],
	["[草|くさ]", "草", ["くさ"],
		[
			["草", "くさ", false]
		], -1
	],
	["[今|こん][夜|や]", "今夜", ["こんや"],
		[
			["今", "こん", false],
			["夜", "や", false]
		], -1
	],
	["[安|やす]い", "安い", ["やすい"],
		[
			["安", "やす", false],
			["い", null, false]
		], -1
	],
	["[犬|いぬ]", "犬", ["いぬ"],
		[
			["犬", "いぬ", false]
		], -1
	],
	["[帰|かえ]り", "帰り", ["かえり"],
		[
			["帰", "かえ", false],
			["り", null, false]
		], -1
	],
	["[帰|かえ]*5", "帰", ["かえ"],
		[
			["帰", "かえ", false]
		], -1
	],
	["(電|でん)[力|りょく]", "電力", ["でんりょく"],
		[
			["電", "でん", true],
			["力", "りょく", false]
		], "1290"
	],
	["(電|でん)[子|し]", "電子", ["でんし"],
		[
			["電", "でん", true],
			["子", "し", false]
		], "1291"
	],
	["(少|しょう)[女|じょ]", "少女", ["しょうじょ"],
		[
			["少", "しょう", true],
			["女", "じょ", false]
		], "1305"
	],
	["(少|しょう)[年|ねん]", "少年", ["しょうねん"],
		[
			["少", "しょう", true],
			["年", "ねん", false]
		], "1306"
	],
	["[青|せい](少|しょう)[年|ねん]", "青少年", ["せいしょうねん"],
		[
			["青", "せい", false],
			["少", "しょう", true],
			["年", "ねん", false]
		], "1307"
	],
	["[人|じん](工|こう)", "人工", ["じんこう"],
		[
			["人", "じん", false],
			["工", "こう", true]
		], "1313"
	],
	["[大|だい](工|く)", "大工", ["だいく"],
		[
			["大", "だい", false],
			["工", "く", true]
		], "1314"
	],
	["[虫|むし]", "虫", ["むし"],
		[
			["虫", "むし", false]
		], -1
	],
	["[見|けん](物|ぶつ)", "見物", ["けんぶつ"],
		[
			["見", "けん", false],
			["物", "ぶつ", true]
		], "1578"
	],
	["[食|た]べ(物|もの)", "食べ物", ["たべもの"],
		[
			["食", "た", false],
			["べ", null, false],
			["物", "もの", true]
		], "1580"
	],
	["(語|ご)[学|がく]", "語学", ["ごがく"],
		[
			["語", "ご", true],
			["学", "がく", false]
		], "1327"
	],
	["[糸|いと]", "糸", ["いと"],
		[
			["糸", "いと", false]
		], -1
	],
	["[歌|うた]", "歌", ["うた"],
		[
			["歌", "うた", false]
		], -1
	],
	["[歌|うた]*う", "歌", ["うた"],
		[
			["歌", "うた", false]
		], -1
	],
	["[中|ちゅう](止|し)", "中止", ["ちゅうし"],
		[
			["中", "ちゅう", false],
			["止", "し", true]
		], "1337"
	],
	["[立|た]ち(止|ど)まる", "立ち止まる", ["たちどまる"],
		[
			["立", "た", false],
			["ち", null, false],
			["止", "ど", true],
			["ま", null, false],
			["る", null, false]
		], "1341"
	],
	["[台|だい](所|どころ)", "台所", ["だいどころ"],
		[
			["台", "だい", false],
			["所", "どころ", true]
		], "1597"
	],
	["[近|きん](所|じょ)", "近所", ["きんじょ"],
		[
			["近", "きん", false],
			["所", "じょ", true]
		], "1599"
	],
	["[貝|かい]", "貝", ["かい"],
		[
			["貝", "かい", false]
		], -1
	],
	["[買|か]い(物|もの)", "買い物", ["かいもの"],
		[
			["買", "か", false],
			["い", null, false],
			["物", "もの", true]
		], "1579"
	],
	["{～}[国|こく]", "～国", ["こく"],
		[
			["～", null, false],
			["国", "こく", false]
		], -1
	],
	["[国|こく][立|りつ]", "国立", ["こくりつ"],
		[
			["国", "こく", false],
			["立", "りつ", false]
		], -1
	],
	["[国|こく][王|おう]", "国王", ["こくおう"],
		[
			["国", "こく", false],
			["王", "おう", false]
		], -1
	],
	["[国|こっ](会|かい)", "国会", ["こっかい"],
		[
			["国", "こっ", false],
			["会", "かい", true]
		], "789"
	],
	["[国|こっ](家|か)", "国家", ["こっか"],
		[
			["国", "こっ", false],
			["家", "か", true]
		], "1068"
	],
	["[国|こく](語|ご)", "国語", ["こくご"],
		[
			["国", "こく", false],
			["語", "ご", true]
		], "1322"
	],
	["[会|かい]", "会", ["かい"],
		[
			["会", "かい", false]
		], -1
	],
	["[国|こっ][会|かい]", "国会", ["こっかい"],
		[
			["国", "こっ", false],
			["会", "かい", false]
		], -1
	],
	["[大|たい][会|かい]", "大会", ["たいかい"],
		[
			["大", "たい", false],
			["会", "かい", false]
		], -1
	],
	["[出|で][会|あ]い", "出会い", ["であい"],
		[
			["出", "で", false],
			["会", "あ", false],
			["い", null, false]
		], -1
	],
	["[出|で][会|あ]*う", "出会", ["であ"],
		[
			["出", "で", false],
			["会", "あ", false]
		], -1
	],
	["[学|がっ][会|かい]", "学会", ["がっかい"],
		[
			["学", "がっ", false],
			["会", "かい", false]
		], -1
	],
	["[会|かい](合|ごう)", "会合", ["かいごう"],
		[
			["会", "かい", false],
			["合", "ごう", true]
		], "876"
	],
	["[会|かい](計|けい)", "会計", ["かいけい"],
		[
			["会", "かい", false],
			["計", "けい", true]
		], "1236"
	],
	["{～}[長|ちょう]", "～長", ["ちょう"],
		[
			["～", null, false],
			["長", "ちょう", false]
		], -1
	],
	["[生|せい][長|ちょう]", "生長", ["せいちょう"],
		[
			["生", "せい", false],
			["長", "ちょう", false]
		], -1
	],
	["[長|ちょう][女|じょ]", "長女", ["ちょうじょ"],
		[
			["長", "ちょう", false],
			["女", "じょ", false]
		], -1
	],
	["[長|ちょう][男|なん]", "長男", ["ちょうなん"],
		[
			["長", "ちょう", false],
			["男", "なん", false]
		], -1
	],
	["[長|なが](引|び)*く", "長引", ["ながび"],
		[
			["長", "なが", false],
			["引", "び", true]
		], "1218"
	],
	["{～}(番|ばん)[目|め]", "～番目", ["ばんめ"],
		[
			["～", null, false],
			["番", "ばん", true],
			["目", "め", false]
		], "1390"
	],
	["[同|どう]{～}", "同～", ["どう"],
		[
			["同", "どう", false],
			["～", null, false]
		], -1
	],
	["[同|どう][一|いつ]", "同一", ["どういつ"],
		[
			["同", "どう", false],
			["一", "いつ", false]
		], -1
	],
	["[同|どう](時|じ)", "同時", ["どうじ"],
		[
			["同", "どう", false],
			["時", "じ", true]
		], "808"
	],
	["(合|ごう)[同|どう]", "合同", ["ごうどう"],
		[
			["合", "ごう", true],
			["同", "どう", false]
		], "880"
	],
	["[地|ち][図|ず]", "地図", ["ちず"],
		[
			["地", "ち", false],
			["図", "ず", false]
		], -1
	],
	["[一|いち][時|じ]", "一時", ["いちじ"],
		[
			["一", "いち", false],
			["時", "じ", false]
		], -1
	],
	["[同|どう][時|じ]", "同時", ["どうじ"],
		[
			["同", "どう", false],
			["時", "じ", false]
		], -1
	],
	["[日|にち][時|じ]", "日時", ["にちじ"],
		[
			["日", "にち", false],
			["時", "じ", false]
		], -1
	],
	["[時|とき]", "時", ["とき"],
		[
			["時", "とき", false]
		], -1
	],
	["{～}[時|じ](間|かん)[目|め]", "～時間目", ["じかんめ"],
		[
			["～", null, false],
			["時", "じ", false],
			["間", "かん", true],
			["目", "め", false]
		], "859"
	],
	["(当|とう)[時|じ]", "当時", ["とうじ"],
		[
			["当", "とう", true],
			["時", "じ", false]
		], "1009"
	],
	["[自|みずか]ら", "自ら", ["みずから"],
		[
			["自", "みずか", false],
			["ら", null, false]
		], -1
	],
	["(万|まん)[一|いち]", "万一", ["まんいち"],
		[
			["万", "まん", true],
			["一", "いち", false]
		], "1423"
	],
	["{～}[行|ぎょう]", "～行", ["ぎょう"],
		[
			["～", null, false],
			["行", "ぎょう", false]
		], -1
	],
	["(通|つう)[行|こう]", "通行", ["つうこう"],
		[
			["通", "つう", true],
			["行", "こう", false]
		], "975"
	],
	["(売|うれ)[行|ゆ]き", "売行き", ["うれゆき"],
		[
			["売", "うれ", true],
			["行", "ゆ", false],
			["き", null, false]
		], "1167"
	],
	["[教|きょう][室|しつ]", "教室", ["きょうしつ"],
		[
			["教", "きょう", false],
			["室", "しつ", false]
		], -1
	],
	["[下|か](線|せん)", "下線", ["かせん"],
		[
			["下", "か", false],
			["線", "せん", true]
		], "1434"
	],
	["{～}[社|しゃ]", "～社", ["しゃ"],
		[
			["～", null, false],
			["社", "しゃ", false]
		], -1
	],
	["[入|にゅう][社|しゃ]", "入社", ["にゅうしゃ"],
		[
			["入", "にゅう", false],
			["社", "しゃ", false]
		], -1
	],
	["[太|ふと]い", "太い", ["ふとい"],
		[
			["太", "ふと", false],
			["い", null, false]
		], -1
	],
	["[太|ふと]*5", "太", ["ふと"],
		[
			["太", "ふと", false]
		], -1
	],
	["[買|か]い(物|もの)", "買い物", ["かいもの"],
		[
			["買", "か", false],
			["い", null, false],
			["物", "もの", true]
		], -1
	],
	["[食|た]べ(物|もの)", "食べ物", ["たべもの"],
		[
			["食", "た", false],
			["べ", null, false],
			["物", "もの", true]
		], -1
	],
	["(飲|の)み(物|もの)", "飲み物", ["のみもの"],
		[
			["飲", "の", true],
			["み", null, false],
			["物", "もの", true]
		], "1672"
	],
	["[分|わ]かれ*る", "分かれ", ["わかれ"],
		[
			["分", "わ", false],
			["か", null, false],
			["れ", null, false]
		], -1
	],
	["[分|わ]け*る", "分け", ["わけ"],
		[
			["分", "わ", false],
			["け", null, false]
		], -1
	],
	["[分|わか]*5", "分", ["わか"],
		[
			["分", "わか", false]
		], -1
	],
	["[水|すい][分|ぶん]", "水分", ["すいぶん"],
		[
			["水", "すい", false],
			["分", "ぶん", false]
		], -1
	],
	["[分|ぶん](野|や)", "分野", ["ぶんや"],
		[
			["分", "ぶん", false],
			["野", "や", true]
		], "1052"
	],
	["(多|た)[分|ぶん]", "多分", ["たぶん"],
		[
			["多", "た", true],
			["分", "ぶん", false]
		], "1077"
	],
	["[分|ぶん](数|すう)", "分数", ["ぶんすう"],
		[
			["分", "ぶん", false],
			["数", "すう", true]
		], "1089"
	],
	["(引|ひき)[分|わ]け", "引分け", ["ひきわけ"],
		[
			["引", "ひき", true],
			["分", "わ", false],
			["け", null, false]
		], "1214"
	],
	["(何|なに)[分|ぶん]", "何分", ["なにぶん"],
		[
			["何", "なに", true],
			["分", "ぶん", false]
		], "1376"
	],
	["(漢|かん)[字|じ]", "漢字", ["かんじ"],
		[
			["漢", "かん", true],
			["字", "じ", false]
		], "1819"
	],
	["～所", "～所", ["しょ", "じょ"],
		[], null
	],
	["[人|にん](形|ぎょう)", "人形", ["にんぎょう"],
		[
			["人", "にん", false],
			["形", "ぎょう", true]
		], "1454"
	],
	["[正|せい](方|ほう)(形|けい)", "正方形", ["せいほうけい"],
		[
			["正", "せい", false],
			["方", "ほう", true],
			["形", "けい", true]
		], "906"
	],
	["[長|ちょう](方|ほう)(形|けい)", "長方形", ["ちょうほうけい"],
		[
			["長", "ちょう", false],
			["方", "ほう", true],
			["形", "けい", true]
		], "907"
	],
	["(前|ぜん)[後|ご]", "前後", ["ぜんご"],
		[
			["前", "ぜん", true],
			["後", "ご", false]
		], "849"
	],
	["(今|こん)[後|ご]", "今後", ["こんご"],
		[
			["今", "こん", true],
			["後", "ご", false]
		], "918"
	],
	["(明|みょう)[後|ご][日|にち]", "明後日", ["みょうごにち"],
		[
			["明", "みょう", true],
			["後", "ご", false],
			["日", "にち", false]
		], "959"
	],
	["(直|ちょく)[後|ご]", "直後", ["ちょくご"],
		[
			["直", "ちょく", true],
			["後", "ご", false]
		], "1257"
	],
	["[台|たい][風|ふう]", "台風", ["たいふう"],
		[
			["台", "たい", false],
			["風", "ふう", false]
		], -1
	],
	["[風|かぜ]", "風", ["かぜ"],
		[
			["風", "かぜ", false]
		], -1
	],
	["[先|せん](頭|とう)", "先頭", ["せんとう"],
		[
			["先", "せん", false],
			["頭", "とう", true]
		], "1466"
	],
	["[前|ぜん]{～}", "前～", ["ぜん"],
		[
			["前", "ぜん", false],
			["～", null, false]
		], -1
	],
	["[前|ぜん][後|ご]", "前後", ["ぜんご"],
		[
			["前", "ぜん", false],
			["後", "ご", false]
		], -1
	],
	["[手|て][前|まえ]", "手前", ["てまえ"],
		[
			["手", "て", false],
			["前", "まえ", false]
		], -1
	],
	["(直|ちょく)[前|ぜん]", "直前", ["ちょくぜん"],
		[
			["直", "ちょく", true],
			["前", "ぜん", false]
		], "1256"
	],
	["(真|ま)ん[中|なか]", "真ん中", ["まんなか"],
		[
			["真", "ま", true],
			["ん", null, false],
			["中", "なか", false]
		], "1681"
	],
	["品", "品", ["しな", "ひん"],
		[], null
	],
	["{～}[間|かん]", "～間", ["かん"],
		[
			["～", null, false],
			["間", "かん", false]
		], -1
	],
	["[中|ちゅう][間|かん]", "中間", ["ちゅうかん"],
		[
			["中", "ちゅう", false],
			["間", "かん", false]
		], -1
	],
	["[人|にん][間|げん]", "人間", ["にんげん"],
		[
			["人", "にん", false],
			["間", "げん", false]
		], -1
	],
	["[年|ねん][間|かん]", "年間", ["ねんかん"],
		[
			["年", "ねん", false],
			["間", "かん", false]
		], -1
	],
	["[手|て][間|ま]", "手間", ["てま"],
		[
			["手", "て", false],
			["間", "ま", false]
		], -1
	],
	["{～}[時|じ][間|かん][目|め]", "～時間目", ["じかんめ"],
		[
			["～", null, false],
			["時", "じ", false],
			["間", "かん", false],
			["目", "め", false]
		], -1
	],
	["[正|せい](門|もん)", "正門", ["せいもん"],
		[
			["正", "せい", false],
			["門", "もん", true]
		], "1472"
	],
	["[東|とう](西|ざい)", "東西", ["とうざい"],
		[
			["東", "とう", false],
			["西", "ざい", true]
		], "1267"
	],
	["[黒|くろ]い", "黒い", ["くろい"],
		[
			["黒", "くろ", false],
			["い", null, false]
		], -1
	],
	["(夜|よ)[中|なか]", "夜中", ["よなか"],
		[
			["夜", "よ", true],
			["中", "なか", false]
		], "1485"
	],
	["(夜|や)[行|こう]", "夜行", ["やこう"],
		[
			["夜", "や", true],
			["行", "こう", false]
		], "1487"
	],
	["(夜|や)[間|かん]", "夜間", ["やかん"],
		[
			["夜", "や", true],
			["間", "かん", false]
		], "1488"
	],
	["[地|ち]", "地", ["ち"],
		[
			["地", "ち", false]
		], -1
	],
	["[生|き][地|じ]", "生地", ["きじ"],
		[
			["生", "き", false],
			["地", "じ", false]
		], -1
	],
	["[地|ち][下|か]", "地下", ["ちか"],
		[
			["地", "ち", false],
			["下", "か", false]
		], -1
	],
	["[地|ち][名|めい]", "地名", ["ちめい"],
		[
			["地", "ち", false],
			["名", "めい", false]
		], -1
	],
	["[地|ち][下|か][水|すい]", "地下水", ["ちかすい"],
		[
			["地", "ち", false],
			["下", "か", false],
			["水", "すい", false]
		], -1
	],
	["[土|と][地|ち]", "土地", ["とち"],
		[
			["土", "と", false],
			["地", "ち", false]
		], -1
	],
	["[地|ち](方|ほう)", "地方", ["ちほう"],
		[
			["地", "ち", false],
			["方", "ほう", true]
		], "902"
	],
	["[地|ち](点|てん)", "地点", ["ちてん"],
		[
			["地", "ち", false],
			["点", "てん", true]
		], "1109"
	],
	["(番|ばん)[地|ち]", "番地", ["ばんち"],
		[
			["番", "ばん", true],
			["地", "ち", false]
		], "1394"
	],
	["[日|ひ](帰|がえ)り", "日帰り", ["ひがえり"],
		[
			["日", "ひ", false],
			["帰", "がえ", true],
			["り", null, false]
		], "1491"
	],
	["[会|かい][合|ごう]", "会合", ["かいごう"],
		[
			["会", "かい", false],
			["合", "ごう", false]
		], -1
	],
	["[出|で][合|あ]い", "出合い", ["であい"],
		[
			["出", "で", false],
			["合", "あ", false],
			["い", null, false]
		], -1
	],
	["[出|で][合|あ]*う", "出合", ["であ"],
		[
			["出", "で", false],
			["合", "あ", false]
		], -1
	],
	["[合|あ]わせ*る", "合わせ", ["あわせ"],
		[
			["合", "あ", false],
			["わ", null, false],
			["せ", null, false]
		], -1
	],
	["[合|ごう][同|どう]", "合同", ["ごうどう"],
		[
			["合", "ごう", false],
			["同", "どう", false]
		], -1
	],
	["[合|ごう](理|り)", "合理", ["ごうり"],
		[
			["合", "ごう", false],
			["理", "り", true]
		], "996"
	],
	["(話|はな)し[合|あ]う", "話し合う", ["はなしあう"],
		[
			["話", "はな", true],
			["し", null, false],
			["合", "あ", false],
			["う", null, false]
		], "1071"
	],
	["(話|はなし)[合|あ]い", "話合い", ["はなしあい"],
		[
			["話", "はなし", true],
			["合", "あ", false],
			["い", null, false]
		], "1073"
	],
	["(組|くみ)[合|あい]", "組合", ["くみあい"],
		[
			["組", "くみ", true],
			["合", "あい", false]
		], "1176"
	],
	["(組|くみ)[合|あわ]せ", "組合せ", ["くみあわせ"],
		[
			["組", "くみ", true],
			["合", "あわ", false],
			["せ", null, false]
		], "1177"
	],
	["(知|しり)[合|あ]い", "知合い", ["しりあい"],
		[
			["知", "しり", true],
			["合", "あ", false],
			["い", null, false]
		], "1187"
	],
	["[合|ごう](計|けい)", "合計", ["ごうけい"],
		[
			["合", "ごう", false],
			["計", "けい", true]
		], "1237"
	],
	["[春|はる]", "春", ["はる"],
		[
			["春", "はる", false]
		], -1
	],
	["[中|ちゅう](古|こ)", "中古", ["ちゅうこ"],
		[
			["中", "ちゅう", false],
			["古", "こ", true]
		], "1504"
	],
	["[市|し]", "市", ["し"],
		[
			["市", "し", false]
		], -1
	],
	["[市|いち](場|ば)", "市場", ["いちば"],
		[
			["市", "いち", false],
			["場", "ば", true]
		], "939"
	],
	["[読|よ]*む", "読", ["よ"],
		[
			["読", "よ", false]
		], -1
	],
	["(急|きゅう)[行|こう]", "急行", ["きゅうこう"],
		[
			["急", "きゅう", true],
			["行", "こう", false]
		], "1709"
	],
	["(歌|か)[手|しゅ]", "歌手", ["かしゅ"],
		[
			["歌", "か", true],
			["手", "しゅ", false]
		], "1522"
	],
	["打つ", "打つ", ["うつ", "ぶつ"],
		[], null
	],
	["{～}[内|ない]", "～内", ["ない"],
		[
			["～", null, false],
			["内", "ない", false]
		], -1
	],
	["[内|うち]", "内", ["うち"],
		[
			["内", "うち", false]
		], -1
	],
	["[内|ない](線|せん)", "内線", ["ないせん"],
		[
			["内", "ない", false],
			["線", "せん", true]
		], "1435"
	],
	["[色|いろ]", "色", ["いろ"],
		[
			["色", "いろ", false]
		], -1
	],
	["(茶|ちゃ)[色|いろ]", "茶色", ["ちゃいろ"],
		[
			["茶", "ちゃ", true],
			["色", "いろ", false]
		], "1080"
	],
	["[一|いっ][方|ぽう]", "一方", ["いっぽう"],
		[
			["一", "いっ", false],
			["方", "ぽう", false]
		], -1
	],
	["[地|ち][方|ほう]", "地方", ["ちほう"],
		[
			["地", "ち", false],
			["方", "ほう", false]
		], -1
	],
	["[行方|ゆくえ]", "行方", ["ゆくえ"],
		[
			["行方", "ゆくえ", false]
		], -1
	],
	["(明|あ)け[方|がた]", "明け方", ["あけがた"],
		[
			["明", "あ", true],
			["け", null, false],
			["方", "がた", false]
		], "957"
	],
	["[方|ほう](言|げん)", "方言", ["ほうげん"],
		[
			["方", "ほう", false],
			["言", "げん", true]
		], "991"
	],
	["[正|せい][方|ほう](形|けい)", "正方形", ["せいほうけい"],
		[
			["正", "せい", false],
			["方", "ほう", false],
			["形", "けい", true]
		], "1456"
	],
	["[長|ちょう][方|ほう](形|けい)", "長方形", ["ちょうほうけい"],
		[
			["長", "ちょう", false],
			["方", "ほう", false],
			["形", "けい", true]
		], "1457"
	],
	["[日|にっ](光|こう)", "日光", ["にっこう"],
		[
			["日", "にっ", false],
			["光", "こう", true]
		], "1534"
	],
	["[人|じん][文|ぶん](科|か)[学|がく]", "人文科学", ["じんぶんかがく"],
		[
			["人", "じん", false],
			["文", "ぶん", false],
			["科", "か", true],
			["学", "がく", false]
		], "1542"
	],
	["[内|ない](科|か)", "内科", ["ないか"],
		[
			["内", "ない", false],
			["科", "か", true]
		], "1543"
	],
	["[学|がっ](科|か)", "学科", ["がっか"],
		[
			["学", "がっ", false],
			["科", "か", true]
		], "1545"
	],
	["[社|しゃ][会|かい](科|か)[学|がく]", "社会科学", ["しゃかいかがく"],
		[
			["社", "しゃ", false],
			["会", "かい", false],
			["科", "か", true],
			["学", "がく", false]
		], "1548"
	],
	["(科|か)[学|がく]", "科学", ["かがく"],
		[
			["科", "か", true],
			["学", "がく", false]
		], "1549"
	],
	["(科|か)[目|もく]", "科目", ["かもく"],
		[
			["科", "か", true],
			["目", "もく", false]
		], "1550"
	],
	["[今|こん]{～}", "今～", ["こん"],
		[
			["今", "こん", false],
			["～", null, false]
		], -1
	],
	["[今|いま]に", "今に", ["いまに"],
		[
			["今", "いま", false],
			["に", null, false]
		], -1
	],
	["[今|いま]にも", "今にも", ["いまにも"],
		[
			["今", "いま", false],
			["に", null, false],
			["も", null, false]
		], -1
	],
	["[今|こん][後|ご]", "今後", ["こんご"],
		[
			["今", "こん", false],
			["後", "ご", false]
		], -1
	],
	["[今|こん](回|かい)", "今回", ["こんかい"],
		[
			["今", "こん", false],
			["回", "かい", true]
		], "920"
	],
	["[今|こん][回|かい]", "今回", ["こんかい"],
		[
			["今", "こん", false],
			["回", "かい", false]
		], -1
	],
	["[回|かい]", "回", ["かい"],
		[
			["回", "かい", false]
		], -1
	],
	["[回|まわ]*す", "回", ["まわ"],
		[
			["回", "まわ", false]
		], -1
	],
	["[回|まわ]り", "回り", ["まわり"],
		[
			["回", "まわ", false],
			["り", null, false]
		], -1
	],
	["[回|かい](数|すう)", "回数", ["かいすう"],
		[
			["回", "かい", false],
			["数", "すう", true]
		], "1090"
	],
	["[回|まわ]り(道|みち)", "回り道", ["まわりみち"],
		[
			["回", "まわ", false],
			["り", null, false],
			["道", "みち", true]
		], "1196"
	],
	["[回|かい](答|とう)", "回答", ["かいとう"],
		[
			["回", "かい", false],
			["答", "とう", true]
		], "1476"
	],
	["[公|こう][園|えん]", "公園", ["こうえん"],
		[
			["公", "こう", false],
			["園", "えん", false]
		], -1
	],
	["(動|どう)(物|ぶつ)[園|えん]", "動物園", ["どうぶつえん"],
		[
			["動", "どう", true],
			["物", "ぶつ", true],
			["園", "えん", false]
		], "1331"
	],
	["[自|じ](転|てん)[車|しゃ]", "自転車", ["じてんしゃ"],
		[
			["自", "じ", false],
			["転", "てん", true],
			["車", "しゃ", false]
		], "1732"
	],
	["(運|うん)(転|てん)[手|しゅ]", "運転手", ["うんてんしゅ"],
		[
			["運", "うん", true],
			["転", "てん", true],
			["手", "しゅ", false]
		], "1660"
	],
	["[合|あい](図|ず)", "合図", ["あいず"],
		[
			["合", "あい", false],
			["図", "ず", true]
		], "1556"
	],
	["[新|あら]た", "新た", ["あらた"],
		[
			["新", "あら", false],
			["た", null, false]
		], -1
	],
	["[秋|あき]", "秋", ["あき"],
		[
			["秋", "あき", false]
		], -1
	],
	["[先|せん][々|せん](週|しゅう)", "先々週", ["せんせんしゅう"],
		[
			["先", "せん", false],
			["々", "せん", false],
			["週", "しゅう", true]
		], "1562"
	],
	["(週|しゅう)[間|かん]", "週間", ["しゅうかん"],
		[
			["週", "しゅう", true],
			["間", "かん", false]
		], "1564"
	],
	["{～}[場|じょう]", "～場", ["じょう"],
		[
			["～", null, false],
			["場", "じょう", false]
		], -1
	],
	["[出|しゅつ][場|じょう]", "出場", ["しゅつじょう"],
		[
			["出", "しゅつ", false],
			["場", "じょう", false]
		], -1
	],
	["[場|ば]", "場", ["ば"],
		[
			["場", "ば", false]
		], -1
	],
	["[市|いち][場|ば]", "市場", ["いちば"],
		[
			["市", "いち", false],
			["場", "ば", false]
		], -1
	],
	["[入|にゅう][場|じょう]", "入場", ["にゅうじょう"],
		[
			["入", "にゅう", false],
			["場", "じょう", false]
		], -1
	],
	["[立|たち][場|ば]", "立場", ["たちば"],
		[
			["立", "たち", false],
			["場", "ば", false]
		], -1
	],
	["(広|ひろ)[場|ば]", "広場", ["ひろば"],
		[
			["広", "ひろ", true],
			["場", "ば", false]
		], "1282"
	],
	["[米|こめ]", "米", ["こめ"],
		[
			["米", "こめ", false]
		], -1
	],
	["(南|なん)[米|べい]", "南米", ["なんべい"],
		[
			["南", "なん", true],
			["米", "べい", false]
		], "1383"
	],
	["[高|こう]{～}", "高～", ["こう"],
		[
			["高", "こう", false],
			["～", null, false]
		], -1
	],
	["[高|たか]め*る", "高め", ["たかめ"],
		[
			["高", "たか", false],
			["め", null, false]
		], -1
	],
	["[夏|なつ]", "夏", ["なつ"],
		[
			["夏", "なつ", false]
		], -1
	],
	["[夏|なつ][休|やす]み", "夏休み", ["なつやすみ"],
		[
			["夏", "なつ", false],
			["休", "やす", false],
			["み", null, false]
		], -1
	],
	["[住|す]*む", "住", ["す"],
		[
			["住", "す", false]
		], -1
	],
	["(研|けん)(究|きゅう)[室|しつ]", "研究室", ["けんきゅうしつ"],
		[
			["研", "けん", true],
			["究", "きゅう", true],
			["室", "しつ", false]
		], "1739"
	],
	["[明|みょう]{～}", "明～", ["みょう"],
		[
			["明", "みょう", false],
			["～", null, false]
		], -1
	],
	["[明|あかる]い", "明い", ["あかるい"],
		[
			["明", "あかる", false],
			["い", null, false]
		], -1
	],
	["[明|あ]かり", "明かり", ["あかり"],
		[
			["明", "あ", false],
			["か", null, false],
			["り", null, false]
		], -1
	],
	["[明|あ]き", "明き", ["あき"],
		[
			["明", "あ", false],
			["き", null, false]
		], -1
	],
	["[明|あ]くる{～}", "明くる～", ["あくる"],
		[
			["明", "あ", false],
			["く", null, false],
			["る", null, false],
			["～", null, false]
		], -1
	],
	["[明|あ]け*る", "明け", ["あけ"],
		[
			["明", "あ", false],
			["け", null, false]
		], -1
	],
	["[明|あ]け[方|がた]", "明け方", ["あけがた"],
		[
			["明", "あ", false],
			["け", null, false],
			["方", "がた", false]
		], -1
	],
	["[明|あき]らか", "明らか", ["あきらか"],
		[
			["明", "あき", false],
			["ら", null, false],
			["か", null, false]
		], -1
	],
	["[明|みょう][後|ご][日|にち]", "明後日", ["みょうごにち"],
		[
			["明", "みょう", false],
			["後", "ご", false],
			["日", "にち", false]
		], -1
	],
	["[文|ぶん][明|めい]", "文明", ["ぶんめい"],
		[
			["文", "ぶん", false],
			["明", "めい", false]
		], -1
	],
	["(夜|よ)[明|あ]け", "夜明け", ["よあけ"],
		[
			["夜", "よ", true],
			["明", "あ", false],
			["け", null, false]
		], "1486"
	],
	["[上|じょう][京|きょう]", "上京", ["じょうきょう"],
		[
			["上", "じょう", false],
			["京", "きょう", false]
		], -1
	],
	["(写|しゃ)[真|しん]", "写真", ["しゃしん"],
		[
			["写", "しゃ", true],
			["真", "しん", false]
		], "1230"
	],
	["[上|うわ](着|ぎ)", "上着", ["うわぎ"],
		[
			["上", "うわ", false],
			["着", "ぎ", true]
		], "1772"
	],
	["[下|した](着|ぎ)", "下着", ["したぎ"],
		[
			["下", "した", false],
			["着", "ぎ", true]
		], "1773"
	],
	["{～}[通|つう]", "～通", ["つう"],
		[
			["～", null, false],
			["通", "つう", false]
		], -1
	],
	["{～}[通|とお]り", "～通り", ["とおり"],
		[
			["～", null, false],
			["通", "とお", false],
			["り", null, false]
		], -1
	],
	["[一|ひと][通|とお]り", "一通り", ["ひととおり"],
		[
			["一", "ひと", false],
			["通", "とお", false],
			["り", null, false]
		], -1
	],
	["[人|ひと][通|どお]り", "人通り", ["ひとどおり"],
		[
			["人", "ひと", false],
			["通", "どお", false],
			["り", null, false]
		], -1
	],
	["[大|おお][通|どお]り", "大通り", ["おおどおり"],
		[
			["大", "おお", false],
			["通", "どお", false],
			["り", null, false]
		], -1
	],
	["[通|つう]じ*る", "通じ", ["つうじ"],
		[
			["通", "つう", false],
			["じ", null, false]
		], -1
	],
	["[通|とお]*す", "通", ["とお"],
		[
			["通", "とお", false]
		], -1
	],
	["[通|つう]ずる", "通ずる", ["つうずる"],
		[
			["通", "つう", false],
			["ず", null, false],
			["る", null, false]
		], -1
	],
	["[通|つう][学|がく]", "通学", ["つうがく"],
		[
			["通", "つう", false],
			["学", "がく", false]
		], -1
	],
	["[通|つう][行|こう]", "通行", ["つうこう"],
		[
			["通", "つう", false],
			["行", "こう", false]
		], -1
	],
	["[通|つう](用|よう)", "通用", ["つうよう"],
		[
			["通", "つう", false],
			["用", "よう", true]
		], "1035"
	],
	["(交|こう)[通|つう]", "交通", ["こうつう"],
		[
			["交", "こう", true],
			["通", "つう", false]
		], "1142"
	],
	["[通|つう](知|ち)", "通知", ["つうち"],
		[
			["通", "つう", false],
			["知", "ち", true]
		], "1188"
	],
	["(直|ちょく)[通|つう]", "直通", ["ちょくつう"],
		[
			["直", "ちょく", true],
			["通", "つう", false]
		], "1258"
	],
	["[雨|あま](戸|ど)", "雨戸", ["あまど"],
		[
			["雨", "あま", false],
			["戸", "ど", true]
		], "1626"
	],
	["{～}[外|がい]", "～外", ["がい"],
		[
			["～", null, false],
			["外", "がい", false]
		], -1
	],
	["[外|がい]{～}", "外～", ["がい"],
		[
			["外", "がい", false],
			["～", null, false]
		], -1
	],
	["[外|はず]*す", "外", ["はず"],
		[
			["外", "はず", false]
		], -1
	],
	["[外|はず]れ*る", "外れ", ["はずれ"],
		[
			["外", "はず", false],
			["れ", null, false]
		], -1
	],
	["[外|がい][出|しゅつ]", "外出", ["がいしゅつ"],
		[
			["外", "がい", false],
			["出", "しゅつ", false]
		], -1
	],
	["[外|がい](交|こう)", "外交", ["がいこう"],
		[
			["外", "がい", false],
			["交", "こう", true]
		], "1143"
	],
	["(海|かい)[外|がい]", "海外", ["かいがい"],
		[
			["海", "かい", true],
			["外", "がい", false]
		], "1162"
	],
	["[外|げ](科|か)", "外科", ["げか"],
		[
			["外", "げ", false],
			["科", "か", true]
		], "1544"
	],
	["[有|ゆう][名|めい]", "有名", ["ゆうめい"],
		[
			["有", "ゆう", false],
			["名", "めい", false]
		], -1
	],
	["[一|ひと][言|こと]", "一言", ["ひとこと"],
		[
			["一", "ひと", false],
			["言", "こと", false]
		], -1
	],
	["[方|ほう][言|げん]", "方言", ["ほうげん"],
		[
			["方", "ほう", false],
			["言", "げん", false]
		], -1
	],
	["[言|い]い[出|だ]す", "言い出す", ["いいだす"],
		[
			["言", "い", false],
			["い", null, false],
			["出", "だ", false],
			["す", null, false]
		], -1
	],
	["[言|い]わば", "言わば", ["いわば"],
		[
			["言", "い", false],
			["わ", null, false],
			["ば", null, false]
		], -1
	],
	["[言|げん](語|ご)", "言語", ["げんご"],
		[
			["言", "げん", false],
			["語", "ご", true]
		], "1324"
	],
	["(病|びょう)[気|き]", "病気", ["びょうき"],
		[
			["病", "びょう", true],
			["気", "き", false]
		], "1788"
	],
	["[合|ごう][理|り]", "合理", ["ごうり"],
		[
			["合", "ごう", false],
			["理", "り", false]
		], -1
	],
	["(心|しん)[理|り]", "心理", ["しんり"],
		[
			["心", "しん", true],
			["理", "り", false]
		], "1106"
	],
	["(原|げん)[理|り]", "原理", ["げんり"],
		[
			["原", "げん", true],
			["理", "り", false]
		], "1136"
	],
	["[理|り](科|か)", "理科", ["りか"],
		[
			["理", "り", false],
			["科", "か", true]
		], "1547"
	],
	["球", "球", ["きゅう", "たま"],
		[], null
	],
	["(友|ゆう)[人|じん]", "友人", ["ゆうじん"],
		[
			["友", "ゆう", true],
			["人", "じん", false]
		], "1640"
	],
	["[一|いっ][体|たい]", "一体", ["いったい"],
		[
			["一", "いっ", false],
			["体", "たい", false]
		], -1
	],
	["[大|だい][体|たい]", "大体", ["だいたい"],
		[
			["大", "だい", false],
			["体", "たい", false]
		], -1
	],
	["[気|き][体|たい]", "気体", ["きたい"],
		[
			["気", "き", false],
			["体", "たい", false]
		], -1
	],
	["[文|ぶん][体|たい]", "文体", ["ぶんたい"],
		[
			["文", "ぶん", false],
			["体", "たい", false]
		], -1
	],
	["[当|あ]た*5", "当た", ["あた"],
		[
			["当", "あ", false],
			["た", null, false]
		], -1
	],
	["[当|あ]て*る", "当て", ["あて"],
		[
			["当", "あ", false],
			["て", null, false]
		], -1
	],
	["[当|とう][日|じつ]", "当日", ["とうじつ"],
		[
			["当", "とう", false],
			["日", "じつ", false]
		], -1
	],
	["[当|とう][時|じ]", "当時", ["とうじ"],
		[
			["当", "とう", false],
			["時", "じ", false]
		], -1
	],
	["[日|ひ][当|あ]たり", "日当たり", ["ひあたり"],
		[
			["日", "ひ", false],
			["当", "あ", false],
			["た", null, false],
			["り", null, false]
		], -1
	],
	["[見|けん][当|とう]", "見当", ["けんとう"],
		[
			["見", "けん", false],
			["当", "とう", false]
		], -1
	],
	["(心|こころ)[当|あ]たり", "心当たり", ["こころあたり"],
		[
			["心", "こころ", true],
			["当", "あ", false],
			["た", null, false],
			["り", null, false]
		], "1105"
	],
	["[当|とう](番|ばん)", "当番", ["とうばん"],
		[
			["当", "とう", false],
			["番", "ばん", true]
		], "1392"
	],
	["[家|か](族|ぞく)", "家族", ["かぞく"],
		[
			["家", "か", false],
			["族", "ぞく", true]
		], "1810"
	],
	["[手|て][首|くび]", "手首", ["てくび"],
		[
			["手", "て", false],
			["首", "くび", false]
		], -1
	],
	["[首|くび]", "首", ["くび"],
		[
			["首", "くび", false]
		], -1
	],
	["[遠|とお]い", "遠い", ["とおい"],
		[
			["遠", "とお", false],
			["い", null, false]
		], -1
	],
	["[遠|とお]く", "遠く", ["とおく"],
		[
			["遠", "とお", false],
			["く", null, false]
		], -1
	],
	["[出|で][来|き]るだけ", "出来るだけ", ["できるだけ"],
		[
			["出", "で", false],
			["来", "き", false],
			["る", null, false],
			["だ", null, false],
			["け", null, false]
		], -1
	],
	["[出|で][来|き][上|あ]がり", "出来上がり", ["できあがり"],
		[
			["出", "で", false],
			["来", "き", false],
			["上", "あ", false],
			["が", null, false],
			["り", null, false]
		], -1
	],
	["[出|で][来|き][上|あ]が*5", "出来上が", ["できあが"],
		[
			["出", "で", false],
			["来", "き", false],
			["上", "あ", false],
			["が", null, false]
		], -1
	],
	["[本|ほん][来|らい]", "本来", ["ほんらい"],
		[
			["本", "ほん", false],
			["来", "らい", false]
		], -1
	],
	["[来|らい]", "来", ["らい"],
		[
			["来", "らい", false]
		], -1
	],
	["[来|らい][日|にち]", "来日", ["らいにち"],
		[
			["来", "らい", false],
			["日", "にち", false]
		], -1
	],
	["[名|めい][作|さく]", "名作", ["めいさく"],
		[
			["名", "めい", false],
			["作", "さく", false]
		], -1
	],
	["[作|さっ](家|か)", "作家", ["さっか"],
		[
			["作", "さっ", false],
			["家", "か", true]
		], "1067"
	],
	["[土|ど][曜|よう][日|び]", "土曜日", ["どようび"],
		[
			["土", "ど", false],
			["曜", "よう", false],
			["日", "び", false]
		], -1
	],
	["[日|にち][曜|よう][日|び]", "日曜日", ["にちようび"],
		[
			["日", "にち", false],
			["曜", "よう", false],
			["日", "び", false]
		], -1
	],
	["[月|げつ][曜|よう][日|び]", "月曜日", ["げつようび"],
		[
			["月", "げつ", false],
			["曜", "よう", false],
			["日", "び", false]
		], -1
	],
	["[木|もく][曜|よう][日|び]", "木曜日", ["もくようび"],
		[
			["木", "もく", false],
			["曜", "よう", false],
			["日", "び", false]
		], -1
	],
	["[水|すい][曜|よう][日|び]", "水曜日", ["すいようび"],
		[
			["水", "すい", false],
			["曜", "よう", false],
			["日", "び", false]
		], -1
	],
	["[火|か][曜|よう][日|び]", "火曜日", ["かようび"],
		[
			["火", "か", false],
			["曜", "よう", false],
			["日", "び", false]
		], -1
	],
	["[金|きん][曜|よう][日|び]", "金曜日", ["きんようび"],
		[
			["金", "きん", false],
			["曜", "よう", false],
			["日", "び", false]
		], -1
	],
	["[用|もち]い*る", "用い", ["もちい"],
		[
			["用", "もち", false],
			["い", null, false]
		], -1
	],
	["[通|つう][用|よう]", "通用", ["つうよう"],
		[
			["通", "つう", false],
			["用", "よう", false]
		], -1
	],
	["[用|よう](心|じん)", "用心", ["ようじん"],
		[
			["用", "よう", false],
			["心", "じん", true]
		], "1107"
	],
	["(活|かつ)[用|よう]", "活用", ["かつよう"],
		[
			["活", "かつ", true],
			["用", "よう", false]
		], "1132"
	],
	["(引|いん)[用|よう]", "引用", ["いんよう"],
		[
			["引", "いん", true],
			["用", "よう", false]
		], "1216"
	],
	["[用|よう](語|ご)", "用語", ["ようご"],
		[
			["用", "よう", false],
			["語", "ご", true]
		], "1323"
	],
	["[弱|よわ]い", "弱い", ["よわい"],
		[
			["弱", "よわ", false],
			["い", null, false]
		], -1
	],
	["[力|ちから][強|づよ]い", "力強い", ["ちからづよい"],
		[
			["力", "ちから", false],
			["強", "づよ", false],
			["い", null, false]
		], -1
	],
	["[強|きょう][力|りょく]", "強力", ["きょうりょく"],
		[
			["強", "きょう", false],
			["力", "りょく", false]
		], -1
	],
	["[強|つよ][気|き]", "強気", ["つよき"],
		[
			["強", "つよ", false],
			["気", "き", false]
		], -1
	],
	["[強|ごう](引|いん)", "強引", ["ごういん"],
		[
			["強", "ごう", false],
			["引", "いん", true]
		], "1217"
	],
	["[肉|にく]", "肉", ["にく"],
		[
			["肉", "にく", false]
		], -1
	],
	["(牛|ぎゅう)[肉|にく]", "牛肉", ["ぎゅうにく"],
		[
			["牛", "ぎゅう", true],
			["肉", "にく", false]
		], "1103"
	],
	["(自|じ)(転|てん)[車|しゃ]", "自転車", ["じてんしゃ"],
		[
			["自", "じ", true],
			["転", "てん", true],
			["車", "しゃ", false]
		], -1
	],
	["(医|い)[学|がく]", "医学", ["いがく"],
		[
			["医", "い", true],
			["学", "がく", false]
		], "1839"
	],
	["[公|こう][正|せい]", "公正", ["こうせい"],
		[
			["公", "こう", false],
			["正", "せい", false]
		], -1
	],
	["(仕|し)[方|かた]", "仕方", ["しかた"],
		[
			["仕", "し", true],
			["方", "かた", false]
		], "1855"
	],
	["(去|きょ)[年|ねん]", "去年", ["きょねん"],
		[
			["去", "きょ", true],
			["年", "ねん", false]
		], "1872"
	],
	["[分|ぶん][野|や]", "分野", ["ぶんや"],
		[
			["分", "ぶん", false],
			["野", "や", false]
		], -1
	],
	["[野|の]", "野", ["の"],
		[
			["野", "の", false]
		], -1
	],
	["[小|こ][鳥|とり]", "小鳥", ["ことり"],
		[
			["小", "こ", false],
			["鳥", "とり", false]
		], -1
	],
	["[鳥|とり]", "鳥", ["とり"],
		[
			["鳥", "とり", false]
		], -1
	],
	["[三|さん](角|かく)", "三角", ["さんかく"],
		[
			["三", "さん", false],
			["角", "かく", true]
		], "1690"
	],
	["[四|よ]つ(角|かど)", "四つ角", ["よつかど"],
		[
			["四", "よ", false],
			["つ", null, false],
			["角", "かど", true]
		], "1691"
	],
	["[四|し](角|かく)", "四角", ["しかく"],
		[
			["四", "し", false],
			["角", "かく", true]
		], "1692"
	],
	["[四|し](角|かく)い", "四角い", ["しかくい"],
		[
			["四", "し", false],
			["角", "かく", true],
			["い", null, false]
		], "1693"
	],
	["[方|ほう](角|がく)", "方角", ["ほうがく"],
		[
			["方", "ほう", false],
			["角", "がく", true]
		], "1694"
	],
	["[思|おも]い[出|で]", "思い出", ["おもいで"],
		[
			["思", "おも", false],
			["い", null, false],
			["出", "で", false]
		], -1
	],
	["[思|おも]わず", "思わず", ["おもわず"],
		[
			["思", "おも", false],
			["わ", null, false],
			["ず", null, false]
		], -1
	],
	["[思|おも]いっ(切|き)り", "思いっ切り", ["おもいっきり"],
		[
			["思", "おも", false],
			["い", null, false],
			["っ", null, false],
			["切", "き", true],
			["り", null, false]
		], "1355"
	],
	["[思|おも]い(切|き)り", "思い切り", ["おもいきり"],
		[
			["思", "おも", false],
			["い", null, false],
			["切", "き", true],
			["り", null, false]
		], "1356"
	],
	["[冬|ふゆ]", "冬", ["ふゆ"],
		[
			["冬", "ふゆ", false]
		], -1
	],
	["[一|いっ][家|か]", "一家", ["いっか"],
		[
			["一", "いっ", false],
			["家", "か", false]
		], -1
	],
	["[作|さっ][家|か]", "作家", ["さっか"],
		[
			["作", "さっ", false],
			["家", "か", false]
		], -1
	],
	["[国|こっ][家|か]", "国家", ["こっか"],
		[
			["国", "こっ", false],
			["家", "か", false]
		], -1
	],
	["[大|おお][家|や]", "大家", ["おおや"],
		[
			["大", "おお", false],
			["家", "や", false]
		], -1
	],
	["(画|が)[家|か]", "画家", ["がか"],
		[
			["画", "が", true],
			["家", "か", false]
		], "1157"
	],
	["[話|はな]し[合|あ]う", "話し合う", ["はなしあう"],
		[
			["話", "はな", false],
			["し", null, false],
			["合", "あ", false],
			["う", null, false]
		], -1
	],
	["[話|はなし][中|ちゅう]", "話中", ["はなしちゅう"],
		[
			["話", "はなし", false],
			["中", "ちゅう", false]
		], -1
	],
	["[話|はなし][合|あ]い", "話合い", ["はなしあい"],
		[
			["話", "はなし", false],
			["合", "あ", false],
			["い", null, false]
		], -1
	],
	["[昼|ひる][休|やす]み", "昼休み", ["ひるやすみ"],
		[
			["昼", "ひる", false],
			["休", "やす", false],
			["み", null, false]
		], -1
	],
	["[昼|ひる][間|ま]", "昼間", ["ひるま"],
		[
			["昼", "ひる", false],
			["間", "ま", false]
		], -1
	],
	["(遠|えん)[足|そく]", "遠足", ["えんそく"],
		[
			["遠", "えん", true],
			["足", "そく", false]
		], "1710"
	],
	["[多|た][分|ぶん]", "多分", ["たぶん"],
		[
			["多", "た", false],
			["分", "ぶん", false]
		], -1
	],
	["[多|た](少|しょう)", "多少", ["たしょう"],
		[
			["多", "た", false],
			["少", "しょう", true]
		], "1302"
	],
	["お[茶|ちゃ]", "お茶", ["おちゃ"],
		[
			["お", null, false],
			["茶", "ちゃ", false]
		], -1
	],
	["[茶|ちゃ][色|いろ]", "茶色", ["ちゃいろ"],
		[
			["茶", "ちゃ", false],
			["色", "いろ", false]
		], -1
	],
	["[土|ど](曜|よう)", "土曜", ["どよう"],
		[
			["土", "ど", false],
			["曜", "よう", true]
		], "1715"
	],
	["[日|にち](曜|よう)", "日曜", ["にちよう"],
		[
			["日", "にち", false],
			["曜", "よう", true]
		], "1716"
	],
	["(曜|よう)[日|び]", "曜日", ["ようび"],
		[
			["曜", "よう", true],
			["日", "び", false]
		], "1717"
	],
	["[月|げつ](曜|よう)", "月曜", ["げつよう"],
		[
			["月", "げつ", false],
			["曜", "よう", true]
		], "1718"
	],
	["[木|もく](曜|よう)", "木曜", ["もくよう"],
		[
			["木", "もく", false],
			["曜", "よう", true]
		], "1719"
	],
	["[水|すい](曜|よう)", "水曜", ["すいよう"],
		[
			["水", "すい", false],
			["曜", "よう", true]
		], "1720"
	],
	["[火|か](曜|よう)", "火曜", ["かよう"],
		[
			["火", "か", false],
			["曜", "よう", true]
		], "1721"
	],
	["[金|きん](曜|よう)", "金曜", ["きんよう"],
		[
			["金", "きん", false],
			["曜", "よう", true]
		], "1722"
	],
	["[分|ぶん][数|すう]", "分数", ["ぶんすう"],
		[
			["分", "ぶん", false],
			["数", "すう", false]
		], -1
	],
	["[回|かい][数|すう]", "回数", ["かいすう"],
		[
			["回", "かい", false],
			["数", "すう", false]
		], -1
	],
	["[小|しょう][数|すう]", "小数", ["しょうすう"],
		[
			["小", "しょう", false],
			["数", "すう", false]
		], -1
	],
	["[数|かぞ]え*る", "数え", ["かぞえ"],
		[
			["数", "かぞ", false],
			["え", null, false]
		], -1
	],
	["[数|すう][学|がく]", "数学", ["すうがく"],
		[
			["数", "すう", false],
			["学", "がく", false]
		], -1
	],
	["[数|すう][字|じ]", "数字", ["すうじ"],
		[
			["数", "すう", false],
			["字", "じ", false]
		], -1
	],
	["(点|てん)[数|すう]", "点数", ["てんすう"],
		[
			["点", "てん", true],
			["数", "すう", false]
		], "1114"
	],
	["(算|さん)[数|すう]", "算数", ["さんすう"],
		[
			["算", "さん", true],
			["数", "すう", false]
		], "1406"
	],
	["[日|にっ][記|き]", "日記", ["にっき"],
		[
			["日", "にっ", false],
			["記", "き", false]
		], -1
	],
	["[記|き][入|にゅう]", "記入", ["きにゅう"],
		[
			["記", "き", false],
			["入", "にゅう", false]
		], -1
	],
	["[弟|おとうと]さん", "弟さん", ["おとうとさん"],
		[
			["弟", "おとうと", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["(兄|きょう)[弟|だい]", "兄弟", ["きょうだい"],
		[
			["兄", "きょう", true],
			["弟", "だい", false]
		], "1118"
	],
	["(南|なん)[北|ぼく]", "南北", ["なんぼく"],
		[
			["南", "なん", true],
			["北", "ぼく", false]
		], "1382"
	],
	["[正|しょう][午|ご]", "正午", ["しょうご"],
		[
			["正", "しょう", false],
			["午", "ご", false]
		], -1
	],
	["[牛|ぎゅう][肉|にく]", "牛肉", ["ぎゅうにく"],
		[
			["牛", "ぎゅう", false],
			["肉", "にく", false]
		], -1
	],
	["[中|ちゅう][心|しん]", "中心", ["ちゅうしん"],
		[
			["中", "ちゅう", false],
			["心", "しん", false]
		], -1
	],
	["[心|こころ][当|あ]たり", "心当たり", ["こころあたり"],
		[
			["心", "こころ", false],
			["当", "あ", false],
			["た", null, false],
			["り", null, false]
		], -1
	],
	["[心|しん][理|り]", "心理", ["しんり"],
		[
			["心", "しん", false],
			["理", "り", false]
		], -1
	],
	["[用|よう][心|じん]", "用心", ["ようじん"],
		[
			["用", "よう", false],
			["心", "じん", false]
		], -1
	],
	["{～}[点|てん]", "～点", ["てん"],
		[
			["～", null, false],
			["点", "てん", false]
		], -1
	],
	["[地|ち][点|てん]", "地点", ["ちてん"],
		[
			["地", "ち", false],
			["点", "てん", false]
		], -1
	],
	["[点|てん]", "点", ["てん"],
		[
			["点", "てん", false]
		], -1
	],
	["[点|てん][々|てん]", "点々", ["てんてん"],
		[
			["点", "てん", false],
			["々", "てん", false]
		], -1
	],
	["[点|つ]*く", "点", ["つ"],
		[
			["点", "つ", false]
		], -1
	],
	["[点|つ]ける", "点ける", ["つける"],
		[
			["点", "つ", false],
			["け", null, false],
			["る", null, false]
		], -1
	],
	["[点|てん][数|すう]", "点数", ["てんすう"],
		[
			["点", "てん", false],
			["数", "すう", false]
		], -1
	],
	["(弱|じゃく)[点|てん]", "弱点", ["じゃくてん"],
		[
			["弱", "じゃく", true],
			["点", "てん", false]
		], "1730"
	],
	["お[兄|にい]さん", "お兄さん", ["おにいさん"],
		[
			["お", null, false],
			["兄", "にい", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[兄|あに]", "兄", ["あに"],
		[
			["兄", "あに", false]
		], -1
	],
	["[兄|きょう][弟|だい]", "兄弟", ["きょうだい"],
		[
			["兄", "きょう", false],
			["弟", "だい", false]
		], -1
	],
	["{～}[教|きょう]", "～教", ["きょう"],
		[
			["～", null, false],
			["教", "きょう", false]
		], -1
	],
	["[教|おそ]わ*5", "教わ", ["おそわ"],
		[
			["教", "おそ", false],
			["わ", null, false]
		], -1
	],
	["[教|きょう](科|か)(書|しょ)", "教科書", ["きょうかしょ"],
		[
			["教", "きょう", false],
			["科", "か", true],
			["書", "しょ", true]
		], "1125"
	],
	["[下|した][書|が]き", "下書き", ["したがき"],
		[
			["下", "した", false],
			["書", "が", false],
			["き", null, false]
		], -1
	],
	["[書|しょ](道|どう)", "書道", ["しょどう"],
		[
			["書", "しょ", false],
			["道", "どう", true]
		], "1197"
	],
	["[書|しょ](店|てん)", "書店", ["しょてん"],
		[
			["書", "しょ", false],
			["店", "てん", true]
		], "1429"
	],
	["[教|きょう](科|か)[書|しょ]", "教科書", ["きょうかしょ"],
		[
			["教", "きょう", false],
			["科", "か", true],
			["書", "しょ", false]
		], "1546"
	],
	["(図|と)[書|しょ]", "図書", ["としょ"],
		[
			["図", "と", true],
			["書", "しょ", false]
		], "1559"
	],
	["(読|どく)[書|しょ]", "読書", ["どくしょ"],
		[
			["読", "どく", true],
			["書", "しょ", false]
		], "1630"
	],
	["(弟|で)[子|し]", "弟子", ["でし"],
		[
			["弟", "で", true],
			["子", "し", false]
		], "1766"
	],
	["(毛|け)[糸|いと]", "毛糸", ["けいと"],
		[
			["毛", "け", true],
			["糸", "いと", false]
		], "1771"
	],
	["[活|かつ][力|りょく]", "活力", ["かつりょく"],
		[
			["活", "かつ", false],
			["力", "りょく", false]
		], -1
	],
	["[活|かっ][気|き]", "活気", ["かっき"],
		[
			["活", "かっ", false],
			["気", "き", false]
		], -1
	],
	["[活|かつ][用|よう]", "活用", ["かつよう"],
		[
			["活", "かつ", false],
			["用", "よう", false]
		], -1
	],
	["[生|せい][活|かつ]", "生活", ["せいかつ"],
		[
			["生", "せい", false],
			["活", "かつ", false]
		], -1
	],
	["[活|かつ][字|じ]", "活字", ["かつじ"],
		[
			["活", "かつ", false],
			["字", "じ", false]
		], -1
	],
	["[原|はら]", "原", ["はら"],
		[
			["原", "はら", false]
		], -1
	],
	["[原|げん][理|り]", "原理", ["げんり"],
		[
			["原", "げん", false],
			["理", "り", false]
		], -1
	],
	["[家|か](族|ぞく)", "家族", ["かぞく"],
		[
			["家", "か", false],
			["族", "ぞく", true]
		], -1
	],
	["[金|きん](魚|ぎょ)", "金魚", ["きんぎょ"],
		[
			["金", "きん", false],
			["魚", "ぎょ", true]
		], "1786"
	],
	["[交|ま]ざ*5", "交ざ", ["まざ"],
		[
			["交", "ま", false],
			["ざ", null, false]
		], -1
	],
	["[交|ま]じ*5", "交じ", ["まじ"],
		[
			["交", "ま", false],
			["じ", null, false]
		], -1
	],
	["[交|ま]ぜ*る", "交ぜ", ["まぜ"],
		[
			["交", "ま", false],
			["ぜ", null, false]
		], -1
	],
	["[交|こう][通|つう]", "交通", ["こうつう"],
		[
			["交", "こう", false],
			["通", "つう", false]
		], -1
	],
	["[外|がい][交|こう]", "外交", ["がいこう"],
		[
			["外", "がい", false],
			["交", "こう", false]
		], -1
	],
	["[交|こう](番|ばん)", "交番", ["こうばん"],
		[
			["交", "こう", false],
			["番", "ばん", true]
		], "1391"
	],
	["[妹|いもうと]さん", "妹さん", ["いもうとさん"],
		[
			["妹", "いもうと", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[銀|ぎん][行|こう]", "銀行", ["ぎんこう"],
		[
			["銀", "ぎん", false],
			["行", "こう", false]
		], -1
	],
	["[元|もと]", "元", ["もと"],
		[
			["元", "もと", false]
		], -1
	],
	["[元|もと][々|もと]", "元々", ["もともと"],
		[
			["元", "もと", false],
			["々", "もと", false]
		], -1
	],
	["[元|がん][日|じつ]", "元日", ["がんじつ"],
		[
			["元", "がん", false],
			["日", "じつ", false]
		], -1
	],
	["[足|あし][元|もと]", "足元", ["あしもと"],
		[
			["足", "あし", false],
			["元", "もと", false]
		], -1
	],
	["お[姉|ねえ]さん", "お姉さん", ["おねえさん"],
		[
			["お", null, false],
			["姉", "ねえ", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[姉|あね]", "姉", ["あね"],
		[
			["姉", "あね", false]
		], -1
	],
	["[近|ちか][々|ぢか]", "近々", ["ちかぢか"],
		[
			["近", "ちか", false],
			["々", "ぢか", false]
		], -1
	],
	["[考|かんが]え", "考え", ["かんがえ"],
		[
			["考", "かんが", false],
			["え", null, false]
		], -1
	],
	["{～}[画|が]", "～画", ["が"],
		[
			["～", null, false],
			["画", "が", false]
		], -1
	],
	["[画|が]{～}", "画～", ["が"],
		[
			["画", "が", false],
			["～", null, false]
		], -1
	],
	["[画|が][家|か]", "画家", ["がか"],
		[
			["画", "が", false],
			["家", "か", false]
		], -1
	],
	["(絵|かい)[画|が]", "絵画", ["かいが"],
		[
			["絵", "かい", true],
			["画", "が", false]
		], "1714"
	],
	["[言|こと](葉|ば)", "言葉", ["ことば"],
		[
			["言", "こと", false],
			["葉", "ば", true]
		], -1
	],
	["[図|と][書|しょ](館|かん)", "図書館", ["としょかん"],
		[
			["図", "と", false],
			["書", "しょ", false],
			["館", "かん", true]
		], "2076"
	],
	["[大|たい](使|し)(館|かん)", "大使館", ["たいしかん"],
		[
			["大", "たい", false],
			["使", "し", true],
			["館", "かん", true]
		], "1592"
	],
	["[海|かい][外|がい]", "海外", ["かいがい"],
		[
			["海", "かい", false],
			["外", "がい", false]
		], -1
	],
	["[八百|やお](屋|や)", "八百屋", ["やおや"],
		[
			["八百", "やお", false],
			["屋", "や", true]
		], "2089"
	],
	["(屋|おく)[上|じょう]", "屋上", ["おくじょう"],
		[
			["屋", "おく", true],
			["上", "じょう", false]
		], "2090"
	],
	["[売|う]れ*る", "売れ", ["うれ"],
		[
			["売", "う", false],
			["れ", null, false]
		], -1
	],
	["[売|うり][上|あげ]", "売上", ["うりあげ"],
		[
			["売", "うり", false],
			["上", "あげ", false]
		], -1
	],
	["[売|うれ][行|ゆ]き", "売行き", ["うれゆき"],
		[
			["売", "うれ", false],
			["行", "ゆ", false],
			["き", null, false]
		], -1
	],
	["[売|う]り(切|き)れ", "売り切れ", ["うりきれ"],
		[
			["売", "う", false],
			["り", null, false],
			["切", "き", true],
			["れ", null, false]
		], "1353"
	],
	["[売|う]り(切|き)れる", "売り切れる", ["うりきれる"],
		[
			["売", "う", false],
			["り", null, false],
			["切", "き", true],
			["れ", null, false],
			["る", null, false]
		], "1354"
	],
	["[売|ばい](店|てん)", "売店", ["ばいてん"],
		[
			["売", "ばい", false],
			["店", "てん", true]
		], "1428"
	],
	["[売|ばい](買|ばい)", "売買", ["ばいばい"],
		[
			["売", "ばい", false],
			["買", "ばい", true]
		], "1529"
	],
	["[小|こ](麦|むぎ)", "小麦", ["こむぎ"],
		[
			["小", "こ", false],
			["麦", "むぎ", true]
		], "1825"
	],
	["[組|くみ]", "組", ["くみ"],
		[
			["組", "くみ", false]
		], -1
	],
	["[組|く]み[立|た]てる", "組み立てる", ["くみたてる"],
		[
			["組", "く", false],
			["み", null, false],
			["立", "た", false],
			["て", null, false],
			["る", null, false]
		], -1
	],
	["[組|く]*む", "組", ["く"],
		[
			["組", "く", false]
		], -1
	],
	["[組|くみ][合|あい]", "組合", ["くみあい"],
		[
			["組", "くみ", false],
			["合", "あい", false]
		], -1
	],
	["[組|くみ][合|あわ]せ", "組合せ", ["くみあわせ"],
		[
			["組", "くみ", false],
			["合", "あわ", false],
			["せ", null, false]
		], -1
	],
	["(番|ばん)[組|ぐみ]", "番組", ["ばんぐみ"],
		[
			["番", "ばん", true],
			["組", "ぐみ", false]
		], "1395"
	],
	["[事|こと]", "事", ["こと"],
		[
			["事", "こと", false]
		], -1
	],
	["[大|だい][事|じ]", "大事", ["だいじ"],
		[
			["大", "だい", false],
			["事", "じ", false]
		], -1
	],
	["[火|か][事|じ]", "火事", ["かじ"],
		[
			["火", "か", false],
			["事", "じ", false]
		], -1
	],
	["[用|よう][事|じ]", "用事", ["ようじ"],
		[
			["用", "よう", false],
			["事", "じ", false]
		], -1
	],
	["[食|しょく][事|じ]する", "食事する", ["しょくじする"],
		[
			["食", "しょく", false],
			["事", "じ", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["(仕|し)[事|ごと]", "仕事", ["しごと"],
		[
			["仕", "し", true],
			["事", "ごと", false]
		], "1854"
	],
	["[知|し]らせ", "知らせ", ["しらせ"],
		[
			["知", "し", false],
			["ら", null, false],
			["せ", null, false]
		], -1
	],
	["[知|ち][人|じん]", "知人", ["ちじん"],
		[
			["知", "ち", false],
			["人", "じん", false]
		], -1
	],
	["[知|しり][合|あ]い", "知合い", ["しりあい"],
		[
			["知", "しり", false],
			["合", "あ", false],
			["い", null, false]
		], -1
	],
	["[通|つう][知|ち]", "通知", ["つうち"],
		[
			["通", "つう", false],
			["知", "ち", false]
		], -1
	],
	["[出|しゅっ][発|ぱつ]", "出発", ["しゅっぱつ"],
		[
			["出", "しゅっ", false],
			["発", "ぱつ", false]
		], -1
	],
	["[発|はつ][音|おん]", "発音", ["はつおん"],
		[
			["発", "はつ", false],
			["音", "おん", false]
		], -1
	],
	["(去|きょ)[年|ねん]", "去年", ["きょねん"],
		[
			["去", "きょ", true],
			["年", "ねん", false]
		], -1
	],
	["[地|ち][下|か](鉄|てつ)", "地下鉄", ["ちかてつ"],
		[
			["地", "ち", false],
			["下", "か", false],
			["鉄", "てつ", true]
		], "2115"
	],
	["(汽|き)[車|しゃ]", "汽車", ["きしゃ"],
		[
			["汽", "き", true],
			["車", "しゃ", false]
		], "1838"
	],
	["(返|へん)[事|じ]", "返事", ["へんじ"],
		[
			["返", "へん", true],
			["事", "じ", false]
		], "2123"
	],
	["{～}[道|どう]", "～道", ["どう"],
		[
			["～", null, false],
			["道", "どう", false]
		], -1
	],
	["[回|まわ]り[道|みち]", "回り道", ["まわりみち"],
		[
			["回", "まわ", false],
			["り", null, false],
			["道", "みち", false]
		], -1
	],
	["[書|しょ][道|どう]", "書道", ["しょどう"],
		[
			["書", "しょ", false],
			["道", "どう", false]
		], -1
	],
	["[赤|せき][道|どう]", "赤道", ["せきどう"],
		[
			["赤", "せき", false],
			["道", "どう", false]
		], -1
	],
	["(歩|ほ)[道|どう]", "歩道", ["ほどう"],
		[
			["歩", "ほ", true],
			["道", "どう", false]
		], "1589"
	],
	["[人|じん](事|じ)", "人事", ["じんじ"],
		[
			["人", "じん", false],
			["事", "じ", true]
		], "1843"
	],
	["[行|ぎょう](事|じ)", "行事", ["ぎょうじ"],
		[
			["行", "ぎょう", false],
			["事", "じ", true]
		], "1844"
	],
	["[見|み](事|ごと)", "見事", ["みごと"],
		[
			["見", "み", false],
			["事", "ごと", true]
		], "1845"
	],
	["[出|で][来|き](事|ごと)", "出来事", ["できごと"],
		[
			["出", "で", false],
			["来", "き", false],
			["事", "ごと", true]
		], "1846"
	],
	["[家|か](事|じ)", "家事", ["かじ"],
		[
			["家", "か", false],
			["事", "じ", true]
		], "1847"
	],
	["[記|き](事|じ)", "記事", ["きじ"],
		[
			["記", "き", false],
			["事", "じ", true]
		], "1848"
	],
	["[知|ち](事|じ)", "知事", ["ちじ"],
		[
			["知", "ち", false],
			["事", "じ", true]
		], "1849"
	],
	["(発|はっ)[行|こう]", "発行", ["はっこう"],
		[
			["発", "はっ", true],
			["行", "こう", false]
		], "1864"
	],
	["(発|はっ)[見|けん]", "発見", ["はっけん"],
		[
			["発", "はっ", true],
			["見", "けん", false]
		], "1865"
	],
	["(発|はつ)[明|めい]", "発明", ["はつめい"],
		[
			["発", "はつ", true],
			["明", "めい", false]
		], "1866"
	],
	["(発|はつ)[売|ばい]", "発売", ["はつばい"],
		[
			["発", "はつ", true],
			["売", "ばい", false]
		], "1867"
	],
	["(発|はっ)[車|しゃ]", "発車", ["はっしゃ"],
		[
			["発", "はっ", true],
			["車", "しゃ", false]
		], "1869"
	],
	["[引|ひ]き[出|だ]し", "引き出し", ["ひきだし"],
		[
			["引", "ひ", false],
			["き", null, false],
			["出", "だ", false],
			["し", null, false]
		], -1
	],
	["[引|ひき][出|だ]*す", "引出", ["ひきだ"],
		[
			["引", "ひき", false],
			["出", "だ", false]
		], -1
	],
	["[引|ひき][分|わ]け", "引分け", ["ひきわけ"],
		[
			["引", "ひき", false],
			["分", "わ", false],
			["け", null, false]
		], -1
	],
	["[引|いん][力|りょく]", "引力", ["いんりょく"],
		[
			["引", "いん", false],
			["力", "りょく", false]
		], -1
	],
	["[引|いん][用|よう]", "引用", ["いんよう"],
		[
			["引", "いん", false],
			["用", "よう", false]
		], -1
	],
	["[強|ごう][引|いん]", "強引", ["ごういん"],
		[
			["強", "ごう", false],
			["引", "いん", false]
		], -1
	],
	["[長|なが][引|び]*く", "長引", ["ながび"],
		[
			["長", "なが", false],
			["引", "び", false]
		], -1
	],
	["[引|ひ]き(止|と)め*る", "引き止め", ["ひきとめ"],
		[
			["引", "ひ", false],
			["き", null, false],
			["止", "と", true],
			["め", null, false]
		], "1338"
	],
	["[引|ひき](算|ざん)", "引算", ["ひきざん"],
		[
			["引", "ひき", false],
			["算", "ざん", true]
		], "1405"
	],
	["[学|がく][部|ぶ]", "学部", ["がくぶ"],
		[
			["学", "がく", false],
			["部", "ぶ", false]
		], -1
	],
	["(全|ぜん)[部|ぶ]", "全部", ["ぜんぶ"],
		[
			["全", "ぜん", true],
			["部", "ぶ", false]
		], "1342"
	],
	["[部|へ](屋|や)", "部屋", ["へや"],
		[
			["部", "へ", false],
			["屋", "や", true]
		], "2091"
	],
	["[大|だい](好|す)き", "大好き", ["だいすき"],
		[
			["大", "だい", false],
			["好", "す", true],
			["き", null, false]
		], "2379"
	],
	["(対|たい)[立|りつ]", "対立", ["たいりつ"],
		[
			["対", "たい", true],
			["立", "りつ", false]
		], "1877"
	],
	["[半|はん]", "半", ["はん"],
		[
			["半", "はん", false]
		], -1
	],
	["[半|なか]ば", "半ば", ["なかば"],
		[
			["半", "なか", false],
			["ば", null, false]
		], -1
	],
	["[大|たい][半|はん]", "大半", ["たいはん"],
		[
			["大", "たい", false],
			["半", "はん", false]
		], -1
	],
	["(医|い)[者|しゃ]", "医者", ["いしゃ"],
		[
			["医", "い", true],
			["者", "しゃ", false]
		], "1840"
	],
	["[写|しゃ][真|しん]", "写真", ["しゃしん"],
		[
			["写", "しゃ", false],
			["真", "しん", false]
		], -1
	],
	["[大|だい](部|ぶ)[分|ぶん]", "大部分", ["だいぶぶん"],
		[
			["大", "だい", false],
			["部", "ぶ", true],
			["分", "ぶん", false]
		], "1883"
	],
	["[本|ほん](部|ぶ)", "本部", ["ほんぶ"],
		[
			["本", "ほん", false],
			["部", "ぶ", true]
		], "1884"
	],
	["(部|ぶ)[分|ぶん]", "部分", ["ぶぶん"],
		[
			["部", "ぶ", true],
			["分", "ぶん", false]
		], "1885"
	],
	["[外|がい](部|ぶ)", "外部", ["がいぶ"],
		[
			["外", "がい", false],
			["部", "ぶ", true]
		], "1886"
	],
	["(部|ぶ)[首|しゅ]", "部首", ["ぶしゅ"],
		[
			["部", "ぶ", true],
			["首", "しゅ", false]
		], "1887"
	],
	["[会|かい][計|けい]", "会計", ["かいけい"],
		[
			["会", "かい", false],
			["計", "けい", false]
		], -1
	],
	["[合|ごう][計|けい]", "合計", ["ごうけい"],
		[
			["合", "ごう", false],
			["計", "けい", false]
		], -1
	],
	["[計|けい]", "計", ["けい"],
		[
			["計", "けい", false]
		], -1
	],
	["[計|はか]*5", "計", ["はか"],
		[
			["計", "はか", false]
		], -1
	],
	["[計|けい](算|さん)", "計算", ["けいさん"],
		[
			["計", "けい", false],
			["算", "さん", true]
		], "1407"
	],
	["[工|こう][業|ぎょう]", "工業", ["こうぎょう"],
		[
			["工", "こう", false],
			["業", "ぎょう", false]
		], -1
	],
	["[前|ぜん](者|しゃ)", "前者", ["ぜんしゃ"],
		[
			["前", "ぜん", false],
			["者", "しゃ", true]
		], "1892"
	],
	["[後|こう](者|しゃ)", "後者", ["こうしゃ"],
		[
			["後", "こう", false],
			["者", "しゃ", true]
		], "1893"
	],
	["[学|がく](者|しゃ)", "学者", ["がくしゃ"],
		[
			["学", "がく", false],
			["者", "しゃ", true]
		], "1895"
	],
	["[作|さく](者|しゃ)", "作者", ["さくしゃ"],
		[
			["作", "さく", false],
			["者", "しゃ", true]
		], "1896"
	],
	["[記|き](者|しゃ)", "記者", ["きしゃ"],
		[
			["記", "き", false],
			["者", "しゃ", true]
		], "1897"
	],
	["(英|えい)[語|ご]", "英語", ["えいご"],
		[
			["英", "えい", true],
			["語", "ご", false]
		], "2400"
	],
	["[作|さ](業|ぎょう)", "作業", ["さぎょう"],
		[
			["作", "さ", false],
			["業", "ぎょう", true]
		], "1903"
	],
	["[休|きゅう](業|ぎょう)", "休業", ["きゅうぎょう"],
		[
			["休", "きゅう", false],
			["業", "ぎょう", true]
		], "1904"
	],
	["{～}[直|なお]す", "～直す", ["なおす"],
		[
			["～", null, false],
			["直", "なお", false],
			["す", null, false]
		], -1
	],
	["[正|しょう][直|じき]", "正直", ["しょうじき"],
		[
			["正", "しょう", false],
			["直", "じき", false]
		], -1
	],
	["[直|じき]", "直", ["じき"],
		[
			["直", "じき", false]
		], -1
	],
	["[直|なお]*す", "直", ["なお"],
		[
			["直", "なお", false]
		], -1
	],
	["[直|ただ]ちに", "直ちに", ["ただちに"],
		[
			["直", "ただ", false],
			["ち", null, false],
			["に", null, false]
		], -1
	],
	["[直|じか]に", "直に", ["じかに"],
		[
			["直", "じか", false],
			["に", null, false]
		], -1
	],
	["[直|ちょく][前|ぜん]", "直前", ["ちょくぜん"],
		[
			["直", "ちょく", false],
			["前", "ぜん", false]
		], -1
	],
	["[直|ちょく][後|ご]", "直後", ["ちょくご"],
		[
			["直", "ちょく", false],
			["後", "ご", false]
		], -1
	],
	["[直|ちょく][通|つう]", "直通", ["ちょくつう"],
		[
			["直", "ちょく", false],
			["通", "つう", false]
		], -1
	],
	["[見|み][直|なお]*す", "見直", ["みなお"],
		[
			["見", "み", false],
			["直", "なお", false]
		], -1
	],
	["[直|ちょく](線|せん)", "直線", ["ちょくせん"],
		[
			["直", "ちょく", false],
			["線", "せん", true]
		], "1436"
	],
	["[直|ちょっ](角|かく)", "直角", ["ちょっかく"],
		[
			["直", "ちょっ", false],
			["角", "かく", true]
		], "1695"
	],
	["(相|あい)[手|て]", "相手", ["あいて"],
		[
			["相", "あい", true],
			["手", "て", false]
		], "1909"
	],
	["(相|そう)[当|とう]", "相当", ["そうとう"],
		[
			["相", "そう", true],
			["当", "とう", false]
		], "1910"
	],
	["[首|しゅ](相|しょう)", "首相", ["しゅしょう"],
		[
			["首", "しゅ", false],
			["相", "しょう", true]
		], "1911"
	],
	["[一|いっ](定|てい)", "一定", ["いってい"],
		[
			["一", "いっ", false],
			["定", "てい", true]
		], "1913"
	],
	["(定|てい)[休|きゅう][日|び]", "定休日", ["ていきゅうび"],
		[
			["定", "てい", true],
			["休", "きゅう", false],
			["日", "び", false]
		], "1914"
	],
	["[東|とう][西|ざい]", "東西", ["とうざい"],
		[
			["東", "とう", false],
			["西", "ざい", false]
		], -1
	],
	["[店|てん][員|いん]", "店員", ["てんいん"],
		[
			["店", "てん", false],
			["員", "いん", false]
		], -1
	],
	["{～}[員|いん]", "～員", ["いん"],
		[
			["～", null, false],
			["員", "いん", false]
		], -1
	],
	["[会|かい](員|いん)", "会員", ["かいいん"],
		[
			["会", "かい", false],
			["員", "いん", true]
		], "1924"
	],
	["(開|かい)[会|かい]", "開会", ["かいかい"],
		[
			["開", "かい", true],
			["会", "かい", false]
		], "1929"
	],
	["(開|かい)[通|つう]", "開通", ["かいつう"],
		[
			["開", "かい", true],
			["通", "つう", false]
		], "1930"
	],
	["[台|だい]", "台", ["だい"],
		[
			["台", "だい", false]
		], -1
	],
	["[開|あ]け*る", "開け", ["あけ"],
		[
			["開", "あ", false],
			["け", null, false]
		], -1
	],
	["(問|と)い[合|あ]わせ", "問い合わせ", ["といあわせ"],
		[
			["問", "と", true],
			["い", null, false],
			["合", "あ", false],
			["わ", null, false],
			["せ", null, false]
		], "1937"
	],
	["[学|がく](問|もん)", "学問", ["がくもん"],
		[
			["学", "がく", false],
			["問", "もん", true]
		], "1938"
	],
	["[広|ひろ][々|びろ]", "広々", ["ひろびろ"],
		[
			["広", "ひろ", false],
			["々", "びろ", false]
		], -1
	],
	["[広|ひろ]が*5", "広が", ["ひろが"],
		[
			["広", "ひろ", false],
			["が", null, false]
		], -1
	],
	["[広|ひろ]げ*る", "広げ", ["ひろげ"],
		[
			["広", "ひろ", false],
			["げ", null, false]
		], -1
	],
	["[広|ひろ]さ", "広さ", ["ひろさ"],
		[
			["広", "ひろ", false],
			["さ", null, false]
		], -1
	],
	["[広|ひろ]め*る", "広め", ["ひろめ"],
		[
			["広", "ひろ", false],
			["め", null, false]
		], -1
	],
	["[広|ひろ][場|ば]", "広場", ["ひろば"],
		[
			["広", "ひろ", false],
			["場", "ば", false]
		], -1
	],
	["[問|もん](題|だい)", "問題", ["もんだい"],
		[
			["問", "もん", false],
			["題", "だい", true]
		], "1384"
	],
	["[西|せい](洋|よう)", "西洋", ["せいよう"],
		[
			["西", "せい", false],
			["洋", "よう", true]
		], "2180"
	],
	["(代|だい)[金|きん]", "代金", ["だいきん"],
		[
			["代", "だい", true],
			["金", "きん", false]
		], "1947"
	],
	["[年|ねん](代|だい)", "年代", ["ねんだい"],
		[
			["年", "ねん", false],
			["代", "だい", true]
		], "1948"
	],
	["(代|だい)[理|り]", "代理", ["だいり"],
		[
			["代", "だい", true],
			["理", "り", false]
		], "1949"
	],
	["[近|きん](代|だい)", "近代", ["きんだい"],
		[
			["近", "きん", false],
			["代", "だい", true]
		], "1950"
	],
	["(旅|りょ)[行|こう]する", "旅行する", ["りょこうする"],
		[
			["旅", "りょ", true],
			["行", "こう", false],
			["す", null, false],
			["る", null, false]
		], "2194"
	],
	["[電|でん][力|りょく]", "電力", ["でんりょく"],
		[
			["電", "でん", false],
			["力", "りょく", false]
		], -1
	],
	["[電|でん][子|し]", "電子", ["でんし"],
		[
			["電", "でん", false],
			["子", "し", false]
		], -1
	],
	["[電|でん](池|ち)", "電池", ["でんち"],
		[
			["電", "でん", false],
			["池", "ち", true]
		], "1700"
	],
	["(発|はつ)[電|でん]", "発電", ["はつでん"],
		[
			["発", "はつ", true],
			["電", "でん", false]
		], "1868"
	],
	["[代|か]わり", "代わり", ["かわり"],
		[
			["代", "か", false],
			["わ", null, false],
			["り", null, false]
		], -1
	],
	["[時|じ][代|だい]", "時代", ["じだい"],
		[
			["時", "じ", false],
			["代", "だい", false]
		], -1
	],
	["{～}[代|だい]", "～代", ["だい"],
		[
			["～", null, false],
			["代", "だい", false]
		], -1
	],
	["(実|じつ)[力|りょく]", "実力", ["じつりょく"],
		[
			["実", "じつ", true],
			["力", "りょく", false]
		], "1960"
	],
	["(実|じっ)[行|こう]", "実行", ["じっこう"],
		[
			["実", "じっ", true],
			["行", "こう", false]
		], "1961"
	],
	["(実|じつ)[用|よう]", "実用", ["じつよう"],
		[
			["実", "じつ", true],
			["用", "よう", false]
		], "1962"
	],
	["[口|こう](実|じつ)", "口実", ["こうじつ"],
		[
			["口", "こう", false],
			["実", "じつ", true]
		], "1963"
	],
	["(決|けっ)[心|しん]", "決心", ["けっしん"],
		[
			["決", "けっ", true],
			["心", "しん", false]
		], "1971"
	],
	["[多|た][少|しょう]", "多少", ["たしょう"],
		[
			["多", "た", false],
			["少", "しょう", false]
		], -1
	],
	["[少|しょう][々|しょう]", "少々", ["しょうしょう"],
		[
			["少", "しょう", false],
			["々", "しょう", false]
		], -1
	],
	["[少|すこ]しも", "少しも", ["すこしも"],
		[
			["少", "すこ", false],
			["し", null, false],
			["も", null, false]
		], -1
	],
	["[少|しょう][女|じょ]", "少女", ["しょうじょ"],
		[
			["少", "しょう", false],
			["女", "じょ", false]
		], -1
	],
	["[少|しょう][年|ねん]", "少年", ["しょうねん"],
		[
			["少", "しょう", false],
			["年", "ねん", false]
		], -1
	],
	["[青|せい][少|しょう][年|ねん]", "青少年", ["せいしょうねん"],
		[
			["青", "せい", false],
			["少", "しょう", false],
			["年", "ねん", false]
		], -1
	],
	["[自|じ](動|どう)", "自動", ["じどう"],
		[
			["自", "じ", false],
			["動", "どう", true]
		], "1973"
	],
	["[行|こう](動|どう)", "行動", ["こうどう"],
		[
			["行", "こう", false],
			["動", "どう", true]
		], "1974"
	],
	["(動|どう)[作|さ]", "動作", ["どうさ"],
		[
			["動", "どう", true],
			["作", "さ", false]
		], "1975"
	],
	["[活|かつ](動|どう)", "活動", ["かつどう"],
		[
			["活", "かつ", false],
			["動", "どう", true]
		], "1976"
	],
	["～様", "～様", ["さま", "さん"],
		[], null
	],
	["[人|じん][工|こう]", "人工", ["じんこう"],
		[
			["人", "じん", false],
			["工", "こう", false]
		], -1
	],
	["[大|だい][工|く]", "大工", ["だいく"],
		[
			["大", "だい", false],
			["工", "く", false]
		], -1
	],
	["[工|こう](事|じ)", "工事", ["こうじ"],
		[
			["工", "こう", false],
			["事", "じ", true]
		], "1850"
	],
	["[工|こう](員|いん)", "工員", ["こういん"],
		[
			["工", "こう", false],
			["員", "いん", true]
		], "1926"
	],
	["[決|き]ま*5", "決ま", ["きま"],
		[
			["決", "き", false],
			["ま", null, false]
		], -1
	],
	["[決|き]め*る", "決め", ["きめ"],
		[
			["決", "き", false],
			["め", null, false]
		], -1
	],
	["(全|ぜん)[力|りょく]", "全力", ["ぜんりょく"],
		[
			["全", "ぜん", true],
			["力", "りょく", false]
		], "1986"
	],
	["(全|ぜん)[国|こく]", "全国", ["ぜんこく"],
		[
			["全", "ぜん", true],
			["国", "こく", false]
		], "1988"
	],
	["(全|ぜん)[体|たい]", "全体", ["ぜんたい"],
		[
			["全", "ぜん", true],
			["体", "たい", false]
		], "1989"
	],
	["[国|こく][語|ご]", "国語", ["こくご"],
		[
			["国", "こく", false],
			["語", "ご", false]
		], -1
	],
	["[用|よう][語|ご]", "用語", ["ようご"],
		[
			["用", "よう", false],
			["語", "ご", false]
		], -1
	],
	["[言|げん][語|ご]", "言語", ["げんご"],
		[
			["言", "げん", false],
			["語", "ご", false]
		], -1
	],
	["[語|ご]", "語", ["ご"],
		[
			["語", "ご", false]
		], -1
	],
	["[語|かた]*5", "語", ["かた"],
		[
			["語", "かた", false]
		], -1
	],
	["[語|ご][学|がく]", "語学", ["ごがく"],
		[
			["語", "ご", false],
			["学", "がく", false]
		], -1
	],
	["[動|うご]*く", "動", ["うご"],
		[
			["動", "うご", false]
		], -1
	],
	["[自|じ][動|どう][車|しゃ]", "自動車", ["じどうしゃ"],
		[
			["自", "じ", false],
			["動", "どう", false],
			["車", "しゃ", false]
		], -1
	],
	["[動|どう](物|ぶつ)", "動物", ["どうぶつ"],
		[
			["動", "どう", false],
			["物", "ぶつ", true]
		], "1575"
	],
	["[動|どう](物|ぶつ)[園|えん]", "動物園", ["どうぶつえん"],
		[
			["動", "どう", false],
			["物", "ぶつ", true],
			["園", "えん", false]
		], "1576"
	],
	["(運|うん)[動|どう]する", "運動する", ["うんどうする"],
		[
			["運", "うん", true],
			["動", "どう", false],
			["す", null, false],
			["る", null, false]
		], "1658"
	],
	["[公|こう](表|ひょう)", "公表", ["こうひょう"],
		[
			["公", "こう", false],
			["表", "ひょう", true]
		], "1999"
	],
	["(調|ちょう)[子|し]", "調子", ["ちょうし"],
		[
			["調", "ちょう", true],
			["子", "し", false]
		], "2005"
	],
	["[強|きょう](調|ちょう)", "強調", ["きょうちょう"],
		[
			["強", "きょう", false],
			["調", "ちょう", true]
		], "2006"
	],
	["注ぐ", "注ぐ", ["そそぐ", "つぐ"],
		[], null
	],
	["[中|ちゅう][止|し]", "中止", ["ちゅうし"],
		[
			["中", "ちゅう", false],
			["止", "し", false]
		], -1
	],
	["[引|ひ]き[止|と]め*る", "引き止め", ["ひきとめ"],
		[
			["引", "ひ", false],
			["き", null, false],
			["止", "と", false],
			["め", null, false]
		], -1
	],
	["[止|よ]*す", "止", ["よ"],
		[
			["止", "よ", false]
		], -1
	],
	["[止|や]*む", "止", ["や"],
		[
			["止", "や", false]
		], -1
	],
	["[立|た]ち[止|ど]まる", "立ち止まる", ["たちどまる"],
		[
			["立", "た", false],
			["ち", null, false],
			["止", "ど", false],
			["ま", null, false],
			["る", null, false]
		], -1
	],
	["[全|ぜん][部|ぶ]", "全部", ["ぜんぶ"],
		[
			["全", "ぜん", false],
			["部", "ぶ", false]
		], -1
	],
	["(化|か)[学|がく]", "化学", ["かがく"],
		[
			["化", "か", true],
			["学", "がく", false]
		], "2012"
	],
	["[強|きょう](化|か)", "強化", ["きょうか"],
		[
			["強", "きょう", false],
			["化", "か", true]
		], "2013"
	],
	["[文|ぶん](化|か)", "文化", ["ぶんか"],
		[
			["文", "ぶん", false],
			["化", "か", true]
		], "2014"
	],
	["(主|しゅ)[人|じん]", "主人", ["しゅじん"],
		[
			["主", "しゅ", true],
			["人", "じん", false]
		], "2020"
	],
	["[家|や](主|ぬし)", "家主", ["やぬし"],
		[
			["家", "や", false],
			["主", "ぬし", true]
		], "2021"
	],
	["(主|しゅ)[語|ご]", "主語", ["しゅご"],
		[
			["主", "しゅ", true],
			["語", "ご", false]
		], "2022"
	],
	["[友|とも](達|だち)", "友達", ["ともだち"],
		[
			["友", "とも", false],
			["達", "だち", true]
		], "2490"
	],
	["{～}[切|き]れ", "～切れ", ["きれ"],
		[
			["～", null, false],
			["切", "き", false],
			["れ", null, false]
		], -1
	],
	["[切|き]れ", "切れ", ["きれ"],
		[
			["切", "き", false],
			["れ", null, false]
		], -1
	],
	["[切|き]れ*る", "切れ", ["きれ"],
		[
			["切", "き", false],
			["れ", null, false]
		], -1
	],
	["[売|う]り[切|き]れ", "売り切れ", ["うりきれ"],
		[
			["売", "う", false],
			["り", null, false],
			["切", "き", false],
			["れ", null, false]
		], -1
	],
	["[売|う]り[切|き]れる", "売り切れる", ["うりきれる"],
		[
			["売", "う", false],
			["り", null, false],
			["切", "き", false],
			["れ", null, false],
			["る", null, false]
		], -1
	],
	["[思|おも]いっ[切|き]り", "思いっ切り", ["おもいっきり"],
		[
			["思", "おも", false],
			["い", null, false],
			["っ", null, false],
			["切", "き", false],
			["り", null, false]
		], -1
	],
	["[思|おも]い[切|き]り", "思い切り", ["おもいきり"],
		[
			["思", "おも", false],
			["い", null, false],
			["切", "き", false],
			["り", null, false]
		], -1
	],
	["[調|しら]べ*る", "調べ", ["しらべ"],
		[
			["調", "しら", false],
			["べ", null, false]
		], -1
	],
	["[話|わ](題|だい)", "話題", ["わだい"],
		[
			["話", "わ", false],
			["題", "だい", true]
		], "2025"
	],
	["(題|だい)[名|めい]", "題名", ["だいめい"],
		[
			["題", "だい", true],
			["名", "めい", false]
		], "2026"
	],
	["(意|い)[外|がい]", "意外", ["いがい"],
		[
			["意", "い", true],
			["外", "がい", false]
		], "2030"
	],
	["[生|なま](意|い)[気|き]", "生意気", ["なまいき"],
		[
			["生", "なま", false],
			["意", "い", true],
			["気", "き", false]
		], "2031"
	],
	["(意|い)[思|し]", "意思", ["いし"],
		[
			["意", "い", true],
			["思", "し", false]
		], "2032"
	],
	["[食|く]*う", "食", ["く"],
		[
			["食", "く", false]
		], -1
	],
	["(昼|ちゅう)[食|しょく]", "昼食", ["ちゅうしょく"],
		[
			["昼", "ちゅう", true],
			["食", "しょく", false]
		], "1753"
	],
	["[食|しょく](事|じ)", "食事", ["しょくじ"],
		[
			["食", "しょく", false],
			["事", "じ", true]
		], "1851"
	],
	["[一|いち](度|ど)に", "一度に", ["いちどに"],
		[
			["一", "いち", false],
			["度", "ど", true],
			["に", null, false]
		], "2035"
	],
	["[年|ねん](度|ど)", "年度", ["ねんど"],
		[
			["年", "ねん", false],
			["度", "ど", true]
		], "2036"
	],
	["[高|こう](度|ど)", "高度", ["こうど"],
		[
			["高", "こう", false],
			["度", "ど", true]
		], "2037"
	],
	["他", "他", ["た", "ほか"],
		[], null
	],
	["[何|なん]{～}", "何～", ["なん"],
		[
			["何", "なん", false],
			["～", null, false]
		], -1
	],
	["[何|なに][々|なに]", "何々", ["なになに"],
		[
			["何", "なに", false],
			["々", "なに", false]
		], -1
	],
	["[何|なに]か", "何か", ["なにか"],
		[
			["何", "なに", false],
			["か", null, false]
		], -1
	],
	["[何|なん]で", "何で", ["なんで"],
		[
			["何", "なん", false],
			["で", null, false]
		], -1
	],
	["[何|なん]でも", "何でも", ["なんでも"],
		[
			["何", "なん", false],
			["で", null, false],
			["も", null, false]
		], -1
	],
	["[何|なん]とか", "何とか", ["なんとか"],
		[
			["何", "なん", false],
			["と", null, false],
			["か", null, false]
		], -1
	],
	["[何|なに][分|ぶん]", "何分", ["なにぶん"],
		[
			["何", "なに", false],
			["分", "ぶん", false]
		], -1
	],
	["[何時|いつ]か", "何時か", ["いつか"],
		[
			["何時", "いつ", false],
			["か", null, false]
		], -1
	],
	["[学|がっ](期|き)", "学期", ["がっき"],
		[
			["学", "がっ", false],
			["期", "き", true]
		], "2046"
	],
	["[時|じ](期|き)", "時期", ["じき"],
		[
			["時", "じ", false],
			["期", "き", true]
		], "2048"
	],
	["(期|き)[間|かん]", "期間", ["きかん"],
		[
			["期", "き", true],
			["間", "かん", false]
		], "2049"
	],
	["[長|ちょう](期|き)", "長期", ["ちょうき"],
		[
			["長", "ちょう", false],
			["期", "き", true]
		], "2050"
	],
	["[南|なん][北|ぼく]", "南北", ["なんぼく"],
		[
			["南", "なん", false],
			["北", "ぼく", false]
		], -1
	],
	["[南|なん][米|べい]", "南米", ["なんべい"],
		[
			["南", "なん", false],
			["米", "べい", false]
		], -1
	],
	["[問|もん][題|だい]", "問題", ["もんだい"],
		[
			["問", "もん", false],
			["題", "だい", false]
		], -1
	],
	["(持|も)ち[上|あ]げ*る", "持ち上げ", ["もちあげ"],
		[
			["持", "も", true],
			["ち", null, false],
			["上", "あ", false],
			["げ", null, false]
		], "2056"
	],
	["(取|と)り[上|あ]げ*る", "取り上げ", ["とりあげ"],
		[
			["取", "と", true],
			["り", null, false],
			["上", "あ", false],
			["げ", null, false]
		], "2058"
	],
	["(取|と)り[入|い]れ*る", "取り入れ", ["とりいれ"],
		[
			["取", "と", true],
			["り", null, false],
			["入", "い", false],
			["れ", null, false]
		], "2059"
	],
	["(取|と)り[出|だ]*す", "取り出", ["とりだ"],
		[
			["取", "と", true],
			["り", null, false],
			["出", "だ", false]
		], "2060"
	],
	["[書|かき](取|とり)", "書取", ["かきとり"],
		[
			["書", "かき", false],
			["取", "とり", true]
		], "2062"
	],
	["{～}[番|ばん][目|め]", "～番目", ["ばんめ"],
		[
			["～", null, false],
			["番", "ばん", false],
			["目", "め", false]
		], -1
	],
	["[交|こう][番|ばん]", "交番", ["こうばん"],
		[
			["交", "こう", false],
			["番", "ばん", false]
		], -1
	],
	["[当|とう][番|ばん]", "当番", ["とうばん"],
		[
			["当", "とう", false],
			["番", "ばん", false]
		], -1
	],
	["[番|ばん]", "番", ["ばん"],
		[
			["番", "ばん", false]
		], -1
	],
	["[番|ばん][地|ち]", "番地", ["ばんち"],
		[
			["番", "ばん", false],
			["地", "ち", false]
		], -1
	],
	["[番|ばん][組|ぐみ]", "番組", ["ばんぐみ"],
		[
			["番", "ばん", false],
			["組", "ぐみ", false]
		], -1
	],
	["[意|い][見|けん]", "意見", ["いけん"],
		[
			["意", "い", false],
			["見", "けん", false]
		], -1
	],
	["[用|よう][意|い]", "用意", ["ようい"],
		[
			["用", "よう", false],
			["意", "い", false]
		], -1
	],
	["[意|い](味|み)", "意味", ["いみ"],
		[
			["意", "い", false],
			["味", "み", true]
		], "1880"
	],
	["(注|ちゅう)[意|い]", "注意", ["ちゅうい"],
		[
			["注", "ちゅう", true],
			["意", "い", false]
		], "1993"
	],
	["(都|と)[会|かい]", "都会", ["とかい"],
		[
			["都", "と", true],
			["会", "かい", false]
		], "2069"
	],
	["(都|つ)[合|ごう]", "都合", ["つごう"],
		[
			["都", "つ", true],
			["合", "ごう", false]
		], "2070"
	],
	["(都|と)[市|し]", "都市", ["とし"],
		[
			["都", "と", true],
			["市", "し", false]
		], "2071"
	],
	["[首|しゅ](都|と)", "首都", ["しゅと"],
		[
			["首", "しゅ", false],
			["都", "と", true]
		], "2072"
	],
	["(都|と)[心|しん]", "都心", ["としん"],
		[
			["都", "と", true],
			["心", "しん", false]
		], "2073"
	],
	["[引|ひき][算|ざん]", "引算", ["ひきざん"],
		[
			["引", "ひき", false],
			["算", "ざん", false]
		], -1
	],
	["[算|さん][数|すう]", "算数", ["さんすう"],
		[
			["算", "さん", false],
			["数", "すう", false]
		], -1
	],
	["[計|けい][算|さん]", "計算", ["けいさん"],
		[
			["計", "けい", false],
			["算", "さん", false]
		], -1
	],
	["[一|いち][度|ど]", "一度", ["いちど"],
		[
			["一", "いち", false],
			["度", "ど", false]
		], -1
	],
	["[今|こん][度|ど]", "今度", ["こんど"],
		[
			["今", "こん", false],
			["度", "ど", false]
		], -1
	],
	["{～}[度|ど]", "～度", ["ど"],
		[
			["～", null, false],
			["度", "ど", false]
		], -1
	],
	["[楽|らく]", "楽", ["らく"],
		[
			["楽", "らく", false]
		], -1
	],
	["[楽|たのし]む", "楽む", ["たのしむ"],
		[
			["楽", "たのし", false],
			["む", null, false]
		], -1
	],
	["[公|こう](平|へい)", "公平", ["こうへい"],
		[
			["公", "こう", false],
			["平", "へい", true]
		], "2080"
	],
	["(平|へい)[日|じつ]", "平日", ["へいじつ"],
		[
			["平", "へい", true],
			["日", "じつ", false]
		], "2083"
	],
	["(平|へい)[気|き]", "平気", ["へいき"],
		[
			["平", "へい", true],
			["気", "き", false]
		], "2084"
	],
	["(平|へい)[野|や]", "平野", ["へいや"],
		[
			["平", "へい", true],
			["野", "や", false]
		], "2085"
	],
	["[水|すい](平|へい)", "水平", ["すいへい"],
		[
			["水", "すい", false],
			["平", "へい", true]
		], "2086"
	],
	["[地|ち](平|へい)(線|せん)", "地平線", ["ちへいせん"],
		[
			["地", "ち", false],
			["平", "へい", true],
			["線", "せん", true]
		], "1439"
	],
	["[水|すい](平|へい)(線|せん)", "水平線", ["すいへいせん"],
		[
			["水", "すい", false],
			["平", "へい", true],
			["線", "せん", true]
		], "1440"
	],
	["(世|よ)の[中|なか]", "世の中", ["よのなか"],
		[
			["世", "よ", true],
			["の", null, false],
			["中", "なか", false]
		], "2097"
	],
	["(世|せ)[間|けん]", "世間", ["せけん"],
		[
			["世", "せ", true],
			["間", "けん", false]
		], "2098"
	],
	["[中|ちゅう](世|せい)", "中世", ["ちゅうせい"],
		[
			["中", "ちゅう", false],
			["世", "せい", true]
		], "2099"
	],
	["[万|まん][一|いち]", "万一", ["まんいち"],
		[
			["万", "まん", false],
			["一", "いち", false]
		], -1
	],
	["[持|も]*つ", "持", ["も"],
		[
			["持", "も", false]
		], -1
	],
	["[気|き][持|も]ち", "気持ち", ["きもち"],
		[
			["気", "き", false],
			["持", "も", false],
			["ち", null, false]
		], -1
	],
	["[金|かね][持|も]ち", "金持ち", ["かねもち"],
		[
			["金", "かね", false],
			["持", "も", false],
			["ち", null, false]
		], -1
	],
	["[引|ひき](受|うけ)る", "引受る", ["ひきうける"],
		[
			["引", "ひき", false],
			["受", "うけ", true],
			["る", null, false]
		], "2105"
	],
	["[売|ばい][店|てん]", "売店", ["ばいてん"],
		[
			["売", "ばい", false],
			["店", "てん", false]
		], -1
	],
	["[書|しょ][店|てん]", "書店", ["しょてん"],
		[
			["書", "しょ", false],
			["店", "てん", false]
		], -1
	],
	["[取|と]*5", "取", ["と"],
		[
			["取", "と", false]
		], -1
	],
	["(区|く)[分|ぶん]", "区分", ["くぶん"],
		[
			["区", "く", true],
			["分", "ぶん", false]
		], "2108"
	],
	["[地|ち](区|く)", "地区", ["ちく"],
		[
			["地", "ち", false],
			["区", "く", true]
		], "2109"
	],
	["(区|く)[切|ぎ]*5", "区切", ["くぎ"],
		[
			["区", "く", true],
			["切", "ぎ", false]
		], "2110"
	],
	["[下|か][線|せん]", "下線", ["かせん"],
		[
			["下", "か", false],
			["線", "せん", false]
		], -1
	],
	["[内|ない][線|せん]", "内線", ["ないせん"],
		[
			["内", "ない", false],
			["線", "せん", false]
		], -1
	],
	["[直|ちょく][線|せん]", "直線", ["ちょくせん"],
		[
			["直", "ちょく", false],
			["線", "せん", false]
		], -1
	],
	["[線|せん]", "線", ["せん"],
		[
			["線", "せん", false]
		], -1
	],
	["(光|こう)[線|せん]", "光線", ["こうせん"],
		[
			["光", "こう", true],
			["線", "せん", false]
		], "1533"
	],
	["[地|ち](平|へい)[線|せん]", "地平線", ["ちへいせん"],
		[
			["地", "ち", false],
			["平", "へい", true],
			["線", "せん", false]
		], "2087"
	],
	["[水|すい](平|へい)[線|せん]", "水平線", ["すいへいせん"],
		[
			["水", "すい", false],
			["平", "へい", true],
			["線", "せん", false]
		], "2088"
	],
	["[前|ぜん](進|しん)", "前進", ["ぜんしん"],
		[
			["前", "ぜん", false],
			["進", "しん", true]
		], "2117"
	],
	["(進|しん)[学|がく]", "進学", ["しんがく"],
		[
			["進", "しん", true],
			["学", "がく", false]
		], "2120"
	],
	["[声|こえ]", "声", ["こえ"],
		[
			["声", "こえ", false]
		], -1
	],
	["[目|め](安|やす)", "目安", ["めやす"],
		[
			["目", "め", false],
			["安", "やす", true]
		], "2129"
	],
	["(安|あん)[心|しん]", "安心", ["あんしん"],
		[
			["安", "あん", true],
			["心", "しん", false]
		], "2130"
	],
	["[親|おや]", "親", ["おや"],
		[
			["親", "おや", false]
		], -1
	],
	["[親|した]しい", "親しい", ["したしい"],
		[
			["親", "した", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["(母|はは)[親|おや]", "母親", ["ははおや"],
		[
			["母", "はは", true],
			["親", "おや", false]
		], "1613"
	],
	["[親|しん](友|ゆう)", "親友", ["しんゆう"],
		[
			["親", "しん", false],
			["友", "ゆう", true]
		], "1641"
	],
	["(父|ちち)[親|おや]", "父親", ["ちちおや"],
		[
			["父", "ちち", true],
			["親", "おや", false]
		], "1665"
	],
	["[大|だい][学|がく](院|いん)", "大学院", ["だいがくいん"],
		[
			["大", "だい", false],
			["学", "がく", false],
			["院", "いん", true]
		], "2133"
	],
	["(勉|べん)[強|きょう]する", "勉強する", ["べんきょうする"],
		[
			["勉", "べん", true],
			["強", "きょう", false],
			["す", null, false],
			["る", null, false]
		], "2391"
	],
	["{～}[形|けい]", "～形", ["けい"],
		[
			["～", null, false],
			["形", "けい", false]
		], -1
	],
	["[人|にん][形|ぎょう]", "人形", ["にんぎょう"],
		[
			["人", "にん", false],
			["形", "ぎょう", false]
		], -1
	],
	["[形|かたち]", "形", ["かたち"],
		[
			["形", "かたち", false]
		], -1
	],
	["[正|せい][方|ほう][形|けい]", "正方形", ["せいほうけい"],
		[
			["正", "せい", false],
			["方", "ほう", false],
			["形", "けい", false]
		], -1
	],
	["[長|ちょう][方|ほう][形|けい]", "長方形", ["ちょうほうけい"],
		[
			["長", "ちょう", false],
			["方", "ほう", false],
			["形", "けい", false]
		], -1
	],
	["(図|ず)[形|けい]", "図形", ["ずけい"],
		[
			["図", "ず", true],
			["形", "けい", false]
		], "1558"
	],
	["[世|せ][話|わ]", "世話", ["せわ"],
		[
			["世", "せ", false],
			["話", "わ", false]
		], -1
	],
	["[世|せ](界|かい)", "世界", ["せかい"],
		[
			["世", "せ", false],
			["界", "かい", true]
		], "1507"
	],
	["[中|なか](指|ゆび)", "中指", ["なかゆび"],
		[
			["中", "なか", false],
			["指", "ゆび", true]
		], "2135"
	],
	["[小|こ](指|ゆび)", "小指", ["こゆび"],
		[
			["小", "こ", false],
			["指", "ゆび", true]
		], "2136"
	],
	["[目|め](指|ざ)*す", "目指", ["めざ"],
		[
			["目", "め", false],
			["指", "ざ", true]
		], "2140"
	],
	["[親|おや](指|ゆび)", "親指", ["おやゆび"],
		[
			["親", "おや", false],
			["指", "ゆび", true]
		], "2141"
	],
	["{～}[頭|とう]", "～頭", ["とう"],
		[
			["～", null, false],
			["頭", "とう", false]
		], -1
	],
	["[先|せん][頭|とう]", "先頭", ["せんとう"],
		[
			["先", "せん", false],
			["頭", "とう", false]
		], -1
	],
	["[受|う]け*る", "受け", ["うけ"],
		[
			["受", "う", false],
			["け", null, false]
		], -1
	],
	["{～}[毎|ごと]", "～毎", ["ごと"],
		[
			["～", null, false],
			["毎", "ごと", false]
		], -1
	],
	["[毎|まい]{～}", "毎～", ["まい"],
		[
			["毎", "まい", false],
			["～", null, false]
		], -1
	],
	["[毎|まい](度|ど)", "毎度", ["まいど"],
		[
			["毎", "まい", false],
			["度", "ど", true]
		], "2038"
	],
	["(予|よ)[算|さん]", "予算", ["よさん"],
		[
			["予", "よ", true],
			["算", "さん", false]
		], "2149"
	],
	["[正|せい][門|もん]", "正門", ["せいもん"],
		[
			["正", "せい", false],
			["門", "もん", false]
		], -1
	],
	["[門|もん]", "門", ["もん"],
		[
			["門", "もん", false]
		], -1
	],
	["[方|ほう](向|こう)", "方向", ["ほうこう"],
		[
			["方", "ほう", false],
			["向", "こう", true]
		], "2157"
	],
	["(勝|かっ)[手|て]に", "勝手に", ["かってに"],
		[
			["勝", "かっ", true],
			["手", "て", false],
			["に", null, false]
		], "2165"
	],
	["[回|かい][答|とう]", "回答", ["かいとう"],
		[
			["回", "かい", false],
			["答", "とう", false]
		], -1
	],
	["[答|こたえ]", "答", ["こたえ"],
		[
			["答", "こたえ", false]
		], -1
	],
	["(問|もん)[答|どう]", "問答", ["もんどう"],
		[
			["問", "もん", true],
			["答", "どう", false]
		], "1939"
	],
	["[地|じ](面|めん)", "地面", ["じめん"],
		[
			["地", "じ", false],
			["面", "めん", true]
		], "2167"
	],
	["[場|ば](面|めん)", "場面", ["ばめん"],
		[
			["場", "ば", false],
			["面", "めん", true]
		], "2168"
	],
	["[方|ほう](面|めん)", "方面", ["ほうめん"],
		[
			["方", "ほう", false],
			["面", "めん", true]
		], "2169"
	],
	["[正|しょう](面|めん)", "正面", ["しょうめん"],
		[
			["正", "しょう", false],
			["面", "めん", true]
		], "2170"
	],
	["[水|すい](面|めん)", "水面", ["すいめん"],
		[
			["水", "すい", false],
			["面", "めん", true]
		], "2173"
	],
	["{～}[夜|や]", "～夜", ["や"],
		[
			["～", null, false],
			["夜", "や", false]
		], -1
	],
	["[夜|よ][中|なか]", "夜中", ["よなか"],
		[
			["夜", "よ", false],
			["中", "なか", false]
		], -1
	],
	["[夜|よ][明|あ]け", "夜明け", ["よあけ"],
		[
			["夜", "よ", false],
			["明", "あ", false],
			["け", null, false]
		], -1
	],
	["[夜|や][行|こう]", "夜行", ["やこう"],
		[
			["夜", "や", false],
			["行", "こう", false]
		], -1
	],
	["[夜|や][間|かん]", "夜間", ["やかん"],
		[
			["夜", "や", false],
			["間", "かん", false]
		], -1
	],
	["[安|あん][心|しん]する", "安心する", ["あんしんする"],
		[
			["安", "あん", false],
			["心", "しん", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["[帰|かえ]*す", "帰", ["かえ"],
		[
			["帰", "かえ", false]
		], -1
	],
	["[日|ひ][帰|がえ]り", "日帰り", ["ひがえり"],
		[
			["日", "ひ", false],
			["帰", "がえ", false],
			["り", null, false]
		], -1
	],
	["[入|にゅう][院|いん]", "入院", ["にゅういん"],
		[
			["入", "にゅう", false],
			["院", "いん", false]
		], -1
	],
	["(病|びょう)[院|いん]", "病院", ["びょういん"],
		[
			["病", "びょう", true],
			["院", "いん", false]
		], "1789"
	],
	["[体|たい](重|じゅう)", "体重", ["たいじゅう"],
		[
			["体", "たい", false],
			["重", "じゅう", true]
		], "2184"
	],
	["(重|じゅう)[体|たい]", "重体", ["じゅうたい"],
		[
			["重", "じゅう", true],
			["体", "たい", false]
		], "2189"
	],
	["(重|じゅう)[力|りょく]", "重力", ["じゅうりょく"],
		[
			["重", "じゅう", true],
			["力", "りょく", false]
		], "2190"
	],
	["(重|じゅう)[大|だい]", "重大", ["じゅうだい"],
		[
			["重", "じゅう", true],
			["大", "だい", false]
		], "2191"
	],
	["(重|じゅう)[点|てん]", "重点", ["じゅうてん"],
		[
			["重", "じゅう", true],
			["点", "てん", false]
		], "2192"
	],
	["[谷|たに]", "谷", ["たに"],
		[
			["谷", "たに", false]
		], -1
	],
	["(集|しゅう)[中|ちゅう]", "集中", ["しゅうちゅう"],
		[
			["集", "しゅう", true],
			["中", "ちゅう", false]
		], "2200"
	],
	["(集|しゅう)[会|かい]", "集会", ["しゅうかい"],
		[
			["集", "しゅう", true],
			["会", "かい", false]
		], "2201"
	],
	["(集|しゅう)[合|ごう]", "集合", ["しゅうごう"],
		[
			["集", "しゅう", true],
			["合", "ごう", false]
		], "2202"
	],
	["(集|しゅう)[金|きん]", "集金", ["しゅうきん"],
		[
			["集", "しゅう", true],
			["金", "きん", false]
		], "2203"
	],
	["[中|ちゅう][古|こ]", "中古", ["ちゅうこ"],
		[
			["中", "ちゅう", false],
			["古", "こ", false]
		], -1
	],
	["[古|ふる]{～}", "古～", ["ふる"],
		[
			["古", "ふる", false],
			["～", null, false]
		], -1
	],
	["[古|ふる](里|さと)", "古里", ["ふるさと"],
		[
			["古", "ふる", false],
			["里", "さと", true]
		], "1749"
	],
	["[世|せ][界|かい]", "世界", ["せかい"],
		[
			["世", "せ", false],
			["界", "かい", false]
		], -1
	],
	["[人|じん](物|ぶつ)", "人物", ["じんぶつ"],
		[
			["人", "じん", false],
			["物", "ぶつ", true]
		], "2207"
	],
	["[作|さく](物|もつ)", "作物", ["さくもつ"],
		[
			["作", "さく", false],
			["物", "もつ", true]
		], "2208"
	],
	["[入|い]れ(物|もの)", "入れ物", ["いれもの"],
		[
			["入", "い", false],
			["れ", null, false],
			["物", "もの", true]
		], "2209"
	],
	["[名|めい](物|ぶつ)", "名物", ["めいぶつ"],
		[
			["名", "めい", false],
			["物", "ぶつ", true]
		], "2210"
	],
	["[書|しょ](物|もつ)", "書物", ["しょもつ"],
		[
			["書", "しょ", false],
			["物", "もつ", true]
		], "2212"
	],
	["[本|ほん](物|もの)", "本物", ["ほんもの"],
		[
			["本", "ほん", false],
			["物", "もの", true]
		], "2213"
	],
	["(物|ぶつ)[理|り]", "物理", ["ぶつり"],
		[
			["物", "ぶつ", true],
			["理", "り", false]
		], "2215"
	],
	["[生|い]き(物|もの)", "生き物", ["いきもの"],
		[
			["生", "い", false],
			["き", null, false],
			["物", "もの", true]
		], "2216"
	],
	["[生|せい](物|ぶつ)", "生物", ["せいぶつ"],
		[
			["生", "せい", false],
			["物", "ぶつ", true]
		], "2217"
	],
	["(物|もの)[語|がたり]", "物語", ["ものがたり"],
		[
			["物", "もの", true],
			["語", "がたり", false]
		], "2218"
	],
	["(物|もの)[語|がた]*5", "物語", ["ものがた"],
		[
			["物", "もの", true],
			["語", "がた", false]
		], "2219"
	],
	["[食|しょく](物|もつ)", "食物", ["しょくもつ"],
		[
			["食", "しょく", false],
			["物", "もつ", true]
		], "2220"
	],
	["(物|もの)[音|おと]", "物音", ["ものおと"],
		[
			["物", "もの", true],
			["音", "おと", false]
		], "2221"
	],
	["{～}[歌|か]", "～歌", ["か"],
		[
			["～", null, false],
			["歌", "か", false]
		], -1
	],
	["[歌|か][手|しゅ]", "歌手", ["かしゅ"],
		[
			["歌", "か", false],
			["手", "しゅ", false]
		], -1
	],
	["(使|し)[用|よう]", "使用", ["しよう"],
		[
			["使", "し", true],
			["用", "よう", false]
		], "2225"
	],
	["[大|たい](使|し)", "大使", ["たいし"],
		[
			["大", "たい", false],
			["使", "し", true]
		], "2226"
	],
	["[水|すい](泳|えい)", "水泳", ["すいえい"],
		[
			["水", "すい", false],
			["泳", "えい", true]
		], "2464"
	],
	["[名|めい](所|しょ)", "名所", ["めいしょ"],
		[
			["名", "めい", false],
			["所", "しょ", true]
		], "2229"
	],
	["[場|ば](所|しょ)", "場所", ["ばしょ"],
		[
			["場", "ば", false],
			["所", "しょ", true]
		], "2230"
	],
	["[長|ちょう](所|しょ)", "長所", ["ちょうしょ"],
		[
			["長", "ちょう", false],
			["所", "しょ", true]
		], "2232"
	],
	["[売|ばい][買|ばい]", "売買", ["ばいばい"],
		[
			["売", "ばい", false],
			["買", "ばい", false]
		], -1
	],
	["[目|もく](次|じ)", "目次", ["もくじ"],
		[
			["目", "もく", false],
			["次", "じ", true]
		], "2240"
	],
	["[光|ひかり]", "光", ["ひかり"],
		[
			["光", "ひかり", false]
		], -1
	],
	["[光|ひか]*5", "光", ["ひか"],
		[
			["光", "ひか", false]
		], -1
	],
	["[光|こう][線|せん]", "光線", ["こうせん"],
		[
			["光", "こう", false],
			["線", "せん", false]
		], -1
	],
	["[日|にっ][光|こう]", "日光", ["にっこう"],
		[
			["日", "にっ", false],
			["光", "こう", false]
		], -1
	],
	["[上|じょう](品|ひん)", "上品", ["じょうひん"],
		[
			["上", "じょう", false],
			["品", "ひん", true]
		], "2242"
	],
	["[下|げ](品|ひん)", "下品", ["げひん"],
		[
			["下", "げ", false],
			["品", "ひん", true]
		], "2243"
	],
	["[作|さく](品|ひん)", "作品", ["さくひん"],
		[
			["作", "さく", false],
			["品", "ひん", true]
		], "2244"
	],
	["[手|て](品|じな)", "手品", ["てじな"],
		[
			["手", "て", false],
			["品", "じな", true]
		], "2245"
	],
	["[日|にち][用|よう](品|ひん)", "日用品", ["にちようひん"],
		[
			["日", "にち", false],
			["用", "よう", false],
			["品", "ひん", true]
		], "2246"
	],
	["[食|しょく](品|ひん)", "食品", ["しょくひん"],
		[
			["食", "しょく", false],
			["品", "ひん", true]
		], "2248"
	],
	["{～}[科|か]", "～科", ["か"],
		[
			["～", null, false],
			["科", "か", false]
		], -1
	],
	["[人|じん][文|ぶん][科|か][学|がく]", "人文科学", ["じんぶんかがく"],
		[
			["人", "じん", false],
			["文", "ぶん", false],
			["科", "か", false],
			["学", "がく", false]
		], -1
	],
	["[内|ない][科|か]", "内科", ["ないか"],
		[
			["内", "ない", false],
			["科", "か", false]
		], -1
	],
	["[外|げ][科|か]", "外科", ["げか"],
		[
			["外", "げ", false],
			["科", "か", false]
		], -1
	],
	["[学|がっ][科|か]", "学科", ["がっか"],
		[
			["学", "がっ", false],
			["科", "か", false]
		], -1
	],
	["[教|きょう][科|か][書|しょ]", "教科書", ["きょうかしょ"],
		[
			["教", "きょう", false],
			["科", "か", false],
			["書", "しょ", false]
		], -1
	],
	["[理|り][科|か]", "理科", ["りか"],
		[
			["理", "り", false],
			["科", "か", false]
		], -1
	],
	["[社|しゃ][会|かい][科|か][学|がく]", "社会科学", ["しゃかいかがく"],
		[
			["社", "しゃ", false],
			["会", "かい", false],
			["科", "か", false],
			["学", "がく", false]
		], -1
	],
	["[科|か][学|がく]", "科学", ["かがく"],
		[
			["科", "か", false],
			["学", "がく", false]
		], -1
	],
	["[科|か][目|もく]", "科目", ["かもく"],
		[
			["科", "か", false],
			["目", "もく", false]
		], -1
	],
	["(死|し)[体|たい]", "死体", ["したい"],
		[
			["死", "し", true],
			["体", "たい", false]
		], "2252"
	],
	["[細|ほそ]い", "細い", ["ほそい"],
		[
			["細", "ほそ", false],
			["い", null, false]
		], -1
	],
	["[細|こま]かい", "細かい", ["こまかい"],
		[
			["細", "こま", false],
			["か", null, false],
			["い", null, false]
		], -1
	],
	["[駅|えき]", "駅", ["えき"],
		[
			["駅", "えき", false]
		], -1
	],
	["(感|かん)[心|しん]", "感心", ["かんしん"],
		[
			["感", "かん", true],
			["心", "しん", false]
		], "2270"
	],
	["[合|あい][図|ず]", "合図", ["あいず"],
		[
			["合", "あい", false],
			["図", "ず", false]
		], -1
	],
	["[図|ず]", "図", ["ず"],
		[
			["図", "ず", false]
		], -1
	],
	["[図|ず][形|けい]", "図形", ["ずけい"],
		[
			["図", "ず", false],
			["形", "けい", false]
		], -1
	],
	["[図|と][書|しょ]", "図書", ["としょ"],
		[
			["図", "と", false],
			["書", "しょ", false]
		], -1
	],
	["[図|ず](表|ひょう)", "図表", ["ずひょう"],
		[
			["図", "ず", false],
			["表", "ひょう", true]
		], "2000"
	],
	["(投|とう)[書|しょ]", "投書", ["とうしょ"],
		[
			["投", "とう", true],
			["書", "しょ", false]
		], "2274"
	],
	["[先|せん][々|せん][週|しゅう]", "先々週", ["せんせんしゅう"],
		[
			["先", "せん", false],
			["々", "せん", false],
			["週", "しゅう", false]
		], -1
	],
	["[週|しゅう]", "週", ["しゅう"],
		[
			["週", "しゅう", false]
		], -1
	],
	["[週|しゅう][間|かん]", "週間", ["しゅうかん"],
		[
			["週", "しゅう", false],
			["間", "かん", false]
		], -1
	],
	["(打|うち)[合|あわ]せ", "打合せ", ["うちあわせ"],
		[
			["打", "うち", true],
			["合", "あわ", false],
			["せ", null, false]
		], "2280"
	],
	["[原|げん](始|し)", "原始", ["げんし"],
		[
			["原", "げん", false],
			["始", "し", true]
		], "2287"
	],
	["[丸|まる]", "丸", ["まる"],
		[
			["丸", "まる", false]
		], -1
	],
	["[丸|まる]い", "丸い", ["まるい"],
		[
			["丸", "まる", false],
			["い", null, false]
		], -1
	],
	["[重|おも]い", "重い", ["おもい"],
		[
			["重", "おも", false],
			["い", null, false]
		], -1
	],
	["[半|はん](島|とう)", "半島", ["はんとう"],
		[
			["半", "はん", false],
			["島", "とう", true]
		], "2296"
	],
	["{～}[室|しつ]", "～室", ["しつ"],
		[
			["～", null, false],
			["室", "しつ", false]
		], -1
	],
	["[室|しつ]{～}", "室～", ["しつ"],
		[
			["室", "しつ", false],
			["～", null, false]
		], -1
	],
	["[集|あつ]ま*5", "集ま", ["あつま"],
		[
			["集", "あつ", false],
			["ま", null, false]
		], -1
	],
	["[集|あつ]め*る", "集め", ["あつめ"],
		[
			["集", "あつ", false],
			["め", null, false]
		], -1
	],
	["[動|どう][物|ぶつ]", "動物", ["どうぶつ"],
		[
			["動", "どう", false],
			["物", "ぶつ", false]
		], -1
	],
	["[動|どう][物|ぶつ][園|えん]", "動物園", ["どうぶつえん"],
		[
			["動", "どう", false],
			["物", "ぶつ", false],
			["園", "えん", false]
		], -1
	],
	["[物|もの]", "物", ["もの"],
		[
			["物", "もの", false]
		], -1
	],
	["[見|けん][物|ぶつ]", "見物", ["けんぶつ"],
		[
			["見", "けん", false],
			["物", "ぶつ", false]
		], -1
	],
	["[買|か]い[物|もの]", "買い物", ["かいもの"],
		[
			["買", "か", false],
			["い", null, false],
			["物", "もの", false]
		], -1
	],
	["[食|た]べ[物|もの]", "食べ物", ["たべもの"],
		[
			["食", "た", false],
			["べ", null, false],
			["物", "もの", false]
		], -1
	],
	["(品|しな)[物|もの]", "品物", ["しなもの"],
		[
			["品", "しな", true],
			["物", "もの", false]
		], "1615"
	],
	["(着|き)[物|もの]", "着物", ["きもの"],
		[
			["着", "き", true],
			["物", "もの", false]
		], "1776"
	],
	["(乗|の)り[物|もの]", "乗り物", ["のりもの"],
		[
			["乗", "の", true],
			["り", null, false],
			["物", "もの", false]
		], "1780"
	],
	["(飲|の)み[物|もの]", "飲み物", ["のみもの"],
		[
			["飲", "の", true],
			["み", null, false],
			["物", "もの", false]
		], "2338"
	],
	["[公|こう](式|しき)", "公式", ["こうしき"],
		[
			["公", "こう", false],
			["式", "しき", true]
		], "2311"
	],
	["[正|せい](式|しき)", "正式", ["せいしき"],
		[
			["正", "せい", false],
			["式", "しき", true]
		], "2313"
	],
	["[形|けい](式|しき)", "形式", ["けいしき"],
		[
			["形", "けい", false],
			["式", "しき", true]
		], "2314"
	],
	["{～}[歩|ほ]", "～歩", ["ほ"],
		[
			["～", null, false],
			["歩", "ほ", false]
		], -1
	],
	["[歩|ほ][道|どう]", "歩道", ["ほどう"],
		[
			["歩", "ほ", false],
			["道", "どう", false]
		], -1
	],
	["(進|しん)[歩|ぽ]", "進歩", ["しんぽ"],
		[
			["進", "しん", true],
			["歩", "ぽ", false]
		], "2121"
	],
	["[使|つか]*う", "使", ["つか"],
		[
			["使", "つか", false]
		], -1
	],
	["[大|たい][使|し](館|かん)", "大使館", ["たいしかん"],
		[
			["大", "たい", false],
			["使", "し", false],
			["館", "かん", true]
		], "2077"
	],
	["(漢|かん)[字|じ]", "漢字", ["かんじ"],
		[
			["漢", "かん", true],
			["字", "じ", false]
		], "2544"
	],
	["(終|しゅう)[点|てん]", "終点", ["しゅうてん"],
		[
			["終", "しゅう", true],
			["点", "てん", false]
		], "2330"
	],
	["{～}[風|ふう]", "～風", ["ふう"],
		[
			["～", null, false],
			["風", "ふう", false]
		], -1
	],
	["[風|ふう](船|せん)", "風船", ["ふうせん"],
		[
			["風", "ふう", false],
			["船", "せん", true]
		], "1680"
	],
	["[台|だい][所|どころ]", "台所", ["だいどころ"],
		[
			["台", "だい", false],
			["所", "どころ", false]
		], -1
	],
	["[所|ところ]", "所", ["ところ"],
		[
			["所", "ところ", false]
		], -1
	],
	["[近|きん][所|じょ]", "近所", ["きんじょ"],
		[
			["近", "きん", false],
			["所", "じょ", false]
		], -1
	],
	["(住|じゅう)[所|しょ]", "住所", ["じゅうしょ"],
		[
			["住", "じゅう", true],
			["所", "しょ", false]
		], "1670"
	],
	["～等", "～等", ["とう", "ら"],
		[], null
	],
	["{～}[紙|し]", "～紙", ["し"],
		[
			["～", null, false],
			["紙", "し", false]
		], -1
	],
	["(表|ひょう)[紙|し]", "表紙", ["ひょうし"],
		[
			["表", "ひょう", true],
			["紙", "し", false]
		], "2001"
	],
	["(真|ま)っ[先|さき]", "真っ先", ["まっさき"],
		[
			["真", "ま", true],
			["っ", null, false],
			["先", "さき", false]
		], "2349"
	],
	["(真|ま)っ[直|す]ぐ", "真っ直ぐ", ["まっすぐ"],
		[
			["真", "ま", true],
			["っ", null, false],
			["直", "す", false],
			["ぐ", null, false]
		], "2350"
	],
	["(真|まん)[中|なか]", "真中", ["まんなか"],
		[
			["真", "まん", true],
			["中", "なか", false]
		], "2351"
	],
	["(真|ま)(面|じ)[目|め]", "真面目", ["まじめ"],
		[
			["真", "ま", true],
			["面", "じ", true],
			["目", "め", false]
		], "2174"
	],
	["(真|しん)[空|くう]", "真空", ["しんくう"],
		[
			["真", "しん", true],
			["空", "くう", false]
		], "2353"
	],
	["(真|ま)っ[白|しろ]", "真っ白", ["まっしろ"],
		[
			["真", "ま", true],
			["っ", null, false],
			["白", "しろ", false]
		], "2354"
	],
	["(真|ま)っ[赤|か]", "真っ赤", ["まっか"],
		[
			["真", "ま", true],
			["っ", null, false],
			["赤", "か", false]
		], "2356"
	],
	["(真|ま)っ[青|さお]", "真っ青", ["まっさお"],
		[
			["真", "ま", true],
			["っ", null, false],
			["青", "さお", false]
		], "2357"
	],
	["[小母|おば]さん", "小母さん", ["おばさん"],
		[
			["小母", "おば", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[母|はは][親|おや]", "母親", ["ははおや"],
		[
			["母", "はは", false],
			["親", "おや", false]
		], -1
	],
	["(父|ふ)[母|ぼ]", "父母", ["ふぼ"],
		[
			["父", "ふ", true],
			["母", "ぼ", false]
		], "1664"
	],
	["[品|しな][物|もの]", "品物", ["しなもの"],
		[
			["品", "しな", false],
			["物", "もの", false]
		], -1
	],
	["[一|いち](流|りゅう)", "一流", ["いちりゅう"],
		[
			["一", "いち", false],
			["流", "りゅう", true]
		], "2361"
	],
	["[交|こう](流|りゅう)", "交流", ["こうりゅう"],
		[
			["交", "こう", false],
			["流", "りゅう", true]
		], "2362"
	],
	["[合|ごう](流|りゅう)", "合流", ["ごうりゅう"],
		[
			["合", "ごう", false],
			["流", "りゅう", true]
		], "2363"
	],
	["(流|りゅう)[行|こう]", "流行", ["りゅうこう"],
		[
			["流", "りゅう", true],
			["行", "こう", false]
		], "2367"
	],
	["[直|ちょく](流|りゅう)", "直流", ["ちょくりゅう"],
		[
			["直", "ちょく", false],
			["流", "りゅう", true]
		], "2369"
	],
	["[電|でん](流|りゅう)", "電流", ["でんりゅう"],
		[
			["電", "でん", false],
			["流", "りゅう", true]
		], "2370"
	],
	["[黒|くろ]", "黒", ["くろ"],
		[
			["黒", "くろ", false]
		], -1
	],
	["[死|し]ぬ", "死ぬ", ["しぬ"],
		[
			["死", "し", false],
			["ぬ", null, false]
		], -1
	],
	["(真|ま)っ[黒|くろ]", "真っ黒", ["まっくろ"],
		[
			["真", "ま", true],
			["っ", null, false],
			["黒", "くろ", false]
		], "2355"
	],
	["[戸|と]", "戸", ["と"],
		[
			["戸", "と", false]
		], -1
	],
	["[雨|あま][戸|ど]", "雨戸", ["あまど"],
		[
			["雨", "あま", false],
			["戸", "ど", false]
		], -1
	],
	["[地|ち](球|きゅう)", "地球", ["ちきゅう"],
		[
			["地", "ち", false],
			["球", "きゅう", true]
		], "2393"
	],
	["[電|でん](球|きゅう)", "電球", ["でんきゅう"],
		[
			["電", "でん", false],
			["球", "きゅう", true]
		], "2394"
	],
	["[読|よ]み", "読み", ["よみ"],
		[
			["読", "よ", false],
			["み", null, false]
		], -1
	],
	["[読|どく][書|しょ]", "読書", ["どくしょ"],
		[
			["読", "どく", false],
			["書", "しょ", false]
		], -1
	],
	["{～}[色|しょく]", "～色", ["しょく"],
		[
			["～", null, false],
			["色", "しょく", false]
		], -1
	],
	["(茶|ちゃ)[色|いろ]い", "茶色い", ["ちゃいろい"],
		[
			["茶", "ちゃ", true],
			["色", "いろ", false],
			["い", null, false]
		], "1757"
	],
	["(黄|き)[色|いろ]", "黄色", ["きいろ"],
		[
			["黄", "き", true],
			["色", "いろ", false]
		], "1795"
	],
	["(黄|き)[色|いろ]い", "黄色い", ["きいろい"],
		[
			["黄", "き", true],
			["色", "いろ", false],
			["い", null, false]
		], "1796"
	],
	["[見|み](送|おく)り", "見送り", ["みおくり"],
		[
			["見", "み", false],
			["送", "おく", true],
			["り", null, false]
		], "2404"
	],
	["[見|み](送|おく)*5", "見送", ["みおく"],
		[
			["見", "み", false],
			["送", "おく", true]
		], "2405"
	],
	["(役|やく)[人|にん]", "役人", ["やくにん"],
		[
			["役", "やく", true],
			["人", "にん", false]
		], "2409"
	],
	["(役|やく)[目|め]", "役目", ["やくめ"],
		[
			["役", "やく", true],
			["目", "め", false]
		], "2411"
	],
	["[友|とも]", "友", ["とも"],
		[
			["友", "とも", false]
		], -1
	],
	["[友|ゆう][人|じん]", "友人", ["ゆうじん"],
		[
			["友", "ゆう", false],
			["人", "じん", false]
		], -1
	],
	["[親|しん][友|ゆう]", "親友", ["しんゆう"],
		[
			["親", "しん", false],
			["友", "ゆう", false]
		], -1
	],
	["[始|はじ]ま*5", "始ま", ["はじま"],
		[
			["始", "はじ", false],
			["ま", null, false]
		], -1
	],
	["[始|はじ]め*る", "始め", ["はじめ"],
		[
			["始", "はじ", false],
			["め", null, false]
		], -1
	],
	["[中|なか](身|み)", "中身", ["なかみ"],
		[
			["中", "なか", false],
			["身", "み", true]
		], "2416"
	],
	["[出|しゅっ](身|しん)", "出身", ["しゅっしん"],
		[
			["出", "しゅっ", false],
			["身", "しん", true]
		], "2418"
	],
	["[心|しん](身|しん)", "心身", ["しんしん"],
		[
			["心", "しん", false],
			["身", "しん", true]
		], "2419"
	],
	["[自|じ](身|しん)", "自身", ["じしん"],
		[
			["自", "じ", false],
			["身", "しん", true]
		], "2420"
	],
	["(身|しん)[体|たい]", "身体", ["しんたい"],
		[
			["身", "しん", true],
			["体", "たい", false]
		], "2422"
	],
	["(身|み)[分|ぶん]", "身分", ["みぶん"],
		[
			["身", "み", true],
			["分", "ぶん", false]
		], "2423"
	],
	["(身|しん)[長|ちょう]", "身長", ["しんちょう"],
		[
			["身", "しん", true],
			["長", "ちょう", false]
		], "2424"
	],
	["[理|り](由|ゆう)", "理由", ["りゆう"],
		[
			["理", "り", false],
			["由", "ゆう", true]
		], "2427"
	],
	["[自|じ](由|ゆう)", "自由", ["じゆう"],
		[
			["自", "じ", false],
			["由", "ゆう", true]
		], "2428"
	],
	["{～}[園|えん]", "～園", ["えん"],
		[
			["～", null, false],
			["園", "えん", false]
		], -1
	],
	["[回|かい](転|てん)", "回転", ["かいてん"],
		[
			["回", "かい", false],
			["転", "てん", true]
		], "2433"
	],
	["[生|せい](徒|と)", "生徒", ["せいと"],
		[
			["生", "せい", false],
			["徒", "と", true]
		], "2814"
	],
	["[馬|うま]", "馬", ["うま"],
		[
			["馬", "うま", false]
		], -1
	],
	["[運|はこ]*ぶ", "運", ["はこ"],
		[
			["運", "はこ", false]
		], -1
	],
	["[運|うん][動|どう]する", "運動する", ["うんどうする"],
		[
			["運", "うん", false],
			["動", "どう", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["[運|うん](転|てん)する", "運転する", ["うんてんする"],
		[
			["運", "うん", false],
			["転", "てん", true],
			["す", null, false],
			["る", null, false]
		], "1733"
	],
	["[運|うん](転|てん)[手|しゅ]", "運転手", ["うんてんしゅ"],
		[
			["運", "うん", false],
			["転", "てん", true],
			["手", "しゅ", false]
		], "1734"
	],
	["(神|じん)[社|じゃ]", "神社", ["じんじゃ"],
		[
			["神", "じん", true],
			["社", "じゃ", false]
		], "2451"
	],
	["(神|しん)[話|わ]", "神話", ["しんわ"],
		[
			["神", "しん", true],
			["話", "わ", false]
		], "2452"
	],
	["[小父|おじ]さん", "小父さん", ["おじさん"],
		[
			["小父", "おじ", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[父|ふ][母|ぼ]", "父母", ["ふぼ"],
		[
			["父", "ふ", false],
			["母", "ぼ", false]
		], -1
	],
	["[父|ちち][親|おや]", "父親", ["ちちおや"],
		[
			["父", "ちち", false],
			["親", "おや", false]
		], -1
	],
	["[終|お]わり", "終わり", ["おわり"],
		[
			["終", "お", false],
			["わ", null, false],
			["り", null, false]
		], -1
	],
	["[終|お]わ*5", "終わ", ["おわ"],
		[
			["終", "お", false],
			["わ", null, false]
		], -1
	],
	["[心|しん](配|ぱい)", "心配", ["しんぱい"],
		[
			["心", "しん", false],
			["配", "ぱい", true]
		], "2456"
	],
	["[気|け](配|はい)", "気配", ["けはい"],
		[
			["気", "け", false],
			["配", "はい", true]
		], "2457"
	],
	["[住|じゅう][所|しょ]", "住所", ["じゅうしょ"],
		[
			["住", "じゅう", false],
			["所", "しょ", false]
		], -1
	],
	["[飲|の]*む", "飲", ["の"],
		[
			["飲", "の", false]
		], -1
	],
	["[飲|の]み(物|もの)", "飲み物", ["のみもの"],
		[
			["飲", "の", false],
			["み", null, false],
			["物", "もの", true]
		], -1
	],
	["[顔|かお]", "顔", ["かお"],
		[
			["顔", "かお", false]
		], -1
	],
	["(以|い)[上|じょう]", "以上", ["いじょう"],
		[
			["以", "い", true],
			["上", "じょう", false]
		], "2656"
	],
	["(以|い)[下|か]", "以下", ["いか"],
		[
			["以", "い", true],
			["下", "か", false]
		], "2657"
	],
	["(以|い)[内|ない]", "以内", ["いない"],
		[
			["以", "い", true],
			["内", "ない", false]
		], "2658"
	],
	["[体|たい](育|いく)", "体育", ["たいいく"],
		[
			["体", "たい", false],
			["育", "いく", true]
		], "2468"
	],
	["{～}[船|せん]", "～船", ["せん"],
		[
			["～", null, false],
			["船", "せん", false]
		], -1
	],
	["[船|ふね]", "船", ["ふね"],
		[
			["船", "ふね", false]
		], -1
	],
	["[風|ふう][船|せん]", "風船", ["ふうせん"],
		[
			["風", "ふう", false],
			["船", "せん", false]
		], -1
	],
	["[真|ま]ん[中|なか]", "真ん中", ["まんなか"],
		[
			["真", "ま", false],
			["ん", null, false],
			["中", "なか", false]
		], -1
	],
	["[水|みず](着|ぎ)", "水着", ["みずぎ"],
		[
			["水", "みず", false],
			["着", "ぎ", true]
		], "2477"
	],
	["{～}[羽|わ]", "～羽", ["わ"],
		[
			["～", null, false],
			["羽", "わ", false]
		], -1
	],
	["[羽|はね]", "羽", ["はね"],
		[
			["羽", "はね", false]
		], -1
	],
	["(乗|じょう)[車|しゃ]", "乗車", ["じょうしゃ"],
		[
			["乗", "じょう", true],
			["車", "しゃ", false]
		], "2488"
	],
	["[岩|いわ]", "岩", ["いわ"],
		[
			["岩", "いわ", false]
		], -1
	],
	["[思|し](想|そう)", "思想", ["しそう"],
		[
			["思", "し", false],
			["想", "そう", true]
		], "2492"
	],
	["[理|り](想|そう)", "理想", ["りそう"],
		[
			["理", "り", false],
			["想", "そう", true]
		], "2494"
	],
	["[空|くう](想|そう)", "空想", ["くうそう"],
		[
			["空", "くう", false],
			["想", "そう", true]
		], "2496"
	],
	["[三|さん][角|かく]", "三角", ["さんかく"],
		[
			["三", "さん", false],
			["角", "かく", false]
		], -1
	],
	["[四|よ]つ[角|かど]", "四つ角", ["よつかど"],
		[
			["四", "よ", false],
			["つ", null, false],
			["角", "かど", false]
		], -1
	],
	["[四|し][角|かく]", "四角", ["しかく"],
		[
			["四", "し", false],
			["角", "かく", false]
		], -1
	],
	["[四|し][角|かく]い", "四角い", ["しかくい"],
		[
			["四", "し", false],
			["角", "かく", false],
			["い", null, false]
		], -1
	],
	["[方|ほう][角|がく]", "方角", ["ほうがく"],
		[
			["方", "ほう", false],
			["角", "がく", false]
		], -1
	],
	["[直|ちょっ][角|かく]", "直角", ["ちょっかく"],
		[
			["直", "ちょっ", false],
			["角", "かく", false]
		], -1
	],
	["[角|かく](度|ど)", "角度", ["かくど"],
		[
			["角", "かく", false],
			["度", "ど", true]
		], "2039"
	],
	["(農|のう)[家|か]", "農家", ["のうか"],
		[
			["農", "のう", true],
			["家", "か", false]
		], "2506"
	],
	["(農|のう)[村|そん]", "農村", ["のうそん"],
		[
			["農", "のう", true],
			["村", "そん", false]
		], "2507"
	],
	["[池|いけ]", "池", ["いけ"],
		[
			["池", "いけ", false]
		], -1
	],
	["[電|でん][池|ち]", "電池", ["でんち"],
		[
			["電", "でん", false],
			["池", "ち", false]
		], -1
	],
	["[星|ほし]", "星", ["ほし"],
		[
			["星", "ほし", false]
		], -1
	],
	["(待|ま)ち[合|あ]わせる", "待ち合わせる", ["まちあわせる"],
		[
			["待", "ま", true],
			["ち", null, false],
			["合", "あ", false],
			["わ", null, false],
			["せ", null, false],
			["る", null, false]
		], "2531"
	],
	["(待|まち)[合|あい][室|しつ]", "待合室", ["まちあいしつ"],
		[
			["待", "まち", true],
			["合", "あい", false],
			["室", "しつ", false]
		], "2533"
	],
	["{～}[寺|じ]", "～寺", ["じ"],
		[
			["～", null, false],
			["寺", "じ", false]
		], -1
	],
	["[寺|てら]", "寺", ["てら"],
		[
			["寺", "てら", false]
		], -1
	],
	["[寺|じ](院|いん)", "寺院", ["じいん"],
		[
			["寺", "じ", false],
			["院", "いん", true]
		], "2134"
	],
	["[急|きゅう]", "急", ["きゅう"],
		[
			["急", "きゅう", false]
		], -1
	],
	["[急|いそ]*ぐ", "急", ["いそ"],
		[
			["急", "いそ", false]
		], -1
	],
	["[急|きゅう][行|こう]", "急行", ["きゅうこう"],
		[
			["急", "きゅう", false],
			["行", "こう", false]
		], -1
	],
	["[遠|えん][足|そく]", "遠足", ["えんそく"],
		[
			["遠", "えん", false],
			["足", "そく", false]
		], -1
	],
	["[送|おく]*5", "送", ["おく"],
		[
			["送", "おく", false]
		], -1
	],
	["(助|じょ)[手|しゅ]", "助手", ["じょしゅ"],
		[
			["助", "じょ", true],
			["手", "しゅ", false]
		], "2541"
	],
	["[絵|え]", "絵", ["え"],
		[
			["絵", "え", false]
		], -1
	],
	["[絵|かい][画|が]", "絵画", ["かいが"],
		[
			["絵", "かい", false],
			["画", "が", false]
		], -1
	],
	["[土|ど][曜|よう]", "土曜", ["どよう"],
		[
			["土", "ど", false],
			["曜", "よう", false]
		], -1
	],
	["[日|にち][曜|よう]", "日曜", ["にちよう"],
		[
			["日", "にち", false],
			["曜", "よう", false]
		], -1
	],
	["[曜|よう][日|び]", "曜日", ["ようび"],
		[
			["曜", "よう", false],
			["日", "び", false]
		], -1
	],
	["[月|げつ][曜|よう]", "月曜", ["げつよう"],
		[
			["月", "げつ", false],
			["曜", "よう", false]
		], -1
	],
	["[木|もく][曜|よう]", "木曜", ["もくよう"],
		[
			["木", "もく", false],
			["曜", "よう", false]
		], -1
	],
	["[水|すい][曜|よう]", "水曜", ["すいよう"],
		[
			["水", "すい", false],
			["曜", "よう", false]
		], -1
	],
	["[火|か][曜|よう]", "火曜", ["かよう"],
		[
			["火", "か", false],
			["曜", "よう", false]
		], -1
	],
	["[金|きん][曜|よう]", "金曜", ["きんよう"],
		[
			["金", "きん", false],
			["曜", "よう", false]
		], -1
	],
	["(商|しょう)[人|にん]", "商人", ["しょうにん"],
		[
			["商", "しょう", true],
			["人", "にん", false]
		], "2549"
	],
	["(商|しょう)[売|ばい]", "商売", ["しょうばい"],
		[
			["商", "しょう", true],
			["売", "ばい", false]
		], "2551"
	],
	["(商|しょう)[店|てん]", "商店", ["しょうてん"],
		[
			["商", "しょう", true],
			["店", "てん", false]
		], "2552"
	],
	["(商|しょう)[社|しゃ]", "商社", ["しょうしゃ"],
		[
			["商", "しょう", true],
			["社", "しゃ", false]
		], "2554"
	],
	["(利|り)[用|よう]", "利用", ["りよう"],
		[
			["利", "り", true],
			["用", "よう", false]
		], "2736"
	],
	["(葉|は)[書|がき]", "葉書", ["はがき"],
		[
			["葉", "は", true],
			["書", "がき", false]
		], "2556"
	],
	["[言|こと](葉|ば)", "言葉", ["ことば"],
		[
			["言", "こと", false],
			["葉", "ば", true]
		], "2557"
	],
	["[弱|じゃく][点|てん]", "弱点", ["じゃくてん"],
		[
			["弱", "じゃく", false],
			["点", "てん", false]
		], -1
	],
	["[万|まん][年|ねん](筆|ひつ)", "万年筆", ["まんねんひつ"],
		[
			["万", "まん", false],
			["年", "ねん", false],
			["筆", "ひつ", true]
		], -1
	],
	["[自|じ][転|てん][車|しゃ]", "自転車", ["じてんしゃ"],
		[
			["自", "じ", false],
			["転", "てん", false],
			["車", "しゃ", false]
		], -1
	],
	["[運|うん][転|てん]する", "運転する", ["うんてんする"],
		[
			["運", "うん", false],
			["転", "てん", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["[運|うん][転|てん][手|しゅ]", "運転手", ["うんてんしゅ"],
		[
			["運", "うん", false],
			["転", "てん", false],
			["手", "しゅ", false]
		], -1
	],
	["[食|しょく](堂|どう)", "食堂", ["しょくどう"],
		[
			["食", "しょく", false],
			["堂", "どう", true]
		], "2928"
	],
	["[晴|は]れ", "晴れ", ["はれ"],
		[
			["晴", "は", false],
			["れ", null, false]
		], -1
	],
	["[晴|は]れ*る", "晴れ", ["はれ"],
		[
			["晴", "は", false],
			["れ", null, false]
		], -1
	],
	["[研|けん](究|きゅう)", "研究", ["けんきゅう"],
		[
			["研", "けん", false],
			["究", "きゅう", true]
		], "1758"
	],
	["[研|けん](究|きゅう)[室|しつ]", "研究室", ["けんきゅうしつ"],
		[
			["研", "けん", false],
			["究", "きゅう", true],
			["室", "しつ", false]
		], "1759"
	],
	["(仕|し)[上|あ]が*5", "仕上が", ["しあが"],
		[
			["仕", "し", true],
			["上", "あ", false],
			["が", null, false]
		], "2570"
	],
	["[消|き]え*る", "消え", ["きえ"],
		[
			["消", "き", false],
			["え", null, false]
		], -1
	],
	["[消|け]*す", "消", ["け"],
		[
			["消", "け", false]
		], -1
	],
	["{～}[気|ぎ](味|み)", "～気味", ["ぎみ"],
		[
			["～", null, false],
			["気", "ぎ", false],
			["味", "み", true]
		], "2577"
	],
	["[中|なか](味|み)", "中味", ["なかみ"],
		[
			["中", "なか", false],
			["味", "み", true]
		], "2578"
	],
	["(味|み)[方|かた]", "味方", ["みかた"],
		[
			["味", "み", true],
			["方", "かた", false]
		], "2580"
	],
	["[地|じ](味|み)", "地味", ["じみ"],
		[
			["地", "じ", false],
			["味", "み", true]
		], "2581"
	],
	["[正|しょう](味|み)", "正味", ["しょうみ"],
		[
			["正", "しょう", false],
			["味", "み", true]
		], "2582"
	],
	["[気|き](味|み)", "気味", ["きみ"],
		[
			["気", "き", false],
			["味", "み", true]
		], "2583"
	],
	["[古|ふる][里|さと]", "古里", ["ふるさと"],
		[
			["古", "ふる", false],
			["里", "さと", false]
		], -1
	],
	["(写|しゃ)[生|せい]", "写生", ["しゃせい"],
		[
			["写", "しゃ", true],
			["生", "せい", false]
		], "2597"
	],
	["(特|とっ)[急|きゅう]", "特急", ["とっきゅう"],
		[
			["特", "とっ", true],
			["急", "きゅう", false]
		], "2776"
	],
	["お[昼|ひる]", "お昼", ["おひる"],
		[
			["お", null, false],
			["昼", "ひる", false]
		], -1
	],
	["[昼|ちゅう][食|しょく]", "昼食", ["ちゅうしょく"],
		[
			["昼", "ちゅう", false],
			["食", "しょく", false]
		], -1
	],
	["[大|たい](変|へん)", "大変", ["たいへん"],
		[
			["大", "たい", false],
			["変", "へん", true]
		], "2789"
	],
	["(美|び)[人|じん]", "美人", ["びじん"],
		[
			["美", "び", true],
			["人", "じん", false]
		], "2603"
	],
	["[茶|ちゃ]", "茶", ["ちゃ"],
		[
			["茶", "ちゃ", false]
		], -1
	],
	["[茶|ちゃ][色|いろ]い", "茶色い", ["ちゃいろい"],
		[
			["茶", "ちゃ", false],
			["色", "いろ", false],
			["い", null, false]
		], -1
	],
	["[研|けん][究|きゅう]", "研究", ["けんきゅう"],
		[
			["研", "けん", false],
			["究", "きゅう", false]
		], -1
	],
	["[研|けん][究|きゅう][室|しつ]", "研究室", ["けんきゅうしつ"],
		[
			["研", "けん", false],
			["究", "きゅう", false],
			["室", "しつ", false]
		], -1
	],
	["[人|じん](命|めい)", "人命", ["じんめい"],
		[
			["人", "じん", false],
			["命", "めい", true]
		], "2606"
	],
	["[生|せい](命|めい)", "生命", ["せいめい"],
		[
			["生", "せい", false],
			["命", "めい", true]
		], "2610"
	],
	["[雪|ゆき]", "雪", ["ゆき"],
		[
			["雪", "ゆき", false]
		], -1
	],
	["(整|せい)[数|すう]", "整数", ["せいすう"],
		[
			["整", "せい", true],
			["数", "すう", false]
		], "2620"
	],
	["(整|せい)[理|り]", "整理", ["せいり"],
		[
			["整", "せい", true],
			["理", "り", false]
		], "2621"
	],
	["[弟|おとうと]", "弟", ["おとうと"],
		[
			["弟", "おとうと", false]
		], -1
	],
	["[弟|で][子|し]", "弟子", ["でし"],
		[
			["弟", "で", false],
			["子", "し", false]
		], -1
	],
	["[起|お]き*る", "起き", ["おき"],
		[
			["起", "お", false],
			["き", null, false]
		], -1
	],
	["[起|お]こ*す", "起こ", ["おこ"],
		[
			["起", "お", false],
			["こ", null, false]
		], -1
	],
	["(横|よこ)[切|ぎ]*5", "横切", ["よこぎ"],
		[
			["横", "よこ", true],
			["切", "ぎ", false]
		], "2629"
	],
	["[毛|け]", "毛", ["け"],
		[
			["毛", "け", false]
		], -1
	],
	["[毛|け][糸|いと]", "毛糸", ["けいと"],
		[
			["毛", "け", false],
			["糸", "いと", false]
		], -1
	],
	["[上|うわ][着|ぎ]", "上着", ["うわぎ"],
		[
			["上", "うわ", false],
			["着", "ぎ", false]
		], -1
	],
	["[下|した][着|ぎ]", "下着", ["したぎ"],
		[
			["下", "した", false],
			["着", "ぎ", false]
		], -1
	],
	["[着|つ]*く", "着", ["つ"],
		[
			["着", "つ", false]
		], -1
	],
	["[着|き]*る", "着", ["き"],
		[
			["着", "き", false]
		], -1
	],
	["[着|き][物|もの]", "着物", ["きもの"],
		[
			["着", "き", false],
			["物", "もの", false]
		], -1
	],
	["(深|しん)[夜|や]", "深夜", ["しんや"],
		[
			["深", "しん", true],
			["夜", "や", false]
		], "2635"
	],
	["(無|む)[理|り]", "無理", ["むり"],
		[
			["無", "む", true],
			["理", "り", false]
		], "2817"
	],
	["[牛|うし]", "牛", ["うし"],
		[
			["牛", "うし", false]
		], -1
	],
	["[乗|の]り[物|もの]", "乗り物", ["のりもの"],
		[
			["乗", "の", false],
			["り", null, false],
			["物", "もの", false]
		], -1
	],
	["[乗|の]*5", "乗", ["の"],
		[
			["乗", "の", false]
		], -1
	],
	["(申|もう)し[上|あ]げ*る", "申し上げ", ["もうしあげ"],
		[
			["申", "もう", true],
			["し", null, false],
			["上", "あ", false],
			["げ", null, false]
		], "2638"
	],
	["[同|どう](様|よう)", "同様", ["どうよう"],
		[
			["同", "どう", false],
			["様", "よう", true]
		], "2640"
	],
	["(様|よう)[子|す]", "様子", ["ようす"],
		[
			["様", "よう", true],
			["子", "す", false]
		], "2643"
	],
	["[王|おう](様|さま)", "王様", ["おうさま"],
		[
			["王", "おう", false],
			["様", "さま", true]
		], "2645"
	],
	["[金|きん][魚|ぎょ]", "金魚", ["きんぎょ"],
		[
			["金", "きん", false],
			["魚", "ぎょ", false]
		], -1
	],
	["[空|くう](港|こう)", "空港", ["くうこう"],
		[
			["空", "くう", false],
			["港", "こう", true]
		], "2649"
	],
	["[病|びょう][気|き]", "病気", ["びょうき"],
		[
			["病", "びょう", false],
			["気", "き", false]
		], -1
	],
	["[病|びょう][院|いん]", "病院", ["びょういん"],
		[
			["病", "びょう", false],
			["院", "いん", false]
		], -1
	],
	["(料|りょう)[理|り]", "料理", ["りょうり"],
		[
			["料", "りょう", true],
			["理", "り", false]
		], "2839"
	],
	["[食|しょく](料|りょう)[品|ひん]", "食料品", ["しょくりょうひん"],
		[
			["食", "しょく", false],
			["料", "りょう", true],
			["品", "ひん", false]
		], "2840"
	],
	["(注|ちゅう)[文|もん]", "注文", ["ちゅうもん"],
		[
			["注", "ちゅう", true],
			["文", "もん", false]
		], "2652"
	],
	["(注|ちゅう)[目|もく]", "注目", ["ちゅうもく"],
		[
			["注", "ちゅう", true],
			["目", "もく", false]
		], "2653"
	],
	["(建|たて)[物|もの]", "建物", ["たてもの"],
		[
			["建", "たて", true],
			["物", "もの", false]
		], "2844"
	],
	["[黄|き][色|いろ]", "黄色", ["きいろ"],
		[
			["黄", "き", false],
			["色", "いろ", false]
		], -1
	],
	["[黄|き][色|いろ]い", "黄色い", ["きいろい"],
		[
			["黄", "き", false],
			["色", "いろ", false],
			["い", null, false]
		], -1
	],
	["[線|せん](路|ろ)", "線路", ["せんろ"],
		[
			["線", "せん", false],
			["路", "ろ", true]
		], "2663"
	],
	["[通|つう](路|ろ)", "通路", ["つうろ"],
		[
			["通", "つう", false],
			["路", "ろ", true]
		], "2664"
	],
	["[道|どう](路|ろ)", "道路", ["どうろ"],
		[
			["道", "どう", false],
			["路", "ろ", true]
		], "2665"
	],
	["[雲|くも]", "雲", ["くも"],
		[
			["雲", "くも", false]
		], -1
	],
	["(悪|わる)[口|くち]", "悪口", ["わるくち"],
		[
			["悪", "わる", true],
			["口", "くち", false]
		], "2666"
	],
	["(意|い)[地|じ](悪|わる)", "意地悪", ["いじわる"],
		[
			["意", "い", true],
			["地", "じ", false],
			["悪", "わる", true]
		], "2033"
	],
	["[鳴|な]*く", "鳴", ["な"],
		[
			["鳴", "な", false]
		], -1
	],
	["[鳴|な]ら*す", "鳴ら", ["なら"],
		[
			["鳴", "な", false],
			["ら", null, false]
		], -1
	],
	["[鳴|な]*5", "鳴", ["な"],
		[
			["鳴", "な", false]
		], -1
	],
	["[待|ま]*つ", "待", ["ま"],
		[
			["待", "ま", false]
		], -1
	],
	["[小|しょう](説|せつ)", "小説", ["しょうせつ"],
		[
			["小", "しょう", false],
			["説", "せつ", true]
		], "2863"
	],
	["(説|せつ)[明|めい]", "説明", ["せつめい"],
		[
			["説", "せつ", true],
			["明", "めい", false]
		], "2864"
	],
	["(他|た)[人|にん]", "他人", ["たにん"],
		[
			["他", "た", true],
			["人", "にん", false]
		], "2670"
	],
	["[家|か][族|ぞく]", "家族", ["かぞく"],
		[
			["家", "か", false],
			["族", "ぞく", false]
		], -1
	],
	["[海|かい](岸|がん)", "海岸", ["かいがん"],
		[
			["海", "かい", false],
			["岸", "がん", true]
		], "2680"
	],
	["[妹|いもうと]", "妹", ["いもうと"],
		[
			["妹", "いもうと", false]
		], -1
	],
	["(姉|し)[妹|まい]", "姉妹", ["しまい"],
		[
			["姉", "し", true],
			["妹", "まい", false]
		], "1815"
	],
	["(客|きゃく)[間|ま]", "客間", ["きゃくま"],
		[
			["客", "きゃく", true],
			["間", "ま", false]
		], "2684"
	],
	["[姉|し][妹|まい]", "姉妹", ["しまい"],
		[
			["姉", "し", false],
			["妹", "まい", false]
		], -1
	],
	["[出|しゅっ](席|せき)", "出席", ["しゅっせき"],
		[
			["出", "しゅっ", false],
			["席", "せき", true]
		], "2883"
	],
	["(登|とう)[場|じょう]", "登場", ["とうじょう"],
		[
			["登", "とう", true],
			["場", "じょう", false]
		], "2692"
	],
	["(登|と)[山|ざん]", "登山", ["とざん"],
		[
			["登", "と", true],
			["山", "ざん", false]
		], "2693"
	],
	["(漢|かん)[字|じ]", "漢字", ["かんじ"],
		[
			["漢", "かん", true],
			["字", "じ", false]
		], -1
	],
	["[早|さっ](速|そく)", "早速", ["さっそく"],
		[
			["早", "さっ", false],
			["速", "そく", true]
		], "2695"
	],
	["[時|じ](速|そく)", "時速", ["じそく"],
		[
			["時", "じ", false],
			["速", "そく", true]
		], "2696"
	],
	["(速|そく)[力|りょく]", "速力", ["そくりょく"],
		[
			["速", "そく", true],
			["力", "りょく", false]
		], "2698"
	],
	["[高|こう](速|そく)", "高速", ["こうそく"],
		[
			["高", "こう", false],
			["速", "そく", true]
		], "2700"
	],
	["[中|ちゅう](央|おう)", "中央", ["ちゅうおう"],
		[
			["中", "ちゅう", false],
			["央", "おう", true]
		], "2708"
	],
	["[小|こ][麦|むぎ]", "小麦", ["こむぎ"],
		[
			["小", "こ", false],
			["麦", "むぎ", false]
		], -1
	],
	["(試|し)[合|あい]", "試合", ["しあい"],
		[
			["試", "し", true],
			["合", "あい", false]
		], "2896"
	],
	["[番|ばん](号|ごう)", "番号", ["ばんごう"],
		[
			["番", "ばん", false],
			["号", "ごう", true]
		], "2711"
	],
	["[記|き](号|ごう)", "記号", ["きごう"],
		[
			["記", "き", false],
			["号", "ごう", true]
		], "2712"
	],
	["[刀|かたな]", "刀", ["かたな"],
		[
			["刀", "かたな", false]
		], -1
	],
	["[会|かい](館|かん)", "会館", ["かいかん"],
		[
			["会", "かい", false],
			["館", "かん", true]
		], "2716"
	],
	["[落|お]ち*る", "落ち", ["おち"],
		[
			["落", "お", false],
			["ち", null, false]
		], -1
	],
	["[落|お]と*す", "落と", ["おと"],
		[
			["落", "お", false],
			["と", null, false]
		], -1
	],
	["[家|か](屋|おく)", "家屋", ["かおく"],
		[
			["家", "か", false],
			["屋", "おく", true]
		], "2719"
	],
	["[小|こ](屋|や)", "小屋", ["こや"],
		[
			["小", "こ", false],
			["屋", "や", true]
		], "2720"
	],
	["(屋|おく)[外|がい]", "屋外", ["おくがい"],
		[
			["屋", "おく", true],
			["外", "がい", false]
		], "2721"
	],
	["[店|みせ](屋|や)", "店屋", ["みせや"],
		[
			["店", "みせ", false],
			["屋", "や", true]
		], "2722"
	],
	["[羽|は](根|ね)", "羽根", ["はね"],
		[
			["羽", "は", false],
			["根", "ね", true]
		], "2729"
	],
	["[汽|き][車|しゃ]", "汽車", ["きしゃ"],
		[
			["汽", "き", false],
			["車", "しゃ", false]
		], -1
	],
	["[医|い][学|がく]", "医学", ["いがく"],
		[
			["医", "い", false],
			["学", "がく", false]
		], -1
	],
	["[医|い][者|しゃ]", "医者", ["いしゃ"],
		[
			["医", "い", false],
			["者", "しゃ", false]
		], -1
	],
	["(苦|く)[心|しん]", "苦心", ["くしん"],
		[
			["苦", "く", true],
			["心", "しん", false]
		], "2734"
	],
	["(苦|にが)[手|て]", "苦手", ["にがて"],
		[
			["苦", "にが", true],
			["手", "て", false]
		], "2735"
	],
	["[人|じん][事|じ]", "人事", ["じんじ"],
		[
			["人", "じん", false],
			["事", "じ", false]
		], -1
	],
	["[行|ぎょう][事|じ]", "行事", ["ぎょうじ"],
		[
			["行", "ぎょう", false],
			["事", "じ", false]
		], -1
	],
	["[見|み][事|ごと]", "見事", ["みごと"],
		[
			["見", "み", false],
			["事", "ごと", false]
		], -1
	],
	["[出|で][来|き][事|ごと]", "出来事", ["できごと"],
		[
			["出", "で", false],
			["来", "き", false],
			["事", "ごと", false]
		], -1
	],
	["[家|か][事|じ]", "家事", ["かじ"],
		[
			["家", "か", false],
			["事", "じ", false]
		], -1
	],
	["[記|き][事|じ]", "記事", ["きじ"],
		[
			["記", "き", false],
			["事", "じ", false]
		], -1
	],
	["[知|ち][事|じ]", "知事", ["ちじ"],
		[
			["知", "ち", false],
			["事", "じ", false]
		], -1
	],
	["[工|こう][事|じ]", "工事", ["こうじ"],
		[
			["工", "こう", false],
			["事", "じ", false]
		], -1
	],
	["[食|しょく][事|じ]", "食事", ["しょくじ"],
		[
			["食", "しょく", false],
			["事", "じ", false]
		], -1
	],
	["[事|じ](実|じつ)", "事実", ["じじつ"],
		[
			["事", "じ", false],
			["実", "じつ", true]
		], "1955"
	],
	["(物|もの)[事|ごと]", "物事", ["ものごと"],
		[
			["物", "もの", true],
			["事", "ごと", false]
		], "2214"
	],
	["[仕|し][事|ごと]", "仕事", ["しごと"],
		[
			["仕", "し", false],
			["事", "ごと", false]
		], -1
	],
	["[仕|し][方|かた]", "仕方", ["しかた"],
		[
			["仕", "し", false],
			["方", "かた", false]
		], -1
	],
	["(具|ぐ)[体|たい]", "具体", ["ぐたい"],
		[
			["具", "ぐ", true],
			["体", "たい", false]
		], "2743"
	],
	["(具|ぐ)[合|あい]", "具合", ["ぐあい"],
		[
			["具", "ぐ", true],
			["合", "あい", false]
		], "2744"
	],
	["[家|か](具|ぐ)", "家具", ["かぐ"],
		[
			["家", "か", false],
			["具", "ぐ", true]
		], "2745"
	],
	["[道|どう](具|ぐ)", "道具", ["どうぐ"],
		[
			["道", "どう", false],
			["具", "ぐ", true]
		], "2746"
	],
	["[絵|え]の(具|ぐ)", "絵の具", ["えのぐ"],
		[
			["絵", "え", false],
			["の", null, false],
			["具", "ぐ", true]
		], "2747"
	],
	["[手|て](伝|つだ)*う", "手伝", ["てつだ"],
		[
			["手", "て", false],
			["伝", "つだ", true]
		], "2923"
	],
	["{～}[発|はつ]", "～発", ["はつ"],
		[
			["～", null, false],
			["発", "はつ", false]
		], -1
	],
	["[発|た]*つ", "発", ["た"],
		[
			["発", "た", false]
		], -1
	],
	["[発|はっ][行|こう]", "発行", ["はっこう"],
		[
			["発", "はっ", false],
			["行", "こう", false]
		], -1
	],
	["[発|はっ][見|けん]", "発見", ["はっけん"],
		[
			["発", "はっ", false],
			["見", "けん", false]
		], -1
	],
	["[発|はつ][明|めい]", "発明", ["はつめい"],
		[
			["発", "はつ", false],
			["明", "めい", false]
		], -1
	],
	["[発|はつ][売|ばい]", "発売", ["はつばい"],
		[
			["発", "はつ", false],
			["売", "ばい", false]
		], -1
	],
	["[発|はつ][電|でん]", "発電", ["はつでん"],
		[
			["発", "はつ", false],
			["電", "でん", false]
		], -1
	],
	["[発|はっ][車|しゃ]", "発車", ["はっしゃ"],
		[
			["発", "はっ", false],
			["車", "しゃ", false]
		], -1
	],
	["[発|はっ](表|ぴょう)", "発表", ["はっぴょう"],
		[
			["発", "はっ", false],
			["表", "ぴょう", true]
		], "1997"
	],
	["[発|はっ](想|そう)", "発想", ["はっそう"],
		[
			["発", "はっ", false],
			["想", "そう", true]
		], "2495"
	],
	["[去|きょ][年|ねん]", "去年", ["きょねん"],
		[
			["去", "きょ", false],
			["年", "ねん", false]
		], -1
	],
	["(鉄|てつ)[道|どう]", "鉄道", ["てつどう"],
		[
			["鉄", "てつ", true],
			["道", "どう", false]
		], "2751"
	],
	["[引|ひき](返|かえ)*す", "引返", ["ひきかえ"],
		[
			["引", "ひき", false],
			["返", "かえ", true]
		], "2753"
	],
	["[対|たい]", "対", ["たい"],
		[
			["対", "たい", false]
		], -1
	],
	["[対|たい]する", "対する", ["たいする"],
		[
			["対", "たい", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["[対|たい][立|りつ]", "対立", ["たいりつ"],
		[
			["対", "たい", false],
			["立", "りつ", false]
		], -1
	],
	["(反|はん)[対|たい]", "反対", ["はんたい"],
		[
			["反", "はん", true],
			["対", "たい", false]
		], "2179"
	],
	["[味|あじ]", "味", ["あじ"],
		[
			["味", "あじ", false]
		], -1
	],
	["[意|い][味|み]", "意味", ["いみ"],
		[
			["意", "い", false],
			["味", "み", false]
		], -1
	],
	["[長|ちょう](短|たん)", "長短", ["ちょうたん"],
		[
			["長", "ちょう", false],
			["短", "たん", true]
		], "2761"
	],
	["{～}[部|ぶ]", "～部", ["ぶ"],
		[
			["～", null, false],
			["部", "ぶ", false]
		], -1
	],
	["[大|だい][部|ぶ][分|ぶん]", "大部分", ["だいぶぶん"],
		[
			["大", "だい", false],
			["部", "ぶ", false],
			["分", "ぶん", false]
		], -1
	],
	["[本|ほん][部|ぶ]", "本部", ["ほんぶ"],
		[
			["本", "ほん", false],
			["部", "ぶ", false]
		], -1
	],
	["[部|ぶ][分|ぶん]", "部分", ["ぶぶん"],
		[
			["部", "ぶ", false],
			["分", "ぶん", false]
		], -1
	],
	["[外|がい][部|ぶ]", "外部", ["がいぶ"],
		[
			["外", "がい", false],
			["部", "ぶ", false]
		], -1
	],
	["[部|ぶ][首|しゅ]", "部首", ["ぶしゅ"],
		[
			["部", "ぶ", false],
			["首", "しゅ", false]
		], -1
	],
	["[部|ぶ](品|ひん)", "部品", ["ぶひん"],
		[
			["部", "ぶ", false],
			["品", "ひん", true]
		], "2247"
	],
	["[大|だい](好|す)き", "大好き", ["だいすき"],
		[
			["大", "だい", false],
			["好", "す", true],
			["き", null, false]
		], "2934"
	],
	["[石|せき](油|ゆ)", "石油", ["せきゆ"],
		[
			["石", "せき", false],
			["油", "ゆ", true]
		], "2764"
	],
	["{～}[者|しゃ]", "～者", ["しゃ"],
		[
			["～", null, false],
			["者", "しゃ", false]
		], -1
	],
	["[前|ぜん][者|しゃ]", "前者", ["ぜんしゃ"],
		[
			["前", "ぜん", false],
			["者", "しゃ", false]
		], -1
	],
	["[後|こう][者|しゃ]", "後者", ["こうしゃ"],
		[
			["後", "こう", false],
			["者", "しゃ", false]
		], -1
	],
	["[者|もの]", "者", ["もの"],
		[
			["者", "もの", false]
		], -1
	],
	["[学|がく][者|しゃ]", "学者", ["がくしゃ"],
		[
			["学", "がく", false],
			["者", "しゃ", false]
		], -1
	],
	["[作|さく][者|しゃ]", "作者", ["さくしゃ"],
		[
			["作", "さく", false],
			["者", "しゃ", false]
		], -1
	],
	["[記|き][者|しゃ]", "記者", ["きしゃ"],
		[
			["記", "き", false],
			["者", "しゃ", false]
		], -1
	],
	["(役|やく)[者|しゃ]", "役者", ["やくしゃ"],
		[
			["役", "やく", true],
			["者", "しゃ", false]
		], "2412"
	],
	["[写|うつ]*す", "写", ["うつ"],
		[
			["写", "うつ", false]
		], -1
	],
	["(植|うえ)[木|き]", "植木", ["うえき"],
		[
			["植", "うえ", true],
			["木", "き", false]
		], "2768"
	],
	["[田|た](植|う)え", "田植え", ["たうえ"],
		[
			["田", "た", false],
			["植", "う", true],
			["え", null, false]
		], "2770"
	],
	["{～}[業|ぎょう]", "～業", ["ぎょう"],
		[
			["～", null, false],
			["業", "ぎょう", false]
		], -1
	],
	["[作|さ][業|ぎょう]", "作業", ["さぎょう"],
		[
			["作", "さ", false],
			["業", "ぎょう", false]
		], -1
	],
	["[休|きゅう][業|ぎょう]", "休業", ["きゅうぎょう"],
		[
			["休", "きゅう", false],
			["業", "ぎょう", false]
		], -1
	],
	["(農|のう)[業|ぎょう]", "農業", ["のうぎょう"],
		[
			["農", "のう", true],
			["業", "ぎょう", false]
		], "2508"
	],
	["(商|しょう)[業|ぎょう]", "商業", ["しょうぎょう"],
		[
			["商", "しょう", true],
			["業", "ぎょう", false]
		], "2553"
	],
	["(英|えい)[語|ご]", "英語", ["えいご"],
		[
			["英", "えい", true],
			["語", "ご", false]
		], "2944"
	],
	["[下|げ](宿|しゅく)", "下宿", ["げしゅく"],
		[
			["下", "げ", false],
			["宿", "しゅく", true]
		], "2771"
	],
	["[相|あい][手|て]", "相手", ["あいて"],
		[
			["相", "あい", false],
			["手", "て", false]
		], -1
	],
	["[相|そう][当|とう]", "相当", ["そうとう"],
		[
			["相", "そう", false],
			["当", "とう", false]
		], -1
	],
	["[首|しゅ][相|しょう]", "首相", ["しゅしょう"],
		[
			["首", "しゅ", false],
			["相", "しょう", false]
		], -1
	],
	["[相|そう](談|だん)", "相談", ["そうだん"],
		[
			["相", "そう", false],
			["談", "だん", true]
		], "2341"
	],
	["[一|いっ][定|てい]", "一定", ["いってい"],
		[
			["一", "いっ", false],
			["定", "てい", false]
		], -1
	],
	["[定|てい][休|きゅう][日|び]", "定休日", ["ていきゅうび"],
		[
			["定", "てい", false],
			["休", "きゅう", false],
			["日", "び", false]
		], -1
	],
	["[定|てい](員|いん)", "定員", ["ていいん"],
		[
			["定", "てい", false],
			["員", "いん", true]
		], "1925"
	],
	["(決|けっ)[定|てい]", "決定", ["けってい"],
		[
			["決", "けっ", true],
			["定", "てい", false]
		], "1970"
	],
	["[定|てい](期|き)", "定期", ["ていき"],
		[
			["定", "てい", false],
			["期", "き", true]
		], "2047"
	],
	["(安|あん)[定|てい]", "安定", ["あんてい"],
		[
			["安", "あん", true],
			["定", "てい", false]
		], "2128"
	],
	["(指|し)[定|てい]", "指定", ["してい"],
		[
			["指", "し", true],
			["定", "てい", false]
		], "2139"
	],
	["(予|よ)[定|てい]", "予定", ["よてい"],
		[
			["予", "よ", true],
			["定", "てい", false]
		], "2147"
	],
	["[学|がく](習|しゅう)", "学習", ["がくしゅう"],
		[
			["学", "がく", false],
			["習", "しゅう", true]
		], "2794"
	],
	["(習|しゅう)[字|じ]", "習字", ["しゅうじ"],
		[
			["習", "しゅう", true],
			["字", "じ", false]
		], "2796"
	],
	["[自|じ](習|しゅう)", "自習", ["じしゅう"],
		[
			["自", "じ", false],
			["習", "しゅう", true]
		], "2797"
	],
	["[会|かい][員|いん]", "会員", ["かいいん"],
		[
			["会", "かい", false],
			["員", "いん", false]
		], -1
	],
	["[定|てい][員|いん]", "定員", ["ていいん"],
		[
			["定", "てい", false],
			["員", "いん", false]
		], -1
	],
	["[工|こう][員|いん]", "工員", ["こういん"],
		[
			["工", "こう", false],
			["員", "いん", false]
		], -1
	],
	["(全|ぜん)[員|いん]", "全員", ["ぜんいん"],
		[
			["全", "ぜん", true],
			["員", "いん", false]
		], "1987"
	],
	["(委|い)[員|いん]", "委員", ["いいん"],
		[
			["委", "い", true],
			["員", "いん", false]
		], "2176"
	],
	["[開|かい][会|かい]", "開会", ["かいかい"],
		[
			["開", "かい", false],
			["会", "かい", false]
		], -1
	],
	["[開|かい][通|つう]", "開通", ["かいつう"],
		[
			["開", "かい", false],
			["通", "つう", false]
		], -1
	],
	["[開|かい](始|し)", "開始", ["かいし"],
		[
			["開", "かい", false],
			["始", "し", true]
		], "2290"
	],
	["[開|かい](放|ほう)", "開放", ["かいほう"],
		[
			["開", "かい", false],
			["放", "ほう", true]
		], "2389"
	],
	["[電|でん](波|ぱ)", "電波", ["でんぱ"],
		[
			["電", "でん", false],
			["波", "ぱ", true]
		], "2808"
	],
	["不", "不", ["ふ", "ぶ"],
		[], null
	],
	["{～}[問|もん]", "～問", ["もん"],
		[
			["～", null, false],
			["問", "もん", false]
		], -1
	],
	["[問|と]い", "問い", ["とい"],
		[
			["問", "と", false],
			["い", null, false]
		], -1
	],
	["[問|と]い[合|あ]わせ", "問い合わせ", ["といあわせ"],
		[
			["問", "と", false],
			["い", null, false],
			["合", "あ", false],
			["わ", null, false],
			["せ", null, false]
		], -1
	],
	["[学|がく][問|もん]", "学問", ["がくもん"],
		[
			["学", "がく", false],
			["問", "もん", false]
		], -1
	],
	["[問|もん][答|どう]", "問答", ["もんどう"],
		[
			["問", "もん", false],
			["答", "どう", false]
		], -1
	],
	["[東|とう](洋|よう)", "東洋", ["とうよう"],
		[
			["東", "とう", false],
			["洋", "よう", true]
		], "2811"
	],
	["(洋|よう)(品|ひん)[店|てん]", "洋品店", ["ようひんてん"],
		[
			["洋", "よう", true],
			["品", "ひん", true],
			["店", "てん", false]
		], "2251"
	],
	["[海|かい](洋|よう)", "海洋", ["かいよう"],
		[
			["海", "かい", false],
			["洋", "よう", true]
		], "2813"
	],
	["(旅|りょ)[行|こう]", "旅行", ["りょこう"],
		[
			["旅", "りょ", true],
			["行", "こう", false]
		], "2816"
	],
	["お[代|か]わり", "お代わり", ["おかわり"],
		[
			["お", null, false],
			["代", "か", false],
			["わ", null, false],
			["り", null, false]
		], -1
	],
	["[代|か]え*る", "代え", ["かえ"],
		[
			["代", "か", false],
			["え", null, false]
		], -1
	],
	["[代|かわ]*5", "代", ["かわ"],
		[
			["代", "かわ", false]
		], -1
	],
	["[代|だい][金|きん]", "代金", ["だいきん"],
		[
			["代", "だい", false],
			["金", "きん", false]
		], -1
	],
	["[年|ねん][代|だい]", "年代", ["ねんだい"],
		[
			["年", "ねん", false],
			["代", "だい", false]
		], -1
	],
	["[代|だい][理|り]", "代理", ["だいり"],
		[
			["代", "だい", false],
			["理", "り", false]
		], -1
	],
	["[近|きん][代|だい]", "近代", ["きんだい"],
		[
			["近", "きん", false],
			["代", "だい", false]
		], -1
	],
	["[代|だい](表|ひょう)", "代表", ["だいひょう"],
		[
			["代", "だい", false],
			["表", "ひょう", true]
		], "1996"
	],
	["[上|じょう](級|きゅう)", "上級", ["じょうきゅう"],
		[
			["上", "じょう", false],
			["級", "きゅう", true]
		], "2824"
	],
	["[学|がっ](級|きゅう)", "学級", ["がっきゅう"],
		[
			["学", "がっ", false],
			["級", "きゅう", true]
		], "2825"
	],
	["[高|こう](級|きゅう)", "高級", ["こうきゅう"],
		[
			["高", "こう", false],
			["級", "きゅう", true]
		], "2827"
	],
	["[事|じ][実|じつ]", "事実", ["じじつ"],
		[
			["事", "じ", false],
			["実", "じつ", false]
		], -1
	],
	["[実|み]", "実", ["み"],
		[
			["実", "み", false]
		], -1
	],
	["[実|じつ]に", "実に", ["じつに"],
		[
			["実", "じつ", false],
			["に", null, false]
		], -1
	],
	["[実|じつ]は", "実は", ["じつは"],
		[
			["実", "じつ", false],
			["は", null, false]
		], -1
	],
	["[実|みの]*5", "実", ["みの"],
		[
			["実", "みの", false]
		], -1
	],
	["[実|じつ][力|りょく]", "実力", ["じつりょく"],
		[
			["実", "じつ", false],
			["力", "りょく", false]
		], -1
	],
	["[実|じっ][行|こう]", "実行", ["じっこう"],
		[
			["実", "じっ", false],
			["行", "こう", false]
		], -1
	],
	["[実|じつ][用|よう]", "実用", ["じつよう"],
		[
			["実", "じつ", false],
			["用", "よう", false]
		], -1
	],
	["[口|こう][実|じつ]", "口実", ["こうじつ"],
		[
			["口", "こう", false],
			["実", "じつ", false]
		], -1
	],
	["[実|じつ](物|ぶつ)", "実物", ["じつぶつ"],
		[
			["実", "じつ", false],
			["物", "ぶつ", true]
		], "2211"
	],
	["[実|じっ](感|かん)", "実感", ["じっかん"],
		[
			["実", "じっ", false],
			["感", "かん", true]
		], "2265"
	],
	["[実|じっ](習|しゅう)", "実習", ["じっしゅう"],
		[
			["実", "じっ", false],
			["習", "しゅう", true]
		], "2795"
	],
	["[決|けっ]して", "決して", ["けっして"],
		[
			["決", "けっ", false],
			["し", null, false],
			["て", null, false]
		], -1
	],
	["[決|き]まり", "決まり", ["きまり"],
		[
			["決", "き", false],
			["ま", null, false],
			["り", null, false]
		], -1
	],
	["[決|きま]*5", "決", ["きま"],
		[
			["決", "きま", false]
		], -1
	],
	["[決|けっ][定|てい]", "決定", ["けってい"],
		[
			["決", "けっ", false],
			["定", "てい", false]
		], -1
	],
	["[決|けっ][心|しん]", "決心", ["けっしん"],
		[
			["決", "けっ", false],
			["心", "しん", false]
		], -1
	],
	["[動|うご]か*す", "動か", ["うごか"],
		[
			["動", "うご", false],
			["か", null, false]
		], -1
	],
	["[自|じ][動|どう]", "自動", ["じどう"],
		[
			["自", "じ", false],
			["動", "どう", false]
		], -1
	],
	["[行|こう][動|どう]", "行動", ["こうどう"],
		[
			["行", "こう", false],
			["動", "どう", false]
		], -1
	],
	["[動|どう][作|さ]", "動作", ["どうさ"],
		[
			["動", "どう", false],
			["作", "さ", false]
		], -1
	],
	["[活|かつ][動|どう]", "活動", ["かつどう"],
		[
			["活", "かつ", false],
			["動", "どう", false]
		], -1
	],
	["(感|かん)[動|どう]", "感動", ["かんどう"],
		[
			["感", "かん", true],
			["動", "どう", false]
		], "2269"
	],
	["(運|うん)[動|どう]", "運動", ["うんどう"],
		[
			["運", "うん", true],
			["動", "どう", false]
		], "2317"
	],
	["[上|じょう](等|とう)", "上等", ["じょうとう"],
		[
			["上", "じょう", false],
			["等", "とう", true]
		], "2846"
	],
	["(等|とう)[分|ぶん]", "等分", ["とうぶん"],
		[
			["等", "とう", true],
			["分", "ぶん", false]
		], "2850"
	],
	["[高|こう](等|とう)", "高等", ["こうとう"],
		[
			["高", "こう", false],
			["等", "とう", true]
		], "2851"
	],
	["[高|こう](等|とう)[学|がっ][校|こう]", "高等学校", ["こうとうがっこう"],
		[
			["高", "こう", false],
			["等", "とう", true],
			["学", "がっ", false],
			["校", "こう", false]
		], "2852"
	],
	["[全|ぜん]", "全", ["ぜん"],
		[
			["全", "ぜん", false]
		], -1
	],
	["[全|まった]く", "全く", ["まったく"],
		[
			["全", "まった", false],
			["く", null, false]
		], -1
	],
	["[全|すべ]て", "全て", ["すべて"],
		[
			["全", "すべ", false],
			["て", null, false]
		], -1
	],
	["[全|ぜん][力|りょく]", "全力", ["ぜんりょく"],
		[
			["全", "ぜん", false],
			["力", "りょく", false]
		], -1
	],
	["[全|ぜん][員|いん]", "全員", ["ぜんいん"],
		[
			["全", "ぜん", false],
			["員", "いん", false]
		], -1
	],
	["[全|ぜん][国|こく]", "全国", ["ぜんこく"],
		[
			["全", "ぜん", false],
			["国", "こく", false]
		], -1
	],
	["[全|ぜん][体|たい]", "全体", ["ぜんたい"],
		[
			["全", "ぜん", false],
			["体", "たい", false]
		], -1
	],
	["(安|あん)[全|ぜん]", "安全", ["あんぜん"],
		[
			["安", "あん", true],
			["全", "ぜん", false]
		], "2127"
	],
	["[全|ぜん](集|しゅう)", "全集", ["ぜんしゅう"],
		[
			["全", "ぜん", false],
			["集", "しゅう", true]
		], "2197"
	],
	["[全|ぜん](身|しん)", "全身", ["ぜんしん"],
		[
			["全", "ぜん", false],
			["身", "しん", true]
		], "2417"
	],
	["[注|ちゅう][意|い]", "注意", ["ちゅうい"],
		[
			["注", "ちゅう", false],
			["意", "い", false]
		], -1
	],
	["[作|さっ](曲|きょく)", "作曲", ["さっきょく"],
		[
			["作", "さっ", false],
			["曲", "きょく", true]
		], "2855"
	],
	["(曲|きょく)[線|せん]", "曲線", ["きょくせん"],
		[
			["曲", "きょく", true],
			["線", "せん", false]
		], "2858"
	],
	["[代|だい][表|ひょう]", "代表", ["だいひょう"],
		[
			["代", "だい", false],
			["表", "ひょう", false]
		], -1
	],
	["[発|はっ][表|ぴょう]", "発表", ["はっぴょう"],
		[
			["発", "はっ", false],
			["表", "ぴょう", false]
		], -1
	],
	["[表|あらわ]*す", "表", ["あらわ"],
		[
			["表", "あらわ", false]
		], -1
	],
	["[公|こう][表|ひょう]", "公表", ["こうひょう"],
		[
			["公", "こう", false],
			["表", "ひょう", false]
		], -1
	],
	["[図|ず][表|ひょう]", "図表", ["ずひょう"],
		[
			["図", "ず", false],
			["表", "ひょう", false]
		], -1
	],
	["[表|ひょう][紙|し]", "表紙", ["ひょうし"],
		[
			["表", "ひょう", false],
			["紙", "し", false]
		], -1
	],
	["[表|ひょう](面|めん)", "表面", ["ひょうめん"],
		[
			["表", "ひょう", false],
			["面", "めん", true]
		], "2171"
	],
	["[家|か](庭|てい)", "家庭", ["かてい"],
		[
			["家", "か", false],
			["庭", "てい", true]
		], "2860"
	],
	["[校|こう](庭|てい)", "校庭", ["こうてい"],
		[
			["校", "こう", false],
			["庭", "てい", true]
		], "2862"
	],
	["[調|ちょう][子|し]", "調子", ["ちょうし"],
		[
			["調", "ちょう", false],
			["子", "し", false]
		], -1
	],
	["[強|きょう][調|ちょう]", "強調", ["きょうちょう"],
		[
			["強", "きょう", false],
			["調", "ちょう", false]
		], -1
	],
	["[調|ちょう](整|せい)", "調整", ["ちょうせい"],
		[
			["調", "ちょう", false],
			["整", "せい", true]
		], "2622"
	],
	["[体|たい](温|おん)", "体温", ["たいおん"],
		[
			["体", "たい", false],
			["温", "おん", true]
		], "2866"
	],
	["[気|き](温|おん)", "気温", ["きおん"],
		[
			["気", "き", false],
			["温", "おん", true]
		], "2867"
	],
	["(温|おん)[室|しつ]", "温室", ["おんしつ"],
		[
			["温", "おん", true],
			["室", "しつ", false]
		], "2872"
	],
	["{～}[化|か]", "～化", ["か"],
		[
			["～", null, false],
			["化", "か", false]
		], -1
	],
	["[化|か][学|がく]", "化学", ["かがく"],
		[
			["化", "か", false],
			["学", "がく", false]
		], -1
	],
	["[強|きょう][化|か]", "強化", ["きょうか"],
		[
			["強", "きょう", false],
			["化", "か", false]
		], -1
	],
	["[文|ぶん][化|か]", "文化", ["ぶんか"],
		[
			["文", "ぶん", false],
			["化", "か", false]
		], -1
	],
	["(消|しょう)[化|か]", "消化", ["しょうか"],
		[
			["消", "しょう", true],
			["化", "か", false]
		], "2449"
	],
	["[悪|わる]い", "悪い", ["わるい"],
		[
			["悪", "わる", false],
			["い", null, false]
		], -1
	],
	["[車|しゃ](庫|こ)", "車庫", ["しゃこ"],
		[
			["車", "しゃ", false],
			["庫", "こ", true]
		], "2877"
	],
	["[金|きん](庫|こ)", "金庫", ["きんこ"],
		[
			["金", "きん", false],
			["庫", "こ", true]
		], "2878"
	],
	["[主|おも]に", "主に", ["おもに"],
		[
			["主", "おも", false],
			["に", null, false]
		], -1
	],
	["[主|しゅ][人|じん]", "主人", ["しゅじん"],
		[
			["主", "しゅ", false],
			["人", "じん", false]
		], -1
	],
	["[家|や][主|ぬし]", "家主", ["やぬし"],
		[
			["家", "や", false],
			["主", "ぬし", false]
		], -1
	],
	["[主|しゅ][語|ご]", "主語", ["しゅご"],
		[
			["主", "しゅ", false],
			["語", "ご", false]
		], -1
	],
	["[主|しゅ](役|やく)", "主役", ["しゅやく"],
		[
			["主", "しゅ", false],
			["役", "やく", true]
		], "2407"
	],
	["[題|だい]", "題", ["だい"],
		[
			["題", "だい", false]
		], -1
	],
	["[話|わ][題|だい]", "話題", ["わだい"],
		[
			["話", "わ", false],
			["題", "だい", false]
		], -1
	],
	["[題|だい][名|めい]", "題名", ["だいめい"],
		[
			["題", "だい", false],
			["名", "めい", false]
		], -1
	],
	["(宿|しゅく)[題|だい]", "宿題", ["しゅくだい"],
		[
			["宿", "しゅく", true],
			["題", "だい", false]
		], "2773"
	],
	["[休|きゅう](息|そく)", "休息", ["きゅうそく"],
		[
			["休", "きゅう", false],
			["息", "そく", true]
		], "2890"
	],
	["(息|むす)[子|こ]", "息子", ["むすこ"],
		[
			["息", "むす", true],
			["子", "こ", false]
		], "2892"
	],
	["[意|い][外|がい]", "意外", ["いがい"],
		[
			["意", "い", false],
			["外", "がい", false]
		], -1
	],
	["[生|なま][意|い][気|き]", "生意気", ["なまいき"],
		[
			["生", "なま", false],
			["意", "い", false],
			["気", "き", false]
		], -1
	],
	["[意|い][思|し]", "意思", ["いし"],
		[
			["意", "い", false],
			["思", "し", false]
		], -1
	],
	["[意|い][地|じ](悪|わる)", "意地悪", ["いじわる"],
		[
			["意", "い", false],
			["地", "じ", false],
			["悪", "わる", true]
		], "2667"
	],
	["[黒|こく](板|ばん)", "黒板", ["こくばん"],
		[
			["黒", "こく", false],
			["板", "ばん", true]
		], "2895"
	],
	["[一|いち][度|ど]に", "一度に", ["いちどに"],
		[
			["一", "いち", false],
			["度", "ど", false],
			["に", null, false]
		], -1
	],
	["[年|ねん][度|ど]", "年度", ["ねんど"],
		[
			["年", "ねん", false],
			["度", "ど", false]
		], -1
	],
	["[高|こう][度|ど]", "高度", ["こうど"],
		[
			["高", "こう", false],
			["度", "ど", false]
		], -1
	],
	["[毎|まい][度|ど]", "毎度", ["まいど"],
		[
			["毎", "まい", false],
			["度", "ど", false]
		], -1
	],
	["[角|かく][度|ど]", "角度", ["かくど"],
		[
			["角", "かく", false],
			["度", "ど", false]
		], -1
	],
	["(速|そく)[度|ど]", "速度", ["そくど"],
		[
			["速", "そく", true],
			["度", "ど", false]
		], "2699"
	],
	["(温|おん)[度|ど]", "温度", ["おんど"],
		[
			["温", "おん", true],
			["度", "ど", false]
		], "2873"
	],
	["(列|れっ)[車|しゃ]", "列車", ["れっしゃ"],
		[
			["列", "れっ", true],
			["車", "しゃ", false]
		], "2901"
	],
	["[行|ぎょう](列|れつ)", "行列", ["ぎょうれつ"],
		[
			["行", "ぎょう", false],
			["列", "れつ", true]
		], "2902"
	],
	["(遊|ゆう)[園|えん][地|ち]", "遊園地", ["ゆうえんち"],
		[
			["遊", "ゆう", true],
			["園", "えん", false],
			["地", "ち", false]
		], "2907"
	],
	["{～}[期|き]", "～期", ["き"],
		[
			["～", null, false],
			["期", "き", false]
		], -1
	],
	["[学|がっ][期|き]", "学期", ["がっき"],
		[
			["学", "がっ", false],
			["期", "き", false]
		], -1
	],
	["[定|てい][期|き]", "定期", ["ていき"],
		[
			["定", "てい", false],
			["期", "き", false]
		], -1
	],
	["[時|じ][期|き]", "時期", ["じき"],
		[
			["時", "じ", false],
			["期", "き", false]
		], -1
	],
	["[期|き][間|かん]", "期間", ["きかん"],
		[
			["期", "き", false],
			["間", "かん", false]
		], -1
	],
	["[長|ちょう][期|き]", "長期", ["ちょうき"],
		[
			["長", "ちょう", false],
			["期", "き", false]
		], -1
	],
	["(予|よ)[期|き]", "予期", ["よき"],
		[
			["予", "よ", true],
			["期", "き", false]
		], "2148"
	],
	["[期|き](待|たい)", "期待", ["きたい"],
		[
			["期", "き", false],
			["待", "たい", true]
		], "2532"
	],
	["(短|たん)[期|き]", "短期", ["たんき"],
		[
			["短", "たん", true],
			["期", "き", false]
		], "2760"
	],
	["[大|おお](勢|ぜい)", "大勢", ["おおぜい"],
		[
			["大", "おお", false],
			["勢", "ぜい", true]
		], "3254"
	],
	["{～}[持|も]ち", "～持ち", ["もち"],
		[
			["～", null, false],
			["持", "も", false],
			["ち", null, false]
		], -1
	],
	["[持|も]ち[上|あ]げ*る", "持ち上げ", ["もちあげ"],
		[
			["持", "も", false],
			["ち", null, false],
			["上", "あ", false],
			["げ", null, false]
		], -1
	],
	["(受|う)け[持|も]*つ", "受け持", ["うけも"],
		[
			["受", "う", true],
			["け", null, false],
			["持", "も", false]
		], "2103"
	],
	["[取|と]り[上|あ]げ*る", "取り上げ", ["とりあげ"],
		[
			["取", "と", false],
			["り", null, false],
			["上", "あ", false],
			["げ", null, false]
		], -1
	],
	["[取|と]り[入|い]れ*る", "取り入れ", ["とりいれ"],
		[
			["取", "と", false],
			["り", null, false],
			["入", "い", false],
			["れ", null, false]
		], -1
	],
	["[取|と]り[出|だ]*す", "取り出", ["とりだ"],
		[
			["取", "と", false],
			["り", null, false],
			["出", "だ", false]
		], -1
	],
	["[取|と]れ*る", "取れ", ["とれ"],
		[
			["取", "と", false],
			["れ", null, false]
		], -1
	],
	["[書|かき][取|とり]", "書取", ["かきとり"],
		[
			["書", "かき", false],
			["取", "とり", false]
		], -1
	],
	["(受|う)け[取|と]*5", "受け取", ["うけと"],
		[
			["受", "う", true],
			["け", null, false],
			["取", "と", false]
		], "2102"
	],
	["(受|うけ)[取|とり]", "受取", ["うけとり"],
		[
			["受", "うけ", true],
			["取", "とり", false]
		], "2104"
	],
	["[取|と]り(消|け)*す", "取り消", ["とりけ"],
		[
			["取", "と", false],
			["り", null, false],
			["消", "け", true]
		], "2446"
	],
	["[文|ぶん](章|しょう)", "文章", ["ぶんしょう"],
		[
			["文", "ぶん", false],
			["章", "しょう", true]
		], "2913"
	],
	["得る", "得る", ["うる", "える"],
		[], null
	],
	["(酒|さか)[場|ば]", "酒場", ["さかば"],
		[
			["酒", "さか", true],
			["場", "ば", false]
		], "2921"
	],
	["[都|と][会|かい]", "都会", ["とかい"],
		[
			["都", "と", false],
			["会", "かい", false]
		], -1
	],
	["[都|つ][合|ごう]", "都合", ["つごう"],
		[
			["都", "つ", false],
			["合", "ごう", false]
		], -1
	],
	["[都|と][市|し]", "都市", ["とし"],
		[
			["都", "と", false],
			["市", "し", false]
		], -1
	],
	["[首|しゅ][都|と]", "首都", ["しゅと"],
		[
			["首", "しゅ", false],
			["都", "と", false]
		], -1
	],
	["[都|と][心|しん]", "都心", ["としん"],
		[
			["都", "と", false],
			["心", "しん", false]
		], -1
	],
	["[和|わ]{～}", "和～", ["わ"],
		[
			["和", "わ", false],
			["～", null, false]
		], -1
	],
	["(平|へい)[和|わ]", "平和", ["へいわ"],
		[
			["平", "へい", true],
			["和", "わ", false]
		], "2082"
	],
	["[図|と][書|しょ][館|かん]", "図書館", ["としょかん"],
		[
			["図", "と", false],
			["書", "しょ", false],
			["館", "かん", false]
		], -1
	],
	["[大|たい][使|し][館|かん]", "大使館", ["たいしかん"],
		[
			["大", "たい", false],
			["使", "し", false],
			["館", "かん", false]
		], -1
	],
	["(旅|りょ)[館|かん]", "旅館", ["りょかん"],
		[
			["旅", "りょ", true],
			["館", "かん", false]
		], "2195"
	],
	["[和|わ](服|ふく)", "和服", ["わふく"],
		[
			["和", "わ", false],
			["服", "ふく", true]
		], "2886"
	],
	["[公|こう][平|へい]", "公平", ["こうへい"],
		[
			["公", "こう", false],
			["平", "へい", false]
		], -1
	],
	["[平|たい]ら", "平ら", ["たいら"],
		[
			["平", "たい", false],
			["ら", null, false]
		], -1
	],
	["[平|へい][和|わ]", "平和", ["へいわ"],
		[
			["平", "へい", false],
			["和", "わ", false]
		], -1
	],
	["[平|へい][日|じつ]", "平日", ["へいじつ"],
		[
			["平", "へい", false],
			["日", "じつ", false]
		], -1
	],
	["[平|へい][気|き]", "平気", ["へいき"],
		[
			["平", "へい", false],
			["気", "き", false]
		], -1
	],
	["[平|へい][野|や]", "平野", ["へいや"],
		[
			["平", "へい", false],
			["野", "や", false]
		], -1
	],
	["[水|すい][平|へい]", "水平", ["すいへい"],
		[
			["水", "すい", false],
			["平", "へい", false]
		], -1
	],
	["[地|ち][平|へい][線|せん]", "地平線", ["ちへいせん"],
		[
			["地", "ち", false],
			["平", "へい", false],
			["線", "せん", false]
		], -1
	],
	["[水|すい][平|へい][線|せん]", "水平線", ["すいへいせん"],
		[
			["水", "すい", false],
			["平", "へい", false],
			["線", "せん", false]
		], -1
	],
	["[八百|やお][屋|や]", "八百屋", ["やおや"],
		[
			["八百", "やお", false],
			["屋", "や", false]
		], -1
	],
	["[屋|おく][上|じょう]", "屋上", ["おくじょう"],
		[
			["屋", "おく", false],
			["上", "じょう", false]
		], -1
	],
	["[部|へ][屋|や]", "部屋", ["へや"],
		[
			["部", "へ", false],
			["屋", "や", false]
		], -1
	],
	["{～}[屋|や]", "～屋", ["や"],
		[
			["～", null, false],
			["屋", "や", false]
		], -1
	],
	["[平|びょう](等|どう)", "平等", ["びょうどう"],
		[
			["平", "びょう", false],
			["等", "どう", true]
		], "2847"
	],
	["(暗|あん)[記|き]", "暗記", ["あんき"],
		[
			["暗", "あん", true],
			["記", "き", false]
		], "2932"
	],
	["(再|さ)[来|らい][年|ねん]", "再来年", ["さらいねん"],
		[
			["再", "さ", true],
			["来", "らい", false],
			["年", "ねん", false]
		], "3295"
	],
	["(勉|べん)[強|きょう]", "勉強", ["べんきょう"],
		[
			["勉", "べん", true],
			["強", "きょう", false]
		], "2936"
	],
	["[世|よ]の[中|なか]", "世の中", ["よのなか"],
		[
			["世", "よ", false],
			["の", null, false],
			["中", "なか", false]
		], -1
	],
	["[世|せ][間|けん]", "世間", ["せけん"],
		[
			["世", "せ", false],
			["間", "けん", false]
		], -1
	],
	["[中|ちゅう][世|せい]", "中世", ["ちゅうせい"],
		[
			["中", "ちゅう", false],
			["世", "せい", false]
		], -1
	],
	["[太|たい](陽|よう)", "太陽", ["たいよう"],
		[
			["太", "たい", false],
			["陽", "よう", true]
		], "2939"
	],
	["(陽|よう)[気|き]", "陽気", ["ようき"],
		[
			["陽", "よう", true],
			["気", "き", false]
		], "2940"
	],
	["[受|う]け[取|と]*5", "受け取", ["うけと"],
		[
			["受", "う", false],
			["け", null, false],
			["取", "と", false]
		], -1
	],
	["[受|う]け[持|も]*つ", "受け持", ["うけも"],
		[
			["受", "う", false],
			["け", null, false],
			["持", "も", false]
		], -1
	],
	["[受|うけ][取|とり]", "受取", ["うけとり"],
		[
			["受", "うけ", false],
			["取", "とり", false]
		], -1
	],
	["[引|ひき][受|うけ]る", "引受る", ["ひきうける"],
		[
			["引", "ひき", false],
			["受", "うけ", false],
			["る", null, false]
		], -1
	],
	["(皮|ひ)[肉|にく]", "皮肉", ["ひにく"],
		[
			["皮", "ひ", true],
			["肉", "にく", false]
		], "2942"
	],
	["[毛|け](皮|がわ)", "毛皮", ["けがわ"],
		[
			["毛", "け", false],
			["皮", "がわ", true]
		], "2943"
	],
	["[区|く][分|ぶん]", "区分", ["くぶん"],
		[
			["区", "く", false],
			["分", "ぶん", false]
		], -1
	],
	["[地|ち][区|く]", "地区", ["ちく"],
		[
			["地", "ち", false],
			["区", "く", false]
		], -1
	],
	["[区|く][切|ぎ]*5", "区切", ["くぎ"],
		[
			["区", "く", false],
			["切", "ぎ", false]
		], -1
	],
	["(歯|は)[車|ぐるま]", "歯車", ["はぐるま"],
		[
			["歯", "は", true],
			["車", "ぐるま", false]
		], "2947"
	],
	["[虫|むし](歯|ば)", "虫歯", ["むしば"],
		[
			["虫", "むし", false],
			["歯", "ば", true]
		], "2948"
	],
	["[電|でん](柱|ちゅう)", "電柱", ["でんちゅう"],
		[
			["電", "でん", false],
			["柱", "ちゅう", true]
		], "2952"
	],
	["[県|けん]", "県", ["けん"],
		[
			["県", "けん", false]
		], -1
	],
	["[地|ち][下|か][鉄|てつ]", "地下鉄", ["ちかてつ"],
		[
			["地", "ち", false],
			["下", "か", false],
			["鉄", "てつ", false]
		], -1
	],
	["(祭|さい)[日|じつ]", "祭日", ["さいじつ"],
		[
			["祭", "さい", true],
			["日", "じつ", false]
		], "2957"
	],
	["[前|ぜん][進|しん]", "前進", ["ぜんしん"],
		[
			["前", "ぜん", false],
			["進", "しん", false]
		], -1
	],
	["[進|すす]*む", "進", ["すす"],
		[
			["進", "すす", false]
		], -1
	],
	["[進|すす]め*る", "進め", ["すすめ"],
		[
			["進", "すす", false],
			["め", null, false]
		], -1
	],
	["[進|しん][学|がく]", "進学", ["しんがく"],
		[
			["進", "しん", false],
			["学", "がく", false]
		], -1
	],
	["[進|しん][歩|ぽ]", "進歩", ["しんぽ"],
		[
			["進", "しん", false],
			["歩", "ぽ", false]
		], -1
	],
	["[返|かえ]*す", "返", ["かえ"],
		[
			["返", "かえ", false]
		], -1
	],
	["[返|へん][事|じ]", "返事", ["へんじ"],
		[
			["返", "へん", false],
			["事", "じ", false]
		], -1
	],
	["[万|まん][年|ねん](筆|ひつ)", "万年筆", ["まんねんひつ"],
		[
			["万", "まん", false],
			["年", "ねん", false],
			["筆", "ひつ", true]
		], "2958"
	],
	["(筆|ひっ)[者|しゃ]", "筆者", ["ひっしゃ"],
		[
			["筆", "ひっ", true],
			["者", "しゃ", false]
		], "2960"
	],
	["(筆|ひっ)[記|き]", "筆記", ["ひっき"],
		[
			["筆", "ひっ", true],
			["記", "き", false]
		], "2961"
	],
	["[安|あん][全|ぜん]", "安全", ["あんぜん"],
		[
			["安", "あん", false],
			["全", "ぜん", false]
		], -1
	],
	["[安|あん][定|てい]", "安定", ["あんてい"],
		[
			["安", "あん", false],
			["定", "てい", false]
		], -1
	],
	["[目|め][安|やす]", "目安", ["めやす"],
		[
			["目", "め", false],
			["安", "やす", false]
		], -1
	],
	["[安|あん][心|しん]", "安心", ["あんしん"],
		[
			["安", "あん", false],
			["心", "しん", false]
		], -1
	],
	["[短|みじか]い", "短い", ["みじかい"],
		[
			["短", "みじか", false],
			["い", null, false]
		], -1
	],
	["(童|どう)[話|わ]", "童話", ["どうわ"],
		[
			["童", "どう", true],
			["話", "わ", false]
		], "2963"
	],
	["[大|だい][学|がく][院|いん]", "大学院", ["だいがくいん"],
		[
			["大", "だい", false],
			["学", "がく", false],
			["院", "いん", false]
		], -1
	],
	["[寺|じ][院|いん]", "寺院", ["じいん"],
		[
			["寺", "じ", false],
			["院", "いん", false]
		], -1
	],
	["[中|なか][指|ゆび]", "中指", ["なかゆび"],
		[
			["中", "なか", false],
			["指", "ゆび", false]
		], -1
	],
	["[小|こ][指|ゆび]", "小指", ["こゆび"],
		[
			["小", "こ", false],
			["指", "ゆび", false]
		], -1
	],
	["[指|ゆび]", "指", ["ゆび"],
		[
			["指", "ゆび", false]
		], -1
	],
	["[指|さ]*す", "指", ["さ"],
		[
			["指", "さ", false]
		], -1
	],
	["[指|し][定|てい]", "指定", ["してい"],
		[
			["指", "し", false],
			["定", "てい", false]
		], -1
	],
	["[目|め][指|ざ]*す", "目指", ["めざ"],
		[
			["目", "め", false],
			["指", "ざ", false]
		], -1
	],
	["[親|おや][指|ゆび]", "親指", ["おやゆび"],
		[
			["親", "おや", false],
			["指", "ゆび", false]
		], -1
	],
	["(薬|くすり)[指|ゆび]", "薬指", ["くすりゆび"],
		[
			["薬", "くすり", true],
			["指", "ゆび", false]
		], "2784"
	],
	["(詩|し)[人|じん]", "詩人", ["しじん"],
		[
			["詩", "し", true],
			["人", "じん", false]
		], "2974"
	],
	["[第|だい]{～}", "第～", ["だい"],
		[
			["第", "だい", false],
			["～", null, false]
		], -1
	],
	["(次|し)[第|だい]", "次第", ["しだい"],
		[
			["次", "し", true],
			["第", "だい", false]
		], "2239"
	],
	["(落|らく)[第|だい]", "落第", ["らくだい"],
		[
			["落", "らく", true],
			["第", "だい", false]
		], "2563"
	],
	["[予|よ][定|てい]", "予定", ["よてい"],
		[
			["予", "よ", false],
			["定", "てい", false]
		], -1
	],
	["[予|よ][期|き]", "予期", ["よき"],
		[
			["予", "よ", false],
			["期", "き", false]
		], -1
	],
	["[予|よ][算|さん]", "予算", ["よさん"],
		[
			["予", "よ", false],
			["算", "さん", false]
		], -1
	],
	["[予|よ](習|しゅう)", "予習", ["よしゅう"],
		[
			["予", "よ", false],
			["習", "しゅう", true]
		], "2793"
	],
	["{～}[向|む]け", "～向け", ["むけ"],
		[
			["～", null, false],
			["向", "む", false],
			["け", null, false]
		], -1
	],
	["[向|むか]う", "向う", ["むかう"],
		[
			["向", "むか", false],
			["う", null, false]
		], -1
	],
	["[向|む]かい", "向かい", ["むかい"],
		[
			["向", "む", false],
			["か", null, false],
			["い", null, false]
		], -1
	],
	["[向|む]*く", "向", ["む"],
		[
			["向", "む", false]
		], -1
	],
	["[向|む]け*る", "向け", ["むけ"],
		[
			["向", "む", false],
			["け", null, false]
		], -1
	],
	["[向|む]こう", "向こう", ["むこう"],
		[
			["向", "む", false],
			["こ", null, false],
			["う", null, false]
		], -1
	],
	["[方|ほう][向|こう]", "方向", ["ほうこう"],
		[
			["方", "ほう", false],
			["向", "こう", false]
		], -1
	],
	["[習|なら]*う", "習", ["なら"],
		[
			["習", "なら", false]
		], -1
	],
	["(練|れん)[習|しゅう]する", "練習する", ["れんしゅうする"],
		[
			["練", "れん", true],
			["習", "しゅう", false],
			["す", null, false],
			["る", null, false]
		], "2227"
	],
	["[石|せき](炭|たん)", "石炭", ["せきたん"],
		[
			["石", "せき", false],
			["炭", "たん", true]
		], "2982"
	],
	["{～}(丁|ちょう)[目|め]", "～丁目", ["ちょうめ"],
		[
			["～", null, false],
			["丁", "ちょう", true],
			["目", "め", false]
		], "2984"
	],
	["{～}[勝|しょう]", "～勝", ["しょう"],
		[
			["～", null, false],
			["勝", "しょう", false]
		], -1
	],
	["[勝|か]ち", "勝ち", ["かち"],
		[
			["勝", "か", false],
			["ち", null, false]
		], -1
	],
	["[勝|か]*つ", "勝", ["か"],
		[
			["勝", "か", false]
		], -1
	],
	["[勝|かっ][手|て]に", "勝手に", ["かってに"],
		[
			["勝", "かっ", false],
			["手", "て", false],
			["に", null, false]
		], -1
	],
	["[勝|しょう](負|ぶ)", "勝負", ["しょうぶ"],
		[
			["勝", "しょう", false],
			["負", "ぶ", true]
		], "2590"
	],
	["[地|じ][面|めん]", "地面", ["じめん"],
		[
			["地", "じ", false],
			["面", "めん", false]
		], -1
	],
	["[場|ば][面|めん]", "場面", ["ばめん"],
		[
			["場", "ば", false],
			["面", "めん", false]
		], -1
	],
	["[方|ほう][面|めん]", "方面", ["ほうめん"],
		[
			["方", "ほう", false],
			["面", "めん", false]
		], -1
	],
	["[正|しょう][面|めん]", "正面", ["しょうめん"],
		[
			["正", "しょう", false],
			["面", "めん", false]
		], -1
	],
	["[表|ひょう][面|めん]", "表面", ["ひょうめん"],
		[
			["表", "ひょう", false],
			["面", "めん", false]
		], -1
	],
	["[面|めん]", "面", ["めん"],
		[
			["面", "めん", false]
		], -1
	],
	["[水|すい][面|めん]", "水面", ["すいめん"],
		[
			["水", "すい", false],
			["面", "めん", false]
		], -1
	],
	["(真|ま)[面|じ][目|め]", "真面目", ["まじめ"],
		[
			["真", "ま", true],
			["面", "じ", false],
			["目", "め", false]
		], "2352"
	],
	["(湯|ゆ)[気|げ]", "湯気", ["ゆげ"],
		[
			["湯", "ゆ", true],
			["気", "げ", false]
		], "2990"
	],
	["[委|い][員|いん]", "委員", ["いいん"],
		[
			["委", "い", false],
			["員", "いん", false]
		], -1
	],
	["[反|はん]{～}", "反～", ["はん"],
		[
			["反", "はん", false],
			["～", null, false]
		], -1
	],
	["[反|かえ]*5", "反", ["かえ"],
		[
			["反", "かえ", false]
		], -1
	],
	["[反|はん][対|たい]", "反対", ["はんたい"],
		[
			["反", "はん", false],
			["対", "たい", false]
		], -1
	],
	["[西|せい][洋|よう]", "西洋", ["せいよう"],
		[
			["西", "せい", false],
			["洋", "よう", false]
		], -1
	],
	["[洋|よう](服|ふく)", "洋服", ["ようふく"],
		[
			["洋", "よう", false],
			["服", "ふく", true]
		], "2293"
	],
	["無", "無", ["ぶ", "む"],
		[], null
	],
	["{～}[重|じゅう]", "～重", ["じゅう"],
		[
			["～", null, false],
			["重", "じゅう", false]
		], -1
	],
	["[体|たい][重|じゅう]", "体重", ["たいじゅう"],
		[
			["体", "たい", false],
			["重", "じゅう", false]
		], -1
	],
	["[重|じゅう]{～}", "重～", ["じゅう"],
		[
			["重", "じゅう", false],
			["～", null, false]
		], -1
	],
	["[重|おも]たい", "重たい", ["おもたい"],
		[
			["重", "おも", false],
			["た", null, false],
			["い", null, false]
		], -1
	],
	["[重|かさ]な*5", "重な", ["かさな"],
		[
			["重", "かさ", false],
			["な", null, false]
		], -1
	],
	["[重|かさ]ね*る", "重ね", ["かさね"],
		[
			["重", "かさ", false],
			["ね", null, false]
		], -1
	],
	["[重|じゅう][体|たい]", "重体", ["じゅうたい"],
		[
			["重", "じゅう", false],
			["体", "たい", false]
		], -1
	],
	["[重|じゅう][力|りょく]", "重力", ["じゅうりょく"],
		[
			["重", "じゅう", false],
			["力", "りょく", false]
		], -1
	],
	["[重|じゅう][大|だい]", "重大", ["じゅうだい"],
		[
			["重", "じゅう", false],
			["大", "だい", false]
		], -1
	],
	["[重|じゅう][点|てん]", "重点", ["じゅうてん"],
		[
			["重", "じゅう", false],
			["点", "てん", false]
		], -1
	],
	["[重|じゅう](役|やく)", "重役", ["じゅうやく"],
		[
			["重", "じゅう", false],
			["役", "やく", true]
		], "2413"
	],
	["[旅|りょ][行|こう]する", "旅行する", ["りょこうする"],
		[
			["旅", "りょ", false],
			["行", "こう", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["[旅|りょ][館|かん]", "旅館", ["りょかん"],
		[
			["旅", "りょ", false],
			["館", "かん", false]
		], -1
	],
	["{～}[集|しゅう]", "～集", ["しゅう"],
		[
			["～", null, false],
			["集", "しゅう", false]
		], -1
	],
	["[全|ぜん][集|しゅう]", "全集", ["ぜんしゅう"],
		[
			["全", "ぜん", false],
			["集", "しゅう", false]
		], -1
	],
	["[集|あつ]まり", "集まり", ["あつまり"],
		[
			["集", "あつ", false],
			["ま", null, false],
			["り", null, false]
		], -1
	],
	["[集|あつま]*5", "集", ["あつま"],
		[
			["集", "あつま", false]
		], -1
	],
	["[集|しゅう][中|ちゅう]", "集中", ["しゅうちゅう"],
		[
			["集", "しゅう", false],
			["中", "ちゅう", false]
		], -1
	],
	["[集|しゅう][会|かい]", "集会", ["しゅうかい"],
		[
			["集", "しゅう", false],
			["会", "かい", false]
		], -1
	],
	["[集|しゅう][合|ごう]", "集合", ["しゅうごう"],
		[
			["集", "しゅう", false],
			["合", "ごう", false]
		], -1
	],
	["[集|しゅう][金|きん]", "集金", ["しゅうきん"],
		[
			["集", "しゅう", false],
			["金", "きん", false]
		], -1
	],
	["[手|て](帳|ちょう)", "手帳", ["てちょう"],
		[
			["手", "て", false],
			["帳", "ちょう", true]
		], "3001"
	],
	["[通|つう](帳|ちょう)", "通帳", ["つうちょう"],
		[
			["通", "つう", false],
			["帳", "ちょう", true]
		], "3002"
	],
	["{～}[物|ぶつ]", "～物", ["ぶつ"],
		[
			["～", null, false],
			["物", "ぶつ", false]
		], -1
	],
	["[人|じん][物|ぶつ]", "人物", ["じんぶつ"],
		[
			["人", "じん", false],
			["物", "ぶつ", false]
		], -1
	],
	["[作|さく][物|もつ]", "作物", ["さくもつ"],
		[
			["作", "さく", false],
			["物", "もつ", false]
		], -1
	],
	["[入|い]れ[物|もの]", "入れ物", ["いれもの"],
		[
			["入", "い", false],
			["れ", null, false],
			["物", "もの", false]
		], -1
	],
	["[名|めい][物|ぶつ]", "名物", ["めいぶつ"],
		[
			["名", "めい", false],
			["物", "ぶつ", false]
		], -1
	],
	["[実|じつ][物|ぶつ]", "実物", ["じつぶつ"],
		[
			["実", "じつ", false],
			["物", "ぶつ", false]
		], -1
	],
	["[書|しょ][物|もつ]", "書物", ["しょもつ"],
		[
			["書", "しょ", false],
			["物", "もつ", false]
		], -1
	],
	["[本|ほん][物|もの]", "本物", ["ほんもの"],
		[
			["本", "ほん", false],
			["物", "もの", false]
		], -1
	],
	["[物|もの][事|ごと]", "物事", ["ものごと"],
		[
			["物", "もの", false],
			["事", "ごと", false]
		], -1
	],
	["[物|ぶつ][理|り]", "物理", ["ぶつり"],
		[
			["物", "ぶつ", false],
			["理", "り", false]
		], -1
	],
	["[生|い]き[物|もの]", "生き物", ["いきもの"],
		[
			["生", "い", false],
			["き", null, false],
			["物", "もの", false]
		], -1
	],
	["[生|せい][物|ぶつ]", "生物", ["せいぶつ"],
		[
			["生", "せい", false],
			["物", "ぶつ", false]
		], -1
	],
	["[物|もの][語|がたり]", "物語", ["ものがたり"],
		[
			["物", "もの", false],
			["語", "がたり", false]
		], -1
	],
	["[物|もの][語|がた]*5", "物語", ["ものがた"],
		[
			["物", "もの", false],
			["語", "がた", false]
		], -1
	],
	["[食|しょく][物|もつ]", "食物", ["しょくもつ"],
		[
			["食", "しょく", false],
			["物", "もつ", false]
		], -1
	],
	["[物|もの][音|おと]", "物音", ["ものおと"],
		[
			["物", "もの", false],
			["音", "おと", false]
		], -1
	],
	["(落|おと)し[物|もの]", "落し物", ["おとしもの"],
		[
			["落", "おと", true],
			["し", null, false],
			["物", "もの", false]
		], "2559"
	],
	["(植|しょく)[物|ぶつ]", "植物", ["しょくぶつ"],
		[
			["植", "しょく", true],
			["物", "ぶつ", false]
		], "2769"
	],
	["(荷|に)[物|もつ]", "荷物", ["にもつ"],
		[
			["荷", "に", true],
			["物", "もつ", false]
		], "2980"
	],
	["[使|し][用|よう]", "使用", ["しよう"],
		[
			["使", "し", false],
			["用", "よう", false]
		], -1
	],
	["[大|たい][使|し]", "大使", ["たいし"],
		[
			["大", "たい", false],
			["使", "し", false]
		], -1
	],
	["[練|れん][習|しゅう]する", "練習する", ["れんしゅうする"],
		[
			["練", "れん", false],
			["習", "しゅう", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["(漢|かん)[和|わ]", "漢和", ["かんわ"],
		[
			["漢", "かん", true],
			["和", "わ", false]
		], "3006"
	],
	["[名|めい][所|しょ]", "名所", ["めいしょ"],
		[
			["名", "めい", false],
			["所", "しょ", false]
		], -1
	],
	["[場|ば][所|しょ]", "場所", ["ばしょ"],
		[
			["場", "ば", false],
			["所", "しょ", false]
		], -1
	],
	["[所|ところ][々|どころ]", "所々", ["ところどころ"],
		[
			["所", "ところ", false],
			["々", "どころ", false]
		], -1
	],
	["[長|ちょう][所|しょ]", "長所", ["ちょうしょ"],
		[
			["長", "ちょう", false],
			["所", "しょ", false]
		], -1
	],
	["(役|やく)[所|しょ]", "役所", ["やくしょ"],
		[
			["役", "やく", true],
			["所", "しょ", false]
		], "2410"
	],
	["(短|たん)[所|しょ]", "短所", ["たんしょ"],
		[
			["短", "たん", true],
			["所", "しょ", false]
		], "2759"
	],
	["[軽|かる]い", "軽い", ["かるい"],
		[
			["軽", "かる", false],
			["い", null, false]
		], -1
	],
	["[次|つぎ]", "次", ["つぎ"],
		[
			["次", "つぎ", false]
		], -1
	],
	["[次|つぎ][々|つぎ]", "次々", ["つぎつぎ"],
		[
			["次", "つぎ", false],
			["々", "つぎ", false]
		], -1
	],
	["[次|つ]*ぐ", "次", ["つ"],
		[
			["次", "つ", false]
		], -1
	],
	["[次|し][第|だい]", "次第", ["しだい"],
		[
			["次", "し", false],
			["第", "だい", false]
		], -1
	],
	["[目|もく][次|じ]", "目次", ["もくじ"],
		[
			["目", "もく", false],
			["次", "じ", false]
		], -1
	],
	["(羊|よう)[毛|もう]", "羊毛", ["ようもう"],
		[
			["羊", "よう", true],
			["毛", "もう", false]
		], "3013"
	],
	["[上|じょう][品|ひん]", "上品", ["じょうひん"],
		[
			["上", "じょう", false],
			["品", "ひん", false]
		], -1
	],
	["[下|げ][品|ひん]", "下品", ["げひん"],
		[
			["下", "げ", false],
			["品", "ひん", false]
		], -1
	],
	["[作|さく][品|ひん]", "作品", ["さくひん"],
		[
			["作", "さく", false],
			["品", "ひん", false]
		], -1
	],
	["[手|て][品|じな]", "手品", ["てじな"],
		[
			["手", "て", false],
			["品", "じな", false]
		], -1
	],
	["[日|にち][用|よう][品|ひん]", "日用品", ["にちようひん"],
		[
			["日", "にち", false],
			["用", "よう", false],
			["品", "ひん", false]
		], -1
	],
	["[部|ぶ][品|ひん]", "部品", ["ぶひん"],
		[
			["部", "ぶ", false],
			["品", "ひん", false]
		], -1
	],
	["[食|しょく][品|ひん]", "食品", ["しょくひん"],
		[
			["食", "しょく", false],
			["品", "ひん", false]
		], -1
	],
	["(商|しょう)[品|ひん]", "商品", ["しょうひん"],
		[
			["商", "しょう", true],
			["品", "ひん", false]
		], "2550"
	],
	["(薬|やく)[品|ひん]", "薬品", ["やくひん"],
		[
			["薬", "やく", true],
			["品", "ひん", false]
		], "2782"
	],
	["(洋|よう)[品|ひん][店|てん]", "洋品店", ["ようひんてん"],
		[
			["洋", "よう", true],
			["品", "ひん", false],
			["店", "てん", false]
		], "2812"
	],
	["[死|し][体|たい]", "死体", ["したい"],
		[
			["死", "し", false],
			["体", "たい", false]
		], -1
	],
	["[会|かい](議|ぎ)", "会議", ["かいぎ"],
		[
			["会", "かい", false],
			["議", "ぎ", true]
		], "3018"
	],
	["(議|ぎ)[会|かい]", "議会", ["ぎかい"],
		[
			["議", "ぎ", true],
			["会", "かい", false]
		], "3019"
	],
	["(議|ぎ)[長|ちょう]", "議長", ["ぎちょう"],
		[
			["議", "ぎ", true],
			["長", "ちょう", false]
		], "3020"
	],
	["(議|ぎ)[員|いん]", "議員", ["ぎいん"],
		[
			["議", "ぎ", true],
			["員", "いん", false]
		], "3021"
	],
	["[国|こく](民|みん)", "国民", ["こくみん"],
		[
			["国", "こく", false],
			["民", "みん", true]
		], "3023"
	],
	["(民|みん)[間|かん]", "民間", ["みんかん"],
		[
			["民", "みん", true],
			["間", "かん", false]
		], "3024"
	],
	["[市|し](民|みん)", "市民", ["しみん"],
		[
			["市", "し", false],
			["民", "みん", true]
		], "3025"
	],
	["(民|みん)[主|しゅ]{～}", "民主～", ["みんしゅ"],
		[
			["民", "みん", true],
			["主", "しゅ", false],
			["～", null, false]
		], "3026"
	],
	["[係|かかり]", "係", ["かかり"],
		[
			["係", "かかり", false]
		], -1
	],
	["[係|かか]わ*5", "係わ", ["かかわ"],
		[
			["係", "かか", false],
			["わ", null, false]
		], -1
	],
	["(連|れん)[合|ごう]", "連合", ["れんごう"],
		[
			["連", "れん", true],
			["合", "ごう", false]
		], "3030"
	],
	["{～}[感|かん]", "～感", ["かん"],
		[
			["～", null, false],
			["感", "かん", false]
		], -1
	],
	["[実|じっ][感|かん]", "実感", ["じっかん"],
		[
			["実", "じっ", false],
			["感", "かん", false]
		], -1
	],
	["[感|かん]じ", "感じ", ["かんじ"],
		[
			["感", "かん", false],
			["じ", null, false]
		], -1
	],
	["[感|かん]じ*る", "感じ", ["かんじ"],
		[
			["感", "かん", false],
			["じ", null, false]
		], -1
	],
	["[感|かん]ずる", "感ずる", ["かんずる"],
		[
			["感", "かん", false],
			["ず", null, false],
			["る", null, false]
		], -1
	],
	["[感|かん][動|どう]", "感動", ["かんどう"],
		[
			["感", "かん", false],
			["動", "どう", false]
		], -1
	],
	["[感|かん][心|しん]", "感心", ["かんしん"],
		[
			["感", "かん", false],
			["心", "しん", false]
		], -1
	],
	["[感|かん](想|そう)", "感想", ["かんそう"],
		[
			["感", "かん", false],
			["想", "そう", true]
		], "2493"
	],
	["(選|せん)[手|しゅ]", "選手", ["せんしゅ"],
		[
			["選", "せん", true],
			["手", "しゅ", false]
		], "3038"
	],
	["[投|な]げ*る", "投げ", ["なげ"],
		[
			["投", "な", false],
			["げ", null, false]
		], -1
	],
	["[投|とう][書|しょ]", "投書", ["とうしょ"],
		[
			["投", "とう", false],
			["書", "しょ", false]
		], -1
	],
	["(関|かん)[東|とう]", "関東", ["かんとう"],
		[
			["関", "かん", true],
			["東", "とう", false]
		], "3046"
	],
	["(関|かん)[心|しん]", "関心", ["かんしん"],
		[
			["関", "かん", true],
			["心", "しん", false]
		], "3048"
	],
	["(関|かん)[係|けい]", "関係", ["かんけい"],
		[
			["関", "かん", true],
			["係", "けい", false]
		], "3049"
	],
	["(関|かん)[西|さい]", "関西", ["かんさい"],
		[
			["関", "かん", true],
			["西", "さい", false]
		], "3050"
	],
	["[大|たい](戦|せん)", "大戦", ["たいせん"],
		[
			["大", "たい", false],
			["戦", "せん", true]
		], "3058"
	],
	["[打|うち][合|あわ]せ", "打合せ", ["うちあわせ"],
		[
			["打", "うち", false],
			["合", "あわ", false],
			["せ", null, false]
		], -1
	],
	["[打|う]ち(消|け)*す", "打ち消", ["うちけ"],
		[
			["打", "う", false],
			["ち", null, false],
			["消", "け", true]
		], "2447"
	],
	["(最|さい)[中|ちゅう]", "最中", ["さいちゅう"],
		[
			["最", "さい", true],
			["中", "ちゅう", false]
		], "3069"
	],
	["(最|さい)[後|ご]", "最後", ["さいご"],
		[
			["最", "さい", true],
			["後", "ご", false]
		], "3070"
	],
	["(最|さい)[高|こう]", "最高", ["さいこう"],
		[
			["最", "さい", true],
			["高", "こう", false]
		], "3071"
	],
	["(最|さい)[近|きん]", "最近", ["さいきん"],
		[
			["最", "さい", true],
			["近", "きん", false]
		], "3072"
	],
	["{～}[始|はじ]める", "～始める", ["はじめる"],
		[
			["～", null, false],
			["始", "はじ", false],
			["め", null, false],
			["る", null, false]
		], -1
	],
	["[原|げん][始|し]", "原始", ["げんし"],
		[
			["原", "げん", false],
			["始", "し", false]
		], -1
	],
	["[始|はじ]まり", "始まり", ["はじまり"],
		[
			["始", "はじ", false],
			["ま", null, false],
			["り", null, false]
		], -1
	],
	["[始|はじ]めに", "始めに", ["はじめに"],
		[
			["始", "はじ", false],
			["め", null, false],
			["に", null, false]
		], -1
	],
	["[開|かい][始|し]", "開始", ["かいし"],
		[
			["開", "かい", false],
			["始", "し", false]
		], -1
	],
	["[始|し](終|じゅう)", "始終", ["しじゅう"],
		[
			["始", "し", false],
			["終", "じゅう", true]
		], "2326"
	],
	["[服|ふく]", "服", ["ふく"],
		[
			["服", "ふく", false]
		], -1
	],
	["[洋|よう][服|ふく]", "洋服", ["ようふく"],
		[
			["洋", "よう", false],
			["服", "ふく", false]
		], -1
	],
	["(氏|し)[名|めい]", "氏名", ["しめい"],
		[
			["氏", "し", true],
			["名", "めい", false]
		], "3079"
	],
	["{～}[島|とう]", "～島", ["とう"],
		[
			["～", null, false],
			["島", "とう", false]
		], -1
	],
	["[半|はん][島|とう]", "半島", ["はんとう"],
		[
			["半", "はん", false],
			["島", "とう", false]
		], -1
	],
	["[島|しま]", "島", ["しま"],
		[
			["島", "しま", false]
		], -1
	],
	["(列|れっ)[島|とう]", "列島", ["れっとう"],
		[
			["列", "れっ", true],
			["島", "とう", false]
		], "2900"
	],
	["[予|よ](約|やく)", "予約", ["よやく"],
		[
			["予", "よ", false],
			["約", "やく", true]
		], "3082"
	],
	["[方|ほう](法|ほう)", "方法", ["ほうほう"],
		[
			["方", "ほう", false],
			["法", "ほう", true]
		], "3088"
	],
	["[作|さ](法|ほう)", "作法", ["さほう"],
		[
			["作", "さ", false],
			["法", "ほう", true]
		], "3090"
	],
	["[文|ぶん](法|ぽう)", "文法", ["ぶんぽう"],
		[
			["文", "ぶん", false],
			["法", "ぽう", true]
		], "3091"
	],
	["[両|りょう]{～}", "両～", ["りょう"],
		[
			["両", "りょう", false],
			["～", null, false]
		], -1
	],
	["(不|ふ)[通|つう]", "不通", ["ふつう"],
		[
			["不", "ふ", true],
			["通", "つう", false]
		], "3092"
	],
	["(不|ふ)[平|へい]", "不平", ["ふへい"],
		[
			["不", "ふ", true],
			["平", "へい", false]
		], "3093"
	],
	["(不|ふ)[思|し](議|ぎ)", "不思議", ["ふしぎ"],
		[
			["不", "ふ", true],
			["思", "し", false],
			["議", "ぎ", true]
		], "3022"
	],
	["(不|ふ)[正|せい]", "不正", ["ふせい"],
		[
			["不", "ふ", true],
			["正", "せい", false]
		], "3095"
	],
	["(不|ふ)[安|あん]", "不安", ["ふあん"],
		[
			["不", "ふ", true],
			["安", "あん", false]
		], "3096"
	],
	["(不|ふ)[自|じ](由|ゆう)", "不自由", ["ふじゆう"],
		[
			["不", "ふ", true],
			["自", "じ", false],
			["由", "ゆう", true]
		], "2429"
	],
	["(不|ふ)[足|そく]", "不足", ["ふそく"],
		[
			["不", "ふ", true],
			["足", "そく", false]
		], "3099"
	],
	["[公|こう][式|しき]", "公式", ["こうしき"],
		[
			["公", "こう", false],
			["式", "しき", false]
		], -1
	],
	["[式|しき]", "式", ["しき"],
		[
			["式", "しき", false]
		], -1
	],
	["[正|せい][式|しき]", "正式", ["せいしき"],
		[
			["正", "せい", false],
			["式", "しき", false]
		], -1
	],
	["[形|けい][式|しき]", "形式", ["けいしき"],
		[
			["形", "けい", false],
			["式", "しき", false]
		], -1
	],
	["[目|もく](的|てき)", "目的", ["もくてき"],
		[
			["目", "もく", false],
			["的", "てき", true]
		], "3108"
	],
	["[運|うん]", "運", ["うん"],
		[
			["運", "うん", false]
		], -1
	],
	["[運|うん][動|どう]", "運動", ["うんどう"],
		[
			["運", "うん", false],
			["動", "どう", false]
		], -1
	],
	["[運|うん](転|てん)", "運転", ["うんてん"],
		[
			["運", "うん", false],
			["転", "てん", true]
		], "2438"
	],
	["(幸|こう)[運|うん]", "幸運", ["こううん"],
		[
			["幸", "こう", true],
			["運", "うん", false]
		], "2835"
	],
	["(不|ふ)[運|うん]", "不運", ["ふうん"],
		[
			["不", "ふ", true],
			["運", "うん", false]
		], "3097"
	],
	["[主|しゅ](要|よう)", "主要", ["しゅよう"],
		[
			["主", "しゅ", false],
			["要", "よう", true]
		], "3119"
	],
	["(要|よう)[点|てん]", "要点", ["ようてん"],
		[
			["要", "よう", true],
			["点", "てん", false]
		], "3122"
	],
	["[重|じゅう](要|よう)", "重要", ["じゅうよう"],
		[
			["重", "じゅう", false],
			["要", "よう", true]
		], "3123"
	],
	["[自|じ](治|ち)", "自治", ["じち"],
		[
			["自", "じ", false],
			["治", "ち", true]
		], "3130"
	],
	["{～}[終|おわ]る", "～終る", ["おわる"],
		[
			["～", null, false],
			["終", "おわ", false],
			["る", null, false]
		], -1
	],
	["[始|し][終|じゅう]", "始終", ["しじゅう"],
		[
			["始", "し", false],
			["終", "じゅう", false]
		], -1
	],
	["[終|おわり]", "終", ["おわり"],
		[
			["終", "おわり", false]
		], -1
	],
	["[終|お]え*る", "終え", ["おえ"],
		[
			["終", "お", false],
			["え", null, false]
		], -1
	],
	["[終|おわ]*5", "終", ["おわ"],
		[
			["終", "おわ", false]
		], -1
	],
	["[終|しゅう][点|てん]", "終点", ["しゅうてん"],
		[
			["終", "しゅう", false],
			["点", "てん", false]
		], -1
	],
	["(最|さい)[終|しゅう]", "最終", ["さいしゅう"],
		[
			["最", "さい", true],
			["終", "しゅう", false]
		], "3073"
	],
	["[作|さく](成|せい)", "作成", ["さくせい"],
		[
			["作", "さく", false],
			["成", "せい", true]
		], "3135"
	],
	["(成|せい)[人|じん]", "成人", ["せいじん"],
		[
			["成", "せい", true],
			["人", "じん", false]
		], "3137"
	],
	["(成|せい)[分|ぶん]", "成分", ["せいぶん"],
		[
			["成", "せい", true],
			["分", "ぶん", false]
		], "3138"
	],
	["(成|せい)[立|りつ]", "成立", ["せいりつ"],
		[
			["成", "せい", true],
			["立", "りつ", false]
		], "3139"
	],
	["(成|せい)[長|ちょう]", "成長", ["せいちょう"],
		[
			["成", "せい", true],
			["長", "ちょう", false]
		], "3140"
	],
	["[住|す]まい", "住まい", ["すまい"],
		[
			["住", "す", false],
			["ま", null, false],
			["い", null, false]
		], -1
	],
	["[飲|の]み[物|もの]", "飲み物", ["のみもの"],
		[
			["飲", "の", false],
			["み", null, false],
			["物", "もの", false]
		], -1
	],
	["[住|じゅう](民|みん)", "住民", ["じゅうみん"],
		[
			["住", "じゅう", false],
			["民", "みん", true]
		], "3027"
	],
	["(協|きょう)[力|りょく]", "協力", ["きょうりょく"],
		[
			["協", "きょう", true],
			["力", "りょく", false]
		], "3146"
	],
	["[相|そう][談|だん]", "相談", ["そうだん"],
		[
			["相", "そう", false],
			["談", "だん", false]
		], -1
	],
	["(以|い)[前|ぜん]", "以前", ["いぜん"],
		[
			["以", "い", true],
			["前", "ぜん", false]
		], "3148"
	],
	["(以|い)[外|がい]", "以外", ["いがい"],
		[
			["以", "い", true],
			["外", "がい", false]
		], "3149"
	],
	["(以|い)[後|ご]", "以後", ["いご"],
		[
			["以", "い", true],
			["後", "ご", false]
		], "3150"
	],
	["(以|い)[来|らい]", "以来", ["いらい"],
		[
			["以", "い", true],
			["来", "らい", false]
		], "3151"
	],
	["(機|き)[会|かい]", "機会", ["きかい"],
		[
			["機", "き", true],
			["会", "かい", false]
		], "3155"
	],
	["[交|こう][通|つう](機|き)(関|かん)", "交通機関", ["こうつうきかん"],
		[
			["交", "こう", false],
			["通", "つう", false],
			["機", "き", true],
			["関", "かん", true]
		], "3052"
	],
	["(機|き)(関|かん)[車|しゃ]", "機関車", ["きかんしゃ"],
		[
			["機", "き", true],
			["関", "かん", true],
			["車", "しゃ", false]
		], "3053"
	],
	["[真|ま]っ[先|さき]", "真っ先", ["まっさき"],
		[
			["真", "ま", false],
			["っ", null, false],
			["先", "さき", false]
		], -1
	],
	["[真|ま]っ[直|す]ぐ", "真っ直ぐ", ["まっすぐ"],
		[
			["真", "ま", false],
			["っ", null, false],
			["直", "す", false],
			["ぐ", null, false]
		], -1
	],
	["[真|まん][中|なか]", "真中", ["まんなか"],
		[
			["真", "まん", false],
			["中", "なか", false]
		], -1
	],
	["[真|ま][面|じ][目|め]", "真面目", ["まじめ"],
		[
			["真", "ま", false],
			["面", "じ", false],
			["目", "め", false]
		], -1
	],
	["[真|しん][空|くう]", "真空", ["しんくう"],
		[
			["真", "しん", false],
			["空", "くう", false]
		], -1
	],
	["[真|ま]っ[白|しろ]", "真っ白", ["まっしろ"],
		[
			["真", "ま", false],
			["っ", null, false],
			["白", "しろ", false]
		], -1
	],
	["[真|ま]っ[黒|くろ]", "真っ黒", ["まっくろ"],
		[
			["真", "ま", false],
			["っ", null, false],
			["黒", "くろ", false]
		], -1
	],
	["[真|ま]っ[赤|か]", "真っ赤", ["まっか"],
		[
			["真", "ま", false],
			["っ", null, false],
			["赤", "か", false]
		], -1
	],
	["[真|ま]っ[青|さお]", "真っ青", ["まっさお"],
		[
			["真", "ま", false],
			["っ", null, false],
			["青", "さお", false]
		], -1
	],
	["[真|ま]っ(暗|くら)", "真っ暗", ["まっくら"],
		[
			["真", "ま", false],
			["っ", null, false],
			["暗", "くら", true]
		], "2933"
	],
	["(加|か)(速|そく)[度|ど]", "加速度", ["かそくど"],
		[
			["加", "か", true],
			["速", "そく", true],
			["度", "ど", false]
		], "2702"
	],
	["{～}[流|りゅう]", "～流", ["りゅう"],
		[
			["～", null, false],
			["流", "りゅう", false]
		], -1
	],
	["[一|いち][流|りゅう]", "一流", ["いちりゅう"],
		[
			["一", "いち", false],
			["流", "りゅう", false]
		], -1
	],
	["[交|こう][流|りゅう]", "交流", ["こうりゅう"],
		[
			["交", "こう", false],
			["流", "りゅう", false]
		], -1
	],
	["[合|ごう][流|りゅう]", "合流", ["ごうりゅう"],
		[
			["合", "ごう", false],
			["流", "りゅう", false]
		], -1
	],
	["[流|なが]*す", "流", ["なが"],
		[
			["流", "なが", false]
		], -1
	],
	["[流|なが]れ", "流れ", ["ながれ"],
		[
			["流", "なが", false],
			["れ", null, false]
		], -1
	],
	["[流|なが]れ*る", "流れ", ["ながれ"],
		[
			["流", "なが", false],
			["れ", null, false]
		], -1
	],
	["[流|りゅう][行|こう]", "流行", ["りゅうこう"],
		[
			["流", "りゅう", false],
			["行", "こう", false]
		], -1
	],
	["[流行|はや]*5", "流行", ["はや"],
		[
			["流行", "はや", false]
		], -1
	],
	["[直|ちょく][流|りゅう]", "直流", ["ちょくりゅう"],
		[
			["直", "ちょく", false],
			["流", "りゅう", false]
		], -1
	],
	["[電|でん][流|りゅう]", "電流", ["でんりゅう"],
		[
			["電", "でん", false],
			["流", "りゅう", false]
		], -1
	],
	["[流石|さすが]", "流石", ["さすが"],
		[
			["流石", "さすが", false]
		], -1
	],
	["[手|て](続|つづ)き", "手続き", ["てつづき"],
		[
			["手", "て", false],
			["続", "つづ", true],
			["き", null, false]
		], "3174"
	],
	["[相|そう](続|ぞく)", "相続", ["そうぞく"],
		[
			["相", "そう", false],
			["続", "ぞく", true]
		], "3175"
	],
	["[有|あ]*5", "有", ["あ"],
		[
			["有", "あ", false]
		], -1
	],
	["(改|かい)[正|せい]", "改正", ["かいせい"],
		[
			["改", "かい", true],
			["正", "せい", false]
		], "3186"
	],
	["(初|しょ)[歩|ほ]", "初歩", ["しょほ"],
		[
			["初", "しょ", true],
			["歩", "ほ", false]
		], "3194"
	],
	["[局|きょく]", "局", ["きょく"],
		[
			["局", "きょく", false]
		], -1
	],
	["(薬|やっ)[局|きょく]", "薬局", ["やっきょく"],
		[
			["薬", "やっ", true],
			["局", "きょく", false]
		], "2783"
	],
	["[大|だい](好|す)き", "大好き", ["だいすき"],
		[
			["大", "だい", false],
			["好", "す", true],
			["き", null, false]
		], -1
	],
	["[生|せい](産|さん)", "生産", ["せいさん"],
		[
			["生", "せい", false],
			["産", "さん", true]
		], "3200"
	],
	["(産|さん)[地|ち]", "産地", ["さんち"],
		[
			["産", "さん", true],
			["地", "ち", false]
		], "3201"
	],
	["(産|さん)[業|ぎょう]", "産業", ["さんぎょう"],
		[
			["産", "さん", true],
			["業", "ぎょう", false]
		], "3202"
	],
	["[原|げん](産|さん)", "原産", ["げんさん"],
		[
			["原", "げん", false],
			["産", "さん", true]
		], "3203"
	],
	["[水|すい](産|さん)", "水産", ["すいさん"],
		[
			["水", "すい", false],
			["産", "さん", true]
		], "3204"
	],
	["(農|のう)(産|さん)[物|ぶつ]", "農産物", ["のうさんぶつ"],
		[
			["農", "のう", true],
			["産", "さん", true],
			["物", "ぶつ", false]
		], "2511"
	],
	["[放|はな]*す", "放", ["はな"],
		[
			["放", "はな", false]
		], -1
	],
	["[放|ほう]*5", "放", ["ほう"],
		[
			["放", "ほう", false]
		], -1
	],
	["[放|はな]れ*る", "放れ", ["はなれ"],
		[
			["放", "はな", false],
			["れ", null, false]
		], -1
	],
	["[開|かい][放|ほう]", "開放", ["かいほう"],
		[
			["開", "かい", false],
			["放", "ほう", false]
		], -1
	],
	["[放|ほう](送|そう)", "放送", ["ほうそう"],
		[
			["放", "ほう", false],
			["送", "そう", true]
		], "2403"
	],
	["[勉|べん][強|きょう]する", "勉強する", ["べんきょうする"],
		[
			["勉", "べん", false],
			["強", "きょう", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["(結|けっ)[局|きょく]", "結局", ["けっきょく"],
		[
			["結", "けっ", true],
			["局", "きょく", false]
		], "3213"
	],
	["[地|ち][球|きゅう]", "地球", ["ちきゅう"],
		[
			["地", "ち", false],
			["球", "きゅう", false]
		], -1
	],
	["[電|でん][球|きゅう]", "電球", ["でんきゅう"],
		[
			["電", "でん", false],
			["球", "きゅう", false]
		], -1
	],
	["[公|こう](共|きょう)", "公共", ["こうきょう"],
		[
			["公", "こう", false],
			["共", "きょう", true]
		], "3219"
	],
	["(共|きょう)[同|どう]", "共同", ["きょうどう"],
		[
			["共", "きょう", true],
			["同", "どう", false]
		], "3221"
	],
	["(共|きょう)[通|つう]", "共通", ["きょうつう"],
		[
			["共", "きょう", true],
			["通", "つう", false]
		], "3223"
	],
	["[急|きゅう]に", "急に", ["きゅうに"],
		[
			["急", "きゅう", false],
			["に", null, false]
		], -1
	],
	["[急|きゅう](速|そく)", "急速", ["きゅうそく"],
		[
			["急", "きゅう", false],
			["速", "そく", true]
		], "2694"
	],
	["(英|えい)[語|ご]", "英語", ["えいご"],
		[
			["英", "えい", true],
			["語", "ご", false]
		], -1
	],
	["(得|とく)[意|い]", "得意", ["とくい"],
		[
			["得", "とく", true],
			["意", "い", false]
		], "3228"
	],
	["[心|こころ](得|え)*る", "心得", ["こころえ"],
		[
			["心", "こころ", false],
			["得", "え", true]
		], "3229"
	],
	["[放|ほう][送|そう]", "放送", ["ほうそう"],
		[
			["放", "ほう", false],
			["送", "そう", false]
		], -1
	],
	["[見|み][送|おく]り", "見送り", ["みおくり"],
		[
			["見", "み", false],
			["送", "おく", false],
			["り", null, false]
		], -1
	],
	["[見|み][送|おく]*5", "見送", ["みおく"],
		[
			["見", "み", false],
			["送", "おく", false]
		], -1
	],
	["[広|こう](告|こく)", "広告", ["こうこく"],
		[
			["広", "こう", false],
			["告", "こく", true]
		], "3233"
	],
	["[主|しゅ][役|やく]", "主役", ["しゅやく"],
		[
			["主", "しゅ", false],
			["役", "やく", false]
		], -1
	],
	["[役|やく]", "役", ["やく"],
		[
			["役", "やく", false]
		], -1
	],
	["[役|やく][人|にん]", "役人", ["やくにん"],
		[
			["役", "やく", false],
			["人", "にん", false]
		], -1
	],
	["[役|やく][所|しょ]", "役所", ["やくしょ"],
		[
			["役", "やく", false],
			["所", "しょ", false]
		], -1
	],
	["[役|やく][目|め]", "役目", ["やくめ"],
		[
			["役", "やく", false],
			["目", "め", false]
		], -1
	],
	["[役|やく][者|しゃ]", "役者", ["やくしゃ"],
		[
			["役", "やく", false],
			["者", "しゃ", false]
		], -1
	],
	["[重|じゅう][役|やく]", "重役", ["じゅうやく"],
		[
			["重", "じゅう", false],
			["役", "やく", false]
		], -1
	],
	["(参|さん)[考|こう]", "参考", ["さんこう"],
		[
			["参", "さん", true],
			["考", "こう", false]
		], "3252"
	],
	["[持|じ](参|さん)", "持参", ["じさん"],
		[
			["持", "じ", false],
			["参", "さん", true]
		], "3253"
	],
	["[中|なか][身|み]", "中身", ["なかみ"],
		[
			["中", "なか", false],
			["身", "み", false]
		], -1
	],
	["[全|ぜん][身|しん]", "全身", ["ぜんしん"],
		[
			["全", "ぜん", false],
			["身", "しん", false]
		], -1
	],
	["[出|しゅっ][身|しん]", "出身", ["しゅっしん"],
		[
			["出", "しゅっ", false],
			["身", "しん", false]
		], -1
	],
	["[心|しん][身|しん]", "心身", ["しんしん"],
		[
			["心", "しん", false],
			["身", "しん", false]
		], -1
	],
	["[自|じ][身|しん]", "自身", ["じしん"],
		[
			["自", "じ", false],
			["身", "しん", false]
		], -1
	],
	["[身|み]", "身", ["み"],
		[
			["身", "み", false]
		], -1
	],
	["[身|しん][体|たい]", "身体", ["しんたい"],
		[
			["身", "しん", false],
			["体", "たい", false]
		], -1
	],
	["[身|み][分|ぶん]", "身分", ["みぶん"],
		[
			["身", "み", false],
			["分", "ぶん", false]
		], -1
	],
	["[身|しん][長|ちょう]", "身長", ["しんちょう"],
		[
			["身", "しん", false],
			["長", "ちょう", false]
		], -1
	],
	["[有|ゆう](利|り)", "有利", ["ゆうり"],
		[
			["有", "ゆう", false],
			["利", "り", true]
		], "3262"
	],
	["(利|り)[口|こう]", "利口", ["りこう"],
		[
			["利", "り", true],
			["口", "こう", false]
		], "3263"
	],
	["[理|り][由|ゆう]", "理由", ["りゆう"],
		[
			["理", "り", false],
			["由", "ゆう", false]
		], -1
	],
	["[自|じ][由|ゆう]", "自由", ["じゆう"],
		[
			["自", "じ", false],
			["由", "ゆう", false]
		], -1
	],
	["(不|ふ)[自|じ][由|ゆう]", "不自由", ["ふじゆう"],
		[
			["不", "ふ", true],
			["自", "じ", false],
			["由", "ゆう", false]
		], "3098"
	],
	["(案|あん)[内|ない]", "案内", ["あんない"],
		[
			["案", "あん", true],
			["内", "ない", false]
		], "3268"
	],
	["(案|あん)[外|がい]", "案外", ["あんがい"],
		[
			["案", "あん", true],
			["外", "がい", false]
		], "3269"
	],
	["[答|とう](案|あん)", "答案", ["とうあん"],
		[
			["答", "とう", false],
			["案", "あん", true]
		], "3270"
	],
	["[回|かい][転|てん]", "回転", ["かいてん"],
		[
			["回", "かい", false],
			["転", "てん", false]
		], -1
	],
	["[転|てん][々|てん]", "転々", ["てんてん"],
		[
			["転", "てん", false],
			["々", "てん", false]
		], -1
	],
	["[転|ころ]が*す", "転が", ["ころが"],
		[
			["転", "ころ", false],
			["が", null, false]
		], -1
	],
	["[転|ころ]が*5", "転が", ["ころが"],
		[
			["転", "ころ", false],
			["が", null, false]
		], -1
	],
	["[転|ころ]*ぶ", "転", ["ころ"],
		[
			["転", "ころ", false]
		], -1
	],
	["[運|うん][転|てん]", "運転", ["うんてん"],
		[
			["運", "うん", false],
			["転", "てん", false]
		], -1
	],
	["(信|しん)[用|よう]", "信用", ["しんよう"],
		[
			["信", "しん", true],
			["用", "よう", false]
		], "3274"
	],
	["[通|つう](信|しん)", "通信", ["つうしん"],
		[
			["通", "つう", false],
			["信", "しん", true]
		], "3275"
	],
	["[食|しょく](堂|どう)", "食堂", ["しょくどう"],
		[
			["食", "しょく", false],
			["堂", "どう", true]
		], "3506"
	],
	["[区|く](別|べつ)", "区別", ["くべつ"],
		[
			["区", "く", false],
			["別", "べつ", true]
		], "3281"
	],
	["[送|そう](別|べつ)", "送別", ["そうべつ"],
		[
			["送", "そう", false],
			["別", "べつ", true]
		], "3282"
	],
	["[夕|ゆう](飯|はん)", "夕飯", ["ゆうはん"],
		[
			["夕", "ゆう", false],
			["飯", "はん", true]
		], "3511"
	],
	["[両|りょう](側|がわ)", "両側", ["りょうがわ"],
		[
			["両", "りょう", false],
			["側", "がわ", true]
		], "3289"
	],
	["[取|と]り[消|け]*す", "取り消", ["とりけ"],
		[
			["取", "と", false],
			["り", null, false],
			["消", "け", false]
		], -1
	],
	["[打|う]ち[消|け]*す", "打ち消", ["うちけ"],
		[
			["打", "う", false],
			["ち", null, false],
			["消", "け", false]
		], -1
	],
	["[消|け]しゴム", "消しゴム", ["けしゴム"],
		[
			["消", "け", false],
			["し", null, false],
			["ゴ", null, false],
			["ム", null, false]
		], -1
	],
	["[消|しょう][化|か]", "消化", ["しょうか"],
		[
			["消", "しょう", false],
			["化", "か", false]
		], -1
	],
	["[神|かみ]", "神", ["かみ"],
		[
			["神", "かみ", false]
		], -1
	],
	["[神|じん][社|じゃ]", "神社", ["じんじゃ"],
		[
			["神", "じん", false],
			["社", "じゃ", false]
		], -1
	],
	["[神|しん][話|わ]", "神話", ["しんわ"],
		[
			["神", "しん", false],
			["話", "わ", false]
		], -1
	],
	["[神|かみ](様|さま)", "神様", ["かみさま"],
		[
			["神", "かみ", false],
			["様", "さま", true]
		], "2644"
	],
	["[一|いっ](昨|さく)[年|ねん]", "一昨年", ["いっさくねん"],
		[
			["一", "いっ", false],
			["昨", "さく", true],
			["年", "ねん", false]
		], "3299"
	],
	["[一|いっ](昨|さく)[日|じつ]", "一昨日", ["いっさくじつ"],
		[
			["一", "いっ", false],
			["昨", "さく", true],
			["日", "じつ", false]
		], "3300"
	],
	["[心|しん][配|ぱい]", "心配", ["しんぱい"],
		[
			["心", "しん", false],
			["配", "ぱい", false]
		], -1
	],
	["[気|け][配|はい]", "気配", ["けはい"],
		[
			["気", "け", false],
			["配", "はい", false]
		], -1
	],
	["[配|くば]*5", "配", ["くば"],
		[
			["配", "くば", false]
		], -1
	],
	["(特|とく)[売|ばい]", "特売", ["とくばい"],
		[
			["特", "とく", true],
			["売", "ばい", false]
		], "3305"
	],
	["(特|とく)[定|てい]", "特定", ["とくてい"],
		[
			["特", "とく", true],
			["定", "てい", false]
		], "3306"
	],
	["(特|とく)[長|ちょう]", "特長", ["とくちょう"],
		[
			["特", "とく", true],
			["長", "ちょう", false]
		], "3307"
	],
	["(特|とく)[色|しょく]", "特色", ["とくしょく"],
		[
			["特", "とく", true],
			["色", "しょく", false]
		], "3308"
	],
	["(変|へん)[化|か]", "変化", ["へんか"],
		[
			["変", "へん", true],
			["化", "か", false]
		], "3316"
	],
	["[水|すい][泳|えい]", "水泳", ["すいえい"],
		[
			["水", "すい", false],
			["泳", "えい", false]
		], -1
	],
	["[泳|およ]*ぐ", "泳", ["およ"],
		[
			["泳", "およ", false]
		], -1
	],
	["(各|かく)[地|ち]", "各地", ["かくち"],
		[
			["各", "かく", true],
			["地", "ち", false]
		], "3321"
	],
	["(各|かく)[自|じ]", "各自", ["かくじ"],
		[
			["各", "かく", true],
			["自", "じ", false]
		], "3322"
	],
	["[体|たい][育|いく]", "体育", ["たいいく"],
		[
			["体", "たい", false],
			["育", "いく", false]
		], -1
	],
	["[育|そだ]*つ", "育", ["そだ"],
		[
			["育", "そだ", false]
		], -1
	],
	["[育|そだ]て*る", "育て", ["そだて"],
		[
			["育", "そだ", false],
			["て", null, false]
		], -1
	],
	["(果|か)[実|じつ]", "果実", ["かじつ"],
		[
			["果", "か", true],
			["実", "じつ", false]
		], "3327"
	],
	["(果|くだ)[物|もの]", "果物", ["くだもの"],
		[
			["果", "くだ", true],
			["物", "もの", false]
		], "3328"
	],
	["[起|お]こ*5", "起こ", ["おこ"],
		[
			["起", "お", false],
			["こ", null, false]
		], -1
	],
	["[起|おこ]*す", "起", ["おこ"],
		[
			["起", "おこ", false]
		], -1
	],
	["(必|ひっ)[死|し]", "必死", ["ひっし"],
		[
			["必", "ひっ", true],
			["死", "し", false]
		], "3334"
	],
	["{～}[着|ちゃく]", "～着", ["ちゃく"],
		[
			["～", null, false],
			["着", "ちゃく", false]
		], -1
	],
	["[水|みず][着|ぎ]", "水着", ["みずぎ"],
		[
			["水", "みず", false],
			["着", "ぎ", false]
		], -1
	],
	["[着|ちゃく][々|ちゃく]", "着々", ["ちゃくちゃく"],
		[
			["着", "ちゃく", false],
			["々", "ちゃく", false]
		], -1
	],
	["[着|つ]け*る", "着け", ["つけ"],
		[
			["着", "つ", false],
			["け", null, false]
		], -1
	],
	["[着|き]せ*る", "着せ", ["きせ"],
		[
			["着", "き", false],
			["せ", null, false]
		], -1
	],
	["(落|おち)[着|つ]く", "落着く", ["おちつく"],
		[
			["落", "おち", true],
			["着", "つ", false],
			["く", null, false]
		], "2562"
	],
	["(無|ぶ)[事|じ]", "無事", ["ぶじ"],
		[
			["無", "ぶ", true],
			["事", "じ", false]
		], "3346"
	],
	["(無|む)[地|じ]", "無地", ["むじ"],
		[
			["無", "む", true],
			["地", "じ", false]
		], "3347"
	],
	["(無|む)[数|すう]", "無数", ["むすう"],
		[
			["無", "む", true],
			["数", "すう", false]
		], "3348"
	],
	["[間|ま]も(無|な)く", "間も無く", ["まもなく"],
		[
			["間", "ま", false],
			["も", null, false],
			["無", "な", true],
			["く", null, false]
		], "3349"
	],
	["[有|う](無|む)", "有無", ["うむ"],
		[
			["有", "う", false],
			["無", "む", true]
		], "3350"
	],
	["[乗|の]せ*る", "乗せ", ["のせ"],
		[
			["乗", "の", false],
			["せ", null, false]
		], -1
	],
	["[乗|じょう][車|しゃ]", "乗車", ["じょうしゃ"],
		[
			["乗", "じょう", false],
			["車", "しゃ", false]
		], -1
	],
	["[乗|じょう](客|きゃく)", "乗客", ["じょうきゃく"],
		[
			["乗", "じょう", false],
			["客", "きゃく", true]
		], "2682"
	],
	["[友|とも](達|だち)", "友達", ["ともだち"],
		[
			["友", "とも", false],
			["達", "だち", true]
		], -1
	],
	["[地|ち](位|い)", "地位", ["ちい"],
		[
			["地", "ち", false],
			["位", "い", true]
		], "3356"
	],
	["[思|し][想|そう]", "思想", ["しそう"],
		[
			["思", "し", false],
			["想", "そう", false]
		], -1
	],
	["[感|かん][想|そう]", "感想", ["かんそう"],
		[
			["感", "かん", false],
			["想", "そう", false]
		], -1
	],
	["[理|り][想|そう]", "理想", ["りそう"],
		[
			["理", "り", false],
			["想", "そう", false]
		], -1
	],
	["[発|はっ][想|そう]", "発想", ["はっそう"],
		[
			["発", "はっ", false],
			["想", "そう", false]
		], -1
	],
	["[空|くう][想|そう]", "空想", ["くうそう"],
		[
			["空", "くう", false],
			["想", "そう", false]
		], -1
	],
	["(連|れん)[想|そう]", "連想", ["れんそう"],
		[
			["連", "れん", true],
			["想", "そう", false]
		], "3031"
	],
	["[物|もの](置|おき)", "物置", ["ものおき"],
		[
			["物", "もの", false],
			["置", "おき", true]
		], "3364"
	],
	["{～}[病|びょう]", "～病", ["びょう"],
		[
			["～", null, false],
			["病", "びょう", false]
		], -1
	],
	["[原|げん](料|りょう)", "原料", ["げんりょう"],
		[
			["原", "げん", false],
			["料", "りょう", true]
		], "3372"
	],
	["(料|りょう)[金|きん]", "料金", ["りょうきん"],
		[
			["料", "りょう", true],
			["金", "きん", false]
		], "3373"
	],
	["[有|ゆう](料|りょう)", "有料", ["ゆうりょう"],
		[
			["有", "ゆう", false],
			["料", "りょう", true]
		], "3374"
	],
	["[送|そう](料|りょう)", "送料", ["そうりょう"],
		[
			["送", "そう", false],
			["料", "りょう", true]
		], "3376"
	],
	["[食|しょく](料|りょう)", "食料", ["しょくりょう"],
		[
			["食", "しょく", false],
			["料", "りょう", true]
		], "3377"
	],
	["[調|ちょう](味|み)(料|りょう)", "調味料", ["ちょうみりょう"],
		[
			["調", "ちょう", false],
			["味", "み", true],
			["料", "りょう", true]
		], "2585"
	],
	["[農|のう][家|か]", "農家", ["のうか"],
		[
			["農", "のう", false],
			["家", "か", false]
		], -1
	],
	["[農|のう][村|そん]", "農村", ["のうそん"],
		[
			["農", "のう", false],
			["村", "そん", false]
		], -1
	],
	["[農|のう][業|ぎょう]", "農業", ["のうぎょう"],
		[
			["農", "のう", false],
			["業", "ぎょう", false]
		], -1
	],
	["[農|のう](薬|やく)", "農薬", ["のうやく"],
		[
			["農", "のう", false],
			["薬", "やく", true]
		], "2785"
	],
	["[農|のう](民|みん)", "農民", ["のうみん"],
		[
			["農", "のう", false],
			["民", "みん", true]
		], "3028"
	],
	["[農|のう](産|さん)[物|ぶつ]", "農産物", ["のうさんぶつ"],
		[
			["農", "のう", false],
			["産", "さん", true],
			["物", "ぶつ", false]
		], "3206"
	],
	["(費|ひ)[用|よう]", "費用", ["ひよう"],
		[
			["費", "ひ", true],
			["用", "よう", false]
		], "3385"
	],
	["[消|しょう](費|ひ)", "消費", ["しょうひ"],
		[
			["消", "しょう", false],
			["費", "ひ", true]
		], "3386"
	],
	["[州|しゅう]", "州", ["しゅう"],
		[
			["州", "しゅう", false]
		], -1
	],
	["[暑|あつ]い", "暑い", ["あつい"],
		[
			["暑", "あつ", false],
			["い", null, false]
		], -1
	],
	["(付|つ)き[合|あ]い", "付き合い", ["つきあい"],
		[
			["付", "つ", true],
			["き", null, false],
			["合", "あ", false],
			["い", null, false]
		], "3392"
	],
	["(付|つき)[合|あ]う", "付合う", ["つきあう"],
		[
			["付", "つき", true],
			["合", "あ", false],
			["う", null, false]
		], "3395"
	],
	["(付|ふ)[近|きん]", "付近", ["ふきん"],
		[
			["付", "ふ", true],
			["近", "きん", false]
		], "3396"
	],
	["[受|うけ](付|つけ)", "受付", ["うけつけ"],
		[
			["受", "うけ", false],
			["付", "つけ", true]
		], "3397"
	],
	["[思|おも]い(付|つ)*く", "思い付", ["おもいつ"],
		[
			["思", "おも", false],
			["い", null, false],
			["付", "つ", true]
		], "3398"
	],
	["[日|ひ](付|づけ)", "日付", ["ひづけ"],
		[
			["日", "ひ", false],
			["付", "づけ", true]
		], "3399"
	],
	["[気|き]を(付|つ)ける", "気を付ける", ["きをつける"],
		[
			["気", "き", false],
			["を", null, false],
			["付", "つ", true],
			["け", null, false],
			["る", null, false]
		], "3400"
	],
	["[気|き](付|づ)*く", "気付", ["きづ"],
		[
			["気", "き", false],
			["付", "づ", true]
		], "3401"
	],
	["[見|み](付|つ)か*5", "見付か", ["みつか"],
		[
			["見", "み", false],
			["付", "つ", true],
			["か", null, false]
		], "3402"
	],
	["[見|み](付|つ)け*る", "見付け", ["みつけ"],
		[
			["見", "み", false],
			["付", "つ", true],
			["け", null, false]
		], "3403"
	],
	["[言|い]い(付|つ)け*る", "言い付け", ["いいつけ"],
		[
			["言", "い", false],
			["い", null, false],
			["付", "つ", true],
			["け", null, false]
		], "3404"
	],
	["[言|こと](付|づ)け*る", "言付け", ["ことづけ"],
		[
			["言", "こと", false],
			["付", "づ", true],
			["け", null, false]
		], "3405"
	],
	["[近|ちか](付|づ)け*る", "近付け", ["ちかづけ"],
		[
			["近", "ちか", false],
			["付", "づ", true],
			["け", null, false]
		], "3406"
	],
	["(留|りゅう)[学|がく][生|せい]", "留学生", ["りゅうがくせい"],
		[
			["留", "りゅう", true],
			["学", "がく", false],
			["生", "せい", false]
		], "3784"
	],
	["[野|や](菜|さい)", "野菜", ["やさい"],
		[
			["野", "や", false],
			["菜", "さい", true]
		], "3620"
	],
	["[待|ま]ち[合|あ]わせる", "待ち合わせる", ["まちあわせる"],
		[
			["待", "ま", false],
			["ち", null, false],
			["合", "あ", false],
			["わ", null, false],
			["せ", null, false],
			["る", null, false]
		], -1
	],
	["[期|き][待|たい]", "期待", ["きたい"],
		[
			["期", "き", false],
			["待", "たい", false]
		], -1
	],
	["[待|まち][合|あい][室|しつ]", "待合室", ["まちあいしつ"],
		[
			["待", "まち", false],
			["合", "あい", false],
			["室", "しつ", false]
		], -1
	],
	["[社|しゃ](説|せつ)", "社説", ["しゃせつ"],
		[
			["社", "しゃ", false],
			["説", "せつ", true]
		], "3412"
	],
	["(夫|ふ)[人|じん]", "夫人", ["ふじん"],
		[
			["夫", "ふ", true],
			["人", "じん", false]
		], "3421"
	],
	["[工|く](夫|ふう)", "工夫", ["くふう"],
		[
			["工", "く", false],
			["夫", "ふう", true]
		], "3422"
	],
	["[公|こう](害|がい)", "公害", ["こうがい"],
		[
			["公", "こう", false],
			["害", "がい", true]
		], "3426"
	],
	["[銀|ぎん]", "銀", ["ぎん"],
		[
			["銀", "ぎん", false]
		], -1
	],
	["[助|たす]か*5", "助か", ["たすか"],
		[
			["助", "たす", false],
			["か", null, false]
		], -1
	],
	["[助|たす]け*る", "助け", ["たすけ"],
		[
			["助", "たす", false],
			["け", null, false]
		], -1
	],
	["[助|じょ][手|しゅ]", "助手", ["じょしゅ"],
		[
			["助", "じょ", false],
			["手", "しゅ", false]
		], -1
	],
	["[拾|ひろ]*う", "拾", ["ひろ"],
		[
			["拾", "ひろ", false]
		], -1
	],
	["[追|お]*う", "追", ["お"],
		[
			["追", "お", false]
		], -1
	],
	["[漢|かん][字|じ]", "漢字", ["かんじ"],
		[
			["漢", "かん", false],
			["字", "じ", false]
		], -1
	],
	["[追|つい](加|か)", "追加", ["ついか"],
		[
			["追", "つい", false],
			["加", "か", true]
		], "3165"
	],
	["[追|お]い(付|つ)く", "追い付く", ["おいつく"],
		[
			["追", "お", false],
			["い", null, false],
			["付", "つ", true],
			["く", null, false]
		], "3407"
	],
	["[記|き](念|ねん)", "記念", ["きねん"],
		[
			["記", "き", false],
			["念", "ねん", true]
		], "3445"
	],
	["{～}[商|しょう]", "～商", ["しょう"],
		[
			["～", null, false],
			["商", "しょう", false]
		], -1
	],
	["[商|しょう][人|にん]", "商人", ["しょうにん"],
		[
			["商", "しょう", false],
			["人", "にん", false]
		], -1
	],
	["[商|しょう][品|ひん]", "商品", ["しょうひん"],
		[
			["商", "しょう", false],
			["品", "ひん", false]
		], -1
	],
	["[商|しょう][売|ばい]", "商売", ["しょうばい"],
		[
			["商", "しょう", false],
			["売", "ばい", false]
		], -1
	],
	["[商|しょう][店|てん]", "商店", ["しょうてん"],
		[
			["商", "しょう", false],
			["店", "てん", false]
		], -1
	],
	["[商|しょう][業|ぎょう]", "商業", ["しょうぎょう"],
		[
			["商", "しょう", false],
			["業", "ぎょう", false]
		], -1
	],
	["[商|しょう][社|しゃ]", "商社", ["しょうしゃ"],
		[
			["商", "しょう", false],
			["社", "しゃ", false]
		], -1
	],
	["[葉|は]", "葉", ["は"],
		[
			["葉", "は", false]
		], -1
	],
	["[葉|は][書|がき]", "葉書", ["はがき"],
		[
			["葉", "は", false],
			["書", "がき", false]
		], -1
	],
	["[言|こと][葉|ば]", "言葉", ["ことば"],
		[
			["言", "こと", false],
			["葉", "ば", false]
		], -1
	],
	["[対|たい](象|しょう)", "対象", ["たいしょう"],
		[
			["対", "たい", false],
			["象", "しょう", true]
		], "3457"
	],
	["[落|おと]し[物|もの]", "落し物", ["おとしもの"],
		[
			["落", "おと", false],
			["し", null, false],
			["物", "もの", false]
		], -1
	],
	["[落|おと]*す", "落", ["おと"],
		[
			["落", "おと", false]
		], -1
	],
	["[落|おち]る", "落る", ["おちる"],
		[
			["落", "おち", false],
			["る", null, false]
		], -1
	],
	["[落|おち][着|つ]く", "落着く", ["おちつく"],
		[
			["落", "おち", false],
			["着", "つ", false],
			["く", null, false]
		], -1
	],
	["[落|らく][第|だい]", "落第", ["らくだい"],
		[
			["落", "らく", false],
			["第", "だい", false]
		], -1
	],
	["(例|れい)[外|がい]", "例外", ["れいがい"],
		[
			["例", "れい", true],
			["外", "がい", false]
		], "3471"
	],
	["[実|じつ](例|れい)", "実例", ["じつれい"],
		[
			["実", "じつ", false],
			["例", "れい", true]
		], "3472"
	],
	["[全|ぜん](然|ぜん)", "全然", ["ぜんぜん"],
		[
			["全", "ぜん", false],
			["然", "ぜん", true]
		], "3476"
	],
	["[自|し](然|ぜん)", "自然", ["しぜん"],
		[
			["自", "し", false],
			["然", "ぜん", true]
		], "3477"
	],
	["[天|てん](然|ねん)", "天然", ["てんねん"],
		[
			["天", "てん", false],
			["然", "ねん", true]
		], "3478"
	],
	["[自|し](然|ぜん)[科|か][学|がく]", "自然科学", ["しぜんかがく"],
		[
			["自", "し", false],
			["然", "ぜん", true],
			["科", "か", false],
			["学", "がく", false]
		], "3479"
	],
	["[仕|し][上|あ]が*5", "仕上が", ["しあが"],
		[
			["仕", "し", false],
			["上", "あ", false],
			["が", null, false]
		], -1
	],
	["[受|じゅ](験|けん)", "受験", ["じゅけん"],
		[
			["受", "じゅ", false],
			["験", "けん", true]
		], "3485"
	],
	["[実|じっ](験|けん)", "実験", ["じっけん"],
		[
			["実", "じっ", false],
			["験", "けん", true]
		], "3486"
	],
	["お[手|て](伝|つだ)いさん", "お手伝いさん", ["おてつだいさん"],
		[
			["お", null, false],
			["手", "て", false],
			["伝", "つだ", true],
			["い", null, false],
			["さ", null, false],
			["ん", null, false]
		], "3493"
	],
	["(伝|でん)[記|き]", "伝記", ["でんき"],
		[
			["伝", "でん", true],
			["記", "き", false]
		], "3495"
	],
	["[手|て](伝|つだ)い", "手伝い", ["てつだい"],
		[
			["手", "て", false],
			["伝", "つだ", true],
			["い", null, false]
		], "3496"
	],
	["[去|さ]*5", "去", ["さ"],
		[
			["去", "さ", false]
		], -1
	],
	["{～}[気|ぎ][味|み]", "～気味", ["ぎみ"],
		[
			["～", null, false],
			["気", "ぎ", false],
			["味", "み", false]
		], -1
	],
	["[中|なか][味|み]", "中味", ["なかみ"],
		[
			["中", "なか", false],
			["味", "み", false]
		], -1
	],
	["[味|あじ]わ*う", "味わ", ["あじわ"],
		[
			["味", "あじ", false],
			["わ", null, false]
		], -1
	],
	["[味|み][方|かた]", "味方", ["みかた"],
		[
			["味", "み", false],
			["方", "かた", false]
		], -1
	],
	["[地|じ][味|み]", "地味", ["じみ"],
		[
			["地", "じ", false],
			["味", "み", false]
		], -1
	],
	["[正|しょう][味|み]", "正味", ["しょうみ"],
		[
			["正", "しょう", false],
			["味", "み", false]
		], -1
	],
	["[気|き][味|み]", "気味", ["きみ"],
		[
			["気", "き", false],
			["味", "み", false]
		], -1
	],
	["[連|つ]れ*る", "連れ", ["つれ"],
		[
			["連", "つ", false],
			["れ", null, false]
		], -1
	],
	["[調|ちょう][味|み](料|りょう)", "調味料", ["ちょうみりょう"],
		[
			["調", "ちょう", false],
			["味", "み", false],
			["料", "りょう", true]
		], "3378"
	],
	["(景|けい)[気|き]", "景気", ["けいき"],
		[
			["景", "けい", true],
			["気", "き", false]
		], "3507"
	],
	["[光|こう](景|けい)", "光景", ["こうけい"],
		[
			["光", "こう", false],
			["景", "けい", true]
		], "3508"
	],
	["[風|ふう](景|けい)", "風景", ["ふうけい"],
		[
			["風", "ふう", false],
			["景", "けい", true]
		], "3509"
	],
	["(景|け)[色|しき]", "景色", ["けしき"],
		[
			["景", "け", true],
			["色", "しき", false]
		], "3510"
	],
	["[勝|しょう][負|ぶ]", "勝負", ["しょうぶ"],
		[
			["勝", "しょう", false],
			["負", "ぶ", false]
		], -1
	],
	["[負|ま]け", "負け", ["まけ"],
		[
			["負", "ま", false],
			["け", null, false]
		], -1
	],
	["[負|ま]け*る", "負け", ["まけ"],
		[
			["負", "ま", false],
			["け", null, false]
		], -1
	],
	["[友|ゆう](好|こう)", "友好", ["ゆうこう"],
		[
			["友", "ゆう", false],
			["好", "こう", true]
		], "3518"
	],
	["(賞|しょう)[品|ひん]", "賞品", ["しょうひん"],
		[
			["賞", "しょう", true],
			["品", "ひん", false]
		], "3524"
	],
	["(賞|しょう)[金|きん]", "賞金", ["しょうきん"],
		[
			["賞", "しょう", true],
			["金", "きん", false]
		], "3525"
	],
	["[写|うつ]*5", "写", ["うつ"],
		[
			["写", "うつ", false]
		], -1
	],
	["[写|しゃ][生|せい]", "写生", ["しゃせい"],
		[
			["写", "しゃ", false],
			["生", "せい", false]
		], -1
	],
	["[守|まも]*5", "守", ["まも"],
		[
			["守", "まも", false]
		], -1
	],
	["[和|わ](英|えい)", "和英", ["わえい"],
		[
			["和", "わ", false],
			["英", "えい", true]
		], "3533"
	],
	["(英|えい)[和|わ]", "英和", ["えいわ"],
		[
			["英", "えい", true],
			["和", "わ", false]
		], "3534"
	],
	["(英|えい)[文|ぶん]", "英文", ["えいぶん"],
		[
			["英", "えい", true],
			["文", "ぶん", false]
		], "3535"
	],
	["[美|うつく]しい", "美しい", ["うつくしい"],
		[
			["美", "うつく", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[美|び][人|じん]", "美人", ["びじん"],
		[
			["美", "び", false],
			["人", "じん", false]
		], -1
	],
	["(低|てい)[下|か]", "低下", ["ていか"],
		[
			["低", "てい", true],
			["下", "か", false]
		], "3540"
	],
	["(失|しつ)[業|ぎょう]", "失業", ["しつぎょう"],
		[
			["失", "しつ", true],
			["業", "ぎょう", false]
		], "3544"
	],
	["[人|じん][命|めい]", "人命", ["じんめい"],
		[
			["人", "じん", false],
			["命", "めい", false]
		], -1
	],
	["[命|いのち]", "命", ["いのち"],
		[
			["命", "いのち", false]
		], -1
	],
	["[命|めい]じ*る", "命じ", ["めいじ"],
		[
			["命", "めい", false],
			["じ", null, false]
		], -1
	],
	["[命|めい]ずる", "命ずる", ["めいずる"],
		[
			["命", "めい", false],
			["ず", null, false],
			["る", null, false]
		], -1
	],
	["[生|せい][命|めい]", "生命", ["せいめい"],
		[
			["生", "せい", false],
			["命", "めい", false]
		], -1
	],
	["[交|こう](差|さ)", "交差", ["こうさ"],
		[
			["交", "こう", false],
			["差", "さ", true]
		], "3550"
	],
	["[交|こう](差|さ)[点|てん]", "交差点", ["こうさてん"],
		[
			["交", "こう", false],
			["差", "さ", true],
			["点", "てん", false]
		], "3551"
	],
	["[人|ひと](差|さし)[指|ゆび]", "人差指", ["ひとさしゆび"],
		[
			["人", "ひと", false],
			["差", "さし", true],
			["指", "ゆび", false]
		], "3552"
	],
	["(差|さ)し[上|あ]げる", "差し上げる", ["さしあげる"],
		[
			["差", "さ", true],
			["し", null, false],
			["上", "あ", false],
			["げ", null, false],
			["る", null, false]
		], "3554"
	],
	["(差|さ)し[引|ひ]き", "差し引き", ["さしひき"],
		[
			["差", "さ", true],
			["し", null, false],
			["引", "ひ", false],
			["き", null, false]
		], "3555"
	],
	["[物|もの](差|さ)し", "物差し", ["ものさし"],
		[
			["物", "もの", false],
			["差", "さ", true],
			["し", null, false]
		], "3558"
	],
	["(幸|こう)[福|ふく]", "幸福", ["こうふく"],
		[
			["幸", "こう", true],
			["福", "ふく", false]
		], "2834"
	],
	["[日|にっ](課|か)", "日課", ["にっか"],
		[
			["日", "にっ", false],
			["課", "か", true]
		], "3562"
	],
	["[整|ととの]*う", "整", ["ととの"],
		[
			["整", "ととの", false]
		], -1
	],
	["[整|せい][数|すう]", "整数", ["せいすう"],
		[
			["整", "せい", false],
			["数", "すう", false]
		], -1
	],
	["[整|せい][理|り]", "整理", ["せいり"],
		[
			["整", "せい", false],
			["理", "り", false]
		], -1
	],
	["[調|ちょう][整|せい]", "調整", ["ちょうせい"],
		[
			["調", "ちょう", false],
			["整", "せい", false]
		], -1
	],
	["[月|げつ](末|まつ)", "月末", ["げつまつ"],
		[
			["月", "げつ", false],
			["末", "まつ", true]
		], "3567"
	],
	["(末|すえ)っ[子|こ]", "末っ子", ["すえっこ"],
		[
			["末", "すえ", true],
			["っ", null, false],
			["子", "こ", false]
		], "3569"
	],
	["[北|ほっ](極|きょく)", "北極", ["ほっきょく"],
		[
			["北", "ほっ", false],
			["極", "きょく", true]
		], "3570"
	],
	["[南|なん](極|きょく)", "南極", ["なんきょく"],
		[
			["南", "なん", false],
			["極", "きょく", true]
		], "3571"
	],
	["[消|しょう](極|きょく)(的|てき)", "消極的", ["しょうきょくてき"],
		[
			["消", "しょう", false],
			["極", "きょく", true],
			["的", "てき", true]
		], "3109"
	],
	["[横|よこ]", "横", ["よこ"],
		[
			["横", "よこ", false]
		], -1
	],
	["[横|よこ][切|ぎ]*5", "横切", ["よこぎ"],
		[
			["横", "よこ", false],
			["切", "ぎ", false]
		], -1
	],
	["[不|ふ](便|べん)", "不便", ["ふべん"],
		[
			["不", "ふ", false],
			["便", "べん", true]
		], "3224"
	],
	["[一|いっ](種|しゅ)", "一種", ["いっしゅ"],
		[
			["一", "いっ", false],
			["種", "しゅ", true]
		], "3576"
	],
	["[人|じん](種|しゅ)", "人種", ["じんしゅ"],
		[
			["人", "じん", false],
			["種", "しゅ", true]
		], "3577"
	],
	["[深|ふか]い", "深い", ["ふかい"],
		[
			["深", "ふか", false],
			["い", null, false]
		], -1
	],
	["[深|ふか]ま*5", "深ま", ["ふかま"],
		[
			["深", "ふか", false],
			["ま", null, false]
		], -1
	],
	["[深|しん][夜|や]", "深夜", ["しんや"],
		[
			["深", "しん", false],
			["夜", "や", false]
		], -1
	],
	["[分|ぶん](量|りょう)", "分量", ["ぶんりょう"],
		[
			["分", "ぶん", false],
			["量", "りょう", true]
		], "3584"
	],
	["[重|じゅう](量|りょう)", "重量", ["じゅうりょう"],
		[
			["重", "じゅう", false],
			["量", "りょう", true]
		], "3585"
	],
	["[申|もう]し[上|あ]げ*る", "申し上げ", ["もうしあげ"],
		[
			["申", "もう", false],
			["し", null, false],
			["上", "あ", false],
			["げ", null, false]
		], -1
	],
	["[申|もう]*す", "申", ["もう"],
		[
			["申", "もう", false]
		], -1
	],
	["[同|どう][様|よう]", "同様", ["どうよう"],
		[
			["同", "どう", false],
			["様", "よう", false]
		], -1
	],
	["[様|よう]", "様", ["よう"],
		[
			["様", "よう", false]
		], -1
	],
	["[様|さま][々|ざま]", "様々", ["さまざま"],
		[
			["様", "さま", false],
			["々", "ざま", false]
		], -1
	],
	["[様|よう][子|す]", "様子", ["ようす"],
		[
			["様", "よう", false],
			["子", "す", false]
		], -1
	],
	["[神|かみ][様|さま]", "神様", ["かみさま"],
		[
			["神", "かみ", false],
			["様", "さま", false]
		], -1
	],
	["[王|おう][様|さま]", "王様", ["おうさま"],
		[
			["王", "おう", false],
			["様", "さま", false]
		], -1
	],
	["(観|かん)[光|こう]", "観光", ["かんこう"],
		[
			["観", "かん", true],
			["光", "こう", false]
		], "3606"
	],
	["{～}[港|こう]", "～港", ["こう"],
		[
			["～", null, false],
			["港", "こう", false]
		], -1
	],
	["[港|みなと]", "港", ["みなと"],
		[
			["港", "みなと", false]
		], -1
	],
	["[空|くう][港|こう]", "空港", ["くうこう"],
		[
			["空", "くう", false],
			["港", "こう", false]
		], -1
	],
	["[注|ちゅう]", "注", ["ちゅう"],
		[
			["注", "ちゅう", false]
		], -1
	],
	["[注|さ]*す", "注", ["さ"],
		[
			["注", "さ", false]
		], -1
	],
	["[注|ちゅう][文|もん]", "注文", ["ちゅうもん"],
		[
			["注", "ちゅう", false],
			["文", "もん", false]
		], -1
	],
	["[注|ちゅう][目|もく]", "注目", ["ちゅうもく"],
		[
			["注", "ちゅう", false],
			["目", "もく", false]
		], -1
	],
	["[投|とう](票|ひょう)", "投票", ["とうひょう"],
		[
			["投", "とう", false],
			["票", "ひょう", true]
		], "3619"
	],
	["{～}[階|かい]", "～階", ["かい"],
		[
			["～", null, false],
			["階", "かい", false]
		], -1
	],
	["[以|い][上|じょう]", "以上", ["いじょう"],
		[
			["以", "い", false],
			["上", "じょう", false]
		], -1
	],
	["[以|い][下|か]", "以下", ["いか"],
		[
			["以", "い", false],
			["下", "か", false]
		], -1
	],
	["[以|い][内|ない]", "以内", ["いない"],
		[
			["以", "い", false],
			["内", "ない", false]
		], -1
	],
	["[上|じょう](達|たつ)", "上達", ["じょうたつ"],
		[
			["上", "じょう", false],
			["達", "たつ", true]
		], "3621"
	],
	["[発|はっ](達|たつ)", "発達", ["はったつ"],
		[
			["発", "はっ", false],
			["達", "たつ", true]
		], "3622"
	],
	["[配|はい](達|たつ)", "配達", ["はいたつ"],
		[
			["配", "はい", false],
			["達", "たつ", true]
		], "3624"
	],
	["[友|とも](達|だち)", "友達", ["ともだち"],
		[
			["友", "とも", false],
			["達", "だち", true]
		], "3626"
	],
	["[線|せん][路|ろ]", "線路", ["せんろ"],
		[
			["線", "せん", false],
			["路", "ろ", false]
		], -1
	],
	["[通|つう][路|ろ]", "通路", ["つうろ"],
		[
			["通", "つう", false],
			["路", "ろ", false]
		], -1
	],
	["[道|どう][路|ろ]", "道路", ["どうろ"],
		[
			["道", "どう", false],
			["路", "ろ", false]
		], -1
	],
	["[悪|わる][口|くち]", "悪口", ["わるくち"],
		[
			["悪", "わる", false],
			["口", "くち", false]
		], -1
	],
	["[意|い][地|じ][悪|わる]", "意地悪", ["いじわる"],
		[
			["意", "い", false],
			["地", "じ", false],
			["悪", "わる", false]
		], -1
	],
	["[気|き](候|こう)", "気候", ["きこう"],
		[
			["気", "き", false],
			["候", "こう", true]
		], "3629"
	],
	["[天|てん](候|こう)", "天候", ["てんこう"],
		[
			["天", "てん", false],
			["候", "こう", true]
		], "3630"
	],
	["[他|た][人|にん]", "他人", ["たにん"],
		[
			["他", "た", false],
			["人", "にん", false]
		], -1
	],
	["[続|つづ]*く", "続", ["つづ"],
		[
			["続", "つづ", false]
		], -1
	],
	["[続|つづ]け*る", "続け", ["つづけ"],
		[
			["続", "つづ", false],
			["け", null, false]
		], -1
	],
	["(満|まん)[員|いん]", "満員", ["まんいん"],
		[
			["満", "まん", true],
			["員", "いん", false]
		], "3638"
	],
	["(満|まん)[点|てん]", "満点", ["まんてん"],
		[
			["満", "まん", true],
			["点", "てん", false]
		], "3639"
	],
	["(満|まん)[足|ぞく]", "満足", ["まんぞく"],
		[
			["満", "まん", true],
			["足", "ぞく", false]
		], "3640"
	],
	["[橋|はし]", "橋", ["はし"],
		[
			["橋", "はし", false]
		], -1
	],
	["(鉄|てっ)[橋|きょう]", "鉄橋", ["てっきょう"],
		[
			["鉄", "てっ", true],
			["橋", "きょう", false]
		], "2750"
	],
	["[勝|しょう](敗|はい)", "勝敗", ["しょうはい"],
		[
			["勝", "しょう", false],
			["敗", "はい", true]
		], "3647"
	],
	["[岸|きし]", "岸", ["きし"],
		[
			["岸", "きし", false]
		], -1
	],
	["[海|かい][岸|がん]", "海岸", ["かいがん"],
		[
			["海", "かい", false],
			["岸", "がん", false]
		], -1
	],
	["(管|かん)[理|り]", "管理", ["かんり"],
		[
			["管", "かん", true],
			["理", "り", false]
		], "3650"
	],
	["[乗|じょう][客|きゃく]", "乗客", ["じょうきゃく"],
		[
			["乗", "じょう", false],
			["客", "きゃく", false]
		], -1
	],
	["[客|きゃく]", "客", ["きゃく"],
		[
			["客", "きゃく", false]
		], -1
	],
	["[客|きゃく][間|ま]", "客間", ["きゃくま"],
		[
			["客", "きゃく", false],
			["間", "ま", false]
		], -1
	],
	["[客|きゃく](席|せき)", "客席", ["きゃくせき"],
		[
			["客", "きゃく", false],
			["席", "せき", true]
		], "3433"
	],
	["(観|かん)[客|きゃく]", "観客", ["かんきゃく"],
		[
			["観", "かん", true],
			["客", "きゃく", false]
		], "3607"
	],
	["[受|じゅ][話|わ](器|き)", "受話器", ["じゅわき"],
		[
			["受", "じゅ", false],
			["話", "わ", false],
			["器", "き", true]
		], "3657"
	],
	["(器|き)[用|よう]", "器用", ["きよう"],
		[
			["器", "き", true],
			["用", "よう", false]
		], "3658"
	],
	["[楽|がっ](器|き)", "楽器", ["がっき"],
		[
			["楽", "がっ", false],
			["器", "き", true]
		], "3659"
	],
	["[食|しょっ](器|き)", "食器", ["しょっき"],
		[
			["食", "しょっ", false],
			["器", "き", true]
		], "3660"
	],
	["[登|のぼ]*5", "登", ["のぼ"],
		[
			["登", "のぼ", false]
		], -1
	],
	["[登|とう][場|じょう]", "登場", ["とうじょう"],
		[
			["登", "とう", false],
			["場", "じょう", false]
		], -1
	],
	["[登|と][山|ざん]", "登山", ["とざん"],
		[
			["登", "と", false],
			["山", "ざん", false]
		], -1
	],
	["[急|きゅう][速|そく]", "急速", ["きゅうそく"],
		[
			["急", "きゅう", false],
			["速", "そく", false]
		], -1
	],
	["[早|さっ][速|そく]", "早速", ["さっそく"],
		[
			["早", "さっ", false],
			["速", "そく", false]
		], -1
	],
	["[時|じ][速|そく]", "時速", ["じそく"],
		[
			["時", "じ", false],
			["速", "そく", false]
		], -1
	],
	["[速|はや]い", "速い", ["はやい"],
		[
			["速", "はや", false],
			["い", null, false]
		], -1
	],
	["[速|そく][力|りょく]", "速力", ["そくりょく"],
		[
			["速", "そく", false],
			["力", "りょく", false]
		], -1
	],
	["[速|そく][度|ど]", "速度", ["そくど"],
		[
			["速", "そく", false],
			["度", "ど", false]
		], -1
	],
	["[高|こう][速|そく]", "高速", ["こうそく"],
		[
			["高", "こう", false],
			["速", "そく", false]
		], -1
	],
	["(加|か)[速|そく]", "加速", ["かそく"],
		[
			["加", "か", true],
			["速", "そく", false]
		], "3166"
	],
	["(加|か)[速|そく][度|ど]", "加速度", ["かそくど"],
		[
			["加", "か", true],
			["速", "そく", false],
			["度", "ど", false]
		], "3167"
	],
	["[速|そく](達|たつ)", "速達", ["そくたつ"],
		[
			["速", "そく", false],
			["達", "たつ", true]
		], "3625"
	],
	["[体|たい](積|せき)", "体積", ["たいせき"],
		[
			["体", "たい", false],
			["積", "せき", true]
		], "3671"
	],
	["[面|めん](積|せき)", "面積", ["めんせき"],
		[
			["面", "めん", false],
			["積", "せき", true]
		], "3675"
	],
	["[記|き](録|ろく)", "記録", ["きろく"],
		[
			["記", "き", false],
			["録", "ろく", true]
		], "3677"
	],
	["(録|ろく)[音|おん]", "録音", ["ろくおん"],
		[
			["録", "ろく", true],
			["音", "おん", false]
		], "3678"
	],
	["[中|ちゅう][央|おう]", "中央", ["ちゅうおう"],
		[
			["中", "ちゅう", false],
			["央", "おう", false]
		], -1
	],
	["[反|はん](省|せい)", "反省", ["はんせい"],
		[
			["反", "はん", false],
			["省", "せい", true]
		], "3681"
	],
	["{～}[号|ごう]", "～号", ["ごう"],
		[
			["～", null, false],
			["号", "ごう", false]
		], -1
	],
	["[番|ばん][号|ごう]", "番号", ["ばんごう"],
		[
			["番", "ばん", false],
			["号", "ごう", false]
		], -1
	],
	["[記|き][号|ごう]", "記号", ["きごう"],
		[
			["記", "き", false],
			["号", "ごう", false]
		], -1
	],
	["(信|しん)[号|ごう]", "信号", ["しんごう"],
		[
			["信", "しん", true],
			["号", "ごう", false]
		], "3276"
	],
	["[円|えん](周|しゅう)", "円周", ["えんしゅう"],
		[
			["円", "えん", false],
			["周", "しゅう", true]
		], "3686"
	],
	["{～}[館|かん]", "～館", ["かん"],
		[
			["～", null, false],
			["館", "かん", false]
		], -1
	],
	["[会|かい][館|かん]", "会館", ["かいかん"],
		[
			["会", "かい", false],
			["館", "かん", false]
		], -1
	],
	["[木|もく](材|ざい)", "木材", ["もくざい"],
		[
			["木", "もく", false],
			["材", "ざい", true]
		], "3692"
	],
	["(材|ざい)[木|もく]", "材木", ["ざいもく"],
		[
			["材", "ざい", true],
			["木", "もく", false]
		], "3694"
	],
	["[家|か][屋|おく]", "家屋", ["かおく"],
		[
			["家", "か", false],
			["屋", "おく", false]
		], -1
	],
	["[小|こ][屋|や]", "小屋", ["こや"],
		[
			["小", "こ", false],
			["屋", "や", false]
		], -1
	],
	["[屋|おく][外|がい]", "屋外", ["おくがい"],
		[
			["屋", "おく", false],
			["外", "がい", false]
		], -1
	],
	["[店|みせ][屋|や]", "店屋", ["みせや"],
		[
			["店", "みせ", false],
			["屋", "や", false]
		], -1
	],
	["[屋|や](根|ね)", "屋根", ["やね"],
		[
			["屋", "や", false],
			["根", "ね", true]
		], "2727"
	],
	["(飛|と)び[出|だ]*す", "飛び出", ["とびだ"],
		[
			["飛", "と", true],
			["び", null, false],
			["出", "だ", false]
		], "3701"
	],
	["(飛|ひ)[行|こう]", "飛行", ["ひこう"],
		[
			["飛", "ひ", true],
			["行", "こう", false]
		], "3703"
	],
	["(飛|ひ)[行|こう][場|じょう]", "飛行場", ["ひこうじょう"],
		[
			["飛", "ひ", true],
			["行", "こう", false],
			["場", "じょう", false]
		], "3704"
	],
	["[屋|や][根|ね]", "屋根", ["やね"],
		[
			["屋", "や", false],
			["根", "ね", false]
		], -1
	],
	["[根|ね]", "根", ["ね"],
		[
			["根", "ね", false]
		], -1
	],
	["[羽|は][根|ね]", "羽根", ["はね"],
		[
			["羽", "は", false],
			["根", "ね", false]
		], -1
	],
	["[自|じ](殺|さつ)", "自殺", ["じさつ"],
		[
			["自", "じ", false],
			["殺", "さつ", true]
		], "3707"
	],
	["[苦|にが]い", "苦い", ["にがい"],
		[
			["苦", "にが", false],
			["い", null, false]
		], -1
	],
	["[苦|くる]しい", "苦しい", ["くるしい"],
		[
			["苦", "くる", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[苦|くる]し*む", "苦し", ["くるし"],
		[
			["苦", "くる", false],
			["し", null, false]
		], -1
	],
	["[苦|く][心|しん]", "苦心", ["くしん"],
		[
			["苦", "く", false],
			["心", "しん", false]
		], -1
	],
	["[苦|にが][手|て]", "苦手", ["にがて"],
		[
			["苦", "にが", false],
			["手", "て", false]
		], -1
	],
	["[利|り][用|よう]", "利用", ["りよう"],
		[
			["利", "り", false],
			["用", "よう", false]
		], -1
	],
	["[苦|く](労|ろう)", "苦労", ["くろう"],
		[
			["苦", "く", false],
			["労", "ろう", true]
		], "3461"
	],
	["(便|べん)[利|り]", "便利", ["べんり"],
		[
			["便", "べん", true],
			["利", "り", false]
		], "3225"
	],
	["(単|たん)[数|すう]", "単数", ["たんすう"],
		[
			["単", "たん", true],
			["数", "すう", false]
		], "3712"
	],
	["(単|たん)[語|ご]", "単語", ["たんご"],
		[
			["単", "たん", true],
			["語", "ご", false]
		], "3713"
	],
	["(完|かん)[全|ぜん]", "完全", ["かんぜん"],
		[
			["完", "かん", true],
			["全", "ぜん", false]
		], "3717"
	],
	["[具|そな]え*る", "具え", ["そなえ"],
		[
			["具", "そな", false],
			["え", null, false]
		], -1
	],
	["[具|ぐ][体|たい]", "具体", ["ぐたい"],
		[
			["具", "ぐ", false],
			["体", "たい", false]
		], -1
	],
	["[具|ぐ][合|あい]", "具合", ["ぐあい"],
		[
			["具", "ぐ", false],
			["合", "あい", false]
		], -1
	],
	["[家|か][具|ぐ]", "家具", ["かぐ"],
		[
			["家", "か", false],
			["具", "ぐ", false]
		], -1
	],
	["[道|どう][具|ぐ]", "道具", ["どうぐ"],
		[
			["道", "どう", false],
			["具", "ぐ", false]
		], -1
	],
	["[絵|え]の[具|ぐ]", "絵の具", ["えのぐ"],
		[
			["絵", "え", false],
			["の", null, false],
			["具", "ぐ", false]
		], -1
	],
	["(器|き)[具|ぐ]", "器具", ["きぐ"],
		[
			["器", "き", true],
			["具", "ぐ", false]
		], "3661"
	],
	["[鉄|てつ]", "鉄", ["てつ"],
		[
			["鉄", "てつ", false]
		], -1
	],
	["[鉄|てっ][橋|きょう]", "鉄橋", ["てっきょう"],
		[
			["鉄", "てっ", false],
			["橋", "きょう", false]
		], -1
	],
	["[鉄|てつ][道|どう]", "鉄道", ["てつどう"],
		[
			["鉄", "てつ", false],
			["道", "どう", false]
		], -1
	],
	["(競|けい)[馬|ば]", "競馬", ["けいば"],
		[
			["競", "けい", true],
			["馬", "ば", false]
		], "3724"
	],
	["[引|ひき][返|かえ]*す", "引返", ["ひきかえ"],
		[
			["引", "ひき", false],
			["返", "かえ", false]
		], -1
	],
	["[別|べつ]に", "別に", ["べつに"],
		[
			["別", "べつ", false],
			["に", null, false]
		], -1
	],
	["[別|わか]れ*る", "別れ", ["わかれ"],
		[
			["別", "わか", false],
			["れ", null, false]
		], -1
	],
	["(特|とく)[別|べつ]", "特別", ["とくべつ"],
		[
			["特", "とく", true],
			["別", "べつ", false]
		], "2775"
	],
	["[月|げっ](給|きゅう)", "月給", ["げっきゅう"],
		[
			["月", "げっ", false],
			["給", "きゅう", true]
		], "3728"
	],
	["[短|たん]{～}", "短～", ["たん"],
		[
			["短", "たん", false],
			["～", null, false]
		], -1
	],
	["[短|たん][所|しょ]", "短所", ["たんしょ"],
		[
			["短", "たん", false],
			["所", "しょ", false]
		], -1
	],
	["[短|たん][期|き]", "短期", ["たんき"],
		[
			["短", "たん", false],
			["期", "き", false]
		], -1
	],
	["[長|ちょう][短|たん]", "長短", ["ちょうたん"],
		[
			["長", "ちょう", false],
			["短", "たん", false]
		], -1
	],
	["(辞|じ)[書|しょ]", "辞書", ["じしょ"],
		[
			["辞", "じ", true],
			["書", "しょ", false]
		], "3735"
	],
	["[油|あぶら]", "油", ["あぶら"],
		[
			["油", "あぶら", false]
		], -1
	],
	["[石|せき][油|ゆ]", "石油", ["せきゆ"],
		[
			["石", "せき", false],
			["油", "ゆ", false]
		], -1
	],
	["(未|み)[来|らい]", "未来", ["みらい"],
		[
			["未", "み", true],
			["来", "らい", false]
		], "3747"
	],
	["(航|こう)[空|くう]", "航空", ["こうくう"],
		[
			["航", "こう", true],
			["空", "くう", false]
		], "3752"
	],
	["[植|う]え*る", "植え", ["うえ"],
		[
			["植", "う", false],
			["え", null, false]
		], -1
	],
	["[植|うえ][木|き]", "植木", ["うえき"],
		[
			["植", "うえ", false],
			["木", "き", false]
		], -1
	],
	["[植|しょく][物|ぶつ]", "植物", ["しょくぶつ"],
		[
			["植", "しょく", false],
			["物", "ぶつ", false]
		], -1
	],
	["[田|た][植|う]え", "田植え", ["たうえ"],
		[
			["田", "た", false],
			["植", "う", false],
			["え", null, false]
		], -1
	],
	["[下|げ][宿|しゅく]", "下宿", ["げしゅく"],
		[
			["下", "げ", false],
			["宿", "しゅく", false]
		], -1
	],
	["[宿|やど]", "宿", ["やど"],
		[
			["宿", "やど", false]
		], -1
	],
	["[宿|しゅく][題|だい]", "宿題", ["しゅくだい"],
		[
			["宿", "しゅく", false],
			["題", "だい", false]
		], -1
	],
	["[特|とく]に", "特に", ["とくに"],
		[
			["特", "とく", false],
			["に", null, false]
		], -1
	],
	["[特|とく][別|べつ]", "特別", ["とくべつ"],
		[
			["特", "とく", false],
			["別", "べつ", false]
		], -1
	],
	["[特|とっ][急|きゅう]", "特急", ["とっきゅう"],
		[
			["特", "とっ", false],
			["急", "きゅう", false]
		], -1
	],
	["[人|じん](類|るい)", "人類", ["じんるい"],
		[
			["人", "じん", false],
			["類", "るい", true]
		], "3762"
	],
	["[分|ぶん](類|るい)", "分類", ["ぶんるい"],
		[
			["分", "ぶん", false],
			["類", "るい", true]
		], "3763"
	],
	["[書|しょ](類|るい)", "書類", ["しょるい"],
		[
			["書", "しょ", false],
			["類", "るい", true]
		], "3764"
	],
	["[親|しん](類|るい)", "親類", ["しんるい"],
		[
			["親", "しん", false],
			["類", "るい", true]
		], "3766"
	],
	["[薬|くすり]", "薬", ["くすり"],
		[
			["薬", "くすり", false]
		], -1
	],
	["[薬|やく][品|ひん]", "薬品", ["やくひん"],
		[
			["薬", "やく", false],
			["品", "ひん", false]
		], -1
	],
	["[薬|やっ][局|きょく]", "薬局", ["やっきょく"],
		[
			["薬", "やっ", false],
			["局", "きょく", false]
		], -1
	],
	["[薬|くすり][指|ゆび]", "薬指", ["くすりゆび"],
		[
			["薬", "くすり", false],
			["指", "ゆび", false]
		], -1
	],
	["[農|のう][薬|やく]", "農薬", ["のうやく"],
		[
			["農", "のう", false],
			["薬", "やく", false]
		], -1
	],
	["[変|へん]", "変", ["へん"],
		[
			["変", "へん", false]
		], -1
	],
	["[変|か]え*る", "変え", ["かえ"],
		[
			["変", "か", false],
			["え", null, false]
		], -1
	],
	["[変|か]わ*5", "変わ", ["かわ"],
		[
			["変", "か", false],
			["わ", null, false]
		], -1
	],
	["[大|たい][変|へん]", "大変", ["たいへん"],
		[
			["大", "たい", false],
			["変", "へん", false]
		], -1
	],
	["[育|いく](児|じ)", "育児", ["いくじ"],
		[
			["育", "いく", false],
			["児", "じ", true]
		], "3768"
	],
	["[目|め](印|じるし)", "目印", ["めじるし"],
		[
			["目", "め", false],
			["印", "じるし", true]
		], "3775"
	],
	["[矢|や](印|じるし)", "矢印", ["やじるし"],
		[
			["矢", "や", false],
			["印", "じるし", true]
		], "3776"
	],
	["[予|よ][習|しゅう]", "予習", ["よしゅう"],
		[
			["予", "よ", false],
			["習", "しゅう", false]
		], -1
	],
	["[学|がく][習|しゅう]", "学習", ["がくしゅう"],
		[
			["学", "がく", false],
			["習", "しゅう", false]
		], -1
	],
	["[実|じっ][習|しゅう]", "実習", ["じっしゅう"],
		[
			["実", "じっ", false],
			["習", "しゅう", false]
		], -1
	],
	["[習|しゅう][字|じ]", "習字", ["しゅうじ"],
		[
			["習", "しゅう", false],
			["字", "じ", false]
		], -1
	],
	["[自|じ][習|しゅう]", "自習", ["じしゅう"],
		[
			["自", "じ", false],
			["習", "しゅう", false]
		], -1
	],
	["(練|れん)[習|しゅう]", "練習", ["れんしゅう"],
		[
			["練", "れん", true],
			["習", "しゅう", false]
		], "2838"
	],
	["(標|ひょう)[本|ほん]", "標本", ["ひょうほん"],
		[
			["標", "ひょう", true],
			["本", "ほん", false]
		], "3780"
	],
	["[目|もく](標|ひょう)", "目標", ["もくひょう"],
		[
			["目", "もく", false],
			["標", "ひょう", true]
		], "3781"
	],
	["[倍|ばい]", "倍", ["ばい"],
		[
			["倍", "ばい", false]
		], -1
	],
	["[指|ゆび](輪|わ)", "指輪", ["ゆびわ"],
		[
			["指", "ゆび", false],
			["輪", "わ", true]
		], "3785"
	],
	["[車|しゃ](輪|りん)", "車輪", ["しゃりん"],
		[
			["車", "しゃ", false],
			["輪", "りん", true]
		], "3786"
	],
	["(熱|ねっ)[中|ちゅう]", "熱中", ["ねっちゅう"],
		[
			["熱", "ねっ", true],
			["中", "ちゅう", false]
		], "3797"
	],
	["(熱|ねっ)[心|しん]", "熱心", ["ねっしん"],
		[
			["熱", "ねっ", true],
			["心", "しん", false]
		], "3798"
	],
	["(清|せい)[書|しょ]", "清書", ["せいしょ"],
		[
			["清", "せい", true],
			["書", "しょ", false]
		], "3802"
	],
	["[波|なみ]", "波", ["なみ"],
		[
			["波", "なみ", false]
		], -1
	],
	["[電|でん][波|ぱ]", "電波", ["でんぱ"],
		[
			["電", "でん", false],
			["波", "ぱ", false]
		], -1
	],
	["[感|かん](覚|かく)", "感覚", ["かんかく"],
		[
			["感", "かん", false],
			["覚", "かく", true]
		], "3804"
	],
	["[目|め](覚|ざま)し", "目覚し", ["めざまし"],
		[
			["目", "め", false],
			["覚", "ざま", true],
			["し", null, false]
		], "3805"
	],
	["[東|とう][洋|よう]", "東洋", ["とうよう"],
		[
			["東", "とう", false],
			["洋", "よう", false]
		], -1
	],
	["[洋|よう][品|ひん][店|てん]", "洋品店", ["ようひんてん"],
		[
			["洋", "よう", false],
			["品", "ひん", false],
			["店", "てん", false]
		], -1
	],
	["[海|かい][洋|よう]", "海洋", ["かいよう"],
		[
			["海", "かい", false],
			["洋", "よう", false]
		], -1
	],
	["[生|せい](徒|と)", "生徒", ["せいと"],
		[
			["生", "せい", false],
			["徒", "と", true]
		], -1
	],
	["[旅|たび]", "旅", ["たび"],
		[
			["旅", "たび", false]
		], -1
	],
	["[旅|りょ][行|こう]", "旅行", ["りょこう"],
		[
			["旅", "りょ", false],
			["行", "こう", false]
		], -1
	],
	["[無|む][理|り]", "無理", ["むり"],
		[
			["無", "む", false],
			["理", "り", false]
		], -1
	],
	["[園|えん](芸|げい)", "園芸", ["えんげい"],
		[
			["園", "えん", false],
			["芸", "げい", true]
		], "3812"
	],
	["[工|こう](芸|げい)", "工芸", ["こうげい"],
		[
			["工", "こう", false],
			["芸", "げい", true]
		], "3813"
	],
	["[文|ぶん](芸|げい)", "文芸", ["ぶんげい"],
		[
			["文", "ぶん", false],
			["芸", "げい", true]
		], "3814"
	],
	["(便|べん)[所|じょ]", "便所", ["べんじょ"],
		[
			["便", "べん", true],
			["所", "じょ", false]
		], "3821"
	],
	["[小|しょう](便|べん)", "小便", ["しょうべん"],
		[
			["小", "しょう", false],
			["便", "べん", true]
		], "3822"
	],
	["[船|ふな](便|びん)", "船便", ["ふなびん"],
		[
			["船", "ふな", false],
			["便", "びん", true]
		], "3823"
	],
	["[上|じょう][級|きゅう]", "上級", ["じょうきゅう"],
		[
			["上", "じょう", false],
			["級", "きゅう", false]
		], -1
	],
	["[学|がっ][級|きゅう]", "学級", ["がっきゅう"],
		[
			["学", "がっ", false],
			["級", "きゅう", false]
		], -1
	],
	["[級|きゅう]", "級", ["きゅう"],
		[
			["級", "きゅう", false]
		], -1
	],
	["[高|こう][級|きゅう]", "高級", ["こうきゅう"],
		[
			["高", "こう", false],
			["級", "きゅう", false]
		], -1
	],
	["(初|しょ)[級|きゅう]", "初級", ["しょきゅう"],
		[
			["初", "しょ", true],
			["級", "きゅう", false]
		], "3195"
	],
	["(停|てい)[止|し]", "停止", ["ていし"],
		[
			["停", "てい", true],
			["止", "し", false]
		], "3826"
	],
	["(停|てい)[車|しゃ]", "停車", ["ていしゃ"],
		[
			["停", "てい", true],
			["車", "しゃ", false]
		], "3827"
	],
	["(停|てい)[電|でん]", "停電", ["ていでん"],
		[
			["停", "てい", true],
			["電", "でん", false]
		], "3828"
	],
	["[幸|さいわ]い", "幸い", ["さいわい"],
		[
			["幸", "さいわ", false],
			["い", null, false]
		], -1
	],
	["[幸|しあわ]せ", "幸せ", ["しあわせ"],
		[
			["幸", "しあわ", false],
			["せ", null, false]
		], -1
	],
	["[幸|こう][福|ふく]", "幸福", ["こうふく"],
		[
			["幸", "こう", false],
			["福", "ふく", false]
		], -1
	],
	["[幸|こう][運|うん]", "幸運", ["こううん"],
		[
			["幸", "こう", false],
			["運", "うん", false]
		], -1
	],
	["(不|ふ)[幸|こう]", "不幸", ["ふこう"],
		[
			["不", "ふ", true],
			["幸", "こう", false]
		], "3100"
	],
	["[大|たい](陸|りく)", "大陸", ["たいりく"],
		[
			["大", "たい", false],
			["陸", "りく", true]
		], "3830"
	],
	["[練|れん][習|しゅう]", "練習", ["れんしゅう"],
		[
			["練", "れん", false],
			["習", "しゅう", false]
		], -1
	],
	["[料|りょう][理|り]", "料理", ["りょうり"],
		[
			["料", "りょう", false],
			["理", "り", false]
		], -1
	],
	["[食|しょく][料|りょう][品|ひん]", "食料品", ["しょくりょうひん"],
		[
			["食", "しょく", false],
			["料", "りょう", false],
			["品", "ひん", false]
		], -1
	],
	["[地|ち](帯|たい)", "地帯", ["ちたい"],
		[
			["地", "ち", false],
			["帯", "たい", true]
		], "3832"
	],
	["(努|ど)[力|りょく]", "努力", ["どりょく"],
		[
			["努", "ど", true],
			["力", "りょく", false]
		], "3841"
	],
	["[建|た]て*る", "建て", ["たて"],
		[
			["建", "た", false],
			["て", null, false]
		], -1
	],
	["[建|たて][物|もの]", "建物", ["たてもの"],
		[
			["建", "たて", false],
			["物", "もの", false]
		], -1
	],
	["[子|こ](供|ども)", "子供", ["こども"],
		[
			["子", "こ", false],
			["供", "ども", true]
		], "4065"
	],
	["[上|じょう][等|とう]", "上等", ["じょうとう"],
		[
			["上", "じょう", false],
			["等", "とう", false]
		], -1
	],
	["[平|びょう][等|どう]", "平等", ["びょうどう"],
		[
			["平", "びょう", false],
			["等", "どう", false]
		], -1
	],
	["[等|など]", "等", ["など"],
		[
			["等", "など", false]
		], -1
	],
	["[等|ひと]しい", "等しい", ["ひとしい"],
		[
			["等", "ひと", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[等|とう][分|ぶん]", "等分", ["とうぶん"],
		[
			["等", "とう", false],
			["分", "ぶん", false]
		], -1
	],
	["[高|こう][等|とう]", "高等", ["こうとう"],
		[
			["高", "こう", false],
			["等", "とう", false]
		], -1
	],
	["[高|こう][等|とう][学|がっ][校|こう]", "高等学校", ["こうとうがっこう"],
		[
			["高", "こう", false],
			["等", "とう", false],
			["学", "がっ", false],
			["校", "こう", false]
		], -1
	],
	["(質|しつ)[問|もん]", "質問", ["しつもん"],
		[
			["質", "しつ", true],
			["問", "もん", false]
		], "3968"
	],
	["(散|さん)[歩|ぽ]", "散歩", ["さんぽ"],
		[
			["散", "さん", true],
			["歩", "ぽ", false]
		], "3850"
	],
	["[作|さっ][曲|きょく]", "作曲", ["さっきょく"],
		[
			["作", "さっ", false],
			["曲", "きょく", false]
		], -1
	],
	["[曲|ま]げ*る", "曲げ", ["まげ"],
		[
			["曲", "ま", false],
			["げ", null, false]
		], -1
	],
	["[曲|まが]*5", "曲", ["まが"],
		[
			["曲", "まが", false]
		], -1
	],
	["[曲|きょく][線|せん]", "曲線", ["きょくせん"],
		[
			["曲", "きょく", false],
			["線", "せん", false]
		], -1
	],
	["(司|し)[会|かい]", "司会", ["しかい"],
		[
			["司", "し", true],
			["会", "かい", false]
		], "3853"
	],
	["[家|か][庭|てい]", "家庭", ["かてい"],
		[
			["家", "か", false],
			["庭", "てい", false]
		], -1
	],
	["[庭|にわ]", "庭", ["にわ"],
		[
			["庭", "にわ", false]
		], -1
	],
	["[校|こう][庭|てい]", "校庭", ["こうてい"],
		[
			["校", "こう", false],
			["庭", "てい", false]
		], -1
	],
	["[小|しょう][説|せつ]", "小説", ["しょうせつ"],
		[
			["小", "しょう", false],
			["説", "せつ", false]
		], -1
	],
	["[説|せつ][明|めい]", "説明", ["せつめい"],
		[
			["説", "せつ", false],
			["明", "めい", false]
		], -1
	],
	["[血|ち]", "血", ["ち"],
		[
			["血", "ち", false]
		], -1
	],
	["[体|たい][温|おん]", "体温", ["たいおん"],
		[
			["体", "たい", false],
			["温", "おん", false]
		], -1
	],
	["[気|き][温|おん]", "気温", ["きおん"],
		[
			["気", "き", false],
			["温", "おん", false]
		], -1
	],
	["[温|ぬる]い", "温い", ["ぬるい"],
		[
			["温", "ぬる", false],
			["い", null, false]
		], -1
	],
	["[温|あたた]かい", "温かい", ["あたたかい"],
		[
			["温", "あたた", false],
			["か", null, false],
			["い", null, false]
		], -1
	],
	["[温|あたた]ま*5", "温ま", ["あたたま"],
		[
			["温", "あたた", false],
			["ま", null, false]
		], -1
	],
	["[温|あたた]め*る", "温め", ["あたため"],
		[
			["温", "あたた", false],
			["め", null, false]
		], -1
	],
	["[温|おん][室|しつ]", "温室", ["おんしつ"],
		[
			["温", "おん", false],
			["室", "しつ", false]
		], -1
	],
	["[温|おん][度|ど]", "温度", ["おんど"],
		[
			["温", "おん", false],
			["度", "ど", false]
		], -1
	],
	["[温|おん](帯|たい)", "温帯", ["おんたい"],
		[
			["温", "おん", false],
			["帯", "たい", true]
		], "3835"
	],
	["(卒|そつ)[業|ぎょう]", "卒業", ["そつぎょう"],
		[
			["卒", "そつ", true],
			["業", "ぎょう", false]
		], "3863"
	],
	["(卒|そっ)[直|ちょく]", "卒直", ["そっちょく"],
		[
			["卒", "そっ", true],
			["直", "ちょく", false]
		], "3864"
	],
	["[車|しゃ][庫|こ]", "車庫", ["しゃこ"],
		[
			["車", "しゃ", false],
			["庫", "こ", false]
		], -1
	],
	["[金|きん][庫|こ]", "金庫", ["きんこ"],
		[
			["金", "きん", false],
			["庫", "こ", false]
		], -1
	],
	["[道|みち](順|じゅん)", "道順", ["みちじゅん"],
		[
			["道", "みち", false],
			["順", "じゅん", true]
		], "3865"
	],
	["(順|じゅん)[番|ばん]", "順番", ["じゅんばん"],
		[
			["順", "じゅん", true],
			["番", "ばん", false]
		], "3868"
	],
	["(順|じゅん)[調|ちょう]", "順調", ["じゅんちょう"],
		[
			["順", "じゅん", true],
			["調", "ちょう", false]
		], "3869"
	],
	["[坂|さか]", "坂", ["さか"],
		[
			["坂", "さか", false]
		], -1
	],
	["[出|しゅっ][席|せき]", "出席", ["しゅっせき"],
		[
			["出", "しゅっ", false],
			["席", "せき", false]
		], -1
	],
	["[席|せき]", "席", ["せき"],
		[
			["席", "せき", false]
		], -1
	],
	["[世|せい](紀|き)", "世紀", ["せいき"],
		[
			["世", "せい", false],
			["紀", "き", true]
		], "3872"
	],
	["[和|わ][服|ふく]", "和服", ["わふく"],
		[
			["和", "わ", false],
			["服", "ふく", false]
		], -1
	],
	["[残|のこ]*5", "残", ["のこ"],
		[
			["残", "のこ", false]
		], -1
	],
	["(博|はく)[物|ぶつ][館|かん]", "博物館", ["はくぶつかん"],
		[
			["博", "はく", true],
			["物", "ぶつ", false],
			["館", "かん", false]
		], "3875"
	],
	["(救|きゅう)[助|じょ]", "救助", ["きゅうじょ"],
		[
			["救", "きゅう", true],
			["助", "じょ", false]
		], "3878"
	],
	["[休|きゅう][息|そく]", "休息", ["きゅうそく"],
		[
			["休", "きゅう", false],
			["息", "そく", false]
		], -1
	],
	["[息|いき]", "息", ["いき"],
		[
			["息", "いき", false]
		], -1
	],
	["[息|むす][子|こ]", "息子", ["むすこ"],
		[
			["息", "むす", false],
			["子", "こ", false]
		], -1
	],
	["(老|ろう)[人|じん]", "老人", ["ろうじん"],
		[
			["老", "ろう", true],
			["人", "じん", false]
		], "3880"
	],
	["[板|いた]", "板", ["いた"],
		[
			["板", "いた", false]
		], -1
	],
	["[黒|こく][板|ばん]", "黒板", ["こくばん"],
		[
			["黒", "こく", false],
			["板", "ばん", false]
		], -1
	],
	["[試|し][合|あい]", "試合", ["しあい"],
		[
			["試", "し", false],
			["合", "あい", false]
		], -1
	],
	["[試|し](験|けん)", "試験", ["しけん"],
		[
			["試", "し", false],
			["験", "けん", true]
		], "2915"
	],
	["[命|めい](令|れい)", "命令", ["めいれい"],
		[
			["命", "めい", false],
			["令", "れい", true]
		], "3883"
	],
	["[列|れつ]", "列", ["れつ"],
		[
			["列", "れつ", false]
		], -1
	],
	["[列|れっ][島|とう]", "列島", ["れっとう"],
		[
			["列", "れっ", false],
			["島", "とう", false]
		], -1
	],
	["[列|れっ][車|しゃ]", "列車", ["れっしゃ"],
		[
			["列", "れっ", false],
			["車", "しゃ", false]
		], -1
	],
	["[行|ぎょう][列|れつ]", "行列", ["ぎょうれつ"],
		[
			["行", "ぎょう", false],
			["列", "れつ", false]
		], -1
	],
	["[生|せい](徒|と)", "生徒", ["せいと"],
		[
			["生", "せい", false],
			["徒", "と", true]
		], "3884"
	],
	["(貨|か)[物|もつ]", "貨物", ["かもつ"],
		[
			["貨", "か", true],
			["物", "もつ", false]
		], "3886"
	],
	["[通|つう](貨|か)", "通貨", ["つうか"],
		[
			["通", "つう", false],
			["貨", "か", true]
		], "3887"
	],
	["[遊|あそ]び", "遊び", ["あそび"],
		[
			["遊", "あそ", false],
			["び", null, false]
		], -1
	],
	["[遊|ゆう][園|えん][地|ち]", "遊園地", ["ゆうえんち"],
		[
			["遊", "ゆう", false],
			["園", "えん", false],
			["地", "ち", false]
		], -1
	],
	["[四|し](季|き)", "四季", ["しき"],
		[
			["四", "し", false],
			["季", "き", true]
		], "3892"
	],
	["{～}[君|くん]", "～君", ["くん"],
		[
			["～", null, false],
			["君", "くん", false]
		], -1
	],
	["[君|きみ]", "君", ["きみ"],
		[
			["君", "きみ", false]
		], -1
	],
	["(湯|ゆ)[飲|の]み", "湯飲み", ["ゆのみ"],
		[
			["湯", "ゆ", true],
			["飲", "の", false],
			["み", null, false]
		], "2991"
	],
	["(欠|けっ)[点|てん]", "欠点", ["けってん"],
		[
			["欠", "けっ", true],
			["点", "てん", false]
		], "3900"
	],
	["[文|ぶん][章|しょう]", "文章", ["ぶんしょう"],
		[
			["文", "ぶん", false],
			["章", "しょう", false]
		], -1
	],
	["[章|しょう]", "章", ["しょう"],
		[
			["章", "しょう", false]
		], -1
	],
	["[試|し][験|けん]", "試験", ["しけん"],
		[
			["試", "し", false],
			["験", "けん", false]
		], -1
	],
	["[休|きゅう](養|よう)", "休養", ["きゅうよう"],
		[
			["休", "きゅう", false],
			["養", "よう", true]
		], "3908"
	],
	["[教|きょう](養|よう)", "教養", ["きょうよう"],
		[
			["教", "きょう", false],
			["養", "よう", true]
		], "3909"
	],
	["(養|よう)[分|ぶん]", "養分", ["ようぶん"],
		[
			["養", "よう", true],
			["分", "ぶん", false]
		], "3910"
	],
	["{～}[酒|しゅ]", "～酒", ["しゅ"],
		[
			["～", null, false],
			["酒", "しゅ", false]
		], -1
	],
	["[酒|さけ]", "酒", ["さけ"],
		[
			["酒", "さけ", false]
		], -1
	],
	["[酒|さか][場|ば]", "酒場", ["さかば"],
		[
			["酒", "さか", false],
			["場", "ば", false]
		], -1
	],
	["[伝|つた]え*る", "伝え", ["つたえ"],
		[
			["伝", "つた", false],
			["え", null, false]
		], -1
	],
	["[手|て][伝|つだ]*う", "手伝", ["てつだ"],
		[
			["手", "て", false],
			["伝", "つだ", false]
		], -1
	],
	["(街|まち)[角|かど]", "街角", ["まちかど"],
		[
			["街", "まち", true],
			["角", "かど", false]
		], "3914"
	],
	["[悲|かな]しい", "悲しい", ["かなしい"],
		[
			["悲", "かな", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[悲|かな]し*む", "悲し", ["かなし"],
		[
			["悲", "かな", false],
			["し", null, false]
		], -1
	],
	["[働|はたら]*く", "働", ["はたら"],
		[
			["働", "はたら", false]
		], -1
	],
	["[食|しょく](堂|どう)", "食堂", ["しょくどう"],
		[
			["食", "しょく", false],
			["堂", "どう", true]
		], -1
	],
	["[秒|びょう]", "秒", ["びょう"],
		[
			["秒", "びょう", false]
		], -1
	],
	["(笑|え)[顔|がお]", "笑顔", ["えがお"],
		[
			["笑", "え", true],
			["顔", "がお", false]
		], "3925"
	],
	["[暗|くら]い", "暗い", ["くらい"],
		[
			["暗", "くら", false],
			["い", null, false]
		], -1
	],
	["[暗|あん][記|き]", "暗記", ["あんき"],
		[
			["暗", "あん", false],
			["記", "き", false]
		], -1
	],
	["[真|ま]っ[暗|くら]", "真っ暗", ["まっくら"],
		[
			["真", "ま", false],
			["っ", null, false],
			["暗", "くら", false]
		], -1
	],
	["[大|だい][好|す]き", "大好き", ["だいすき"],
		[
			["大", "だい", false],
			["好", "す", false],
			["き", null, false]
		], -1
	],
	["[好|す]き", "好き", ["すき"],
		[
			["好", "す", false],
			["き", null, false]
		], -1
	],
	["[勉|べん][強|きょう]", "勉強", ["べんきょう"],
		[
			["勉", "べん", false],
			["強", "きょう", false]
		], -1
	],
	["(仲|なか)[直|なお]り", "仲直り", ["なかなおり"],
		[
			["仲", "なか", true],
			["直", "なお", false],
			["り", null, false]
		], "3937"
	],
	["(仲|なか)[間|ま]", "仲間", ["なかま"],
		[
			["仲", "なか", true],
			["間", "ま", false]
		], "3939"
	],
	["[太|たい][陽|よう]", "太陽", ["たいよう"],
		[
			["太", "たい", false],
			["陽", "よう", false]
		], -1
	],
	["[陽|よう][気|き]", "陽気", ["ようき"],
		[
			["陽", "よう", false],
			["気", "き", false]
		], -1
	],
	["[皮|かわ]", "皮", ["かわ"],
		[
			["皮", "かわ", false]
		], -1
	],
	["[皮|ひ][肉|にく]", "皮肉", ["ひにく"],
		[
			["皮", "ひ", false],
			["肉", "にく", false]
		], -1
	],
	["[毛|け][皮|がわ]", "毛皮", ["けがわ"],
		[
			["毛", "け", false],
			["皮", "がわ", false]
		], -1
	],
	["[英|えい][語|ご]", "英語", ["えいご"],
		[
			["英", "えい", false],
			["語", "ご", false]
		], -1
	],
	["(借|しゃっ)[金|きん]", "借金", ["しゃっきん"],
		[
			["借", "しゃっ", true],
			["金", "きん", false]
		], "3949"
	],
	["[歯|は]", "歯", ["は"],
		[
			["歯", "は", false]
		], -1
	],
	["[歯|は][車|ぐるま]", "歯車", ["はぐるま"],
		[
			["歯", "は", false],
			["車", "ぐるま", false]
		], -1
	],
	["[虫|むし][歯|ば]", "虫歯", ["むしば"],
		[
			["虫", "むし", false],
			["歯", "ば", false]
		], -1
	],
	["[低|ひく]い", "低い", ["ひくい"],
		[
			["低", "ひく", false],
			["い", null, false]
		], -1
	],
	["[調|ちょう](節|せつ)", "調節", ["ちょうせつ"],
		[
			["調", "ちょう", false],
			["節", "せつ", true]
		], "3953"
	],
	["[小|こ](包|づつみ)", "小包", ["こづつみ"],
		[
			["小", "こ", false],
			["包", "づつみ", true]
		], "3957"
	],
	["[電|でん][柱|ちゅう]", "電柱", ["でんちゅう"],
		[
			["電", "でん", false],
			["柱", "ちゅう", false]
		], -1
	],
	["(折|せっ)[角|かく]", "折角", ["せっかく"],
		[
			["折", "せっ", true],
			["角", "かく", false]
		], "3963"
	],
	["{～}[祭|さい]", "～祭", ["さい"],
		[
			["～", null, false],
			["祭", "さい", false]
		], -1
	],
	["[祭|まつり]", "祭", ["まつり"],
		[
			["祭", "まつり", false]
		], -1
	],
	["[祭|まつ]*5", "祭", ["まつ"],
		[
			["祭", "まつ", false]
		], -1
	],
	["[祭|さい][日|じつ]", "祭日", ["さいじつ"],
		[
			["祭", "さい", false],
			["日", "じつ", false]
		], -1
	],
	["[万|まん][年|ねん][筆|ひつ]", "万年筆", ["まんねんひつ"],
		[
			["万", "まん", false],
			["年", "ねん", false],
			["筆", "ひつ", false]
		], -1
	],
	["[筆|ふで]", "筆", ["ふで"],
		[
			["筆", "ふで", false]
		], -1
	],
	["[筆|ひっ][者|しゃ]", "筆者", ["ひっしゃ"],
		[
			["筆", "ひっ", false],
			["者", "しゃ", false]
		], -1
	],
	["[筆|ひっ][記|き]", "筆記", ["ひっき"],
		[
			["筆", "ひっ", false],
			["記", "き", false]
		], -1
	],
	["[対|たい](照|しょう)", "対照", ["たいしょう"],
		[
			["対", "たい", false],
			["照", "しょう", true]
		], "3974"
	],
	["[童|どう][話|わ]", "童話", ["どうわ"],
		[
			["童", "どう", false],
			["話", "わ", false]
		], -1
	],
	["(児|じ)[童|どう]", "児童", ["じどう"],
		[
			["児", "じ", true],
			["童", "どう", false]
		], "3769"
	],
	["[畑|はたけ]", "畑", ["はたけ"],
		[
			["畑", "はたけ", false]
		], -1
	],
	["[緑|みどり]", "緑", ["みどり"],
		[
			["緑", "みどり", false]
		], -1
	],
	["[古|こ](典|てん)", "古典", ["こてん"],
		[
			["古", "こ", false],
			["典", "てん", true]
		], "3985"
	],
	["(漁|ぎょ)[業|ぎょう]", "漁業", ["ぎょぎょう"],
		[
			["漁", "ぎょ", true],
			["業", "ぎょう", false]
		], "3987"
	],
	["[礼|れい]", "礼", ["れい"],
		[
			["礼", "れい", false]
		], -1
	],
	["(失|しつ)[礼|れい]", "失礼", ["しつれい"],
		[
			["失", "しつ", true],
			["礼", "れい", false]
		], "3545"
	],
	["(貯|ちょ)[金|きん]", "貯金", ["ちょきん"],
		[
			["貯", "ちょ", true],
			["金", "きん", false]
		], "3989"
	],
	["梅雨", "梅雨", ["つゆ", "ばいう"],
		[], null
	],
	["[詩|し]", "詩", ["し"],
		[
			["詩", "し", false]
		], -1
	],
	["[詩|し][人|じん]", "詩人", ["しじん"],
		[
			["詩", "し", false],
			["人", "じん", false]
		], -1
	],
	["(倉|そう)[庫|こ]", "倉庫", ["そうこ"],
		[
			["倉", "そう", true],
			["庫", "こ", false]
		], "3992"
	],
	["[昔|むかし]", "昔", ["むかし"],
		[
			["昔", "むかし", false]
		], -1
	],
	["(訓|くん)[練|れん]", "訓練", ["くんれん"],
		[
			["訓", "くん", true],
			["練", "れん", false]
		], "3997"
	],
	["[泳|およ]ぎ", "泳ぎ", ["およぎ"],
		[
			["泳", "およ", false],
			["ぎ", null, false]
		], -1
	],
	["[海|かい][水|すい](浴|よく)", "海水浴", ["かいすいよく"],
		[
			["海", "かい", false],
			["水", "すい", false],
			["浴", "よく", true]
		], "4000"
	],
	["[荷|に][物|もつ]", "荷物", ["にもつ"],
		[
			["荷", "に", false],
			["物", "もつ", false]
		], -1
	],
	["[食|しょく](塩|えん)", "食塩", ["しょくえん"],
		[
			["食", "しょく", false],
			["塩", "えん", true]
		], "4003"
	],
	["[石|せき][炭|たん]", "石炭", ["せきたん"],
		[
			["石", "せき", false],
			["炭", "たん", false]
		], -1
	],
	["(祝|しゅく)[日|じつ]", "祝日", ["しゅくじつ"],
		[
			["祝", "しゅく", true],
			["日", "じつ", false]
		], "4008"
	],
	["{～}[丁|ちょう][目|め]", "～丁目", ["ちょうめ"],
		[
			["～", null, false],
			["丁", "ちょう", false],
			["目", "め", false]
		], -1
	],
	["{～}[湖|こ]", "～湖", ["こ"],
		[
			["～", null, false],
			["湖", "こ", false]
		], -1
	],
	["[湖|みずうみ]", "湖", ["みずうみ"],
		[
			["湖", "みずうみ", false]
		], -1
	],
	["(衣|い)[服|ふく]", "衣服", ["いふく"],
		[
			["衣", "い", true],
			["服", "ふく", false]
		], "4016"
	],
	["(衣|い)[食|しょく][住|じゅう]", "衣食住", ["いしょくじゅう"],
		[
			["衣", "い", true],
			["食", "しょく", false],
			["住", "じゅう", false]
		], "4017"
	],
	["[湯|ゆ]", "湯", ["ゆ"],
		[
			["湯", "ゆ", false]
		], -1
	],
	["[湯|ゆ][気|げ]", "湯気", ["ゆげ"],
		[
			["湯", "ゆ", false],
			["気", "げ", false]
		], -1
	],
	["[湯|ゆ][飲|の]み", "湯飲み", ["ゆのみ"],
		[
			["湯", "ゆ", false],
			["飲", "の", false],
			["み", null, false]
		], -1
	],
	["[大|だい](臣|じん)", "大臣", ["だいじん"],
		[
			["大", "だい", false],
			["臣", "じん", true]
		], "4020"
	],
	["[箱|はこ]", "箱", ["はこ"],
		[
			["箱", "はこ", false]
		], -1
	],
	["[豆|まめ]", "豆", ["まめ"],
		[
			["豆", "まめ", false]
		], -1
	],
	["(勇|ゆう)[気|き]", "勇気", ["ゆうき"],
		[
			["勇", "ゆう", true],
			["気", "き", false]
		], "4025"
	],
	["[氷|こおり]", "氷", ["こおり"],
		[
			["氷", "こおり", false]
		], -1
	],
	["[寒|さむ]い", "寒い", ["さむい"],
		[
			["寒", "さむ", false],
			["い", null, false]
		], -1
	],
	["[寒|かん](帯|たい)", "寒帯", ["かんたい"],
		[
			["寒", "かん", false],
			["帯", "たい", true]
		], "3836"
	],
	["(牧|ぼく)[場|じょう]", "牧場", ["ぼくじょう"],
		[
			["牧", "ぼく", true],
			["場", "じょう", false]
		], "4034"
	],
	["{～}[帳|ちょう]", "～帳", ["ちょう"],
		[
			["～", null, false],
			["帳", "ちょう", false]
		], -1
	],
	["[手|て][帳|ちょう]", "手帳", ["てちょう"],
		[
			["手", "て", false],
			["帳", "ちょう", false]
		], -1
	],
	["[通|つう][帳|ちょう]", "通帳", ["つうちょう"],
		[
			["通", "つう", false],
			["帳", "ちょう", false]
		], -1
	],
	["[子|し](孫|そん)", "子孫", ["しそん"],
		[
			["子", "し", false],
			["孫", "そん", true]
		], "4038"
	],
	["[気|き]の(毒|どく)", "気の毒", ["きのどく"],
		[
			["気", "き", false],
			["の", null, false],
			["毒", "どく", true]
		], "4043"
	],
	["[消|しょう](毒|どく)", "消毒", ["しょうどく"],
		[
			["消", "しょう", false],
			["毒", "どく", true]
		], "4044"
	],
	["[漢|かん][和|わ]", "漢和", ["かんわ"],
		[
			["漢", "かん", false],
			["和", "わ", false]
		], -1
	],
	["[半|はん](径|けい)", "半径", ["はんけい"],
		[
			["半", "はん", false],
			["径", "けい", true]
		], "4045"
	],
	["[直|ちょっ](径|けい)", "直径", ["ちょっけい"],
		[
			["直", "ちょっ", false],
			["径", "けい", true]
		], "4046"
	],
	["[鼻|はな]", "鼻", ["はな"],
		[
			["鼻", "はな", false]
		], -1
	],
	["[文|ぶん](脈|みゃく)", "文脈", ["ぶんみゃく"],
		[
			["文", "ぶん", false],
			["脈", "みゃく", true]
		], "4050"
	],
	["[皿|さら]", "皿", ["さら"],
		[
			["皿", "さら", false]
		], -1
	],
	["(望|ぼう)[遠|えん](鏡|きょう)", "望遠鏡", ["ぼうえんきょう"],
		[
			["望", "ぼう", true],
			["遠", "えん", false],
			["鏡", "きょう", true]
		], "3593"
	],
	["[羊|よう][毛|もう]", "羊毛", ["ようもう"],
		[
			["羊", "よう", false],
			["毛", "もう", false]
		], -1
	],
	["[笛|ふえ]", "笛", ["ふえ"],
		[
			["笛", "ふえ", false]
		], -1
	],
	["(灯|とう)[台|だい]", "灯台", ["とうだい"],
		[
			["灯", "とう", true],
			["台", "だい", false]
		], "4062"
	],
	["(灯|とう)[油|ゆ]", "灯油", ["とうゆ"],
		[
			["灯", "とう", true],
			["油", "ゆ", false]
		], "4063"
	],
	["[電|でん](灯|とう)", "電灯", ["でんとう"],
		[
			["電", "でん", false],
			["灯", "とう", true]
		], "4064"
	],
	["[会|かい][議|ぎ]", "会議", ["かいぎ"],
		[
			["会", "かい", false],
			["議", "ぎ", false]
		], -1
	],
	["[議|ぎ][会|かい]", "議会", ["ぎかい"],
		[
			["議", "ぎ", false],
			["会", "かい", false]
		], -1
	],
	["[議|ぎ][長|ちょう]", "議長", ["ぎちょう"],
		[
			["議", "ぎ", false],
			["長", "ちょう", false]
		], -1
	],
	["[議|ぎ][員|いん]", "議員", ["ぎいん"],
		[
			["議", "ぎ", false],
			["員", "いん", false]
		], -1
	],
	["(不|ふ)[思|し][議|ぎ]", "不思議", ["ふしぎ"],
		[
			["不", "ふ", true],
			["思", "し", false],
			["議", "ぎ", false]
		], "3094"
	],
	["[国|こく][民|みん]", "国民", ["こくみん"],
		[
			["国", "こく", false],
			["民", "みん", false]
		], -1
	],
	["[民|みん][間|かん]", "民間", ["みんかん"],
		[
			["民", "みん", false],
			["間", "かん", false]
		], -1
	],
	["[市|し][民|みん]", "市民", ["しみん"],
		[
			["市", "し", false],
			["民", "みん", false]
		], -1
	],
	["[民|みん][主|しゅ]{～}", "民主～", ["みんしゅ"],
		[
			["民", "みん", false],
			["主", "しゅ", false],
			["～", null, false]
		], -1
	],
	["[住|じゅう][民|みん]", "住民", ["じゅうみん"],
		[
			["住", "じゅう", false],
			["民", "みん", false]
		], -1
	],
	["[農|のう][民|みん]", "農民", ["のうみん"],
		[
			["農", "のう", false],
			["民", "みん", false]
		], -1
	],
	["[連|つ]れ", "連れ", ["つれ"],
		[
			["連", "つ", false],
			["れ", null, false]
		], -1
	],
	["[連|れん][合|ごう]", "連合", ["れんごう"],
		[
			["連", "れん", false],
			["合", "ごう", false]
		], -1
	],
	["[連|れん][想|そう]", "連想", ["れんそう"],
		[
			["連", "れん", false],
			["想", "そう", false]
		], -1
	],
	["(関|かん)[連|れん]", "関連", ["かんれん"],
		[
			["関", "かん", true],
			["連", "れん", false]
		], "3047"
	],
	["[連|れん](続|ぞく)", "連続", ["れんぞく"],
		[
			["連", "れん", false],
			["続", "ぞく", true]
		], "3178"
	],
	["(経|けい)[度|ど]", "経度", ["けいど"],
		[
			["経", "けい", true],
			["度", "ど", false]
		], "4083"
	],
	["(経|けい)[由|ゆ]", "経由", ["けいゆ"],
		[
			["経", "けい", true],
			["由", "ゆ", false]
		], "4084"
	],
	["[神|しん](経|けい)", "神経", ["しんけい"],
		[
			["神", "しん", false],
			["経", "けい", true]
		], "4085"
	],
	["[選|えら]*ぶ", "選", ["えら"],
		[
			["選", "えら", false]
		], -1
	],
	["[選|せん][手|しゅ]", "選手", ["せんしゅ"],
		[
			["選", "せん", false],
			["手", "しゅ", false]
		], -1
	],
	["[実|じつ](現|げん)", "実現", ["じつげん"],
		[
			["実", "じつ", false],
			["現", "げん", true]
		], "4089"
	],
	["(現|げん)[代|だい]", "現代", ["げんだい"],
		[
			["現", "げん", true],
			["代", "だい", false]
		], "4095"
	],
	["(現|げん)[場|ば]", "現場", ["げんば"],
		[
			["現", "げん", true],
			["場", "ば", false]
		], "4096"
	],
	["(現|げん)[実|じつ]", "現実", ["げんじつ"],
		[
			["現", "げん", true],
			["実", "じつ", false]
		], "4097"
	],
	["(現|げん)[金|きん]", "現金", ["げんきん"],
		[
			["現", "げん", true],
			["金", "きん", false]
		], "4098"
	],
	["[表|ひょう](現|げん)", "表現", ["ひょうげん"],
		[
			["表", "ひょう", false],
			["現", "げん", true]
		], "4099"
	],
	["[関|かん]する", "関する", ["かんする"],
		[
			["関", "かん", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["[関|かん][東|とう]", "関東", ["かんとう"],
		[
			["関", "かん", false],
			["東", "とう", false]
		], -1
	],
	["[関|かん][連|れん]", "関連", ["かんれん"],
		[
			["関", "かん", false],
			["連", "れん", false]
		], -1
	],
	["[関|かん][心|しん]", "関心", ["かんしん"],
		[
			["関", "かん", false],
			["心", "しん", false]
		], -1
	],
	["[関|かん][係|けい]", "関係", ["かんけい"],
		[
			["関", "かん", false],
			["係", "けい", false]
		], -1
	],
	["[関|かん][西|さい]", "関西", ["かんさい"],
		[
			["関", "かん", false],
			["西", "さい", false]
		], -1
	],
	["(機|き)[関|かん]", "機関", ["きかん"],
		[
			["機", "き", true],
			["関", "かん", false]
		], "3156"
	],
	["[交|こう][通|つう](機|き)[関|かん]", "交通機関", ["こうつうきかん"],
		[
			["交", "こう", false],
			["通", "つう", false],
			["機", "き", true],
			["関", "かん", false]
		], "3157"
	],
	["(機|き)[関|かん][車|しゃ]", "機関車", ["きかんしゃ"],
		[
			["機", "き", true],
			["関", "かん", false],
			["車", "しゃ", false]
		], "3158"
	],
	["[中|ちゅう](性|せい)", "中性", ["ちゅうせい"],
		[
			["中", "ちゅう", false],
			["性", "せい", true]
		], "4104"
	],
	["[女|じょ](性|せい)", "女性", ["じょせい"],
		[
			["女", "じょ", false],
			["性", "せい", true]
		], "4106"
	],
	["[男|だん](性|せい)", "男性", ["だんせい"],
		[
			["男", "だん", false],
			["性", "せい", true]
		], "4108"
	],
	["{～}[戦|せん]", "～戦", ["せん"],
		[
			["～", null, false],
			["戦", "せん", false]
		], -1
	],
	["[大|たい][戦|せん]", "大戦", ["たいせん"],
		[
			["大", "たい", false],
			["戦", "せん", false]
		], -1
	],
	["[戦|たたか]い", "戦い", ["たたかい"],
		[
			["戦", "たたか", false],
			["い", null, false]
		], -1
	],
	["[戦|たたか]*う", "戦", ["たたか"],
		[
			["戦", "たたか", false]
		], -1
	],
	["[戦|せん](争|そう)", "戦争", ["せんそう"],
		[
			["戦", "せん", false],
			["争", "そう", true]
		], "3338"
	],
	["[体|たい](制|せい)", "体制", ["たいせい"],
		[
			["体", "たい", false],
			["制", "せい", true]
		], "4115"
	],
	["(制|せい)[作|さく]", "制作", ["せいさく"],
		[
			["制", "せい", true],
			["作", "さく", false]
		], "4116"
	],
	["(制|せい)[度|ど]", "制度", ["せいど"],
		[
			["制", "せい", true],
			["度", "ど", false]
		], "4117"
	],
	["[事|じ](務|む)", "事務", ["じむ"],
		[
			["事", "じ", false],
			["務", "む", true]
		], "4121"
	],
	["[公|こう](務|む)", "公務", ["こうむ"],
		[
			["公", "こう", false],
			["務", "む", true]
		], "4124"
	],
	["[最|さい]{～}", "最～", ["さい"],
		[
			["最", "さい", false],
			["～", null, false]
		], -1
	],
	["[最|もっと]も", "最も", ["もっとも"],
		[
			["最", "もっと", false],
			["も", null, false]
		], -1
	],
	["[最|さい][中|ちゅう]", "最中", ["さいちゅう"],
		[
			["最", "さい", false],
			["中", "ちゅう", false]
		], -1
	],
	["[最|さい][後|ご]", "最後", ["さいご"],
		[
			["最", "さい", false],
			["後", "ご", false]
		], -1
	],
	["[最|さい][高|こう]", "最高", ["さいこう"],
		[
			["最", "さい", false],
			["高", "こう", false]
		], -1
	],
	["[最|さい][近|きん]", "最近", ["さいきん"],
		[
			["最", "さい", false],
			["近", "きん", false]
		], -1
	],
	["[最|さい][終|しゅう]", "最終", ["さいしゅう"],
		[
			["最", "さい", false],
			["終", "しゅう", false]
		], -1
	],
	["[最|さい](初|しょ)", "最初", ["さいしょ"],
		[
			["最", "さい", false],
			["初", "しょ", true]
		], "3193"
	],
	["[最|さい](低|てい)", "最低", ["さいてい"],
		[
			["最", "さい", false],
			["低", "てい", true]
		], "3541"
	],
	["(統|とう)[一|いつ]", "統一", ["とういつ"],
		[
			["統", "とう", true],
			["一", "いつ", false]
		], "4126"
	],
	["(統|とう)[計|けい]", "統計", ["とうけい"],
		[
			["統", "とう", true],
			["計", "けい", false]
		], "4127"
	],
	["[氏|し]", "氏", ["し"],
		[
			["氏", "し", false]
		], -1
	],
	["[氏|し][名|めい]", "氏名", ["しめい"],
		[
			["氏", "し", false],
			["名", "めい", false]
		], -1
	],
	["(総|そう)[理|り][大|だい](臣|じん)", "総理大臣", ["そうりだいじん"],
		[
			["総", "そう", true],
			["理", "り", false],
			["大", "だい", false],
			["臣", "じん", true]
		], "4021"
	],
	["[約|やく]", "約", ["やく"],
		[
			["約", "やく", false]
		], -1
	],
	["[予|よ][約|やく]", "予約", ["よやく"],
		[
			["予", "よ", false],
			["約", "やく", false]
		], -1
	],
	["[約|やく](束|そく)", "約束", ["やくそく"],
		[
			["約", "やく", false],
			["束", "そく", true]
		], "3930"
	],
	["(節|せつ)[約|やく]", "節約", ["せつやく"],
		[
			["節", "せつ", true],
			["約", "やく", false]
		], "3952"
	],
	["[大|だい](統|とう)(領|りょう)", "大統領", ["だいとうりょう"],
		[
			["大", "だい", false],
			["統", "とう", true],
			["領", "りょう", true]
		], "4129"
	],
	["(領|りょう)[事|じ]", "領事", ["りょうじ"],
		[
			["領", "りょう", true],
			["事", "じ", false]
		], "4136"
	],
	["(設|せっ)[計|けい]", "設計", ["せっけい"],
		[
			["設", "せっ", true],
			["計", "けい", false]
		], "4138"
	],
	["[方|ほう][法|ほう]", "方法", ["ほうほう"],
		[
			["方", "ほう", false],
			["法", "ほう", false]
		], -1
	],
	["[法|ほう]", "法", ["ほう"],
		[
			["法", "ほう", false]
		], -1
	],
	["[作|さ][法|ほう]", "作法", ["さほう"],
		[
			["作", "さ", false],
			["法", "ほう", false]
		], -1
	],
	["[文|ぶん][法|ぽう]", "文法", ["ぶんぽう"],
		[
			["文", "ぶん", false],
			["法", "ぽう", false]
		], -1
	],
	["[不|ふ][通|つう]", "不通", ["ふつう"],
		[
			["不", "ふ", false],
			["通", "つう", false]
		], -1
	],
	["[不|ふ][平|へい]", "不平", ["ふへい"],
		[
			["不", "ふ", false],
			["平", "へい", false]
		], -1
	],
	["[不|ふ][思|し][議|ぎ]", "不思議", ["ふしぎ"],
		[
			["不", "ふ", false],
			["思", "し", false],
			["議", "ぎ", false]
		], -1
	],
	["[不|ふ][正|せい]", "不正", ["ふせい"],
		[
			["不", "ふ", false],
			["正", "せい", false]
		], -1
	],
	["[不|ふ][安|あん]", "不安", ["ふあん"],
		[
			["不", "ふ", false],
			["安", "あん", false]
		], -1
	],
	["[不|ふ][運|うん]", "不運", ["ふうん"],
		[
			["不", "ふ", false],
			["運", "うん", false]
		], -1
	],
	["[不|ふ][自|じ][由|ゆう]", "不自由", ["ふじゆう"],
		[
			["不", "ふ", false],
			["自", "じ", false],
			["由", "ゆう", false]
		], -1
	],
	["[不|ふ][足|そく]", "不足", ["ふそく"],
		[
			["不", "ふ", false],
			["足", "そく", false]
		], -1
	],
	["[不|ふ][幸|こう]", "不幸", ["ふこう"],
		[
			["不", "ふ", false],
			["幸", "こう", false]
		], -1
	],
	["[不|ふ](利|り)", "不利", ["ふり"],
		[
			["不", "ふ", false],
			["利", "り", true]
		], "3261"
	],
	["[不|ふ](満|まん)", "不満", ["ふまん"],
		[
			["不", "ふ", false],
			["満", "まん", true]
		], "3636"
	],
	["(支|し)[出|しゅつ]", "支出", ["ししゅつ"],
		[
			["支", "し", true],
			["出", "しゅつ", false]
		], "4148"
	],
	["(支|し)[度|たく]", "支度", ["したく"],
		[
			["支", "し", true],
			["度", "たく", false]
		], "4149"
	],
	["(支|し)[配|はい]", "支配", ["しはい"],
		[
			["支", "し", true],
			["配", "はい", false]
		], "4150"
	],
	["(支|し)[店|てん]", "支店", ["してん"],
		[
			["支", "し", true],
			["店", "てん", false]
		], "4151"
	],
	["{～}[的|てき]", "～的", ["てき"],
		[
			["～", null, false],
			["的", "てき", false]
		], -1
	],
	["[目|もく][的|てき]", "目的", ["もくてき"],
		[
			["目", "もく", false],
			["的", "てき", false]
		], -1
	],
	["[消|しょう](極|きょく)[的|てき]", "消極的", ["しょうきょくてき"],
		[
			["消", "しょう", false],
			["極", "きょく", true],
			["的", "てき", false]
		], "3573"
	],
	["(積|せっ)(極|きょく)[的|てき]", "積極的", ["せっきょくてき"],
		[
			["積", "せっ", true],
			["極", "きょく", true],
			["的", "てき", false]
		], "3574"
	],
	["[予|よ](報|ほう)", "予報", ["よほう"],
		[
			["予", "よ", false],
			["報", "ほう", true]
		], "4155"
	],
	["[電|でん](報|ぽう)", "電報", ["でんぽう"],
		[
			["電", "でん", false],
			["報", "ぽう", true]
		], "4157"
	],
	["[分|ぶん](解|かい)", "分解", ["ぶんかい"],
		[
			["分", "ぶん", false],
			["解", "かい", true]
		], "4161"
	],
	["[理|り](解|かい)", "理解", ["りかい"],
		[
			["理", "り", false],
			["解", "かい", true]
		], "4162"
	],
	["[見|けん](解|かい)", "見解", ["けんかい"],
		[
			["見", "けん", false],
			["解", "かい", true]
		], "4163"
	],
	["(解|かい)[決|けつ]", "解決", ["かいけつ"],
		[
			["解", "かい", true],
			["決", "けつ", false]
		], "4166"
	],
	["(解|かい)[放|ほう]", "解放", ["かいほう"],
		[
			["解", "かい", true],
			["放", "ほう", false]
		], "4167"
	],
	["(解|かい)[答|とう]", "解答", ["かいとう"],
		[
			["解", "かい", true],
			["答", "とう", false]
		], "4169"
	],
	["[主|しゅ][要|よう]", "主要", ["しゅよう"],
		[
			["主", "しゅ", false],
			["要", "よう", false]
		], -1
	],
	["[要|よう]するに", "要するに", ["ようするに"],
		[
			["要", "よう", false],
			["す", null, false],
			["る", null, false],
			["に", null, false]
		], -1
	],
	["[要|い]*5", "要", ["い"],
		[
			["要", "い", false]
		], -1
	],
	["[要|よう][点|てん]", "要点", ["ようてん"],
		[
			["要", "よう", false],
			["点", "てん", false]
		], -1
	],
	["[重|じゅう][要|よう]", "重要", ["じゅうよう"],
		[
			["重", "じゅう", false],
			["要", "よう", false]
		], -1
	],
	["[要|よう](求|きゅう)", "要求", ["ようきゅう"],
		[
			["要", "よう", false],
			["求", "きゅう", true]
		], "3294"
	],
	["(必|ひつ)[要|よう]", "必要", ["ひつよう"],
		[
			["必", "ひつ", true],
			["要", "よう", false]
		], "3335"
	],
	["[要|よう](領|りょう)", "要領", ["ようりょう"],
		[
			["要", "よう", false],
			["領", "りょう", true]
		], "4135"
	],
	["(資|し)[本|ほん]", "資本", ["しほん"],
		[
			["資", "し", true],
			["本", "ほん", false]
		], "4173"
	],
	["[治|なお]*す", "治", ["なお"],
		[
			["治", "なお", false]
		], -1
	],
	["[治|おさ]め*る", "治め", ["おさめ"],
		[
			["治", "おさ", false],
			["め", null, false]
		], -1
	],
	["[自|じ][治|ち]", "自治", ["じち"],
		[
			["自", "じ", false],
			["治", "ち", false]
		], -1
	],
	["(政|せい)[治|じ]", "政治", ["せいじ"],
		[
			["政", "せい", true],
			["治", "じ", false]
		], "4073"
	],
	["[交|こう](際|さい)", "交際", ["こうさい"],
		[
			["交", "こう", false],
			["際", "さい", true]
		], "4176"
	],
	["[国|こく](際|さい)", "国際", ["こくさい"],
		[
			["国", "こく", false],
			["際", "さい", true]
		], "4177"
	],
	["[実|じっ](際|さい)", "実際", ["じっさい"],
		[
			["実", "じっ", false],
			["際", "さい", true]
		], "4178"
	],
	["[作|さく][成|せい]", "作成", ["さくせい"],
		[
			["作", "さく", false],
			["成", "せい", false]
		], -1
	],
	["[成|な]*5", "成", ["な"],
		[
			["成", "な", false]
		], -1
	],
	["[成|せい][人|じん]", "成人", ["せいじん"],
		[
			["成", "せい", false],
			["人", "じん", false]
		], -1
	],
	["[成|せい][分|ぶん]", "成分", ["せいぶん"],
		[
			["成", "せい", false],
			["分", "ぶん", false]
		], -1
	],
	["[成|せい][立|りつ]", "成立", ["せいりつ"],
		[
			["成", "せい", false],
			["立", "りつ", false]
		], -1
	],
	["[成|せい][長|ちょう]", "成長", ["せいちょう"],
		[
			["成", "せい", false],
			["長", "ちょう", false]
		], -1
	],
	["(完|かん)[成|せい]", "完成", ["かんせい"],
		[
			["完", "かん", true],
			["成", "せい", false]
		], "3718"
	],
	["[成|せい](功|こう)", "成功", ["せいこう"],
		[
			["成", "せい", false],
			["功", "こう", true]
		], "3896"
	],
	["[調|ちょう](査|さ)", "調査", ["ちょうさ"],
		[
			["調", "ちょう", false],
			["査", "さ", true]
		], "4183"
	],
	["(判|はん)[事|じ]", "判事", ["はんじ"],
		[
			["判", "はん", true],
			["事", "じ", false]
		], "4185"
	],
	["(判|はん)[子|こ]", "判子", ["はんこ"],
		[
			["判", "はん", true],
			["子", "こ", false]
		], "4186"
	],
	["[協|きょう][力|りょく]", "協力", ["きょうりょく"],
		[
			["協", "きょう", false],
			["力", "りょく", false]
		], -1
	],
	["(在|ざい)[学|がく]", "在学", ["ざいがく"],
		[
			["在", "ざい", true],
			["学", "がく", false]
		], "4192"
	],
	["[以|い][前|ぜん]", "以前", ["いぜん"],
		[
			["以", "い", false],
			["前", "ぜん", false]
		], -1
	],
	["[以|い][外|がい]", "以外", ["いがい"],
		[
			["以", "い", false],
			["外", "がい", false]
		], -1
	],
	["[以|い][後|ご]", "以後", ["いご"],
		[
			["以", "い", false],
			["後", "ご", false]
		], -1
	],
	["[以|い][来|らい]", "以来", ["いらい"],
		[
			["以", "い", false],
			["来", "らい", false]
		], -1
	],
	["[事|じ](件|けん)", "事件", ["じけん"],
		[
			["事", "じ", false],
			["件", "けん", true]
		], "4197"
	],
	["{～}[機|き]", "～機", ["き"],
		[
			["～", null, false],
			["機", "き", false]
		], -1
	],
	["ジェット[機|き]", "ジェット機", ["ジェットき"],
		[
			["ジ", null, false],
			["ェ", null, false],
			["ッ", null, false],
			["ト", null, false],
			["機", "き", false]
		], -1
	],
	["[機|き][会|かい]", "機会", ["きかい"],
		[
			["機", "き", false],
			["会", "かい", false]
		], -1
	],
	["[機|き][関|かん]", "機関", ["きかん"],
		[
			["機", "き", false],
			["関", "かん", false]
		], -1
	],
	["[交|こう][通|つう][機|き][関|かん]", "交通機関", ["こうつうきかん"],
		[
			["交", "こう", false],
			["通", "つう", false],
			["機", "き", false],
			["関", "かん", false]
		], -1
	],
	["[機|き][関|かん][車|しゃ]", "機関車", ["きかんしゃ"],
		[
			["機", "き", false],
			["関", "かん", false],
			["車", "しゃ", false]
		], -1
	],
	["[機|き](械|かい)", "機械", ["きかい"],
		[
			["機", "き", false],
			["械", "かい", true]
		], "4028"
	],
	["(団|だん)[体|たい]", "団体", ["だんたい"],
		[
			["団", "だん", true],
			["体", "たい", false]
		], "4201"
	],
	["(団|だん)[地|ち]", "団地", ["だんち"],
		[
			["団", "だん", true],
			["地", "ち", false]
		], "4202"
	],
	["[集|しゅう](団|だん)", "集団", ["しゅうだん"],
		[
			["集", "しゅう", false],
			["団", "だん", true]
		], "4203"
	],
	["[加|くわ]え*る", "加え", ["くわえ"],
		[
			["加", "くわ", false],
			["え", null, false]
		], -1
	],
	["[加|くわ]わ*5", "加わ", ["くわわ"],
		[
			["加", "くわ", false],
			["わ", null, false]
		], -1
	],
	["[追|つい][加|か]", "追加", ["ついか"],
		[
			["追", "つい", false],
			["加", "か", false]
		], -1
	],
	["[加|か][速|そく]", "加速", ["かそく"],
		[
			["加", "か", false],
			["速", "そく", false]
		], -1
	],
	["[加|か][速|そく][度|ど]", "加速度", ["かそくど"],
		[
			["加", "か", false],
			["速", "そく", false],
			["度", "ど", false]
		], -1
	],
	["(参|さん)[加|か]", "参加", ["さんか"],
		[
			["参", "さん", true],
			["加", "か", false]
		], "3251"
	],
	["[加|か](熱|ねつ)", "加熱", ["かねつ"],
		[
			["加", "か", false],
			["熱", "ねつ", true]
		], "3793"
	],
	["(増|ぞう)[加|か]", "増加", ["ぞうか"],
		[
			["増", "ぞう", true],
			["加", "か", false]
		], "4214"
	],
	["(増|ぞう)[大|だい]", "増大", ["ぞうだい"],
		[
			["増", "ぞう", true],
			["大", "だい", false]
		], "4215"
	],
	["{～}[続|つづ]く", "～続く", ["つづく"],
		[
			["～", null, false],
			["続", "つづ", false],
			["く", null, false]
		], -1
	],
	["{～}[続|つづ]ける", "～続ける", ["つづける"],
		[
			["～", null, false],
			["続", "つづ", false],
			["け", null, false],
			["る", null, false]
		], -1
	],
	["[手|て][続|つづ]き", "手続き", ["てつづき"],
		[
			["手", "て", false],
			["続", "つづ", false],
			["き", null, false]
		], -1
	],
	["[相|そう][続|ぞく]", "相続", ["そうぞく"],
		[
			["相", "そう", false],
			["続", "ぞく", false]
		], -1
	],
	["[続|ぞく][々|ぞく]", "続々", ["ぞくぞく"],
		[
			["続", "ぞく", false],
			["々", "ぞく", false]
		], -1
	],
	["[続|つづ]き", "続き", ["つづき"],
		[
			["続", "つづ", false],
			["き", null, false]
		], -1
	],
	["[連|れん][続|ぞく]", "連続", ["れんぞく"],
		[
			["連", "れん", false],
			["続", "ぞく", false]
		], -1
	],
	["[事|じ](情|じょう)", "事情", ["じじょう"],
		[
			["事", "じ", false],
			["情", "じょう", true]
		], "4218"
	],
	["[感|かん](情|じょう)", "感情", ["かんじょう"],
		[
			["感", "かん", false],
			["情", "じょう", true]
		], "4220"
	],
	["[表|ひょう](情|じょう)", "表情", ["ひょうじょう"],
		[
			["表", "ひょう", false],
			["情", "じょう", true]
		], "4221"
	],
	["[友|ゆう](情|じょう)", "友情", ["ゆうじょう"],
		[
			["友", "ゆう", false],
			["情", "じょう", true]
		], "4222"
	],
	["[苦|く](情|じょう)", "苦情", ["くじょう"],
		[
			["苦", "く", false],
			["情", "じょう", true]
		], "4223"
	],
	["[改|あらた]めて", "改めて", ["あらためて"],
		[
			["改", "あらた", false],
			["め", null, false],
			["て", null, false]
		], -1
	],
	["[改|あらた]め*る", "改め", ["あらため"],
		[
			["改", "あらた", false],
			["め", null, false]
		], -1
	],
	["[改|かい][正|せい]", "改正", ["かいせい"],
		[
			["改", "かい", false],
			["正", "せい", false]
		], -1
	],
	["[改|かい](札|さつ)", "改札", ["かいさつ"],
		[
			["改", "かい", false],
			["札", "さつ", true]
		], "3945"
	],
	["(基|き)[地|ち]", "基地", ["きち"],
		[
			["基", "き", true],
			["地", "ち", false]
		], "4230"
	],
	["(基|き)[本|ほん]", "基本", ["きほん"],
		[
			["基", "き", true],
			["本", "ほん", false]
		], "4231"
	],
	["[初|しょ]{～}", "初～", ["しょ"],
		[
			["初", "しょ", false],
			["～", null, false]
		], -1
	],
	["[初|はじ]めて", "初めて", ["はじめて"],
		[
			["初", "はじ", false],
			["め", null, false],
			["て", null, false]
		], -1
	],
	["[初|はじ]めに", "初めに", ["はじめに"],
		[
			["初", "はじ", false],
			["め", null, false],
			["に", null, false]
		], -1
	],
	["[最|さい][初|しょ]", "最初", ["さいしょ"],
		[
			["最", "さい", false],
			["初", "しょ", false]
		], -1
	],
	["[初|しょ][歩|ほ]", "初歩", ["しょほ"],
		[
			["初", "しょ", false],
			["歩", "ほ", false]
		], -1
	],
	["[初|しょ][級|きゅう]", "初級", ["しょきゅう"],
		[
			["初", "しょ", false],
			["級", "きゅう", false]
		], -1
	],
	["[定|てい](価|か)", "定価", ["ていか"],
		[
			["定", "てい", false],
			["価", "か", true]
		], "4234"
	],
	["[物|ぶっ](価|か)", "物価", ["ぶっか"],
		[
			["物", "ぶっ", false],
			["価", "か", true]
		], "4235"
	],
	["[高|こう](価|か)", "高価", ["こうか"],
		[
			["高", "こう", false],
			["価", "か", true]
		], "4236"
	],
	["{～}[産|さん]", "～産", ["さん"],
		[
			["～", null, false],
			["産", "さん", false]
		], -1
	],
	["[生|せい][産|さん]", "生産", ["せいさん"],
		[
			["生", "せい", false],
			["産", "さん", false]
		], -1
	],
	["[産|さん][地|ち]", "産地", ["さんち"],
		[
			["産", "さん", false],
			["地", "ち", false]
		], -1
	],
	["[産|さん][業|ぎょう]", "産業", ["さんぎょう"],
		[
			["産", "さん", false],
			["業", "ぎょう", false]
		], -1
	],
	["[原|げん][産|さん]", "原産", ["げんさん"],
		[
			["原", "げん", false],
			["産", "さん", false]
		], -1
	],
	["[水|すい][産|さん]", "水産", ["すいさん"],
		[
			["水", "すい", false],
			["産", "さん", false]
		], -1
	],
	["[土産|みやげ]", "土産", ["みやげ"],
		[
			["土産", "みやげ", false]
		], -1
	],
	["[農|のう][産|さん][物|ぶつ]", "農産物", ["のうさんぶつ"],
		[
			["農", "のう", false],
			["産", "さん", false],
			["物", "ぶつ", false]
		], -1
	],
	["(共|きょう)[産|さん]{～}", "共産～", ["きょうさん"],
		[
			["共", "きょう", true],
			["産", "さん", false],
			["～", null, false]
		], "3222"
	],
	["[明|めい](確|かく)", "明確", ["めいかく"],
		[
			["明", "めい", false],
			["確", "かく", true]
		], "4241"
	],
	["[正|せい](確|かく)", "正確", ["せいかく"],
		[
			["正", "せい", false],
			["確", "かく", true]
		], "4242"
	],
	["[的|てき](確|かく)", "的確", ["てきかく"],
		[
			["的", "てき", false],
			["確", "かく", true]
		], "4243"
	],
	["(確|かく)[実|じつ]", "確実", ["かくじつ"],
		[
			["確", "かく", true],
			["実", "じつ", false]
		], "4246"
	],
	["[結|むす]*ぶ", "結", ["むす"],
		[
			["結", "むす", false]
		], -1
	],
	["[結|けっ][局|きょく]", "結局", ["けっきょく"],
		[
			["結", "けっ", false],
			["局", "きょく", false]
		], -1
	],
	["[結|けっ](果|か)", "結果", ["けっか"],
		[
			["結", "けっ", false],
			["果", "か", true]
		], "3329"
	],
	["(提|てい)[出|しゅつ]", "提出", ["ていしゅつ"],
		[
			["提", "てい", true],
			["出", "しゅつ", false]
		], "4252"
	],
	["[大|おお](勢|ぜい)", "大勢", ["おおぜい"],
		[
			["大", "おお", false],
			["勢", "ぜい", true]
		], "4256"
	],
	["(政|せい)[府|ふ]", "政府", ["せいふ"],
		[
			["政", "せい", true],
			["府", "ふ", false]
		], "4074"
	],
	["[加|か](減|げん)", "加減", ["かげん"],
		[
			["加", "か", false],
			["減", "げん", true]
		], "4259"
	],
	["[公|こう][共|きょう]", "公共", ["こうきょう"],
		[
			["公", "こう", false],
			["共", "きょう", false]
		], -1
	],
	["[共|とも]に", "共に", ["ともに"],
		[
			["共", "とも", false],
			["に", null, false]
		], -1
	],
	["[共|きょう][同|どう]", "共同", ["きょうどう"],
		[
			["共", "きょう", false],
			["同", "どう", false]
		], -1
	],
	["[共|きょう][産|さん]{～}", "共産～", ["きょうさん"],
		[
			["共", "きょう", false],
			["産", "さん", false],
			["～", null, false]
		], -1
	],
	["[共|きょう][通|つう]", "共通", ["きょうつう"],
		[
			["共", "きょう", false],
			["通", "つう", false]
		], -1
	],
	["[不|ふ][便|べん]", "不便", ["ふべん"],
		[
			["不", "ふ", false],
			["便", "べん", false]
		], -1
	],
	["[便|べん][利|り]", "便利", ["べんり"],
		[
			["便", "べん", false],
			["利", "り", false]
		], -1
	],
	["[内|ない](容|よう)", "内容", ["ないよう"],
		[
			["内", "ない", false],
			["容", "よう", true]
		], "4268"
	],
	["[美|び](容|よう)", "美容", ["びよう"],
		[
			["美", "び", false],
			["容", "よう", true]
		], "4269"
	],
	["[得|とく][意|い]", "得意", ["とくい"],
		[
			["得", "とく", false],
			["意", "い", false]
		], -1
	],
	["[心|こころ][得|え]*る", "心得", ["こころえ"],
		[
			["心", "こころ", false],
			["得", "え", false]
		], -1
	],
	["[一|いち](応|おう)", "一応", ["いちおう"],
		[
			["一", "いち", false],
			["応", "おう", true]
		], "4273"
	],
	["(応|おう)[対|たい]", "応対", ["おうたい"],
		[
			["応", "おう", true],
			["対", "たい", false]
		], "4276"
	],
	["(応|おう)[用|よう]", "応用", ["おうよう"],
		[
			["応", "おう", true],
			["用", "よう", false]
		], "4277"
	],
	["[広|こう][告|こく]", "広告", ["こうこく"],
		[
			["広", "こう", false],
			["告", "こく", false]
		], -1
	],
	["(報|ほう)[告|こく]", "報告", ["ほうこく"],
		[
			["報", "ほう", true],
			["告", "こく", false]
		], "4156"
	],
	["[機|き](能|のう)", "機能", ["きのう"],
		[
			["機", "き", false],
			["能", "のう", true]
		], "4287"
	],
	["[知|ち](能|のう)", "知能", ["ちのう"],
		[
			["知", "ち", false],
			["能", "のう", true]
		], "4288"
	],
	["(能|のう)[力|りょく]", "能力", ["のうりょく"],
		[
			["能", "のう", true],
			["力", "りょく", false]
		], "4290"
	],
	["[有|ゆう](能|のう)", "有能", ["ゆうのう"],
		[
			["有", "ゆう", false],
			["能", "のう", true]
		], "4291"
	],
	["[才|さい](能|のう)", "才能", ["さいのう"],
		[
			["才", "さい", false],
			["能", "のう", true]
		], "4293"
	],
	["[軍|ぐん]", "軍", ["ぐん"],
		[
			["軍", "ぐん", false]
		], -1
	],
	["[軍|ぐん](隊|たい)", "軍隊", ["ぐんたい"],
		[
			["軍", "ぐん", false],
			["隊", "たい", true]
		], "3721"
	],
	["(祖|そ)[母|ぼ]", "祖母", ["そぼ"],
		[
			["祖", "そ", true],
			["母", "ぼ", false]
		], "4458"
	],
	["(祖|そ)[父|ふ]", "祖父", ["そふ"],
		[
			["祖", "そ", true],
			["父", "ふ", false]
		], "4459"
	],
	["(再|さい)[三|さん]", "再三", ["さいさん"],
		[
			["再", "さい", true],
			["三", "さん", false]
		], "4302"
	],
	["(再|さ)[来|らい][年|ねん]", "再来年", ["さらいねん"],
		[
			["再", "さ", true],
			["来", "らい", false],
			["年", "ねん", false]
		], "4303"
	],
	["(再|さ)[来|らい][月|げつ]", "再来月", ["さらいげつ"],
		[
			["再", "さ", true],
			["来", "らい", false],
			["月", "げつ", false]
		], "4304"
	],
	["(再|さ)[来|らい][週|しゅう]", "再来週", ["さらいしゅう"],
		[
			["再", "さ", true],
			["来", "らい", false],
			["週", "しゅう", false]
		], "4305"
	],
	["(誕|たん)(生|じょう)[日|び]", "誕生日", ["たんじょうび"],
		[
			["誕", "たん", true],
			["生", "じょう", true],
			["日", "び", false]
		], "4617"
	],
	["お[参|まい]り", "お参り", ["おまいり"],
		[
			["お", null, false],
			["参", "まい", false],
			["り", null, false]
		], -1
	],
	["[参|まい]*5", "参", ["まい"],
		[
			["参", "まい", false]
		], -1
	],
	["[参|さん][加|か]", "参加", ["さんか"],
		[
			["参", "さん", false],
			["加", "か", false]
		], -1
	],
	["[参|さん][考|こう]", "参考", ["さんこう"],
		[
			["参", "さん", false],
			["考", "こう", false]
		], -1
	],
	["[持|じ][参|さん]", "持参", ["じさん"],
		[
			["持", "じ", false],
			["参", "さん", false]
		], -1
	],
	["[大|おお](勢|ぜい)", "大勢", ["おおぜい"],
		[
			["大", "おお", false],
			["勢", "ぜい", true]
		], -1
	],
	["[合|ごう](格|かく)", "合格", ["ごうかく"],
		[
			["合", "ごう", false],
			["格", "かく", true]
		], "4307"
	],
	["[同|どう](格|かく)", "同格", ["どうかく"],
		[
			["同", "どう", false],
			["格", "かく", true]
		], "4308"
	],
	["[通|とお]り(過|す)ぎ*る", "通り過ぎ", ["とおりすぎ"],
		[
			["通", "とお", false],
			["り", null, false],
			["過", "す", true],
			["ぎ", null, false]
		], "4317"
	],
	["[通|つう](過|か)", "通過", ["つうか"],
		[
			["通", "つう", false],
			["過", "か", true]
		], "4318"
	],
	["(過|か)[半|はん][数|すう]", "過半数", ["かはんすう"],
		[
			["過", "か", true],
			["半", "はん", false],
			["数", "すう", false]
		], "4321"
	],
	["(過|か)[去|こ]", "過去", ["かこ"],
		[
			["過", "か", true],
			["去", "こ", false]
		], "4322"
	],
	["[不|ふ][利|り]", "不利", ["ふり"],
		[
			["不", "ふ", false],
			["利", "り", false]
		], -1
	],
	["[有|ゆう][利|り]", "有利", ["ゆうり"],
		[
			["有", "ゆう", false],
			["利", "り", false]
		], -1
	],
	["[利|り][口|こう]", "利口", ["りこう"],
		[
			["利", "り", false],
			["口", "こう", false]
		], -1
	],
	["[利|り](害|がい)", "利害", ["りがい"],
		[
			["利", "り", false],
			["害", "がい", true]
		], "3427"
	],
	["(税|ぜい)[金|きん]", "税金", ["ぜいきん"],
		[
			["税", "ぜい", true],
			["金", "きん", false]
		], "4326"
	],
	["(税|ぜい)[関|かん]", "税関", ["ぜいかん"],
		[
			["税", "ぜい", true],
			["関", "かん", false]
		], "4327"
	],
	["[案|あん]", "案", ["あん"],
		[
			["案", "あん", false]
		], -1
	],
	["[案|あん][内|ない]", "案内", ["あんない"],
		[
			["案", "あん", false],
			["内", "ない", false]
		], -1
	],
	["[案|あん][外|がい]", "案外", ["あんがい"],
		[
			["案", "あん", false],
			["外", "がい", false]
		], -1
	],
	["[答|とう][案|あん]", "答案", ["とうあん"],
		[
			["答", "とう", false],
			["案", "あん", false]
		], -1
	],
	["(提|てい)[案|あん]", "提案", ["ていあん"],
		[
			["提", "てい", true],
			["案", "あん", false]
		], "4253"
	],
	["[信|しん]じ*る", "信じ", ["しんじ"],
		[
			["信", "しん", false],
			["じ", null, false]
		], -1
	],
	["[信|しん]ずる", "信ずる", ["しんずる"],
		[
			["信", "しん", false],
			["ず", null, false],
			["る", null, false]
		], -1
	],
	["[信|しん][用|よう]", "信用", ["しんよう"],
		[
			["信", "しん", false],
			["用", "よう", false]
		], -1
	],
	["[通|つう][信|しん]", "通信", ["つうしん"],
		[
			["通", "つう", false],
			["信", "しん", false]
		], -1
	],
	["[信|しん][号|ごう]", "信号", ["しんごう"],
		[
			["信", "しん", false],
			["号", "ごう", false]
		], -1
	],
	["[日|にち](常|じょう)", "日常", ["にちじょう"],
		[
			["日", "にち", false],
			["常", "じょう", true]
		], "4331"
	],
	["[別|べつ]", "別", ["べつ"],
		[
			["別", "べつ", false]
		], -1
	],
	["[別|べつ][々|べつ]", "別々", ["べつべつ"],
		[
			["別", "べつ", false],
			["々", "べつ", false]
		], -1
	],
	["[別|わか]れ", "別れ", ["わかれ"],
		[
			["別", "わか", false],
			["れ", null, false]
		], -1
	],
	["[区|く][別|べつ]", "区別", ["くべつ"],
		[
			["区", "く", false],
			["別", "べつ", false]
		], -1
	],
	["[送|そう][別|べつ]", "送別", ["そうべつ"],
		[
			["送", "そう", false],
			["別", "べつ", false]
		], -1
	],
	["(差|さ)[別|べつ]", "差別", ["さべつ"],
		[
			["差", "さ", true],
			["別", "べつ", false]
		], "3557"
	],
	["(性|せい)[別|べつ]", "性別", ["せいべつ"],
		[
			["性", "せい", true],
			["別", "べつ", false]
		], "4107"
	],
	["(格|かく)[別|べつ]", "格別", ["かくべつ"],
		[
			["格", "かく", true],
			["別", "べつ", false]
		], "4310"
	],
	["(営|えい)[業|ぎょう]", "営業", ["えいぎょう"],
		[
			["営", "えい", true],
			["業", "ぎょう", false]
		], "4339"
	],
	["{～}[側|がわ]", "～側", ["がわ"],
		[
			["～", null, false],
			["側", "がわ", false]
		], -1
	],
	["[側|そば]", "側", ["そば"],
		[
			["側", "そば", false]
		], -1
	],
	["[両|りょう][側|がわ]", "両側", ["りょうがわ"],
		[
			["両", "りょう", false],
			["側", "がわ", false]
		], -1
	],
	["(職|しょく)[人|にん]", "職人", ["しょくにん"],
		[
			["職", "しょく", true],
			["人", "にん", false]
		], "4343"
	],
	["(職|しょく)[場|ば]", "職場", ["しょくば"],
		[
			["職", "しょく", true],
			["場", "ば", false]
		], "4344"
	],
	["(職|しょく)[業|ぎょう]", "職業", ["しょくぎょう"],
		[
			["職", "しょく", true],
			["業", "ぎょう", false]
		], "4345"
	],
	["[求|もと]め*る", "求め", ["もとめ"],
		[
			["求", "もと", false],
			["め", null, false]
		], -1
	],
	["[要|よう][求|きゅう]", "要求", ["ようきゅう"],
		[
			["要", "よう", false],
			["求", "きゅう", false]
		], -1
	],
	["(再|さ)[来|らい][年|ねん]", "再来年", ["さらいねん"],
		[
			["再", "さ", true],
			["来", "らい", false],
			["年", "ねん", false]
		], -1
	],
	["(証|しょう)[明|めい]", "証明", ["しょうめい"],
		[
			["証", "しょう", true],
			["明", "めい", false]
		], "4347"
	],
	["[不|ふ](可|か)", "不可", ["ふか"],
		[
			["不", "ふ", false],
			["可", "か", true]
		], "4349"
	],
	["(可|か)[決|けつ]", "可決", ["かけつ"],
		[
			["可", "か", true],
			["決", "けつ", false]
		], "4351"
	],
	["[一|いっ][昨|さく][年|ねん]", "一昨年", ["いっさくねん"],
		[
			["一", "いっ", false],
			["昨", "さく", false],
			["年", "ねん", false]
		], -1
	],
	["[一|いっ][昨|さく][日|じつ]", "一昨日", ["いっさくじつ"],
		[
			["一", "いっ", false],
			["昨", "さく", false],
			["日", "じつ", false]
		], -1
	],
	["[昨|さく]", "昨", ["さく"],
		[
			["昨", "さく", false]
		], -1
	],
	["[昨日|きのう]", "昨日", ["きのう"],
		[
			["昨日", "きのう", false]
		], -1
	],
	["(構|こう)[成|せい]", "構成", ["こうせい"],
		[
			["構", "こう", true],
			["成", "せい", false]
		], "4357"
	],
	["[結|けっ](構|こう)", "結構", ["けっこう"],
		[
			["結", "けっ", false],
			["構", "こう", true]
		], "4358"
	],
	["[特|とく][売|ばい]", "特売", ["とくばい"],
		[
			["特", "とく", false],
			["売", "ばい", false]
		], -1
	],
	["[特|とく][定|てい]", "特定", ["とくてい"],
		[
			["特", "とく", false],
			["定", "てい", false]
		], -1
	],
	["[特|とく][長|ちょう]", "特長", ["とくちょう"],
		[
			["特", "とく", false],
			["長", "ちょう", false]
		], -1
	],
	["[特|とく][色|しょく]", "特色", ["とくしょく"],
		[
			["特", "とく", false],
			["色", "しょく", false]
		], -1
	],
	["[予|よ](防|ぼう)", "予防", ["よぼう"],
		[
			["予", "よ", false],
			["防", "ぼう", true]
		], "4363"
	],
	["(防|ぼう)[止|し]", "防止", ["ぼうし"],
		[
			["防", "ぼう", true],
			["止", "し", false]
		], "4366"
	],
	["[消|しょう](防|ぼう)", "消防", ["しょうぼう"],
		[
			["消", "しょう", false],
			["防", "ぼう", true]
		], "4367"
	],
	["(断|だん)[定|てい]", "断定", ["だんてい"],
		[
			["断", "だん", true],
			["定", "てい", false]
		], "4373"
	],
	["(断|だん)[水|すい]", "断水", ["だんすい"],
		[
			["断", "だん", true],
			["水", "すい", false]
		], "4374"
	],
	["[横|おう](断|だん)", "横断", ["おうだん"],
		[
			["横", "おう", false],
			["断", "だん", true]
		], "4375"
	],
	["[油|ゆ](断|だん)", "油断", ["ゆだん"],
		[
			["油", "ゆ", false],
			["断", "だん", true]
		], "4376"
	],
	["[変|へん][化|か]", "変化", ["へんか"],
		[
			["変", "へん", false],
			["化", "か", false]
		], -1
	],
	["[国|こっ](境|きょう)", "国境", ["こっきょう"],
		[
			["国", "こっ", false],
			["境", "きょう", true]
		], "4378"
	],
	["(境|きょう)[界|かい]", "境界", ["きょうかい"],
		[
			["境", "きょう", true],
			["界", "かい", false]
		], "4380"
	],
	["[各|かく]{～}", "各～", ["かく"],
		[
			["各", "かく", false],
			["～", null, false]
		], -1
	],
	["[各|おの][々|おの]", "各々", ["おのおの"],
		[
			["各", "おの", false],
			["々", "おの", false]
		], -1
	],
	["[各|かく][地|ち]", "各地", ["かくち"],
		[
			["各", "かく", false],
			["地", "ち", false]
		], -1
	],
	["[各|かく][自|じ]", "各自", ["かくじ"],
		[
			["各", "かく", false],
			["自", "じ", false]
		], -1
	],
	["[定|じょう](規|ぎ)", "定規", ["じょうぎ"],
		[
			["定", "じょう", false],
			["規", "ぎ", true]
		], "4384"
	],
	["[学|がく](術|じゅつ)", "学術", ["がくじゅつ"],
		[
			["学", "がく", false],
			["術", "じゅつ", true]
		], "4390"
	],
	["[手|しゅ](術|じゅつ)", "手術", ["しゅじゅつ"],
		[
			["手", "しゅ", false],
			["術", "じゅつ", true]
		], "4391"
	],
	["[果|はた]して", "果して", ["はたして"],
		[
			["果", "はた", false],
			["し", null, false],
			["て", null, false]
		], -1
	],
	["[果|か][実|じつ]", "果実", ["かじつ"],
		[
			["果", "か", false],
			["実", "じつ", false]
		], -1
	],
	["[果|くだ][物|もの]", "果物", ["くだもの"],
		[
			["果", "くだ", false],
			["物", "もの", false]
		], -1
	],
	["[結|けっ][果|か]", "結果", ["けっか"],
		[
			["結", "けっ", false],
			["果", "か", false]
		], -1
	],
	["[事|じ](態|たい)", "事態", ["じたい"],
		[
			["事", "じ", false],
			["態", "たい", true]
		], "4398"
	],
	["(態|たい)[度|ど]", "態度", ["たいど"],
		[
			["態", "たい", true],
			["度", "ど", false]
		], "4399"
	],
	["[必|かなら]ず", "必ず", ["かならず"],
		[
			["必", "かなら", false],
			["ず", null, false]
		], -1
	],
	["[必|かなら]ずしも", "必ずしも", ["かならずしも"],
		[
			["必", "かなら", false],
			["ず", null, false],
			["し", null, false],
			["も", null, false]
		], -1
	],
	["[必|ひっ][死|し]", "必死", ["ひっし"],
		[
			["必", "ひっ", false],
			["死", "し", false]
		], -1
	],
	["[必|ひつ][要|よう]", "必要", ["ひつよう"],
		[
			["必", "ひつ", false],
			["要", "よう", false]
		], -1
	],
	["[指|し](導|どう)", "指導", ["しどう"],
		[
			["指", "し", false],
			["導", "どう", true]
		], "4401"
	],
	["[争|あらそ]*う", "争", ["あらそ"],
		[
			["争", "あらそ", false]
		], -1
	],
	["[戦|せん][争|そう]", "戦争", ["せんそう"],
		[
			["戦", "せん", false],
			["争", "そう", false]
		], -1
	],
	["(競|きょう)[争|そう]", "競争", ["きょうそう"],
		[
			["競", "きょう", true],
			["争", "そう", false]
		], "3723"
	],
	["[予|よ](備|び)", "予備", ["よび"],
		[
			["予", "よ", false],
			["備", "び", true]
		], "4402"
	],
	["[整|せい](備|び)", "整備", ["せいび"],
		[
			["整", "せい", false],
			["備", "び", true]
		], "4405"
	],
	["[無|な]い", "無い", ["ない"],
		[
			["無", "な", false],
			["い", null, false]
		], -1
	],
	["[無|な]く*す", "無く", ["なく"],
		[
			["無", "な", false],
			["く", null, false]
		], -1
	],
	["[無|な]くなる", "無くなる", ["なくなる"],
		[
			["無", "な", false],
			["く", null, false],
			["な", null, false],
			["る", null, false]
		], -1
	],
	["[無|な]し", "無し", ["なし"],
		[
			["無", "な", false],
			["し", null, false]
		], -1
	],
	["[無|ぶ][事|じ]", "無事", ["ぶじ"],
		[
			["無", "ぶ", false],
			["事", "じ", false]
		], -1
	],
	["[無|む][地|じ]", "無地", ["むじ"],
		[
			["無", "む", false],
			["地", "じ", false]
		], -1
	],
	["[無|む][数|すう]", "無数", ["むすう"],
		[
			["無", "む", false],
			["数", "すう", false]
		], -1
	],
	["[間|ま]も[無|な]く", "間も無く", ["まもなく"],
		[
			["間", "ま", false],
			["も", null, false],
			["無", "な", false],
			["く", null, false]
		], -1
	],
	["[有|う][無|む]", "有無", ["うむ"],
		[
			["有", "う", false],
			["無", "む", false]
		], -1
	],
	["[無|む](料|りょう)", "無料", ["むりょう"],
		[
			["無", "む", false],
			["料", "りょう", true]
		], "3375"
	],
	["[新|しん](幹|かん)[線|せん]", "新幹線", ["しんかんせん"],
		[
			["新", "しん", false],
			["幹", "かん", true],
			["線", "せん", false]
		], "4411"
	],
	["お[手|て](洗|あら)い", "お手洗い", ["おてあらい"],
		[
			["お", null, false],
			["手", "て", false],
			["洗", "あら", true],
			["い", null, false]
		], "4723"
	],
	["{～}[位|い]", "～位", ["い"],
		[
			["～", null, false],
			["位", "い", false]
		], -1
	],
	["[位|くらい]", "位", ["くらい"],
		[
			["位", "くらい", false]
		], -1
	],
	["[地|ち][位|い]", "地位", ["ちい"],
		[
			["地", "ち", false],
			["位", "い", false]
		], -1
	],
	["[位|い](置|ち)", "位置", ["いち"],
		[
			["位", "い", false],
			["置", "ち", true]
		], "3363"
	],
	["(単|たん)[位|い]", "単位", ["たんい"],
		[
			["単", "たん", true],
			["位", "い", false]
		], "3711"
	],
	["(独|ひと)り[言|ごと]", "独り言", ["ひとりごと"],
		[
			["独", "ひと", true],
			["り", null, false],
			["言", "ごと", false]
		], "4414"
	],
	["(独|どく)[特|とく]", "独特", ["どくとく"],
		[
			["独", "どく", true],
			["特", "とく", false]
		], "4415"
	],
	["(独|どく)[立|りつ]", "独立", ["どくりつ"],
		[
			["独", "どく", true],
			["立", "りつ", false]
		], "4416"
	],
	["(独|どく)[身|しん]", "独身", ["どくしん"],
		[
			["独", "どく", true],
			["身", "しん", false]
		], "4417"
	],
	["[位|い][置|ち]", "位置", ["いち"],
		[
			["位", "い", false],
			["置", "ち", false]
		], -1
	],
	["[物|もの][置|おき]", "物置", ["ものおき"],
		[
			["物", "もの", false],
			["置", "おき", false]
		], -1
	],
	["[置|お]*く", "置", ["お"],
		[
			["置", "お", false]
		], -1
	],
	["(輸|ゆ)[入|にゅう]", "輸入", ["ゆにゅう"],
		[
			["輸", "ゆ", true],
			["入", "にゅう", false]
		], "4418"
	],
	["(輸|ゆ)[出|しゅつ]", "輸出", ["ゆしゅつ"],
		[
			["輸", "ゆ", true],
			["出", "しゅつ", false]
		], "4419"
	],
	["(輸|ゆ)[送|そう]", "輸送", ["ゆそう"],
		[
			["輸", "ゆ", true],
			["送", "そう", false]
		], "4420"
	],
	["(輸|ゆ)[血|けつ]", "輸血", ["ゆけつ"],
		[
			["輸", "ゆ", true],
			["血", "けつ", false]
		], "4421"
	],
	["(述|じゅつ)[語|ご]", "述語", ["じゅつご"],
		[
			["述", "じゅつ", true],
			["語", "ご", false]
		], "4424"
	],
	["{～}[料|りょう]", "～料", ["りょう"],
		[
			["～", null, false],
			["料", "りょう", false]
		], -1
	],
	["[原|げん][料|りょう]", "原料", ["げんりょう"],
		[
			["原", "げん", false],
			["料", "りょう", false]
		], -1
	],
	["[料|りょう][金|きん]", "料金", ["りょうきん"],
		[
			["料", "りょう", false],
			["金", "きん", false]
		], -1
	],
	["[有|ゆう][料|りょう]", "有料", ["ゆうりょう"],
		[
			["有", "ゆう", false],
			["料", "りょう", false]
		], -1
	],
	["[無|む][料|りょう]", "無料", ["むりょう"],
		[
			["無", "む", false],
			["料", "りょう", false]
		], -1
	],
	["[送|そう][料|りょう]", "送料", ["そうりょう"],
		[
			["送", "そう", false],
			["料", "りょう", false]
		], -1
	],
	["[食|しょく][料|りょう]", "食料", ["しょくりょう"],
		[
			["食", "しょく", false],
			["料", "りょう", false]
		], -1
	],
	["[調|ちょう][味|み][料|りょう]", "調味料", ["ちょうみりょう"],
		[
			["調", "ちょう", false],
			["味", "み", false],
			["料", "りょう", false]
		], -1
	],
	["(材|ざい)[料|りょう]", "材料", ["ざいりょう"],
		[
			["材", "ざい", true],
			["料", "りょう", false]
		], "3693"
	],
	["(給|きゅう)[料|りょう]", "給料", ["きゅうりょう"],
		[
			["給", "きゅう", true],
			["料", "りょう", false]
		], "3729"
	],
	["(資|し)[料|りょう]", "資料", ["しりょう"],
		[
			["資", "し", true],
			["料", "りょう", false]
		], "4174"
	],
	["[建|た]*つ", "建", ["た"],
		[
			["建", "た", false]
		], -1
	],
	["[建|けん](設|せつ)", "建設", ["けんせつ"],
		[
			["建", "けん", false],
			["設", "せつ", true]
		], "4139"
	],
	["{～}[費|ひ]", "～費", ["ひ"],
		[
			["～", null, false],
			["費", "ひ", false]
		], -1
	],
	["[費|ひ][用|よう]", "費用", ["ひよう"],
		[
			["費", "ひ", false],
			["用", "よう", false]
		], -1
	],
	["[消|しょう][費|ひ]", "消費", ["しょうひ"],
		[
			["消", "しょう", false],
			["費", "ひ", false]
		], -1
	],
	["[地|ち](質|しつ)", "地質", ["ちしつ"],
		[
			["地", "ち", false],
			["質", "しつ", true]
		], "4431"
	],
	["[物|ぶっ](質|しつ)", "物質", ["ぶっしつ"],
		[
			["物", "ぶっ", false],
			["質", "しつ", true]
		], "4433"
	],
	["[自|じ](衛|えい)", "自衛", ["じえい"],
		[
			["自", "じ", false],
			["衛", "えい", true]
		], "4436"
	],
	["(衛|えい)[星|せい]", "衛星", ["えいせい"],
		[
			["衛", "えい", true],
			["星", "せい", false]
		], "4437"
	],
	["{～}[付|つき]", "～付", ["つき"],
		[
			["～", null, false],
			["付", "つき", false]
		], -1
	],
	["[付|つ]き[合|あ]い", "付き合い", ["つきあい"],
		[
			["付", "つ", false],
			["き", null, false],
			["合", "あ", false],
			["い", null, false]
		], -1
	],
	["[付|つ]*く", "付", ["つ"],
		[
			["付", "つ", false]
		], -1
	],
	["[付|つ]け*る", "付け", ["つけ"],
		[
			["付", "つ", false],
			["け", null, false]
		], -1
	],
	["[付|つき][合|あ]う", "付合う", ["つきあう"],
		[
			["付", "つき", false],
			["合", "あ", false],
			["う", null, false]
		], -1
	],
	["[付|ふ][近|きん]", "付近", ["ふきん"],
		[
			["付", "ふ", false],
			["近", "きん", false]
		], -1
	],
	["[受|うけ][付|つけ]", "受付", ["うけつけ"],
		[
			["受", "うけ", false],
			["付", "つけ", false]
		], -1
	],
	["[思|おも]い[付|つ]*く", "思い付", ["おもいつ"],
		[
			["思", "おも", false],
			["い", null, false],
			["付", "つ", false]
		], -1
	],
	["[日|ひ][付|づけ]", "日付", ["ひづけ"],
		[
			["日", "ひ", false],
			["付", "づけ", false]
		], -1
	],
	["[気|き]を[付|つ]ける", "気を付ける", ["きをつける"],
		[
			["気", "き", false],
			["を", null, false],
			["付", "つ", false],
			["け", null, false],
			["る", null, false]
		], -1
	],
	["[気|き][付|づ]*く", "気付", ["きづ"],
		[
			["気", "き", false],
			["付", "づ", false]
		], -1
	],
	["[見|み][付|つ]か*5", "見付か", ["みつか"],
		[
			["見", "み", false],
			["付", "つ", false],
			["か", null, false]
		], -1
	],
	["[見|み][付|つ]け*る", "見付け", ["みつけ"],
		[
			["見", "み", false],
			["付", "つ", false],
			["け", null, false]
		], -1
	],
	["[言|い]い[付|つ]け*る", "言い付け", ["いいつけ"],
		[
			["言", "い", false],
			["い", null, false],
			["付", "つ", false],
			["け", null, false]
		], -1
	],
	["[言|こと][付|づ]け*る", "言付け", ["ことづけ"],
		[
			["言", "こと", false],
			["付", "づ", false],
			["け", null, false]
		], -1
	],
	["[近|ちか][付|づ]け*る", "近付け", ["ちかづけ"],
		[
			["近", "ちか", false],
			["付", "づ", false],
			["け", null, false]
		], -1
	],
	["[追|お]い[付|つ]く", "追い付く", ["おいつく"],
		[
			["追", "お", false],
			["い", null, false],
			["付", "つ", false],
			["く", null, false]
		], -1
	],
	["[主|しゅ](張|ちょう)", "主張", ["しゅちょう"],
		[
			["主", "しゅ", false],
			["張", "ちょう", true]
		], "4439"
	],
	["[出|しゅっ](張|ちょう)", "出張", ["しゅっちょう"],
		[
			["出", "しゅっ", false],
			["張", "ちょう", true]
		], "4440"
	],
	["[引|ひ]っ(張|ぱ)*5", "引っ張", ["ひっぱ"],
		[
			["引", "ひ", false],
			["っ", null, false],
			["張", "ぱ", true]
		], "4441"
	],
	["(張|は)り[切|き]る", "張り切る", ["はりきる"],
		[
			["張", "は", true],
			["り", null, false],
			["切", "き", false],
			["る", null, false]
		], "4442"
	],
	["[社|しゃ][説|せつ]", "社説", ["しゃせつ"],
		[
			["社", "しゃ", false],
			["説", "せつ", false]
		], -1
	],
	["[説|せつ]", "説", ["せつ"],
		[
			["説", "せつ", false]
		], -1
	],
	["(解|かい)[説|せつ]", "解説", ["かいせつ"],
		[
			["解", "かい", true],
			["説", "せつ", false]
		], "4168"
	],
	["(演|えん)[説|ぜつ]", "演説", ["えんぜつ"],
		[
			["演", "えん", true],
			["説", "ぜつ", false]
		], "4281"
	],
	["[期|き](限|げん)", "期限", ["きげん"],
		[
			["期", "き", false],
			["限", "げん", true]
		], "4451"
	],
	["[無|む](限|げん)", "無限", ["むげん"],
		[
			["無", "む", false],
			["限", "げん", true]
		], "4452"
	],
	["(限|げん)[度|ど]", "限度", ["げんど"],
		[
			["限", "げん", true],
			["度", "ど", false]
		], "4455"
	],
	["(限|げん)[界|かい]", "限界", ["げんかい"],
		[
			["限", "げん", true],
			["界", "かい", false]
		], "4456"
	],
	["[夫|おっと]", "夫", ["おっと"],
		[
			["夫", "おっと", false]
		], -1
	],
	["[夫|ふ][人|じん]", "夫人", ["ふじん"],
		[
			["夫", "ふ", false],
			["人", "じん", false]
		], -1
	],
	["[工|く][夫|ふう]", "工夫", ["くふう"],
		[
			["工", "く", false],
			["夫", "ふう", false]
		], -1
	],
	["[金|きん](額|がく)", "金額", ["きんがく"],
		[
			["金", "きん", false],
			["額", "がく", true]
		], "4457"
	],
	["[主|しゅ](義|ぎ)", "主義", ["しゅぎ"],
		[
			["主", "しゅ", false],
			["義", "ぎ", true]
		], "4460"
	],
	["[意|い](義|ぎ)", "意義", ["いぎ"],
		[
			["意", "い", false],
			["義", "ぎ", true]
		], "4461"
	],
	["[公|こう][害|がい]", "公害", ["こうがい"],
		[
			["公", "こう", false],
			["害", "がい", false]
		], -1
	],
	["[利|り][害|がい]", "利害", ["りがい"],
		[
			["利", "り", false],
			["害", "がい", false]
		], -1
	],
	["[害|がい]", "害", ["がい"],
		[
			["害", "がい", false]
		], -1
	],
	["[引|いん](退|たい)", "引退", ["いんたい"],
		[
			["引", "いん", false],
			["退", "たい", true]
		], "4471"
	],
	["(退|たい)[院|いん]", "退院", ["たいいん"],
		[
			["退", "たい", true],
			["院", "いん", false]
		], "4474"
	],
	["[副|ふく]{～}", "副～", ["ふく"],
		[
			["副", "ふく", false],
			["～", null, false]
		], -1
	],
	["[水|すい](準|じゅん)", "水準", ["すいじゅん"],
		[
			["水", "すい", false],
			["準", "じゅん", true]
		], "4476"
	],
	["[客|きゃく][席|せき]", "客席", ["きゃくせき"],
		[
			["客", "きゃく", false],
			["席", "せき", false]
		], -1
	],
	["(欠|けっ)[席|せき]", "欠席", ["けっせき"],
		[
			["欠", "けっ", true],
			["席", "せき", false]
		], "3899"
	],
	["[人|じん](造|ぞう)", "人造", ["じんぞう"],
		[
			["人", "じん", false],
			["造", "ぞう", true]
		], "4481"
	],
	["[改|かい](造|ぞう)", "改造", ["かいぞう"],
		[
			["改", "かい", false],
			["造", "ぞう", true]
		], "4482"
	],
	["(造|ぞう)[船|せん]", "造船", ["ぞうせん"],
		[
			["造", "ぞう", true],
			["船", "せん", false]
		], "4485"
	],
	["[残|のこ]*す", "残", ["のこ"],
		[
			["残", "のこ", false]
		], -1
	],
	["[残|のこ]らず", "残らず", ["のこらず"],
		[
			["残", "のこ", false],
			["ら", null, false],
			["ず", null, false]
		], -1
	],
	["[残|のこ]り", "残り", ["のこり"],
		[
			["残", "のこ", false],
			["り", null, false]
		], -1
	],
	["[残|ざん](念|ねん)", "残念", ["ざんねん"],
		[
			["残", "ざん", false],
			["念", "ねん", true]
		], "3444"
	],
	["[回|かい](復|ふく)", "回復", ["かいふく"],
		[
			["回", "かい", false],
			["復", "ふく", true]
		], "4495"
	],
	["(復|ふく)[習|しゅう]", "復習", ["ふくしゅう"],
		[
			["復", "ふく", true],
			["習", "しゅう", false]
		], "4496"
	],
	["[残|ざん][念|ねん]", "残念", ["ざんねん"],
		[
			["残", "ざん", false],
			["念", "ねん", false]
		], -1
	],
	["[記|き][念|ねん]", "記念", ["きねん"],
		[
			["記", "き", false],
			["念", "ねん", false]
		], -1
	],
	["(観|かん)[念|ねん]", "観念", ["かんねん"],
		[
			["観", "かん", true],
			["念", "ねん", false]
		], "3605"
	],
	["(映|えい)[画|が]", "映画", ["えいが"],
		[
			["映", "えい", true],
			["画", "が", false]
		], "4648"
	],
	["(映|えい)[画|が][館|かん]", "映画館", ["えいがかん"],
		[
			["映", "えい", true],
			["画", "が", false],
			["館", "かん", false]
		], "4649"
	],
	["(移|い)[動|どう]", "移動", ["いどう"],
		[
			["移", "い", true],
			["動", "どう", false]
		], "4500"
	],
	["(移|い)[転|てん]", "移転", ["いてん"],
		[
			["移", "い", true],
			["転", "てん", false]
		], "4501"
	],
	["[試|ため]し", "試し", ["ためし"],
		[
			["試", "ため", false],
			["し", null, false]
		], -1
	],
	["[試|ため]*す", "試", ["ため"],
		[
			["試", "ため", false]
		], -1
	],
	["[借|か]り*る", "借り", ["かり"],
		[
			["借", "か", false],
			["り", null, false]
		], -1
	],
	["(個|こ)[人|じん]", "個人", ["こじん"],
		[
			["個", "こ", true],
			["人", "じん", false]
		], "4503"
	],
	["(個|こ)[体|たい]", "個体", ["こたい"],
		[
			["個", "こ", true],
			["体", "たい", false]
		], "4504"
	],
	["(個|か)[所|しょ]", "個所", ["かしょ"],
		[
			["個", "か", true],
			["所", "しょ", false]
		], "4505"
	],
	["[対|たい][象|しょう]", "対象", ["たいしょう"],
		[
			["対", "たい", false],
			["象", "しょう", false]
		], -1
	],
	["[象|ぞう]", "象", ["ぞう"],
		[
			["象", "ぞう", false]
		], -1
	],
	["(印|いん)[象|しょう]", "印象", ["いんしょう"],
		[
			["印", "いん", true],
			["象", "しょう", false]
		], "3774"
	],
	["(現|げん)[象|しょう]", "現象", ["げんしょう"],
		[
			["現", "げん", true],
			["象", "しょう", false]
		], "4100"
	],
	["[苦|く][労|ろう]", "苦労", ["くろう"],
		[
			["苦", "く", false],
			["労", "ろう", false]
		], -1
	],
	["[労|ろう](働|どう)", "労働", ["ろうどう"],
		[
			["労", "ろう", false],
			["働", "どう", true]
		], "3505"
	],
	["[作|さく](製|せい)", "作製", ["さくせい"],
		[
			["作", "さく", false],
			["製", "せい", true]
		], "4517"
	],
	["(製|せい)[作|さく]", "製作", ["せいさく"],
		[
			["製", "せい", true],
			["作", "さく", false]
		], "4518"
	],
	["(製|せい)[品|ひん]", "製品", ["せいひん"],
		[
			["製", "せい", true],
			["品", "ひん", false]
		], "4519"
	],
	["[今|こん](晩|ばん)", "今晩", ["こんばん"],
		[
			["今", "こん", false],
			["晩", "ばん", true]
		], "4801"
	],
	["[毎|まい](晩|ばん)", "毎晩", ["まいばん"],
		[
			["毎", "まい", false],
			["晩", "ばん", true]
		], "4802"
	],
	["[例|れい]", "例", ["れい"],
		[
			["例", "れい", false]
		], -1
	],
	["[例|たと]えば", "例えば", ["たとえば"],
		[
			["例", "たと", false],
			["え", null, false],
			["ば", null, false]
		], -1
	],
	["[例|たと]え*る", "例え", ["たとえ"],
		[
			["例", "たと", false],
			["え", null, false]
		], -1
	],
	["[例|れい][外|がい]", "例外", ["れいがい"],
		[
			["例", "れい", false],
			["外", "がい", false]
		], -1
	],
	["[実|じつ][例|れい]", "実例", ["じつれい"],
		[
			["実", "じつ", false],
			["例", "れい", false]
		], -1
	],
	["(財|ざい)[産|さん]", "財産", ["ざいさん"],
		[
			["財", "ざい", true],
			["産", "さん", false]
		], "4522"
	],
	["[意|い](識|しき)", "意識", ["いしき"],
		[
			["意", "い", false],
			["識", "しき", true]
		], "4526"
	],
	["[知|ち](識|しき)", "知識", ["ちしき"],
		[
			["知", "ち", false],
			["識", "しき", true]
		], "4527"
	],
	["[全|ぜん][然|ぜん]", "全然", ["ぜんぜん"],
		[
			["全", "ぜん", false],
			["然", "ぜん", false]
		], -1
	],
	["[自|し][然|ぜん]", "自然", ["しぜん"],
		[
			["自", "し", false],
			["然", "ぜん", false]
		], -1
	],
	["[天|てん][然|ねん]", "天然", ["てんねん"],
		[
			["天", "てん", false],
			["然", "ねん", false]
		], -1
	],
	["[自|し][然|ぜん][科|か][学|がく]", "自然科学", ["しぜんかがく"],
		[
			["自", "し", false],
			["然", "ぜん", false],
			["科", "か", false],
			["学", "がく", false]
		], -1
	],
	["[先|さき](程|ほど)", "先程", ["さきほど"],
		[
			["先", "さき", false],
			["程", "ほど", true]
		], "4534"
	],
	["[成|なる](程|ほど)", "成程", ["なるほど"],
		[
			["成", "なる", false],
			["程", "ほど", true]
		], "4535"
	],
	["[方|ほう](程|てい)[式|しき]", "方程式", ["ほうていしき"],
		[
			["方", "ほう", false],
			["程", "てい", true],
			["式", "しき", false]
		], "4536"
	],
	["[日|にっ](程|てい)", "日程", ["にってい"],
		[
			["日", "にっ", false],
			["程", "てい", true]
		], "4537"
	],
	["(程|てい)[度|ど]", "程度", ["ていど"],
		[
			["程", "てい", true],
			["度", "ど", false]
		], "4539"
	],
	["[受|じゅ][験|けん]", "受験", ["じゅけん"],
		[
			["受", "じゅ", false],
			["験", "けん", false]
		], -1
	],
	["[実|じっ][験|けん]", "実験", ["じっけん"],
		[
			["実", "じっ", false],
			["験", "けん", false]
		], -1
	],
	["(経|けい)[験|けん]", "経験", ["けいけん"],
		[
			["経", "けい", true],
			["験", "けん", false]
		], "4086"
	],
	["(接|せつ)[続|ぞく]", "接続", ["せつぞく"],
		[
			["接", "せつ", true],
			["続", "ぞく", false]
		], "4545"
	],
	["(接|せっ)[近|きん]", "接近", ["せっきん"],
		[
			["接", "せっ", true],
			["近", "きん", false]
		], "4546"
	],
	["[直|ちょく](接|せつ)", "直接", ["ちょくせつ"],
		[
			["直", "ちょく", false],
			["接", "せつ", true]
		], "4547"
	],
	["[間|かん](接|せつ)", "間接", ["かんせつ"],
		[
			["間", "かん", false],
			["接", "せつ", true]
		], "4548"
	],
	["[面|めん](接|せつ)", "面接", ["めんせつ"],
		[
			["面", "めん", false],
			["接", "せつ", true]
		], "4549"
	],
	["お[手|て][伝|つだ]いさん", "お手伝いさん", ["おてつだいさん"],
		[
			["お", null, false],
			["手", "て", false],
			["伝", "つだ", false],
			["い", null, false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[伝|つた]わ*5", "伝わ", ["つたわ"],
		[
			["伝", "つた", false],
			["わ", null, false]
		], -1
	],
	["[伝|でん][記|き]", "伝記", ["でんき"],
		[
			["伝", "でん", false],
			["記", "き", false]
		], -1
	],
	["[手|て][伝|つだ]い", "手伝い", ["てつだい"],
		[
			["手", "て", false],
			["伝", "つだ", false],
			["い", null, false]
		], -1
	],
	["[伝|でん](統|とう)", "伝統", ["でんとう"],
		[
			["伝", "でん", false],
			["統", "とう", true]
		], "4128"
	],
	["[助|じょ][教|きょう](授|じゅ)", "助教授", ["じょきょうじゅ"],
		[
			["助", "じょ", false],
			["教", "きょう", false],
			["授", "じゅ", true]
		], "4550"
	],
	["(授|じゅ)[業|ぎょう]", "授業", ["じゅぎょう"],
		[
			["授", "じゅ", true],
			["業", "ぎょう", false]
		], "4551"
	],
	["[教|きょう](授|じゅ)", "教授", ["きょうじゅ"],
		[
			["教", "きょう", false],
			["授", "じゅ", true]
		], "4552"
	],
	["(効|こう)[力|りょく]", "効力", ["こうりょく"],
		[
			["効", "こう", true],
			["力", "りょく", false]
		], "4555"
	],
	["(効|こう)[果|か]", "効果", ["こうか"],
		[
			["効", "こう", true],
			["果", "か", false]
		], "4556"
	],
	["[有|ゆう](効|こう)", "有効", ["ゆうこう"],
		[
			["有", "ゆう", false],
			["効", "こう", true]
		], "4557"
	],
	["[働|はたら]き", "働き", ["はたらき"],
		[
			["働", "はたら", false],
			["き", null, false]
		], -1
	],
	["[労|ろう][働|どう]", "労働", ["ろうどう"],
		[
			["労", "ろう", false],
			["働", "どう", false]
		], -1
	],
	["[食|しょく][堂|どう]", "食堂", ["しょくどう"],
		[
			["食", "しょく", false],
			["堂", "どう", false]
		], -1
	],
	["[景|けい][気|き]", "景気", ["けいき"],
		[
			["景", "けい", false],
			["気", "き", false]
		], -1
	],
	["[光|こう][景|けい]", "光景", ["こうけい"],
		[
			["光", "こう", false],
			["景", "けい", false]
		], -1
	],
	["[風|ふう][景|けい]", "風景", ["ふうけい"],
		[
			["風", "ふう", false],
			["景", "けい", false]
		], -1
	],
	["[景|け][色|しき]", "景色", ["けしき"],
		[
			["景", "け", false],
			["色", "しき", false]
		], -1
	],
	["[夕|ゆう][飯|はん]", "夕飯", ["ゆうはん"],
		[
			["夕", "ゆう", false],
			["飯", "はん", false]
		], -1
	],
	["[医|い](師|し)", "医師", ["いし"],
		[
			["医", "い", false],
			["師", "し", true]
		], "4560"
	],
	["[教|きょう](師|し)", "教師", ["きょうし"],
		[
			["教", "きょう", false],
			["師", "し", true]
		], "4562"
	],
	["額", "額", ["がく", "ひたい"],
		[], null
	],
	["[好|す]き[好|ず]き", "好き好き", ["すきずき"],
		[
			["好", "す", false],
			["き", null, false],
			["好", "ず", false],
			["き", null, false]
		], -1
	],
	["[好|この]み", "好み", ["このみ"],
		[
			["好", "この", false],
			["み", null, false]
		], -1
	],
	["[好|この]*む", "好", ["この"],
		[
			["好", "この", false]
		], -1
	],
	["[友|ゆう][好|こう]", "友好", ["ゆうこう"],
		[
			["友", "ゆう", false],
			["好", "こう", false]
		], -1
	],
	["(格|かっ)[好|こう]", "格好", ["かっこう"],
		[
			["格", "かっ", true],
			["好", "こう", false]
		], "4311"
	],
	["[安|あん](易|い)", "安易", ["あんい"],
		[
			["安", "あん", false],
			["易", "い", true]
		], "4567"
	],
	["[回|かい][数|すう](券|けん)", "回数券", ["かいすうけん"],
		[
			["回", "かい", false],
			["数", "すう", false],
			["券", "けん", true]
		], "4572"
	],
	["[定|てい][期|き](券|けん)", "定期券", ["ていきけん"],
		[
			["定", "てい", false],
			["期", "き", false],
			["券", "けん", true]
		], "4573"
	],
	["[賞|しょう]", "賞", ["しょう"],
		[
			["賞", "しょう", false]
		], -1
	],
	["[賞|しょう][品|ひん]", "賞品", ["しょうひん"],
		[
			["賞", "しょう", false],
			["品", "ひん", false]
		], -1
	],
	["[賞|しょう][金|きん]", "賞金", ["しょうきん"],
		[
			["賞", "しょう", false],
			["金", "きん", false]
		], -1
	],
	["(破|は)[産|さん]", "破産", ["はさん"],
		[
			["破", "は", true],
			["産", "さん", false]
		], "4577"
	],
	["[辺|へん]", "辺", ["へん"],
		[
			["辺", "へん", false]
		], -1
	],
	["[辺|あた]り", "辺り", ["あたり"],
		[
			["辺", "あた", false],
			["り", null, false]
		], -1
	],
	["(周|しゅう)[辺|へん]", "周辺", ["しゅうへん"],
		[
			["周", "しゅう", true],
			["辺", "へん", false]
		], "3688"
	],
	["(編|あみ)[物|もの]", "編物", ["あみもの"],
		[
			["編", "あみ", true],
			["物", "もの", false]
		], "4581"
	],
	["(編|へん)[集|しゅう]", "編集", ["へんしゅう"],
		[
			["編", "へん", true],
			["集", "しゅう", false]
		], "4582"
	],
	["[短|たん](編|ぺん)", "短編", ["たんぺん"],
		[
			["短", "たん", false],
			["編", "ぺん", true]
		], "4583"
	],
	["[和|わ][英|えい]", "和英", ["わえい"],
		[
			["和", "わ", false],
			["英", "えい", false]
		], -1
	],
	["[英|えい][和|わ]", "英和", ["えいわ"],
		[
			["英", "えい", false],
			["和", "わ", false]
		], -1
	],
	["[英|えい][文|ぶん]", "英文", ["えいぶん"],
		[
			["英", "えい", false],
			["文", "ぶん", false]
		], -1
	],
	["(修|しゅう)[正|せい]", "修正", ["しゅうせい"],
		[
			["修", "しゅう", true],
			["正", "せい", false]
		], "4587"
	],
	["(修|しゅう)[理|り]", "修理", ["しゅうり"],
		[
			["修", "しゅう", true],
			["理", "り", false]
		], "4588"
	],
	["[研|けん](修|しゅう)", "研修", ["けんしゅう"],
		[
			["研", "けん", false],
			["修", "しゅう", true]
		], "4589"
	],
	["[低|てい]{～}", "低～", ["てい"],
		[
			["低", "てい", false],
			["～", null, false]
		], -1
	],
	["[低|てい][下|か]", "低下", ["ていか"],
		[
			["低", "てい", false],
			["下", "か", false]
		], -1
	],
	["[最|さい][低|てい]", "最低", ["さいてい"],
		[
			["最", "さい", false],
			["低", "てい", false]
		], -1
	],
	["(採|さい)[点|てん]", "採点", ["さいてん"],
		[
			["採", "さい", true],
			["点", "てん", false]
		], "4592"
	],
	["[失|うしな]*う", "失", ["うしな"],
		[
			["失", "うしな", false]
		], -1
	],
	["[失|しつ][業|ぎょう]", "失業", ["しつぎょう"],
		[
			["失", "しつ", false],
			["業", "ぎょう", false]
		], -1
	],
	["[失|しつ][礼|れい]", "失礼", ["しつれい"],
		[
			["失", "しつ", false],
			["礼", "れい", false]
		], -1
	],
	["[失|しつ](望|ぼう)", "失望", ["しつぼう"],
		[
			["失", "しつ", false],
			["望", "ぼう", true]
		], "3589"
	],
	["[失|しっ](敗|ぱい)", "失敗", ["しっぱい"],
		[
			["失", "しっ", false],
			["敗", "ぱい", true]
		], "3648"
	],
	["(過|か)[失|しつ]", "過失", ["かしつ"],
		[
			["過", "か", true],
			["失", "しつ", false]
		], "4323"
	],
	["[組|そ](織|しき)", "組織", ["そしき"],
		[
			["組", "そ", false],
			["織", "しき", true]
		], "4593"
	],
	["[交|こう][差|さ]", "交差", ["こうさ"],
		[
			["交", "こう", false],
			["差", "さ", false]
		], -1
	],
	["[交|こう][差|さ][点|てん]", "交差点", ["こうさてん"],
		[
			["交", "こう", false],
			["差", "さ", false],
			["点", "てん", false]
		], -1
	],
	["[人|ひと][差|さし][指|ゆび]", "人差指", ["ひとさしゆび"],
		[
			["人", "ひと", false],
			["差", "さし", false],
			["指", "ゆび", false]
		], -1
	],
	["[差|さ]", "差", ["さ"],
		[
			["差", "さ", false]
		], -1
	],
	["[差|さ]し[上|あ]げる", "差し上げる", ["さしあげる"],
		[
			["差", "さ", false],
			["し", null, false],
			["上", "あ", false],
			["げ", null, false],
			["る", null, false]
		], -1
	],
	["[差|さ]し[引|ひ]き", "差し引き", ["さしひき"],
		[
			["差", "さ", false],
			["し", null, false],
			["引", "ひ", false],
			["き", null, false]
		], -1
	],
	["[差|さ]*す", "差", ["さ"],
		[
			["差", "さ", false]
		], -1
	],
	["[差|さ][別|べつ]", "差別", ["さべつ"],
		[
			["差", "さ", false],
			["別", "べつ", false]
		], -1
	],
	["[物|もの][差|さ]し", "物差し", ["ものさし"],
		[
			["物", "もの", false],
			["差", "さ", false],
			["し", null, false]
		], -1
	],
	["[差|さ]し(支|つか)え", "差し支え", ["さしつかえ"],
		[
			["差", "さ", false],
			["し", null, false],
			["支", "つか", true],
			["え", null, false]
		], "4152"
	],
	["[事|じ](故|こ)", "事故", ["じこ"],
		[
			["事", "じ", false],
			["故", "こ", true]
		], "4597"
	],
	["(弁|べん)[当|とう]", "弁当", ["べんとう"],
		[
			["弁", "べん", true],
			["当", "とう", false]
		], "4600"
	],
	["[日|にっ][課|か]", "日課", ["にっか"],
		[
			["日", "にっ", false],
			["課", "か", false]
		], -1
	],
	["[課|か]", "課", ["か"],
		[
			["課", "か", false]
		], -1
	],
	["[課|か](税|ぜい)", "課税", ["かぜい"],
		[
			["課", "か", false],
			["税", "ぜい", true]
		], "4328"
	],
	["[課|か](程|てい)", "課程", ["かてい"],
		[
			["課", "か", false],
			["程", "てい", true]
		], "4540"
	],
	["[原|げん](因|いん)", "原因", ["げんいん"],
		[
			["原", "げん", false],
			["因", "いん", true]
		], "4601"
	],
	["[月|げつ][末|まつ]", "月末", ["げつまつ"],
		[
			["月", "げつ", false],
			["末", "まつ", false]
		], -1
	],
	["[末|すえ]", "末", ["すえ"],
		[
			["末", "すえ", false]
		], -1
	],
	["[末|すえ]っ[子|こ]", "末っ子", ["すえっこ"],
		[
			["末", "すえ", false],
			["っ", null, false],
			["子", "こ", false]
		], -1
	],
	["[北|ほっ][極|きょく]", "北極", ["ほっきょく"],
		[
			["北", "ほっ", false],
			["極", "きょく", false]
		], -1
	],
	["[南|なん][極|きょく]", "南極", ["なんきょく"],
		[
			["南", "なん", false],
			["極", "きょく", false]
		], -1
	],
	["[極|ごく]", "極", ["ごく"],
		[
			["極", "ごく", false]
		], -1
	],
	["[消|しょう][極|きょく][的|てき]", "消極的", ["しょうきょくてき"],
		[
			["消", "しょう", false],
			["極", "きょく", false],
			["的", "てき", false]
		], -1
	],
	["(積|せっ)[極|きょく][的|てき]", "積極的", ["せっきょくてき"],
		[
			["積", "せっ", true],
			["極", "きょく", false],
			["的", "てき", false]
		], "3674"
	],
	["[休|きゅう](講|こう)", "休講", ["きゅうこう"],
		[
			["休", "きゅう", false],
			["講", "こう", true]
		], "4605"
	],
	["[一|いっ][種|しゅ]", "一種", ["いっしゅ"],
		[
			["一", "いっ", false],
			["種", "しゅ", false]
		], -1
	],
	["[人|じん][種|しゅ]", "人種", ["じんしゅ"],
		[
			["人", "じん", false],
			["種", "しゅ", false]
		], -1
	],
	["[種|たね]", "種", ["たね"],
		[
			["種", "たね", false]
		], -1
	],
	["[種|しゅ](類|るい)", "種類", ["しゅるい"],
		[
			["種", "しゅ", false],
			["類", "るい", true]
		], "3765"
	],
	["[水|すい](素|そ)", "水素", ["すいそ"],
		[
			["水", "すい", false],
			["素", "そ", true]
		], "4610"
	],
	["(素|す)[直|なお]", "素直", ["すなお"],
		[
			["素", "す", true],
			["直", "なお", false]
		], "4613"
	],
	["[要|よう](素|そ)", "要素", ["ようそ"],
		[
			["要", "よう", false],
			["素", "そ", true]
		], "4615"
	],
	["(素|す)[晴|ば]らしい", "素晴らしい", ["すばらしい"],
		[
			["素", "す", true],
			["晴", "ば", false],
			["ら", null, false],
			["し", null, false],
			["い", null, false]
		], "4616"
	],
	["[分|ぶん][量|りょう]", "分量", ["ぶんりょう"],
		[
			["分", "ぶん", false],
			["量", "りょう", false]
		], -1
	],
	["[重|じゅう][量|りょう]", "重量", ["じゅうりょう"],
		[
			["重", "じゅう", false],
			["量", "りょう", false]
		], -1
	],
	["[量|りょう]", "量", ["りょう"],
		[
			["量", "りょう", false]
		], -1
	],
	["[量|はか]*5", "量", ["はか"],
		[
			["量", "はか", false]
		], -1
	],
	["[運|うん](河|が)", "運河", ["うんが"],
		[
			["運", "うん", false],
			["河", "が", true]
		], "4619"
	],
	["[失|しつ][望|ぼう]", "失望", ["しつぼう"],
		[
			["失", "しつ", false],
			["望", "ぼう", false]
		], -1
	],
	["[望|のぞ]み", "望み", ["のぞみ"],
		[
			["望", "のぞ", false],
			["み", null, false]
		], -1
	],
	["[望|のぞ]*む", "望", ["のぞ"],
		[
			["望", "のぞ", false]
		], -1
	],
	["(希|き)[望|ぼう]", "希望", ["きぼう"],
		[
			["希", "き", true],
			["望", "ぼう", false]
		], "3920"
	],
	["[望|ぼう][遠|えん](鏡|きょう)", "望遠鏡", ["ぼうえんきょう"],
		[
			["望", "ぼう", false],
			["遠", "えん", false],
			["鏡", "きょう", true]
		], "4054"
	],
	["(適|てき)[切|せつ]", "適切", ["てきせつ"],
		[
			["適", "てき", true],
			["切", "せつ", false]
		], "4621"
	],
	["(適|てき)[度|ど]", "適度", ["てきど"],
		[
			["適", "てき", true],
			["度", "ど", false]
		], "4622"
	],
	["(適|てき)[当|とう]", "適当", ["てきとう"],
		[
			["適", "てき", true],
			["当", "とう", false]
		], "4623"
	],
	["(適|てき)[用|よう]", "適用", ["てきよう"],
		[
			["適", "てき", true],
			["用", "よう", false]
		], "4624"
	],
	["[主|しゅ](婦|ふ)", "主婦", ["しゅふ"],
		[
			["主", "しゅ", false],
			["婦", "ふ", true]
		], "4629"
	],
	["[夫|ふう](婦|ふ)", "夫婦", ["ふうふ"],
		[
			["夫", "ふう", false],
			["婦", "ふ", true]
		], "4630"
	],
	["(婦|ふ)[人|じん]", "婦人", ["ふじん"],
		[
			["婦", "ふ", true],
			["人", "じん", false]
		], "4631"
	],
	["[松|まつ]", "松", ["まつ"],
		[
			["松", "まつ", false]
		], -1
	],
	["(寄|き)[付|ふ]", "寄付", ["きふ"],
		[
			["寄", "き", true],
			["付", "ふ", false]
		], "4636"
	],
	["[年|とし](寄|より)", "年寄", ["としより"],
		[
			["年", "とし", false],
			["寄", "より", true]
		], "4637"
	],
	["[近|ちか](寄|よ)*5", "近寄", ["ちかよ"],
		[
			["近", "ちか", false],
			["寄", "よ", true]
		], "4638"
	],
	["[観|かん][念|ねん]", "観念", ["かんねん"],
		[
			["観", "かん", false],
			["念", "ねん", false]
		], -1
	],
	["[観|かん][光|こう]", "観光", ["かんこう"],
		[
			["観", "かん", false],
			["光", "こう", false]
		], -1
	],
	["[観|かん][客|きゃく]", "観客", ["かんきゃく"],
		[
			["観", "かん", false],
			["客", "きゃく", false]
		], -1
	],
	["[観|かん](察|さつ)", "観察", ["かんさつ"],
		[
			["観", "かん", false],
			["察", "さつ", true]
		], "3610"
	],
	["[利|り](益|えき)", "利益", ["りえき"],
		[
			["利", "り", false],
			["益", "えき", true]
		], "4642"
	],
	["[観|かん][察|さつ]", "観察", ["かんさつ"],
		[
			["観", "かん", false],
			["察", "さつ", false]
		], -1
	],
	["(余|よ)[分|ぶん]", "余分", ["よぶん"],
		[
			["余", "よ", true],
			["分", "ぶん", false]
		], "4645"
	],
	["(余|よ)[所|そ]", "余所", ["よそ"],
		[
			["余", "よ", true],
			["所", "そ", false]
		], "4646"
	],
	["(余|よ)[計|けい]", "余計", ["よけい"],
		[
			["余", "よ", true],
			["計", "けい", false]
		], "4647"
	],
	["(禁|きん)[止|し]", "禁止", ["きんし"],
		[
			["禁", "きん", true],
			["止", "し", false]
		], "4653"
	],
	["{～}[型|けい]", "～型", ["けい"],
		[
			["～", null, false],
			["型", "けい", false]
		], -1
	],
	["[型|かた]", "型", ["かた"],
		[
			["型", "かた", false]
		], -1
	],
	["(典|てん)[型|けい]", "典型", ["てんけい"],
		[
			["典", "てん", true],
			["型", "けい", false]
		], "3984"
	],
	["(逆|さか)[様|さま]", "逆様", ["さかさま"],
		[
			["逆", "さか", true],
			["様", "さま", false]
		], "4659"
	],
	["[投|とう][票|ひょう]", "投票", ["とうひょう"],
		[
			["投", "とう", false],
			["票", "ひょう", false]
		], -1
	],
	["[野|や][菜|さい]", "野菜", ["やさい"],
		[
			["野", "や", false],
			["菜", "さい", false]
		], -1
	],
	["[上|じょう][達|たつ]", "上達", ["じょうたつ"],
		[
			["上", "じょう", false],
			["達", "たつ", false]
		], -1
	],
	["[発|はっ][達|たつ]", "発達", ["はったつ"],
		[
			["発", "はっ", false],
			["達", "たつ", false]
		], -1
	],
	["[達|たっ]する", "達する", ["たっする"],
		[
			["達", "たっ", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["[配|はい][達|たつ]", "配達", ["はいたつ"],
		[
			["配", "はい", false],
			["達", "たつ", false]
		], -1
	],
	["[速|そく][達|たつ]", "速達", ["そくたつ"],
		[
			["速", "そく", false],
			["達", "たつ", false]
		], -1
	],
	["[友|とも][達|だち]", "友達", ["ともだち"],
		[
			["友", "とも", false],
			["達", "だち", false]
		], -1
	],
	["[夫|ふ](妻|さい)", "夫妻", ["ふさい"],
		[
			["夫", "ふ", false],
			["妻", "さい", true]
		], "4664"
	],
	["(仲|なか)[良|よ]し", "仲良し", ["なかよし"],
		[
			["仲", "なか", true],
			["良", "よ", false],
			["し", null, false]
		], "3938"
	],
	["[気|き][候|こう]", "気候", ["きこう"],
		[
			["気", "き", false],
			["候", "こう", false]
		], -1
	],
	["[天|てん][候|こう]", "天候", ["てんこう"],
		[
			["天", "てん", false],
			["候", "こう", false]
		], -1
	],
	["[平|へい](均|きん)", "平均", ["へいきん"],
		[
			["平", "へい", false],
			["均", "きん", true]
		], "4675"
	],
	["{～}[史|し]", "～史", ["し"],
		[
			["～", null, false],
			["史", "し", false]
		], -1
	],
	["(歴|れき)[史|し]", "歴史", ["れきし"],
		[
			["歴", "れき", true],
			["史", "し", false]
		], "3732"
	],
	["[気|き](圧|あつ)", "気圧", ["きあつ"],
		[
			["気", "き", false],
			["圧", "あつ", true]
		], "4679"
	],
	["[血|けつ](圧|あつ)", "血圧", ["けつあつ"],
		[
			["血", "けつ", false],
			["圧", "あつ", true]
		], "4680"
	],
	["[不|ふ][満|まん]", "不満", ["ふまん"],
		[
			["不", "ふ", false],
			["満", "まん", false]
		], -1
	],
	["[満|み]ち*る", "満ち", ["みち"],
		[
			["満", "み", false],
			["ち", null, false]
		], -1
	],
	["[満|まん][員|いん]", "満員", ["まんいん"],
		[
			["満", "まん", false],
			["員", "いん", false]
		], -1
	],
	["[満|まん][点|てん]", "満点", ["まんてん"],
		[
			["満", "まん", false],
			["点", "てん", false]
		], -1
	],
	["[満|まん][足|ぞく]", "満足", ["まんぞく"],
		[
			["満", "まん", false],
			["足", "ぞく", false]
		], -1
	],
	["(未|み)[満|まん]", "未満", ["みまん"],
		[
			["未", "み", true],
			["満", "まん", false]
		], "3748"
	],
	["[書|かき](留|とめ)", "書留", ["かきとめ"],
		[
			["書", "かき", false],
			["留", "とめ", true]
		], "4688"
	],
	["(留|りゅう)[学|がく]", "留学", ["りゅうがく"],
		[
			["留", "りゅう", true],
			["学", "がく", false]
		], "4690"
	],
	["(留|る)[守|す]", "留守", ["るす"],
		[
			["留", "る", true],
			["守", "す", false]
		], "4691"
	],
	["(留|る)[守|す][番|ばん]", "留守番", ["るすばん"],
		[
			["留", "る", true],
			["守", "す", false],
			["番", "ばん", false]
		], "4692"
	],
	["(停|てい)(留|りゅう)[所|じょ]", "停留所", ["ていりゅうじょ"],
		[
			["停", "てい", true],
			["留", "りゅう", true],
			["所", "じょ", false]
		], "3829"
	],
	["[勝|しょう][敗|はい]", "勝敗", ["しょうはい"],
		[
			["勝", "しょう", false],
			["敗", "はい", false]
		], -1
	],
	["[失|しっ][敗|ぱい]", "失敗", ["しっぱい"],
		[
			["失", "しっ", false],
			["敗", "ぱい", false]
		], -1
	],
	["[管|くだ]", "管", ["くだ"],
		[
			["管", "くだ", false]
		], -1
	],
	["[管|かん][理|り]", "管理", ["かんり"],
		[
			["管", "かん", false],
			["理", "り", false]
		], -1
	],
	["(興|きょう)[味|み]", "興味", ["きょうみ"],
		[
			["興", "きょう", true],
			["味", "み", false]
		], "4702"
	],
	["(精|せい)[神|しん]", "精神", ["せいしん"],
		[
			["精", "せい", true],
			["神", "しん", false]
		], "4708"
	],
	["[兵|へい](隊|たい)", "兵隊", ["へいたい"],
		[
			["兵", "へい", false],
			["隊", "たい", true]
		], "3720"
	],
	["[不|ふ](規|き)(則|そく)", "不規則", ["ふきそく"],
		[
			["不", "ふ", false],
			["規", "き", true],
			["則", "そく", true]
		], "4386"
	],
	["[法|ほう](則|そく)", "法則", ["ほうそく"],
		[
			["法", "ほう", false],
			["則", "そく", true]
		], "4710"
	],
	["{～}[器|き]", "～器", ["き"],
		[
			["～", null, false],
			["器", "き", false]
		], -1
	],
	["[受|じゅ][話|わ][器|き]", "受話器", ["じゅわき"],
		[
			["受", "じゅ", false],
			["話", "わ", false],
			["器", "き", false]
		], -1
	],
	["[器|き][用|よう]", "器用", ["きよう"],
		[
			["器", "き", false],
			["用", "よう", false]
		], -1
	],
	["[楽|がっ][器|き]", "楽器", ["がっき"],
		[
			["楽", "がっ", false],
			["器", "き", false]
		], -1
	],
	["[食|しょっ][器|き]", "食器", ["しょっき"],
		[
			["食", "しょっ", false],
			["器", "き", false]
		], -1
	],
	["[器|き][具|ぐ]", "器具", ["きぐ"],
		[
			["器", "き", false],
			["具", "ぐ", false]
		], -1
	],
	["[器|き](械|かい)", "器械", ["きかい"],
		[
			["器", "き", false],
			["械", "かい", true]
		], "4027"
	],
	["(容|よう)[器|き]", "容器", ["ようき"],
		[
			["容", "よう", true],
			["器", "き", false]
		], "4270"
	],
	["(武|ぶ)[器|き]", "武器", ["ぶき"],
		[
			["武", "ぶ", true],
			["器", "き", false]
		], "4428"
	],
	["[予|よ](測|そく)", "予測", ["よそく"],
		[
			["予", "よ", false],
			["測", "そく", true]
		], "4712"
	],
	["(測|そく)[定|てい]", "測定", ["そくてい"],
		[
			["測", "そく", true],
			["定", "てい", false]
		], "4714"
	],
	["(測|そく)[量|りょう]", "測量", ["そくりょう"],
		[
			["測", "そく", true],
			["量", "りょう", false]
		], "4715"
	],
	["[観|かん](測|そく)", "観測", ["かんそく"],
		[
			["観", "かん", false],
			["測", "そく", true]
		], "4716"
	],
	["(博|はか)[士|せ]", "博士", ["はかせ"],
		[
			["博", "はか", true],
			["士", "せ", false]
		], "3874"
	],
	["(武|ぶ)[士|し]", "武士", ["ぶし"],
		[
			["武", "ぶ", true],
			["士", "し", false]
		], "4429"
	],
	["[体|たい][積|せき]", "体積", ["たいせき"],
		[
			["体", "たい", false],
			["積", "せき", false]
		], -1
	],
	["[積|つ]*む", "積", ["つ"],
		[
			["積", "つ", false]
		], -1
	],
	["[積|つ]も*5", "積も", ["つも"],
		[
			["積", "つ", false],
			["も", null, false]
		], -1
	],
	["[積|せっ][極|きょく][的|てき]", "積極的", ["せっきょくてき"],
		[
			["積", "せっ", false],
			["極", "きょく", false],
			["的", "てき", false]
		], -1
	],
	["[面|めん][積|せき]", "面積", ["めんせき"],
		[
			["面", "めん", false],
			["積", "せき", false]
		], -1
	],
	["(容|よう)[積|せき]", "容積", ["ようせき"],
		[
			["容", "よう", true],
			["積", "せき", false]
		], "4271"
	],
	["[記|き][録|ろく]", "記録", ["きろく"],
		[
			["記", "き", false],
			["録", "ろく", false]
		], -1
	],
	["[録|ろく][音|おん]", "録音", ["ろくおん"],
		[
			["録", "ろく", false],
			["音", "おん", false]
		], -1
	],
	["(承|しょう)[知|ち]", "承知", ["しょうち"],
		[
			["承", "しょう", true],
			["知", "ち", false]
		], "4731"
	],
	["{～}[省|しょう]", "～省", ["しょう"],
		[
			["～", null, false],
			["省", "しょう", false]
		], -1
	],
	["[反|はん][省|せい]", "反省", ["はんせい"],
		[
			["反", "はん", false],
			["省", "せい", false]
		], -1
	],
	["[省|しょう]{～}", "省～", ["しょう"],
		[
			["省", "しょう", false],
			["～", null, false]
		], -1
	],
	["[省|はぶ]*く", "省", ["はぶ"],
		[
			["省", "はぶ", false]
		], -1
	],
	["(絶|ぜっ)[対|たい]", "絶対", ["ぜったい"],
		[
			["絶", "ぜっ", true],
			["対", "たい", false]
		], "4734"
	],
	["[出|しゅっ](版|ぱん)", "出版", ["しゅっぱん"],
		[
			["出", "しゅっ", false],
			["版", "ぱん", true]
		], "4735"
	],
	["[円|えん][周|しゅう]", "円周", ["えんしゅう"],
		[
			["円", "えん", false],
			["周", "しゅう", false]
		], -1
	],
	["[周|まわ]り", "周り", ["まわり"],
		[
			["周", "まわ", false],
			["り", null, false]
		], -1
	],
	["[周|しゅう][辺|へん]", "周辺", ["しゅうへん"],
		[
			["周", "しゅう", false],
			["辺", "へん", false]
		], -1
	],
	["[周|しゅう](囲|い)", "周囲", ["しゅうい"],
		[
			["周", "しゅう", false],
			["囲", "い", true]
		], "3861"
	],
	["(損|そん)[害|がい]", "損害", ["そんがい"],
		[
			["損", "そん", true],
			["害", "がい", false]
		], "4738"
	],
	["(損|そん)[得|とく]", "損得", ["そんとく"],
		[
			["損", "そん", true],
			["得", "とく", false]
		], "4739"
	],
	["[木|もく][材|ざい]", "木材", ["もくざい"],
		[
			["木", "もく", false],
			["材", "ざい", false]
		], -1
	],
	["[材|ざい][料|りょう]", "材料", ["ざいりょう"],
		[
			["材", "ざい", false],
			["料", "りょう", false]
		], -1
	],
	["[材|ざい][木|もく]", "材木", ["ざいもく"],
		[
			["材", "ざい", false],
			["木", "もく", false]
		], -1
	],
	["[健|けん](康|こう)", "健康", ["けんこう"],
		[
			["健", "けん", false],
			["康", "こう", true]
		], "3854"
	],
	["(保|ほ)[健|けん]", "保健", ["ほけん"],
		[
			["保", "ほ", true],
			["健", "けん", false]
		], "4143"
	],
	["[実|じっ](績|せき)", "実績", ["じっせき"],
		[
			["実", "じっ", false],
			["績", "せき", true]
		], "4744"
	],
	["[成|せい](績|せき)", "成績", ["せいせき"],
		[
			["成", "せい", false],
			["績", "せき", true]
		], "4745"
	],
	["[建|けん](築|ちく)", "建築", ["けんちく"],
		[
			["建", "けん", false],
			["築", "ちく", true]
		], "4749"
	],
	["[飛|と]ば*す", "飛ば", ["とば"],
		[
			["飛", "と", false],
			["ば", null, false]
		], -1
	],
	["[飛|と]び[出|だ]*す", "飛び出", ["とびだ"],
		[
			["飛", "と", false],
			["び", null, false],
			["出", "だ", false]
		], -1
	],
	["[飛|と]*ぶ", "飛", ["と"],
		[
			["飛", "と", false]
		], -1
	],
	["[飛|ひ][行|こう]", "飛行", ["ひこう"],
		[
			["飛", "ひ", false],
			["行", "こう", false]
		], -1
	],
	["[飛|ひ][行|こう][場|じょう]", "飛行場", ["ひこうじょう"],
		[
			["飛", "ひ", false],
			["行", "こう", false],
			["場", "じょう", false]
		], -1
	],
	["[意|い](志|し)", "意志", ["いし"],
		[
			["意", "い", false],
			["志", "し", true]
		], "4750"
	],
	["[殺|ころ]*す", "殺", ["ころ"],
		[
			["殺", "ころ", false]
		], -1
	],
	["[自|じ][殺|さつ]", "自殺", ["じさつ"],
		[
			["自", "じ", false],
			["殺", "さつ", false]
		], -1
	],
	["(混|こん)[合|ごう]", "混合", ["こんごう"],
		[
			["混", "こん", true],
			["合", "ごう", false]
		], "4758"
	],
	["[単|たん]なる", "単なる", ["たんなる"],
		[
			["単", "たん", false],
			["な", null, false],
			["る", null, false]
		], -1
	],
	["[単|たん]に", "単に", ["たんに"],
		[
			["単", "たん", false],
			["に", null, false]
		], -1
	],
	["[単|たん][位|い]", "単位", ["たんい"],
		[
			["単", "たん", false],
			["位", "い", false]
		], -1
	],
	["[単|たん][数|すう]", "単数", ["たんすう"],
		[
			["単", "たん", false],
			["数", "すう", false]
		], -1
	],
	["[単|たん][語|ご]", "単語", ["たんご"],
		[
			["単", "たん", false],
			["語", "ご", false]
		], -1
	],
	["[住|じゅう](居|きょ)", "住居", ["じゅうきょ"],
		[
			["住", "じゅう", false],
			["居", "きょ", true]
		], "4763"
	],
	["(居|い)[間|ま]", "居間", ["いま"],
		[
			["居", "い", true],
			["間", "ま", false]
		], "4764"
	],
	["(雑|ざつ)[音|おん]", "雑音", ["ざつおん"],
		[
			["雑", "ざつ", true],
			["音", "おん", false]
		], "4767"
	],
	["[完|かん][全|ぜん]", "完全", ["かんぜん"],
		[
			["完", "かん", false],
			["全", "ぜん", false]
		], -1
	],
	["[完|かん][成|せい]", "完成", ["かんせい"],
		[
			["完", "かん", false],
			["成", "せい", false]
		], -1
	],
	["(招|しょう)[待|たい]", "招待", ["しょうたい"],
		[
			["招", "しょう", true],
			["待", "たい", false]
		], "4770"
	],
	["[兵|へい][隊|たい]", "兵隊", ["へいたい"],
		[
			["兵", "へい", false],
			["隊", "たい", false]
		], -1
	],
	["[軍|ぐん][隊|たい]", "軍隊", ["ぐんたい"],
		[
			["軍", "ぐん", false],
			["隊", "たい", false]
		], -1
	],
	["(永|えい)[遠|えん]", "永遠", ["えいえん"],
		[
			["永", "えい", true],
			["遠", "えん", false]
		], "4773"
	],
	["[競|きょう][争|そう]", "競争", ["きょうそう"],
		[
			["競", "きょう", false],
			["争", "そう", false]
		], -1
	],
	["[競|けい][馬|ば]", "競馬", ["けいば"],
		[
			["競", "けい", false],
			["馬", "ば", false]
		], -1
	],
	["[競|きょう](技|ぎ)", "競技", ["きょうぎ"],
		[
			["競", "きょう", false],
			["技", "ぎ", true]
		], "4492"
	],
	["[夕|ゆう](刊|かん)", "夕刊", ["ゆうかん"],
		[
			["夕", "ゆう", false],
			["刊", "かん", true]
		], "4775"
	],
	["[想|そう](像|ぞう)", "想像", ["そうぞう"],
		[
			["想", "そう", false],
			["像", "ぞう", true]
		], "4776"
	],
	["[月|げっ][給|きゅう]", "月給", ["げっきゅう"],
		[
			["月", "げっ", false],
			["給", "きゅう", false]
		], -1
	],
	["[給|きゅう][料|りょう]", "給料", ["きゅうりょう"],
		[
			["給", "きゅう", false],
			["料", "りょう", false]
		], -1
	],
	["(支|し)[給|きゅう]", "支給", ["しきゅう"],
		[
			["支", "し", true],
			["給", "きゅう", false]
		], "4153"
	],
	["(賛|さん)[成|せい]", "賛成", ["さんせい"],
		[
			["賛", "さん", true],
			["成", "せい", false]
		], "4779"
	],
	["[歴|れき][史|し]", "歴史", ["れきし"],
		[
			["歴", "れき", false],
			["史", "し", false]
		], -1
	],
	["(犯|はん)[人|にん]", "犯人", ["はんにん"],
		[
			["犯", "はん", true],
			["人", "にん", false]
		], "4781"
	],
	["[辞|や]め*る", "辞め", ["やめ"],
		[
			["辞", "や", false],
			["め", null, false]
		], -1
	],
	["[辞|じ][書|しょ]", "辞書", ["じしょ"],
		[
			["辞", "じ", false],
			["書", "しょ", false]
		], -1
	],
	["[辞|じ](典|てん)", "辞典", ["じてん"],
		[
			["辞", "じ", false],
			["典", "てん", true]
		], "3986"
	],
	["[分|ぶん](布|ぷ)", "分布", ["ぶんぷ"],
		[
			["分", "ぶん", false],
			["布", "ぷ", true]
		], "4786"
	],
	["[毛|もう](布|ふ)", "毛布", ["もうふ"],
		[
			["毛", "もう", false],
			["布", "ふ", true]
		], "4790"
	],
	["[金|きん](属|ぞく)", "金属", ["きんぞく"],
		[
			["金", "きん", false],
			["属", "ぞく", true]
		], "4796"
	],
	["[愛|あい]", "愛", ["あい"],
		[
			["愛", "あい", false]
		], -1
	],
	["[愛|あい]する", "愛する", ["あいする"],
		[
			["愛", "あい", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["[愛|あい](情|じょう)", "愛情", ["あいじょう"],
		[
			["愛", "あい", false],
			["情", "じょう", true]
		], "4224"
	],
	["(複|ふく)[写|しゃ]", "複写", ["ふくしゃ"],
		[
			["複", "ふく", true],
			["写", "しゃ", false]
		], "4798"
	],
	["(複|ふく)[数|すう]", "複数", ["ふくすう"],
		[
			["複", "ふく", true],
			["数", "すう", false]
		], "4799"
	],
	["[未|み]{～}", "未～", ["み"],
		[
			["未", "み", false],
			["～", null, false]
		], -1
	],
	["[未|ま]だ", "未だ", ["まだ"],
		[
			["未", "ま", false],
			["だ", null, false]
		], -1
	],
	["[未|み][来|らい]", "未来", ["みらい"],
		[
			["未", "み", false],
			["来", "らい", false]
		], -1
	],
	["[未|み][満|まん]", "未満", ["みまん"],
		[
			["未", "み", false],
			["満", "まん", false]
		], -1
	],
	["(似|に)[合|あ]う", "似合う", ["にあう"],
		[
			["似", "に", true],
			["合", "あ", false],
			["う", null, false]
		], "4805"
	],
	["[真|ま](似|ね)", "真似", ["まね"],
		[
			["真", "ま", false],
			["似", "ね", true]
		], "4806"
	],
	["[真|ま](似|ね)*る", "真似", ["まね"],
		[
			["真", "ま", false],
			["似", "ね", true]
		], "4807"
	],
	["[航|こう][空|くう]", "航空", ["こうくう"],
		[
			["航", "こう", false],
			["空", "くう", false]
		], -1
	],
	["(迷|めい)[信|しん]", "迷信", ["めいしん"],
		[
			["迷", "めい", true],
			["信", "しん", false]
		], "4813"
	],
	["(迷|まい)[子|ご]", "迷子", ["まいご"],
		[
			["迷", "まい", true],
			["子", "ご", false]
		], "4814"
	],
	["(夢|む)[中|ちゅう]", "夢中", ["むちゅう"],
		[
			["夢", "む", true],
			["中", "ちゅう", false]
		], "4817"
	],
	["[冷|ひ]え*る", "冷え", ["ひえ"],
		[
			["冷", "ひ", false],
			["え", null, false]
		], -1
	],
	["[冷|つめ]たい", "冷たい", ["つめたい"],
		[
			["冷", "つめ", false],
			["た", null, false],
			["い", null, false]
		], -1
	],
	["[冷|さ]ま*す", "冷ま", ["さま"],
		[
			["冷", "さ", false],
			["ま", null, false]
		], -1
	],
	["[冷|さ]め*る", "冷め", ["さめ"],
		[
			["冷", "さ", false],
			["め", null, false]
		], -1
	],
	["[冷|ひ]や*す", "冷や", ["ひや"],
		[
			["冷", "ひ", false],
			["や", null, false]
		], -1
	],
	["[冷|れい](静|せい)", "冷静", ["れいせい"],
		[
			["冷", "れい", false],
			["静", "せい", true]
		], "3855"
	],
	["[人|じん][類|るい]", "人類", ["じんるい"],
		[
			["人", "じん", false],
			["類", "るい", false]
		], -1
	],
	["[分|ぶん][類|るい]", "分類", ["ぶんるい"],
		[
			["分", "ぶん", false],
			["類", "るい", false]
		], -1
	],
	["[書|しょ][類|るい]", "書類", ["しょるい"],
		[
			["書", "しょ", false],
			["類", "るい", false]
		], -1
	],
	["[種|しゅ][類|るい]", "種類", ["しゅるい"],
		[
			["種", "しゅ", false],
			["類", "るい", false]
		], -1
	],
	["[親|しん][類|るい]", "親類", ["しんるい"],
		[
			["親", "しん", false],
			["類", "るい", false]
		], -1
	],
	["[火|か](災|さい)", "火災", ["かさい"],
		[
			["火", "か", false],
			["災", "さい", true]
		], "4827"
	],
	["[育|いく][児|じ]", "育児", ["いくじ"],
		[
			["育", "いく", false],
			["児", "じ", false]
		], -1
	],
	["[児|じ][童|どう]", "児童", ["じどう"],
		[
			["児", "じ", false],
			["童", "どう", false]
		], -1
	],
	["(貸|か)し[出|だ]し", "貸し出し", ["かしだし"],
		[
			["貸", "か", true],
			["し", null, false],
			["出", "だ", false],
			["し", null, false]
		], "4832"
	],
	["(貸|かし)[家|や]", "貸家", ["かしや"],
		[
			["貸", "かし", true],
			["家", "や", false]
		], "4834"
	],
	["(貸|かし)[間|ま]", "貸間", ["かしま"],
		[
			["貸", "かし", true],
			["間", "ま", false]
		], "4835"
	],
	["[印|しるし]", "印", ["しるし"],
		[
			["印", "しるし", false]
		], -1
	],
	["[印|いん][象|しょう]", "印象", ["いんしょう"],
		[
			["印", "いん", false],
			["象", "しょう", false]
		], -1
	],
	["[目|め][印|じるし]", "目印", ["めじるし"],
		[
			["目", "め", false],
			["印", "じるし", false]
		], -1
	],
	["[矢|や][印|じるし]", "矢印", ["やじるし"],
		[
			["矢", "や", false],
			["印", "じるし", false]
		], -1
	],
	["[印|いん](刷|さつ)", "印刷", ["いんさつ"],
		[
			["印", "いん", false],
			["刷", "さつ", true]
		], "4032"
	],
	["[金|きん](銭|せん)", "金銭", ["きんせん"],
		[
			["金", "きん", false],
			["銭", "せん", true]
		], "4836"
	],
	["留まる", "留まる", ["とどまる", "とまる"],
		[], null
	],
	["[標|ひょう][本|ほん]", "標本", ["ひょうほん"],
		[
			["標", "ひょう", false],
			["本", "ほん", false]
		], -1
	],
	["[目|もく][標|ひょう]", "目標", ["もくひょう"],
		[
			["目", "もく", false],
			["標", "ひょう", false]
		], -1
	],
	["[標|ひょう](準|じゅん)", "標準", ["ひょうじゅん"],
		[
			["標", "ひょう", false],
			["準", "じゅん", true]
		], "4479"
	],
	["[標|ひょう](識|しき)", "標識", ["ひょうしき"],
		[
			["標", "ひょう", false],
			["識", "しき", true]
		], "4528"
	],
	["(留|りゅう)[学|がく][生|せい]", "留学生", ["りゅうがくせい"],
		[
			["留", "りゅう", true],
			["学", "がく", false],
			["生", "せい", false]
		], -1
	],
	["[指|ゆび][輪|わ]", "指輪", ["ゆびわ"],
		[
			["指", "ゆび", false],
			["輪", "わ", false]
		], -1
	],
	["[車|しゃ][輪|りん]", "車輪", ["しゃりん"],
		[
			["車", "しゃ", false],
			["輪", "りん", false]
		], -1
	],
	["[輪|わ]", "輪", ["わ"],
		[
			["輪", "わ", false]
		], -1
	],
	["[感|かん](謝|しゃ)", "感謝", ["かんしゃ"],
		[
			["感", "かん", false],
			["謝", "しゃ", true]
		], "4838"
	],
	["(仮|か)[名|な]", "仮名", ["かな"],
		[
			["仮", "か", true],
			["名", "な", false]
		], "4841"
	],
	["(仮|か)[定|てい]", "仮定", ["かてい"],
		[
			["仮", "か", true],
			["定", "てい", false]
		], "4842"
	],
	["[平|ひら](仮|が)[名|な]", "平仮名", ["ひらがな"],
		[
			["平", "ひら", false],
			["仮", "が", true],
			["名", "な", false]
		], "4843"
	],
	["[送|おく]り(仮|が)[名|な]", "送り仮名", ["おくりがな"],
		[
			["送", "おく", false],
			["り", null, false],
			["仮", "が", true],
			["名", "な", false]
		], "4844"
	],
	["[加|か][熱|ねつ]", "加熱", ["かねつ"],
		[
			["加", "か", false],
			["熱", "ねつ", false]
		], -1
	],
	["[熱|ねつ]", "熱", ["ねつ"],
		[
			["熱", "ねつ", false]
		], -1
	],
	["[熱|あつ]い", "熱い", ["あつい"],
		[
			["熱", "あつ", false],
			["い", null, false]
		], -1
	],
	["[熱|ねっ]する", "熱する", ["ねっする"],
		[
			["熱", "ねっ", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["[熱|ねっ][中|ちゅう]", "熱中", ["ねっちゅう"],
		[
			["熱", "ねっ", false],
			["中", "ちゅう", false]
		], -1
	],
	["[熱|ねっ][心|しん]", "熱心", ["ねっしん"],
		[
			["熱", "ねっ", false],
			["心", "しん", false]
		], -1
	],
	["[熱|ねっ](帯|たい)", "熱帯", ["ねったい"],
		[
			["熱", "ねっ", false],
			["帯", "たい", true]
		], "3834"
	],
	["[清|きよ]い", "清い", ["きよい"],
		[
			["清", "きよ", false],
			["い", null, false]
		], -1
	],
	["[清|す]む", "清む", ["すむ"],
		[
			["清", "す", false],
			["む", null, false]
		], -1
	],
	["[清|せい][書|しょ]", "清書", ["せいしょ"],
		[
			["清", "せい", false],
			["書", "しょ", false]
		], -1
	],
	["(快|かい)[晴|せい]", "快晴", ["かいせい"],
		[
			["快", "かい", true],
			["晴", "せい", false]
		], "4849"
	],
	["[感|かん][覚|かく]", "感覚", ["かんかく"],
		[
			["感", "かん", false],
			["覚", "かく", false]
		], -1
	],
	["[目|め][覚|ざま]し", "目覚し", ["めざまし"],
		[
			["目", "め", false],
			["覚", "ざま", false],
			["し", null, false]
		], -1
	],
	["[覚|おぼ]え*る", "覚え", ["おぼえ"],
		[
			["覚", "おぼ", false],
			["え", null, false]
		], -1
	],
	["[覚|さ]ま*す", "覚ま", ["さま"],
		[
			["覚", "さ", false],
			["ま", null, false]
		], -1
	],
	["[覚|さ]め*る", "覚め", ["さめ"],
		[
			["覚", "さ", false],
			["め", null, false]
		], -1
	],
	["[道|どう](徳|とく)", "道徳", ["どうとく"],
		[
			["道", "どう", false],
			["徳", "とく", true]
		], "4851"
	],
	["[億|おく]", "億", ["おく"],
		[
			["億", "おく", false]
		], -1
	],
	["[校|こう](舎|しゃ)", "校舎", ["こうしゃ"],
		[
			["校", "こう", false],
			["舎", "しゃ", true]
		], "4855"
	],
	["[園|えん][芸|げい]", "園芸", ["えんげい"],
		[
			["園", "えん", false],
			["芸", "げい", false]
		], -1
	],
	["[工|こう][芸|げい]", "工芸", ["こうげい"],
		[
			["工", "こう", false],
			["芸", "げい", false]
		], -1
	],
	["[文|ぶん][芸|げい]", "文芸", ["ぶんげい"],
		[
			["文", "ぶん", false],
			["芸", "げい", false]
		], -1
	],
	["[芸|げい](能|のう)", "芸能", ["げいのう"],
		[
			["芸", "げい", false],
			["能", "のう", true]
		], "4292"
	],
	["[芸|げい](術|じゅつ)", "芸術", ["げいじゅつ"],
		[
			["芸", "げい", false],
			["術", "じゅつ", true]
		], "4392"
	],
	["[習|しゅう](慣|かん)", "習慣", ["しゅうかん"],
		[
			["習", "しゅう", false],
			["慣", "かん", true]
		], "4859"
	],
	["[見|み](慣|な)れ*る", "見慣れ", ["みなれ"],
		[
			["見", "み", false],
			["慣", "な", true],
			["れ", null, false]
		], "4860"
	],
	["[便|びん]", "便", ["びん"],
		[
			["便", "びん", false]
		], -1
	],
	["[便|たよ]り", "便り", ["たより"],
		[
			["便", "たよ", false],
			["り", null, false]
		], -1
	],
	["[便|べん][所|じょ]", "便所", ["べんじょ"],
		[
			["便", "べん", false],
			["所", "じょ", false]
		], -1
	],
	["[小|しょう][便|べん]", "小便", ["しょうべん"],
		[
			["小", "しょう", false],
			["便", "べん", false]
		], -1
	],
	["[船|ふな][便|びん]", "船便", ["ふなびん"],
		[
			["船", "ふな", false],
			["便", "びん", false]
		], -1
	],
	["(液|えき)[体|たい]", "液体", ["えきたい"],
		[
			["液", "えき", true],
			["体", "たい", false]
		], "4863"
	],
	["[血|けつ](液|えき)", "血液", ["けつえき"],
		[
			["血", "けつ", false],
			["液", "えき", true]
		], "4864"
	],
	["[停|てい][止|し]", "停止", ["ていし"],
		[
			["停", "てい", false],
			["止", "し", false]
		], -1
	],
	["[停|てい][車|しゃ]", "停車", ["ていしゃ"],
		[
			["停", "てい", false],
			["車", "しゃ", false]
		], -1
	],
	["[停|てい][電|でん]", "停電", ["ていでん"],
		[
			["停", "てい", false],
			["電", "でん", false]
		], -1
	],
	["[停|てい](留|りゅう)[所|じょ]", "停留所", ["ていりゅうじょ"],
		[
			["停", "てい", false],
			["留", "りゅう", true],
			["所", "じょ", false]
		], "4693"
	],
	["[大|たい][陸|りく]", "大陸", ["たいりく"],
		[
			["大", "たい", false],
			["陸", "りく", false]
		], -1
	],
	["[陸|りく]", "陸", ["りく"],
		[
			["陸", "りく", false]
		], -1
	],
	["[地|ち][帯|たい]", "地帯", ["ちたい"],
		[
			["地", "ち", false],
			["帯", "たい", false]
		], -1
	],
	["[帯|おび]", "帯", ["おび"],
		[
			["帯", "おび", false]
		], -1
	],
	["[熱|ねっ][帯|たい]", "熱帯", ["ねったい"],
		[
			["熱", "ねっ", false],
			["帯", "たい", false]
		], -1
	],
	["[温|おん][帯|たい]", "温帯", ["おんたい"],
		[
			["温", "おん", false],
			["帯", "たい", false]
		], -1
	],
	["[寒|かん][帯|たい]", "寒帯", ["かんたい"],
		[
			["寒", "かん", false],
			["帯", "たい", false]
		], -1
	],
	["(包|ほう)[帯|たい]", "包帯", ["ほうたい"],
		[
			["包", "ほう", true],
			["帯", "たい", false]
		], "3956"
	],
	["[先|せん](祖|ぞ)", "先祖", ["せんぞ"],
		[
			["先", "せん", false],
			["祖", "ぞ", true]
		], "4871"
	],
	["(祖|そ)[先|せん]", "祖先", ["そせん"],
		[
			["祖", "そ", true],
			["先", "せん", false]
		], "4872"
	],
	["[努|つと]め*る", "努め", ["つとめ"],
		[
			["努", "つと", false],
			["め", null, false]
		], -1
	],
	["[努|ど][力|りょく]", "努力", ["どりょく"],
		[
			["努", "ど", false],
			["力", "りょく", false]
		], -1
	],
	["(句|く)[読|とう][点|てん]", "句読点", ["くとうてん"],
		[
			["句", "く", true],
			["読", "とう", false],
			["点", "てん", false]
		], "4878"
	],
	["[文|もん](句|く)", "文句", ["もんく"],
		[
			["文", "もん", false],
			["句", "く", true]
		], "4879"
	],
	["[固|かた]い", "固い", ["かたい"],
		[
			["固", "かた", false],
			["い", null, false]
		], -1
	],
	["[固|かた]ま*5", "固ま", ["かたま"],
		[
			["固", "かた", false],
			["ま", null, false]
		], -1
	],
	["[散|ち]らか*す", "散らか", ["ちらか"],
		[
			["散", "ち", false],
			["ら", null, false],
			["か", null, false]
		], -1
	],
	["[散|ち]らか*5", "散らか", ["ちらか"],
		[
			["散", "ち", false],
			["ら", null, false],
			["か", null, false]
		], -1
	],
	["[散|ち]ら*す", "散ら", ["ちら"],
		[
			["散", "ち", false],
			["ら", null, false]
		], -1
	],
	["[散|ち]*5", "散", ["ち"],
		[
			["散", "ち", false]
		], -1
	],
	["[散|さん][歩|ぽ]", "散歩", ["さんぽ"],
		[
			["散", "さん", false],
			["歩", "ぽ", false]
		], -1
	],
	["(解|かい)[散|さん]", "解散", ["かいさん"],
		[
			["解", "かい", true],
			["散", "さん", false]
		], "4170"
	],
	["(鉱|こう)[物|ぶつ]", "鉱物", ["こうぶつ"],
		[
			["鉱", "こう", true],
			["物", "ぶつ", false]
		], "4885"
	],
	["[司|し][会|かい]", "司会", ["しかい"],
		[
			["司", "し", false],
			["会", "かい", false]
		], -1
	],
	["[健|けん][康|こう]", "健康", ["けんこう"],
		[
			["健", "けん", false],
			["康", "こう", false]
		], -1
	],
	["[冷|れい][静|せい]", "冷静", ["れいせい"],
		[
			["冷", "れい", false],
			["静", "せい", false]
		], -1
	],
	["[静|しず]か", "静か", ["しずか"],
		[
			["静", "しず", false],
			["か", null, false]
		], -1
	],
	["[静|しず]ま*5", "静ま", ["しずま"],
		[
			["静", "しず", false],
			["ま", null, false]
		], -1
	],
	["[喜|よろこ]び", "喜び", ["よろこび"],
		[
			["喜", "よろこ", false],
			["び", null, false]
		], -1
	],
	["[喜|よろこ]*ぶ", "喜", ["よろこ"],
		[
			["喜", "よろこ", false]
		], -1
	],
	["居る", "居る", ["いる", "おる"],
		[], null
	],
	["[周|しゅう][囲|い]", "周囲", ["しゅうい"],
		[
			["周", "しゅう", false],
			["囲", "い", false]
		], -1
	],
	["[囲|かこ]*む", "囲", ["かこ"],
		[
			["囲", "かこ", false]
		], -1
	],
	["[卒|そつ][業|ぎょう]", "卒業", ["そつぎょう"],
		[
			["卒", "そつ", false],
			["業", "ぎょう", false]
		], -1
	],
	["[卒|そっ][直|ちょく]", "卒直", ["そっちょく"],
		[
			["卒", "そっ", false],
			["直", "ちょく", false]
		], -1
	],
	["[道|みち][順|じゅん]", "道順", ["みちじゅん"],
		[
			["道", "みち", false],
			["順", "じゅん", false]
		], -1
	],
	["[順|じゅん]", "順", ["じゅん"],
		[
			["順", "じゅん", false]
		], -1
	],
	["[順|じゅん][々|じゅん]", "順々", ["じゅんじゅん"],
		[
			["順", "じゅん", false],
			["々", "じゅん", false]
		], -1
	],
	["[順|じゅん][番|ばん]", "順番", ["じゅんばん"],
		[
			["順", "じゅん", false],
			["番", "ばん", false]
		], -1
	],
	["[順|じゅん][調|ちょう]", "順調", ["じゅんちょう"],
		[
			["順", "じゅん", false],
			["調", "ちょう", false]
		], -1
	],
	["[順|じゅん](序|じょ)", "順序", ["じゅんじょ"],
		[
			["順", "じゅん", false],
			["序", "じょ", true]
		], "4853"
	],
	["(耕|こう)[地|ち]", "耕地", ["こうち"],
		[
			["耕", "こう", true],
			["地", "ち", false]
		], "4907"
	],
	["[世|せい][紀|き]", "世紀", ["せいき"],
		[
			["世", "せい", false],
			["紀", "き", false]
		], -1
	],
	["[不|ふ](潔|けつ)", "不潔", ["ふけつ"],
		[
			["不", "ふ", false],
			["潔", "けつ", true]
		], "4908"
	],
	["[博|はか][士|せ]", "博士", ["はかせ"],
		[
			["博", "はか", false],
			["士", "せ", false]
		], -1
	],
	["[博|はく][物|ぶつ][館|かん]", "博物館", ["はくぶつかん"],
		[
			["博", "はく", false],
			["物", "ぶつ", false],
			["館", "かん", false]
		], -1
	],
	["(忘|わす)れ[物|もの]", "忘れ物", ["わすれもの"],
		[
			["忘", "わす", true],
			["れ", null, false],
			["物", "もの", false]
		], "5030"
	],
	["[救|すく]*う", "救", ["すく"],
		[
			["救", "すく", false]
		], -1
	],
	["[救|きゅう][助|じょ]", "救助", ["きゅうじょ"],
		[
			["救", "きゅう", false],
			["助", "じょ", false]
		], -1
	],
	["(権|けん)[利|り]", "権利", ["けんり"],
		[
			["権", "けん", true],
			["利", "り", false]
		], "4917"
	],
	["[老|ろう][人|じん]", "老人", ["ろうじん"],
		[
			["老", "ろう", false],
			["人", "じん", false]
		], -1
	],
	["(派|は)[手|で]", "派手", ["はで"],
		[
			["派", "は", true],
			["手", "で", false]
		], "4919"
	],
	["[立|りっ](派|ぱ)", "立派", ["りっぱ"],
		[
			["立", "りっ", false],
			["派", "ぱ", true]
		], "4920"
	],
	["[命|めい][令|れい]", "命令", ["めいれい"],
		[
			["命", "めい", false],
			["令", "れい", false]
		], -1
	],
	["[生|せい][徒|と]", "生徒", ["せいと"],
		[
			["生", "せい", false],
			["徒", "と", false]
		], -1
	],
	["[対|たい](策|さく)", "対策", ["たいさく"],
		[
			["対", "たい", false],
			["策", "さく", true]
		], "4932"
	],
	["[貨|か][物|もつ]", "貨物", ["かもつ"],
		[
			["貨", "か", false],
			["物", "もつ", false]
		], -1
	],
	["[通|つう][貨|か]", "通貨", ["つうか"],
		[
			["通", "つう", false],
			["貨", "か", false]
		], -1
	],
	["[結|けつ](論|ろん)", "結論", ["けつろん"],
		[
			["結", "けつ", false],
			["論", "ろん", true]
		], "4935"
	],
	["(論|ろん)[文|ぶん]", "論文", ["ろんぶん"],
		[
			["論", "ろん", true],
			["文", "ぶん", false]
		], "4938"
	],
	["[議|ぎ](論|ろん)", "議論", ["ぎろん"],
		[
			["議", "ぎ", false],
			["論", "ろん", true]
		], "4939"
	],
	["(論|ろん)[争|そう]", "論争", ["ろんそう"],
		[
			["論", "ろん", true],
			["争", "そう", false]
		], "4940"
	],
	["[四|し][季|き]", "四季", ["しき"],
		[
			["四", "し", false],
			["季", "き", false]
		], -1
	],
	["[季|き](節|せつ)", "季節", ["きせつ"],
		[
			["季", "き", false],
			["節", "せつ", true]
		], "3950"
	],
	["(私|し)[立|りつ]", "私立", ["しりつ"],
		[
			["私", "し", true],
			["立", "りつ", false]
		], "4942"
	],
	["(私|し)[鉄|てつ]", "私鉄", ["してつ"],
		[
			["私", "し", true],
			["鉄", "てつ", false]
		], "4943"
	],
	["[成|せい][功|こう]", "成功", ["せいこう"],
		[
			["成", "せい", false],
			["功", "こう", false]
		], -1
	],
	["(疑|ぎ)[問|もん]", "疑問", ["ぎもん"],
		[
			["疑", "ぎ", true],
			["問", "もん", false]
		], "4948"
	],
	["[欠|か]け*る", "欠け", ["かけ"],
		[
			["欠", "か", false],
			["け", null, false]
		], -1
	],
	["[欠|けっ][席|せき]", "欠席", ["けっせき"],
		[
			["欠", "けっ", false],
			["席", "せき", false]
		], -1
	],
	["[欠|けっ][点|てん]", "欠点", ["けってん"],
		[
			["欠", "けっ", false],
			["点", "てん", false]
		], -1
	],
	["[底|そこ]", "底", ["そこ"],
		[
			["底", "そこ", false]
		], -1
	],
	["[子|こ](供|ども)", "子供", ["こども"],
		[
			["子", "こ", false],
			["供", "ども", true]
		], "4951"
	],
	["(供|きょう)[給|きゅう]", "供給", ["きょうきゅう"],
		[
			["供", "きょう", true],
			["給", "きゅう", false]
		], "4952"
	],
	["(割|わり)[合|あい]", "割合", ["わりあい"],
		[
			["割", "わり", true],
			["合", "あい", false]
		], "4957"
	],
	["(割|わり)[引|びき]", "割引", ["わりびき"],
		[
			["割", "わり", true],
			["引", "びき", false]
		], "4958"
	],
	["[時|じ][間|かん](割|わり)", "時間割", ["じかんわり"],
		[
			["時", "じ", false],
			["間", "かん", false],
			["割", "わり", true]
		], "4960"
	],
	["(割|わり)[算|ざん]", "割算", ["わりざん"],
		[
			["割", "わり", true],
			["算", "ざん", false]
		], "4961"
	],
	["[休|きゅう][養|よう]", "休養", ["きゅうよう"],
		[
			["休", "きゅう", false],
			["養", "よう", false]
		], -1
	],
	["[教|きょう][養|よう]", "教養", ["きょうよう"],
		[
			["教", "きょう", false],
			["養", "よう", false]
		], -1
	],
	["[養|よう][分|ぶん]", "養分", ["ようぶん"],
		[
			["養", "よう", false],
			["分", "ぶん", false]
		], -1
	],
	["(栄|えい)[養|よう]", "栄養", ["えいよう"],
		[
			["栄", "えい", true],
			["養", "よう", false]
		], "3941"
	],
	["[有|あり](難|がた)い", "有難い", ["ありがたい"],
		[
			["有", "あり", false],
			["難", "がた", true],
			["い", null, false]
		], "4963"
	],
	["[街|まち]", "街", ["まち"],
		[
			["街", "まち", false]
		], -1
	],
	["[街|まち][角|かど]", "街角", ["まちかど"],
		[
			["街", "まち", false],
			["角", "かど", false]
		], -1
	],
	["[願|ねが]い", "願い", ["ねがい"],
		[
			["願", "ねが", false],
			["い", null, false]
		], -1
	],
	["[願|ねが]*う", "願", ["ねが"],
		[
			["願", "ねが", false]
		], -1
	],
	["(優|ゆう)[勝|しょう]", "優勝", ["ゆうしょう"],
		[
			["優", "ゆう", true],
			["勝", "しょう", false]
		], "4972"
	],
	["[女|じょ](優|ゆう)", "女優", ["じょゆう"],
		[
			["女", "じょ", false],
			["優", "ゆう", true]
		], "4973"
	],
	["(収|しゅう)[入|にゅう]", "収入", ["しゅうにゅう"],
		[
			["収", "しゅう", true],
			["入", "にゅう", false]
		], "4975"
	],
	["[希|き][望|ぼう]", "希望", ["きぼう"],
		[
			["希", "き", false],
			["望", "ぼう", false]
		], -1
	],
	["(展|てん)[開|かい]", "展開", ["てんかい"],
		[
			["展", "てん", true],
			["開", "かい", false]
		], "4979"
	],
	["[発|はっ](展|てん)", "発展", ["はってん"],
		[
			["発", "はっ", false],
			["展", "てん", true]
		], "4980"
	],
	["[笑|わら]い", "笑い", ["わらい"],
		[
			["笑", "わら", false],
			["い", null, false]
		], -1
	],
	["[笑|わら]*う", "笑", ["わら"],
		[
			["笑", "わら", false]
		], -1
	],
	["[笑|え][顔|がお]", "笑顔", ["えがお"],
		[
			["笑", "え", false],
			["顔", "がお", false]
		], -1
	],
	["[住|じゅう](宅|たく)", "住宅", ["じゅうたく"],
		[
			["住", "じゅう", false],
			["宅", "たく", true]
		], "4982"
	],
	["[自|じ](宅|たく)", "自宅", ["じたく"],
		[
			["自", "じ", false],
			["宅", "たく", true]
		], "4984"
	],
	["[帰|き](宅|たく)", "帰宅", ["きたく"],
		[
			["帰", "き", false],
			["宅", "たく", true]
		], "4985"
	],
	["[束|たば]", "束", ["たば"],
		[
			["束", "たば", false]
		], -1
	],
	["[約|やく][束|そく]", "約束", ["やくそく"],
		[
			["約", "やく", false],
			["束", "そく", false]
		], -1
	],
	["[無|む](視|し)", "無視", ["むし"],
		[
			["無", "む", false],
			["視", "し", true]
		], "4986"
	],
	["[重|じゅう](視|し)", "重視", ["じゅうし"],
		[
			["重", "じゅう", false],
			["視", "し", true]
		], "4987"
	],
	["(警|けい)[告|こく]", "警告", ["けいこく"],
		[
			["警", "けい", true],
			["告", "こく", false]
		], "4995"
	],
	["(警|けい)[官|かん]", "警官", ["けいかん"],
		[
			["警", "けい", true],
			["官", "かん", false]
		], "4996"
	],
	["(警|けい)[察|さつ]", "警察", ["けいさつ"],
		[
			["警", "けい", true],
			["察", "さつ", false]
		], "4997"
	],
	["[仲|なか]", "仲", ["なか"],
		[
			["仲", "なか", false]
		], -1
	],
	["[仲|なか][直|なお]り", "仲直り", ["なかなおり"],
		[
			["仲", "なか", false],
			["直", "なお", false],
			["り", null, false]
		], -1
	],
	["[仲|なか][良|よ]し", "仲良し", ["なかよし"],
		[
			["仲", "なか", false],
			["良", "よ", false],
			["し", null, false]
		], -1
	],
	["[仲|なか][間|ま]", "仲間", ["なかま"],
		[
			["仲", "なか", false],
			["間", "ま", false]
		], -1
	],
	["(訪|ほう)[問|もん]", "訪問", ["ほうもん"],
		[
			["訪", "ほう", true],
			["問", "もん", false]
		], "4999"
	],
	["[栄|えい][養|よう]", "栄養", ["えいよう"],
		[
			["栄", "えい", false],
			["養", "よう", false]
		], -1
	],
	["[区|く](域|いき)", "区域", ["くいき"],
		[
			["区", "く", false],
			["域", "いき", true]
		], "5000"
	],
	["[地|ち](域|いき)", "地域", ["ちいき"],
		[
			["地", "ち", false],
			["域", "いき", true]
		], "5001"
	],
	["[流|りゅう](域|いき)", "流域", ["りゅういき"],
		[
			["流", "りゅう", false],
			["域", "いき", true]
		], "5002"
	],
	["[改|かい][札|さつ]", "改札", ["かいさつ"],
		[
			["改", "かい", false],
			["札", "さつ", false]
		], -1
	],
	["[札|さつ]", "札", ["さつ"],
		[
			["札", "さつ", false]
		], -1
	],
	["[反|はん](映|えい)", "反映", ["はんえい"],
		[
			["反", "はん", false],
			["映", "えい", true]
		], "5003"
	],
	["(担|たん)[当|とう]", "担当", ["たんとう"],
		[
			["担", "たん", true],
			["当", "とう", false]
		], "5007"
	],
	["[借|しゃっ][金|きん]", "借金", ["しゃっきん"],
		[
			["借", "しゃっ", false],
			["金", "きん", false]
		], -1
	],
	["[季|き][節|せつ]", "季節", ["きせつ"],
		[
			["季", "き", false],
			["節", "せつ", false]
		], -1
	],
	["[節|ふし]", "節", ["ふし"],
		[
			["節", "ふし", false]
		], -1
	],
	["[節|せつ][約|やく]", "節約", ["せつやく"],
		[
			["節", "せつ", false],
			["約", "やく", false]
		], -1
	],
	["[調|ちょう][節|せつ]", "調節", ["ちょうせつ"],
		[
			["調", "ちょう", false],
			["節", "せつ", false]
		], -1
	],
	["[包|つつ]み", "包み", ["つつみ"],
		[
			["包", "つつ", false],
			["み", null, false]
		], -1
	],
	["[包|つつ]*む", "包", ["つつ"],
		[
			["包", "つつ", false]
		], -1
	],
	["[包|ほう][帯|たい]", "包帯", ["ほうたい"],
		[
			["包", "ほう", false],
			["帯", "たい", false]
		], -1
	],
	["[小|こ][包|づつみ]", "小包", ["こづつみ"],
		[
			["小", "こ", false],
			["包", "づつみ", false]
		], -1
	],
	["[今|こん](晩|ばん)", "今晩", ["こんばん"],
		[
			["今", "こん", false],
			["晩", "ばん", true]
		], "5125"
	],
	["[毎|まい](晩|ばん)", "毎晩", ["まいばん"],
		[
			["毎", "まい", false],
			["晩", "ばん", true]
		], "5127"
	],
	["[公|こう](衆|しゅう)", "公衆", ["こうしゅう"],
		[
			["公", "こう", false],
			["衆", "しゅう", true]
		], "5014"
	],
	["[折|お]*5", "折", ["お"],
		[
			["折", "お", false]
		], -1
	],
	["[折|お]れ*る", "折れ", ["おれ"],
		[
			["折", "お", false],
			["れ", null, false]
		], -1
	],
	["[折|せっ][角|かく]", "折角", ["せっかく"],
		[
			["折", "せっ", false],
			["角", "かく", false]
		], -1
	],
	["[郡|ぐん]", "郡", ["ぐん"],
		[
			["郡", "ぐん", false]
		], -1
	],
	["[頭|ず](脳|のう)", "頭脳", ["ずのう"],
		[
			["頭", "ず", false],
			["脳", "のう", true]
		], "5016"
	],
	["[焼|や]*く", "焼", ["や"],
		[
			["焼", "や", false]
		], -1
	],
	["[焼|や]け*る", "焼け", ["やけ"],
		[
			["焼", "や", false],
			["け", null, false]
		], -1
	],
	["[質|しつ][問|もん]", "質問", ["しつもん"],
		[
			["質", "しつ", false],
			["問", "もん", false]
		], -1
	],
	["[冷|れい](蔵|ぞう)[庫|こ]", "冷蔵庫", ["れいぞうこ"],
		[
			["冷", "れい", false],
			["蔵", "ぞう", true],
			["庫", "こ", false]
		], "5017"
	],
	["[一|いち](段|だん)と", "一段と", ["いちだんと"],
		[
			["一", "いち", false],
			["段", "だん", true],
			["と", null, false]
		], "5019"
	],
	["[手|しゅ](段|だん)", "手段", ["しゅだん"],
		[
			["手", "しゅ", false],
			["段", "だん", true]
		], "5020"
	],
	["(段|だん)[階|かい]", "段階", ["だんかい"],
		[
			["段", "だん", true],
			["階", "かい", false]
		], "5022"
	],
	["[階|かい](段|だん)", "階段", ["かいだん"],
		[
			["階", "かい", false],
			["段", "だん", true]
		], "5023"
	],
	["[対|たい][照|しょう]", "対照", ["たいしょう"],
		[
			["対", "たい", false],
			["照", "しょう", false]
		], -1
	],
	["[照|て]ら*す", "照ら", ["てら"],
		[
			["照", "て", false],
			["ら", null, false]
		], -1
	],
	["[照|て]*5", "照", ["て"],
		[
			["照", "て", false]
		], -1
	],
	["(呼|よ)び[出|だ]*す", "呼び出", ["よびだ"],
		[
			["呼", "よ", true],
			["び", null, false],
			["出", "だ", false]
		], "5027"
	],
	["(講|こう)[堂|どう]", "講堂", ["こうどう"],
		[
			["講", "こう", true],
			["堂", "どう", false]
		], "4609"
	],
	["[方|ほう](針|しん)", "方針", ["ほうしん"],
		[
			["方", "ほう", false],
			["針", "しん", true]
		], "5032"
	],
	["(針|はり)[金|がね]", "針金", ["はりがね"],
		[
			["針", "はり", true],
			["金", "がね", false]
		], "5034"
	],
	["[飯|めし]", "飯", ["めし"],
		[
			["飯", "めし", false]
		], -1
	],
	["(専|せん)[門|もん]", "専門", ["せんもん"],
		[
			["専", "せん", true],
			["門", "もん", false]
		], "5037"
	],
	["(推|すい)[定|てい]", "推定", ["すいてい"],
		[
			["推", "すい", true],
			["定", "てい", false]
		], "5040"
	],
	["[典|てん][型|けい]", "典型", ["てんけい"],
		[
			["典", "てん", false],
			["型", "けい", false]
		], -1
	],
	["[古|こ][典|てん]", "古典", ["こてん"],
		[
			["古", "こ", false],
			["典", "てん", false]
		], -1
	],
	["[辞|じ][典|てん]", "辞典", ["じてん"],
		[
			["辞", "じ", false],
			["典", "てん", false]
		], -1
	],
	["[漁|ぎょ][業|ぎょう]", "漁業", ["ぎょぎょう"],
		[
			["漁", "ぎょ", false],
			["業", "ぎょう", false]
		], -1
	],
	["[漁|りょう](師|し)", "漁師", ["りょうし"],
		[
			["漁", "りょう", false],
			["師", "し", true]
		], "4563"
	],
	["[貯|ちょ][金|きん]", "貯金", ["ちょきん"],
		[
			["貯", "ちょ", false],
			["金", "きん", false]
		], -1
	],
	["(処|しょ)[理|り]", "処理", ["しょり"],
		[
			["処", "しょ", true],
			["理", "り", false]
		], "5059"
	],
	["(憲|けん)[法|ぽう]", "憲法", ["けんぽう"],
		[
			["憲", "けん", true],
			["法", "ぽう", false]
		], "5061"
	],
	["[倉|そう][庫|こ]", "倉庫", ["そうこ"],
		[
			["倉", "そう", false],
			["庫", "こ", false]
		], -1
	],
	["[急|きゅう](激|げき)", "急激", ["きゅうげき"],
		[
			["急", "きゅう", false],
			["激", "げき", true]
		], "5065"
	],
	["[感|かん](激|げき)", "感激", ["かんげき"],
		[
			["感", "かん", false],
			["激", "げき", true]
		], "5066"
	],
	["(否|ひ)[定|てい]", "否定", ["ひてい"],
		[
			["否", "ひ", true],
			["定", "てい", false]
		], "5072"
	],
	["[訓|くん]", "訓", ["くん"],
		[
			["訓", "くん", false]
		], -1
	],
	["[訓|くん][練|れん]", "訓練", ["くんれん"],
		[
			["訓", "くん", false],
			["練", "れん", false]
		], -1
	],
	["[体|たい](系|けい)", "体系", ["たいけい"],
		[
			["体", "たい", false],
			["系", "けい", true]
		], "5073"
	],
	["[浴|あ]び*る", "浴び", ["あび"],
		[
			["浴", "あ", false],
			["び", null, false]
		], -1
	],
	["[海|かい][水|すい][浴|よく]", "海水浴", ["かいすいよく"],
		[
			["海", "かい", false],
			["水", "すい", false],
			["浴", "よく", false]
		], -1
	],
	["[生|せい](存|ぞん)", "生存", ["せいぞん"],
		[
			["生", "せい", false],
			["存", "ぞん", true]
		], "5081"
	],
	["[塩|しお]", "塩", ["しお"],
		[
			["塩", "しお", false]
		], -1
	],
	["[食|しょく][塩|えん]", "食塩", ["しょくえん"],
		[
			["食", "しょく", false],
			["塩", "えん", false]
		], -1
	],
	["{～}[兆|ちょう]", "～兆", ["ちょう"],
		[
			["～", null, false],
			["兆", "ちょう", false]
		], -1
	],
	["(座|ざ)[席|せき]", "座席", ["ざせき"],
		[
			["座", "ざ", true],
			["席", "せき", false]
		], "5083"
	],
	["[祝|いわ]い", "祝い", ["いわい"],
		[
			["祝", "いわ", false],
			["い", null, false]
		], -1
	],
	["[祝|いわ]*う", "祝", ["いわ"],
		[
			["祝", "いわ", false]
		], -1
	],
	["[祝|しゅく][日|じつ]", "祝日", ["しゅくじつ"],
		[
			["祝", "しゅく", false],
			["日", "じつ", false]
		], -1
	],
	["[下|か](降|こう)", "下降", ["かこう"],
		[
			["下", "か", false],
			["降", "こう", true]
		], "5089"
	],
	["[以|い](降|こう)", "以降", ["いこう"],
		[
			["以", "い", false],
			["降", "こう", true]
		], "5090"
	],
	["[旗|はた]", "旗", ["はた"],
		[
			["旗", "はた", false]
		], -1
	],
	["(並|なみ)[木|き]", "並木", ["なみき"],
		[
			["並", "なみ", true],
			["木", "き", false]
		], "5097"
	],
	["(並|へい)[行|こう]", "並行", ["へいこう"],
		[
			["並", "へい", true],
			["行", "こう", false]
		], "5098"
	],
	["綿", "綿", ["めん", "わた"],
		[], null
	],
	["[浴衣|ゆかた]", "浴衣", ["ゆかた"],
		[
			["浴衣", "ゆかた", false]
		], -1
	],
	["[衣|い][服|ふく]", "衣服", ["いふく"],
		[
			["衣", "い", false],
			["服", "ふく", false]
		], -1
	],
	["[衣|い][食|しょく][住|じゅう]", "衣食住", ["いしょくじゅう"],
		[
			["衣", "い", false],
			["食", "しょく", false],
			["住", "じゅう", false]
		], -1
	],
	["[梅|うめ]", "梅", ["うめ"],
		[
			["梅", "うめ", false]
		], -1
	],
	["(拡|かく)[大|だい]", "拡大", ["かくだい"],
		[
			["拡", "かく", true],
			["大", "だい", false]
		], "5105"
	],
	["[大|だい][臣|じん]", "大臣", ["だいじん"],
		[
			["大", "だい", false],
			["臣", "じん", false]
		], -1
	],
	["(総|そう)[理|り][大|だい][臣|じん]", "総理大臣", ["そうりだいじん"],
		[
			["総", "そう", true],
			["理", "り", false],
			["大", "だい", false],
			["臣", "じん", false]
		], "4132"
	],
	["[浅|あさ]い", "浅い", ["あさい"],
		[
			["浅", "あさ", false],
			["い", null, false]
		], -1
	],
	["(将|しょう)[来|らい]", "将来", ["しょうらい"],
		[
			["将", "しょう", true],
			["来", "らい", false]
		], "5113"
	],
	["[勇|いさ]ましい", "勇ましい", ["いさましい"],
		[
			["勇", "いさ", false],
			["ま", null, false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[勇|ゆう][気|き]", "勇気", ["ゆうき"],
		[
			["勇", "ゆう", false],
			["気", "き", false]
		], -1
	],
	["(厳|げん)[重|じゅう]", "厳重", ["げんじゅう"],
		[
			["厳", "げん", true],
			["重", "じゅう", false]
		], "5115"
	],
	["[器|き][械|かい]", "器械", ["きかい"],
		[
			["器", "き", false],
			["械", "かい", false]
		], -1
	],
	["[機|き][械|かい]", "機械", ["きかい"],
		[
			["機", "き", false],
			["械", "かい", false]
		], -1
	],
	["(装|そう)[置|ち]", "装置", ["そうち"],
		[
			["装", "そう", true],
			["置", "ち", false]
		], "5118"
	],
	["[服|ふく](装|そう)", "服装", ["ふくそう"],
		[
			["服", "ふく", false],
			["装", "そう", true]
		], "5119"
	],
	["[刷|す]*5", "刷", ["す"],
		[
			["刷", "す", false]
		], -1
	],
	["[印|いん][刷|さつ]", "印刷", ["いんさつ"],
		[
			["印", "いん", false],
			["刷", "さつ", false]
		], -1
	],
	["[死|し](亡|ぼう)", "死亡", ["しぼう"],
		[
			["死", "し", false],
			["亡", "ぼう", true]
		], "5124"
	],
	["[牧|ぼく][場|じょう]", "牧場", ["ぼくじょう"],
		[
			["牧", "ぼく", false],
			["場", "じょう", false]
		], -1
	],
	["(劇|げき)[場|じょう]", "劇場", ["げきじょう"],
		[
			["劇", "げき", true],
			["場", "じょう", false]
		], "5132"
	],
	["[泣|な]*く", "泣", ["な"],
		[
			["泣", "な", false]
		], -1
	],
	["(宣|せん)[伝|でん]", "宣伝", ["せんでん"],
		[
			["宣", "せん", true],
			["伝", "でん", false]
		], "5136"
	],
	["[子|し][孫|そん]", "子孫", ["しそん"],
		[
			["子", "し", false],
			["孫", "そん", false]
		], -1
	],
	["[孫|まご]", "孫", ["まご"],
		[
			["孫", "まご", false]
		], -1
	],
	["(背|せ)[中|なか]", "背中", ["せなか"],
		[
			["背", "せ", true],
			["中", "なか", false]
		], "5137"
	],
	["(背|せ)[広|びろ]", "背広", ["せびろ"],
		[
			["背", "せ", true],
			["広", "びろ", false]
		], "5138"
	],
	["[毒|どく]", "毒", ["どく"],
		[
			["毒", "どく", false]
		], -1
	],
	["[気|き]の[毒|どく]", "気の毒", ["きのどく"],
		[
			["気", "き", false],
			["の", null, false],
			["毒", "どく", false]
		], -1
	],
	["[消|しょう][毒|どく]", "消毒", ["しょうどく"],
		[
			["消", "しょう", false],
			["毒", "どく", false]
		], -1
	],
	["[半|はん][径|けい]", "半径", ["はんけい"],
		[
			["半", "はん", false],
			["径", "けい", false]
		], -1
	],
	["[直|ちょっ][径|けい]", "直径", ["ちょっけい"],
		[
			["直", "ちょっ", false],
			["径", "けい", false]
		], -1
	],
	["[天|てん](皇|のう)", "天皇", ["てんのう"],
		[
			["天", "てん", false],
			["皇", "のう", true]
		], "5148"
	],
	["私", "私", ["わたくし", "わたし"],
		[], null
	],
	["(臨|りん)[時|じ]", "臨時", ["りんじ"],
		[
			["臨", "りん", true],
			["時", "じ", false]
		], "5150"
	],
	["[文|ぶん][脈|みゃく]", "文脈", ["ぶんみゃく"],
		[
			["文", "ぶん", false],
			["脈", "みゃく", false]
		], -1
	],
	["[消|しょう](防|ぼう)(署|しょ)", "消防署", ["しょうぼうしょ"],
		[
			["消", "しょう", false],
			["防", "ぼう", true],
			["署", "しょ", true]
		], "4369"
	],
	["(署|しょ)[名|めい]", "署名", ["しょめい"],
		[
			["署", "しょ", true],
			["名", "めい", false]
		], "5152"
	],
	["[粉|こな]", "粉", ["こな"],
		[
			["粉", "こな", false]
		], -1
	],
	["[望|ぼう][遠|えん][鏡|きょう]", "望遠鏡", ["ぼうえんきょう"],
		[
			["望", "ぼう", false],
			["遠", "えん", false],
			["鏡", "きょう", false]
		], -1
	],
	["[鏡|かがみ]", "鏡", ["かがみ"],
		[
			["鏡", "かがみ", false]
		], -1
	],
	["(創|そう)[作|さく]", "創作", ["そうさく"],
		[
			["創", "そう", true],
			["作", "さく", false]
		], "5155"
	],
	["(障|しょう)[子|じ]", "障子", ["しょうじ"],
		[
			["障", "しょう", true],
			["子", "じ", false]
		], "5158"
	],
	["(障|しょう)[害|がい]", "障害", ["しょうがい"],
		[
			["障", "しょう", true],
			["害", "がい", false]
		], "5159"
	],
	["[巣|す]", "巣", ["す"],
		[
			["巣", "す", false]
		], -1
	],
	["(筋|きん)[肉|にく]", "筋肉", ["きんにく"],
		[
			["筋", "きん", true],
			["肉", "にく", false]
		], "5163"
	],
	["[灯|ひ]", "灯", ["ひ"],
		[
			["灯", "ひ", false]
		], -1
	],
	["[灯|とう][台|だい]", "灯台", ["とうだい"],
		[
			["灯", "とう", false],
			["台", "だい", false]
		], -1
	],
	["[灯|とう][油|ゆ]", "灯油", ["とうゆ"],
		[
			["灯", "とう", false],
			["油", "ゆ", false]
		], -1
	],
	["[電|でん][灯|とう]", "電灯", ["でんとう"],
		[
			["電", "でん", false],
			["灯", "とう", false]
		], -1
	],
	["[子|こ](供|ども)", "子供", ["こども"],
		[
			["子", "こ", false],
			["供", "ども", true]
		], -1
	],
	["(延|えん)[期|き]", "延期", ["えんき"],
		[
			["延", "えん", true],
			["期", "き", false]
		], "5167"
	],
	["(延|えん)[長|ちょう]", "延長", ["えんちょう"],
		[
			["延", "えん", true],
			["長", "ちょう", false]
		], "5168"
	],
	["[胃|い]", "胃", ["い"],
		[
			["胃", "い", false]
		], -1
	],
	["[改|かい](善|ぜん)", "改善", ["かいぜん"],
		[
			["改", "かい", false],
			["善", "ぜん", true]
		], "5172"
	],
	["[芽|め]", "芽", ["め"],
		[
			["芽", "め", false]
		], -1
	],
	["[官|かん](庁|ちょう)", "官庁", ["かんちょう"],
		[
			["官", "かん", false],
			["庁", "ちょう", true]
		], "5175"
	],
	["[県|けん](庁|ちょう)", "県庁", ["けんちょう"],
		[
			["県", "けん", false],
			["庁", "ちょう", true]
		], "5176"
	],
	["[政|せい][治|じ]", "政治", ["せいじ"],
		[
			["政", "せい", false],
			["治", "じ", false]
		], -1
	],
	["[政|せい][府|ふ]", "政府", ["せいふ"],
		[
			["政", "せい", false],
			["府", "ふ", false]
		], -1
	],
	["[政|せい](党|とう)", "政党", ["せいとう"],
		[
			["政", "せい", false],
			["党", "とう", true]
		], "4915"
	],
	["[一|いっ](層|そう)", "一層", ["いっそう"],
		[
			["一", "いっ", false],
			["層", "そう", true]
		], "5178"
	],
	["[大|たい](層|そう)", "大層", ["たいそう"],
		[
			["大", "たい", false],
			["層", "そう", true]
		], "5179"
	],
	["[高|こう](層|そう)", "高層", ["こうそう"],
		[
			["高", "こう", false],
			["層", "そう", true]
		], "5180"
	],
	["(裏|うら)[切|ぎ]*5", "裏切", ["うらぎ"],
		[
			["裏", "うら", true],
			["切", "ぎ", false]
		], "5182"
	],
	["(裏|うら)[口|ぐち]", "裏口", ["うらぐち"],
		[
			["裏", "うら", true],
			["口", "ぐち", false]
		], "5183"
	],
	["(裏|うら)[返|がえ]*す", "裏返", ["うらがえ"],
		[
			["裏", "うら", true],
			["返", "がえ", false]
		], "5184"
	],
	["[経|た]*つ", "経", ["た"],
		[
			["経", "た", false]
		], -1
	],
	["[経|けい][度|ど]", "経度", ["けいど"],
		[
			["経", "けい", false],
			["度", "ど", false]
		], -1
	],
	["[経|けい][由|ゆ]", "経由", ["けいゆ"],
		[
			["経", "けい", false],
			["由", "ゆ", false]
		], -1
	],
	["[神|しん][経|けい]", "神経", ["しんけい"],
		[
			["神", "しん", false],
			["経", "けい", false]
		], -1
	],
	["[経|けい][験|けん]", "経験", ["けいけん"],
		[
			["経", "けい", false],
			["験", "けん", false]
		], -1
	],
	["[経|けい](営|えい)", "経営", ["けいえい"],
		[
			["経", "けい", false],
			["営", "えい", true]
		], "4340"
	],
	["[経|けい](済|ざい)", "経済", ["けいざい"],
		[
			["経", "けい", false],
			["済", "ざい", true]
		], "4924"
	],
	["[実|じつ][現|げん]", "実現", ["じつげん"],
		[
			["実", "じつ", false],
			["現", "げん", false]
		], -1
	],
	["[現|げん]{～}", "現～", ["げん"],
		[
			["現", "げん", false],
			["～", null, false]
		], -1
	],
	["[現|あらわ]*す", "現", ["あらわ"],
		[
			["現", "あらわ", false]
		], -1
	],
	["[現|げん]に", "現に", ["げんに"],
		[
			["現", "げん", false],
			["に", null, false]
		], -1
	],
	["[現|あらわ]れ", "現れ", ["あらわれ"],
		[
			["現", "あらわ", false],
			["れ", null, false]
		], -1
	],
	["[現|あらわ]れ*る", "現れ", ["あらわれ"],
		[
			["現", "あらわ", false],
			["れ", null, false]
		], -1
	],
	["[現|げん][代|だい]", "現代", ["げんだい"],
		[
			["現", "げん", false],
			["代", "だい", false]
		], -1
	],
	["[現|げん][場|ば]", "現場", ["げんば"],
		[
			["現", "げん", false],
			["場", "ば", false]
		], -1
	],
	["[現|げん][実|じつ]", "現実", ["げんじつ"],
		[
			["現", "げん", false],
			["実", "じつ", false]
		], -1
	],
	["[現|げん][金|きん]", "現金", ["げんきん"],
		[
			["現", "げん", false],
			["金", "きん", false]
		], -1
	],
	["[表|ひょう][現|げん]", "表現", ["ひょうげん"],
		[
			["表", "ひょう", false],
			["現", "げん", false]
		], -1
	],
	["[現|げん][象|しょう]", "現象", ["げんしょう"],
		[
			["現", "げん", false],
			["象", "しょう", false]
		], -1
	],
	["[現|げん](在|ざい)", "現在", ["げんざい"],
		[
			["現", "げん", false],
			["在", "ざい", true]
		], "4193"
	],
	["[現|げん](状|じょう)", "現状", ["げんじょう"],
		[
			["現", "げん", false],
			["状", "じょう", true]
		], "4337"
	],
	["{～}[性|せい]", "～性", ["せい"],
		[
			["～", null, false],
			["性", "せい", false]
		], -1
	],
	["[中|ちゅう][性|せい]", "中性", ["ちゅうせい"],
		[
			["中", "ちゅう", false],
			["性", "せい", false]
		], -1
	],
	["[性|せい]", "性", ["せい"],
		[
			["性", "せい", false]
		], -1
	],
	["[女|じょ][性|せい]", "女性", ["じょせい"],
		[
			["女", "じょ", false],
			["性", "せい", false]
		], -1
	],
	["[性|せい][別|べつ]", "性別", ["せいべつ"],
		[
			["性", "せい", false],
			["別", "べつ", false]
		], -1
	],
	["[男|だん][性|せい]", "男性", ["だんせい"],
		[
			["男", "だん", false],
			["性", "せい", false]
		], -1
	],
	["[性|せい](能|のう)", "性能", ["せいのう"],
		[
			["性", "せい", false],
			["能", "のう", true]
		], "4286"
	],
	["[性|せい](格|かく)", "性格", ["せいかく"],
		[
			["性", "せい", false],
			["格", "かく", true]
		], "4309"
	],
	["[性|せい](質|しつ)", "性質", ["せいしつ"],
		[
			["性", "せい", false],
			["質", "しつ", true]
		], "4432"
	],
	["(酸|さん)[性|せい]", "酸性", ["さんせい"],
		[
			["酸", "さん", true],
			["性", "せい", false]
		], "4869"
	],
	["[出|しゅっ](勤|きん)", "出勤", ["しゅっきん"],
		[
			["出", "しゅっ", false],
			["勤", "きん", true]
		], "5190"
	],
	["[通|つう](勤|きん)", "通勤", ["つうきん"],
		[
			["通", "つう", false],
			["勤", "きん", true]
		], "5193"
	],
	["[体|たい][制|せい]", "体制", ["たいせい"],
		[
			["体", "たい", false],
			["制", "せい", false]
		], -1
	],
	["[制|せい][作|さく]", "制作", ["せいさく"],
		[
			["制", "せい", false],
			["作", "さく", false]
		], -1
	],
	["[制|せい][度|ど]", "制度", ["せいど"],
		[
			["制", "せい", false],
			["度", "ど", false]
		], -1
	],
	["[制|せい](限|げん)", "制限", ["せいげん"],
		[
			["制", "せい", false],
			["限", "げん", true]
		], "4450"
	],
	["(専|せん)[制|せい]", "専制", ["せんせい"],
		[
			["専", "せん", true],
			["制", "せい", false]
		], "5036"
	],
	["[伝|でん](染|せん)", "伝染", ["でんせん"],
		[
			["伝", "でん", false],
			["染", "せん", true]
		], "5196"
	],
	["[事|じ][務|む]", "事務", ["じむ"],
		[
			["事", "じ", false],
			["務", "む", false]
		], -1
	],
	["[務|つと]め", "務め", ["つとめ"],
		[
			["務", "つと", false],
			["め", null, false]
		], -1
	],
	["[務|つと]め*る", "務め", ["つとめ"],
		[
			["務", "つと", false],
			["め", null, false]
		], -1
	],
	["[公|こう][務|む]", "公務", ["こうむ"],
		[
			["公", "こう", false],
			["務", "む", false]
		], -1
	],
	["(義|ぎ)[務|む]", "義務", ["ぎむ"],
		[
			["義", "ぎ", true],
			["務", "む", false]
		], "4462"
	],
	["[統|とう][一|いつ]", "統一", ["とういつ"],
		[
			["統", "とう", false],
			["一", "いつ", false]
		], -1
	],
	["[統|とう][計|けい]", "統計", ["とうけい"],
		[
			["統", "とう", false],
			["計", "けい", false]
		], -1
	],
	["[伝|でん][統|とう]", "伝統", ["でんとう"],
		[
			["伝", "でん", false],
			["統", "とう", false]
		], -1
	],
	["[大|だい][統|とう](領|りょう)", "大統領", ["だいとうりょう"],
		[
			["大", "だい", false],
			["統", "とう", false],
			["領", "りょう", true]
		], "4134"
	],
	["(著|ちょ)[者|しゃ]", "著者", ["ちょしゃ"],
		[
			["著", "ちょ", true],
			["者", "しゃ", false]
		], "5202"
	],
	["[総|そう]{～}", "総～", ["そう"],
		[
			["総", "そう", false],
			["～", null, false]
		], -1
	],
	["[総|そう][理|り][大|だい][臣|じん]", "総理大臣", ["そうりだいじん"],
		[
			["総", "そう", false],
			["理", "り", false],
			["大", "だい", false],
			["臣", "じん", false]
		], -1
	],
	["{～}[領|りょう]", "～領", ["りょう"],
		[
			["～", null, false],
			["領", "りょう", false]
		], -1
	],
	["[大|だい][統|とう][領|りょう]", "大統領", ["だいとうりょう"],
		[
			["大", "だい", false],
			["統", "とう", false],
			["領", "りょう", false]
		], -1
	],
	["[要|よう][領|りょう]", "要領", ["ようりょう"],
		[
			["要", "よう", false],
			["領", "りょう", false]
		], -1
	],
	["[領|りょう][事|じ]", "領事", ["りょうじ"],
		[
			["領", "りょう", false],
			["事", "じ", false]
		], -1
	],
	["[領|りょう](収|しゅう)", "領収", ["りょうしゅう"],
		[
			["領", "りょう", false],
			["収", "しゅう", true]
		], "4976"
	],
	["[設|せっ][計|けい]", "設計", ["せっけい"],
		[
			["設", "せっ", false],
			["計", "けい", false]
		], -1
	],
	["[建|けん][設|せつ]", "建設", ["けんせつ"],
		[
			["建", "けん", false],
			["設", "せつ", false]
		], -1
	],
	["[設|せつ](備|び)", "設備", ["せつび"],
		[
			["設", "せつ", false],
			["備", "び", true]
		], "4404"
	],
	["[時|じ](刻|こく)", "時刻", ["じこく"],
		[
			["時", "じ", false],
			["刻", "こく", true]
		], "5208"
	],
	["[深|しん](刻|こく)", "深刻", ["しんこく"],
		[
			["深", "しん", false],
			["刻", "こく", true]
		], "5209"
	],
	["[保|ほ][健|けん]", "保健", ["ほけん"],
		[
			["保", "ほ", false],
			["健", "けん", false]
		], -1
	],
	["[保|ほ](証|しょう)", "保証", ["ほしょう"],
		[
			["保", "ほ", false],
			["証", "しょう", true]
		], "4346"
	],
	["[保|ほ](存|ぞん)", "保存", ["ほぞん"],
		[
			["保", "ほ", false],
			["存", "ぞん", true]
		], "5077"
	],
	["[食|しょく](欲|よく)", "食欲", ["しょくよく"],
		[
			["食", "しょく", false],
			["欲", "よく", true]
		], "5215"
	],
	["[支|ささ]え*る", "支え", ["ささえ"],
		[
			["支", "ささ", false],
			["え", null, false]
		], -1
	],
	["[支|し][出|しゅつ]", "支出", ["ししゅつ"],
		[
			["支", "し", false],
			["出", "しゅつ", false]
		], -1
	],
	["[支|し][度|たく]", "支度", ["したく"],
		[
			["支", "し", false],
			["度", "たく", false]
		], -1
	],
	["[支|し][配|はい]", "支配", ["しはい"],
		[
			["支", "し", false],
			["配", "はい", false]
		], -1
	],
	["[支|し][店|てん]", "支店", ["してん"],
		[
			["支", "し", false],
			["店", "てん", false]
		], -1
	],
	["[差|さ]し[支|つか]え", "差し支え", ["さしつかえ"],
		[
			["差", "さ", false],
			["し", null, false],
			["支", "つか", false],
			["え", null, false]
		], -1
	],
	["[支|し][給|きゅう]", "支給", ["しきゅう"],
		[
			["支", "し", false],
			["給", "きゅう", false]
		], -1
	],
	["[頭|ず](痛|つう)", "頭痛", ["ずつう"],
		[
			["頭", "ず", false],
			["痛", "つう", true]
		], "5219"
	],
	["[予|よ][報|ほう]", "予報", ["よほう"],
		[
			["予", "よ", false],
			["報", "ほう", false]
		], -1
	],
	["[報|ほう][告|こく]", "報告", ["ほうこく"],
		[
			["報", "ほう", false],
			["告", "こく", false]
		], -1
	],
	["[電|でん][報|ぽう]", "電報", ["でんぽう"],
		[
			["電", "でん", false],
			["報", "ぽう", false]
		], -1
	],
	["(情|じょう)[報|ほう]", "情報", ["じょうほう"],
		[
			["情", "じょう", true],
			["報", "ほう", false]
		], "4219"
	],
	["(縮|しゅく)[小|しょう]", "縮小", ["しゅくしょう"],
		[
			["縮", "しゅく", true],
			["小", "しょう", false]
		], "5228"
	],
	["(枚|まい)[数|すう]", "枚数", ["まいすう"],
		[
			["枚", "まい", true],
			["数", "すう", false]
		], "5230"
	],
	["[分|ぶん][解|かい]", "分解", ["ぶんかい"],
		[
			["分", "ぶん", false],
			["解", "かい", false]
		], -1
	],
	["[理|り][解|かい]", "理解", ["りかい"],
		[
			["理", "り", false],
			["解", "かい", false]
		], -1
	],
	["[見|けん][解|かい]", "見解", ["けんかい"],
		[
			["見", "けん", false],
			["解", "かい", false]
		], -1
	],
	["[解|と]*く", "解", ["と"],
		[
			["解", "と", false]
		], -1
	],
	["[解|と]け*る", "解け", ["とけ"],
		[
			["解", "と", false],
			["け", null, false]
		], -1
	],
	["[解|かい][決|けつ]", "解決", ["かいけつ"],
		[
			["解", "かい", false],
			["決", "けつ", false]
		], -1
	],
	["[解|かい][放|ほう]", "解放", ["かいほう"],
		[
			["解", "かい", false],
			["放", "ほう", false]
		], -1
	],
	["[解|かい][説|せつ]", "解説", ["かいせつ"],
		[
			["解", "かい", false],
			["説", "せつ", false]
		], -1
	],
	["[解|かい][答|とう]", "解答", ["かいとう"],
		[
			["解", "かい", false],
			["答", "とう", false]
		], -1
	],
	["[解|かい][散|さん]", "解散", ["かいさん"],
		[
			["解", "かい", false],
			["散", "さん", false]
		], -1
	],
	["(郵|ゆう)[便|びん]", "郵便", ["ゆうびん"],
		[
			["郵", "ゆう", true],
			["便", "びん", false]
		], "5231"
	],
	["(郵|ゆう)[送|そう]", "郵送", ["ゆうそう"],
		[
			["郵", "ゆう", true],
			["送", "そう", false]
		], "5232"
	],
	["[資|し][本|ほん]", "資本", ["しほん"],
		[
			["資", "し", false],
			["本", "ほん", false]
		], -1
	],
	["[資|し][料|りょう]", "資料", ["しりょう"],
		[
			["資", "し", false],
			["料", "りょう", false]
		], -1
	],
	["[資|し](源|げん)", "資源", ["しげん"],
		[
			["資", "し", false],
			["源", "げん", true]
		], "5154"
	],
	["[交|こう][際|さい]", "交際", ["こうさい"],
		[
			["交", "こう", false],
			["際", "さい", false]
		], -1
	],
	["[国|こく][際|さい]", "国際", ["こくさい"],
		[
			["国", "こく", false],
			["際", "さい", false]
		], -1
	],
	["[実|じっ][際|さい]", "実際", ["じっさい"],
		[
			["実", "じっ", false],
			["際", "さい", false]
		], -1
	],
	["[際|さい]", "際", ["さい"],
		[
			["際", "さい", false]
		], -1
	],
	["(骨|こっ)[折|せつ]", "骨折", ["こっせつ"],
		[
			["骨", "こっ", true],
			["折", "せつ", false]
		], "5238"
	],
	["[注|ちゅう](射|しゃ)", "注射", ["ちゅうしゃ"],
		[
			["注", "ちゅう", false],
			["射", "しゃ", true]
		], "5240"
	],
	["[発|はっ](射|しゃ)", "発射", ["はっしゃ"],
		[
			["発", "はっ", false],
			["射", "しゃ", true]
		], "5241"
	],
	["[調|ちょう][査|さ]", "調査", ["ちょうさ"],
		[
			["調", "ちょう", false],
			["査", "さ", false]
		], -1
	],
	["(検|けん)[査|さ]", "検査", ["けんさ"],
		[
			["検", "けん", true],
			["査", "さ", false]
		], "4329"
	],
	["[判|はん][事|じ]", "判事", ["はんじ"],
		[
			["判", "はん", false],
			["事", "じ", false]
		], -1
	],
	["[判|はん][子|こ]", "判子", ["はんこ"],
		[
			["判", "はん", false],
			["子", "こ", false]
		], -1
	],
	["[判|はん](断|だん)", "判断", ["はんだん"],
		[
			["判", "はん", false],
			["断", "だん", true]
		], "4371"
	],
	["(評|ひょう)[判|ばん]", "評判", ["ひょうばん"],
		[
			["評", "ひょう", true],
			["判", "ばん", false]
		], "4508"
	],
	["(裁|さい)[判|ばん]", "裁判", ["さいばん"],
		[
			["裁", "さい", true],
			["判", "ばん", false]
		], "4950"
	],
	["(批|ひ)[判|はん]", "批判", ["ひはん"],
		[
			["批", "ひ", true],
			["判", "はん", false]
		], "5075"
	],
	["[在|あ]*5", "在", ["あ"],
		[
			["在", "あ", false]
		], -1
	],
	["[在|ざい][学|がく]", "在学", ["ざいがく"],
		[
			["在", "ざい", false],
			["学", "がく", false]
		], -1
	],
	["[現|げん][在|ざい]", "現在", ["げんざい"],
		[
			["現", "げん", false],
			["在", "ざい", false]
		], -1
	],
	["(存|そん)[在|ざい]", "存在", ["そんざい"],
		[
			["存", "そん", true],
			["在", "ざい", false]
		], "5080"
	],
	["[発|はっ](揮|き)", "発揮", ["はっき"],
		[
			["発", "はっ", false],
			["揮", "き", true]
		], "5252"
	],
	["(閉|へい)[会|かい]", "閉会", ["へいかい"],
		[
			["閉", "へい", true],
			["会", "かい", false]
		], "5255"
	],
	["[事|じ][件|けん]", "事件", ["じけん"],
		[
			["事", "じ", false],
			["件", "けん", false]
		], -1
	],
	["(条|じょう)[件|けん]", "条件", ["じょうけん"],
		[
			["条", "じょう", true],
			["件", "けん", false]
		], "4408"
	],
	["[家|や](賃|ちん)", "家賃", ["やちん"],
		[
			["家", "や", false],
			["賃", "ちん", true]
		], "5256"
	],
	["{～}[団|だん]", "～団", ["だん"],
		[
			["～", null, false],
			["団", "だん", false]
		], -1
	],
	["[団|だん][体|たい]", "団体", ["だんたい"],
		[
			["団", "だん", false],
			["体", "たい", false]
		], -1
	],
	["[団|だん][地|ち]", "団地", ["だんち"],
		[
			["団", "だん", false],
			["地", "ち", false]
		], -1
	],
	["[集|しゅう][団|だん]", "集団", ["しゅうだん"],
		[
			["集", "しゅう", false],
			["団", "だん", false]
		], -1
	],
	["(布|ふ)[団|とん]", "布団", ["ふとん"],
		[
			["布", "ふ", true],
			["団", "とん", false]
		], "4788"
	],
	["(座|ざ)(布|ぶ)[団|とん]", "座布団", ["ざぶとん"],
		[
			["座", "ざ", true],
			["布", "ぶ", true],
			["団", "とん", false]
		], "4791"
	],
	["(貴|き)[重|ちょう]", "貴重", ["きちょう"],
		[
			["貴", "き", true],
			["重", "ちょう", false]
		], "5257"
	],
	["[任|まか]せ*る", "任せ", ["まかせ"],
		[
			["任", "まか", false],
			["せ", null, false]
		], -1
	],
	["(責|せき)[任|にん]", "責任", ["せきにん"],
		[
			["責", "せき", true],
			["任", "にん", false]
		], "4585"
	],
	["(就|しゅう)[任|にん]", "就任", ["しゅうにん"],
		[
			["就", "しゅう", true],
			["任", "にん", false]
		], "5109"
	],
	["(簡|かん)[単|たん]", "簡単", ["かんたん"],
		[
			["簡", "かん", true],
			["単", "たん", false]
		], "5262"
	],
	["[増|ふ]え*る", "増え", ["ふえ"],
		[
			["増", "ふ", false],
			["え", null, false]
		], -1
	],
	["[増|ま]*す", "増", ["ま"],
		[
			["増", "ま", false]
		], -1
	],
	["[増|ふ]や*す", "増や", ["ふや"],
		[
			["増", "ふ", false],
			["や", null, false]
		], -1
	],
	["[増|ぞう][加|か]", "増加", ["ぞうか"],
		[
			["増", "ぞう", false],
			["加", "か", false]
		], -1
	],
	["[増|ぞう][大|だい]", "増大", ["ぞうだい"],
		[
			["増", "ぞう", false],
			["大", "だい", false]
		], -1
	],
	["[増|ぞう](減|げん)", "増減", ["ぞうげん"],
		[
			["増", "ぞう", false],
			["減", "げん", true]
		], "4260"
	],
	["(納|なっ)[得|とく]", "納得", ["なっとく"],
		[
			["納", "なっ", true],
			["得", "とく", false]
		], "5264"
	],
	["[事|じ][情|じょう]", "事情", ["じじょう"],
		[
			["事", "じ", false],
			["情", "じょう", false]
		], -1
	],
	["[情|じょう][報|ほう]", "情報", ["じょうほう"],
		[
			["情", "じょう", false],
			["報", "ほう", false]
		], -1
	],
	["[感|かん][情|じょう]", "感情", ["かんじょう"],
		[
			["感", "かん", false],
			["情", "じょう", false]
		], -1
	],
	["[表|ひょう][情|じょう]", "表情", ["ひょうじょう"],
		[
			["表", "ひょう", false],
			["情", "じょう", false]
		], -1
	],
	["[友|ゆう][情|じょう]", "友情", ["ゆうじょう"],
		[
			["友", "ゆう", false],
			["情", "じょう", false]
		], -1
	],
	["[苦|く][情|じょう]", "苦情", ["くじょう"],
		[
			["苦", "く", false],
			["情", "じょう", false]
		], -1
	],
	["[愛|あい][情|じょう]", "愛情", ["あいじょう"],
		[
			["愛", "あい", false],
			["情", "じょう", false]
		], -1
	],
	["[示|しめ]*す", "示", ["しめ"],
		[
			["示", "しめ", false]
		], -1
	],
	["[心|しん](臓|ぞう)", "心臓", ["しんぞう"],
		[
			["心", "しん", false],
			["臓", "ぞう", true]
		], "5266"
	],
	["[法|ほう](律|りつ)", "法律", ["ほうりつ"],
		[
			["法", "ほう", false],
			["律", "りつ", true]
		], "5267"
	],
	["[基|もと]", "基", ["もと"],
		[
			["基", "もと", false]
		], -1
	],
	["[基|もと]づ*く", "基づ", ["もとづ"],
		[
			["基", "もと", false],
			["づ", null, false]
		], -1
	],
	["[基|き][地|ち]", "基地", ["きち"],
		[
			["基", "き", false],
			["地", "ち", false]
		], -1
	],
	["[基|き][本|ほん]", "基本", ["きほん"],
		[
			["基", "き", false],
			["本", "ほん", false]
		], -1
	],
	["[基|き](準|じゅん)", "基準", ["きじゅん"],
		[
			["基", "き", false],
			["準", "じゅん", true]
		], "4475"
	],
	["(至|し)[急|きゅう]", "至急", ["しきゅう"],
		[
			["至", "し", true],
			["急", "きゅう", false]
		], "5271"
	],
	["[定|てい][価|か]", "定価", ["ていか"],
		[
			["定", "てい", false],
			["価", "か", false]
		], -1
	],
	["[物|ぶっ][価|か]", "物価", ["ぶっか"],
		[
			["物", "ぶっ", false],
			["価", "か", false]
		], -1
	],
	["[高|こう][価|か]", "高価", ["こうか"],
		[
			["高", "こう", false],
			["価", "か", false]
		], -1
	],
	["[価|か](格|かく)", "価格", ["かかく"],
		[
			["価", "か", false],
			["格", "かく", true]
		], "4306"
	],
	["(評|ひょう)[価|か]", "評価", ["ひょうか"],
		[
			["評", "ひょう", true],
			["価", "か", false]
		], "4507"
	],
	["[価|か](値|ち)", "価値", ["かち"],
		[
			["価", "か", false],
			["値", "ち", true]
		], "5041"
	],
	["(宗|しゅう)[教|きょう]", "宗教", ["しゅうきょう"],
		[
			["宗", "しゅう", true],
			["教", "きょう", false]
		], "5272"
	],
	["[明|めい][確|かく]", "明確", ["めいかく"],
		[
			["明", "めい", false],
			["確", "かく", false]
		], -1
	],
	["[正|せい][確|かく]", "正確", ["せいかく"],
		[
			["正", "せい", false],
			["確", "かく", false]
		], -1
	],
	["[的|てき][確|かく]", "的確", ["てきかく"],
		[
			["的", "てき", false],
			["確", "かく", false]
		], -1
	],
	["[確|たし]か", "確か", ["たしか"],
		[
			["確", "たし", false],
			["か", null, false]
		], -1
	],
	["[確|たし]かめ*る", "確かめ", ["たしかめ"],
		[
			["確", "たし", false],
			["か", null, false],
			["め", null, false]
		], -1
	],
	["[確|かく][実|じつ]", "確実", ["かくじつ"],
		[
			["確", "かく", false],
			["実", "じつ", false]
		], -1
	],
	["[確|かく](率|りつ)", "確率", ["かくりつ"],
		[
			["確", "かく", false],
			["率", "りつ", true]
		], "4426"
	],
	["(適|てき)[確|かく]", "適確", ["てきかく"],
		[
			["適", "てき", true],
			["確", "かく", false]
		], "4625"
	],
	["[確|かく](認|にん)", "確認", ["かくにん"],
		[
			["確", "かく", false],
			["認", "にん", true]
		], "4926"
	],
	["[体|たい](操|そう)", "体操", ["たいそう"],
		[
			["体", "たい", false],
			["操", "そう", true]
		], "5278"
	],
	["(操|そう)[作|さ]", "操作", ["そうさ"],
		[
			["操", "そう", true],
			["作", "さ", false]
		], "5279"
	],
	["[提|てい][出|しゅつ]", "提出", ["ていしゅつ"],
		[
			["提", "てい", false],
			["出", "しゅつ", false]
		], -1
	],
	["[提|てい][案|あん]", "提案", ["ていあん"],
		[
			["提", "てい", false],
			["案", "あん", false]
		], -1
	],
	["(誕|たん)[生|じょう]", "誕生", ["たんじょう"],
		[
			["誕", "たん", true],
			["生", "じょう", false]
		], "5282"
	],
	["[勢|いきお]い", "勢い", ["いきおい"],
		[
			["勢", "いきお", false],
			["い", null, false]
		], -1
	],
	["[大|おお][勢|ぜい]", "大勢", ["おおぜい"],
		[
			["大", "おお", false],
			["勢", "ぜい", false]
		], -1
	],
	["(姿|し)[勢|せい]", "姿勢", ["しせい"],
		[
			["姿", "し", true],
			["勢", "せい", false]
		], "5011"
	],
	["(孝|こう)[行|こう]", "孝行", ["こうこう"],
		[
			["孝", "こう", true],
			["行", "こう", false]
		], "5283"
	],
	["[加|か][減|げん]", "加減", ["かげん"],
		[
			["加", "か", false],
			["減", "げん", false]
		], -1
	],
	["[増|ぞう][減|げん]", "増減", ["ぞうげん"],
		[
			["増", "ぞう", false],
			["減", "げん", false]
		], -1
	],
	["[減|へ]ら*す", "減ら", ["へら"],
		[
			["減", "へ", false],
			["ら", null, false]
		], -1
	],
	["[減|へ]*5", "減", ["へ"],
		[
			["減", "へ", false]
		], -1
	],
	["[単|たん](純|じゅん)", "単純", ["たんじゅん"],
		[
			["単", "たん", false],
			["純", "じゅん", true]
		], "5284"
	],
	["(純|じゅん)[情|じょう]", "純情", ["じゅんじょう"],
		[
			["純", "じゅん", true],
			["情", "じょう", false]
		], "5285"
	],
	["[申|もう]し(訳|わけ)", "申し訳", ["もうしわけ"],
		[
			["申", "もう", false],
			["し", null, false],
			["訳", "わけ", true]
		], "5287"
	],
	["[申|もう]し(訳|わけ)ない", "申し訳ない", ["もうしわけない"],
		[
			["申", "もう", false],
			["し", null, false],
			["訳", "わけ", true],
			["な", null, false],
			["い", null, false]
		], "5288"
	],
	["[通|つう](訳|やく)", "通訳", ["つうやく"],
		[
			["通", "つう", false],
			["訳", "やく", true]
		], "5290"
	],
	["[内|ない][容|よう]", "内容", ["ないよう"],
		[
			["内", "ない", false],
			["容", "よう", false]
		], -1
	],
	["[美|び][容|よう]", "美容", ["びよう"],
		[
			["美", "び", false],
			["容", "よう", false]
		], -1
	],
	["[容|よう][器|き]", "容器", ["ようき"],
		[
			["容", "よう", false],
			["器", "き", false]
		], -1
	],
	["[容|よう][積|せき]", "容積", ["ようせき"],
		[
			["容", "よう", false],
			["積", "せき", false]
		], -1
	],
	["[容|よう](易|い)", "容易", ["ようい"],
		[
			["容", "よう", false],
			["易", "い", true]
		], "4568"
	],
	["[一|いち][応|おう]", "一応", ["いちおう"],
		[
			["一", "いち", false],
			["応", "おう", false]
		], -1
	],
	["[応|おう]じ*る", "応じ", ["おうじ"],
		[
			["応", "おう", false],
			["じ", null, false]
		], -1
	],
	["[応|おう]ずる", "応ずる", ["おうずる"],
		[
			["応", "おう", false],
			["ず", null, false],
			["る", null, false]
		], -1
	],
	["[応|おう][対|たい]", "応対", ["おうたい"],
		[
			["応", "おう", false],
			["対", "たい", false]
		], -1
	],
	["[応|おう][用|よう]", "応用", ["おうよう"],
		[
			["応", "おう", false],
			["用", "よう", false]
		], -1
	],
	["[応|おう](接|せつ)", "応接", ["おうせつ"],
		[
			["応", "おう", false],
			["接", "せつ", true]
		], "4543"
	],
	["(看|かん)[板|ばん]", "看板", ["かんばん"],
		[
			["看", "かん", true],
			["板", "ばん", false]
		], "5295"
	],
	["(看|かん)[病|びょう]", "看病", ["かんびょう"],
		[
			["看", "かん", true],
			["病", "びょう", false]
		], "5296"
	],
	["[演|えん][説|ぜつ]", "演説", ["えんぜつ"],
		[
			["演", "えん", false],
			["説", "ぜつ", false]
		], -1
	],
	["[演|えん](技|ぎ)", "演技", ["えんぎ"],
		[
			["演", "えん", false],
			["技", "ぎ", true]
		], "4491"
	],
	["(講|こう)[演|えん]", "講演", ["こうえん"],
		[
			["講", "こう", true],
			["演", "えん", false]
		], "4607"
	],
	["[演|えん](劇|げき)", "演劇", ["えんげき"],
		[
			["演", "えん", false],
			["劇", "げき", true]
		], "5133"
	],
	["[演|えん](奏|そう)", "演奏", ["えんそう"],
		[
			["演", "えん", false],
			["奏", "そう", true]
		], "5299"
	],
	["[性|せい][能|のう]", "性能", ["せいのう"],
		[
			["性", "せい", false],
			["能", "のう", false]
		], -1
	],
	["[機|き][能|のう]", "機能", ["きのう"],
		[
			["機", "き", false],
			["能", "のう", false]
		], -1
	],
	["[知|ち][能|のう]", "知能", ["ちのう"],
		[
			["知", "ち", false],
			["能", "のう", false]
		], -1
	],
	["[能|のう]", "能", ["のう"],
		[
			["能", "のう", false]
		], -1
	],
	["[能|のう][力|りょく]", "能力", ["のうりょく"],
		[
			["能", "のう", false],
			["力", "りょく", false]
		], -1
	],
	["[有|ゆう][能|のう]", "有能", ["ゆうのう"],
		[
			["有", "ゆう", false],
			["能", "のう", false]
		], -1
	],
	["[芸|げい][能|のう]", "芸能", ["げいのう"],
		[
			["芸", "げい", false],
			["能", "のう", false]
		], -1
	],
	["[才|さい][能|のう]", "才能", ["さいのう"],
		[
			["才", "さい", false],
			["能", "のう", false]
		], -1
	],
	["(可|か)[能|のう]", "可能", ["かのう"],
		[
			["可", "か", true],
			["能", "のう", false]
		], "4352"
	],
	["[能|のう](率|りつ)", "能率", ["のうりつ"],
		[
			["能", "のう", false],
			["率", "りつ", true]
		], "4427"
	],
	["(片|かた)[付|づ]*く", "片付", ["かたづ"],
		[
			["片", "かた", true],
			["付", "づ", false]
		], "5302"
	],
	["(片|かた)[付|づ]け*る", "片付け", ["かたづけ"],
		[
			["片", "かた", true],
			["付", "づ", false],
			["け", null, false]
		], "5303"
	],
	["(片|かた)(仮|か)[名|な]", "片仮名", ["かたかな"],
		[
			["片", "かた", true],
			["仮", "か", true],
			["名", "な", false]
		], "4845"
	],
	["(片|かた)[道|みち]", "片道", ["かたみち"],
		[
			["片", "かた", true],
			["道", "みち", false]
		], "5306"
	],
	["[再|さい]{～}", "再～", ["さい"],
		[
			["再", "さい", false],
			["～", null, false]
		], -1
	],
	["[再|ふたた]び", "再び", ["ふたたび"],
		[
			["再", "ふたた", false],
			["び", null, false]
		], -1
	],
	["[再|さい][三|さん]", "再三", ["さいさん"],
		[
			["再", "さい", false],
			["三", "さん", false]
		], -1
	],
	["[再|さ][来|らい][年|ねん]", "再来年", ["さらいねん"],
		[
			["再", "さ", false],
			["来", "らい", false],
			["年", "ねん", false]
		], -1
	],
	["[再|さ][来|らい][月|げつ]", "再来月", ["さらいげつ"],
		[
			["再", "さ", false],
			["来", "らい", false],
			["月", "げつ", false]
		], -1
	],
	["[再|さ][来|らい][週|しゅう]", "再来週", ["さらいしゅう"],
		[
			["再", "さ", false],
			["来", "らい", false],
			["週", "しゅう", false]
		], -1
	],
	["[価|か][格|かく]", "価格", ["かかく"],
		[
			["価", "か", false],
			["格", "かく", false]
		], -1
	],
	["[合|ごう][格|かく]", "合格", ["ごうかく"],
		[
			["合", "ごう", false],
			["格", "かく", false]
		], -1
	],
	["[同|どう][格|かく]", "同格", ["どうかく"],
		[
			["同", "どう", false],
			["格", "かく", false]
		], -1
	],
	["[性|せい][格|かく]", "性格", ["せいかく"],
		[
			["性", "せい", false],
			["格", "かく", false]
		], -1
	],
	["[格|かく][別|べつ]", "格別", ["かくべつ"],
		[
			["格", "かく", false],
			["別", "べつ", false]
		], -1
	],
	["[格|かっ][好|こう]", "格好", ["かっこう"],
		[
			["格", "かっ", false],
			["好", "こう", false]
		], -1
	],
	["(敬|けい)[意|い]", "敬意", ["けいい"],
		[
			["敬", "けい", true],
			["意", "い", false]
		], "5309"
	],
	["(敬|けい)[語|ご]", "敬語", ["けいご"],
		[
			["敬", "けい", true],
			["語", "ご", false]
		], "5310"
	],
	["[温|おん](泉|せん)", "温泉", ["おんせん"],
		[
			["温", "おん", false],
			["泉", "せん", true]
		], "5313"
	],
	["{～}[過|す]ぎ", "～過ぎ", ["すぎ"],
		[
			["～", null, false],
			["過", "す", false],
			["ぎ", null, false]
		], -1
	],
	["{～}[過|す]ぎる", "～過ぎる", ["すぎる"],
		[
			["～", null, false],
			["過", "す", false],
			["ぎ", null, false],
			["る", null, false]
		], -1
	],
	["[通|とお]り[過|す]ぎ*る", "通り過ぎ", ["とおりすぎ"],
		[
			["通", "とお", false],
			["り", null, false],
			["過", "す", false],
			["ぎ", null, false]
		], -1
	],
	["[通|つう][過|か]", "通過", ["つうか"],
		[
			["通", "つう", false],
			["過", "か", false]
		], -1
	],
	["[過|す]ぎ*る", "過ぎ", ["すぎ"],
		[
			["過", "す", false],
			["ぎ", null, false]
		], -1
	],
	["[過|す]ご*す", "過ご", ["すご"],
		[
			["過", "す", false],
			["ご", null, false]
		], -1
	],
	["[過|か][半|はん][数|すう]", "過半数", ["かはんすう"],
		[
			["過", "か", false],
			["半", "はん", false],
			["数", "すう", false]
		], -1
	],
	["[過|か][去|こ]", "過去", ["かこ"],
		[
			["過", "か", false],
			["去", "こ", false]
		], -1
	],
	["[過|か][失|しつ]", "過失", ["かしつ"],
		[
			["過", "か", false],
			["失", "しつ", false]
		], -1
	],
	["[過|か](程|てい)", "過程", ["かてい"],
		[
			["過", "か", false],
			["程", "てい", true]
		], "4541"
	],
	["[税|ぜい]", "税", ["ぜい"],
		[
			["税", "ぜい", false]
		], -1
	],
	["[税|ぜい][金|きん]", "税金", ["ぜいきん"],
		[
			["税", "ぜい", false],
			["金", "きん", false]
		], -1
	],
	["[税|ぜい][関|かん]", "税関", ["ぜいかん"],
		[
			["税", "ぜい", false],
			["関", "かん", false]
		], -1
	],
	["[課|か][税|ぜい]", "課税", ["かぜい"],
		[
			["課", "か", false],
			["税", "ぜい", false]
		], -1
	],
	["[検|けん][査|さ]", "検査", ["けんさ"],
		[
			["検", "けん", false],
			["査", "さ", false]
		], -1
	],
	["[常|つね]に", "常に", ["つねに"],
		[
			["常", "つね", false],
			["に", null, false]
		], -1
	],
	["[日|にち][常|じょう]", "日常", ["にちじょう"],
		[
			["日", "にち", false],
			["常", "じょう", false]
		], -1
	],
	["(非|ひ)[常|じょう]", "非常", ["ひじょう"],
		[
			["非", "ひ", true],
			["常", "じょう", false]
		], "4513"
	],
	["(非|ひ)[常|じょう]に", "非常に", ["ひじょうに"],
		[
			["非", "ひ", true],
			["常", "じょう", false],
			["に", null, false]
		], "4514"
	],
	["[常|じょう](識|しき)", "常識", ["じょうしき"],
		[
			["常", "じょう", false],
			["識", "しき", true]
		], "4525"
	],
	["(異|い)[常|じょう]", "異常", ["いじょう"],
		[
			["異", "い", true],
			["常", "じょう", false]
		], "5112"
	],
	["{～}[状|じょう]", "～状", ["じょう"],
		[
			["～", null, false],
			["状", "じょう", false]
		], -1
	],
	["[現|げん][状|じょう]", "現状", ["げんじょう"],
		[
			["現", "げん", false],
			["状", "じょう", false]
		], -1
	],
	["[状|じょう](態|たい)", "状態", ["じょうたい"],
		[
			["状", "じょう", false],
			["態", "たい", true]
		], "4400"
	],
	["[営|えい][業|ぎょう]", "営業", ["えいぎょう"],
		[
			["営", "えい", false],
			["業", "ぎょう", false]
		], -1
	],
	["[経|けい][営|えい]", "経営", ["けいえい"],
		[
			["経", "けい", false],
			["営", "えい", false]
		], -1
	],
	["(宝|ほう)[石|せき]", "宝石", ["ほうせき"],
		[
			["宝", "ほう", true],
			["石", "せき", false]
		], "5320"
	],
	["[職|しょく]", "職", ["しょく"],
		[
			["職", "しょく", false]
		], -1
	],
	["[職|しょく][人|にん]", "職人", ["しょくにん"],
		[
			["職", "しょく", false],
			["人", "にん", false]
		], -1
	],
	["[職|しょく][場|ば]", "職場", ["しょくば"],
		[
			["職", "しょく", false],
			["場", "ば", false]
		], -1
	],
	["[職|しょく][業|ぎょう]", "職業", ["しょくぎょう"],
		[
			["職", "しょく", false],
			["業", "ぎょう", false]
		], -1
	],
	["[保|ほ][証|しょう]", "保証", ["ほしょう"],
		[
			["保", "ほ", false],
			["証", "しょう", false]
		], -1
	],
	["[証|しょう][明|めい]", "証明", ["しょうめい"],
		[
			["証", "しょう", false],
			["明", "めい", false]
		], -1
	],
	["(誤|ご)[解|かい]", "誤解", ["ごかい"],
		[
			["誤", "ご", true],
			["解", "かい", false]
		], "5327"
	],
	["[不|ふ][可|か]", "不可", ["ふか"],
		[
			["不", "ふ", false],
			["可", "か", false]
		], -1
	],
	["[可|か]", "可", ["か"],
		[
			["可", "か", false]
		], -1
	],
	["[可|か][決|けつ]", "可決", ["かけつ"],
		[
			["可", "か", false],
			["決", "けつ", false]
		], -1
	],
	["[可|か][能|のう]", "可能", ["かのう"],
		[
			["可", "か", false],
			["能", "のう", false]
		], -1
	],
	["(許|きょ)[可|か]", "許可", ["きょか"],
		[
			["許", "きょ", true],
			["可", "か", false]
		], "4686"
	],
	["[手|て](洗|あら)い", "手洗い", ["てあらい"],
		[
			["手", "て", false],
			["洗", "あら", true],
			["い", null, false]
		], "5329"
	],
	["(洗|せん)[面|めん]", "洗面", ["せんめん"],
		[
			["洗", "せん", true],
			["面", "めん", false]
		], "5331"
	],
	["[構|かま]*う", "構", ["かま"],
		[
			["構", "かま", false]
		], -1
	],
	["[構|こう][成|せい]", "構成", ["こうせい"],
		[
			["構", "こう", false],
			["成", "せい", false]
		], -1
	],
	["[結|けっ][構|こう]", "結構", ["けっこう"],
		[
			["結", "けっ", false],
			["構", "こう", false]
		], -1
	],
	["[構|こう](造|ぞう)", "構造", ["こうぞう"],
		[
			["構", "こう", false],
			["造", "ぞう", true]
		], "4483"
	],
	["(尊|そん)[重|ちょう]", "尊重", ["そんちょう"],
		[
			["尊", "そん", true],
			["重", "ちょう", false]
		], "5335"
	],
	["[比|くら]べ*る", "比べ", ["くらべ"],
		[
			["比", "くら", false],
			["べ", null, false]
		], -1
	],
	["(窓|まど)[口|ぐち]", "窓口", ["まどぐち"],
		[
			["窓", "まど", true],
			["口", "ぐち", false]
		], "5337"
	],
	["[予|よ][防|ぼう]", "予防", ["よぼう"],
		[
			["予", "よ", false],
			["防", "ぼう", false]
		], -1
	],
	["[防|ぼう]{～}", "防～", ["ぼう"],
		[
			["防", "ぼう", false],
			["～", null, false]
		], -1
	],
	["[防|ふせ]*ぐ", "防", ["ふせ"],
		[
			["防", "ふせ", false]
		], -1
	],
	["[防|ぼう][止|し]", "防止", ["ぼうし"],
		[
			["防", "ぼう", false],
			["止", "し", false]
		], -1
	],
	["[消|しょう][防|ぼう]", "消防", ["しょうぼう"],
		[
			["消", "しょう", false],
			["防", "ぼう", false]
		], -1
	],
	["[防|ぼう](犯|はん)", "防犯", ["ぼうはん"],
		[
			["防", "ぼう", false],
			["犯", "はん", true]
		], "4783"
	],
	["[消|しょう][防|ぼう](署|しょ)", "消防署", ["しょうぼうしょ"],
		[
			["消", "しょう", false],
			["防", "ぼう", false],
			["署", "しょ", true]
		], "5151"
	],
	["(幼|よう)[児|じ]", "幼児", ["ようじ"],
		[
			["幼", "よう", true],
			["児", "じ", false]
		], "5341"
	],
	["[判|はん][断|だん]", "判断", ["はんだん"],
		[
			["判", "はん", false],
			["断", "だん", false]
		], -1
	],
	["[断|ことわ]*5", "断", ["ことわ"],
		[
			["断", "ことわ", false]
		], -1
	],
	["[断|だん][定|てい]", "断定", ["だんてい"],
		[
			["断", "だん", false],
			["定", "てい", false]
		], -1
	],
	["[断|だん][水|すい]", "断水", ["だんすい"],
		[
			["断", "だん", false],
			["水", "すい", false]
		], -1
	],
	["[横|おう][断|だん]", "横断", ["おうだん"],
		[
			["横", "おう", false],
			["断", "だん", false]
		], -1
	],
	["[油|ゆ][断|だん]", "油断", ["ゆだん"],
		[
			["油", "ゆ", false],
			["断", "だん", false]
		], -1
	],
	["背", "背", ["せ", "せい"],
		[], null
	],
	["[国|こっ][境|きょう]", "国境", ["こっきょう"],
		[
			["国", "こっ", false],
			["境", "きょう", false]
		], -1
	],
	["[境|さかい]", "境", ["さかい"],
		[
			["境", "さかい", false]
		], -1
	],
	["[境|きょう][界|かい]", "境界", ["きょうかい"],
		[
			["境", "きょう", false],
			["界", "かい", false]
		], -1
	],
	["(御|ご)(主|しゅ)[人|じん]", "御主人", ["ごしゅじん"],
		[
			["御", "ご", true],
			["主", "しゅ", true],
			["人", "じん", false]
		], "5479"
	],
	["[昼|ひる](御|ご)(飯|はん)", "昼御飯", ["ひるごはん"],
		[
			["昼", "ひる", false],
			["御", "ご", true],
			["飯", "はん", true]
		], "5480"
	],
	["[朝|あさ](御|ご)(飯|はん)", "朝御飯", ["あさごはん"],
		[
			["朝", "あさ", false],
			["御", "ご", true],
			["飯", "はん", true]
		], "5481"
	],
	["[定|じょう][規|ぎ]", "定規", ["じょうぎ"],
		[
			["定", "じょう", false],
			["規", "ぎ", false]
		], -1
	],
	["[規|き](準|じゅん)", "規準", ["きじゅん"],
		[
			["規", "き", false],
			["準", "じゅん", true]
		], "4478"
	],
	["[不|ふ][規|き](則|そく)", "不規則", ["ふきそく"],
		[
			["不", "ふ", false],
			["規", "き", false],
			["則", "そく", true]
		], "4709"
	],
	["[規|き](則|そく)", "規則", ["きそく"],
		[
			["規", "き", false],
			["則", "そく", true]
		], "4711"
	],
	["[規|き](律|りつ)", "規律", ["きりつ"],
		[
			["規", "き", false],
			["律", "りつ", true]
		], "5268"
	],
	["[四|し](捨|しゃ)[五|ご][入|にゅう]", "四捨五入", ["ししゃごにゅう"],
		[
			["四", "し", false],
			["捨", "しゃ", true],
			["五", "ご", false],
			["入", "にゅう", false]
		], "5346"
	],
	["[学|がく][術|じゅつ]", "学術", ["がくじゅつ"],
		[
			["学", "がく", false],
			["術", "じゅつ", false]
		], -1
	],
	["[手|しゅ][術|じゅつ]", "手術", ["しゅじゅつ"],
		[
			["手", "しゅ", false],
			["術", "じゅつ", false]
		], -1
	],
	["[芸|げい][術|じゅつ]", "芸術", ["げいじゅつ"],
		[
			["芸", "げい", false],
			["術", "じゅつ", false]
		], -1
	],
	["(技|ぎ)[術|じゅつ]", "技術", ["ぎじゅつ"],
		[
			["技", "ぎ", true],
			["術", "じゅつ", false]
		], "4490"
	],
	["[牛|ぎゅう](乳|にゅう)", "牛乳", ["ぎゅうにゅう"],
		[
			["牛", "ぎゅう", false],
			["乳", "にゅう", true]
		], "5348"
	],
	["(看|かん)[護|ご](婦|ふ)", "看護婦", ["かんごふ"],
		[
			["看", "かん", true],
			["護", "ご", false],
			["婦", "ふ", true]
		], "4632"
	],
	["[口|くち](紅|べに)", "口紅", ["くちべに"],
		[
			["口", "くち", false],
			["紅", "べに", true]
		], "5349"
	],
	["(紅|こう)[茶|ちゃ]", "紅茶", ["こうちゃ"],
		[
			["紅", "こう", true],
			["茶", "ちゃ", false]
		], "5350"
	],
	["[事|じ][態|たい]", "事態", ["じたい"],
		[
			["事", "じ", false],
			["態", "たい", false]
		], -1
	],
	["[態|たい][度|ど]", "態度", ["たいど"],
		[
			["態", "たい", false],
			["度", "ど", false]
		], -1
	],
	["[状|じょう][態|たい]", "状態", ["じょうたい"],
		[
			["状", "じょう", false],
			["態", "たい", false]
		], -1
	],
	["[指|し][導|どう]", "指導", ["しどう"],
		[
			["指", "し", false],
			["導", "どう", false]
		], -1
	],
	["[予|よ][備|び]", "予備", ["よび"],
		[
			["予", "よ", false],
			["備", "び", false]
		], -1
	],
	["[備|そな]え*る", "備え", ["そなえ"],
		[
			["備", "そな", false],
			["え", null, false]
		], -1
	],
	["[設|せつ][備|び]", "設備", ["せつび"],
		[
			["設", "せつ", false],
			["備", "び", false]
		], -1
	],
	["[整|せい][備|び]", "整備", ["せいび"],
		[
			["整", "せい", false],
			["備", "び", false]
		], -1
	],
	["(準|じゅん)[備|び]", "準備", ["じゅんび"],
		[
			["準", "じゅん", true],
			["備", "び", false]
		], "4477"
	],
	["(警|けい)[備|び]", "警備", ["けいび"],
		[
			["警", "けい", true],
			["備", "び", false]
		], "4994"
	],
	["[条|じょう][件|けん]", "条件", ["じょうけん"],
		[
			["条", "じょう", false],
			["件", "けん", false]
		], -1
	],
	["(頂|ちょう)[上|じょう]", "頂上", ["ちょうじょう"],
		[
			["頂", "ちょう", true],
			["上", "じょう", false]
		], "5356"
	],
	["(頂|ちょう)[点|てん]", "頂点", ["ちょうてん"],
		[
			["頂", "ちょう", true],
			["点", "てん", false]
		], "5357"
	],
	["[新|しん][幹|かん][線|せん]", "新幹線", ["しんかんせん"],
		[
			["新", "しん", false],
			["幹", "かん", false],
			["線", "せん", false]
		], -1
	],
	["[温|おん](暖|だん)", "温暖", ["おんだん"],
		[
			["温", "おん", false],
			["暖", "だん", true]
		], "5362"
	],
	["[独|ひと]り", "独り", ["ひとり"],
		[
			["独", "ひと", false],
			["り", null, false]
		], -1
	],
	["[独|ひと]り[言|ごと]", "独り言", ["ひとりごと"],
		[
			["独", "ひと", false],
			["り", null, false],
			["言", "ごと", false]
		], -1
	],
	["[独|どく][特|とく]", "独特", ["どくとく"],
		[
			["独", "どく", false],
			["特", "とく", false]
		], -1
	],
	["[独|どく][立|りつ]", "独立", ["どくりつ"],
		[
			["独", "どく", false],
			["立", "りつ", false]
		], -1
	],
	["[独|どく][身|しん]", "独身", ["どくしん"],
		[
			["独", "どく", false],
			["身", "しん", false]
		], -1
	],
	["[輸|ゆ][入|にゅう]", "輸入", ["ゆにゅう"],
		[
			["輸", "ゆ", false],
			["入", "にゅう", false]
		], -1
	],
	["[輸|ゆ][出|しゅつ]", "輸出", ["ゆしゅつ"],
		[
			["輸", "ゆ", false],
			["出", "しゅつ", false]
		], -1
	],
	["[輸|ゆ][送|そう]", "輸送", ["ゆそう"],
		[
			["輸", "ゆ", false],
			["送", "そう", false]
		], -1
	],
	["[輸|ゆ][血|けつ]", "輸血", ["ゆけつ"],
		[
			["輸", "ゆ", false],
			["血", "けつ", false]
		], -1
	],
	["(熟|じゅく)[語|ご]", "熟語", ["じゅくご"],
		[
			["熟", "じゅく", true],
			["語", "ご", false]
		], "5367"
	],
	["[述|の]べ*る", "述べ", ["のべ"],
		[
			["述", "の", false],
			["べ", null, false]
		], -1
	],
	["[述|じゅつ][語|ご]", "述語", ["じゅつご"],
		[
			["述", "じゅつ", false],
			["語", "ご", false]
		], -1
	],
	["[率|りつ]", "率", ["りつ"],
		[
			["率", "りつ", false]
		], -1
	],
	["[確|かく][率|りつ]", "確率", ["かくりつ"],
		[
			["確", "かく", false],
			["率", "りつ", false]
		], -1
	],
	["[能|のう][率|りつ]", "能率", ["のうりつ"],
		[
			["能", "のう", false],
			["率", "りつ", false]
		], -1
	],
	["[武|ぶ][器|き]", "武器", ["ぶき"],
		[
			["武", "ぶ", false],
			["器", "き", false]
		], -1
	],
	["[武|ぶ][士|し]", "武士", ["ぶし"],
		[
			["武", "ぶ", false],
			["士", "し", false]
		], -1
	],
	["(拝|はい)[見|けん]", "拝見", ["はいけん"],
		[
			["拝", "はい", true],
			["見", "けん", false]
		], "5371"
	],
	["[地|ち][質|しつ]", "地質", ["ちしつ"],
		[
			["地", "ち", false],
			["質", "しつ", false]
		], -1
	],
	["[性|せい][質|しつ]", "性質", ["せいしつ"],
		[
			["性", "せい", false],
			["質", "しつ", false]
		], -1
	],
	["[物|ぶっ][質|しつ]", "物質", ["ぶっしつ"],
		[
			["物", "ぶっ", false],
			["質", "しつ", false]
		], -1
	],
	["[質|しつ]", "質", ["しつ"],
		[
			["質", "しつ", false]
		], -1
	],
	["(素|そ)[質|しつ]", "素質", ["そしつ"],
		[
			["素", "そ", true],
			["質", "しつ", false]
		], "4614"
	],
	["[自|じ][衛|えい]", "自衛", ["じえい"],
		[
			["自", "じ", false],
			["衛", "えい", false]
		], -1
	],
	["[衛|えい][星|せい]", "衛星", ["えいせい"],
		[
			["衛", "えい", false],
			["星", "せい", false]
		], -1
	],
	["(展|てん)(覧|らん)[会|かい]", "展覧会", ["てんらんかい"],
		[
			["展", "てん", true],
			["覧", "らん", true],
			["会", "かい", false]
		], "4981"
	],
	["[主|しゅ][張|ちょう]", "主張", ["しゅちょう"],
		[
			["主", "しゅ", false],
			["張", "ちょう", false]
		], -1
	],
	["[出|しゅっ][張|ちょう]", "出張", ["しゅっちょう"],
		[
			["出", "しゅっ", false],
			["張", "ちょう", false]
		], -1
	],
	["[引|ひ]っ[張|ぱ]*5", "引っ張", ["ひっぱ"],
		[
			["引", "ひ", false],
			["っ", null, false],
			["張", "ぱ", false]
		], -1
	],
	["[張|は]り[切|き]る", "張り切る", ["はりきる"],
		[
			["張", "は", false],
			["り", null, false],
			["切", "き", false],
			["る", null, false]
		], -1
	],
	["[張|は]*5", "張", ["は"],
		[
			["張", "は", false]
		], -1
	],
	["(拡|かく)[張|ちょう]", "拡張", ["かくちょう"],
		[
			["拡", "かく", true],
			["張", "ちょう", false]
		], "5106"
	],
	["(欲|よく)[張|ば]り", "欲張り", ["よくばり"],
		[
			["欲", "よく", true],
			["張", "ば", false],
			["り", null, false]
		], "5214"
	],
	["[水|すい](蒸|じょう)[気|き]", "水蒸気", ["すいじょうき"],
		[
			["水", "すい", false],
			["蒸", "じょう", true],
			["気", "き", false]
		], "5378"
	],
	["(蒸|む)し[暑|あつ]い", "蒸し暑い", ["むしあつい"],
		[
			["蒸", "む", true],
			["し", null, false],
			["暑", "あつ", false],
			["い", null, false]
		], "5379"
	],
	["(蒸|じょう)[気|き]", "蒸気", ["じょうき"],
		[
			["蒸", "じょう", true],
			["気", "き", false]
		], "5381"
	],
	["(蒸|じょう)[発|はつ]", "蒸発", ["じょうはつ"],
		[
			["蒸", "じょう", true],
			["発", "はつ", false]
		], "5382"
	],
	["[制|せい][限|げん]", "制限", ["せいげん"],
		[
			["制", "せい", false],
			["限", "げん", false]
		], -1
	],
	["[期|き][限|げん]", "期限", ["きげん"],
		[
			["期", "き", false],
			["限", "げん", false]
		], -1
	],
	["[無|む][限|げん]", "無限", ["むげん"],
		[
			["無", "む", false],
			["限", "げん", false]
		], -1
	],
	["[限|かぎ]り", "限り", ["かぎり"],
		[
			["限", "かぎ", false],
			["り", null, false]
		], -1
	],
	["[限|かぎ]*5", "限", ["かぎ"],
		[
			["限", "かぎ", false]
		], -1
	],
	["[限|げん][度|ど]", "限度", ["げんど"],
		[
			["限", "げん", false],
			["度", "ど", false]
		], -1
	],
	["[限|げん][界|かい]", "限界", ["げんかい"],
		[
			["限", "げん", false],
			["界", "かい", false]
		], -1
	],
	["[金|きん][額|がく]", "金額", ["きんがく"],
		[
			["金", "きん", false],
			["額", "がく", false]
		], -1
	],
	["[祖|そ][母|ぼ]", "祖母", ["そぼ"],
		[
			["祖", "そ", false],
			["母", "ぼ", false]
		], -1
	],
	["[祖|そ][父|ふ]", "祖父", ["そふ"],
		[
			["祖", "そ", false],
			["父", "ふ", false]
		], -1
	],
	["[主|しゅ][義|ぎ]", "主義", ["しゅぎ"],
		[
			["主", "しゅ", false],
			["義", "ぎ", false]
		], -1
	],
	["[意|い][義|ぎ]", "意義", ["いぎ"],
		[
			["意", "い", false],
			["義", "ぎ", false]
		], -1
	],
	["[義|ぎ][務|む]", "義務", ["ぎむ"],
		[
			["義", "ぎ", false],
			["務", "む", false]
		], -1
	],
	["(講|こう)[義|ぎ]", "講義", ["こうぎ"],
		[
			["講", "こう", true],
			["義", "ぎ", false]
		], "4608"
	],
	["[代|だい][名|めい](詞|し)", "代名詞", ["だいめいし"],
		[
			["代", "だい", false],
			["名", "めい", false],
			["詞", "し", true]
		], "5384"
	],
	["[副|ふく](詞|し)", "副詞", ["ふくし"],
		[
			["副", "ふく", false],
			["詞", "し", true]
		], "5385"
	],
	["[動|どう](詞|し)", "動詞", ["どうし"],
		[
			["動", "どう", false],
			["詞", "し", true]
		], "5386"
	],
	["[名|めい](詞|し)", "名詞", ["めいし"],
		[
			["名", "めい", false],
			["詞", "し", true]
		], "5388"
	],
	["[形|けい][容|よう][動|どう](詞|し)", "形容動詞", ["けいようどうし"],
		[
			["形", "けい", false],
			["容", "よう", false],
			["動", "どう", false],
			["詞", "し", true]
		], "5389"
	],
	["[形|けい][容|よう](詞|し)", "形容詞", ["けいようし"],
		[
			["形", "けい", false],
			["容", "よう", false],
			["詞", "し", true]
		], "5390"
	],
	["(寸|すん)[法|ぽう]", "寸法", ["すんぽう"],
		[
			["寸", "すん", true],
			["法", "ぽう", false]
		], "5392"
	],
	["[引|いん][退|たい]", "引退", ["いんたい"],
		[
			["引", "いん", false],
			["退", "たい", false]
		], -1
	],
	["[退|ど]*く", "退", ["ど"],
		[
			["退", "ど", false]
		], -1
	],
	["[退|ど]け*る", "退け", ["どけ"],
		[
			["退", "ど", false],
			["け", null, false]
		], -1
	],
	["[退|たい][院|いん]", "退院", ["たいいん"],
		[
			["退", "たい", false],
			["院", "いん", false]
		], -1
	],
	["[基|き][準|じゅん]", "基準", ["きじゅん"],
		[
			["基", "き", false],
			["準", "じゅん", false]
		], -1
	],
	["[水|すい][準|じゅん]", "水準", ["すいじゅん"],
		[
			["水", "すい", false],
			["準", "じゅん", false]
		], -1
	],
	["[準|じゅん][備|び]", "準備", ["じゅんび"],
		[
			["準", "じゅん", false],
			["備", "び", false]
		], -1
	],
	["[規|き][準|じゅん]", "規準", ["きじゅん"],
		[
			["規", "き", false],
			["準", "じゅん", false]
		], -1
	],
	["[標|ひょう][準|じゅん]", "標準", ["ひょうじゅん"],
		[
			["標", "ひょう", false],
			["準", "じゅん", false]
		], -1
	],
	["(磁|じ)[石|しゃく]", "磁石", ["じしゃく"],
		[
			["磁", "じ", true],
			["石", "しゃく", false]
		], "5395"
	],
	["[人|じん][造|ぞう]", "人造", ["じんぞう"],
		[
			["人", "じん", false],
			["造", "ぞう", false]
		], -1
	],
	["[改|かい][造|ぞう]", "改造", ["かいぞう"],
		[
			["改", "かい", false],
			["造", "ぞう", false]
		], -1
	],
	["[構|こう][造|ぞう]", "構造", ["こうぞう"],
		[
			["構", "こう", false],
			["造", "ぞう", false]
		], -1
	],
	["[造|つく]*5", "造", ["つく"],
		[
			["造", "つく", false]
		], -1
	],
	["[造|ぞう][船|せん]", "造船", ["ぞうせん"],
		[
			["造", "ぞう", false],
			["船", "せん", false]
		], -1
	],
	["(製|せい)[造|ぞう]", "製造", ["せいぞう"],
		[
			["製", "せい", true],
			["造", "ぞう", false]
		], "4520"
	],
	["(灰|はい)[色|いろ]", "灰色", ["はいいろ"],
		[
			["灰", "はい", true],
			["色", "いろ", false]
		], "5397"
	],
	["(灰|はい)[皿|ざら]", "灰皿", ["はいざら"],
		[
			["灰", "はい", true],
			["皿", "ざら", false]
		], "5398"
	],
	["(垂|すい)[直|ちょく]", "垂直", ["すいちょく"],
		[
			["垂", "すい", true],
			["直", "ちょく", false]
		], "5400"
	],
	["[技|ぎ][術|じゅつ]", "技術", ["ぎじゅつ"],
		[
			["技", "ぎ", false],
			["術", "じゅつ", false]
		], -1
	],
	["[演|えん][技|ぎ]", "演技", ["えんぎ"],
		[
			["演", "えん", false],
			["技", "ぎ", false]
		], -1
	],
	["[競|きょう][技|ぎ]", "競技", ["きょうぎ"],
		[
			["競", "きょう", false],
			["技", "ぎ", false]
		], -1
	],
	["[技|ぎ](師|し)", "技師", ["ぎし"],
		[
			["技", "ぎ", false],
			["師", "し", true]
		], "4561"
	],
	["(穀|こく)[物|もつ]", "穀物", ["こくもつ"],
		[
			["穀", "こく", true],
			["物", "もつ", false]
		], "5401"
	],
	["[回|かい][復|ふく]", "回復", ["かいふく"],
		[
			["回", "かい", false],
			["復", "ふく", false]
		], -1
	],
	["[復|ふく][習|しゅう]", "復習", ["ふくしゅう"],
		[
			["復", "ふく", false],
			["習", "しゅう", false]
		], -1
	],
	["(往|おう)[復|ふく]", "往復", ["おうふく"],
		[
			["往", "おう", true],
			["復", "ふく", false]
		], "4897"
	],
	["[移|うつ]*す", "移", ["うつ"],
		[
			["移", "うつ", false]
		], -1
	],
	["[移|うつ]*5", "移", ["うつ"],
		[
			["移", "うつ", false]
		], -1
	],
	["[移|い][動|どう]", "移動", ["いどう"],
		[
			["移", "い", false],
			["動", "どう", false]
		], -1
	],
	["[移|い][転|てん]", "移転", ["いてん"],
		[
			["移", "い", false],
			["転", "てん", false]
		], -1
	],
	["{～}[個|こ]", "～個", ["こ"],
		[
			["～", null, false],
			["個", "こ", false]
		], -1
	],
	["[個|こ][人|じん]", "個人", ["こじん"],
		[
			["個", "こ", false],
			["人", "じん", false]
		], -1
	],
	["[個|こ][体|たい]", "個体", ["こたい"],
		[
			["個", "こ", false],
			["体", "たい", false]
		], -1
	],
	["[個|か][所|しょ]", "個所", ["かしょ"],
		[
			["個", "か", false],
			["所", "しょ", false]
		], -1
	],
	["[万|ばん](歳|ざい)", "万歳", ["ばんざい"],
		[
			["万", "ばん", false],
			["歳", "ざい", true]
		], "5407"
	],
	["[評|ひょう][価|か]", "評価", ["ひょうか"],
		[
			["評", "ひょう", false],
			["価", "か", false]
		], -1
	],
	["[評|ひょう][判|ばん]", "評判", ["ひょうばん"],
		[
			["評", "ひょう", false],
			["判", "ばん", false]
		], -1
	],
	["[評|ひょう](論|ろん)", "評論", ["ひょうろん"],
		[
			["評", "ひょう", false],
			["論", "ろん", true]
		], "4941"
	],
	["(批|ひ)[評|ひょう]", "批評", ["ひひょう"],
		[
			["批", "ひ", true],
			["評", "ひょう", false]
		], "5076"
	],
	["(企|き)[業|ぎょう]", "企業", ["きぎょう"],
		[
			["企", "き", true],
			["業", "ぎょう", false]
		], "5408"
	],
	["[非|ひ]{～}", "非～", ["ひ"],
		[
			["非", "ひ", false],
			["～", null, false]
		], -1
	],
	["[非|ひ][常|じょう]", "非常", ["ひじょう"],
		[
			["非", "ひ", false],
			["常", "じょう", false]
		], -1
	],
	["[非|ひ][常|じょう]に", "非常に", ["ひじょうに"],
		[
			["非", "ひ", false],
			["常", "じょう", false],
			["に", null, false]
		], -1
	],
	["[給|きゅう](与|よ)", "給与", ["きゅうよ"],
		[
			["給", "きゅう", false],
			["与", "よ", true]
		], "5411"
	],
	["{～}[製|せい]", "～製", ["せい"],
		[
			["～", null, false],
			["製", "せい", false]
		], -1
	],
	["[作|さく][製|せい]", "作製", ["さくせい"],
		[
			["作", "さく", false],
			["製", "せい", false]
		], -1
	],
	["[製|せい][作|さく]", "製作", ["せいさく"],
		[
			["製", "せい", false],
			["作", "さく", false]
		], -1
	],
	["[製|せい][品|ひん]", "製品", ["せいひん"],
		[
			["製", "せい", false],
			["品", "ひん", false]
		], -1
	],
	["[製|せい][造|ぞう]", "製造", ["せいぞう"],
		[
			["製", "せい", false],
			["造", "ぞう", false]
		], -1
	],
	["(援|えん)[助|じょ]", "援助", ["えんじょ"],
		[
			["援", "えん", true],
			["助", "じょ", false]
		], "5413"
	],
	["[財|ざい][産|さん]", "財産", ["ざいさん"],
		[
			["財", "ざい", false],
			["産", "さん", false]
		], -1
	],
	["[財|さい](布|ふ)", "財布", ["さいふ"],
		[
			["財", "さい", false],
			["布", "ふ", true]
		], "4789"
	],
	["[実|じっ](施|し)", "実施", ["じっし"],
		[
			["実", "じっ", false],
			["施", "し", true]
		], "5416"
	],
	["[常|じょう][識|しき]", "常識", ["じょうしき"],
		[
			["常", "じょう", false],
			["識", "しき", false]
		], -1
	],
	["[意|い][識|しき]", "意識", ["いしき"],
		[
			["意", "い", false],
			["識", "しき", false]
		], -1
	],
	["[知|ち][識|しき]", "知識", ["ちしき"],
		[
			["知", "ち", false],
			["識", "しき", false]
		], -1
	],
	["[標|ひょう][識|しき]", "標識", ["ひょうしき"],
		[
			["標", "ひょう", false],
			["識", "しき", false]
		], -1
	],
	["(井|い)[戸|ど]", "井戸", ["いど"],
		[
			["井", "い", true],
			["戸", "ど", false]
		], "5418"
	],
	["[相|そう](違|い)", "相違", ["そうい"],
		[
			["相", "そう", false],
			["違", "い", true]
		], "5420"
	],
	["(違|い)[反|はん]", "違反", ["いはん"],
		[
			["違", "い", true],
			["反", "はん", false]
		], "5424"
	],
	["[間|ま](違|ちが)い", "間違い", ["まちがい"],
		[
			["間", "ま", false],
			["違", "ちが", true],
			["い", null, false]
		], "5425"
	],
	["[間|ま](違|ちが)え*る", "間違え", ["まちがえ"],
		[
			["間", "ま", false],
			["違", "ちが", true],
			["え", null, false]
		], "5426"
	],
	["[先|さき][程|ほど]", "先程", ["さきほど"],
		[
			["先", "さき", false],
			["程", "ほど", false]
		], -1
	],
	["[成|なる][程|ほど]", "成程", ["なるほど"],
		[
			["成", "なる", false],
			["程", "ほど", false]
		], -1
	],
	["[方|ほう][程|てい][式|しき]", "方程式", ["ほうていしき"],
		[
			["方", "ほう", false],
			["程", "てい", false],
			["式", "しき", false]
		], -1
	],
	["[日|にっ][程|てい]", "日程", ["にってい"],
		[
			["日", "にっ", false],
			["程", "てい", false]
		], -1
	],
	["[程|ほど]", "程", ["ほど"],
		[
			["程", "ほど", false]
		], -1
	],
	["[程|てい][度|ど]", "程度", ["ていど"],
		[
			["程", "てい", false],
			["度", "ど", false]
		], -1
	],
	["[課|か][程|てい]", "課程", ["かてい"],
		[
			["課", "か", false],
			["程", "てい", false]
		], -1
	],
	["[過|か][程|てい]", "過程", ["かてい"],
		[
			["過", "か", false],
			["程", "てい", false]
		], -1
	],
	["[新|しん](鮮|せん)", "新鮮", ["しんせん"],
		[
			["新", "しん", false],
			["鮮", "せん", true]
		], "5427"
	],
	["[応|おう][接|せつ]", "応接", ["おうせつ"],
		[
			["応", "おう", false],
			["接", "せつ", false]
		], -1
	],
	["[接|せっ]する", "接する", ["せっする"],
		[
			["接", "せっ", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["[接|せつ][続|ぞく]", "接続", ["せつぞく"],
		[
			["接", "せつ", false],
			["続", "ぞく", false]
		], -1
	],
	["[接|せっ][近|きん]", "接近", ["せっきん"],
		[
			["接", "せっ", false],
			["近", "きん", false]
		], -1
	],
	["[直|ちょく][接|せつ]", "直接", ["ちょくせつ"],
		[
			["直", "ちょく", false],
			["接", "せつ", false]
		], -1
	],
	["[間|かん][接|せつ]", "間接", ["かんせつ"],
		[
			["間", "かん", false],
			["接", "せつ", false]
		], -1
	],
	["[面|めん][接|せつ]", "面接", ["めんせつ"],
		[
			["面", "めん", false],
			["接", "せつ", false]
		], -1
	],
	["[助|じょ][教|きょう][授|じゅ]", "助教授", ["じょきょうじゅ"],
		[
			["助", "じょ", false],
			["教", "きょう", false],
			["授", "じゅ", false]
		], -1
	],
	["[授|じゅ][業|ぎょう]", "授業", ["じゅぎょう"],
		[
			["授", "じゅ", false],
			["業", "ぎょう", false]
		], -1
	],
	["[教|きょう][授|じゅ]", "教授", ["きょうじゅ"],
		[
			["教", "きょう", false],
			["授", "じゅ", false]
		], -1
	],
	["(審|しん)[判|ぱん]", "審判", ["しんぱん"],
		[
			["審", "しん", true],
			["判", "ぱん", false]
		], "5430"
	],
	["[効|き]*く", "効", ["き"],
		[
			["効", "き", false]
		], -1
	],
	["[効|こう][力|りょく]", "効力", ["こうりょく"],
		[
			["効", "こう", false],
			["力", "りょく", false]
		], -1
	],
	["[効|こう][果|か]", "効果", ["こうか"],
		[
			["効", "こう", false],
			["果", "か", false]
		], -1
	],
	["[有|ゆう][効|こう]", "有効", ["ゆうこう"],
		[
			["有", "ゆう", false],
			["効", "こう", false]
		], -1
	],
	["(欧|おう)[米|べい]", "欧米", ["おうべい"],
		[
			["欧", "おう", true],
			["米", "べい", false]
		], "5433"
	],
	["[旧|きゅう]", "旧", ["きゅう"],
		[
			["旧", "きゅう", false]
		], -1
	],
	["[医|い][師|し]", "医師", ["いし"],
		[
			["医", "い", false],
			["師", "し", false]
		], -1
	],
	["[技|ぎ][師|し]", "技師", ["ぎし"],
		[
			["技", "ぎ", false],
			["師", "し", false]
		], -1
	],
	["[教|きょう][師|し]", "教師", ["きょうし"],
		[
			["教", "きょう", false],
			["師", "し", false]
		], -1
	],
	["[漁|りょう][師|し]", "漁師", ["りょうし"],
		[
			["漁", "りょう", false],
			["師", "し", false]
		], -1
	],
	["(講|こう)[師|し]", "講師", ["こうし"],
		[
			["講", "こう", true],
			["師", "し", false]
		], "4606"
	],
	["(被|ひ)[害|がい]", "被害", ["ひがい"],
		[
			["被", "ひ", true],
			["害", "がい", false]
		], "5438"
	],
	["{～}[易|やす]い", "～易い", ["やすい"],
		[
			["～", null, false],
			["易", "やす", false],
			["い", null, false]
		], -1
	],
	["[安|あん][易|い]", "安易", ["あんい"],
		[
			["安", "あん", false],
			["易", "い", false]
		], -1
	],
	["[容|よう][易|い]", "容易", ["ようい"],
		[
			["容", "よう", false],
			["易", "い", false]
		], -1
	],
	["[易|やさ]しい", "易しい", ["やさしい"],
		[
			["易", "やさ", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["(貿|ぼう)[易|えき]", "貿易", ["ぼうえき"],
		[
			["貿", "ぼう", true],
			["易", "えき", false]
		], "4604"
	],
	["[券|けん]", "券", ["けん"],
		[
			["券", "けん", false]
		], -1
	],
	["[回|かい][数|すう][券|けん]", "回数券", ["かいすうけん"],
		[
			["回", "かい", false],
			["数", "すう", false],
			["券", "けん", false]
		], -1
	],
	["[定|てい][期|き][券|けん]", "定期券", ["ていきけん"],
		[
			["定", "てい", false],
			["期", "き", false],
			["券", "けん", false]
		], -1
	],
	["[破|やぶ]*く", "破", ["やぶ"],
		[
			["破", "やぶ", false]
		], -1
	],
	["[破|やぶ]*5", "破", ["やぶ"],
		[
			["破", "やぶ", false]
		], -1
	],
	["[破|やぶ]れ*る", "破れ", ["やぶれ"],
		[
			["破", "やぶ", false],
			["れ", null, false]
		], -1
	],
	["[破|は][産|さん]", "破産", ["はさん"],
		[
			["破", "は", false],
			["産", "さん", false]
		], -1
	],
	["[破|は](片|へん)", "破片", ["はへん"],
		[
			["破", "は", false],
			["片", "へん", true]
		], "5307"
	],
	["{～}[編|へん]", "～編", ["へん"],
		[
			["～", null, false],
			["編", "へん", false]
		], -1
	],
	["[編|あ]*む", "編", ["あ"],
		[
			["編", "あ", false]
		], -1
	],
	["[編|あみ][物|もの]", "編物", ["あみもの"],
		[
			["編", "あみ", false],
			["物", "もの", false]
		], -1
	],
	["[編|へん][集|しゅう]", "編集", ["へんしゅう"],
		[
			["編", "へん", false],
			["集", "しゅう", false]
		], -1
	],
	["[短|たん][編|ぺん]", "短編", ["たんぺん"],
		[
			["短", "たん", false],
			["編", "ぺん", false]
		], -1
	],
	["[責|せ]め*る", "責め", ["せめ"],
		[
			["責", "せ", false],
			["め", null, false]
		], -1
	],
	["[責|せき][任|にん]", "責任", ["せきにん"],
		[
			["責", "せき", false],
			["任", "にん", false]
		], -1
	],
	["[金|きん](融|ゆう)", "金融", ["きんゆう"],
		[
			["金", "きん", false],
			["融", "ゆう", true]
		], "5450"
	],
	["[修|しゅう][正|せい]", "修正", ["しゅうせい"],
		[
			["修", "しゅう", false],
			["正", "せい", false]
		], -1
	],
	["[修|しゅう][理|り]", "修理", ["しゅうり"],
		[
			["修", "しゅう", false],
			["理", "り", false]
		], -1
	],
	["[研|けん][修|しゅう]", "研修", ["けんしゅう"],
		[
			["研", "けん", false],
			["修", "しゅう", false]
		], -1
	],
	["[状|じょう](況|きょう)", "状況", ["じょうきょう"],
		[
			["状", "じょう", false],
			["況", "きょう", true]
		], "5452"
	],
	["[採|と]*5", "採", ["と"],
		[
			["採", "と", false]
		], -1
	],
	["[採|さい][点|てん]", "採点", ["さいてん"],
		[
			["採", "さい", false],
			["点", "てん", false]
		], -1
	],
	["[組|そ][織|しき]", "組織", ["そしき"],
		[
			["組", "そ", false],
			["織", "しき", false]
		], -1
	],
	["(突|つ)き[当|あ]たり", "突き当たり", ["つきあたり"],
		[
			["突", "つ", true],
			["き", null, false],
			["当", "あ", false],
			["た", null, false],
			["り", null, false]
		], "5459"
	],
	["(突|つ)き[当|あ]た*5", "突き当た", ["つきあた"],
		[
			["突", "つ", true],
			["き", null, false],
			["当", "あ", false],
			["た", null, false]
		], "5460"
	],
	["(突|とつ)[然|ぜん]", "突然", ["とつぜん"],
		[
			["突", "とつ", true],
			["然", "ぜん", false]
		], "5462"
	],
	["[事|じ][故|こ]", "事故", ["じこ"],
		[
			["事", "じ", false],
			["故", "こ", false]
		], -1
	],
	["[故|こ](障|しょう)", "故障", ["こしょう"],
		[
			["故", "こ", false],
			["障", "しょう", true]
		], "5157"
	],
	["[申|しん](請|せい)", "申請", ["しんせい"],
		[
			["申", "しん", false],
			["請", "せい", true]
		], "5466"
	],
	["[弁|べん][当|とう]", "弁当", ["べんとう"],
		[
			["弁", "べん", false],
			["当", "とう", false]
		], -1
	],
	["[原|げん][因|いん]", "原因", ["げんいん"],
		[
			["原", "げん", false],
			["因", "いん", false]
		], -1
	],
	["[因|よ]*5", "因", ["よ"],
		[
			["因", "よ", false]
		], -1
	],
	["(豊|ほう)[富|ふ]", "豊富", ["ほうふ"],
		[
			["豊", "ほう", true],
			["富", "ふ", false]
		], "4720"
	],
	["[貿|ぼう][易|えき]", "貿易", ["ぼうえき"],
		[
			["貿", "ぼう", false],
			["易", "えき", false]
		], -1
	],
	["[休|きゅう][講|こう]", "休講", ["きゅうこう"],
		[
			["休", "きゅう", false],
			["講", "こう", false]
		], -1
	],
	["[講|こう][師|し]", "講師", ["こうし"],
		[
			["講", "こう", false],
			["師", "し", false]
		], -1
	],
	["[講|こう][演|えん]", "講演", ["こうえん"],
		[
			["講", "こう", false],
			["演", "えん", false]
		], -1
	],
	["[講|こう][義|ぎ]", "講義", ["こうぎ"],
		[
			["講", "こう", false],
			["義", "ぎ", false]
		], -1
	],
	["[講|こう][堂|どう]", "講堂", ["こうどう"],
		[
			["講", "こう", false],
			["堂", "どう", false]
		], -1
	],
	["[水|すい][素|そ]", "水素", ["すいそ"],
		[
			["水", "すい", false],
			["素", "そ", false]
		], -1
	],
	["[素|もと]", "素", ["もと"],
		[
			["素", "もと", false]
		], -1
	],
	["[素人|しろうと]", "素人", ["しろうと"],
		[
			["素人", "しろうと", false]
		], -1
	],
	["[素|す][直|なお]", "素直", ["すなお"],
		[
			["素", "す", false],
			["直", "なお", false]
		], -1
	],
	["[素|そ][質|しつ]", "素質", ["そしつ"],
		[
			["素", "そ", false],
			["質", "しつ", false]
		], -1
	],
	["[要|よう][素|そ]", "要素", ["ようそ"],
		[
			["要", "よう", false],
			["素", "そ", false]
		], -1
	],
	["[素|す][晴|ば]らしい", "素晴らしい", ["すばらしい"],
		[
			["素", "す", false],
			["晴", "ば", false],
			["ら", null, false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["(誕|たん)(生|じょう)[日|び]", "誕生日", ["たんじょうび"],
		[
			["誕", "たん", true],
			["生", "じょう", true],
			["日", "び", false]
		], -1
	],
	["[河|かわ]", "河", ["かわ"],
		[
			["河", "かわ", false]
		], -1
	],
	["[運|うん][河|が]", "運河", ["うんが"],
		[
			["運", "うん", false],
			["河", "が", false]
		], -1
	],
	["[適|てき]する", "適する", ["てきする"],
		[
			["適", "てき", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["[適|てき][切|せつ]", "適切", ["てきせつ"],
		[
			["適", "てき", false],
			["切", "せつ", false]
		], -1
	],
	["[適|てき][度|ど]", "適度", ["てきど"],
		[
			["適", "てき", false],
			["度", "ど", false]
		], -1
	],
	["[適|てき][当|とう]", "適当", ["てきとう"],
		[
			["適", "てき", false],
			["当", "とう", false]
		], -1
	],
	["[適|てき][用|よう]", "適用", ["てきよう"],
		[
			["適", "てき", false],
			["用", "よう", false]
		], -1
	],
	["[適|てき][確|かく]", "適確", ["てきかく"],
		[
			["適", "てき", false],
			["確", "かく", false]
		], -1
	],
	["(快|かい)[適|てき]", "快適", ["かいてき"],
		[
			["快", "かい", true],
			["適", "てき", false]
		], "4850"
	],
	["(超|ちょう)[過|か]", "超過", ["ちょうか"],
		[
			["超", "ちょう", true],
			["過", "か", false]
		], "5489"
	],
	["訳", "訳", ["やく", "わけ"],
		[], null
	],
	["[主|しゅ][婦|ふ]", "主婦", ["しゅふ"],
		[
			["主", "しゅ", false],
			["婦", "ふ", false]
		], -1
	],
	["[夫|ふう][婦|ふ]", "夫婦", ["ふうふ"],
		[
			["夫", "ふう", false],
			["婦", "ふ", false]
		], -1
	],
	["[婦|ふ][人|じん]", "婦人", ["ふじん"],
		[
			["婦", "ふ", false],
			["人", "じん", false]
		], -1
	],
	["(看|かん)[護|ご][婦|ふ]", "看護婦", ["かんごふ"],
		[
			["看", "かん", true],
			["護", "ご", false],
			["婦", "ふ", false]
		], "5297"
	],
	["[医|い](療|りょう)", "医療", ["いりょう"],
		[
			["医", "い", false],
			["療", "りょう", true]
		], "5490"
	],
	["[寄|よ]せ*る", "寄せ", ["よせ"],
		[
			["寄", "よ", false],
			["せ", null, false]
		], -1
	],
	["[寄|よ]*5", "寄", ["よ"],
		[
			["寄", "よ", false]
		], -1
	],
	["[寄|き][付|ふ]", "寄付", ["きふ"],
		[
			["寄", "き", false],
			["付", "ふ", false]
		], -1
	],
	["[年|とし][寄|より]", "年寄", ["としより"],
		[
			["年", "とし", false],
			["寄", "より", false]
		], -1
	],
	["[近|ちか][寄|よ]*5", "近寄", ["ちかよ"],
		[
			["近", "ちか", false],
			["寄", "よ", false]
		], -1
	],
	["(片|かた)[寄|よ]*5", "片寄", ["かたよ"],
		[
			["片", "かた", true],
			["寄", "よ", false]
		], "5305"
	],
	["(振|ふ)り[向|む]*く", "振り向", ["ふりむ"],
		[
			["振", "ふ", true],
			["り", null, false],
			["向", "む", false]
		], "5496"
	],
	["(振|ふ)り(仮|が)[名|な]", "振り仮名", ["ふりがな"],
		[
			["振", "ふ", true],
			["り", null, false],
			["仮", "が", true],
			["名", "な", false]
		], "4846"
	],
	["[利|り][益|えき]", "利益", ["りえき"],
		[
			["利", "り", false],
			["益", "えき", false]
		], -1
	],
	["[余|あま]り", "余り", ["あまり"],
		[
			["余", "あま", false],
			["り", null, false]
		], -1
	],
	["[余|あま]*5", "余", ["あま"],
		[
			["余", "あま", false]
		], -1
	],
	["[余|よ][分|ぶん]", "余分", ["よぶん"],
		[
			["余", "よ", false],
			["分", "ぶん", false]
		], -1
	],
	["[余|よ][所|そ]", "余所", ["よそ"],
		[
			["余", "よ", false],
			["所", "そ", false]
		], -1
	],
	["[余|よ][計|けい]", "余計", ["よけい"],
		[
			["余", "よ", false],
			["計", "けい", false]
		], -1
	],
	["[映|えい][画|が]", "映画", ["えいが"],
		[
			["映", "えい", false],
			["画", "が", false]
		], -1
	],
	["[映|えい][画|が][館|かん]", "映画館", ["えいがかん"],
		[
			["映", "えい", false],
			["画", "が", false],
			["館", "かん", false]
		], -1
	],
	["[出|で](迎|むか)え", "出迎え", ["でむかえ"],
		[
			["出", "で", false],
			["迎", "むか", true],
			["え", null, false]
		], "5500"
	],
	["[出|で](迎|むか)え*る", "出迎え", ["でむかえ"],
		[
			["出", "で", false],
			["迎", "むか", true],
			["え", null, false]
		], "5501"
	],
	["(販|はん)[売|ばい]", "販売", ["はんばい"],
		[
			["販", "はん", true],
			["売", "ばい", false]
		], "5505"
	],
	["[禁|きん][止|し]", "禁止", ["きんし"],
		[
			["禁", "きん", false],
			["止", "し", false]
		], -1
	],
	["[文|ぶん](献|けん)", "文献", ["ぶんけん"],
		[
			["文", "ぶん", false],
			["献", "けん", true]
		], "5506"
	],
	["(献|こん)[立|だて]", "献立", ["こんだて"],
		[
			["献", "こん", true],
			["立", "だて", false]
		], "5507"
	],
	["[逆|ぎゃく]", "逆", ["ぎゃく"],
		[
			["逆", "ぎゃく", false]
		], -1
	],
	["[逆|さか]さ", "逆さ", ["さかさ"],
		[
			["逆", "さか", false],
			["さ", null, false]
		], -1
	],
	["[逆|さか]ら*う", "逆ら", ["さから"],
		[
			["逆", "さか", false],
			["ら", null, false]
		], -1
	],
	["[逆|さか][様|さま]", "逆様", ["さかさま"],
		[
			["逆", "さか", false],
			["様", "さま", false]
		], -1
	],
	["故郷", "故郷", ["こきょう", "ふるさと"],
		[], null
	],
	["[久|ひさ]しぶり", "久しぶり", ["ひさしぶり"],
		[
			["久", "ひさ", false],
			["し", null, false],
			["ぶ", null, false],
			["り", null, false]
		], -1
	],
	["(永|えい)[久|きゅう]", "永久", ["えいきゅう"],
		[
			["永", "えい", true],
			["久", "きゅう", false]
		], "4772"
	],
	["(維|い)[持|じ]", "維持", ["いじ"],
		[
			["維", "い", true],
			["持", "じ", false]
		], "5509"
	],
	["[夫|ふ][妻|さい]", "夫妻", ["ふさい"],
		[
			["夫", "ふ", false],
			["妻", "さい", false]
		], -1
	],
	["[妻|つま]", "妻", ["つま"],
		[
			["妻", "つま", false]
		], -1
	],
	["(彼|かの)[女|じょ]", "彼女", ["かのじょ"],
		[
			["彼", "かの", true],
			["女", "じょ", false]
		], "5513"
	],
	["(彼|かれ)[等|ら]", "彼等", ["かれら"],
		[
			["彼", "かれ", true],
			["等", "ら", false]
		], "5514"
	],
	["[暴|あば]れ*る", "暴れ", ["あばれ"],
		[
			["暴", "あば", false],
			["れ", null, false]
		], -1
	],
	["(乱|らん)[暴|ぼう]", "乱暴", ["らんぼう"],
		[
			["乱", "らん", true],
			["暴", "ぼう", false]
		], "5169"
	],
	["[一|いっ](般|ぱん)", "一般", ["いっぱん"],
		[
			["一", "いっ", false],
			["般", "ぱん", true]
		], "5515"
	],
	["[全|ぜん](般|ぱん)", "全般", ["ぜんぱん"],
		[
			["全", "ぜん", false],
			["般", "ぱん", true]
		], "5516"
	],
	["[険|けわ]しい", "険しい", ["けわしい"],
		[
			["険", "けわ", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[若|わか]い", "若い", ["わかい"],
		[
			["若", "わか", false],
			["い", null, false]
		], -1
	],
	["(危|き)[険|けん]", "危険", ["きけん"],
		[
			["危", "き", true],
			["険", "けん", false]
		], "5104"
	],
	["[平|へい][均|きん]", "平均", ["へいきん"],
		[
			["平", "へい", false],
			["均", "きん", false]
		], -1
	],
	["(舞|ぶ)[台|たい]", "舞台", ["ぶたい"],
		[
			["舞", "ぶ", true],
			["台", "たい", false]
		], "5520"
	],
	["[見|み](舞|ま)い", "見舞い", ["みまい"],
		[
			["見", "み", false],
			["舞", "ま", true],
			["い", null, false]
		], "5521"
	],
	["[見|み](舞|ま)*う", "見舞", ["みま"],
		[
			["見", "み", false],
			["舞", "ま", true]
		], "5522"
	],
	["[気|き][圧|あつ]", "気圧", ["きあつ"],
		[
			["気", "き", false],
			["圧", "あつ", false]
		], -1
	],
	["[血|けつ][圧|あつ]", "血圧", ["けつあつ"],
		[
			["血", "けつ", false],
			["圧", "あつ", false]
		], -1
	],
	["[圧|あっ](縮|しゅく)", "圧縮", ["あっしゅく"],
		[
			["圧", "あっ", false],
			["縮", "しゅく", true]
		], "5224"
	],
	["[小|こ](遣|づか)い", "小遣い", ["こづかい"],
		[
			["小", "こ", false],
			["遣", "づか", true],
			["い", null, false]
		], "5524"
	],
	["[言|こと][葉|ば](遣|づか)い", "言葉遣い", ["ことばづかい"],
		[
			["言", "こと", false],
			["葉", "ば", false],
			["遣", "づか", true],
			["い", null, false]
		], "5525"
	],
	["(仮|か)[名|な](遣|づか)い", "仮名遣い", ["かなづかい"],
		[
			["仮", "か", true],
			["名", "な", false],
			["遣", "づか", true],
			["い", null, false]
		], "4847"
	],
	["[許|ゆる]*す", "許", ["ゆる"],
		[
			["許", "ゆる", false]
		], -1
	],
	["[許|きょ][可|か]", "許可", ["きょか"],
		[
			["許", "きょ", false],
			["可", "か", false]
		], -1
	],
	["[反|はん](抗|こう)", "反抗", ["はんこう"],
		[
			["反", "はん", false],
			["抗", "こう", true]
		], "5527"
	],
	["[書|かき][留|とめ]", "書留", ["かきとめ"],
		[
			["書", "かき", false],
			["留", "とめ", false]
		], -1
	],
	["[留|と]め*る", "留め", ["とめ"],
		[
			["留", "と", false],
			["め", null, false]
		], -1
	],
	["[留|りゅう][学|がく]", "留学", ["りゅうがく"],
		[
			["留", "りゅう", false],
			["学", "がく", false]
		], -1
	],
	["[留|る][守|す]", "留守", ["るす"],
		[
			["留", "る", false],
			["守", "す", false]
		], -1
	],
	["[留|る][守|す][番|ばん]", "留守番", ["るすばん"],
		[
			["留", "る", false],
			["守", "す", false],
			["番", "ばん", false]
		], -1
	],
	["[停|てい][留|りゅう][所|じょ]", "停留所", ["ていりゅうじょ"],
		[
			["停", "てい", false],
			["留", "りゅう", false],
			["所", "じょ", false]
		], -1
	],
	["[人|ひと](込|ご)み", "人込み", ["ひとごみ"],
		[
			["人", "ひと", false],
			["込", "ご", true],
			["み", null, false]
		], "5530"
	],
	["[引|ひ]っ(込|こ)*む", "引っ込", ["ひっこ"],
		[
			["引", "ひ", false],
			["っ", null, false],
			["込", "こ", true]
		], "5531"
	],
	["[思|おも]い(込|こ)*む", "思い込", ["おもいこ"],
		[
			["思", "おも", false],
			["い", null, false],
			["込", "こ", true]
		], "5532"
	],
	["[申|もう]し(込|こ)*む", "申し込", ["もうしこ"],
		[
			["申", "もう", false],
			["し", null, false],
			["込", "こ", true]
		], "5533"
	],
	["[飛|と]び(込|こ)*む", "飛び込", ["とびこ"],
		[
			["飛", "と", false],
			["び", null, false],
			["込", "こ", true]
		], "5535"
	],
	["[罪|つみ]", "罪", ["つみ"],
		[
			["罪", "つみ", false]
		], -1
	],
	["(犯|はん)[罪|ざい]", "犯罪", ["はんざい"],
		[
			["犯", "はん", true],
			["罪", "ざい", false]
		], "4782"
	],
	["(緊|きん)[張|ちょう]", "緊張", ["きんちょう"],
		[
			["緊", "きん", true],
			["張", "ちょう", false]
		], "5538"
	],
	["[興|きょう][味|み]", "興味", ["きょうみ"],
		[
			["興", "きょう", false],
			["味", "み", false]
		], -1
	],
	["[乗|の]り(換|か)え*る", "乗り換え", ["のりかえ"],
		[
			["乗", "の", false],
			["り", null, false],
			["換", "か", true],
			["え", null, false]
		], "5539"
	],
	["[乗|の](換|りかえ)", "乗換", ["のりかえ"],
		[
			["乗", "の", false],
			["換", "りかえ", true]
		], "5540"
	],
	["[交|こう](換|かん)", "交換", ["こうかん"],
		[
			["交", "こう", false],
			["換", "かん", true]
		], "5541"
	],
	["(換|かん)[気|き]", "換気", ["かんき"],
		[
			["換", "かん", true],
			["気", "き", false]
		], "5543"
	],
	["[精|せい][々|ぜい]", "精々", ["せいぜい"],
		[
			["精", "せい", false],
			["々", "ぜい", false]
		], -1
	],
	["[精|せい][神|しん]", "精神", ["せいしん"],
		[
			["精", "せい", false],
			["神", "しん", false]
		], -1
	],
	["[不|ふ][規|き][則|そく]", "不規則", ["ふきそく"],
		[
			["不", "ふ", false],
			["規", "き", false],
			["則", "そく", false]
		], -1
	],
	["[法|ほう][則|そく]", "法則", ["ほうそく"],
		[
			["法", "ほう", false],
			["則", "そく", false]
		], -1
	],
	["[規|き][則|そく]", "規則", ["きそく"],
		[
			["規", "き", false],
			["則", "そく", false]
		], -1
	],
	["[予|よ][測|そく]", "予測", ["よそく"],
		[
			["予", "よ", false],
			["測", "そく", false]
		], -1
	],
	["[測|はか]*5", "測", ["はか"],
		[
			["測", "はか", false]
		], -1
	],
	["[測|そく][定|てい]", "測定", ["そくてい"],
		[
			["測", "そく", false],
			["定", "てい", false]
		], -1
	],
	["[測|そく][量|りょう]", "測量", ["そくりょう"],
		[
			["測", "そく", false],
			["量", "りょう", false]
		], -1
	],
	["[観|かん][測|そく]", "観測", ["かんそく"],
		[
			["観", "かん", false],
			["測", "そく", false]
		], -1
	],
	["[信|しん](頼|らい)", "信頼", ["しんらい"],
		[
			["信", "しん", false],
			["頼", "らい", true]
		], "5547"
	],
	["[同|どう](僚|りょう)", "同僚", ["どうりょう"],
		[
			["同", "どう", false],
			["僚", "りょう", true]
		], "5551"
	],
	["[豊|ゆた]か", "豊か", ["ゆたか"],
		[
			["豊", "ゆた", false],
			["か", null, false]
		], -1
	],
	["[豊|ほう][富|ふ]", "豊富", ["ほうふ"],
		[
			["豊", "ほう", false],
			["富", "ふ", false]
		], -1
	],
	["[厚|あつ]い", "厚い", ["あつい"],
		[
			["厚", "あつ", false],
			["い", null, false]
		], -1
	],
	["[厚|あつ]かましい", "厚かましい", ["あつかましい"],
		[
			["厚", "あつ", false],
			["か", null, false],
			["ま", null, false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["お[手|て](洗|あら)い", "お手洗い", ["おてあらい"],
		[
			["お", null, false],
			["手", "て", false],
			["洗", "あら", true],
			["い", null, false]
		], -1
	],
	["[中|ちゅう](途|と)", "中途", ["ちゅうと"],
		[
			["中", "ちゅう", false],
			["途", "と", true]
		], "5553"
	],
	["[用|よう](途|と)", "用途", ["ようと"],
		[
			["用", "よう", false],
			["途", "と", true]
		], "5554"
	],
	["(途|と)[中|ちゅう]", "途中", ["とちゅう"],
		[
			["途", "と", true],
			["中", "ちゅう", false]
		], "5555"
	],
	["[略|りゃく]*す", "略", ["りゃく"],
		[
			["略", "りゃく", false]
		], -1
	],
	["[省略|しょうりゃく]", "省略", ["しょうりゃく"],
		[
			["省略", "しょうりゃく", false]
		], -1
	],
	["(踏|ふみ)[切|きり]", "踏切", ["ふみきり"],
		[
			["踏", "ふみ", true],
			["切", "きり", false]
		], "5557"
	],
	["[承|うけたまわ]*5", "承", ["うけたまわ"],
		[
			["承", "うけたまわ", false]
		], -1
	],
	["[承|しょう][知|ち]", "承知", ["しょうち"],
		[
			["承", "しょう", false],
			["知", "ち", false]
		], -1
	],
	["[承|しょう](認|にん)", "承認", ["しょうにん"],
		[
			["承", "しょう", false],
			["認", "にん", true]
		], "4927"
	],
	["[絶|た]えず", "絶えず", ["たえず"],
		[
			["絶", "た", false],
			["え", null, false],
			["ず", null, false]
		], -1
	],
	["[絶|ぜっ][対|たい]", "絶対", ["ぜったい"],
		[
			["絶", "ぜっ", false],
			["対", "たい", false]
		], -1
	],
	["[出|しゅっ][版|ぱん]", "出版", ["しゅっぱん"],
		[
			["出", "しゅっ", false],
			["版", "ぱん", false]
		], -1
	],
	["(爆|ばく)[発|はつ]", "爆発", ["ばくはつ"],
		[
			["爆", "ばく", true],
			["発", "はつ", false]
		], "5565"
	],
	["[損|そん]", "損", ["そん"],
		[
			["損", "そん", false]
		], -1
	],
	["[損|そん][害|がい]", "損害", ["そんがい"],
		[
			["損", "そん", false],
			["害", "がい", false]
		], -1
	],
	["[損|そん][得|とく]", "損得", ["そんとく"],
		[
			["損", "そん", false],
			["得", "とく", false]
		], -1
	],
	["(儀|ぎ)[式|しき]", "儀式", ["ぎしき"],
		[
			["儀", "ぎ", true],
			["式", "しき", false]
		], "5566"
	],
	["[行|ぎょう](儀|ぎ)", "行儀", ["ぎょうぎ"],
		[
			["行", "ぎょう", false],
			["儀", "ぎ", true]
		], "5567"
	],
	["[仏|ほとけ]", "仏", ["ほとけ"],
		[
			["仏", "ほとけ", false]
		], -1
	],
	["(継|けい)[続|ぞく]", "継続", ["けいぞく"],
		[
			["継", "けい", true],
			["続", "ぞく", false]
		], "5570"
	],
	["[実|じっ][績|せき]", "実績", ["じっせき"],
		[
			["実", "じっ", false],
			["績", "せき", false]
		], -1
	],
	["[成|せい][績|せき]", "成績", ["せいせき"],
		[
			["成", "せい", false],
			["績", "せき", false]
		], -1
	],
	["[功績|こうせき]", "功績", ["こうせき"],
		[
			["功績", "こうせき", false]
		], -1
	],
	["[座|すわ]*5", "座", ["すわ"],
		[
			["座", "すわ", false]
		], -1
	],
	["(葬|そう)[式|しき]", "葬式", ["そうしき"],
		[
			["葬", "そう", true],
			["式", "しき", false]
		], "5573"
	],
	["[建|けん][築|ちく]", "建築", ["けんちく"],
		[
			["建", "けん", false],
			["築", "ちく", false]
		], -1
	],
	["[意|い][志|し]", "意志", ["いし"],
		[
			["意", "い", false],
			["志", "し", false]
		], -1
	],
	["[降|お]り*る", "降り", ["おり"],
		[
			["降", "お", false],
			["り", null, false]
		], -1
	],
	["[降|ふ]*5", "降", ["ふ"],
		[
			["降", "ふ", false]
		], -1
	],
	["(普|ふ)[通|つう]", "普通", ["ふつう"],
		[
			["普", "ふ", true],
			["通", "つう", false]
		], "5580"
	],
	["紅葉", "紅葉", ["こうよう", "もみじ"],
		[], null
	],
	["[混|ま]ざ*5", "混ざ", ["まざ"],
		[
			["混", "ま", false],
			["ざ", null, false]
		], -1
	],
	["[混|ま]じ*5", "混じ", ["まじ"],
		[
			["混", "ま", false],
			["じ", null, false]
		], -1
	],
	["[混|ま]ぜ*る", "混ぜ", ["まぜ"],
		[
			["混", "ま", false],
			["ぜ", null, false]
		], -1
	],
	["[混|こん][合|ごう]", "混合", ["こんごう"],
		[
			["混", "こん", false],
			["合", "ごう", false]
		], -1
	],
	["[混|こん](雑|ざつ)", "混雑", ["こんざつ"],
		[
			["混", "こん", false],
			["雑", "ざつ", true]
		], "4766"
	],
	["[混|こん](乱|らん)", "混乱", ["こんらん"],
		[
			["混", "こん", false],
			["乱", "らん", true]
		], "5170"
	],
	["(婚|こん)[約|やく]", "婚約", ["こんやく"],
		[
			["婚", "こん", true],
			["約", "やく", false]
		], "5582"
	],
	["[結|けっ](婚|こん)", "結婚", ["けっこん"],
		[
			["結", "けっ", false],
			["婚", "こん", true]
		], "5583"
	],
	["[住|じゅう][居|きょ]", "住居", ["じゅうきょ"],
		[
			["住", "じゅう", false],
			["居", "きょ", false]
		], -1
	],
	["[居|い][間|ま]", "居間", ["いま"],
		[
			["居", "い", false],
			["間", "ま", false]
		], -1
	],
	["[年|ねん](齢|れい)", "年齢", ["ねんれい"],
		[
			["年", "ねん", false],
			["齢", "れい", true]
		], "5585"
	],
	["[混|こん][雑|ざつ]", "混雑", ["こんざつ"],
		[
			["混", "こん", false],
			["雑", "ざつ", false]
		], -1
	],
	["[雑|ざつ][音|おん]", "雑音", ["ざつおん"],
		[
			["雑", "ざつ", false],
			["音", "おん", false]
		], -1
	],
	["(複|ふく)[雑|ざつ]", "複雑", ["ふくざつ"],
		[
			["複", "ふく", true],
			["雑", "ざつ", false]
		], "4800"
	],
	["[招|まね]*く", "招", ["まね"],
		[
			["招", "まね", false]
		], -1
	],
	["[招|しょう][待|たい]", "招待", ["しょうたい"],
		[
			["招", "しょう", false],
			["待", "たい", false]
		], -1
	],
	["[永|なが]い", "永い", ["ながい"],
		[
			["永", "なが", false],
			["い", null, false]
		], -1
	],
	["[永|えい][久|きゅう]", "永久", ["えいきゅう"],
		[
			["永", "えい", false],
			["久", "きゅう", false]
		], -1
	],
	["[永|えい][遠|えん]", "永遠", ["えいえん"],
		[
			["永", "えい", false],
			["遠", "えん", false]
		], -1
	],
	["{～}[刊|かん]", "～刊", ["かん"],
		[
			["～", null, false],
			["刊", "かん", false]
		], -1
	],
	["[夕|ゆう][刊|かん]", "夕刊", ["ゆうかん"],
		[
			["夕", "ゆう", false],
			["刊", "かん", false]
		], -1
	],
	["[想|そう][像|ぞう]", "想像", ["そうぞう"],
		[
			["想", "そう", false],
			["像", "ぞう", false]
		], -1
	],
	["(脱|だっ)[線|せん]", "脱線", ["だっせん"],
		[
			["脱", "だっ", true],
			["線", "せん", false]
		], "5595"
	],
	["(押|お)し[入|い]れ", "押し入れ", ["おしいれ"],
		[
			["押", "お", true],
			["し", null, false],
			["入", "い", false],
			["れ", null, false]
		], "5598"
	],
	["[賛|さん][成|せい]", "賛成", ["さんせい"],
		[
			["賛", "さん", false],
			["成", "せい", false]
		], -1
	],
	["[面|めん](倒|どう)", "面倒", ["めんどう"],
		[
			["面", "めん", false],
			["倒", "どう", true]
		], "5602"
	],
	["[犯|はん][人|にん]", "犯人", ["はんにん"],
		[
			["犯", "はん", false],
			["人", "にん", false]
		], -1
	],
	["[犯|はん][罪|ざい]", "犯罪", ["はんざい"],
		[
			["犯", "はん", false],
			["罪", "ざい", false]
		], -1
	],
	["[防|ぼう][犯|はん]", "防犯", ["ぼうはん"],
		[
			["防", "ぼう", false],
			["犯", "はん", false]
		], -1
	],
	["[完|かん](了|りょう)", "完了", ["かんりょう"],
		[
			["完", "かん", false],
			["了", "りょう", true]
		], "5603"
	],
	["[終|しゅう](了|りょう)", "終了", ["しゅうりょう"],
		[
			["終", "しゅう", false],
			["了", "りょう", true]
		], "5604"
	],
	["[分|ぶん][布|ぷ]", "分布", ["ぶんぷ"],
		[
			["分", "ぶん", false],
			["布", "ぷ", false]
		], -1
	],
	["[布|ぬの]", "布", ["ぬの"],
		[
			["布", "ぬの", false]
		], -1
	],
	["[布|ふ][団|とん]", "布団", ["ふとん"],
		[
			["布", "ふ", false],
			["団", "とん", false]
		], -1
	],
	["[財|さい][布|ふ]", "財布", ["さいふ"],
		[
			["財", "さい", false],
			["布", "ふ", false]
		], -1
	],
	["[毛|もう][布|ふ]", "毛布", ["もうふ"],
		[
			["毛", "もう", false],
			["布", "ふ", false]
		], -1
	],
	["(座|ざ)[布|ぶ][団|とん]", "座布団", ["ざぶとん"],
		[
			["座", "ざ", true],
			["布", "ぶ", false],
			["団", "とん", false]
		], "5084"
	],
	["(患|かん)[者|じゃ]", "患者", ["かんじゃ"],
		[
			["患", "かん", true],
			["者", "じゃ", false]
		], "5605"
	],
	["(締|し)め[切|き]る", "締め切る", ["しめきる"],
		[
			["締", "し", true],
			["め", null, false],
			["切", "き", false],
			["る", null, false]
		], "5607"
	],
	["(締|しめ)[切|きり]", "締切", ["しめきり"],
		[
			["締", "しめ", true],
			["切", "きり", false]
		], "5608"
	],
	["[属|ぞく]する", "属する", ["ぞくする"],
		[
			["属", "ぞく", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["[金|きん][属|ぞく]", "金属", ["きんぞく"],
		[
			["金", "きん", false],
			["属", "ぞく", false]
		], -1
	],
	["(執|しっ)[筆|ぴつ]", "執筆", ["しっぴつ"],
		[
			["執", "しっ", true],
			["筆", "ぴつ", false]
		], "5610"
	],
	["[複|ふく][写|しゃ]", "複写", ["ふくしゃ"],
		[
			["複", "ふく", false],
			["写", "しゃ", false]
		], -1
	],
	["[複|ふく][数|すう]", "複数", ["ふくすう"],
		[
			["複", "ふく", false],
			["数", "すう", false]
		], -1
	],
	["[複|ふく][雑|ざつ]", "複雑", ["ふくざつ"],
		[
			["複", "ふく", false],
			["雑", "ざつ", false]
		], -1
	],
	["[今|こん](晩|ばん)", "今晩", ["こんばん"],
		[
			["今", "こん", false],
			["晩", "ばん", true]
		], -1
	],
	["[毎|まい](晩|ばん)", "毎晩", ["まいばん"],
		[
			["毎", "まい", false],
			["晩", "ばん", true]
		], -1
	],
	["[連|れん](絡|らく)", "連絡", ["れんらく"],
		[
			["連", "れん", false],
			["絡", "らく", true]
		], "5611"
	],
	["[似|に]*る", "似", ["に"],
		[
			["似", "に", false]
		], -1
	],
	["[似|に][合|あ]う", "似合う", ["にあう"],
		[
			["似", "に", false],
			["合", "あ", false],
			["う", null, false]
		], -1
	],
	["[真|ま][似|ね]", "真似", ["まね"],
		[
			["真", "ま", false],
			["似", "ね", false]
		], -1
	],
	["[真|ま][似|ね]*る", "真似", ["まね"],
		[
			["真", "ま", false],
			["似", "ね", false]
		], -1
	],
	["[冷|れい](房|ぼう)", "冷房", ["れいぼう"],
		[
			["冷", "れい", false],
			["房", "ぼう", true]
		], "5613"
	],
	["[女|にょう](房|ぼう)", "女房", ["にょうぼう"],
		[
			["女", "にょう", false],
			["房", "ぼう", true]
		], "5614"
	],
	["[文|ぶん](房|ぼう)[具|ぐ]", "文房具", ["ぶんぼうぐ"],
		[
			["文", "ぶん", false],
			["房", "ぼう", true],
			["具", "ぐ", false]
		], "5615"
	],
	["(募|ぼ)[集|しゅう]", "募集", ["ぼしゅう"],
		[
			["募", "ぼ", true],
			["集", "しゅう", false]
		], "5617"
	],
	["[迷|まよ]*う", "迷", ["まよ"],
		[
			["迷", "まよ", false]
		], -1
	],
	["[迷|めい][信|しん]", "迷信", ["めいしん"],
		[
			["迷", "めい", false],
			["信", "しん", false]
		], -1
	],
	["[迷|まい][子|ご]", "迷子", ["まいご"],
		[
			["迷", "まい", false],
			["子", "ご", false]
		], -1
	],
	["[迷|めい](惑|わく)", "迷惑", ["めいわく"],
		[
			["迷", "めい", false],
			["惑", "わく", true]
		], "5590"
	],
	["[夢|ゆめ]", "夢", ["ゆめ"],
		[
			["夢", "ゆめ", false]
		], -1
	],
	["[夢|む][中|ちゅう]", "夢中", ["むちゅう"],
		[
			["夢", "む", false],
			["中", "ちゅう", false]
		], -1
	],
	["[支|し](払|はらい)", "支払", ["しはらい"],
		[
			["支", "し", false],
			["払", "はらい", true]
		], "5621"
	],
	["[支|し](払|はら)*う", "支払", ["しはら"],
		[
			["支", "し", false],
			["払", "はら", true]
		], "5622"
	],
	["[燃|も]え*る", "燃え", ["もえ"],
		[
			["燃", "も", false],
			["え", null, false]
		], -1
	],
	["[燃|も]や*す", "燃や", ["もや"],
		[
			["燃", "も", false],
			["や", null, false]
		], -1
	],
	["(御|ご)[主|しゅ][人|じん]", "御主人", ["ごしゅじん"],
		[
			["御", "ご", true],
			["主", "しゅ", false],
			["人", "じん", false]
		], "5691"
	],
	["(御|ご)[飯|はん]", "御飯", ["ごはん"],
		[
			["御", "ご", true],
			["飯", "はん", false]
		], "5692"
	],
	["[昼|ひる](御|ご)[飯|はん]", "昼御飯", ["ひるごはん"],
		[
			["昼", "ひる", false],
			["御", "ご", true],
			["飯", "はん", false]
		], "5693"
	],
	["(晩|ばん)(御|ご)[飯|はん]", "晩御飯", ["ばんごはん"],
		[
			["晩", "ばん", true],
			["御", "ご", true],
			["飯", "はん", false]
		], "5128"
	],
	["[朝|あさ](御|ご)[飯|はん]", "朝御飯", ["あさごはん"],
		[
			["朝", "あさ", false],
			["御", "ご", true],
			["飯", "はん", false]
		], "5695"
	],
	["[火|か][災|さい]", "火災", ["かさい"],
		[
			["火", "か", false],
			["災", "さい", false]
		], -1
	],
	["[災|さい](難|なん)", "災難", ["さいなん"],
		[
			["災", "さい", false],
			["難", "なん", true]
		], "4965"
	],
	["[預|あず]か*5", "預か", ["あずか"],
		[
			["預", "あず", false],
			["か", null, false]
		], -1
	],
	["[預|あず]け*る", "預け", ["あずけ"],
		[
			["預", "あず", false],
			["け", null, false]
		], -1
	],
	["[貸|か]し", "貸し", ["かし"],
		[
			["貸", "か", false],
			["し", null, false]
		], -1
	],
	["[貸|か]し[出|だ]し", "貸し出し", ["かしだし"],
		[
			["貸", "か", false],
			["し", null, false],
			["出", "だ", false],
			["し", null, false]
		], -1
	],
	["[貸|か]*す", "貸", ["か"],
		[
			["貸", "か", false]
		], -1
	],
	["[貸|かし][家|や]", "貸家", ["かしや"],
		[
			["貸", "かし", false],
			["家", "や", false]
		], -1
	],
	["[貸|かし][間|ま]", "貸間", ["かしま"],
		[
			["貸", "かし", false],
			["間", "ま", false]
		], -1
	],
	["[金|きん][銭|せん]", "金銭", ["きんせん"],
		[
			["金", "きん", false],
			["銭", "せん", false]
		], -1
	],
	["[群|む]れ", "群れ", ["むれ"],
		[
			["群", "む", false],
			["れ", null, false]
		], -1
	],
	["[感|かん][謝|しゃ]", "感謝", ["かんしゃ"],
		[
			["感", "かん", false],
			["謝", "しゃ", false]
		], -1
	],
	["[謝|あやま]*5", "謝", ["あやま"],
		[
			["謝", "あやま", false]
		], -1
	],
	["[選|せん](択|たく)", "選択", ["せんたく"],
		[
			["選", "せん", false],
			["択", "たく", true]
		], "5639"
	],
	["[仮|か][名|な]", "仮名", ["かな"],
		[
			["仮", "か", false],
			["名", "な", false]
		], -1
	],
	["[仮|か][定|てい]", "仮定", ["かてい"],
		[
			["仮", "か", false],
			["定", "てい", false]
		], -1
	],
	["[平|ひら][仮|が][名|な]", "平仮名", ["ひらがな"],
		[
			["平", "ひら", false],
			["仮", "が", false],
			["名", "な", false]
		], -1
	],
	["[送|おく]り[仮|が][名|な]", "送り仮名", ["おくりがな"],
		[
			["送", "おく", false],
			["り", null, false],
			["仮", "が", false],
			["名", "な", false]
		], -1
	],
	["(片|かた)[仮|か][名|な]", "片仮名", ["かたかな"],
		[
			["片", "かた", true],
			["仮", "か", false],
			["名", "な", false]
		], "5304"
	],
	["(振|ふ)り[仮|が][名|な]", "振り仮名", ["ふりがな"],
		[
			["振", "ふ", true],
			["り", null, false],
			["仮", "が", false],
			["名", "な", false]
		], "5498"
	],
	["[仮|か][名|な](遣|づか)い", "仮名遣い", ["かなづかい"],
		[
			["仮", "か", false],
			["名", "な", false],
			["遣", "づか", true],
			["い", null, false]
		], "5526"
	],
	["[特|とく](徴|ちょう)", "特徴", ["とくちょう"],
		[
			["特", "とく", false],
			["徴", "ちょう", true]
		], "5642"
	],
	["[快|かい][晴|せい]", "快晴", ["かいせい"],
		[
			["快", "かい", false],
			["晴", "せい", false]
		], -1
	],
	["[快|かい][適|てき]", "快適", ["かいてき"],
		[
			["快", "かい", false],
			["適", "てき", false]
		], -1
	],
	["[道|どう][徳|とく]", "道徳", ["どうとく"],
		[
			["道", "どう", false],
			["徳", "とく", false]
		], -1
	],
	["(香|こう)[水|すい]", "香水", ["こうすい"],
		[
			["香", "こう", true],
			["水", "すい", false]
		], "5650"
	],
	["[順|じゅん][序|じょ]", "順序", ["じゅんじょ"],
		[
			["順", "じゅん", false],
			["序", "じょ", false]
		], -1
	],
	["[変|へん](更|こう)", "変更", ["へんこう"],
		[
			["変", "へん", false],
			["更", "こう", true]
		], "5651"
	],
	["[校|こう][舎|しゃ]", "校舎", ["こうしゃ"],
		[
			["校", "こう", false],
			["舎", "しゃ", false]
		], -1
	],
	["[田舎|いなか]", "田舎", ["いなか"],
		[
			["田舎", "いなか", false]
		], -1
	],
	["(刑|けい)[事|じ]", "刑事", ["けいじ"],
		[
			["刑", "けい", true],
			["事", "じ", false]
		], "5654"
	],
	["[慣|な]れ*る", "慣れ", ["なれ"],
		[
			["慣", "な", false],
			["れ", null, false]
		], -1
	],
	["[習|しゅう][慣|かん]", "習慣", ["しゅうかん"],
		[
			["習", "しゅう", false],
			["慣", "かん", false]
		], -1
	],
	["[見|み][慣|な]れ*る", "見慣れ", ["みなれ"],
		[
			["見", "み", false],
			["慣", "な", false],
			["れ", null, false]
		], -1
	],
	["[敵|てき]", "敵", ["てき"],
		[
			["敵", "てき", false]
		], -1
	],
	["[一|いっ](致|ち)", "一致", ["いっち"],
		[
			["一", "いっ", false],
			["致", "ち", true]
		], "5655"
	],
	["[液|えき][体|たい]", "液体", ["えきたい"],
		[
			["液", "えき", false],
			["体", "たい", false]
		], -1
	],
	["[血|けつ][液|えき]", "血液", ["けつえき"],
		[
			["血", "けつ", false],
			["液", "えき", false]
		], -1
	],
	["[引|ひ]っ(繰|く)り[返|かえ]*す", "引っ繰り返", ["ひっくりかえ"],
		[
			["引", "ひ", false],
			["っ", null, false],
			["繰", "く", true],
			["り", null, false],
			["返", "かえ", false]
		], "5659"
	],
	["[引|ひ]っ(繰|く)り[返|かえ]*5", "引っ繰り返", ["ひっくりかえ"],
		[
			["引", "ひ", false],
			["っ", null, false],
			["繰", "く", true],
			["り", null, false],
			["返", "かえ", false]
		], "5660"
	],
	["(繰|く)り[返|かえ]*す", "繰り返", ["くりかえ"],
		[
			["繰", "く", true],
			["り", null, false],
			["返", "かえ", false]
		], "5661"
	],
	["[貧|まず]しい", "貧しい", ["まずしい"],
		[
			["貧", "まず", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[酸|さん][性|せい]", "酸性", ["さんせい"],
		[
			["酸", "さん", false],
			["性", "せい", false]
		], -1
	],
	["[酸素|さんそ]", "酸素", ["さんそ"],
		[
			["酸素", "さんそ", false]
		], -1
	],
	["[先|せん][祖|ぞ]", "先祖", ["せんぞ"],
		[
			["先", "せん", false],
			["祖", "ぞ", false]
		], -1
	],
	["[祖|そ][先|せん]", "祖先", ["そせん"],
		[
			["祖", "そ", false],
			["先", "せん", false]
		], -1
	],
	["[桜|さくら]", "桜", ["さくら"],
		[
			["桜", "さくら", false]
		], -1
	],
	["[地|じ](盤|ばん)", "地盤", ["じばん"],
		[
			["地", "じ", false],
			["盤", "ばん", true]
		], "5671"
	],
	["[基|き](盤|ばん)", "基盤", ["きばん"],
		[
			["基", "き", false],
			["盤", "ばん", true]
		], "5672"
	],
	["[算|そろ](盤|ばん)", "算盤", ["そろばん"],
		[
			["算", "そろ", false],
			["盤", "ばん", true]
		], "5673"
	],
	["[句|く]", "句", ["く"],
		[
			["句", "く", false]
		], -1
	],
	["[句|く][読|とう][点|てん]", "句読点", ["くとうてん"],
		[
			["句", "く", false],
			["読", "とう", false],
			["点", "てん", false]
		], -1
	],
	["[文|もん][句|く]", "文句", ["もんく"],
		[
			["文", "もん", false],
			["句", "く", false]
		], -1
	],
	["(俳|はい)[句|く]", "俳句", ["はいく"],
		[
			["俳", "はい", true],
			["句", "く", false]
		], "5318"
	],
	["(項|こう)[目|もく]", "項目", ["こうもく"],
		[
			["項", "こう", true],
			["目", "もく", false]
		], "5674"
	],
	["(喫|きっ)(茶|さ)[店|てん]", "喫茶店", ["きっさてん"],
		[
			["喫", "きっ", true],
			["茶", "さ", true],
			["店", "てん", false]
		], "5794"
	],
	["[墓|はか]", "墓", ["はか"],
		[
			["墓", "はか", false]
		], -1
	],
	["[炭鉱|たんこう]", "炭鉱", ["たんこう"],
		[
			["炭鉱", "たんこう", false]
		], -1
	],
	["[鉱|こう][物|ぶつ]", "鉱物", ["こうぶつ"],
		[
			["鉱", "こう", false],
			["物", "ぶつ", false]
		], -1
	],
	["[一|いっ][生|しょう](懸|けん)[命|めい]", "一生懸命", ["いっしょうけんめい"],
		[
			["一", "いっ", false],
			["生", "しょう", false],
			["懸", "けん", true],
			["命", "めい", false]
		], "5675"
	],
	["(懸|けん)[命|めい]", "懸命", ["けんめい"],
		[
			["懸", "けん", true],
			["命", "めい", false]
		], "5676"
	],
	["[飼|か]*う", "飼", ["か"],
		[
			["飼", "か", false]
		], -1
	],
	["[枝|えだ]", "枝", ["えだ"],
		[
			["枝", "えだ", false]
		], -1
	],
	["(巨|きょ)[大|だい]", "巨大", ["きょだい"],
		[
			["巨", "きょ", true],
			["大", "だい", false]
		], "5681"
	],
	["[地|じ](震|しん)", "地震", ["じしん"],
		[
			["地", "じ", false],
			["震", "しん", true]
		], "5682"
	],
	["[恩|おん]", "恩", ["おん"],
		[
			["恩", "おん", false]
		], -1
	],
	["[乗|の]り(越|こ)し", "乗り越し", ["のりこし"],
		[
			["乗", "の", false],
			["り", null, false],
			["越", "こ", true],
			["し", null, false]
		], "5685"
	],
	["[引|ひ]っ(越|こ)*す", "引っ越", ["ひっこ"],
		[
			["引", "ひ", false],
			["っ", null, false],
			["越", "こ", true]
		], "5686"
	],
	["[引|ひっ](越|こ)し", "引越し", ["ひっこし"],
		[
			["引", "ひっ", false],
			["越", "こ", true],
			["し", null, false]
		], "5687"
	],
	["[追|お]い(越|こ)*す", "追い越", ["おいこ"],
		[
			["追", "お", false],
			["い", null, false],
			["越", "こ", true]
		], "5690"
	],
	["[往|おう][復|ふく]", "往復", ["おうふく"],
		[
			["往", "おう", false],
			["復", "ふく", false]
		], -1
	],
	["(契|けい)[約|やく]", "契約", ["けいやく"],
		[
			["契", "けい", true],
			["約", "やく", false]
		], "5696"
	],
	["[活|かつ](躍|やく)", "活躍", ["かつやく"],
		[
			["活", "かつ", false],
			["躍", "やく", true]
		], "5701"
	],
	["[木綿|もめん]", "木綿", ["もめん"],
		[
			["木綿", "もめん", false]
		], -1
	],
	["[銅|どう]", "銅", ["どう"],
		[
			["銅", "どう", false]
		], -1
	],
	["[眼鏡|めがね]", "眼鏡", ["めがね"],
		[
			["眼鏡", "めがね", false]
		], -1
	],
	["[大|だい](丈|じょう)(夫|ぶ)", "大丈夫", ["だいじょうぶ"],
		[
			["大", "だい", false],
			["丈", "じょう", true],
			["夫", "ぶ", true]
		], "5834"
	],
	["[国|こく](籍|せき)", "国籍", ["こくせき"],
		[
			["国", "こく", false],
			["籍", "せき", true]
		], "5708"
	],
	["[書|しょ](籍|せき)", "書籍", ["しょせき"],
		[
			["書", "しょ", false],
			["籍", "せき", true]
		], "5709"
	],
	["[耕|たがや]*す", "耕", ["たがや"],
		[
			["耕", "たがや", false]
		], -1
	],
	["[耕|こう][地|ち]", "耕地", ["こうち"],
		[
			["耕", "こう", false],
			["地", "ち", false]
		], -1
	],
	["[不|ふ][潔|けつ]", "不潔", ["ふけつ"],
		[
			["不", "ふ", false],
			["潔", "けつ", false]
		], -1
	],
	["[清潔|せいけつ]", "清潔", ["せいけつ"],
		[
			["清潔", "せいけつ", false]
		], -1
	],
	["[相|そう](互|ご)", "相互", ["そうご"],
		[
			["相", "そう", false],
			["互", "ご", true]
		], "5716"
	],
	["[舌|した]", "舌", ["した"],
		[
			["舌", "した", false]
		], -1
	],
	["[考|こう](慮|りょ)", "考慮", ["こうりょ"],
		[
			["考", "こう", false],
			["慮", "りょ", true]
		], "5717"
	],
	["[遠|えん](慮|りょ)", "遠慮", ["えんりょ"],
		[
			["遠", "えん", false],
			["慮", "りょ", true]
		], "5718"
	],
	["[党|とう]", "党", ["とう"],
		[
			["党", "とう", false]
		], -1
	],
	["[政|せい][党|とう]", "政党", ["せいとう"],
		[
			["政", "せい", false],
			["党", "とう", false]
		], -1
	],
	["{～}[権|けん]", "～権", ["けん"],
		[
			["～", null, false],
			["権", "けん", false]
		], -1
	],
	["[権|けん][利|り]", "権利", ["けんり"],
		[
			["権", "けん", false],
			["利", "り", false]
		], -1
	],
	["[知|ち](恵|え)", "知恵", ["ちえ"],
		[
			["知", "ち", false],
			["恵", "え", true]
		], "5720"
	],
	["[派|は][手|で]", "派手", ["はで"],
		[
			["派", "は", false],
			["手", "で", false]
		], -1
	],
	["[立|りっ][派|ぱ]", "立派", ["りっぱ"],
		[
			["立", "りっ", false],
			["派", "ぱ", false]
		], -1
	],
	["{～}[済|ずみ]", "～済", ["ずみ"],
		[
			["～", null, false],
			["済", "ずみ", false]
		], -1
	],
	["[済|す]ませ*る", "済ませ", ["すませ"],
		[
			["済", "す", false],
			["ま", null, false],
			["せ", null, false]
		], -1
	],
	["[済|す]*む", "済", ["す"],
		[
			["済", "す", false]
		], -1
	],
	["[経|けい][済|ざい]", "経済", ["けいざい"],
		[
			["経", "けい", false],
			["済", "ざい", false]
		], -1
	],
	["[認|みと]め*る", "認め", ["みとめ"],
		[
			["認", "みと", false],
			["め", null, false]
		], -1
	],
	["[確|かく][認|にん]", "確認", ["かくにん"],
		[
			["確", "かく", false],
			["認", "にん", false]
		], -1
	],
	["[承|しょう][認|にん]", "承認", ["しょうにん"],
		[
			["承", "しょう", false],
			["認", "にん", false]
		], -1
	],
	["[閉|し]ま*5", "閉ま", ["しま"],
		[
			["閉", "し", false],
			["ま", null, false]
		], -1
	],
	["[閉|し]め*る", "閉め", ["しめ"],
		[
			["閉", "し", false],
			["め", null, false]
		], -1
	],
	["[必|ひつ](需|じゅ)[品|ひん]", "必需品", ["ひつじゅひん"],
		[
			["必", "ひつ", false],
			["需", "じゅ", true],
			["品", "ひん", false]
		], "5727"
	],
	["(需|じゅ)[要|よう]", "需要", ["じゅよう"],
		[
			["需", "じゅ", true],
			["要", "よう", false]
		], "5728"
	],
	["[対|たい][策|さく]", "対策", ["たいさく"],
		[
			["対", "たい", false],
			["策", "さく", false]
		], -1
	],
	["(傾|けい)[向|こう]", "傾向", ["けいこう"],
		[
			["傾", "けい", true],
			["向", "こう", false]
		], "5732"
	],
	["{～}[論|ろん]", "～論", ["ろん"],
		[
			["～", null, false],
			["論", "ろん", false]
		], -1
	],
	["[結|けつ][論|ろん]", "結論", ["けつろん"],
		[
			["結", "けつ", false],
			["論", "ろん", false]
		], -1
	],
	["[論|ろん]じ*る", "論じ", ["ろんじ"],
		[
			["論", "ろん", false],
			["じ", null, false]
		], -1
	],
	["[論|ろん]ずる", "論ずる", ["ろんずる"],
		[
			["論", "ろん", false],
			["ず", null, false],
			["る", null, false]
		], -1
	],
	["[論|ろん][文|ぶん]", "論文", ["ろんぶん"],
		[
			["論", "ろん", false],
			["文", "ぶん", false]
		], -1
	],
	["[議|ぎ][論|ろん]", "議論", ["ぎろん"],
		[
			["議", "ぎ", false],
			["論", "ろん", false]
		], -1
	],
	["[論|ろん][争|そう]", "論争", ["ろんそう"],
		[
			["論", "ろん", false],
			["争", "そう", false]
		], -1
	],
	["[評|ひょう][論|ろん]", "評論", ["ひょうろん"],
		[
			["評", "ひょう", false],
			["論", "ろん", false]
		], -1
	],
	["[私|し][立|りつ]", "私立", ["しりつ"],
		[
			["私", "し", false],
			["立", "りつ", false]
		], -1
	],
	["[私|し][鉄|てつ]", "私鉄", ["してつ"],
		[
			["私", "し", false],
			["鉄", "てつ", false]
		], -1
	],
	["[一|いっ](緒|しょ)", "一緒", ["いっしょ"],
		[
			["一", "いっ", false],
			["緒", "しょ", true]
		], "5736"
	],
	["[革|かわ]", "革", ["かわ"],
		[
			["革", "かわ", false]
		], -1
	],
	["[足|あし](跡|あと)", "足跡", ["あしあと"],
		[
			["足", "あし", false],
			["跡", "あと", true]
		], "5740"
	],
	["[疑|うたが]*う", "疑", ["うたが"],
		[
			["疑", "うたが", false]
		], -1
	],
	["[疑|ぎ][問|もん]", "疑問", ["ぎもん"],
		[
			["疑", "ぎ", false],
			["問", "もん", false]
		], -1
	],
	["(駐|ちゅう)[車|しゃ]", "駐車", ["ちゅうしゃ"],
		[
			["駐", "ちゅう", true],
			["車", "しゃ", false]
		], "5742"
	],
	["[裁|さい][判|ばん]", "裁判", ["さいばん"],
		[
			["裁", "さい", false],
			["判", "ばん", false]
		], -1
	],
	["[子|こ][供|ども]", "子供", ["こども"],
		[
			["子", "こ", false],
			["供", "ども", false]
		], -1
	],
	["[供|きょう][給|きゅう]", "供給", ["きょうきゅう"],
		[
			["供", "きょう", false],
			["給", "きゅう", false]
		], -1
	],
	["[先|せん](端|たん)", "先端", ["せんたん"],
		[
			["先", "せん", false],
			["端", "たん", true]
		], "5745"
	],
	["[割|わり]と", "割と", ["わりと"],
		[
			["割", "わり", false],
			["と", null, false]
		], -1
	],
	["[割|わ]*5", "割", ["わ"],
		[
			["割", "わ", false]
		], -1
	],
	["[割|わ]れ*る", "割れ", ["われ"],
		[
			["割", "わ", false],
			["れ", null, false]
		], -1
	],
	["[割|わり][合|あい]", "割合", ["わりあい"],
		[
			["割", "わり", false],
			["合", "あい", false]
		], -1
	],
	["[割|わり][引|びき]", "割引", ["わりびき"],
		[
			["割", "わり", false],
			["引", "びき", false]
		], -1
	],
	["[役割|やくわり]", "役割", ["やくわり"],
		[
			["役割", "やくわり", false]
		], -1
	],
	["[時|じ][間|かん][割|わり]", "時間割", ["じかんわり"],
		[
			["時", "じ", false],
			["間", "かん", false],
			["割", "わり", false]
		], -1
	],
	["[割|わり][算|ざん]", "割算", ["わりざん"],
		[
			["割", "わり", false],
			["算", "ざん", false]
		], -1
	],
	["{～}[難|にく]い", "～難い", ["にくい"],
		[
			["～", null, false],
			["難", "にく", false],
			["い", null, false]
		], -1
	],
	["[有|あり][難|がた]い", "有難い", ["ありがたい"],
		[
			["有", "あり", false],
			["難", "がた", false],
			["い", null, false]
		], -1
	],
	["[難|むずか]しい", "難しい", ["むずかしい"],
		[
			["難", "むずか", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[災|さい][難|なん]", "災難", ["さいなん"],
		[
			["災", "さい", false],
			["難", "なん", false]
		], -1
	],
	["(困|こん)[難|なん]", "困難", ["こんなん"],
		[
			["困", "こん", true],
			["難", "なん", false]
		], "5198"
	],
	["[補|おぎな]*う", "補", ["おぎな"],
		[
			["補", "おぎな", false]
		], -1
	],
	["[候補|こうほ]", "候補", ["こうほ"],
		[
			["候補", "こうほ", false]
		], -1
	],
	["(徹|てつ)[夜|や]", "徹夜", ["てつや"],
		[
			["徹", "てつ", true],
			["夜", "や", false]
		], "5750"
	],
	["[優|やさ]しい", "優しい", ["やさしい"],
		[
			["優", "やさ", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[優|すぐ]れ*る", "優れ", ["すぐれ"],
		[
			["優", "すぐ", false],
			["れ", null, false]
		], -1
	],
	["[優|ゆう][勝|しょう]", "優勝", ["ゆうしょう"],
		[
			["優", "ゆう", false],
			["勝", "しょう", false]
		], -1
	],
	["[女|じょ][優|ゆう]", "女優", ["じょゆう"],
		[
			["女", "じょ", false],
			["優", "ゆう", false]
		], -1
	],
	["[収|おさ]め*る", "収め", ["おさめ"],
		[
			["収", "おさ", false],
			["め", null, false]
		], -1
	],
	["[収|しゅう][入|にゅう]", "収入", ["しゅうにゅう"],
		[
			["収", "しゅう", false],
			["入", "にゅう", false]
		], -1
	],
	["[領|りょう][収|しゅう]", "領収", ["りょうしゅう"],
		[
			["領", "りょう", false],
			["収", "しゅう", false]
		], -1
	],
	["(吸|きゅう)[収|しゅう]", "吸収", ["きゅうしゅう"],
		[
			["吸", "きゅう", true],
			["収", "しゅう", false]
		], "5292"
	],
	["(焦|しょう)[点|てん]", "焦点", ["しょうてん"],
		[
			["焦", "しょう", true],
			["点", "てん", false]
		], "5755"
	],
	["[展|てん][開|かい]", "展開", ["てんかい"],
		[
			["展", "てん", false],
			["開", "かい", false]
		], -1
	],
	["[発|はっ][展|てん]", "発展", ["はってん"],
		[
			["発", "はっ", false],
			["展", "てん", false]
		], -1
	],
	["[展|てん](覧|らん)[会|かい]", "展覧会", ["てんらんかい"],
		[
			["展", "てん", false],
			["覧", "らん", true],
			["会", "かい", false]
		], "5374"
	],
	["[住|じゅう][宅|たく]", "住宅", ["じゅうたく"],
		[
			["住", "じゅう", false],
			["宅", "たく", false]
		], -1
	],
	["[宅|たく]", "宅", ["たく"],
		[
			["宅", "たく", false]
		], -1
	],
	["[自|じ][宅|たく]", "自宅", ["じたく"],
		[
			["自", "じ", false],
			["宅", "たく", false]
		], -1
	],
	["[帰|き][宅|たく]", "帰宅", ["きたく"],
		[
			["帰", "き", false],
			["宅", "たく", false]
		], -1
	],
	["[無|む][視|し]", "無視", ["むし"],
		[
			["無", "む", false],
			["視", "し", false]
		], -1
	],
	["[重|じゅう][視|し]", "重視", ["じゅうし"],
		[
			["重", "じゅう", false],
			["視", "し", false]
		], -1
	],
	["[両|りょう](替|がえ)", "両替", ["りょうがえ"],
		[
			["両", "りょう", false],
			["替", "がえ", true]
		], "5758"
	],
	["[交|こう](替|たい)", "交替", ["こうたい"],
		[
			["交", "こう", false],
			["替", "たい", true]
		], "5759"
	],
	["[取|と]り(替|か)え*る", "取り替え", ["とりかえ"],
		[
			["取", "と", false],
			["り", null, false],
			["替", "か", true],
			["え", null, false]
		], "5760"
	],
	["[着|き](替|が)え", "着替え", ["きがえ"],
		[
			["着", "き", false],
			["替", "が", true],
			["え", null, false]
		], "5763"
	],
	["[着|き](替|が)え*る", "着替え", ["きがえ"],
		[
			["着", "き", false],
			["替", "が", true],
			["え", null, false]
		], "5764"
	],
	["[分|ぶん](析|せき)", "分析", ["ぶんせき"],
		[
			["分", "ぶん", false],
			["析", "せき", true]
		], "5765"
	],
	["[警|けい][備|び]", "警備", ["けいび"],
		[
			["警", "けい", false],
			["備", "び", false]
		], -1
	],
	["[警|けい][告|こく]", "警告", ["けいこく"],
		[
			["警", "けい", false],
			["告", "こく", false]
		], -1
	],
	["[警|けい][官|かん]", "警官", ["けいかん"],
		[
			["警", "けい", false],
			["官", "かん", false]
		], -1
	],
	["[警|けい][察|さつ]", "警察", ["けいさつ"],
		[
			["警", "けい", false],
			["察", "さつ", false]
		], -1
	],
	["[訪|たず]ね*る", "訪ね", ["たずね"],
		[
			["訪", "たず", false],
			["ね", null, false]
		], -1
	],
	["[訪|ほう][問|もん]", "訪問", ["ほうもん"],
		[
			["訪", "ほう", false],
			["問", "もん", false]
		], -1
	],
	["[区|く][域|いき]", "区域", ["くいき"],
		[
			["区", "く", false],
			["域", "いき", false]
		], -1
	],
	["[地|ち][域|いき]", "地域", ["ちいき"],
		[
			["地", "ち", false],
			["域", "いき", false]
		], -1
	],
	["[流|りゅう][域|いき]", "流域", ["りゅういき"],
		[
			["流", "りゅう", false],
			["域", "いき", false]
		], -1
	],
	["[反|はん][映|えい]", "反映", ["はんえい"],
		[
			["反", "はん", false],
			["映", "えい", false]
		], -1
	],
	["[映|うつ]*す", "映", ["うつ"],
		[
			["映", "うつ", false]
		], -1
	],
	["[映|うつ]*5", "映", ["うつ"],
		[
			["映", "うつ", false]
		], -1
	],
	["[担|かつ]*ぐ", "担", ["かつ"],
		[
			["担", "かつ", false]
		], -1
	],
	["[担|たん][当|とう]", "担当", ["たんとう"],
		[
			["担", "たん", false],
			["当", "とう", false]
		], -1
	],
	["[株|かぶ]", "株", ["かぶ"],
		[
			["株", "かぶ", false]
		], -1
	],
	["(慎|しん)[重|ちょう]", "慎重", ["しんちょう"],
		[
			["慎", "しん", true],
			["重", "ちょう", false]
		], "5771"
	],
	["[姿|すがた]", "姿", ["すがた"],
		[
			["姿", "すがた", false]
		], -1
	],
	["[姿|し][勢|せい]", "姿勢", ["しせい"],
		[
			["姿", "し", false],
			["勢", "せい", false]
		], -1
	],
	["(贈|おく)り[物|もの]", "贈り物", ["おくりもの"],
		[
			["贈", "おく", true],
			["り", null, false],
			["物", "もの", false]
		], "5772"
	],
	["(握|あく)[手|しゅ]", "握手", ["あくしゅ"],
		[
			["握", "あく", true],
			["手", "しゅ", false]
		], "5775"
	],
	["[公|こう][衆|しゅう]", "公衆", ["こうしゅう"],
		[
			["公", "こう", false],
			["衆", "しゅう", false]
		], -1
	],
	["[若|わか][々|わか]しい", "若々しい", ["わかわかしい"],
		[
			["若", "わか", false],
			["々", "わか", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[頭|ず][脳|のう]", "頭脳", ["ずのう"],
		[
			["頭", "ず", false],
			["脳", "のう", false]
		], -1
	],
	["[冷|れい][蔵|ぞう][庫|こ]", "冷蔵庫", ["れいぞうこ"],
		[
			["冷", "れい", false],
			["蔵", "ぞう", false],
			["庫", "こ", false]
		], -1
	],
	["[貯蔵|ちょぞう]", "貯蔵", ["ちょぞう"],
		[
			["貯蔵", "ちょぞう", false]
		], -1
	],
	["[一|いち][段|だん]と", "一段と", ["いちだんと"],
		[
			["一", "いち", false],
			["段", "だん", false],
			["と", null, false]
		], -1
	],
	["[手|しゅ][段|だん]", "手段", ["しゅだん"],
		[
			["手", "しゅ", false],
			["段", "だん", false]
		], -1
	],
	["[段|だん]", "段", ["だん"],
		[
			["段", "だん", false]
		], -1
	],
	["[段|だん][階|かい]", "段階", ["だんかい"],
		[
			["段", "だん", false],
			["階", "かい", false]
		], -1
	],
	["[階|かい][段|だん]", "階段", ["かいだん"],
		[
			["階", "かい", false],
			["段", "だん", false]
		], -1
	],
	["(値|ね)[段|だん]", "値段", ["ねだん"],
		[
			["値", "ね", true],
			["段", "だん", false]
		], "5043"
	],
	["(普|ふ)[段|だん]", "普段", ["ふだん"],
		[
			["普", "ふ", true],
			["段", "だん", false]
		], "5579"
	],
	["(診|しん)[断|だん]", "診断", ["しんだん"],
		[
			["診", "しん", true],
			["断", "だん", false]
		], "5784"
	],
	["[呼|よ]び[出|だ]*す", "呼び出", ["よびだ"],
		[
			["呼", "よ", false],
			["び", null, false],
			["出", "だ", false]
		], -1
	],
	["[呼|よ]*ぶ", "呼", ["よ"],
		[
			["呼", "よ", false]
		], -1
	],
	["[忘|わす]れ*る", "忘れ", ["わすれ"],
		[
			["忘", "わす", false],
			["れ", null, false]
		], -1
	],
	["[忘|わす]れ[物|もの]", "忘れ物", ["わすれもの"],
		[
			["忘", "わす", false],
			["れ", null, false],
			["物", "もの", false]
		], -1
	],
	["[見|み](詰|つ)め*る", "見詰め", ["みつめ"],
		[
			["見", "み", false],
			["詰", "つ", true],
			["め", null, false]
		], "5785"
	],
	["[方|ほう][針|しん]", "方針", ["ほうしん"],
		[
			["方", "ほう", false],
			["針", "しん", false]
		], -1
	],
	["[針|はり]", "針", ["はり"],
		[
			["針", "はり", false]
		], -1
	],
	["[針|はり][金|がね]", "針金", ["はりがね"],
		[
			["針", "はり", false],
			["金", "がね", false]
		], -1
	],
	["[針路|しんろ]", "針路", ["しんろ"],
		[
			["針路", "しんろ", false]
		], -1
	],
	["[専|せん][制|せい]", "専制", ["せんせい"],
		[
			["専", "せん", false],
			["制", "せい", false]
		], -1
	],
	["[専|せん][門|もん]", "専門", ["せんもん"],
		[
			["専", "せん", false],
			["門", "もん", false]
		], -1
	],
	["[専|せん](攻|こう)", "専攻", ["せんこう"],
		[
			["専", "せん", false],
			["攻", "こう", true]
		], "5470"
	],
	["(侵|しん)[入|にゅう]", "侵入", ["しんにゅう"],
		[
			["侵", "しん", true],
			["入", "にゅう", false]
		], "5793"
	],
	["[推|すい][定|てい]", "推定", ["すいてい"],
		[
			["推", "すい", false],
			["定", "てい", false]
		], -1
	],
	["[価|か][値|ち]", "価値", ["かち"],
		[
			["価", "か", false],
			["値", "ち", false]
		], -1
	],
	["[値|ね]", "値", ["ね"],
		[
			["値", "ね", false]
		], -1
	],
	["[値|ね][段|だん]", "値段", ["ねだん"],
		[
			["値", "ね", false],
			["段", "だん", false]
		], -1
	],
	["お[出|で](掛|か)け", "お出掛け", ["おでかけ"],
		[
			["お", null, false],
			["出", "で", false],
			["掛", "か", true],
			["け", null, false]
		], "5795"
	],
	["お[目|め]に(掛|か)かる", "お目に掛かる", ["おめにかかる"],
		[
			["お", null, false],
			["目", "め", false],
			["に", null, false],
			["掛", "か", true],
			["か", null, false],
			["る", null, false]
		], "5796"
	],
	["[出|で](掛|か)け*る", "出掛け", ["でかけ"],
		[
			["出", "で", false],
			["掛", "か", true],
			["け", null, false]
		], "5797"
	],
	["[呼|よ]び(掛|か)け*る", "呼び掛け", ["よびかけ"],
		[
			["呼", "よ", false],
			["び", null, false],
			["掛", "か", true],
			["け", null, false]
		], "5798"
	],
	["[引|ひ]っ(掛|か)か*5", "引っ掛か", ["ひっかか"],
		[
			["引", "ひ", false],
			["っ", null, false],
			["掛", "か", true],
			["か", null, false]
		], "5799"
	],
	["[思|おも]い(掛|が)けない", "思い掛けない", ["おもいがけない"],
		[
			["思", "おも", false],
			["い", null, false],
			["掛", "が", true],
			["け", null, false],
			["な", null, false],
			["い", null, false]
		], "5800"
	],
	["(掛|か)け[算|ざん]", "掛け算", ["かけざん"],
		[
			["掛", "か", true],
			["け", null, false],
			["算", "ざん", false]
		], "5803"
	],
	["[見|み](掛|か)け", "見掛け", ["みかけ"],
		[
			["見", "み", false],
			["掛", "か", true],
			["け", null, false]
		], "5804"
	],
	["[話|はな]し(掛|か)け*る", "話し掛け", ["はなしかけ"],
		[
			["話", "はな", false],
			["し", null, false],
			["掛", "か", true],
			["け", null, false]
		], "5805"
	],
	["[追|お]い(掛|か)け*る", "追い掛け", ["おいかけ"],
		[
			["追", "お", false],
			["い", null, false],
			["掛", "か", true],
			["け", null, false]
		], "5806"
	],
	["[通|とお]り(掛|か)か*5", "通り掛か", ["とおりかか"],
		[
			["通", "とお", false],
			["り", null, false],
			["掛", "か", true],
			["か", null, false]
		], "5807"
	],
	["(双|ふた)[子|ご]", "双子", ["ふたご"],
		[
			["双", "ふた", true],
			["子", "ご", false]
		], "5810"
	],
	["[検討|けんとう]", "検討", ["けんとう"],
		[
			["検討", "けんとう", false]
		], -1
	],
	["[討|う]*つ", "討", ["う"],
		[
			["討", "う", false]
		], -1
	],
	["[名|めい](刺|し)", "名刺", ["めいし"],
		[
			["名", "めい", false],
			["刺", "し", true]
		], "5817"
	],
	["[処|しょ][理|り]", "処理", ["しょり"],
		[
			["処", "しょ", false],
			["理", "り", false]
		], -1
	],
	["(到|とう)[着|ちゃく]", "到着", ["とうちゃく"],
		[
			["到", "とう", true],
			["着", "ちゃく", false]
		], "5818"
	],
	["[憲|けん][法|ぽう]", "憲法", ["けんぽう"],
		[
			["憲", "けん", false],
			["法", "ぽう", false]
		], -1
	],
	["(寝|しん)[台|だい]", "寝台", ["しんだい"],
		[
			["寝", "しん", true],
			["台", "だい", false]
		], "5821"
	],
	["(寝|ね)[間|ま][着|き]", "寝間着", ["ねまき"],
		[
			["寝", "ね", true],
			["間", "ま", false],
			["着", "き", false]
		], "5823"
	],
	["[昼|ひる](寝|ね)", "昼寝", ["ひるね"],
		[
			["昼", "ひる", false],
			["寝", "ね", true]
		], "5824"
	],
	["[急|きゅう][激|げき]", "急激", ["きゅうげき"],
		[
			["急", "きゅう", false],
			["激", "げき", false]
		], -1
	],
	["[感|かん][激|げき]", "感激", ["かんげき"],
		[
			["感", "かん", false],
			["激", "げき", false]
		], -1
	],
	["[激|はげ]しい", "激しい", ["はげしい"],
		[
			["激", "はげ", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[激増|げきぞう]", "激増", ["げきぞう"],
		[
			["激増", "げきぞう", false]
		], -1
	],
	["(透|す)き[通|とお]*5", "透き通", ["すきとお"],
		[
			["透", "す", true],
			["き", null, false],
			["通", "とお", false]
		], "5825"
	],
	["(透|とう)[明|めい]", "透明", ["とうめい"],
		[
			["透", "とう", true],
			["明", "めい", false]
		], "5826"
	],
	["[否|いや]", "否", ["いや"],
		[
			["否", "いや", false]
		], -1
	],
	["[否|ひ][定|てい]", "否定", ["ひてい"],
		[
			["否", "ひ", false],
			["定", "てい", false]
		], -1
	],
	["[体|たい][系|けい]", "体系", ["たいけい"],
		[
			["体", "たい", false],
			["系", "けい", false]
		], -1
	],
	["[系統|けいとう]", "系統", ["けいとう"],
		[
			["系統", "けいとう", false]
		], -1
	],
	["[批|ひ][判|はん]", "批判", ["ひはん"],
		[
			["批", "ひ", false],
			["判", "はん", false]
		], -1
	],
	["[批|ひ][評|ひょう]", "批評", ["ひひょう"],
		[
			["批", "ひ", false],
			["評", "ひょう", false]
		], -1
	],
	["[保|ほ][存|ぞん]", "保存", ["ほぞん"],
		[
			["保", "ほ", false],
			["存", "ぞん", false]
		], -1
	],
	["[存|ぞん]じ*る", "存じ", ["ぞんじ"],
		[
			["存", "ぞん", false],
			["じ", null, false]
		], -1
	],
	["[存|ぞん]ずる", "存ずる", ["ぞんずる"],
		[
			["存", "ぞん", false],
			["ず", null, false],
			["る", null, false]
		], -1
	],
	["[存|そん][在|ざい]", "存在", ["そんざい"],
		[
			["存", "そん", false],
			["在", "ざい", false]
		], -1
	],
	["[生|せい][存|ぞん]", "生存", ["せいぞん"],
		[
			["生", "せい", false],
			["存", "ぞん", false]
		], -1
	],
	["(是|ぜ)[非|ひ]", "是非", ["ぜひ"],
		[
			["是", "ぜ", true],
			["非", "ひ", false]
		], "5833"
	],
	["[座|ざ][席|せき]", "座席", ["ざせき"],
		[
			["座", "ざ", false],
			["席", "せき", false]
		], -1
	],
	["[座|ざ][布|ぶ][団|とん]", "座布団", ["ざぶとん"],
		[
			["座", "ざ", false],
			["布", "ぶ", false],
			["団", "とん", false]
		], -1
	],
	["[捨|す]て*る", "捨て", ["すて"],
		[
			["捨", "す", false],
			["て", null, false]
		], -1
	],
	["[余|よ](裕|ゆう)", "余裕", ["よゆう"],
		[
			["余", "よ", false],
			["裕", "ゆう", true]
		], "5836"
	],
	["[除|のぞ]*く", "除", ["のぞ"],
		[
			["除", "のぞ", false]
		], -1
	],
	["(削|さく)[除|じょ]", "削除", ["さくじょ"],
		[
			["削", "さく", true],
			["除", "じょ", false]
		], "5625"
	],
	["[下|か][降|こう]", "下降", ["かこう"],
		[
			["下", "か", false],
			["降", "こう", false]
		], -1
	],
	["[以|い][降|こう]", "以降", ["いこう"],
		[
			["以", "い", false],
			["降", "こう", false]
		], -1
	],
	["[降|お]ろ*す", "降ろ", ["おろ"],
		[
			["降", "お", false],
			["ろ", null, false]
		], -1
	],
	["(盗|とう)[難|なん]", "盗難", ["とうなん"],
		[
			["盗", "とう", true],
			["難", "なん", false]
		], "5840"
	],
	["(芝|し)[居|ばい]", "芝居", ["しばい"],
		[
			["芝", "し", true],
			["居", "ばい", false]
		], "5841"
	],
	["(芝|し)[生|ばふ]", "芝生", ["しばふ"],
		[
			["芝", "し", true],
			["生", "ばふ", false]
		], "5842"
	],
	["[並|なら]*ぶ", "並", ["なら"],
		[
			["並", "なら", false]
		], -1
	],
	["[並|なら]べ*る", "並べ", ["ならべ"],
		[
			["並", "なら", false],
			["べ", null, false]
		], -1
	],
	["[並|なみ][木|き]", "並木", ["なみき"],
		[
			["並", "なみ", false],
			["木", "き", false]
		], -1
	],
	["[並|へい][行|こう]", "並行", ["へいこう"],
		[
			["並", "へい", false],
			["行", "こう", false]
		], -1
	],
	["[従|したが]*う", "従", ["したが"],
		[
			["従", "したが", false]
		], -1
	],
	["[従兄弟|いとこ]", "従兄弟", ["いとこ"],
		[
			["従兄弟", "いとこ", false]
		], -1
	],
	["[従姉妹|いとこ]", "従姉妹", ["いとこ"],
		[
			["従姉妹", "いとこ", false]
		], -1
	],
	["[危|あや]うい", "危うい", ["あやうい"],
		[
			["危", "あや", false],
			["う", null, false],
			["い", null, false]
		], -1
	],
	["[危|あぶ]ない", "危ない", ["あぶない"],
		[
			["危", "あぶ", false],
			["な", null, false],
			["い", null, false]
		], -1
	],
	["[危|き][険|けん]", "危険", ["きけん"],
		[
			["危", "き", false],
			["険", "けん", false]
		], -1
	],
	["[拡|かく][大|だい]", "拡大", ["かくだい"],
		[
			["拡", "かく", false],
			["大", "だい", false]
		], -1
	],
	["[拡|かく][張|ちょう]", "拡張", ["かくちょう"],
		[
			["拡", "かく", false],
			["張", "ちょう", false]
		], -1
	],
	["[拡|かく](充|じゅう)", "拡充", ["かくじゅう"],
		[
			["拡", "かく", false],
			["充", "じゅう", true]
		], "5735"
	],
	["[就|つ]*く", "就", ["つ"],
		[
			["就", "つ", false]
		], -1
	],
	["[就|しゅう][任|にん]", "就任", ["しゅうにん"],
		[
			["就", "しゅう", false],
			["任", "にん", false]
		], -1
	],
	["[就職|しゅうしょく]", "就職", ["しゅうしょく"],
		[
			["就職", "しゅうしょく", false]
		], -1
	],
	["[異|こと]な*5", "異な", ["ことな"],
		[
			["異", "こと", false],
			["な", null, false]
		], -1
	],
	["[異|い][常|じょう]", "異常", ["いじょう"],
		[
			["異", "い", false],
			["常", "じょう", false]
		], -1
	],
	["[将|しょう][来|らい]", "将来", ["しょうらい"],
		[
			["将", "しょう", false],
			["来", "らい", false]
		], -1
	],
	["[厳|きび]しい", "厳しい", ["きびしい"],
		[
			["厳", "きび", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[厳|げん][重|じゅう]", "厳重", ["げんじゅう"],
		[
			["厳", "げん", false],
			["重", "じゅう", false]
		], -1
	],
	["[物|ぶっ](騒|そう)", "物騒", ["ぶっそう"],
		[
			["物", "ぶっ", false],
			["騒", "そう", true]
		], "5850"
	],
	["(騒|そう)[音|おん]", "騒音", ["そうおん"],
		[
			["騒", "そう", true],
			["音", "おん", false]
		], "5855"
	],
	["[装|そう][置|ち]", "装置", ["そうち"],
		[
			["装", "そう", false],
			["置", "ち", false]
		], -1
	],
	["[服|ふく][装|そう]", "服装", ["ふくそう"],
		[
			["服", "ふく", false],
			["装", "そう", false]
		], -1
	],
	["[包装|ほうそう]", "包装", ["ほうそう"],
		[
			["包装", "ほうそう", false]
		], -1
	],
	["[諸|しょ]{～}", "諸～", ["しょ"],
		[
			["諸", "しょ", false],
			["～", null, false]
		], -1
	],
	["[亡|な]く*す", "亡く", ["なく"],
		[
			["亡", "な", false],
			["く", null, false]
		], -1
	],
	["[亡|な]くな*5", "亡くな", ["なくな"],
		[
			["亡", "な", false],
			["く", null, false],
			["な", null, false]
		], -1
	],
	["[死|し][亡|ぼう]", "死亡", ["しぼう"],
		[
			["死", "し", false],
			["亡", "ぼう", false]
		], -1
	],
	["[今|こん][晩|ばん]", "今晩", ["こんばん"],
		[
			["今", "こん", false],
			["晩", "ばん", false]
		], -1
	],
	["[晩|ばん]", "晩", ["ばん"],
		[
			["晩", "ばん", false]
		], -1
	],
	["[毎|まい][晩|ばん]", "毎晩", ["まいばん"],
		[
			["毎", "まい", false],
			["晩", "ばん", false]
		], -1
	],
	["[晩|ばん](御|ご)[飯|はん]", "晩御飯", ["ばんごはん"],
		[
			["晩", "ばん", false],
			["御", "ご", true],
			["飯", "はん", false]
		], "5694"
	],
	["(免|めん)[税|ぜい]", "免税", ["めんぜい"],
		[
			["免", "めん", true],
			["税", "ぜい", false]
		], "5858"
	],
	["(免|めん)[許|きょ]", "免許", ["めんきょ"],
		[
			["免", "めん", true],
			["許", "きょ", false]
		], "5859"
	],
	["[劇|げき]", "劇", ["げき"],
		[
			["劇", "げき", false]
		], -1
	],
	["[劇|げき][場|じょう]", "劇場", ["げきじょう"],
		[
			["劇", "げき", false],
			["場", "じょう", false]
		], -1
	],
	["[演|えん][劇|げき]", "演劇", ["えんげき"],
		[
			["演", "えん", false],
			["劇", "げき", false]
		], -1
	],
	["[悲劇|ひげき]", "悲劇", ["ひげき"],
		[
			["悲劇", "ひげき", false]
		], -1
	],
	["[模様|もよう]", "模様", ["もよう"],
		[
			["模様", "もよう", false]
		], -1
	],
	["[宣|せん][伝|でん]", "宣伝", ["せんでん"],
		[
			["宣", "せん", false],
			["伝", "でん", false]
		], -1
	],
	["[背|せ][中|なか]", "背中", ["せなか"],
		[
			["背", "せ", false],
			["中", "なか", false]
		], -1
	],
	["[背|せ][広|びろ]", "背広", ["せびろ"],
		[
			["背", "せ", false],
			["広", "びろ", false]
		], -1
	],
	["[背負|せお]*う", "背負", ["せお"],
		[
			["背負", "せお", false]
		], -1
	],
	["(御|おん)[中|ちゅう]", "御中", ["おんちゅう"],
		[
			["御", "おん", true],
			["中", "ちゅう", false]
		], "5870"
	],
	["(御|お)[辞|じ](儀|ぎ)", "御辞儀", ["おじぎ"],
		[
			["御", "お", true],
			["辞", "じ", false],
			["儀", "ぎ", true]
		], "5569"
	],
	["(御|ご)[飯|はん]", "御飯", ["ごはん"],
		[
			["御", "ご", true],
			["飯", "はん", false]
		], "5873"
	],
	["(御|お)[手|て](洗|あらい)", "御手洗", ["おてあらい"],
		[
			["御", "お", true],
			["手", "て", false],
			["洗", "あらい", true]
		], "5332"
	],
	["[盛|さか]り", "盛り", ["さかり"],
		[
			["盛", "さか", false],
			["り", null, false]
		], -1
	],
	["[盛|も]*5", "盛", ["も"],
		[
			["盛", "も", false]
		], -1
	],
	["[盛|さか]ん", "盛ん", ["さかん"],
		[
			["盛", "さか", false],
			["ん", null, false]
		], -1
	],
	["(範|はん)[囲|い]", "範囲", ["はんい"],
		[
			["範", "はん", true],
			["囲", "い", false]
		], "5876"
	],
	["[天|てん][皇|のう]", "天皇", ["てんのう"],
		[
			["天", "てん", false],
			["皇", "のう", false]
		], -1
	],
	["(哲|てつ)[学|がく]", "哲学", ["てつがく"],
		[
			["哲", "てつ", true],
			["学", "がく", false]
		], "5879"
	],
	["[臨|りん][時|じ]", "臨時", ["りんじ"],
		[
			["臨", "りん", false],
			["時", "じ", false]
		], -1
	],
	["[消|しょう][防|ぼう][署|しょ]", "消防署", ["しょうぼうしょ"],
		[
			["消", "しょう", false],
			["防", "ぼう", false],
			["署", "しょ", false]
		], -1
	],
	["[署|しょ][名|めい]", "署名", ["しょめい"],
		[
			["署", "しょ", false],
			["名", "めい", false]
		], -1
	],
	["[解|かい](釈|しゃく)", "解釈", ["かいしゃく"],
		[
			["解", "かい", false],
			["釈", "しゃく", true]
		], "5882"
	],
	["[資|し][源|げん]", "資源", ["しげん"],
		[
			["資", "し", false],
			["源", "げん", false]
		], -1
	],
	["[創|そう][作|さく]", "創作", ["そうさく"],
		[
			["創", "そう", false],
			["作", "さく", false]
		], -1
	],
	["(妥|だ)[当|とう]", "妥当", ["だとう"],
		[
			["妥", "だ", true],
			["当", "とう", false]
		], "5890"
	],
	["[故|こ][障|しょう]", "故障", ["こしょう"],
		[
			["故", "こ", false],
			["障", "しょう", false]
		], -1
	],
	["[障|しょう][子|じ]", "障子", ["しょうじ"],
		[
			["障", "しょう", false],
			["子", "じ", false]
		], -1
	],
	["[障|しょう][害|がい]", "障害", ["しょうがい"],
		[
			["障", "しょう", false],
			["害", "がい", false]
		], -1
	],
	["(威|い)[張|ば]*5", "威張", ["いば"],
		[
			["威", "い", true],
			["張", "ば", false]
		], "5891"
	],
	["[花|か](瓶|びん)", "花瓶", ["かびん"],
		[
			["花", "か", false],
			["瓶", "びん", true]
		], "5971"
	],
	["[筋|すじ]", "筋", ["すじ"],
		[
			["筋", "すじ", false]
		], -1
	],
	["[筋|きん][肉|にく]", "筋肉", ["きんにく"],
		[
			["筋", "きん", false],
			["肉", "にく", false]
		], -1
	],
	["(滞|たい)[在|ざい]", "滞在", ["たいざい"],
		[
			["滞", "たい", true],
			["在", "ざい", false]
		], "5894"
	],
	["[延|の]ば*す", "延ば", ["のば"],
		[
			["延", "の", false],
			["ば", null, false]
		], -1
	],
	["[延|の]び*る", "延び", ["のび"],
		[
			["延", "の", false],
			["び", null, false]
		], -1
	],
	["[延|えん][期|き]", "延期", ["えんき"],
		[
			["延", "えん", false],
			["期", "き", false]
		], -1
	],
	["[延|えん][長|ちょう]", "延長", ["えんちょう"],
		[
			["延", "えん", false],
			["長", "ちょう", false]
		], -1
	],
	["[乱|らん][暴|ぼう]", "乱暴", ["らんぼう"],
		[
			["乱", "らん", false],
			["暴", "ぼう", false]
		], -1
	],
	["[混|こん][乱|らん]", "混乱", ["こんらん"],
		[
			["混", "こん", false],
			["乱", "らん", false]
		], -1
	],
	["[善|ぜん]", "善", ["ぜん"],
		[
			["善", "ぜん", false]
		], -1
	],
	["[改|かい][善|ぜん]", "改善", ["かいぜん"],
		[
			["改", "かい", false],
			["善", "ぜん", false]
		], -1
	],
	["(症|しょう)[状|じょう]", "症状", ["しょうじょう"],
		[
			["症", "しょう", true],
			["状", "じょう", false]
		], "5901"
	],
	["{～}[庁|ちょう]", "～庁", ["ちょう"],
		[
			["～", null, false],
			["庁", "ちょう", false]
		], -1
	],
	["[官|かん][庁|ちょう]", "官庁", ["かんちょう"],
		[
			["官", "かん", false],
			["庁", "ちょう", false]
		], -1
	],
	["[県|けん][庁|ちょう]", "県庁", ["けんちょう"],
		[
			["県", "けん", false],
			["庁", "ちょう", false]
		], -1
	],
	["[城|しろ]", "城", ["しろ"],
		[
			["城", "しろ", false]
		], -1
	],
	["[一|いっ][層|そう]", "一層", ["いっそう"],
		[
			["一", "いっ", false],
			["層", "そう", false]
		], -1
	],
	["[大|たい][層|そう]", "大層", ["たいそう"],
		[
			["大", "たい", false],
			["層", "そう", false]
		], -1
	],
	["[高|こう][層|そう]", "高層", ["こうそう"],
		[
			["高", "こう", false],
			["層", "そう", false]
		], -1
	],
	["[裏|うら]", "裏", ["うら"],
		[
			["裏", "うら", false]
		], -1
	],
	["[裏|うら][切|ぎ]*5", "裏切", ["うらぎ"],
		[
			["裏", "うら", false],
			["切", "ぎ", false]
		], -1
	],
	["[裏|うら][口|ぐち]", "裏口", ["うらぐち"],
		[
			["裏", "うら", false],
			["口", "ぐち", false]
		], -1
	],
	["[裏|うら][返|がえ]*す", "裏返", ["うらがえ"],
		[
			["裏", "うら", false],
			["返", "がえ", false]
		], -1
	],
	["[手|て](袋|ぶくろ)", "手袋", ["てぶくろ"],
		[
			["手", "て", false],
			["袋", "ぶくろ", true]
		], "5905"
	],
	["[密|みつ]", "密", ["みつ"],
		[
			["密", "みつ", false]
		], -1
	],
	["(索|さく)[引|いん]", "索引", ["さくいん"],
		[
			["索", "さく", true],
			["引", "いん", false]
		], "5908"
	],
	["[我|わが]{～}", "我～", ["わが"],
		[
			["我", "わが", false],
			["～", null, false]
		], -1
	],
	["[我|われ][々|われ]", "我々", ["われわれ"],
		[
			["我", "われ", false],
			["々", "われ", false]
		], -1
	],
	["[出|しゅっ][勤|きん]", "出勤", ["しゅっきん"],
		[
			["出", "しゅっ", false],
			["勤", "きん", false]
		], -1
	],
	["[勤|つと]め", "勤め", ["つとめ"],
		[
			["勤", "つと", false],
			["め", null, false]
		], -1
	],
	["[勤|つと]め*る", "勤め", ["つとめ"],
		[
			["勤", "つと", false],
			["め", null, false]
		], -1
	],
	["[通|つう][勤|きん]", "通勤", ["つうきん"],
		[
			["通", "つう", false],
			["勤", "きん", false]
		], -1
	],
	["為る", "為る", ["する", "なる"],
		[], null
	],
	["[幕|まく]", "幕", ["まく"],
		[
			["幕", "まく", false]
		], -1
	],
	["[伝|でん][染|せん]", "伝染", ["でんせん"],
		[
			["伝", "でん", false],
			["染", "せん", false]
		], -1
	],
	["[困|こま]*5", "困", ["こま"],
		[
			["困", "こま", false]
		], -1
	],
	["[困|こん][難|なん]", "困難", ["こんなん"],
		[
			["困", "こん", false],
			["難", "なん", false]
		], -1
	],
	["[傷|きず]", "傷", ["きず"],
		[
			["傷", "きず", false]
		], -1
	],
	["[火傷|やけど]", "火傷", ["やけど"],
		[
			["火傷", "やけど", false]
		], -1
	],
	["[著|あらわ]*す", "著", ["あらわ"],
		[
			["著", "あらわ", false]
		], -1
	],
	["[著|ちょ][者|しゃ]", "著者", ["ちょしゃ"],
		[
			["著", "ちょ", false],
			["者", "しゃ", false]
		], -1
	],
	["(瀬|せ)[戸|と][物|もの]", "瀬戸物", ["せともの"],
		[
			["瀬", "せ", true],
			["戸", "と", false],
			["物", "もの", false]
		], "5920"
	],
	["[雑誌|ざっし]", "雑誌", ["ざっし"],
		[
			["雑誌", "ざっし", false]
		], -1
	],
	["(趣|しゅ)[味|み]", "趣味", ["しゅみ"],
		[
			["趣", "しゅ", true],
			["味", "み", false]
		], "5921"
	],
	["[秘密|ひみつ]", "秘密", ["ひみつ"],
		[
			["秘密", "ひみつ", false]
		], -1
	],
	["[刻|きざ]*む", "刻", ["きざ"],
		[
			["刻", "きざ", false]
		], -1
	],
	["[時|じ][刻|こく]", "時刻", ["じこく"],
		[
			["時", "じ", false],
			["刻", "こく", false]
		], -1
	],
	["[深|しん][刻|こく]", "深刻", ["しんこく"],
		[
			["深", "しん", false],
			["刻", "こく", false]
		], -1
	],
	["(遅|ち)[刻|こく]", "遅刻", ["ちこく"],
		[
			["遅", "ち", true],
			["刻", "こく", false]
		], "5638"
	],
	["[書|しょ](斎|さい)", "書斎", ["しょさい"],
		[
			["書", "しょ", false],
			["斎", "さい", true]
		], "5923"
	],
	["[宇|う](宙|ちゅう)", "宇宙", ["うちゅう"],
		[
			["宇", "う", false],
			["宙", "ちゅう", true]
		], "5274"
	],
	["[欲|ほ]しい", "欲しい", ["ほしい"],
		[
			["欲", "ほ", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[欲|よく][張|ば]り", "欲張り", ["よくばり"],
		[
			["欲", "よく", false],
			["張", "ば", false],
			["り", null, false]
		], -1
	],
	["[食|しょく][欲|よく]", "食欲", ["しょくよく"],
		[
			["食", "しょく", false],
			["欲", "よく", false]
		], -1
	],
	["[痛|いた]い", "痛い", ["いたい"],
		[
			["痛", "いた", false],
			["い", null, false]
		], -1
	],
	["[痛|いた]み", "痛み", ["いたみ"],
		[
			["痛", "いた", false],
			["み", null, false]
		], -1
	],
	["[苦痛|くつう]", "苦痛", ["くつう"],
		[
			["苦痛", "くつう", false]
		], -1
	],
	["[頭|ず][痛|つう]", "頭痛", ["ずつう"],
		[
			["頭", "ず", false],
			["痛", "つう", false]
		], -1
	],
	["[上|じょう](旬|じゅん)", "上旬", ["じょうじゅん"],
		[
			["上", "じょう", false],
			["旬", "じゅん", true]
		], "5926"
	],
	["[下|げ](旬|じゅん)", "下旬", ["げじゅん"],
		[
			["下", "げ", false],
			["旬", "じゅん", true]
		], "5927"
	],
	["[中|ちゅう](旬|じゅん)", "中旬", ["ちゅうじゅん"],
		[
			["中", "ちゅう", false],
			["旬", "じゅん", true]
		], "5928"
	],
	["[初|しょ](旬|じゅん)", "初旬", ["しょじゅん"],
		[
			["初", "しょ", false],
			["旬", "じゅん", true]
		], "5929"
	],
	["[圧|あっ][縮|しゅく]", "圧縮", ["あっしゅく"],
		[
			["圧", "あっ", false],
			["縮", "しゅく", false]
		], -1
	],
	["[縮|ちぢ]*む", "縮", ["ちぢ"],
		[
			["縮", "ちぢ", false]
		], -1
	],
	["[縮|ちぢ]め*る", "縮め", ["ちぢめ"],
		[
			["縮", "ちぢ", false],
			["め", null, false]
		], -1
	],
	["[縮|ちぢ]れ*る", "縮れ", ["ちぢれ"],
		[
			["縮", "ちぢ", false],
			["れ", null, false]
		], -1
	],
	["[縮|しゅく][小|しょう]", "縮小", ["しゅくしょう"],
		[
			["縮", "しゅく", false],
			["小", "しょう", false]
		], -1
	],
	["(恐|きょう)[縮|しゅく]", "恐縮", ["きょうしゅく"],
		[
			["恐", "きょう", true],
			["縮", "しゅく", false]
		], "5665"
	],
	["[枚|まい][数|すう]", "枚数", ["まいすう"],
		[
			["枚", "まい", false],
			["数", "すう", false]
		], -1
	],
	["[郵|ゆう][便|びん]", "郵便", ["ゆうびん"],
		[
			["郵", "ゆう", false],
			["便", "びん", false]
		], -1
	],
	["[郵|ゆう][送|そう]", "郵送", ["ゆうそう"],
		[
			["郵", "ゆう", false],
			["送", "そう", false]
		], -1
	],
	["[要|よう](旨|し)", "要旨", ["ようし"],
		[
			["要", "よう", false],
			["旨", "し", true]
		], "5932"
	],
	["[探|さが]*す", "探", ["さが"],
		[
			["探", "さが", false]
		], -1
	],
	["[探|さぐ]*5", "探", ["さぐ"],
		[
			["探", "さぐ", false]
		], -1
	],
	["抱く", "抱く", ["いだく", "だく"],
		[], null
	],
	["[骨|ほね]", "骨", ["ほね"],
		[
			["骨", "ほね", false]
		], -1
	],
	["[骨|こっ][折|せつ]", "骨折", ["こっせつ"],
		[
			["骨", "こっ", false],
			["折", "せつ", false]
		], -1
	],
	["[射|さ]*す", "射", ["さ"],
		[
			["射", "さ", false]
		], -1
	],
	["[注|ちゅう][射|しゃ]", "注射", ["ちゅうしゃ"],
		[
			["注", "ちゅう", false],
			["射", "しゃ", false]
		], -1
	],
	["[発|はっ][射|しゃ]", "発射", ["はっしゃ"],
		[
			["発", "はっ", false],
			["射", "しゃ", false]
		], -1
	],
	["[陽射|ひざし]", "陽射", ["ひざし"],
		[
			["陽射", "ひざし", false]
		], -1
	],
	["(比較|ひかく)[的|てき]", "比較的", ["ひかくてき"],
		[
			["比較", "ひかく", true],
			["的", "てき", false]
		], "5934"
	],
	["[届|とど]*く", "届", ["とど"],
		[
			["届", "とど", false]
		], -1
	],
	["[届|とど]け*る", "届け", ["とどけ"],
		[
			["届", "とど", false],
			["け", null, false]
		], -1
	],
	["(床|とこ)の[間|ま]", "床の間", ["とこのま"],
		[
			["床", "とこ", true],
			["の", null, false],
			["間", "ま", false]
		], "5936"
	],
	["(床|とこ)[屋|や]", "床屋", ["とこや"],
		[
			["床", "とこ", true],
			["屋", "や", false]
		], "5937"
	],
	["[起|き](床|しょう)", "起床", ["きしょう"],
		[
			["起", "き", false],
			["床", "しょう", true]
		], "5938"
	],
	["{～}[巻|かん]", "～巻", ["かん"],
		[
			["～", null, false],
			["巻", "かん", false]
		], -1
	],
	["[巻|ま]*く", "巻", ["ま"],
		[
			["巻", "ま", false]
		], -1
	],
	["(寝|ね)[巻|まき]", "寝巻", ["ねまき"],
		[
			["寝", "ね", true],
			["巻", "まき", false]
		], "5822"
	],
	["[発|はっ][揮|き]", "発揮", ["はっき"],
		[
			["発", "はっ", false],
			["揮", "き", false]
		], -1
	],
	["[大|たい](抵|てい)", "大抵", ["たいてい"],
		[
			["大", "たい", false],
			["抵", "てい", true]
		], "5940"
	],
	["[閉|と]じ*る", "閉じ", ["とじ"],
		[
			["閉", "と", false],
			["じ", null, false]
		], -1
	],
	["[閉|へい][会|かい]", "閉会", ["へいかい"],
		[
			["閉", "へい", false],
			["会", "かい", false]
		], -1
	],
	["[家|や][賃|ちん]", "家賃", ["やちん"],
		[
			["家", "や", false],
			["賃", "ちん", false]
		], -1
	],
	["[貴|き][重|ちょう]", "貴重", ["きちょう"],
		[
			["貴", "き", false],
			["重", "ちょう", false]
		], -1
	],
	["[暮|く]らし", "暮らし", ["くらし"],
		[
			["暮", "く", false],
			["ら", null, false],
			["し", null, false]
		], -1
	],
	["[暮|く]ら*す", "暮ら", ["くら"],
		[
			["暮", "く", false],
			["ら", null, false]
		], -1
	],
	["[暮|く]れ", "暮れ", ["くれ"],
		[
			["暮", "く", false],
			["れ", null, false]
		], -1
	],
	["[暮|く]れ*る", "暮れ", ["くれ"],
		[
			["暮", "く", false],
			["れ", null, false]
		], -1
	],
	["[簡|かん][単|たん]", "簡単", ["かんたん"],
		[
			["簡", "かん", false],
			["単", "たん", false]
		], -1
	],
	["[納|おさ]め*る", "納め", ["おさめ"],
		[
			["納", "おさ", false],
			["め", null, false]
		], -1
	],
	["[納|なっ][得|とく]", "納得", ["なっとく"],
		[
			["納", "なっ", false],
			["得", "とく", false]
		], -1
	],
	["[本|ほん](棚|だな)", "本棚", ["ほんだな"],
		[
			["本", "ほん", false],
			["棚", "だな", true]
		], "6023"
	],
	["[心|しん][臓|ぞう]", "心臓", ["しんぞう"],
		[
			["心", "しん", false],
			["臓", "ぞう", false]
		], -1
	],
	["[法|ほう][律|りつ]", "法律", ["ほうりつ"],
		[
			["法", "ほう", false],
			["律", "りつ", false]
		], -1
	],
	["[規|き][律|りつ]", "規律", ["きりつ"],
		[
			["規", "き", false],
			["律", "りつ", false]
		], -1
	],
	["(濃|のう)[度|ど]", "濃度", ["のうど"],
		[
			["濃", "のう", true],
			["度", "ど", false]
		], "5948"
	],
	["[至|いた]*5", "至", ["いた"],
		[
			["至", "いた", false]
		], -1
	],
	["[至|し][急|きゅう]", "至急", ["しきゅう"],
		[
			["至", "し", false],
			["急", "きゅう", false]
		], -1
	],
	["[宗|しゅう][教|きょう]", "宗教", ["しゅうきょう"],
		[
			["宗", "しゅう", false],
			["教", "きょう", false]
		], -1
	],
	["(魅|み)[力|りょく]", "魅力", ["みりょく"],
		[
			["魅", "み", true],
			["力", "りょく", false]
		], "5950"
	],
	["[宇|う][宙|ちゅう]", "宇宙", ["うちゅう"],
		[
			["宇", "う", false],
			["宙", "ちゅう", false]
		], -1
	],
	["[好|す]き(嫌|きら)い", "好き嫌い", ["すききらい"],
		[
			["好", "す", false],
			["き", null, false],
			["嫌", "きら", true],
			["い", null, false]
		], "5951"
	],
	["[機|き](嫌|げん)", "機嫌", ["きげん"],
		[
			["機", "き", false],
			["嫌", "げん", true]
		], "5956"
	],
	["[一|いっ](斉|せい)", "一斉", ["いっせい"],
		[
			["一", "いっ", false],
			["斉", "せい", true]
		], "5957"
	],
	["[体|たい][操|そう]", "体操", ["たいそう"],
		[
			["体", "たい", false],
			["操", "そう", false]
		], -1
	],
	["[操|そう][作|さ]", "操作", ["そうさ"],
		[
			["操", "そう", false],
			["作", "さ", false]
		], -1
	],
	["[座|ざ](敷|しき)", "座敷", ["ざしき"],
		[
			["座", "ざ", false],
			["敷", "しき", true]
		], "5958"
	],
	["(敷|しき)[地|ち]", "敷地", ["しきち"],
		[
			["敷", "しき", true],
			["地", "ち", false]
		], "5960"
	],
	["[誕|たん][生|じょう]", "誕生", ["たんじょう"],
		[
			["誕", "たん", false],
			["生", "じょう", false]
		], -1
	],
	["[孝|こう][行|こう]", "孝行", ["こうこう"],
		[
			["孝", "こう", false],
			["行", "こう", false]
		], -1
	],
	["[単|たん][純|じゅん]", "単純", ["たんじゅん"],
		[
			["単", "たん", false],
			["純", "じゅん", false]
		], -1
	],
	["[純|じゅん][情|じょう]", "純情", ["じゅんじょう"],
		[
			["純", "じゅん", false],
			["情", "じょう", false]
		], -1
	],
	["(零|れい)[点|てん]", "零点", ["れいてん"],
		[
			["零", "れい", true],
			["点", "てん", false]
		], "5965"
	],
	["[申|もう]し[訳|わけ]", "申し訳", ["もうしわけ"],
		[
			["申", "もう", false],
			["し", null, false],
			["訳", "わけ", false]
		], -1
	],
	["[申|もう]し[訳|わけ]ない", "申し訳ない", ["もうしわけない"],
		[
			["申", "もう", false],
			["し", null, false],
			["訳", "わけ", false],
			["な", null, false],
			["い", null, false]
		], -1
	],
	["[訳|やく]*す", "訳", ["やく"],
		[
			["訳", "やく", false]
		], -1
	],
	["[通|つう][訳|やく]", "通訳", ["つうやく"],
		[
			["通", "つう", false],
			["訳", "やく", false]
		], -1
	],
	["[吸|す]*う", "吸", ["す"],
		[
			["吸", "す", false]
		], -1
	],
	["[吸|きゅう][収|しゅう]", "吸収", ["きゅうしゅう"],
		[
			["吸", "きゅう", false],
			["収", "しゅう", false]
		], -1
	],
	["[呼吸|こきゅう]", "呼吸", ["こきゅう"],
		[
			["呼吸", "こきゅう", false]
		], -1
	],
	["(滅|めっ)[多|た]に", "滅多に", ["めったに"],
		[
			["滅", "めっ", true],
			["多", "た", false],
			["に", null, false]
		], "5968"
	],
	["[看|かん][板|ばん]", "看板", ["かんばん"],
		[
			["看", "かん", false],
			["板", "ばん", false]
		], -1
	],
	["[看|かん][病|びょう]", "看病", ["かんびょう"],
		[
			["看", "かん", false],
			["病", "びょう", false]
		], -1
	],
	["[看|かん][護|ご][婦|ふ]", "看護婦", ["かんごふ"],
		[
			["看", "かん", false],
			["護", "ご", false],
			["婦", "ふ", false]
		], -1
	],
	["[基|き](礎|そ)", "基礎", ["きそ"],
		[
			["基", "き", false],
			["礎", "そ", true]
		], "5970"
	],
	["[演|えん][奏|そう]", "演奏", ["えんそう"],
		[
			["演", "えん", false],
			["奏", "そう", false]
		], -1
	],
	["[翌|よく]{～}", "翌～", ["よく"],
		[
			["翌", "よく", false],
			["～", null, false]
		], -1
	],
	["[宿|しゅく](泊|はく)", "宿泊", ["しゅくはく"],
		[
			["宿", "しゅく", false],
			["泊", "はく", true]
		], "5974"
	],
	["[片|かた][付|づ]*く", "片付", ["かたづ"],
		[
			["片", "かた", false],
			["付", "づ", false]
		], -1
	],
	["[片|かた][付|づ]け*る", "片付け", ["かたづけ"],
		[
			["片", "かた", false],
			["付", "づ", false],
			["け", null, false]
		], -1
	],
	["[片|かた][仮|か][名|な]", "片仮名", ["かたかな"],
		[
			["片", "かた", false],
			["仮", "か", false],
			["名", "な", false]
		], -1
	],
	["[片|かた][寄|よ]*5", "片寄", ["かたよ"],
		[
			["片", "かた", false],
			["寄", "よ", false]
		], -1
	],
	["[片|かた][道|みち]", "片道", ["かたみち"],
		[
			["片", "かた", false],
			["道", "みち", false]
		], -1
	],
	["[破|は][片|へん]", "破片", ["はへん"],
		[
			["破", "は", false],
			["片", "へん", false]
		], -1
	],
	["[敬|うやま]*う", "敬", ["うやま"],
		[
			["敬", "うやま", false]
		], -1
	],
	["[敬|けい][意|い]", "敬意", ["けいい"],
		[
			["敬", "けい", false],
			["意", "い", false]
		], -1
	],
	["[敬|けい][語|ご]", "敬語", ["けいご"],
		[
			["敬", "けい", false],
			["語", "ご", false]
		], -1
	],
	["(尊|そん)[敬|けい]", "尊敬", ["そんけい"],
		[
			["尊", "そん", true],
			["敬", "けい", false]
		], "5334"
	],
	["[泉|いずみ]", "泉", ["いずみ"],
		[
			["泉", "いずみ", false]
		], -1
	],
	["[温|おん][泉|せん]", "温泉", ["おんせん"],
		[
			["温", "おん", false],
			["泉", "せん", false]
		], -1
	],
	["(寿|じゅ)[命|みょう]", "寿命", ["じゅみょう"],
		[
			["寿", "じゅ", true],
			["命", "みょう", false]
		], "5981"
	],
	["{～}[沿|そ]い", "～沿い", ["そい"],
		[
			["～", null, false],
			["沿", "そ", false],
			["い", null, false]
		], -1
	],
	["(頑|がん)[張|ば]*5", "頑張", ["がんば"],
		[
			["頑", "がん", true],
			["張", "ば", false]
		], "5982"
	],
	["[俳優|はいゆう]", "俳優", ["はいゆう"],
		[
			["俳優", "はいゆう", false]
		], -1
	],
	["[俳|はい][句|く]", "俳句", ["はいく"],
		[
			["俳", "はい", false],
			["句", "く", false]
		], -1
	],
	["[宝|たから]", "宝", ["たから"],
		[
			["宝", "たから", false]
		], -1
	],
	["[宝|ほう][石|せき]", "宝石", ["ほうせき"],
		[
			["宝", "ほう", false],
			["石", "せき", false]
		], -1
	],
	["[胸|むね]", "胸", ["むね"],
		[
			["胸", "むね", false]
		], -1
	],
	["(掃|そう)[除|じ]", "掃除", ["そうじ"],
		[
			["掃", "そう", true],
			["除", "じ", false]
		], "5987"
	],
	["[清|せい](掃|そう)", "清掃", ["せいそう"],
		[
			["清", "せい", false],
			["掃", "そう", true]
		], "5988"
	],
	["[砂|すな]", "砂", ["すな"],
		[
			["砂", "すな", false]
		], -1
	],
	["[砂|さ](糖|とう)", "砂糖", ["さとう"],
		[
			["砂", "さ", false],
			["糖", "とう", true]
		], "5373"
	],
	["[誤|あやま]り", "誤り", ["あやまり"],
		[
			["誤", "あやま", false],
			["り", null, false]
		], -1
	],
	["[誤|ご][解|かい]", "誤解", ["ごかい"],
		[
			["誤", "ご", false],
			["解", "かい", false]
		], -1
	],
	["(巡|じゅん)[査|さ]", "巡査", ["じゅんさ"],
		[
			["巡", "じゅん", true],
			["査", "さ", false]
		], "5993"
	],
	["[手|て][洗|あら]い", "手洗い", ["てあらい"],
		[
			["手", "て", false],
			["洗", "あら", false],
			["い", null, false]
		], -1
	],
	["[洗|あら]*う", "洗", ["あら"],
		[
			["洗", "あら", false]
		], -1
	],
	["[洗|せん][面|めん]", "洗面", ["せんめん"],
		[
			["洗", "せん", false],
			["面", "めん", false]
		], -1
	],
	["(御|お)[手|て][洗|あらい]", "御手洗", ["おてあらい"],
		[
			["御", "お", true],
			["手", "て", false],
			["洗", "あらい", false]
		], "5874"
	],
	["[洗|せん](剤|ざい)", "洗剤", ["せんざい"],
		[
			["洗", "せん", false],
			["剤", "ざい", true]
		], "5919"
	],
	["[尊|そん][敬|けい]", "尊敬", ["そんけい"],
		[
			["尊", "そん", false],
			["敬", "けい", false]
		], -1
	],
	["[尊|そん][重|ちょう]", "尊重", ["そんちょう"],
		[
			["尊", "そん", false],
			["重", "ちょう", false]
		], -1
	],
	["[窓|まど]", "窓", ["まど"],
		[
			["窓", "まど", false]
		], -1
	],
	["[窓|まど][口|ぐち]", "窓口", ["まどぐち"],
		[
			["窓", "まど", false],
			["口", "ぐち", false]
		], -1
	],
	["[一|いっ](瞬|しゅん)", "一瞬", ["いっしゅん"],
		[
			["一", "いっ", false],
			["瞬", "しゅん", true]
		], "5997"
	],
	["(瞬|しゅん)[間|かん]", "瞬間", ["しゅんかん"],
		[
			["瞬", "しゅん", true],
			["間", "かん", false]
		], "5998"
	],
	["[幼|おさな]い", "幼い", ["おさない"],
		[
			["幼", "おさな", false],
			["い", null, false]
		], -1
	],
	["[幼|よう][児|じ]", "幼児", ["ようじ"],
		[
			["幼", "よう", false],
			["児", "じ", false]
		], -1
	],
	["[鉄|てっ](砲|ぽう)", "鉄砲", ["てっぽう"],
		[
			["鉄", "てっ", false],
			["砲", "ぽう", true]
		], "6000"
	],
	["(噴|ふん)[水|すい]", "噴水", ["ふんすい"],
		[
			["噴", "ふん", true],
			["水", "すい", false]
		], "6003"
	],
	["(噴|ふん)[火|か]", "噴火", ["ふんか"],
		[
			["噴", "ふん", true],
			["火", "か", false]
		], "6004"
	],
	["[縦|たて]", "縦", ["たて"],
		[
			["縦", "たて", false]
		], -1
	],
	["[四|し][捨|しゃ][五|ご][入|にゅう]", "四捨五入", ["ししゃごにゅう"],
		[
			["四", "し", false],
			["捨", "しゃ", false],
			["五", "ご", false],
			["入", "にゅう", false]
		], -1
	],
	["[腹|はら]", "腹", ["はら"],
		[
			["腹", "はら", false]
		], -1
	],
	["[牛|ぎゅう][乳|にゅう]", "牛乳", ["ぎゅうにゅう"],
		[
			["牛", "ぎゅう", false],
			["乳", "にゅう", false]
		], -1
	],
	["[口|くち][紅|べに]", "口紅", ["くちべに"],
		[
			["口", "くち", false],
			["紅", "べに", false]
		], -1
	],
	["[紅|こう][茶|ちゃ]", "紅茶", ["こうちゃ"],
		[
			["紅", "こう", false],
			["茶", "ちゃ", false]
		], -1
	],
	["{～}[冊|さつ]", "～冊", ["さつ"],
		[
			["～", null, false],
			["冊", "さつ", false]
		], -1
	],
	["[卵|たまご]", "卵", ["たまご"],
		[
			["卵", "たまご", false]
		], -1
	],
	["[干|ほ]*す", "干", ["ほ"],
		[
			["干", "ほ", false]
		], -1
	],
	["[冷|れい](凍|とう)", "冷凍", ["れいとう"],
		[
			["冷", "れい", false],
			["凍", "とう", true]
		], "6009"
	],
	["[頂|いただ]*く", "頂", ["いただ"],
		[
			["頂", "いただ", false]
		], -1
	],
	["[頂|ちょう][上|じょう]", "頂上", ["ちょうじょう"],
		[
			["頂", "ちょう", false],
			["上", "じょう", false]
		], -1
	],
	["[頂|ちょう][点|てん]", "頂点", ["ちょうてん"],
		[
			["頂", "ちょう", false],
			["点", "てん", false]
		], -1
	],
	["[穴|あな]", "穴", ["あな"],
		[
			["穴", "あな", false]
		], -1
	],
	["[暖|あたた]かい", "暖かい", ["あたたかい"],
		[
			["暖", "あたた", false],
			["か", null, false],
			["い", null, false]
		], -1
	],
	["[暖|あたた]ま*5", "暖ま", ["あたたま"],
		[
			["暖", "あたた", false],
			["ま", null, false]
		], -1
	],
	["[暖|あたた]め*る", "暖め", ["あたため"],
		[
			["暖", "あたた", false],
			["め", null, false]
		], -1
	],
	["[温|おん][暖|だん]", "温暖", ["おんだん"],
		[
			["温", "おん", false],
			["暖", "だん", false]
		], -1
	],
	["[暖|だん](房|ぼう)", "暖房", ["だんぼう"],
		[
			["暖", "だん", false],
			["房", "ぼう", true]
		], "5616"
	],
	["[朗|ほが]らか", "朗らか", ["ほがらか"],
		[
			["朗", "ほが", false],
			["ら", null, false],
			["か", null, false]
		], -1
	],
	["(唯|ゆい)[一|いつ]", "唯一", ["ゆいいつ"],
		[
			["唯", "ゆい", true],
			["一", "いつ", false]
		], "6019"
	],
	["(膨|ぼう)[大|だい]", "膨大", ["ぼうだい"],
		[
			["膨", "ぼう", true],
			["大", "だい", false]
		], "6022"
	],
	["[熟|じゅく][語|ご]", "熟語", ["じゅくご"],
		[
			["熟", "じゅく", false],
			["語", "ご", false]
		], -1
	],
	["[失|しつ](恋|れん)", "失恋", ["しつれん"],
		[
			["失", "しつ", false],
			["恋", "れん", true]
		], "6024"
	],
	["(恋|こい)[人|びと]", "恋人", ["こいびと"],
		[
			["恋", "こい", true],
			["人", "びと", false]
		], "6027"
	],
	["[拝|おが]*む", "拝", ["おが"],
		[
			["拝", "おが", false]
		], -1
	],
	["[拝|はい][見|けん]", "拝見", ["はいけん"],
		[
			["拝", "はい", false],
			["見", "けん", false]
		], -1
	],
	["[棒|ぼう]", "棒", ["ぼう"],
		[
			["棒", "ぼう", false]
		], -1
	],
	["[砂|さ][糖|とう]", "砂糖", ["さとう"],
		[
			["砂", "さ", false],
			["糖", "とう", false]
		], -1
	],
	["[展|てん][覧|らん][会|かい]", "展覧会", ["てんらんかい"],
		[
			["展", "てん", false],
			["覧", "らん", false],
			["会", "かい", false]
		], -1
	],
	["(御|ご)[覧|らん]", "御覧", ["ごらん"],
		[
			["御", "ご", true],
			["覧", "らん", false]
		], "5875"
	],
	["(郊|こう)[外|がい]", "郊外", ["こうがい"],
		[
			["郊", "こう", true],
			["外", "がい", false]
		], "6032"
	],
	["[真|しん](剣|けん)", "真剣", ["しんけん"],
		[
			["真", "しん", false],
			["剣", "けん", true]
		], "6033"
	],
	["[水|すい][蒸|じょう][気|き]", "水蒸気", ["すいじょうき"],
		[
			["水", "すい", false],
			["蒸", "じょう", false],
			["気", "き", false]
		], -1
	],
	["[蒸|む]し[暑|あつ]い", "蒸し暑い", ["むしあつい"],
		[
			["蒸", "む", false],
			["し", null, false],
			["暑", "あつ", false],
			["い", null, false]
		], -1
	],
	["[蒸|む]*す", "蒸", ["む"],
		[
			["蒸", "む", false]
		], -1
	],
	["[蒸|じょう][気|き]", "蒸気", ["じょうき"],
		[
			["蒸", "じょう", false],
			["気", "き", false]
		], -1
	],
	["[蒸|じょう][発|はつ]", "蒸発", ["じょうはつ"],
		[
			["蒸", "じょう", false],
			["発", "はつ", false]
		], -1
	],
	["[将|しょう](棋|ぎ)", "将棋", ["しょうぎ"],
		[
			["将", "しょう", false],
			["棋", "ぎ", true]
		], "6039"
	],
	["[代|だい][名|めい][詞|し]", "代名詞", ["だいめいし"],
		[
			["代", "だい", false],
			["名", "めい", false],
			["詞", "し", false]
		], -1
	],
	["[副|ふく][詞|し]", "副詞", ["ふくし"],
		[
			["副", "ふく", false],
			["詞", "し", false]
		], -1
	],
	["[動|どう][詞|し]", "動詞", ["どうし"],
		[
			["動", "どう", false],
			["詞", "し", false]
		], -1
	],
	["[台詞|せりふ]", "台詞", ["せりふ"],
		[
			["台詞", "せりふ", false]
		], -1
	],
	["[名|めい][詞|し]", "名詞", ["めいし"],
		[
			["名", "めい", false],
			["詞", "し", false]
		], -1
	],
	["[形|けい][容|よう][動|どう][詞|し]", "形容動詞", ["けいようどうし"],
		[
			["形", "けい", false],
			["容", "よう", false],
			["動", "どう", false],
			["詞", "し", false]
		], -1
	],
	["[形|けい][容|よう][詞|し]", "形容詞", ["けいようし"],
		[
			["形", "けい", false],
			["容", "よう", false],
			["詞", "し", false]
		], -1
	],
	["[居|い](眠|ねむ)り", "居眠り", ["いねむり"],
		[
			["居", "い", false],
			["眠", "ねむ", true],
			["り", null, false]
		], "6040"
	],
	["[寸|すん][法|ぽう]", "寸法", ["すんぽう"],
		[
			["寸", "すん", false],
			["法", "ぽう", false]
		], -1
	],
	["(冒|ぼう)[険|けん]", "冒険", ["ぼうけん"],
		[
			["冒", "ぼう", true],
			["険", "けん", false]
		], "6044"
	],
	["[机|つくえ]", "机", ["つくえ"],
		[
			["机", "つくえ", false]
		], -1
	],
	["[磁|じ][石|しゃく]", "磁石", ["じしゃく"],
		[
			["磁", "じ", false],
			["石", "しゃく", false]
		], -1
	],
	["[灰|はい]", "灰", ["はい"],
		[
			["灰", "はい", false]
		], -1
	],
	["[灰|はい][色|いろ]", "灰色", ["はいいろ"],
		[
			["灰", "はい", false],
			["色", "いろ", false]
		], -1
	],
	["[灰|はい][皿|ざら]", "灰皿", ["はいざら"],
		[
			["灰", "はい", false],
			["皿", "ざら", false]
		], -1
	],
	["[記|き](憶|おく)", "記憶", ["きおく"],
		[
			["記", "き", false],
			["憶", "おく", true]
		], "6046"
	],
	["[垂|すい][直|ちょく]", "垂直", ["すいちょく"],
		[
			["垂", "すい", false],
			["直", "ちょく", false]
		], -1
	],
	["[穀|こく][物|もつ]", "穀物", ["こくもつ"],
		[
			["穀", "こく", false],
			["物", "もつ", false]
		], -1
	],
	["[絹|きぬ]", "絹", ["きぬ"],
		[
			["絹", "きぬ", false]
		], -1
	],
	["(克|こく)[服|ふく]", "克服", ["こくふく"],
		[
			["克", "こく", true],
			["服", "ふく", false]
		], "6051"
	],
	["(概|がい)[論|ろん]", "概論", ["がいろん"],
		[
			["概", "がい", true],
			["論", "ろん", false]
		], "6052"
	],
	["{～}[歳|さい]", "～歳", ["さい"],
		[
			["～", null, false],
			["歳", "さい", false]
		], -1
	],
	["[二十歳|はたち]", "二十歳", ["はたち"],
		[
			["二十歳", "はたち", false]
		], -1
	],
	["[万|ばん][歳|ざい]", "万歳", ["ばんざい"],
		[
			["万", "ばん", false],
			["歳", "ざい", false]
		], -1
	],
	["[企|き][業|ぎょう]", "企業", ["きぎょう"],
		[
			["企", "き", false],
			["業", "ぎょう", false]
		], -1
	],
	["(雰|ふん)[囲|い][気|き]", "雰囲気", ["ふんいき"],
		[
			["雰", "ふん", true],
			["囲", "い", false],
			["気", "き", false]
		], "6054"
	],
	["[与|あた]え*る", "与え", ["あたえ"],
		[
			["与", "あた", false],
			["え", null, false]
		], -1
	],
	["[給|きゅう][与|よ]", "給与", ["きゅうよ"],
		[
			["給", "きゅう", false],
			["与", "よ", false]
		], -1
	],
	["[応援|おうえん]", "応援", ["おうえん"],
		[
			["応援", "おうえん", false]
		], -1
	],
	["[援|えん][助|じょ]", "援助", ["えんじょ"],
		[
			["援", "えん", false],
			["助", "じょ", false]
		], -1
	],
	["[遅|おそ]い", "遅い", ["おそい"],
		[
			["遅", "おそ", false],
			["い", null, false]
		], -1
	],
	["[遅|おく]れ*る", "遅れ", ["おくれ"],
		[
			["遅", "おく", false],
			["れ", null, false]
		], -1
	],
	["[実|じっ][施|し]", "実施", ["じっし"],
		[
			["実", "じっ", false],
			["施", "し", false]
		], -1
	],
	["[食|しょく](卓|たく)", "食卓", ["しょくたく"],
		[
			["食", "しょく", false],
			["卓", "たく", true]
		], "6056"
	],
	["[井|い][戸|ど]", "井戸", ["いど"],
		[
			["井", "い", false],
			["戸", "ど", false]
		], -1
	],
	["[食|しょく](糧|りょう)", "食糧", ["しょくりょう"],
		[
			["食", "しょく", false],
			["糧", "りょう", true]
		], "6057"
	],
	["[相|そう][違|い]", "相違", ["そうい"],
		[
			["相", "そう", false],
			["違", "い", false]
		], -1
	],
	["[違|ちが]い", "違い", ["ちがい"],
		[
			["違", "ちが", false],
			["い", null, false]
		], -1
	],
	["[違|ちが]いない", "違いない", ["ちがいない"],
		[
			["違", "ちが", false],
			["い", null, false],
			["な", null, false],
			["い", null, false]
		], -1
	],
	["[違|ちが]*う", "違", ["ちが"],
		[
			["違", "ちが", false]
		], -1
	],
	["[違|い][反|はん]", "違反", ["いはん"],
		[
			["違", "い", false],
			["反", "はん", false]
		], -1
	],
	["[間|ま][違|ちが]い", "間違い", ["まちがい"],
		[
			["間", "ま", false],
			["違", "ちが", false],
			["い", null, false]
		], -1
	],
	["[間|ま][違|ちが]え*る", "間違え", ["まちがえ"],
		[
			["間", "ま", false],
			["違", "ちが", false],
			["え", null, false]
		], -1
	],
	["[新|しん][鮮|せん]", "新鮮", ["しんせん"],
		[
			["新", "しん", false],
			["鮮", "せん", false]
		], -1
	],
	["[特|とく](殊|しゅ)", "特殊", ["とくしゅ"],
		[
			["特", "とく", false],
			["殊", "しゅ", true]
		], "6058"
	],
	["[環境|かんきょう]", "環境", ["かんきょう"],
		[
			["環境", "かんきょう", false]
		], -1
	],
	["[審|しん][判|ぱん]", "審判", ["しんぱん"],
		[
			["審", "しん", false],
			["判", "ぱん", false]
		], -1
	],
	["[先|せん](輩|ぱい)", "先輩", ["せんぱい"],
		[
			["先", "せん", false],
			["輩", "ぱい", true]
		], "6067"
	],
	["[後|こう](輩|はい)", "後輩", ["こうはい"],
		[
			["後", "こう", false],
			["輩", "はい", true]
		], "6068"
	],
	["[欧|おう][米|べい]", "欧米", ["おうべい"],
		[
			["欧", "おう", false],
			["米", "べい", false]
		], -1
	],
	["[自|じ](慢|まん)", "自慢", ["じまん"],
		[
			["自", "じ", false],
			["慢", "まん", true]
		], "6071"
	],
	["[訴|うった]え*る", "訴え", ["うったえ"],
		[
			["訴", "うった", false],
			["え", null, false]
		], -1
	],
	["[被|かぶ]せ*る", "被せ", ["かぶせ"],
		[
			["被", "かぶ", false],
			["せ", null, false]
		], -1
	],
	["[被|かぶ]*5", "被", ["かぶ"],
		[
			["被", "かぶ", false]
		], -1
	],
	["[被|ひ][害|がい]", "被害", ["ひがい"],
		[
			["被", "ひ", false],
			["害", "がい", false]
		], -1
	],
	["(拍|はく)[手|しゅ]", "拍手", ["はくしゅ"],
		[
			["拍", "はく", true],
			["手", "しゅ", false]
		], "6072"
	],
	["[渡|わた]*す", "渡", ["わた"],
		[
			["渡", "わた", false]
		], -1
	],
	["(丈|じょう)[夫|ぶ]", "丈夫", ["じょうぶ"],
		[
			["丈", "じょう", true],
			["夫", "ぶ", false]
		], "6073"
	],
	["[大|だい](丈|じょう)[夫|ぶ]", "大丈夫", ["だいじょうぶ"],
		[
			["大", "だい", false],
			["丈", "じょう", true],
			["夫", "ぶ", false]
		], "6074"
	],
	["[影|かげ]", "影", ["かげ"],
		[
			["影", "かげ", false]
		], -1
	],
	["[影|えい](響|きょう)", "影響", ["えいきょう"],
		[
			["影", "えい", false],
			["響", "きょう", true]
		], "5455"
	],
	["(撮|さつ)[影|えい]", "撮影", ["さつえい"],
		[
			["撮", "さつ", true],
			["影", "えい", false]
		], "5792"
	],
	["[含|ふく]*む", "含", ["ふく"],
		[
			["含", "ふく", false]
		], -1
	],
	["[含|ふく]め*る", "含め", ["ふくめ"],
		[
			["含", "ふく", false],
			["め", null, false]
		], -1
	],
	["[撃|う]*つ", "撃", ["う"],
		[
			["撃", "う", false]
		], -1
	],
	["[間|かん](隔|かく)", "間隔", ["かんかく"],
		[
			["間", "かん", false],
			["隔", "かく", true]
		], "6077"
	],
	["[金|きん][融|ゆう]", "金融", ["きんゆう"],
		[
			["金", "きん", false],
			["融", "ゆう", false]
		], -1
	],
	["[休|きゅう](暇|か)", "休暇", ["きゅうか"],
		[
			["休", "きゅう", false],
			["暇", "か", true]
		], "6081"
	],
	["[状|じょう][況|きょう]", "状況", ["じょうきょう"],
		[
			["状", "じょう", false],
			["況", "きょう", false]
		], -1
	],
	["[図|ず](鑑|かん)", "図鑑", ["ずかん"],
		[
			["図", "ず", false],
			["鑑", "かん", true]
		], "6083"
	],
	["(鑑|かん)[賞|しょう]", "鑑賞", ["かんしょう"],
		[
			["鑑", "かん", true],
			["賞", "しょう", false]
		], "6084"
	],
	["[影|えい][響|きょう]", "影響", ["えいきょう"],
		[
			["影", "えい", false],
			["響", "きょう", false]
		], -1
	],
	["[響|ひび]き", "響き", ["ひびき"],
		[
			["響", "ひび", false],
			["き", null, false]
		], -1
	],
	["[響|ひび]*く", "響", ["ひび"],
		[
			["響", "ひび", false]
		], -1
	],
	["[日|ひ](陰|かげ)", "日陰", ["ひかげ"],
		[
			["日", "ひ", false],
			["陰", "かげ", true]
		], "6085"
	],
	["[突|つ]き[当|あ]たり", "突き当たり", ["つきあたり"],
		[
			["突", "つ", false],
			["き", null, false],
			["当", "あ", false],
			["た", null, false],
			["り", null, false]
		], -1
	],
	["[突|つ]き[当|あ]た*5", "突き当た", ["つきあた"],
		[
			["突", "つ", false],
			["き", null, false],
			["当", "あ", false],
			["た", null, false]
		], -1
	],
	["[突|つ]*く", "突", ["つ"],
		[
			["突", "つ", false]
		], -1
	],
	["[突|とつ][然|ぜん]", "突然", ["とつぜん"],
		[
			["突", "とつ", false],
			["然", "ぜん", false]
		], -1
	],
	["[突|つ]っ(込|こ)*む", "突っ込", ["つっこ"],
		[
			["突", "つ", false],
			["っ", null, false],
			["込", "こ", true]
		], "5534"
	],
	["(衝|しょうと)[突|つ]", "衝突", ["しょうとつ"],
		[
			["衝", "しょうと", true],
			["突", "つ", false]
		], "5752"
	],
	["(煙|えんと)[突|つ]", "煙突", ["えんとつ"],
		[
			["煙", "えんと", true],
			["突", "つ", false]
		], "6016"
	],
	["[申|しん][請|せい]", "申請", ["しんせい"],
		[
			["申", "しん", false],
			["請", "せい", false]
		], -1
	],
	["[請求|せいきゅう]", "請求", ["せいきゅう"],
		[
			["請求", "せいきゅう", false]
		], -1
	],
	["(随|ずい)[分|ぶん]", "随分", ["ずいぶん"],
		[
			["随", "ずい", true],
			["分", "ぶん", false]
		], "6089"
	],
	["(随|ずい)[筆|ひつ]", "随筆", ["ずいひつ"],
		[
			["随", "ずい", true],
			["筆", "ひつ", false]
		], "6090"
	],
	["[専|せん][攻|こう]", "専攻", ["せんこう"],
		[
			["専", "せん", false],
			["攻", "こう", false]
		], -1
	],
	["[攻|せ]め*る", "攻め", ["せめ"],
		[
			["攻", "せ", false],
			["め", null, false]
		], -1
	],
	["[攻撃|こうげき]", "攻撃", ["こうげき"],
		[
			["攻撃", "こうげき", false]
		], -1
	],
	["[原|げん](稿|こう)", "原稿", ["げんこう"],
		[
			["原", "げん", false],
			["稿", "こう", true]
		], "6092"
	],
	["[監督|かんとく]", "監督", ["かんとく"],
		[
			["監督", "かんとく", false]
		], -1
	],
	["[催|もよお]し", "催し", ["もよおし"],
		[
			["催", "もよお", false],
			["し", null, false]
		], -1
	],
	["[及|およ]ぼ*す", "及ぼ", ["およぼ"],
		[
			["及", "およ", false],
			["ぼ", null, false]
		], -1
	],
	["(普|ふ)[及|きゅう]", "普及", ["ふきゅう"],
		[
			["普", "ふ", true],
			["及", "きゅう", false]
		], "5578"
	],
	["[湾|わん]", "湾", ["わん"],
		[
			["湾", "わん", false]
		], -1
	],
	["(御|ご)(主|しゅ)[人|じん]", "御主人", ["ごしゅじん"],
		[
			["御", "ご", true],
			["主", "しゅ", true],
			["人", "じん", false]
		], -1
	],
	["[昼|ひる](御|ご)(飯|はん)", "昼御飯", ["ひるごはん"],
		[
			["昼", "ひる", false],
			["御", "ご", true],
			["飯", "はん", true]
		], -1
	],
	["[朝|あさ](御|ご)(飯|はん)", "朝御飯", ["あさごはん"],
		[
			["朝", "あさ", false],
			["御", "ご", true],
			["飯", "はん", true]
		], -1
	],
	["[離|はな]*す", "離", ["はな"],
		[
			["離", "はな", false]
		], -1
	],
	["[離|はな]れ*る", "離れ", ["はなれ"],
		[
			["離", "はな", false],
			["れ", null, false]
		], -1
	],
	["(漫|まん)[画|が]", "漫画", ["まんが"],
		[
			["漫", "まん", true],
			["画", "が", false]
		], "6094"
	],
	["(玄|げん)[関|かん]", "玄関", ["げんかん"],
		[
			["玄", "げん", true],
			["関", "かん", false]
		], "6095"
	],
	["[捜|さが]*す", "捜", ["さが"],
		[
			["捜", "さが", false]
		], -1
	],
	["[超|こ]え*る", "超え", ["こえ"],
		[
			["超", "こ", false],
			["え", null, false]
		], -1
	],
	["[超|こ]*す", "超", ["こ"],
		[
			["超", "こ", false]
		], -1
	],
	["[超|ちょう][過|か]", "超過", ["ちょうか"],
		[
			["超", "ちょう", false],
			["過", "か", false]
		], -1
	],
	["[医|い][療|りょう]", "医療", ["いりょう"],
		[
			["医", "い", false],
			["療", "りょう", false]
		], -1
	],
	["[捕|とら]え*る", "捕え", ["とらえ"],
		[
			["捕", "とら", false],
			["え", null, false]
		], -1
	],
	["[捕|つか]まえ*る", "捕まえ", ["つかまえ"],
		[
			["捕", "つか", false],
			["ま", null, false],
			["え", null, false]
		], -1
	],
	["[捕|つか]ま*5", "捕ま", ["つかま"],
		[
			["捕", "つか", false],
			["ま", null, false]
		], -1
	],
	["[捕|と]*5", "捕", ["と"],
		[
			["捕", "と", false]
		], -1
	],
	["{～}[振|ぶ]り", "～振り", ["ぶり"],
		[
			["～", null, false],
			["振", "ぶ", false],
			["り", null, false]
		], -1
	],
	["[振|ふ]り[向|む]*く", "振り向", ["ふりむ"],
		[
			["振", "ふ", false],
			["り", null, false],
			["向", "む", false]
		], -1
	],
	["[振|ふ]*5", "振", ["ふ"],
		[
			["振", "ふ", false]
		], -1
	],
	["[振|ふ]り[仮|が][名|な]", "振り仮名", ["ふりがな"],
		[
			["振", "ふ", false],
			["り", null, false],
			["仮", "が", false],
			["名", "な", false]
		], -1
	],
	["(紹|しょう)[介|かい]", "紹介", ["しょうかい"],
		[
			["紹", "しょう", true],
			["介", "かい", false]
		], "5749"
	],
	["[出|で][迎|むか]え", "出迎え", ["でむかえ"],
		[
			["出", "で", false],
			["迎", "むか", false],
			["え", null, false]
		], -1
	],
	["[出|で][迎|むか]え*る", "出迎え", ["でむかえ"],
		[
			["出", "で", false],
			["迎", "むか", false],
			["え", null, false]
		], -1
	],
	["[迎|むか]え", "迎え", ["むかえ"],
		[
			["迎", "むか", false],
			["え", null, false]
		], -1
	],
	["[迎|むか]え*る", "迎え", ["むかえ"],
		[
			["迎", "むか", false],
			["え", null, false]
		], -1
	],
	["(緯|い)[度|ど]", "緯度", ["いど"],
		[
			["緯", "い", true],
			["度", "ど", false]
		], "6101"
	],
	["[販|はん][売|ばい]", "販売", ["はんばい"],
		[
			["販", "はん", false],
			["売", "ばい", false]
		], -1
	],
	["[文|ぶん][献|けん]", "文献", ["ぶんけん"],
		[
			["文", "ぶん", false],
			["献", "けん", false]
		], -1
	],
	["[献|こん][立|だて]", "献立", ["こんだて"],
		[
			["献", "こん", false],
			["立", "だて", false]
		], -1
	],
	["[幅|はば]", "幅", ["はば"],
		[
			["幅", "はば", false]
		], -1
	],
	["[維|い][持|じ]", "維持", ["いじ"],
		[
			["維", "い", false],
			["持", "じ", false]
		], -1
	],
	["(淡|たん)[水|すい]", "淡水", ["たんすい"],
		[
			["淡", "たん", true],
			["水", "すい", false]
		], "6103"
	],
	["(抽|ちゅう)[象|しょう]", "抽象", ["ちゅうしょう"],
		[
			["抽", "ちゅう", true],
			["象", "しょう", false]
		], "6104"
	],
	["[彼|かれ]", "彼", ["かれ"],
		[
			["彼", "かれ", false]
		], -1
	],
	["[彼|かの][女|じょ]", "彼女", ["かのじょ"],
		[
			["彼", "かの", false],
			["女", "じょ", false]
		], -1
	],
	["[彼|かれ][等|ら]", "彼等", ["かれら"],
		[
			["彼", "かれ", false],
			["等", "ら", false]
		], -1
	],
	["[一|いっ][般|ぱん]", "一般", ["いっぱん"],
		[
			["一", "いっ", false],
			["般", "ぱん", false]
		], -1
	],
	["[全|ぜん][般|ぱん]", "全般", ["ぜんぱん"],
		[
			["全", "ぜん", false],
			["般", "ぱん", false]
		], -1
	],
	["(奨|しょう)[学|がく][金|きん]", "奨学金", ["しょうがくきん"],
		[
			["奨", "しょう", true],
			["学", "がく", false],
			["金", "きん", false]
		], "6105"
	],
	["[過|か](剰|じょう)", "過剰", ["かじょう"],
		[
			["過", "か", false],
			["剰", "じょう", true]
		], "6107"
	],
	["[振舞|ふるま]*う", "振舞", ["ふるま"],
		[
			["振舞", "ふるま", false]
		], -1
	],
	["[舞|ぶ][台|たい]", "舞台", ["ぶたい"],
		[
			["舞", "ぶ", false],
			["台", "たい", false]
		], -1
	],
	["[見|み][舞|ま]い", "見舞い", ["みまい"],
		[
			["見", "み", false],
			["舞", "ま", false],
			["い", null, false]
		], -1
	],
	["[見|み][舞|ま]*う", "見舞", ["みま"],
		[
			["見", "み", false],
			["舞", "ま", false]
		], -1
	],
	["{～}[遣|づか]い", "～遣い", ["づかい"],
		[
			["～", null, false],
			["遣", "づか", false],
			["い", null, false]
		], -1
	],
	["[小|こ][遣|づか]い", "小遣い", ["こづかい"],
		[
			["小", "こ", false],
			["遣", "づか", false],
			["い", null, false]
		], -1
	],
	["[言|こと][葉|ば][遣|づか]い", "言葉遣い", ["ことばづかい"],
		[
			["言", "こと", false],
			["葉", "ば", false],
			["遣", "づか", false],
			["い", null, false]
		], -1
	],
	["[仮|か][名|な][遣|づか]い", "仮名遣い", ["かなづかい"],
		[
			["仮", "か", false],
			["名", "な", false],
			["遣", "づか", false],
			["い", null, false]
		], -1
	],
	["[反|はん][抗|こう]", "反抗", ["はんこう"],
		[
			["反", "はん", false],
			["抗", "こう", false]
		], -1
	],
	["(乾|かん)[電|でん][池|ち]", "乾電池", ["かんでんち"],
		[
			["乾", "かん", true],
			["電", "でん", false],
			["池", "ち", false]
		], "6111"
	],
	["{～}[込|こ]む", "～込む", ["こむ"],
		[
			["～", null, false],
			["込", "こ", false],
			["む", null, false]
		], -1
	],
	["[人|ひと][込|ご]み", "人込み", ["ひとごみ"],
		[
			["人", "ひと", false],
			["込", "ご", false],
			["み", null, false]
		], -1
	],
	["[引|ひ]っ[込|こ]*む", "引っ込", ["ひっこ"],
		[
			["引", "ひ", false],
			["っ", null, false],
			["込", "こ", false]
		], -1
	],
	["[思|おも]い[込|こ]*む", "思い込", ["おもいこ"],
		[
			["思", "おも", false],
			["い", null, false],
			["込", "こ", false]
		], -1
	],
	["[申|もう]し[込|こ]*む", "申し込", ["もうしこ"],
		[
			["申", "もう", false],
			["し", null, false],
			["込", "こ", false]
		], -1
	],
	["[突|つ]っ[込|こ]*む", "突っ込", ["つっこ"],
		[
			["突", "つ", false],
			["っ", null, false],
			["込", "こ", false]
		], -1
	],
	["[飛|と]び[込|こ]*む", "飛び込", ["とびこ"],
		[
			["飛", "と", false],
			["び", null, false],
			["込", "こ", false]
		], -1
	],
	["(払|はら)い[込|こ]*む", "払い込", ["はらいこ"],
		[
			["払", "はら", true],
			["い", null, false],
			["込", "こ", false]
		], "5619"
	],
	["(溶|と)け[込|こ]*む", "溶け込", ["とけこ"],
		[
			["溶", "と", true],
			["け", null, false],
			["込", "こ", false]
		], "6065"
	],
	["[緊|きん][張|ちょう]", "緊張", ["きんちょう"],
		[
			["緊", "きん", false],
			["張", "ちょう", false]
		], -1
	],
	["[乗|の]り[換|か]え*る", "乗り換え", ["のりかえ"],
		[
			["乗", "の", false],
			["り", null, false],
			["換", "か", false],
			["え", null, false]
		], -1
	],
	["[乗|の][換|りかえ]", "乗換", ["のりかえ"],
		[
			["乗", "の", false],
			["換", "りかえ", false]
		], -1
	],
	["[交|こう][換|かん]", "交換", ["こうかん"],
		[
			["交", "こう", false],
			["換", "かん", false]
		], -1
	],
	["[換|か]え*る", "換え", ["かえ"],
		[
			["換", "か", false],
			["え", null, false]
		], -1
	],
	["[換|かん][気|き]", "換気", ["かんき"],
		[
			["換", "かん", false],
			["気", "き", false]
		], -1
	],
	["[占|うらな]*う", "占", ["うらな"],
		[
			["占", "うらな", false]
		], -1
	],
	["[占|し]め*る", "占め", ["しめ"],
		[
			["占", "し", false],
			["め", null, false]
		], -1
	],
	["(翻|ほん)[訳|やく]", "翻訳", ["ほんやく"],
		[
			["翻", "ほん", true],
			["訳", "やく", false]
		], "6116"
	],
	["[信|しん][頼|らい]", "信頼", ["しんらい"],
		[
			["信", "しん", false],
			["頼", "らい", false]
		], -1
	],
	["[頼|たの]*む", "頼", ["たの"],
		[
			["頼", "たの", false]
		], -1
	],
	["[頼|たの]もしい", "頼もしい", ["たのもしい"],
		[
			["頼", "たの", false],
			["も", null, false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[頼|たよ]*5", "頼", ["たよ"],
		[
			["頼", "たよ", false]
		], -1
	],
	["[同|どう][僚|りょう]", "同僚", ["どうりょう"],
		[
			["同", "どう", false],
			["僚", "りょう", false]
		], -1
	],
	["(髪|かみ)の[毛|け]", "髪の毛", ["かみのけ"],
		[
			["髪", "かみ", true],
			["の", null, false],
			["毛", "け", false]
		], "6120"
	],
	["[中|ちゅう][途|と]", "中途", ["ちゅうと"],
		[
			["中", "ちゅう", false],
			["途", "と", false]
		], -1
	],
	["[用|よう][途|と]", "用途", ["ようと"],
		[
			["用", "よう", false],
			["途", "と", false]
		], -1
	],
	["[途|と][中|ちゅう]", "途中", ["とちゅう"],
		[
			["途", "と", false],
			["中", "ちゅう", false]
		], -1
	],
	["[踏|ふ]*む", "踏", ["ふ"],
		[
			["踏", "ふ", false]
		], -1
	],
	["[踏|ふみ][切|きり]", "踏切", ["ふみきり"],
		[
			["踏", "ふみ", false],
			["切", "きり", false]
		], -1
	],
	["[抜|ぬ]*く", "抜", ["ぬ"],
		[
			["抜", "ぬ", false]
		], -1
	],
	["[抜|ぬ]け*る", "抜け", ["ぬけ"],
		[
			["抜", "ぬ", false],
			["け", null, false]
		], -1
	],
	["[壊|こわ]*す", "壊", ["こわ"],
		[
			["壊", "こわ", false]
		], -1
	],
	["[壊|こわ]れ*る", "壊れ", ["こわれ"],
		[
			["壊", "こわ", false],
			["れ", null, false]
		], -1
	],
	["[伸|の]ば*す", "伸ば", ["のば"],
		[
			["伸", "の", false],
			["ば", null, false]
		], -1
	],
	["[伸|の]び*る", "伸び", ["のび"],
		[
			["伸", "の", false],
			["び", null, false]
		], -1
	],
	["[別|べっ](荘|そう)", "別荘", ["べっそう"],
		[
			["別", "べっ", false],
			["荘", "そう", true]
		], "6126"
	],
	["[爆|ばく][発|はつ]", "爆発", ["ばくはつ"],
		[
			["爆", "ばく", false],
			["発", "はつ", false]
		], -1
	],
	["[儀|ぎ][式|しき]", "儀式", ["ぎしき"],
		[
			["儀", "ぎ", false],
			["式", "しき", false]
		], -1
	],
	["[行|ぎょう][儀|ぎ]", "行儀", ["ぎょうぎ"],
		[
			["行", "ぎょう", false],
			["儀", "ぎ", false]
		], -1
	],
	["[礼儀|れいぎ]", "礼儀", ["れいぎ"],
		[
			["礼儀", "れいぎ", false]
		], -1
	],
	["(御|お)[辞|じ][儀|ぎ]", "御辞儀", ["おじぎ"],
		[
			["御", "お", true],
			["辞", "じ", false],
			["儀", "ぎ", false]
		], "5872"
	],
	["[継|けい][続|ぞく]", "継続", ["けいぞく"],
		[
			["継", "けい", false],
			["続", "ぞく", false]
		], -1
	],
	["(勘|かん)[定|じょう]", "勘定", ["かんじょう"],
		[
			["勘", "かん", true],
			["定", "じょう", false]
		], "6130"
	],
	["(勘|かん)[違|ちが]い", "勘違い", ["かんちがい"],
		[
			["勘", "かん", true],
			["違", "ちが", false],
			["い", null, false]
		], "6131"
	],
	["[葬|そう][式|しき]", "葬式", ["そうしき"],
		[
			["葬", "そう", false],
			["式", "しき", false]
		], -1
	],
	["[避|さ]け*る", "避け", ["さけ"],
		[
			["避", "さ", false],
			["け", null, false]
		], -1
	],
	["[下|げ](駄|た)", "下駄", ["げた"],
		[
			["下", "げ", false],
			["駄", "た", true]
		], "6132"
	],
	["[無|む](駄|だ)", "無駄", ["むだ"],
		[
			["無", "む", false],
			["駄", "だ", true]
		], "6133"
	],
	["(駄|だ)[目|め]", "駄目", ["だめ"],
		[
			["駄", "だ", true],
			["目", "め", false]
		], "6134"
	],
	["[普|ふ][及|きゅう]", "普及", ["ふきゅう"],
		[
			["普", "ふ", false],
			["及", "きゅう", false]
		], -1
	],
	["[普|ふ][段|だん]", "普段", ["ふだん"],
		[
			["普", "ふ", false],
			["段", "だん", false]
		], -1
	],
	["[普|ふ][通|つう]", "普通", ["ふつう"],
		[
			["普", "ふ", false],
			["通", "つう", false]
		], -1
	],
	["[逮捕|たいほ]", "逮捕", ["たいほ"],
		[
			["逮捕", "たいほ", false]
		], -1
	],
	["[婚|こん][約|やく]", "婚約", ["こんやく"],
		[
			["婚", "こん", false],
			["約", "やく", false]
		], -1
	],
	["[結|けっ][婚|こん]", "結婚", ["けっこん"],
		[
			["結", "けっ", false],
			["婚", "こん", false]
		], -1
	],
	["[離婚|りこん]", "離婚", ["りこん"],
		[
			["離婚", "りこん", false]
		], -1
	],
	["[年|ねん][齢|れい]", "年齢", ["ねんれい"],
		[
			["年", "ねん", false],
			["齢", "れい", false]
		], -1
	],
	["[迫|せま]*5", "迫", ["せま"],
		[
			["迫", "せま", false]
		], -1
	],
	["[浮|う]かべ*る", "浮かべ", ["うかべ"],
		[
			["浮", "う", false],
			["か", null, false],
			["べ", null, false]
		], -1
	],
	["[浮|う]*く", "浮", ["う"],
		[
			["浮", "う", false]
		], -1
	],
	["[浮|うか]*ぶ", "浮", ["うか"],
		[
			["浮", "うか", false]
		], -1
	],
	["[迷|めい][惑|わく]", "迷惑", ["めいわく"],
		[
			["迷", "めい", false],
			["惑", "わく", false]
		], -1
	],
	["[崩|くず]*す", "崩", ["くず"],
		[
			["崩", "くず", false]
		], -1
	],
	["[崩|くず]れ*る", "崩れ", ["くずれ"],
		[
			["崩", "くず", false],
			["れ", null, false]
		], -1
	],
	["[悪|あく](魔|ま)", "悪魔", ["あくま"],
		[
			["悪", "あく", false],
			["魔", "ま", true]
		], "6140"
	],
	["[脱|ぬ]*ぐ", "脱", ["ぬ"],
		[
			["脱", "ぬ", false]
		], -1
	],
	["[脱|だっ][線|せん]", "脱線", ["だっせん"],
		[
			["脱", "だっ", false],
			["線", "せん", false]
		], -1
	],
	["(湿|しつ)[度|ど]", "湿度", ["しつど"],
		[
			["湿", "しつ", true],
			["度", "ど", false]
		], "6144"
	],
	["[押|おさ]え*る", "押え", ["おさえ"],
		[
			["押", "おさ", false],
			["え", null, false]
		], -1
	],
	["[押|お]し[入|い]れ", "押し入れ", ["おしいれ"],
		[
			["押", "お", false],
			["し", null, false],
			["入", "い", false],
			["れ", null, false]
		], -1
	],
	["[押|お]*す", "押", ["お"],
		[
			["押", "お", false]
		], -1
	],
	["[倒|たお]*す", "倒", ["たお"],
		[
			["倒", "たお", false]
		], -1
	],
	["[倒|たお]れ*る", "倒れ", ["たおれ"],
		[
			["倒", "たお", false],
			["れ", null, false]
		], -1
	],
	["[面|めん][倒|どう]", "面倒", ["めんどう"],
		[
			["面", "めん", false],
			["倒", "どう", false]
		], -1
	],
	["[完|かん][了|りょう]", "完了", ["かんりょう"],
		[
			["完", "かん", false],
			["了", "りょう", false]
		], -1
	],
	["[終|しゅう][了|りょう]", "終了", ["しゅうりょう"],
		[
			["終", "しゅう", false],
			["了", "りょう", false]
		], -1
	],
	["[患|かん][者|じゃ]", "患者", ["かんじゃ"],
		[
			["患", "かん", false],
			["者", "じゃ", false]
		], -1
	],
	["[締|し]め*る", "締め", ["しめ"],
		[
			["締", "し", false],
			["め", null, false]
		], -1
	],
	["[締|し]め[切|き]る", "締め切る", ["しめきる"],
		[
			["締", "し", false],
			["め", null, false],
			["切", "き", false],
			["る", null, false]
		], -1
	],
	["[締|しめ][切|きり]", "締切", ["しめきり"],
		[
			["締", "しめ", false],
			["切", "きり", false]
		], -1
	],
	["[花|か](瓶|びん)", "花瓶", ["かびん"],
		[
			["花", "か", false],
			["瓶", "びん", true]
		], "6150"
	],
	["[執|しっ][筆|ぴつ]", "執筆", ["しっぴつ"],
		[
			["執", "しっ", false],
			["筆", "ぴつ", false]
		], -1
	],
	["[連|れん][絡|らく]", "連絡", ["れんらく"],
		[
			["連", "れん", false],
			["絡", "らく", false]
		], -1
	],
	["(彫|ちょう)[刻|こく]", "彫刻", ["ちょうこく"],
		[
			["彫", "ちょう", true],
			["刻", "こく", false]
		], "6152"
	],
	["[冷|れい][房|ぼう]", "冷房", ["れいぼう"],
		[
			["冷", "れい", false],
			["房", "ぼう", false]
		], -1
	],
	["[女|にょう][房|ぼう]", "女房", ["にょうぼう"],
		[
			["女", "にょう", false],
			["房", "ぼう", false]
		], -1
	],
	["[文|ぶん][房|ぼう][具|ぐ]", "文房具", ["ぶんぼうぐ"],
		[
			["文", "ぶん", false],
			["房", "ぼう", false],
			["具", "ぐ", false]
		], -1
	],
	["[暖|だん][房|ぼう]", "暖房", ["だんぼう"],
		[
			["暖", "だん", false],
			["房", "ぼう", false]
		], -1
	],
	["[募|ぼ][集|しゅう]", "募集", ["ぼしゅう"],
		[
			["募", "ぼ", false],
			["集", "しゅう", false]
		], -1
	],
	["(顕微|けんび)[鏡|きょう]", "顕微鏡", ["けんびきょう"],
		[
			["顕微", "けんび", true],
			["鏡", "きょう", false]
		], "6155"
	],
	["[払|はら]い[込|こ]*む", "払い込", ["はらいこ"],
		[
			["払", "はら", false],
			["い", null, false],
			["込", "こ", false]
		], -1
	],
	["[払|はら]*う", "払", ["はら"],
		[
			["払", "はら", false]
		], -1
	],
	["[支|し][払|はらい]", "支払", ["しはらい"],
		[
			["支", "し", false],
			["払", "はらい", false]
		], -1
	],
	["[支|し][払|はら]*う", "支払", ["しはら"],
		[
			["支", "し", false],
			["払", "はら", false]
		], -1
	],
	["[払|はら]い(戻|もど)*す", "払い戻", ["はらいもど"],
		[
			["払", "はら", false],
			["い", null, false],
			["戻", "もど", true]
		], "5679"
	],
	["[削|けず]*5", "削", ["けず"],
		[
			["削", "けず", false]
		], -1
	],
	["[削|さく][除|じょ]", "削除", ["さくじょ"],
		[
			["削", "さく", false],
			["除", "じょ", false]
		], -1
	],
	["(垣|かき)[根|ね]", "垣根", ["かきね"],
		[
			["垣", "かき", true],
			["根", "ね", false]
		], "6157"
	],
	["[寝|ね]*る", "寝", ["ね"],
		[
			["寝", "ね", false]
		], -1
	],
	["(召|め)し[上|あ]が*5", "召し上が", ["めしあが"],
		[
			["召", "め", true],
			["し", null, false],
			["上", "あ", false],
			["が", null, false]
		], "6158"
	],
	["[載|の]せ*る", "載せ", ["のせ"],
		[
			["載", "の", false],
			["せ", null, false]
		], -1
	],
	["[載|の]*5", "載", ["の"],
		[
			["載", "の", false]
		], -1
	],
	["(釣|つ)り[合|あ]*う", "釣り合", ["つりあ"],
		[
			["釣", "つ", true],
			["り", null, false],
			["合", "あ", false]
		], "6160"
	],
	["[昇|のぼ]*5", "昇", ["のぼ"],
		[
			["昇", "のぼ", false]
		], -1
	],
	["[薬|や](缶|かん)", "薬缶", ["やかん"],
		[
			["薬", "や", false],
			["缶", "かん", true]
		], "6164"
	],
	["[化|け](粧|しょう)", "化粧", ["けしょう"],
		[
			["化", "け", false],
			["粧", "しょう", true]
		], "6165"
	],
	["[所為|せい]", "所為", ["せい"],
		[
			["所為", "せい", false]
		], -1
	],
	["[為|ため]", "為", ["ため"],
		[
			["為", "ため", false]
		], -1
	],
	["[為|な]*す", "為", ["な"],
		[
			["為", "な", false]
		], -1
	],
	["[遅|ち][刻|こく]", "遅刻", ["ちこく"],
		[
			["遅", "ち", false],
			["刻", "こく", false]
		], -1
	],
	["[選|せん][択|たく]", "選択", ["せんたく"],
		[
			["選", "せん", false],
			["択", "たく", false]
		], -1
	],
	["(架|か)[空|くう]", "架空", ["かくう"],
		[
			["架", "か", true],
			["空", "くう", false]
		], "6169"
	],
	["[優秀|ゆうしゅう]", "優秀", ["ゆうしゅう"],
		[
			["優秀", "ゆうしゅう", false]
		], -1
	],
	["[特|とく][徴|ちょう]", "特徴", ["とくちょう"],
		[
			["特", "とく", false],
			["徴", "ちょう", false]
		], -1
	],
	["(肌|はだ)[着|ぎ]", "肌着", ["はだぎ"],
		[
			["肌", "はだ", true],
			["着", "ぎ", false]
		], "6172"
	],
	["[弾|たま]", "弾", ["たま"],
		[
			["弾", "たま", false]
		], -1
	],
	["[弾|ひ]*く", "弾", ["ひ"],
		[
			["弾", "ひ", false]
		], -1
	],
	["[幼|よう](稚|ち)", "幼稚", ["ようち"],
		[
			["幼", "よう", false],
			["稚", "ち", true]
		], "6173"
	],
	["[幼|よう](稚|ち)[園|えん]", "幼稚園", ["ようちえん"],
		[
			["幼", "よう", false],
			["稚", "ち", true],
			["園", "えん", false]
		], "6174"
	],
	["(靴|くつ)[下|した]", "靴下", ["くつした"],
		[
			["靴", "くつ", true],
			["下", "した", false]
		], "6176"
	],
	["[香|かお]り", "香り", ["かおり"],
		[
			["香", "かお", false],
			["り", null, false]
		], -1
	],
	["[香|こう][水|すい]", "香水", ["こうすい"],
		[
			["香", "こう", false],
			["水", "すい", false]
		], -1
	],
	["[変|へん][更|こう]", "変更", ["へんこう"],
		[
			["変", "へん", false],
			["更", "こう", false]
		], -1
	],
	["[更|ふ]け*る", "更け", ["ふけ"],
		[
			["更", "ふ", false],
			["け", null, false]
		], -1
	],
	["[更|さら]に", "更に", ["さらに"],
		[
			["更", "さら", false],
			["に", null, false]
		], -1
	],
	["[刑|けい][事|じ]", "刑事", ["けいじ"],
		[
			["刑", "けい", false],
			["事", "じ", false]
		], -1
	],
	["[一|いっ][致|ち]", "一致", ["いっち"],
		[
			["一", "いっ", false],
			["致", "ち", false]
		], -1
	],
	["[致|いた]*す", "致", ["いた"],
		[
			["致", "いた", false]
		], -1
	],
	["[信|しん](仰|こう)", "信仰", ["しんこう"],
		[
			["信", "しん", false],
			["仰", "こう", true]
		], "6180"
	],
	["[抱|かか]え*る", "抱え", ["かかえ"],
		[
			["抱", "かか", false],
			["え", null, false]
		], -1
	],
	["[引|ひ]っ[繰|く]り[返|かえ]*す", "引っ繰り返", ["ひっくりかえ"],
		[
			["引", "ひ", false],
			["っ", null, false],
			["繰", "く", false],
			["り", null, false],
			["返", "かえ", false]
		], -1
	],
	["[引|ひ]っ[繰|く]り[返|かえ]*5", "引っ繰り返", ["ひっくりかえ"],
		[
			["引", "ひ", false],
			["っ", null, false],
			["繰", "く", false],
			["り", null, false],
			["返", "かえ", false]
		], -1
	],
	["[繰|く]り[返|かえ]*す", "繰り返", ["くりかえ"],
		[
			["繰", "く", false],
			["り", null, false],
			["返", "かえ", false]
		], -1
	],
	["[描|えが]*く", "描", ["えが"],
		[
			["描", "えが", false]
		], -1
	],
	["[恐|おそ]れ*る", "恐れ", ["おそれ"],
		[
			["恐", "おそ", false],
			["れ", null, false]
		], -1
	],
	["[恐|おそ]ろしい", "恐ろしい", ["おそろしい"],
		[
			["恐", "おそ", false],
			["ろ", null, false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[恐|きょう][縮|しゅく]", "恐縮", ["きょうしゅく"],
		[
			["恐", "きょう", false],
			["縮", "しゅく", false]
		], -1
	],
	["[鈴|すず]", "鈴", ["すず"],
		[
			["鈴", "すず", false]
		], -1
	],
	["[歌|か](謡|よう)", "歌謡", ["かよう"],
		[
			["歌", "か", false],
			["謡", "よう", true]
		], "6184"
	],
	["[民|みん](謡|よう)", "民謡", ["みんよう"],
		[
			["民", "みん", false],
			["謡", "よう", true]
		], "6185"
	],
	["[童|どう](謡|よう)", "童謡", ["どうよう"],
		[
			["童", "どう", false],
			["謡", "よう", true]
		], "6186"
	],
	["[花|はな](嫁|よめ)", "花嫁", ["はなよめ"],
		[
			["花", "はな", false],
			["嫁", "よめ", true]
		], "6188"
	],
	["[地|じ][盤|ばん]", "地盤", ["じばん"],
		[
			["地", "じ", false],
			["盤", "ばん", false]
		], -1
	],
	["[基|き][盤|ばん]", "基盤", ["きばん"],
		[
			["基", "き", false],
			["盤", "ばん", false]
		], -1
	],
	["[算|そろ][盤|ばん]", "算盤", ["そろばん"],
		[
			["算", "そろ", false],
			["盤", "ばん", false]
		], -1
	],
	["[項|こう][目|もく]", "項目", ["こうもく"],
		[
			["項", "こう", false],
			["目", "もく", false]
		], -1
	],
	["[一|いっ][生|しょう][懸|けん][命|めい]", "一生懸命", ["いっしょうけんめい"],
		[
			["一", "いっ", false],
			["生", "しょう", false],
			["懸", "けん", false],
			["命", "めい", false]
		], -1
	],
	["[懸|けん][命|めい]", "懸命", ["けんめい"],
		[
			["懸", "けん", false],
			["命", "めい", false]
		], -1
	],
	["[戻|もど]*す", "戻", ["もど"],
		[
			["戻", "もど", false]
		], -1
	],
	["[戻|もど]*5", "戻", ["もど"],
		[
			["戻", "もど", false]
		], -1
	],
	["[払|はら]い[戻|もど]*す", "払い戻", ["はらいもど"],
		[
			["払", "はら", false],
			["い", null, false],
			["戻", "もど", false]
		], -1
	],
	["[戸|と](棚|だな)", "戸棚", ["とだな"],
		[
			["戸", "と", false],
			["棚", "だな", true]
		], "6193"
	],
	["[巨|きょ][大|だい]", "巨大", ["きょだい"],
		[
			["巨", "きょ", false],
			["大", "だい", false]
		], -1
	],
	["[地|じ][震|しん]", "地震", ["じしん"],
		[
			["地", "じ", false],
			["震", "しん", false]
		], -1
	],
	["[震|ふる]え*る", "震え", ["ふるえ"],
		[
			["震", "ふる", false],
			["え", null, false]
		], -1
	],
	["(廊|ろう)[下|か]", "廊下", ["ろうか"],
		[
			["廊", "ろう", true],
			["下", "か", false]
		], "6195"
	],
	["[乗|の]り[越|こ]し", "乗り越し", ["のりこし"],
		[
			["乗", "の", false],
			["り", null, false],
			["越", "こ", false],
			["し", null, false]
		], -1
	],
	["[引|ひ]っ[越|こ]*す", "引っ越", ["ひっこ"],
		[
			["引", "ひ", false],
			["っ", null, false],
			["越", "こ", false]
		], -1
	],
	["[引|ひっ][越|こ]し", "引越し", ["ひっこし"],
		[
			["引", "ひっ", false],
			["越", "こ", false],
			["し", null, false]
		], -1
	],
	["[越|こ]え*る", "越え", ["こえ"],
		[
			["越", "こ", false],
			["え", null, false]
		], -1
	],
	["[越|こ]*す", "越", ["こ"],
		[
			["越", "こ", false]
		], -1
	],
	["[追|お]い[越|こ]*す", "追い越", ["おいこ"],
		[
			["追", "お", false],
			["い", null, false],
			["越", "こ", false]
		], -1
	],
	["(御|ご)[主|しゅ][人|じん]", "御主人", ["ごしゅじん"],
		[
			["御", "ご", true],
			["主", "しゅ", false],
			["人", "じん", false]
		], -1
	],
	["(御|ご)[飯|はん]", "御飯", ["ごはん"],
		[
			["御", "ご", true],
			["飯", "はん", false]
		], -1
	],
	["[昼|ひる](御|ご)[飯|はん]", "昼御飯", ["ひるごはん"],
		[
			["昼", "ひる", false],
			["御", "ご", true],
			["飯", "はん", false]
		], -1
	],
	["[晩|ばん](御|ご)[飯|はん]", "晩御飯", ["ばんごはん"],
		[
			["晩", "ばん", false],
			["御", "ご", true],
			["飯", "はん", false]
		], -1
	],
	["[朝|あさ](御|ご)[飯|はん]", "朝御飯", ["あさごはん"],
		[
			["朝", "あさ", false],
			["御", "ご", true],
			["飯", "はん", false]
		], -1
	],
	["[契|けい][約|やく]", "契約", ["けいやく"],
		[
			["契", "けい", false],
			["約", "やく", false]
		], -1
	],
	["(偶|ぐう)[数|すう]", "偶数", ["ぐうすう"],
		[
			["偶", "ぐう", true],
			["数", "すう", false]
		], "6200"
	],
	["(偶|ぐう)[然|ぜん]", "偶然", ["ぐうぜん"],
		[
			["偶", "ぐう", true],
			["然", "ぜん", false]
		], "6201"
	],
	["[掲示|けいじ]", "掲示", ["けいじ"],
		[
			["掲示", "けいじ", false]
		], -1
	],
	["皆", "皆", ["みな", "みんな"],
		[], null
	],
	["[活|かつ][躍|やく]", "活躍", ["かつやく"],
		[
			["活", "かつ", false],
			["躍", "やく", false]
		], -1
	],
	["[歯|は](磨|みが)き", "歯磨き", ["はみがき"],
		[
			["歯", "は", false],
			["磨", "みが", true],
			["き", null, false]
		], "6204"
	],
	["[棄|す]て*る", "棄て", ["すて"],
		[
			["棄", "す", false],
			["て", null, false]
		], -1
	],
	["[触|さわ]*5", "触", ["さわ"],
		[
			["触", "さわ", false]
		], -1
	],
	["[触|ふ]れ*る", "触れ", ["ふれ"],
		[
			["触", "ふ", false],
			["れ", null, false]
		], -1
	],
	["[砂|さ](漠|ばく)", "砂漠", ["さばく"],
		[
			["砂", "さ", false],
			["漠", "ばく", true]
		], "6207"
	],
	["[依頼|いらい]", "依頼", ["いらい"],
		[
			["依頼", "いらい", false]
		], -1
	],
	["[国|こく][籍|せき]", "国籍", ["こくせき"],
		[
			["国", "こく", false],
			["籍", "せき", false]
		], -1
	],
	["[書|しょ][籍|せき]", "書籍", ["しょせき"],
		[
			["書", "しょ", false],
			["籍", "せき", false]
		], -1
	],
	["[汚|きたな]い", "汚い", ["きたない"],
		[
			["汚", "きたな", false],
			["い", null, false]
		], -1
	],
	["[汚|よご]*す", "汚", ["よご"],
		[
			["汚", "よご", false]
		], -1
	],
	["[汚|よご]れ*る", "汚れ", ["よごれ"],
		[
			["汚", "よご", false],
			["れ", null, false]
		], -1
	],
	["[汚染|おせん]", "汚染", ["おせん"],
		[
			["汚染", "おせん", false]
		], -1
	],
	["お[互|たが]い", "お互い", ["おたがい"],
		[
			["お", null, false],
			["互", "たが", false],
			["い", null, false]
		], -1
	],
	["[互|たが]い", "互い", ["たがい"],
		[
			["互", "たが", false],
			["い", null, false]
		], -1
	],
	["[相|そう][互|ご]", "相互", ["そうご"],
		[
			["相", "そう", false],
			["互", "ご", false]
		], -1
	],
	["[考|こう][慮|りょ]", "考慮", ["こうりょ"],
		[
			["考", "こう", false],
			["慮", "りょ", false]
		], -1
	],
	["[遠|えん][慮|りょ]", "遠慮", ["えんりょ"],
		[
			["遠", "えん", false],
			["慮", "りょ", false]
		], -1
	],
	["[恵|めぐ]まれ*る", "恵まれ", ["めぐまれ"],
		[
			["恵", "めぐ", false],
			["ま", null, false],
			["れ", null, false]
		], -1
	],
	["[知|ち][恵|え]", "知恵", ["ちえ"],
		[
			["知", "ち", false],
			["恵", "え", false]
		], -1
	],
	["[恩恵|おんけい]", "恩恵", ["おんけい"],
		[
			["恩恵", "おんけい", false]
		], -1
	],
	["[沖|おき]", "沖", ["おき"],
		[
			["沖", "おき", false]
		], -1
	],
	["[逃|に]が*す", "逃が", ["にが"],
		[
			["逃", "に", false],
			["が", null, false]
		], -1
	],
	["[逃|に]げ*る", "逃げ", ["にげ"],
		[
			["逃", "に", false],
			["げ", null, false]
		], -1
	],
	["[水|すい](筒|とう)", "水筒", ["すいとう"],
		[
			["水", "すい", false],
			["筒", "とう", true]
		], "6216"
	],
	["[緩|ゆる]い", "緩い", ["ゆるい"],
		[
			["緩", "ゆる", false],
			["い", null, false]
		], -1
	],
	["[必|ひつ][需|じゅ][品|ひん]", "必需品", ["ひつじゅひん"],
		[
			["必", "ひつ", false],
			["需", "じゅ", false],
			["品", "ひん", false]
		], -1
	],
	["[需|じゅ][要|よう]", "需要", ["じゅよう"],
		[
			["需", "じゅ", false],
			["要", "よう", false]
		], -1
	],
	["(偉|い)[大|だい]", "偉大", ["いだい"],
		[
			["偉", "い", true],
			["大", "だい", false]
		], "6221"
	],
	["[傾|かたむ]*く", "傾", ["かたむ"],
		[
			["傾", "かたむ", false]
		], -1
	],
	["[傾|なだ]らか", "傾らか", ["なだらか"],
		[
			["傾", "なだ", false],
			["ら", null, false],
			["か", null, false]
		], -1
	],
	["[傾|けい][向|こう]", "傾向", ["けいこう"],
		[
			["傾", "けい", false],
			["向", "こう", false]
		], -1
	],
	["(酔|よ)っ[払|ぱら]い", "酔っ払い", ["よっぱらい"],
		[
			["酔", "よ", true],
			["っ", null, false],
			["払", "ぱら", false],
			["い", null, false]
		], "6223"
	],
	["[収|しゅう](穫|かく)", "収穫", ["しゅうかく"],
		[
			["収", "しゅう", false],
			["穫", "かく", true]
		], "6228"
	],
	["[拡|かく][充|じゅう]", "拡充", ["かくじゅう"],
		[
			["拡", "かく", false],
			["充", "じゅう", false]
		], -1
	],
	["[一|いっ][緒|しょ]", "一緒", ["いっしょ"],
		[
			["一", "いっ", false],
			["緒", "しょ", false]
		], -1
	],
	["[朝|あさ](寝|ね)(坊|ぼう)", "朝寝坊", ["あさねぼう"],
		[
			["朝", "あさ", false],
			["寝", "ね", true],
			["坊", "ぼう", true]
		], "6243"
	],
	["[赤|あか]ん(坊|ぼう)", "赤ん坊", ["あかんぼう"],
		[
			["赤", "あか", false],
			["ん", null, false],
			["坊", "ぼう", true]
		], "6244"
	],
	["唯", "唯", ["ただ", "たった"],
		[], null
	],
	["[足|あし][跡|あと]", "足跡", ["あしあと"],
		[
			["足", "あし", false],
			["跡", "あと", false]
		], -1
	],
	["[跡|あと]", "跡", ["あと"],
		[
			["跡", "あと", false]
		], -1
	],
	["[駐|ちゅう][車|しゃ]", "駐車", ["ちゅうしゃ"],
		[
			["駐", "ちゅう", false],
			["車", "しゃ", false]
		], -1
	],
	["[貢献|こうけん]", "貢献", ["こうけん"],
		[
			["貢献", "こうけん", false]
		], -1
	],
	["[却|かえ]って", "却って", ["かえって"],
		[
			["却", "かえ", false],
			["っ", null, false],
			["て", null, false]
		], -1
	],
	["[先|せん][端|たん]", "先端", ["せんたん"],
		[
			["先", "せん", false],
			["端", "たん", false]
		], -1
	],
	["[端|はし]", "端", ["はし"],
		[
			["端", "はし", false]
		], -1
	],
	["[途端|とたん]", "途端", ["とたん"],
		[
			["途端", "とたん", false]
		], -1
	],
	["(盆|ぼん)[地|ち]", "盆地", ["ぼんち"],
		[
			["盆", "ぼん", true],
			["地", "ち", false]
		], "6230"
	],
	["[紹|しょう][介|かい]", "紹介", ["しょうかい"],
		[
			["紹", "しょう", false],
			["介", "かい", false]
		], -1
	],
	["[徹|てつ][夜|や]", "徹夜", ["てつや"],
		[
			["徹", "てつ", false],
			["夜", "や", false]
		], -1
	],
	["[徹底|てってい]", "徹底", ["てってい"],
		[
			["徹底", "てってい", false]
		], -1
	],
	["[衝|しょうと][突|つ]", "衝突", ["しょうとつ"],
		[
			["衝", "しょうと", false],
			["突", "つ", false]
		], -1
	],
	["[焦|こ]が*す", "焦が", ["こが"],
		[
			["焦", "こ", false],
			["が", null, false]
		], -1
	],
	["[焦|こ]げ*る", "焦げ", ["こげ"],
		[
			["焦", "こ", false],
			["げ", null, false]
		], -1
	],
	["[焦|しょう][点|てん]", "焦点", ["しょうてん"],
		[
			["焦", "しょう", false],
			["点", "てん", false]
		], -1
	],
	["[奪|うば]*う", "奪", ["うば"],
		[
			["奪", "うば", false]
		], -1
	],
	["[雇|やと]*う", "雇", ["やと"],
		[
			["雇", "やと", false]
		], -1
	],
	["[両|りょう][替|がえ]", "両替", ["りょうがえ"],
		[
			["両", "りょう", false],
			["替", "がえ", false]
		], -1
	],
	["[交|こう][替|たい]", "交替", ["こうたい"],
		[
			["交", "こう", false],
			["替", "たい", false]
		], -1
	],
	["[取|と]り[替|か]え*る", "取り替え", ["とりかえ"],
		[
			["取", "と", false],
			["り", null, false],
			["替", "か", false],
			["え", null, false]
		], -1
	],
	["[替|か]え*る", "替え", ["かえ"],
		[
			["替", "か", false],
			["え", null, false]
		], -1
	],
	["[為替|かわせ]", "為替", ["かわせ"],
		[
			["為替", "かわせ", false]
		], -1
	],
	["[着|き][替|が]え", "着替え", ["きがえ"],
		[
			["着", "き", false],
			["替", "が", false],
			["え", null, false]
		], -1
	],
	["[着|き][替|が]え*る", "着替え", ["きがえ"],
		[
			["着", "き", false],
			["替", "が", false],
			["え", null, false]
		], -1
	],
	["[分|ぶん][析|せき]", "分析", ["ぶんせき"],
		[
			["分", "ぶん", false],
			["析", "せき", false]
		], -1
	],
	["(吐|は)き[気|け]", "吐き気", ["はきけ"],
		[
			["吐", "は", true],
			["き", null, false],
			["気", "け", false]
		], "6235"
	],
	["[譲|ゆず]*5", "譲", ["ゆず"],
		[
			["譲", "ゆず", false]
		], -1
	],
	["(宴|えん)[会|かい]", "宴会", ["えんかい"],
		[
			["宴", "えん", true],
			["会", "かい", false]
		], "6237"
	],
	["[誘|さそ]*う", "誘", ["さそ"],
		[
			["誘", "さそ", false]
		], -1
	],
	["[催促|さいそく]", "催促", ["さいそく"],
		[
			["催促", "さいそく", false]
		], -1
	],
	["[慎|しん][重|ちょう]", "慎重", ["しんちょう"],
		[
			["慎", "しん", false],
			["重", "ちょう", false]
		], -1
	],
	["[贈|おく]り[物|もの]", "贈り物", ["おくりもの"],
		[
			["贈", "おく", false],
			["り", null, false],
			["物", "もの", false]
		], -1
	],
	["[贈|おく]*5", "贈", ["おく"],
		[
			["贈", "おく", false]
		], -1
	],
	["[握|にぎ]*5", "握", ["にぎ"],
		[
			["握", "にぎ", false]
		], -1
	],
	["[握|あく][手|しゅ]", "握手", ["あくしゅ"],
		[
			["握", "あく", false],
			["手", "しゅ", false]
		], -1
	],
	["[洗|せん](濯|たく)", "洗濯", ["せんたく"],
		[
			["洗", "せん", false],
			["濯", "たく", true]
		], "6247"
	],
	["[薄|うす]い", "薄い", ["うすい"],
		[
			["薄", "うす", false],
			["い", null, false]
		], -1
	],
	["[薄|うす]め*る", "薄め", ["うすめ"],
		[
			["薄", "うす", false],
			["め", null, false]
		], -1
	],
	["[薄暗|うすぐら]い", "薄暗い", ["うすぐらい"],
		[
			["薄暗", "うすぐら", false],
			["い", null, false]
		], -1
	],
	["[銃|じゅう]", "銃", ["じゅう"],
		[
			["銃", "じゅう", false]
		], -1
	],
	["[奥|おく]", "奥", ["おく"],
		[
			["奥", "おく", false]
		], -1
	],
	["[診|み]*る", "診", ["み"],
		[
			["診", "み", false]
		], -1
	],
	["[診察|しんさつ]", "診察", ["しんさつ"],
		[
			["診察", "しんさつ", false]
		], -1
	],
	["[診|しん][断|だん]", "診断", ["しんだん"],
		[
			["診", "しん", false],
			["断", "だん", false]
		], -1
	],
	["[見|み][詰|つ]め*る", "見詰め", ["みつめ"],
		[
			["見", "み", false],
			["詰", "つ", false],
			["め", null, false]
		], -1
	],
	["[詰|つ]ま*5", "詰ま", ["つま"],
		[
			["詰", "つ", false],
			["ま", null, false]
		], -1
	],
	["[詰|つ]め*る", "詰め", ["つめ"],
		[
			["詰", "つ", false],
			["め", null, false]
		], -1
	],
	["(瓶|びん)[詰|づめ]", "瓶詰", ["びんづめ"],
		[
			["瓶", "びん", true],
			["詰", "づめ", false]
		], "6149"
	],
	["(缶|かん)[詰|づめ]", "缶詰", ["かんづめ"],
		[
			["缶", "かん", true],
			["詰", "づめ", false]
		], "6163"
	],
	["(鉛|えん)[筆|ぴつ]", "鉛筆", ["えんぴつ"],
		[
			["鉛", "えん", true],
			["筆", "ぴつ", false]
		], "6256"
	],
	["[撮|と]*5", "撮", ["と"],
		[
			["撮", "と", false]
		], -1
	],
	["[撮|さつ][影|えい]", "撮影", ["さつえい"],
		[
			["撮", "さつ", false],
			["影", "えい", false]
		], -1
	],
	["[侵|しん][入|にゅう]", "侵入", ["しんにゅう"],
		[
			["侵", "しん", false],
			["入", "にゅう", false]
		], -1
	],
	["(喫|きっ)(茶|さ)[店|てん]", "喫茶店", ["きっさてん"],
		[
			["喫", "きっ", true],
			["茶", "さ", true],
			["店", "てん", false]
		], -1
	],
	["お[出|で][掛|か]け", "お出掛け", ["おでかけ"],
		[
			["お", null, false],
			["出", "で", false],
			["掛", "か", false],
			["け", null, false]
		], -1
	],
	["お[目|め]に[掛|か]かる", "お目に掛かる", ["おめにかかる"],
		[
			["お", null, false],
			["目", "め", false],
			["に", null, false],
			["掛", "か", false],
			["か", null, false],
			["る", null, false]
		], -1
	],
	["[出|で][掛|か]け*る", "出掛け", ["でかけ"],
		[
			["出", "で", false],
			["掛", "か", false],
			["け", null, false]
		], -1
	],
	["[呼|よ]び[掛|か]け*る", "呼び掛け", ["よびかけ"],
		[
			["呼", "よ", false],
			["び", null, false],
			["掛", "か", false],
			["け", null, false]
		], -1
	],
	["[引|ひ]っ[掛|か]か*5", "引っ掛か", ["ひっかか"],
		[
			["引", "ひ", false],
			["っ", null, false],
			["掛", "か", false],
			["か", null, false]
		], -1
	],
	["[思|おも]い[掛|が]けない", "思い掛けない", ["おもいがけない"],
		[
			["思", "おも", false],
			["い", null, false],
			["掛", "が", false],
			["け", null, false],
			["な", null, false],
			["い", null, false]
		], -1
	],
	["[掛|か]か*5", "掛か", ["かか"],
		[
			["掛", "か", false],
			["か", null, false]
		], -1
	],
	["[掛|か]け*る", "掛け", ["かけ"],
		[
			["掛", "か", false],
			["け", null, false]
		], -1
	],
	["[掛|か]け[算|ざん]", "掛け算", ["かけざん"],
		[
			["掛", "か", false],
			["け", null, false],
			["算", "ざん", false]
		], -1
	],
	["[見|み][掛|か]け", "見掛け", ["みかけ"],
		[
			["見", "み", false],
			["掛", "か", false],
			["け", null, false]
		], -1
	],
	["[話|はな]し[掛|か]け*る", "話し掛け", ["はなしかけ"],
		[
			["話", "はな", false],
			["し", null, false],
			["掛", "か", false],
			["け", null, false]
		], -1
	],
	["[追|お]い[掛|か]け*る", "追い掛け", ["おいかけ"],
		[
			["追", "お", false],
			["い", null, false],
			["掛", "か", false],
			["け", null, false]
		], -1
	],
	["[通|とお]り[掛|か]か*5", "通り掛か", ["とおりかか"],
		[
			["通", "とお", false],
			["り", null, false],
			["掛", "か", false],
			["か", null, false]
		], -1
	],
	["(腰|こし)[掛|か]け", "腰掛け", ["こしかけ"],
		[
			["腰", "こし", true],
			["掛", "か", false],
			["け", null, false]
		], "6035"
	],
	["(腰|こし)[掛|か]け*る", "腰掛け", ["こしかけ"],
		[
			["腰", "こし", true],
			["掛", "か", false],
			["け", null, false]
		], "6036"
	],
	["[双|ふた][子|ご]", "双子", ["ふたご"],
		[
			["双", "ふた", false],
			["子", "ご", false]
		], -1
	],
	["(菓|か)[子|し]", "菓子", ["かし"],
		[
			["菓", "か", true],
			["子", "し", false]
		], "6260"
	],
	["(蛇|じゃ)[口|ぐち]", "蛇口", ["じゃぐち"],
		[
			["蛇", "じゃ", true],
			["口", "ぐち", false]
		], "6261"
	],
	["[刺|さ]さ*5", "刺さ", ["ささ"],
		[
			["刺", "さ", false],
			["さ", null, false]
		], -1
	],
	["[刺|さ]*す", "刺", ["さ"],
		[
			["刺", "さ", false]
		], -1
	],
	["[刺激|しげき]", "刺激", ["しげき"],
		[
			["刺激", "しげき", false]
		], -1
	],
	["[刺身|さしみ]", "刺身", ["さしみ"],
		[
			["刺身", "さしみ", false]
		], -1
	],
	["[名|めい][刺|し]", "名刺", ["めいし"],
		[
			["名", "めい", false],
			["刺", "し", false]
		], -1
	],
	["[到|とう][着|ちゃく]", "到着", ["とうちゃく"],
		[
			["到", "とう", false],
			["着", "ちゃく", false]
		], -1
	],
	["[裁|さい](縫|ほう)", "裁縫", ["さいほう"],
		[
			["裁", "さい", false],
			["縫", "ほう", true]
		], "6264"
	],
	["(幾|いく)[分|ぶん]", "幾分", ["いくぶん"],
		[
			["幾", "いく", true],
			["分", "ぶん", false]
		], "6268"
	],
	["[寝|しん][台|だい]", "寝台", ["しんだい"],
		[
			["寝", "しん", false],
			["台", "だい", false]
		], -1
	],
	["[寝|ね][巻|まき]", "寝巻", ["ねまき"],
		[
			["寝", "ね", false],
			["巻", "まき", false]
		], -1
	],
	["[寝|ね][間|ま][着|き]", "寝間着", ["ねまき"],
		[
			["寝", "ね", false],
			["間", "ま", false],
			["着", "き", false]
		], -1
	],
	["[昼|ひる][寝|ね]", "昼寝", ["ひるね"],
		[
			["昼", "ひる", false],
			["寝", "ね", false]
		], -1
	],
	["[透|す]き[通|とお]*5", "透き通", ["すきとお"],
		[
			["透", "す", false],
			["き", null, false],
			["通", "とお", false]
		], -1
	],
	["[透|とう][明|めい]", "透明", ["とうめい"],
		[
			["透", "とう", false],
			["明", "めい", false]
		], -1
	],
	["[大|おお](凡|よそ)", "大凡", ["おおよそ"],
		[
			["大", "おお", false],
			["凡", "よそ", true]
		], "6271"
	],
	["[平|へい](凡|ぼん)", "平凡", ["へいぼん"],
		[
			["平", "へい", false],
			["凡", "ぼん", true]
		], "6272"
	],
	["[壁|かべ]", "壁", ["かべ"],
		[
			["壁", "かべ", false]
		], -1
	],
	["[休|きゅう](憩|けい)", "休憩", ["きゅうけい"],
		[
			["休", "きゅう", false],
			["憩", "けい", true]
		], "6273"
	],
	["[稲|いね]", "稲", ["いね"],
		[
			["稲", "いね", false]
		], -1
	],
	["[裂|さ]*く", "裂", ["さ"],
		[
			["裂", "さ", false]
		], -1
	],
	["[是|ぜ][非|ひ]", "是非", ["ぜひ"],
		[
			["是", "ぜ", false],
			["非", "ひ", false]
		], -1
	],
	["[大|だい](丈|じょう)(夫|ぶ)", "大丈夫", ["だいじょうぶ"],
		[
			["大", "だい", false],
			["丈", "じょう", true],
			["夫", "ぶ", true]
		], -1
	],
	["(帽|ぼう)[子|し]", "帽子", ["ぼうし"],
		[
			["帽", "ぼう", true],
			["子", "し", false]
		], "6280"
	],
	["[余|よ][裕|ゆう]", "余裕", ["よゆう"],
		[
			["余", "よ", false],
			["裕", "ゆう", false]
		], -1
	],
	["[堅|かた]い", "堅い", ["かたい"],
		[
			["堅", "かた", false],
			["い", null, false]
		], -1
	],
	["[強盗|ごうとう]", "強盗", ["ごうとう"],
		[
			["強盗", "ごうとう", false]
		], -1
	],
	["[盗|ぬす]*む", "盗", ["ぬす"],
		[
			["盗", "ぬす", false]
		], -1
	],
	["[盗|とう][難|なん]", "盗難", ["とうなん"],
		[
			["盗", "とう", false],
			["難", "なん", false]
		], -1
	],
	["[芝|し][居|ばい]", "芝居", ["しばい"],
		[
			["芝", "し", false],
			["居", "ばい", false]
		], -1
	],
	["[芝|し][生|ばふ]", "芝生", ["しばふ"],
		[
			["芝", "し", false],
			["生", "ばふ", false]
		], -1
	],
	["[綱|つな]", "綱", ["つな"],
		[
			["綱", "つな", false]
		], -1
	],
	["[扱|あつか]*う", "扱", ["あつか"],
		[
			["扱", "あつか", false]
		], -1
	],
	["[車|しゃ](掌|しょう)", "車掌", ["しゃしょう"],
		[
			["車", "しゃ", false],
			["掌", "しょう", true]
		], "6283"
	],
	["[面|めん](倒臭|どうくさ)い", "面倒臭い", ["めんどうくさい"],
		[
			["面", "めん", false],
			["倒臭", "どうくさ", true],
			["い", null, false]
		], "6285"
	],
	["[歓迎|かんげい]", "歓迎", ["かんげい"],
		[
			["歓迎", "かんげい", false]
		], -1
	],
	["[西|せい](暦|れき)", "西暦", ["せいれき"],
		[
			["西", "せい", false],
			["暦", "れき", true]
		], "6287"
	],
	["[勧|すす]め*る", "勧め", ["すすめ"],
		[
			["勧", "すす", false],
			["め", null, false]
		], -1
	],
	["[物|ぶっ][騒|そう]", "物騒", ["ぶっそう"],
		[
			["物", "ぶっ", false],
			["騒", "そう", false]
		], -1
	],
	["[騒|そう][々|ぞう]しい", "騒々しい", ["そうぞうしい"],
		[
			["騒", "そう", false],
			["々", "ぞう", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[騒|さわ]がしい", "騒がしい", ["さわがしい"],
		[
			["騒", "さわ", false],
			["が", null, false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[騒|さわ]ぎ", "騒ぎ", ["さわぎ"],
		[
			["騒", "さわ", false],
			["ぎ", null, false]
		], -1
	],
	["[騒|さわ]*ぐ", "騒", ["さわ"],
		[
			["騒", "さわ", false]
		], -1
	],
	["[騒|そう][音|おん]", "騒音", ["そうおん"],
		[
			["騒", "そう", false],
			["音", "おん", false]
		], -1
	],
	["[縄|なわ]", "縄", ["なわ"],
		[
			["縄", "なわ", false]
		], -1
	],
	["[揺|ゆ]れ*る", "揺れ", ["ゆれ"],
		[
			["揺", "ゆ", false],
			["れ", null, false]
		], -1
	],
	["[免|めん][税|ぜい]", "免税", ["めんぜい"],
		[
			["免", "めん", false],
			["税", "ぜい", false]
		], -1
	],
	["[免|めん][許|きょ]", "免許", ["めんきょ"],
		[
			["免", "めん", false],
			["許", "きょ", false]
		], -1
	],
	["(御|ご)[免|めん]", "御免", ["ごめん"],
		[
			["御", "ご", true],
			["免", "めん", false]
		], "5871"
	],
	["(炊|すい)[事|じ]", "炊事", ["すいじ"],
		[
			["炊", "すい", true],
			["事", "じ", false]
		], "6292"
	],
	["[既|すで]に", "既に", ["すでに"],
		[
			["既", "すで", false],
			["に", null, false]
		], -1
	],
	["[推薦|すいせん]", "推薦", ["すいせん"],
		[
			["推薦", "すいせん", false]
		], -1
	],
	["[隣|となり]", "隣", ["となり"],
		[
			["隣", "となり", false]
		], -1
	],
	["(冗|じょう)[談|だん]", "冗談", ["じょうだん"],
		[
			["冗", "じょう", true],
			["談", "だん", false]
		], "6295"
	],
	["[悩|なや]*む", "悩", ["なや"],
		[
			["悩", "なや", false]
		], -1
	],
	["{～}[御|ご]", "～御", ["ご"],
		[
			["～", null, false],
			["御", "ご", false]
		], -1
	],
	["[御|お]", "御", ["お"],
		[
			["御", "お", false]
		], -1
	],
	["[御|おん]{～}", "御～", ["おん"],
		[
			["御", "おん", false],
			["～", null, false]
		], -1
	],
	["[御|おん][中|ちゅう]", "御中", ["おんちゅう"],
		[
			["御", "おん", false],
			["中", "ちゅう", false]
		], -1
	],
	["[御|ご][免|めん]", "御免", ["ごめん"],
		[
			["御", "ご", false],
			["免", "めん", false]
		], -1
	],
	["[御|お][辞|じ][儀|ぎ]", "御辞儀", ["おじぎ"],
		[
			["御", "お", false],
			["辞", "じ", false],
			["儀", "ぎ", false]
		], -1
	],
	["[御|ご][飯|はん]", "御飯", ["ごはん"],
		[
			["御", "ご", false],
			["飯", "はん", false]
		], -1
	],
	["[御|お][手|て][洗|あらい]", "御手洗", ["おてあらい"],
		[
			["御", "お", false],
			["手", "て", false],
			["洗", "あらい", false]
		], -1
	],
	["[御|ご][覧|らん]", "御覧", ["ごらん"],
		[
			["御", "ご", false],
			["覧", "らん", false]
		], -1
	],
	["[範|はん][囲|い]", "範囲", ["はんい"],
		[
			["範", "はん", false],
			["囲", "い", false]
		], -1
	],
	["[隠|かく]*す", "隠", ["かく"],
		[
			["隠", "かく", false]
		], -1
	],
	["[隠|かく]れ*る", "隠れ", ["かくれ"],
		[
			["隠", "かく", false],
			["れ", null, false]
		], -1
	],
	["[哲|てつ][学|がく]", "哲学", ["てつがく"],
		[
			["哲", "てつ", false],
			["学", "がく", false]
		], -1
	],
	["[杉|すぎ]", "杉", ["すぎ"],
		[
			["杉", "すぎ", false]
		], -1
	],
	["軒", "軒", ["けん", "のき"],
		[], null
	],
	["[解|かい][釈|しゃく]", "解釈", ["かいしゃく"],
		[
			["解", "かい", false],
			["釈", "しゃく", false]
		], -1
	],
	["[太|たい](鼓|こ)", "太鼓", ["たいこ"],
		[
			["太", "たい", false],
			["鼓", "こ", true]
		], "6301"
	],
	["[荒|あら]い", "荒い", ["あらい"],
		[
			["荒", "あら", false],
			["い", null, false]
		], -1
	],
	["[荒|あ]れ*る", "荒れ", ["あれ"],
		[
			["荒", "あ", false],
			["れ", null, false]
		], -1
	],
	["[硬|かた]い", "硬い", ["かたい"],
		[
			["硬", "かた", false],
			["い", null, false]
		], -1
	],
	["[硬貨|こうか]", "硬貨", ["こうか"],
		[
			["硬貨", "こうか", false]
		], -1
	],
	["[切|きっ](符|ぷ)", "切符", ["きっぷ"],
		[
			["切", "きっ", false],
			["符", "ぷ", true]
		], "6303"
	],
	["(符|ふ)[号|ごう]", "符号", ["ふごう"],
		[
			["符", "ふ", true],
			["号", "ごう", false]
		], "6304"
	],
	["[妥|だ][当|とう]", "妥当", ["だとう"],
		[
			["妥", "だ", false],
			["当", "とう", false]
		], -1
	],
	["[威|い][張|ば]*5", "威張", ["いば"],
		[
			["威", "い", false],
			["張", "ば", false]
		], -1
	],
	["[豪華|ごうか]", "豪華", ["ごうか"],
		[
			["豪華", "ごうか", false]
		], -1
	],
	["[渋滞|じゅうたい]", "渋滞", ["じゅうたい"],
		[
			["渋滞", "じゅうたい", false]
		], -1
	],
	["[滞|たい][在|ざい]", "滞在", ["たいざい"],
		[
			["滞", "たい", false],
			["在", "ざい", false]
		], -1
	],
	["(扇|せん)[子|す]", "扇子", ["せんす"],
		[
			["扇", "せん", true],
			["子", "す", false]
		], "6308"
	],
	["(扇|せん)[風|ぷう][機|き]", "扇風機", ["せんぷうき"],
		[
			["扇", "せん", true],
			["風", "ぷう", false],
			["機", "き", false]
		], "6309"
	],
	["[微笑|ほほえ]*む", "微笑", ["ほほえ"],
		[
			["微笑", "ほほえ", false]
		], -1
	],
	["[微|び](妙|みょう)", "微妙", ["びみょう"],
		[
			["微", "び", false],
			["妙", "みょう", true]
		], "5903"
	],
	["[埋|う]め*る", "埋め", ["うめ"],
		[
			["埋", "う", false],
			["め", null, false]
		], -1
	],
	["(肯|こう)[定|てい]", "肯定", ["こうてい"],
		[
			["肯", "こう", true],
			["定", "てい", false]
		], "6313"
	],
	["[症|しょう][状|じょう]", "症状", ["しょうじょう"],
		[
			["症", "しょう", false],
			["状", "じょう", false]
		], -1
	],
	["[妙|みょう]", "妙", ["みょう"],
		[
			["妙", "みょう", false]
		], -1
	],
	["[微|び][妙|みょう]", "微妙", ["びみょう"],
		[
			["微", "び", false],
			["妙", "みょう", false]
		], -1
	],
	["(奇|き)[妙|みょう]", "奇妙", ["きみょう"],
		[
			["奇", "き", true],
			["妙", "みょう", false]
		], "6069"
	],
	["[手|て][袋|ぶくろ]", "手袋", ["てぶくろ"],
		[
			["手", "て", false],
			["袋", "ぶくろ", false]
		], -1
	],
	["[袋|ふくろ]", "袋", ["ふくろ"],
		[
			["袋", "ふくろ", false]
		], -1
	],
	["[足袋|たび]", "足袋", ["たび"],
		[
			["足袋", "たび", false]
		], -1
	],
	["[索|さく][引|いん]", "索引", ["さくいん"],
		[
			["索", "さく", false],
			["引", "いん", false]
		], -1
	],
	["(娯|ご)[楽|らく]", "娯楽", ["ごらく"],
		[
			["娯", "ご", true],
			["楽", "らく", false]
		], "6318"
	],
	["[吹|ふ]*く", "吹", ["ふ"],
		[
			["吹", "ふ", false]
		], -1
	],
	["[吹雪|ふぶき]", "吹雪", ["ふぶき"],
		[
			["吹雪", "ふぶき", false]
		], -1
	],
	["[寝|ね](坊|ぼう)", "寝坊", ["ねぼう"],
		[
			["寝", "ね", false],
			["坊", "ぼう", true]
		], "6322"
	],
	["[朝|あさ][寝|ね](坊|ぼう)", "朝寝坊", ["あさねぼう"],
		[
			["朝", "あさ", false],
			["寝", "ね", false],
			["坊", "ぼう", true]
		], "6323"
	],
	["[柄|がら]", "柄", ["がら"],
		[
			["柄", "がら", false]
		], -1
	],
	["[驚|おどろ]か*す", "驚か", ["おどろか"],
		[
			["驚", "おどろ", false],
			["か", null, false]
		], -1
	],
	["[驚|おどろ]*く", "驚", ["おどろ"],
		[
			["驚", "おどろ", false]
		], -1
	],
	["[封|ふう](筒|とう)", "封筒", ["ふうとう"],
		[
			["封", "ふう", false],
			["筒", "とう", true]
		], "6215"
	],
	["[娘|むすめ]", "娘", ["むすめ"],
		[
			["娘", "むすめ", false]
		], -1
	],
	["[洗|せん][剤|ざい]", "洗剤", ["せんざい"],
		[
			["洗", "せん", false],
			["剤", "ざい", false]
		], -1
	],
	["[瀬|せ][戸|と][物|もの]", "瀬戸物", ["せともの"],
		[
			["瀬", "せ", false],
			["戸", "と", false],
			["物", "もの", false]
		], -1
	],
	["[趣|しゅ][味|み]", "趣味", ["しゅみ"],
		[
			["趣", "しゅ", false],
			["味", "み", false]
		], -1
	],
	["[欠陥|けっかん]", "欠陥", ["けっかん"],
		[
			["欠陥", "けっかん", false]
		], -1
	],
	["[書|しょ][斎|さい]", "書斎", ["しょさい"],
		[
			["書", "しょ", false],
			["斎", "さい", false]
		], -1
	],
	["[慰|なぐさ]め*る", "慰め", ["なぐさめ"],
		[
			["慰", "なぐさ", false],
			["め", null, false]
		], -1
	],
	["[賢|かしこ]い", "賢い", ["かしこい"],
		[
			["賢", "かしこ", false],
			["い", null, false]
		], -1
	],
	["[上|じょう][旬|じゅん]", "上旬", ["じょうじゅん"],
		[
			["上", "じょう", false],
			["旬", "じゅん", false]
		], -1
	],
	["[下|げ][旬|じゅん]", "下旬", ["げじゅん"],
		[
			["下", "げ", false],
			["旬", "じゅん", false]
		], -1
	],
	["[中|ちゅう][旬|じゅん]", "中旬", ["ちゅうじゅん"],
		[
			["中", "ちゅう", false],
			["旬", "じゅん", false]
		], -1
	],
	["[初|しょ][旬|じゅん]", "初旬", ["しょじゅん"],
		[
			["初", "しょ", false],
			["旬", "じゅん", false]
		], -1
	],
	["[腕|うで]", "腕", ["うで"],
		[
			["腕", "うで", false]
		], -1
	],
	["[兼|か]ね*る", "兼ね", ["かね"],
		[
			["兼", "か", false],
			["ね", null, false]
		], -1
	],
	["[要|よう][旨|し]", "要旨", ["ようし"],
		[
			["要", "よう", false],
			["旨", "し", false]
		], -1
	],
	["[比較|ひかく]", "比較", ["ひかく"],
		[
			["比較", "ひかく", false]
		], -1
	],
	["[比較|ひかく][的|てき]", "比較的", ["ひかくてき"],
		[
			["比較", "ひかく", false],
			["的", "てき", false]
		], -1
	],
	["[床|ゆか]", "床", ["ゆか"],
		[
			["床", "ゆか", false]
		], -1
	],
	["[床|とこ]の[間|ま]", "床の間", ["とこのま"],
		[
			["床", "とこ", false],
			["の", null, false],
			["間", "ま", false]
		], -1
	],
	["[床|とこ][屋|や]", "床屋", ["とこや"],
		[
			["床", "とこ", false],
			["屋", "や", false]
		], -1
	],
	["[起|き][床|しょう]", "起床", ["きしょう"],
		[
			["起", "き", false],
			["床", "しょう", false]
		], -1
	],
	["[詳|くわ]しい", "詳しい", ["くわしい"],
		[
			["詳", "くわ", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[大|たい][抵|てい]", "大抵", ["たいてい"],
		[
			["大", "たい", false],
			["抵", "てい", false]
		], -1
	],
	["[抵抗|ていこう]", "抵抗", ["ていこう"],
		[
			["抵抗", "ていこう", false]
		], -1
	],
	["[柔|やわ]らかい", "柔らかい", ["やわらかい"],
		[
			["柔", "やわ", false],
			["ら", null, false],
			["か", null, false],
			["い", null, false]
		], -1
	],
	["[茂|しげ]*5", "茂", ["しげ"],
		[
			["茂", "しげ", false]
		], -1
	],
	["[飾|かざ]り", "飾り", ["かざり"],
		[
			["飾", "かざ", false],
			["り", null, false]
		], -1
	],
	["[飾|かざ]*5", "飾", ["かざ"],
		[
			["飾", "かざ", false]
		], -1
	],
	["{～}[殿|どの]", "～殿", ["どの"],
		[
			["～", null, false],
			["殿", "どの", false]
		], -1
	],
	["[濃|こ]い", "濃い", ["こい"],
		[
			["濃", "こ", false],
			["い", null, false]
		], -1
	],
	["[濃|のう][度|ど]", "濃度", ["のうど"],
		[
			["濃", "のう", false],
			["度", "ど", false]
		], -1
	],
	["[翼|つばさ]", "翼", ["つばさ"],
		[
			["翼", "つばさ", false]
		], -1
	],
	["[魅|み][力|りょく]", "魅力", ["みりょく"],
		[
			["魅", "み", false],
			["力", "りょく", false]
		], -1
	],
	["[好|す]き[嫌|きら]い", "好き嫌い", ["すききらい"],
		[
			["好", "す", false],
			["き", null, false],
			["嫌", "きら", false],
			["い", null, false]
		], -1
	],
	["[嫌|いや]", "嫌", ["いや"],
		[
			["嫌", "いや", false]
		], -1
	],
	["[嫌|きら]い", "嫌い", ["きらい"],
		[
			["嫌", "きら", false],
			["い", null, false]
		], -1
	],
	["[嫌|きら]*う", "嫌", ["きら"],
		[
			["嫌", "きら", false]
		], -1
	],
	["[嫌|いや]が*5", "嫌が", ["いやが"],
		[
			["嫌", "いや", false],
			["が", null, false]
		], -1
	],
	["[機|き][嫌|げん]", "機嫌", ["きげん"],
		[
			["機", "き", false],
			["嫌", "げん", false]
		], -1
	],
	["[一|いっ][斉|せい]", "一斉", ["いっせい"],
		[
			["一", "いっ", false],
			["斉", "せい", false]
		], -1
	],
	["[座|ざ][敷|しき]", "座敷", ["ざしき"],
		[
			["座", "ざ", false],
			["敷", "しき", false]
		], -1
	],
	["[敷|し]*く", "敷", ["し"],
		[
			["敷", "し", false]
		], -1
	],
	["[敷|しき][地|ち]", "敷地", ["しきち"],
		[
			["敷", "しき", false],
			["地", "ち", false]
		], -1
	],
	["湿気", "湿気", ["しっき", "しっけ"],
		[], null
	],
	["[肩|かた]", "肩", ["かた"],
		[
			["肩", "かた", false]
		], -1
	],
	["(傑|けっ)[作|さく]", "傑作", ["けっさく"],
		[
			["傑", "けっ", true],
			["作", "さく", false]
		], "6342"
	],
	["[零|れい]", "零", ["れい"],
		[
			["零", "れい", false]
		], -1
	],
	["[零|れい][点|てん]", "零点", ["れいてん"],
		[
			["零", "れい", false],
			["点", "てん", false]
		], -1
	],
	["[罰|ばっ]する", "罰する", ["ばっする"],
		[
			["罰", "ばっ", false],
			["す", null, false],
			["る", null, false]
		], -1
	],
	["[怒|おこ]*5", "怒", ["おこ"],
		[
			["怒", "おこ", false]
		], -1
	],
	["[滅|めっ][多|た]に", "滅多に", ["めったに"],
		[
			["滅", "めっ", false],
			["多", "た", false],
			["に", null, false]
		], -1
	],
	["[絶滅|ぜつめつ]", "絶滅", ["ぜつめつ"],
		[
			["絶滅", "ぜつめつ", false]
		], -1
	],
	["[基|き][礎|そ]", "基礎", ["きそ"],
		[
			["基", "き", false],
			["礎", "そ", false]
		], -1
	],
	["[花|か](瓶|びん)", "花瓶", ["かびん"],
		[
			["花", "か", false],
			["瓶", "びん", true]
		], -1
	],
	["[腐|くさ]*5", "腐", ["くさ"],
		[
			["腐", "くさ", false]
		], -1
	],
	["{～}[泊|はく]", "～泊", ["はく"],
		[
			["～", null, false],
			["泊", "はく", false]
		], -1
	],
	["[宿|しゅく][泊|はく]", "宿泊", ["しゅくはく"],
		[
			["宿", "しゅく", false],
			["泊", "はく", false]
		], -1
	],
	["[泊|と]ま*5", "泊ま", ["とま"],
		[
			["泊", "と", false],
			["ま", null, false]
		], -1
	],
	["[泊|と]め*る", "泊め", ["とめ"],
		[
			["泊", "と", false],
			["め", null, false]
		], -1
	],
	["[僕|ぼく]", "僕", ["ぼく"],
		[
			["僕", "ぼく", false]
		], -1
	],
	["[滑|すべ]*5", "滑", ["すべ"],
		[
			["滑", "すべ", false]
		], -1
	],
	["[滑|ず]れ*る", "滑れ", ["ずれ"],
		[
			["滑", "ず", false],
			["れ", null, false]
		], -1
	],
	["[炎|ほのお]", "炎", ["ほのお"],
		[
			["炎", "ほのお", false]
		], -1
	],
	["[寿|じゅ][命|みょう]", "寿命", ["じゅみょう"],
		[
			["寿", "じゅ", false],
			["命", "みょう", false]
		], -1
	],
	["[頑|がん][張|ば]*5", "頑張", ["がんば"],
		[
			["頑", "がん", false],
			["張", "ば", false]
		], -1
	],
	["[甘|あま]い", "甘い", ["あまい"],
		[
			["甘", "あま", false],
			["い", null, false]
		], -1
	],
	["[甘|あま]やか*す", "甘やか", ["あまやか"],
		[
			["甘", "あま", false],
			["や", null, false],
			["か", null, false]
		], -1
	],
	["[鎖|くさり]", "鎖", ["くさり"],
		[
			["鎖", "くさり", false]
		], -1
	],
	["[掃|は]*く", "掃", ["は"],
		[
			["掃", "は", false]
		], -1
	],
	["[掃|そう][除|じ]", "掃除", ["そうじ"],
		[
			["掃", "そう", false],
			["除", "じ", false]
		], -1
	],
	["[清|せい][掃|そう]", "清掃", ["せいそう"],
		[
			["清", "せい", false],
			["掃", "そう", false]
		], -1
	],
	["[掘|ほ]*5", "掘", ["ほ"],
		[
			["掘", "ほ", false]
		], -1
	],
	["[輝|かがや]*く", "輝", ["かがや"],
		[
			["輝", "かがや", false]
		], -1
	],
	["[蓄|たくわ]え*る", "蓄え", ["たくわえ"],
		[
			["蓄", "たくわ", false],
			["え", null, false]
		], -1
	],
	["[巡|めぐ]*5", "巡", ["めぐ"],
		[
			["巡", "めぐ", false]
		], -1
	],
	["[巡|じゅん][査|さ]", "巡査", ["じゅんさ"],
		[
			["巡", "じゅん", false],
			["査", "さ", false]
		], -1
	],
	["[疲|つか]れ", "疲れ", ["つかれ"],
		[
			["疲", "つか", false],
			["れ", null, false]
		], -1
	],
	["[疲|つか]れ*る", "疲れ", ["つかれ"],
		[
			["疲", "つか", false],
			["れ", null, false]
		], -1
	],
	["[稼|かせ]*ぐ", "稼", ["かせ"],
		[
			["稼", "かせ", false]
		], -1
	],
	["[一|いっ][瞬|しゅん]", "一瞬", ["いっしゅん"],
		[
			["一", "いっ", false],
			["瞬", "しゅん", false]
		], -1
	],
	["[瞬|しゅん][間|かん]", "瞬間", ["しゅんかん"],
		[
			["瞬", "しゅん", false],
			["間", "かん", false]
		], -1
	],
	["[水|すい](滴|てき)", "水滴", ["すいてき"],
		[
			["水", "すい", false],
			["滴", "てき", true]
		], "6358"
	],
	["[鉄|てっ][砲|ぽう]", "鉄砲", ["てっぽう"],
		[
			["鉄", "てっ", false],
			["砲", "ぽう", false]
		], -1
	],
	["[軟|やわ]らかい", "軟らかい", ["やわらかい"],
		[
			["軟", "やわ", false],
			["ら", null, false],
			["か", null, false],
			["い", null, false]
		], -1
	],
	["(蛍|けい)[光|こう][灯|とう]", "蛍光灯", ["けいこうとう"],
		[
			["蛍", "けい", true],
			["光", "こう", false],
			["灯", "とう", false]
		], "6359"
	],
	["[噴|ふん][水|すい]", "噴水", ["ふんすい"],
		[
			["噴", "ふん", false],
			["水", "すい", false]
		], -1
	],
	["[噴|ふん][火|か]", "噴火", ["ふんか"],
		[
			["噴", "ふん", false],
			["火", "か", false]
		], -1
	],
	["[沈|しず]*む", "沈", ["しず"],
		[
			["沈", "しず", false]
		], -1
	],
	["[誇|ほこ]り", "誇り", ["ほこり"],
		[
			["誇", "ほこ", false],
			["り", null, false]
		], -1
	],
	["鈍い", "鈍い", ["にぶい", "のろい"],
		[], null
	],
	["[相撲|すもう]", "相撲", ["すもう"],
		[
			["相撲", "すもう", false]
		], -1
	],
	["[冷|れい][凍|とう]", "冷凍", ["れいとう"],
		[
			["冷", "れい", false],
			["凍", "とう", false]
		], -1
	],
	["[凍|こご]え*る", "凍え", ["こごえ"],
		[
			["凍", "こご", false],
			["え", null, false]
		], -1
	],
	["[凍|こお]*5", "凍", ["こお"],
		[
			["凍", "こお", false]
		], -1
	],
	["[堀|ほり]", "堀", ["ほり"],
		[
			["堀", "ほり", false]
		], -1
	],
	["[絞|しぼ]*5", "絞", ["しぼ"],
		[
			["絞", "しぼ", false]
		], -1
	],
	["[煙|けむり]", "煙", ["けむり"],
		[
			["煙", "けむり", false]
		], -1
	],
	["[煙|けむ]い", "煙い", ["けむい"],
		[
			["煙", "けむ", false],
			["い", null, false]
		], -1
	],
	["[煙|えんと][突|つ]", "煙突", ["えんとつ"],
		[
			["煙", "えんと", false],
			["突", "つ", false]
		], -1
	],
	["[禁煙|きんえん]", "禁煙", ["きんえん"],
		[
			["禁煙", "きんえん", false]
		], -1
	],
	["[縁|ふち]", "縁", ["ふち"],
		[
			["縁", "ふち", false]
		], -1
	],
	["[唯|ゆい][一|いつ]", "唯一", ["ゆいいつ"],
		[
			["唯", "ゆい", false],
			["一", "いつ", false]
		], -1
	],
	["[膨|ふく]らま*す", "膨らま", ["ふくらま"],
		[
			["膨", "ふく", false],
			["ら", null, false],
			["ま", null, false]
		], -1
	],
	["[膨|ふく]ら*む", "膨ら", ["ふくら"],
		[
			["膨", "ふく", false],
			["ら", null, false]
		], -1
	],
	["[膨|ぼう][大|だい]", "膨大", ["ぼうだい"],
		[
			["膨", "ぼう", false],
			["大", "だい", false]
		], -1
	],
	["[本|ほん](棚|だな)", "本棚", ["ほんだな"],
		[
			["本", "ほん", false],
			["棚", "だな", true]
		], -1
	],
	["[失|しつ][恋|れん]", "失恋", ["しつれん"],
		[
			["失", "しつ", false],
			["恋", "れん", false]
		], -1
	],
	["[恋|こい]", "恋", ["こい"],
		[
			["恋", "こい", false]
		], -1
	],
	["[恋|こい]しい", "恋しい", ["こいしい"],
		[
			["恋", "こい", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[恋|こい][人|びと]", "恋人", ["こいびと"],
		[
			["恋", "こい", false],
			["人", "びと", false]
		], -1
	],
	["[慶|よろこ]び", "慶び", ["よろこび"],
		[
			["慶", "よろこ", false],
			["び", null, false]
		], -1
	],
	["[慶|よろこ]*ぶ", "慶", ["よろこ"],
		[
			["慶", "よろこ", false]
		], -1
	],
	["(厄|やっ)[介|かい]", "厄介", ["やっかい"],
		[
			["厄", "やっ", true],
			["介", "かい", false]
		], "6369"
	],
	["辛い", "辛い", ["からい", "つらい"],
		[], null
	],
	["[郊|こう][外|がい]", "郊外", ["こうがい"],
		[
			["郊", "こう", false],
			["外", "がい", false]
		], -1
	],
	["[真|しん][剣|けん]", "真剣", ["しんけん"],
		[
			["真", "しん", false],
			["剣", "けん", false]
		], -1
	],
	["[腰|こし]", "腰", ["こし"],
		[
			["腰", "こし", false]
		], -1
	],
	["[腰|こし][掛|か]け", "腰掛け", ["こしかけ"],
		[
			["腰", "こし", false],
			["掛", "か", false],
			["け", null, false]
		], -1
	],
	["[腰|こし][掛|か]け*る", "腰掛け", ["こしかけ"],
		[
			["腰", "こし", false],
			["掛", "か", false],
			["け", null, false]
		], -1
	],
	["[踊|おど]り", "踊り", ["おどり"],
		[
			["踊", "おど", false],
			["り", null, false]
		], -1
	],
	["[踊|おど]*5", "踊", ["おど"],
		[
			["踊", "おど", false]
		], -1
	],
	["[将|しょう][棋|ぎ]", "将棋", ["しょうぎ"],
		[
			["将", "しょう", false],
			["棋", "ぎ", false]
		], -1
	],
	["[居|い][眠|ねむ]り", "居眠り", ["いねむり"],
		[
			["居", "い", false],
			["眠", "ねむ", false],
			["り", null, false]
		], -1
	],
	["[眠|ねむ]い", "眠い", ["ねむい"],
		[
			["眠", "ねむ", false],
			["い", null, false]
		], -1
	],
	["[眠|ねむ]*5", "眠", ["ねむ"],
		[
			["眠", "ねむ", false]
		], -1
	],
	["(睡|すい)[眠|みん]", "睡眠", ["すいみん"],
		[
			["睡", "すい", true],
			["眠", "みん", false]
		], "6275"
	],
	["[冒|ぼう][険|けん]", "冒険", ["ぼうけん"],
		[
			["冒", "ぼう", false],
			["険", "けん", false]
		], -1
	],
	["[修|しゅう](繕|ぜん)", "修繕", ["しゅうぜん"],
		[
			["修", "しゅう", false],
			["繕", "ぜん", true]
		], "6371"
	],
	["[記|き][憶|おく]", "記憶", ["きおく"],
		[
			["記", "き", false],
			["憶", "おく", false]
		], -1
	],
	["[怖|こわ]い", "怖い", ["こわい"],
		[
			["怖", "こわ", false],
			["い", null, false]
		], -1
	],
	["[恐怖|きょうふ]", "恐怖", ["きょうふ"],
		[
			["恐怖", "きょうふ", false]
		], -1
	],
	["[潜|もぐ]*5", "潜", ["もぐ"],
		[
			["潜", "もぐ", false]
		], -1
	],
	["[珍|めずら]しい", "珍しい", ["めずらしい"],
		[
			["珍", "めずら", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[克|こく][服|ふく]", "克服", ["こくふく"],
		[
			["克", "こく", false],
			["服", "ふく", false]
		], -1
	],
	["[概|がい][論|ろん]", "概論", ["がいろん"],
		[
			["概", "がい", false],
			["論", "ろん", false]
		], -1
	],
	["[黙|だま]*5", "黙", ["だま"],
		[
			["黙", "だま", false]
		], -1
	],
	["[雰|ふん][囲|い][気|き]", "雰囲気", ["ふんいき"],
		[
			["雰", "ふん", false],
			["囲", "い", false],
			["気", "き", false]
		], -1
	],
	["[狭|せま]い", "狭い", ["せまい"],
		[
			["狭", "せま", false],
			["い", null, false]
		], -1
	],
	["[食|しょく][卓|たく]", "食卓", ["しょくたく"],
		[
			["食", "しょく", false],
			["卓", "たく", false]
		], -1
	],
	["[食|しょく][糧|りょう]", "食糧", ["しょくりょう"],
		[
			["食", "しょく", false],
			["糧", "りょう", false]
		], -1
	],
	["[特|とく][殊|しゅ]", "特殊", ["とくしゅ"],
		[
			["特", "とく", false],
			["殊", "しゅ", false]
		], -1
	],
	["[殖|ふ]え*る", "殖え", ["ふえ"],
		[
			["殖", "ふ", false],
			["え", null, false]
		], -1
	],
	["[殖|ふ]や*す", "殖や", ["ふや"],
		[
			["殖", "ふ", false],
			["や", null, false]
		], -1
	],
	["{～}(箇|か)[月|げつ]", "～箇月", ["かげつ"],
		[
			["～", null, false],
			["箇", "か", true],
			["月", "げつ", false]
		], "6383"
	],
	["[溶|と]か*す", "溶か", ["とか"],
		[
			["溶", "と", false],
			["か", null, false]
		], -1
	],
	["[溶|と]*く", "溶", ["と"],
		[
			["溶", "と", false]
		], -1
	],
	["[溶|と]け*る", "溶け", ["とけ"],
		[
			["溶", "と", false],
			["け", null, false]
		], -1
	],
	["[溶|と]け[込|こ]*む", "溶け込", ["とけこ"],
		[
			["溶", "と", false],
			["け", null, false],
			["込", "こ", false]
		], -1
	],
	["[溶岩|ようがん]", "溶岩", ["ようがん"],
		[
			["溶岩", "ようがん", false]
		], -1
	],
	["[先|せん][輩|ぱい]", "先輩", ["せんぱい"],
		[
			["先", "せん", false],
			["輩", "ぱい", false]
		], -1
	],
	["[後|こう][輩|はい]", "後輩", ["こうはい"],
		[
			["後", "こう", false],
			["輩", "はい", false]
		], -1
	],
	["[奇|き][妙|みょう]", "奇妙", ["きみょう"],
		[
			["奇", "き", false],
			["妙", "みょう", false]
		], -1
	],
	["[我慢|がまん]", "我慢", ["がまん"],
		[
			["我慢", "がまん", false]
		], -1
	],
	["[自|じ][慢|まん]", "自慢", ["じまん"],
		[
			["自", "じ", false],
			["慢", "まん", false]
		], -1
	],
	["[拍|はく][手|しゅ]", "拍手", ["はくしゅ"],
		[
			["拍", "はく", false],
			["手", "しゅ", false]
		], -1
	],
	["[丈|じょう][夫|ぶ]", "丈夫", ["じょうぶ"],
		[
			["丈", "じょう", false],
			["夫", "ぶ", false]
		], -1
	],
	["[大|だい][丈|じょう][夫|ぶ]", "大丈夫", ["だいじょうぶ"],
		[
			["大", "だい", false],
			["丈", "じょう", false],
			["夫", "ぶ", false]
		], -1
	],
	["[覆|おお]*う", "覆", ["おお"],
		[
			["覆", "おお", false]
		], -1
	],
	["[涙|なみだ]", "涙", ["なみだ"],
		[
			["涙", "なみだ", false]
		], -1
	],
	["[間|かん][隔|かく]", "間隔", ["かんかく"],
		[
			["間", "かん", false],
			["隔", "かく", false]
		], -1
	],
	["[隔|へだ]て*る", "隔て", ["へだて"],
		[
			["隔", "へだ", false],
			["て", null, false]
		], -1
	],
	["[消|しょう](耗|もう)", "消耗", ["しょうもう"],
		[
			["消", "しょう", false],
			["耗", "もう", true]
		], "6384"
	],
	["{～}[匹|ひき]", "～匹", ["ひき"],
		[
			["～", null, false],
			["匹", "ひき", false]
		], -1
	],
	["[休|きゅう][暇|か]", "休暇", ["きゅうか"],
		[
			["休", "きゅう", false],
			["暇", "か", false]
		], -1
	],
	["[暇|ひま]", "暇", ["ひま"],
		[
			["暇", "ひま", false]
		], -1
	],
	["[図|ず][鑑|かん]", "図鑑", ["ずかん"],
		[
			["図", "ず", false],
			["鑑", "かん", false]
		], -1
	],
	["[鑑|かん][賞|しょう]", "鑑賞", ["かんしょう"],
		[
			["鑑", "かん", false],
			["賞", "しょう", false]
		], -1
	],
	["[日|ひ][陰|かげ]", "日陰", ["ひかげ"],
		[
			["日", "ひ", false],
			["陰", "かげ", false]
		], -1
	],
	["[陰|かげ]", "陰", ["かげ"],
		[
			["陰", "かげ", false]
		], -1
	],
	["[銘|めい][々|めい]", "銘々", ["めいめい"],
		[
			["銘", "めい", false],
			["々", "めい", false]
		], -1
	],
	["[鋭|するど]い", "鋭い", ["するどい"],
		[
			["鋭", "するど", false],
			["い", null, false]
		], -1
	],
	["[随|ずい][分|ぶん]", "随分", ["ずいぶん"],
		[
			["随", "ずい", false],
			["分", "ぶん", false]
		], -1
	],
	["[随|ずい][筆|ひつ]", "随筆", ["ずいひつ"],
		[
			["随", "ずい", false],
			["筆", "ひつ", false]
		], -1
	],
	["[尋|たず]ね*る", "尋ね", ["たずね"],
		[
			["尋", "たず", false],
			["ね", null, false]
		], -1
	],
	["[原|げん][稿|こう]", "原稿", ["げんこう"],
		[
			["原", "げん", false],
			["稿", "こう", false]
		], -1
	],
	["[丘|おか]", "丘", ["おか"],
		[
			["丘", "おか", false]
		], -1
	],
	["[漫|まん][画|が]", "漫画", ["まんが"],
		[
			["漫", "まん", false],
			["画", "が", false]
		], -1
	],
	["[玄|げん][関|かん]", "玄関", ["げんかん"],
		[
			["玄", "げん", false],
			["関", "かん", false]
		], -1
	],
	["[覚悟|かくご]", "覚悟", ["かくご"],
		[
			["覚悟", "かくご", false]
		], -1
	],
	["[塗|ぬ]*5", "塗", ["ぬ"],
		[
			["塗", "ぬ", false]
		], -1
	],
	["[遂|つい]に", "遂に", ["ついに"],
		[
			["遂", "つい", false],
			["に", null, false]
		], -1
	],
	["[狂|くる]*う", "狂", ["くる"],
		[
			["狂", "くる", false]
		], -1
	],
	["[叫|さけ]*ぶ", "叫", ["さけ"],
		[
			["叫", "さけ", false]
		], -1
	],
	["[緯|い][度|ど]", "緯度", ["いど"],
		[
			["緯", "い", false],
			["度", "ど", false]
		], -1
	],
	["[退屈|たいくつ]", "退屈", ["たいくつ"],
		[
			["退屈", "たいくつ", false]
		], -1
	],
	["[淡|たん][水|すい]", "淡水", ["たんすい"],
		[
			["淡", "たん", false],
			["水", "すい", false]
		], -1
	],
	["[抽|ちゅう][象|しょう]", "抽象", ["ちゅうしょう"],
		[
			["抽", "ちゅう", false],
			["象", "しょう", false]
		], -1
	],
	["[奨|しょう][学|がく][金|きん]", "奨学金", ["しょうがくきん"],
		[
			["奨", "しょう", false],
			["学", "がく", false],
			["金", "きん", false]
		], -1
	],
	["[浸|つ]け*る", "浸け", ["つけ"],
		[
			["浸", "つ", false],
			["け", null, false]
		], -1
	],
	["[過|か][剰|じょう]", "過剰", ["かじょう"],
		[
			["過", "か", false],
			["剰", "じょう", false]
		], -1
	],
	["[乾|かわ]か*す", "乾か", ["かわか"],
		[
			["乾", "かわ", false],
			["か", null, false]
		], -1
	],
	["[乾|かわ]*く", "乾", ["かわ"],
		[
			["乾", "かわ", false]
		], -1
	],
	["[乾杯|かんぱい]", "乾杯", ["かんぱい"],
		[
			["乾杯", "かんぱい", false]
		], -1
	],
	["[乾|かん][電|でん][池|ち]", "乾電池", ["かんでんち"],
		[
			["乾", "かん", false],
			["電", "でん", false],
			["池", "ち", false]
		], -1
	],
	["(謙|けん)[虚|きょ]", "謙虚", ["けんきょ"],
		[
			["謙", "けん", true],
			["虚", "きょ", false]
		], "6189"
	],
	["[悔|くや]しい", "悔しい", ["くやしい"],
		[
			["悔", "くや", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[悔|く]や*む", "悔や", ["くや"],
		[
			["悔", "く", false],
			["や", null, false]
		], -1
	],
	["[祈|いの]*5", "祈", ["いの"],
		[
			["祈", "いの", false]
		], -1
	],
	["[翻|ほん][訳|やく]", "翻訳", ["ほんやく"],
		[
			["翻", "ほん", false],
			["訳", "やく", false]
		], -1
	],
	["[徐|じょ][々|じょ]に", "徐々に", ["じょじょに"],
		[
			["徐", "じょ", false],
			["々", "じょ", false],
			["に", null, false]
		], -1
	],
	["[白髪|しらが]", "白髪", ["しらが"],
		[
			["白髪", "しらが", false]
		], -1
	],
	["[髪|かみ]", "髪", ["かみ"],
		[
			["髪", "かみ", false]
		], -1
	],
	["[髪|かみ]の[毛|け]", "髪の毛", ["かみのけ"],
		[
			["髪", "かみ", false],
			["の", null, false],
			["毛", "け", false]
		], -1
	],
	["[忙|いそが]しい", "忙しい", ["いそがしい"],
		[
			["忙", "いそが", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[滝|たき]", "滝", ["たき"],
		[
			["滝", "たき", false]
		], -1
	],
	["[妨|さまた]げ*る", "妨げ", ["さまたげ"],
		[
			["妨", "さまた", false],
			["げ", null, false]
		], -1
	],
	["[摩擦|まさつ]", "摩擦", ["まさつ"],
		[
			["摩擦", "まさつ", false]
		], -1
	],
	["[擦|こす]*5", "擦", ["こす"],
		[
			["擦", "こす", false]
		], -1
	],
	["[別|べっ][荘|そう]", "別荘", ["べっそう"],
		[
			["別", "べっ", false],
			["荘", "そう", false]
		], -1
	],
	["[雷|かみなり]", "雷", ["かみなり"],
		[
			["雷", "かみなり", false]
		], -1
	],
	["[懐|なつ]かしい", "懐かしい", ["なつかしい"],
		[
			["懐", "なつ", false],
			["か", null, false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[勘|かん]", "勘", ["かん"],
		[
			["勘", "かん", false]
		], -1
	],
	["[勘|かん][定|じょう]", "勘定", ["かんじょう"],
		[
			["勘", "かん", false],
			["定", "じょう", false]
		], -1
	],
	["[勘|かん][違|ちが]い", "勘違い", ["かんちがい"],
		[
			["勘", "かん", false],
			["違", "ちが", false],
			["い", null, false]
		], -1
	],
	["[下|げ][駄|た]", "下駄", ["げた"],
		[
			["下", "げ", false],
			["駄", "た", false]
		], -1
	],
	["[無|む][駄|だ]", "無駄", ["むだ"],
		[
			["無", "む", false],
			["駄", "だ", false]
		], -1
	],
	["[駄|だ][目|め]", "駄目", ["だめ"],
		[
			["駄", "だ", false],
			["目", "め", false]
		], -1
	],
	["[風|ふ](呂|ろ)", "風呂", ["ふろ"],
		[
			["風", "ふ", false],
			["呂", "ろ", true]
		], "6388"
	],
	["[汗|あせ]", "汗", ["あせ"],
		[
			["汗", "あせ", false]
		], -1
	],
	["[冠|かんむり]", "冠", ["かんむり"],
		[
			["冠", "かんむり", false]
		], -1
	],
	["[斜|はす]", "斜", ["はす"],
		[
			["斜", "はす", false]
		], -1
	],
	["[斜|なな]め", "斜め", ["ななめ"],
		[
			["斜", "なな", false],
			["め", null, false]
		], -1
	],
	["[悪|あく][魔|ま]", "悪魔", ["あくま"],
		[
			["悪", "あく", false],
			["魔", "ま", false]
		], -1
	],
	["(邪|じゃ)[魔|ま]", "邪魔", ["じゃま"],
		[
			["邪", "じゃ", true],
			["魔", "ま", false]
		], "6208"
	],
	["[紫|むらさき]", "紫", ["むらさき"],
		[
			["紫", "むらさき", false]
		], -1
	],
	["[湿|しめ]*5", "湿", ["しめ"],
		[
			["湿", "しめ", false]
		], -1
	],
	["[湿|しつ][度|ど]", "湿度", ["しつど"],
		[
			["湿", "しつ", false],
			["度", "ど", false]
		], -1
	],
	["[卸|おろ]*す", "卸", ["おろ"],
		[
			["卸", "おろ", false]
		], -1
	],
	["[欄|らん]", "欄", ["らん"],
		[
			["欄", "らん", false]
		], -1
	],
	["[逸|そ]れ*る", "逸れ", ["それ"],
		[
			["逸", "そ", false],
			["れ", null, false]
		], -1
	],
	["[瓶|びん]", "瓶", ["びん"],
		[
			["瓶", "びん", false]
		], -1
	],
	["[瓶|びん][詰|づめ]", "瓶詰", ["びんづめ"],
		[
			["瓶", "びん", false],
			["詰", "づめ", false]
		], -1
	],
	["[花|か][瓶|びん]", "花瓶", ["かびん"],
		[
			["花", "か", false],
			["瓶", "びん", false]
		], -1
	],
	["[彫|ほ]*5", "彫", ["ほ"],
		[
			["彫", "ほ", false]
		], -1
	],
	["[彫|ちょう][刻|こく]", "彫刻", ["ちょうこく"],
		[
			["彫", "ちょう", false],
			["刻", "こく", false]
		], -1
	],
	["[咲|さ]*く", "咲", ["さ"],
		[
			["咲", "さ", false]
		], -1
	],
	["[穏|おだ]やか", "穏やか", ["おだやか"],
		[
			["穏", "おだ", false],
			["や", null, false],
			["か", null, false]
		], -1
	],
	["[顕微|けんび][鏡|きょう]", "顕微鏡", ["けんびきょう"],
		[
			["顕微", "けんび", false],
			["鏡", "きょう", false]
		], -1
	],
	["[矛盾|むじゅん]", "矛盾", ["むじゅん"],
		[
			["矛盾", "むじゅん", false]
		], -1
	],
	["[垣|かき][根|ね]", "垣根", ["かきね"],
		[
			["垣", "かき", false],
			["根", "ね", false]
		], -1
	],
	["[召|め]し[上|あ]が*5", "召し上が", ["めしあが"],
		[
			["召", "め", false],
			["し", null, false],
			["上", "あ", false],
			["が", null, false]
		], -1
	],
	["[釣|つり]", "釣", ["つり"],
		[
			["釣", "つり", false]
		], -1
	],
	["[釣|つ]り[合|あ]*う", "釣り合", ["つりあ"],
		[
			["釣", "つ", false],
			["り", null, false],
			["合", "あ", false]
		], -1
	],
	["[釣|つ]*5", "釣", ["つ"],
		[
			["釣", "つ", false]
		], -1
	],
	["[缶|かん]", "缶", ["かん"],
		[
			["缶", "かん", false]
		], -1
	],
	["[缶|かん][詰|づめ]", "缶詰", ["かんづめ"],
		[
			["缶", "かん", false],
			["詰", "づめ", false]
		], -1
	],
	["[薬|や][缶|かん]", "薬缶", ["やかん"],
		[
			["薬", "や", false],
			["缶", "かん", false]
		], -1
	],
	["[化|け][粧|しょう]", "化粧", ["けしょう"],
		[
			["化", "け", false],
			["粧", "しょう", false]
		], -1
	],
	["{～}[隻|せき]", "～隻", ["せき"],
		[
			["～", null, false],
			["隻", "せき", false]
		], -1
	],
	["[脂|あぶら]", "脂", ["あぶら"],
		[
			["脂", "あぶら", false]
		], -1
	],
	["[遭|あ]*う", "遭", ["あ"],
		[
			["遭", "あ", false]
		], -1
	],
	["[架|か][空|くう]", "架空", ["かくう"],
		[
			["架", "か", false],
			["空", "くう", false]
		], -1
	],
	["[鬼|おに]", "鬼", ["おに"],
		[
			["鬼", "おに", false]
		], -1
	],
	["[肌|はだ]", "肌", ["はだ"],
		[
			["肌", "はだ", false]
		], -1
	],
	["[肌|はだ][着|ぎ]", "肌着", ["はだぎ"],
		[
			["肌", "はだ", false],
			["着", "ぎ", false]
		], -1
	],
	["[幼|よう][稚|ち]", "幼稚", ["ようち"],
		[
			["幼", "よう", false],
			["稚", "ち", false]
		], -1
	],
	["[幼|よう][稚|ち][園|えん]", "幼稚園", ["ようちえん"],
		[
			["幼", "よう", false],
			["稚", "ち", false],
			["園", "えん", false]
		], -1
	],
	["[靴|くつ]", "靴", ["くつ"],
		[
			["靴", "くつ", false]
		], -1
	],
	["[靴|くつ][下|した]", "靴下", ["くつした"],
		[
			["靴", "くつ", false],
			["下", "した", false]
		], -1
	],
	["[煮|に]え*る", "煮え", ["にえ"],
		[
			["煮", "に", false],
			["え", null, false]
		], -1
	],
	["[煮|に]*る", "煮", ["に"],
		[
			["煮", "に", false]
		], -1
	],
	["[誓|ちか]*う", "誓", ["ちか"],
		[
			["誓", "ちか", false]
		], -1
	],
	["[信|しん][仰|こう]", "信仰", ["しんこう"],
		[
			["信", "しん", false],
			["仰", "こう", false]
		], -1
	],
	["[恥|は]ずかしい", "恥ずかしい", ["はずかしい"],
		[
			["恥", "は", false],
			["ず", null, false],
			["か", null, false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[砕|くだ]*く", "砕", ["くだ"],
		[
			["砕", "くだ", false]
		], -1
	],
	["[砕|くだ]け*る", "砕け", ["くだけ"],
		[
			["砕", "くだ", false],
			["け", null, false]
		], -1
	],
	["[歌|か][謡|よう]", "歌謡", ["かよう"],
		[
			["歌", "か", false],
			["謡", "よう", false]
		], -1
	],
	["[民|みん][謡|よう]", "民謡", ["みんよう"],
		[
			["民", "みん", false],
			["謡", "よう", false]
		], -1
	],
	["[童|どう][謡|よう]", "童謡", ["どうよう"],
		[
			["童", "どう", false],
			["謡", "よう", false]
		], -1
	],
	["[嫁|よめ]", "嫁", ["よめ"],
		[
			["嫁", "よめ", false]
		], -1
	],
	["[花|はな][嫁|よめ]", "花嫁", ["はなよめ"],
		[
			["花", "はな", false],
			["嫁", "よめ", false]
		], -1
	],
	["[謙|けん][虚|きょ]", "謙虚", ["けんきょ"],
		[
			["謙", "けん", false],
			["虚", "きょ", false]
		], -1
	],
	["[泥|どろ]", "泥", ["どろ"],
		[
			["泥", "どろ", false]
		], -1
	],
	["[泥棒|どろぼう]", "泥棒", ["どろぼう"],
		[
			["泥棒", "どろぼう", false]
		], -1
	],
	["[琴|こと]", "琴", ["こと"],
		[
			["琴", "こと", false]
		], -1
	],
	["[戸|と][棚|だな]", "戸棚", ["とだな"],
		[
			["戸", "と", false],
			["棚", "だな", false]
		], -1
	],
	["[棚|たな]", "棚", ["たな"],
		[
			["棚", "たな", false]
		], -1
	],
	["[廊|ろう][下|か]", "廊下", ["ろうか"],
		[
			["廊", "ろう", false],
			["下", "か", false]
		], -1
	],
	["[寂|さび]しい", "寂しい", ["さびしい"],
		[
			["寂", "さび", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[隅|すみ]", "隅", ["すみ"],
		[
			["隅", "すみ", false]
		], -1
	],
	["[偶|たま]", "偶", ["たま"],
		[
			["偶", "たま", false]
		], -1
	],
	["[偶|たま][々|たま]", "偶々", ["たまたま"],
		[
			["偶", "たま", false],
			["々", "たま", false]
		], -1
	],
	["[偶|ぐう][数|すう]", "偶数", ["ぐうすう"],
		[
			["偶", "ぐう", false],
			["数", "すう", false]
		], -1
	],
	["[偶|ぐう][然|ぜん]", "偶然", ["ぐうぜん"],
		[
			["偶", "ぐう", false],
			["然", "ぜん", false]
		], -1
	],
	["{～}[辛|づら]い", "～辛い", ["づらい"],
		[
			["～", null, false],
			["辛", "づら", false],
			["い", null, false]
		], -1
	],
	["[塩辛|しおから]い", "塩辛い", ["しおからい"],
		[
			["塩辛", "しおから", false],
			["い", null, false]
		], -1
	],
	["[歯|は][磨|みが]き", "歯磨き", ["はみがき"],
		[
			["歯", "は", false],
			["磨", "みが", false],
			["き", null, false]
		], -1
	],
	["[磨|みが]*く", "磨", ["みが"],
		[
			["磨", "みが", false]
		], -1
	],
	["[碁|ご]", "碁", ["ご"],
		[
			["碁", "ご", false]
		], -1
	],
	["[砂|さ][漠|ばく]", "砂漠", ["さばく"],
		[
			["砂", "さ", false],
			["漠", "ばく", false]
		], -1
	],
	["[邪|じゃ][魔|ま]", "邪魔", ["じゃま"],
		[
			["邪", "じゃ", false],
			["魔", "ま", false]
		], -1
	],
	["[風邪|かぜ]", "風邪", ["かぜ"],
		[
			["風邪", "かぜ", false]
		], -1
	],
	["[墨|すみ]", "墨", ["すみ"],
		[
			["墨", "すみ", false]
		], -1
	],
	["[履|は]*く", "履", ["は"],
		[
			["履", "は", false]
		], -1
	],
	["[草履|ぞうり]", "草履", ["ぞうり"],
		[
			["草履", "ぞうり", false]
		], -1
	],
	["[劣|おと]*5", "劣", ["おと"],
		[
			["劣", "おと", false]
		], -1
	],
	["[姓|せい]", "姓", ["せい"],
		[
			["姓", "せい", false]
		], -1
	],
	["[封|ふう][筒|とう]", "封筒", ["ふうとう"],
		[
			["封", "ふう", false],
			["筒", "とう", false]
		], -1
	],
	["[水|すい][筒|とう]", "水筒", ["すいとう"],
		[
			["水", "すい", false],
			["筒", "とう", false]
		], -1
	],
	["[怪|あや]しい", "怪しい", ["あやしい"],
		[
			["怪", "あや", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[怪我|けが]", "怪我", ["けが"],
		[
			["怪我", "けが", false]
		], -1
	],
	["[粒|つぶ]", "粒", ["つぶ"],
		[
			["粒", "つぶ", false]
		], -1
	],
	["[偉|えら]い", "偉い", ["えらい"],
		[
			["偉", "えら", false],
			["い", null, false]
		], -1
	],
	["[偉|い][大|だい]", "偉大", ["いだい"],
		[
			["偉", "い", false],
			["大", "だい", false]
		], -1
	],
	["[酔|よ]*う", "酔", ["よ"],
		[
			["酔", "よ", false]
		], -1
	],
	["[酔|よ]っ[払|ぱら]い", "酔っ払い", ["よっぱらい"],
		[
			["酔", "よ", false],
			["っ", null, false],
			["払", "ぱら", false],
			["い", null, false]
		], -1
	],
	["[御|ご][無|ぶ](沙汰|さた)", "御無沙汰", ["ごぶさた"],
		[
			["御", "ご", false],
			["無", "ぶ", false],
			["沙汰", "さた", true]
		], "6399"
	],
	["[無|ぶ](沙汰|さた)", "無沙汰", ["ぶさた"],
		[
			["無", "ぶ", false],
			["沙汰", "さた", true]
		], "6400"
	],
	["[惜|お]しい", "惜しい", ["おしい"],
		[
			["惜", "お", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[一|いっ](旦|たん)", "一旦", ["いったん"],
		[
			["一", "いっ", false],
			["旦", "たん", true]
		], "6401"
	],
	["[収|しゅう][穫|かく]", "収穫", ["しゅうかく"],
		[
			["収", "しゅう", false],
			["穫", "かく", false]
		], -1
	],
	["[盆|ぼん]", "盆", ["ぼん"],
		[
			["盆", "ぼん", false]
		], -1
	],
	["[盆|ぼん][地|ち]", "盆地", ["ぼんち"],
		[
			["盆", "ぼん", false],
			["地", "ち", false]
		], -1
	],
	["[飢|う]え*る", "飢え", ["うえ"],
		[
			["飢", "う", false],
			["え", null, false]
		], -1
	],
	["{～}[畳|じょう]", "～畳", ["じょう"],
		[
			["～", null, false],
			["畳", "じょう", false]
		], -1
	],
	["[畳|たたみ]", "畳", ["たたみ"],
		[
			["畳", "たたみ", false]
		], -1
	],
	["[畳|たた]*む", "畳", ["たた"],
		[
			["畳", "たた", false]
		], -1
	],
	["[吐|は]き[気|け]", "吐き気", ["はきけ"],
		[
			["吐", "は", false],
			["き", null, false],
			["気", "け", false]
		], -1
	],
	["[吐|は]*く", "吐", ["は"],
		[
			["吐", "は", false]
		], -1
	],
	["[宴|えん][会|かい]", "宴会", ["えんかい"],
		[
			["宴", "えん", false],
			["会", "かい", false]
		], -1
	],
	["[皮膚|ひふ]", "皮膚", ["ひふ"],
		[
			["皮膚", "ひふ", false]
		], -1
	],
	["[鐘|かね]", "鐘", ["かね"],
		[
			["鐘", "かね", false]
		], -1
	],
	["[粗|あら]い", "粗い", ["あらい"],
		[
			["粗", "あら", false],
			["い", null, false]
		], -1
	],
	["[粗末|そまつ]", "粗末", ["そまつ"],
		[
			["粗末", "そまつ", false]
		], -1
	],
	["[傘|かさ]", "傘", ["かさ"],
		[
			["傘", "かさ", false]
		], -1
	],
	["[朝|あさ](寝|ね)(坊|ぼう)", "朝寝坊", ["あさねぼう"],
		[
			["朝", "あさ", false],
			["寝", "ね", true],
			["坊", "ぼう", true]
		], -1
	],
	["[赤|あか]ん(坊|ぼう)", "赤ん坊", ["あかんぼう"],
		[
			["赤", "あか", false],
			["ん", null, false],
			["坊", "ぼう", true]
		], -1
	],
	["[丁寧|ていねい]", "丁寧", ["ていねい"],
		[
			["丁寧", "ていねい", false]
		], -1
	],
	["[寧|むし]ろ", "寧ろ", ["むしろ"],
		[
			["寧", "むし", false],
			["ろ", null, false]
		], -1
	],
	["[洗|せん][濯|たく]", "洗濯", ["せんたく"],
		[
			["洗", "せん", false],
			["濯", "たく", false]
		], -1
	],
	["[循環|じゅんかん]", "循環", ["じゅんかん"],
		[
			["循環", "じゅんかん", false]
		], -1
	],
	["[猫|ねこ]", "猫", ["ねこ"],
		[
			["猫", "ねこ", false]
		], -1
	],
	["[怠|なま]け*る", "怠け", ["なまけ"],
		[
			["怠", "なま", false],
			["け", null, false]
		], -1
	],
	["[怠|おこた]*5", "怠", ["おこた"],
		[
			["怠", "おこた", false]
		], -1
	],
	["[寮|りょう]", "寮", ["りょう"],
		[
			["寮", "りょう", false]
		], -1
	],
	["[塔|とう]", "塔", ["とう"],
		[
			["塔", "とう", false]
		], -1
	],
	["[沸|わ]か*す", "沸か", ["わか"],
		[
			["沸", "わ", false],
			["か", null, false]
		], -1
	],
	["[沸|わ]*く", "沸", ["わ"],
		[
			["沸", "わ", false]
		], -1
	],
	["[鉛|えん][筆|ぴつ]", "鉛筆", ["えんぴつ"],
		[
			["鉛", "えん", false],
			["筆", "ぴつ", false]
		], -1
	],
	["[哀|あわ]れ", "哀れ", ["あわれ"],
		[
			["哀", "あわ", false],
			["れ", null, false]
		], -1
	],
	["[跳|は]ね*る", "跳ね", ["はね"],
		[
			["跳", "は", false],
			["ね", null, false]
		], -1
	],
	["[跳|と]*ぶ", "跳", ["と"],
		[
			["跳", "と", false]
		], -1
	],
	["[菓|か][子|し]", "菓子", ["かし"],
		[
			["菓", "か", false],
			["子", "し", false]
		], -1
	],
	["[蛇|じゃ][口|ぐち]", "蛇口", ["じゃぐち"],
		[
			["蛇", "じゃ", false],
			["口", "ぐち", false]
		], -1
	],
	["[澄|す]*む", "澄", ["す"],
		[
			["澄", "す", false]
		], -1
	],
	["[縫|ぬ]*う", "縫", ["ぬ"],
		[
			["縫", "ぬ", false]
		], -1
	],
	["[裁|さい][縫|ほう]", "裁縫", ["さいほう"],
		[
			["裁", "さい", false],
			["縫", "ほう", false]
		], -1
	],
	["[幾|いく]{～}", "幾～", ["いく"],
		[
			["幾", "いく", false],
			["～", null, false]
		], -1
	],
	["[幾|いく]つ", "幾つ", ["いくつ"],
		[
			["幾", "いく", false],
			["つ", null, false]
		], -1
	],
	["[幾|いく]ら", "幾ら", ["いくら"],
		[
			["幾", "いく", false],
			["ら", null, false]
		], -1
	],
	["[幾|いく][分|ぶん]", "幾分", ["いくぶん"],
		[
			["幾", "いく", false],
			["分", "ぶん", false]
		], -1
	],
	["[眺|なが]め", "眺め", ["ながめ"],
		[
			["眺", "なが", false],
			["め", null, false]
		], -1
	],
	["[眺|なが]め*る", "眺め", ["ながめ"],
		[
			["眺", "なが", false],
			["め", null, false]
		], -1
	],
	["[大|おお][凡|よそ]", "大凡", ["おおよそ"],
		[
			["大", "おお", false],
			["凡", "よそ", false]
		], -1
	],
	["[平|へい][凡|ぼん]", "平凡", ["へいぼん"],
		[
			["平", "へい", false],
			["凡", "ぼん", false]
		], -1
	],
	["[休|きゅう][憩|けい]", "休憩", ["きゅうけい"],
		[
			["休", "きゅう", false],
			["憩", "けい", false]
		], -1
	],
	["[刈|か]*5", "刈", ["か"],
		[
			["刈", "か", false]
		], -1
	],
	["[睡|すい][眠|みん]", "睡眠", ["すいみん"],
		[
			["睡", "すい", false],
			["眠", "みん", false]
		], -1
	],
	["[伯母|おば]", "伯母", ["おば"],
		[
			["伯母", "おば", false]
		], -1
	],
	["[伯母|おば]さん", "伯母さん", ["おばさん"],
		[
			["伯母", "おば", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[伯父|おじ]", "伯父", ["おじ"],
		[
			["伯父", "おじ", false]
		], -1
	],
	["[伯父|おじ]さん", "伯父さん", ["おじさん"],
		[
			["伯父", "おじ", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[帽|ぼう][子|し]", "帽子", ["ぼうし"],
		[
			["帽", "ぼう", false],
			["子", "し", false]
		], -1
	],
	["[霧|きり]", "霧", ["きり"],
		[
			["霧", "きり", false]
		], -1
	],
	["[枯|か]れ*る", "枯れ", ["かれ"],
		[
			["枯", "か", false],
			["れ", null, false]
		], -1
	],
	["[車|しゃ][掌|しょう]", "車掌", ["しゃしょう"],
		[
			["車", "しゃ", false],
			["掌", "しょう", false]
		], -1
	],
	["[臭|くさ]い", "臭い", ["くさい"],
		[
			["臭", "くさ", false],
			["い", null, false]
		], -1
	],
	["[面|めん][倒臭|どうくさ]い", "面倒臭い", ["めんどうくさい"],
		[
			["面", "めん", false],
			["倒臭", "どうくさ", false],
			["い", null, false]
		], -1
	],
	["[縛|しば]*5", "縛", ["しば"],
		[
			["縛", "しば", false]
		], -1
	],
	["[西|せい][暦|れき]", "西暦", ["せいれき"],
		[
			["西", "せい", false],
			["暦", "れき", false]
		], -1
	],
	["[宜|よろ]しい", "宜しい", ["よろしい"],
		[
			["宜", "よろ", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[純粋|じゅんすい]", "純粋", ["じゅんすい"],
		[
			["純粋", "じゅんすい", false]
		], -1
	],
	["[猿|さる]", "猿", ["さる"],
		[
			["猿", "さる", false]
		], -1
	],
	["[炊|た]*く", "炊", ["た"],
		[
			["炊", "た", false]
		], -1
	],
	["[炊|すい][事|じ]", "炊事", ["すいじ"],
		[
			["炊", "すい", false],
			["事", "じ", false]
		], -1
	],
	["[飽|あ]き*る", "飽き", ["あき"],
		[
			["飽", "あ", false],
			["き", null, false]
		], -1
	],
	["[飽|あ]くまで", "飽くまで", ["あくまで"],
		[
			["飽", "あ", false],
			["く", null, false],
			["ま", null, false],
			["で", null, false]
		], -1
	],
	["[冗|じょう][談|だん]", "冗談", ["じょうだん"],
		[
			["冗", "じょう", false],
			["談", "だん", false]
		], -1
	],
	["[涼|すず]しい", "涼しい", ["すずしい"],
		[
			["涼", "すず", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[涼|すず]*む", "涼", ["すず"],
		[
			["涼", "すず", false]
		], -1
	],
	["[手|て](頃|ごろ)", "手頃", ["てごろ"],
		[
			["手", "て", false],
			["頃", "ごろ", true]
		], "6414"
	],
	["[近|ちか](頃|ごろ)", "近頃", ["ちかごろ"],
		[
			["近", "ちか", false],
			["頃", "ごろ", true]
		], "6415"
	],
	["[舟|ふね]", "舟", ["ふね"],
		[
			["舟", "ふね", false]
		], -1
	],
	["[太|たい][鼓|こ]", "太鼓", ["たいこ"],
		[
			["太", "たい", false],
			["鼓", "こ", false]
		], -1
	],
	["[裸|はだか]", "裸", ["はだか"],
		[
			["裸", "はだか", false]
		], -1
	],
	["[切|きっ][符|ぷ]", "切符", ["きっぷ"],
		[
			["切", "きっ", false],
			["符", "ぷ", false]
		], -1
	],
	["[符|ふ][号|ごう]", "符号", ["ふごう"],
		[
			["符", "ふ", false],
			["号", "ごう", false]
		], -1
	],
	["[塊|かたまり]", "塊", ["かたまり"],
		[
			["塊", "かたまり", false]
		], -1
	],
	["[紙幣|しへい]", "紙幣", ["しへい"],
		[
			["紙幣", "しへい", false]
		], -1
	],
	["[扇|あお]*ぐ", "扇", ["あお"],
		[
			["扇", "あお", false]
		], -1
	],
	["[扇|せん][子|す]", "扇子", ["せんす"],
		[
			["扇", "せん", false],
			["子", "す", false]
		], -1
	],
	["[扇|せん][風|ぷう][機|き]", "扇風機", ["せんぷうき"],
		[
			["扇", "せん", false],
			["風", "ぷう", false],
			["機", "き", false]
		], -1
	],
	["[憎|にく]い", "憎い", ["にくい"],
		[
			["憎", "にく", false],
			["い", null, false]
		], -1
	],
	["[憎|にく]*む", "憎", ["にく"],
		[
			["憎", "にく", false]
		], -1
	],
	["[憎|にく]らしい", "憎らしい", ["にくらしい"],
		[
			["憎", "にく", false],
			["ら", null, false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[肯|こう][定|てい]", "肯定", ["こうてい"],
		[
			["肯", "こう", false],
			["定", "てい", false]
		], -1
	],
	["[漬|つ]け*る", "漬け", ["つけ"],
		[
			["漬", "つ", false],
			["け", null, false]
		], -1
	],
	["[乾燥|かんそう]", "乾燥", ["かんそう"],
		[
			["乾燥", "かんそう", false]
		], -1
	],
	["[牧畜|ぼくちく]", "牧畜", ["ぼくちく"],
		[
			["牧畜", "ぼくちく", false]
		], -1
	],
	["[紺|こん]", "紺", ["こん"],
		[
			["紺", "こん", false]
		], -1
	],
	["[娯|ご][楽|らく]", "娯楽", ["ごらく"],
		[
			["娯", "ご", false],
			["楽", "らく", false]
		], -1
	],
	["[坊|ぼう]さん", "坊さん", ["ぼうさん"],
		[
			["坊", "ぼう", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[坊|ぼ]っちゃん", "坊っちゃん", ["ぼっちゃん"],
		[
			["坊", "ぼ", false],
			["っ", null, false],
			["ち", null, false],
			["ゃ", null, false],
			["ん", null, false]
		], -1
	],
	["[坊|ぼう]や", "坊や", ["ぼうや"],
		[
			["坊", "ぼう", false],
			["や", null, false]
		], -1
	],
	["[寝|ね][坊|ぼう]", "寝坊", ["ねぼう"],
		[
			["寝", "ね", false],
			["坊", "ぼう", false]
		], -1
	],
	["[朝|あさ][寝|ね][坊|ぼう]", "朝寝坊", ["あさねぼう"],
		[
			["朝", "あさ", false],
			["寝", "ね", false],
			["坊", "ぼう", false]
		], -1
	],
	["[汁|しる]", "汁", ["しる"],
		[
			["汁", "しる", false]
		], -1
	],
	["{～}[遍|へん]", "～遍", ["へん"],
		[
			["～", null, false],
			["遍", "へん", false]
		], -1
	],
	["[挟|はさ]ま*5", "挟ま", ["はさま"],
		[
			["挟", "はさ", false],
			["ま", null, false]
		], -1
	],
	["[挟|はさ]*む", "挟", ["はさ"],
		[
			["挟", "はさ", false]
		], -1
	],
	["[泡|あわ]", "泡", ["あわ"],
		[
			["泡", "あわ", false]
		], -1
	],
	["[又|また]", "又", ["また"],
		[
			["又", "また", false]
		], -1
	],
	["[又|また]は", "又は", ["または"],
		[
			["又", "また", false],
			["は", null, false]
		], -1
	],
	["[恨|うら]み", "恨み", ["うらみ"],
		[
			["恨", "うら", false],
			["み", null, false]
		], -1
	],
	["[恨|うら]*む", "恨", ["うら"],
		[
			["恨", "うら", false]
		], -1
	],
	["[濁|にご]*5", "濁", ["にご"],
		[
			["濁", "にご", false]
		], -1
	],
	["(梯|はし)[子|ご]", "梯子", ["はしご"],
		[
			["梯", "はし", true],
			["子", "ご", false]
		], "6431"
	],
	["[鉢|はち]", "鉢", ["はち"],
		[
			["鉢", "はち", false]
		], -1
	],
	["[殻|から]", "殻", ["から"],
		[
			["殻", "から", false]
		], -1
	],
	["[曇|くもり]", "曇", ["くもり"],
		[
			["曇", "くもり", false]
		], -1
	],
	["[曇|くも]*5", "曇", ["くも"],
		[
			["曇", "くも", false]
		], -1
	],
	["(椅|い)[子|す]", "椅子", ["いす"],
		[
			["椅", "い", true],
			["子", "す", false]
		], "6433"
	],
	["[挿|さ]*す", "挿", ["さ"],
		[
			["挿", "さ", false]
		], -1
	],
	["[悠|ゆう][々|ゆう]", "悠々", ["ゆうゆう"],
		[
			["悠", "ゆう", false],
			["々", "ゆう", false]
		], -1
	],
	["[傑|けっ][作|さく]", "傑作", ["けっさく"],
		[
			["傑", "けっ", false],
			["作", "さく", false]
		], -1
	],
	["[峠|とうげ]", "峠", ["とうげ"],
		[
			["峠", "とうげ", false]
		], -1
	],
	["[渇|かわ]*く", "渇", ["かわ"],
		[
			["渇", "かわ", false]
		], -1
	],
	["[叔母|おば]", "叔母", ["おば"],
		[
			["叔母", "おば", false]
		], -1
	],
	["[叔母|おば]さん", "叔母さん", ["おばさん"],
		[
			["叔母", "おば", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[叔父|おじ]", "叔父", ["おじ"],
		[
			["叔父", "おじ", false]
		], -1
	],
	["[叔父|おじ]さん", "叔父さん", ["おじさん"],
		[
			["叔父", "おじ", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[酢|す]", "酢", ["す"],
		[
			["酢", "す", false]
		], -1
	],
	["[甚|はなは]だしい", "甚だしい", ["はなはだしい"],
		[
			["甚", "はなは", false],
			["だ", null, false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[物|もの](凄|すご)い", "物凄い", ["ものすごい"],
		[
			["物", "もの", false],
			["凄", "すご", true],
			["い", null, false]
		], "6440"
	],
	["[岬|みさき]", "岬", ["みさき"],
		[
			["岬", "みさき", false]
		], -1
	],
	["[癖|くせ]", "癖", ["くせ"],
		[
			["癖", "くせ", false]
		], -1
	],
	["[愉快|ゆかい]", "愉快", ["ゆかい"],
		[
			["愉快", "ゆかい", false]
		], -1
	],
	["[塀|へい]", "塀", ["へい"],
		[
			["塀", "へい", false]
		], -1
	],
	["[唇|くちびる]", "唇", ["くちびる"],
		[
			["唇", "くちびる", false]
		], -1
	],
	["(呑|のん)[気|き]", "呑気", ["のんき"],
		[
			["呑", "のん", true],
			["気", "き", false]
		], "6443"
	],
	["[水|すい][滴|てき]", "水滴", ["すいてき"],
		[
			["水", "すい", false],
			["滴", "てき", false]
		], -1
	],
	["[蛍|けい][光|こう][灯|とう]", "蛍光灯", ["けいこうとう"],
		[
			["蛍", "けい", false],
			["光", "こう", false],
			["灯", "とう", false]
		], -1
	],
	["(稽|けい)[古|こ]", "稽古", ["けいこ"],
		[
			["稽", "けい", true],
			["古", "こ", false]
		], "6445"
	],
	["(贅|ぜい)[沢|たく]", "贅沢", ["ぜいたく"],
		[
			["贅", "ぜい", true],
			["沢", "たく", false]
		], "6450"
	],
	["お[嬢|じょう]さん", "お嬢さん", ["おじょうさん"],
		[
			["お", null, false],
			["嬢", "じょう", false],
			["さ", null, false],
			["ん", null, false]
		], -1
	],
	["[褒|ほ]め*る", "褒め", ["ほめ"],
		[
			["褒", "ほ", false],
			["め", null, false]
		], -1
	],
	["[醜|みにく]い", "醜い", ["みにくい"],
		[
			["醜", "みにく", false],
			["い", null, false]
		], -1
	],
	["(剃|かみ)[刀|そり]", "剃刀", ["かみそり"],
		[
			["剃", "かみ", true],
			["刀", "そり", false]
		], "6456"
	],
	["[手|て](拭|ぬぐ)い", "手拭い", ["てぬぐい"],
		[
			["手", "て", false],
			["拭", "ぬぐ", true],
			["い", null, false]
		], "6459"
	],
	["[漸|ようや]く", "漸く", ["ようやく"],
		[
			["漸", "ようや", false],
			["く", null, false]
		], -1
	],
	["[蚊|か]", "蚊", ["か"],
		[
			["蚊", "か", false]
		], -1
	],
	["[厄|やっ][介|かい]", "厄介", ["やっかい"],
		[
			["厄", "やっ", false],
			["介", "かい", false]
		], -1
	],
	["[霜|しも]", "霜", ["しも"],
		[
			["霜", "しも", false]
		], -1
	],
	["[修|しゅう][繕|ぜん]", "修繕", ["しゅうぜん"],
		[
			["修", "しゅう", false],
			["繕", "ぜん", false]
		], -1
	],
	["[栓|せん]", "栓", ["せん"],
		[
			["栓", "せん", false]
		], -1
	],
	["[凸凹|でこぼこ]", "凸凹", ["でこぼこ"],
		[
			["凸凹", "でこぼこ", false]
		], -1
	],
	["[凹|へこ]*む", "凹", ["へこ"],
		[
			["凹", "へこ", false]
		], -1
	],
	["[伺|うかが]*う", "伺", ["うかが"],
		[
			["伺", "うかが", false]
		], -1
	],
	["(楕|だ)[円|えん]", "楕円", ["だえん"],
		[
			["楕", "だ", true],
			["円", "えん", false]
		], "6473"
	],
	["[酌|く]*む", "酌", ["く"],
		[
			["酌", "く", false]
		], -1
	],
	["(醤|しょう)[油|ゆ]", "醤油", ["しょうゆ"],
		[
			["醤", "しょう", true],
			["油", "ゆ", false]
		], "6476"
	],
	["[括弧|かっこ]", "括弧", ["かっこ"],
		[
			["括弧", "かっこ", false]
		], -1
	],
	["[附属|ふぞく]", "附属", ["ふぞく"],
		[
			["附属", "ふぞく", false]
		], -1
	],
	["[但|ただ]し", "但し", ["ただし"],
		[
			["但", "ただ", false],
			["し", null, false]
		], -1
	],
	["[倣|なら]*う", "倣", ["なら"],
		[
			["倣", "なら", false]
		], -1
	],
	["{～}[箇|か][月|げつ]", "～箇月", ["かげつ"],
		[
			["～", null, false],
			["箇", "か", false],
			["月", "げつ", false]
		], -1
	],
	["[消|しょう][耗|もう]", "消耗", ["しょうもう"],
		[
			["消", "しょう", false],
			["耗", "もう", false]
		], -1
	],
	["[馬鹿|ばか]", "馬鹿", ["ばか"],
		[
			["馬鹿", "ばか", false]
		], -1
	],
	["[虎|とら]", "虎", ["とら"],
		[
			["虎", "とら", false]
		], -1
	],
	["[嵐|あらし]", "嵐", ["あらし"],
		[
			["嵐", "あらし", false]
		], -1
	],
	["[風|ふ][呂|ろ]", "風呂", ["ふろ"],
		[
			["風", "ふ", false],
			["呂", "ろ", false]
		], -1
	],
	["[風呂敷|ふろしき]", "風呂敷", ["ふろしき"],
		[
			["風呂敷", "ふろしき", false]
		], -1
	],
	["[瞳|ひとみ]", "瞳", ["ひとみ"],
		[
			["瞳", "ひとみ", false]
		], -1
	],
	["[湧|わ]*く", "湧", ["わ"],
		[
			["湧", "わ", false]
		], -1
	],
	["[虹|にじ]", "虹", ["にじ"],
		[
			["虹", "にじ", false]
		], -1
	],
	["[艶|つや]", "艶", ["つや"],
		[
			["艶", "つや", false]
		], -1
	],
	["[稀|まれ]", "稀", ["まれ"],
		[
			["稀", "まれ", false]
		], -1
	],
	["[憧|あこが]れ*る", "憧れ", ["あこがれ"],
		[
			["憧", "あこが", false],
			["れ", null, false]
		], -1
	],
	["[嬉|うれ]しい", "嬉しい", ["うれしい"],
		[
			["嬉", "うれ", false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[只|ただ]", "只", ["ただ"],
		[
			["只", "ただ", false]
		], -1
	],
	["[蒔|ま]*く", "蒔", ["ま"],
		[
			["蒔", "ま", false]
		], -1
	],
	["[御|ご][無|ぶ][沙汰|さた]", "御無沙汰", ["ごぶさた"],
		[
			["御", "ご", false],
			["無", "ぶ", false],
			["沙汰", "さた", false]
		], -1
	],
	["[無|ぶ][沙汰|さた]", "無沙汰", ["ぶさた"],
		[
			["無", "ぶ", false],
			["沙汰", "さた", false]
		], -1
	],
	["[一|いっ][旦|たん]", "一旦", ["いったん"],
		[
			["一", "いっ", false],
			["旦", "たん", false]
		], -1
	],
	["[狙|ねら]い", "狙い", ["ねらい"],
		[
			["狙", "ねら", false],
			["い", null, false]
		], -1
	],
	["[狙|ねら]*う", "狙", ["ねら"],
		[
			["狙", "ねら", false]
		], -1
	],
	["[尻|しり]", "尻", ["しり"],
		[
			["尻", "しり", false]
		], -1
	],
	["[釜|かま]", "釜", ["かま"],
		[
			["釜", "かま", false]
		], -1
	],
	["[脇|わき]", "脇", ["わき"],
		[
			["脇", "わき", false]
		], -1
	],
	["[鍋|なべ]", "鍋", ["なべ"],
		[
			["鍋", "なべ", false]
		], -1
	],
	["[瓦|かわら]", "瓦", ["かわら"],
		[
			["瓦", "かわら", false]
		], -1
	],
	["[誰|だれ]", "誰", ["だれ"],
		[
			["誰", "だれ", false]
		], -1
	],
	["[誰|だれ]か", "誰か", ["だれか"],
		[
			["誰", "だれ", false],
			["か", null, false]
		], -1
	],
	["[袖|そで]", "袖", ["そで"],
		[
			["袖", "そで", false]
		], -1
	],
	["[蘇|よみがえ]*5", "蘇", ["よみがえ"],
		[
			["蘇", "よみがえ", false]
		], -1
	],
	["[炒|い]*5", "炒", ["い"],
		[
			["炒", "い", false]
		], -1
	],
	["[手|て][頃|ごろ]", "手頃", ["てごろ"],
		[
			["手", "て", false],
			["頃", "ごろ", false]
		], -1
	],
	["[近|ちか][頃|ごろ]", "近頃", ["ちかごろ"],
		[
			["近", "ちか", false],
			["頃", "ごろ", false]
		], -1
	],
	["[頃|ころ]", "頃", ["ころ"],
		[
			["頃", "ころ", false]
		], -1
	],
	["[謎|なぞ]", "謎", ["なぞ"],
		[
			["謎", "なぞ", false]
		], -1
	],
	["[謎謎|なぞなぞ]", "謎謎", ["なぞなぞ"],
		[
			["謎謎", "なぞなぞ", false]
		], -1
	],
	["[爪|つめ]", "爪", ["つめ"],
		[
			["爪", "つめ", false]
		], -1
	],
	["[鍵|かぎ]", "鍵", ["かぎ"],
		[
			["鍵", "かぎ", false]
		], -1
	],
	["[枕|まくら]", "枕", ["まくら"],
		[
			["枕", "まくら", false]
		], -1
	],
	["[丼|どんぶり]", "丼", ["どんぶり"],
		[
			["丼", "どんぶり", false]
		], -1
	],
	["頬", "頬", ["ほお", "ほほ"],
		[], null
	],
	["[斬|き]*5", "斬", ["き"],
		[
			["斬", "き", false]
		], -1
	],
	["[尖|とが]*5", "尖", ["とが"],
		[
			["尖", "とが", false]
		], -1
	],
	["[餅|もち]", "餅", ["もち"],
		[
			["餅", "もち", false]
		], -1
	],
	["[箸|はし]", "箸", ["はし"],
		[
			["箸", "はし", false]
		], -1
	],
	["[芯|しん]", "芯", ["しん"],
		[
			["芯", "しん", false]
		], -1
	],
	["[匂|にお]い", "匂い", ["におい"],
		[
			["匂", "にお", false],
			["い", null, false]
		], -1
	],
	["[匂|にお]*う", "匂", ["にお"],
		[
			["匂", "にお", false]
		], -1
	],
	["[梯|はし][子|ご]", "梯子", ["はしご"],
		[
			["梯", "はし", false],
			["子", "ご", false]
		], -1
	],
	["[嘘|うそ]", "嘘", ["うそ"],
		[
			["嘘", "うそ", false]
		], -1
	],
	["[椅|い][子|す]", "椅子", ["いす"],
		[
			["椅", "い", false],
			["子", "す", false]
		], -1
	],
	["[叱|しか]*5", "叱", ["しか"],
		[
			["叱", "しか", false]
		], -1
	],
	["[櫛|くし]", "櫛", ["くし"],
		[
			["櫛", "くし", false]
		], -1
	],
	["[濡|ぬ]ら*す", "濡ら", ["ぬら"],
		[
			["濡", "ぬ", false],
			["ら", null, false]
		], -1
	],
	["[濡|ぬ]れ*る", "濡れ", ["ぬれ"],
		[
			["濡", "ぬ", false],
			["れ", null, false]
		], -1
	],
	["[餌|えさ]", "餌", ["えさ"],
		[
			["餌", "えさ", false]
		], -1
	],
	["[噂|うわさ]", "噂", ["うわさ"],
		[
			["噂", "うわさ", false]
		], -1
	],
	["[物|もの][凄|すご]い", "物凄い", ["ものすごい"],
		[
			["物", "もの", false],
			["凄", "すご", false],
			["い", null, false]
		], -1
	],
	["[叩|たた]*く", "叩", ["たた"],
		[
			["叩", "たた", false]
		], -1
	],
	["[膝|ひざ]", "膝", ["ひざ"],
		[
			["膝", "ひざ", false]
		], -1
	],
	["[呑|のん][気|き]", "呑気", ["のんき"],
		[
			["呑", "のん", false],
			["気", "き", false]
		], -1
	],
	["[麓|ふもと]", "麓", ["ふもと"],
		[
			["麓", "ふもと", false]
		], -1
	],
	["[稽|けい][古|こ]", "稽古", ["けいこ"],
		[
			["稽", "けい", false],
			["古", "こ", false]
		], -1
	],
	["[蹴|け]*5", "蹴", ["け"],
		[
			["蹴", "け", false]
		], -1
	],
	["[或|ある]", "或", ["ある"],
		[
			["或", "ある", false]
		], -1
	],
	["[剥|む]*く", "剥", ["む"],
		[
			["剥", "む", false]
		], -1
	],
	["[剥|はが]*す", "剥", ["はが"],
		[
			["剥", "はが", false]
		], -1
	],
	["[贅|ぜい][沢|たく]", "贅沢", ["ぜいたく"],
		[
			["贅", "ぜい", false],
			["沢", "たく", false]
		], -1
	],
	["[蓋|ふた]", "蓋", ["ふた"],
		[
			["蓋", "ふた", false]
		], -1
	],
	["[喉|のど]", "喉", ["のど"],
		[
			["喉", "のど", false]
		], -1
	],
	["[噛|か]*む", "噛", ["か"],
		[
			["噛", "か", false]
		], -1
	],
	["[撫|な]で*る", "撫で", ["なで"],
		[
			["撫", "な", false],
			["で", null, false]
		], -1
	],
	["[剃|そ]*5", "剃", ["そ"],
		[
			["剃", "そ", false]
		], -1
	],
	["[剃|かみ][刀|そり]", "剃刀", ["かみそり"],
		[
			["剃", "かみ", false],
			["刀", "そり", false]
		], -1
	],
	["[揃|そろ]*う", "揃", ["そろ"],
		[
			["揃", "そろ", false]
		], -1
	],
	["[揃|そろ]え*る", "揃え", ["そろえ"],
		[
			["揃", "そろ", false],
			["え", null, false]
		], -1
	],
	["[手|て][拭|ぬぐ]い", "手拭い", ["てぬぐい"],
		[
			["手", "て", false],
			["拭", "ぬぐ", false],
			["い", null, false]
		], -1
	],
	["[拭|ふ]*く", "拭", ["ふ"],
		[
			["拭", "ふ", false]
		], -1
	],
	["[洒落|しゃれ]", "洒落", ["しゃれ"],
		[
			["洒落", "しゃれ", false]
		], -1
	],
	["[貰|もら]*う", "貰", ["もら"],
		[
			["貰", "もら", false]
		], -1
	],
	["[儲|もう]か*5", "儲か", ["もうか"],
		[
			["儲", "もう", false],
			["か", null, false]
		], -1
	],
	["[儲|もう]け*る", "儲け", ["もうけ"],
		[
			["儲", "もう", false],
			["け", null, false]
		], -1
	],
	["[貼|は]*5", "貼", ["は"],
		[
			["貼", "は", false]
		], -1
	],
	["[溜|た]ま*5", "溜ま", ["たま"],
		[
			["溜", "た", false],
			["ま", null, false]
		], -1
	],
	["[溜|た]め*る", "溜め", ["ため"],
		[
			["溜", "た", false],
			["め", null, false]
		], -1
	],
	["[溜息|ためいき]", "溜息", ["ためいき"],
		[
			["溜息", "ためいき", false]
		], -1
	],
	["[諦|あきら]め*る", "諦め", ["あきらめ"],
		[
			["諦", "あきら", false],
			["め", null, false]
		], -1
	],
	["[煎|い]*5", "煎", ["い"],
		[
			["煎", "い", false]
		], -1
	],
	["[吊|つる]*す", "吊", ["つる"],
		[
			["吊", "つる", false]
		], -1
	],
	["[吊|つ]*5", "吊", ["つ"],
		[
			["吊", "つ", false]
		], -1
	],
	["[楕|だ][円|えん]", "楕円", ["だえん"],
		[
			["楕", "だ", false],
			["円", "えん", false]
		], -1
	],
	["[嗅|か]*ぐ", "嗅", ["か"],
		[
			["嗅", "か", false]
		], -1
	],
	["[詫|わ]び*る", "詫び", ["わび"],
		[
			["詫", "わ", false],
			["び", null, false]
		], -1
	],
	["[醤|しょう][油|ゆ]", "醤油", ["しょうゆ"],
		[
			["醤", "しょう", false],
			["油", "ゆ", false]
		], -1
	],
	["[縞|しま]", "縞", ["しま"],
		[
			["縞", "しま", false]
		], -1
	],
	["[釘|くぎ]", "釘", ["くぎ"],
		[
			["釘", "くぎ", false]
		], -1
	],
	["[便|びん](箋|せん)", "便箋", ["びんせん"],
		[
			["便", "びん", false],
			["箋", "せん", true]
		], "6496"
	],
	["(勿|もち)[論|ろん]", "勿論", ["もちろん"],
		[
			["勿", "もち", true],
			["論", "ろん", false]
		], "6500"
	],
	["[卑|ひ](怯|きょう)", "卑怯", ["ひきょう"],
		[
			["卑", "ひ", false],
			["怯", "きょう", true]
		], "6502"
	],
	["[味|み](噌|そ)", "味噌", ["みそ"],
		[
			["味", "み", false],
			["噌", "そ", true]
		], "6504"
	],
	["(宛|あて)[名|な]", "宛名", ["あてな"],
		[
			["宛", "あて", true],
			["名", "な", false]
		], "6516"
	],
	["(庖|ほう)[丁|ちょう]", "庖丁", ["ほうちょう"],
		[
			["庖", "ほう", true],
			["丁", "ちょう", false]
		], "6519"
	],
	["[御|ご](馳|ち)[走|そう]", "御馳走", ["ごちそう"],
		[
			["御", "ご", false],
			["馳", "ち", true],
			["走", "そう", false]
		], "6520"
	],
	["(煉|れん)[瓦|が]", "煉瓦", ["れんが"],
		[
			["煉", "れん", true],
			["瓦", "が", false]
		], "6537"
	],
	["[石|せっ](鹸|けん)", "石鹸", ["せっけん"],
		[
			["石", "せっ", false],
			["鹸", "けん", true]
		], "6541"
	],
	["[紙|かみ](屑|くず)", "紙屑", ["かみくず"],
		[
			["紙", "かみ", false],
			["屑", "くず", true]
		], "6548"
	],
	["[胡|こ](椒|しょう)", "胡椒", ["こしょう"],
		[
			["胡", "こ", false],
			["椒", "しょう", true]
		], "6559"
	],
	["[茶|ちゃ](碗|わん)", "茶碗", ["ちゃわん"],
		[
			["茶", "ちゃ", false],
			["碗", "わん", true]
		], "6560"
	],
	["(莫|ばく)[大|だい]", "莫大", ["ばくだい"],
		[
			["莫", "ばく", true],
			["大", "だい", false]
		], "6561"
	],
	["[親|しん](戚|せき)", "親戚", ["しんせき"],
		[
			["親", "しん", false],
			["戚", "せき", true]
		], "6566"
	],
	["[謙|けん](遜|そん)", "謙遜", ["けんそん"],
		[
			["謙", "けん", false],
			["遜", "そん", true]
		], "6568"
	],
	["(隙|すき)[間|ま]", "隙間", ["すきま"],
		[
			["隙", "すき", true],
			["間", "ま", false]
		], "6576"
	],
	["{～}[艘|そう]", "～艘", ["そう"],
		[
			["～", null, false],
			["艘", "そう", false]
		], -1
	],
	["[便|びん][箋|せん]", "便箋", ["びんせん"],
		[
			["便", "びん", false],
			["箋", "せん", false]
		], -1
	],
	["[俄|にわか]", "俄", ["にわか"],
		[
			["俄", "にわか", false]
		], -1
	],
	["[僅|わず]か", "僅か", ["わずか"],
		[
			["僅", "わず", false],
			["か", null, false]
		], -1
	],
	["[兎|うさぎ]", "兎", ["うさぎ"],
		[
			["兎", "うさぎ", false]
		], -1
	],
	["[勿|もち][論|ろん]", "勿論", ["もちろん"],
		[
			["勿", "もち", false],
			["論", "ろん", false]
		], -1
	],
	["[匙|さじ]", "匙", ["さじ"],
		[
			["匙", "さじ", false]
		], -1
	],
	["[卑|ひ][怯|きょう]", "卑怯", ["ひきょう"],
		[
			["卑", "ひ", false],
			["怯", "きょう", false]
		], -1
	],
	["[吠|ほ]え*る", "吠え", ["ほえ"],
		[
			["吠", "ほ", false],
			["え", null, false]
		], -1
	],
	["[味|み][噌|そ]", "味噌", ["みそ"],
		[
			["味", "み", false],
			["噌", "そ", false]
		], -1
	],
	["[咥|くわ]える", "咥える", ["くわえる"],
		[
			["咥", "くわ", false],
			["え", null, false],
			["る", null, false]
		], -1
	],
	["[咳|せき]", "咳", ["せき"],
		[
			["咳", "せき", false]
		], -1
	],
	["[喧嘩|けんか]", "喧嘩", ["けんか"],
		[
			["喧嘩", "けんか", false]
		], -1
	],
	["[囁|ささや]*く", "囁", ["ささや"],
		[
			["囁", "ささや", false]
		], -1
	],
	["[埃|ほこり]", "埃", ["ほこり"],
		[
			["埃", "ほこり", false]
		], -1
	],
	["[塞|ふさ]が*5", "塞が", ["ふさが"],
		[
			["塞", "ふさ", false],
			["が", null, false]
		], -1
	],
	["[塞|ふさ]*ぐ", "塞", ["ふさ"],
		[
			["塞", "ふさ", false]
		], -1
	],
	["[塵|ごみ]", "塵", ["ごみ"],
		[
			["塵", "ごみ", false]
		], -1
	],
	["[塵紙|ちりがみ]", "塵紙", ["ちりがみ"],
		[
			["塵紙", "ちりがみ", false]
		], -1
	],
	["[塵芥|ごみ]", "塵芥", ["ごみ"],
		[
			["塵芥", "ごみ", false]
		], -1
	],
	["[姪|めい]", "姪", ["めい"],
		[
			["姪", "めい", false]
		], -1
	],
	["[宛|あて][名|な]", "宛名", ["あてな"],
		[
			["宛", "あて", false],
			["名", "な", false]
		], -1
	],
	["[尤|もっと]も", "尤も", ["もっとも"],
		[
			["尤", "もっと", false],
			["も", null, false]
		], -1
	],
	["[屑|くず]", "屑", ["くず"],
		[
			["屑", "くず", false]
		], -1
	],
	["[庖|ほう][丁|ちょう]", "庖丁", ["ほうちょう"],
		[
			["庖", "ほう", false],
			["丁", "ちょう", false]
		], -1
	],
	["[御|ご][馳|ち][走|そう]", "御馳走", ["ごちそう"],
		[
			["御", "ご", false],
			["馳", "ち", false],
			["走", "そう", false]
		], -1
	],
	["[挨拶|あいさつ]", "挨拶", ["あいさつ"],
		[
			["挨拶", "あいさつ", false]
		], -1
	],
	["[捩|ねじ]*5", "捩", ["ねじ"],
		[
			["捩", "ねじ", false]
		], -1
	],
	["[捻|ひね]*5", "捻", ["ひね"],
		[
			["捻", "ひね", false]
		], -1
	],
	["[掏摸|すり]", "掏摸", ["すり"],
		[
			["掏摸", "すり", false]
		], -1
	],
	["[掴|つか]*む", "掴", ["つか"],
		[
			["掴", "つか", false]
		], -1
	],
	["[掻|か]*く", "掻", ["か"],
		[
			["掻", "か", false]
		], -1
	],
	["[揉|も]*む", "揉", ["も"],
		[
			["揉", "も", false]
		], -1
	],
	["[撒|ま]*く", "撒", ["ま"],
		[
			["撒", "ま", false]
		], -1
	],
	["[桁|けた]", "桁", ["けた"],
		[
			["桁", "けた", false]
		], -1
	],
	["[椀|わん]", "椀", ["わん"],
		[
			["椀", "わん", false]
		], -1
	],
	["[汲|く]*む", "汲", ["く"],
		[
			["汲", "く", false]
		], -1
	],
	["[溺|おぼ]れ*る", "溺れ", ["おぼれ"],
		[
			["溺", "おぼ", false],
			["れ", null, false]
		], -1
	],
	["[潰|つぶ]*す", "潰", ["つぶ"],
		[
			["潰", "つぶ", false]
		], -1
	],
	["[潰|つぶ]れ*る", "潰れ", ["つぶれ"],
		[
			["潰", "つぶ", false],
			["れ", null, false]
		], -1
	],
	["[濠|ほり]", "濠", ["ほり"],
		[
			["濠", "ほり", false]
		], -1
	],
	["[焚|た]*く", "焚", ["た"],
		[
			["焚", "た", false]
		], -1
	],
	["[煉|れん][瓦|が]", "煉瓦", ["れんが"],
		[
			["煉", "れん", false],
			["瓦", "が", false]
		], -1
	],
	["[狡|ずる]い", "狡い", ["ずるい"],
		[
			["狡", "ずる", false],
			["い", null, false]
		], -1
	],
	["[痩|や]せ*る", "痩せ", ["やせ"],
		[
			["痩", "や", false],
			["せ", null, false]
		], -1
	],
	["[睨|にら]*む", "睨", ["にら"],
		[
			["睨", "にら", false]
		], -1
	],
	["[石|せっ][鹸|けん]", "石鹸", ["せっけん"],
		[
			["石", "せっ", false],
			["鹸", "けん", false]
		], -1
	],
	["[碗|わん]", "碗", ["わん"],
		[
			["碗", "わん", false]
		], -1
	],
	["[秤|はかり]", "秤", ["はかり"],
		[
			["秤", "はかり", false]
		], -1
	],
	["[箒|ほうき]", "箒", ["ほうき"],
		[
			["箒", "ほうき", false]
		], -1
	],
	["[籠|かご]", "籠", ["かご"],
		[
			["籠", "かご", false]
		], -1
	],
	["[糊|のり]", "糊", ["のり"],
		[
			["糊", "のり", false]
		], -1
	],
	["[紐|ひも]", "紐", ["ひも"],
		[
			["紐", "ひも", false]
		], -1
	],
	["[紙|かみ][屑|くず]", "紙屑", ["かみくず"],
		[
			["紙", "かみ", false],
			["屑", "くず", false]
		], -1
	],
	["[繋|つな]がり", "繋がり", ["つながり"],
		[
			["繋", "つな", false],
			["が", null, false],
			["り", null, false]
		], -1
	],
	["[繋|つな]が*5", "繋が", ["つなが"],
		[
			["繋", "つな", false],
			["が", null, false]
		], -1
	],
	["[繋|つな]*ぐ", "繋", ["つな"],
		[
			["繋", "つな", false]
		], -1
	],
	["[繋|つな]げ*る", "繋げ", ["つなげ"],
		[
			["繋", "つな", false],
			["げ", null, false]
		], -1
	],
	["[纏|まと]ま*5", "纏ま", ["まとま"],
		[
			["纏", "まと", false],
			["ま", null, false]
		], -1
	],
	["[纏|まと]め*る", "纏め", ["まとめ"],
		[
			["纏", "まと", false],
			["め", null, false]
		], -1
	],
	["[罹|かか]*5", "罹", ["かか"],
		[
			["罹", "かか", false]
		], -1
	],
	["[羨|うらや]ましい", "羨ましい", ["うらやましい"],
		[
			["羨", "うらや", false],
			["ま", null, false],
			["し", null, false],
			["い", null, false]
		], -1
	],
	["[羨|うらや]*む", "羨", ["うらや"],
		[
			["羨", "うらや", false]
		], -1
	],
	["[肘|ひじ]", "肘", ["ひじ"],
		[
			["肘", "ひじ", false]
		], -1
	],
	["[胡|こ][椒|しょう]", "胡椒", ["こしょう"],
		[
			["胡", "こ", false],
			["椒", "しょう", false]
		], -1
	],
	["[茶|ちゃ][碗|わん]", "茶碗", ["ちゃわん"],
		[
			["茶", "ちゃ", false],
			["碗", "わん", false]
		], -1
	],
	["[莫|ばく][大|だい]", "莫大", ["ばくだい"],
		[
			["莫", "ばく", false],
			["大", "だい", false]
		], -1
	],
	["[蕎麦|そば]", "蕎麦", ["そば"],
		[
			["蕎麦", "そば", false]
		], -1
	],
	["[蝋燭|ろうそく]", "蝋燭", ["ろうそく"],
		[
			["蝋燭", "ろうそく", false]
		], -1
	],
	["[襖|ふすま]", "襖", ["ふすま"],
		[
			["襖", "ふすま", false]
		], -1
	],
	["[覗|のぞ]*く", "覗", ["のぞ"],
		[
			["覗", "のぞ", false]
		], -1
	],
	["[親|しん][戚|せき]", "親戚", ["しんせき"],
		[
			["親", "しん", false],
			["戚", "せき", false]
		], -1
	],
	["[諺|ことわざ]", "諺", ["ことわざ"],
		[
			["諺", "ことわざ", false]
		], -1
	],
	["[謙|けん][遜|そん]", "謙遜", ["けんそん"],
		[
			["謙", "けん", false],
			["遜", "そん", false]
		], -1
	],
	["[賑|にぎ]やか", "賑やか", ["にぎやか"],
		[
			["賑", "にぎ", false],
			["や", null, false],
			["か", null, false]
		], -1
	],
	["[轢|ひ]*く", "轢", ["ひ"],
		[
			["轢", "ひ", false]
		], -1
	],
	["[這|は]*う", "這", ["は"],
		[
			["這", "は", false]
		], -1
	],
	["[遡|さかのぼ]*5", "遡", ["さかのぼ"],
		[
			["遡", "さかのぼ", false]
		], -1
	],
	["[錆|さび]", "錆", ["さび"],
		[
			["錆", "さび", false]
		], -1
	],
	["[錆|さ]び*る", "錆び", ["さび"],
		[
			["錆", "さ", false],
			["び", null, false]
		], -1
	],
	["[隙|すき]", "隙", ["すき"],
		[
			["隙", "すき", false]
		], -1
	],
	["[隙|すき][間|ま]", "隙間", ["すきま"],
		[
			["隙", "すき", false],
			["間", "ま", false]
		], -1
	],
	["[雑巾|ぞうきん]", "雑巾", ["ぞうきん"],
		[
			["雑巾", "ぞうきん", false]
		], -1
	],
	["[飢饉|ききん]", "飢饉", ["ききん"],
		[
			["飢饉", "ききん", false]
		], -1
	],
	["[飴|あめ]", "飴", ["あめ"],
		[
			["飴", "あめ", false]
		], -1
	],
	["[馴|な]れ*る", "馴れ", ["なれ"],
		[
			["馴", "な", false],
			["れ", null, false]
		], -1
	],
	["[髭|ひげ]", "髭", ["ひげ"],
		[
			["髭", "ひげ", false]
		], -1
	],
	["[鼠|ねずみ]", "鼠", ["ねずみ"],
		[
			["鼠", "ねずみ", false]
		], -1
	]
];
