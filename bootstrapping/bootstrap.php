<?php
declare(strict_types=1);

use Artificers\Foundation\Exception\ExceptionHandler;
use Artificers\Foundation\Rayxsi;
use Artificers\Treaties\Exception\ExceptionHandler as ExceptionHandlerTreaties;
use Artificers\Treaties\Http\HttpKernelTreaties;
use RayxsiApp\Http\HttpKernel;

$rXsiApp = new Rayxsi(dirname(__DIR__));

//$rXsiApp->middleware(\RayxsiApp\Http\Middleware\Filter::class);

$rXsiApp->singleton(ExceptionHandlerTreaties::class, ExceptionHandler::class);

//Here we bind http kernel class so that we can handle the incoming request and send back response
$rXsiApp->singleton(HttpKernelTreaties::class, HttpKernel::class);

return $rXsiApp;
