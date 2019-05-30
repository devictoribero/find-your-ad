import uuidGenerator from 'uuid/v4'

export let bbddInfluencers = [];
bbddInfluencers.length = 100;
for(let i = 0; i < 50; i++) {
  bbddInfluencers.push(new Influencer())
}

function Influencer() {
  return {
    id: uuidGenerator(),
    name: 'Victor',
    lastName: 'Ribero',
    img_src: 'https://miro.medium.com/max/3150/1*sUWLvWsqCBmCVWeDbqIFVw.jpeg',
    location: 'Barcelona',
    genre: ['productivity, technical, thoughts'],
    socials: [
      {
        name: 'instagram',
        userName: 'victorriberoguasch',
        followers: randomInt()
      },
      {
        name: 'twitter',
        userName: 'victorException',
        followers: randomInt()
      }
    ]
  }
}

function randomInt(min = 2000, max = 50000) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
