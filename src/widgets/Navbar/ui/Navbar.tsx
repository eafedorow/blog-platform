import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import i18n from 'shared/config/i18n/i18n';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <ThemeSwitcher />
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                {i18n.t('main-page-link')}
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                {i18n.t('about-page-link')}
            </AppLink>
        </div>
    </div>
);
