<?php

/*
    Plugin Name: Are You Paying Attention Quiz
    Description: Give your headers multiple choice question.
    Version: 1.0
    Author: Joao
    Author URI: https://zapiens.com.br
*/

if( ! defined( 'ABSPATH') ) exit; // Exit if accessed directly

class AreYouPayingAttention {
    function __construct() {
        add_action('enqueue_block_editor_assets', array($this, 'adminAssets'));
    }

    function adminAssets() {
        wp_enqueue_script('ournewblocktype', plugin_dir_url(__FILE__) . 'test.js', array('wp-blocks'));
    }
}

$areYouPayingAttention = new AreYouPayingAttention();