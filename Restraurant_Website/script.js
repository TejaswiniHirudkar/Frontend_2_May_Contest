async function getMenu(){
  let response = await fetch('https://avivashishta29.github.io/f2-contest-test/db.json');
  let result = await response.json();
  console.log(result)
  try{
    result.forEach(ele => {
      const menuContainer=document.getElementById("menu-container");
      let card = document.createElement("div");
      card.className="menu-item";
      card.innerHTML=`<div class="image">
      <img src="${ele.imgSrc}"></div><div class="nameprice">
      <h3>${ele.name}</h3>
      <p>${ele.price}</p></div>`;
      menuContainer.appendChild(card);
    });
  }
  catch(err){
    console.log(err);
  }
}
window.addEventListener('load', getMenu);

//Take the order
function takeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const order = {
        burgers: []
      };
      // For selecting 3 burgers from the menu
      fetch('https://avivashishta29.github.io/f2-contest-test/db.json')
        .then(function (response){
          return response.json();
        })
        .then(data => {
          const burgers = data.filter(item => item.category === 'burger');
          for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * burgers.length);
            order.burgers.push(data[randomIndex].name);
          }
          resolve(order);
        })
        .catch(error => {
          console.error('Error fetching menu for order:', error);
        });
    }, 2500);
  });
  
}

// Function for order preparation
function orderPrep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderStatus = {order_status: true, paid: false};
      resolve(orderStatus);
    }, 1500);
  });
}

// Function for payment
function payOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderStatus = {order_status: true, paid: true};
      resolve(orderStatus);
    }, 1000);
  });
}

function thankyouFnc() {
  alert('Thank you for eating with us today!');
}

// Handling promises using async/await
async function handlePromises() {
  try {
    // await getMenu();
    const order = await takeOrder();
    console.log('Order:', order)
   
    const orderStatus = await orderPrep();
    console.log('Order Status:', orderStatus);

    const paymentStatus = await payOrder();
    console.log('Payment Status:', paymentStatus);

    if(paymentStatus){
      thankyouFnc();
    }

  } catch (error) {
    console.error('Error handling promises:', error);
  }
}

// Calling the function
let btn=document.getElementById('place-order');
btn.addEventListener('click', handlePromises);
