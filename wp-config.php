<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'rveal' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'aYIodJuw~pSk@11;,?p}!c[EUwbjyALCy2)H+uh!y4ep0*A&S;Fs4fTyVqw~FvB9' );
define( 'SECURE_AUTH_KEY',   'GW-SNE`^]dOEr[@Z@RmW>UYHIR#;6KSELD&vZ.U#(!ds4952V$2epfoti,OkNPl]' );
define( 'LOGGED_IN_KEY',     '/qoXX!i.=gLyZc|{L8:Wn O~mw^^L0eqm>Snl4.n^QC<I#PqmHk+3-C`ErvDvetI' );
define( 'NONCE_KEY',         ';JjWC*>Uz1<j}wFja`H.EL9&9s5/C]9W`F]O_&{>=Q-1)drFB)8xy%6hM022#x~!' );
define( 'AUTH_SALT',         'iE=dTyeBUBExp 7Za28*$=M2epPrzin%9f`7_$2d:k>)p:yHqxZ@[NpUP}+ST+YX' );
define( 'SECURE_AUTH_SALT',  'IQ</>%B@P|gVwil,{b{-y:TgIb+D.8]N[$W$;^%PMRz)m4q+.Bcbs8#{ap,cnLWV' );
define( 'LOGGED_IN_SALT',    '/.iQ#*4kKm9c@lisU;^6Xv~/DvFv}olM%x+8xwS!Rtz[(2u{h;tyr=N2YJ|M6xGb' );
define( 'NONCE_SALT',        'iDb&,z;j^qKWC3K{,v,lb}=^q8UWQ6=Zauu~YkAj`v3GRLZB26:m2P?z;R^B~Xxy' );
define( 'WP_CACHE_KEY_SALT', 'yk%&{fIcbygKl#dD2jV1i$q3N.S7@ poT@5%t*xH*Vngi`.gUCu-DJ9{- @pq7Gv' );


	define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', 'xEwl+mpyPdey' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpgt_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
// Enable WP_DEBUG mode
define( 'WP_DEBUG', true );

// Enable Debug logging to the /wp-content/debug.log file
define( 'WP_DEBUG_LOG', true );

// Disable display of errors and warnings
define( 'WP_DEBUG_DISPLAY', false );
@ini_set( 'display_errors', 0 );

// Use dev versions of core JS and CSS files (only needed if you are modifying these core files)
define( 'SCRIPT_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */

define( 'WP_HOME', sprintf("https://%s/", $_SERVER["HTTP_HOST"]) );
define( 'WP_SITEURL', sprintf("https://%s/", $_SERVER["HTTP_HOST"]) );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
