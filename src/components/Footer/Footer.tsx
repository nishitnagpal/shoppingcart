﻿
import { FunctionComponent } from 'react'
import classes from "./Footer.module.scss"
import packageJson from '../../../package.json'

export const Footer: FunctionComponent = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={classes.footer} data-cy="footer">
            <ul>
                <li className={classes.footerLinks}>
                    <a
                        href="https://github.com/nishitnagpal/shoppingcart"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cy="githubLink"
                    >
                        Github
                    </a>
                </li>
                <li className={classes.footerCopyrights}>
                    © {packageJson.author} {currentYear}. All rights reserved.
                </li>
                <li>
                    <div className={classes.version}>v.{packageJson.version}</div>
                </li>
            </ul>
        </footer>
    )
}
