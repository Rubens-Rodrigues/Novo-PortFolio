//nav bar
function initNavMenu() {
  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }

    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }

    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }

  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
  );
  mobileNavbar.init();

  //Faz com que o menu Mobie suma se clicar fora
  const menu = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list");

  document.addEventListener("click", function (event) {
    if (event.target.matches(".mobile-menu")) {
      menu.classList.add("active");
      navList.classList.add("active");
    } else if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      navList.classList.remove("active");
    }
  });
}

initNavMenu();

//animacao scroll

function initAnimeScroll() {
  const sections = document.querySelectorAll(".js-scroll, .js-scroll2");
  const windowMetade = window.innerHeight * 1;

  function animeScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionViseble = sectionTop - windowMetade < 0;
      if (sectionViseble) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }
  animeScroll();

  window.addEventListener("scroll", animeScroll);
}
initAnimeScroll();

