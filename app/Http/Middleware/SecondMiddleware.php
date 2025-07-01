<?php

namespace RayxsiApp\Http\Middleware;


use Artificers\Http\Request;

class SecondMiddleware {
    public function __invoke(Request $request, $next) {
        echo "Second middleware".PHP_EOL;

        return $next($request);
    }
}