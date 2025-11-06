# What I did to make the carousel pretty

## 1. added some rounded corners
In `style.css` I set the `border-radius` of `img`.
```
img {
    ...
    border-radius: 100px;
}
```

## 2. adjusted the transition timing
In `sript.js`, I used `cubic-bezier(x1, y1, x2, y2)` function to set transition animation.
```
prevButton.addEventListener("click", () => {
    ...    
    slideContainer.style.transition = "transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)"; // cubic-bezier(x1, y1, x2, y2) x1: start; y1:speed up control; x2: speed down control; y2: end
    ...
});
```

## 3. changed the buttons' look into the ones that conforming to the pictures.
In `style.css` I set the buttons' look.
```
button {
    margin-top: 10%;
    margin-left: 20px;
    transform: translateY(-50%);
    padding: 10px 16px;
    border-radius: 50%;
    cursor: pointer;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    color: chocolate;
    border-color: orangered;
}
```

## 4. added a fade-in animation to the carousel
In `style.css` I added a fade-in animation to the carousel.
```
.carousel {
    ...
    animation: fadeIn 1s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.98);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
```