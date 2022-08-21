<?php

namespace RayxsiApp\Listeners;

class UserServiceListener {
    public function handle($event) {
        dump($event);
    }

    public function store($event) {
        dump($event);
    }
}