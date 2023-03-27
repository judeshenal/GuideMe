<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use DB;
// use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB as FacadesDB;

class StudViewController extends Controller {
public function index(){
// $emp = DB::select('select * from employee');
// return view('employee',['employee'=>$emp]);
}
}

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
