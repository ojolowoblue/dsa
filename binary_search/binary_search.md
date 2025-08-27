# Binary Search Algorithm

<p>Given a value **N** to search for in an array</p>

-Start with two pointers: left (index 0) and right (last index of the array). `left = 0; right = array.length - 1;`

-While left is less than or equal to right: `while(left <= right){ then... }`

-Calculate the middle index mid as the average of left and right (approximately). `mid = Math.floor((left + right) / 2)`

-If the element at array[mid] equals N, return mid (found) `if array[mid] === N return mid`

-If N is less than the middle element, move the right pointer to mid - 1 (search left half). `if N < array[mid]`

-If N is more than the middle element, move the left pointer to mid + 1 (search right half). `if N > array[mid]`

-If no match is found, `return -1`.

Time Complexity: O(logN)
Space Complexity: O(1) Constant
