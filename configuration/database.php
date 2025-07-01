<?php

return [
    "default" => env('DB_CONNECTION', 'mysql'),

    "connections" => [
        "mysql" => [
            "driver" => "mysql",
            "name" => env('DB_DATABASE', 'rayxsi'),
            "host" => env('DB_HOST', '127.0.0.1'),
            "port" => env('DB_PORT', '3306'),
            "user" => env('DB_USERNAME'),
            "password" => env('DB_PASSWORD', ''),
            "charset" => "utf8mb4",
            "options" => [
                "persistent_connection"=>false
            ]
        ],
        "pgsql" => [
            "driver" => "pgsql",
            "name" => env('DB_DATABASE', 'rayxsi'),
            "host" => env('DB_HOST', '127.0.0.1'),
            "port" => env('DB_PORT', '5432'),
            "username" => env('DB_USERNAME'),
            "password" => env('DB_PASSWORD', ''),
            "charset" => "utf8",
            "options" => [
                "persistent_connection"=>false
            ]
        ]
    ]
];