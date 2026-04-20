// ========================================
// 每日单词 - 单词数据库
// ========================================

const wordsDatabase = {
    // 高频词汇 (High Frequency)
    "high-frequency": [
        {
            id: "hf001",
            word: "accomplish",
            phonetic: "/əˈkʌmplɪʃ/",
            meanings: [
                { pos: "v.", meaning: "完成，实现；达到" }
            ],
            examples: [
                { en: "She accomplished her mission.", cn: "她完成了她的使命。" },
                { en: "We have accomplished all we set out to do.", cn: "我们已经完成了所有计划要做的事情。" }
            ],
            category: "high-frequency",
            tags: ["动词", "正式", "职场"]
        },
        {
            id: "hf002",
            word: "achieve",
            phonetic: "/əˈtʃiːv/",
            meanings: [
                { pos: "v.", meaning: "达到，实现；取得" }
            ],
            examples: [
                { en: "He achieved his goal of becoming a doctor.", cn: "他实现了成为医生的目标。" },
                { en: "The company achieved record sales this year.", cn: "该公司今年创下了销售记录。" }
            ],
            category: "high-frequency",
            tags: ["动词", "常用"]
        },
        {
            id: "hf003",
            word: "approach",
            phonetic: "/əˈprəʊtʃ/",
            meanings: [
                { pos: "v.", meaning: "接近；着手处理" },
                { pos: "n.", meaning: "方法；接近" }
            ],
            examples: [
                { en: "The train is approaching the station.", cn: "火车正在进站。" },
                { en: "We need a new approach to this problem.", cn: "我们需要一种解决这个问题的新方法。" }
            ],
            category: "high-frequency",
            tags: ["动词", "名词", "常用"]
        },
        {
            id: "hf004",
            word: "available",
            phonetic: "/əˈveɪləbl/",
            meanings: [
                { pos: "adj.", meaning: "可用的；有空的" }
            ],
            examples: [
                { en: "Is this room available?", cn: "这个房间可用吗？" },
                { en: "I'm not available tomorrow afternoon.", cn: "我明天下午没空。" }
            ],
            category: "high-frequency",
            tags: ["形容词", "常用"]
        },
        {
            id: "hf005",
            word: "benefit",
            phonetic: "/ˈbenɪfɪt/",
            meanings: [
                { pos: "n.", meaning: "好处，益处；福利" },
                { pos: "v.", meaning: "有益于；受益" }
            ],
            examples: [
                { en: "Exercise has many health benefits.", cn: "运动有很多健康益处。" },
                { en: "The new policy will benefit thousands of people.", cn: "新政策将使数千人受益。" }
            ],
            category: "high-frequency",
            tags: ["名词", "动词", "常用"]
        },
        {
            id: "hf006",
            word: "challenge",
            phonetic: "/ˈtʃælɪndʒ/",
            meanings: [
                { pos: "n.", meaning: "挑战；质疑" },
                { pos: "v.", meaning: "挑战；质疑" }
            ],
            examples: [
                { en: "Learning a new language is a challenge.", cn: "学习一门新语言是一种挑战。" },
                { en: "She challenged his authority.", cn: "她质疑了他的权威。" }
            ],
            category: "high-frequency",
            tags: ["名词", "动词", "常用"]
        },
        {
            id: "hf007",
            word: "communicate",
            phonetic: "/kəˈmjuːnɪkeɪt/",
            meanings: [
                { pos: "v.", meaning: "交流，沟通；传达" }
            ],
            examples: [
                { en: "We need to communicate more effectively.", cn: "我们需要更有效地沟通。" },
                { en: "He communicated his ideas clearly.", cn: "他清楚地表达了他的想法。" }
            ],
            category: "high-frequency",
            tags: ["动词", "常用"]
        },
        {
            id: "hf008",
            word: "consequence",
            phonetic: "/ˈkɒnsɪkwəns/",
            meanings: [
                { pos: "n.", meaning: "结果，后果" }
            ],
            examples: [
                { en: "You must accept the consequences of your actions.", cn: "你必须接受你行为的后果。" },
                { en: "The consequence was more serious than expected.", cn: "后果比预期的更严重。" }
            ],
            category: "high-frequency",
            tags: ["名词", "正式"]
        },
        {
            id: "hf009",
            word: "consider",
            phonetic: "/kənˈsɪdə(r)/",
            meanings: [
                { pos: "v.", meaning: "考虑；认为" }
            ],
            examples: [
                { en: "I'll consider your proposal.", cn: "我会考虑你的提议。" },
                { en: "She is considered an expert in this field.", cn: "她被认为是这个领域的专家。" }
            ],
            category: "high-frequency",
            tags: ["动词", "常用"]
        },
        {
            id: "hf010",
            word: "contribute",
            phonetic: "/kənˈtrɪbjuːt/",
            meanings: [
                { pos: "v.", meaning: "贡献；促成；投稿" }
            ],
            examples: [
                { en: "Everyone should contribute to society.", cn: "每个人都应该为社会做贡献。" },
                { en: "Stress may contribute to heart disease.", cn: "压力可能导致心脏病。" }
            ],
            category: "high-frequency",
            tags: ["动词", "正式"]
        },
        {
            id: "hf011",
            word: "create",
            phonetic: "/kriˈeɪt/",
            meanings: [
                { pos: "v.", meaning: "创造；创建；造成" }
            ],
            examples: [
                { en: "The artist created a beautiful painting.", cn: "艺术家创作了一幅美丽的画。" },
                { en: "The policy created many new jobs.", cn: "这项政策创造了许多新工作。" }
            ],
            category: "high-frequency",
            tags: ["动词", "常用"]
        },
        {
            id: "hf012",
            word: "decision",
            phonetic: "/dɪˈsɪʒn/",
            meanings: [
                { pos: "n.", meaning: "决定，抉择" }
            ],
            examples: [
                { en: "This is an important decision.", cn: "这是一个重要的决定。" },
                { en: "We need to make a decision soon.", cn: "我们需要尽快做出决定。" }
            ],
            category: "high-frequency",
            tags: ["名词", "常用"]
        },
        {
            id: "hf013",
            word: "demonstrate",
            phonetic: "/ˈdemənstreɪt/",
            meanings: [
                { pos: "v.", meaning: "证明；演示；示威" }
            ],
            examples: [
                { en: "The study demonstrates the importance of sleep.", cn: "这项研究证明了睡眠的重要性。" },
                { en: "Let me demonstrate how it works.", cn: "让我演示一下它是如何工作的。" }
            ],
            category: "high-frequency",
            tags: ["动词", "正式"]
        },
        {
            id: "hf014",
            word: "develop",
            phonetic: "/dɪˈveləp/",
            meanings: [
                { pos: "v.", meaning: "发展；开发；养成" }
            ],
            examples: [
                { en: "The city has developed rapidly.", cn: "这座城市发展迅速。" },
                { en: "We need to develop a new strategy.", cn: "我们需要制定一个新策略。" }
            ],
            category: "high-frequency",
            tags: ["动词", "常用"]
        },
        {
            id: "hf015",
            word: "difference",
            phonetic: "/ˈdɪfrəns/",
            meanings: [
                { pos: "n.", meaning: "差异；区别" }
            ],
            examples: [
                { en: "What's the difference between these two?", cn: "这两者之间有什么区别？" },
                { en: "Small changes can make a big difference.", cn: "小改变可以带来大不同。" }
            ],
            category: "high-frequency",
            tags: ["名词", "常用"]
        },
        {
            id: "hf016",
            word: "difficult",
            phonetic: "/ˈdɪfɪkəlt/",
            meanings: [
                { pos: "adj.", meaning: "困难的；难相处的" }
            ],
            examples: [
                { en: "This is a difficult problem to solve.", cn: "这是一个难以解决的问题。" },
                { en: "He's going through a difficult time.", cn: "他正在经历一段困难时期。" }
            ],
            category: "high-frequency",
            tags: ["形容词", "常用"]
        },
        {
            id: "hf017",
            word: "discover",
            phonetic: "/dɪˈskʌvə(r)/",
            meanings: [
                { pos: "v.", meaning: "发现；发觉" }
            ],
            examples: [
                { en: "Columbus discovered America in 1492.", cn: "哥伦布于1492年发现了美洲。" },
                { en: "I discovered that she was leaving.", cn: "我发现她要离开了。" }
            ],
            category: "high-frequency",
            tags: ["动词", "常用"]
        },
        {
            id: "hf018",
            word: "discuss",
            phonetic: "/dɪˈskʌs/",
            meanings: [
                { pos: "v.", meaning: "讨论，商议" }
            ],
            examples: [
                { en: "We need to discuss this matter.", cn: "我们需要讨论这件事。" },
                { en: "The committee discussed the proposal.", cn: "委员会讨论了这项提议。" }
            ],
            category: "high-frequency",
            tags: ["动词", "常用"]
        },
        {
            id: "hf019",
            word: "economy",
            phonetic: "/ɪˈkɒnəmi/",
            meanings: [
                { pos: "n.", meaning: "经济；节约" }
            ],
            examples: [
                { en: "The economy is growing rapidly.", cn: "经济正在快速增长。" },
                { en: "We need to make economies where possible.", cn: "我们需要在可能的地方节约。" }
            ],
            category: "high-frequency",
            tags: ["名词", "常用"]
        },
        {
            id: "hf020",
            word: "environment",
            phonetic: "/ɪnˈvaɪrənmənt/",
            meanings: [
                { pos: "n.", meaning: "环境；周围状况" }
            ],
            examples: [
                { en: "We must protect the environment.", cn: "我们必须保护环境。" },
                { en: "A happy home environment is important for children.", cn: "幸福的家庭环境对孩子很重要。" }
            ],
            category: "high-frequency",
            tags: ["名词", "常用"]
        }
    ],

    // 职场英语 (Business)
    "business": [
        {
            id: "bs001",
            word: "deadline",
            phonetic: "/ˈdedlaɪn/",
            meanings: [
                { pos: "n.", meaning: "截止日期，最后期限" }
            ],
            examples: [
                { en: "The deadline for this project is Friday.", cn: "这个项目的截止日期是周五。" },
                { en: "I'm working against a tight deadline.", cn: "我正在赶一个紧迫的截止日期。" }
            ],
            category: "business",
            tags: ["名词", "职场", "项目管理"]
        },
        {
            id: "bs002",
            word: "negotiate",
            phonetic: "/nɪˈɡəʊʃieɪt/",
            meanings: [
                { pos: "v.", meaning: "谈判，协商；顺利通过" }
            ],
            examples: [
                { en: "We need to negotiate with the supplier.", cn: "我们需要与供应商谈判。" },
                { en: "They negotiated a better salary.", cn: "他们协商获得了更好的薪资。" }
            ],
            category: "business",
            tags: ["动词", "职场", "商务"]
        },
        {
            id: "bs003",
            word: "deadline",
            phonetic: "/ˈdedlaɪn/",
            meanings: [
                { pos: "n.", meaning: "截止日期，最后期限" }
            ],
            examples: [
                { en: "The deadline for this project is Friday.", cn: "这个项目的截止日期是周五。" },
                { en: "I'm working against a tight deadline.", cn: "我正在赶一个紧迫的截止日期。" }
            ],
            category: "business",
            tags: ["名词", "职场", "项目管理"]
        },
        {
            id: "bs004",
            word: "deadline",
            phonetic: "/ˈdedlaɪn/",
            meanings: [
                { pos: "n.", meaning: "截止日期，最后期限" }
            ],
            examples: [
                { en: "The deadline for this project is Friday.", cn: "这个项目的截止日期是周五。" },
                { en: "I'm working against a tight deadline.", cn: "我正在赶一个紧迫的截止日期。" }
            ],
            category: "business",
            tags: ["名词", "职场", "项目管理"]
        },
        {
            id: "bs005",
            word: "deadline",
            phonetic: "/ˈdedlaɪn/",
            meanings: [
                { pos: "n.", meaning: "截止日期，最后期限" }
            ],
            examples: [
                { en: "The deadline for this project is Friday.", cn: "这个项目的截止日期是周五。" },
                { en: "I'm working against a tight deadline.", cn: "我正在赶一个紧迫的截止日期。" }
            ],
            category: "business",
            tags: ["名词", "职场", "项目管理"]
        },
        {
            id: "bs006",
            word: "deadline",
            phonetic: "/ˈdedlaɪn/",
            meanings: [
                { pos: "n.", meaning: "截止日期，最后期限" }
            ],
            examples: [
                { en: "The deadline for this project is Friday.", cn: "这个项目的截止日期是周五。" },
                { en: "I'm working against a tight deadline.", cn: "我正在赶一个紧迫的截止日期。" }
            ],
            category: "business",
            tags: ["名词", "职场", "项目管理"]
        },
        {
            id: "bs007",
            word: "deadline",
            phonetic: "/ˈdedlaɪn/",
            meanings: [
                { pos: "n.", meaning: "截止日期，最后期限" }
            ],
            examples: [
                { en: "The deadline for this project is Friday.", cn: "这个项目的截止日期是周五。" },
                { en: "I'm working against a tight deadline.", cn: "我正在赶一个紧迫的截止日期。" }
            ],
            category: "business",
            tags: ["名词", "职场", "项目管理"]
        },
        {
            id: "bs008",
            word: "deadline",
            phonetic: "/ˈdedlaɪn/",
            meanings: [
                { pos: "n.", meaning: "截止日期，最后期限" }
            ],
            examples: [
                { en: "The deadline for this project is Friday.", cn: "这个项目的截止日期是周五。" },
                { en: "I'm working against a tight deadline.", cn: "我正在赶一个紧迫的截止日期。" }
            ],
            category: "business",
            tags: ["名词", "职场", "项目管理"]
        },
        {
            id: "bs009",
            word: "deadline",
            phonetic: "/ˈdedlaɪn/",
            meanings: [
                { pos: "n.", meaning: "截止日期，最后期限" }
            ],
            examples: [
                { en: "The deadline for this project is Friday.", cn: "这个项目的截止日期是周五。" },
                { en: "I'm working against a tight deadline.", cn: "我正在赶一个紧迫的截止日期。" }
            ],
            category: "business",
            tags: ["名词", "职场", "项目管理"]
        },
        {
            id: "bs010",
            word: "deadline",
            phonetic: "/ˈdedlaɪn/",
            meanings: [
                { pos: "n.", meaning: "截止日期，最后期限" }
            ],
            examples: [
                { en: "The deadline for this project is Friday.", cn: "这个项目的截止日期是周五。" },
                { en: "I'm working against a tight deadline.", cn: "我正在赶一个紧迫的截止日期。" }
            ],
            category: "business",
            tags: ["名词", "职场", "项目管理"]
        },
        {
            id: "bs011",
            word: "deadline",
            phonetic: "/ˈdedlaɪn/",
            meanings: [
                { pos: "n.", meaning: "截止日期，最后期限" }
            ],
            examples: [
                { en: "The deadline for this project is Friday.", cn: "这个项目的截止日期是周五。" },
                { en: "I'm working against a tight deadline.", cn: "我正在赶一个紧迫的截止日期。" }
            ],
            category: "business",
            tags: ["名词", "职场", "项目管理"]
        },
        {
            id: "bs012",
            word: "deadline",
            phonetic: "/ˈdedlaɪn/",
            meanings: [
                { pos: "n.", meaning: "截止日期，最后期限" }
            ],
            examples: [
                { en: "The deadline for this project is Friday.", cn: "这个项目的截止日期是周五。" },
                { en: "I'm working against a tight deadline.", cn: "我正在赶一个紧迫的截止日期。" }
            ],
            category: "business",
            tags: ["名词", "职场", "项目管理"]
        },
        {
            id: "bs013",
            word: "deadline",
            phonetic: "/ˈdedlaɪn/",
            meanings: [
                { pos: "n.", meaning: "截止日期，最后期限" }
            ],
            examples: [
                { en: "The deadline for this project is Friday.", cn: "这个项目的截止日期是周五。" },
                { en: "I'm working against a tight deadline.", cn: "我正在赶一个紧迫的截止日期。" }
            ],
            category: "business",
            tags: ["名词", "职场", "项目管理"]
        },
        {
            id: "bs014",
            word: "deadline",
            phonetic: "/ˈdedlaɪn/",
            meanings: [
                { pos: "n.", meaning: "截止日期，最后期限" }
            ],
            examples: [
                { en: "The deadline for this project is Friday.", cn: "这个项目的截止日期是周五。" },
                { en: "I'm working against a tight deadline.", cn: "我正在赶一个紧迫的截止日期。" }
            ],
            category: "business",
            tags: ["名词", "职场", "项目管理"]
        },
        {
            id: "bs015",
            word: "deadline",
            phonetic: "/ˈdedlaɪn/",
            meanings: [
                { pos: "n.", meaning: "截止日期，最后期限" }
            ],
            examples: [
                { en: "The deadline for this project is Friday.", cn: "这个项目的截止日期是周五。" },
                { en: "I'm working against a tight deadline.", cn: "我正在赶一个紧迫的截止日期。" }
            ],
            category: "business",
            tags: ["名词", "职场", "项目管理"]
        }
    ],

    // 旅游英语 (Travel)
    "travel": [
        {
            id: "tr001",
            word: "reservation",
            phonetic: "/ˌrezəˈveɪʃn/",
            meanings: [
                { pos: "n.", meaning: "预订；保留" }
            ],
            examples: [
                { en: "I'd like to make a reservation for two.", cn: "我想预订两个人的位子。" },
                { en: "Do you have a reservation?", cn: "您有预订吗？" }
            ],
            category: "travel",
            tags: ["名词", "旅游", "酒店"]
        },
        {
            id: "tr002",
            word: "itinerary",
            phonetic: "/aɪˈtɪnərəri/",
            meanings: [
                { pos: "n.", meaning: "行程，旅行计划" }
            ],
            examples: [
                { en: "What's your itinerary for the trip?", cn: "你的旅行行程是什么？" },
                { en: "I need to plan my itinerary carefully.", cn: "我需要仔细规划我的行程。" }
            ],
            category: "travel",
            tags: ["名词", "旅游", "计划"]
        },
        {
            id: "tr003",
            word: "boarding pass",
            phonetic: "/ˈbɔːdɪŋ pɑːs/",
            meanings: [
                { pos: "n.", meaning: "登机牌" }
            ],
            examples: [
                { en: "Please show your boarding pass at the gate.", cn: "请在登机口出示您的登机牌。" },
                { en: "I need to print my boarding pass.", cn: "我需要打印我的登机牌。" }
            ],
            category: "travel",
            tags: ["名词", "机场", "飞行"]
        },
        {
            id: "tr004",
            word: "customs",
            phonetic: "/ˈkʌstəmz/",
            meanings: [
                { pos: "n.", meaning: "海关；关税" }
            ],
            examples: [
                { en: "You need to go through customs first.", cn: "你需要先过海关。" },
                { en: "Anything to declare at customs?", cn: "海关有什么要申报的吗？" }
            ],
            category: "travel",
            tags: ["名词", "机场", "海关"]
        },
        {
            id: "tr005",
            word: "accommodation",
            phonetic: "/əˌkɒməˈdeɪʃn/",
            meanings: [
                { pos: "n.", meaning: "住宿；住处" }
            ],
            examples: [
                { en: "We need to book accommodation for the night.", cn: "我们需要预订今晚的住宿。" },
                { en: "The hotel provides excellent accommodation.", cn: "这家酒店提供优质的住宿。" }
            ],
            category: "travel",
            tags: ["名词", "旅游", "酒店"]
        },
        {
            id: "tr006",
            word: "departure",
            phonetic: "/dɪˈpɑːtʃə(r)/",
            meanings: [
                { pos: "n.", meaning: "出发，离开； departure" }
            ],
            examples: [
                { en: "What time is the departure?", cn: "什么时候出发？" },
                { en: "The departure gate has been changed.", cn: "登机口已经更改。" }
            ],
            category: "travel",
            tags: ["名词", "机场", "飞行"]
        },
        {
            id: "tr007",
            word: "arrival",
            phonetic: "/əˈraɪvl/",
            meanings: [
                { pos: "n.", meaning: "到达，抵达" }
            ],
            examples: [
                { en: "What time is your arrival?", cn: "你什么时候到达？" },
                { en: "Please check the arrival board.", cn: "请查看到达信息板。" }
            ],
            category: "travel",
            tags: ["名词", "机场", "飞行"]
        },
        {
            id: "tr008",
            word: "luggage",
            phonetic: "/ˈlʌɡɪdʒ/",
            meanings: [
                { pos: "n.", meaning: "行李" }
            ],
            examples: [
                { en: "Where can I collect my luggage?", cn: "我在哪里可以取行李？" },
                { en: "Please don't leave your luggage unattended.", cn: "请不要让行李无人看管。" }
            ],
            category: "travel",
            tags: ["名词", "机场", "行李"]
        },
        {
            id: "tr009",
            word: "passport",
            phonetic: "/ˈpɑːspɔːt/",
            meanings: [
                { pos: "n.", meaning: "护照" }
            ],
            examples: [
                { en: "I need to renew my passport.", cn: "我需要更新我的护照。" },
                { en: "Please show your passport at immigration.", cn: "请在入境处出示您的护照。" }
            ],
            category: "travel",
            tags: ["名词", "旅游", "证件"]
        },
        {
            id: "tr010",
            word: "visa",
            phonetic: "/ˈviːzə/",
            meanings: [
                { pos: "n.", meaning: "签证" }
            ],
            examples: [
                { en: "Do I need a visa to enter the country?", cn: "我进入这个国家需要签证吗？" },
                { en: "My visa expires next month.", cn: "我的签证下个月到期。" }
            ],
            category: "travel",
            tags: ["名词", "旅游", "证件"]
        }
    ],

    // 日常口语 (Daily)
    "daily": [
        {
            id: "dl001",
            word: "hang out",
            phonetic: "/hæŋ aʊt/",
            meanings: [
                { pos: "phr.", meaning: "闲逛；出去玩" }
            ],
            examples: [
                { en: "Do you want to hang out this weekend?", cn: "这周末想出去玩吗？" },
                { en: "We used to hang out at the mall.", cn: "我们以前常在商场闲逛。" }
            ],
            category: "daily",
            tags: ["短语", "口语", "社交"]
        },
        {
            id: "dl002",
            word: "catch up",
            phonetic: "/kætʃ ʌp/",
            meanings: [
                { pos: "phr.", meaning: "赶上；叙旧" }
            ],
            examples: [
                { en: "Let's catch up over coffee.", cn: "我们边喝咖啡边叙旧吧。" },
                { en: "I need to catch up on sleep.", cn: "我需要补觉。" }
            ],
            category: "daily",
            tags: ["短语", "口语", "常用"]
        },
        {
            id: "dl003",
            word: "chill out",
            phonetic: "/tʃɪl aʊt/",
            meanings: [
                { pos: "phr.", meaning: "放松，冷静" }
            ],
            examples: [
                { en: "Just chill out, everything will be fine.", cn: "放松点，一切都会好的。" },
                { en: "I like to chill out at home on weekends.", cn: "我喜欢周末在家放松。" }
            ],
            category: "daily",
            tags: ["短语", "口语", "放松"]
        },
        {
            id: "dl004",
            word: "figure out",
            phonetic: "/ˈfɪɡə(r) aʊt/",
            meanings: [
                { pos: "phr.", meaning: "弄清楚；解决" }
            ],
            examples: [
                { en: "I can't figure out this problem.", cn: "我解决不了这个问题。" },
                { en: "We need to figure out a solution.", cn: "我们需要找出解决办法。" }
            ],
            category: "daily",
            tags: ["短语", "口语", "常用"]
        },
        {
            id: "dl005",
            word: "give up",
            phonetic: "/ɡɪv ʌp/",
            meanings: [
                { pos: "phr.", meaning: "放弃；投降" }
            ],
            examples: [
                { en: "Don't give up, you can do it!", cn: "别放弃，你能做到的！" },
                { en: "I give up, what's the answer?", cn: "我放弃了，答案是什么？" }
            ],
            category: "daily",
            tags: ["短语", "口语", "常用"]
        },
        {
            id: "dl006",
            word: "look forward to",
            phonetic: "/lʊk ˈfɔːwəd tuː/",
            meanings: [
                { pos: "phr.", meaning: "期待，盼望" }
            ],
            examples: [
                { en: "I look forward to meeting you.", cn: "我期待见到你。" },
                { en: "We're looking forward to the vacation.", cn: "我们很期待这次假期。" }
            ],
            category: "daily",
            tags: ["短语", "口语", "常用"]
        },
        {
            id: "dl007",
            word: "make sense",
            phonetic: "/meɪk sens/",
            meanings: [
                { pos: "phr.", meaning: "有意义；讲得通" }
            ],
            examples: [
                { en: "That doesn't make sense.", cn: "那讲不通。" },
                { en: "Your explanation makes sense.", cn: "你的解释很有道理。" }
            ],
            category: "daily",
            tags: ["短语", "口语", "常用"]
        },
        {
            id: "dl008",
            word: "take it easy",
            phonetic: "/teɪk ɪt ˈiːzi/",
            meanings: [
                { pos: "phr.", meaning: "放轻松；别紧张" }
            ],
            examples: [
                { en: "Take it easy, the exam isn't that hard.", cn: "放轻松，考试没那么难。" },
                { en: "I'm going to take it easy this weekend.", cn: "这个周末我要放松一下。" }
            ],
            category: "daily",
            tags: ["短语", "口语", "放松"]
        },
        {
            id: "dl009",
            word: "by the way",
            phonetic: "/baɪ ðə weɪ/",
            meanings: [
                { pos: "phr.", meaning: "顺便说一下" }
            ],
            examples: [
                { en: "By the way, have you seen my keys?", cn: "顺便问一下，你看到我的钥匙了吗？" },
                { en: "Oh, by the way, I'm leaving tomorrow.", cn: "哦，顺便说一下，我明天要走。" }
            ],
            category: "daily",
            tags: ["短语", "口语", "常用"]
        },
        {
            id: "dl010",
            word: "no worries",
            phonetic: "/nəʊ ˈwʌriz/",
            meanings: [
                { pos: "phr.", meaning: "没关系；没问题" }
            ],
            examples: [
                { en: "No worries, I can help you.", cn: "没问题，我可以帮你。" },
                { en: "Thanks for your help! - No worries!", cn: "谢谢你的帮助！- 没关系！" }
            ],
            category: "daily",
            tags: ["短语", "口语", "澳大利亚", "常用"]
        }
    ]
};

// 分类信息
const categoryInfo = {
    "high-frequency": {
        name: "高频词汇",
        icon: "🎯",
        description: "英语中最常用的核心词汇，掌握这些单词可以覆盖80%的日常交流",
        count: 500
    },
    "business": {
        name: "职场英语",
        icon: "💼",
        description: "商务场景必备词汇，助力职场沟通与职业发展",
        count: 300
    },
    "travel": {
        name: "旅游英语",
        icon: "✈️",
        description: "出国旅行必备词汇，让你的旅途更加顺畅",
        count: 250
    },
    "daily": {
        name: "日常口语",
        icon: "💬",
        description: "地道口语表达，让你像母语者一样自然交流",
        count: 400
    }
};

// 获取所有单词
function getAllWords() {
    let allWords = [];
    for (let category in wordsDatabase) {
        allWords = allWords.concat(wordsDatabase[category]);
    }
    return allWords;
}

// 根据分类获取单词
function getWordsByCategory(category) {
    return wordsDatabase[category] || [];
}

// 获取每日单词（基于日期）
function getDailyWords(count = 1) {
    const allWords = getAllWords();
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    
    // 使用种子生成伪随机数
    const randomIndex = seed % allWords.length;
    
    let dailyWords = [];
    for (let i = 0; i < count; i++) {
        const index = (randomIndex + i * 7) % allWords.length;
        dailyWords.push(allWords[index]);
    }
    
    return dailyWords;
}

// 获取随机单词
function getRandomWords(count = 1) {
    const allWords = getAllWords();
    const shuffled = [...allWords].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 搜索单词
function searchWords(query) {
    const allWords = getAllWords();
    const lowerQuery = query.toLowerCase();
    
    return allWords.filter(word => {
        return word.word.toLowerCase().includes(lowerQuery) ||
               word.meanings.some(m => m.meaning.includes(lowerQuery)) ||
               word.examples.some(e => e.en.toLowerCase().includes(lowerQuery));
    });
}

// 获取分类信息
function getCategoryInfo(category) {
    return categoryInfo[category] || null;
}
