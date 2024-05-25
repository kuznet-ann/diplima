<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;

use function Symfony\Component\VarDumper\Dumper\esc;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Product::query();
        if ($request->has('filter')) {
            $field = $request->get('filter');

            if (array_key_exists('shape', $field)) {
                $query = $query->where('shape_id', '=', function (Builder $subquery) use ($field) {
                    $subquery->select('id')->from('shapes')->where('name', '=', $field['shape'])->limit(1);
                });
            }

            if (array_key_exists('price', $field)) {
                if (array_key_exists('>', $field['price'])) {
                    $query = $query->where('price', '>', $field['price']['>']);
                }
                if (array_key_exists('<', $field['price'])) {
                    $query = $query->where('price', '<', $field['price']['<']);
                }
            }
        }

        if ($request->has('sort')) {
            $field = $request->get('sort');
            if (mb_substr($field, 0, 1) === '-') {
                $query = $query->orderBy(mb_substr($field, 1), 'desc');
            } else {
                $query = $query->orderBy($field, 'asc');
            }
        }

        $products = $query->paginate(8);  //  paginate указывается сколько товаров запросить, разбивание по страницам
        // $products = $query->get();


        // $products = Product::all();
        return new ProductCollection($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {
        $data = $request->validated();
        $product = Product::create($data);
        return response()->noContent(201)->withHeaders([
            'Location' => route('products.show', [
                'product' => $product->id,
            ]),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductRequest  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $data = $request->validated();
        $product->update($data);
        return response()->noContent(204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->noContent(204);
    }

    // public function searchFilters($request)
    // {
    //     $query = Product::query();
    //     if ($request->has('name')) {
    //         $query = $query->where('name', 'like', '%' . $request->name . '%');
    //     }
    //     return $query;
    // }
}
