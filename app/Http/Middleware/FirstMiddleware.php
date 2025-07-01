<?php

namespace RayxsiApp\Http\Middleware;


use Artificers\Http\Request;

class FirstMiddleware {
    public function __invoke(Request $request, $next) {
        echo "First middleware".PHP_EOL;

        return $next($request);
    }
}