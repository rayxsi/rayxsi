<?php declare(strict_types=1);

use Monolog\Handler\NullHandler;

return [
    'default'=>env('log_channel', 'stack'),

    'deprecations' => [
        'channel' => env('LOG_DEPRECATIONS_CHANNEL', 'null'),
        'trace' => false,
    ],

    'channels'=>[
        'stack'=>[
            'driver'=>'stack',
            'channels'=>['stream'],
            'ignore_exceptions'=>false
        ],
        'stream'=>[
            'driver'=>'stream',
            'path'=>tmp_path('logs/rayxsi.log'),
            'level'=>env('log_level', 'debug')
        ],
        'regular'=>[
            'driver'=>'regular',
            'path'=>tmp_path('logs/rayxsi.log'),
            'level'=>env('log_level', 'debug'),
            'max_file_in_a_day'=>15
        ],
        'sis' =>[
            'driver' => 'sis',
            'level' => env('log_level', 'debug'),
        ],
        'error'=>[
            'driver' => 'error',
            'level' => env('log_level', 'debug'),
        ],
        'null'=>[
            'driver' => 'monolog',
            'handler' => NullHandler::class,
        ]
    ]
];
