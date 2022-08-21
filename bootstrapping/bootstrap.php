<?php
declare(strict_types=1);

use Artificers\Foundation\Rayxsi;
use Artificers\Treaties\Http\HttpKernelTreaties;
use RayxsiApp\Http\HttpKernel;

$rXsiApp = new Rayxsi(dirname(__DIR__));

//Here we bind http kernel class so that we can handle the incoming request and send back response
$rXsiApp->singleton(HttpKernelTreaties::class, HttpKernel::class);

return $rXsiApp;
