function isPalindrome(s: string): boolean {
  // 1. instantiate my two pointers and regex for ignore non alphanumeric characters
  let left: number = 0;
  let right: number = s.length - 1;
  let regex = new RegExp("^[a-zA-Z0-9]$");

  // 2. loop through the string
  while (left < right) {
    // 3. validate and skip non alphanumeric characters
    if (!regex.test(s[left])) {
      left++;
      continue;
    }

    if (!regex.test(s[right])) {
      right--;
      continue;
    }

    // 4. validate if characters are the same
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  // 5. returns true for valid palindrome.
  return true;
}

isPalindrome("A man, a plan, a canal, Panama!");
