<?php 

// load styleblad
function laadStijlblad(){
    wp_enqueue_style( 'style', get_stylesheet_uri() );
}

add_action( 'init', 'laadStijlblad' );
?>