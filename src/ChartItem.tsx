import {
    FC,
    useMemo,

} from "react"





type ChartItemProp = {
    vision: number;
    ability: number;
    onItemSelected: () => void
    label:string;
}
const containerSize = 400;
export const ChartItem: FC<ChartItemProp> = function ({ vision, ability, onItemSelected, label }) {

    const startDrag = (evt: any) => {
        console.log('item', evt.target)
        onItemSelected()
    }

    const { cx, cy } = useMemo(() => {
        const x = (containerSize * vision / 100)
        const y = containerSize - (containerSize * ability / 100)
        console.log({ x, y })

        return { cx: x, cy: y }

    }, [vision, ability])

    return (

        <g>
            <circle
                onMouseDown={startDrag}
                className="chart-item"
                cx={cx} cy={cy} r="7.5"
                fill="#3878A2" />


            <text x={cx + 15} y={cy + 15}>{label}</text>
        </g>



    )
}
