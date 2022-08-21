<?php

use Artificers\Database\Lizie\Schema\ColumnType;
use Artificers\Database\Lizie\Schema\Table;
use Artificers\Supports\Illusion\Schema;

return new class {
    public function up(): void {
        Schema::make("user", function(Table $table) {
            $table->add([
                $table->column("Id")->type(ColumnType::INT)->nullable()->autoIncrement()->unique(),
                $table->column("FirstName")->type(ColumnType::VARCHAR)->width(350),
                $table->column("Email")->type(ColumnType::VARCHAR)->width(550)->unique(),
                $table->column("BookId")->type(ColumnType::INT)->foreignKey()->referenceTo("book", "Bid")
            ]);
        });
    }

    public function down(): void {

    }
};