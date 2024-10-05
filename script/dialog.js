document.addEventListener('DOMContentLoaded', (event) => {
    // Get the button to sign in
    var buttonSignIn = document.getElementById("buttonSignIn");

    // Get the dialog that opens
    var dialogSignIn = document.getElementById("dialogSignIn");

    // Get the button element that closes the dialog
    var closeDialogSignIn = document.getElementById("closeDialogSignIn");

    // When the user clicks the button, open the dialog 
    buttonSignIn.onclick = function() {
        dialogSignIn.showModal();
    }

    // When the user clicks on <button> (Fechar), close the dialog
    closeDialogSignIn.onclick = function() {
        dialogSignIn.close();
    }
});
