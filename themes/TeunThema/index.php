<?php
if( have_post()):
    while(have_post()) : the_post();?>
        <h3><?php the_title() ?></h3>
        <div><?php the_content() ?></div>
<?php 
    endwhile;
else: ?>
    <p>geen berichten gevonden</p>
<?php 
endif; 
?>
