document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const entries = Object.fromEntries(formData.entries());
        
        console.log("Datos del formulario:", entries);
        alert("Formulario guardado exitosamente");
    });
});
