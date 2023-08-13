//مدیریت نمایش منو در سایز زیر 768 پیکسل و در زمان کلید بر روی تصویر همبرگری
document.getElementById("toggle").addEventListener("click", displayMenu);

let displayState = false;
function displayMenu() {
    document.querySelectorAll('#menu > li').forEach(el => {
        if (!el.classList.contains('ham')) {
            el.style.display = displayState == false ? 'block' : 'none';
        }
    });
    displayState = !displayState;
}




// ایجاد رویداد و فراخوانی تابع در زمان تغییر سایز ی زوم صفحه نمایشگر
if (window.addEventListener) {  
    window.addEventListener("resize", onResizeEvent, true);
} else {
    if (window.attachEvent) { 
        window.attachEvent("onresize", onResizeEvent);
    }
}

function onResizeEvent() {
    newWidth = document.getElementsByTagName("body")[0].offsetWidth;
    displayState = newWidth > 768 ? false : true;
    displayMenu();
}