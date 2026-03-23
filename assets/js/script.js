//ランダムにおみくじが層のパスを返す処理
function getRandomImage(){
    const number = Math.floor(Math.random() * 10);
    const imagePath = `assets/images/result-${number}.png`;
    return imagePath;
};

// console.log(getRandomImage())

// ボタンを押したらスロットが開店する処理
function playAnzankigan(){
    const timer = setInterval(function(){
        document.querySelector("#js-result").setAttribute("src",getRandomImage());
    },100);
    
    //数秒着にスロットが止まる処理
    setTimeout(function(){
        clearInterval(timer);
    }, 3000);
};

document.querySelector("#js-button").addEventListener("click",playAnzankigan);