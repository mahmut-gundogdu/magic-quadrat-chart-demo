import React, { FC } from "react"
import { ListItem } from "./ListItem"
import { CompanyModel } from "./types/CompanyModel"

type ListProps = {
    companies: CompanyModel[];
    onDelete: (index: number) => void;
    onItemChange: (item: CompanyModel, index: number) => void
}
export const List: FC<ListProps> = function ({ companies, onDelete, onItemChange }) {

    if (!companies) {
        return null
    }

    return (
        <div>
            <div className='header' >
                <span>
                    Label
                </span>
                <span>
                    Vision
                </span>
                <span>
                    Ability
                </span>
                <span>
                    Delete
                </span>
            </div>
            {
                companies.map((c, index) => (
                    <ListItem company={c}
                        key={c.label + index}
                        onItemChange={(item) => onItemChange(item, index)}
                        onDelete={() => onDelete(index)} />
                ))
            }
        </div>)
}


