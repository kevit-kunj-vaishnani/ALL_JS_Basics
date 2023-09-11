/* CONCEPT 1 = adding all items by giving spread parameter in parameter */

const add = (...items) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i];
  }
  console.log(total);
};

add(1, 2, 3);

/*  output = 6 */
