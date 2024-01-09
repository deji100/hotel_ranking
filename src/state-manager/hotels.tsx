import { createSlice, current } from "@reduxjs/toolkit";

  const initialState = {
    index: 0,
    hotelSearch: "",
    hotels: [{id: 1, imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/1d/83/d2/intercontinental-lagos.jpg?w=1200&h=-1&s=1", name: "Lagos Continental Hotels", city: "Lagos", country: "Nigeria", address: "Plot 52, Kofo Abayomi St. Victoria Island, Lagos 101241 Nigeria"},

    {id: 2, imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/8b/a1/5e/presidential-suite.jpg?w=1100&h=-1&s=1", name: "Radisson Blu Anchorage Hotel, Lagos, V.I.", city: "Lagos", country: "Nigeria", address: "1A Ozumba Mbadiwe Road Victoria Island, Lagos 550104 Nigeria"},

    {id: 3, imgUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/486004930.jpg?k=3dea6860d8d75bbe007ef4cffd2e2d303f78f0c48ba9082a6a567587b00e56bc&o=&hp=1", name: "Hilton Niagara Falls/ Fallsview Hotel and Suites", city: "Niagara", country: "Canada", address: "6361 Fallsview Boulevard, L2G 3V9 Niagara Falls, Canada"},

    {id: 4, imgUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/430830622.jpg?k=0dbdcb59fdf796d45a33063ca769d734672ddfd8534356be3e6296f5e441c7b0&o=&hp=1", name: "Acqualina Resort & Residences", city: "Boulevard", country: "Canada", address: "6546 Fallsview Boulevard, L2G 3W2 Niagara Falls, Canada"},

    {id: 5, imgUrl: "https://travel.usnews.com/dims4/USNEWS/85e4c06/2147483647/resize/800x600%5E%3E/crop/800x600/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Facqualina_balcony_1.jpg", name: "Acqualina Resort & Residences", city: "Collins Ave", country: "USA", address: "17875 Collins Ave. Sunny Isles Beach, FL 33160-2718"},

    {id: 6, imgUrl: "https://travel.usnews.com/dims4/USNEWS/fb548cc/2147483647/resize/1200x800%5E%3E/crop/1200x800/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fpendryholl1.jpg", name: "Pendry West Hollywood", city: "Los Angeles", country: "USA", address: "8430 Sunset Boulevard, West Hollywood, Los Angeles, CA 90069, United States of America"}],
    filteredHotels: [],
  };
  
  const HotelSlice = createSlice({
    name: "hotel",
    initialState: initialState,
    reducers: {
        fetch_hotels_from_local: (state) => {
          const hotels = localStorage.getItem("hotels");
          let retrievedData
          if (hotels != null) {
            retrievedData = JSON.parse(hotels)
          }

          if (retrievedData?.length > 0) {
            state.hotels = [...retrievedData]
          }else {
            state.hotels = []
          }
        },

        add_new_hotel: (state, {payload}) => {
          const copied_hotels = current(state).hotels?.slice();
          const newHotel = {...payload?.data, id: payload?.id}

          if (copied_hotels?.length > 0) {
            state.hotels = [newHotel, ...copied_hotels]
          }else {
            state.hotels = [newHotel]
          }

          localStorage.setItem("hotels", JSON.stringify(state.hotels))
        },

        update_hotel: (state, {payload}) => {
          const copied_hotels = current(state).hotels.slice();
            const updated_hotel_list = copied_hotels.map(hotel => {
                if (hotel?.id === payload.id) {
                    return {...payload}
                }
                return hotel
            })

            state.hotels = [...updated_hotel_list]
            localStorage.setItem("hotels", JSON.stringify(state.hotels))
        },

        delete_hotel: (state, {payload}) => {
          const copied_hotels = current(state).hotels.slice();
          state.hotels = copied_hotels.filter(hotel => hotel?.id !== payload.id)
          localStorage.setItem("hotels", JSON.stringify(state.hotels))
        },

        update_hotel_search: (state, {payload}) => {
            state.hotelSearch = payload
        },

        filter_hotels: (state) => {
            const search = current(state).hotelSearch;
            const reg_obj = new RegExp(search, "i");
            const filtered_hotels = current(state).hotels.slice().filter(hotel => (
              reg_obj.test(hotel.name) ||
              reg_obj.test(hotel.city) ||
              reg_obj.test(hotel.country) ||
              reg_obj.test(hotel.address)
            ));

            // @ts-expect-error last resort after trying some options
            state.filteredHotels = filtered_hotels;
        }
    },
  });


export default HotelSlice.reducer;

export const {
  add_new_hotel,
  update_hotel,
  delete_hotel,
  update_hotel_search,
  fetch_hotels_from_local
} = HotelSlice.actions;