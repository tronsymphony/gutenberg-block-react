<?php
/**
 * Block Name: Testimonials
 *
 * This is the template that displays the testimonials loop block.
 */

$args = array( 
    'post_type' => 'testimonial',
    'posts_per_page' => -1
  );

$the_query = new WP_Query( $args );
?>
<!-- Testimonial Start -->
<div class="container-xxl bg-primary testimonial py-5 my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <div class="owl-carousel testimonial-carousel">
                    
          
<?php

if ( $the_query->have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

  <div class="testimonial-item bg-transparent border rounded text-white p-4">
                        <i class="fa fa-quote-left fa-2x mb-3"></i>
                        <?php the_content(); ?>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="<?php echo get_the_post_thumbnail_url(); ?>" style="width: 50px; height: 50px;">
                            <div class="ps-3">
                                <h6 class="text-white mb-1"><?php the_title(); ?></h6>
                                <small><?php the_field('profession',get_the_ID()); ?></small>
                            </div>
                        </div>
                    </div>

<?php endwhile; ?>
<?php else: __( 'Sorry, there are no testimonials to display', 'wprig' );  endif; ?>

</div>
            </div>
        </div>
        <!-- Testimonial End -->