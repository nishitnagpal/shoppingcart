
import { FunctionComponent } from 'react'

import classes from './CurrencyFormatter.module.scss'


interface Props {
    amount: number
}

export const CurrencyFormatter: FunctionComponent<Props> = ({ amount }) => {
    const formattedAmount = amount.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'EUR'
    })

    return <span className={classes.currency}>{formattedAmount}</span>
}
