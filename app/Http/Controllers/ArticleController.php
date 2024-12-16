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
        // dd($id);
        // Data artikel yang akan dikirim ke tampilan
        // $articles = [
        //     [
        //         'id' => "1",
        //         'title' => "Understanding React",
        //         'content' => "<p><strong>React: Membangun Antarmuka Pengguna yang Efisien dan Terstruktur</strong></p><p>React adalah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) dengan cara yang sangat efisien. Dengan menggunakan React, pengembang dapat membuat aplikasi web yang dinamis dan responsif.</p><h3>Fitur Utama React</h3><p>React memiliki beberapa fitur utama yang sangat berguna dalam pengembangan aplikasi web:</p><ul><li><strong>Komponen:</strong> React memungkinkan Anda untuk membangun aplikasi dengan komponen-komponen terpisah yang dapat digunakan kembali.</li><li><strong>Virtual DOM:</strong> Virtual DOM memungkinkan aplikasi menjadi lebih cepat dengan hanya memperbarui elemen yang berubah.</li><li><strong>JSX:</strong> JSX memungkinkan pengembang untuk menulis HTML dalam JavaScript, mempermudah pembuatan UI.</li></ul><p><em>React juga memungkinkan pengembangan aplikasi mobile menggunakan React Native.</em></p><p><img src='https://via.placeholder.com/150' alt='React Logo' /></p><h4>Keuntungan Menggunakan React</h4><ol><li>Performa lebih cepat.</li><li>Pengelolaan state yang lebih baik.</li><li>Komunitas besar dan aktif.</li></ol><p>Untuk memulai dengan React, Anda dapat mengunjungi dokumentasi resmi <a href='https://reactjs.org'>di sini</a>.</p>",
        //         'description' => "A brief guide to understanding React and its ecosystem.",
        //         'images' => [
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //         ],
        //         'created_at' => "2024-12-09T10:00:00Z",
        //         'updated_at' => "2024-12-09T10:00:00Z",
        //     ],
        //     [
        //         'id' => 2,
        //         'title' => "Exploring TailwindCSS",
        //         'content' => "<p><em>Tailwind CSS</em> adalah framework CSS utility-first yang memungkinkan Anda membangun desain kustom dengan sangat cepat. Alih-alih menggunakan kelas-kelas CSS yang sudah ditentukan sebelumnya seperti pada framework lain, <strong>Tailwind CSS</strong> menyediakan kelas-kelas kecil yang dapat dikombinasikan untuk membuat desain unik tanpa menulis CSS khusus.</p><p>Keuntungan utama menggunakan Tailwind adalah fleksibilitasnya. Anda dapat mengontrol setiap aspek desain mulai dari margin, padding, warna, hingga posisi, hanya dengan menambahkan kelas pada elemen HTML Anda. Ini mempercepat pengembangan dan membuat kode CSS Anda lebih mudah dipelihara.</p>",
        //         'description' => "How to use TailwindCSS to speed up your development process.",
        //         'images' => [
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //         ],
        //         'created_at' => "2024-12-09T11:00:00Z",
        //         'updated_at' => "2024-12-09T11:00:00Z",
        //     ],
        //     [
        //         'id' => 3,
        //         'title' => "Mastering JavaScript Functions",
        //         'content' => "<p>Fungsi dalam JavaScript adalah blok kode yang dirancang untuk melakukan tugas tertentu. Anda dapat memanggil fungsi tersebut berulang kali tanpa menulis kode yang sama. Fungsi dapat menerima input dalam bentuk parameter dan mengembalikan nilai sebagai output. Misalnya, fungsi <code>add()</code> di bawah ini menjumlahkan dua angka:</p><pre><code>function add(a, b) { return a + b; }</code></pre><p>Dengan memanfaatkan fungsi, Anda dapat membuat kode yang lebih modular dan terstruktur. Selain itu, JavaScript juga mendukung konsep <strong>fungsi sebagai objek</strong>, yang berarti Anda dapat memanipulasi fungsi seperti objek biasa, seperti menyimpannya dalam variabel atau meneruskannya sebagai argumen dalam fungsi lain.</p>",
        //         'description' => "An in-depth guide to JavaScript functions and their use cases.",
        //         'images' => [
        //             "/images/home/bannerBOD1.png",

        //         ],
        //         'created_at' => "2024-12-10T09:00:00Z",
        //         'updated_at' => "2024-12-10T09:00:00Z",
        //     ],
        //     [
        //         'id' => 4,
        //         'title' => "Building Responsive Websites",
        //         'content' => "<p>Untuk membangun website yang dapat diakses dengan baik di berbagai perangkat, Anda perlu memahami konsep <strong>responsiveness</strong>. Dengan menggunakan <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries' target='_blank'>media queries</a>, Anda dapat menyesuaikan gaya tampilan berdasarkan ukuran layar perangkat. Misalnya, pada layar kecil seperti ponsel, Anda mungkin ingin mengubah layout menjadi satu kolom, sedangkan pada desktop, Anda bisa menggunakan layout dua kolom.</p><p>Selain itu, Anda juga bisa memanfaatkan teknologi seperti <strong>flexbox</strong> atau <strong>CSS Grid</strong> untuk membuat desain yang fleksibel dan mudah diatur. Dengan pendekatan ini, situs Anda akan terlihat baik di perangkat apa pun, dari ponsel hingga desktop.</p>",
        //         'description' => "Step-by-step tutorial for building mobile-friendly websites.",
        //         'images' => [
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //         ],
        //         'created_at' => "2024-12-10T14:00:00Z",
        //         'updated_at' => "2024-12-10T14:00:00Z",
        //     ],
        //     [
        //         'id' => 5,
        //         'title' => "Understanding Web Accessibility",
        //         'content' => "<p>Web accessibility adalah prinsip untuk memastikan bahwa situs web dapat diakses dan digunakan oleh semua orang, termasuk mereka yang memiliki keterbatasan fisik atau kognitif. Penting untuk memastikan bahwa konten dan antarmuka pengguna dapat diakses dengan mudah oleh semua orang, tanpa terkecuali.</p><p>Beberapa teknik umum untuk meningkatkan aksesibilitas web termasuk penggunaan teks alternatif untuk gambar, memastikan kontras warna yang cukup, dan menyediakan navigasi yang dapat diakses keyboard. Dengan meningkatkan aksesibilitas situs Anda, Anda tidak hanya memberikan pengalaman yang lebih baik bagi pengguna dengan disabilitas, tetapi juga meningkatkan SEO dan jangkauan pengguna.</p>",
        //         'description' => "Why web accessibility matters and how to implement it.",
        //         'images' => [
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //         ],
        //         'created_at' => "2024-12-10T16:00:00Z",
        //         'updated_at' => "2024-12-10T16:00:00Z",
        //     ],
        //     [
        //         'id' => 6,
        //         'title' => "Getting Started with Vue.js",
        //         'content' => "<p>Vue.js adalah framework JavaScript yang progresif yang digunakan untuk membangun antarmuka pengguna (UI) yang interaktif dan dinamis. Vue memudahkan Anda untuk membuat aplikasi web yang sangat responsif dengan cara yang sederhana dan langsung.</p><p>Dengan menggunakan Vue, Anda dapat mengelola tampilan dan data secara deklaratif menggunakan data binding dan computed properties. Vue juga menawarkan sistem komponen yang memudahkan untuk membangun aplikasi web yang besar dengan cara yang lebih terstruktur dan terkelola.</p>",
        //         'description' => "A beginner's guide to getting started with Vue.js.",
        //         'images' => [
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //         ],
        //         'created_at' => "2024-12-11T08:00:00Z",
        //         'updated_at' => "2024-12-11T08:00:00Z",
        //     ],
        //     [
        //         'id' => 7,
        //         'title' => "Getting Started with Vue.js",
        //         'content' => "<p>Vue.js adalah framework JavaScript yang progresif yang digunakan untuk membangun antarmuka pengguna (UI) yang interaktif dan dinamis. Vue memudahkan Anda untuk membuat aplikasi web yang sangat responsif dengan cara yang sederhana dan langsung.</p><p>Dengan menggunakan Vue, Anda dapat mengelola tampilan dan data secara deklaratif menggunakan data binding dan computed properties. Vue juga menawarkan sistem komponen yang memudahkan untuk membangun aplikasi web yang besar dengan cara yang lebih terstruktur dan terkelola.</p>",
        //         'description' => "A beginner's guide to getting started with Vue.js.",
        //         'images' => [
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //         ],
        //         'created_at' => "2024-12-11T08:00:00Z",
        //         'updated_at' => "2024-12-11T08:00:00Z",
        //     ],
        //     [
        //         'id' => 8,
        //         'title' => "Getting Started with Vue.js",
        //         'content' => "<p>Vue.js adalah framework JavaScript yang progresif yang digunakan untuk membangun antarmuka pengguna (UI) yang interaktif dan dinamis. Vue memudahkan Anda untuk membuat aplikasi web yang sangat responsif dengan cara yang sederhana dan langsung.</p><p>Dengan menggunakan Vue, Anda dapat mengelola tampilan dan data secara deklaratif menggunakan data binding dan computed properties. Vue juga menawarkan sistem komponen yang memudahkan untuk membangun aplikasi web yang besar dengan cara yang lebih terstruktur dan terkelola.</p>",
        //         'description' => "A beginner's guide to getting started with Vue.js.",
        //         'images' => [
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //         ],
        //         'created_at' => "2024-12-11T08:00:00Z",
        //         'updated_at' => "2024-12-11T08:00:00Z",
        //     ],
        //     [
        //         'id' => 9,
        //         'title' => "Getting Started with Vue.js",
        //         'content' => "<p>Vue.js adalah framework JavaScript yang progresif yang digunakan untuk membangun antarmuka pengguna (UI) yang interaktif dan dinamis. Vue memudahkan Anda untuk membuat aplikasi web yang sangat responsif dengan cara yang sederhana dan langsung.</p><p>Dengan menggunakan Vue, Anda dapat mengelola tampilan dan data secara deklaratif menggunakan data binding dan computed properties. Vue juga menawarkan sistem komponen yang memudahkan untuk membangun aplikasi web yang besar dengan cara yang lebih terstruktur dan terkelola.</p>",
        //         'description' => "A beginner's guide to getting started with Vue.js.",
        //         'images' => [
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //         ],
        //         'created_at' => "2024-12-11T08:00:00Z",
        //         'updated_at' => "2024-12-11T08:00:00Z",
        //     ],
        //     [
        //         'id' => 10,
        //         'title' => "Getting Started with Vue.js",
        //         'content' => "<p>Vue.js adalah framework JavaScript yang progresif yang digunakan untuk membangun antarmuka pengguna (UI) yang interaktif dan dinamis. Vue memudahkan Anda untuk membuat aplikasi web yang sangat responsif dengan cara yang sederhana dan langsung.</p><p>Dengan menggunakan Vue, Anda dapat mengelola tampilan dan data secara deklaratif menggunakan data binding dan computed properties. Vue juga menawarkan sistem komponen yang memudahkan untuk membangun aplikasi web yang besar dengan cara yang lebih terstruktur dan terkelola.</p>",
        //         'description' => "A beginner's guide to getting started with Vue.js.",
        //         'images' => [
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //             "/images/home/bannerBOD1.png",
        //         ],
        //         'created_at' => "2024-12-11T08:00:00Z",
        //         'updated_at' => "2024-12-11T08:00:00Z",
        //     ],
        // ];

        $articles = Article::with('images')->get();
        // Temukan artikel berdasarkan ID
        $article = $articles->find($id);

        // dd($article);

        // Jika artikel tidak ditemukan, tampilkan halaman 404
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
