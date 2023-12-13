$(document).ready(() => {
    const addCreatureButton = document.querySelector("#add-creature");
    const creatureMenu = $("#add-creature-menu");
    $('input[type="number"]').on('wheel', function (e) {
        e.preventDefault();

        // Увеличение или уменьшение значения в зависимости от направления колесика мыши
        if (e.originalEvent.deltaY < 0) {
            // Вверх
            $(this).val(Math.min(parseInt($(this).val(), 10) + 1, $(this).attr('max')));
        } else {
            // Вниз
            $(this).val(Math.max(parseInt($(this).val(), 10) - 1, $(this).attr('min')));
        }
    });

    $(".save-char").mouseup(() => {
        const nonChangable = ["health", "max-health", "added-health", "armor-raiting"];
        const elemsArr = document.querySelector('.char-item.editing').querySelectorAll(".char-param");
        let health = new Map;
        if (elemsArr.length > 0) {
            elemsArr.forEach((elem) => {
                let elemLabel = elem.querySelector('label');
                let elemInput = elem.querySelector('input');
                let tmpValue = elemLabel.innerText + elemInput.value;
                if (!nonChangable.includes(elem.classList[1])) {
                    elemInput.outerHTML = `<div class="${elemInput.className}" id="${elemInput.id}">${tmpValue}</div>`;
                    elemLabel.remove();
                } else if (elem.classList[1] !== "armor-raiting") {
                    health.set(elem.classList[1], elemInput.value);
                    elem.remove();
                }
            })
            let healthPercentage = Math.floor(health.get('health') / health.get('max-health') * 100);
            const healthbar = document.createElement('div');
            healthbar.style = `position: relative; height: 18px; width: 100%; background-color: red`;
            healthbar.innerHTML = `<div style="position: absolute; left: 0px; bottom: 0px; background-color: green; height: 100%; width: ${healthPercentage}%"> ${health.get('health')}/${health.get('max-health')}(${health.get('added-health')})</div>`;
            $('.char-item.editing').append(healthbar);

        }
        $('.char-item.editing').removeClass('editing');
        $(".save-char").remove();

    })
    
    $(document).mouseup((e) => {
        if (creatureMenu.hasClass("active")) {
            if (!creatureMenu.is(e.target) && creatureMenu.has(e.target).length === 0) {
                creatureMenu.removeClass('active');
            }
        }
    })

    creatureMenu.mouseup(() => {
        if (!creatureMenu.hasClass("active")) {
            creatureMenu.addClass("active");
        }
    });
});