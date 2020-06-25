<?php get_header(); ?>


<div class="container">
    <div class="row">
        <main class="col-md-8">
            <?php 
            if ( have_posts() ) : 
                while ( have_posts() ) : the_post();  ?>
                    <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                    <div><?php the_excerpt(); ?></div>
                <?php endwhile; 
            else: ?> 
                <p>Geen bereichten gevonden.</p>
            <?php endif; ?>
        </main>
        
        
        <aside class="col-md-4 bg-light p-4">
            <?php dynamic_sidebar('aside') ?>
        </aside>
    </div>
</div>


<?php get_footer(); ?>