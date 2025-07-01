<?php
declare(strict_types=1);
namespace RayxsiApp\Http\Middleware;

class Middleware {
    private array $middlewares = [];

    public function __construct(array $middlewares) {
        $this->middlewares = $middlewares;
    }

    public function get(?string $key = null) {
        if(is_null($key)) return $this->middlewares;

        return $this->middlewares[$key] ?? [];
    }
}