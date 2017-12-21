export default {
  header: {
    navigation: {
      whitepapers: 'Whitepapers',
      downloads: 'Downloads',
      explorer: 'Explorer',
      blog: 'Blog',
      roadmap: 'Roadmap',
    },
  },
  footer: {
    getStarted: 'Get started',
    explore: 'Explore',
    community: 'Community',
    wallet: 'Get Wallet',
    infographics: 'Infographics',
    whitepapers: 'Whitepapers',
    blockchain: 'Blockchain Explorer',
    blog: 'Blog',
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
    instructions0: '<p>Buy MetaliCoin (MTCN coins) during our seed round.</p><p>Please note, this funding round is only available for sophisticated investors and the MetaliCoin network (people who have a personal introduction from the MetaliCoin team).</p><p>The current price for MTCN is USD $0.15 (about 1 Yuan).</p>',
    rate: 'At current rates, we are selling bundles of 1,000 MTCN for 0.008 BTC.',
    title: 'MetaliCoin OTC',
    heading: 'MetaliCoin OTC',
    headingEnded: 'MetaliCoin OTC is currently closed',
    ended: `<p>Join the <a href="https://t.me/skycoin">MetaliCoin Telegram</a>,
      <a href="https://skycoin.slack.com">MetaliCoin Slack</a> or follow the
      <a href="https://twitter.com/skycoinproject">MetaliCoin Twitter</a>.`,
    instructions: `
    <p>To buy MTCN:</p>
    
    <ol>
      <li>Ensure the MetaliCoin smart-wallet app is installed on your Mac or Windows Desktop or Android smartphone (iOS coming soon)</li>
      <li>From your smart wallet, get your MetaliCoin address, enter this into the field below and click “Get Address”</li>
      <li>You will receive a unique BitCoin address you use to purchase MTCN</li>
      <li>Send the BTC from your BTC wallet to the address provided</li>
    </ol>
    <p>Please only send multiples of the MTCN/BTC rate quoted above. We cannot send fractional proportions of MTCN.</p>
    <p>You can check the status of your order by entering your MTCN address again and clicking “Check Status”</p>
     `,
    statusFor: 'Status for {skyAddress}',
    enterAddress: 'Enter MetaliCoin address',
    getAddress: 'Get address',
    checkStatus: 'Check status',
    loading: 'Loading...',
    btcAddress: 'BTC address',
    errors: {
      noSkyAddress: 'Please enter your SKY address.',
    },
    statuses: {
      waiting_deposit: '[tx-{id} {updated}] Waiting for BTC deposit.',
      waiting_send: '[tx-{id} {updated}] BTC deposit confirmed. MetaliCoin transaction is queued.',
      waiting_confirm: '[tx-{id} {updated}] MetaliCoin transaction sent.  Waiting to confirm.',
      done: '[tx-{id} {updated}] Completed. Check your MetaliCoin wallet.',
    },
  },
};
