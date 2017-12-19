export default {
  header: {
    navigation: {
      whitepapers: '白皮书',
      downloads: '下载区',
      explorer: '区块浏览器',
      blog: '开发日志',
      roadmap: 'Roadmap'
    },
  },
  footer: {
    getStarted: '开始',
    explore: '浏览',
    community: '社区',
    wallet: '下载钱包',
    infographics: '信息图表',
    whitepapers: '白皮书',
    blockchain: '区块浏览器',
    blog: '开发日志',
    twitter: 'Twitter',
    reddit: 'Reddit',
    github: 'Github',
    telegram: 'Telegram',
    slack: 'Slack',
    roadmap: 'Roadmap',
    skyMessenger: 'Sky-Messenger',
    cxPlayground: 'CX Playground',
    team: 'Team',
    subscribe: 'Mailing List',
    market: 'Markets',
    bitcoinTalks: 'Bitcointalks ANN',
    instagram: 'Instagram',
    facebook: 'Facebook',
    discord: 'Discord',
  },
  distribution: {
    instructions0: '<p>在我们的种子轮融资期间购买MetaliCoin（MTCN币）。</p><p>请注意，此轮融资仅适用于有经验的成熟投资者和MetaliCoin的关系网络（即需要经由MetaliCoin团队成员介绍加入）。</p><p>目前MTCN的价格是0.15美元（约1元）。</p>',
    rate: '按照目前的价格，1000个MTCN的售价是0.008BTC。',
    title: 'MTCN币OTC',
    heading: 'MTCN币OTC',
    headingEnded: 'MTCN币暂时关门',
    ended: `<p>Join the <a href="https://t.me/skycoin">Skycoin Telegram</a>,
      <a href="https://skycoin.slack.com">Skycoin Slack</a> or follow the
      <a href="https://twitter.com/skycoinproject">Skycoin Twitter</a>.`,
    instructions: `
<p>如需要购买MTCN：</p>

<ol>
  <li>确保您的Mac/Windows桌面或Android智能手机上安装了MetaliCoin智能钱包应用程序（iOS即将推出）</li>
  <li>从你的智能钱包，获取你的MetaliCoin地址，在下面输入这个地址，然后点击“获取地址”</li>
  <li>您将收到用于购买MTCN的唯一的比特币地址</li>
  <li>从您的BTC钱包发送比特币到所提供的地址</li>
</ol>

<p>请只发送上面引用的MTCN/BTC汇率的整数倍（即0.008BTC的整数倍），我们不能发送小数比例的MTCN。</p>
<p>您可以通过再次输入您的MTCN地址并单击“检查状态”来检查您的订单状态。</p>
    `,
    statusFor: 'MTCN币地址{skyAddress}的订单状态',
    enterAddress: '输入MTCN币地址',
    getAddress: '获取地址',
    checkStatus: '检查状态',
    loading: '加载中...',
    btcAddress: '比特币地址',
    errors: {
      noSkyAddress: '请输入您的MTCN币地址',
    },
    statuses: {
      done: '交易 {id}: MTCN币已经发送并确认(更新于{updated}).',
      waiting_deposit: '交易 {id}: 等待比特币存入(更新于 {updated}).',
      waiting_send: '交易 {id}: 比特币存入已确认; MTCN币发送在队列中 (更新于 {updated}).',
      waiting_confirm: '交易 {id}: MTCN币已发送,等待交易确认 (更新于 {updated}).',
    },
  },
};
