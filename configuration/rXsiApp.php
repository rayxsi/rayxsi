<?php

declare(strict_types=1);

return [
    "name" => env('app_name', 'Rayxsi app'),
    "debug" => (bool)env('DEBUG_MODE', false),
    "default_charset" => "UTF-8",

    "registers" => [
        //-------------Rayxsi framework service register-------------//
        //-----------------------------------------------------------//
        \Artificers\Cache\CacheServiceRegister::class,
        \Artificers\View\ViewServiceRegister::class,
        \Artificers\Database\DatabaseServiceRegister::class,
        \Artificers\Design\DesignPatternServiceRegister::class,
        \Artificers\Logger\LoggerServiceRegister::class,


        //-------------Rayxsi application service register----------------//
        //---------------------------------------------------------------//
        \RayxsiApp\Registrars\RouteServiceRegister::class,
        \RayxsiApp\Registrars\RayxsiAppServiceRegister::class,
        \RayxsiApp\Registrars\MiddlewareServiceRegister::class,
    ]
];
