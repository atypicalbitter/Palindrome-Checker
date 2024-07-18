    const input = document.getElementById('input'); 

    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    
    function check() {
        const value = input.value.trim();
        if (value === "") {
            alert("Please add your text to the box below");
        } else {
            const reverse = reverseString(value);
            if (value === reverse) {
                alert("This is a Palindrome!");
            } else {
                alert("This is not a Palindrome");
            }
        }
        input.value = "";
    }
    

