const fieldCell = document.getElementById("gameField");
const button = document.querySelector("button");
button.addEventListener("click", spawnFlowers);
function spawnFlowers() {
    const flowerPetalColors = [
        // 🔥 Яркие градиенты
        "linear-gradient(45deg, #FF1493, #DC143C)", // Розово-красный
        "linear-gradient(45deg, #FF4500, #FF1493)", // Оранжево-розовый
        "linear-gradient(45deg, #8A2BE2, #1E90FF)", // Фиолетово-голубой
        "linear-gradient(45deg, #9370DB, #FF69B4)", // Лилово-розовый
        "linear-gradient(45deg, #40E0D0, #1E90FF)", // Бирюзово-голубой
        "linear-gradient(45deg, #FF00FF, #8A2BE2)", // Фуксия-фиолетовый
        "linear-gradient(45deg, #C71585, #FF3366)", // Тёмно-розовый → Неоновый розовый
        "linear-gradient(45deg, #483D8B, #BA55D3)", // Тёмно-синий → Фиолетовый
        "linear-gradient(45deg, #8B0000, #FF4500)", // Тёмно-красный → Оранжевый
        "linear-gradient(45deg, #FF69B4, #FF00FF)", // Ярко-розовый → Фуксия  
        "linear-gradient(45deg, #6A5ACD, #1E90FF)", // Сиреневый → Голубой  
        "linear-gradient(45deg, #FF3366, #FF6347)", // Малиновый → Лососевый  
        "linear-gradient(45deg, #DA70D6, #FF1493)", // Орхидея → Глубокий розовый  
        "linear-gradient(45deg, #FF00FF, #FF1493)", // Неоновый фуксия → Ярко-розовый  
        "linear-gradient(45deg, #40E0D0, #9370DB)", // Бирюзовый → Лавандовый  
        "linear-gradient(60deg, #FF69B4, #FF1493, #DC143C)", // Три оттенка розового  
        "linear-gradient(60deg, #8A2BE2, #6A5ACD, #1E90FF)", // Фиолетовый → Голубой  
        "linear-gradient(60deg, #FF4500, #FF3366, #FF69B4)", // Оранжевый → Красный → Розовый  
        "linear-gradient(60deg, #40E0D0, #9370DB, #FF1493)", // Бирюзовый → Фиолетовый → Розовый  
        "linear-gradient(60deg, #483D8B, #6A5ACD, #1E90FF)", // Тёмно-синий → Сиреневый → Голубой  
        "radial-gradient(circle, #FF1493, #DC143C)", // Радужный розово-красный  
        "radial-gradient(circle, #FF00FF, #8A2BE2)", // Радужный фуксия-фиолетовый  
        "radial-gradient(circle, #40E0D0, #1E90FF)", // Радужный бирюзовый-голубой  
        "radial-gradient(circle, #FF4500, #FF1493)", // Радужный оранжевый-розовый  
        "radial-gradient(circle, #6A5ACD, #FF3366)", // Радужный сиреневый-малиновый  
    ];
    
    
    const flowCont = fieldCell.querySelector(".flowers-container");
    if (flowCont) {
        flowCont.remove();
    }
    const flowersContainer = document.createElement("div");
    flowersContainer.className = "flowers-container";
    const amountOfFlowers = Math.round(2 + Math.random());
    const allFlowers = ["chamomile", "tulip", "sunflower"];
    const allCurrFlowers = [];
    for (let flower = 0; flower < amountOfFlowers; flower++) {
        currentFlower =
            allFlowers[Math.trunc(Math.random() * allFlowers.length)];
        if (currentFlower == "chamomile") {
            const chamomile = document.createElement("div");
            chamomile.className = "chamomile";
            const chamomileCenter = document.createElement("div");
            chamomileCenter.className = "chamomile-center";
            chamomile.appendChild(chamomileCenter);
            const randPetalColor = flowerPetalColors[Math.floor(flowerPetalColors.length*Math.random())]
            for (let petalCount = 0; petalCount < 12; petalCount++) {
                const petal = document.createElement("div");
                petal.className = "chamomile-petal";
                petal.style = `--i:${petalCount}`;
                petal.style.background = randPetalColor
                chamomile.appendChild(petal);
            }
            allCurrFlowers.push(chamomile);
            flowersContainer.appendChild(chamomile);
        }
        if (currentFlower == "tulip") {
            const tulip = document.createElement("div");
            tulip.className = "tulip";
            const randPetalColor = flowerPetalColors[Math.floor(flowerPetalColors.length*Math.random())]
            for (let petalCount = 0; petalCount < 3; petalCount++) {
                const petal = document.createElement("div");
                petal.className = "tulipPetal";
                if (petalCount == 0) {
                    petal.style = "--i:0; --color1:#ff4d6d; --color2:#ff8fa3";
                } else if (petalCount == 1) {
                    petal.style = "--i:1; --color1:#ff758f; --color2:#ffb3c1";
                } else if (petalCount == 2) {
                    petal.style = "--i:2; --color1:#ff8fa3; --color2:#ffccd5";
                }
                tulip.appendChild(petal);
                petal.style.background = randPetalColor
            }
            const tulipCore = document.createElement("div");
            tulipCore.className = "tulip-core";
            tulip.appendChild(tulipCore);
            allCurrFlowers.push(tulip);
            flowersContainer.appendChild(tulip);
        }
        if (currentFlower == "sunflower") {
            const sunflower = document.createElement("div");
            sunflower.className = "sunflower";
            const petals = document.createElement("div");
            petals.className = "petals";
            sunflower.appendChild(petals);
            const randPetalColor = flowerPetalColors[Math.floor(flowerPetalColors.length*Math.random())]
            for (let petalCount = 0; petalCount < 12; petalCount++) {
                const petal = document.createElement("div");
                petal.className = "petal";     
                petal.style = `--i:${petalCount}`;
                petal.style.background = randPetalColor
                petals.appendChild(petal);
            }
            const center = document.createElement("div");
            center.className = "center";
            for (let seedCount = 0; seedCount < 3; seedCount++) {
                const seed = document.createElement("div");
                seed.className = "seed";
                seed.classList.add(`seed${seedCount + 1}`);
                center.appendChild(seed);
            }
            sunflower.appendChild(center);
            allCurrFlowers.push(sunflower);
            flowersContainer.appendChild(sunflower);
        }
    }
    function positionFlowers(allCurrFlowers) {
        const positions = [
            { left: "12px", top: "12px", altLeft: "-6px", altTop: "-6px" },
            {
                right: "12px",
                bottom: "12px",
                altRight: "-6px",
                altBottom: "-6px",
            },
            { right: "12px", top: "12px", altRight: "-6px", altTop: "-6px" },
        ];

        allCurrFlowers.forEach((flower, index) => {
            if (index >= positions.length) return; // Защита от ошибок, если цветов больше 3
            const pos = positions[index];

            if (flower.className === "sunflower") {
                Object.assign(flower.style, {
                    left: pos.left || "",
                    top: pos.top || "",
                    right: pos.right || "",
                    bottom: pos.bottom || "",
                });
            } else {
                Object.assign(flower.style, {
                    left: pos.altLeft || "",
                    top: pos.altTop || "",
                    right: pos.altRight || "",
                    bottom: pos.altBottom || "",
                });
            }
        });
    }
    positionFlowers(allCurrFlowers);
    fieldCell.appendChild(flowersContainer);
}
