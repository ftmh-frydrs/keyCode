let $ = document;

const keyEl=$.getElementById('key');
// const locationEl=$.getElementById('location');
// const whichEl=$.getElementById('which');
// const codeEl=$.getElementById('code');
// const assci=$.getElementById('assci');
const elmData = $.querySelectorAll(".boxData");
const eventEl=$.querySelector('.eventEl')

document.body.addEventListener('keyup', function(e){
    e.preventDefault();
    title.style.display='none';
    keycode.style.display='flex';
    eventEl.style.display='flex';
    assci.style.display='flex';

    const key = [e.key, e.location, e.code, e.which];
  for (let i = 0; i < elmData.length; i++) {
    elmData[i].children[1].textContent = key[i];
  }
  assci.textContent = key.pop()

    // assci.innerHTML=e.which;
    // keyEl.innerHTML=e.key;
    // locationEl.innerHTML=e.location;
    // whichEl.innerHTML=e.which;
    // codeEl.innerHTML=e.code;

    // console.log(e);

})