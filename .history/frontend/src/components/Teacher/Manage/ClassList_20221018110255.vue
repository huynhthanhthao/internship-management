<template>
  <div class="classes">
    <i class="bi bi-arrow-left-circle classes__icon classes--prev is-hidden"></i>
    <div class="classes__list">
        <div class="classes__item active">DI1996A1</div>
        <div class="classes__item">DI1996A2</div>
        <div class="classes__item">DI1996A3</div>
        <div class="classes__item">DI1996A4</div>
    </div>
    <i class="bi bi-arrow-right-circle classes__icon classes--next"></i>
  </div>
</template>

<script>
export default {
    name: "ClassList",
    mounted(){
        window.addEventListener("load", function () {

            const classList = document.querySelector(".classes__list");
            const classItems = document.querySelectorAll(".classes__item");
            const classPrev = document.querySelector(".classes--prev");
            const classNext = document.querySelector(".classes--next");

            const gapScrollClick = 50;
            const scrollWidthClassList = classList.scrollWidth - classList.clientWidth;

            [...classItems].forEach(function (classItem) {
                classItem.addEventListener("click", handleBorderItem);
            });

            function handleBorderItem(event) {
                [...classItems].forEach(classItem => {
                    classItem.classList.remove("active");
                })
                event.target.classList.add("active");
                const classItemLeft = event.target.offsetLeft;
                const scrollPosition = classItemLeft / 1.8;
                classList.scroll(scrollPosition, 0);
                if (classList.scrollLeft > 0) {
                    classPrev.classList.remove("is-hidden");
                } else {
                    classPrev.classList.add("is-hidden");
                }

                if (classList.scrollLeft >= scrollWidthClassList) {
                    classNext.classList.add("is-hidden");
                }
                else {
                    classNext.classList.remove("is-hidden");
                }
            }


            classList.addEventListener("wheel", function (event) {
                const delta = event.deltaY;
                this.scrollLeft += delta;

                if (this.scrollLeft > 0) {
                    classPrev.classList.remove("is-hidden");
                }
                if (this.scrollLeft < scrollWidthClassList) {
                    classNext.classList.remove("is-hidden");
                }
                if (this.scrollLeft >= scrollWidthClassList) {
                    classNext.classList.add("is-hidden");
                } else if (this.scrollLeft <= 0) {
                    classPrev.classList.add("is-hidden");
                }
            });

            classNext.addEventListener("click", function () {
                classList.scrollLeft += gapScrollClick;
                classPrev.classList.remove("is-hidden");
                if (classList.scrollLeft >= scrollWidthClassList) {
                    this.classList.add("is-hidden");
                }

            })

            classPrev.addEventListener("click", function () {
                classList.scrollLeft -= gapScrollClick;
                classNext.classList.remove("is-hidden");
                if (classList.scrollLeft <= 0) {
                    this.classList.add("is-hidden");
                }
            })
        })


    }
}
</script>

<style scoped>


.classes__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 20px;
    font-size: 50px;

}

.classes__list {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    position: relative;
}

.classes__list::-webkit-scrollbar {
    display: none;
}

.classes__item {
    padding: 5px 10px;
    font-size: 15px;
    cursor: pointer;
    border-bottom: 2px solid rgba(64, 68, 162, 0.25);
}

.classes__item.active {
    transition: border-bottom 0.5s linear;
    border-bottom-color: #2f2fe6;
}

.classes__icon.is-hidden {
    visibility: hidden;
}
</style>