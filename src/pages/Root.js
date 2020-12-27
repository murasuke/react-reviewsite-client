import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRestaurants } from "../api.js";
import { Loading, Restaurant } from "../components";

export function RootPage(){
    const [restaurants, setRestaurants] = useState(null);

    useEffect( () =>{
        // Promiseを返す関数をthenで受け取り画面に表示する
        // getRestaurants({limit:3}).then( 
        //     data =>{ setRestaurants(data) } );

        // awaitで受け取る場合は、無名のasync関数でラップして呼び出す
        // 直接呼び出すと、awaitはPromiseを返す関数となり、userEffectはreturnされた関数をクリーンアップ関数として受け取ってしまう
        (async () =>{
            const data = await getRestaurants({limit:3});
            setRestaurants(data);
        })();
    }, []);

    return (
        <>
            <h2 className="title is-3">人気のラーメン店</h2>
            <div className="block">
                {!restaurants ? (
                    <Loading />
                ) : (
                    restaurants.rows.map( 
                        restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} /> )
                )}
            </div>
            <div className="has-text-right">
                <Link className="button is-warning" to="/restaurants">
                    全てのラーメン店を見る
                </Link>
            </div>
        </>
    );
}