<?php

namespace RayxsiApp\Http\Middleware;

use Artificers\Foundation\Rayxsi;
use Closure;

//rayxsi application middleware
class Filter {
    public function __invoke(Rayxsi $rayxsi, Closure $next) {
        echo "Filter middleware- ".$rayxsi::$version.PHP_EOL;

        return $next($rayxsi);
    }
}