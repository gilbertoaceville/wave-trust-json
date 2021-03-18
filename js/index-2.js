// Platform that works array
let pTWorksListArray = [
  {
    title: "Easy payments",
    desc:
      "Set up investments orders on the web app, and receive your returns to any of your bank accounts anywhere instantly",
    bgImg: "../assets/icons/cube.svg", 
    },
  {
    title: "Mobile and web access",
    desc:
      "Manage your account on your phone or computer. Do everything you need from the app",
    bgImg: "../assets/icons/layer.svg",
  },
  {
    title: "Control over your account",
    desc:
      "Your WaveTrust account lets you easily lock in the web app, and later reopen anytime with a tap of a button",
    bgImg: "../assets/icons/rate_review-24px.svg",
  },
];

// Frequently asked question array
const faqArrayList = [
  {
    question: "How can you guarantee such High Returns?",
    answer: `Due to our exclusive opportunities in the business funding space, proprietary technology, strict underwriting and diversified portfolio (which even out performs fluctuations), we are able to offer these healthy returns at a guaranteed rate.`,
  active: false },
  {
    question: "Will my returns vary with the market performance?",
    answer: `No. rather than expose our clients to the variations of the market, we guarantee you a fixed return.`,
  active: false },
  {
    question: "What risks are involved in my investment?",
    answer: `All risks are taken by us which in turn are minimal owing to our decades of experience in increasing capital investments over time`,
  active: false },
  {
    question: "What are your fees? How do you make money?",
    answer: `Fair commissions are included for every transaction made. See our <a href='./pages/pricing.html'>Pricing</a> page for more details.`,
  active: false },
  {
    question: "What amounts can I invest?",
    answer: `The least plan (Essential plan) for basics requires a minimum amount of $49.99 while our Team plan and Professional plan requires a minimum amount of $89.99 and $129.99 respectively.  See our <a href='./pages/pricing.html'>Pricing</a> page for more details.`,
  active: false },
  {
    question: "How long do payouts take?",
    answer: `Payouts or return on investments (ROI's) may take 2-3 business days to reflect on your account for local currency and 1 week for foreign currencies depending on your bank processing speed.`,
  active: false },
  {
    question: "How do I start?",
    answer: `We have designed our website in a way that makes it easy for every investor to make deposits and get started. You simply have to head over to our <a href="/pages/signup.html">Sign up</a> page and get registered.`,
  active: false },
  {
    question: "How do I choose the right plan for my business?",
    answer: `You are solely responsible for any decision to make investments, and such decision should take into account your financial circumstances. WaveTrust team will <b>never</b> offer any advice on which plan suits you or your business best` ,
  active: false },
  {
    question: "Why is my account on hold?",
    answer: "Your account may be on hold if we believe that your account shows malicious activity. In this case contact us immediately, else the account may be banned.",
  active: false },
  {
    question: "What if I want to cancel my investment?",
    answer: "You have total control over your account so cancelling an investment depends on you. We may deny your cancellation request after 1 week from when such investment was made and also, if an effective contract between WaveTrust and you (the shareholder) is currently on-going.",
  active: false },
  {
    question: "Why do I have an issue with my payment?",
    answer: "If you have an issue with your payment, please check your recent bank transactions again. If you have not received the payment yet, please wait one or two days for the transaction to settle. If you have not received the right payment amount, please contact us",
  active: false },
  {
    question: "Are there any additional fees?",
    answer: "No. There are no additional fees attached",
  active: false },
  {
    question: "Questions on Terms and Privacy Policy?",
    answer: "We are working very hard to include all available terms and make the conditions favorable for user experience",
  active: false },
  {
    question: "How do I contact WaveTrust?",
    answer: "Contact us at hello@wavetrust.com anytime and state your question. We will try to respond to your inquiry as soon as possible.",
  active: false },
  {
    question: "I want to support WaveTrust",
    answer: "To support WaveTrust follow us on Facebook and Instagram. Tell your friends and family about us so that they can make profits from their investments too.",
  active: true },
];

let pTWorksList = document.querySelector(".btw-list");

// Populate data for "Platform that works in services"
const pTW = () => {
  pTWorksList.innerHTML = `${pTWorksListArray
    .map(
      (v, index) => `
        <li>
        <main class=" icon -df -jc-c -br -ai-c">
          <div style='-webkit-mask-image: url(${v.bgImg}); mask-image: url(${v.bgImg});' class="msk"></div>
        </main>
        <h3 class="-mtb">${v.title}</h3>
        <label class="lb-fs">${v.desc}</label>
      </li>`
    )
    .join("")}`;
};

window.addEventListener("load", () => {
  pTW();
});

let faqList = document.querySelector(".FAQWrap");
let faq = [...faqArrayList]


const FAQ = () => {
  faqList.innerHTML = `${faq.map(
      (v, index) => `
        <div class='ContentWrap'>
        <div class='FAQContent -df -jc-sb -ai-c _faq'>
        <h3 >${v.question}</h3>
            ${v.active ? 
                '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>' 
                : 
                '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>'
            }
        </div>
        <div style='display: none' class='Answer'>
        <label class="lb-fs">${v.answer}</label>
        </div>
        </div>`
    )
    .join("")}`;
};
FAQ();
// click on question to display answer for a particular index
let allFaqs = [...document.querySelectorAll('._faq')];
function show(){
  allFaqs.forEach((v,i,a)=>{
    v.addEventListener('click', ()=>{
      a.forEach(v=>v.nextElementSibling.style.display = 'none');
        v.nextElementSibling.style.display = 'block';
    })
  })
};

show();