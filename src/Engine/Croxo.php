<?php
    namespace Orion\Engine;

use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

    class Croxo implements Engine {
        private string $nodePath = "";
        private string $tempFile = "";

        public function __construct(string $nodePath, string $tempFile) {
            $this->nodePath = $nodePath;
            $this->tempFile = $tempFile;
        }

        public function run(string $script): string {
            $filename = $this->createTempFile();

            file_put_contents($filename, $script);

            $process = new Process([$this->nodePath, $filename]);

            try {
                return $process->mustRun()->getOutput();
            }catch(ProcessFailedException $e) {
                return $e->getMessage();
            }finally {
                unlink($filename);
            }

        }

        protected function createTempFile():string {
            return $this->tempFile."/".md5(time()).".js";
        }

        public function getDispatchHandler(): string {
            return "console.log";
        }

        public function extractCssHandlerMethod(): string {
            return "extractCss";
        }
    }