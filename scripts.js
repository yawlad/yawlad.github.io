make_beautiful_backs = function () {
    let sections_left = document.body.querySelectorAll(".section_bg_left")
    let headers = document.body.querySelectorAll(".header_section")
    let sections_right = document.body.querySelectorAll(".section_bg_right")
    let infos = document.body.querySelectorAll(".info_section")
    for (let i = 0; i < sections_left.length; i++) {
        if (i % 2 == 1) {
            sections_left[i].style.backgroundColor = "#f8f8f8";
            headers[i].style.backgroundColor = "#f8f8f8";
            sections_right[i].style.backgroundColor = "#fcfcfc";
            infos[i].style.backgroundColor = "#fcfcfc";
        }
    }
}

make_right_bars = function () {
    let progress_bar_items = document.body.querySelectorAll(".progress_bar_item")

    for (item of progress_bar_items) {
        percent = item.querySelector(".progress_bar_percents").textContent
        item.querySelector(".progress_bar_completed").style.width = `${percent}%`
    }
}



dinamic_visible_scroll = function () {
    let sections = document.body.querySelectorAll(".standart_section")
    sections[0].style.opacity = '1'
    make_visible = function () {
        setTimeout(() => {
            for (let section of sections) {
                let section_top = section.getBoundingClientRect().top
                if (section_top <= document.documentElement.clientHeight) {
                    section.querySelector(".header_text_block").style.opacity = '1'
                    section.querySelector(".info_section_content").style.opacity = '1'

                }
                if (section.querySelector(".info_section_content").style.opacity == '1' && section.classList.contains('skills_section')) {
                    make_right_bars()
                }
            }
        }, 700
        )


    }

    make_visible()

    window.addEventListener('scroll', () => make_visible())
}

make_beautiful_backs()
dinamic_visible_scroll()

