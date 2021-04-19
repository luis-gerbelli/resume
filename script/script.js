/* Set initial configuration */
if (matchMedia("(max-width: 600px)").matches)
    document.querySelector("nav").classList.add("hidden")

/* Set search list */
let searchList = []
for (i in articles)
    if (articles[i].keyword)
        for (j of articles[i].keyword)
            if (searchList.indexOf(j) < 0)
                searchList.push(j)
searchList.sort()
let searchListOption = ""
for (i of searchList)
    searchListOption += '<option value="' + i + '">'
document.querySelector("#search-list").innerHTML = searchListOption

/* Add event for change menu */
document.querySelector("header span.title-left").addEventListener("click", showHideMenu)
;[...document.querySelectorAll("nav span.group-right")].forEach(el => { el.addEventListener("click", expandCollapseMenu) })
window.addEventListener("resize", (ev) => {
    ev.stopPropagation()
    if (matchMedia("(max-width: 600px)").matches) {
        document.querySelector("nav").classList.add("hidden")
    } else {
        document.querySelector("nav").classList.remove("hidden")
    }
    updateMenuIcon()
})

/* Add event for navigation */
listenNavigation()
function listenNavigation() {
    ;[...document.querySelectorAll("[data-id]")].forEach(el => { el.addEventListener('click', activeMenu) })
}

/* Add event for search */
document.querySelector("#search").addEventListener("input", searchWork)

/* Show or hide menu */
function showHideMenu(ev) {
    ev.stopPropagation()
    document.querySelector("nav").classList.toggle("hidden")
    updateMenuIcon()
}

/* Expand or collapse menu */
function expandCollapseMenu(ev) {
    ev.stopPropagation()
    ev.target.innerHTML = (ev.target.innerHTML === "+" ? "&minus;" : "&plus;")
    ev.target.parentElement.nextElementSibling.classList.toggle("hidden")
}

/* Update menu icon */
function updateMenuIcon() {
    document.querySelector("header span.title-left").innerHTML = (document.querySelector("nav").classList.contains("hidden") ? "&#9776;" : "&#x2715;")
}

/* Navigation using menu*/
function activeMenu(ev) {
    ev.stopPropagation()
    /* Change menu*/
    let idPage
    if (ev.target.getAttribute("data-id")) {
        idPage = ev.target.getAttribute("data-id")
    } else {
        idPage = ev.target.parentElement.getAttribute("data-id")
    }
    let activeItem = document.querySelector("nav div[data-id=" + idPage + "]")
    ;[...document.querySelectorAll("nav div.active")].forEach(el => {
        el.classList.remove("active")
    })
    activeItem.classList.add("active")
    let parentItem = activeItem.parentElement
    while (parentItem.tagName !== "NAV") {
        if (parentItem.classList.contains("hidden")) {
            parentItem.previousElementSibling.lastElementChild.innerHTML = "&minus;"
            parentItem.classList.remove("hidden")
        }
        parentItem = parentItem.parentElement
    }
    /* Change breadcrumb */
    createBreadcrumb(activeItem)
    /* Change page */
    if (idPage.slice(0, 2) === "we") {
        workPages(idPage)
    }
    ;[...document.querySelectorAll("main section.active-section")].forEach(el => {
        el.classList.remove("active-section")
    })
    document.querySelector("#" + idPage).classList.add("active-section")
    listenNavigation()
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    if (matchMedia("(max-width: 600px)").matches) {
        document.querySelector("nav").classList.add("hidden")
        updateMenuIcon()
    }
}

/* Set breadcrumb */
function createBreadcrumb(tag) {
    let allPath = tag.firstChild.textContent + "</h1><hr>"
    while (tag.parentElement.tagName != "NAV") {
        tag = tag.parentElement.previousElementSibling
        allPath = '<span data-id="' + tag.getAttribute("data-id") + '">' + tag.firstChild.textContent + "</span> &gt " + allPath
    }
    allPath = "<h1>" + allPath
    document.querySelector("main .breadcrumb").innerHTML = allPath
}

/* Set article HTML */
function setArticleHTML(result = "", article) {
    if (article.project) {
        const monthName = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
        let dtStart = article.start.split("-")
        dtStart = monthName[Number(dtStart[1]) - 1] + "/" + dtStart[0]
        let dtEnd = article.end.split("-")
        dtEnd = (dtEnd[0] === "current" ? "current" : monthName[Number(dtEnd[1] - 1)] + '/' + dtEnd[0])
        result += '<article><h2><div class="project">' + article.project + '</div><div class="period">' + dtStart + ' &#8594; ' + dtEnd + '</div></h2><div class="description">' + article.description + '</div><hr><div class="client"><b>Client: </b>' + article.client + '</div><div class="role"><b>Role: </b>' + article.role + '</div><div class="keyword"><div class="keyword-left"><b>Keyword: </b></div><div class="keyword-right">'
        for (j of article.keyword)
            result += '<span><code>' + j + '</code>, </span>'
        return result.slice(0, -9) + '</span></div></div></article>'
    } else {
        return '<div class="intro">' + article.info + '</div>' + result
    }
}

/* Set work experience pages */
function workPages(mod) {
    let result = ""
    for (article in articles)
        if (articles[article].id === mod)
            result = setArticleHTML(result, articles[article])
    document.querySelector("#" + mod).innerHTML = result
}

/* Set search page */
function searchWork(ev) {
    if (!ev.target.value)
        return 0
    if (ev.target.value.length < 3) {
        document.querySelector("#se").innerHTML = '<div class="intro"><p>The search word should contain at least 3 characters.</p></div>'
        document.querySelector("[data-id='se']").click()
        return 0
    }
    let result = ""
    for (article in articles) {
        let flagSearch = 0
        if (articles[article].project)
            for (key in articles[article])
                switch (key) {
                    case "id":
                        break
                    case "keyword":
                        if (articles[article][key].map(x => x.toLowerCase()).includes(ev.target.value.toLowerCase()))
                            flagSearch = 1
                        break
                    default:
                        if (articles[article][key].toLowerCase().includes(ev.target.value.toLowerCase()))
                            flagSearch = 1
                }
        if (flagSearch === 1)
            result = setArticleHTML(result, articles[article])
    }
    let resultAux = result
    let splitChar = resultAux.search(RegExp(ev.target.value, "i"))
    let lenTarget = ev.target.value.length
    let contTarget = 0
    result = ""
    while (splitChar > 0) {
        let leftText = resultAux.slice(0, splitChar)
        let middleText = resultAux.slice(splitChar, splitChar + lenTarget)
        let rightText = resultAux.slice(splitChar + lenTarget)
        if (rightText.search(">") > rightText.search("<") && rightText.search("<") !== -1) {
            result += leftText + '<b style="color:var(--clr-fst);">' + middleText + '</b>'
            contTarget += 1
        } else {
            result += leftText + middleText
        }
        resultAux = rightText
        splitChar = resultAux.search(RegExp(ev.target.value, "i"))
    }
    result += resultAux
    if (contTarget > 1) {
        result = '<div class="intro"><p>Search results for <b style="color:var(--clr-fst);">' + ev.target.value + '</b> (' + String(contTarget) + ' occurrences):</p></div>' + result
    } else if (contTarget > 0) {
        result = '<div class="intro"><p>Search result for <b style="color:var(--clr-fst);">' + ev.target.value + '</b> (1 occurrence):</p></div>' + result
    } else {
        result = '<div class="intro"><p>No result found for <b style="color:var(--clr-fst);">' + ev.target.value + '</b>.</p></div>'
    }
    document.querySelector("#se").innerHTML = result
    document.querySelector("[data-id='se']").click()
}