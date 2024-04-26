<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name', 55)->collation('utf8mb4_0900_ai_ci')->unique();
            $table->decimal('price', 7,2)->index();
            $table->text('description')->collation('utf8mb4_0900_ai_ci');
            $table->integer('quantity')->unsigned()->default(0);
            $table->boolean('available')->default(false);

            $table->bigInteger('shape_id')
                ->unsigned();
            $table->foreign('shape_id')
                ->references('id')
                ->on('shapes')
                ->onDelete('CASCADE')
                ->onUpdate('RESTRICT');

            $table->bigInteger('material_id')
                ->unsigned();
            $table->foreign('material_id')
                ->references('id')
                ->on('materials')
                ->onDelete('CASCADE')
                ->onUpdate('RESTRICT');
            $table->timestamps();
        });
    }    

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
