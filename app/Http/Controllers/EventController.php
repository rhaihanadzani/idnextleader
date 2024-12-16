<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        // Ambil semua event yang sudah diurutkan berdasarkan tanggal terbaru
        $events = Event::orderBy('created_at', 'desc')->with('images')->get();

        // Ambil 1 event terbaru (yang pertama)
        $latestEvent = $events->first();

        // Ambil 3 event terbaru setelah event yang pertama (menggunakan slice untuk mengambil data setelah 1 event)
        $nextThreeEvents = $events->slice(1, 3); // Ambil 3 event setelah event pertama

        // Ambil sisa event setelah 3 event pertama
        $remainingEvents = $events->slice(4);

        return Inertia::render('Event/Index', [
            'latestEvent' => $latestEvent,
            'nextThreeEvents' => $nextThreeEvents->values()->toArray(),  // No need to use toArray() here, Inertia can handle Collection
            'remainingEvents' => $remainingEvents->values()->toArray(),     // Bisa langsung menggunakan Collection
        ]);
    }

    public function detail($id)
    {
        $event = Event::where('id', $id)->with('images')->first();


        // Jika event tidak ditemukan, tampilkan halaman 404
        if (!$event) {
            abort(404, 'Event not found');
        }

        // Ambil semua event lain selain yang sedang ditampilkan (berdasarkan ID)
        $otherEvents = Event::where('id', '!=', $id)->with('images')->get();

        // Acak event lainnya
        $otherEvents = $otherEvents->shuffle();

        // Pilih beberapa event acak untuk ditampilkan (misalnya 3 event lainnya)
        $otherEvents = $otherEvents->take(3);
        // dd($otherEvents);



        return Inertia::render('Event/Detail', [
            'event' => $event,
            'otherEvents' => $otherEvents
        ]);
    }
}
