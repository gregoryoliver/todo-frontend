import { FC, ReactNode } from "react";

type Props = {
    children: ReactNode
}

const Content: FC<Props> = ({ children }) => {
    return (
        <div className="w-full flex-1 px-4" style={{height: 'calc(100vh - 160px)'}}>
            <div className="mx-auto max-w-[736px] h-full relative pt-20 pb-8">
                {children}
            </div>
        </div>
    )
}

export default Content;