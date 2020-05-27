// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  //... your code goes here
  product.querySelector('.subtotal').innerHTML = '$' + price * quantity;
  return price * quantity;
}

// ITERATION 2
function update(e) {
  updateSubtotal(e.target.parentElement.parentElement);
}

// ITERATION 3
function calculateAll() {
  let total = 0;
  document.querySelectorAll('.product').forEach((product) => {
    total += updateSubtotal(product);
  });
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4
function removeProduct(event) {
  const product = event.currentTarget.parentElement.parentElement;
  product.remove();
}

// ITERATION 5
function createProduct(e) {
  const newItem =
    e.target.parentElement.parentElement.children[0].children[0].value;
  const newPrice =
    e.target.parentElement.parentElement.children[1].children[0].value;
  if (!newItem || !newPrice) {
    return alert('Please enter new product name and price!');
  }
  //... your code goes here
  const tr = document.createElement('tr');
  tr.setAttribute('class', 'product');
  tr.innerHTML = `
         <td class="name">
            <span>${newItem}</span>
          </td>
          <td class="price">$<span>${newPrice}</span></td>
          <td class="quantity" onclick="update(event)">
            <input type="number"  value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button onclick="removeProduct(event)" class="btn btn-remove">Remove</button>
          </td>`;
  document.querySelector('#cart tbody').appendChild(tr);

  e.target.parentElement.parentElement.children[0].children[0].value = '';
  e.target.parentElement.parentElement.children[1].children[0].value = '';
}

//Event listeners
window.addEventListener('load', () => {
  document
    .querySelectorAll('.product')
    .forEach((product) =>
      product
        .querySelector('.quantity input')
        .addEventListener('click', () => updateSubtotal(product))
    );

  document.getElementById('calculate').addEventListener('click', calculateAll);

  document.getElementById('create').addEventListener('click', createProduct);

  document
    .querySelectorAll('.btn-remove')
    .forEach((btn) => btn.addEventListener('click', removeProduct));
});
