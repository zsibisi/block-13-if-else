// script prints true if both parameters are greater than or equal to:

  function greaterOrEqualToFive(num1, num2) {
    if (num1 >= 5 && num2 >= 5) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  greaterOrEqualToFive(5, 6); // true
  greaterOrEqualToFive(10, 11); // true
  greaterOrEqualToFive(0, 0); // false
  greaterOrEqualToFive(1000, -1000); // false
  greaterOrEqualToFive(6, 4); // false
  greaterOrEqualToFive(5, 5); // true

