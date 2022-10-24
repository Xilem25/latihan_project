const body = document.body,
tombolRestart = document.getElementById('tombolRestart'),
tombolDarkMode = document.getElementById('tombolDarkMode'),
tombolPartyMode = document.getElementById('tombolPartyMode');

//dark mode define
const h1 = document.querySelector('h1'),
h2 = document.querySelector('h2');

let jumlahMenekan = document.getElementById('jumlahMenekan'),
sisahMenekan = document.getElementById('sisahMenekan');

//party mode define
const audio = document.querySelector('audio'),
earphone = document.querySelector('i'),
toolsParty = document.querySelector('.tools-party');


//dark mode
tombolDarkMode.onclick = darkMode;

//party mode
tombolPartyMode.onclick = partyMode;


//dark mode function
let dark = 0;
const totalDark = 25;
sisahMenekan.innerText = totalDark;

function darkMode() {
   h1.classList.remove('h1-active');
   h2.classList.remove('h2-active');
   jumlahMenekan.classList.remove('jumlahMenekan-active');
   sisahMenekan.classList.remove('sisahMenekan-active');
   tombolDarkMode.classList.add('tombol-dark-mode-active');
   tombolPartyMode.classList.remove('tombol-party-mode-active');

   body.classList.remove('partyMode-active');
   toolsParty.classList.remove('tools-party-active');

   tombolRestart.textContent = 'Home';

   audio.pause();

   dark++;
   if (dark <= totalDark) {
      if (dark % 2 == 0) {
         tombolDarkMode.innerText = 'Dark-mode';
      } else {
         tombolDarkMode.innerText = 'Light-mode';
      }
      body.classList.toggle('darkMode-active');

      jumlahMenekan.innerText = dark;
      sisahMenekan.innerText = totalDark - dark;

   } else {
      tombolRestart.textContent = 'Restart';
      tombolRestart.addEventListener('click', function() {
         location.reload();
         tombolPartyMode.classList.remove('tombol-party-mode-active');
         tombolDarkMode.classList.remove('tombol-dark-mode-active');

      });
   }

}


//party mode functiom
function partyMode() {
   h1.classList.add('h1-active');
   h2.classList.add('h2-active');
   jumlahMenekan.classList.add('jumlahMenekan-active');
   sisahMenekan.classList.add('sisahMenekan-active');
   tombolPartyMode.classList.add('tombol-party-mode-active');
   tombolDarkMode.classList.remove('tombol-dark-mode-active');


   body.classList.remove('darkMode-active');
   body.classList.add('partyMode-active');
   toolsParty.classList.add('tools-party-active');

   audio.load();
   tombolRestart.textContent = 'Restart';
   tombolRestart.addEventListener('click', function() {

      audio.pause();
      location.reload();

      tombolPartyMode.classList.remove('tombol-party-mode-active');
      tombolDarkMode.classList.remove('tombol-dark-mode-active');
   });
}