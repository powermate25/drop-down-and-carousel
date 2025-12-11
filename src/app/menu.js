const clog = console.log
clog("menu.js")

/// Code
const menuDisplay1 = function () {
    const menuBtn = document.querySelectorAll("menu button")
    const menuList = document.querySelectorAll("menu ul")

    clog(menuList)
    // Menu list hidden by default
    menuList.forEach( i => i.style.display = "none")

    // Menu list shown on hover
    menuBtn.forEach(i => {
        i.addEventListener("pointerenter", () => {
        menuList.forEach( i => i.style.display = "")
        })
    })
    
    // Menu list hidden on pointer lease
    menuList.forEach(i => {
        i.addEventListener("pointerleave", () => {
        i.style.display = "none" })
    })
}

// This module works with 3 parameters.
// NB: Make sure parent element and it's children follow the correct hierarchy.
// Parameter 1. <menuDivElement> Unique parent element selector ( <#elementID> or <.elementClass>)
// Parameter 2. <menuBtnElement> First Child as Title: div element
// Parameter 3. <menuListElement> Second Child as List: ordered or Unordered List element



const menuDisplay = function (menuDivElement, menuBtnElement, menuListElement) {
    const menuBtn = document.querySelector(`${menuDivElement} ${menuBtnElement}`)
    const menuList = document.querySelector(`${menuDivElement} ${menuListElement}`)

if (menuBtn && menuList) {
    clog(menuBtn)
    clog(menuList)

    const showMenuList = function () {
        menuList.style.display = "block"
        menuList.style.listStyle = "none"
        menuList.style.position = "fixed"
        menuList.style.margin = "0"
        menuList.style.padding = "0"
        
        menuBtn.classList.add("showing-menu") 
    }

    const hideMenuList = function () {
        menuList.style.display = "none"
    }

    // Menu list hidden by default
    hideMenuList()

    // Menu list shown on hover
    menuBtn.addEventListener("mouseenter", () => {
    showMenuList()
    })

    menuList.addEventListener("mouseenter", () => {
        showMenuList()
    })

    // Menu list hidden on pointer leave
    menuList.addEventListener("mouseleave", () => {
        hideMenuList()
    })

    menuBtn.addEventListener("mouseleave", () => {
        hideMenuList()
    })
    
} else { clog ("🔔 Waiting for valid element selectors as function parameters") }
}

export { menuDisplay }