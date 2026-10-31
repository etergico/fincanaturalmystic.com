$(document).ready(function(){
    $("#contactForm").submit(function(event){
        event.preventDefault(); // Evita el envío normal del formulario

        $.ajax({
            type: "POST",
            url: "procesar.php",
            data: $(this).serialize(), // Enviar los datos del formulario
            beforeSend: function() {
                $("#mensaje").html("<p style='color: #FFD832; '>Enviando...</p>");
            },
            success: function(response){
                $("#mensaje").html(response); // Mostrar respuesta del servidor
                $("#contactForm")[0].reset(); // Limpiar formulario
            },
            error: function(){
                $("#mensaje").html("<p style='color: red;'>Error al enviar el formulario.</p>");
            }
        });
    });
});
