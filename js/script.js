const elbright = document.querySelector('.bright')
const ellinks = document.querySelector('.links')
const elbutbright = document.querySelector('.brightbutton')
const elbutbrightclose = document.querySelector('.brightbuttonclose')
const elbutfunclose = document.querySelector('.fun')
const elbuttravelclose = document.querySelector('.travel')
const elbutprogclose = document.querySelector('.prog')
const elbutmusclose = document.querySelector('.mus')

elbutbright.addEventListener('click', () => {
elbright.classList.add('brightness')
ellinks.classList.add('bottom')
})
elbright.addEventListener('click', () => {
elbright.classList.remove('brightness')
ellinks.classList.remove('bottom')
})
elbutbrightclose.addEventListener('click', () => {
elbright.classList.remove('brightness')
ellinks.classList.remove('bottom')
})
elbutfunclose.addEventListener('click', () => {
elbright.classList.remove('brightness')
ellinks.classList.remove('bottom')
})
elbuttravelclose.addEventListener('click', () => {
elbright.classList.remove('brightness')
ellinks.classList.remove('bottom')
})
elbutprogclose.addEventListener('click', () => {
elbright.classList.remove('brightness')
ellinks.classList.remove('bottom')
})
elbutmusclose.addEventListener('click', () => {
elbright.classList.remove('brightness')
ellinks.classList.remove('bottom')
})