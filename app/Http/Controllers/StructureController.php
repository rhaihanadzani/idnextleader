<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StructureController extends Controller
{

    public function index()
    {
        $founders = Team::where('position', 'like', '%founder%')->get();
        $directions = Team::where('position', 'like', '%Foundation%')->orwhere('position', 'like', '%Chief Executive%')->get();
        $directors = Team::where('position', 'like', '%director%')->get();
        $badan = Team::where('position', 'like', '%Business Development Agency%')->get();
        $duta = Team::where('position', 'like', '%ID Next Leader Ambassador%')->get();
        $manager = Team::where('position', 'like', '%manager%')->orwhere('position', 'like', '%Senior Secretary Coordinator%')->get();
        $officer = Team::where('position', 'like', '%Business Development Officer%')->get();

        // dd($directions);
        // dd($founders);
        return Inertia::render('Structure/Index', [
            'founders' => $founders,
            'directions' => $directions,
            'directors' => $directors,
            'badan' => $badan,
            'duta' => $duta,
            'manager' => $manager,
            'officer' => $officer
        ]);
    }
}
