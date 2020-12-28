/**
 * REST API呼び出しメソッド
 * ・非同期関数(Promiseを返す)
 * 　⇒ await もしくは .then( () => {})で処理を継続すること
 */



/**
 * 
 * @param {string} path 
 * @param {*} options 
 */
async function request( path, options={} ){
    const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
    const response = await fetch(url, options);
    return response.json();
}

export async function getRestaurants(arg = {}){
    const params = new URLSearchParams(arg);
    return request(`/restaurants?${params.toString()}`);
}

export async function getRestaurant(restaurantId){
    return request(`/restaurants/${restaurantId}`)
}

export async function getRestaurantReviews(restaurantId, arg = {} ){
    const params = new URLSearchParams(arg);
    return request(`/restaurants/${restaurantId}/reviews?${params.toString()}`)
}

/**
 * 認証情報を付けてレビューをPostする
 * @param {number} restaurantId 
 * @param {*} record 
 * @param {string} getAccessToken 
 */
export async function postRestaurantReview(
    restaurantId,
    record,
    getAccessToken
  ) {
    // アクセストークンを取得する。取得メソッドは呼び出し元から渡す。
    const token = await getAccessToken({
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    });

    // 取得したトークンをAuthorizationヘッダーに追加して送信する
    return request(`/restaurants/${restaurantId}/reviews`, {
      body: JSON.stringify(record),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  }