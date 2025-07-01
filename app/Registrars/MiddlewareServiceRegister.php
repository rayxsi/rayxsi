<?php

namespace RayxsiApp\Registrars;

use Artificers\Support\ServiceRegister;
use RayxsiApp\Http\Middleware\FirstMiddleware;
use RayxsiApp\Http\Middleware\Middleware;
use RayxsiApp\Http\Middleware\SecondMiddleware;

class MiddlewareServiceRegister extends ServiceRegister {
    private array $middleware = [];

    public function register(): void {
       $this->rXsiApp->bind('middleware', function() {
           return new Middleware($this->middleware);
       });
    }

    public function boot(): void {
       $this->middleware['global'] = $this->global();
       $this->middleware['group'] = $this->group();
       $this->middleware['route'] = $this->route();
    }

    /**
     * Global Middleware. Set your own global middleware in here.
     * @return array
     */
    private function global(): array {
        return [
            //FirstMiddleware::class,
        ];
    }

    /**
     * Group Middleware. Set your own group middleware in here.
     * @return array
     */
    private function group(): array {
        return [
            "web"=>[
                //FirstMiddleware::class
            ],
            "api"=>[]
        ];
    }

    /**
     * Route Middleware. Set your own route middleware in here.
     * @return array
     */
    private function route(): array {
        return [
            'custom'=>SecondMiddleware::class
        ];
    }
}