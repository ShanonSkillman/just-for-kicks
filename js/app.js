// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.
// element.addEventListener('event', functionName);
// getElementsById.addEventListener('click', seeDetails)
const seeDetails = document.getElementById('details');
seeDetails.onclick = function(){
    alert('Not Available in Hawaii')
};

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

const airJordan2 = document.getElementById('name1');
// airJordan2.appendChild('descrip1');

airJordan2.onmouseover = function(){
    const showDescrip = document.getElementById('descrip1')
if (showDescrip.style.display === "none"){
    showDescrip.style.display = "block";
}else{
    showDescrip.style.display = "none";
    }
}

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'


const descrip2 = document.createElement('div')
descrip2.setAttribute('id','descrip2')
descrip2.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season."
name2.appendChild(descrip2)


name2.onclick = function(){
    const showDescrip2 = document.getElementById('descrip2')
if (showDescrip2.style.display === "none"){
    showDescrip2.style.display = "block";
}else{
    showDescrip2.style.display = "none";
    }
}
//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

const thumbsUpButton = document.getElementsByClassName("far fa-thumbs-up");

for(var i=0; i<thumbsUpButton.length; i++){
    thumbsUpButton[i].addEventListener('click', vote);

    const counter = document.createElement('div');
    counter.className = 'counter';
    counter.innerHTML = 0;
    thumbsUpButton[i].appendChild(counter)
}

function vote(){
    const thumbsUpCount = this.querySelectorAll('.counter')[0];
    thumbsUpCount.innerHTML++
}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

const airJordanV = document.getElementById("increase")

// const airJordanPrice = document.createElement('div');
// airJordanPrice.className = 'price';
// airJordanPrice.innerHTML = '58000'


airJordanV.addEventListener("click", increase)


function increase(){
    // const priceIncrease = document.getElementById('price4').innerHTML;
    // console.log("58000", priceIncrease)

    // const jordanPrice = document.createElement('div');
    // jordanPrice.className = 'jordanPrice';
    // jordanPrice.innerHTML = priceIncrease + 580000
    // jordanPrice[i].appendChild(airJordanV)
    price4.childNodes[0].textContent = Number(price4.childNodes[0].textContent)+58000
}


// const html = `<p id=price>58000<p><span id="increase"><i class="far fa-plus-square"></i></span>`;

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

const newJordanPrice = document.getElementById("decrease");

newJordanPrice.addEventListener("click", dec);

function dec(){
    price5.childNodes[0].textContent--
}

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 


//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.

