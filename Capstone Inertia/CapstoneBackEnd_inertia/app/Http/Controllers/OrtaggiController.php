<?php

namespace App\Http\Controllers;

use App\Models\Ortaggi;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrtaggiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {
        $ortaggi = Ortaggi::all();
        return inertia('TuoOrto', ['ortaggi' => $ortaggi]);
    }
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Ortaggi/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'quantity' => 'required|numeric|min:1',
        ]);

        $validatedData['user_id'] = Auth::id();
        Ortaggi::create($validatedData);

        return redirect()->route('tuoorto.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Ortaggi $ortaggio)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ortaggi $ortaggio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrtaggiRequest $request, Ortaggi $ortaggio)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ortaggio $ortaggio)
    {
        // Verifica che l'ortaggio appartenga all'utente autenticato o implementa le logiche di autorizzazione necessarie

        // Elimina l'ortaggio
        $ortaggio->delete();

        // Ritorna una risposta appropriata (puoi personalizzarla a seconda delle tue esigenze)
        return response()->json(['message' => 'Ortaggio eliminato con successo'], 200);
    }
}
