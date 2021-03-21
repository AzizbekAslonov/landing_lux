
let click_item = document.querySelector('.addActive');
click_item.addEventListener('click', function (e) {
   let click__menu = document.querySelector('.activeElement');
   click__menu.classList.toggle('active');
});


let icon_menu = document.querySelector('.icon-menu');
icon_menu.addEventListener('click', function (e) {
   icon_menu.classList.toggle('active');
   document.querySelector('.menu__body').classList.toggle('active');
   document.querySelector('body').classList.toggle('lock');
});

const animItems = document.querySelectorAll('._anim_items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll)
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 3;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
         } else {
            if (!animItem.classList.contains("_anim-no-hide")) {
               animItem.classList.remove('active')
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
}
setTimeout(() => {
   animOnScroll()
}, 460);


document.addEventListener('click', function (e) {
   if (!e.target.closest('.notThis')) {
      let hideItem = document.querySelector('.hideOnClick');
      hideItem.classList.remove('active');
   }
});

function ibg() {
   let ibg = document.querySelectorAll(".ibg");
   for (let i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector("img")) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();


document.querySelector('.form__btn').onclick = (e) => {
   if (document.querySelector('.input').value.endsWith('@gmail.com') === false) {
      document.querySelector('.error').style.display = 'block';
      e.preventDefault();
   }
}

let menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuClick)
   });
}


function onMenuClick(e) {
   e.preventDefault();
   let dataBlock = this.dataset.goto;
   if (dataBlock && document.querySelector(dataBlock)) {
      // Заполнен ли это дата атрибут && 
      // Существует ли такой объект
      const gotoBlock = document.querySelector(dataBlock);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top +
         pageYOffset - document.querySelector('header').offsetHeight

      window.scrollTo({
         top: gotoBlockValue,
         behavior: 'smooth'
      })

   }
}
