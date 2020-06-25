<?php 

// load styleblad en scripts
function laadStijlbladenScripts(){
    wp_enqueue_style( 'style', get_stylesheet_uri() );
    wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/css/bootstrap.css');
    wp_enqueue_style( 'bootstrapjs', get_template_directory_uri() . '/js/bootstrap.min.js', array ( 'jquery' ), 1.5, true);
}

add_action( 'init', 'laadStijlbladenScripts' );


function register_menus() {
    register_nav_menus(
      array(
        'hoofd-menu' => __( 'Hoofd menu' ),
        'extra-menu' => __( 'Extra menu' )
        )
      );
    }
  add_action( 'init', 'register_menus' );


  function register_navwalker(){
    require_once get_template_directory() . '/class-wp-bootstrap-navwalker.php';
  }
  add_action( 'init', 'register_navwalker' );


// widgets registreren
function registeer_widgets() {
  register_sidebar(
    array(
      'id' => 'aside',
      'name' => __('Widget aside'),
      'description' => __('Widget voor het aside-element'),
      'before_widget' => '<div class="widget-aside"',
      'after_widget' => '</div>',
      'before_title' => '<h3 class="widget-titel" >',
      'after_title' => '</h3>',
    )
  );
};

add_action( 'init', 'registeer_widgets' );
