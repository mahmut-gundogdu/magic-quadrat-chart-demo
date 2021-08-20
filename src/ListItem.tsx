import React, { FC } from 'react'
import { CompanyModel } from './types/CompanyModel'

type ListItemProp = {
    company: CompanyModel;
    onDelete: () => void;
    onItemChange: (item: CompanyModel) => void
}
export const ListItem: FC<ListItemProp> = function ({ company, onDelete, onItemChange }) {

    const handleChange = (key:string) => (event: any) => {
        const newCompany = { ...company, [key]: event.target.value }
        onItemChange(newCompany)
    }

    return (
        <div className='list-item'>
            <div>
                <input type='text' value={company.label}
                    onChange={handleChange('label')} />
            </div>

            <div>
                <input type='number'
                 onChange={handleChange('vision')}
                value={company.vision} />
            </div>

            <div>
                <input type='text'
                     onChange={handleChange('ability')}
                value={company.ability} />
            </div>
            <div>
                <button onClick={onDelete} >Delete</button>
            </div>
        </div>
    )
}