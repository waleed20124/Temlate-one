    let btn = document.querySelector("button");
    let coin = document.querySelector(".game");
    let result = document.querySelector(".result");

    btn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if (i) {
        setTimeout(() => {
        coin.style.animation = "spin-head 2s forwards";
        }, 100);

        setTimeout(() => {
        result.innerHTML = "tails";
        }, 1900);
    } else {
        setTimeout(() => {
        coin.style.animation = "spin-tail 2s forwards";
        }, 100);

        setTimeout(() => {
        result.innerHTML = "heads";
        }, 1900);
    }
    });
