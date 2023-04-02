let checkoutBtn = document.querySelector('.checkoutBtn');

checkoutBtn.addEventListener('click', function () {
   window.open('/Cart _ Payment/Payment Page/payment.html', '_self');
});

let user = localStorage.getItem('user');

let container = document.getElementById('CartContainer');

async function fetchUser() {
   try {
      let res = await fetch(
         `https://64230bad001cb9fc2036bd2f.mockapi.io/users/${user}`
      );
      let userData = await res.json();
      localStorage.setItem('CURRENT_USER', JSON.stringify(userData));
      console.log(userData);
      displaycartItems(userData.cartList);
   } catch (error) {
      console.log(error);
   }
}

async function updateUser(userId, user) {
   console.log(userId, user);

   try {
      let res1 = await fetch(
         `https://64230bad001cb9fc2036bd2f.mockapi.io/users/${userId}`,
         {
            method: 'put',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' },
         }
      );
      let userData1 = await res1.json();

      displaycartItems(userData1.cartList);
   } catch (error) {
      console.log(error);
   }
}
fetchUser();

function displaycartItems(data) {
   container.innerHTML = '';
   console.log('DATA HERE', data);
   data.forEach((ele) => {
      let card = document.createElement('div');
      card.setAttribute('class', 'card');

      let image = document.createElement('img');
      image.setAttribute('src', `${ele.images.mainImg}`);
      image.setAttribute('class', 'cartImage');
      console.log(ele.images.mainImg);

      let name = document.createElement('p');
      name.setAttribute('class', 'name');
      name.innerText = ele.title;

      let price = document.createElement('p');
      price.setAttribute('class', 'price');
      price.innerText = `$ ${+ele.price}`;

      let quantityofItem = document.createElement('span');
      quantityofItem.setAttribute('class', 'quantityofItem');
      quantityofItem.innerText = ele.quantity;

      let price_name_quatity_container = document.createElement('div');
      price_name_quatity_container.setAttribute(
         'class',
         'price_name_quatity_container'
      );

      let increaseBtn = document.createElement('button');
      increaseBtn.setAttribute('class', 'increaseBtn');
      increaseBtn.innerText = '+';

      increaseBtn.addEventListener('click', async () => {
         data.find((i) => i.id === ele.id).quantity++;
         const currentUser = JSON.parse(localStorage.getItem('CURRENT_USER'));

         currentUser.cartList = data;

         displaycartItems(currentUser.cartList);
         localStorage.setItem('CURRENT_USER', JSON.stringify(currentUser));

         await updateUser(user, currentUser);
      });

      let decreaseBtn = document.createElement('button');
      decreaseBtn.setAttribute('class', 'decreaseBtn');
      decreaseBtn.innerText = '-';

      decreaseBtn.addEventListener('click', async () => {
         if (ele.quantity > 1) {
            data.find((i) => i.id === ele.id).quantity--;
            const currentUser = JSON.parse(
               localStorage.getItem('CURRENT_USER')
            );

            currentUser.cartList = data;

            displaycartItems(currentUser.cartList);
            localStorage.setItem('CURRENT_USER', JSON.stringify(currentUser));

            await updateUser(user, currentUser);
         }
      });

      let incre_decre_quantity_container = document.createElement('div');
      incre_decre_quantity_container.setAttribute(
         'class',
         'incre_dec_quantity_container'
      );

      let removeItem = document.createElement('button');
      removeItem.setAttribute('class', 'removeItem');
      removeItem.innerText = 'REMOVE';

      removeItem.addEventListener('click', async () => {
         const newData = data.filter((item) => {
            return item.id !== ele.id;
         });
         const currentUser = JSON.parse(localStorage.getItem('CURRENT_USER'));

         currentUser.cartList = newData;

         displaycartItems(currentUser.cartList);
         localStorage.setItem('CURRENT_USER', JSON.stringify(currentUser));

         await updateUser(user, currentUser);
      });

      let sidebar = document.createElement('div');
      sidebar.setAttribute('class', 'sidebar');

      sidebar.append(
         price_name_quatity_container,
         incre_decre_quantity_container,
         removeItem
      );
      incre_decre_quantity_container.append(
         decreaseBtn,
         quantityofItem,
         increaseBtn
      );
      price_name_quatity_container.append(
         price,
         name,
         incre_decre_quantity_container
      );

      card.append(image, sidebar);
      container.append(card);
   });

   let sum = 0;
   for (let i = 0; i < data.length; i++) {
      sum += data[i].price * data[i].quantity;
   }
   document.getElementById('cart_total').textContent = `TOTAL:${Math.floor(
      sum
   )}`;
}
