const signIn = document.getElementById("signin");
const signUp = document.getElementById("signup");
const container = document.getElementById("card");


signUp.addEventListener('click', () =>
    container.classList.add('active'),
    console.log("hello")
);
signIn.addEventListener('click', () =>
    container.classList.remove('active'),
    console.log("abcent")
);