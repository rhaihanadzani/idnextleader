<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    //
    public function index()
    {
        // Data artikel yang akan dikirim ke tampilan


        $articles = Article::with('images')->get();
        // dd($articles[0]);

        return Inertia::render('Article/Index', [
            'articles' => $articles
        ]);
    }
    public function detail($id)
    {


        $articles = Article::with('images')->get();

        $article = $articles->find($id);


        if (!$article) {
            abort(404, 'Article not found');
        }

        // Ambil artikel lain selain yang sedang ditampilkan (berdasarkan ID)
        $otherArticles = collect($articles)->filter(function ($item) use ($id) {
            return $item['id'] !== $id;
        });

        // Acak artikel lainnya
        $otherArticles = $otherArticles->shuffle();

        // Pilih beberapa artikel acak untuk ditampilkan (misalnya 3 artikel lainnya)
        $otherArticles = $otherArticles->take(3);

        return Inertia::render('Article/Detail', [
            'article' => $article,
            'otherArticles' => $otherArticles
        ]);
    }
}
