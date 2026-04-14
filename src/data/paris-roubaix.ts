export const PRIMARY_LOCALE = "zh";

export const siteConfig = {
  name: "Paris-Roubaix.lol",
  shortName: "Paris-Roubaix",
  domain: "paris-roubaix.lol",
  title: "Paris-Roubaix 2026 中文战报、路线与历史速览",
  description:
    "用中文追踪 Paris-Roubaix 2026 的冠军结果、路线变化、关键石板路段、女子同日赛制与经典历史。",
  keywords: [
    "Paris-Roubaix",
    "巴黎鲁贝",
    "巴黎-鲁贝",
    "2026 Paris-Roubaix",
    "Paris-Roubaix 中文",
    "Wout van Aert Paris-Roubaix",
    "Franziska Koch Paris-Roubaix Femmes",
    "Paris-Roubaix 路线",
    "Paris-Roubaix 战报",
  ],
  updatedAt: "2026-04-14",
  heroImage: "/images/paris-roubaix/hero-cobbles.webp",
  velodromeImage: "/images/paris-roubaix/velodrome.webp",
  logo: "/brand/paris-roubaix-logo.svg",
  logoMark: "/brand/paris-roubaix-mark.svg",
  ogImage: "/brand/paris-roubaix-og.png",
  faviconSvg: "/favicon.svg",
  faviconPng: "/favicon.png",
} as const;

export const siteNav = [
  {
    label: "最新战报",
    href: "/paris-roubaix-2026-results",
  },
  {
    label: "路线与时间",
    href: "/paris-roubaix-route-guide",
  },
  {
    label: "经典历史",
    href: "/paris-roubaix-history",
  },
] as const;

export const heroHighlights = [
  "男子组：Wout van Aert 在 2026 年 4 月 12 日完成生涯首座鲁贝冠军。",
  "女子组：Franziska Koch 同日在鲁贝赛车场以不到一个车轮优势险胜。",
  "官方赛道：男子 258.3 公里、30 段石板；女子首次与男子同日完成。",
] as const;

export const quickFacts = [
  {
    label: "男子冠军",
    value: "Wout van Aert",
    note: "2026-04-12，首次赢下 Paris-Roubaix",
  },
  {
    label: "女子冠军",
    value: "Franziska Koch",
    note: "同日完赛，终点冲刺险胜 Marianne Vos",
  },
  {
    label: "男子赛道",
    value: "258.3 km / 30 段石板",
    note: "总石板长度 54.8 km",
  },
  {
    label: "赛事节奏",
    value: "48.91 km/h",
    note: "Cyclingnews 报道为历届最快男子版",
  },
] as const;

export const leadStory = {
  badge: "更新至 2026 年 4 月 14 日",
  title: "巴黎-鲁贝不是一场普通古典赛，它是速度、耐力、运气和石板路共谋的淘汰赛。",
  summary:
    "2026 年的 Paris-Roubaix 把这项赛事最迷人的矛盾全部放大了：男子组在史上最快均速里拼到赛车场冲刺，女子组第一次与男子同日举行并把鲁贝夜色留给了最后一圈。这个站点把最近两天最值得看的信息压缩成中文速览，方便你快速了解谁赢了、为什么赢、以及下一次看比赛该盯哪些石板区。",
} as const;

export const latestNews = [
  {
    title: "Wout van Aert 赢下“生涯之战”",
    source: "Paris-Roubaix 官方",
    date: "2026-04-12",
    href: "https://www.paris-roubaix.fr/en/news/2026/stage-1/wout-van-aert-claims-the-victory-of-a-lifetime-in-the-race-of-the-century/5047",
    summary:
      "官方赛后稿确认，Van Aert 在 258.3 公里的男子组终局冲刺中击败 Tadej Pogacar，Jasper Stuyven 获得第三。这也是 Visma-Lease a Bike 男子队自 1984 年以来首次在鲁贝夺冠。",
  },
  {
    title: "2026 男子组被写进“史上最快”",
    source: "Cyclingnews",
    date: "2026-04-13",
    href: "https://www.cyclingnews.com/pro-cycling/racing/the-fastest-paris-roubaix-in-history-wout-van-aert-and-tadej-pogacar-set-blistering-new-highest-average-speed-of-48-91kph-smashing-previous-record/",
    summary:
      "Cyclingnews 统计本届男子组均速达到 48.91 km/h，刷新赛事历史最高平均速度。对观赛者来说，这意味着早段控场、补给和机械故障的惩罚被进一步放大。",
  },
  {
    title: "Franziska Koch 为女子组写下新名字",
    source: "Paris-Roubaix Femmes 官方",
    date: "2026-04-12",
    href: "https://www.paris-roubaix-femmes.fr/en/news/2026/stage-1/sensational-koch-beats-vos-and-pfp-for-roubaix-glory/997",
    summary:
      "女子组在鲁贝赛车场收官，Koch 以极小优势力压 Marianne Vos，卫冕冠军 Pauline Ferrand-Prevot 获得第三。官方总结强调，这是六届女子赛里第六位不同国籍的冠军。",
  },
] as const;

export const watchGuide = [
  {
    title: "先看 Arenberg，再等 Mons-en-Pevele",
    body:
      "Arenberg 林道仍然是最著名的五颗星路段，但 2026 赛道把前四段石板压得更紧，进入 Arenberg 之前的站位比往年更重要。",
  },
  {
    title: "Carrefour de l'Arbre 往往决定谁能带优势进场",
    body:
      "如果最后一个五颗星路段后仍然还有两到三人集团，胜负就很容易留到赛车场；2026 男子组正是这种剧本。",
  },
  {
    title: "女子同日举行，赛程密度更高",
    body:
      "2026 是女子赛首次与男子赛在同一天完成，官方赛前文件把这视为赛事结构级变化，不再只是“前一天的前菜”。",
  },
] as const;

export const routeGuide = {
  title: "路线与时间",
  intro:
    "2026 版 Paris-Roubaix 的重点不是“又多了几百米”，而是石板密度和关键区段前置。男子组总长 258.3 公里、30 段石板共 54.8 公里；女子组首次同日举行，官方赛前稿强调新增 Haveluy 等早段石板区，把比赛更早推入筛选模式。",
  milestones: [
    {
      label: "男子组发车",
      value: "Compiegne -> Roubaix",
      note: "官方 stage page：258.3 km",
    },
    {
      label: "男子关键三段",
      value: "Arenberg / Mons-en-Pevele / Carrefour de l'Arbre",
      note: "均为五颗星难度",
    },
    {
      label: "女子组变化",
      value: "新增 Haveluy 等早段石板区",
      note: "首次与男子赛同日收官",
    },
    {
      label: "终点",
      value: "Andre-Petrieux Velodrome",
      note: "冲刺、圈线、线路选择都可能改写结果",
    },
  ],
  sectors: [
    {
      title: "Trouee d'Arenberg",
      body:
        "2026 官方赛道稿把 Arenberg 放在约 163 公里处，仍是最大名气与最大风险并存的地段。真正可怕的不是它单独有多难，而是之前连续石板区已经让主集团次序高度混乱。",
    },
    {
      title: "Mons-en-Pevele",
      body:
        "这是把“还能跟住”和“已经开始透支”彻底分开的地方。你在这里看到的，不只是腿力差距，还有补给、站位和机械运气累积后的总账。",
    },
    {
      title: "Carrefour de l'Arbre",
      body:
        "最后的五颗星判官。若这里单飞成功，赛车场更多只是仪式；若仍是小集团，Roubaix 椭圆场的进线角度和最后半圈判断就可能决定冠军。",
    },
  ],
} as const;

export const resultsGuide = {
  title: "最新战报",
  intro:
    "2026 年 4 月 12 日，巴黎-鲁贝交出两场完全配得上“北方地狱”名号的收官。男子组的主叙事是 Van Aert 与 Pogacar 在石板、爆胎与换车压力下把悬念留到赛车场；女子组则是 Koch、Vos 与 Ferrand-Prevot 把终局拉成一场极窄边际的技术冲刺。",
  men: [
    "Wout van Aert 在官方赛后稿中被定义为“赢下职业生涯最重要的一场胜利”。",
    "官方前三为：Wout van Aert、Tadej Pogacar、Jasper Stuyven。",
    "Cyclingnews 赛后把本届男子组均速写成 48.91 km/h，称其为赛事史上最快版本。",
  ],
  women: [
    "Franziska Koch 在女子组官方赛报中以不到一个车轮优势击败 Marianne Vos。",
    "Pauline Ferrand-Prevot 作为卫冕冠军获得第三，终点差距为 6 秒。",
    "女子官方站点明确指出，六届赛事已出现六位不同国籍冠军，这让 Roubaix Femmes 的冠军谱系非常分散。",
  ],
  whyItMatters: [
    {
      title: "Van Aert 的意义不只是首冠",
      body:
        "他终于把“最强无冠者之一”的长期叙事撕开口子，而且是在 Pogacar 这个最能制造历史对照的对手面前完成。",
    },
    {
      title: "女子同日举行改变了赛事层级",
      body:
        "女子赛不再作为前一日单独预热，而是被放进同一日的赛事高潮里。这对传播、转播和观众注意力都是结构性加成。",
    },
  ],
} as const;

export const historyGuide = {
  title: "经典历史",
  intro:
    "Paris-Roubaix 自 1896 年创办起就不是单纯的“长距离一日赛”。官方历史内容反复强调它的两个标签：Queen of the Classics 与 Hell of the North。前者说的是地位，后者说的是代价。",
  beats: [
    {
      title: "为什么叫北方地狱",
      body:
        "这项赛事最著名的并不是爬坡，而是石板路。官方合作伙伴页甚至直接写明：超过 250 公里的路程、近 30 段石板，构成了这项赛事最 brutal 的识别度。",
    },
    {
      title: "Roubaix 赛车场为什么重要",
      body:
        "很多古典赛的终点线只是终点线，但 Roubaix 的赛车场是剧情装置。单飞者会在这里完成加冕，小集团则必须在进入椭圆场的线路选择中重新算一次账。",
    },
    {
      title: "为什么它总能制造传奇",
      body:
        "官方历史文章里有一句判断很准：在 Paris-Roubaix，最强者当然常常能赢，但勇敢、站位、机械运气和混乱中的决断同样决定谁会被写进石板奖杯。",
    },
  ],
} as const;

export const faqItems = [
  {
    question: "Paris-Roubaix 2026 男子组冠军是谁？",
    answer:
      "男子组冠军是 Wout van Aert。官方赛后稿显示，他在鲁贝赛车场的终点冲刺中击败了 Tadej Pogacar。",
  },
  {
    question: "Paris-Roubaix Femmes 2026 的冠军是谁？",
    answer:
      "女子组冠军是 Franziska Koch。官方女子站点写明，她在终点前以不到一个车轮优势击败 Marianne Vos。",
  },
  {
    question: "为什么 Paris-Roubaix 被叫作“北方地狱”？",
    answer:
      "因为这项比赛最核心的难度来自长距离石板路、机械故障风险、激烈站位和连续颠簸对身体与器材的双重消耗。",
  },
  {
    question: "2026 赛道最大的变化是什么？",
    answer:
      "男子组维持 30 段石板，但前段石板更密集；女子组首次与男子组同日举行，并加入了 Haveluy 等更早出现的石板区，让比赛更早进入高压筛选。",
  },
] as const;

export const sourceLinks = [
  {
    label: "Paris-Roubaix 官方战报：Wout van Aert",
    href: "https://www.paris-roubaix.fr/en/news/2026/stage-1/wout-van-aert-claims-the-victory-of-a-lifetime-in-the-race-of-the-century/5047",
  },
  {
    label: "Paris-Roubaix 官方路线：54.8 km of cobblestones",
    href: "https://www.paris-roubaix.fr/en/news/2026/54-8-km-of-cobblestones-the-ratings-game/4775",
  },
  {
    label: "Paris-Roubaix 官方路线：Route and team selection",
    href: "https://www.paris-roubaix.fr/en/news/2026/routes-and-team-selection/4762",
  },
  {
    label: "Paris-Roubaix stage page",
    href: "https://www.paris-roubaix.fr/en/stage-1",
  },
  {
    label: "Paris-Roubaix Femmes 官方战报：Koch beats Vos and PFP",
    href: "https://www.paris-roubaix-femmes.fr/en/news/2026/stage-1/sensational-koch-beats-vos-and-pfp-for-roubaix-glory/997",
  },
  {
    label: "Paris-Roubaix Femmes 官方采访：Franziska Koch",
    href: "https://www.paris-roubaix-femmes.fr/en/news/2026/stage-1/franziska-koch-fdj-united-suez-its-like-a-dream/1001",
  },
  {
    label: "Cyclingnews：史上最快 Paris-Roubaix",
    href: "https://www.cyclingnews.com/pro-cycling/racing/the-fastest-paris-roubaix-in-history-wout-van-aert-and-tadej-pogacar-set-blistering-new-highest-average-speed-of-48-91kph-smashing-previous-record/",
  },
  {
    label: "Wikimedia Commons：2012 Paris-Roubaix, Peloton on Cobbles",
    href: "https://commons.wikimedia.org/wiki/File:2012_Paris-Roubaix,_Peloton_on_Cobbles_(7057784375).jpg",
  },
  {
    label: "Wikimedia Commons：Velodrome de Roubaix 02",
    href: "https://commons.wikimedia.org/wiki/File:V%C3%A9lodrome_de_Roubaix_02.jpg",
  },
] as const;

export const buildLocalizedHref = (locale: string, path: string) => {
  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
};

export const buildCanonicalLocalePath = (path: string) =>
  buildLocalizedHref(PRIMARY_LOCALE, path);
