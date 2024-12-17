import { FC, ReactNode } from "react";

type Props = {
    children: ReactNode
}

const Content: FC<Props> = ({ children }) => {
    return (
        <div className="w-full flex-1 px-4">
            <div className="mx-auto max-w-[736px] h-full">
                {children}
            </div>
        </div>
    )
}

export default Content;