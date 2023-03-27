<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::all();
        return $category;
    }
    public function show($id)
    {
        $job = Job::findorfail($id);
        return $job;
    }
}