window.addEventListener('DOMContentLoaded', function () {

    //база товаров
    const objectArr = [
        { type: "tv", picture: "img/tv-1.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "tv", picture: "img/tv-2.png", name: "LG Oled Z-1000", addDate: new Date(2019, 10, 22) },
        { type: "tv", picture: "img/tv-3.png", name: "Sony XG-550 Ultra", addDate: new Date(2020, 5, 12) },
        { type: "tv", picture: "img/tv-4.png", name: "Samsung S-40", addDate: new Date(2023, 3, 22) },
        { type: "tv", picture: "img/tv-5.png", name: "Samsung E-5000 UHD", addDate: new Date(2022, 4, 21) },
        { type: "tv", picture: "img/tv-1.png", name: "LG 28TQ515S-WZ", addDate: new Date(2022, 0, 2) },
        { type: "tv", picture: "img/tv-2.png", name: "Samsung UE8000", addDate: new Date(2022, 0, 2) },
        { type: "tv", picture: "img/tv-3.png", name: "Sony ZX-7000", addDate: new Date(2022, 0, 2) },
        { type: "tv", picture: "img/tv-4.png", name: "LG UHD-S-400", addDate: new Date(2022, 0, 2) },
        { type: "tv", picture: "img/tv-5.png", name: "Samsung UE-8500", addDate: new Date(2022, 0, 2) },
        { type: "tv", picture: "img/tv-1.png", name: "Xiaomi Mi TV Q1E 55", addDate: new Date(2022, 0, 2) },
        { type: "tv", picture: "img/tv-2.png", name: "Xiaomi Mi TV 4S ", addDate: new Date(2022, 0, 2) },

        { type: "pc", picture: "img/pc-1.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "pc", picture: "img/pc-2.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "pc", picture: "img/pc-3.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "pc", picture: "img/pc-4.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "pc", picture: "img/pc-5.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "pc", picture: "img/pc-1.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "pc", picture: "img/pc-2.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "pc", picture: "img/pc-3.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "pc", picture: "img/pc-4.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "pc", picture: "img/pc-5.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "pc", picture: "img/pc-1.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "pc", picture: "img/pc-2.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "pc", picture: "img/pc-3.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "pc", picture: "img/pc-4.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "pc", picture: "img/pc-5.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },

        { type: "phone", picture: "img/phone-1.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "phone", picture: "img/phone-2.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "phone", picture: "img/phone-3.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "phone", picture: "img/phone-4.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "phone", picture: "img/phone-5.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "phone", picture: "img/phone-1.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "phone", picture: "img/phone-2.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "phone", picture: "img/phone-3.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "phone", picture: "img/phone-4.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "phone", picture: "img/phone-5.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "phone", picture: "img/phone-1.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },

        { type: "tech", picture: "img/tech-1.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "tech", picture: "img/tech-2.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "tech", picture: "img/tech-3.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "tech", picture: "img/tech-4.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "tech", picture: "img/tech-5.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "tech", picture: "img/tech-1.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "tech", picture: "img/tech-2.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "tech", picture: "img/tech-3.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "tech", picture: "img/tech-4.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "tech", picture: "img/tech-5.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "tech", picture: "img/tech-1.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "tech", picture: "img/tech-2.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
        { type: "tech", picture: "img/tech-3.png", name: "Sony X-700", addDate: new Date(2022, 0, 2) },
    ]

    // создаем цикл добавления элементов
    let i = 0
    let arrLength = objectArr.length
    while (i < arrLength) {
        let object = objectArr[i]
        i++
        createElem(object)
    }

    //Отрисовка товаров
    function createElem(object) {
        // определение по типу объекта куда его  добавить
        let type = object.type
        let typePlace = document.getElementById(`${type}__list`)
        let newCard = document.createElement("li")
        newCard.classList.add('item', `${type}__item`)

        //основа карточки создана, добавляем в нее наполнение
        // начинаем с картинки
        let picture = object.picture
        let newImg = document.createElement("img")
        newImg.classList.add('item__img', `${type}__img`)
        newImg.src = picture
        newCard.appendChild(newImg)
        // добавим название
        let name = object.name
        let newName = document.createElement("h3")
        newName.classList.add("item__name", `${type}__name`)
        newName.textContent = name
        newCard.appendChild(newName)
        // добавим дату добавления
        const dayOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
        const monthName = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

        let addDate = object.addDate
        let day = dayOfWeek[addDate.getDay()]
        let week = getWeekNumber(addDate)
        let month = monthName[addDate.getMonth()]
        let year = addDate.getFullYear()

        let dateText = `${day}, ${week} неделя ${month} ${year} года`
        let newDate = document.createElement("p")
        newDate.classList.add("item__date", `${type}__date`)
        newDate.textContent = dateText
        newCard.appendChild(newDate)
        // добавим кнопку
        let newBtn = document.createElement('button')
        newBtn.classList.add("btn", "item__btn", `${type}__btn`)
        newBtn.textContent = "Купить"
        newBtn.dataset.target = "#modal"
        newCard.appendChild(newBtn)
        // все добавлено в карточку, добавим теперь ее
        typePlace.appendChild(newCard)
    }

    //кнопка, возвращающая наверх страницы
    const btnUp = document.querySelector('.btn-up')
    window.addEventListener('scroll', function () {
        let checkY = window.pageYOffset
        if (checkY >= 100) {
            btnUp.style.display = 'block'
        }
        if (checkY < 100) {
            btnUp.style.display = 'none'
        }
    }, { passive: true })
    btnUp.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    // плавный скролл ссылок
    let pageLink = document.querySelectorAll(".nav__link")
    pageLink.forEach(el => getX(el))
    // вызов функции при изменении ширины окна
    window.addEventListener('resize', (e) => {
        pageLink.forEach(el => getX(el))
    });

    // функция плавного скролла ссылок
    function getX(el) {
        let linkBody = el.getAttribute('href')
        let posX = document.querySelector(linkBody).getBoundingClientRect().top - 100 + window.pageYOffset
        el.addEventListener('click', (event) => {
            event.preventDefault()
            window.scrollTo({ top: posX, behavior: 'smooth' })
        })
    }
    // изменение темы сыйта
    const btnChangeColor = document.querySelector('.btn-theme')
    btnChangeColor.addEventListener('click', function () {
        const body = document.querySelector('body')
        body.classList.toggle("dark-mode")
        const darkOn = document.querySelector(".span-off")
        darkOn.classList.toggle('dark')
        const darkOff = document.querySelector(".span-on")
        darkOff.classList.toggle('dark')
    })

    //открытие модального окна
    const btnModal = document.querySelectorAll('.item__btn')
    btnModal.forEach(el => {
        const modal = document.querySelector(el.dataset.target)

        el.addEventListener('click', () => {
            modal.style.display = 'flex'
        })

        modal.querySelector('.modal__window').addEventListener('click', event => {
            event._isClickInModal = true;
        })

        modal.addEventListener('click', event => {
            if (event._isClickInModal) return;
            modal.style.display = 'none';
        })

    })

    // сообщение о покупке при нажатии
    let btnBuy = document.querySelector('.form__input-buy')
    btnBuy.addEventListener('click', function (event) {
        event.preventDefault()
        alert('Спасибо за покупку!')
    })
    // закрыть модальное окно
    let btnClose = document.querySelector('.form__btn')
    btnClose.addEventListener('click', function (event) {
        event.preventDefault()
        modal.style.display = 'none'
    })

    // функция получения номера недели в году
    function getWeekNumber(elem) {
        let monthFirstDate = new Date(elem.getFullYear(), elem.getMonth(), 1) //первое число месяца
        let monthFirstDay = monthFirstDate.getDay()
        let difference = elem.getTime() - monthFirstDate.getTime()
        let weekNumber
        weekNumber = Math.ceil((difference / 86400000 - (7 - monthFirstDay)) / 7) + 1
        return weekNumber
    }

    // кнопка "показать больше"
    let btnMore = document.querySelectorAll('.btn-more')
    btnMore.forEach(el => {
        let elID = el.dataset.target
        el.addEventListener('click', function () {
            let list = document.getElementById(`${elID}`)
            list.classList.toggle('open-more')
            // вызов функции "плавный скролл ссылок" при нажатии на кнопку "показать больше"
            pageLink.forEach(el => getX(el))
        })
    })

    // кнопка меню
    let menuBtn = document.querySelector('.header__btn--menu')
    let menuList = document.querySelector('.menu')
    menuBtn.addEventListener('click', function () {
        menuList.classList.toggle('menu--open')
    })
})
