// document.addEventListener(', () => {
    const path = document.getElementById("hello_path")
    const length_path = path.getTotalLength()
    path.style.strokeDasharray = length_path;
    path.style.strokeDashoffset = length_path;
    setTimeout(() => {
        path.style.transition = 'stroke-dashoffset 3.5s ease-in-out'
       path.style.strokeDashoffset = '0' 
    },300)
// })  