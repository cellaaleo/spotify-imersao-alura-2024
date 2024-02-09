
function buttonTooltip(button,tt,text) {

    var item = document.getElementById(button);
    var tooltip = document.getElementById(tt);

    item.addEventListener('mouseover', function() {
        var itemOffsetTop = item.offsetTop;
        var itemOffsetLeft = item.offsetLeft;

        tooltip.innerHTML = text;
    
        var tooltipTop = itemOffsetTop - tooltip.offsetHeight - 22; // Posiciona a tooltip acima do elemento pai
        var tooltipLeft = itemOffsetLeft // + (itemWidth - tooltip.offsetWidth)/2; // Centraliza a tooltip em relação ao elemento pai

        tooltip.style.top = tooltipTop + 'px';
        tooltip.style.left = tooltipLeft + 'px';
        tooltip.style.display = 'block';
    });
    
    item.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
    });

}

buttonTooltip('tooltip_1-item','tooltip_1','Ocultar Sua Biblioteca');
buttonTooltip('tooltip_2-item','tooltip_2','Criar playlist ou pasta');