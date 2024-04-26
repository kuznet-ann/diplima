<?php

namespace App\Http\Controllers;

use App\Models\Shape;
use App\Http\Requests\StoreShapeRequest;
use App\Http\Requests\UpdateShapeRequest;
use App\Http\Resources\ShapeCollection;
use App\Http\Resources\ShapeResource;

class ShapeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shapes = Shape::all();
        return new ShapeCollection($shapes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreShapeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreShapeRequest $request)
    {
        $data = $request->validated();
        $shape = Shape::create($data);
        return response()->noContent(201)->withHeaders([
            'Location' => route('shapes.show', [
                'shape' => $shape->id,
            ]),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Shape  $shape
     * @return \Illuminate\Http\Response
     */
    public function show(Shape $shape)
    {
        return new ShapeResource($shape);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateShapeRequest  $request
     * @param  \App\Models\Shape  $shape
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateShapeRequest $request, Shape $shape)
    {
        $data = $request->validated();
        $shape->update($data);
        return response()->noContent(204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Shape  $shape
     * @return \Illuminate\Http\Response
     */
    public function destroy(Shape $shape)
    {
        $shape->delete();
        return response()->noContent(204);
    }
}
