gsap.registerPlugin(ScrollTrigger) ;

// window.addEventListener('scroll', function() {
//     // var sidebar = document.getElementById('sidebar');
//     const sidebar = document.querySelector('.aside');
//     const section2 = this.document.querySelector('.section-2');

//     const computedStyle = window.getComputedStyle(section2);

//     // Get the value of the flex-direction property
//     const flexDirection = computedStyle.getPropertyValue('flex-direction');

//     var scrollPosition = window.scrollY;
    
//     if( flexDirection == "column") {
//         console.log("col");

//         if (scrollPosition >= 3200) { // Change 200 to the scroll position where you want to stop scrolling
//             sidebar.style.position = 'absolute';
//             sidebar.style.top = '3230px'; // Change 200px to the distance from the top where you want it to stop
//         } else {
//             sidebar.style.position = 'fixed';
//             sidebar.style.top = '30px';
//         }

//     } else  if (flexDirection === 'row') {
//         console.log("row");
//         if (scrollPosition >= 1200) { // Change 200 to the scroll position where you want to stop scrolling
//             sidebar.style.position = 'absolute';
//             sidebar.style.top = '1230px'; // Change 200px to the distance from the top where you want it to stop
//         } else {
//             sidebar.style.position = 'fixed';
//             sidebar.style.top = '30px';
//         }
//     }

    
//   });





gsap.from("#header", {
    scrollTrigger : {
        trigger: "#main",
        start: "top 0",
        end: "bottom bottom",
        markers: true,
        pin: ".aside",
        // start: "buttom buttom",
    },
    // y: 30,
})