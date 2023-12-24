import {
  getFromLocalStorage,
  setToLocalStorage,
} from "./../../../utils/local-storage";
import { api } from "../api";
import { tagTypes } from "../tagsType";

const AUTH_URL = "/users";

export const authAPi = api.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: loginData,
      }),
      onQueryStarted: async (loginData, { dispatch, queryFulfilled }) => {
        const response = await queryFulfilled;
        console.log(response, "response of login");
        const accessToken = response.data.data.accessToken;
        setToLocalStorage("user", accessToken);
      },
    }),
    userRegister: build.mutation({
      query: (registerData) => {
        console.log(registerData, "rrrrrrrr");
        return {
          url: `${AUTH_URL}/registration`,
          method: "POST",
          body: registerData,
        };
      },
      onQueryStarted: async (registerData, { dispatch, queryFulfilled }) => {
        const response = await queryFulfilled;
        const accessToken = response.data.data.accessToken;
        const setToLCStorage = setToLocalStorage("user", accessToken);
        // console.log(setToLCStorage);
      },
    }),
    userProfile: build.query({
      query: () => {
        return {
          url: `${AUTH_URL}/profile`,
          method: "GET",
          headers: {
            Authorization: `${getFromLocalStorage("user")}`,
          },
        };
      },
    }),
    // ! change password
    changePassword: build.mutation({
      query: (passwordData) => ({
        url: `${AUTH_URL}/change-password`,
        method: "PATCH",
        body: passwordData,
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
    }),
    getAllUsers: build.query({
      query: (data) => ({
        url: `${AUTH_URL}/all-users`,
        method: "GET",
        params: data,
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserRegisterMutation,
  useUserProfileQuery,
  useChangePasswordMutation,
  useGetAllUsersQuery,
} = authAPi;
