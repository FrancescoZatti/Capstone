<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Garden;
use Illuminate\Http\Request;
use App\Http\Resources\GardenResource;
use App\Http\Requests\GardenRequest;

class GardenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return GardenResource::collection(Garden::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(GardenRequest $request)
    {
        $garden = Garden::create($request->validated());
        return new GardenResource($garden);
    }

    /**
     * Display the specified resource.
     */
    public function show(Garden $garden)
    {
        return new GardenResource($garden);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Garden $garden)
    {
        $garden->update($request->validated());
        return new GardenResource($garden);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Garden $garden)
    {
        $garden->delete();
        return response()->noContent();
    }
}
