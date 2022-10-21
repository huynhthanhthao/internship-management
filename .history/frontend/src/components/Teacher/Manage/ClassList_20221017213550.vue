<template>
  <div class="class">
    <i class="bi bi-arrow-right-circle nav__icon nav--prev is-hidden"></i>
    <div class="class__list">
        <div class="class__item active">DI1996A1</div>
        <div class="class__item">DI1996A2</div>
        <div class="class__item">DI1996A3</div>
        <div class="class__item">DI1996A4</div>
    </div>
    <i class="bi bi-arrow-left-circle nav__icon nav--next"></i>
  </div>
</template>

<script>
export default {
    name: "ClassList",
    mounted(){
        window.addEventListener("load", function () {
            const nav = document.querySelector(".navigation");
            const navList = document.querySelector(".nav__list");
            const navItems = document.querySelectorAll(".nav__item");
            const navIcon = document.querySelector(".nav__icon");
            const navPrev = document.querySelector(".nav--prev");
            const navNext = document.querySelector(".nav--next");

            const navLeft = nav && nav.offsetLeft;
            const gapScrollClick = 50;
            const scrollWidthNavList = navList.scrollWidth - navList.clientWidth;

            [...navItems].forEach(function (navItem) {
                navItem.addEventListener("click", handleBorderItem);
            });

            function handleBorderItem(event) {
                [...navItems].forEach(navItem => {
                    navItem.classList.remove("active");
                })
                event.target.classList.add("active");
                const navItemLeft = event.target.offsetLeft;
                const scrollPosition = navItemLeft / 1.8;
                navList.scroll(scrollPosition, 0);
                if (navList.scrollLeft > 0) {
                    navPrev.classList.remove("is-hidden");
                } else {
                    navPrev.classList.add("is-hidden");
                }

                if (navList.scrollLeft >= scrollWidthNavList) {
                    navNext.classList.add("is-hidden");
                }
                else {
                    navNext.classList.remove("is-hidden");
                }
            }


            navList.addEventListener("wheel", function (event) {
                const delta = event.deltaY;
                this.scrollLeft += delta;

                if (this.scrollLeft > 0) {
                    navPrev.classList.remove("is-hidden");
                }
                if (this.scrollLeft < scrollWidthNavList) {
                    navNext.classList.remove("is-hidden");
                }
                if (this.scrollLeft >= scrollWidthNavList) {
                    navNext.classList.add("is-hidden");
                } else if (this.scrollLeft <= 0) {
                    navPrev.classList.add("is-hidden");
                }
            });

            navNext.addEventListener("click", function (event) {
                navList.scrollLeft += gapScrollClick;
                navPrev.classList.remove("is-hidden");
                if (navList.scrollLeft >= scrollWidthNavList) {
                    this.classList.add("is-hidden");
                }

            })

            navPrev.addEventListener("click", function (event) {
                navList.scrollLeft -= gapScrollClick;
                navNext.classList.remove("is-hidden");
                if (navList.scrollLeft <= 0) {
                    this.classList.add("is-hidden");
                }
            })
        })


    }
}
</script>

<style scoped>
.class {
    width: 500px;
    margin: 50px auto 0px;
    padding: 0;
    display: flex;
    align-items: center;

}

.nav__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 30px;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 20px;

}

.class__list {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    position: relative;
}

.class__list::-webkit-scrollbar {
    display: none;
}

.class__item {
    padding: 5px 10px;
    font-size: 1.6rem;
    cursor: pointer;
    border-bottom: 2px solid rgba(64, 68, 162, 0.25);
}

.class__item.active {
    transition: border-bottom 0.5s linear;
    border-bottom-color: #2f2fe6;
}

.class__icon.is-hidden {
    visibility: hidden;
}
</style>