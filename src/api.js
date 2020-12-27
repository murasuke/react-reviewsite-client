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

export async function postRestaurantReview(
    restaurantId,
    record,
    getAccessToken
  ) {
    const token = await getAccessToken({
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    });
    return request(`/restaurants/${restaurantId}/reviews`, {
      body: JSON.stringify(record),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  }