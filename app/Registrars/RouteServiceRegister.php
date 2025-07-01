<?php

namespace RayxsiApp\Registrars;

use Artificers\Foundation\Support\Registrar\RouteServiceRegister as ServiceRegister;
use Artificers\Support\Illusion\Route;

class RouteServiceRegister extends ServiceRegister
{
    public function boot(): void
    {
        $this->registerRoutes(function () {
            //we have to change it when we will create middleware feature.
            Route::makeGroup(['middleware' => 'web'])->group(full_path('routes/web.php'));
            Route::makeGroup(['prefix' => 'api', 'middleware' => 'api'])->group(full_path('routes/api.php'));
        });
    }
}
