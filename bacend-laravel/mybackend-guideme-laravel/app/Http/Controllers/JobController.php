<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Job;
use Illuminate\Support\Facades\Http;

class JobController extends Controller
{
    public function index()
    {
        $job = Job::all();
        return $job;
    }
    public function show($id)
    {
        $job = Job::where('cat_id',$id)->get();
        return $job;
    }
}
