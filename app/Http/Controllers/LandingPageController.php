<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Collaboration;
use App\Models\Event;
use App\Models\Feedback;
use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function index()
    {
        $feedback = Feedback::all();
        $article = Article::all();
        // $event = Event::with('images')->get();
        $event = Event::with('images')->latest()->take(3)->get();
        $collaboration = Collaboration::all();
        $team = Team::all();


        return Inertia::render('Welcome', [
            'feedback' => $feedback,
            'event' => $event,
            'article' => $article,
            'collaboration' => $collaboration,
            'team' => $team
        ]);
    }
}
