export default function Box(props) {
    return (
        <div id={props.id} className="h-[200px] w-full border border-solid rounded-lg flex-col shadow-md p-4 space-y-1.5 md:max-w-sm relative">
            {props.children}
            <i className="group fa-solid fa-code absolute top-2 right-4 hover:bg-zinc-100 p-1.5 rounded-full pointer-events-auto cursor-pointer">
                <span className="hidden group-hover:block absolute top-8 right-0 bg-zinc-100 p-1.5 text-xs font-sans text-black font-medium rounded-lg whitespace-nowrap">
                    Source code
                </span>
            </i>
        </div>
    )
}   