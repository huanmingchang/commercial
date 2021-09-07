import './scss/main.scss'
console.log('JS loaded!')

const influencers = [
  {
    id: 1,
    name: '都省睿',
    youtube: '阿D數學',
    fb: 'RayDuMath',
    ig: 'raydumath',
  },
  {
    id: 2,
    name: '蔡偉加',
    youtube: '蔡阿加',
    fb: 'WithGiaLoveTaiwan',
    ig: 'ygia0712',
  },
  {
    id: 3,
    name: '那群人TGOP',
    youtube: 'TGOP 那群人',
    fb: 'thosegroupofpeople',
    ig: 'thosegroupofpeople',
  },
  {
    id: 4,
    name: '洪萬萬',
    youtube: '萬萬進食中',
    fb: 'Wangeating',
    ig: 'whshu_',
  },
  {
    id: 5,
    name: '咚咚',
    youtube: '台灣大胃王咚咚',
    fb: 'Dong.Dong.Bigeater',
    ig: 'dongdong_eating',
  },
  {
    id: 6,
    name: 'BEAUTIFULGIRLS',
    youtube: '正骨女孩',
    fb: 'Beautifulgirls.Fans',
    ig: 'Beautifulgirls520',
  },
  {
    id: 7,
    name: 'THE JuN',
    youtube: 'THE JuN',
    fb: 'the.jun.7965',
    ig: 'the.jun_666',
  },
  {
    id: 8,
    name: '九太娛樂狼人殺',
    youtube: '九太電視娛樂百分百',
    fb: 'NTV100E',
    ig: 'ntve100',
  },
  {
    id: 9,
    name: '眼眶地方電視台',
    youtube: '眼眶地方電視台',
    fb: 'EYEFRAMELTV',
    ig: 'eyeframeltv',
  },
  {
    id: 10,
    name: '不礙眼',
    youtube: '不礙眼',
    fb: 'Hacting4',
    ig: 'h_acting4',
  },
]

const cardList = document.getElementById('card-list')
const form = document.getElementById('a-form')
const formParts = form.querySelectorAll('.part')
const stepControl = document.getElementById('step-control')
const steps = stepControl.querySelectorAll('.step')
const btnControl = document.getElementById('btn-control')
const nextBtn = btnControl.querySelector('.btn-primary')
const prevBtn = btnControl.querySelector('.btn-outline')

let activeCard = 0
let step = 0

;(function () {
  influencers.forEach((influencer) => {
    cardList.innerHTML += `
        <div id="${influencer.name}-${influencer.id}" class="card ${
      influencer.id === activeCard + 1 ? 'active' : ''
    }">
        <div class="name">${influencer.name}</div>
        <div class="flex-row"><i class="fab fa-youtube"></i><span>${
          influencer.youtube
        }</span></div>
        <div class="flex-row"><i class="fab fa-facebook-square"></i><span>${
          influencer.fb
        }</span></div>
        <div class="flex-row"><i class="fab fa-instagram"></i><span>${
          influencer.ig
        }</span></div>
        </div>
     `
  })
})()
