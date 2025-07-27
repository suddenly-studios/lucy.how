document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('h1');
    
    header.addEventListener('click', function() {
        const phrases = [
            'Goose',
            'HONK',
            'Lucy'
        ];
        
        const currentText = header.textContent;
        const currentIndex = phrases.indexOf(currentText);
        const nextIndex = (currentIndex + 1) % phrases.length;
        
        header.textContent = phrases[nextIndex];
    });
});