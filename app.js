const presidents = [
  {
    president: 'Paul Kagame',
    presidentTitle: 'President of Rwanda',
    presidentInfo: 'Paul Kagame is a Rwandan politician and former military leader. He is the fourth and current president of Rwanda, having taken office in 2000',
    presidentimage: 'images/leader1.jpeg',
  },
  {
    president: 'James Mwangi',
    presidentTitle: 'CEO Equity Group Holdings',
    presidentInfo: 'James Mwangi CBS is a Kenyan accountant, career banker, businessman, and entrepreneur. He is the current Group Managing Director and Group Chief Executive Officer of Equity Group Holdings Plcs',
    presidentimage: 'images/leader2.jpeg',
  },
  {
    president: 'Nana Akufo-Addo',
    presidentTitle: 'President of Ghana',
    presidentInfo: 'Nana Addo Dankwa Akufo-Addo is a Ghanaian politician who has served as the president of Ghana since 7 January 2017. In 2020, he was re-elected for his second term, which will end on 6 January 2025',
    presidentimage: 'images/leader3.jpeg',
  },
  {
    president: 'Joshua Oigara',
    presidentTitle: 'CEO, Kenya Commercial Bank',
    presidentInfo: 'Joshua Nyamweya Oigara is Kenyan businessman, accountant and corporate executive who is the Group chief executive officer of the Kenya Commercial Bank Group, effective 1 January 2013',
    presidentimage: 'images/leader4.jpeg',
  },
  {
    president: 'Uhuru Kenyatta',
    presidentTitle: 'President of Kenya',
    presidentInfo: 'Uhuru Muigai Kenyatta is a Kenyan politician who is the president of Kenya serving since 2013. Uhuru served as the member of parliament for Gatundu South from 2002 to 2013. He also served as Deputy Prime Minister from 2007 to 2013.',
    presidentimage: 'images/leader5.jpg',
  },
  {
    president: 'William Ruto',
    presidentTitle: 'Vice President of Kenya',
    presidentInfo: ' William Samoei Arap Ruto, more commonly known as William Ruto, is a Kenyan politician, serving as Deputy President of Kenya since September 2013',
    presidentimage: 'images/leader6.jpg',
  },
];

// create president cards

for (let i = 0; i < presidents.length; i += 1) {
  const presidentContainer = document.querySelector('.presidentsDiv');
  const imageContainer = document.createElement('div');
  const imagedots = document.createElement('img');
  const presidentImage = document.createElement('img');

  const infoContainer = document.createElement('article');
  const presidentDetails = document.createElement('div');
  const presidentName = document.createElement('h3');
  const presidentRole = document.createElement('p');
  const moreInfo = document.createElement('div');
  const infoText = document.createElement('p');
  const line = document.createElement('hr');

  // add classes for styling

  presidentContainer.classList.add('presidentsDiv');
  imageContainer.classList.add('imageContainer');

  presidentImage.classList.add('presidentImage');
  presidentImage.setAttribute('src', presidents[i].presidentimage);
  presidentImage.setAttribute('alt', 'presidentPicture');

  infoContainer.classList.add('infocontainer');
  presidentDetails.classList.add('presidentDetails');

  presidentName.classList.add('presidentName');
  presidentName.textContent = presidents[i].president;

  presidentRole.classList.add('presidentRole');
  presidentDetails.textContent = presidents[i].presidentTitle;

  moreInfo.classList.add('moreInfo');
  infoText.classList.add('infoText');
  infoText.textContent = presidents[i].presidentInfo;
  line.classList.add('hr');

  // Appending

  presidentContainer.appendChild(imageContainer);

  imageContainer.appendChild(imagedots);
  imageContainer.appendChild(presidentImage);
  imageContainer.appendChild(infoContainer);

  infoContainer.appendChild(presidentName);
  infoContainer.appendChild(presidentDetails);
  presidentDetails.appendChild(line);
  infoContainer.appendChild(moreInfo);
  moreInfo.appendChild(infoText);
}

// Adding load more button

const loadMoreBtn = document.querySelector('.showMore');
let currentItem = 2;

loadMoreBtn.onclick = () => {
  const loadSpeakers = [...document.querySelectorAll('.imageContainer')];
  for (let i = currentItem; i < currentItem + 2; i += 1) {
    loadSpeakers[i].style.display = 'flex';
  }
  currentItem += 2;

  if (currentItem >= loadSpeakers.length) {
    loadMoreBtn.style.display = 'none';
  }
};

// Add meny bar

const hamburger = document.getElementById('hamburger');
const menuItems = document.querySelectorAll('.toggle-menu');
const mobileMenu = document.getElementById('show-menu');
const hideMenu = document.getElementById('close-icon');

function showMobile() {
  mobileMenu.style.display = 'block';
  hamburger.style.display = 'none';
}
hamburger.addEventListener('click', showMobile);

function hideMobile() {
  mobileMenu.style.display = 'none';
}
hideMenu.addEventListener('click', hideMobile);

function showHamburger() {
  hamburger.style.display = 'block';
}
hideMenu.addEventListener('click', showHamburger);

menuItems.forEach((menuItem) => { menuItem.addEventListener('click', hideMobile, showHamburger); });