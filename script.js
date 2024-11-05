document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        var counter = new Date().getMilliseconds(); 
    
        for (var i = 0; i < 6; i++) {
            var index = counter % 16; 
            color += letters[index];
            counter += 7; 
        }
        
        return color;
    }
    changeColorBtn.addEventListener('click', () => {
        colorBox.style.backgroundColor = getRandomColor();
    });
});
