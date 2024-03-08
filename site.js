function fetchQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').textContent = `"${data.content}" - ${data.author}`;
        })
        .catch(error => console.log('Error fetching quote:', error));



}
pic = document.getElementById("slideShowImage")
let count = 0;
showSlides();


function showSlides() {
    slide = ['proxy-image1.jpg', 'proxy-image2.jpg', 'proxy-image3.jpg'] 
        count++;
        pic.src = slide[count % 3]
        console.log(count)
    setTimeout(showSlides,2000)
}

