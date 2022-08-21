<?php

namespace RayxsiApp\Registers;
use Artificers\Foundation\Supports\Registers\RouteServiceRegister as ServiceRegister;
use Artificers\Supports\Illusion\Route;

class RouteServiceRegister extends ServiceRegister{
    public function boot(): void {
        $this->registerRoutes(function() {
            //we have to change it when we will create middleware feature.
            Route::makeGroup()->group(full_path('routes/web.php'));
            Route::makeGroup(['prefix'=>'api'])->group(full_path('routes/api.php'));
        });
    }
}