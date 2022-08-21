<?php
declare(strict_types=1);
use Artificers\Supports\Illusion\Route;
use RayxsiApp\Http\Controller\HomeController;
use RayxsiApp\Http\Controller\SiteController;

Route::get('/', [HomeController::class, 'index'])->setName('home');
Route::get('/users', [HomeController::class, 'index'])->setName('users');
Route::get('/signup', [HomeController::class, 'index'])->setName('signup');
Route::get('/payment/[:name]/[:id\d]', [SiteController::class, 'index'])->setName('site.controller');