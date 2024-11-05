function verificacion( email, password){
    const correo = "alessandro@gmail.com";
    const clave = "12345678"

    if(email == correo && password == clave){
        $("#pagina1").hide();
        $(".seccion2").show();
    }else{-
        $(".mensaje").html("usuario incorrecto")
    }
}



$(document).ready(function(){
    $(".seccion2").hide();
    $(".seccion3").hide();
    $(".popup").hide();
    $("#usuario").click(function(){
        let email = $("#correo").val();
        let password = $("#clave").val();
        
        verificacion(email, password)
    });

    $("#perfil1").click(function(){
        $(".seccion2").hide();
        $(".seccion3").show();
    });

    $(".img-lista").click(function(){
        let img = $(this).attr("src")

        $("#img-popup").attr("src" , img)
        $(".popup").show();
    })

    $("#cerrar").click(function(){
        $(".popup").hide();
    })
});