let reviews = [
  {
    title: "мой первый проект",
    stack: "c использованием html5 и css3",
    text: "Мне очень понравился креативный подход. Вёрстка хорошая - научиться мыслить такими блоками - это очень важно. Загружены шрифты, стили, работают ссылки. Понравилось, что добавила раздел с отзывами, по структуре как раздел с работами, только уже реальные изображения. За тень ещё отдельный плюсик - непростое свойство.",
    author:
      "Сапожникова Лилия Евгеньевна, основатель онлайн-школы программирования BitByBit",
    date: "январь, 2022 год",
  },

  {
    title: "лендинг для школы английского языка",
    stack: "адаптивная вёрстка с использованием html5, css3",
    text: "У тебя всё очень хорошо получается, видно прогресс. Молодец, что дополнительно разобралась с формой - это очень полезный и важный навык уметь самостоятельно находить информацию. Отличное форматирование кода и хорошая вёрстка! Очень здорово, что используешь семантические теги, огромный плюс!",
    author:
      "Сапожникова Лилия Евгеньевна, основатель онлайн-школы программирования BitByBit",
    date: "февраль, 2022 год",
  },

  {
    title: "вёрстка формы",
    stack: "адаптивная вёрстка с использованием html5, css3 и BEM",
    text: "Посмотрела форму. В целом мне нравится, всё логично и понятно. Наверное, хотелось бы чуть понятнее названия классов, но понимаю, что это сложно подбирать. Нравится, что используешь переменные и псевдоклассы, получились кастомные чекбоксы. И, главное, форма работает и корректно отправляются значения!",
    author:
      "Сапожникова Лилия Евгеньевна, основатель онлайн-школы программирования BitByBit",
    date: "март, 2022 год",
  },

  {
    title: "сайт для стоматологии",
    stack: "адаптивная вёрстка, html, css и BEM",
    text: "Понравилась структура вёрстки и форматирование. Всё выровнено по сетке - тут вообще нет замечаний, идеально! Отлично получились градиенты и тени. Отдельный плюс за использование git и, конечно, за кастомный домен. Очень аккуратно и хорошо вышла адаптивная вёрстка, учитывая ещё то, что её надо было придумать самостоятельно. Работа одна из лучших, очень здорово получилось!",
    author:
      "Сапожникова Лилия Евгеньевна, основатель онлайн-школы программирования BitByBit",
    date: "апрель, 2022 год",
  },

  {
    title: "сайт для танцевальной школы",
    stack: "адаптивная вёрстка, html, css и BEM",
    text: "Всё получилось настолько идеально, что у меня даже почти нет замечаний! И на любых экранах тоже всё отлично работает. Получилась лучшая работа, я очень довольна результатом!! Вижу и коммиты, и свой домен, и на сайте всё аккуратно оформлено по макету. Мобильная версия тоже отличная! Можно перетягивать размер экрана в Chrome и наслаждаться!",
    author:
      "Сапожникова Лилия Евгеньевна, основатель онлайн-школы программирования BitByBit",
    date: "май, 2022 год",
  },
]

const content = document.getElementById("review-content")

let currentIndex = 0

let buttonRight = document.getElementById("button-right")

let buttonLeft = document.getElementById("button-left")

buttonRight.addEventListener("click", showNext)

buttonLeft.addEventListener("click", showBack)

function showNext() {
  currentIndex = currentIndex + 1
  showReview()
}

function showBack() {
  currentIndex = currentIndex - 1
  showReview()
}

function showReview() {
  let review = reviews[currentIndex]

  content.innerHTML = ` 
  
      <div class="review-image">
        <img class="review-person" src="/images/photo-person.png"/>
      </div>

      <div class="review-list">

      
          <img class="review-point" src="/images/points.png"/> 

         
      
          <div class="review-title">${review.title}</div>
          <div class="review-stack">${review.stack}</div>
          <div class="review-text">${review.text}</div>
          <div class="review-author">${review.author}</div> 

          <div class="reviewDateArray">
            <div class="review-date">${review.date}</div>
          </div>

      </div>

  `
}
 
let randomeButton = document.getElementById("randome")
randomeButton.addEventListener("click", randomizer)

function randomizer() {
  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
  }
  const randomElement = getRandomNumber(reviews.length)

  console.log(reviews[randomElement])
}

showReview()
