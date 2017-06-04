let gulp = require( 'gulp' ),
  strip = require( 'gulp-strip-comments' ),
  del = require( 'del' ),
  minimist = require( 'minimist' );

let exercises = 'exercises/',
  begin = '/begin/',
  solution = '/solution/',
  src = 'src/',
  publicFolder = 'public/',
  files = '**/*.+(js|html)',
  allFiles = '**/*';

let options = minimist( process.argv.slice( 2 ) );

// TODO: Write a backup-files target/task

gulp.task( 'start-exercise', [ 'clean-all' ], function() {
  if ( options.src ) {
    gulp.src( exercises + options.src + begin + src + files )
      .pipe( gulp.dest( src ) );
    gulp.src( exercises + options.src + begin + publicFolder + files )
      .pipe( gulp.dest( publicFolder ) );
  }
} );

gulp.task( 'show-solution', [ 'clean-all' ], function() {
  if ( options.src ) {
    gulp.src( exercises + options.src + solution + src + files )
      .pipe( gulp.dest( src ) );
    gulp.src( exercises + options.src + solution + publicFolder + files )
      .pipe( gulp.dest( publicFolder ) );
  }
} );

gulp.task( 'copy-to-begin', [ 'clean-begin' ], () => {
  if ( options.dest ) {
    gulp.src( src + files )
      .pipe( gulp.dest( exercises + options.dest + begin + src ) );
    gulp.src( publicFolder + files )
      .pipe( gulp.dest( exercises + options.dest + begin + publicFolder ) );
  }
} );

gulp.task( 'copy-to-solution', [ 'clean-solution' ], () => {
  if ( options.dest ) {
    // TODO: Make sure that the data folder is not included
    gulp.src( src + files )
      .pipe( gulp.dest( exercises + options.dest + solution + src ) );
    gulp.src( publicFolder + files )
      .pipe( gulp.dest( exercises + options.dest + solution + publicFolder ) );
  }
} );

gulp.task( 'clean-solution', () => {
  return del( [ exercises + options.dest + solution + src,
    exercises + options.dest + solution + publicFolder ] );
} );

gulp.task( 'clean-begin', () => {
  return del( [ exercises + options.dest + begin + src,
    exercises + options.dest + begin + publicFolder ] );
} );

gulp.task( 'clean-src', () => {
  return del( src + files );
} );

gulp.task( 'clean-public', () => {
  return del( publicFolder + files );
} );

gulp.task( 'clean-all', [ 'clean-src', 'clean-public' ] );

gulp.task( 'strip', function() {
  if ( options.dest ) {
    let base = exercises + options.dest;
    gulp.src( [ base + begin + '**/*', base + solution + '**/*' ], { base: base } )

    // Be careful, as this may ruin regexps
    // But is necessary for anything with decorators
      .pipe( strip.text() )
      .pipe( strip.html() )
      .pipe( gulp.dest( base ) );
  }
} );

gulp.task( 'swap', function() {
  if ( options.src && options.dest && options.ex ) {
    let base = `${exercises}${options.ex}/`;
    gulp.src( base + options.src + '/**/*', { base: base + options.src } )
      .pipe( gulp.dest( base + options.dest ) );
  }
} );
