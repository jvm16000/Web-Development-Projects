document.addEventListener("DOMContentLoaded", ()=>{
    const loginform = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkLogin").addEventListener("click", e=>{
        e.preventDefault();
        loginform.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginform.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
})