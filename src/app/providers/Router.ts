import { AboutPage } from '@pages/AboutPage/AboutPage';
import { HomePage } from '@pages/HomePage/HomePage';
import { LoginPage } from '@pages/LoginPage/LoginPage';
import { ProfilePage } from '@pages/ProfilePage/ProfilePage';
import { RegisterPage } from '@pages/RegisterPage/RegisterPage';
import { RulesPage } from '@pages/RulesPage/RulesPage';
import { ShopPage } from '@pages/ShopPage/ShopPage';

export const routes = [
    {
        name: "Главная",
        url: '/',
        component: HomePage,
    },
    {
        name: "О сервере",
        url: '/about',
        component: AboutPage,
    },
    {
        name: "Правила",
        url: '/rules',
        component: RulesPage,
    },
    {
        name: "Магазин",
        url: '/shop',
        component: ShopPage,
    },
    {
        name: "Личный кабинет",
        url: '/profile',
        component: ProfilePage,
    },
    {
        name: "Авторизация",
        url: '/auth/login',
        component: LoginPage,
    },
    {
        name: "Регистрация",
        url: '/register',
        component: RegisterPage,
    },
] as const;
