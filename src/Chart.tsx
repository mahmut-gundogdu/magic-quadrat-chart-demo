
import React, { FC, SyntheticEvent, useState } from 'react'
import { ChartItem } from './ChartItem'
import { CompanyModel } from './types/CompanyModel'

type ChartProp = {
	companies: CompanyModel[],
	onItemChange: (item: CompanyModel, index: number) => void
}
const containerSize = 400;
export const Chart: FC<ChartProp> = function ({ companies, onItemChange }) {
 
	const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null)
	const drag = (syntheticEvent: SyntheticEvent) => {

		if (selectedItemIndex == null) {
			return
		}
		const evt = syntheticEvent.nativeEvent as any
 
		const cxVal = coordinatetoPercentX(evt.layerX, containerSize)
		const cyVal = coordinatetoPercentY(evt.layerY, containerSize)


		if (selectedItemIndex === null || cxVal === null || cyVal === null) {
			return;
		}
		const company = companies[selectedItemIndex]
		const newItem = { ...company, vision: cxVal, ability: cyVal }
		onItemChange(newItem, selectedItemIndex)
 
	}
	const endDrag = () => {	
		setSelectedItemIndex(null)
	}


	return (<div className='chart-container'>

		<div>
			<svg width={containerSize} height={containerSize}
				onMouseMove={drag}
				onMouseUp={endDrag}
			>
				<text x="25%" y="24" dominantBaseline="middle" textAnchor="middle">Challanger</text>
				<text x="75%" y="24" dominantBaseline="middle" textAnchor="middle">Leaders</text>
				<text x="25%" y="376" dominantBaseline="middle" textAnchor="middle">Niche Players</text>
				<text x="75%" y="376" dominantBaseline="middle" textAnchor="middle">Visionaies</text>

				<line x1="0" y1="200" x2="400" y2="200" className='line' />
				<line x1="200" y1="0" x2="200" y2="400" className='line' />

				{
					companies.map((c, index) =>
						<ChartItem
							 
							onItemSelected={() => {
								setSelectedItemIndex(index)
							}}
							key={c.label + index}
							ability={c.ability}
							label={c.label}
							vision={c.vision} />
					)
				}

			</svg>
		</div>
	</div>)
}




function coordinatetoPercentX(value: number, containerSize: number) {
	return value * 100 / containerSize
}

function coordinatetoPercentY(value: number, containerSize: number) {
const v = containerSize - value

	return v * 100 / containerSize
}