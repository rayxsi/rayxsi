<?php

    namespace Orion\Engine;

    use JetBrains\PhpStorm\Pure;

    class Renderer {
        protected Croxo $engine;
        protected  array $SERVER;

        public function __construct(Croxo $engine, array $server){
            $this->engine = $engine;
            $this->SERVER = $server;
        }

        public function render(string $entry):string {
            $low = array_change_key_case($this->SERVER, CASE_LOWER);
            $requestJson = json_encode($low);

//            var_dump($requestJson);

            $script = implode(";", [
                "const __server = $requestJson",
                "let dispatcher = {$this->engine->getDispatchHandler()}",
                file_get_contents($entry)
            ]);
            
            return $this->engine->run($script);
        }
    }