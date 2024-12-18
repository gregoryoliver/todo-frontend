import clsx from "clsx"
import { FC } from "react"

type Props = {
    value?: string,
    onChange?: () => void
}

const ColorPanel: FC<Props> = ({
    value = "#FF3B30",
    onChange
}) => {
    const colors = [
        "#FF3B30",
        "#FF9500",
        "#FFCC00",
        "#34C759",
        "#007AFF",
        "#5856D6",
        "#AF52DE",
        "#FF2D55",
        "#A2845E"
    ]

    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor="color"
                className="text-[#4EA8DE] text-xs font-semibold"
            >
                Color
            </label>
            <div className="flex gap-3 flex-wrap">
            {
                    colors.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className={clsx(
                                    `w-12 h-12 rounded-full`,
                                    value === item && 'border-white border-2'
                                )}
                                style={{ backgroundColor: item }}
                            />
                    )
                })       
            }
            </div>
        </div>
    )
}

export default ColorPanel;