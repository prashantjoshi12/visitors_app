import SignUp from "../components/SignUp.vue"
import VisitorDashboard from "../components/VisitorDashboard.vue"
import ThanksPage from "../components/ThanksPage.vue"

const routes = [
    {
      path: "/",
      name: "Home",
      component: SignUp,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: VisitorDashboard,
    },
    {
        path: "/thanks",
        name: "thanks-page",
        component: ThanksPage,
      },
  ];
export default routes