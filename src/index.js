import './style.css';
import github from './images/githubIcon.svg'
import linkedin from './images/linkedinIcon.svg'
import x from './images/xIcon.svg'
import link from './images/shortcutIcon.svg'
import call from './images/callIcon.svg'
import email from './images/emailIcon.svg'

const githubImgEls = document.querySelectorAll(".github-img")
const linkedinImgEls = document.querySelectorAll(".linkedin-img")
const xImgEls = document.querySelectorAll(".x-img")
const shortcutImgEls = document.querySelectorAll(".link-img")

const callImg = document.querySelector('.call-img')
const emailImg = document.querySelector('.email-img')

function setBtnIcons(nodelist, img) {
  Array.from(nodelist).forEach((node) => {
    node.src = img
  })
}


document.addEventListener('DOMContentLoaded', () => {
  setBtnIcons(linkedinImgEls, linkedin)
  setBtnIcons(githubImgEls, github)
  setBtnIcons(xImgEls, x)
  setBtnIcons(shortcutImgEls, link)
  callImg.src = call
  emailImg.src = email
})