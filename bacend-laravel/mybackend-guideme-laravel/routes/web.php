<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\JobController;

Route::get('/', function () {
    return "hello";
});
Route::resource('categories', CategoryController::class);
Route::resource('jobs', JobController::class);
