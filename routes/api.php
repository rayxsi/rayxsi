<?php
declare(strict_types=1);
use Artificers\Supports\Illusion\Route;
use RayxsiApp\Model\User;

Route::post('/user', function() {
    echo 'user';
});

Route::group(['prefix'=>'account'], function() {
    Route::get('/profile', function(User $user) {
        echo $user->tableName;
    })->setName('profile');
    Route::post('/signup', function() {});
});

Route::group(['prefix'=>'topu'], function() {
    Route::group(['prefix'=>'rain'], function() {
        Route::get('/xxx', function () {
            echo 'xxx';
        });
    });
});