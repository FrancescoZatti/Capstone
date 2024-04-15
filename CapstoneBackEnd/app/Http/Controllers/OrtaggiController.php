<?php

namespace App\Http\Controllers;

use App\Models\Ortaggi;
use App\Http\Requests\StoreOrtaggiRequest;
use App\Http\Requests\UpdateOrtaggiRequest;

class OrtaggiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {
        $ortaggi = Ortaggi::all();
        return response() -> json($ortaggi);
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
    public function store(StoreOrtaggiRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Ortaggi $ortaggi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ortaggi $ortaggi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrtaggiRequest $request, Ortaggi $ortaggi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ortaggi $ortaggi)
    {
        //
    }
}
