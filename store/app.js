export const state = () => ({
  authenticated: false,
  user_id: process.server ? '' : localStorage.getItem('track_eat_user_id'),
  user_email: process.server ? '' : localStorage.getItem('track_eat_user_email'),
  activities: [],
  meals: [],
});

export const actions = {
  loginUser(ctx, { authUser, claims }) {
    if (!authUser) {
      commit("logout");
    } else {
      commit("set_user", { authUser, claims });
    }
  },
};

export const mutations = {
  set_user(state, authUser) {
    const { uid, email } = authUser;
    state.user_id = uid;
    state.user_email = email;
    localStorage.setItem('track_eat_user_email', email);
    localStorage.setItem('track_eat_user_id', uid);
    state.authenticated = true;
  },
  logout(state) {
    state.user_id = '';
    state.user_email = '';
    localStorage.removeItem('track_eat_user_email');
    localStorage.removeItem('track_eat_user_id');
    state.authenticated = false;
  },
  setActivities(state, activities) {
    state.activities = activities;
  },
  setMeals(state, meals) {
    state.meals = meals;
  },
};
