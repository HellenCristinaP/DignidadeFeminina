const navbarNav = document.getElementById("navbarNav");
const buttonNav = document.querySelector("button")

buttonNav.addEventListener("click", () => {
    const isExpanded = buttonNav.getAttribute('aria-expanded') === 'true';

    navbarNav.classList.toggle("collapse")
    buttonNav.setAttribute("aria-expanded", !isExpanded)
    buttonNav.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu")
})