document.documentElement.style.setProperty('--animate-duration', '1.2s');
$(document).ready(function () {
    const offset = '80%';
    $(".header__text__thin").waypoint(function () {

        $(".header__text__thin").addClass("animate__animated animate__slideInLeft")
    }, { offset })


    $(".heading-primary").waypoint(function () {

        $(".heading-primary").addClass("animate__animated animate__slideInLeft")
    }, { offset })


    $(".header__text__para").waypoint(function () {

        $(".header__text__para").addClass("animate__animated animate__slideInLeft")
    }, { offset })

    // BUTTON
    $(".button").waypoint(function () {

        $(".button").addClass("animate__animated animate__zoomIn")
    }, { offset })


    // Base Typography
    $(".heading-secondary").waypoint(function () {

        $(".heading-secondary").addClass("animate__animated animate__zoomIn")
    }, { offset })

    // Feature Boxes
    $(".feature__box1").waypoint(function () {

        $(".feature__box1").addClass("animate__animated animate__slideInLeft")
    }, { offset })

    $(".feature__box3").waypoint(function () {

        $(".feature__box3").addClass("animate__animated animate__slideInRight")
    }, { offset })

    $(".feature__box2").waypoint(function () {

        $(".feature__box2").addClass("animate__animated animate__zoomIn")
    }, { offset })



    // Service Boxes
    $(".service__box1").waypoint(function () {

        $(".service__box1").addClass("animate__animated animate__slideInLeft")
    }, { offset })

    $(".service__box3").waypoint(function () {

        $(".service__box3").addClass("animate__animated animate__slideInRight")
    }, { offset })

    $(".service__box2").waypoint(function () {

        $(".service__box2").addClass("animate__animated animate__zoomIn")
    }, { offset })

    // QUOTE SECTION
    $(".quote__text").waypoint(function () {

        $(".quote__text").addClass("animate__animated animate__slideInLeft")
    }, { offset })

    $(".quote__image").waypoint(function () {

        $(".quote__image").addClass("animate__animated animate__slideInRight")
    }, { offset })
    // TESTIMONIAL BOX

    for (let i = 1; i < 5; i++) {
        $(`.testimonial__${i}`).waypoint(function () {

            $(`.testimonial__${i}`).addClass("animate__animated animate__zoomIn")
        }, { offset })

    }

    // FORM


    $(".form").waypoint(function () {

        $(".form").addClass("animate__animated animate__bounceIn")
    }, { offset })

})

