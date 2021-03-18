// list of services rendered
let serviceListArray = [{
        title: 'Ideatation',
        desc: 'Investment apps are very important part of the economy because they provide vital services for both consumers and business.',
        bgImg: '../assets/icons/cube.svg',
        bgCol: '#ff0000',
        bg: '#ff000038'
    },
    {
        title: 'Partner',
        desc: 'The goal of most banks is to earn profit for their owners who are also shareholders. At Wave trust, you make profits for yourself under your own terms, you\'re our partner.',
        bgImg: '../assets/icons/layer.svg',
        bgCol: '#a072bf',
        bg: '#a072bf38'
    },
    {
        title: 'Total Control',
        desc: 'Spend, save and manage your money all in one place. Be free and explore with one of the most trusted investment platforms worldwide.',
        bgImg: '../assets/icons/rate_review-24px.svg',
        bgCol: '#57a853',
        bg: '#57a85338',
    },
    {
        title: 'High Returns',
        desc: 'Earn a 20% profit on any investment made, deposited to a bank account of your choice every week for the next three months.',
        bgImg: '../assets/icons/vector.svg',
        bgCol: '#0493fb',
        bg: '#0493fb38',
    },
    {
        title: 'Currency',
        desc: ' You retain a right to any funds you deposit into the WaveTrust bank account until such time as your funds are used or withdrawn via our available currencies.',
        bgImg: '../assets/icons/developer_board-24px.svg',
        bgCol: '#f28b2d',
        bg: '#f28b2d38',

    },
    {
        title: 'Ubiquitous',
        // desc: 'We have implemented security measures designed to secure your information from accidental loss and from unauthorized access, use, alteration or disclosure.',
        desc: 'Access our platform or website from any mobile device, computer anytime anywhere in the world. We offer 24/7 support on all accounts.',
        bgImg: '../assets/icons/worldwide.svg',
        bgCol: '#9987fb',
        bg: '#9987fb38'
    }
]

let hIWorksListArray =  [
    {
        title: 'Select the Product you are interested in',
        desc: 'Let us know which product you are interested in by heading to our logging into your portal to view said products. For better understanding, contact our support team. Capital is used for investments into hedge funds, cryptocurrencies and other markets after careful evaluation.',
        icon: '../assets/icons/touch_app-24px.svg',
        bg: '#435bb2'
    },
    {
        title: 'Sit Back and Enjoy Our High Returns',
        desc: 'Once your account has been verified and product is active, you\'ll receive a 20% of capital deposited every week for the next three months with monthly statements highlighting your earnings to date and displaying all your pertinent balance details.',
        icon: '../assets/icons/support.svg',
        bg: '#f28b2d'
    },
    {
        title: 'Collect your ROIs Everytime',
        desc: 'You can choose to take your weekly returns or wait at the end of your product\'s lifespan, and it\'s maturity, we immediately forward your funds via your selected withdrawal gateway along with your final statement.',
        icon: '../assets/icons/hand.svg',
        bg: '#2e5005'
    },
]
// html unorderd list for "Our Services"
let serviceList = document.querySelector('.services-list');

// html unorderd list for "How It Works"
let hIWorksList = document.querySelector('.works-list')

// populate mapped data or list into the unordered list (ul) for "Our Services"
serviceList.innerHTML = `${serviceListArray.map(
    (v, index) => `
    <li>
    <main style='background-color: ${v.bg};' class="icon -df -jc-c -br -ai-c">
      <div style='-webkit-mask-image: url(${v.bgImg}); mask-image: url(${v.bgImg}); background-color: ${v.bgCol};' class="msk"></div>
    </main>
    <h3 class="-mtb">${v.title}</h3>
    <label class="lb-fs">${v.desc}</label>
  </li>`
).join('')}`;

// populate mapped data or list into the unordered list (ul) for "How It Works"
hIWorksList.innerHTML = `${hIWorksListArray.map(
    (v, index) => `
    <li>
    <div style='background-color: ${v.bg};' class="card -df txt-align-l -ff-col ">
      <main class="icon -df -jc-c -br -ai-c">
        <div style='-webkit-mask-image: url(${v.icon}); mask-image: url(${v.icon});' class="msk"></div>
      </main>
      <h3 class="-mtb">${v.title}</h3>
      <label class="lb-fs">${v.desc}</label>
    </div>
  </li>`
).join('')}`;


