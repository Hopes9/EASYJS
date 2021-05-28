let slide__heading = ['Clip-Path Revealing Slider', 'Simple Animation', 'Very Stylish Effect!', 'Limited browser support', 'Check my other stuff!']
let slide__text = ['Greetings, Traveler!', 'Clip-path magic!', 'It looks cool, isn"t it?', 'Forget about IE/Edge and FF', '1']

const main_div = document.getElementById('root');
const second_div = document.createElement('div');
second_div.classList.add('slider__slides');
for (let i = 1; i <= slide__heading.length; i++){
  const div1 = document.createElement('div');
  div1.classList.add('slide');
  div1.setAttribute('data-slide', i)
  if (i == 1){
    div1.classList.add('s--active')}
  if (i == slide__heading.length){
    div1.classList.add('s--prev')}
  div1.classList.add(`slide-${i}`);
  second_div.appendChild(div1);
  const div2 = document.createElement('div');
  div2.classList.add('slide__inner');
  div1.appendChild(div2);
  const div3 = document.createElement('div');
  div3.classList.add('slide__content');
  div2.appendChild(div3);
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  h2.classList.add('slide__heading');
  h2.innerHTML = slide__heading[i]
  p.classList.add('slide__text');
  p.innerHTML = slide__text[i]
  div3.appendChild(h2)
  div3.appendChild(p)
}
main_div.appendChild(second_div);
const d1 = document.createElement('div');
d1.classList.add('slider__control')
main_div.appendChild(d1)
const d2 = document.createElement('div');
d2.classList.add('slider__control-line')
const d3 = document.createElement('div');
d3.classList.add('slider__control-line')
d1.appendChild(d2)
d1.appendChild(d3)
const d11 = document.createElement('div');
d11.classList.add('slider__control')
d11.classList.add('slider__control--right')
d11.classList.add('m--right')
main_div.appendChild(d11)
const d22 = document.createElement('div');
d22.classList.add('slider__control-line')
const d44 = document.createElement('div');
d44.classList.add('slider__control-line')
d11.appendChild(d44)
d11.appendChild(d22)




