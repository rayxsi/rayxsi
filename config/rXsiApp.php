<?php

return [
    "debug" => (bool)env('DEBUG_MODE', false),
    "default_charset" => "UTF-8",

    "registers" => [
        //-------------Rayxsi framework service register-------------//
        //-----------------------------------------------------------//
        \Artificers\Cache\CacheServiceRegister::class,
        \Artificers\View\ViewServiceRegister::class,
        \Artificers\Database\DatabaseServiceRegister::class,


        //-------------Rayxsi application service register----------------//
        //---------------------------------------------------------------//
        \RayxsiApp\Registers\RouteServiceRegister::class,
        \RayxsiApp\Registers\RayxsiAppServiceRegister::class
    ]
];
