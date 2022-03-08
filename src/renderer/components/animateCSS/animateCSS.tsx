const animateCSS = (element: any, animation: string, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        let node: HTMLElement;
        switch (typeof element) {
            case 'object':
                node = element;
                break;
            case 'string':
                node = document.querySelector(element);
                break;
            default:
                return;
        }

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event: Event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

export { animateCSS }