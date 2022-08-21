<?php
    namespace Orion\Engine;

    interface Engine {
        public function run(string $script): string;
        public function getDispatchHandler(): string;
    }