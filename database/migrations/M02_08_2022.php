<?php

use Artificers\Database\Lizie\Schema\ColumnType;
use Artificers\Database\Lizie\Schema\Table;
use Artificers\Support\Illusion\Schema;

return new class {
    public function up(): void {
        Schema::make("users", function(Table $table) {
            $table->column("Id")->type(ColumnType::INT)->nullable()->autoIncrement()->unique();
            $table->column("FirstName")->type(ColumnType::VARCHAR)->width(150);
            $table->column("Email")->type(ColumnType::VARCHAR)->width(200)->unique();
            $table->column("BookId")->type(ColumnType::INT)->foreignKey()->referenceTo("books", "Bid");
        });
    }

    public function down(): void {
        Schema::dropTableIfExists('users');
    }
};