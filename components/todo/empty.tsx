import Image from "next/image"

const Empty = () => {
    return (
        <div className="border-t border-t-[#808080] flex flex-col w-full justify-center items-center py-12">
            <Image width={56} height={56} alt="No Image" src={"/assets/images/icon/icon-clipboard.svg"} />
            <h4 className="text-sm text-[#808080] font-semibold mt-3 mb-4">
                You do not have any tasks registered yet.
            </h4>
            <h5 className="text-xs text-[#808080]">Create tasks and organize your to-do items.</h5>
        </div>
    )
}

export default Empty;