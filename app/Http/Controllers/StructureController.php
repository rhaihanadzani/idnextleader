<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StructureController extends Controller
{

    public function index()
    {
        //Founder
        $founders = Team::whereHas('categoryTeam', function ($query) {
            $query->where('name', 'like', '%founder%');
        })->get();

        // Direktur
        $directions = Team::whereHas('categoryTeam', function ($query) {
            $query->where('name', 'like', '%direktur%');
        })->orwhere('position', 'like', '%Chief Executive%')->orwhere('position', 'like', '%Foundation%')->get();


        // Badan
        $badan = Team::whereHas('categoryTeam', function ($query) {
            $query->where('name', 'like', '%badan%');
        })->get();

        // Duta
        $duta = Team::whereHas('categoryTeam', function ($query) {
            $query->where('name', 'like', '%duta%');
        })->get();

        // Manager
        $manager = Team::whereHas('categoryTeam', function ($query) {
            $query->where('name', 'like', '%manager%');
        })->get();

        // Dewan Pembina
        $pembina = Team::whereHas('categoryTeam', function ($query) {
            $query->where('name', 'like', '%pembina%');
        })->get();

        return Inertia::render('Structure/Index', [
            'founders' => $founders,
            'directions' => $directions,
            'badan' => $badan,
            'duta' => $duta,
            'manager' => $manager,
            'pembina' => $pembina

        ]);
    }
}
