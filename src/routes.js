import { CreateBot } from "./pages/create-bot";
import { Dashboard } from "./pages/dashboard";

export const routes = [
    {
        path: '/',
        component: <Dashboard />,
    },
    {
        path: '/create-bot',
        component: <CreateBot />,
    }
]