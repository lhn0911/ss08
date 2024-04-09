"use strict";
function chek(input) {
    if (Array.isArray(input)) {
        input.forEach((item) => {
            console.log(item);
        });
    }
    else {
        console.log(input);
        ;
    }
}
chek("123");
chek(["1", "2", "3"]);
