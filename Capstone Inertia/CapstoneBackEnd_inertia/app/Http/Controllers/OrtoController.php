<?php

namespace App\Http\Controllers;

use App\Models\Ortaggi;
use App\Models\Orto;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class OrtoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
{
    $ortaggio_id = $request->input('ortaggio_id'); // o da qualsiasi altra fonte
    $ortaggio = Ortaggi::find($ortaggio_id);
    return inertia('TuoOrto', ['ortaggi' => $ortaggio]);
}


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrtoRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Orto $orto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Orto $orto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrtoRequest $request, Orto $orto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Orto $orto)
    {
        //
    }
}
