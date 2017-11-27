const calcOrder = (cart) => {
  let subtotal = 0;
  let shipping = 0;
  let total = 0;
  cart.forEach(item => {
    subtotal += item.price;
    shipping += 10;
  });

  if(subtotal > 250) {
    shipping = 0;
  }

  total = subtotal + shipping;

  return { subtotal, shipping, total };
};

export default calcOrder;
