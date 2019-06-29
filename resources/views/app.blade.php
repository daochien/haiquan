<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        <link href="{{asset('css/fontawesome-free/css/all.min.css')}}" rel="stylesheet" type="text/css">
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    </head>
    <body class="fixed-sn mdb-skin">
        <div id="app">
            <transition
                name="fade"
                mode="out-in"
            >
                <router-view></router-view>
            </transition>
        </div>
        <style>
            body
            {
                font-family: 'Roboto-Regular';
            }
            .fade-enter-active,
            .fade-leave-active {
                transition-duration: 0.3s;
                transition-property: opacity;
                transition-timing-function: ease;
            }

            .fade-enter,
            .fade-leave-active {
                opacity: 0
            }
        </style>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
