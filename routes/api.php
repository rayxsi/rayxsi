<?php
declare(strict_types=1);
use Artificers\Support\Illusion\Route;
use RayxsiApp\Http\Controller\SiteController;
use RayxsiApp\Http\Middleware\FirstMiddleware;
use RayxsiApp\Http\Middleware\SecondMiddleware;


//Route::post('/user', function() {
//    echo 'user';
//});
//
//Route::group(['prefix'=>'account'], function() {
//    Route::get('/profile', function(User $user) {
//        echo $user->tableName;
//    })->setName('profile');
//    Route::post('/signup', function() {});
//});
//
//Route::group(['prefix'=>'topu'], function() {
//    Route::group(['prefix'=>'rain'], function() {
//        Route::get('/xxx', function () {
//            echo 'xxx';
//        });
//    });
//});

Route::group(['prefix'=>'user'], function() {
    Route::post('/add', [SiteController::class, 'index'])->setName('add_user');
    //Route::post('/edit', [SiteController::class, 'index']);
});