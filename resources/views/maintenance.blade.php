<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maintenance Mode</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <style>
        .maintenance-bg {
            background: linear-gradient(135deg, #ffffff 0%, #fff5f5 100%);
            min-height: 100vh;
            overflow: hidden;
            position: relative;
        }

        .maintenance-card {
            background: white;
            border-radius: 1.5rem;
            box-shadow: 0 15px 35px rgba(239, 68, 68, 0.15);
            border: 2px solid #fecaca;
            position: relative;
            z-index: 10;
        }

        .spinner {
            animation: spin 3s linear infinite;
            color: #dc2626;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        .floating-icon {
            position: absolute;
            opacity: 0.1;
            animation: float 15s infinite linear;
            color: #dc2626;
        }

        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
            }

            100% {
                transform: translateY(-100vh) rotate(360deg);
            }
        }

        .pulse-ornament {
            position: absolute;
            border-radius: 50%;
            border: 2px dashed #fee2e2;
            animation: pulse 8s infinite alternate;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
                opacity: 0.3;
            }

            100% {
                transform: scale(1.1);
                opacity: 0.5;
            }
        }

        .progress-bar {
            height: 8px;
            background: #fee2e2;
            border-radius: 4px;
            overflow: hidden;
            margin: 20px 0;
        }

        .progress {
            height: 100%;
            background: linear-gradient(90deg, #ef4444, #dc2626);
            border-radius: 4px;
            animation: progress-animation 3s ease-in-out infinite alternate;
        }

        @keyframes progress-animation {
            0% {
                width: 30%;
            }

            100% {
                width: 70%;
            }
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            margin: 30px 0;
        }

        .feature-item {
            background: #fff5f5;
            border-radius: 12px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 0.3s ease;
            border: 1px solid #fecaca;
        }

        .feature-item:hover {
            background: #fee2e2;
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(239, 68, 68, 0.1);
        }

        .feature-icon {
            color: #dc2626;
            margin-bottom: 8px;
        }

        .status-badge {
            position: absolute;
            top: -12px;
            right: 20px;
            background: #dc2626;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
            box-shadow: 0 4px 6px rgba(220, 38, 38, 0.2);
        }

        @media (max-width: 640px) {
            .feature-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>

<body class="maintenance-bg flex items-center justify-center p-4">
    <!-- Background ornaments -->
    <div class="pulse-ornament w-64 h-64 -top-32 -left-32"></div>
    <div class="pulse-ornament w-96 h-96 -bottom-48 -right-48"></div>

    <!-- Floating icons -->
    <div class="floating-icon" style="top: 10%; left: 5%; width: 40px; animation-delay: 0s;">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    </div>
    <div class="floating-icon" style="top: 70%; left: 80%; width: 50px; animation-delay: 3s;">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
    </div>
    <div class="floating-icon" style="top: 30%; left: 90%; width: 45px; animation-delay: 7s;">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    </div>

    <!-- Main content -->
    <div
        class="maintenance-card text-gray-800 p-8 md:p-12 max-w-2xl w-full text-center animate__animated animate__fadeIn relative">
        <div class="status-badge animate__animated animate__pulse animate__infinite">
            MAINTENANCE
        </div>

        <div class="flex justify-center mb-8">
            <svg class="spinner h-20 w-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        </div>

        <h1 class="text-3xl md:text-4xl font-bold mb-4 text-red-600">Sedang Dalam Pemeliharaan</h1>
        <p class="text-lg md:text-xl mb-6 text-gray-700">Kami sedang melakukan peningkatan sistem untuk pengalaman yang
            lebih baik</p>

        <div class="progress-bar">
            <div class="progress"></div>
        </div>

        <div class="feature-grid">
            <div class="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 feature-icon" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span class="text-sm font-medium text-red-600">Performa</span>
            </div>
            <div class="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 feature-icon" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span class="text-sm font-medium text-red-600">Keamanan</span>
            </div>
            <div class="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 feature-icon" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span class="text-sm font-medium text-red-600">Stabilitas</span>
            </div>
            <div class="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 feature-icon" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-sm font-medium text-red-600">Optimasi</span>
            </div>
        </div>

        <div class="bg-red-50 rounded-xl p-5 mb-8 border border-red-100">
            <p class="font-medium text-red-700 mb-2">Kami akan segera kembali!</p>
            <p class="text-sm text-red-600">Tim kami sedang bekerja keras untuk menyelesaikan pemeliharaan sistem.</p>
        </div>

        <p class="text-sm text-gray-600 mb-1">Silakan refresh halaman secara berkala</p>
        <p class="text-xs text-gray-500">Terima kasih atas pengertian dan kesabaran Anda.</p>
    </div>
</body>

</html>
